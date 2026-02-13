#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

# Load .env if present (local development)
if [[ -f ".env" ]]; then
  set -a
  source ".env"
  set +a
fi

# Create output directories
mkdir -p reports docs/history docs/data docs/exports test-results

# Platform-specific Playwright path
export PLAYWRIGHT_BROWSERS_PATH="${PLAYWRIGHT_BROWSERS_PATH:-$PWD/.playwright}"
if [[ -z "${PLAYWRIGHT_HOST_PLATFORM:-}" ]]; then
  case "$(uname -s)" in
    Darwin) export PLAYWRIGHT_HOST_PLATFORM="darwin-x64" ;;
  esac
fi
export PLAYWRIGHT_HTML_OPEN="never"

# Run tests (capture exit code, don't fail yet)
TEST_EXIT=0
set +e
npx playwright test
TEST_EXIT=$?
set -e

# Generate dashboard (always, even if tests fail)
echo "--- Generating dashboard ---"
node dashboard/generate-dashboard.js

# Update Google Sheet (optional, don't fail if it errors)
echo "--- Updating coverage sheet ---"
node scripts/update-coverage-sheet.js || echo "Sheet update failed (non-fatal)"

# Local only: commit and push dashboard
if [ -z "${CI:-}" ] && git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "--- Publishing dashboard (local) ---"
  bash scripts/publish-dashboard.sh || echo "Dashboard publish failed (non-fatal)"
fi

exit "$TEST_EXIT"
