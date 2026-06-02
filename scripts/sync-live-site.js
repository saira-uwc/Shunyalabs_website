#!/usr/bin/env node
/**
 * Sync automation with the live site at https://www.shunyalabs.ai
 *
 * 1. Homepage nav + footer expectations (from live DOM)
 * 2. Homepage content expectations (hero, sections)
 * 3. Design baselines (all active pages, desktop + mobile)
 * 4. Page content snapshots (optional via SYNC_SNAPSHOTS=true)
 */
import fs from 'fs';
import path from 'path';
import { spawnSync } from 'child_process';
import { chromium } from 'playwright';
import { HomepagePage } from '../pages/homepage/homepage.page.js';
import { extractHomepageNavDropdowns } from '../utils/homepage-nav-extract.js';
import { gotoAndWaitForPageReady } from '../utils/page-readiness.js';

const ROOT = process.cwd();
const BASE_URL = process.env.BASE_URL || 'https://www.shunyalabs.ai';
const EXPECTATIONS_DIR = path.join(ROOT, 'test-data', 'expectations');
const PLAYWRIGHT = path.join(ROOT, 'node_modules', '.bin', 'playwright');

function run(cmd, args, label) {
  console.log(`\n▶ ${label}`);
  const result = spawnSync(cmd, args, { cwd: ROOT, stdio: 'inherit', env: process.env });
  if (result.status !== 0) {
    throw new Error(`${label} failed (exit ${result.status})`);
  }
}

async function syncHomepageExpectations(page) {
  console.log('\n▶ Syncing homepage expectations from live site...');
  const homepage = new HomepagePage(page);
  await gotoAndWaitForPageReady(page, '/', { waitForImages: true });

  const navPath = path.join(EXPECTATIONS_DIR, 'homepage-nav.json');
  const navExpectations = { dropdowns: await extractHomepageNavDropdowns(page) };
  fs.writeFileSync(navPath, JSON.stringify(navExpectations, null, 2));
  console.log('  ✓ homepage-nav.json');

  const footerPath = path.join(EXPECTATIONS_DIR, 'homepage-footer.json');
  const footerExpectations = JSON.parse(fs.readFileSync(footerPath, 'utf8'));
  const footerData = await homepage.getFooterMenuStructure();
  footerExpectations.columns = footerData.columns || {};
  footerExpectations.followUs = footerData.followUs || '';
  footerExpectations.copyright = footerData.copyright || '';
  fs.writeFileSync(footerPath, JSON.stringify(footerExpectations, null, 2));
  console.log('  ✓ homepage-footer.json');

  const homepagePath = path.join(EXPECTATIONS_DIR, 'homepage.json');
  const expectations = JSON.parse(fs.readFileSync(homepagePath, 'utf8'));

  const headerNav = homepage.normalizeTextList(await homepage.getHeaderNavLabels());
  if (headerNav.length) expectations.headerNav = headerNav;

  const hero = homepage.normalizeTextList(await homepage.getHeroText());
  if (hero.length) expectations.hero = hero;

  const footerText = homepage.normalizeTextList(await homepage.getFooterText());
  if (footerText.length) expectations.footer = footerText;

  const sectionHeadings = [
    'Custom Built',
    'Reach',
    'Industry-Leading Standards for Enterprise Security',
    'What Sets Us Apart',
    'Start Building with Shunya Labs.',
    'Language Regions',
  ];
  for (const heading of sectionHeadings) {
    const key = heading
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      .trim()
      .split(' ')
      .map((w, i) => (i === 0 ? w.toLowerCase() : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()))
      .join('');
    const text = homepage.normalizeTextList(await homepage.getSectionTextByHeading(heading));
    if (text.length) expectations[key] = text;
  }

  const vakSection = homepage.normalizeTextList(
    await page.evaluate(() => {
      const normalize = (s) => (s || '').replace(/\s+/g, ' ').trim();
      const heading = Array.from(document.querySelectorAll('h2, h3')).find((el) =>
        normalize(el.textContent).includes('Vāk')
      );
      const section = heading?.closest('section') || heading?.parentElement;
      if (!section) return [];
      return Array.from(section.querySelectorAll('h1, h2, h3, p, button, span'))
        .map((el) => normalize(el.textContent))
        .filter(Boolean);
    })
  );
  if (vakSection.length) expectations.vakDemo = vakSection;

  const bottomCta = homepage.normalizeTextList(
    await homepage.getSectionTextByAnchors(['Get Started', 'Contact Sales'])
  );
  if (bottomCta.length) expectations.bottomCta = bottomCta;

  const languageRegions = homepage.normalizeTextList(await homepage.getLanguageRegionButtons());
  if (languageRegions.length) {
    fs.writeFileSync(
      path.join(EXPECTATIONS_DIR, 'homepage-language-regions.json'),
      JSON.stringify(languageRegions, null, 2)
    );
    console.log('  ✓ homepage-language-regions.json');
  }

  fs.writeFileSync(homepagePath, JSON.stringify(expectations, null, 2));
  console.log('  ✓ homepage.json');
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    baseURL: BASE_URL,
    viewport: { width: 1920, height: 1080 },
  });
  const page = await context.newPage();
  page.setDefaultNavigationTimeout(60_000);
  page.setDefaultTimeout(60_000);

  try {
    await syncHomepageExpectations(page);
  } finally {
    await browser.close();
  }

  run(PLAYWRIGHT, ['test', 'tests/snapshots/generate-design-baselines.spec.js', '--config=playwright.desktop-baseline.config.js'], 'Design baselines (desktop)');
  run(PLAYWRIGHT, ['test', 'tests/snapshots/generate-design-baselines.spec.js', '--config=playwright.mobile-baseline.config.js'], 'Design baselines (mobile)');

  if (process.env.SYNC_SNAPSHOTS === 'true') {
    run(PLAYWRIGHT, ['test', 'tests/snapshots/generate-page-snapshots.spec.js', '--project=desktop'], 'Page snapshots (desktop)');
    run(PLAYWRIGHT, ['test', 'tests/snapshots/generate-page-snapshots.spec.js', '--project=mobile'], 'Page snapshots (mobile)');
  }

  console.log('\n✅ Live site sync complete.');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
