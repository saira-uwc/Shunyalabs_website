# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/research/design.spec.js >> Resources - Research design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [global] Footer background: expected rgb(11, 11, 15) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "☰" not found in header

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
Error: [content] Text content "About Us" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Playground" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Sign In" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Contact Sales" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Contact Sales (/contact)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 18 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 18
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - banner:
      - generic [ref=e3]:
        - link "Shunya Labs Logo" [ref=e4] [cursor=pointer]:
          - /url: /
          - img "Shunya Labs Logo" [ref=e5]
        - button "Open menu" [ref=e6] [cursor=pointer]: ☰
    - generic [ref=e7]:
      - heading "Our Research" [level=1] [ref=e9]
      - generic [ref=e10]:
        - link "RESEARCH PAPERS LLMs Will Always Hallucinate, and We Need to Live With This 1 February, 2024" [ref=e11] [cursor=pointer]:
          - /url: https://arxiv.org/abs/2409.05746
          - generic [ref=e12]:
            - generic [ref=e13]:
              - img [ref=e14]
              - generic [ref=e17]: RESEARCH PAPERS
            - heading "LLMs Will Always Hallucinate, and We Need to Live With This" [level=3] [ref=e18]
          - generic [ref=e19]:
            - generic [ref=e20]: 1 February, 2024
            - img [ref=e22]
        - 'link "RESEARCH PAPERS The Vulnerability of Language Model Benchmarks: Do They Accurately Reflect True LLM Performance? 2 December, 2024" [ref=e25] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.03597
          - generic [ref=e26]:
            - generic [ref=e27]:
              - img [ref=e28]
              - generic [ref=e31]: RESEARCH PAPERS
            - 'heading "The Vulnerability of Language Model Benchmarks: Do They Accurately Reflect True LLM Performance?" [level=3] [ref=e32]'
          - generic [ref=e33]:
            - generic [ref=e34]: 2 December, 2024
            - img [ref=e36]
        - 'link "RESEARCH PAPERS High-precision medical speech recognition through synthetic data and semantic correction: UNITED-MEDASR 24 November, 2024" [ref=e39] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.00055
          - generic [ref=e40]:
            - generic [ref=e41]:
              - img [ref=e42]
              - generic [ref=e45]: RESEARCH PAPERS
            - 'heading "High-precision medical speech recognition through synthetic data and semantic correction: UNITED-MEDASR" [level=3] [ref=e46]'
          - generic [ref=e47]:
            - generic [ref=e48]: 24 November, 2024
            - img [ref=e50]
        - 'link "RESEARCH PAPERS First Train to Generate, then Generate to Train: UnitedSynT5 for Few-Shot NLI 12 December, 2024" [ref=e53] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.09263
          - generic [ref=e54]:
            - generic [ref=e55]:
              - img [ref=e56]
              - generic [ref=e59]: RESEARCH PAPERS
            - 'heading "First Train to Generate, then Generate to Train: UnitedSynT5 for Few-Shot NLI" [level=3] [ref=e60]'
          - generic [ref=e61]:
            - generic [ref=e62]: 12 December, 2024
            - img [ref=e64]
    - contentinfo [ref=e67]:
      - generic [ref=e68]:
        - generic [ref=e69]:
          - img "Shunya Labs" [ref=e70]
          - paragraph [ref=e71]: Shunya Labs, Inc.
        - generic [ref=e72]:
          - paragraph [ref=e73]: Product
          - list [ref=e74]:
            - listitem [ref=e75]:
              - link "Overview" [ref=e76] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e77]:
              - link "Models" [ref=e78] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e79]:
              - link "Voice Agents" [ref=e80] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e81]:
              - link "Speech Intelligence" [ref=e82] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e83]:
              - link "Audio Processing" [ref=e84] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e85]:
              - link "Deployment" [ref=e86] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e87]:
          - paragraph [ref=e88]: Models
          - list [ref=e89]:
            - listitem [ref=e90]:
              - link "Language Models" [ref=e91] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e92]:
              - link "Zero STT Indic" [ref=e93] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e94]:
              - link "Zero STT Codeswitch" [ref=e95] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e96]:
              - link "Specialised Models" [ref=e97] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e98]:
              - link "Zero STT Med" [ref=e99] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e100]:
              - link "On Device Models" [ref=e101] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e102]:
          - paragraph [ref=e103]: Solutions
          - list [ref=e104]:
            - listitem [ref=e105]:
              - link "Contact Centers" [ref=e106] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e107]:
              - link "Media & Entertainment" [ref=e108] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e109]:
              - link "Healthcare" [ref=e110] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e111]:
          - paragraph [ref=e112]: Resources
          - list [ref=e113]:
            - listitem [ref=e114]:
              - link "Blogs" [ref=e115] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e116]:
              - link "Benchmarks" [ref=e117] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e118]:
              - link "News & Media" [ref=e119] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e120]:
              - link "Patents" [ref=e121] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e122]:
              - link "Research" [ref=e123] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e125]:
          - link "Documentation" [ref=e126] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e128]:
          - listitem [ref=e129]:
            - link "About us" [ref=e130] [cursor=pointer]:
              - /url: /about
        - list [ref=e132]:
          - listitem [ref=e133]:
            - link "Pricing" [ref=e134] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e135]:
        - paragraph [ref=e136]: Follow us on
        - generic [ref=e137]:
          - link [ref=e138] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e139]
          - link [ref=e141] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e142]
          - link [ref=e144] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e145]
          - link [ref=e147] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e148]
      - generic [ref=e150]:
        - paragraph [ref=e151]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e152]:
          - link "Privacy" [ref=e153] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e154] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e155] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e156] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e157] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e158]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { runDesignComplianceTest } from './design-validator.js';
  3  | 
  4  | export const DESIGN_COMPLIANCE_TIMEOUT = process.env.CI ? 180_000 : 120_000;
  5  | 
  6  | /**
  7  |  * Registers the standard Figma design compliance test for a page registry entry.
  8  |  * @param {object} pageEntry
  9  |  * @param {{ skip?: boolean, skipReason?: string }} [options]
  10 |  */
  11 | export function registerDesignComplianceSuite(pageEntry, options = {}) {
  12 |   const moduleLabel = pageEntry?.moduleLabel || pageEntry?.moduleKey || 'Unknown';
  13 |   const pageLabel = pageEntry?.pageLabel || pageEntry?.slug || 'page';
  14 | 
  15 |   test.describe(`${moduleLabel} - ${pageLabel} design compliance`, () => {
  16 |     test.setTimeout(DESIGN_COMPLIANCE_TIMEOUT);
  17 | 
  18 |     const runTest = options.skip ? test.skip : test;
  19 |     const testTitle = options.skipReason
  20 |       ? `Figma design compliance (${options.skipReason})`
  21 |       : 'Figma design compliance';
  22 | 
  23 |     runTest(testTitle, async ({ page }) => {
  24 |       const failures = await runDesignComplianceTest({ page, pageEntry });
  25 | 
  26 |       for (const f of failures) {
  27 |         expect.soft(null, `[${f.section}] ${f.message}`).toBeTruthy();
  28 |       }
  29 | 
> 30 |       expect(failures.length, `${failures.length} design compliance issue(s) found`).toBe(0);
     |                                                                                      ^ Error: 18 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```