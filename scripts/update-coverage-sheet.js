#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import dotenv from 'dotenv';
import crypto from 'crypto';
import { humanizeError, stripAnsi } from '../utils/humanize-error.js';

dotenv.config();

const ROOT = process.cwd();
const JSON_REPORT = path.join(ROOT, 'reports', 'json-report.json');
const DASHBOARD_HISTORY = path.join(ROOT, 'dashboard', 'history', 'runs.json');
const DASHBOARD_PUBLIC_URL =
  process.env.DASHBOARD_PUBLIC_URL || 'https://saira-uwc.github.io/Shunyalabs_website/';
const WEB_APP_URL = process.env.GOOGLE_SHEETS_WEB_APP_URL ||
  'https://script.google.com/macros/s/AKfycbxor9Iu_orul6S6J6msmVTW69zVFSYd324EKvrQ4eDFKkCYttEl3a0d3WNuBrZIqaJ3yQ/exec';
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '';
const SHEET_NAME = process.env.GOOGLE_SHEETS_SHEET_NAME || 'test-coverage';

function normalizeStatus(status) {
  if (status === 'passed') return 'PASS';
  if (status === 'failed' || status === 'timedOut') return 'FAIL';
  return 'SKIP';
}

function buildRows(report) {
  const attachmentMap = new Map();
  if (fs.existsSync(DASHBOARD_HISTORY)) {
    try {
      const history = JSON.parse(fs.readFileSync(DASHBOARD_HISTORY, 'utf8'));
      const latest = Array.isArray(history) ? history[history.length - 1] : null;
      const tests = latest?.tests || [];
      tests.forEach((test) => {
        if (!test?.testPoint) return;
        const urls = (test.attachments || [])
          .map((att) => {
            if (!att?.url) return null;
            const base = DASHBOARD_PUBLIC_URL.endsWith('/') ? DASHBOARD_PUBLIC_URL : `${DASHBOARD_PUBLIC_URL}/`;
            return `${base}${att.url}`;
          })
          .filter(Boolean);
        if (urls.length) {
          attachmentMap.set(test.testPoint, urls);
        }
      });
    } catch (error) {
      // ignore history parsing errors
    }
  }

  const createTestId = (name) => {
    const hash = crypto.createHash('sha1').update(name || '').digest('hex').slice(0, 6).toUpperCase();
    return `TC${hash}`;
  };

  const createDescription = (name) => {
    if (!name) return '';
    const parts = name.split('›').map((part) => part.trim()).filter(Boolean);
    const leaf = parts[parts.length - 1] || name;
    return `Validates: ${leaf}`;
  };

  const rows = [];
  const findAttachments = (name) => {
    if (!name) return [];
    if (attachmentMap.has(name)) return attachmentMap.get(name);
    for (const [key, urls] of attachmentMap.entries()) {
      if (name.endsWith(key)) return urls;
    }
    return [];
  };
  const walkSuite = (suite, titlePath = []) => {
    const suiteTitles = suite.title ? [...titlePath, suite.title] : titlePath;
    (suite.specs || []).forEach(spec => {
      (spec.tests || []).forEach(test => {
        const result = test.results && test.results.length ? test.results[test.results.length - 1] : null;
        const status = normalizeStatus(result?.status || test.outcome || test.expectedStatus);
        const testTitle = test.title || '';
        const specFile = spec.file ? spec.file.replace(/^tests\//, '') : '';
        const projectName = test.projectName || '';
        const titleParts = [...suiteTitles, spec.title].filter(Boolean);
        if (testTitle && testTitle !== spec.title) titleParts.push(testTitle);
        const hasFilePrefix = specFile && titleParts[0] === specFile;
        const baseName = (hasFilePrefix ? titleParts : [specFile, ...titleParts])
          .filter(Boolean)
          .join(' › ');
        const testName = projectName ? `[${projectName}] ${baseName}` : baseName;
        const rawError = result?.errors?.length
          ? (result.errors[0].message || result.errors[0].value || '')
          : (result?.error?.message || '');
        const reason = humanizeError(rawError);
        const attachments = findAttachments(testName);
        const comment = attachments.length ? attachments.join('\n') : '';

        rows.push({
          testId: createTestId(testName),
          description: createDescription(testName),
          testName,
          status,
          reason,
          comment,
          updatedAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true }),
        });
      });
    });
    (suite.suites || []).forEach(child => walkSuite(child, suiteTitles));
  };

  report.suites.forEach(suite => walkSuite(suite, []));
  return rows;
}

async function main() {
  if (!fs.existsSync(JSON_REPORT)) {
    console.log('⚠️  JSON report not found, skipping coverage update.');
    return;
  }

  const report = JSON.parse(fs.readFileSync(JSON_REPORT, 'utf8'));
  if (!report || !Array.isArray(report.suites)) {
    console.log('⚠️  JSON report invalid, skipping coverage update.');
    return;
  }

  const rows = buildRows(report);
  if (!rows.length) {
    console.log('⚠️  No tests found in JSON report.');
    return;
  }

  const payload = JSON.stringify({
    action: 'updateCoverage',
    rows,
    ...(SPREADSHEET_ID ? { spreadsheetId: SPREADSHEET_ID } : {}),
    ...(SHEET_NAME ? { sheetName: SHEET_NAME } : {}),
  });

  try {
    // Google Apps Script redirects POST (302) which causes fetch() to convert
    // POST→GET, dropping the body. Use redirect:'manual' and re-POST to the
    // redirect URL to preserve the body.
    let response = await fetch(WEB_APP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: payload,
      redirect: 'manual',
    });

    if (response.status >= 300 && response.status < 400) {
      const redirectUrl = response.headers.get('location');
      if (redirectUrl) {
        console.log(`  Following redirect to Apps Script...`);
        response = await fetch(redirectUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: payload,
        });
      }
    }

    if (!response.ok) {
      const text = await response.text().catch(() => '');
      console.log(`⚠️  Coverage update failed: HTTP ${response.status} ${text.slice(0, 200)}`);
      return;
    }
    const result = await response.json().catch(() => null);
    // Support both response formats: {ok, rows} (new) and {success, updated} (old)
    if (result && (result.ok || result.success)) {
      const count = result.rows ?? result.updated ?? rows.length;
      console.log(`✅ Coverage sheet updated (${count} rows).`);
    } else {
      console.log('⚠️  Coverage update response:', JSON.stringify(result) || 'unknown');
    }
  } catch (error) {
    console.log('⚠️  Coverage update failed:', error.message);
  }
}

main();
