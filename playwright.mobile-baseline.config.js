/**
 * Temporary config for capturing mobile baselines.
 * Uses a single unnamed project with mobile viewport (no testIgnore blocking snapshots/).
 */
import { defineConfig } from '@playwright/test';
import fs from 'fs';
import path from 'path';

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
