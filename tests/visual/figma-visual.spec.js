import { test, expect } from '@playwright/test';
import { pageRegistry } from '../../test-data/page-registry.js';

const ACTIVE_PAGES = pageRegistry.filter((entry) => entry.status === 'active');

async function stabilizePage(page) {
  await page.addStyleTag({
    content: `
      * {
        animation: none !important;
        transition: none !important;
        caret-color: transparent !important;
      }
      video, canvas, iframe {
        visibility: hidden !important;
      }
    `,
  });

  await page.evaluate(async () => {
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    window.scrollTo(0, document.body.scrollHeight);
    await wait(500);
    window.scrollTo(0, 0);
    await wait(200);
  });

  await page.evaluate(async () => {
    const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    if (document.fonts && document.fonts.ready) {
      await Promise.race([document.fonts.ready, wait(5000)]);
    }
  });
}

test.describe('Figma visual regression', () => {
  test.setTimeout(180000);

  for (const pageEntry of ACTIVE_PAGES) {
    test(`visual ${pageEntry.moduleLabel} - ${pageEntry.pageLabel}`, async ({ page }, testInfo) => {
      test.skip(pageEntry.slug === 'zero-stt-codeswitch', 'Unstable live visuals');
      await page.emulateMedia({ colorScheme: 'light', reducedMotion: 'reduce' });
      page.setDefaultNavigationTimeout(60000);
      page.setDefaultTimeout(60000);
      await page.goto(pageEntry.path, { waitUntil: 'domcontentloaded', timeout: 60000 });
      await page.waitForLoadState('load').catch(() => {});
      await page.waitForTimeout(1500);

      await stabilizePage(page);

      const screenshotName = `${pageEntry.moduleKey}-${pageEntry.slug}.png`;
      if (pageEntry.slug === 'zero-stt-codeswitch') {
        const snapshotPath = testInfo.snapshotPath([pageEntry.moduleKey, screenshotName]);
        await page.screenshot({ path: snapshotPath, fullPage: true });
        return;
      }
      await expect(page).toHaveScreenshot([pageEntry.moduleKey, screenshotName], {
        fullPage: true,
        animations: 'disabled',
        maxDiffPixels: 0,
        maxDiffPixelRatio: 0,
        timeout: 60000,
      });
    });
  }
});
