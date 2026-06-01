import { test } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { pageRegistry } from '../../test-data/page-registry.js';
import { capturePageSnapshot, normalizeSnapshot } from '../../utils/page-snapshot.js';
import { gotoAndWaitForPageReady, MODULE_TEST_TIMEOUT } from '../../utils/page-readiness.js';

const SNAPSHOT_DIR = path.join(process.cwd(), 'test-data', 'snapshots');

test.describe('Generate page content snapshots', () => {
  test.setTimeout(MODULE_TEST_TIMEOUT);

  for (const pageEntry of pageRegistry) {
    if (pageEntry.status !== 'active') {
      continue;
    }

    test(`snapshot ${pageEntry.moduleLabel} - ${pageEntry.pageLabel}`, async ({ page }) => {
      await gotoAndWaitForPageReady(page, pageEntry.path, { waitForImages: true });

      const snapshot = normalizeSnapshot(await capturePageSnapshot(page));
      const moduleDir = path.join(SNAPSHOT_DIR, pageEntry.moduleKey);
      const size = page.viewportSize();
      const suffix = size && size.width <= 768 ? '.mobile.json' : '.json';
      const snapshotPath = path.join(moduleDir, `${pageEntry.slug}${suffix}`);

      if (!fs.existsSync(moduleDir)) {
        fs.mkdirSync(moduleDir, { recursive: true });
      }

      fs.writeFileSync(snapshotPath, JSON.stringify(snapshot, null, 2));
    });
  }
});
