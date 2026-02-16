#!/usr/bin/env node
/**
 * Parse Figma design links from Excel file → figma-links.json mapping
 *
 * Usage:
 *   node scripts/parse-figma-specs.js           # Discovery mode – dump structure
 *   node scripts/parse-figma-specs.js --generate # Generate figma-links.json mapping
 */
import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';
import { pageRegistry } from '../test-data/page-registry.js';

const ROOT = process.cwd();
const XLSX_PATH = path.join(ROOT, 'test-data', 'figma-links', 'Shunyalabs- wesbite design (1).xlsx');
const OUTPUT_FILE = path.join(ROOT, 'test-data', 'figma-links.json');
const generateMode = process.argv.includes('--generate');

if (!fs.existsSync(XLSX_PATH)) {
  console.error(`❌ Excel file not found: ${XLSX_PATH}`);
  process.exit(1);
}

const workbook = XLSX.readFile(XLSX_PATH);

// Map xlsx page names to page-registry entries
const PAGE_NAME_MAP = {
  'homepage': { moduleKey: 'homepage', slug: 'homepage' },
  'widget': { moduleKey: 'core', slug: 'widget' },
  'top navigation': { moduleKey: 'core', slug: 'top-navigation' },
  'footer menu': { moduleKey: 'core', slug: 'footer-menu' },
  'overview': { moduleKey: 'product', slug: 'overview' },
  'models': { moduleKey: 'product', slug: 'models' },
  'voice agents': { moduleKey: 'product', slug: 'voice-agents' },
  'speech intelligence': { moduleKey: 'product', slug: 'speech-intelligence' },
  'audio processing': { moduleKey: 'product', slug: 'audio-processing' },
  'deployment': { moduleKey: 'product', slug: 'deployment' },
  'use cases': { moduleKey: 'solutions', slug: 'use-cases' },
  'contact cases': { moduleKey: 'solutions', slug: 'contact-centers' },
  'media & entertainment': { moduleKey: 'solutions', slug: 'media-entertainment' },
  'healthcare': { moduleKey: 'solutions', slug: 'healthcare' },
  'language models---': { moduleKey: 'models', slug: 'language-models' },
  '-zero stt indic': { moduleKey: 'models', slug: 'zero-stt-indic' },
  '-zero stt codeswitch': { moduleKey: 'models', slug: 'zero-stt-codeswitch' },
  '-zero stt universal': { moduleKey: 'models', slug: 'zero-stt-universal' },
  'specialised models----': { moduleKey: 'models', slug: 'specialised-models' },
  '-zero stt med': { moduleKey: 'models', slug: 'zero-stt-med' },
  'on device---': { moduleKey: 'models', slug: 'on-device-models' },
  'blogs': { moduleKey: 'resources', slug: 'blogs' },
  'benchmarks': { moduleKey: 'resources', slug: 'benchmarks' },
  'news & media': { moduleKey: 'resources', slug: 'news-media' },
  'patents': { moduleKey: 'resources', slug: 'patents' },
  'pricing': { moduleKey: 'pricing', slug: 'pricing' },
  'contact us': { moduleKey: 'contact', slug: 'contact' },
  'about us': { moduleKey: 'about', slug: 'about-us' },
};

// ─── Discovery Mode ───
if (!generateMode) {
  console.log('📋 XLSX Discovery Mode\n');
  console.log(`File: ${XLSX_PATH}`);
  console.log(`Sheets: ${workbook.SheetNames.length}\n`);

  for (const sheetName of workbook.SheetNames) {
    const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
    console.log(`\n━━━ Sheet: "${sheetName}" (${data.length} rows) ━━━`);
    data.forEach((row, i) => {
      const pageName = (row.PAGE || '').toLowerCase().trim();
      const match = PAGE_NAME_MAP[pageName];
      const status = match ? `✅ → ${match.moduleKey}/${match.slug}` : '❌ unmapped';
      console.log(`  ${i + 1}. ${row.PAGE} ${status}`);
    });
  }

  console.log('\n💡 Run with --generate to output figma-links.json');
  process.exit(0);
}

// ─── Generate Mode ───
console.log('🔧 Generating figma-links.json...\n');

const figmaLinks = {};

// Use "New version" sheet (primary)
const data = XLSX.utils.sheet_to_json(workbook.Sheets['New version'] || workbook.Sheets[workbook.SheetNames[0]]);

for (const row of data) {
  const pageName = (row.PAGE || '').toLowerCase().trim();
  const link = (row.LINK || '').trim();
  if (!pageName || !link) continue;

  const match = PAGE_NAME_MAP[pageName];
  if (!match) continue;

  const key = `${match.moduleKey}-${match.slug}`;
  const registryEntry = pageRegistry.find(
    (p) => p.moduleKey === match.moduleKey && p.slug === match.slug
  );

  figmaLinks[key] = {
    moduleKey: match.moduleKey,
    slug: match.slug,
    moduleLabel: registryEntry?.moduleLabel || match.moduleKey,
    pageLabel: registryEntry?.pageLabel || match.slug,
    path: registryEntry?.path || '',
    figmaUrl: link,
  };
}

fs.writeFileSync(OUTPUT_FILE, JSON.stringify(figmaLinks, null, 2));
console.log(`✅ Generated ${OUTPUT_FILE}`);
console.log(`   ${Object.keys(figmaLinks).length} pages mapped with Figma links`);

// Show mapping summary
for (const [key, data] of Object.entries(figmaLinks)) {
  console.log(`  ${key}: ${data.pageLabel} → ${data.figmaUrl.substring(0, 80)}...`);
}
