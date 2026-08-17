#!/usr/bin/env node
/**
 * Manual / CI helper: daily contact form email delivery test via API + X-Automation-Secret.
 *
 * Usage:
 *   CONTACT_AUTOMATION_SECRET=... node scripts/contact-daily-e2e-mail.js
 *
 * GitHub Actions: secret is injected from secrets.CONTACT_AUTOMATION_SECRET
 */
import { createResultWriter } from '../utils/result-writer.js';
import { runContactDailyE2eMail } from '../utils/contact-daily-e2e-mail.js';

const secret = process.env.CONTACT_AUTOMATION_SECRET || '';
const { writeResult } = await createResultWriter({
  moduleName: 'Contact',
  reportFileName: 'module-actions-report.csv',
});

const result = await runContactDailyE2eMail({ secret });

if (result.mode === 'skipped') {
  console.log(`⚠️  ${result.message}`);
  process.exit(0);
}

const testPoint = 'Contact daily E2E email (API)';

if (result.ok && result.mode === 'success') {
  const note = `LIVE send-mail HTTP ${result.status} — ${result.message}`;
  await writeResult(testPoint, 'PASS', note);
  console.log(`✅ ${note}`);
  process.exit(0);
}

// TEMP: 24h already_ran soft-pass disabled — non-200 (incl. 429) fails.
await writeResult(testPoint, 'FAIL', `HTTP ${result.status} — ${result.message}`);
console.error(`❌ Daily contact E2E failed: HTTP ${result.status} — ${result.message}`);
process.exit(1);
