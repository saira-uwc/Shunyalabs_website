# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/models/design.spec.js >> Product - Models design compliance >> Figma design compliance
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
    - generic [ref=e36]:
      - generic [ref=e37]:
        - heading "Foundation Models Built to Power Voice Agents" [level=1] [ref=e38]
        - heading "Trained on proprietary methods and data, delivering industry-leading results across languages, specializations, and deployment environments." [level=2] [ref=e39]
      - link "Try Now" [ref=e40] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e43]:
      - generic [ref=e44]:
        - heading "Language Models" [level=2] [ref=e45]
        - paragraph [ref=e46]: Global coverage across 200+ languages with state-of-the-art Indic and code-switch capabilities for exceptional accuracy.
      - generic [ref=e48]:
        - generic [ref=e49] [cursor=pointer]:
          - heading "Zero STT Indic" [level=3] [ref=e51]
          - paragraph [ref=e52]: Superior accuracy for deep Indic language support
          - link "Learn more →" [ref=e54]:
            - /url: /zero-indic
            - text: Learn more
            - generic [ref=e55]: →
        - generic [ref=e56] [cursor=pointer]:
          - heading "Zero STT Codeswitch" [level=3] [ref=e58]
          - paragraph [ref=e59]: One-of-a-kind model for Hinglish speech
          - generic [ref=e60]:
            - generic: Learn more →
        - generic [ref=e61] [cursor=pointer]:
          - heading "Zero STT" [level=3] [ref=e63]
          - paragraph [ref=e64]: Industry-leading accuracy across all languages and accents
          - generic [ref=e65]:
            - generic: Learn more →
    - generic [ref=e67]:
      - generic [ref=e68]:
        - heading "Specialized Models" [level=2] [ref=e69]
        - paragraph [ref=e70]: Domain-specific models that understand your use case, from specialised terminology to proper nouns and numerical entities.
      - generic [ref=e73] [cursor=pointer]:
        - heading "Zero STT Med" [level=3] [ref=e75]
        - paragraph [ref=e76]: Clinical-grade accuracy for medical transcription and healthcare terminology
        - link "Learn more →" [ref=e77]:
          - /url: /zero-med
          - text: Learn more
          - generic [ref=e78]: →
    - generic [ref=e80]:
      - generic [ref=e81]:
        - heading "On-Device Models" [level=2] [ref=e82]
        - paragraph [ref=e83]: Lightweight, high-performance models that run locally without compromising accuracy.
      - generic [ref=e86] [cursor=pointer]:
        - heading "Zero Tinny ONNX" [level=3] [ref=e88]
        - paragraph [ref=e89]: Compact ONNX format for accurate on-device transcription
        - link "Learn more →" [ref=e90]:
          - /url: /on-device-models
          - text: Learn more
          - generic [ref=e91]: →
    - contentinfo [ref=e92]:
      - generic [ref=e93]:
        - paragraph [ref=e94]: The fastest way to add voice AI to your products
        - paragraph [ref=e95]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e96]:
          - link "Go to Pricing page" [ref=e97] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e98] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e99]:
      - generic [ref=e100]:
        - generic [ref=e101]:
          - img "Shunya Labs" [ref=e102]
          - paragraph [ref=e103]: Shunya Labs, Inc.
        - generic [ref=e104]:
          - paragraph [ref=e105]: Product
          - list [ref=e106]:
            - listitem [ref=e107]:
              - link "Overview" [ref=e108] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e109]:
              - link "Models" [ref=e110] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e111]:
              - link "Voice Agents" [ref=e112] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e113]:
              - link "Speech Intelligence" [ref=e114] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e115]:
              - link "Audio Processing" [ref=e116] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e117]:
              - link "Deployment" [ref=e118] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e119]:
          - paragraph [ref=e120]: Models
          - list [ref=e121]:
            - listitem [ref=e122]:
              - link "Language Models" [ref=e123] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e124]:
              - link "Zero STT Indic" [ref=e125] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e126]:
              - link "Zero STT Codeswitch" [ref=e127] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e128]:
              - link "Specialised Models" [ref=e129] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e130]:
              - link "Zero STT Med" [ref=e131] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e132]:
              - link "On Device Models" [ref=e133] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e134]:
          - paragraph [ref=e135]: Solutions
          - list [ref=e136]:
            - listitem [ref=e137]:
              - link "Contact Centers" [ref=e138] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e139]:
              - link "Media & Entertainment" [ref=e140] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e141]:
              - link "Healthcare" [ref=e142] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e143]:
          - paragraph [ref=e144]: Resources
          - list [ref=e145]:
            - listitem [ref=e146]:
              - link "Blogs" [ref=e147] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e148]:
              - link "Benchmarks" [ref=e149] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e150]:
              - link "News & Media" [ref=e151] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e152]:
              - link "Patents" [ref=e153] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e154]:
              - link "Research" [ref=e155] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e157]:
          - link "Documentation" [ref=e158] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e160]:
          - listitem [ref=e161]:
            - link "About us" [ref=e162] [cursor=pointer]:
              - /url: /about
        - list [ref=e164]:
          - listitem [ref=e165]:
            - link "Pricing" [ref=e166] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e167]:
        - paragraph [ref=e168]: Follow us on
        - generic [ref=e169]:
          - link [ref=e170] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e171]
          - link [ref=e173] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e174]
          - link [ref=e176] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e177]
          - link [ref=e179] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e180]
      - generic [ref=e182]:
        - paragraph [ref=e183]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e184]:
          - link "Privacy" [ref=e185] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e186] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e187] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e188] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e189] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e190]
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