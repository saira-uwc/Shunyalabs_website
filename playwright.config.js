import { defineConfig } from '@playwright/test';
import fs from 'fs';
import path from 'path';

// Only override browser path locally (CI uses default ~/.cache/ms-playwright)
if (!process.env.CI) {
  process.env.PLAYWRIGHT_BROWSERS_PATH ||= path.join(process.cwd(), '.playwright');
}
const CHROMIUM_EXECUTABLE = path.join(
  process.cwd(),
  '.playwright',
  'chromium_headless_shell-1200',
  'chrome-headless-shell-mac-x64',
  'chrome-headless-shell'
);
const launchOptions = fs.existsSync(CHROMIUM_EXECUTABLE)
  ? { executablePath: CHROMIUM_EXECUTABLE }
  : {};

export default defineConfig({
  testDir: './tests',
  timeout: 120 * 1000, // 2 minutes per test (was 5 min)

  use: {
    baseURL: 'https://www.shunyalabs.ai',
    headless: true,

    launchOptions,

    navigationTimeout: 30000, // 30s for navigation (was 120s)
    actionTimeout: 15000,
    expect: {
      timeout: 10000,
    },

    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',

    ignoreHTTPSErrors: false,
    bypassCSP: false,
  },

  projects: [
    { name: 'desktop', use: { viewport: { width: 1920, height: 1080 } } },
    {
      name: 'mobile',
      use: { viewport: { width: 375, height: 667 } },
      testIgnore: [/\/snapshots\//, /\/(nav|footer|widget)\.spec\.js/],
    },
  ],

  fullyParallel: true,
  retries: 0,
  workers: process.env.CI ? 3 : undefined, // 3 on CI, auto locally

  reporter: [
    ['html', { outputFolder: 'reports/html-report', open: 'never' }],
    ['json', { outputFile: 'reports/json-report.json' }],
    ['list']
  ],
});