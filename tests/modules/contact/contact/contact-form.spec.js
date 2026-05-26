import { test, expect } from '@playwright/test';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { ContactPage } from '../../../../pages/contact/contact.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';

/**
 * Real POSTs to `/api/send-mail` by default so failures (reCAPTCHA, server errors) match
 * production. The test only passes when the API reports success AND the exact success
 * toaster copy is visible, with no visible error toast (see ContactPage.assertLeadFeedbackSuccessPresentationOnly).
 *
 * CI cannot complete reCAPTCHA — set CONTACT_MAIL_MOCK=true (see scheduled-tests workflow)
 * to stub a successful API only for that environment.
 */
function contactMailMockEnabled() {
  const v = process.env.CONTACT_MAIL_MOCK;
  return v === 'true' || v === '1';
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

    const note = contactMailMockEnabled() ? 'CONTACT_MAIL_MOCK' : 'live send-mail';
    await writeResult('Contact Sales lead form', 'PASS', `Strict success toaster + no error toast + API ok (${note})`);
  });
});
