# PROJECT_CONTEXT.md

This document summarizes the architecture, conventions, and reporting flow of the current automation suite. It is written so it can be reused as **context for a new project** with similar requirements (Figma‑aligned UI validation, CTAs, actions, reporting, and a public dashboard).

## 1. Project Overview
- End‑to‑end web automation built on Playwright with strict, Figma‑aligned content validation.
- Page Object Model (POM) for each page/module.
- Tests are split by **content**, **CTAs**, and **actions** per page.
- Results are written to CSV, Google Sheets, and a static dashboard.
- Dashboard is publishable to GitHub Pages or deployable to a VPS for a permanent URL.

## 2. Tech Stack
- **Test runner**: Playwright (`@playwright/test`)
- **Language/runtime**: Node.js (ES modules)
- **Reporting**:
  - Playwright HTML + JSON reports
  - CSV reports via custom writers
  - Google Sheets (Apps Script or Sheets API)
  - Static HTML dashboard generator
- **Hosting**: GitHub Pages for public dashboard (optional VPS via rsync)
- **Env**: `dotenv` for `.env` configuration

## 3. Dashboard & Report Requirements
- **Current run summary**: total/passed/failed/pass rate.
- **Module‑wise breakdown**: grouped by module name (preferred view).
- **Full run history**: last 100 runs retained.
- **Filters**: pass/fail/all for run details.
- **Exports**:
  - All runs summary (CSV)
  - All runs full data (JSON)
  - Current run (CSV)
  - Selected run (CSV/JSON)
- **Proof**: printable run detail view.
- **Failure details**: full error messages with “view more”.
- **Attachments**: screenshot/video/trace copied into `dashboard/playwright-artifacts`.

## 4. Folder Structure
- `pages/`  
  POM classes for each page/module. Each page object includes path + labels.

- `tests/modules/<module>/<page>/`  
  Three test types per page:
  - `content.spec.js` (strict copy/ordering)
  - `cta.spec.js` (CTA visibility + navigation)
  - `actions.spec.js` (interactive elements enabled/disabled)

- `test-data/expectations/`  
  Figma‑aligned expected content (per page, JSON).

- `test-data/snapshots/`  
  Captured page snapshots (header/main/footer text arrays).

- `test-data/page-registry.js`  
  Registry of all pages (module, label, path, status).

- `utils/`  
  Snapshot capture/validation, CSV writers, Google Sheets writers, and helpers.

- `reports/`  
  Playwright HTML and JSON reports.

- `test-results/`  
  CSV outputs (generated at runtime, git‑ignored).

- `dashboard/`  
  Generated static dashboard + history JSON + artifacts.

- `scripts/`  
  Orchestration (run tests + generate dashboard + publish), GitHub Pages deploy, and sheet update.

## 5. Coding Rules and Assumptions
- **Strict content validation**: order and exact text must match Figma expectations.
- **Snapshots are the baseline**: update snapshots only when approved content changes.
- **POM required**: each page must have a dedicated page object.
- **Tests are modular**: content/CTA/actions must be separated.
- **Non‑navigation controls are not CTAs**: dropdowns/selection controls should not be treated as navigation.
- **Disabled actions are not necessarily failures**: if disabled due to required input, treat as expected.
- **Sheets are a secondary system**: CSV is the canonical fallback; tests must never fail due to Sheets errors.
- **Artifacts preserved**: screenshots/videos/trace should remain accessible via the dashboard.
- **Stability rules**: single worker, explicit waits, and stable selectors for marketing sites.

## 6. Things That Must Never Be Skipped (Future Projects)
- **Run flow**: always run tests via `npm test` (ensures reporting + dashboard).
- **Report generation**: always generate the dashboard after tests.
- **History retention**: keep and append `dashboard/history/runs.json`.
- **Coverage sheet update**: always attempt to update coverage sheet after a run.
- **Artifacts handling**: always copy Playwright attachments into the dashboard folder.
- **Snapshot discipline**: never “fix” failures by loosening checks; update snapshots only when content changes are approved.
- **Page registry maintenance**: every new page must be registered with status (active/coming‑soon/missing).
- **Folder conventions**: new pages must follow `pages/` POM + `tests/modules/<module>/<page>/`.
- **Environment config**: always load `.env` and support:
  - `GOOGLE_SHEETS_WEB_APP_URL`
  - `PLAYWRIGHT_BROWSERS_PATH`
  - `PLAYWRIGHT_HOST_PLATFORM`
  - `DASHBOARD_SSH_HOST`, `DASHBOARD_SSH_USER`, `DASHBOARD_SSH_PATH`

## Reporting Flow (Execution Summary)
1. `npm test` → `scripts/run-tests-and-dashboard.sh`
2. `npx playwright test` generates:
   - Playwright HTML report
   - Playwright JSON report
3. CSV writers log all module tests to `test-results/*.csv`
4. `scripts/update-coverage-sheet.js` updates Google Sheet coverage
5. `dashboard/generate-dashboard.js` merges:
   - CSV results
   - Playwright JSON report (including attachments)
6. Dashboard is published via GitHub Pages or deployed to a VPS.
