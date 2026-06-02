import { test, expect } from '@playwright/test';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';
import { MODULE_TEST_TIMEOUT } from '../../../../utils/page-readiness.js';

test.describe('Homepage - Custom SLMs carousel', () => {
  test.setTimeout(MODULE_TEST_TIMEOUT);

  test('All four carousel steps show expected headings', async ({ page }) => {
    const homepage = new HomepagePage(page);
    await homepage.open();
    await homepage.scrollToCustomSlmsSection();

    const { writeResult } = await createResultWriter({
      moduleName: 'Homepage',
      reportFileName: 'module-actions-report.csv',
    });

    const width = page.viewportSize()?.width ?? 1920;
    const steps = HomepagePage.customSlmsCarouselSteps();

    if (width <= 768) {
      // Mobile hides step tabs and off-screen slide headings; assert section copy is present.
      await expect(page.getByRole('heading', { name: /Custom Built/i }).first()).toBeVisible();
      const body = await page.locator('body').innerText();
      for (const { headingPattern } of steps) {
        expect(body, `Mobile Custom SLMs copy should include ${headingPattern}`).toMatch(
          headingPattern
        );
      }
      await writeResult('Homepage Custom SLMs carousel', 'PASS', 'Mobile Custom SLMs copy present');
      return;
    }

    for (const { step, headingPattern } of steps) {
      await homepage.clickCustomSlmsCarouselStep(step);
      const headings = await homepage.getVisibleCustomSlmsHeadingTexts();
      const match = headings.some((h) => headingPattern.test(h));
      expect(match, `After "${step}", expected heading matching ${headingPattern}`).toBe(true);
    }

    await writeResult('Homepage Custom SLMs carousel', 'PASS', 'All 4 steps show expected headings');
  });
});
