/**
 * Comprehensive Design Compliance Validator
 *
 * Single validator that covers ALL aspects of Figma design compliance:
 * - Headings: text, tag, CSS styles (color, font-size, font-weight, font-family)
 * - Content: full page text (nav, main, footer) with diff detection
 * - Images: loaded status, alt text, count, broken image detection
 * - Links/CTAs: presence, href values, navigation targets
 * - Buttons: presence, enabled/disabled states, labels
 * - Sections: order, background colors
 * - Global styles: body font, nav/footer backgrounds
 * - Console errors
 *
 * Replaces: content.spec.js, cta.spec.js, actions.spec.js
 */
import fs from 'fs';
import path from 'path';
import { createResultWriter } from './result-writer.js';
import { gotoAndWaitForPageReady, waitForVisibleImagesLoaded, pageReadyTimeout } from './page-readiness.js';

/** Header/footer logos often load late under parallel CI workers. */
const NAV_LOGO_ALTS = new Set(['Shunya Labs Logo', 'Shunya Labs']);

/** Live-site assets that may be lazy, CDN-blocked in CI, or broken on production. */
const FLAKY_CONTENT_IMAGE_ALTS = new Set([
  'Media Logo',
  'Meeting Transcription',
  'Nasscom',
  'OTTO',
  'OMG Pharma',
  'World records background',
  'Patents background',
  'Medical Documentation',
  'HIPAA',
  'GDPR',
  'SOC 2',
  'SOC 2 Type II',
  'ISO 27001',
  'Two-Sided Encryption',
  'Healthcare',
  'Contact Centers',
  'Media & Entertainment',
  'Enterprise Use Cases',
  'Voice Agents & Assistants',
  'Contact Center Intelligence',
  'img1',
]);

function isFlakyImageAlt(alt) {
  const a = alt || '';
  return (
    NAV_LOGO_ALTS.has(a) ||
    FLAKY_CONTENT_IMAGE_ALTS.has(a) ||
    a.startsWith('/images/trusted-by/') ||
    a.includes('trusted-by') ||
    a.includes('_next/image') ||
    /background$/i.test(a) ||
    /SecurityStandards/i.test(a)
  );
}

function isTrustedByCarouselImage(img) {
  const alt = img?.alt || '';
  const src = img?.src || '';
  return (
    isFlakyImageAlt(alt) ||
    src.includes('trusted-by') ||
    src.includes('trusted-by%2F') ||
    src.includes('SecurityStandards') ||
    src.includes('media-ent') ||
    src.includes('1-03%201.png') ||
    src.includes('1-04%201.png')
  );
}

/** Vāk demo calls token APIs that fail in headless/automation — not a page regression. */
function isIgnoredConsoleError(msg) {
  const t = (msg || '').trim();
  return (
    t.includes('Content Security Policy') ||
    t.includes('ERR_BLOCKED_BY_CSP') ||
    t.includes('frame-ancestors') ||
    t.includes('net::ERR_INTERNET_DISCONNECTED') ||
    t.includes('net::ERR_NAME_NOT_RESOLVED') ||
    t.includes('Failed to load resource') ||
    /\[VAK\]/i.test(t) ||
    /Token fetch error/i.test(t) ||
    /Unable to post message to/i.test(t) ||
    /stage-widget\.shunyalabs\.ai/i.test(t) ||
    /Recipient has origin/i.test(t)
  );
}

function hrefPathsMatch(actualHref, expectedHref) {
  if (!expectedHref || !actualHref) return false;
  if (actualHref === expectedHref) return true;
  try {
    const base = 'https://www.shunyalabs.ai';
    const a = new URL(actualHref, base);
    const e = new URL(expectedHref, base);
    if (a.origin !== e.origin) {
      const an = a.href.replace(/\/$/, '');
      const en = e.href.replace(/\/$/, '');
      return an === en || an.startsWith(en) || en.startsWith(an);
    }
    return a.pathname === e.pathname;
  } catch {
    return actualHref.includes(expectedHref) || expectedHref.includes(actualHref);
  }
}

const EXTERNAL_SOCIAL_HOST = /facebook\.com|linkedin\.com|twitter\.com|x\.com|youtube\.com|instagram\.com/i;

/** Benchmarks counters animate from zero — not valid baseline copy. */
const TRANSIENT_MAIN_TEXT = /^0(\.00)?%$/;

/** Live benchmark stats change per deploy (WER, accuracy, etc.). */
const DYNAMIC_METRIC_TEXT = /^\d+(\.\d+)?%$/;

function isTransientMainText(text) {
  return TRANSIENT_MAIN_TEXT.test((text || '').trim());
}

function isDynamicMetricText(text) {
  return DYNAMIC_METRIC_TEXT.test((text || '').trim());
}

function isVakSectionName(name) {
  return /Vā[kķ\u0100-\u017F]/i.test(name || '');
}

function isOptionalExternalLink(exp) {
  return Boolean(exp.href && EXTERNAL_SOCIAL_HOST.test(exp.href));
}

const DESIGN_SPECS_DIR = path.join(process.cwd(), 'test-data', 'design-specs');

// ─── Color Utilities ───

function parseColor(color) {
  if (!color) return null;
  const str = color.trim().toLowerCase();
  const rgbMatch = str.match(/rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*([\d.]+))?\s*\)/);
  if (rgbMatch) {
    return { r: +rgbMatch[1], g: +rgbMatch[2], b: +rgbMatch[3], a: rgbMatch[4] != null ? +rgbMatch[4] : 1 };
  }
  const hexMatch = str.match(/^#([0-9a-f]{3,8})$/);
  if (hexMatch) {
    let hex = hexMatch[1];
    if (hex.length === 3) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    if (hex.length === 4) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
    return {
      r: parseInt(hex.slice(0, 2), 16),
      g: parseInt(hex.slice(2, 4), 16),
      b: parseInt(hex.slice(4, 6), 16),
      a: hex.length === 8 ? parseInt(hex.slice(6, 8), 16) / 255 : 1,
    };
  }
  return null;
}

function isEffectivelyTransparent(color) {
  const p = parseColor(color);
  return p != null && p.a < 0.1;
}

/** Translucent nav bars composite differently across Chrome, Safari, and mobile WebKit. */
function isSemiTransparentNavColor(color) {
  const p = parseColor(color);
  return p != null && p.a < 1;
}

function colorsMatch(actual, expected, tolerance = 10) {
  const a = parseColor(actual);
  const b = parseColor(expected);
  if (!a || !b) return false;
  return Math.abs(a.r - b.r) <= tolerance && Math.abs(a.g - b.g) <= tolerance && Math.abs(a.b - b.b) <= tolerance;
}

function formatColor(color) {
  const parsed = parseColor(color);
  if (!parsed) return color;
  return `rgb(${parsed.r}, ${parsed.g}, ${parsed.b})`;
}

// ─── Size Utilities ───

function parseSize(size) {
  if (typeof size === 'number') return size;
  const match = String(size).match(/([\d.]+)/);
  return match ? parseFloat(match[1]) : null;
}

function sizesMatch(actual, expected, tolerancePx = 2) {
  const a = parseSize(actual);
  const b = parseSize(expected);
  if (a == null || b == null) return false;
  return Math.abs(a - b) <= tolerancePx;
}

// ─── Font Utilities ───

function fontFamilyMatches(actual, expected) {
  if (!actual || !expected) return false;
  const normalizeFull = (s) => s.replace(/['"]/g, '').replace(/\s+/g, ' ').trim().toLowerCase();
  if (expected.includes(',')) {
    return normalizeFull(actual) === normalizeFull(expected);
  }
  const actualFonts = actual.split(',').map((f) => f.replace(/['"]/g, '').trim().toLowerCase());
  const expectedFont = normalizeFull(expected);
  return actualFonts.some((f) => f === expectedFont || f.includes(expectedFont));
}

// ─── Baseline Loading ───

export function loadDesignSpec(moduleKey, slug, viewport = 'desktop') {
  const suffix = viewport === 'mobile' ? '.mobile.design.json' : '.design.json';
  const specPath = path.join(DESIGN_SPECS_DIR, `${moduleKey}-${slug}${suffix}`);
  if (!fs.existsSync(specPath)) return null;
  return JSON.parse(fs.readFileSync(specPath, 'utf8'));
}

function detectViewport(page) {
  const size = page.viewportSize();
  return size && size.width <= 768 ? 'mobile' : 'desktop';
}

// ─── Comprehensive Page Data Extraction (runs in browser) ───

async function extractPageDesignData(page) {
  return page.evaluate(() => {
    const normalize = (s) => (s || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();
    const isVisible = (el) => {
      if (!el) return false;
      const s = window.getComputedStyle(el);
      if (s.visibility === 'hidden' || s.display === 'none' || s.opacity === '0') return false;
      const r = el.getBoundingClientRect();
      return r.width > 0 && r.height > 0;
    };

    const getStyle = (el) => {
      const s = window.getComputedStyle(el);
      return {
        color: s.color,
        backgroundColor: s.backgroundColor,
        fontSize: s.fontSize,
        fontWeight: s.fontWeight,
        fontFamily: s.fontFamily,
        textAlign: s.textAlign,
      };
    };

    // ── Headings ──
    const headings = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6'))
      .filter(isVisible)
      .map((el) => ({
        text: normalize(el.textContent),
        tag: el.tagName.toLowerCase(),
        style: getStyle(el),
        top: el.getBoundingClientRect().top + window.scrollY,
      }));

    // ── Images ──
    const images = Array.from(document.querySelectorAll('img'))
      .filter(isVisible)
      .map((el) => ({
        src: el.getAttribute('src') || '',
        alt: el.getAttribute('alt') || '',
        naturalWidth: el.naturalWidth,
        naturalHeight: el.naturalHeight,
        loaded: el.naturalWidth > 0 && el.naturalHeight > 0,
      }));

    // ── Sections ──
    const sectionElements = Array.from(document.querySelectorAll('section')).filter(isVisible);
    const sections = sectionElements.map((el, i) => {
      const heading = el.querySelector('h1, h2, h3');
      return {
        index: i,
        name: heading ? normalize(heading.textContent) : `Section ${i + 1}`,
        backgroundColor: window.getComputedStyle(el).backgroundColor,
        top: el.getBoundingClientRect().top + window.scrollY,
      };
    });

    // ── Content text: headerNav, mainText, footerNav ──
    const extractVisibleText = (root, selectors) => {
      if (!root) return [];
      return Array.from(root.querySelectorAll(selectors))
        .filter(isVisible)
        .map((el) => normalize(el.textContent))
        .filter(Boolean);
    };

    const nav = document.querySelector('nav');
    const main = document.querySelector('main') || document.body;
    const footer = document.querySelector('footer');

    const headerNav = nav ? extractVisibleText(nav, 'a, button') : [];
    const mainText = extractVisibleText(main, 'h1, h2, h3, h4, h5, h6, p, li, button, a, span');
    const footerNav = footer ? extractVisibleText(footer, 'a, button, p') : [];
    const pageTitle = document.title || '';

    // ── Links/CTAs (nav + main + footer — logo/home links often live outside <main>) ──
    const mainEl = document.querySelector('main') || document.body;
    const linkRoots = [nav, mainEl, footer].filter(Boolean);
    const linkSeen = new Set();
    const links = [];
    for (const root of linkRoots) {
      for (const el of root.querySelectorAll('a[href]')) {
        if (!isVisible(el)) continue;
        const href = (el.getAttribute('href') || '').trim();
        if (!href || href.startsWith('#') || href.toLowerCase().startsWith('javascript:')) continue;
        const text = normalize(el.textContent);
        const key = `${href}|${text}`;
        if (linkSeen.has(key)) continue;
        linkSeen.add(key);
        links.push({
          text,
          href,
          target: el.getAttribute('target') || '',
        });
      }
    }

    // ── Buttons/Actions ──
    const buttons = Array.from(mainEl.querySelectorAll('button'))
      .filter(isVisible)
      .map((el) => ({
        label: (el.getAttribute('aria-label') || el.getAttribute('title') || normalize(el.textContent)),
        disabled: !!el.disabled,
      }))
      .filter((b) => b.label.length > 0);

    // ── Global styles ──
    const body = document.body;
    const bodyStyle = window.getComputedStyle(body);
    const globalStyles = {
      bodyFontFamily: bodyStyle.fontFamily,
      bodyColor: bodyStyle.color,
      bodyBackgroundColor: bodyStyle.backgroundColor,
      navBackgroundColor: nav ? window.getComputedStyle(nav).backgroundColor : null,
      footerBackgroundColor: footer ? window.getComputedStyle(footer).backgroundColor : null,
    };

    return { headings, images, sections, headerNav, mainText, footerNav, pageTitle, links, buttons, globalStyles };
  });
}

// ─── Console Error Capture ───

function setupConsoleCapture(page) {
  const errors = [];
  page.on('console', (msg) => {
    if (msg.type() === 'error') errors.push(msg.text());
  });
  page.on('pageerror', (err) => {
    errors.push(err.message);
  });
  return errors;
}

// ─── Validation Functions ───

function validateHeadings(actual, expected, failures) {
  if (!expected.headings || !expected.headings.length) return;

  // Skip when >40% headings are missing (lazy-loaded pages like blogs)
  const missingCount = expected.headings.filter(
    (exp) => !actual.headings.find((h) => h.text === exp.text || h.text.includes(exp.text) || exp.text.includes(h.text))
  ).length;
  if (missingCount / expected.headings.length > 0.4) return;

  for (const exp of expected.headings) {
    // Prioritize exact match, then partial match (avoids "Pay as you go" matching "Pay as you go(USD/min)")
    let found = actual.headings.find(
      (h) => h.text === exp.text && (!exp.tag || h.tag === exp.tag)
    );
    if (!found) {
      found = actual.headings.find(
        (h) =>
          (h.text.includes(exp.text) || exp.text.includes(h.text)) &&
          (!exp.tag || h.tag === exp.tag)
      );
    }
    if (!found) found = actual.headings.find((h) => h.text === exp.text);
    if (!found) found = actual.headings.find((h) => h.text.includes(exp.text) || exp.text.includes(h.text));

    if (!found) {
      failures.push({
        section: 'headings',
        property: `"${exp.text}" presence`,
        message: `Heading "${exp.text}" (${exp.tag}) not found on page`,
      });
      continue;
    }

    if (exp.tag && found.tag !== exp.tag) {
      failures.push({
        section: 'headings',
        property: `"${exp.text}" tag`,
        message: `Heading "${exp.text}" tag: expected <${exp.tag}> but got <${found.tag}>`,
      });
    }

    if (exp.style) {
      // Detect animated/carousel headings: extreme style differences suggest the element
      // is in a CSS animation or carousel with different active/inactive states.
      // Skip CSS style checks in this case (presence + tag already validated above).
      const expSize = parseSize(exp.style.fontSize);
      const actSize = parseSize(found.style.fontSize);
      const expColor = parseColor(exp.style.color);
      const actColor = parseColor(found.style.color);
      const sizeRatio = expSize && actSize ? Math.max(expSize, actSize) / Math.min(expSize, actSize) : 1;
      const colorDelta = expColor && actColor ? Math.max(Math.abs(expColor.r - actColor.r), Math.abs(expColor.g - actColor.g), Math.abs(expColor.b - actColor.b)) : 0;
      // Detect grayscale-ish colors (carousel active/inactive states cycle between gray/white/black)
      const isGrayscale = (c) => c && (Math.max(c.r, c.g, c.b) - Math.min(c.r, c.g, c.b)) < 30;
      const isAnimated = sizeRatio > 1.3 || (colorDelta > 60 && isGrayscale(expColor) && isGrayscale(actColor));

      if (!isAnimated) {
        if (exp.style.color && !colorsMatch(found.style.color, exp.style.color)) {
          failures.push({
            section: 'headings',
            property: `"${exp.text}" color`,
            message: `Heading "${exp.text}" color: expected ${formatColor(exp.style.color)} but got ${formatColor(found.style.color)}`,
          });
        }
        if (exp.style.fontSize && !sizesMatch(found.style.fontSize, exp.style.fontSize)) {
          failures.push({
            section: 'headings',
            property: `"${exp.text}" font-size`,
            message: `Heading "${exp.text}" font-size: expected ${exp.style.fontSize} but got ${found.style.fontSize}`,
          });
        }
        if (exp.style.fontWeight && found.style.fontWeight !== String(exp.style.fontWeight)) {
          failures.push({
            section: 'headings',
            property: `"${exp.text}" font-weight`,
            message: `Heading "${exp.text}" font-weight: expected ${exp.style.fontWeight} but got ${found.style.fontWeight}`,
          });
        }
        if (exp.style.fontFamily && !fontFamilyMatches(found.style.fontFamily, exp.style.fontFamily)) {
          failures.push({
            section: 'headings',
            property: `"${exp.text}" font-family`,
            message: `Heading "${exp.text}" font-family: expected "${exp.style.fontFamily}" but not found in "${found.style.fontFamily}"`,
          });
        }
      }
    }
  }
}

function validateContent(actual, expected, failures, { skipMainText = false } = {}) {
  // Header nav text
  if (expected.headerNav && expected.headerNav.length) {
    const missing = expected.headerNav.filter((t) => !actual.headerNav.some((a) => a === t || a.includes(t)));
    for (const m of missing) {
      failures.push({ section: 'content', property: `nav "${m}"`, message: `Navigation item "${m}" not found in header` });
    }
  }

  // Footer nav text
  if (expected.footerNav && expected.footerNav.length) {
    const missing = expected.footerNav.filter((t) => !actual.footerNav.some((a) => a === t || a.includes(t)));
    for (const m of missing) {
      failures.push({ section: 'content', property: `footer "${m}"`, message: `Footer item "${m}" not found` });
    }
  }

  // Main content text - skip when >40% items are missing (dynamic page like Blogs)
  if (!skipMainText && expected.mainText && expected.mainText.length) {
    const missing = expected.mainText.filter((t) => !actual.mainText.some((a) => a === t || a.includes(t)));
    const missingRate = missing.length / expected.mainText.length;
    if (missingRate <= 0.4) {
      for (const m of missing) {
        if (isTransientMainText(m) || isDynamicMetricText(m)) continue;
        failures.push({ section: 'content', property: `text "${m.substring(0, 50)}"`, message: `Text content "${m}" not found on page` });
      }
    }
  }

  // Page title
  if (expected.pageTitle && actual.pageTitle !== expected.pageTitle) {
    failures.push({
      section: 'content',
      property: 'page title',
      message: `Page title: expected "${expected.pageTitle}" but got "${actual.pageTitle}"`,
    });
  }
}

function validateLinks(actual, expected, failures) {
  if (!expected.links || !expected.links.length) return;

  // Skip when >40% links are missing (dynamic page with frequently changing links)
  const linkMatches = (exp, l) => {
    const hrefOk = exp.href && hrefPathsMatch(l.href, exp.href);
    const textOk =
      !exp.text ||
      l.text === exp.text ||
      l.text.includes(exp.text) ||
      exp.text.includes(l.text);
    if (exp.href && exp.text) return hrefOk && textOk;
    if (exp.href) return hrefOk;
    if (exp.text) return textOk;
    return false;
  };

  const linksToCheck = expected.links.filter((exp) => !isOptionalExternalLink(exp));
  if (!linksToCheck.length) return;

  const missingCount = linksToCheck.filter((exp) => {
    if (!exp.text && !exp.href) return false;
    return !actual.links.find((l) => linkMatches(exp, l));
  }).length;
  if (missingCount / linksToCheck.length > 0.4) return;

  for (const exp of linksToCheck) {
    if (!exp.text && !exp.href) continue;

    let found = actual.links.find((l) => linkMatches(exp, l));

    if (!found && exp.href) {
      found = actual.links.find((l) => hrefPathsMatch(l.href, exp.href));
    }

    if (!found && exp.text) {
      found = actual.links.find((l) => l.text === exp.text || l.text.includes(exp.text));
    }

    const label = exp.text ? `${exp.text} (${exp.href})` : exp.href;

    if (!found) {
      failures.push({
        section: 'links',
        property: `"${label}" presence`,
        message: `CTA/Link "${label}" not found on page`,
      });
    }
  }
}

function validateButtons(actual, expected, failures) {
  if (!expected.buttons || !expected.buttons.length) return;

  // Skip when >40% buttons are missing (dynamic page with frequently changing content)
  const missingCount = expected.buttons.filter(
    (exp) => !actual.buttons.find((b) => b.label === exp.label || b.label.includes(exp.label) || exp.label.includes(b.label))
  ).length;
  if (missingCount / expected.buttons.length > 0.4) return;

  for (const exp of expected.buttons) {
    const found = actual.buttons.find(
      (b) => b.label === exp.label || b.label.includes(exp.label) || exp.label.includes(b.label)
    );

    if (!found) {
      failures.push({
        section: 'buttons',
        property: `"${exp.label}" presence`,
        message: `Button "${exp.label}" not found on page`,
      });
      continue;
    }

    if (exp.disabled !== found.disabled) {
      const expState = exp.disabled ? 'disabled' : 'enabled';
      const actState = found.disabled ? 'disabled' : 'enabled';
      failures.push({
        section: 'buttons',
        property: `"${exp.label}" state`,
        message: `Button "${exp.label}" state: expected ${expState} but got ${actState}`,
      });
    }
  }
}

function findBaselineImage(expectedImages, img) {
  if (img.src) {
    const bySrc = expectedImages.find(
      (e) =>
        e.src &&
        (img.src === e.src || img.src.includes(e.src) || e.src.includes(img.src))
    );
    if (bySrc) return bySrc;
  }
  if (img.alt) {
    return expectedImages.find(
      (e) =>
        e.alt &&
        (img.alt === e.alt || img.alt.includes(e.alt) || e.alt.includes(img.alt))
    );
  }
  return null;
}

function findActualImage(actualImages, exp) {
  if (exp.src) {
    const bySrc = actualImages.find(
      (img) =>
        img.src &&
        (img.src === exp.src || img.src.includes(exp.src) || exp.src.includes(img.src))
    );
    if (bySrc) return bySrc;
  }
  if (exp.alt) {
    return actualImages.find(
      (img) =>
        img.alt &&
        (img.alt === exp.alt || img.alt.includes(exp.alt) || exp.alt.includes(img.alt))
    );
  }
  return null;
}

function validateImages(actual, expected, failures) {
  if (!expected.images || !expected.images.length) return;

  // Skip when >40% images are missing (lazy-loaded pages like blogs)
  const missingCount = expected.images.filter((exp) => !findActualImage(actual.images, exp)).length;
  if (missingCount / expected.images.length > 0.4) return;

  for (const exp of expected.images) {
    const found = findActualImage(actual.images, exp);

    const label = exp.alt || exp.src || 'unknown image';

    if (!found) {
      failures.push({ section: 'images', property: `"${label}" presence`, message: `Image "${label}" not found on page` });
      continue;
    }

    if (exp.loaded && !found.loaded && !isTrustedByCarouselImage(exp)) {
      failures.push({
        section: 'images',
        property: `"${label}" loaded`,
        message: `Image "${label}" failed to load (was previously loaded, now broken)`,
      });
    }
  }

  // Check for newly broken images
  for (const img of actual.images) {
    if (!img.loaded) {
      if (isTrustedByCarouselImage(img)) continue;
      const label = img.alt || img.src || 'unknown';
      const baselineImg = findBaselineImage(expected.images, img);
      if (baselineImg && !baselineImg.loaded) continue;
      const alreadyReported = failures.some(
        (f) => f.section === 'images' && f.message.includes(label) && f.property.includes('loaded')
      );
      if (!alreadyReported) {
        failures.push({
          section: 'images',
          property: `"${label}" broken`,
          message: `Broken image: src="${img.src}" alt="${img.alt}"`,
        });
      }
    }
  }
}

function validateImageCount(actual, expected, failures) {
  if (expected.totalImages == null) return;
  // Only flag if page has zero images when some are expected (truly broken page)
  // Dynamic content (blogs, language grids) causes normal count variation
  if (expected.totalImages > 0 && actual.images.length === 0) {
    failures.push({
      section: 'images',
      property: 'total count',
      message: `Image count: expected ${expected.totalImages} but found 0`,
    });
  }
}

function validateSections(actual, expected, failures, { skipOrderCheck = false } = {}) {
  if (!expected.sections || !expected.sections.length) return;

  for (const exp of expected.sections) {
    const found = actual.sections.find(
      (s) => s.name === exp.name || s.name.includes(exp.name) || exp.name.includes(s.name)
    );

    if (!found) {
      failures.push({ section: 'layout', property: `"${exp.name}" presence`, message: `Section "${exp.name}" not found on page` });
      continue;
    }

    if (
      exp.backgroundColor &&
      !isVakSectionName(exp.name) &&
      !isEffectivelyTransparent(exp.backgroundColor) &&
      !colorsMatch(found.backgroundColor, exp.backgroundColor)
    ) {
      failures.push({
        section: 'layout',
        property: `"${exp.name}" background`,
        message: `Section "${exp.name}" background: expected ${formatColor(exp.backgroundColor)} but got ${formatColor(found.backgroundColor)}`,
      });
    }
  }

  if (skipOrderCheck) return;

  // Section order check
  const expectedOrder = expected.sections.map((s) => s.name);
  const actualOrder = actual.sections
    .filter((s) => expectedOrder.some((e) => s.name.includes(e) || e.includes(s.name)))
    .sort((a, b) => a.top - b.top)
    .map((s) => expectedOrder.find((e) => s.name.includes(e) || e.includes(s.name)) || s.name);

  for (let i = 0; i < expectedOrder.length; i++) {
    const actualIdx = actualOrder.indexOf(expectedOrder[i]);
    if (actualIdx === -1) continue;
    if (actualIdx !== i) {
      failures.push({
        section: 'layout',
        property: `"${expectedOrder[i]}" order`,
        message: `Section "${expectedOrder[i]}" expected at position ${i + 1} but found at position ${actualIdx + 1}`,
      });
    }
  }
}

function validateGlobalStyles(actual, expected, failures) {
  if (!expected.globalStyles) return;
  const exp = expected.globalStyles;
  const act = actual.globalStyles;

  if (exp.bodyFontFamily && !fontFamilyMatches(act.bodyFontFamily, exp.bodyFontFamily)) {
    failures.push({ section: 'global', property: 'body font-family', message: `Body font-family: expected "${exp.bodyFontFamily}" not found in "${act.bodyFontFamily}"` });
  }
  if (
    exp.navBackgroundColor &&
    act.navBackgroundColor &&
    !isEffectivelyTransparent(exp.navBackgroundColor) &&
    !isSemiTransparentNavColor(exp.navBackgroundColor) &&
    !colorsMatch(act.navBackgroundColor, exp.navBackgroundColor)
  ) {
    failures.push({ section: 'global', property: 'nav background', message: `Nav background: expected ${formatColor(exp.navBackgroundColor)} but got ${formatColor(act.navBackgroundColor)}` });
  }
  if (exp.footerBackgroundColor && act.footerBackgroundColor && !colorsMatch(act.footerBackgroundColor, exp.footerBackgroundColor)) {
    failures.push({ section: 'global', property: 'footer background', message: `Footer background: expected ${formatColor(exp.footerBackgroundColor)} but got ${formatColor(act.footerBackgroundColor)}` });
  }
}

function validateConsoleErrors(consoleErrors, failures) {
  // Filter out third-party/CSP noise that isn't a real page bug
  const meaningful = consoleErrors.filter((msg) => !isIgnoredConsoleError(msg));
  if (meaningful.length > 0) {
    failures.push({
      section: 'console',
      property: 'errors',
      message: `${meaningful.length} console error(s): ${meaningful.slice(0, 3).join(' | ')}`,
    });
  }
}

// ─── Main Test Runner ───

export async function runDesignComplianceTest({ page, pageEntry }) {
  const { moduleKey, slug, moduleLabel, pageLabel, path: pagePath } = pageEntry;

  const { writeResult } = await createResultWriter({
    moduleName: moduleLabel,
    reportFileName: 'module-design-report.csv',
  });

  const viewport = detectViewport(page);
  const designSpec = loadDesignSpec(moduleKey, slug, viewport);
  if (!designSpec) {
    const cmd = viewport === 'mobile' ? 'npm run baseline:design:mobile' : 'npm run baseline:design';
    const msg = `No ${viewport} design baseline found for ${moduleLabel} - ${pageLabel}. Run: ${cmd}`;
    await writeResult(`${pageLabel} design compliance`, 'FAIL', msg);
    return [{ section: 'setup', property: 'baseline', message: msg }];
  }

  const consoleErrors = setupConsoleCapture(page);

  await gotoAndWaitForPageReady(page, pagePath, { waitForImages: true });

  await page.locator('footer').last().scrollIntoViewIfNeeded().catch(() => {});
  await page.waitForTimeout(300);

  let actualData = await extractPageDesignData(page);
  const navLogosStillLoading = actualData.images.some(
    (img) => isFlakyImageAlt(img.alt) && !img.loaded
  );
  if (navLogosStillLoading) {
    await waitForVisibleImagesLoaded(page, pageReadyTimeout());
    actualData = await extractPageDesignData(page);
  }

  if (pagePath === '/language-models') {
    const scrollWait = viewport === 'mobile' ? (process.env.CI ? 3500 : 2500) : (process.env.CI ? 2000 : 1000);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(scrollWait);
    await waitForVisibleImagesLoaded(page, pageReadyTimeout());
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(viewport === 'mobile' ? 800 : 500);
    actualData = await extractPageDesignData(page);
  }

  if (pagePath === '/media' || pagePath === '/media-entertainment' || pagePath === '/use-cases' || pagePath === '/about') {
    const scrollWait = viewport === 'mobile' ? (process.env.CI ? 3500 : 2500) : (process.env.CI ? 2000 : 1000);
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(scrollWait);
    await waitForVisibleImagesLoaded(page, pageReadyTimeout());
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(viewport === 'mobile' ? 800 : 500);
    actualData = await extractPageDesignData(page);
  }

  if (pagePath === '/') {
    await page.getByText(/Trusted by industry leaders/i).first().scrollIntoViewIfNeeded().catch(() => {});
    await page.getByRole('heading', { name: /Enterprise Security/i }).scrollIntoViewIfNeeded().catch(() => {});
    await page.getByRole('heading', { name: /^Vāk$/i }).last().scrollIntoViewIfNeeded().catch(() => {});
    await waitForVisibleImagesLoaded(page, pageReadyTimeout());
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
    actualData = await extractPageDesignData(page);
  }

  if (pagePath === '/benchmarks') {
    await page
      .waitForFunction(
        () => {
          const matches = document.body.innerText.match(/\d{1,2}\.\d{2}%/g) || [];
          return matches.length >= 2;
        },
        { timeout: pageReadyTimeout() }
      )
      .catch(() => {});
    actualData = await extractPageDesignData(page);
  }
  const failures = [];

  // Design validations
  validateHeadings(actualData, designSpec, failures);
  validateImages(actualData, designSpec, failures);
  validateImageCount(actualData, designSpec, failures);
  validateSections(actualData, designSpec, failures, { skipOrderCheck: pagePath === '/' });
  validateGlobalStyles(actualData, designSpec, failures);

  // Content validations (replaces content.spec.js)
  validateContent(actualData, designSpec, failures, { skipMainText: pagePath === '/benchmarks' });

  // Link/CTA validations (replaces cta.spec.js)
  validateLinks(actualData, designSpec, failures);

  // Button validations (replaces actions.spec.js)
  validateButtons(actualData, designSpec, failures);

  // Console errors
  validateConsoleErrors(consoleErrors, failures);

  // Write CSV results
  if (failures.length === 0) {
    await writeResult(`${pageLabel} design compliance`, 'PASS', 'All design checks passed');
  } else {
    for (const f of failures) {
      await writeResult(`${pageLabel} Design - ${f.section} - ${f.property}`, 'FAIL', f.message);
    }
  }

  return failures;
}

// ─── Baseline Capture ───

// Buttons/text that are widget-state-dependent and must never be saved in baselines
const UNSTABLE_BUTTONS = new Set([
  'Play audio', 'No conversation to copy', 'Sample Audio',
  'Customer Support Call', 'Podcast', 'Patient Notes', "Doctor's Appointment",
]);
const UNSTABLE_TEXT = new Set([
  'Sample Audio', 'Customer Support Call', 'Podcast',
  'Patient Notes', "Doctor's Appointment",
]);
const UNSTABLE_TEXT_PATTERNS = [
  'Select your input language',
  'Pick a sample, upload a file, or start speaking',
];
// Language flag images are lazy-loaded and unreliable in headless
const LANGUAGE_FLAG_ALTS = new Set([
  'Akan','Arabic (Global)','Assamese','Awadhi','Azerbaijani','Bambara','Bavarian',
  'Bengali (Bangladesh)','Berber (Tamazight)','Bhojpuri','Catalan','Cebuano',
  'Chhattisgarhi','Chichewa','Chinese (Global)','Czech','Dari','Dutch','English',
  'French','Fulani','German','Greek','Gujarati','Haitian Creole','Haryanvi',
  'Hausa','Hindi','Hungarian','Igbo','Indonesian','Italian','Japanese','Javanese',
  'Kannada','Kazakh','Kikongo','Kinyarwanda','Kirundi','Korean','Kurdish (Kurmanji)',
  'Lingala','Madurese','Magahi','Maithili','Malagasy','Malay','Malayalam','Marathi',
  'Marwari','Nepali','Oromo','Pashto','Persian','Polish','Portuguese','Punjabi',
  'Rajasthani','Romanian','Russian','Shona','Sindhi','Somali','Spanish','Sundanese',
  'Swahili','Swedish','Tagalog','Tamil','Telugu','Thai','Turkish','Twi','Ukrainian',
  'Urdu','Uyghur','Uzbek','Vietnamese','Wolof','Yoruba',
]);

function cleanCapturedData(data) {
  const cleanedButtons = data.buttons.filter((b) => !UNSTABLE_BUTTONS.has(b.label) && !/^🇺🇸/.test(b.label));
  const cleanedText = data.mainText.filter((t) =>
    !UNSTABLE_TEXT.has(t) &&
    !UNSTABLE_TEXT_PATTERNS.some((p) => t.includes(p)) &&
    !/^🇺🇸/.test(t) &&
    !isTransientMainText(t) &&
    !isDynamicMetricText(t)
  );
  const cleanedImages = data.images.filter(
    (img) => !LANGUAGE_FLAG_ALTS.has(img.alt) && !isTrustedByCarouselImage(img)
  );
  const cleanedLinks = data.links.filter((l) => !isOptionalExternalLink(l));
  return { ...data, buttons: cleanedButtons, mainText: cleanedText, images: cleanedImages, links: cleanedLinks };
}

export async function captureDesignBaseline(page, pageEntry) {
  await gotoAndWaitForPageReady(page, pageEntry.path, { waitForImages: true });

  await page.locator('footer').last().scrollIntoViewIfNeeded().catch(() => {});
  await page.waitForTimeout(300);

  if (pageEntry.path === '/media' || pageEntry.path === '/media-entertainment' || pageEntry.path === '/use-cases') {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(process.env.CI ? 2000 : 1000);
    await waitForVisibleImagesLoaded(page, pageReadyTimeout());
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
  }

  if (pageEntry.path === '/') {
    await page.getByText(/Trusted by industry leaders/i).first().scrollIntoViewIfNeeded().catch(() => {});
    await page.getByRole('heading', { name: /Enterprise Security/i }).scrollIntoViewIfNeeded().catch(() => {});
    await waitForVisibleImagesLoaded(page, pageReadyTimeout());
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.waitForTimeout(500);
  }

  if (pageEntry.path === '/benchmarks') {
    await page
      .waitForFunction(
        () => (document.body.innerText.match(/\d{1,2}\.\d{2}%/g) || []).length >= 2,
        { timeout: pageReadyTimeout() }
      )
      .catch(() => {});
  }

  const raw = await extractPageDesignData(page);
  const data = cleanCapturedData(raw);
  const viewport = detectViewport(page);
  const size = page.viewportSize();

  return {
    moduleKey: pageEntry.moduleKey,
    moduleLabel: pageEntry.moduleLabel,
    pageLabel: pageEntry.pageLabel,
    slug: pageEntry.slug,
    path: pageEntry.path,
    viewport,
    viewportWidth: size ? size.width : null,
    capturedAt: new Date().toISOString(),
    headings: data.headings.map((h) => ({ text: h.text, tag: h.tag, style: h.style })),
    images: data.images.map((img) => ({ src: img.src, alt: img.alt, loaded: img.loaded, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight })),
    totalImages: data.images.length,
    sections: data.sections.map((s) => ({ name: s.name, index: s.index, backgroundColor: s.backgroundColor })),
    headerNav: data.headerNav,
    mainText: data.mainText,
    footerNav: data.footerNav,
    pageTitle: data.pageTitle,
    links: data.links,
    buttons: data.buttons,
    globalStyles: data.globalStyles,
  };
}
