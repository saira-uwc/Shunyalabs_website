/**
 * Temporary config for capturing mobile baselines.
 * Uses a single unnamed project with mobile viewport (no testIgnore blocking snapshots/).
 */
import { defineConfig } from '@playwright/test';
import fs from 'fs';
import path from 'path';

if (!process.env.CI) {
  process.env.PLAYWRIGHT_BROWSERS_PATH ||= path.join(process.cwd(), '.playwright');
}
const CHROMIUM_EXECUTABLE = path.join(
  process.cwd(), '.playwright', 'chromium_headless_shell-1200',
  'chrome-headless-shell-mac-x64', 'chrome-headless-shell'
);
const launchOptions = fs.existsSync(CHROMIUM_EXECUTABLE)
  ? { executablePath: CHROMIUM_EXECUTABLE }
  : {};

export default defineConfig({
  testDir: './tests',
  timeout: 120_000,
  use: {
    baseURL: 'https://www.shunyalabs.ai',
    headless: true,
    launchOptions,
    viewport: { width: 375, height: 667 },
  },
  reporter: [['list']],
});
