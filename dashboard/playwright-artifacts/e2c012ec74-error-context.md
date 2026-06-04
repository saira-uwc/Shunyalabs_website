# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-indic/design.spec.js >> Models - Zero STT Indic design compliance >> Figma design compliance
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
      - generic [ref=e38]:
        - generic [ref=e39]:
          - heading "Indic language transcription backed by data" [level=1] [ref=e40]
          - paragraph [ref=e41]: Get world-class speed and accuracy for major Indian languages, so your users experience natural, reliable transcription in the languages they actually speak.
        - generic [ref=e42]:
          - generic [ref=e44]:
            - heading "Hindi" [level=3] [ref=e46]
            - generic [ref=e47]:
              - paragraph [ref=e48]: Hindi ASR built for 350M+ native speakers
              - paragraph [ref=e49]: Trained on 430.6 hours of real-world audio from OpenSLR, Gramvaani, Shrutilipi, Kathbath, Vaani, and proprietary data in just 35.9 hours on dual A100 GPUs.
          - generic [ref=e52]:
            - heading "Telugu" [level=3] [ref=e54]
            - generic [ref=e55]:
              - paragraph [ref=e56]: Telugu ASR built for 80M+ native speakers
              - paragraph [ref=e57]: Trained on 110.6 hours of real-world audio from Kathbath and Google Fleurs in just 13.43 hours on dual A100 GPUs.
          - generic [ref=e60]:
            - heading "Kannada" [level=3] [ref=e62]
            - generic [ref=e63]:
              - paragraph [ref=e64]: Kannada ASR built for 40M+ native speakers
              - paragraph [ref=e65]: Trained on 90.6 hours of real-world audio from OpenSLR, Kathbath, and Vaani in just 9.9 hours on dual A100 GPUs.
          - generic [ref=e68]:
            - heading "Bengali" [level=3] [ref=e70]
            - generic [ref=e71]:
              - paragraph [ref=e72]: Bengali ASR built for 230M+ native speakers
              - paragraph [ref=e73]: Trained on 110.6 hours of real-world audio from OpenSLR, Kathbath, Vaani, and Shrutilipi in just 12.9 hours on dual A100 GPUs.
        - link "Try now" [ref=e75] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/models/language
    - contentinfo [ref=e76]:
      - generic [ref=e77]:
        - paragraph [ref=e78]: The fastest way to add voice AI to your products
        - paragraph [ref=e79]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e80]:
          - link "Try for Free" [ref=e81] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e82] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e83]:
      - generic [ref=e84]:
        - generic [ref=e85]:
          - img "Shunya Labs" [ref=e86]
          - paragraph [ref=e87]: Shunya Labs, Inc.
        - generic [ref=e88]:
          - paragraph [ref=e89]: Product
          - list [ref=e90]:
            - listitem [ref=e91]:
              - link "Overview" [ref=e92] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e93]:
              - link "Models" [ref=e94] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e95]:
              - link "Voice Agents" [ref=e96] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e97]:
              - link "Speech Intelligence" [ref=e98] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e99]:
              - link "Audio Processing" [ref=e100] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e101]:
              - link "Deployment" [ref=e102] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e103]:
          - paragraph [ref=e104]: Models
          - list [ref=e105]:
            - listitem [ref=e106]:
              - link "Language Models" [ref=e107] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e108]:
              - link "Zero STT Indic" [ref=e109] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e110]:
              - link "Zero STT Codeswitch" [ref=e111] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e112]:
              - link "Specialised Models" [ref=e113] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e114]:
              - link "Zero STT Med" [ref=e115] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e116]:
              - link "On Device Models" [ref=e117] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e118]:
          - paragraph [ref=e119]: Solutions
          - list [ref=e120]:
            - listitem [ref=e121]:
              - link "Contact Centers" [ref=e122] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e123]:
              - link "Media & Entertainment" [ref=e124] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e125]:
              - link "Healthcare" [ref=e126] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e127]:
          - paragraph [ref=e128]: Resources
          - list [ref=e129]:
            - listitem [ref=e130]:
              - link "Blogs" [ref=e131] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e132]:
              - link "Benchmarks" [ref=e133] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e134]:
              - link "News & Media" [ref=e135] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e136]:
              - link "Patents" [ref=e137] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e138]:
              - link "Research" [ref=e139] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e141]:
          - link "Documentation" [ref=e142] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e144]:
          - listitem [ref=e145]:
            - link "About us" [ref=e146] [cursor=pointer]:
              - /url: /about
        - list [ref=e148]:
          - listitem [ref=e149]:
            - link "Pricing" [ref=e150] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e151]:
        - paragraph [ref=e152]: Follow us on
        - generic [ref=e153]:
          - link [ref=e154] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e155]
          - link [ref=e157] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e158]
          - link [ref=e160] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e161]
          - link [ref=e163] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e164]
      - generic [ref=e166]:
        - paragraph [ref=e167]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e168]:
          - link "Privacy" [ref=e169] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e170] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e171] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e172] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e173] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e174]
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