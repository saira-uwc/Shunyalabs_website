import { test, expect } from '@playwright/test';
import { BasePage } from '../../../../pages/base.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';
import { MODULE_TEST_TIMEOUT } from '../../../../utils/page-readiness.js';

test.describe('Models - Vāk page', () => {
  test.setTimeout(MODULE_TEST_TIMEOUT);

  test('Vāk page loads translation demo controls', async ({ page }) => {
    const vak = new BasePage(page, {
      path: '/vak',
      moduleLabel: 'Models',
      pageLabel: 'Translation Models (Vāk)',
    });
    await vak.open();
    await expect(
      page.getByRole('heading', { name: /Real-Time Translation in 55 Indic Languages/i })
    ).toBeVisible({ timeout: 45_000 });

    const { writeResult } = await createResultWriter({
      moduleName: 'Models',
      reportFileName: 'module-actions-report.csv',
    });

    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Vā/i);
    await expect(page.getByText(/55 Indic Languages/i).first()).toBeVisible();

    await writeResult('Vāk page demo', 'PASS', 'Translation page controls visible');
  });
});
