import { test } from '@playwright/test';
import { pageRegistry } from '../../../../test-data/page-registry.js';
import { runContentSnapshotTest } from '../../../../utils/module-test-runner.js';

const pageEntry = pageRegistry.find(
  (page) => page.moduleKey === 'contact' && page.slug === 'contact'
);

const moduleLabel = pageEntry?.moduleLabel || 'contact';
const pageLabel = pageEntry?.pageLabel || 'contact';

test.describe(`${moduleLabel} - ${pageLabel} content (Snapshot)`, () => {
  test('Content snapshot matches', async ({ page }) => {
    await runContentSnapshotTest({ page, pageEntry });
  });
});
