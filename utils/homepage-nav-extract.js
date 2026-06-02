/**
 * Extract top-nav dropdown items from the live homepage DOM (desktop instance).
 * Matches tests/modules/homepage/homepage/nav.spec.js.
 */
export async function extractHomepageNavDropdowns(page) {
  return page.evaluate(() => {
    const normalize = (value) =>
      (value || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();

    const nav = document.querySelector('nav');
    if (!nav) return {};

    const targetLabels = ['Product', 'Models', 'Solutions', 'Resources'];
    const allButtons = Array.from(nav.querySelectorAll('button')).filter((btn) =>
      targetLabels.includes(normalize(btn.textContent))
    );

    const dropdowns = {};
    for (const btn of allButtons) {
      const menuName = normalize(btn.textContent);
      if (dropdowns[menuName]) continue;
      const container = btn.parentElement;
      if (!container) continue;

      const links = container.querySelectorAll('a');
      const items = Array.from(links)
        .map((link) => {
          let topDivs = link.querySelectorAll(':scope > div');
          if (topDivs.length === 1) {
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
}
