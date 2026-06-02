#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { chromium } from 'playwright';
import { pathToFileURL } from 'url';
import { pageRegistry } from '../test-data/page-registry.js';
import { BasePage } from '../pages/base.page.js';
import { HomepagePage } from '../pages/homepage/homepage.page.js';
import { BlogsPage } from '../pages/resources/blogs.page.js';
import { extractHomepageNavDropdowns } from '../utils/homepage-nav-extract.js';
import { gotoAndWaitForPageReady } from '../utils/page-readiness.js';

const ROOT = process.cwd();
const BASE_URL = process.env.BASE_URL || 'https://www.shunyalabs.ai';
const EXPECTATIONS_DIR = path.join(ROOT, 'test-data', 'expectations');

const SPECIAL_FILES = new Set([
  'homepage.json',
  'homepage-language-regions.json',
  'homepage-nav.json',
  'homepage-footer.json',
  'resources-blogs.json',
]);

function listContentSpecs(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listContentSpecs(fullPath));
    } else if (entry.isFile() && entry.name === 'content.spec.js') {
      files.push(fullPath);
    }
  }
  return files;
}

function extractExpectationPath(specContent) {
  const match = specContent.match(/expectations',\s*'([^']+\.json)'/);
  return match ? match[1] : null;
}

function extractAnchorKeys(specContent) {
  const keys = new Set();
  const anchorRegex = /getSectionTextByAnchors\([^)]*expectations\.([a-zA-Z0-9_]+)/g;
  let match = null;
  while ((match = anchorRegex.exec(specContent))) {
    keys.add(match[1]);
  }
  return Array.from(keys);
}

function extractHeadingKeys(specContent) {
  const keys = new Set();
  const headingRegex = /getSectionTextByHeading\(\s*expectations\.([a-zA-Z0-9_]+)\[0\]/g;
  let match = null;
  while ((match = headingRegex.exec(specContent))) {
    keys.add(match[1]);
  }
  return Array.from(keys);
}

function deriveEntryFromExpectationFile(fileName) {
  const base = fileName.replace(/\.json$/, '');
  if (base === 'homepage') return { moduleKey: 'homepage', slug: 'homepage' };
  const parts = base.split('-');
  if (parts.length === 1) {
    return { moduleKey: base, slug: base };
  }
  const moduleKey = parts[0];
  const slug = parts.slice(1).join('-');
  return { moduleKey, slug };
}

async function updateHomepageExpectations(page) {
  console.log('Updating homepage expectations...');
  const homepage = new HomepagePage(page);
  await homepage.open();

  const homepagePath = path.join(EXPECTATIONS_DIR, 'homepage.json');
  const expectations = JSON.parse(fs.readFileSync(homepagePath, 'utf8'));

  const headerNav = homepage.normalizeTextList(await homepage.getHeaderNavLabels());
  if (headerNav.length) expectations.headerNav = headerNav;

  const hero = homepage.normalizeTextList(await homepage.getHeroText());
  if (hero.length) expectations.hero = hero;

  const playground = homepage.normalizeTextList(
    await homepage.getSectionTextByAnchors(expectations.playground || [])
  );
  if (playground.length) expectations.playground = playground;

  const primaryCtas = homepage.normalizeTextList(
    await homepage.getSectionTextByAnchors(expectations.primaryCtas || [])
  );
  if (primaryCtas.length) expectations.primaryCtas = primaryCtas;

  const platform = homepage.normalizeTextList(
    await homepage.getSectionTextByHeading((expectations.platform || [])[0] || '')
  );
  if (platform.length) expectations.platform = platform;

  const whyShunya = homepage.normalizeTextList(
    await homepage.getSectionTextByHeading((expectations.whyShunya || [])[0] || '')
  );
  if (whyShunya.length) expectations.whyShunya = whyShunya;

  const security = homepage.normalizeTextList(
    await homepage.getSectionTextByHeading((expectations.security || [])[0] || '')
  );
  if (security.length) expectations.security = security;

  const stats = homepage.normalizeTextList(
    await homepage.getSectionTextByHeading((expectations.stats || [])[0] || '')
  );
  if (stats.length) expectations.stats = stats;

  const languageRegionsHeader = homepage.normalizeTextList(
    await homepage.getSectionTextByHeading((expectations.languageRegionsHeader || [])[0] || '')
  );
  if (languageRegionsHeader.length) expectations.languageRegionsHeader = languageRegionsHeader;

  const bottomCta = homepage.normalizeTextList(
    await homepage.getSectionTextByAnchors([expectations.bottomCta?.[0]].filter(Boolean))
  );
  if (bottomCta.length) expectations.bottomCta = bottomCta;

  fs.writeFileSync(homepagePath, JSON.stringify(expectations, null, 2));

  const languageRegions = homepage.normalizeTextList(await homepage.getLanguageRegionButtons());
  const languageRegionsPath = path.join(EXPECTATIONS_DIR, 'homepage-language-regions.json');
  if (languageRegions.length) {
    fs.writeFileSync(languageRegionsPath, JSON.stringify(languageRegions, null, 2));
  }
}

async function updateHomepageNavExpectations(page) {
  console.log('Updating homepage nav expectations...');
  await gotoAndWaitForPageReady(page, '/', { waitForImages: true });

  const navPath = path.join(EXPECTATIONS_DIR, 'homepage-nav.json');
  const navExpectations = { dropdowns: await extractHomepageNavDropdowns(page) };
  fs.writeFileSync(navPath, JSON.stringify(navExpectations, null, 2));
}

async function updateHomepageFooterExpectations(page) {
  console.log('Updating homepage footer expectations...');
  const homepage = new HomepagePage(page);
  await homepage.open();

  const footerPath = path.join(EXPECTATIONS_DIR, 'homepage-footer.json');
  const footerExpectations = JSON.parse(fs.readFileSync(footerPath, 'utf8'));
  const footerData = await homepage.getFooterMenuStructure();

  footerExpectations.columns = footerData.columns || {};
  footerExpectations.followUs = footerData.followUs || '';
  footerExpectations.copyright = footerData.copyright || '';

  fs.writeFileSync(footerPath, JSON.stringify(footerExpectations, null, 2));
}

async function updateBlogsExpectations(page) {
  console.log('Updating blogs expectations...');
  const blogs = new BlogsPage(page);
  await blogs.open();

  const blogsPath = path.join(EXPECTATIONS_DIR, 'resources-blogs.json');
  const expectations = JSON.parse(fs.readFileSync(blogsPath, 'utf8'));

  const hero = await page.getByRole('heading', { level: 1 }).first().innerText().catch(() => '');
  const heroText = blogs.normalizeTextList([hero])[0];
  if (heroText) expectations.hero = heroText;

  const featured = await blogs.getFeaturedPost();
  if (featured) expectations.featured = featured;

  const topics = blogs.normalizeTextList(await blogs.getTopicButtons());
  if (topics.length) expectations.topics = topics;

  const posts = await blogs.getPostCards();
  if (posts.length) {
    expectations.posts = posts.slice(0, expectations.posts?.length || posts.length);
  }

  const bottomCtaText = blogs.normalizeTextList(
    await blogs.getSectionTextByAnchors([expectations.bottomCta?.[0]].filter(Boolean))
  );
  if (bottomCtaText.length) expectations.bottomCta = bottomCtaText;

  fs.writeFileSync(blogsPath, JSON.stringify(expectations, null, 2));
}

async function updateGenericExpectations(page, specPath, specContent) {
  const expectationsFile = extractExpectationPath(specContent);
  if (!expectationsFile) return;

  if (SPECIAL_FILES.has(expectationsFile)) {
    return;
  }

  const expectationsPath = path.join(EXPECTATIONS_DIR, expectationsFile);
  if (!fs.existsSync(expectationsPath)) return;

  const expectations = JSON.parse(fs.readFileSync(expectationsPath, 'utf8'));
  if (!expectations || typeof expectations !== 'object' || Array.isArray(expectations)) return;

  const { moduleKey, slug } = deriveEntryFromExpectationFile(expectationsFile);
  const pageEntry = pageRegistry.find((entry) => entry.moduleKey === moduleKey && entry.slug === slug);
  if (!pageEntry) return;

  console.log(`Updating expectations for ${moduleKey}/${slug}...`);

  const basePage = new BasePage(page, {
    path: pageEntry.path,
    moduleLabel: pageEntry.moduleLabel,
    pageLabel: pageEntry.pageLabel,
  });

  await basePage.open();

  const anchorKeys = extractAnchorKeys(specContent);
  const headingKeys = extractHeadingKeys(specContent);

  for (const key of anchorKeys) {
    const anchors = expectations[key];
    if (!Array.isArray(anchors) || anchors.length === 0) continue;
    const values = basePage.normalizeTextList(
      await basePage.getSectionTextByAnchors(anchors)
    );
    if (values.length) {
      expectations[key] = values;
    }
  }

  for (const key of headingKeys) {
    const list = expectations[key];
    if (!Array.isArray(list) || list.length === 0) continue;
    const values = basePage.normalizeTextList(
      await basePage.getSectionTextByHeading(list[0])
    );
    if (values.length) {
      expectations[key] = values;
    }
  }

  fs.writeFileSync(expectationsPath, JSON.stringify(expectations, null, 2));
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    baseURL: BASE_URL,
    viewport: { width: 1920, height: 1080 },
  });
  const page = await context.newPage();
  page.setDefaultNavigationTimeout(60000);
  page.setDefaultTimeout(60000);

  await updateHomepageExpectations(page);
  await updateHomepageNavExpectations(page);
  await updateHomepageFooterExpectations(page);
  await updateBlogsExpectations(page);

  const contentSpecsRoot = path.join(ROOT, 'tests', 'modules');
  const contentSpecFiles = listContentSpecs(contentSpecsRoot);

  for (const specPath of contentSpecFiles) {
    const specContent = fs.readFileSync(specPath, 'utf8');
    await updateGenericExpectations(page, specPath, specContent);
  }

  await browser.close();
}

main().catch((error) => {
  console.error('Failed to update expectations:', error);
  process.exit(1);
});
