#!/usr/bin/env bash
set -euo pipefail

TEST_EXIT=0
if [[ -f ".env" ]]; then
  set -a
  source ".env"
  set +a
fi

export PLAYWRIGHT_BROWSERS_PATH="${PLAYWRIGHT_BROWSERS_PATH:-$PWD/.playwright}"
export PLAYWRIGHT_HOST_PLATFORM="${PLAYWRIGHT_HOST_PLATFORM:-darwin-x64}"
export PLAYWRIGHT_HTML_OPEN="never"
npx playwright test || TEST_EXIT=$?

node dashboard/generate-dashboard.js
node scripts/update-coverage-sheet.js || true
bash scripts/publish-dashboard.sh

exit "$TEST_EXIT"
