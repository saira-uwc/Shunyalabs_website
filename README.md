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
- By default the test calls the real `/api/send-mail` and **fails unless** the JSON has `success: true`, the **exact** success toaster copy is visible (`We have received your response. We'll contact you shortly. Thank you!`, allowing a curly apostrophe in *We’ll*), and **no** visible error toast (Sonner `[data-type="error"]` or common failure copy).
- CI sets `CONTACT_MAIL_MOCK=true` in `.github/workflows/scheduled-tests.yml` so the job can pass without reCAPTCHA; keep that off locally when validating production behavior.

## Reporting
- CSV outputs in `test-results/` (ignored by git)
- Google Sheets integration via `GOOGLE-SHEETS-SETUP.md`

