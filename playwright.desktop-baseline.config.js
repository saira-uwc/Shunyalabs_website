/**
 * Temporary config for capturing desktop baselines.
 * Uses a single unnamed project with desktop viewport (no testIgnore blocking snapshots/).
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
    viewport: { width: 1920, height: 1080 },
  },
  reporter: [['list']],
});
