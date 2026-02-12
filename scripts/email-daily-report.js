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
  return new Intl.DateTimeFormat('en-GB', {
    timeZone: TZ,
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
    .map(([module, count]) => `• ${module} – ${count} Passed`);
  const failLines = Array.from(summary.moduleFail.entries())
    .map(([module, count]) => `• ${module} – ${count} Failed`);

  const passSection = passLines.length ? passLines.join('\n') : '• None';
  const failSection = failLines.length ? failLines.join('\n') : '• None';

  return `Hi Team,\n\n` +
    `Project: ${PROJECT_NAME}\n\n` +
    `Total Runs: ${summary.totalRuns}\n` +
    `Total Passed: ${summary.totalPassed}\n` +
    `Total Failed: ${summary.totalFailed}\n\n` +
    `Module-wise Summary:\n\n` +
    `Pass:\n${passSection}\n\n` +
    `Fail:\n${failSection}\n\n` +
    `For more details, follow the link:\n${DASHBOARD_URL}\n\n` +
    `Thanks & Regards,\n` +
    `Saira Automation BOT\n`;
}

async function sendEmail(subject, text) {
  if (!EMAIL_WEB_APP_URL) {
    throw new Error('Missing EMAIL_WEB_APP_URL. Set the Apps Script web app URL in secrets.');
  }

  const response = await fetch(EMAIL_WEB_APP_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      recipients: RECIPIENTS,
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
  const subject = `QC Automation Report – ${dateLabel}`;
  const body = buildEmailBody(dateLabel, summary);

  await sendEmail(subject, body);
  console.log(`✅ Daily report email sent to ${RECIPIENTS.join(', ')}`);
}

main().catch((error) => {
  console.error('Email report failed:', error.message);
  process.exit(1);
});
