/**
 * Temporary config for capturing desktop baselines.
 * Uses a single unnamed project with desktop viewport (no testIgnore blocking snapshots/).
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
  timeout: 180_000,
  use: {
    baseURL: 'https://www.shunyalabs.ai',
    headless: true,
    launchOptions,
    navigationTimeout: 45_000,
    actionTimeout: 20_000,
    viewport: { width: 1920, height: 1080 },
  },
  reporter: [['list']],
});
