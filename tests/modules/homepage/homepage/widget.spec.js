import { test, expect } from '@playwright/test';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';
import { MODULE_TEST_TIMEOUT, pageReadyTimeout } from '../../../../utils/page-readiness.js';

test.describe('Homepage - hero demo (Vāk)', () => {
  test.setTimeout(MODULE_TEST_TIMEOUT);

  test('Live translation demo loads and shows primary controls', async ({ page }) => {
    const homepage = new HomepagePage(page);
    const timeout = pageReadyTimeout();
    await homepage.open();
    const vakHeading = page.getByRole('heading', { name: /Vāk/i }).last();
    await vakHeading.scrollIntoViewIfNeeded({ timeout });
    await expect(vakHeading).toBeVisible({ timeout });

    const { writeResult } = await createResultWriter({
      moduleName: 'Homepage',
      reportFileName: 'module-actions-report.csv',
    });

    await expect(async () => {
      const vakHeading = page.getByRole('heading', { name: /Vāk/i }).last();
      await vakHeading.scrollIntoViewIfNeeded();

      for (const frame of page.frames()) {
        const hint = frame.getByText(/Tap mic to speak/i);
        if ((await hint.count()) > 0 && (await hint.first().isVisible())) {
          return;
        }
      }

      throw new Error('Vāk translation iframe not ready');
    }).toPass({ timeout: 90_000 });

    await writeResult('Homepage Vāk demo', 'PASS', 'Vāk translation demo section visible');
  });
});
