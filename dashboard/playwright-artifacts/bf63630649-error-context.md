# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/patents/design.spec.js >> Resources - Patents design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [global] Footer background: expected rgb(0, 0, 0) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "One platform for speech in and speech out—secure by design, built to scale." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "One platform for speech in and speech out—secure by design, built to scale." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "© 2026 Shunya Labs Inc. All rights reserved." not found on page

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
          - link "Shunya Labs Logo" [ref=e7] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e8]
          - button "☰" [ref=e9] [cursor=pointer]
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
              - text: Documentation
              - img
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
      - heading "Discover our ever-growing collection of patents." [level=1] [ref=e12]
      - generic [ref=e13]:
        - generic [ref=e14] [cursor=pointer]:
          - img [ref=e17]
          - generic [ref=e20]:
            - text: PATENT
            - paragraph [ref=e21]: Translation with Clinical Precision
        - generic [ref=e22] [cursor=pointer]:
          - img [ref=e25]
          - generic [ref=e28]:
            - text: PATENT
            - paragraph [ref=e29]: Text to emotion vector generation
        - generic [ref=e30] [cursor=pointer]:
          - img [ref=e33]
          - generic [ref=e36]:
            - text: PATENT
            - paragraph [ref=e37]: LLM Hallucination Mitigation
        - generic [ref=e38] [cursor=pointer]:
          - img [ref=e41]
          - generic [ref=e44]:
            - text: PATENT
            - paragraph [ref=e45]: Fake information classification
        - generic [ref=e46] [cursor=pointer]:
          - img [ref=e49]
          - generic [ref=e52]:
            - text: PATENT
            - paragraph [ref=e53]: Clinician like Discharge Summary generation
        - generic [ref=e54] [cursor=pointer]:
          - img [ref=e57]
          - generic [ref=e60]:
            - text: PATENT
            - paragraph [ref=e61]: Causality driven Graph Neural Network for Mental Health Prognosis
        - generic [ref=e62] [cursor=pointer]:
          - img [ref=e65]
          - generic [ref=e68]:
            - text: PATENT
            - paragraph [ref=e69]: Stochastic Actor Oriented Model driven Clinician Suggestion
        - generic [ref=e70] [cursor=pointer]:
          - img [ref=e73]
          - generic [ref=e76]:
            - text: PATENT
            - paragraph [ref=e77]: Clinical Case History Generation
        - generic [ref=e78] [cursor=pointer]:
          - img [ref=e81]
          - generic [ref=e84]:
            - text: PATENT
            - paragraph [ref=e85]: Deltawave guided wearable EEG happiness Monitors
        - generic [ref=e86] [cursor=pointer]:
          - img [ref=e89]
          - generic [ref=e92]:
            - text: PATENT
            - paragraph [ref=e93]: Interoperable EHR Taxonomy and Data Mapper
        - generic [ref=e94] [cursor=pointer]:
          - img [ref=e97]
          - generic [ref=e100]:
            - text: PATENT
            - paragraph [ref=e101]: Stella for Clinician
        - generic [ref=e102] [cursor=pointer]:
          - img [ref=e105]
          - generic [ref=e108]:
            - text: PATENT
            - paragraph [ref=e109]: Phoneme Viseme
      - link "Contact Us" [ref=e111] [cursor=pointer]:
        - /url: /contact
    - contentinfo [ref=e112]:
      - generic [ref=e113]:
        - paragraph [ref=e114]: The fastest way to add voice AI to your products
        - paragraph [ref=e115]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e116]:
          - link "Go to Pricing page" [ref=e117] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e118] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e119]:
      - generic [ref=e120]:
        - generic [ref=e121]:
          - img "Shunya Labs" [ref=e122]
          - paragraph [ref=e123]: Shunya Labs, Inc.
        - generic [ref=e124]:
          - paragraph [ref=e125]: Product
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "Overview" [ref=e128] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e129]:
              - link "Models" [ref=e130] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e131]:
              - link "Voice Agents" [ref=e132] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e133]:
              - link "Speech Intelligence" [ref=e134] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e135]:
              - link "Audio Processing" [ref=e136] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e137]:
              - link "Deployment" [ref=e138] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e139]:
          - paragraph [ref=e140]: Models
          - list [ref=e141]:
            - listitem [ref=e142]:
              - link "Language Models" [ref=e143] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e144]:
              - link "Zero STT Indic" [ref=e145] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e146]:
              - link "Zero STT Codeswitch" [ref=e147] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e148]:
              - link "Specialised Models" [ref=e149] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e150]:
              - link "Zero STT Med" [ref=e151] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e152]:
              - link "On Device Models" [ref=e153] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e154]:
          - paragraph [ref=e155]: Solutions
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link "Contact Centers" [ref=e158] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e159]:
              - link "Media & Entertainment" [ref=e160] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e161]:
              - link "Healthcare" [ref=e162] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e163]:
          - paragraph [ref=e164]: Resources
          - list [ref=e165]:
            - listitem [ref=e166]:
              - link "Blogs" [ref=e167] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e168]:
              - link "Benchmarks" [ref=e169] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e170]:
              - link "News & Media" [ref=e171] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e172]:
              - link "Patents" [ref=e173] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e174]:
              - link "Research" [ref=e175] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e177]:
          - link "Documentation" [ref=e178] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e180]:
          - listitem [ref=e181]:
            - link "About us" [ref=e182] [cursor=pointer]:
              - /url: /about
        - list [ref=e184]:
          - listitem [ref=e185]:
            - link "Pricing" [ref=e186] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e187]:
        - paragraph [ref=e188]: Follow us on
        - generic [ref=e189]:
          - link [ref=e190] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e191]
          - link [ref=e193] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e194]
          - link [ref=e196] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e197]
          - link [ref=e199] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e200]
      - generic [ref=e202]:
        - paragraph [ref=e203]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e204]:
          - link "Privacy" [ref=e205] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e206] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e207] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e208] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e209] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e210]
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