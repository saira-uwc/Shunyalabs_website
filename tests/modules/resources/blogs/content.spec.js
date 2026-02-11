import { test } from '@playwright/test';
import { pageRegistry } from '../../../../test-data/page-registry.js';
import { runContentSnapshotTest } from '../../../../utils/module-test-runner.js';

const pageEntry = pageRegistry.find(
  (page) => page.moduleKey === 'resources' && page.slug === 'blogs'
);

const moduleLabel = pageEntry?.moduleLabel || 'resources';
const pageLabel = pageEntry?.pageLabel || 'blogs';

test.describe(`${moduleLabel} - ${pageLabel} content (Snapshot)`, () => {
  test('Content snapshot matches', async ({ page }) => {
    await runContentSnapshotTest({ page, pageEntry });
  });
});
