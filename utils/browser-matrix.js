/**
 * Browser matrix helpers for multi-browser Playwright runs.
 * One logical test case is keyed by baseTestPoint (no [project] prefix).
 */

export const BROWSER_KEYS = ['chrome', 'safari', 'ios', 'android'];

export const BROWSER_LABELS = {
  chrome: 'Chrome',
  safari: 'Safari',
  ios: 'iOS',
  android: 'Android',
};

/** Playwright project name → browser column key */
export const PROJECT_BROWSER_MAP = {
  'desktop-chrome': 'chrome',
  'desktop-safari': 'safari',
  'mobile-ios': 'ios',
  'mobile-android': 'android',
  // Legacy single-viewport projects (older runs / local shortcuts)
  desktop: 'chrome',
  mobile: 'android',
};

export const BROWSER_PROJECTS = [
  'desktop-chrome',
  'desktop-safari',
  'mobile-ios',
  'mobile-android',
];

export const MOBILE_TEST_IGNORE = [
  /\/snapshots\//,
  /homepage\/nav\.spec\.js/,
  /nav-links-live\.spec\.js/,
  /\/zero-stt-universal\//,
  /contact-daily-mail\.api\.spec\.js/,
];

const PROJECT_PREFIX_RE = /^\[([^\]]+)\]\s*/;

export function parseProjectFromTestPoint(testPoint) {
  const match = (testPoint || '').match(PROJECT_PREFIX_RE);
  return match ? match[1] : null;
}

export function stripProjectPrefix(testPoint) {
  return (testPoint || '').replace(PROJECT_PREFIX_RE, '');
}

export function browserKeyForProject(projectName) {
  if (!projectName) return null;
  return PROJECT_BROWSER_MAP[projectName] || null;
}

function normalizeRawTest(test) {
  const project = parseProjectFromTestPoint(test.testPoint);
  const baseTestPoint = stripProjectPrefix(test.testPoint);
  const browser = browserKeyForProject(project);

  return {
    ...test,
    project,
    baseTestPoint,
    browser,
  };
}

/**
 * Merge per-browser executions into one row per logical test case.
 */
export function aggregateTestsByCase(rawTests) {
  const map = new Map();

  for (const raw of rawTests || []) {
    const test = normalizeRawTest(raw);
    const key = test.baseTestPoint || test.testPoint;
    if (!key) continue;

    if (!map.has(key)) {
      map.set(key, {
        category: test.category || 'Playwright',
        moduleName: test.moduleName || 'Playwright',
        testPoint: key,
        browsers: {},
        status: 'PASS',
        comment: '',
        attachments: [],
        timestamp: test.timestamp,
      });
    }

    const agg = map.get(key);
    if (test.timestamp && (!agg.timestamp || test.timestamp > agg.timestamp)) {
      agg.timestamp = test.timestamp;
    }

    if (test.browser) {
      agg.browsers[test.browser] = {
        status: test.status,
        comment: test.comment || '',
        attachments: test.attachments || [],
        project: test.project,
      };
    } else {
      // API / non-browser tests
      agg.status = test.status;
      agg.comment = test.comment || '';
      agg.attachments = test.attachments || [];
    }
  }

  for (const agg of map.values()) {
    const browserEntries = Object.entries(agg.browsers);
    if (!browserEntries.length) continue;

    const failures = browserEntries.filter(([, r]) => r.status === 'FAIL');
    agg.status = failures.length ? 'FAIL' : 'PASS';

    const comments = failures
      .map(([browser, r]) => {
        const label = BROWSER_LABELS[browser] || browser;
        const msg = (r.comment || 'Failed').trim();
        return `${label}: ${msg}`;
      })
      .filter(Boolean);
    agg.comment = comments.join(' | ');

    agg.attachments = failures.flatMap(([, r]) => r.attachments || []);
  }

  return Array.from(map.values());
}

/**
 * Summary over deduplicated test cases (not raw browser executions).
 */
export function summarizeAggregatedTests(tests) {
  const list = tests || [];
  const passed = list.filter((t) => t.status === 'PASS').length;
  const failed = list.filter((t) => t.status === 'FAIL').length;
  const total = passed + failed;
  return {
    total,
    passed,
    failed,
    passRate: total > 0 ? Math.round((passed / total) * 100) : 0,
  };
}

/**
 * Per-browser pass counts across all test cases (for email / dashboard headers).
 */
export function summarizeBrowserColumns(tests) {
  const stats = Object.fromEntries(BROWSER_KEYS.map((k) => [k, { total: 0, passed: 0, failed: 0 }]));

  for (const test of tests || []) {
    for (const key of BROWSER_KEYS) {
      const result = test.browsers?.[key];
      if (!result) continue;
      stats[key].total++;
      if (result.status === 'PASS') stats[key].passed++;
      else stats[key].failed++;
    }
  }

  return stats;
}

export function formatBrowserStatusCell(result) {
  if (!result) return '—';
  return result.status === 'PASS' ? 'PASS' : 'FAIL';
}

export function browserStatusLine(test) {
  return BROWSER_KEYS.map((key) => {
    const result = test.browsers?.[key];
    if (!result) return null;
    const label = BROWSER_LABELS[key];
    return `${label}: ${result.status}`;
  })
    .filter(Boolean)
    .join(' | ');
}
