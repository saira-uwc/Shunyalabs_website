/**
 * Translate raw Playwright error messages into plain, human-readable descriptions.
 * Used by both the dashboard generator and the Google Sheets updater.
 */

function stripAnsi(str) {
  return (str || '')
    .replace(/\x1b\[[0-9;]*[a-zA-Z]/g, '')
    .replace(/\x1b\[[0-9;]*/g, '')
    .replace(/\x1b./g, '')
    .replace(/\x1b/g, '')
    .replace(/\[\d+m/g, '')
    .replace(/\[0m/g, '');
}

/**
 * Convert a raw Playwright error into a short, plain-English explanation.
 *
 * @param {string} rawError - The raw error.message from Playwright JSON report
 * @returns {string} Human-readable failure reason
 */
function humanizeError(rawError) {
  if (!rawError) return '';
  const err = stripAnsi(rawError);

  // ── Snapshot-validator mismatches (from old content snapshot tests) ─
  const navMismatch = err.match(/headerNav mismatch.*?expected "([^"]*)" vs "([^"]*)"/);
  if (navMismatch) {
    const parts = [];
    parts.push(`Navigation menu changed: "${navMismatch[1]}" is now "${navMismatch[2]}"`);
    const mainMismatch = err.match(/mainText mismatch.*?expected "([^"]*)" vs "([^"]*)"/);
    if (mainMismatch) parts.push(`Page text changed: "${mainMismatch[1]}" is now "${mainMismatch[2]}"`);
    const footerMismatch = err.match(/footerNav mismatch.*?expected "([^"]*)" vs "([^"]*)"/);
    if (footerMismatch) parts.push(`Footer link changed: "${footerMismatch[1]}" is now "${footerMismatch[2]}"`);
    return parts.join('. ');
  }
  if (err.includes('mainText mismatch')) {
    const m = err.match(/mainText mismatch.*?expected "([^"]*)" vs "([^"]*)"/);
    return m ? `Page text changed: "${m[1]}" is now "${m[2]}"` : 'Page text content has changed from expected';
  }
  if (err.includes('footerNav mismatch')) {
    const m = err.match(/footerNav mismatch.*?expected "([^"]*)" vs "([^"]*)"/);
    return m ? `Footer link changed: "${m[1]}" is now "${m[2]}"` : 'Footer navigation has changed from expected';
  }
  if (err.includes('Missing snapshot for')) {
    return 'Baseline snapshot has not been created yet — run baseline generation first';
  }

  // ── Design compliance soft-assertion failures ──────────────────────
  // These use expect.soft(null, `[section] message`).toBeTruthy()
  // The custom message is already human-readable.
  const designSections = ['headings', 'images', 'content', 'links', 'buttons', 'layout', 'global', 'console'];
  const sectionPattern = new RegExp(`\\[(${designSections.join('|')})\\]\\s*(.+?)(?:\\n|$)`);
  const sectionMatch = err.match(sectionPattern);
  if (sectionMatch) {
    return sectionMatch[2].trim();
  }

  // Aggregate "N design issues found" → list the soft failures
  const designCountMatch = err.match(/(\d+)\s+design issues? found/);
  if (designCountMatch) {
    return `${designCountMatch[1]} design issues detected on this page (see individual failures above)`;
  }

  // ── Visual snapshot missing ────────────────────────────────────────
  if (err.includes("snapshot doesn't exist") || err.includes('snapshot does not exist')) {
    return 'Visual baseline screenshot has not been created yet — needs an initial run to generate';
  }

  // ── Visual regression mismatch ─────────────────────────────────────
  if (err.includes('toHaveScreenshot')) {
    const pixelMatch = err.match(/(\d+)\s*pixels?\s*.*differ/i);
    if (pixelMatch) return `Visual regression: ${pixelMatch[1]} pixels differ from the baseline screenshot`;
    return 'Visual regression: the page screenshot does not match the baseline';
  }

  // ── Timeout ────────────────────────────────────────────────────────
  if (/timed?\s*out/i.test(err)) {
    const msMatch = err.match(/(\d+)\s*ms/);
    const seconds = msMatch ? Math.round(parseInt(msMatch[1]) / 1000) : null;
    return seconds
      ? `Test timed out after ${seconds}s — the page or an element took too long to respond`
      : 'Test timed out — the page or an element took too long to respond';
  }

  // ── toBe with Expected / Received ──────────────────────────────────
  if (err.includes('toBe') && err.includes('Expected') && err.includes('Received')) {
    const expected = err.match(/Expected:\s*"?([^"\n]*?)"?\s*(?:\n|Received)/)?.[1]?.trim();
    const received = err.match(/Received:\s*"?([^"\n]*?)"?\s*(?:\n|$)/)?.[1]?.trim();
    if (expected !== undefined && received !== undefined) {
      if (!received || received === '""' || received === "''") {
        return `Expected "${expected}" but the value was empty or missing on the page`;
      }
      // Keep short
      const exp = expected.length > 60 ? expected.substring(0, 57) + '...' : expected;
      const rec = received.length > 60 ? received.substring(0, 57) + '...' : received;
      return `Expected "${exp}" but got "${rec}"`;
    }
  }

  // ── toEqual (array / object mismatch) ──────────────────────────────
  if (err.includes('toEqual')) {
    // Try to identify what's being compared from surrounding context
    if (err.includes('dropdown') || err.includes('nav') || err.includes('Nav')) {
      return 'Navigation dropdown items do not match the expected menu structure';
    }
    if (err.includes('footer') || err.includes('Footer') || err.includes('column')) {
      return 'Footer content does not match the expected layout';
    }
    if (err.includes('widget') || err.includes('Widget') || err.includes('playground')) {
      return 'Widget content does not match the expected text';
    }
    return 'Page content does not match the expected values';
  }

  // ── Common Playwright matchers ─────────────────────────────────────
  if (err.includes('toBeEnabled')) return 'A button or element is not enabled when it should be';
  if (err.includes('toBeDisabled')) return 'A button or element is not disabled when it should be';
  if (err.includes('toBeVisible')) return 'An element is not visible on the page when it should be';
  if (err.includes('toBeHidden')) return 'An element is still visible on the page when it should be hidden';
  if (err.includes('toHaveAttribute')) {
    const attrMatch = err.match(/Locator:\s*(.+?)(?:\n|$)/);
    return attrMatch
      ? `Element attribute does not match expected value for: ${attrMatch[1].trim().substring(0, 80)}`
      : 'An element attribute does not match the expected value';
  }
  if (err.includes('toContainText')) {
    const textMatch = err.match(/Expected string:\s*"([^"]+)"/);
    return textMatch
      ? `Page does not contain the expected text "${textMatch[1]}"`
      : 'Page does not contain the expected text';
  }
  if (err.includes('toHaveURL')) return 'Page did not navigate to the expected URL';
  if (err.includes('toHaveTitle')) return 'Page title does not match the expected value';
  if (err.includes('toHaveCount')) return 'Number of elements on the page does not match the expected count';

  // ── Network / page errors ──────────────────────────────────────────
  if (err.includes('net::ERR_')) return 'Network error — the page or a resource failed to load';
  if (err.includes('Navigation failed') || err.includes('ERR_CONNECTION')) {
    return 'Could not navigate to the page — connection failed';
  }

  // ── Fallback: first meaningful line without code/stack traces ──────
  const lines = err.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    // Skip stack trace lines, code snippets, and empty lines
    if (!trimmed) continue;
    if (/^\d+\s*\|/.test(trimmed)) continue;        // code line numbers like "25 |"
    if (trimmed.startsWith('at ')) continue;           // stack trace
    if (trimmed.startsWith('>')) continue;              // pointer lines
    if (trimmed.startsWith('|')) continue;              // continuation
    if (/^(Expected|Received):/.test(trimmed)) continue; // already handled above
    // Clean up Error: prefix
    const cleaned = trimmed.replace(/^Error:\s*/, '').trim();
    if (cleaned.length > 10) {
      return cleaned.length > 200 ? cleaned.substring(0, 197) + '...' : cleaned;
    }
  }

  return err.substring(0, 200);
}

export { humanizeError, stripAnsi };
