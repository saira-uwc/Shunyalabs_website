# Standard QA Automation Setup Prompt

Copy the prompt below and paste it to Claude when starting automation for any new project.
Fill in only the `PROJECT INFO` section at the top — the rest is the standard framework.

---

```
I need you to set up a complete QA automation framework for my project using the standard
architecture described below. Follow every section exactly — this is a proven setup.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
PROJECT INFO  ← fill this in, everything else stays the same
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Project Name      : <e.g. "Acme SaaS Dashboard">
Project Type      : <website | web app | API | mobile web | SaaS>
Base URL          : <e.g. https://app.example.com>
GitHub Repo       : <e.g. my-org/my-repo>
GitHub Pages URL  : <e.g. https://my-org.github.io/my-repo/>
Branch            : <e.g. main>
Report Bot Name   : <e.g. "Acme QA Bot">

Test Modules & Items:
List every module and the pages/features/endpoints to test under it.

  Module: Homepage
    - Homepage  →  /

  Module: Product
    - Overview     →  /product
    - Features     →  /product/features
    - Pricing      →  /pricing

  Module: Auth
    - Login    →  /login
    - Signup   →  /signup

  (add/remove modules and items as needed)

Desktop-only tests (skip on mobile):
  - <list any spec files or modules that only make sense on desktop>
  - e.g. nav-dropdown.spec.js, sidebar.spec.js

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
STANDARD FRAMEWORK  ← do not change anything below this line
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━


## PART 1 — PROJECT INITIALIZATION

Run these commands to set up the project:

  npm init -y
  npm install --save-dev @playwright/test
  npm install dotenv nodemailer xlsx
  npx playwright install chromium

Set "type": "module" in package.json. We use ES modules (import/export) throughout.
Never use require().


## PART 2 — DIRECTORY STRUCTURE

Create this exact layout. Do not rename folders.

  project-root/
  ├── .github/
  │   └── workflows/
  │       └── scheduled-tests.yml        # CI/CD pipeline
  ├── pages/                             # Page Object Model
  │   ├── base.page.js                   # Base class all pages extend
  │   └── <module>/
  │       └── <slug>.page.js             # One file per test item
  ├── tests/
  │   ├── modules/                       # All runnable test specs
  │   │   └── <module>/
  │   │       └── <slug>/
  │   │           └── design.spec.js
  │   └── snapshots/                     # Baseline capture scripts (NOT run in CI)
  │       ├── generate-design-baselines.spec.js
  │       └── generate-page-snapshots.spec.js
  ├── test-data/
  │   ├── registry.js                    # Master list of all test items
  │   ├── design-specs/                  # Captured design/UI baselines (JSON)
  │   └── snapshots/                     # Captured page content snapshots (JSON)
  ├── utils/
  │   ├── design-validator.js            # Core validation engine
  │   ├── snapshot-validator.js          # Content diff detection
  │   ├── page-snapshot.js               # Snapshot capture helpers
  │   ├── humanize-error.js              # Convert raw errors to plain English
  │   ├── result-writer.js               # CSV output writer
  │   └── helpers.js                     # Shared Playwright helpers
  ├── dashboard/
  │   ├── generate-dashboard.js          # HTML dashboard generator
  │   └── history/
  │       └── runs.json                  # Test run history (last 100 runs)
  ├── scripts/
  │   ├── run-tests-and-dashboard.sh     # Main orchestration script
  │   ├── publish-dashboard.sh           # Git commit + push dashboard
  │   ├── generate-module-pages.js       # Auto-scaffold tests from registry
  │   ├── update-coverage-sheet.js       # Sync results to Google Sheets
  │   └── email-daily-report.js          # Send HTML email report
  ├── reports/                           # Playwright output (gitignored)
  ├── test-results/                      # CSV results (gitignored)
  ├── .env                               # Local secrets (gitignored)
  ├── .gitignore
  ├── package.json
  └── playwright.config.js


## PART 3 — PLAYWRIGHT CONFIG (playwright.config.js)

  import { defineConfig } from '@playwright/test';

  if (!process.env.CI) {
    process.env.PLAYWRIGHT_BROWSERS_PATH ||= path.join(process.cwd(), '.playwright');
  }

  export default defineConfig({
    testDir: './tests',
    timeout: 120_000,

    use: {
      baseURL: '<BASE_URL from PROJECT INFO>',
      headless: true,
      navigationTimeout: 30_000,
      actionTimeout: 15_000,
      expect: { timeout: 10_000 },
      trace: 'on-first-retry',
      video: 'retain-on-failure',
      screenshot: 'only-on-failure',
    },

    projects: [
      {
        name: 'desktop',
        use: { viewport: { width: 1920, height: 1080 } },
      },
      {
        name: 'mobile',
        use: { viewport: { width: 375, height: 667 } },
        // Mobile always excludes baseline generators.
        // Also exclude any desktop-only specs listed in PROJECT INFO.
        testIgnore: [/\/snapshots\//],
      },
    ],

    fullyParallel: true,
    retries: 0,
    workers: process.env.CI ? 3 : undefined,

    reporter: [
      ['html', { outputFolder: 'reports/html-report', open: 'never' }],
      ['json', { outputFile: 'reports/json-report.json' }],
      ['list'],
    ],
  });

Rules:
- NEVER run "npx playwright test" alone — always target "tests/modules" explicitly
  to prevent baseline generators in tests/snapshots/ from running as normal tests.
- Viewport detection at runtime: page.viewportSize().width <= 768 → mobile.
- Adding a new viewport = adding a project here. Zero changes to test files needed.


## PART 4 — ITEM REGISTRY (test-data/registry.js)

This is the single source of truth. Every page object, test file, baseline, and
report entry is derived from this list. Never hardcode module names anywhere else.

  export const registry = [
    {
      moduleKey:   'homepage',    // folder name — lowercase, kebab-case, no spaces
      moduleLabel: 'Homepage',    // human-readable name for reports
      itemLabel:   'Homepage',    // human-readable name for this item
      slug:        'homepage',    // file name — lowercase, kebab-case
      path:        '/',           // URL path appended to baseURL
      status:      'active',      // 'active' | 'coming-soon' | 'skip'
    },
    // repeat for every item in PROJECT INFO
  ];

Only items with status: 'active' are picked up by the scaffold script and test runner.


## PART 5 — PAGE OBJECT MODEL

### Base Class (pages/base.page.js)

  export class BasePage {
    constructor(page, { path, moduleLabel, itemLabel }) {
      this.page        = page;
      this.path        = path;
      this.moduleLabel = moduleLabel;
      this.itemLabel   = itemLabel;
    }

    async open() {
      await this.page.goto(this.path, { waitUntil: 'domcontentloaded' });
      await this.page.waitForLoadState('networkidle', { timeout: 5000 }).catch(() => {});
    }

    // Add shared helpers here: getMainCTAs(), getMainActions(), etc.
  }

### Module Page (pages/<module>/<slug>.page.js)

  import { BasePage } from '../base.page.js';

  export class <ClassName>Page extends BasePage {
    constructor(page) {
      super(page, {
        path:        '<path>',
        moduleLabel: '<moduleLabel>',
        itemLabel:   '<itemLabel>',
      });
    }
    // Add page-specific methods here
  }

Use scripts/generate-module-pages.js to auto-create all page objects and test files
from the registry. Never write them by hand.


## PART 6 — TEST FILES (tests/modules/<module>/<slug>/design.spec.js)

Every spec file is identical in structure. Generate all of them from the registry.

  import { test, expect } from '@playwright/test';
  import { registry } from '../../../../test-data/registry.js';
  import { runValidation } from '../../../../utils/design-validator.js';

  const item = registry.find(
    (r) => r.moduleKey === '<moduleKey>' && r.slug === '<slug>'
  );

  test.describe(`${item.moduleLabel} - ${item.itemLabel}`, () => {
    test('design compliance', async ({ page }) => {
      const failures = await runValidation({ page, item });

      for (const f of failures) {
        expect.soft(null, `[${f.section}] ${f.message}`).toBeTruthy();
      }

      expect(
        failures.length,
        `${failures.length} issue(s) found`
      ).toBe(0);
    });
  });

Key rules:
- Use expect.soft() so ALL failures are collected, not just the first one.
- Each test file tests exactly one item.
- The test name follows: "<moduleLabel> - <itemLabel> > design compliance"


## PART 7 — VALIDATION ENGINE (utils/design-validator.js)

The core engine visits each item and compares it against its stored baseline.

What to validate per item (adapt to project type):
  - Headings     : text, HTML tag, color, font-size, font-weight, font-family
  - Content      : full visible text across nav / main / footer with diff detection
  - Images       : loaded state, alt text, count, broken URLs
  - Links / CTAs : presence, href, target, label
  - Buttons      : presence, enabled/disabled, label text
  - Sections     : order, background colors
  - Global styles: body font, nav/footer backgrounds
  - Console logs : capture any JS errors on the page

Viewport-aware baseline loading:

  export function loadBaseline(moduleKey, slug, viewport = 'desktop') {
    const suffix = viewport === 'mobile' ? '.mobile.json' : '.json';
    const file = path.join(SPECS_DIR, `${moduleKey}-${slug}${suffix}`);
    if (!fs.existsSync(file)) return null;
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  }

  function detectViewport(page) {
    const size = page.viewportSize();
    return size && size.width <= 768 ? 'mobile' : 'desktop';
  }

Baseline file naming convention:
  Desktop  →  test-data/design-specs/<module>-<slug>.json
  Mobile   →  test-data/design-specs/<module>-<slug>.mobile.json

Each baseline JSON shape (adapt fields to what is relevant for the project):
  {
    "viewport": "desktop",
    "viewportWidth": 1920,
    "capturedAt": "...",
    "headings": [{ "tag": "h1", "text": "...", "color": "...", "fontSize": "..." }],
    "images":   [{ "src": "...", "alt": "...", "loaded": true }],
    "links":    [{ "text": "...", "href": "..." }],
    "buttons":  [{ "text": "...", "disabled": false }],
    "sections": [{ "heading": "...", "backgroundColor": "..." }],
    "bodyFont": "...",
    "navBg":    "...",
    "footerBg": "..."
  }

Tolerance rules (do not tighten these):
  Colors  : RGB values ± 10 per channel
  Sizes   : pixel values ± 2px
  Fonts   : normalize family name before comparing (strip quotes, lowercase)


## PART 8 — BASELINE GENERATORS (tests/snapshots/)

Two scripts that capture current website state as the "expected" baseline.
These live in tests/snapshots/ and are NEVER run during normal test execution.

generate-design-baselines.spec.js
  - Iterates registry (active items only)
  - Visits each page with the current viewport
  - Extracts all validatable properties
  - Saves JSON to test-data/design-specs/ with viewport-aware suffix

generate-page-snapshots.spec.js
  - Captures full visible text (nav / main / footer as arrays)
  - Saves JSON to test-data/snapshots/ with viewport-aware suffix

Viewport-aware suffix logic (use in both generators):

  const size   = page.viewportSize();
  const suffix = size && size.width <= 768 ? '.mobile.json' : '.json';

Run baselines with:
  npm run baseline:desktop   → desktop baselines
  npm run baseline:mobile    → mobile baselines
  npm run snapshot:desktop   → desktop content snapshots
  npm run snapshot:mobile    → mobile content snapshots

Always re-run baselines when the design intentionally changes. Commit the output files.


## PART 9 — ERROR HUMANIZATION (utils/humanize-error.js)

Translate every raw Playwright error into plain English before writing to the sheet
or dashboard. Frame every message as:
  "As per design, <X> should be <expected>, but on the live site it is <actual>"

Handle these cases at minimum:
  - Color mismatch   : "heading color should be X, but is Y"
  - Size mismatch    : "font-size should be X, but is Y"
  - Text mismatch    : "text should be '...' but found '...'"
  - Missing element  : "'...' button/link/section not found on the page"
  - Navigation error : "clicking '...' should go to /path, but went to /other"
  - Timeout          : "page took too long to load (>30s)"
  - Snapshot diff    : "content changed in <section> — expected '...' but found '...'"
  - Console error    : "JavaScript error on the page: ..."

Always strip ANSI color codes before processing error strings.


## PART 10 — DASHBOARD (dashboard/generate-dashboard.js)

Generate a self-contained dashboard/index.html. No external CDN dependencies.
All CSS and JS must be inlined.

Dashboard must show:
  Summary bar    : Total | Passed | Failed | Pass Rate (color-coded)
  Viewport bar   : Desktop pass rate | Mobile pass rate (side by side)
  Module table   : Module | Desktop result | Mobile result | Status badge
  History chart  : Trend line of pass rate across last 100 runs
  Run selector   : Click any past run to view its results
  Failure detail : Per failing test — module, viewport icon, error message
  Filter buttons : All | Passed | Failed
  Export buttons : Download CSV or JSON for any run

Data sources:
  1. reports/json-report.json      → latest Playwright results
  2. dashboard/history/runs.json   → all historical runs (append, keep last 100)

Test naming rule for unique rows per viewport:
  Prefix every test name with [desktop] or [mobile] when writing to sheet/dashboard.
  This ensures desktop and mobile results get separate rows, not overwrite each other.

Dashboard is committed to the repo and served via GitHub Pages.
Rebuild command: node dashboard/generate-dashboard.js --rebuild
  (reads from history/runs.json without re-running tests)


## PART 11 — GOOGLE SHEETS SYNC (scripts/update-coverage-sheet.js)

After every test run, push results to a Google Sheet.

Sheet columns (in order):
  Test ID | Module | Test Name | Viewport | Status | Reason | Screenshot | Updated At

Rules:
  - Test ID  : first 6 chars of SHA1(testName), prefixed with "TC" → e.g. "TCa3f7b2"
  - testName : full name INCLUDING [desktop]/[mobile] prefix (so each viewport = unique row)
  - Status   : "PASS" or "FAIL"
  - Reason   : humanized error message (use humanize-error.js), empty if passed
  - Screenshot: URL to artifact in dashboard/playwright-artifacts/ if available

Transport: POST to a Google Apps Script web app URL.
The Apps Script redirects POST → GET (302). Handle this by:
  1. Fetch with redirect: 'manual'
  2. If response is 3xx, re-POST to the Location header URL

Sheet URL for email/reports: https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}
(Construct from GOOGLE_SHEETS_SPREADSHEET_ID env var — do not hardcode)


## PART 12 — EMAIL REPORT (scripts/email-daily-report.js)

Read from dashboard/history/runs.json. Use only the LATEST run.
Send one HTML email per trigger (not per day's runs).

Email structure (top to bottom):
  1. Header gradient banner
       Title: "QA Automation Report"
       Subtitle: <PROJECT_NAME>
       Meta: "Latest Run: <date> | Total Runs: <N>"

  2. Stats row (4 cards, equal width)
       Total  |  Passed  |  Failed  |  Pass Rate
       (Failed card turns red when failed > 0)

  3. Viewport summary bar (2 cards side by side)
       🖥️ Desktop  X/Y (Z%)   |   📱 Mobile  X/Y (Z%)
       Color: green ≥90%, amber ≥70%, red <70%

  4. Module results table
       Columns: Module | 🖥️ Desktop | 📱 Mobile | Status
       Desktop/Mobile cells: show "passed / failed of total"
       Status badge: green PASS or red "N FAIL"
       Sort: most failures first, then alphabetical

  5. Failure details section (only if failures > 0)
       Grouped by module
       Each failure: 🖥️/📱 icon + test name + first 120 chars of reason

  6. CTA buttons (centered)
       [📊 View Dashboard]  [📋 View Test Sheet]
       Sheet button only shown if GOOGLE_SHEETS_SPREADSHEET_ID is set

  7. Footer
       "Thanks & Regards, <REPORT_BOT_NAME>"
       "This is an automated report generated from the latest test run."

Subject line: "QC <PROJECT_NAME> – <Day, Mon DD YYYY> – <N>% Pass Rate"

Sending: POST { to, subject, body } to EMAIL_WEB_APP_URL (Google Apps Script).
Handle the 302 redirect same as the sheet sync (re-POST to Location URL).
Timezone for all dates: Asia/Kolkata (IST).


## PART 13 — CI/CD PIPELINE (.github/workflows/scheduled-tests.yml)

Four jobs. Triggers: workflow_dispatch (manual) + repository_dispatch (API).

JOB 1 — run-tests
  Condition  : not 'send-email', not 'deploy-dashboard'
  Runner     : ubuntu-latest
  Steps:
    1. Checkout with PAT token (needed for git push later)
    2. Setup Node 20
    3. npm ci (or npm install if no lockfile)
    4. Cache Playwright browsers (key: playwright-{os}-{hash of package.json})
    5. Install Playwright browsers (only on cache miss)
    6. Install Playwright system deps (on cache hit too)
    7. Run tests:
         set +e
         npx playwright test tests/modules
         echo "exit_code=$?" >> "$GITHUB_OUTPUT"
    8. Generate dashboard (if: always())
         node dashboard/generate-dashboard.js
    9. Sync Google Sheet (if: always(), non-fatal)
         node scripts/update-coverage-sheet.js || echo "non-fatal"
    10. Commit + push dashboard (if: always())
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add dashboard/
          if ! git diff --cached --quiet; then
            git commit -m "Update dashboard $(date -u +'%Y-%m-%d %H:%M UTC')"
            git pull --rebase origin ${{ github.ref_name }} || true
            git push origin HEAD:${{ github.ref_name }}
          fi
    11. Upload to GitHub Pages (if: always())
          actions/upload-pages-artifact@v3  path: dashboard
    12. Fail if tests failed
          if: steps.tests.outputs.exit_code != '0'
          run: exit 1

JOB 2 — rebuild-dashboard
  Condition : event.action == 'deploy-dashboard'
  Steps: checkout → node dashboard/generate-dashboard.js --rebuild → commit + push → upload Pages

JOB 3 — deploy
  Needs      : [run-tests, rebuild-dashboard]
  Condition  : always() and at least one succeeded
  Uses       : actions/deploy-pages@v4

JOB 4 — send-daily-email
  Condition : event.action == 'send-email'
  Steps: checkout → npm ci → node scripts/email-daily-report.js

Permissions required at workflow level:
  contents: write
  pages: write
  id-token: write

Concurrency group: "scheduled-pages" with cancel-in-progress: false


## PART 14 — ORCHESTRATION SCRIPT (scripts/run-tests-and-dashboard.sh)

#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

# Load .env for local runs
if [[ -f ".env" ]]; then set -a; source ".env"; set +a; fi

# Create output dirs
mkdir -p reports test-results dashboard/history

# Run tests, capture exit code without failing immediately
TEST_EXIT=0
set +e
npx playwright test tests/modules
TEST_EXIT=$?
set -e

# Always generate dashboard (even if tests failed)
echo "--- Generating dashboard ---"
node dashboard/generate-dashboard.js

# Sync sheet (non-fatal)
echo "--- Syncing Google Sheet ---"
node scripts/update-coverage-sheet.js || echo "Sheet sync failed (non-fatal)"

# Publish locally (skip in CI — CI does its own git push)
if [[ -z "${CI:-}" ]]; then
  bash scripts/publish-dashboard.sh || echo "Publish failed (non-fatal)"
fi

exit "$TEST_EXIT"


## PART 15 — PUBLISH SCRIPT (scripts/publish-dashboard.sh)

#!/usr/bin/env bash
set -euo pipefail
BRANCH="$(git rev-parse --abbrev-ref HEAD)"

git pull --rebase origin "$BRANCH" 2>/dev/null || true
git add dashboard/index.html dashboard/history/runs.json

if git diff --cached --quiet; then
  echo "No dashboard changes."
  exit 0
fi

git commit -m "Update dashboard $(date -u +'%Y-%m-%d %H:%M UTC')"
git push origin "$BRANCH"
echo "Dashboard published."


## PART 16 — NPM SCRIPTS (package.json)

"scripts": {
  "test"                    : "bash scripts/run-tests-and-dashboard.sh",
  "test:headed"             : "npx playwright test tests/modules --headed",
  "test:modules"            : "npx playwright test tests/modules",
  "test:desktop"            : "npx playwright test tests/modules --project=desktop",
  "test:mobile"             : "npx playwright test tests/modules --project=mobile",
  "dashboard"               : "node dashboard/generate-dashboard.js",
  "dashboard:open"          : "node dashboard/generate-dashboard.js && open dashboard/index.html",
  "dashboard:publish"       : "node dashboard/generate-dashboard.js && bash scripts/publish-dashboard.sh",
  "report"                  : "npx playwright show-report reports/html-report",
  "generate:modules"        : "node scripts/generate-module-pages.js",
  "baseline:desktop"        : "npx playwright test tests/snapshots/generate-design-baselines.spec.js --project=desktop",
  "baseline:mobile"         : "npx playwright test tests/snapshots/generate-design-baselines.spec.js --project=mobile",
  "snapshot:desktop"        : "npx playwright test tests/snapshots/generate-page-snapshots.spec.js --project=desktop",
  "snapshot:mobile"         : "npx playwright test tests/snapshots/generate-page-snapshots.spec.js --project=mobile"
}


## PART 17 — ENVIRONMENT VARIABLES

GitHub Secrets (set in repo Settings → Secrets → Actions):
  GITHUB_PAT                   Personal Access Token (repo scope) — needed for git push in CI
  GOOGLE_SHEETS_WEB_APP_URL    Google Apps Script URL — receives test coverage rows
  GOOGLE_SHEETS_SPREADSHEET_ID Google Sheet ID — used to build the sheet URL for email
  GOOGLE_SHEETS_SHEET_NAME     Sheet tab name (default: "test-coverage")
  EMAIL_WEB_APP_URL            Google Apps Script URL — sends HTML email via Gmail
  REPORT_RECIPIENTS            Comma-separated list of email addresses
  DASHBOARD_PUBLIC_URL         Public URL of the GitHub Pages dashboard

Local .env (gitignored — never commit):
  GOOGLE_SHEETS_WEB_APP_URL=https://script.google.com/macros/s/.../exec
  DASHBOARD_PUBLIC_URL=https://my-org.github.io/my-repo/

Env vars the CI workflow must pass to each step that needs them:
  update-coverage-sheet.js step:
    GOOGLE_SHEETS_WEB_APP_URL, GOOGLE_SHEETS_SPREADSHEET_ID, GOOGLE_SHEETS_SHEET_NAME,
    DASHBOARD_PUBLIC_URL
  email-daily-report.js step:
    PROJECT_NAME, REPORT_RECIPIENTS, DASHBOARD_PUBLIC_URL,
    EMAIL_WEB_APP_URL, GOOGLE_SHEETS_SPREADSHEET_ID


## PART 18 — .gitignore

node_modules/
.playwright/
reports/
test-results/
*.log
.env

DO NOT gitignore these — they must be committed:
  dashboard/index.html
  dashboard/history/runs.json
  dashboard/playwright-artifacts/
  test-data/design-specs/
  test-data/snapshots/


## PART 19 — GOOGLE APPS SCRIPT SETUP

You need two separate Google Apps Script web apps.

### Script 1 — Sheet Updater

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  if (data.action !== 'updateCoverage') {
    return ContentService.createTextOutput(JSON.stringify({ ok: false, error: 'unknown action' }));
  }
  const ss    = SpreadsheetApp.openById(data.spreadsheetId);
  const sheet = ss.getSheetByName(data.sheetName || 'test-coverage')
             || ss.insertSheet(data.sheetName || 'test-coverage');

  // Write header if sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Test ID','Module','Test Name','Viewport','Status','Reason','Screenshot','Updated At']);
  }

  // Upsert each row by Test ID (column 1)
  const rows = data.rows || [];
  rows.forEach(row => {
    const existing = sheet.createTextFinder(row[0]).findNext();
    if (existing) {
      sheet.getRange(existing.getRow(), 1, 1, row.length).setValues([row]);
    } else {
      sheet.appendRow(row);
    }
  });

  return ContentService.createTextOutput(JSON.stringify({ ok: true, updated: rows.length }));
}

### Script 2 — Email Sender

function doPost(e) {
  const data = JSON.parse(e.postData.contents);
  GmailApp.sendEmail(data.to, data.subject, '', { htmlBody: data.body });
  return ContentService.createTextOutput(JSON.stringify({ ok: true }));
}

Deploy both as:
  Execute as: Me
  Who has access: Anyone

Save the web app URLs as GitHub secrets.


## PART 20 — SETUP ORDER

Do these steps in sequence. Do not skip or reorder.

  1.  Initialize project (npm init, install deps, set "type":"module")
  2.  Create directory structure (all folders, empty .gitkeep files where needed)
  3.  Fill test-data/registry.js with all items from PROJECT INFO
  4.  Write playwright.config.js with desktop + mobile projects
  5.  Write pages/base.page.js
  6.  Write scripts/generate-module-pages.js
  7.  Run: node scripts/generate-module-pages.js
      → creates all page objects and design.spec.js files automatically
  8.  Write utils/design-validator.js (core validation engine)
  9.  Write utils/snapshot-validator.js + utils/page-snapshot.js
  10. Write utils/humanize-error.js
  11. Write utils/result-writer.js + utils/helpers.js
  12. Write tests/snapshots/generate-design-baselines.spec.js
  13. Write tests/snapshots/generate-page-snapshots.spec.js
  14. Capture baselines:
        npm run baseline:desktop
        npm run baseline:mobile
        npm run snapshot:desktop
        npm run snapshot:mobile
  15. Run tests to verify all pass:
        npm run test:modules
  16. Write dashboard/generate-dashboard.js
  17. Write scripts/update-coverage-sheet.js
  18. Write scripts/email-daily-report.js
  19. Write scripts/run-tests-and-dashboard.sh + scripts/publish-dashboard.sh
  20. Write .github/workflows/scheduled-tests.yml
  21. Write all npm scripts in package.json
  22. Write .gitignore
  23. Commit everything (including baseline files)
  24. Add all GitHub secrets
  25. Enable GitHub Pages: Settings → Pages → Source: GitHub Actions
  26. Run workflow manually to verify end-to-end


## PART 21 — KEY ARCHITECTURE RULES (always follow these)

  Rule 1 — Single source of truth
    The registry drives everything. No module name, page label, or slug is
    hardcoded anywhere except registry.js.

  Rule 2 — Auto-scaffold everything
    generate-module-pages.js creates all page objects and spec files.
    Adding a new page = add to registry, run scaffold script, capture baselines.

  Rule 3 — Viewport is a first-class dimension
    Desktop and mobile are separate Playwright projects.
    Each project has its own baselines (separate JSON files).
    Each has its own sheet rows ([desktop]/[mobile] prefix in test names).
    No test file needs to change when adding a new viewport.

  Rule 4 — Collect all failures, never stop early
    Use expect.soft() in every test. The validator must collect all failures
    and return them as an array. Never throw on the first failure.

  Rule 5 — Non-blocking pipeline
    - Dashboard always generates, even when tests fail.
    - Sheet sync failure is non-fatal (log warning, continue).
    - Email is a separate CI job, never blocks test results.

  Rule 6 — Humanize every error
    Raw Playwright errors never appear in the sheet or email.
    Always pass through humanize-error.js before storing or sending.

  Rule 7 — History is append-only
    runs.json is never cleared. Each run appends one entry. Trim to last 100.

  Rule 8 — Baselines are committed
    test-data/design-specs/ and test-data/snapshots/ are tracked in git.
    A baseline update = intentional commit, not an accident.

  Rule 9 — Test commands always target tests/modules
    Never run "npx playwright test" without a path. Always:
      npx playwright test tests/modules
    This prevents baseline generators from running as normal tests.

  Rule 10 — Sheet URL from spreadsheet ID
    Construct the sheet URL as:
      https://docs.google.com/spreadsheets/d/${GOOGLE_SHEETS_SPREADSHEET_ID}
    Never require a separate GOOGLE_SHEET_URL secret.
```
