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
   * Throws (fails test) unless the success toast renders visibly within timeout.
   */
  async waitForSuccessToastVisible({ timeout = 15_000 } = {}) {
    await this.successToastLocator().waitFor({ state: 'visible', timeout });
  }
}
