/**
 * Verify internal navigation targets return a successful HTTP response.
 */

const DEFAULT_SKIP_HREF =
  /^$|#|javascript:|mailto:|tel:|\/playground/i;

/**
 * @param {string} href
 * @param {string} [baseURL]
 * @returns {string|null}
 */
export function resolveInternalUrl(href, baseURL = 'https://www.shunyalabs.ai') {
  if (!href || DEFAULT_SKIP_HREF.test(href.trim())) return null;
  if (href.startsWith('http')) {
    try {
      const u = new URL(href);
      const base = new URL(baseURL);
      if (u.origin !== base.origin) return null;
      return u.toString();
    } catch {
      return null;
    }
  }
  return new URL(href, baseURL).toString();
}

/**
 * @param {import('@playwright/test').APIRequestContext} request
 * @param {string[]} hrefs
 * @param {{ baseURL?: string, maxLinks?: number }} [options]
 * @returns {Promise<{ checked: string[], skipped: string[], failures: { url: string, status: number }[] }>}
 */
export async function checkLiveLinks(request, hrefs, options = {}) {
  const baseURL = options.baseURL || 'https://www.shunyalabs.ai';
  const maxLinks = options.maxLinks ?? 80;
  const unique = [...new Set(hrefs.map((h) => (h || '').trim()).filter(Boolean))];
  const checked = [];
  const skipped = [];
  const failures = [];

  for (const href of unique.slice(0, maxLinks)) {
    const url = resolveInternalUrl(href, baseURL);
    if (!url) {
      skipped.push(href);
      continue;
    }
    checked.push(url);
    const response = await request.get(url, { maxRedirects: 5, timeout: 45_000 });
    if (response.status() >= 400) {
      failures.push({ url, status: response.status() });
    }
  }

  return { checked, skipped, failures };
}
