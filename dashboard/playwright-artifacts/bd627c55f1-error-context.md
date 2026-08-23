# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/contact/contact/contact-daily-mail.api.spec.js >> Contact — daily E2E email (API) >> send-mail with X-Automation-Secret delivers email
- Location: tests/modules/contact/contact/contact-daily-mail.api.spec.js:13:3

# Error details

```
Error: send-mail failed: HTTP 402 — Payment required

DEPLOYMENT_DISABLED

cle1::f6f5l-1787457755375-ca62ee13228b


expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { createResultWriter } from '../../../../utils/result-writer.js';
  3  | import {
  4  |   runContactDailyE2eMail,
  5  |   shouldRunContactDailyE2e,
  6  | } from '../../../../utils/contact-daily-e2e-mail.js';
  7  | 
  8  | /**
  9  |  * Daily real email delivery — API only (X-Automation-Secret cannot be sent from the browser form).
  10 |  * CI: force with CONTACT_DAILY_E2E=true. Browser UI test stays mocked — see contact-form.spec.js
  11 |  */
  12 | test.describe('Contact — daily E2E email (API)', () => {
  13 |   test('send-mail with X-Automation-Secret delivers email', async ({ request }) => {
  14 |     // Allow forced real-mail runs even outside the midnight IST window.
  15 |     const forceLocal = process.env.CONTACT_DAILY_E2E === 'true' || process.env.CONTACT_REAL_MAIL === 'true';
  16 |     test.skip(!forceLocal && !shouldRunContactDailyE2e(), 'Not the daily E2E slot (00:00–01:59 Asia/Kolkata)');
  17 | 
  18 |     const secret = process.env.CONTACT_AUTOMATION_SECRET || '';
  19 |     test.skip(!secret, 'CONTACT_AUTOMATION_SECRET not configured');
  20 | 
  21 |     const { writeResult } = await createResultWriter({
  22 |       moduleName: 'Contact',
  23 |       reportFileName: 'module-actions-report.csv',
  24 |     });
  25 | 
  26 |     const baseURL = process.env.CONTACT_API_BASE_URL || 'https://www.shunyalabs.ai';
  27 |     const fetchImpl = async (url, init) => {
  28 |       const response = await request.fetch(url, {
  29 |         method: init.method,
  30 |         headers: init.headers,
  31 |         data: init.body,
  32 |       });
  33 |       return {
  34 |         status: response.status(),
  35 |         text: () => response.text(),
  36 |       };
  37 |     };
  38 | 
  39 |     const result = await runContactDailyE2eMail({ secret, baseURL, fetchImpl });
  40 |     const testPoint = 'Contact daily E2E email (API)';
  41 | 
  42 |     if (result.ok) {
  43 |       const note =
  44 |         result.mode === 'success'
  45 |           ? `LIVE send-mail HTTP ${result.status} — ${result.message}`
  46 |           : `HTTP ${result.status} — ${result.message} (already sent today — server 24h limit)`;
  47 |       await writeResult(testPoint, 'PASS', note);
  48 |       expect(result.mode).toMatch(/success|already_ran/);
  49 |       return;
  50 |     }
  51 | 
  52 |     await writeResult(testPoint, 'FAIL', `HTTP ${result.status} — ${result.message}`);
> 53 |     expect(result.ok, `send-mail failed: HTTP ${result.status} — ${result.message}`).toBe(true);
     |                                                                                      ^ Error: send-mail failed: HTTP 402 — Payment required
  54 |   });
  55 | });
  56 | 
```