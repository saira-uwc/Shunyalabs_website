import { test, expect } from '@playwright/test';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';
import { extractHomepageNavDropdowns } from '../../../../utils/homepage-nav-extract.js';
import { checkLiveLinks } from '../../../../utils/live-link-check.js';
import { MODULE_TEST_TIMEOUT } from '../../../../utils/page-readiness.js';

test.describe('Homepage - navigation link health', () => {
  test.setTimeout(MODULE_TEST_TIMEOUT);

  test('All header nav dropdown hrefs return HTTP success', async ({ page, request }) => {
    const homepage = new HomepagePage(page);
    await homepage.open();

    const { writeResult } = await createResultWriter({
      moduleName: 'Homepage',
      reportFileName: 'module-cta-report.csv',
    });

    const dropdowns = await extractHomepageNavDropdowns(page);
    const hrefs = Object.values(dropdowns)
      .flat()
      .map((item) => item.href);

    const { checked, failures } = await checkLiveLinks(request, hrefs);
    expect(failures, JSON.stringify(failures, null, 2)).toEqual([]);

    await writeResult(
      'Homepage nav link health',
      'PASS',
      `${checked.length} internal nav targets OK`
    );
  });
});
