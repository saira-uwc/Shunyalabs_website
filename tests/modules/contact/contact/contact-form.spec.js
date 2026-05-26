import { test, expect } from '@playwright/test';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { ContactPage } from '../../../../pages/contact/contact.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';

/**
 * The live form POSTs to `/api/send-mail` behind reCAPTCHA; unmocked runs return 403 in automation.
 * We mock the API to validate the full UX: Contact Sales → fill → submit → visible success toast.
 */
test.describe('Contact — lead form', () => {
  test.beforeEach(async ({ page }) => {
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
    expect(sendMailRes.ok()).toBeTruthy();

    await contact.waitForSuccessToastVisible({ timeout: 15_000 });

    await writeResult('Contact Sales lead form', 'PASS', 'Success toast visible (mocked send-mail)');
  });
});
