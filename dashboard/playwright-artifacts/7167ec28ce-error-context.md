# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-universal/design.spec.js >> Models - Zero STT Universal design compliance >> Figma design compliance
- Location: tests/modules/models/zero-stt-universal/design.spec.js:13:3

# Error details

```
Error: [images] Image count: expected 27 but found 0

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "The world’s most accurate speech-to-text model supporting 200+ languages" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Speech recognition built for scale" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Section 3" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Product" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Models" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Solutions" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Resources" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Documentation" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "About Us" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Pricing" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Playground" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Sign In" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Contact Sales" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "The fastest way to add voice AI to your products" not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "One platform for speech in and speech out—secure by design, built to scale." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "Get Started" not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "Contact Sales" not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Page title: expected "Zero STT - Real-Time Speech-to-Text AI for 200+ Languages | Shunya Labs" but got ""

expect(received).toBeTruthy()

Received: null
```

```
Error: [console] 1 console error(s): Loading chunk 1356 failed.
(error: https://www.shunyalabs.ai/_next/static/chunks/1356-952fd17f9c4510ed.js?dpl=dpl_C917Fvrw5YsbdfKLpoZqMaMCPi3f)

expect(received).toBeTruthy()

Received: null
```

```
Error: 20 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 20
```

# Page snapshot

```yaml
- 'heading "Application error: a client-side exception has occurred while loading www.shunyalabs.ai (see the browser console for more information)." [level=2] [ref=e4]'
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { pageRegistry } from '../../../../test-data/page-registry.js';
  3  | import { runDesignComplianceTest } from '../../../../utils/design-validator.js';
  4  | 
  5  | const pageEntry = pageRegistry.find(
  6  |   (page) => page.moduleKey === 'models' && page.slug === 'zero-stt-universal'
  7  | );
  8  | 
  9  | const moduleLabel = pageEntry?.moduleLabel || 'models';
  10 | const pageLabel = pageEntry?.pageLabel || 'zero-stt-universal';
  11 | 
  12 | test.describe(`${moduleLabel} - ${pageLabel} design compliance`, () => {
  13 |   test('Figma design compliance', async ({ page }) => {
  14 |     const failures = await runDesignComplianceTest({ page, pageEntry });
  15 | 
  16 |     for (const f of failures) {
  17 |       expect.soft(null, `[${f.section}] ${f.message}`).toBeTruthy();
  18 |     }
  19 | 
> 20 |     expect(failures.length, `${failures.length} design compliance issue(s) found`).toBe(0);
     |                                                                                    ^ Error: 20 design compliance issue(s) found
  21 |   });
  22 | });
  23 | 
```