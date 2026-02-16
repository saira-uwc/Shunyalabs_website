import { test, expect } from '@playwright/test';
import { pageRegistry } from '../../../../test-data/page-registry.js';
import { runDesignComplianceTest } from '../../../../utils/design-validator.js';

const pageEntry = pageRegistry.find(
  (page) => page.moduleKey === 'resources' && page.slug === 'blogs'
);

const moduleLabel = pageEntry?.moduleLabel || 'resources';
const pageLabel = pageEntry?.pageLabel || 'blogs';

test.describe(`${moduleLabel} - ${pageLabel} design compliance`, () => {
  test('Figma design compliance', async ({ page }) => {
    const failures = await runDesignComplianceTest({ page, pageEntry });

    for (const f of failures) {
      expect.soft(null, `[${f.section}] ${f.message}`).toBeTruthy();
    }

    expect(failures.length, `${failures.length} design compliance issue(s) found`).toBe(0);
  });
});
