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
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 16 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 16
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - banner:
        - generic [ref=e4]:
          - link "Shunya Labs Logo" [ref=e5] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e6]
          - button "Open menu" [ref=e7] [cursor=pointer]: ☰
      - heading "Discover our ever-growing collection of patents." [level=1] [ref=e10]
      - generic [ref=e11]:
        - generic [ref=e12] [cursor=pointer]:
          - img [ref=e15]
          - generic [ref=e18]:
            - text: PATENT
            - paragraph [ref=e19]: Translation with Clinical Precision
        - generic [ref=e20] [cursor=pointer]:
          - img [ref=e23]
          - generic [ref=e26]:
            - text: PATENT
            - paragraph [ref=e27]: Text to emotion vector generation
        - generic [ref=e28] [cursor=pointer]:
          - img [ref=e31]
          - generic [ref=e34]:
            - text: PATENT
            - paragraph [ref=e35]: LLM Hallucination Mitigation
        - generic [ref=e36] [cursor=pointer]:
          - img [ref=e39]
          - generic [ref=e42]:
            - text: PATENT
            - paragraph [ref=e43]: Fake information classification
        - generic [ref=e44] [cursor=pointer]:
          - img [ref=e47]
          - generic [ref=e50]:
            - text: PATENT
            - paragraph [ref=e51]: Clinician like Discharge Summary generation
        - generic [ref=e52] [cursor=pointer]:
          - img [ref=e55]
          - generic [ref=e58]:
            - text: PATENT
            - paragraph [ref=e59]: Causality driven Graph Neural Network for Mental Health Prognosis
        - generic [ref=e60] [cursor=pointer]:
          - img [ref=e63]
          - generic [ref=e66]:
            - text: PATENT
            - paragraph [ref=e67]: Stochastic Actor Oriented Model driven Clinician Suggestion
        - generic [ref=e68] [cursor=pointer]:
          - img [ref=e71]
          - generic [ref=e74]:
            - text: PATENT
            - paragraph [ref=e75]: Clinical Case History Generation
        - generic [ref=e76] [cursor=pointer]:
          - img [ref=e79]
          - generic [ref=e82]:
            - text: PATENT
            - paragraph [ref=e83]: Deltawave guided wearable EEG happiness Monitors
        - generic [ref=e84] [cursor=pointer]:
          - img [ref=e87]
          - generic [ref=e90]:
            - text: PATENT
            - paragraph [ref=e91]: Interoperable EHR Taxonomy and Data Mapper
        - generic [ref=e92] [cursor=pointer]:
          - img [ref=e95]
          - generic [ref=e98]:
            - text: PATENT
            - paragraph [ref=e99]: Stella for Clinician
        - generic [ref=e100] [cursor=pointer]:
          - img [ref=e103]
          - generic [ref=e106]:
            - text: PATENT
            - paragraph [ref=e107]: Phoneme Viseme
      - link "Contact Us" [ref=e109] [cursor=pointer]:
        - /url: /contact
    - contentinfo [ref=e110]:
      - generic [ref=e111]:
        - paragraph [ref=e112]: The fastest way to add voice AI to your products
        - paragraph [ref=e113]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e114]:
          - link "Go to Pricing page" [ref=e115] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e116] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e117]:
      - generic [ref=e118]:
        - generic [ref=e119]:
          - img "Shunya Labs" [ref=e120]
          - paragraph [ref=e121]: Shunya Labs, Inc.
        - generic [ref=e122]:
          - paragraph [ref=e123]: Product
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link "Overview" [ref=e126] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e127]:
              - link "Models" [ref=e128] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e129]:
              - link "Voice Agents" [ref=e130] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e131]:
              - link "Speech Intelligence" [ref=e132] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e133]:
              - link "Audio Processing" [ref=e134] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e135]:
              - link "Deployment" [ref=e136] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e137]:
          - paragraph [ref=e138]: Models
          - list [ref=e139]:
            - listitem [ref=e140]:
              - link "Language Models" [ref=e141] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e142]:
              - link "Zero STT Indic" [ref=e143] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e144]:
              - link "Zero STT Codeswitch" [ref=e145] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e146]:
              - link "Specialised Models" [ref=e147] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e148]:
              - link "Zero STT Med" [ref=e149] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e150]:
              - link "On Device Models" [ref=e151] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e152]:
          - paragraph [ref=e153]: Solutions
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link "Contact Centers" [ref=e156] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e157]:
              - link "Media & Entertainment" [ref=e158] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e159]:
              - link "Healthcare" [ref=e160] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e161]:
          - paragraph [ref=e162]: Resources
          - list [ref=e163]:
            - listitem [ref=e164]:
              - link "Blogs" [ref=e165] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e166]:
              - link "Benchmarks" [ref=e167] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e168]:
              - link "News & Media" [ref=e169] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e170]:
              - link "Patents" [ref=e171] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e172]:
              - link "Research" [ref=e173] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e175]:
          - link "Documentation" [ref=e176] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e178]:
          - listitem [ref=e179]:
            - link "About us" [ref=e180] [cursor=pointer]:
              - /url: /about
        - list [ref=e182]:
          - listitem [ref=e183]:
            - link "Pricing" [ref=e184] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e185]:
        - paragraph [ref=e186]: Follow us on
        - generic [ref=e187]:
          - link [ref=e188] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e189]
          - link [ref=e191] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e192]
          - link [ref=e194] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e195]
          - link [ref=e197] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e198]
      - generic [ref=e200]:
        - paragraph [ref=e201]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e202]:
          - link "Privacy" [ref=e203] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e204] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e205] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e206] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e207] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e208]
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
     |                                                                                      ^ Error: 16 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```