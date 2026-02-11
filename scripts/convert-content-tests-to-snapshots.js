#!/usr/bin/env node
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const TESTS_ROOT = path.join(ROOT, 'tests', 'modules');

function listContentSpecs(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...listContentSpecs(fullPath));
    } else if (entry.isFile() && entry.name === 'content.spec.js') {
      files.push(fullPath);
    }
  }
  return files;
}

function buildTemplate(moduleKey, slug) {
  return `import { test } from '@playwright/test';
import { pageRegistry } from '../../../../test-data/page-registry.js';
import { runContentSnapshotTest } from '../../../../utils/module-test-runner.js';

const pageEntry = pageRegistry.find(
  (page) => page.moduleKey === '${moduleKey}' && page.slug === '${slug}'
);

const moduleLabel = pageEntry?.moduleLabel || '${moduleKey}';
const pageLabel = pageEntry?.pageLabel || '${slug}';

test.describe(\`\${moduleLabel} - \${pageLabel} content (Snapshot)\`, () => {
  test('Content snapshot matches', async ({ page }) => {
    await runContentSnapshotTest({ page, pageEntry });
  });
});
`;
}

function main() {
  const files = listContentSpecs(TESTS_ROOT);
  files.forEach((filePath) => {
    const relative = path.relative(TESTS_ROOT, filePath);
    const parts = relative.split(path.sep);
    const moduleKey = parts[0];
    const slug = parts[1];
    const content = buildTemplate(moduleKey, slug);
    fs.writeFileSync(filePath, content);
  });
}

main();
