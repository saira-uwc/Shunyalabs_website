# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-indic/design.spec.js >> Models - Zero STT Indic design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Text content "© 2026 Shunya Labs Inc. All rights reserved." not found on page

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
      - generic [ref=e12]:
        - generic [ref=e13]:
          - heading "Indic language transcription backed by data" [level=1] [ref=e14]
          - paragraph [ref=e15]: Get world-class speed and accuracy for major Indian languages, so your users experience natural, reliable transcription in the languages they actually speak.
        - generic [ref=e16]:
          - generic [ref=e18]:
            - heading "Hindi" [level=3] [ref=e20]
            - generic [ref=e21]:
              - paragraph [ref=e22]: Hindi ASR built for 350M+ native speakers
              - paragraph [ref=e23]: Trained on 430.6 hours of real-world audio from OpenSLR, Gramvaani, Shrutilipi, Kathbath, Vaani, and proprietary data in just 35.9 hours on dual A100 GPUs.
          - generic [ref=e26]:
            - heading "Telugu" [level=3] [ref=e28]
            - generic [ref=e29]:
              - paragraph [ref=e30]: Telugu ASR built for 80M+ native speakers
              - paragraph [ref=e31]: Trained on 110.6 hours of real-world audio from Kathbath and Google Fleurs in just 13.43 hours on dual A100 GPUs.
          - generic [ref=e34]:
            - heading "Kannada" [level=3] [ref=e36]
            - generic [ref=e37]:
              - paragraph [ref=e38]: Kannada ASR built for 40M+ native speakers
              - paragraph [ref=e39]: Trained on 90.6 hours of real-world audio from OpenSLR, Kathbath, and Vaani in just 9.9 hours on dual A100 GPUs.
          - generic [ref=e42]:
            - heading "Bengali" [level=3] [ref=e44]
            - generic [ref=e45]:
              - paragraph [ref=e46]: Bengali ASR built for 230M+ native speakers
              - paragraph [ref=e47]: Trained on 110.6 hours of real-world audio from OpenSLR, Kathbath, Vaani, and Shrutilipi in just 12.9 hours on dual A100 GPUs.
        - link "Try now" [ref=e49] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/models/language
    - contentinfo [ref=e50]:
      - generic [ref=e51]:
        - paragraph [ref=e52]: The fastest way to add voice AI to your products
        - paragraph [ref=e53]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e54]:
          - link "Try for Free" [ref=e55] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e56] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e57]:
      - generic [ref=e58]:
        - generic [ref=e59]:
          - img "Shunya Labs" [ref=e60]
          - paragraph [ref=e61]: Shunya Labs, Inc.
        - generic [ref=e62]:
          - paragraph [ref=e63]: Product
          - list [ref=e64]:
            - listitem [ref=e65]:
              - link "Overview" [ref=e66] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e67]:
              - link "Models" [ref=e68] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e69]:
              - link "Voice Agents" [ref=e70] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e71]:
              - link "Speech Intelligence" [ref=e72] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e73]:
              - link "Audio Processing" [ref=e74] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e75]:
              - link "Deployment" [ref=e76] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e77]:
          - paragraph [ref=e78]: Models
          - list [ref=e79]:
            - listitem [ref=e80]:
              - link "Language Models" [ref=e81] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e82]:
              - link "Zero STT Indic" [ref=e83] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e84]:
              - link "Zero STT Codeswitch" [ref=e85] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e86]:
              - link "Specialised Models" [ref=e87] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e88]:
              - link "Zero STT Med" [ref=e89] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e90]:
              - link "On Device Models" [ref=e91] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e92]:
          - paragraph [ref=e93]: Solutions
          - list [ref=e94]:
            - listitem [ref=e95]:
              - link "Contact Centers" [ref=e96] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e97]:
              - link "Media & Entertainment" [ref=e98] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e99]:
              - link "Healthcare" [ref=e100] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e101]:
          - paragraph [ref=e102]: Resources
          - list [ref=e103]:
            - listitem [ref=e104]:
              - link "Blogs" [ref=e105] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e106]:
              - link "Benchmarks" [ref=e107] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e108]:
              - link "News & Media" [ref=e109] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e110]:
              - link "Patents" [ref=e111] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e112]:
              - link "Research" [ref=e113] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e115]:
          - link "Documentation" [ref=e116] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e118]:
          - listitem [ref=e119]:
            - link "About us" [ref=e120] [cursor=pointer]:
              - /url: /about
        - list [ref=e122]:
          - listitem [ref=e123]:
            - link "Pricing" [ref=e124] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e125]:
        - paragraph [ref=e126]: Follow us on
        - generic [ref=e127]:
          - link [ref=e128] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e129]
          - link [ref=e131] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e132]
          - link [ref=e134] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e135]
          - link [ref=e137] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e138]
      - generic [ref=e140]:
        - paragraph [ref=e141]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e142]:
          - link "Privacy" [ref=e143] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e144] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e145] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e146] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e147] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e148]
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