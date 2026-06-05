#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import {
  BROWSER_KEYS,
  BROWSER_LABELS,
  summarizeBrowserColumns,
} from '../utils/browser-matrix.js';

const ROOT = process.cwd();
const HISTORY_FILE = path.join(ROOT, 'dashboard', 'history', 'runs.json');
const DASHBOARD_URL = process.env.DASHBOARD_PUBLIC_URL || 'https://saira-uwc.github.io/Shunyalabs_website/';
const SPREADSHEET_ID = process.env.GOOGLE_SHEETS_SPREADSHEET_ID || '';
const SHEET_URL = SPREADSHEET_ID ? `https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}` : '';
const PROJECT_NAME = process.env.PROJECT_NAME || 'Shunya Labs Website Automation Report';
const RECIPIENTS = (process.env.REPORT_RECIPIENTS || '').split(',').map((e) => e.trim()).filter(Boolean);
const EMAIL_WEB_APP_URL = process.env.EMAIL_WEB_APP_URL || '';
const TZ = 'Asia/Kolkata';

function formatDateTime(date) {
  return new Intl.DateTimeFormat('en-IN', {
    timeZone: TZ,
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  }).format(date);
}

function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    timeZone: TZ,
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
  }).format(date);
}

function loadRuns() {
  if (!fs.existsSync(HISTORY_FILE)) return [];
  try {
    return JSON.parse(fs.readFileSync(HISTORY_FILE, 'utf8'));
  } catch {
    return [];
  }
}

function toTitleCase(value) {
  return (value || '').replace(/[-_]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()).trim();
}

function resolveModuleName(test) {
  const stored = (test.moduleName || '').trim();
  if (stored && stored !== 'Playwright' && stored !== 'General') return stored;
  const tp = test.testPoint || '';
  const match = tp.match(/(?:tests\/)?modules\/([^/]+)\//);
  if (match) return toTitleCase(match[1]);
  return stored || 'General';
}

function browserCellHtml(browserStats) {
  if (!browserStats || !browserStats.total) {
    return '<span style="color: #d1d5db;">—</span>';
  }
  const failPart = browserStats.failed > 0
    ? ` / <span style="color: #dc2626; font-weight: 600;">${browserStats.failed}</span>`
    : '';
  return `<span style="color: #16a34a; font-weight: 600;">${browserStats.passed}</span>${failPart} <span style="color: #9ca3af;">of ${browserStats.total}</span>`;
}

function buildLatestRunSummary(run) {
  const total = run.total || 0;
  const passed = run.passed || 0;
  const failed = run.failed || 0;
  const passRate = total > 0 ? Math.round((passed / total) * 100) : 0;
  const runDate = formatDateTime(new Date(run.runDate));
  const browserStats = summarizeBrowserColumns(run.tests || []);

  const modules = new Map();

  (run.tests || []).forEach((test) => {
    const moduleName = resolveModuleName(test);
    if (!modules.has(moduleName)) {
      modules.set(moduleName, {
        browsers: Object.fromEntries(BROWSER_KEYS.map((k) => [k, { passed: 0, failed: 0, total: 0 }])),
        failedTests: [],
        passed: 0,
        failed: 0,
      });
    }
    const mod = modules.get(moduleName);
    const isPassed = test.status === 'PASS';
    if (isPassed) mod.passed++;
    else mod.failed++;

    for (const key of BROWSER_KEYS) {
      const result = test.browsers?.[key];
      if (!result) continue;
      mod.browsers[key].total++;
      if (result.status === 'PASS') mod.browsers[key].passed++;
      else mod.browsers[key].failed++;
    }

    if (!isPassed) {
      const shortName = (test.testPoint || '').split(' › ').pop() || test.testPoint;
      const failedBrowsers = BROWSER_KEYS
        .filter((key) => test.browsers?.[key]?.status === 'FAIL')
        .map((key) => BROWSER_LABELS[key]);
      mod.failedTests.push({
        name: shortName,
        failedBrowsers,
        comment: test.comment || '',
      });
    }
  });

  return {
    total, passed, failed, passRate, runDate, modules, browserStats,
  };
}

function buildEmailBody(summary) {
  const passRateColor = summary.passRate >= 90 ? '#22c55e' : summary.passRate >= 70 ? '#f59e0b' : '#ef4444';

  // Build module rows for the table
  const sortedModules = Array.from(summary.modules.entries()).sort((a, b) => {
    if (a[1].failed !== b[1].failed) return b[1].failed - a[1].failed;
    return a[0].localeCompare(b[0]);
  });

  const moduleRows = sortedModules.map(([name, data]) => {
    const isAllPass = data.failed === 0;
    const rowBg = isAllPass ? '#f8fffe' : '#fffbfb';
    const statusColor = isAllPass ? '#16a34a' : '#dc2626';
    const statusLabel = isAllPass ? 'PASS' : `${data.failed} FAIL`;
    const browserCells = BROWSER_KEYS.map((key) =>
      `<td style="padding: 12px 8px; border-bottom: 1px solid #f3f4f6; text-align: center; font-size: 11px;">${browserCellHtml(data.browsers[key])}</td>`
    ).join('');

    return `
              <tr style="background: ${rowBg};">
                <td style="padding: 12px 14px; border-bottom: 1px solid #f3f4f6; font-weight: 600; color: #1f2937; font-size: 13px;">${name}</td>
                ${browserCells}
                <td style="padding: 12px 10px; border-bottom: 1px solid #f3f4f6; text-align: center;">
                  <span style="display: inline-block; background: ${isAllPass ? '#dcfce7' : '#fee2e2'}; color: ${statusColor}; padding: 3px 10px; border-radius: 12px; font-size: 11px; font-weight: 700;">${statusLabel}</span>
                </td>
              </tr>`;
  }).join('');

  // Build failure details (only if there are failures)
  const allFailures = sortedModules
    .filter(([, data]) => data.failedTests.length > 0)
    .map(([name, data]) => {
      const items = data.failedTests.map(f => {
        const browserLabel = f.failedBrowsers?.length ? `[${f.failedBrowsers.join(', ')}]` : '';
        const reason = f.comment ? ` — ${f.comment.substring(0, 120)}` : '';
        return `<li style="margin-bottom: 6px; font-size: 12px; color: #4b5563;">${browserLabel} ${f.name}${reason}</li>`;
      }).join('');
      return `
              <div style="margin-bottom: 12px;">
                <div style="font-size: 13px; font-weight: 700; color: #991b1b; margin-bottom: 4px;">${name}</div>
                <ul style="margin: 0; padding-left: 20px;">${items}</ul>
              </div>`;
    }).join('');

  const failureSection = summary.failed > 0 ? `
      <div style="margin: 24px 0;">
        <h3 style="font-size: 14px; font-weight: 700; color: #991b1b; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 1px solid #fecaca;">
          Failure Details
        </h3>
        ${allFailures}
      </div>` : '';

  const browserSummaryRows = BROWSER_KEYS.map((key) => {
    const stat = summary.browserStats[key] || { passed: 0, total: 0 };
    const rate = stat.total > 0 ? Math.round((stat.passed / stat.total) * 100) : 0;
    const color = rate === 100 ? '#16a34a' : rate >= 80 ? '#d97706' : '#dc2626';
    return `
          <td width="25%" style="padding: 4px;">
            <div style="background: #fafbff; padding: 12px 16px; border-radius: 8px; border: 1px solid #e8ecf4;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="font-size: 13px; font-weight: 600; color: #374151;">${BROWSER_LABELS[key]}</td>
                  <td style="text-align: right; font-size: 13px; font-weight: 700; color: ${color};">${stat.passed}/${stat.total} (${rate}%)</td>
                </tr>
              </table>
            </div>
          </td>`;
  }).join('');

  // Sheet button (only if URL is configured)
  const sheetButton = SHEET_URL ? `
        <a href="${SHEET_URL}" style="display: inline-block; background: #ffffff; color: #16a34a; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px; border: 2px solid #16a34a; margin-left: 12px;">📋 View Test Sheet</a>` : '';

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f3f4f6;">
  <div style="max-width: 680px; margin: 0 auto; padding: 20px;">
    <!-- Header -->
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 28px 32px; border-radius: 12px 12px 0 0;">
      <h1 style="margin: 0 0 6px 0; font-size: 22px; font-weight: 700;">QC Automation Report</h1>
      <p style="margin: 0; font-size: 14px; opacity: 0.9;">${PROJECT_NAME}</p>
      <p style="margin: 8px 0 0 0; font-size: 12px; opacity: 0.75;">Latest Run: ${summary.runDate}${summary.totalRuns ? ` | Total Runs: ${summary.totalRuns}` : ''}</p>
    </div>

    <div style="background: #ffffff; padding: 28px 32px; border-radius: 0 0 12px 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
      <!-- Overall Stats -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
        <tr>
          <td width="25%" style="padding: 4px;">
            <div style="background: #f0f4ff; padding: 16px 10px; border-radius: 10px; text-align: center; border: 1px solid #e0e7ff;">
              <div style="font-size: 10px; text-transform: uppercase; color: #6366f1; font-weight: 700; letter-spacing: 0.5px;">Total</div>
              <div style="font-size: 28px; font-weight: 800; color: #4338ca; margin-top: 2px;">${summary.total}</div>
            </div>
          </td>
          <td width="25%" style="padding: 4px;">
            <div style="background: #f0fdf4; padding: 16px 10px; border-radius: 10px; text-align: center; border: 1px solid #bbf7d0;">
              <div style="font-size: 10px; text-transform: uppercase; color: #16a34a; font-weight: 700; letter-spacing: 0.5px;">Passed</div>
              <div style="font-size: 28px; font-weight: 800; color: #15803d; margin-top: 2px;">${summary.passed}</div>
            </div>
          </td>
          <td width="25%" style="padding: 4px;">
            <div style="background: ${summary.failed > 0 ? '#fef2f2' : '#f0fdf4'}; padding: 16px 10px; border-radius: 10px; text-align: center; border: 1px solid ${summary.failed > 0 ? '#fecaca' : '#bbf7d0'};">
              <div style="font-size: 10px; text-transform: uppercase; color: ${summary.failed > 0 ? '#dc2626' : '#16a34a'}; font-weight: 700; letter-spacing: 0.5px;">Failed</div>
              <div style="font-size: 28px; font-weight: 800; color: ${summary.failed > 0 ? '#b91c1c' : '#15803d'}; margin-top: 2px;">${summary.failed}</div>
            </div>
          </td>
          <td width="25%" style="padding: 4px;">
            <div style="background: #fffbeb; padding: 16px 10px; border-radius: 10px; text-align: center; border: 1px solid #fde68a;">
              <div style="font-size: 10px; text-transform: uppercase; color: #d97706; font-weight: 700; letter-spacing: 0.5px;">Pass Rate</div>
              <div style="font-size: 28px; font-weight: 800; color: ${passRateColor}; margin-top: 2px;">${summary.passRate}%</div>
            </div>
          </td>
        </tr>
      </table>

      <!-- Browser Summary -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
        <tr>${browserSummaryRows}</tr>
      </table>

      <!-- Module Results Table -->
      <h3 style="font-size: 15px; font-weight: 700; color: #1f2937; margin: 0 0 12px 0; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">
        Module Results
      </h3>
      <table width="100%" cellpadding="0" cellspacing="0" style="border-radius: 8px; overflow: hidden; border: 1px solid #e5e7eb;">
        <thead>
          <tr style="background: #f9fafb;">
            <th style="padding: 10px 14px; text-align: left; font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e5e7eb;">Module</th>
            ${BROWSER_KEYS.map((key) => `<th style="padding: 10px 8px; text-align: center; font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e5e7eb;">${BROWSER_LABELS[key]}</th>`).join('')}
            <th style="padding: 10px 10px; text-align: center; font-size: 11px; font-weight: 700; color: #6b7280; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e5e7eb;">Status</th>
          </tr>
        </thead>
        <tbody>
          ${moduleRows}
        </tbody>
      </table>

      ${failureSection}

      <!-- CTA Buttons -->
      <div style="text-align: center; margin: 32px 0 20px 0;">
        <a href="${DASHBOARD_URL}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 12px 28px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 14px;">📊 View Dashboard</a>${sheetButton}
      </div>

      <!-- Footer -->
      <div style="text-align: center; padding: 20px 0 0 0; color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb; margin-top: 24px;">
        <p style="margin: 0;"><strong>Thanks & Regards,</strong></p>
        <p style="margin: 4px 0 0 0;">Saira Automation BOT</p>
        <p style="margin: 12px 0 0 0; font-size: 11px; color: #d1d5db;">This is an automated report generated from the latest test run.</p>
      </div>
    </div>
  </div>
</body>
</html>`;
}

async function sendEmail(subject, body) {
  if (!EMAIL_WEB_APP_URL) {
    throw new Error('Missing EMAIL_WEB_APP_URL. Set the Apps Script web app URL in secrets.');
  }

  const payload = JSON.stringify({
    to: RECIPIENTS.join(','),
    subject,
    body,
  });

  // Google Apps Script redirects POST (302) → fetch converts POST to GET,
  // dropping the body. Use redirect:'manual' and re-POST to the redirect URL.
  let response = await fetch(EMAIL_WEB_APP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    redirect: 'manual',
  });

  if (response.status >= 300 && response.status < 400) {
    const redirectUrl = response.headers.get('location');
    if (redirectUrl) {
      response = await fetch(redirectUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload,
      });
    }
  }

  if (!response.ok) {
    const message = await response.text().catch(() => '');
    throw new Error(`Email web app failed: HTTP ${response.status} ${message}`);
  }
}

async function main() {
  if (!RECIPIENTS.length) {
    console.log('No REPORT_RECIPIENTS set. Skipping email.');
    return;
  }

  const runs = loadRuns();
  if (!runs.length) {
    console.log('No runs found in history. Skipping email.');
    return;
  }

  // Use the LATEST run only (not all runs for the day)
  const latestRun = runs[runs.length - 1];
  const summary = buildLatestRunSummary(latestRun);
  summary.totalRuns = runs.length;
  const dateLabel = formatDate(new Date(latestRun.runDate));
  const subject = `QC ${PROJECT_NAME} – ${dateLabel} – ${summary.passRate}% Pass Rate`;
  const body = buildEmailBody(summary);

  await sendEmail(subject, body);
  console.log(`✅ Report email sent to ${RECIPIENTS.join(', ')} (${summary.total} tests, ${summary.passRate}% pass rate)`);
}

main().catch((error) => {
  console.error('Email report failed:', error.message);
  process.exit(1);
});
