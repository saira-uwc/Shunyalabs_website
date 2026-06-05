import { defineConfig, devices } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { MOBILE_TEST_IGNORE } from './utils/browser-matrix.js';

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

const sharedIgnore = [/\/snapshots\//, /contact-daily-mail\.api\.spec\.js/];
const jsonOutput = process.env.PW_JSON_OUTPUT || 'reports/json-report.json';

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
      name: 'desktop-chrome',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1920, height: 1080 },
      },
      testIgnore: sharedIgnore,
    },
    {
      name: 'desktop-safari',
      use: {
        ...devices['Desktop Safari'],
        viewport: { width: 1920, height: 1080 },
      },
      testIgnore: sharedIgnore,
    },
    {
      name: 'mobile-ios',
      use: { ...devices['iPhone 14'] },
      testIgnore: MOBILE_TEST_IGNORE,
    },
    {
      name: 'mobile-android',
      use: { ...devices['Pixel 7'] },
      testIgnore: MOBILE_TEST_IGNORE,
    },
  ],

  fullyParallel: false,
  retries: process.env.CI ? 1 : 1,
  workers: 1,

  reporter: [
    ['html', { outputFolder: 'reports/html-report', open: 'never' }],
    ['json', { outputFile: jsonOutput }],
    ['list'],
  ],
});
