import { test, expect } from '@playwright/test';
import { BlogsPage } from '../../../../pages/resources/blogs.page.js';
import { createResultWriter } from '../../../../utils/result-writer.js';

test.describe('Resources - Blogs CTAs (Figma exact)', () => {
  test('CTA hrefs', async ({ page }) => {
    const blogs = new BlogsPage(page);
    await blogs.open();

    const { writeResult } = await createResultWriter({
      moduleName: 'Resources',
      reportFileName: 'module-cta-report.csv',
    });

    const blogLinks = page.locator('main a[href^="/blog/"]');
    const count = await blogLinks.count();
    expect(count).toBeGreaterThan(0);
    await writeResult('Blogs CTA - Blog links', 'PASS', `Found ${count} blog links`);

    const sampleCount = Math.min(count, 5);
    for (let i = 0; i < sampleCount; i += 1) {
      const link = blogLinks.nth(i);
      const href = await link.getAttribute('href');
      expect(href).toBeTruthy();
      await writeResult(`Blogs CTA - Link ${i + 1}`, 'PASS', `href=${href}`);
    }

    const bottomGetStarted = page.getByRole('link', { name: 'Get Started' }).last();
    await expect(bottomGetStarted).toHaveAttribute('href', '/pricing');
    await writeResult('Blogs CTA - Get Started', 'PASS', 'href=/pricing');

    const bottomContact = page.getByRole('link', { name: 'Contact Sales' }).last();
    await expect(bottomContact).toHaveAttribute('href', '/contact');
    await writeResult('Blogs CTA - Contact Sales', 'PASS', 'href=/contact');
  });
});
