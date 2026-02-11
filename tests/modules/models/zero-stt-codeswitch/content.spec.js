import { test } from '@playwright/test';
import { pageRegistry } from '../../../../test-data/page-registry.js';
import { runContentSnapshotTest } from '../../../../utils/module-test-runner.js';

const pageEntry = pageRegistry.find(
  (page) => page.moduleKey === 'models' && page.slug === 'zero-stt-codeswitch'
);

const moduleLabel = pageEntry?.moduleLabel || 'models';
const pageLabel = pageEntry?.pageLabel || 'zero-stt-codeswitch';

test.describe(`${moduleLabel} - ${pageLabel} content (Snapshot)`, () => {
  test('Content snapshot matches', async ({ page }) => {
    await runContentSnapshotTest({ page, pageEntry });
  });
});
