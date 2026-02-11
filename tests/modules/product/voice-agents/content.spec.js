import { test } from '@playwright/test';
import { pageRegistry } from '../../../../test-data/page-registry.js';
import { runContentSnapshotTest } from '../../../../utils/module-test-runner.js';

const pageEntry = pageRegistry.find(
  (page) => page.moduleKey === 'product' && page.slug === 'voice-agents'
);

const moduleLabel = pageEntry?.moduleLabel || 'product';
const pageLabel = pageEntry?.pageLabel || 'voice-agents';

test.describe(`${moduleLabel} - ${pageLabel} content (Snapshot)`, () => {
  test('Content snapshot matches', async ({ page }) => {
    await runContentSnapshotTest({ page, pageEntry });
  });
});
