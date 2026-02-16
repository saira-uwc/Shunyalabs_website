import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { pageRegistry } from '../test-data/page-registry.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.join(__dirname, '..');

const activePages = pageRegistry.filter((entry) => entry.status === 'active');

const toPascalCase = (value) =>
  value
    .replace(/[^a-zA-Z0-9]+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join('');

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const buildPageObjectContent = (entry) => {
  const className = `${toPascalCase(entry.slug)}Page`;
  return `import { BasePage } from '../base.page.js';

export class ${className} extends BasePage {
  constructor(page) {
    super(page, {
      path: '${entry.path}',
      moduleLabel: '${entry.moduleLabel}',
      pageLabel: '${entry.pageLabel}',
    });
  }
}
`;
};

const buildDesignSpec = (entry) => {
  return `import { test, expect } from '@playwright/test';
import { pageRegistry } from '../../../../test-data/page-registry.js';
import { runDesignComplianceTest } from '../../../../utils/design-validator.js';

const pageEntry = pageRegistry.find(
  (page) => page.moduleKey === '${entry.moduleKey}' && page.slug === '${entry.slug}'
);

const moduleLabel = pageEntry?.moduleLabel || '${entry.moduleKey}';
const pageLabel = pageEntry?.pageLabel || '${entry.slug}';

test.describe(\`\${moduleLabel} - \${pageLabel} design compliance\`, () => {
  test('Figma design compliance', async ({ page }) => {
    const failures = await runDesignComplianceTest({ page, pageEntry });

    for (const f of failures) {
      expect.soft(null, \`[\${f.section}] \${f.message}\`).toBeTruthy();
    }

    expect(failures.length, \`\${failures.length} design compliance issue(s) found\`).toBe(0);
  });
});
`;
};

for (const entry of activePages) {
  const pageDir = path.join(rootDir, 'pages', entry.moduleKey);
  ensureDir(pageDir);
  const pageObjectPath = path.join(pageDir, `${entry.slug}.page.js`);
  if (!fs.existsSync(pageObjectPath)) {
    fs.writeFileSync(pageObjectPath, buildPageObjectContent(entry));
  }

  const testDir = path.join(rootDir, 'tests', 'modules', entry.moduleKey, entry.slug);
  ensureDir(testDir);

  // Remove legacy spec files if they exist (now covered by design.spec.js)
  for (const legacy of ['content.spec.js', 'cta.spec.js', 'actions.spec.js']) {
    const legacyPath = path.join(testDir, legacy);
    if (fs.existsSync(legacyPath)) fs.unlinkSync(legacyPath);
  }

  fs.writeFileSync(path.join(testDir, 'design.spec.js'), buildDesignSpec(entry));
}

console.log(`Generated page objects and tests for ${activePages.length} pages.`);
