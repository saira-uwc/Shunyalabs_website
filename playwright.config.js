import { defineConfig } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Only override browser path locally when a matching vendored Chromium exists.
// Otherwise leave PLAYWRIGHT_BROWSERS_PATH unset so Playwright uses the default
// cache (~/.cache/ms-playwright) after `npx playwright install`.
const chromiumArchDir =
  process.arch === 'arm64' ? 'chrome-headless-shell-mac-arm64' : 'chrome-headless-shell-mac-x64';
const CHROMIUM_EXECUTABLE = path.join(
  process.cwd(),
  '.playwright',
  'chromium_headless_shell-1200',
  chromiumArchDir,
  'chrome-headless-shell'
);
const hasBundledChromium = fs.existsSync(CHROMIUM_EXECUTABLE);
if (!process.env.CI && hasBundledChromium) {
  process.env.PLAYWRIGHT_BROWSERS_PATH ??= path.join(process.cwd(), '.playwright');
}
const launchOptions = hasBundledChromium ? { executablePath: CHROMIUM_EXECUTABLE } : {};

// Match CI: mock contact send-mail so UI tests do not hit reCAPTCHA.
if (process.env.CONTACT_MAIL_MOCK == null) {
  process.env.CONTACT_MAIL_MOCK = 'true';
}

export default defineConfig({
  testDir: './tests',
  timeout: process.env.CI ? 180 * 1000 : 120 * 1000,

  use: {
    baseURL: 'https://www.shunyalabs.ai',
    headless: true,

    launchOptions,

    navigationTimeout: process.env.CI ? 45_000 : 30_000,
    actionTimeout: process.env.CI ? 20_000 : 15_000,
    expect: {
      timeout: process.env.CI ? 15_000 : 10_000,
    },

    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',

    ignoreHTTPSErrors: false,
    bypassCSP: false,
  },

  projects: [
    {
      name: 'api-contact',
      testMatch: /contact-daily-mail\.api\.spec\.js/,
    },
    {
      name: 'desktop',
      use: { viewport: { width: 1920, height: 1080 } },
      testIgnore: [/\/snapshots\//, /contact-daily-mail\.api\.spec\.js/],
    },
    {
      name: 'mobile',
      use: { viewport: { width: 375, height: 667 } },
      testIgnore: [
        /\/snapshots\//,
        /homepage\/nav\.spec\.js/,
        /nav-links-live\.spec\.js/,
        /\/zero-stt-universal\//,
        /contact-daily-mail\.api\.spec\.js/,
      ],
    },
  ],

  fullyParallel: true,
  retries: process.env.CI ? 1 : 1,
  workers: process.env.CI ? 3 : 2,

  reporter: [
    ['html', { outputFolder: 'reports/html-report', open: 'never' }],
    ['json', { outputFile: 'reports/json-report.json' }],
    ['list']
  ],
});