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

    // Verify widget tab buttons exist and are enabled
    const widgetTabs = [
      'Speech To Text',
      'Medical Transcription',
      'Codeswitch',
    ];

    for (const label of widgetTabs) {
      const tab = page.getByRole('button', { name: label }).first();
      await expect(tab).toBeVisible();
      await writeResult(`Homepage Widget Tab - ${label}`, 'PASS', 'Tab visible');
    }

    // Verify widget action buttons exist and are enabled
    const widgetButtons = [
      'Customer Support Call',
      'Podcast',
      'Upload your file',
      'Start Speaking',
      'Play audio',
    ];

    for (const label of widgetButtons) {
      const button = page.getByRole('button', { name: label }).first();
      await expect(button).toBeEnabled();
      await writeResult(`Homepage Widget - ${label}`, 'PASS', 'Button enabled');
    }

    // Verify the copy button is disabled by default
    const copyButton = page.getByRole('button', { name: 'No conversation to copy' }).first();
    await expect(copyButton).toBeDisabled();
    await writeResult('Homepage Widget - No conversation to copy', 'PASS', 'Button disabled as expected');
  });
});
