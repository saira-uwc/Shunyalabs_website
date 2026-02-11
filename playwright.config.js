import { defineConfig } from '@playwright/test';
import fs from 'fs';
import path from 'path';

process.env.PLAYWRIGHT_BROWSERS_PATH ||= path.join(process.cwd(), '.playwright');
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
  timeout: 300 * 1000, // Increased timeout for CTA navigation checks

  use: {
    baseURL: 'https://www.shunyalabs.ai',
    headless: true,

    launchOptions,

    navigationTimeout: 120000, // Increased to 120s for very slow pages
    actionTimeout: 30000,
    expect: {
      timeout: 20000, // Increased timeout for expect assertions
    },

    trace: 'on-first-retry',
    video: 'retain-on-failure',
    screenshot: 'only-on-failure',
    
    // Viewport settings
    viewport: { width: 1920, height: 1080 },
    
    // More reliable wait strategy
    waitForTimeout: 2000, // Reduced to avoid unnecessary waits
    
    // Prevent automatic navigation issues
    ignoreHTTPSErrors: false,
    bypassCSP: false,
  },

  retries: 0, // Do not retry; fail fast on first failure
  workers: 1, // Important for marketing sites to avoid rate limiting

  reporter: [
    ['html', { outputFolder: 'reports/html-report', open: 'never' }],
    ['json', { outputFile: 'reports/json-report.json' }],
    ['list']
  ],
});