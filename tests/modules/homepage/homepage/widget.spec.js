import { test, expect } from '@playwright/test';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';

test.describe('Homepage - hero demo (Vāk)', () => {
  test.setTimeout(180_000);

  test('Live translation demo loads and shows primary controls', async ({ page }) => {
    const homepage = new HomepagePage(page);
    await homepage.open();

    const { writeResult } = await createResultWriter({
      moduleName: 'Homepage',
      reportFileName: 'module-actions-report.csv',
    });

    // Homepage embeds the Vāk real-time speech translation demo (replaces legacy STT playground tabs).
    const demoReady = await page.evaluate(async () => {
      const deadline = Date.now() + 60000;
      while (Date.now() < deadline) {
        const t = document.body?.innerText || '';
        const hasHeadline =
          t.includes('Real-Time Speech-to-Speech') || t.includes('Speech-to-Speech Translation');
        const hasLanguages = t.includes('55 Languages');
        const hasInputHint =
          t.includes('Tap mic to speak') || t.includes('type and press Enter');
        if (hasHeadline && hasLanguages && hasInputHint) return true;
        await new Promise((r) => setTimeout(r, 500));
      }
      return false;
    });

    expect(demoReady).toBe(true);

    await writeResult('Homepage Vāk demo', 'PASS', 'Translation demo section visible');
  });
});
