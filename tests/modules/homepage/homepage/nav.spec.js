import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';
import { MODULE_TEST_TIMEOUT } from '../../../../utils/page-readiness.js';
import { extractHomepageNavDropdowns } from '../../../../utils/homepage-nav-extract.js';

const navExpectationsPath = path.join(
  process.cwd(),
  'test-data',
  'expectations',
  'homepage-nav.json'
);
const navExpectations = JSON.parse(fs.readFileSync(navExpectationsPath, 'utf8'));

test.describe('Homepage - navigation (Figma exact)', () => {
  test.setTimeout(MODULE_TEST_TIMEOUT);

  test('Top nav dropdowns match labels, descriptions, and hrefs', async ({ page }) => {
    const homepage = new HomepagePage(page);
    await homepage.open();

    const { writeResult } = await createResultWriter({
      moduleName: 'Homepage',
      reportFileName: 'module-cta-report.csv',
    });

    const allDropdowns = await extractHomepageNavDropdowns(page);

    const menuNames = Object.keys(navExpectations.dropdowns);
    for (const menuName of menuNames) {
      expect(allDropdowns[menuName]).toEqual(navExpectations.dropdowns[menuName]);
      await writeResult(
        `Homepage Nav - ${menuName}`,
        'PASS',
        `Validated ${(allDropdowns[menuName] || []).length} dropdown items`
      );
    }
  });
});
