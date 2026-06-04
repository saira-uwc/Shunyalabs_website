# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/patents/design.spec.js >> Resources - Patents design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [links] CTA/Link "https://www.facebook.com/people/ShunyaLabsAI/61577801851308/" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 1 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 1
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
              - link "About Us" [ref=e27] [cursor=pointer]:
                - /url: /about
              - link "Pricing" [ref=e28] [cursor=pointer]:
                - /url: /pricing
          - generic [ref=e29]:
            - link "Playground" [ref=e30] [cursor=pointer]:
              - /url: https://playground.shunyalabs.ai/
              - img [ref=e31]
              - text: Playground
            - generic [ref=e33]:
              - button "Sign In" [ref=e34] [cursor=pointer]
              - link "Contact Sales" [ref=e35] [cursor=pointer]:
                - /url: /contact
      - heading "Discover our ever-growing collection of patents." [level=1] [ref=e38]
      - generic [ref=e39]:
        - generic [ref=e40] [cursor=pointer]:
          - img [ref=e43]
          - generic [ref=e46]:
            - text: PATENT
            - paragraph [ref=e47]: Translation with Clinical Precision
        - generic [ref=e48] [cursor=pointer]:
          - img [ref=e51]
          - generic [ref=e54]:
            - text: PATENT
            - paragraph [ref=e55]: Text to emotion vector generation
        - generic [ref=e56] [cursor=pointer]:
          - img [ref=e59]
          - generic [ref=e62]:
            - text: PATENT
            - paragraph [ref=e63]: LLM Hallucination Mitigation
        - generic [ref=e64] [cursor=pointer]:
          - img [ref=e67]
          - generic [ref=e70]:
            - text: PATENT
            - paragraph [ref=e71]: Fake information classification
        - generic [ref=e72] [cursor=pointer]:
          - img [ref=e75]
          - generic [ref=e78]:
            - text: PATENT
            - paragraph [ref=e79]: Clinician like Discharge Summary generation
        - generic [ref=e80] [cursor=pointer]:
          - img [ref=e83]
          - generic [ref=e86]:
            - text: PATENT
            - paragraph [ref=e87]: Causality driven Graph Neural Network for Mental Health Prognosis
        - generic [ref=e88] [cursor=pointer]:
          - img [ref=e91]
          - generic [ref=e94]:
            - text: PATENT
            - paragraph [ref=e95]: Stochastic Actor Oriented Model driven Clinician Suggestion
        - generic [ref=e96] [cursor=pointer]:
          - img [ref=e99]
          - generic [ref=e102]:
            - text: PATENT
            - paragraph [ref=e103]: Clinical Case History Generation
        - generic [ref=e104] [cursor=pointer]:
          - img [ref=e107]
          - generic [ref=e110]:
            - text: PATENT
            - paragraph [ref=e111]: Deltawave guided wearable EEG happiness Monitors
        - generic [ref=e112] [cursor=pointer]:
          - img [ref=e115]
          - generic [ref=e118]:
            - text: PATENT
            - paragraph [ref=e119]: Interoperable EHR Taxonomy and Data Mapper
        - generic [ref=e120] [cursor=pointer]:
          - img [ref=e123]
          - generic [ref=e126]:
            - text: PATENT
            - paragraph [ref=e127]: Stella for Clinician
        - generic [ref=e128] [cursor=pointer]:
          - img [ref=e131]
          - generic [ref=e134]:
            - text: PATENT
            - paragraph [ref=e135]: Phoneme Viseme
      - link "Contact Us" [ref=e137] [cursor=pointer]:
        - /url: /contact
    - contentinfo [ref=e138]:
      - generic [ref=e139]:
        - paragraph [ref=e140]: The fastest way to add voice AI to your products
        - paragraph [ref=e141]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e142]:
          - link "Go to Pricing page" [ref=e143] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e144] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e145]:
      - generic [ref=e146]:
        - generic [ref=e147]:
          - img "Shunya Labs" [ref=e148]
          - paragraph [ref=e149]: Shunya Labs, Inc.
        - generic [ref=e150]:
          - paragraph [ref=e151]: Product
          - list [ref=e152]:
            - listitem [ref=e153]:
              - link "Overview" [ref=e154] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e155]:
              - link "Models" [ref=e156] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e157]:
              - link "Voice Agents" [ref=e158] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e159]:
              - link "Speech Intelligence" [ref=e160] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e161]:
              - link "Audio Processing" [ref=e162] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e163]:
              - link "Deployment" [ref=e164] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e165]:
          - paragraph [ref=e166]: Models
          - list [ref=e167]:
            - listitem [ref=e168]:
              - link "Language Models" [ref=e169] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e170]:
              - link "Zero STT Indic" [ref=e171] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e172]:
              - link "Zero STT Codeswitch" [ref=e173] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e174]:
              - link "Specialised Models" [ref=e175] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e176]:
              - link "Zero STT Med" [ref=e177] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e178]:
              - link "On Device Models" [ref=e179] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e180]:
          - paragraph [ref=e181]: Solutions
          - list [ref=e182]:
            - listitem [ref=e183]:
              - link "Contact Centers" [ref=e184] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e185]:
              - link "Media & Entertainment" [ref=e186] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e187]:
              - link "Healthcare" [ref=e188] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e189]:
          - paragraph [ref=e190]: Resources
          - list [ref=e191]:
            - listitem [ref=e192]:
              - link "Blogs" [ref=e193] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e194]:
              - link "Benchmarks" [ref=e195] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e196]:
              - link "News & Media" [ref=e197] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e198]:
              - link "Patents" [ref=e199] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e200]:
              - link "Research" [ref=e201] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e203]:
          - link "Documentation" [ref=e204] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e206]:
          - listitem [ref=e207]:
            - link "About us" [ref=e208] [cursor=pointer]:
              - /url: /about
        - list [ref=e210]:
          - listitem [ref=e211]:
            - link "Pricing" [ref=e212] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e213]:
        - paragraph [ref=e214]: Follow us on
        - generic [ref=e215]:
          - link [ref=e216] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e217]
          - link [ref=e219] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e220]
          - link [ref=e222] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e223]
          - link [ref=e225] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e226]
      - generic [ref=e228]:
        - paragraph [ref=e229]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e230]:
          - link "Privacy" [ref=e231] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e232] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e233] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e234] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e235] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e236]
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
     |                                                                                      ^ Error: 1 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```