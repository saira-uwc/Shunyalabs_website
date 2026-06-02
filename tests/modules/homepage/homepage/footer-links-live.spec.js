import { test, expect } from '@playwright/test';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';
import { checkLiveLinks } from '../../../../utils/live-link-check.js';
import { MODULE_TEST_TIMEOUT } from '../../../../utils/page-readiness.js';

test.describe('Homepage - footer link health', () => {
  test.setTimeout(MODULE_TEST_TIMEOUT);

  test('All footer hrefs return HTTP success', async ({ page, request }) => {
    const homepage = new HomepagePage(page);
    await homepage.open();

    const { writeResult } = await createResultWriter({
      moduleName: 'Homepage',
      reportFileName: 'module-pages-report.csv',
    });

    const footerOnly = await homepage.collectFooterHrefs();

    const { checked, failures } = await checkLiveLinks(request, footerOnly);
    expect(failures, JSON.stringify(failures, null, 2)).toEqual([]);

    await writeResult(
      'Homepage footer link health',
      'PASS',
      `${checked.length} footer/internal links OK`
    );
  });
});
