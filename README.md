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

## Coverage (live site)
- **28 active pages** in `test-data/page-registry.js` (desktop + mobile design compliance each)
- **New routes:** `/vak`, `/research`, `/about`, `/media`, `/documentation/batch-transcriptions/quickstart`
- **Homepage actions:** Custom SLMs carousel, major sections, language regions, hero/footer CTAs, nav/footer link health, Vāk demo iframe

## Common Commands
- Run all tests: `npm test`
- Run one module: `npx playwright test tests/modules/<module>`
- **Sync live site** (nav/footer expectations + all design baselines): `npm run sync:live`
- Generate dashboard: `npm run dashboard`
- Publish dashboard: `npm run dashboard:publish`

## Contact lead form tests

### Browser UI (every ~2 hours)
- `contact-form.spec.js` validates Contact Sales → fill form → success toaster.
- **CI always mocks** `/api/send-mail` (`CONTACT_MAIL_MOCK=true`) — no real email, no reCAPTCHA.
- Uses test address: `automated-test@example.com`

### Daily E2E email delivery (API — once per day)
- `contact-daily-mail.api.spec.js` calls `POST /api/send-mail` with header **`X-Automation-Secret`** (cannot be sent from the browser form).
- Runs on the **first CI slot after midnight IST** (~00:13 IST).
- **GitHub secret required:** `CONTACT_AUTOMATION_SECRET` (value shared separately by the web team).
- **HTTP 200** → real email sent. **HTTP 403** → secret missing/wrong (fail).
- TEMP: client no longer soft-passes HTTP 429 (“already ran today”); schedule is once/day so only 200 counts as pass.

Manual run:
```bash
CONTACT_AUTOMATION_SECRET='...' node scripts/contact-daily-e2e-mail.js
```

## Reporting
- CSV outputs in `test-results/` (ignored by git)
- Google Sheets integration via `GOOGLE-SHEETS-SETUP.md`

