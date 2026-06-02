import { test, expect } from '@playwright/test';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';
import { MODULE_TEST_TIMEOUT } from '../../../../utils/page-readiness.js';

const REQUIRED_SECTIONS = [
  /Voice AI on your terms/i,
  /Custom Built/i,
  /Vāk|Vak/i,
  /Understand Everyone/i,
  /Industry-Leading Standards for Enterprise Security/i,
  /What Sets Us Apart/i,
  /Start Building with Shunya Labs/i,
  /Language Regions/i,
  /fastest way to add voice AI/i,
];

test.describe('Homepage - major sections', () => {
  test.setTimeout(MODULE_TEST_TIMEOUT);

  test('Live homepage exposes all primary marketing sections', async ({ page }) => {
    const homepage = new HomepagePage(page);
    await homepage.open();

    const { writeResult } = await createResultWriter({
      moduleName: 'Homepage',
      reportFileName: 'module-pages-report.csv',
    });

    const headings = await homepage.getHomepageSectionHeadings();
    const body = await page.locator('body').innerText();

    for (const pattern of REQUIRED_SECTIONS) {
      const inHeadings = headings.some((h) => pattern.test(h));
      const inBody = pattern.test(body);
      expect(inHeadings || inBody, `Missing section matching ${pattern}`).toBe(true);
    }

    await writeResult('Homepage major sections', 'PASS', `${REQUIRED_SECTIONS.length} sections present`);
  });
});
