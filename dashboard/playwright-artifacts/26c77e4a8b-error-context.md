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
          - generic [ref=e8]:
            - button "Product" [ref=e10] [cursor=pointer]:
              - text: Product
              - img [ref=e11]
            - button "Models" [ref=e14] [cursor=pointer]:
              - text: Models
              - img [ref=e15]
            - button "Solutions" [ref=e18] [cursor=pointer]:
              - text: Solutions
              - img [ref=e19]
            - button "Resources" [ref=e22] [cursor=pointer]:
              - text: Resources
              - img [ref=e23]
            - link "Documentation" [ref=e25] [cursor=pointer]:
              - /url: https://docs.shunyalabs.ai/overview
            - link "About Us" [ref=e26] [cursor=pointer]:
              - /url: /about
            - link "Pricing" [ref=e27] [cursor=pointer]:
              - /url: /pricing
          - link "Playground" [ref=e28] [cursor=pointer]:
            - /url: https://playground.shunyalabs.ai/
            - img [ref=e29]
            - text: Playground
          - generic [ref=e31]:
            - button "Sign In" [ref=e32] [cursor=pointer]
            - link "Contact Sales" [ref=e33] [cursor=pointer]:
              - /url: /contact
      - heading "Discover our ever-growing collection of patents." [level=1] [ref=e36]
      - generic [ref=e37]:
        - generic [ref=e38] [cursor=pointer]:
          - img [ref=e41]
          - generic [ref=e44]:
            - text: PATENT
            - paragraph [ref=e45]: Translation with Clinical Precision
        - generic [ref=e46] [cursor=pointer]:
          - img [ref=e49]
          - generic [ref=e52]:
            - text: PATENT
            - paragraph [ref=e53]: Text to emotion vector generation
        - generic [ref=e54] [cursor=pointer]:
          - img [ref=e57]
          - generic [ref=e60]:
            - text: PATENT
            - paragraph [ref=e61]: LLM Hallucination Mitigation
        - generic [ref=e62] [cursor=pointer]:
          - img [ref=e65]
          - generic [ref=e68]:
            - text: PATENT
            - paragraph [ref=e69]: Fake information classification
        - generic [ref=e70] [cursor=pointer]:
          - img [ref=e73]
          - generic [ref=e76]:
            - text: PATENT
            - paragraph [ref=e77]: Clinician like Discharge Summary generation
        - generic [ref=e78] [cursor=pointer]:
          - img [ref=e81]
          - generic [ref=e84]:
            - text: PATENT
            - paragraph [ref=e85]: Causality driven Graph Neural Network for Mental Health Prognosis
        - generic [ref=e86] [cursor=pointer]:
          - img [ref=e89]
          - generic [ref=e92]:
            - text: PATENT
            - paragraph [ref=e93]: Stochastic Actor Oriented Model driven Clinician Suggestion
        - generic [ref=e94] [cursor=pointer]:
          - img [ref=e97]
          - generic [ref=e100]:
            - text: PATENT
            - paragraph [ref=e101]: Clinical Case History Generation
        - generic [ref=e102] [cursor=pointer]:
          - img [ref=e105]
          - generic [ref=e108]:
            - text: PATENT
            - paragraph [ref=e109]: Deltawave guided wearable EEG happiness Monitors
        - generic [ref=e110] [cursor=pointer]:
          - img [ref=e113]
          - generic [ref=e116]:
            - text: PATENT
            - paragraph [ref=e117]: Interoperable EHR Taxonomy and Data Mapper
        - generic [ref=e118] [cursor=pointer]:
          - img [ref=e121]
          - generic [ref=e124]:
            - text: PATENT
            - paragraph [ref=e125]: Stella for Clinician
        - generic [ref=e126] [cursor=pointer]:
          - img [ref=e129]
          - generic [ref=e132]:
            - text: PATENT
            - paragraph [ref=e133]: Phoneme Viseme
      - link "Contact Us" [ref=e135] [cursor=pointer]:
        - /url: /contact
    - contentinfo [ref=e136]:
      - generic [ref=e140]:
        - paragraph [ref=e141]: The fastest way to add voice AI to your products
        - paragraph [ref=e142]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e143]:
          - link "Go to Pricing page" [ref=e144] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e145] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e146]:
      - generic [ref=e147]:
        - generic [ref=e148]:
          - img "Shunya Labs" [ref=e149]
          - paragraph [ref=e150]: Shunya Labs, Inc.
        - generic [ref=e151]:
          - paragraph [ref=e152]: Product
          - list [ref=e153]:
            - listitem [ref=e154]:
              - link "Overview" [ref=e155] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e156]:
              - link "Models" [ref=e157] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e158]:
              - link "Voice Agents" [ref=e159] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e160]:
              - link "Speech Intelligence" [ref=e161] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e162]:
              - link "Audio Processing" [ref=e163] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e164]:
              - link "Deployment" [ref=e165] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e166]:
          - paragraph [ref=e167]: Models
          - list [ref=e168]:
            - listitem [ref=e169]:
              - link "Language Models" [ref=e170] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e171]:
              - link "Zero STT Indic" [ref=e172] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e173]:
              - link "Zero STT Codeswitch" [ref=e174] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e175]:
              - link "Specialised Models" [ref=e176] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e177]:
              - link "Zero STT Med" [ref=e178] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e179]:
              - link "On Device Models" [ref=e180] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e181]:
          - paragraph [ref=e182]: Solutions
          - list [ref=e183]:
            - listitem [ref=e184]:
              - link "Contact Centers" [ref=e185] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e186]:
              - link "Media & Entertainment" [ref=e187] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e188]:
              - link "Healthcare" [ref=e189] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e190]:
          - paragraph [ref=e191]: Resources
          - list [ref=e192]:
            - listitem [ref=e193]:
              - link "Blogs" [ref=e194] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e195]:
              - link "Benchmarks" [ref=e196] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e197]:
              - link "News & Media" [ref=e198] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e199]:
              - link "Patents" [ref=e200] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e201]:
              - link "Research" [ref=e202] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e204]:
          - link "Documentation" [ref=e205] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e207]:
          - listitem [ref=e208]:
            - link "About us" [ref=e209] [cursor=pointer]:
              - /url: /about
        - list [ref=e211]:
          - listitem [ref=e212]:
            - link "Pricing" [ref=e213] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e214]:
        - paragraph [ref=e215]: Follow us on
        - generic [ref=e216]:
          - link [ref=e217] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e218]
          - link [ref=e220] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e221]
          - link [ref=e223] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e224]
          - link [ref=e226] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e227]
      - generic [ref=e229]:
        - paragraph [ref=e230]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e231]:
          - link "Privacy" [ref=e232] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e233] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e234] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e235] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e236] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e237]
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