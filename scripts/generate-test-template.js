#!/usr/bin/env node
/**
 * Generate Google Sheets template with all test names pre-populated
 * Run this once to get a CSV you can import into Google Sheets
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const ROOT = process.cwd();
const JSON_REPORT = path.join(ROOT, 'reports', 'json-report.json');
const OUTPUT_CSV = path.join(ROOT, 'test-coverage-template.csv');

function createTestId(name) {
  const hash = crypto.createHash('sha1').update(name || '').digest('hex').slice(0, 6).toUpperCase();
  return `TC${hash}`;
}

function createDescription(name) {
  if (!name) return '';
  const parts = name.split('›').map((part) => part.trim()).filter(Boolean);
  const leaf = parts[parts.length - 1] || name;
  return `Validates: ${leaf}`;
}

function main() {
  if (!fs.existsSync(JSON_REPORT)) {
    console.log('❌ JSON report not found. Run tests first: npm test');
    process.exit(1);
  }

  const report = JSON.parse(fs.readFileSync(JSON_REPORT, 'utf8'));
  if (!report || !Array.isArray(report.suites)) {
    console.log('❌ Invalid JSON report');
    process.exit(1);
  }

  const tests = [];

  const walkSuite = (suite, titlePath = []) => {
    const suiteTitles = suite.title ? [...titlePath, suite.title] : titlePath;
    (suite.specs || []).forEach(spec => {
      (spec.tests || []).forEach(test => {
        const testTitle = test.title || '';
        const specFile = spec.file ? spec.file.replace(/^tests\//, '') : '';
        const titleParts = [...suiteTitles, spec.title].filter(Boolean);
        if (testTitle && testTitle !== spec.title) titleParts.push(testTitle);
        const hasFilePrefix = specFile && titleParts[0] === specFile;
        const testName = (hasFilePrefix ? titleParts : [specFile, ...titleParts])
          .filter(Boolean)
          .join(' › ');

        tests.push({
          testId: createTestId(testName),
          testName,
          description: createDescription(testName)
        });
      });
    });
    (suite.suites || []).forEach(child => walkSuite(child, suiteTitles));
  };

  report.suites.forEach(suite => walkSuite(suite, []));

  console.log(`\n📋 Found ${tests.length} tests\n`);

  // Generate CSV with headers
  let csv = 'Testcase ID,Test Name,Description,Update Date & time,Status,Comment\n';
  tests.forEach(test => {
    csv += `"${test.testId}","${test.testName}","${test.description}",,PENDING,\n`;
  });

  fs.writeFileSync(OUTPUT_CSV, csv);

  console.log(`✅ Template created: ${OUTPUT_CSV}\n`);
  console.log('📤 Next steps:');
  console.log('1. Open your Google Sheet');
  console.log('2. Delete all existing data (or create a new sheet named "test-coverage")');
  console.log('3. Import this CSV file (File → Import → Upload → Replace current sheet)');
  console.log('4. Run your tests again\n');
  console.log(`Or copy-paste the CSV content directly into Google Sheets.\n`);
}

main();
