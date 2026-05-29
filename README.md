# Shunyalabs Web Automation

Playwright-based automation suite with strict, Figma-aligned validations for
content, CTAs, and interactive actions across all site modules. Includes CSV +
Google Sheets reporting and a generated dashboard.

## Structure
- `pages/` Page Objects per module/page
- `tests/modules/` Content, CTA, and actions tests per page
- `test-data/expectations/` Figma-aligned expected copy (JSON)
- `utils/` Snapshot + reporting helpers
- `dashboard/` Generated report dashboard
- `requirements/` Deployment and automation guides

## Common Commands
- Run all tests: `npm test`
- Run one module: `npx playwright test tests/modules/<module>`
- Generate dashboard: `npm run dashboard`
- Publish dashboard: `npm run dashboard:publish`

## Contact lead form test
- By default the test calls the real `/api/send-mail` and **fails unless** the JSON has `success: true`, the **exact** success toaster copy is visible, and **no** visible error toast.
- **CI schedule:** the **first run each day** (local hours **00:00–01:59** in `Asia/Kolkata`, ~00:13 IST) uses a **real** send-mail call — at most **one lead email per day**. Every other ~2-hourly run sets `CONTACT_MAIL_MOCK=true` so the API is stubbed and no email is sent.
- If the daily live run fails (e.g. reCAPTCHA), the test fails and you know production mail is broken; mocked runs still validate the UI only.

## Reporting
- CSV outputs in `test-results/` (ignored by git)
- Google Sheets integration via `GOOGLE-SHEETS-SETUP.md`

