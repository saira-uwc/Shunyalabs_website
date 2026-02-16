/**
 * Generate design baselines for all active pages.
 *
 * Usage:
 *   npx playwright test tests/snapshots/generate-design-baselines.spec.js
 *
 * This visits each active page and captures its design properties
 * (headings, images, sections, styles) as baseline JSON files.
 * Run this when the site matches the Figma design, then design.spec.js
 * tests will detect any drift from this baseline.
 */
import { test } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { pageRegistry } from '../../test-data/page-registry.js';
import { captureDesignBaseline } from '../../utils/design-validator.js';

const DESIGN_SPECS_DIR = path.join(process.cwd(), 'test-data', 'design-specs');

test.describe('Generate design baselines', () => {
  test.setTimeout(120000);

  for (const pageEntry of pageRegistry) {
    if (pageEntry.status !== 'active') continue;

    test(`baseline ${pageEntry.moduleLabel} - ${pageEntry.pageLabel}`, async ({ page }) => {
      const baseline = await captureDesignBaseline(page, pageEntry);

      if (!fs.existsSync(DESIGN_SPECS_DIR)) {
        fs.mkdirSync(DESIGN_SPECS_DIR, { recursive: true });
      }

      const filePath = path.join(DESIGN_SPECS_DIR, `${pageEntry.moduleKey}-${pageEntry.slug}.design.json`);
      fs.writeFileSync(filePath, JSON.stringify(baseline, null, 2));
    });
  }
});
