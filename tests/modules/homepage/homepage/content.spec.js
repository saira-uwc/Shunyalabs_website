import { test } from '@playwright/test';
import { pageRegistry } from '../../../../test-data/page-registry.js';
import { runContentSnapshotTest } from '../../../../utils/module-test-runner.js';

const pageEntry = pageRegistry.find(
  (page) => page.moduleKey === 'homepage' && page.slug === 'homepage'
);

const moduleLabel = pageEntry?.moduleLabel || 'homepage';
const pageLabel = pageEntry?.pageLabel || 'homepage';

test.describe(`${moduleLabel} - ${pageLabel} content (Snapshot)`, () => {
  test('Content snapshot matches', async ({ page }) => {
    await runContentSnapshotTest({ page, pageEntry });
  });
});
