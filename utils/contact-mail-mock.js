/**
 * Browser contact form helpers — mock send-mail and stub reCAPTCHA so UI tests
 * do not depend on third-party scripts under parallel CI load.
 */

export function contactMailMockEnabled() {
  const v = process.env.CONTACT_MAIL_MOCK;
  return v === 'true' || v === '1';
}

export async function installContactFormTestHooks(page) {
  await page.addInitScript(() => {
    window.grecaptcha = {
      ready: (fn) => {
        if (typeof fn === 'function') fn();
      },
      execute: async () => 'playwright-mock-recaptcha-token',
      render: () => 'mock-widget-id',
    };
  });

  await page.route('**/api/send-mail', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true, message: 'ok' }),
    });
  });
}
