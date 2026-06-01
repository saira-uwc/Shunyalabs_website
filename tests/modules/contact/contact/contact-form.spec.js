import { test, expect } from '@playwright/test';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { ContactPage } from '../../../../pages/contact/contact.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';
import { pageReadyTimeout, MODULE_TEST_TIMEOUT } from '../../../../utils/page-readiness.js';

import { CONTACT_AUTOMATION_EMAIL } from '../../../../utils/contact-daily-e2e-mail.js';

/**
 * Browser UI test — send-mail is mocked in CI (CONTACT_MAIL_MOCK=true).
 * Daily real email delivery uses contact-daily-mail.api.spec.js + X-Automation-Secret.
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
  test.setTimeout(MODULE_TEST_TIMEOUT);

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
    await homepage.navigateToContactViaContactSalesLink({ timeout: pageReadyTimeout() });
    await expect(page).toHaveURL(/\/contact/, { timeout: pageReadyTimeout() });
    await contact.waitForLeadFormReady({ timeout: pageReadyTimeout() });

    await contact.fillLeadForm({
      name: 'Automated Test User',
      email: CONTACT_AUTOMATION_EMAIL,
      phone: '+15555550123',
      message: 'Playwright automation — please ignore.',
    });
    await contact.setLeadFormConsents({ agreeMarketing: true, agreeTerms: true });

    const sendMailDone = contact.waitForLeadFormSubmissionResponse();
    await contact.submitLeadForm();
    const sendMailRes = await sendMailDone;

    await contact.assertLeadCaptureApiSucceeded(sendMailRes);
    await contact.assertLeadFeedbackSuccessPresentationOnly();

    const note =
      contactMailModeLabel() === 'live'
        ? 'LIVE send-mail (local only — browser cannot send automation secret)'
        : 'mocked send-mail (UI validation — no email this run)';
    await writeResult('Contact Sales lead form', 'PASS', `Success toaster + API ok (${note})`);
  });
});
