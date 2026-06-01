/**
 * Shared navigation + readiness waits for live site tests.
 * Uses visible DOM signals instead of networkidle (unreliable on Next.js + analytics).
 */

export function pageReadyTimeout() {
  return process.env.CI ? 45_000 : 30_000;
}

export function actionReadyTimeout() {
  return process.env.CI ? 20_000 : 15_000;
}

export const MODULE_TEST_TIMEOUT = process.env.CI ? 180_000 : 120_000;

/**
 * Navigate to a path (relative to baseURL) and wait until the page shell is interactive.
 * @param {import('@playwright/test').Page} page
 * @param {string} url
 * @param {{ timeout?: number, waitForImages?: boolean }} [options]
 */
export async function gotoAndWaitForPageReady(page, url, options = {}) {
  const timeout = options.timeout ?? pageReadyTimeout();
  const waitForImages = options.waitForImages ?? false;

  await page.goto(url, { waitUntil: 'domcontentloaded', timeout });

  await page.locator('nav').first().waitFor({ state: 'visible', timeout });

  const content = page.locator('main h1, main h2, h1, main').first();
  await content.waitFor({ state: 'visible', timeout });

  await page.waitForLoadState('load', { timeout: Math.min(timeout, 20_000) }).catch(() => {});

  if (waitForImages) {
    await waitForVisibleImagesLoaded(page, timeout);
  } else {
    await page.waitForTimeout(process.env.CI ? 1000 : 500);
  }
}

/**
 * Wait until visible images have finished loading (header logos, hero assets).
 * @param {import('@playwright/test').Page} page
 * @param {number} [timeout]
 */
export async function waitForVisibleImagesLoaded(page, timeout = pageReadyTimeout()) {
  await page
    .waitForFunction(
      () => {
        const imgs = Array.from(document.querySelectorAll('img'));
        const visible = imgs.filter((img) => {
          const style = window.getComputedStyle(img);
          if (style.display === 'none' || style.visibility === 'hidden') return false;
          const r = img.getBoundingClientRect();
          return r.width > 0 && r.height > 0;
        });
        if (visible.length === 0) return true;
        return visible.every((img) => img.complete && img.naturalWidth > 0);
      },
      { timeout }
    )
    .catch(() => {});
}

/**
 * Reload the current page and wait until a key selector is visible.
 * @param {import('@playwright/test').Page} page
 * @param {string} selector
 * @param {number} [timeout]
 */
export async function reloadAndWaitForSelector(page, selector, timeout = pageReadyTimeout()) {
  await page.reload({ waitUntil: 'domcontentloaded', timeout });
  await page.locator(selector).first().waitFor({ state: 'visible', timeout });
  await page.waitForLoadState('load', { timeout: Math.min(timeout, 20_000) }).catch(() => {});
}
