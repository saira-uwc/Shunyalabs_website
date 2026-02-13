#!/usr/bin/env bash
set -euo pipefail

# Publishes the generated dashboard to the current repo (origin).
# Optional env vars:
#   DASHBOARD_PAGES_BRANCH (default: current branch)

if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "Not inside a git repository. Aborting."
  exit 1
fi

REMOTE_NAME="origin"
PAGES_BRANCH="${DASHBOARD_PAGES_BRANCH:-$(git rev-parse --abbrev-ref HEAD)}"
BRANCH="$(git rev-parse --abbrev-ref HEAD)"

if ! git remote get-url origin >/dev/null 2>&1; then
  echo "Git remote 'origin' not found. Set it to your GitHub repo first."
  exit 1
fi

REMOTE_URL="$(git remote get-url origin)"
echo "Publishing to: ${REMOTE_URL}"

# Pull latest remote changes FIRST to avoid non-fast-forward rejection
echo "Pulling latest changes from ${REMOTE_NAME}/${PAGES_BRANCH}..."
git pull --rebase "${REMOTE_NAME}" "${PAGES_BRANCH}" 2>&1 || echo "Pull failed or no remote branch yet (continuing...)"

# Stage dashboard files
git add dashboard/index.html dashboard/history/runs.json
if [[ -d "dashboard/playwright-artifacts" ]]; then
  git add dashboard/playwright-artifacts
fi

if git diff --cached --quiet; then
  echo "No dashboard changes to publish."
  exit 0
fi

COMMIT_MSG="Update dashboard $(date -u +"%Y-%m-%d %H:%M UTC")"
git commit -m "${COMMIT_MSG}"

echo "Pushing to ${REMOTE_NAME} ${BRANCH}:${PAGES_BRANCH}..."
git push "${REMOTE_NAME}" "${BRANCH}:${PAGES_BRANCH}"

echo "✅ Dashboard published."
