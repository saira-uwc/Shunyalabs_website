#!/usr/bin/env node
/**
 * Dashboard Generator for Shunya Labs Test Automation
 * Generates a comprehensive HTML report dashboard with full historical tracking
 */

import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { humanizeError } from '../utils/humanize-error.js';

const RESULTS_DIR = path.join(process.cwd(), 'test-results');
const HISTORY_DIR = path.join(process.cwd(), 'dashboard', 'history');
const DASHBOARD_FILE = path.join(process.cwd(), 'dashboard', 'index.html');
const PLAYWRIGHT_REPORT_FILE = path.join(process.cwd(), 'reports', 'json-report.json');
const PLAYWRIGHT_ARTIFACTS_DIR = path.join(process.cwd(), 'dashboard', 'playwright-artifacts');

// Ensure directories exist
if (!fs.existsSync(HISTORY_DIR)) {
  fs.mkdirSync(HISTORY_DIR, { recursive: true });
}

function stripAnsi(str) {
  return (str || '')
    .replace(/\x1b\[[0-9;]*[a-zA-Z]/g, '')  // ESC [ ... letter
    .replace(/\x1b\[[0-9;]*/g, '')            // truncated ESC [ sequences
    .replace(/\x1b./g, '')                     // ESC + any char
    .replace(/\x1b/g, '')                      // bare ESC
    .replace(/\[\d+m/g, '')                    // leftover [31m style codes
    .replace(/\[0m/g, '');
}

function escapeHtmlAttr(str) {
  return stripAnsi(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function toTitleCase(value) {
  return (value || '')
    .replace(/[-_]/g, ' ')
    .replace(/\b\w/g, l => l.toUpperCase())
    .trim();
}

function deriveModuleName(filePath) {
  if (!filePath) return 'Playwright';
  // Normalize separators and try both absolute and relative paths
  const normalized = filePath.replace(/\\/g, '/');
  const patterns = ['/tests/modules/', 'tests/modules/'];
  for (const pattern of patterns) {
    const index = normalized.indexOf(pattern);
    if (index !== -1) {
      const rest = normalized.slice(index + pattern.length);
      const moduleKey = rest.split('/')[0];
      if (moduleKey) return toTitleCase(moduleKey);
    }
  }
  return 'Playwright';
}

/**
 * Parse CSV content into structured data
 */
function parseCSV(content) {
  const lines = content.trim().split('\n');
  if (lines.length < 2) return [];
  
  const results = [];
  
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    if (!line.trim()) continue;
    
    // Parse CSV line handling quoted fields
    const values = [];
    let current = '';
    let inQuotes = false;
    
    for (const char of line) {
      if (char === '"') {
        inQuotes = !inQuotes;
      } else if (char === ',' && !inQuotes) {
        values.push(current.trim());
        current = '';
      } else {
        current += char;
      }
    }
    values.push(current.trim());
    
    if (values.length >= 4) {
      results.push({
        dateTime: values[0],
        moduleName: values[1]?.replace(/"/g, ''),
        testPoint: values[2]?.replace(/"/g, ''),
        status: values[3],
        comment: values[4]?.replace(/"/g, '') || ''
      });
    }
  }
  
  return results;
}

/**
 * Read all CSV files and combine results
 */
function readAllResults() {
  const allResults = [];
  const csvFiles = [
    'module-pages-report.csv',
    'module-cta-report.csv',
    'module-actions-report.csv',
    'module-design-report.csv',
  ];
  
  for (const file of csvFiles) {
    const filePath = path.join(RESULTS_DIR, file);
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      const results = parseCSV(content);
      
      // Add category based on file name
      const category = file.replace('-report.csv', '').replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      results.forEach(r => {
        r.category = category;
        allResults.push(r);
      });
    }
  }
  
  return allResults;
}

/**
 * Read Playwright JSON report and normalize failures + attachments
 */
function readPlaywrightReport() {
  if (!fs.existsSync(PLAYWRIGHT_REPORT_FILE)) return null;

  let report = null;
  try {
    report = JSON.parse(fs.readFileSync(PLAYWRIGHT_REPORT_FILE, 'utf8'));
  } catch (error) {
    return null;
  }

  if (!report || !Array.isArray(report.suites)) return null;

  // Clean old artifacts so only the current run's screenshots/videos are served
  if (fs.existsSync(PLAYWRIGHT_ARTIFACTS_DIR)) {
    for (const f of fs.readdirSync(PLAYWRIGHT_ARTIFACTS_DIR)) {
      fs.unlinkSync(path.join(PLAYWRIGHT_ARTIFACTS_DIR, f));
    }
  } else {
    fs.mkdirSync(PLAYWRIGHT_ARTIFACTS_DIR, { recursive: true });
  }

  const normalizeStatus = (status) => {
    if (status === 'passed') return 'PASS';
    if (status === 'failed' || status === 'timedOut') return 'FAIL';
    return null;
  };

  const mapAttachment = (attachment) => {
    if (!attachment || !attachment.path) return null;
    if (!fs.existsSync(attachment.path)) return null;
    const originalName = path.basename(attachment.path);
    const ext = path.extname(originalName);
    const hash = crypto.createHash('sha1').update(attachment.path).digest('hex').slice(0, 10);
    const fileName = `${hash}-${originalName}`;
    const destPath = path.join(PLAYWRIGHT_ARTIFACTS_DIR, fileName);
    if (!fs.existsSync(destPath)) {
      fs.copyFileSync(attachment.path, destPath);
    }
    return {
      name: attachment.name || originalName,
      contentType: attachment.contentType || '',
      url: `playwright-artifacts/${fileName}`,
    };
  };

  const tests = [];

  const buildTestPoint = (suiteTitles, specTitle, testTitle) => {
    return [...suiteTitles, specTitle, testTitle].filter(Boolean).join(' › ');
  };

  const extractErrorMessage = (result) => {
    if (!result) return '';
    if (result.errors && result.errors.length) {
      return result.errors[0].message || result.errors[0].value || '';
    }
    if (result.error && result.error.message) {
      return result.error.message;
    }
    return '';
  };

  const walkSuite = (suite, titlePath = []) => {
    const suiteTitles = suite.title ? [...titlePath, suite.title] : titlePath;

    (suite.specs || []).forEach(spec => {
      (spec.tests || []).forEach(test => {
        const result = test.results && test.results.length ? test.results[test.results.length - 1] : null;
        const status = normalizeStatus(result?.status || test.outcome || test.expectedStatus);
        if (!status) return;

        const baseTestPoint = buildTestPoint(suiteTitles, spec.title, test.title || '');
        const projectName = test.projectName || '';
        const testPoint = projectName ? `[${projectName}] ${baseTestPoint}` : baseTestPoint;
        const errorMessage = extractErrorMessage(result);
        const attachments = (result?.attachments || [])
          .map(mapAttachment)
          .filter(Boolean);

        tests.push({
          category: 'Playwright',
          moduleName: deriveModuleName(suite.file || test.location?.file || ''),
          testPoint,
          status,
          comment: humanizeError(errorMessage),
          timestamp: result?.startTime || report.startTime || new Date().toISOString(),
          attachments,
        });
      });
    });

    (suite.suites || []).forEach(child => walkSuite(child, suiteTitles));
  };

  report.suites.forEach(suite => walkSuite(suite, []));

  const stats = report.stats || {};
  const passed = Number(stats.expected || stats.passed || 0);
  const failed = Number(stats.unexpected || stats.failed || 0);
  const total = passed + failed;

  return {
    summary: { total, passed, failed, passRate: total > 0 ? Math.round((passed / total) * 100) : 0 },
    tests,
  };
}

/**
 * Resolve module name from test data (fallback for old history with "Playwright")
 */
function resolveModuleName(test) {
  const stored = (test.moduleName || '').trim();
  if (stored && stored !== 'Playwright' && stored !== 'General') return stored;
  const tp = test.testPoint || '';
  const match = tp.match(/(?:tests\/)?modules\/([^/]+)\//);
  if (match) return toTitleCase(match[1]);
  return stored || 'General';
}

/**
 * Load historical data and normalize format
 */
function loadHistory() {
  const historyFile = path.join(HISTORY_DIR, 'runs.json');
  if (fs.existsSync(historyFile)) {
    const history = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
    // Normalize: ensure all runs have 'tests' array and resolved module names
    return history.map(run => ({
      ...run,
      tests: (run.tests || run.results || []).map(t => ({
        ...t,
        moduleName: resolveModuleName(t),
        comment: humanizeError(t.comment || ''),
      })),
    }));
  }
  return [];
}

/**
 * Save current run to history with FULL details
 */
function saveToHistory(results, playwrightRun) {
  const history = loadHistory();
  
  // Get run date from first result
  const runDate = results[0]?.dateTime ? new Date(results[0].dateTime).toISOString() : new Date().toISOString();
  const runId = `run_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
  
  // Filter out INFO/SUMMARY rows
  const csvResults = results.filter(r => r.status === 'PASS' || r.status === 'FAIL');
  const hasPlaywrightTests = !!(playwrightRun && playwrightRun.tests && playwrightRun.tests.length);
  const testResults = hasPlaywrightTests ? playwrightRun.tests : csvResults;

  const summary = hasPlaywrightTests ? playwrightRun.summary : null;
  const passed = summary?.passed ?? testResults.filter(r => r.status === 'PASS').length;
  const failed = summary?.failed ?? testResults.filter(r => r.status === 'FAIL').length;
  const total = summary?.total ?? (passed + failed);
  
  const runSummary = {
    runId,
    runDate,
    passed,
    failed,
    total,
    passRate: total > 0 ? Math.round((passed / total) * 100) : 0,
    // Store FULL test details for proof/audit
    tests: testResults.map(r => ({
      category: r.category,
      moduleName: r.moduleName,
      testPoint: r.testPoint,
      status: r.status,
      comment: humanizeError(r.comment || '').substring(0, 500),
      timestamp: r.dateTime || r.timestamp,
      attachments: r.attachments || []
    }))
  };
  
  // Check if this run already exists (within 30 seconds - same run)
  const existingIndex = history.findIndex(h => {
    const diff = Math.abs(new Date(h.runDate) - new Date(runDate));
    return diff < 30000; // 30 seconds
  });
  
  if (existingIndex >= 0) {
    history[existingIndex] = runSummary;
  } else {
    history.push(runSummary);
  }
  
  // Keep only runs from the last 30 days
  const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString();
  const recentHistory = history.filter(run => run.runDate >= thirtyDaysAgo);
  // Also clean up: ensure all runs use 'tests' not 'results'
  const cleanedHistory = recentHistory.map(run => {
    const cleanRun = { ...run };
    // Migrate 'results' to 'tests' if needed
    if (cleanRun.results && !cleanRun.tests) {
      cleanRun.tests = cleanRun.results;
    }
    delete cleanRun.results; // Remove old field name
    return cleanRun;
  });
  
  fs.writeFileSync(path.join(HISTORY_DIR, 'runs.json'), JSON.stringify(cleanedHistory, null, 2));
  
  return cleanedHistory;
}

/**
 * Generate the HTML dashboard with calendar and full history
 */
function generateDashboard(currentResults, history, playwrightRun) {
  const testResults = currentResults.filter(r => r.status === 'PASS' || r.status === 'FAIL');
  const hasPlaywrightTests = !!(playwrightRun && playwrightRun.tests && playwrightRun.tests.length);
  const currentTestResults = hasPlaywrightTests ? playwrightRun.tests : testResults;

  const csvPassed = testResults.filter(r => r.status === 'PASS').length;
  const csvFailed = testResults.filter(r => r.status === 'FAIL').length;
  const csvTotal = csvPassed + csvFailed;

  const summary = hasPlaywrightTests ? playwrightRun.summary : null;
  const passed = summary?.passed ?? csvPassed;
  const failed = summary?.failed ?? csvFailed;
  const total = summary?.total ?? csvTotal;
  const passRate = total > 0 ? Math.round((passed / total) * 100) : 0;

  const failureTests = currentTestResults.filter(t => t.status === 'FAIL');
  
  // Group current results by category
  const byCategory = {};
  currentTestResults.forEach(r => {
    if (!byCategory[r.category]) {
      byCategory[r.category] = { passed: 0, failed: 0, tests: [] };
    }
    if (r.status === 'PASS') byCategory[r.category].passed++;
    if (r.status === 'FAIL') byCategory[r.category].failed++;
    byCategory[r.category].tests.push(r);
  });

  // Group current results by module (preferred dashboard view)
  const byModule = {};
  currentTestResults.forEach(r => {
    const moduleKey = (r.moduleName || 'General').trim() || 'General';
    if (!byModule[moduleKey]) {
      byModule[moduleKey] = { passed: 0, failed: 0, tests: [] };
    }
    if (r.status === 'PASS') byModule[moduleKey].passed++;
    if (r.status === 'FAIL') byModule[moduleKey].failed++;
    byModule[moduleKey].tests.push(r);
  });

  const displayFailures = failureTests.length ? failureTests : currentTestResults.filter(r => r.status === 'FAIL');

  // Extract clean test name and type from testPoint
  const cleanTestPoint = (testPoint) => {
    const tp = testPoint || '';
    if (tp.includes('design compliance')) return { name: 'Design Compliance', type: 'design', icon: '🎨' };
    if (tp.includes('navigation') || tp.includes('Nav')) return { name: 'Navigation', type: 'nav', icon: '🧭' };
    if (tp.includes('widget') || tp.includes('Widget')) return { name: 'Widget & Actions', type: 'widget', icon: '🔧' };
    if (tp.includes('footer') || tp.includes('Footer')) return { name: 'Footer', type: 'footer', icon: '📄' };
    // Fallback: try to extract the last meaningful part
    const parts = tp.split(' › ');
    return { name: parts[parts.length - 1] || tp, type: 'other', icon: '🔬' };
  };

  // Design compliance overview stats
  const designTests = currentTestResults.filter(r => (r.testPoint || '').includes('design compliance'));
  const designPassed = designTests.filter(r => r.status === 'PASS').length;
  const designFailed = designTests.filter(r => r.status === 'FAIL').length;
  const designTotal = designPassed + designFailed;
  const designRate = designTotal > 0 ? Math.round((designPassed / designTotal) * 100) : 0;

  // Group history by date for calendar (IST)
  const toISTDate = (iso) => {
    return new Date(iso).toLocaleDateString('en-CA', { timeZone: 'Asia/Kolkata' });
  };
  const historyByDate = {};
  history.forEach(run => {
    const date = toISTDate(run.runDate);
    if (!historyByDate[date]) {
      historyByDate[date] = [];
    }
    historyByDate[date].push(run);
  });
  
  // Prepare history data for charts
  const recentHistory = history.slice(-14); // Last 14 runs for trend
  const istDateFmt = (iso) => {
    const d = new Date(iso);
    return d.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit', hour12: false });
  };
  const historyDates = recentHistory.map(h => istDateFmt(h.runDate));
  const historyPassRates = recentHistory.map(h => h.passRate);

  const lastRunDate = testResults[0]?.dateTime
    ? new Date(testResults[0].dateTime).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
    : new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });

  const latestRun = history[history.length - 1];

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shunya Labs - Test Report Dashboard</title>
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>
    :root {
      --bg-primary: #0a0a0f;
      --bg-secondary: #12121a;
      --bg-card: #1a1a24;
      --bg-hover: #22222e;
      --bg-modal: rgba(0, 0, 0, 0.85);
      --text-primary: #f8f8f8;
      --text-secondary: #a0a0b0;
      --text-muted: #6b6b7b;
      --accent-primary: #6366f1;
      --accent-secondary: #818cf8;
      --success: #22c55e;
      --success-bg: rgba(34, 197, 94, 0.12);
      --danger: #ef4444;
      --danger-bg: rgba(239, 68, 68, 0.12);
      --warning: #f59e0b;
      --warning-bg: rgba(245, 158, 11, 0.12);
      --border: rgba(255, 255, 255, 0.06);
      --border-hover: rgba(255, 255, 255, 0.12);
      --shadow: 0 4px 24px rgba(0, 0, 0, 0.4);
      --accent-soft: rgba(99, 102, 241, 0.1);
      --radius: 16px;
      --radius-sm: 8px;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    body {
      font-family: 'DM Sans', -apple-system, BlinkMacSystemFont, sans-serif;
      background: var(--bg-primary);
      color: var(--text-primary);
      line-height: 1.6;
      min-height: 100vh;
    }

    .container { max-width: 1400px; margin: 0 auto; padding: 32px 24px; }

    /* Header */
    header {
      background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-card) 100%);
      border-bottom: 1px solid var(--border);
      padding: 24px 0;
      margin-bottom: 32px;
      position: sticky;
      top: 0;
      z-index: 100;
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 16px;
    }

    .logo { display: flex; align-items: center; gap: 12px; }

    .logo-icon {
      width: 48px;
      height: 48px;
      background: linear-gradient(135deg, var(--accent-primary), var(--accent-secondary));
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }

    .logo-text h1 { font-size: 24px; font-weight: 700; letter-spacing: -0.5px; }
    .logo-text span { font-size: 13px; color: var(--text-secondary); }

    .header-actions { display: flex; gap: 12px; align-items: center; }

    .btn {
      padding: 10px 20px;
      border-radius: var(--radius-sm);
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid var(--border);
      background: var(--bg-card);
      color: var(--text-primary);
    }

    .btn:hover { background: var(--bg-hover); border-color: var(--border-hover); }
    .btn-primary { background: var(--accent-primary); border-color: var(--accent-primary); }
    .btn-primary:hover { background: var(--accent-secondary); }

    /* Tabs */
    .tabs {
      display: flex;
      gap: 4px;
      background: var(--bg-card);
      padding: 4px;
      border-radius: var(--radius);
      margin-bottom: 24px;
      border: 1px solid var(--border);
    }

    .tab {
      padding: 12px 24px;
      border-radius: var(--radius-sm);
      cursor: pointer;
      font-weight: 500;
      color: var(--text-secondary);
      transition: all 0.2s ease;
      border: none;
      background: transparent;
    }

    .tab:hover { color: var(--text-primary); }
    .tab.active { background: var(--accent-primary); color: white; }

    /* Tab Content */
    .tab-content { display: none; }
    .tab-content.active { display: block; }

    /* Summary Cards */
    .summary-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
      gap: 20px;
      margin-bottom: 32px;
    }

    .summary-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 24px;
      transition: all 0.2s ease;
    }

    .summary-card:hover { border-color: var(--border-hover); transform: translateY(-2px); }
    .summary-card.success { border-left: 4px solid var(--success); }
    .summary-card.danger { border-left: 4px solid var(--danger); }
    .summary-card.info { border-left: 4px solid var(--accent-primary); }
    .summary-card.rate { border-left: 4px solid var(--warning); }

    .summary-label {
      font-size: 13px;
      color: var(--text-muted);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 8px;
    }

    .summary-value { font-size: 42px; font-weight: 700; letter-spacing: -2px; }
    .summary-card.success .summary-value { color: var(--success); }
    .summary-card.danger .summary-value { color: var(--danger); }
    .summary-card.info .summary-value { color: var(--accent-secondary); }
    .summary-card.rate .summary-value { color: var(--warning); }

    /* Charts Section */
    .charts-section {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 24px;
      margin-bottom: 32px;
    }

    .chart-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 24px;
    }

    .chart-title {
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .chart-title::before {
      content: '';
      width: 4px;
      height: 20px;
      background: var(--accent-primary);
      border-radius: 2px;
    }

    .chart-container { position: relative; height: 280px; }
    .chart-fallback {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-muted);
      font-size: 14px;
      background: var(--bg-secondary);
      border-radius: var(--radius-sm);
      border: 1px dashed var(--border);
      text-align: center;
      padding: 16px;
    }

    /* Section Title */
    .section-title {
      font-size: 20px;
      font-weight: 600;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .section-title::before {
      content: '';
      width: 6px;
      height: 28px;
      background: linear-gradient(180deg, var(--accent-primary), var(--accent-secondary));
      border-radius: 3px;
    }

    /* Category Cards */
    .category-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
      margin-bottom: 32px;
    }

    .category-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      overflow: hidden;
    }

    .category-header {
      padding: 20px;
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .category-name { font-weight: 600; font-size: 15px; }

    .category-stats { display: flex; gap: 12px; }

    .stat-badge {
      padding: 4px 10px;
      border-radius: 20px;
      font-size: 12px;
      font-weight: 600;
    }

    .stat-badge.pass { background: var(--success-bg); color: var(--success); }
    .stat-badge.fail { background: var(--danger-bg); color: var(--danger); }

    .category-tests { padding: 12px 0; max-height: 300px; overflow-y: auto; }

    .test-item {
      padding: 12px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid var(--border);
      transition: background 0.15s ease;
    }

    .test-item:last-child { border-bottom: none; }
    .test-item:hover { background: var(--bg-hover); }

    .test-status {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      flex-shrink: 0;
    }

    .test-status.pass { background: var(--success-bg); color: var(--success); }
    .test-status.fail { background: var(--danger-bg); color: var(--danger); }

    .test-name { flex: 1; font-size: 14px; color: var(--text-secondary); }

    /* Calendar */
    .calendar-nav { display: flex; align-items: center; gap: 16px; margin-bottom: 18px; }
    .calendar-nav h3 { font-size: 16px; min-width: 180px; text-align: center; }
    .calendar-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 6px; margin-bottom: 24px; }
    .cal-head { font-size: 12px; color: var(--text-muted); text-align: center; padding: 8px 0; font-weight: 600; text-transform: capitalize; }
    .cal-cell {
      min-height: 100px;
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: 10px;
      padding: 10px 12px;
      cursor: pointer;
      transition: .15s;
      position: relative;
      display: flex;
      flex-direction: column;
    }
    .cal-cell.empty { background: transparent; border-color: transparent; cursor: default; }
    .cal-cell:not(.empty):hover { border-color: var(--accent-primary); transform: translateY(-1px); }
    .cal-cell.has-runs { border-color: var(--warning); border-width: 1.5px; }
    .cal-cell.today { background: var(--accent-soft); border-color: var(--accent-primary); border-width: 2px; }
    .cal-cell.selected { border-color: var(--accent-primary); background: var(--accent-soft); }
    .cal-cell .day { font-size: 18px; font-weight: 700; margin-bottom: auto; }
    .cal-cell .cal-runs { font-size: 12px; color: var(--text-muted); margin-top: 6px; }
    .cal-cell .cal-rate { font-size: 12px; font-weight: 600; margin-top: 2px; }
    .calendar-footer { text-align: center; color: var(--text-muted); font-size: 12px; padding: 16px 0; border-top: 1px solid var(--border); margin-top: 8px; }
    #calendarRuns { margin-top: 8px; }

    /* History List */
    .history-list { margin-top: 24px; }

    .history-date-group {
      margin-bottom: 24px;
    }

    .history-date-header {
      font-size: 16px;
      font-weight: 600;
      padding: 12px 0;
      border-bottom: 1px solid var(--border);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .run-card {
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      margin-bottom: 12px;
      overflow: hidden;
      cursor: pointer;
      transition: all 0.2s;
    }

    .run-card:hover { border-color: var(--accent-primary); transform: translateX(4px); }

    .run-card-header {
      padding: 16px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid var(--border);
    }

    .run-time {
      font-family: 'JetBrains Mono', monospace;
      font-size: 14px;
      color: var(--text-secondary);
    }

    .run-stats { display: flex; gap: 16px; align-items: center; }

    .run-stat {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 14px;
    }

    .run-stat.pass { color: var(--success); }
    .run-stat.fail { color: var(--danger); }

    .run-pass-rate {
      padding: 4px 12px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 600;
    }

    .run-pass-rate.good { background: var(--success-bg); color: var(--success); }
    .run-pass-rate.warning { background: var(--warning-bg); color: var(--warning); }
    .run-pass-rate.bad { background: var(--danger-bg); color: var(--danger); }

    /* Modal */
    .modal-overlay {
      display: none;
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--bg-modal);
      z-index: 1000;
      overflow-y: auto;
      padding: 40px 20px;
    }

    .modal-overlay.active { display: flex; justify-content: center; }

    .modal {
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      width: 100%;
      max-width: 900px;
      max-height: 90vh;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    .modal-header {
      padding: 24px;
      border-bottom: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .modal-title { font-size: 20px; font-weight: 600; }

    .modal-close {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      border: 1px solid var(--border);
      background: var(--bg-card);
      color: var(--text-primary);
      cursor: pointer;
      font-size: 18px;
      transition: all 0.2s;
    }

    .modal-close:hover { background: var(--danger); border-color: var(--danger); }

    .modal-body {
      padding: 24px;
      overflow-y: auto;
      flex: 1;
    }

    .modal-summary {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-bottom: 24px;
    }

    .modal-stat {
      background: var(--bg-card);
      padding: 16px;
      border-radius: var(--radius-sm);
      text-align: center;
    }

    .modal-stat-value { font-size: 28px; font-weight: 700; }
    .modal-stat-label { font-size: 12px; color: var(--text-muted); margin-top: 4px; }

    .modal-tests-list { max-height: 400px; overflow-y: auto; }

    .modal-test-item {
      display: flex;
      align-items: flex-start;
      gap: 12px;
      padding: 12px 16px;
      background: var(--bg-card);
      border-radius: var(--radius-sm);
      margin-bottom: 8px;
    }

    .modal-test-status {
      width: 28px;
      height: 28px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      flex-shrink: 0;
    }

    .modal-test-status.pass { background: var(--success-bg); color: var(--success); }
    .modal-test-status.fail { background: var(--danger-bg); color: var(--danger); }

    .modal-test-info { flex: 1; }
    .modal-test-name { font-weight: 500; margin-bottom: 4px; }
    .modal-test-category { font-size: 12px; color: var(--text-muted); }
    .modal-test-comment {
      font-size: 12px;
      color: var(--text-secondary);
      background: var(--bg-secondary);
      padding: 8px;
      border-radius: 4px;
      margin-top: 8px;
      font-family: 'JetBrains Mono', monospace;
      word-break: break-word;
    }
    .modal-test-comment.full {
      display: none;
      margin-top: 8px;
    }
    .modal-test-actions {
      margin-top: 6px;
      display: flex;
      gap: 8px;
      align-items: center;
      flex-wrap: wrap;
    }
    .view-more-btn {
      background: transparent;
      color: var(--accent-secondary);
      border: none;
      cursor: pointer;
      font-size: 12px;
      padding: 0;
    }
    .view-more-btn:hover {
      text-decoration: underline;
    }
    .modal-test-attachments {
      margin-top: 8px;
      display: flex;
      gap: 8px;
      flex-wrap: wrap;
    }
    .attachment-link {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      font-size: 12px;
      color: var(--accent-secondary);
      background: rgba(255, 255, 255, 0.04);
      padding: 4px 8px;
      border-radius: 999px;
      text-decoration: none;
      border: 1px solid rgba(255, 255, 255, 0.08);
    }
    .attachment-link:hover {
      color: white;
      border-color: var(--accent-secondary);
    }

    /* Filter Bar */
    .filter-bar {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 16px;
      padding: 12px 16px;
      background: var(--bg-card);
      border-radius: var(--radius-sm);
    }

    .filter-btn {
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      border: 1px solid var(--border);
      background: var(--bg-secondary);
      color: var(--text-secondary);
    }

    .filter-btn:hover {
      background: var(--bg-hover);
      border-color: var(--border-hover);
      color: var(--text-primary);
    }

    .filter-btn.active {
      background: var(--accent-primary);
      border-color: var(--accent-primary);
      color: white;
    }

    .filter-btn.pass.active {
      background: var(--success);
      border-color: var(--success);
    }

    .filter-btn.fail.active {
      background: var(--danger);
      border-color: var(--danger);
    }

    /* Export Dropdown */
    .export-dropdown {
      position: relative;
      display: inline-block;
    }

    .export-dropdown-content {
      display: none;
      position: absolute;
      top: 100%;
      right: 0;
      background: var(--bg-card);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      min-width: 200px;
      box-shadow: var(--shadow);
      z-index: 1001;
      margin-top: 8px;
    }

    .export-dropdown-content.show {
      display: block;
    }

    .export-dropdown-content button {
      width: 100%;
      padding: 12px 16px;
      text-align: left;
      background: transparent;
      border: none;
      color: var(--text-secondary);
      cursor: pointer;
      font-size: 13px;
      transition: all 0.15s;
      display: block;
    }

    .export-dropdown-content button:hover {
      background: var(--bg-hover);
      color: var(--text-primary);
    }

    .export-dropdown-content button:first-child {
      border-radius: var(--radius-sm) var(--radius-sm) 0 0;
    }

    .export-dropdown-content button:last-child {
      border-radius: 0 0 var(--radius-sm) var(--radius-sm);
    }

    /* Open dropdown upward when needed (e.g., modal footer) */
    .export-dropdown.up .export-dropdown-content {
      top: auto;
      bottom: 100%;
      margin-top: 0;
      margin-bottom: 8px;
    }

    .modal-footer {
      padding: 16px 24px;
      border-top: 1px solid var(--border);
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
    }

    .modal-footer-left {
      display: flex;
      gap: 8px;
    }

    .modal-footer-right {
      display: flex;
      gap: 8px;
    }

    /* All Pass Banner */
    .all-pass-banner {
      background: linear-gradient(135deg, var(--success-bg), rgba(34, 197, 94, 0.05));
      border: 1px solid var(--success);
      border-radius: var(--radius);
      padding: 24px;
      text-align: center;
      margin-bottom: 32px;
    }

    .all-pass-banner h2 { color: var(--success); font-size: 24px; margin-bottom: 8px; }
    .all-pass-banner p { color: var(--text-secondary); }

    /* Failed Section */
    .failed-card {
      background: var(--bg-card);
      border: 1px solid var(--danger);
      border-radius: var(--radius);
      overflow: hidden;
      margin-bottom: 32px;
    }

    .failed-header {
      background: var(--danger-bg);
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 1px solid var(--border);
    }

    .failed-header h3 { font-size: 16px; font-weight: 600; color: var(--danger); }

    .failed-count {
      background: var(--danger);
      color: white;
      padding: 2px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 600;
    }

    .failed-list { padding: 8px 0; }

    .failed-item { padding: 16px 20px; border-bottom: 1px solid var(--border); }
    .failed-item:last-child { border-bottom: none; }

    .failed-test-name {
      font-weight: 500;
      margin-bottom: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .failed-test-name::before { content: '✗'; color: var(--danger); }

    .failed-error {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--text-muted);
      background: var(--bg-secondary);
      padding: 12px;
      border-radius: var(--radius-sm);
      overflow-x: auto;
      white-space: pre-wrap;
      word-break: break-word;
    }

    /* Footer */
    footer {
      text-align: center;
      padding: 32px;
      color: var(--text-muted);
      font-size: 13px;
      border-top: 1px solid var(--border);
    }

    /* Responsive */
    @media (max-width: 768px) {
      .summary-grid { grid-template-columns: repeat(2, 1fr); }
      .charts-section { grid-template-columns: 1fr; }
      .category-grid { grid-template-columns: 1fr; }
      .modal-summary { grid-template-columns: repeat(2, 1fr); }
      .tabs { flex-wrap: wrap; }
    }

    /* Print */
    @media print {
      body { background: white; color: black; }
      .modal-overlay { display: block !important; position: relative; background: white; }
      .modal { max-height: none; }
      .btn, .modal-close, .tabs { display: none; }
    }

    /* Animations */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .summary-card, .chart-card, .category-card, .run-card {
      animation: fadeIn 0.4s ease forwards;
    }

    /* Design Compliance Section */
    .design-overview {
      background: linear-gradient(135deg, var(--bg-card) 0%, rgba(99, 102, 241, 0.08) 100%);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 28px;
      margin-bottom: 32px;
    }

    .design-overview-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;
    }

    .design-overview-title {
      font-size: 18px;
      font-weight: 600;
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .design-overview-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 12px;
    }

    .design-module-chip {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 12px 16px;
      background: var(--bg-secondary);
      border: 1px solid var(--border);
      border-radius: var(--radius-sm);
      font-size: 14px;
      transition: all 0.2s ease;
    }

    .design-module-chip:hover { border-color: var(--border-hover); }
    .design-module-chip.pass { border-left: 3px solid var(--success); }
    .design-module-chip.fail { border-left: 3px solid var(--danger); }

    .design-module-chip .chip-status {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      flex-shrink: 0;
    }

    .design-module-chip .chip-status.pass { background: var(--success-bg); color: var(--success); }
    .design-module-chip .chip-status.fail { background: var(--danger-bg); color: var(--danger); }

    .design-module-chip .chip-name { flex: 1; color: var(--text-secondary); }

    .design-rate-badge {
      padding: 6px 14px;
      border-radius: 20px;
      font-size: 14px;
      font-weight: 600;
    }

    .design-rate-badge.good { background: var(--success-bg); color: var(--success); }
    .design-rate-badge.warning { background: var(--warning-bg); color: var(--warning); }
    .design-rate-badge.bad { background: var(--danger-bg); color: var(--danger); }

    /* Test type badges in module cards */
    .test-type-badge {
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.3px;
      white-space: nowrap;
    }

    .test-type-badge.design { background: rgba(99, 102, 241, 0.15); color: #818cf8; }
    .test-type-badge.nav { background: rgba(14, 165, 233, 0.15); color: #38bdf8; }
    .test-type-badge.widget { background: rgba(168, 85, 247, 0.15); color: #c084fc; }
    .test-type-badge.footer { background: rgba(107, 114, 128, 0.15); color: #9ca3af; }
    .test-type-badge.other { background: rgba(245, 158, 11, 0.15); color: #fbbf24; }

    .test-comment {
      font-size: 12px;
      color: var(--text-muted);
      margin-top: 4px;
      line-height: 1.4;
      max-width: 600px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  </style>
</head>
<body>
  <header>
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <div class="logo-icon">📊</div>
          <div class="logo-text">
            <h1>Shunya Labs Website</h1>
            <span>Test Automation Dashboard</span>
          </div>
        </div>
        <div class="header-actions">
          <span style="color: var(--text-muted); font-size: 13px;">
            Last Run: <strong style="color: var(--text-secondary)">${lastRunDate}</strong>
          </span>
          <div class="export-dropdown">
            <button class="btn" onclick="toggleDropdown(this)">📥 Export All ▼</button>
            <div class="export-dropdown-content">
              <button onclick="exportAllHistoryCSV(); closeAllDropdowns();">📄 All Runs Summary (CSV)</button>
              <button onclick="exportAllHistoryJSON(); closeAllDropdowns();">📋 All Runs Complete (JSON)</button>
              <button onclick="exportCurrentRunCSV(); closeAllDropdowns();">📄 Current Run (CSV)</button>
            </div>
          </div>
          <button class="btn" onclick="window.print()">🖨️ Print</button>
        </div>
      </div>
    </div>
  </header>

  <main class="container">
    <!-- Tabs -->
    <div class="tabs">
      <button class="tab active" onclick="showTab('current', this)">📈 Current Run</button>
      <button class="tab" onclick="showTab('history', this)">📅 Run History</button>
      <button class="tab" onclick="showTab('calendar', this)">🗓️ Calendar View</button>
    </div>

    <!-- Current Run Tab -->
    <div id="tab-current" class="tab-content active">
      <!-- Summary Cards -->
      <div class="summary-grid">
        <div class="summary-card info">
          <div class="summary-label">Total Tests</div>
          <div class="summary-value">${total}</div>
        </div>
        <div class="summary-card success">
          <div class="summary-label">Passed</div>
          <div class="summary-value">${passed}</div>
        </div>
        <div class="summary-card danger">
          <div class="summary-label">Failed</div>
          <div class="summary-value">${failed}</div>
        </div>
        <div class="summary-card rate">
          <div class="summary-label">Pass Rate</div>
          <div class="summary-value">${passRate}%</div>
        </div>
      </div>

      ${failed === 0 ? `
      <div class="all-pass-banner">
        <h2>🎉 All Tests Passed!</h2>
        <p>Great job! All ${total} tests are passing successfully.</p>
      </div>
      ` : ``}

      <!-- Charts -->
      <div class="charts-section">
        <div class="chart-card">
          <h3 class="chart-title">Current Run Status</h3>
          <div class="chart-container">
            <canvas id="statusChart"></canvas>
          </div>
        </div>
        <div class="chart-card">
          <h3 class="chart-title">Pass Rate Trend (Last ${recentHistory.length} Runs)</h3>
          <div class="chart-container">
            <canvas id="trendChart"></canvas>
          </div>
        </div>
      </div>

      <!-- Design Compliance Overview -->
      ${designTotal > 0 ? `
      <div class="design-overview">
        <div class="design-overview-header">
          <div class="design-overview-title">
            <span>🎨</span> Figma Design Compliance
            <span style="font-size: 13px; font-weight: 400; color: var(--text-muted);">${designTotal} pages checked</span>
          </div>
          <span class="design-rate-badge ${designRate === 100 ? 'good' : designRate >= 80 ? 'warning' : 'bad'}">${designPassed}/${designTotal} Compliant (${designRate}%)</span>
        </div>
        <div class="design-overview-grid">
          ${designTests.map(t => {
            const pageName = (t.testPoint || '').split(' design compliance')[0].replace(/^.*? - /, '');
            return `<div class="design-module-chip ${t.status.toLowerCase()}">
              <div class="chip-status ${t.status.toLowerCase()}">${t.status === 'PASS' ? '✓' : '✗'}</div>
              <div class="chip-name">${pageName}</div>
            </div>`;
          }).join('')}
        </div>
      </div>
      ` : ''}

      <!-- Module Breakdown -->
      <h2 class="section-title">Test Results by Module</h2>
      <div class="category-grid">
        ${Object.entries(byModule).map(([moduleName, data]) => {
          const moduleRate = data.passed + data.failed > 0 ? Math.round((data.passed / (data.passed + data.failed)) * 100) : 0;
          return `
        <div class="category-card">
          <div class="category-header">
            <div class="category-name">${moduleName}</div>
            <div class="category-stats">
              <span class="stat-badge pass">${data.passed} Pass</span>
              ${data.failed > 0 ? `<span class="stat-badge fail">${data.failed} Fail</span>` : ''}
            </div>
          </div>
          <div class="category-tests">
            ${data.tests.map(t => {
              const ct = cleanTestPoint(t.testPoint);
              return `
            <div class="test-item" style="flex-wrap: wrap;">
              <div class="test-status ${t.status.toLowerCase()}">${t.status === 'PASS' ? '✓' : '✗'}</div>
              <div class="test-name" style="flex: 1;">
                ${ct.name}
                <span class="test-type-badge ${ct.type}">${ct.icon} ${ct.type.toUpperCase()}</span>
              </div>
              ${t.status === 'FAIL' && t.comment ? `<div class="test-comment" style="width: 100%; padding-left: 36px;" title="${escapeHtmlAttr(t.comment)}">${stripAnsi(t.comment).substring(0, 120)}${t.comment.length > 120 ? '...' : ''}</div>` : ''}
            </div>`;
            }).join('')}
          </div>
        </div>`;
        }).join('')}
      </div>
    </div>

    <!-- History Tab -->
    <div id="tab-history" class="tab-content">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
        <h2 class="section-title" style="margin-bottom: 0;">All Test Runs (${history.length} runs stored)</h2>
        <div class="export-dropdown">
          <button class="btn" onclick="toggleDropdown(this)">📥 Export History ▼</button>
          <div class="export-dropdown-content">
            <button onclick="exportAllHistoryCSV(); closeAllDropdowns();">📄 Summary (CSV)</button>
            <button onclick="exportAllHistoryJSON(); closeAllDropdowns();">📋 Complete Data (JSON)</button>
          </div>
        </div>
      </div>
      <div class="history-list">
        ${Object.entries(historyByDate).sort((a, b) => b[0].localeCompare(a[0])).map(([date, runs]) => `
        <div class="history-date-group">
          <div class="history-date-header">
            📅 ${new Date(date + 'T00:00:00+05:30').toLocaleDateString('en-IN', { timeZone: 'Asia/Kolkata', weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            <span style="color: var(--text-muted); font-weight: normal; margin-left: auto;">${runs.length} run${runs.length > 1 ? 's' : ''}</span>
          </div>
          ${runs.sort((a, b) => new Date(b.runDate) - new Date(a.runDate)).map(run => `
          <div class="run-card" onclick="showRunDetails('${run.runId}')">
            <div class="run-card-header">
              <div class="run-time">🕐 ${new Date(run.runDate).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</div>
              <div class="run-stats">
                <span class="run-stat pass">✓ ${run.passed}</span>
                <span class="run-stat fail">✗ ${run.failed}</span>
                <span class="run-pass-rate ${run.passRate === 100 ? 'good' : run.passRate >= 80 ? 'warning' : 'bad'}">${run.passRate}%</span>
              </div>
            </div>
          </div>
          `).join('')}
        </div>
        `).join('')}
      </div>
    </div>

    <!-- Calendar Tab -->
    <div id="tab-calendar" class="tab-content"></div>
  </main>

  <!-- Run Details Modal -->
  <div class="modal-overlay" id="runModal">
    <div class="modal">
      <div class="modal-header">
        <div class="modal-title" id="modalTitle">Run Details</div>
        <button class="modal-close" onclick="closeModal()">×</button>
      </div>
      <div class="modal-body" id="modalBody"></div>
      <div class="modal-footer">
        <div class="modal-footer-left">
          <div class="export-dropdown up">
            <button class="btn" onclick="toggleDropdown(this)">📥 Export This Run ▼</button>
            <div class="export-dropdown-content">
              <button onclick="exportRunCSV(); closeAllDropdowns();">📄 Download as CSV</button>
              <button onclick="exportRunJSON(); closeAllDropdowns();">📋 Download as JSON</button>
            </div>
          </div>
          <button class="btn" onclick="printRun()">🖨️ Print as Proof</button>
        </div>
        <div class="modal-footer-right">
          <button class="btn btn-primary" onclick="closeModal()">Close</button>
        </div>
      </div>
    </div>
  </div>

  <footer>
    <p>Generated by Shunya Labs Test Automation • ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</p>
    <p style="margin-top: 8px; font-size: 11px;">Total runs stored: ${history.length} | History retention: Last 30 days</p>
  </footer>

  <script>
    // Store history data — full test details for last 14 runs, summary-only for older
    const historyData = ${JSON.stringify((() => {
      const recent = history.slice(-14);
      const older = history.slice(0, -14);
      return [
        ...older.map(r => ({
          runId: r.runId, runDate: r.runDate, passed: r.passed,
          failed: r.failed, total: r.total, passRate: r.passRate, tests: []
        })),
        ...recent.map(r => ({
          ...r,
          tests: (r.tests || []).map(t => ({
            ...t,
            comment: t.comment ? t.comment.substring(0, 150) : '',
            attachments: (t.attachments || [])
              .filter(a => a.url && fs.existsSync(path.join(process.cwd(), 'dashboard', a.url)))
              .map(a => ({ name: a.name, contentType: a.contentType, url: a.url }))
          }))
        }))
      ];
    })())};
    const historyByDate = ${JSON.stringify(Object.fromEntries(
      Object.entries(historyByDate).map(([date, runs]) => [
        date,
        runs.map(r => ({
          runId: r.runId,
          runDate: r.runDate,
          passed: r.passed,
          failed: r.failed,
          total: r.total,
          passRate: r.passRate
        }))
      ])
    ))};
    
    let currentMonth = new Date().getMonth();
    let currentYear = new Date().getFullYear();
    let selectedRunId = null;

    function escapeHtml(value) {
      return (value || '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    // Tab switching
    function showTab(tabId, btn) {
      document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      document.getElementById('tab-' + tabId).classList.add('active');
      if (btn) btn.classList.add('active');
      
      if (tabId === 'calendar') {
        renderCalendar();
      }
    }

    // Calendar rendering
    function renderCalendar() {
      const tab = document.getElementById('tab-calendar');
      const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

      // Build runsByDate lookup from historyByDate (keyed YYYY-MM-DD)
      const runsByDate = {};
      for (const [dateStr, runs] of Object.entries(historyByDate)) {
        const d = new Date(dateStr);
        const key = d.getFullYear() + '-' + d.getMonth() + '-' + d.getDate();
        runsByDate[key] = runs;
      }

      const firstDay = new Date(currentYear, currentMonth, 1).getDay();
      const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
      const monthName = new Date(currentYear, currentMonth).toLocaleString('en-US', { month: 'long', year: 'numeric' });
      const today = new Date();
      const isCurrentMonth = today.getFullYear() === currentYear && today.getMonth() === currentMonth;

      let cells = dayNames.map(function(d) { return '<div class="cal-head">' + d + '</div>'; }).join('');

      for (let i = 0; i < firstDay; i++) cells += '<div class="cal-cell empty"></div>';

      for (let d = 1; d <= daysInMonth; d++) {
        const key = currentYear + '-' + currentMonth + '-' + d;
        const dayRuns = runsByDate[key] || [];
        const count = dayRuns.length;
        const avgRate = count > 0 ? Math.round(dayRuns.reduce(function(s, r) { return s + (r.passRate || 0); }, 0) / count) : -1;
        const rateColor = avgRate >= 80 ? 'var(--success)' : avgRate >= 50 ? 'var(--warning)' : 'var(--danger)';
        const isToday = isCurrentMonth && today.getDate() === d;
        const classes = ['cal-cell'];
        if (count > 0) classes.push('has-runs');
        if (isToday) classes.push('today');
        cells += '<div class="' + classes.join(' ') + '" onclick="selectCalDay(' + d + ')" data-day="' + d + '">';
        cells += '<div class="day">' + d + '</div>';
        if (count > 0) {
          cells += '<div class="cal-runs">' + count + ' run' + (count > 1 ? 's' : '') + '</div>';
          cells += '<div class="cal-rate" style="color:' + rateColor + '">' + avgRate + '% pass</div>';
        }
        cells += '</div>';
      }

      tab.innerHTML =
        '<div class="calendar-nav">' +
          '<button class="btn" onclick="changeMonth(-1)">&laquo; Prev</button>' +
          '<h3>' + monthName + '</h3>' +
          '<button class="btn" onclick="changeMonth(1)">Next &raquo;</button>' +
        '</div>' +
        '<div class="calendar-grid">' + cells + '</div>' +
        '<div id="calendarRuns"></div>' +
        '<div class="calendar-footer">Total runs stored: ' + historyData.length + ' | History retention: Last 30 days</div>';
    }

    function changeMonth(delta) {
      currentMonth += delta;
      if (currentMonth > 11) { currentMonth = 0; currentYear++; }
      if (currentMonth < 0) { currentMonth = 11; currentYear--; }
      renderCalendar();
    }

    function selectCalDay(day) {
      document.querySelectorAll('.cal-cell').forEach(function(c) { c.classList.remove('selected'); });
      const cell = document.querySelector('.cal-cell[data-day="' + day + '"]');
      if (cell) cell.classList.add('selected');
      const dateStr = currentYear + '-' + String(currentMonth + 1).padStart(2, '0') + '-' + String(day).padStart(2, '0');
      const runs = historyByDate[dateStr] || [];
      const container = document.getElementById('calendarRuns');
      if (!runs.length) {
        container.innerHTML = '<p style="color:var(--text-muted);padding:12px">No runs on this day.</p>';
        return;
      }
      let html = '<h3 style="font-size:15px;margin-bottom:12px">Runs for ' +
        new Date(currentYear, currentMonth, day).toLocaleDateString('en-US', { month: 'long', day: 'numeric' }) + '</h3>';
      html += '<div class="history-cards">';
      runs.sort(function(a, b) { return new Date(b.runDate) - new Date(a.runDate); }).forEach(function(run) {
        const time = new Date(run.runDate).toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
        const rateColor = run.passRate >= 80 ? 'var(--success)' : 'var(--warning)';
        html += '<div class="run-card" onclick="showRunDetails(\\'' + run.runId + '\\')">' +
          '<div class="run-card-header">' +
            '<div class="run-time">' + time + '</div>' +
            '<div class="run-stats">' +
              '<span class="run-stat pass">' + run.passed + ' passed</span>' +
              (run.failed > 0 ? '<span class="run-stat fail">' + run.failed + ' failed</span>' : '') +
              '<span style="color:' + rateColor + ';font-size:13px;font-weight:600">' + run.passRate + '%</span>' +
            '</div>' +
          '</div>' +
        '</div>';
      });
      html += '</div>';
      container.innerHTML = html;
    }

    // Current filter state
    let currentFilter = 'all';
    let currentRunData = null;

    // Run details modal
    function showRunDetails(runId) {
      selectedRunId = runId;
      const run = historyData.find(r => r.runId === runId);
      if (!run) return;
      
      currentRunData = run;
      currentFilter = 'all';
      renderRunModal(run, 'all');
      document.getElementById('runModal').classList.add('active');
    }

    function renderRunModal(run, filter) {
      const runDate = new Date(run.runDate);
      document.getElementById('modalTitle').textContent = 'Test Run - ' + runDate.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
      
      const testData = run.tests || run.results || [];
      const totalCount = run.total || testData.length;
      const filteredTests = filter === 'all' ? testData : testData.filter(t => t.status === filter.toUpperCase());
      
      let html = \`
      <div class="modal-summary">
        <div class="modal-stat">
          <div class="modal-stat-value" style="color: var(--accent-secondary)">\${run.total}</div>
          <div class="modal-stat-label">Total Tests</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-value" style="color: var(--success)">\${run.passed}</div>
          <div class="modal-stat-label">Passed</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-value" style="color: var(--danger)">\${run.failed}</div>
          <div class="modal-stat-label">Failed</div>
        </div>
        <div class="modal-stat">
          <div class="modal-stat-value" style="color: var(--warning)">\${run.passRate}%</div>
          <div class="modal-stat-label">Pass Rate</div>
        </div>
      </div>
      
      <!-- Filter Buttons -->
      <div class="filter-bar">
        <span style="color: var(--text-muted); font-size: 13px; margin-right: 12px;">Filter:</span>
        <button class="filter-btn \${filter === 'all' ? 'active' : ''}" onclick="filterTests('all')">
          All (\${totalCount})
        </button>
        <button class="filter-btn pass \${filter === 'pass' ? 'active' : ''}" onclick="filterTests('pass')">
          ✓ Passed (\${run.passed})
        </button>
        <button class="filter-btn fail \${filter === 'fail' ? 'active' : ''}" onclick="filterTests('fail')">
          ✗ Failed (\${run.failed})
        </button>
      </div>
      
      <div class="modal-tests-list" id="testsListContainer">\`;
      
      if (filteredTests.length > 0) {
        const attachmentLabel = (attachment) => {
          const type = (attachment.contentType || '').toLowerCase();
          if (type.includes('image')) return '📸 Screenshot';
          if (type.includes('video')) return '🎥 Video';
          if (type.includes('zip')) return '🧵 Trace';
          return '📎 Attachment';
        };

        filteredTests.forEach((test, index) => {
          const validAttachments = (test.attachments || []).filter(att => att && att.url);
          const attachmentsHtml = validAttachments.length
            ? '<div class="modal-test-attachments">' +
              validAttachments.map(att =>
                '<a class="attachment-link" href="' + att.url + '" target="_blank" rel="noreferrer">' +
                attachmentLabel(att) +
                '</a>'
              ).join('') +
              '</div>'
            : '';

          const fullComment = test.comment || '';
          const shortComment = fullComment.length > 300 ? fullComment.substring(0, 300) + '...' : fullComment;
          const commentHtml = test.status === 'FAIL' && fullComment
            ? '<div class="modal-test-comment" id="shortComment-' + index + '">' + escapeHtml(shortComment) + '</div>' +
              '<pre class="modal-test-comment full" id="fullComment-' + index + '">' + escapeHtml(fullComment) + '</pre>' +
              (fullComment.length > 300
                ? '<div class="modal-test-actions"><button class="view-more-btn" id="toggleCommentBtn-' + index + '" onclick="toggleFullComment(' + index + ')">View more</button></div>'
                : '')
            : '';

          html += \`
          <div class="modal-test-item" data-status="\${test.status}">
            <div class="modal-test-status \${test.status.toLowerCase()}">\${test.status === 'PASS' ? '✓' : '✗'}</div>
            <div class="modal-test-info">
              <div class="modal-test-name">\${test.testPoint}</div>
              <div class="modal-test-category">\${test.category || 'Test'} • \${test.moduleName || 'Module'}</div>
              \${commentHtml}
              \${attachmentsHtml}
            </div>
          </div>\`;
        });
      } else {
        html += '<div style="text-align: center; padding: 20px; color: var(--text-muted);">No tests match the selected filter</div>';
      }
      
      html += '</div>';
      html += \`
      <div style="margin-top: 24px; padding: 16px; background: var(--bg-card); border-radius: var(--radius-sm); font-size: 12px; color: var(--text-muted);">
        <strong>Run ID:</strong> \${run.runId}<br>
        <strong>Timestamp:</strong> \${runDate.toISOString()}<br>
        <strong>Filter:</strong> \${filter === 'all' ? 'All Tests' : filter === 'pass' ? 'Passed Only' : 'Failed Only'} (\${filteredTests.length} tests shown)
      </div>\`;
      
      document.getElementById('modalBody').innerHTML = html;
    }

    function filterTests(filter) {
      currentFilter = filter;
      if (currentRunData) {
        renderRunModal(currentRunData, filter);
      }
    }

    function toggleFullComment(index) {
      const fullEl = document.getElementById('fullComment-' + index);
      const shortEl = document.getElementById('shortComment-' + index);
      const btnEl = document.getElementById('toggleCommentBtn-' + index);
      if (!fullEl || !shortEl) return;
      const isVisible = fullEl.style.display === 'block';
      fullEl.style.display = isVisible ? 'none' : 'block';
      shortEl.style.display = isVisible ? 'block' : 'none';
      if (btnEl) btnEl.textContent = isVisible ? 'View more' : 'View less';
    }

    function closeModal() {
      document.getElementById('runModal').classList.remove('active');
      selectedRunId = null;
      currentRunData = null;
      currentFilter = 'all';
    }

    // Export functions
    function exportRunCSV() {
      if (!currentRunData) return;
      const run = currentRunData;
      const testData = run.tests || run.results || [];
      const filteredTests = currentFilter === 'all' ? testData : testData.filter(t => t.status === currentFilter.toUpperCase());
      
      let csv = 'Date/Time,Module Name,Test Point,Status,Category,Comment,Attachments\\n';
      filteredTests.forEach(test => {
        const comment = (test.comment || '').replace(/"/g, "'").replace(/\\n/g, ' ');
        const attachments = (test.attachments || []).map(a => a.url).join(' | ');
        csv += \`"\${test.timestamp || run.runDate}","\${test.moduleName}","\${test.testPoint}","\${test.status}","\${test.category}","\${comment}","\${attachments}"\\n\`;
      });
      
      downloadFile(csv, \`test-run-\${new Date(run.runDate).toISOString().split('T')[0]}-\${currentFilter}.csv\`, 'text/csv');
    }

    function exportRunJSON() {
      if (!currentRunData) return;
      const run = currentRunData;
      const testData = run.tests || run.results || [];
      const filteredTests = currentFilter === 'all' ? testData : testData.filter(t => t.status === currentFilter.toUpperCase());
      
      const exportData = {
        runId: run.runId,
        runDate: run.runDate,
        summary: { total: run.total, passed: run.passed, failed: run.failed, passRate: run.passRate },
        filter: currentFilter,
        testsShown: filteredTests.length,
        tests: filteredTests,
        exportedAt: new Date().toISOString()
      };
      
      downloadFile(JSON.stringify(exportData, null, 2), \`test-run-\${new Date(run.runDate).toISOString().split('T')[0]}-\${currentFilter}.json\`, 'application/json');
    }

    function exportAllHistoryCSV() {
      let csv = 'Run Date,Run ID,Total,Passed,Failed,Pass Rate\\n';
      historyData.forEach(run => {
        csv += \`"\${run.runDate}","\${run.runId}",\${run.total},\${run.passed},\${run.failed},\${run.passRate}%\\n\`;
      });
      downloadFile(csv, 'all-test-runs-summary.csv', 'text/csv');
    }

    function exportAllHistoryJSON() {
      const exportData = {
        exportedAt: new Date().toISOString(),
        totalRuns: historyData.length,
        runs: historyData.map(run => ({
          runId: run.runId,
          runDate: run.runDate,
          summary: { total: run.total, passed: run.passed, failed: run.failed, passRate: run.passRate },
          tests: run.tests || run.results || []
        }))
      };
      downloadFile(JSON.stringify(exportData, null, 2), 'all-test-runs-complete.json', 'application/json');
    }

    function exportCurrentRunCSV() {
      const testData = ${JSON.stringify(testResults.map(r => ({
        timestamp: r.dateTime,
        moduleName: r.moduleName,
        testPoint: r.testPoint,
        status: r.status,
        category: r.category,
        comment: r.comment
      })))};
      
      let csv = 'Date/Time,Module Name,Test Point,Status,Category,Comment\\n';
      testData.forEach(test => {
        const comment = (test.comment || '').replace(/"/g, "'").replace(/\\n/g, ' ');
        csv += \`"\${test.timestamp}","\${test.moduleName}","\${test.testPoint}","\${test.status}","\${test.category}","\${comment}"\\n\`;
      });
      
      downloadFile(csv, \`current-run-\${new Date().toISOString().split(\"T\")[0]}.csv\`, 'text/csv');
    }

    function downloadFile(content, filename, type) {
      const blob = new Blob([content], { type: type });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }

    function printRun() {
      window.print();
    }

    // Dropdown toggle functions
    function toggleDropdown(btn) {
      const dropdown = btn.nextElementSibling;
      const isOpen = dropdown.classList.contains('show');
      
      // Close all dropdowns first
      closeAllDropdowns();
      
      // Toggle this one
      if (!isOpen) {
        dropdown.classList.add('show');
      }
    }

    function closeAllDropdowns() {
      document.querySelectorAll('.export-dropdown-content').forEach(d => {
        d.classList.remove('show');
      });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.export-dropdown')) {
        closeAllDropdowns();
      }
    });

    // Close modal on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });

    function renderChartFallback(canvasId, message) {
      const canvas = document.getElementById(canvasId);
      if (!canvas || !canvas.parentElement) return;
      canvas.parentElement.innerHTML = \`<div class="chart-fallback">\${message}</div>\`;
    }

    function initCharts() {
      try {
        if (!window.Chart) {
          renderChartFallback('statusChart', 'Charts unavailable (offline).');
          renderChartFallback('trendChart', 'Charts unavailable (offline).');
          return;
        }

        const statusCanvas = document.getElementById('statusChart');
        const trendCanvas = document.getElementById('trendChart');
        if (!statusCanvas || !trendCanvas) return;

        const statusCtx = statusCanvas.getContext('2d');
        new Chart(statusCtx, {
          type: 'doughnut',
          data: {
            labels: ['Passed', 'Failed'],
            datasets: [{
              data: [${passed}, ${failed}],
              backgroundColor: ['#22c55e', '#ef4444'],
              borderWidth: 0,
              hoverOffset: 4
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'bottom',
                labels: { color: '#a0a0b0', padding: 20, font: { family: 'DM Sans', size: 13 } }
              }
            },
            cutout: '70%'
          }
        });

        const trendCtx = trendCanvas.getContext('2d');
        new Chart(trendCtx, {
          type: 'line',
          data: {
            labels: ${JSON.stringify(historyDates)},
            datasets: [{
              label: 'Pass Rate %',
              data: ${JSON.stringify(historyPassRates)},
              borderColor: '#6366f1',
              backgroundColor: 'rgba(99, 102, 241, 0.1)',
              fill: true,
              tension: 0.3,
              pointRadius: 4,
              pointHoverRadius: 6
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                max: 100,
                grid: { color: 'rgba(255,255,255,0.05)' },
                ticks: { color: '#6b6b7b', font: { family: 'DM Sans' } }
              },
              x: {
                grid: { display: false },
                ticks: { color: '#6b6b7b', font: { family: 'DM Sans', size: 10 }, maxRotation: 45 }
              }
            },
            plugins: { legend: { display: false } }
          }
        });
      } catch (error) {
        renderChartFallback('statusChart', 'Charts failed to load.');
        renderChartFallback('trendChart', 'Charts failed to load.');
        console.warn('Chart init error:', error);
      }
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', () => {
      renderCalendar();
      initCharts();
    });
  </script>
</body>
</html>`;

  return html;
}

// Main execution
const isRebuild = process.argv.includes('--rebuild');
console.log(`📊 ${isRebuild ? 'Rebuilding' : 'Generating'} Test Report Dashboard...\n`);

let history, html, total, passed, failed;

if (isRebuild) {
  // Rebuild from existing history only — no new test results needed
  history = loadHistory();
  if (!history.length) {
    console.log('❌ No history found. Nothing to rebuild.');
    process.exit(1);
  }
  const latestRun = history[history.length - 1];
  // Use latest run's tests as "current results" for the dashboard
  const currentResults = (latestRun.tests || []);
  const mockPlaywright = {
    summary: { total: latestRun.total, passed: latestRun.passed, failed: latestRun.failed, passRate: latestRun.passRate },
    tests: currentResults,
  };
  html = generateDashboard([], history, mockPlaywright);
  passed = latestRun.passed;
  failed = latestRun.failed;
  total = latestRun.total;
} else {
  const results = readAllResults();
  const playwrightRun = readPlaywrightReport();

  if (results.length === 0 && !playwrightRun) {
    console.log('❌ No test results found in test-results folder.');
    console.log('   Run tests first: npm test');
    process.exit(1);
  }

  history = saveToHistory(results, playwrightRun);
  html = generateDashboard(results, history, playwrightRun);

  const testResults = results.filter(r => r.status === 'PASS' || r.status === 'FAIL');
  passed = playwrightRun?.summary?.passed ?? testResults.filter(r => r.status === 'PASS').length;
  failed = playwrightRun?.summary?.failed ?? testResults.filter(r => r.status === 'FAIL').length;
  total = playwrightRun?.summary?.total ?? (passed + failed);
}

fs.writeFileSync(DASHBOARD_FILE, html);

console.log('✅ Dashboard generated successfully!\n');
console.log(`📈 ${isRebuild ? 'Latest Run' : 'Current Run'} Summary:`);
console.log(`   Total Tests: ${total}`);
console.log(`   Passed: ${passed}`);
console.log(`   Failed: ${failed}`);
console.log(`   Pass Rate: ${total > 0 ? Math.round((passed / total) * 100) : 0}%\n`);
console.log(`📁 Dashboard: ${DASHBOARD_FILE}`);
console.log(`📁 History: ${path.join(HISTORY_DIR, 'runs.json')} (${history.length} runs stored)`);
console.log(`\n🌐 Open dashboard: npm run dashboard:open`);
console.log(`   Or simply open the file in your browser.\n`);
