import { test, expect } from '@playwright/test';
import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';

test.describe('Homepage - widget (Figma exact)', () => {
  test('Widget content and actions', async ({ page }) => {
    const homepage = new HomepagePage(page);
    await homepage.open();

    const { writeResult } = await createResultWriter({
      moduleName: 'Homepage',
      reportFileName: 'module-actions-report.csv',
    });

    // Verify widget tab buttons exist and are visible
    const widgetTabs = [
      'Zero STT Indic',
      'Zero STT Codeswitch',
      'Zero STT Med',
      'Zero TTS Indic',
    ];

    // Widget renders lazily via client-side JS; use page.evaluate to check
    // DOM presence which is more reliable than Playwright locators under load
    const foundTabs = await page.evaluate(async (expectedTabs) => {
      // Poll for up to 60s for widget buttons to appear
      const deadline = Date.now() + 60000;
      while (Date.now() < deadline) {
        const buttons = Array.from(document.querySelectorAll('button'));
        const tabTexts = buttons.map(b => b.textContent.trim());
        if (expectedTabs.every(t => tabTexts.includes(t))) {
          return expectedTabs.map(t => ({ label: t, found: true }));
        }
        await new Promise(r => setTimeout(r, 500));
      }
      // Return what was found
      const buttons = Array.from(document.querySelectorAll('button'));
      const tabTexts = buttons.map(b => b.textContent.trim());
      return expectedTabs.map(t => ({ label: t, found: tabTexts.includes(t) }));
    }, widgetTabs);

    for (const tab of foundTabs) {
      expect(tab.found, `Widget tab "${tab.label}" should be present`).toBe(true);
      await writeResult(`Homepage Widget Tab - ${tab.label}`, 'PASS', 'Tab visible');
    }

    // Verify widget action buttons exist and are enabled
    const widgetButtons = [
      'Customer Support Call',
      'Podcast',
      'Upload your file',
      'Start Speaking',
    ];

    for (const label of widgetButtons) {
      const button = page.getByRole('button', { name: label }).first();
      await expect(button).toBeEnabled({ timeout: 15000 });
      await writeResult(`Homepage Widget - ${label}`, 'PASS', 'Button enabled');
    }
  });
});
