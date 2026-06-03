# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/patents/design.spec.js >> Resources - Patents design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [global] Footer background: expected rgb(255, 255, 255) but got rgb(0, 0, 0)

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "One platform for speech in and speech out-secure by design, built to scale." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "One platform for speech in and speech out-secure by design, built to scale." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "© 2026 Shunya Labs, Inc. All rights reserved." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 4 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 4
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - navigation [ref=e4]:
        - generic [ref=e5]:
          - link "Shunya Labs Logo" [ref=e6] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e7]
          - button "☰" [ref=e8] [cursor=pointer]
        - generic:
          - generic:
            - generic:
              - button "Product":
                - generic: Product
                - img
            - generic:
              - button "Models":
                - generic: Models
                - img
            - generic:
              - button "Solutions":
                - generic: Solutions
                - img
            - generic:
              - button "Resources":
                - generic: Resources
                - img
            - link "Documentation":
              - /url: https://docs.shunyalabs.ai/overview
            - link "About Us":
              - /url: /about
            - link "Pricing":
              - /url: /pricing
            - generic:
              - link "Playground":
                - /url: https://playground.shunyalabs.ai/
                - img
                - text: Playground
              - button "Sign In"
              - link "Contact Sales":
                - /url: /contact
      - heading "Discover our ever-growing collection of patents." [level=1] [ref=e11]
      - generic [ref=e12]:
        - generic [ref=e13] [cursor=pointer]:
          - img [ref=e16]
          - generic [ref=e19]:
            - text: PATENT
            - paragraph [ref=e20]: Translation with Clinical Precision
        - generic [ref=e21] [cursor=pointer]:
          - img [ref=e24]
          - generic [ref=e27]:
            - text: PATENT
            - paragraph [ref=e28]: Text to emotion vector generation
        - generic [ref=e29] [cursor=pointer]:
          - img [ref=e32]
          - generic [ref=e35]:
            - text: PATENT
            - paragraph [ref=e36]: LLM Hallucination Mitigation
        - generic [ref=e37] [cursor=pointer]:
          - img [ref=e40]
          - generic [ref=e43]:
            - text: PATENT
            - paragraph [ref=e44]: Fake information classification
        - generic [ref=e45] [cursor=pointer]:
          - img [ref=e48]
          - generic [ref=e51]:
            - text: PATENT
            - paragraph [ref=e52]: Clinician like Discharge Summary generation
        - generic [ref=e53] [cursor=pointer]:
          - img [ref=e56]
          - generic [ref=e59]:
            - text: PATENT
            - paragraph [ref=e60]: Causality driven Graph Neural Network for Mental Health Prognosis
        - generic [ref=e61] [cursor=pointer]:
          - img [ref=e64]
          - generic [ref=e67]:
            - text: PATENT
            - paragraph [ref=e68]: Stochastic Actor Oriented Model driven Clinician Suggestion
        - generic [ref=e69] [cursor=pointer]:
          - img [ref=e72]
          - generic [ref=e75]:
            - text: PATENT
            - paragraph [ref=e76]: Clinical Case History Generation
        - generic [ref=e77] [cursor=pointer]:
          - img [ref=e80]
          - generic [ref=e83]:
            - text: PATENT
            - paragraph [ref=e84]: Deltawave guided wearable EEG happiness Monitors
        - generic [ref=e85] [cursor=pointer]:
          - img [ref=e88]
          - generic [ref=e91]:
            - text: PATENT
            - paragraph [ref=e92]: Interoperable EHR Taxonomy and Data Mapper
        - generic [ref=e93] [cursor=pointer]:
          - img [ref=e96]
          - generic [ref=e99]:
            - text: PATENT
            - paragraph [ref=e100]: Stella for Clinician
        - generic [ref=e101] [cursor=pointer]:
          - img [ref=e104]
          - generic [ref=e107]:
            - text: PATENT
            - paragraph [ref=e108]: Phoneme Viseme
      - link "Contact Us" [ref=e110] [cursor=pointer]:
        - /url: /contact
    - contentinfo [ref=e111]:
      - generic [ref=e115]:
        - paragraph [ref=e116]: The fastest way to add voice AI to your products
        - paragraph [ref=e117]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e118]:
          - link "Go to Pricing page" [ref=e119] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e120] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e121]:
      - generic [ref=e122]:
        - generic [ref=e123]:
          - img "Shunya Labs" [ref=e124]
          - paragraph [ref=e125]: Shunya Labs, Inc.
        - generic [ref=e126]:
          - paragraph [ref=e127]: Product
          - list [ref=e128]:
            - listitem [ref=e129]:
              - link "Overview" [ref=e130] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e131]:
              - link "Models" [ref=e132] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e133]:
              - link "Voice Agents" [ref=e134] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e135]:
              - link "Speech Intelligence" [ref=e136] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e137]:
              - link "Audio Processing" [ref=e138] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e139]:
              - link "Deployment" [ref=e140] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e141]:
          - paragraph [ref=e142]: Models
          - list [ref=e143]:
            - listitem [ref=e144]:
              - link "Language Models" [ref=e145] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e146]:
              - link "Zero STT Indic" [ref=e147] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e148]:
              - link "Zero STT Codeswitch" [ref=e149] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e150]:
              - link "Specialised Models" [ref=e151] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e152]:
              - link "Zero STT Med" [ref=e153] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e154]:
              - link "On Device Models" [ref=e155] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e156]:
          - paragraph [ref=e157]: Solutions
          - list [ref=e158]:
            - listitem [ref=e159]:
              - link "Contact Centers" [ref=e160] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e161]:
              - link "Media & Entertainment" [ref=e162] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e163]:
              - link "Healthcare" [ref=e164] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e165]:
          - paragraph [ref=e166]: Resources
          - list [ref=e167]:
            - listitem [ref=e168]:
              - link "Blogs" [ref=e169] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e170]:
              - link "Benchmarks" [ref=e171] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e172]:
              - link "News & Media" [ref=e173] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e174]:
              - link "Patents" [ref=e175] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e176]:
              - link "Research" [ref=e177] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e179]:
          - link "Documentation" [ref=e180] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e182]:
          - listitem [ref=e183]:
            - link "About us" [ref=e184] [cursor=pointer]:
              - /url: /about
        - list [ref=e186]:
          - listitem [ref=e187]:
            - link "Pricing" [ref=e188] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e189]:
        - paragraph [ref=e190]: Follow us on
        - generic [ref=e191]:
          - link [ref=e192] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e193]
          - link [ref=e195] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e196]
          - link [ref=e198] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e199]
          - link [ref=e201] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e202]
      - generic [ref=e204]:
        - paragraph [ref=e205]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e206]:
          - link "Privacy" [ref=e207] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e208] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e209] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e210] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e211] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e212]
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
     |                                                                                      ^ Error: 4 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```