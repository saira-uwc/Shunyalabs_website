#!/usr/bin/env bash
set -euo pipefail

TEST_EXIT=0
if [[ -f ".env" ]]; then
  set -a
  source ".env"
  set +a
fi

export PLAYWRIGHT_BROWSERS_PATH="${PLAYWRIGHT_BROWSERS_PATH:-$PWD/.playwright}"
if [[ -z "${PLAYWRIGHT_HOST_PLATFORM:-}" ]]; then
  case "$(uname -s)" in
    Darwin) export PLAYWRIGHT_HOST_PLATFORM="darwin-x64" ;;
  esac
fi
export PLAYWRIGHT_HTML_OPEN="never"
npx playwright test || TEST_EXIT=$?

echo "--- Generating dashboard ---"
node dashboard/generate-dashboard.js

echo "--- Updating coverage sheet ---"
node scripts/update-coverage-sheet.js || echo "⚠️  Coverage sheet update failed (non-fatal)"

echo "--- Publishing dashboard ---"
bash scripts/publish-dashboard.sh || echo "⚠️  Dashboard publish failed (non-fatal)"

exit "$TEST_EXIT"
