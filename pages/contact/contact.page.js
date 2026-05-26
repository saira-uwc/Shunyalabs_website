import { BasePage } from '../base.page.js';

export class ContactPage extends BasePage {
  constructor(page) {
    super(page, {
      path: '/contact',
      moduleLabel: 'Contact',
      pageLabel: 'Contact Us',
    });
  }

  /**
   * Lead form field names match the live `/contact` page (`name`, `email`, `phone`, `message`).
   */
  async fillLeadForm({ name, email, phone, message }) {
    await this.page.locator('input[name="name"]').fill(name);
    await this.page.locator('input[name="email"]').fill(email);
    await this.page.locator('input[name="phone"]').fill(phone);
    await this.page.locator('textarea[name="message"]').fill(message);
  }

  async setLeadFormConsents({ agreeMarketing = false, agreeTerms = true } = {}) {
    if (agreeMarketing) {
      await this.page.locator('input[name="agreeMarketing"]').check();
    }
    if (agreeTerms) {
      await this.page.locator('input[name="agreeTerms"]').check();
    }
  }

  submitLeadForm() {
    return this.page.getByRole('button', { name: /^Submit$/ }).click();
  }

  /**
   * Resolved when the POST to send-mail completes (success or failure).
   */
  waitForLeadFormSubmissionResponse({ timeout = 30_000 } = {}) {
    return this.page.waitForResponse(
      (r) => r.url().includes('/api/send-mail') && r.request().method() === 'POST',
      { timeout }
    );
  }

  /**
   * Success copy is shown in a floating toast after submit. Prefer this over matching on
   * `body` text so the test only passes when the toast is actually visible.
   */
  successToastLocator() {
    return this.page.getByText(/received your response/i).first();
  }

  /**
   * Throws if send-mail HTTP status or JSON `success` is not a real success — matches what
   * production uses to decide success vs error toasts.
   */
  async assertLeadCaptureApiSucceeded(sendMailResponse) {
    const status = sendMailResponse.status();
    const raw = await sendMailResponse.text();
    let payload = {};
    try {
      payload = raw ? JSON.parse(raw) : {};
    } catch {
      payload = { success: false, message: raw ? `Non-JSON body: ${raw.slice(0, 200)}` : 'Empty body' };
    }

    const businessOk = payload && payload.success === true;
    if (!sendMailResponse.ok() || !businessOk) {
      const msg =
        typeof payload.message === 'string' && payload.message.length > 0
          ? payload.message
          : JSON.stringify(payload);
      throw new Error(
        `Lead form send-mail did not succeed (HTTP ${status}). API: ${msg}. ` +
          `The site should show an error toast for this; fix the integration or set CONTACT_MAIL_MOCK=true only for CI/smoke.`
      );
    }
  }
}
