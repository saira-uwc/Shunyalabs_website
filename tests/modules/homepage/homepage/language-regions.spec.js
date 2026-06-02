import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';
import { MODULE_TEST_TIMEOUT } from '../../../../utils/page-readiness.js';

const sampleLanguages = JSON.parse(
  fs.readFileSync(
    path.join(process.cwd(), 'test-data', 'expectations', 'homepage-language-regions.json'),
    'utf8'
  )
);

test.describe('Homepage - language regions', () => {
  test.setTimeout(MODULE_TEST_TIMEOUT);

  test('Language regions map and language list are present', async ({ page }) => {
    const homepage = new HomepagePage(page);
    await homepage.open();

    const { writeResult } = await createResultWriter({
      moduleName: 'Homepage',
      reportFileName: 'module-pages-report.csv',
    });

    const regionsHeading = page.getByRole('heading', { name: /Language Regions/i }).first();
    await regionsHeading.scrollIntoViewIfNeeded();
    await expect(regionsHeading).toBeVisible({ timeout: 30_000 });
    await page.waitForTimeout(1500);

    const body = await page.locator('body').innerText();
    expect(body).toMatch(/See the full list of languages supported/i);
    expect(body).toMatch(/Loading world map/i);

    const foundOnPage = sampleLanguages.filter((label) => {
      const name = label.split(/\s+/)[0];
      return name.length > 2 && body.includes(name);
    });
    expect(foundOnPage.length).toBeGreaterThan(35);

    await writeResult(
      'Homepage language regions',
      'PASS',
      `${foundOnPage.length} language names visible on page`
    );
  });
});
