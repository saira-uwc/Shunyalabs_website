import { test, expect } from '@playwright/test';
import { runDesignComplianceTest } from './design-validator.js';

export const DESIGN_COMPLIANCE_TIMEOUT = process.env.CI ? 180_000 : 120_000;

/**
 * Registers the standard Figma design compliance test for a page registry entry.
 * @param {object} pageEntry
 * @param {{ skip?: boolean, skipReason?: string }} [options]
 */
export function registerDesignComplianceSuite(pageEntry, options = {}) {
  const moduleLabel = pageEntry?.moduleLabel || pageEntry?.moduleKey || 'Unknown';
  const pageLabel = pageEntry?.pageLabel || pageEntry?.slug || 'page';

  test.describe(`${moduleLabel} - ${pageLabel} design compliance`, () => {
    test.setTimeout(DESIGN_COMPLIANCE_TIMEOUT);

    const runTest = options.skip ? test.skip : test;
    const testTitle = options.skipReason
      ? `Figma design compliance (${options.skipReason})`
      : 'Figma design compliance';

    runTest(testTitle, async ({ page }) => {
      const failures = await runDesignComplianceTest({ page, pageEntry });

      for (const f of failures) {
        expect.soft(null, `[${f.section}] ${f.message}`).toBeTruthy();
      }

      expect(failures.length, `${failures.length} design compliance issue(s) found`).toBe(0);
    });
  });
}
