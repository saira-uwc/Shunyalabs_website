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
          - generic [ref=e6]:
            - link "Shunya Labs Logo" [ref=e7] [cursor=pointer]:
              - /url: /
              - img "Shunya Labs Logo" [ref=e8]
            - generic [ref=e9]:
              - button "Product" [ref=e11] [cursor=pointer]:
                - text: Product
                - img [ref=e12]
              - button "Models" [ref=e15] [cursor=pointer]:
                - text: Models
                - img [ref=e16]
              - button "Solutions" [ref=e19] [cursor=pointer]:
                - text: Solutions
                - img [ref=e20]
              - button "Resources" [ref=e23] [cursor=pointer]:
                - text: Resources
                - img [ref=e24]
              - link "Documentation" [ref=e26] [cursor=pointer]:
                - /url: https://docs.shunyalabs.ai/overview
                - text: Documentation
                - img [ref=e27]
              - link "About Us" [ref=e29] [cursor=pointer]:
                - /url: /about
              - link "Pricing" [ref=e30] [cursor=pointer]:
                - /url: /pricing
          - generic [ref=e31]:
            - link "Playground" [ref=e32] [cursor=pointer]:
              - /url: https://playground.shunyalabs.ai/
              - img [ref=e33]
              - text: Playground
            - generic [ref=e35]:
              - button "Sign In" [ref=e36] [cursor=pointer]
              - link "Contact Sales" [ref=e37] [cursor=pointer]:
                - /url: /contact
      - heading "Discover our ever-growing collection of patents." [level=1] [ref=e40]
      - generic [ref=e41]:
        - generic [ref=e42] [cursor=pointer]:
          - img [ref=e45]
          - generic [ref=e48]:
            - text: PATENT
            - paragraph [ref=e49]: Translation with Clinical Precision
        - generic [ref=e50] [cursor=pointer]:
          - img [ref=e53]
          - generic [ref=e56]:
            - text: PATENT
            - paragraph [ref=e57]: Text to emotion vector generation
        - generic [ref=e58] [cursor=pointer]:
          - img [ref=e61]
          - generic [ref=e64]:
            - text: PATENT
            - paragraph [ref=e65]: LLM Hallucination Mitigation
        - generic [ref=e66] [cursor=pointer]:
          - img [ref=e69]
          - generic [ref=e72]:
            - text: PATENT
            - paragraph [ref=e73]: Fake information classification
        - generic [ref=e74] [cursor=pointer]:
          - img [ref=e77]
          - generic [ref=e80]:
            - text: PATENT
            - paragraph [ref=e81]: Clinician like Discharge Summary generation
        - generic [ref=e82] [cursor=pointer]:
          - img [ref=e85]
          - generic [ref=e88]:
            - text: PATENT
            - paragraph [ref=e89]: Causality driven Graph Neural Network for Mental Health Prognosis
        - generic [ref=e90] [cursor=pointer]:
          - img [ref=e93]
          - generic [ref=e96]:
            - text: PATENT
            - paragraph [ref=e97]: Stochastic Actor Oriented Model driven Clinician Suggestion
        - generic [ref=e98] [cursor=pointer]:
          - img [ref=e101]
          - generic [ref=e104]:
            - text: PATENT
            - paragraph [ref=e105]: Clinical Case History Generation
        - generic [ref=e106] [cursor=pointer]:
          - img [ref=e109]
          - generic [ref=e112]:
            - text: PATENT
            - paragraph [ref=e113]: Deltawave guided wearable EEG happiness Monitors
        - generic [ref=e114] [cursor=pointer]:
          - img [ref=e117]
          - generic [ref=e120]:
            - text: PATENT
            - paragraph [ref=e121]: Interoperable EHR Taxonomy and Data Mapper
        - generic [ref=e122] [cursor=pointer]:
          - img [ref=e125]
          - generic [ref=e128]:
            - text: PATENT
            - paragraph [ref=e129]: Stella for Clinician
        - generic [ref=e130] [cursor=pointer]:
          - img [ref=e133]
          - generic [ref=e136]:
            - text: PATENT
            - paragraph [ref=e137]: Phoneme Viseme
      - link "Contact Us" [ref=e139] [cursor=pointer]:
        - /url: /contact
    - contentinfo [ref=e140]:
      - generic [ref=e141]:
        - paragraph [ref=e142]: The fastest way to add voice AI to your products
        - paragraph [ref=e143]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e144]:
          - link "Go to Pricing page" [ref=e145] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e146] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e147]:
      - generic [ref=e148]:
        - generic [ref=e149]:
          - img "Shunya Labs" [ref=e150]
          - paragraph [ref=e151]: Shunya Labs, Inc.
        - generic [ref=e152]:
          - paragraph [ref=e153]: Product
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link "Overview" [ref=e156] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e157]:
              - link "Models" [ref=e158] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e159]:
              - link "Voice Agents" [ref=e160] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e161]:
              - link "Speech Intelligence" [ref=e162] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e163]:
              - link "Audio Processing" [ref=e164] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e165]:
              - link "Deployment" [ref=e166] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e167]:
          - paragraph [ref=e168]: Models
          - list [ref=e169]:
            - listitem [ref=e170]:
              - link "Language Models" [ref=e171] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e172]:
              - link "Zero STT Indic" [ref=e173] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e174]:
              - link "Zero STT Codeswitch" [ref=e175] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e176]:
              - link "Specialised Models" [ref=e177] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e178]:
              - link "Zero STT Med" [ref=e179] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e180]:
              - link "On Device Models" [ref=e181] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e182]:
          - paragraph [ref=e183]: Solutions
          - list [ref=e184]:
            - listitem [ref=e185]:
              - link "Contact Centers" [ref=e186] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e187]:
              - link "Media & Entertainment" [ref=e188] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e189]:
              - link "Healthcare" [ref=e190] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e191]:
          - paragraph [ref=e192]: Resources
          - list [ref=e193]:
            - listitem [ref=e194]:
              - link "Blogs" [ref=e195] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e196]:
              - link "Benchmarks" [ref=e197] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e198]:
              - link "News & Media" [ref=e199] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e200]:
              - link "Patents" [ref=e201] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e202]:
              - link "Research" [ref=e203] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e205]:
          - link "Documentation" [ref=e206] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e208]:
          - listitem [ref=e209]:
            - link "About us" [ref=e210] [cursor=pointer]:
              - /url: /about
        - list [ref=e212]:
          - listitem [ref=e213]:
            - link "Pricing" [ref=e214] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e215]:
        - paragraph [ref=e216]: Follow us on
        - generic [ref=e217]:
          - link [ref=e218] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e219]
          - link [ref=e221] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e222]
          - link [ref=e224] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e225]
          - link [ref=e227] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e228]
      - generic [ref=e230]:
        - paragraph [ref=e231]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e232]:
          - link "Privacy" [ref=e233] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e234] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e235] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e236] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e237] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e238]
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