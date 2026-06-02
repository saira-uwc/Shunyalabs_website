# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/models/design.spec.js >> Product - Models design compliance >> Figma design compliance
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
    - generic [ref=e38]:
      - generic [ref=e39]:
        - heading "Foundation Models Built to Power Voice Agents" [level=1] [ref=e40]
        - heading "Trained on proprietary methods and data, delivering industry-leading results across languages, specializations, and deployment environments." [level=2] [ref=e41]
      - link "Try Now" [ref=e42] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e45]:
      - generic [ref=e46]:
        - heading "Language Models" [level=2] [ref=e47]
        - paragraph [ref=e48]: Global coverage across 200+ languages with state-of-the-art Indic and code-switch capabilities for exceptional accuracy.
      - generic [ref=e50]:
        - generic [ref=e51] [cursor=pointer]:
          - heading "Zero STT Indic" [level=3] [ref=e53]
          - paragraph [ref=e54]: Superior accuracy for deep Indic language support
          - link "Learn more →" [ref=e56]:
            - /url: /zero-indic
            - text: Learn more
            - generic [ref=e57]: →
        - generic [ref=e58] [cursor=pointer]:
          - heading "Zero STT Codeswitch" [level=3] [ref=e60]
          - paragraph [ref=e61]: One-of-a-kind model for Hinglish speech
          - generic [ref=e62]:
            - generic: Learn more →
        - generic [ref=e63] [cursor=pointer]:
          - heading "Zero STT" [level=3] [ref=e65]
          - paragraph [ref=e66]: Industry-leading accuracy across all languages and accents
          - generic [ref=e67]:
            - generic: Learn more →
    - generic [ref=e69]:
      - generic [ref=e70]:
        - heading "Specialized Models" [level=2] [ref=e71]
        - paragraph [ref=e72]: Domain-specific models that understand your use case, from specialised terminology to proper nouns and numerical entities.
      - generic [ref=e75] [cursor=pointer]:
        - heading "Zero STT Med" [level=3] [ref=e77]
        - paragraph [ref=e78]: Clinical-grade accuracy for medical transcription and healthcare terminology
        - link "Learn more →" [ref=e79]:
          - /url: /zero-med
          - text: Learn more
          - generic [ref=e80]: →
    - generic [ref=e82]:
      - generic [ref=e83]:
        - heading "On-Device Models" [level=2] [ref=e84]
        - paragraph [ref=e85]: Lightweight, high-performance models that run locally without compromising accuracy.
      - generic [ref=e88] [cursor=pointer]:
        - heading "Zero Tinny ONNX" [level=3] [ref=e90]
        - paragraph [ref=e91]: Compact ONNX format for accurate on-device transcription
        - link "Learn more →" [ref=e92]:
          - /url: /on-device-models
          - text: Learn more
          - generic [ref=e93]: →
    - contentinfo [ref=e94]:
      - generic [ref=e95]:
        - paragraph [ref=e96]: The fastest way to add voice AI to your products
        - paragraph [ref=e97]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e98]:
          - link "Go to Pricing page" [ref=e99] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e100] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e101]:
      - generic [ref=e102]:
        - generic [ref=e103]:
          - img "Shunya Labs" [ref=e104]
          - paragraph [ref=e105]: Shunya Labs, Inc.
        - generic [ref=e106]:
          - paragraph [ref=e107]: Product
          - list [ref=e108]:
            - listitem [ref=e109]:
              - link "Overview" [ref=e110] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e111]:
              - link "Models" [ref=e112] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e113]:
              - link "Voice Agents" [ref=e114] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e115]:
              - link "Speech Intelligence" [ref=e116] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e117]:
              - link "Audio Processing" [ref=e118] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e119]:
              - link "Deployment" [ref=e120] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e121]:
          - paragraph [ref=e122]: Models
          - list [ref=e123]:
            - listitem [ref=e124]:
              - link "Language Models" [ref=e125] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e126]:
              - link "Zero STT Indic" [ref=e127] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e128]:
              - link "Zero STT Codeswitch" [ref=e129] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e130]:
              - link "Specialised Models" [ref=e131] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e132]:
              - link "Zero STT Med" [ref=e133] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e134]:
              - link "On Device Models" [ref=e135] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e136]:
          - paragraph [ref=e137]: Solutions
          - list [ref=e138]:
            - listitem [ref=e139]:
              - link "Contact Centers" [ref=e140] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e141]:
              - link "Media & Entertainment" [ref=e142] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e143]:
              - link "Healthcare" [ref=e144] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e145]:
          - paragraph [ref=e146]: Resources
          - list [ref=e147]:
            - listitem [ref=e148]:
              - link "Blogs" [ref=e149] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e150]:
              - link "Benchmarks" [ref=e151] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e152]:
              - link "News & Media" [ref=e153] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e154]:
              - link "Patents" [ref=e155] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e156]:
              - link "Research" [ref=e157] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e159]:
          - link "Documentation" [ref=e160] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e162]:
          - listitem [ref=e163]:
            - link "About us" [ref=e164] [cursor=pointer]:
              - /url: /about
        - list [ref=e166]:
          - listitem [ref=e167]:
            - link "Pricing" [ref=e168] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e169]:
        - paragraph [ref=e170]: Follow us on
        - generic [ref=e171]:
          - link [ref=e172] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e173]
          - link [ref=e175] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e176]
          - link [ref=e178] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e179]
          - link [ref=e181] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e182]
      - generic [ref=e184]:
        - paragraph [ref=e185]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e186]:
          - link "Privacy" [ref=e187] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e188] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e189] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e190] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e191] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e192]
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