/**
 * Translate raw Playwright error messages into plain, human-readable descriptions
 * framed as "As per Figma design" vs "on the live website".
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
 * Convert a raw Playwright error into a short, plain-English explanation
 * that clearly states what was expected (per Figma) and what was found on the live site.
 *
 * @param {string} rawError - The raw error.message from Playwright JSON report
 * @returns {string} Human-readable failure reason
 */
function humanizeError(rawError) {
  if (!rawError) return '';
  const err = stripAnsi(rawError);

  // ── Snapshot-validator mismatches (headerNav / mainText / footerNav) ─
  const navMismatch = err.match(/headerNav mismatch.*?expected "([^"]*)" vs "([^"]*)"/);
  if (navMismatch) {
    const parts = [];
    parts.push(`As per Figma, navigation should show "${navMismatch[1]}" but the live website shows "${navMismatch[2]}"`);
    const mainMismatch = err.match(/mainText mismatch.*?expected "([^"]*)" vs "([^"]*)"/);
    if (mainMismatch) parts.push(`As per Figma, page text should be "${mainMismatch[1]}" but the live website shows "${mainMismatch[2]}"`);
    const footerMismatch = err.match(/footerNav mismatch.*?expected "([^"]*)" vs "([^"]*)"/);
    if (footerMismatch) parts.push(`As per Figma, footer should show "${footerMismatch[1]}" but the live website shows "${footerMismatch[2]}"`);
    return parts.join('. ');
  }
  if (err.includes('mainText mismatch')) {
    const m = err.match(/mainText mismatch.*?expected "([^"]*)" vs "([^"]*)"/);
    return m
      ? `As per Figma, page text should be "${m[1]}" but the live website shows "${m[2]}"`
      : 'Page text on the live website does not match the Figma design';
  }
  if (err.includes('footerNav mismatch')) {
    const m = err.match(/footerNav mismatch.*?expected "([^"]*)" vs "([^"]*)"/);
    return m
      ? `As per Figma, footer should show "${m[1]}" but the live website shows "${m[2]}"`
      : 'Footer on the live website does not match the Figma design';
  }
  if (err.includes('Missing snapshot for')) {
    return 'Baseline snapshot has not been created yet — run baseline generation first';
  }

  // ── Design compliance soft-assertion failures ──────────────────────
  // These use expect.soft(null, `[section] message`).toBeTruthy()
  // The message is already structured; prefix with Figma context.
  const designSections = ['headings', 'images', 'content', 'links', 'buttons', 'layout', 'global', 'console'];
  const sectionPattern = new RegExp(`\\[(${designSections.join('|')})\\]\\s*(.+?)(?:\\n|$)`);
  const sectionMatch = err.match(sectionPattern);
  if (sectionMatch) {
    const msg = sectionMatch[2].trim();
    // Already mentions "expected" / "got" — add Figma framing
    if (msg.includes('expected') && msg.includes('got')) {
      return `As per Figma design: ${msg}`;
    }
    if (msg.includes('missing') || msg.includes('not found') || msg.includes('not loaded')) {
      return `As per Figma, this should exist but is missing on the live website: ${msg}`;
    }
    return `Figma design mismatch: ${msg}`;
  }

  // Aggregate "N design issues found"
  const designCountMatch = err.match(/(\d+)\s+design issues? found/);
  if (designCountMatch) {
    return `${designCountMatch[1]} design mismatches found between Figma and the live website`;
  }

  // ── Visual snapshot missing ────────────────────────────────────────
  if (err.includes("snapshot doesn't exist") || err.includes('snapshot does not exist')) {
    return 'Visual baseline screenshot has not been created yet — needs an initial run to generate';
  }

  // ── Visual regression mismatch ─────────────────────────────────────
  if (err.includes('toHaveScreenshot')) {
    const pixelMatch = err.match(/(\d+)\s*pixels?\s*.*differ/i);
    if (pixelMatch) return `Live website looks different from Figma baseline — ${pixelMatch[1]} pixels differ`;
    return 'Live website screenshot does not match the Figma baseline';
  }

  // ── Timeout ────────────────────────────────────────────────────────
  if (/timed?\s*out/i.test(err)) {
    const msMatch = err.match(/(\d+)\s*ms/);
    const seconds = msMatch ? Math.round(parseInt(msMatch[1]) / 1000) : null;
    return seconds
      ? `Live website timed out after ${seconds}s — the page or element took too long to load`
      : 'Live website timed out — the page or element took too long to load';
  }

  // ── toBe with Expected / Received ──────────────────────────────────
  if (err.includes('toBe') && err.includes('Expected') && err.includes('Received')) {
    const expected = err.match(/Expected:\s*"?([^"\n]*?)"?\s*(?:\n|Received)/)?.[1]?.trim();
    const received = err.match(/Received:\s*"?([^"\n]*?)"?\s*(?:\n|$)/)?.[1]?.trim();
    if (expected !== undefined && received !== undefined) {
      const exp = expected.length > 60 ? expected.substring(0, 57) + '...' : expected;
      if (!received || received === '""' || received === "''") {
        return `As per Figma, "${exp}" should be present but it is missing on the live website`;
      }
      const rec = received.length > 60 ? received.substring(0, 57) + '...' : received;
      return `As per Figma, expected "${exp}" but the live website shows "${rec}"`;
    }
  }

  // ── toEqual (array / object mismatch) ──────────────────────────────
  if (err.includes('toEqual')) {
    if (err.includes('dropdown') || err.includes('nav') || err.includes('Nav')) {
      return 'As per Figma, navigation dropdown items do not match what is shown on the live website';
    }
    if (err.includes('footer') || err.includes('Footer') || err.includes('column')) {
      return 'As per Figma, footer content does not match what is shown on the live website';
    }
    if (err.includes('widget') || err.includes('Widget') || err.includes('playground')) {
      return 'As per Figma, widget content does not match what is shown on the live website';
    }
    return 'As per Figma, page content does not match what is shown on the live website';
  }

  // ── Common Playwright matchers ─────────────────────────────────────
  if (err.includes('toBeEnabled')) return 'As per Figma, a button should be enabled but it is disabled on the live website';
  if (err.includes('toBeDisabled')) return 'As per Figma, a button should be disabled but it is enabled on the live website';
  if (err.includes('toBeVisible')) return 'As per Figma, an element should be visible but it is missing on the live website';
  if (err.includes('toBeHidden')) return 'As per Figma, an element should be hidden but it is visible on the live website';
  if (err.includes('toHaveAttribute')) {
    const attrMatch = err.match(/Locator:\s*(.+?)(?:\n|$)/);
    return attrMatch
      ? `As per Figma, element attribute does not match on the live website: ${attrMatch[1].trim().substring(0, 80)}`
      : 'As per Figma, an element attribute does not match on the live website';
  }
  if (err.includes('toContainText')) {
    const textMatch = err.match(/Expected string:\s*"([^"]+)"/);
    return textMatch
      ? `As per Figma, "${textMatch[1]}" should be on the page but is missing on the live website`
      : 'As per Figma, expected text is missing on the live website';
  }
  if (err.includes('toHaveURL')) return 'Live website did not navigate to the expected URL as per Figma';
  if (err.includes('toHaveTitle')) return 'Live website page title does not match the Figma design';
  if (err.includes('toHaveCount')) return 'As per Figma, number of elements does not match what is on the live website';

  // ── Network / page errors ──────────────────────────────────────────
  if (err.includes('net::ERR_')) return 'Live website error — the page or a resource failed to load';
  if (err.includes('Navigation failed') || err.includes('ERR_CONNECTION')) {
    return 'Could not open the live website page — connection failed';
  }

  // ── Fallback: first meaningful line without code/stack traces ──────
  const lines = err.split('\n');
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) continue;
    if (/^\d+\s*\|/.test(trimmed)) continue;
    if (trimmed.startsWith('at ')) continue;
    if (trimmed.startsWith('>')) continue;
    if (trimmed.startsWith('|')) continue;
    if (/^(Expected|Received):/.test(trimmed)) continue;
    const cleaned = trimmed.replace(/^Error:\s*/, '').trim();
    if (cleaned.length > 10) {
      return cleaned.length > 200 ? cleaned.substring(0, 197) + '...' : cleaned;
    }
  }

  return err.substring(0, 200);
}

export { humanizeError, stripAnsi };
