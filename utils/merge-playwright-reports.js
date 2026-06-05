import fs from 'fs';

function readReport(filePath) {
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function addStats(target, source) {
  if (!source) return;
  target.expected = (target.expected || 0) + (source.expected || source.passed || 0);
  target.unexpected = (target.unexpected || 0) + (source.unexpected || source.failed || 0);
  target.skipped = (target.skipped || 0) + (source.skipped || 0);
  target.flaky = (target.flaky || 0) + (source.flaky || 0);
}

/**
 * Merge multiple Playwright JSON report files into one combined report.
 */
export function mergePlaywrightReports(reportPaths) {
  const merged = {
    config: null,
    suites: [],
    stats: { expected: 0, unexpected: 0, skipped: 0, flaky: 0 },
  };

  for (const filePath of reportPaths) {
    const report = readReport(filePath);
    if (!report) continue;

    if (!merged.config && report.config) merged.config = report.config;
    if (Array.isArray(report.suites)) merged.suites.push(...report.suites);
    addStats(merged.stats, report.stats);
  }

  return merged;
}

export function writeMergedReport(reportPaths, outputPath) {
  const merged = mergePlaywrightReports(reportPaths);
  fs.mkdirSync(outputPath.replace(/\/[^/]+$/, ''), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(merged, null, 2));
  return merged;
}
