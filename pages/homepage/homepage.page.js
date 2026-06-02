import { BasePage } from '../base.page.js';
import { pageReadyTimeout, reloadAndWaitForSelector } from '../../utils/page-readiness.js';

export class HomepagePage extends BasePage {
  constructor(page) {
    super(page, {
      path: '/',
      moduleLabel: 'Homepage',
      pageLabel: 'Homepage',
    });
  }

  async getHeaderNavLabels() {
    return this.page.evaluate(() => {
      const isVisible = (element) => {
        if (!element) return false;
        const style = window.getComputedStyle(element);
        if (!style || style.visibility === 'hidden' || style.display === 'none') {
          return false;
        }
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      };

      const normalize = (value) =>
        (value || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();

      const nav = document.querySelector('nav');
      if (!nav) return [];
      return Array.from(nav.querySelectorAll('a, button'))
        .filter((element) => isVisible(element))
        .map((element) => normalize(element.getAttribute('aria-label') || element.textContent))
        .filter(Boolean);
    });
  }

  async getHeroText() {
    return this.page.evaluate(() => {
      const normalize = (value) =>
        (value || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();
      const h1 = document.querySelector('h1');
      const h2 = document.querySelector('h2');
      const taglineElement = Array.from(document.querySelectorAll('p, span, div'))
        .find((el) => normalize(el.textContent) === 'Built for developers. Ready for enterprises.');

      return [h1?.textContent, h2?.textContent, taglineElement?.textContent]
        .map(normalize)
        .filter(Boolean);
    });
  }

  async getSectionTextByHeading(headingText) {
    return this.page.evaluate((headingTextValue) => {
      const normalize = (value) =>
        (value || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();
      const isVisible = (element) => {
        if (!element) return false;
        const style = window.getComputedStyle(element);
        if (!style || style.visibility === 'hidden' || style.display === 'none') {
          return false;
        }
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      };

      const heading = Array.from(document.querySelectorAll('h1, h2, h3'))
        .find((el) => normalize(el.textContent) === headingTextValue);
      if (!heading) return [];

      const section = heading.closest('section') || heading.parentElement;
      if (!section) return [];

      return Array.from(section.querySelectorAll('h1, h2, h3, p, button, a, span'))
        .filter((element) => isVisible(element))
        .map((element) => normalize(element.textContent))
        .filter(Boolean);
    }, headingText);
  }

  async getSectionTextByAnchors(anchorTexts) {
    return this.page.evaluate((anchors) => {
      const normalize = (value) =>
        (value || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();
      const isVisible = (element) => {
        if (!element) return false;
        const style = window.getComputedStyle(element);
        if (!style || style.visibility === 'hidden' || style.display === 'none') {
          return false;
        }
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      };

      const findElement = (text) =>
        Array.from(document.querySelectorAll('button, a, p, span, h1, h2, h3'))
          .find((el) => normalize(el.textContent) === text);

      const anchorElements = anchors.map(findElement).filter(Boolean);
      if (anchorElements.length !== anchors.length) return [];

      let root = anchorElements[0];
      while (root) {
        if (anchorElements.every((element) => root.contains(element))) {
          break;
        }
        root = root.parentElement;
      }

      if (!root) return [];

      return Array.from(root.querySelectorAll('h1, h2, h3, p, button, a, span'))
        .filter((element) => isVisible(element))
        .map((element) => normalize(element.textContent))
        .filter(Boolean);
    }, anchorTexts);
  }

  async getLanguageRegionButtons() {
    return this.page.evaluate(() => {
      const normalize = (value) =>
        (value || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();
      const isVisible = (element) => {
        if (!element) return false;
        const style = window.getComputedStyle(element);
        if (!style || style.visibility === 'hidden' || style.display === 'none') {
          return false;
        }
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      };
      const heading = Array.from(document.querySelectorAll('h1, h2, h3, p'))
        .find((el) => normalize(el.textContent) === 'Language Regions');
      const section = heading?.closest('section') || heading?.parentElement;
      if (!section) return [];

      const fromButtons = Array.from(section.querySelectorAll('button'))
        .filter((button) => isVisible(button))
        .map((button) => normalize(button.textContent))
        .filter(Boolean);

      if (fromButtons.length > 0) return fromButtons;

      // Live site renders languages as grid cells (div/span), not buttons.
      const labels = new Set();
      section.querySelectorAll('div, span, li').forEach((el) => {
        if (!isVisible(el)) return;
        const text = normalize(el.textContent);
        if (!text || text.length > 48 || text.includes('Language Regions')) return;
        if (/^(Loading|See the full)/i.test(text)) return;
        if (el.children.length > 2) return;
        labels.add(text);
      });
      return [...labels];
    });
  }

  async getFooterText() {
    return this.page.evaluate(() => {
      const normalize = (value) =>
        (value || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();
      const isVisible = (element) => {
        if (!element) return false;
        const style = window.getComputedStyle(element);
        if (!style || style.visibility === 'hidden' || style.display === 'none') {
          return false;
        }
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      };
      const footers = document.querySelectorAll('footer');
      const footer = footers[footers.length - 1];
      if (!footer) return [];
      return Array.from(footer.querySelectorAll('p, a, li'))
        .filter((element) => isVisible(element))
        .map((element) => normalize(element.textContent))
        .filter(Boolean);
    });
  }

  async getNavDropdownItems(menuLabel) {
    return this.page.evaluate((menuLabelValue) => {
      const normalize = (value) =>
        (value || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();
      const isVisible = (element) => {
        if (!element) return false;
        const style = window.getComputedStyle(element);
        if (!style || style.visibility === 'hidden' || style.display === 'none') {
          return false;
        }
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      };

      const nav = document.querySelector('nav');
      if (!nav) return [];

      const menuButton = Array.from(nav.querySelectorAll('button')).find(
        (button) => normalize(button.textContent) === menuLabelValue
      );
      if (!menuButton) return [];

      let container = menuButton.parentElement;
      while (container && !container.querySelector('a')) {
        container = container.parentElement;
      }
      if (!container) return [];

      return Array.from(container.querySelectorAll('a'))
        .filter((link) => isVisible(link))
        .map((link) => {
          const parts = (link.innerText || link.textContent || '')
            .split('\n')
            .map((part) => normalize(part))
            .filter(Boolean);
          return {
            label: parts[0] || '',
            description: parts.slice(1).join(' '),
            href: link.getAttribute('href') || '',
          };
        })
        .filter((item) => item.label && item.description);
    }, menuLabel);
  }

  async getFooterMenuStructure() {
    return this.page.evaluate(() => {
      const normalize = (value) =>
        (value || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();
      const isVisible = (element) => {
        if (!element) return false;
        const style = window.getComputedStyle(element);
        if (!style || style.visibility === 'hidden' || style.display === 'none') {
          return false;
        }
        const rect = element.getBoundingClientRect();
        return rect.width > 0 && rect.height > 0;
      };

      const footers = document.querySelectorAll('footer');
      const footer = footers[footers.length - 1];
      if (!footer) return { columns: {}, followUs: '', copyright: '' };

      const columns = {};
      const headings = Array.from(footer.querySelectorAll('p'))
        .filter((el) => isVisible(el))
        .map((el) => ({ element: el, text: normalize(el.textContent) }))
        .filter((item) => item.text.length > 0);

      for (const heading of headings) {
        const parent = heading.element.parentElement;
        if (!parent) continue;
        const list = parent.querySelector('ul');
        if (list) {
          const items = Array.from(list.querySelectorAll('li > a, li:not(:has(a))'))
            .filter((el) => isVisible(el))
            .map((el) => normalize(el.textContent))
            .filter(Boolean);
          if (items.length) {
            columns[heading.text] = items;
          }
        }
      }

      // Standalone links that appear as single-item columns
      const standaloneSelectors = [
        'a[href*="docs.shunyalabs"]',
        'a[href*="documentation"]',
        'a[href="/about"]',
        'a[href="/pricing"]',
      ];
      for (const sel of standaloneSelectors) {
        const link = footer.querySelector(sel);
        if (link && isVisible(link)) {
          const label = normalize(link.textContent);
          if (label && !columns[label]) {
            columns[label] = [label];
          }
        }
      }

      const followUs = Array.from(footer.querySelectorAll('p'))
        .map((el) => normalize(el.textContent))
        .find((text) => text.toLowerCase() === 'follow us on') || '';

      const copyright = Array.from(footer.querySelectorAll('p'))
        .map((el) => normalize(el.textContent))
        .find((text) => text.startsWith('©')) || '';

      return { columns, followUs, copyright };
    });
  }

  /**
   * Primary nav CTA — lands on the Contact Us page with the lead form.
   * Opens the drawer on small viewports first. Reloads once so Next.js App Router
   * navigation leaves inputs interactive (otherwise submit may never POST).
   */
  /** Custom SLMs carousel step labels (live homepage, 01–04). */
  static customSlmsCarouselSteps() {
    return [
      { step: '01 / 04', headingPattern: /Small, sharp/i },
      { step: '02 / 04', headingPattern: /Trained on what/i },
      { step: '03 / 04', headingPattern: /One layer in a/i },
      { step: '04 / 04', headingPattern: /Built to run/i },
    ];
  }

  async scrollToCustomSlmsSection() {
    const section = this.page.getByRole('heading', { name: /Custom Built/i }).first();
    await section.scrollIntoViewIfNeeded();
    await section.waitFor({ state: 'visible', timeout: pageReadyTimeout() });
  }

  async clickCustomSlmsCarouselStep(stepLabel) {
    const tab = this.page.getByText(stepLabel, { exact: false }).first();
    await tab.waitFor({ state: 'visible', timeout: pageReadyTimeout() });
    await tab.click();
    await this.page.waitForTimeout(600);
  }

  async getVisibleCustomSlmsHeadingTexts() {
    return this.page.evaluate(() => {
      const normalize = (s) => (s || '').replace(/\s+/g, ' ').trim();
      return Array.from(document.querySelectorAll('h2, h3'))
        .filter((el) => {
          const r = el.getBoundingClientRect();
          return r.width > 0 && r.height > 0 && r.top < window.innerHeight && r.bottom > 0;
        })
        .map((el) => normalize(el.textContent))
        .filter(Boolean);
    });
  }

  async collectNavAndFooterHrefs() {
    return this.page.evaluate(() => {
      const hrefs = new Set();
      document.querySelectorAll('nav a[href], footer a[href]').forEach((a) => {
        const h = a.getAttribute('href');
        if (h) hrefs.add(h);
      });
      return [...hrefs];
    });
  }

  async collectFooterHrefs() {
    return this.page.evaluate(() => {
      const hrefs = new Set();
      const footers = document.querySelectorAll('footer');
      const footer = footers[footers.length - 1];
      if (!footer) return [];
      footer.querySelectorAll('a[href]').forEach((a) => {
        const h = a.getAttribute('href');
        if (h) hrefs.add(h);
      });
      return [...hrefs];
    });
  }

  async getHomepageSectionHeadings() {
    return this.page.evaluate(() => {
      const normalize = (s) => (s || '').replace(/\s+/g, ' ').trim();
      return Array.from(document.querySelectorAll('h1, h2'))
        .map((el) => normalize(el.textContent))
        .filter(Boolean);
    });
  }

  async navigateToContactViaContactSalesLink({ timeout = pageReadyTimeout() } = {}) {
    const nav = this.page.locator('nav');
    const width = this.page.viewportSize()?.width ?? 1920;

    if (width <= 768) {
      const menuToggle = nav.getByRole('button', { name: '☰' });
      await menuToggle.waitFor({ state: 'visible', timeout });
      await menuToggle.click();
    }

    const link = nav.getByRole('link', { name: 'Contact Sales', exact: true }).first();
    await link.waitFor({ state: 'visible', timeout });
    await link.scrollIntoViewIfNeeded();
    await link.click();

    await this.page.waitForURL(/\/contact(?:\?|$)/, { timeout });
    await reloadAndWaitForSelector(this.page, 'input[name="name"]', timeout);
  }
}
