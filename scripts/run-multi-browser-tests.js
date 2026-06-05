#!/usr/bin/env node
/**
 * Run Playwright projects sequentially (one browser at a time) and merge JSON reports.
 */
import { spawnSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { BROWSER_PROJECTS } from '../utils/browser-matrix.js';
import { writeMergedReport } from '../utils/merge-playwright-reports.js';

const ROOT = process.cwd();
const REPORTS_DIR = path.join(ROOT, 'reports');
const PARTIAL_DIR = path.join(REPORTS_DIR, 'partial');
const MERGED_REPORT = path.join(REPORTS_DIR, 'json-report.json');

const RUN_ORDER = ['api-contact', ...BROWSER_PROJECTS];

function runProject(projectName) {
  const partialFile = path.join(PARTIAL_DIR, `${projectName}.json`);
  fs.mkdirSync(PARTIAL_DIR, { recursive: true });

  console.log(`\n--- Running project: ${projectName} ---`);

  const playwrightBin = path.join(ROOT, 'node_modules', '.bin', 'playwright');
  const result = spawnSync(
    playwrightBin,
    ['test', 'tests/modules', `--project=${projectName}`],
    {
      cwd: ROOT,
      stdio: 'inherit',
      env: {
        ...process.env,
        PW_JSON_OUTPUT: partialFile,
        PLAYWRIGHT_HTML_OPEN: 'never',
      },
    }
  );

  if (!fs.existsSync(partialFile)) {
    console.warn(`⚠️  No JSON report for ${projectName} (${partialFile})`);
  }

  return result.status ?? 1;
}

function main() {
  fs.mkdirSync(REPORTS_DIR, { recursive: true });

  let exitCode = 0;
  const partialFiles = [];

  for (const project of RUN_ORDER) {
    const code = runProject(project);
    const partialFile = path.join(PARTIAL_DIR, `${project}.json`);
    if (fs.existsSync(partialFile)) partialFiles.push(partialFile);
    if (code !== 0) exitCode = code;
  }

  if (partialFiles.length) {
    writeMergedReport(partialFiles, MERGED_REPORT);
    console.log(`\n✅ Merged ${partialFiles.length} browser reports → ${MERGED_REPORT}`);
  } else {
    console.warn('⚠️  No partial reports to merge.');
  }

  process.exit(exitCode);
}

main();
