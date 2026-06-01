import { test, expect } from '@playwright/test';
import { createResultWriter } from '../../../../utils/result-writer.js';
import {
  runContactDailyE2eMail,
  shouldRunContactDailyE2e,
} from '../../../../utils/contact-daily-e2e-mail.js';

/**
 * Daily real email delivery — API only (X-Automation-Secret cannot be sent from the browser form).
 * Runs on the first CI slot after midnight IST; other runs are skipped.
 * Browser UI test stays mocked — see contact-form.spec.js
 */
test.describe('Contact — daily E2E email (API)', () => {
  test('send-mail with X-Automation-Secret delivers email once per day', async ({ request }) => {
    test.skip(!shouldRunContactDailyE2e(), 'Not the daily E2E slot (00:00–01:59 Asia/Kolkata)');

    const secret = process.env.CONTACT_AUTOMATION_SECRET || '';
    test.skip(!secret, 'CONTACT_AUTOMATION_SECRET not configured');

    const { writeResult } = await createResultWriter({
      moduleName: 'Contact',
      reportFileName: 'module-actions-report.csv',
    });

    const baseURL = process.env.CONTACT_API_BASE_URL || 'https://www.shunyalabs.ai';
    const fetchImpl = async (url, init) => {
      const response = await request.fetch(url, {
        method: init.method,
        headers: init.headers,
        data: init.body,
      });
      return {
        status: response.status(),
        text: () => response.text(),
      };
    };

    const result = await runContactDailyE2eMail({ secret, baseURL, fetchImpl });
    const testPoint = 'Contact daily E2E email (API)';

    if (result.ok) {
      const note =
        result.mode === 'success'
          ? `LIVE send-mail HTTP ${result.status} — ${result.message}`
          : `HTTP ${result.status} — ${result.message} (already sent today)`;
      await writeResult(testPoint, 'PASS', note);
      expect(result.mode).toMatch(/success|already_ran/);
      return;
    }

    await writeResult(testPoint, 'FAIL', `HTTP ${result.status} — ${result.message}`);
    expect(result.ok, `send-mail failed: HTTP ${result.status} — ${result.message}`).toBe(true);
  });
});
