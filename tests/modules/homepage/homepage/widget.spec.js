import { test, expect } from '@playwright/test';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';
import { MODULE_TEST_TIMEOUT } from '../../../../utils/page-readiness.js';

test.describe('Homepage - hero demo (Vāk)', () => {
  test.setTimeout(MODULE_TEST_TIMEOUT);

  test('Live translation demo loads and shows primary controls', async ({ page }) => {
    const homepage = new HomepagePage(page);
    await homepage.open();

    const { writeResult } = await createResultWriter({
      moduleName: 'Homepage',
      reportFileName: 'module-actions-report.csv',
    });

    // Homepage embeds the Vāk real-time Indic translation demo (live site June 2026).
    const demoReady = await page.evaluate(async () => {
      const deadline = Date.now() + 90_000;
      while (Date.now() < deadline) {
        const t = document.body?.innerText || '';
        const hasVak = t.includes('Vāk') || t.includes('Vak');
        const hasSubtitle =
          t.includes('Real-Time Translation') && t.includes('55');
        const hasInputHint =
          t.includes('Tap mic to speak') ||
          (t.includes('type and press Enter') && t.includes('translate'));
        if (hasVak && hasSubtitle && hasInputHint) return true;
        await new Promise((r) => setTimeout(r, 500));
      }
      return false;
    });

    expect(demoReady).toBe(true);

    await writeResult('Homepage Vāk demo', 'PASS', 'Vāk translation demo section visible');
  });
});
