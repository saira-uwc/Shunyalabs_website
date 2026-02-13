#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
const ROOT = process.cwd();
const HISTORY_FILE = path.join(ROOT, 'dashboard', 'history', 'runs.json');
const DASHBOARD_URL = process.env.DASHBOARD_PUBLIC_URL || 'https://saira-uwc.github.io/Shunyalabs_website/';
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

function buildLatestRunSummary(run) {
  const total = run.total || 0;
  const passed = run.passed || 0;
  const failed = run.failed || 0;
  const passRate = total > 0 ? Math.round((passed / total) * 100) : 0;
  const runDate = formatDateTime(new Date(run.runDate));

  // Group tests by module
  const modules = new Map();
  (run.tests || []).forEach((test) => {
    const moduleName = (test.moduleName || 'General').trim() || 'General';
    if (!modules.has(moduleName)) {
      modules.set(moduleName, { passed: 0, failed: 0, tests: [] });
    }
    const mod = modules.get(moduleName);
    if (test.status === 'PASS') mod.passed++;
    else if (test.status === 'FAIL') mod.failed++;
    mod.tests.push(test);
  });

  return { total, passed, failed, passRate, runDate, modules };
}

function buildEmailBody(dateLabel, summary) {
  const passRateColor = summary.passRate >= 90 ? '#22c55e' : summary.passRate >= 70 ? '#f59e0b' : '#ef4444';
  const passRateEmoji = summary.passRate === 100 ? '🎉' : summary.passRate >= 90 ? '✅' : summary.passRate >= 70 ? '⚠️' : '🔴';

  // Build module rows for the table
  const moduleRows = Array.from(summary.modules.entries())
    .sort((a, b) => {
      // Failed modules first, then by name
      const aFail = a[1].failed > 0 ? 0 : 1;
      const bFail = b[1].failed > 0 ? 0 : 1;
      if (aFail !== bFail) return aFail - bFail;
      return a[0].localeCompare(b[0]);
    })
    .map(([name, data]) => {
      const modTotal = data.passed + data.failed;
      const modRate = modTotal > 0 ? Math.round((data.passed / modTotal) * 100) : 0;
      const statusIcon = data.failed === 0 ? '✅' : '❌';
      const rowBg = data.failed > 0 ? '#fef2f2' : '#f0fdf4';
      return `
        <tr style="background: ${rowBg};">
          <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; font-weight: 500;">${statusIcon} ${name}</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: center; color: #22c55e; font-weight: 600;">${data.passed}</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: center; color: ${data.failed > 0 ? '#ef4444' : '#6b7280'}; font-weight: 600;">${data.failed}</td>
          <td style="padding: 12px 16px; border-bottom: 1px solid #e5e7eb; text-align: center; font-weight: 600;">${modRate}%</td>
        </tr>`;
    })
    .join('');

  // Build failed test details (only if there are failures)
  let failedDetails = '';
  if (summary.failed > 0) {
    const failedTests = [];
    summary.modules.forEach((data, moduleName) => {
      data.tests.filter(t => t.status === 'FAIL').forEach(t => {
        failedTests.push({ module: moduleName, name: t.testPoint || t.testName || 'Unknown', comment: (t.comment || '').substring(0, 200) });
      });
    });

    if (failedTests.length > 0) {
      const failedRows = failedTests.slice(0, 15).map(t => `
        <tr>
          <td style="padding: 10px 16px; border-bottom: 1px solid #fecaca; font-size: 13px;">
            <strong style="color: #991b1b;">${t.module}</strong><br>
            <span style="color: #374151;">${t.name}</span>
            ${t.comment ? `<br><span style="color: #9ca3af; font-size: 11px;">${t.comment}</span>` : ''}
          </td>
        </tr>`).join('');

      failedDetails = `
      <div style="margin: 30px 0;">
        <h3 style="font-size: 16px; font-weight: 700; color: #991b1b; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #fecaca;">
          ❌ Failed Tests (${failedTests.length})
        </h3>
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; background: #fff; border: 1px solid #fecaca; border-radius: 8px;">
          ${failedRows}
          ${failedTests.length > 15 ? `<tr><td style="padding: 10px 16px; text-align: center; color: #9ca3af; font-size: 12px;">... and ${failedTests.length - 15} more. <a href="${DASHBOARD_URL}" style="color: #667eea;">View all on dashboard</a></td></tr>` : ''}
        </table>
      </div>`;
    }
  }

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
      <h1 style="margin: 0 0 6px 0; font-size: 22px; font-weight: 700;">🎯 QC Automation Report</h1>
      <p style="margin: 0; font-size: 14px; opacity: 0.9;">${PROJECT_NAME}</p>
      <p style="margin: 8px 0 0 0; font-size: 12px; opacity: 0.75;">Latest Run: ${summary.runDate}</p>
    </div>

    <div style="background: #ffffff; padding: 32px; border-radius: 0 0 12px 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
      <!-- Stats Cards -->
      <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 28px;">
        <tr>
          <td width="25%" style="padding: 4px;">
            <div style="background: #f0f4ff; padding: 18px 12px; border-radius: 10px; text-align: center; border: 1px solid #e0e7ff;">
              <div style="font-size: 11px; text-transform: uppercase; color: #6366f1; font-weight: 700; letter-spacing: 0.5px;">Total Tests</div>
              <div style="font-size: 30px; font-weight: 800; color: #4338ca; margin-top: 4px;">${summary.total}</div>
            </div>
          </td>
          <td width="25%" style="padding: 4px;">
            <div style="background: #f0fdf4; padding: 18px 12px; border-radius: 10px; text-align: center; border: 1px solid #bbf7d0;">
              <div style="font-size: 11px; text-transform: uppercase; color: #16a34a; font-weight: 700; letter-spacing: 0.5px;">Passed</div>
              <div style="font-size: 30px; font-weight: 800; color: #15803d; margin-top: 4px;">${summary.passed}</div>
            </div>
          </td>
          <td width="25%" style="padding: 4px;">
            <div style="background: #fef2f2; padding: 18px 12px; border-radius: 10px; text-align: center; border: 1px solid #fecaca;">
              <div style="font-size: 11px; text-transform: uppercase; color: #dc2626; font-weight: 700; letter-spacing: 0.5px;">Failed</div>
              <div style="font-size: 30px; font-weight: 800; color: #b91c1c; margin-top: 4px;">${summary.failed}</div>
            </div>
          </td>
          <td width="25%" style="padding: 4px;">
            <div style="background: #fffbeb; padding: 18px 12px; border-radius: 10px; text-align: center; border: 1px solid #fde68a;">
              <div style="font-size: 11px; text-transform: uppercase; color: #d97706; font-weight: 700; letter-spacing: 0.5px;">Pass Rate</div>
              <div style="font-size: 30px; font-weight: 800; color: ${passRateColor}; margin-top: 4px;">${passRateEmoji} ${summary.passRate}%</div>
            </div>
          </td>
        </tr>
      </table>

      <!-- Module Breakdown -->
      <div style="margin: 28px 0;">
        <h3 style="font-size: 16px; font-weight: 700; color: #1f2937; margin-bottom: 12px; padding-bottom: 8px; border-bottom: 2px solid #e5e7eb;">
          📋 Results by Module
        </h3>
        <table width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse; background: #fff; border: 1px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
          <thead>
            <tr style="background: #f9fafb;">
              <th style="padding: 10px 16px; text-align: left; font-size: 12px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Module</th>
              <th style="padding: 10px 16px; text-align: center; font-size: 12px; color: #22c55e; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Pass</th>
              <th style="padding: 10px 16px; text-align: center; font-size: 12px; color: #ef4444; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Fail</th>
              <th style="padding: 10px 16px; text-align: center; font-size: 12px; color: #6b7280; font-weight: 600; border-bottom: 2px solid #e5e7eb;">Rate</th>
            </tr>
          </thead>
          <tbody>
            ${moduleRows}
          </tbody>
        </table>
      </div>

      ${failedDetails}

      <!-- CTA Button -->
      <div style="text-align: center; margin: 32px 0 20px 0;">
        <a href="${DASHBOARD_URL}" style="display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 14px 36px; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 15px;">📊 View Full Dashboard</a>
      </div>

      <!-- Footer -->
      <div style="text-align: center; padding: 20px 0 0 0; color: #9ca3af; font-size: 12px; border-top: 1px solid #e5e7eb; margin-top: 24px;">
        <p style="margin: 0;"><strong>Thanks & Regards,</strong></p>
        <p style="margin: 4px 0 0 0;">Saira Automation BOT 🤖</p>
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
  const dateLabel = formatDate(new Date(latestRun.runDate));
  const subject = `QC ${PROJECT_NAME} – ${dateLabel} – ${summary.passRate}% Pass Rate`;
  const body = buildEmailBody(dateLabel, summary);

  await sendEmail(subject, body);
  console.log(`✅ Report email sent to ${RECIPIENTS.join(', ')} (${summary.total} tests, ${summary.passRate}% pass rate)`);
}

main().catch((error) => {
  console.error('Email report failed:', error.message);
  process.exit(1);
});
