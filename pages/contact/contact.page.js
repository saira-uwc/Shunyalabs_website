import { BasePage } from '../base.page.js';

export class ContactPage extends BasePage {
  constructor(page) {
    super(page, {
      path: '/contact',
      moduleLabel: 'Contact',
      pageLabel: 'Contact Us',
    });
  }

  leadFormNameInput() {
    return this.page.locator('input[name="name"]');
  }

  leadFormSubmitButton() {
    return this.page.getByRole('button', { name: /^Submit$/ });
  }

  /**
   * Wait until the lead form is painted and interactive (avoids flaky networkidle timeouts).
   */
  async waitForLeadFormReady({ timeout = 30_000 } = {}) {
    await this.leadFormNameInput().waitFor({ state: 'visible', timeout });
    await this.page.locator('input[name="email"]').waitFor({ state: 'visible', timeout });
    await this.page.locator('textarea[name="message"]').waitFor({ state: 'visible', timeout });
    await this.leadFormSubmitButton().waitFor({ state: 'visible', timeout });
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
    return this.leadFormSubmitButton().click();
  }

  /**
   * Resolved when the POST to send-mail completes (success or failure).
   */
  waitForLeadFormSubmissionResponse({ timeout = 45_000 } = {}) {
    return this.page.waitForResponse(
      (r) => r.url().includes('/api/send-mail') && r.request().method() === 'POST',
      { timeout }
    );
  }

  /**
   * Exact success toast copy from production (Screenshot / live site). Apostrophe may be ASCII
   * or Unicode RIGHT SINGLE QUOTATION MARK (U+2019) in “We’ll”.
   */
  expectedSuccessToastPattern() {
    return /We have received your response\.\s+We['\u2019]ll contact you shortly\.\s+Thank you!/i;
  }

  strictSuccessToastLocator() {
    const re = this.expectedSuccessToastPattern();
    const sonner = this.page.locator('[data-sonner-toast]').filter({ hasText: re });
    return sonner.or(this.page.getByText(re));
  }

  /** @deprecated Prefer strict matcher — kept for readability in logs */
  successToastLocator() {
    return this.strictSuccessToastLocator().first();
  }

  async waitForSuccessToastVisible({ timeout = 25_000 } = {}) {
    await this.strictSuccessToastLocator().first().waitFor({ state: 'visible', timeout });
  }

  /**
   * Fails when a typical error toast is visibly shown (Sonner markup or common failure copy).
   */
  async assertNoVisibleSubmissionErrorToast() {
    const ok = this.expectedSuccessToastPattern();
    const sonnerErr = this.page.locator('[data-sonner-toast][data-type="error"]');
    for (let i = 0; i < Math.min(await sonnerErr.count(), 10); i++) {
      const loc = sonnerErr.nth(i);
      if (await loc.isVisible()) {
        const text = await loc.innerText().catch(() => '');
        throw new Error(
          `Error toast appeared (expected success toaster only): "${text.trim().slice(0, 300)}"`
        );
      }
    }

    const failureCopy =
      /reCAPTCHA\s+verification\s+failed|Verification\s+failed\.?|Something went wrong|Failed to submit|Unable to (submit|send)|please try again|Network error|\b\d{3}\s+error\b/i;

    const matches = this.page.getByText(failureCopy);
    const max = Math.min(await matches.count(), 25);
    for (let i = 0; i < max; i++) {
      const loc = matches.nth(i);
      if (!(await loc.isVisible())) continue;
      const text = (await loc.innerText().catch(() => '')).replace(/\s+/g, ' ').trim();
      if (ok.test(text)) continue;
      throw new Error(`Failure UI text is visible after submit (expected success toaster only): "${text.slice(0, 300)}"`);
    }
  }

  /**
   * Pass only when the canonical success toaster is visible and no submission error toaster/text is visible.
   */
  async assertLeadFeedbackSuccessPresentationOnly({ toastTimeout = 15_000 } = {}) {
    await this.waitForSuccessToastVisible({ timeout: toastTimeout });
    await this.assertNoVisibleSubmissionErrorToast();
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
