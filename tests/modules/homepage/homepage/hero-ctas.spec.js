import { test, expect } from '@playwright/test';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';
import { MODULE_TEST_TIMEOUT, pageReadyTimeout } from '../../../../utils/page-readiness.js';

test.describe('Homepage - hero and bottom CTAs', () => {
  test.setTimeout(MODULE_TEST_TIMEOUT);

  test('Get Started and Contact Sales navigate correctly', async ({ page }) => {
    const homepage = new HomepagePage(page);
    await homepage.open();

    const { writeResult } = await createResultWriter({
      moduleName: 'Homepage',
      reportFileName: 'module-cta-report.csv',
    });

    const timeout = pageReadyTimeout();
    const getStarted = page.locator('footer a[href="/pricing"]').filter({ hasText: /^Get Started$/i });

    await expect(async () => {
      await getStarted.scrollIntoViewIfNeeded();
      await expect(getStarted).toBeVisible();
      await getStarted.click();
      await expect(page).toHaveURL(/\/pricing/);
    }).toPass({ timeout });

    await homepage.open();
    await expect(async () => {
      await homepage.navigateToContactViaContactSalesLink({ timeout });
      await expect(page).toHaveURL(/\/contact/);
    }).toPass({ timeout });

    await writeResult('Homepage primary CTAs', 'PASS', 'Get Started + Contact Sales navigation OK');
  });
});
