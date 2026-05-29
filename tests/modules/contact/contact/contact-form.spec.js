import { test, expect } from '@playwright/test';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { ContactPage } from '../../../../pages/contact/contact.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';

/**
 * send-mail behaviour:
 * - Local / CONTACT_MAIL_MOCK=false → real POST (needs reCAPTCHA in browser).
 * - CONTACT_MAIL_MOCK=true → stub API (no email); used for most CI runs.
 * - CI first run of the day (00:00–01:59 Asia/Kolkata): CONTACT_MAIL_MOCK=false so one
 *   real lead email is sent per day; remaining ~2-hourly runs stay mocked.
 */
function contactMailMockEnabled() {
  const v = process.env.CONTACT_MAIL_MOCK;
  return v === 'true' || v === '1';
}

function contactMailModeLabel() {
  if (process.env.CONTACT_MAIL_MODE === 'live' || process.env.CONTACT_MAIL_MODE === 'mock') {
    return process.env.CONTACT_MAIL_MODE;
  }
  return contactMailMockEnabled() ? 'mock' : 'live';
}

test.describe('Contact — lead form', () => {
  test.beforeEach(async ({ page }) => {
    if (!contactMailMockEnabled()) {
      return;
    }
    await page.route('**/api/send-mail', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify({ success: true, message: 'ok' }),
      });
    });
  });

  test('Contact Sales → contact page → fill form → submit shows confirmation', async ({ page }) => {
    const homepage = new HomepagePage(page);
    const contact = new ContactPage(page);
    const { writeResult } = await createResultWriter({
      moduleName: 'Contact',
      reportFileName: 'module-actions-report.csv',
    });

    await homepage.open();
    await homepage.navigateToContactViaContactSalesLink();
    await expect(page).toHaveURL(/\/contact/);

    await contact.fillLeadForm({
      name: 'Automated Test User',
      email: 'automated-test@example.com',
      phone: '+15555550123',
      message: 'Playwright automation — please ignore.',
    });
    await contact.setLeadFormConsents({ agreeMarketing: true, agreeTerms: true });

    const sendMailDone = contact.waitForLeadFormSubmissionResponse();
    await contact.submitLeadForm();
    const sendMailRes = await sendMailDone;

    await contact.assertLeadCaptureApiSucceeded(sendMailRes);
    await contact.assertLeadFeedbackSuccessPresentationOnly({ toastTimeout: 15_000 });

    const note =
      contactMailModeLabel() === 'live'
        ? 'LIVE send-mail (daily smoke — real email if reCAPTCHA passes)'
        : 'mocked send-mail (no email this run)';
    await writeResult('Contact Sales lead form', 'PASS', `Success toaster + API ok (${note})`);
  });
});
