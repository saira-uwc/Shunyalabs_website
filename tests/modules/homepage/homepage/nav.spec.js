import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';

const navExpectationsPath = path.join(
  process.cwd(),
  'test-data',
  'expectations',
  'homepage-nav.json'
);
const navExpectations = JSON.parse(fs.readFileSync(navExpectationsPath, 'utf8'));

test.describe('Homepage - navigation (Figma exact)', () => {
  test('Top nav dropdowns match labels, descriptions, and hrefs', async ({ page }) => {
    const homepage = new HomepagePage(page);
    await homepage.open();

    const { writeResult } = await createResultWriter({
      moduleName: 'Homepage',
      reportFileName: 'module-cta-report.csv',
    });

    // Extract all dropdown items at once from the DOM.
    // The new site renders all dropdown links in the DOM (visible or hidden);
    // we group them by their parent menu button.
    const allDropdowns = await page.evaluate(() => {
      const normalize = (value) =>
        (value || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();

      const nav = document.querySelector('nav');
      if (!nav) return {};

      const targetLabels = ['Product', 'Models', 'Solutions', 'Resources'];
      const allButtons = Array.from(nav.querySelectorAll('button')).filter(
        (btn) => targetLabels.includes(normalize(btn.textContent))
      );

      // Desktop buttons appear first in DOM order; use a Set to skip
      // mobile hamburger duplicates that come later.
      const dropdowns = {};
      for (const btn of allButtons) {
        const menuName = normalize(btn.textContent);
        if (dropdowns[menuName]) continue; // already captured from first (desktop) instance
        // The dropdown links live inside div.relative (the button's parent).
        // Each <a> has two child <div>s: label (font-semibold) and description.
        const container = btn.parentElement;
        if (!container) continue;

        const links = container.querySelectorAll('a');
        const items = Array.from(links)
          .map((link) => {
            // Two DOM patterns: direct child divs, or nested inside a wrapper
            let topDivs = link.querySelectorAll(':scope > div');
            if (topDivs.length === 1) {
              // Wrapper div: dig one level deeper
              topDivs = topDivs[0].querySelectorAll(':scope > div');
            }
            const label = topDivs[0] ? normalize(topDivs[0].textContent) : '';
            const description = topDivs[1] ? normalize(topDivs[1].textContent) : '';
            return {
              label,
              description,
              href: link.getAttribute('href') || '',
            };
          })
          .filter((item) => item.label && item.description);

        if (items.length > 0) {
          dropdowns[menuName] = items;
        }
      }
      return dropdowns;
    });

    const menuNames = Object.keys(navExpectations.dropdowns);
    for (const menuName of menuNames) {
      expect(allDropdowns[menuName]).toEqual(navExpectations.dropdowns[menuName]);
      await writeResult(
        `Homepage Nav - ${menuName}`,
        'PASS',
        `Validated ${(allDropdowns[menuName] || []).length} dropdown items`
      );
    }
  });
});
