#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT_DIR}"

if [[ -f ".env" ]]; then
  set -a
  source ".env"
  set +a
fi

BRANCH="${CRON_BRANCH:-saira-website}"

if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  git fetch origin "${BRANCH}"
  git checkout "${BRANCH}"
  git pull --rebase origin "${BRANCH}"
fi

if [[ "${CRON_INSTALL:-1}" == "1" ]]; then
  if [[ -f package-lock.json ]]; then
    npm ci
  else
    npm install
  fi
fi

export PLAYWRIGHT_BROWSERS_PATH="${PLAYWRIGHT_BROWSERS_PATH:-$PWD/.playwright}"
if [[ ! -d "${PLAYWRIGHT_BROWSERS_PATH}" ]]; then
  npx playwright install chromium
fi

bash scripts/run-tests-and-dashboard.sh
