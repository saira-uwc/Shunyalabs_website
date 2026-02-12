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

function getDateKey(date) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: TZ,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);
  const map = {};
  parts.forEach((p) => { map[p.type] = p.value; });
  return `${map.year}-${map.month}-${map.day}`;
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

function buildSummary(runsForDay) {
  const totalRuns = runsForDay.length;
  let totalPassed = 0;
  let totalFailed = 0;
  const modulePass = new Map();
  const moduleFail = new Map();

  runsForDay.forEach((run) => {
    totalPassed += run.passed || 0;
    totalFailed += run.failed || 0;
    (run.tests || []).forEach((test) => {
      const moduleName = (test.moduleName || 'General').trim() || 'General';
      if (test.status === 'PASS') {
        modulePass.set(moduleName, (modulePass.get(moduleName) || 0) + 1);
      } else if (test.status === 'FAIL') {
        moduleFail.set(moduleName, (moduleFail.get(moduleName) || 0) + 1);
      }
    });
  });

  return { totalRuns, totalPassed, totalFailed, modulePass, moduleFail };
}

function buildEmailBody(dateLabel, summary) {
  const passLines = Array.from(summary.modulePass.entries())
    .map(([module, count]) => `<li><strong>${module}</strong> – ${count} Passed</li>`);
  const failLines = Array.from(summary.moduleFail.entries())
    .map(([module, count]) => `<li><strong>${module}</strong> – ${count} Failed</li>`);

  const passSection = passLines.length ? passLines.join('') : '<li>None</li>';
  const failSection = failLines.length ? failLines.join('') : '<li>None</li>';

  const passRate = summary.totalPassed + summary.totalFailed > 0
    ? Math.round((summary.totalPassed / (summary.totalPassed + summary.totalFailed)) * 100)
    : 0;

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; max-width: 700px; margin: 0 auto; }
    .container { background: #ffffff; padding: 30px; }
    .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 25px; border-radius: 10px; margin-bottom: 30px; }
    .header h1 { margin: 0 0 10px 0; font-size: 24px; font-weight: 600; }
    .header p { margin: 0; font-size: 14px; opacity: 0.9; }
    .stats-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 25px 0; }
    .stat-card { background: #f8f9fa; padding: 20px; border-radius: 8px; text-align: center; border-left: 4px solid #667eea; }
    .stat-card.passed { border-left-color: #22c55e; }
    .stat-card.failed { border-left-color: #ef4444; }
    .stat-card.rate { border-left-color: #f59e0b; }
    .stat-label { font-size: 12px; text-transform: uppercase; color: #6b7280; font-weight: 600; margin-bottom: 8px; }
    .stat-value { font-size: 32px; font-weight: 700; color: #1f2937; }
    .section { margin: 30px 0; }
    .section-title { font-size: 18px; font-weight: 700; color: #1f2937; margin-bottom: 15px; padding-bottom: 10px; border-bottom: 2px solid #e5e7eb; }
    ul { list-style: none; padding: 0; margin: 0; }
    li { padding: 10px 15px; margin: 8px 0; background: #f8f9fa; border-radius: 6px; border-left: 3px solid #667eea; }
    .passed-list li { border-left-color: #22c55e; background: #f0fdf4; }
    .failed-list li { border-left-color: #ef4444; background: #fef2f2; }
    .cta-button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: 600; margin: 20px 0; }
    .footer { text-align: center; padding: 20px; color: #6b7280; font-size: 13px; border-top: 1px solid #e5e7eb; margin-top: 30px; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>🎯 QC Automation Report</h1>
      <p>${PROJECT_NAME}</p>
    </div>

    <div class="stats-grid">
      <div class="stat-card">
        <div class="stat-label">Total Runs</div>
        <div class="stat-value">${summary.totalRuns}</div>
      </div>
      <div class="stat-card passed">
        <div class="stat-label">Passed</div>
        <div class="stat-value">${summary.totalPassed}</div>
      </div>
      <div class="stat-card failed">
        <div class="stat-label">Failed</div>
        <div class="stat-value">${summary.totalFailed}</div>
      </div>
    </div>

    <div class="section">
      <div class="section-title">✅ Passed Tests by Module</div>
      <ul class="passed-list">
        ${passSection}
      </ul>
    </div>

    <div class="section">
      <div class="section-title">❌ Failed Tests by Module</div>
      <ul class="failed-list">
        ${failSection}
      </ul>
    </div>

    <div style="text-align: center;">
      <a href="${DASHBOARD_URL}" class="cta-button">📊 View Full Dashboard</a>
    </div>

    <div class="footer">
      <p><strong>Thanks & Regards,</strong></p>
      <p>Saira Automation BOT 🤖</p>
      <p style="margin-top: 15px; font-size: 11px;">This is an automated report. For issues, contact your QA team.</p>
    </div>
  </div>
</body>
</html>`;
}

async function sendEmail(subject, text) {
  if (!EMAIL_WEB_APP_URL) {
    throw new Error('Missing EMAIL_WEB_APP_URL. Set the Apps Script web app URL in secrets.');
  }

  const response = await fetch(EMAIL_WEB_APP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      to: RECIPIENTS.join(','),
      subject,
      body: text,
    }),
  });

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
  const todayKey = getDateKey(new Date());
  const todayRuns = runs.filter((run) => getDateKey(new Date(run.runDate)) === todayKey);

  const summary = buildSummary(todayRuns);
  const dateLabel = formatDate(new Date());
  const subject = `QC Shunya Labs Website Automation Report – ${dateLabel}`;
  const body = buildEmailBody(dateLabel, summary);

  await sendEmail(subject, body);
  console.log(`✅ Daily report email sent to ${RECIPIENTS.join(', ')}`);
}

main().catch((error) => {
  console.error('Email report failed:', error.message);
  process.exit(1);
});
