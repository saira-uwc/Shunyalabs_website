import { test, expect } from '@playwright/test';
import { ContactPage } from '../../../../pages/contact/contact.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';

test.describe('Contact - Contact Us actions (Figma exact)', () => {
  test('Form fields and checkboxes visible', async ({ page }) => {
    const contact = new ContactPage(page);
    await contact.open();

    const { writeResult } = await createResultWriter({
      moduleName: 'Contact',
      reportFileName: 'module-actions-report.csv',
    });

    const form = page.locator('form').first();
    const inputs = form.locator('input[type="text"], input[type="email"], input[type="tel"], textarea');
    const checkboxes = form.locator('input[type="checkbox"]');

    const inputCount = await inputs.count();
    const checkboxCount = await checkboxes.count();

    expect(inputCount).toBeGreaterThanOrEqual(4);
    expect(checkboxCount).toBeGreaterThanOrEqual(1);

    await writeResult(
      'Contact Actions - Form fields',
      'PASS',
      `Found ${inputCount} inputs and ${checkboxCount} checkboxes`
    );
  });
});
