# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/models/design.spec.js >> Product - Models design compliance >> Figma design compliance
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
  - generic [ref=e3]:
    - banner:
      - generic [ref=e4]:
        - link "Shunya Labs Logo" [ref=e5] [cursor=pointer]:
          - /url: /
          - img "Shunya Labs Logo" [ref=e6]
        - button "Open menu" [ref=e7] [cursor=pointer]: ☰
    - generic [ref=e8]:
      - generic [ref=e9]:
        - heading "Foundation Models Built to Power Voice Agents" [level=1] [ref=e10]
        - heading "Trained on proprietary methods and data, delivering industry-leading results across languages, specializations, and deployment environments." [level=2] [ref=e11]
      - link "Try Now" [ref=e12] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e15]:
      - generic [ref=e16]:
        - heading "Language Models" [level=2] [ref=e17]
        - paragraph [ref=e18]: Global coverage across 200+ languages with state-of-the-art Indic and code-switch capabilities for exceptional accuracy.
      - generic [ref=e20]:
        - generic [ref=e21] [cursor=pointer]:
          - heading "Zero STT Indic" [level=3] [ref=e23]
          - paragraph [ref=e24]: Superior accuracy for deep Indic language support
          - link "Learn more →" [ref=e26]:
            - /url: /zero-indic
            - text: Learn more
            - generic [ref=e27]: →
        - generic [ref=e28] [cursor=pointer]:
          - heading "Zero STT Codeswitch" [level=3] [ref=e30]
          - paragraph [ref=e31]: One-of-a-kind model for Hinglish speech
          - generic [ref=e32]:
            - generic: Learn more →
        - generic [ref=e33] [cursor=pointer]:
          - heading "Zero STT" [level=3] [ref=e35]
          - paragraph [ref=e36]: Industry-leading accuracy across all languages and accents
          - generic [ref=e37]:
            - generic: Learn more →
    - generic [ref=e39]:
      - generic [ref=e40]:
        - heading "Specialized Models" [level=2] [ref=e41]
        - paragraph [ref=e42]: Domain-specific models that understand your use case, from specialised terminology to proper nouns and numerical entities.
      - generic [ref=e45] [cursor=pointer]:
        - heading "Zero STT Med" [level=3] [ref=e47]
        - paragraph [ref=e48]: Clinical-grade accuracy for medical transcription and healthcare terminology
        - link "Learn more →" [ref=e49]:
          - /url: /zero-med
          - text: Learn more
          - generic [ref=e50]: →
    - generic [ref=e52]:
      - generic [ref=e53]:
        - heading "On-Device Models" [level=2] [ref=e54]
        - paragraph [ref=e55]: Lightweight, high-performance models that run locally without compromising accuracy.
      - generic [ref=e58] [cursor=pointer]:
        - heading "Zero Tinny ONNX" [level=3] [ref=e60]
        - paragraph [ref=e61]: Compact ONNX format for accurate on-device transcription
        - link "Learn more →" [ref=e62]:
          - /url: /on-device-models
          - text: Learn more
          - generic [ref=e63]: →
    - contentinfo [ref=e64]:
      - generic [ref=e65]:
        - paragraph [ref=e66]: The fastest way to add voice AI to your products
        - paragraph [ref=e67]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e68]:
          - link "Go to Pricing page" [ref=e69] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e70] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e71]:
      - generic [ref=e72]:
        - generic [ref=e73]:
          - img "Shunya Labs" [ref=e74]
          - paragraph [ref=e75]: Shunya Labs, Inc.
        - generic [ref=e76]:
          - paragraph [ref=e77]: Product
          - list [ref=e78]:
            - listitem [ref=e79]:
              - link "Overview" [ref=e80] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e81]:
              - link "Models" [ref=e82] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e83]:
              - link "Voice Agents" [ref=e84] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e85]:
              - link "Speech Intelligence" [ref=e86] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e87]:
              - link "Audio Processing" [ref=e88] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e89]:
              - link "Deployment" [ref=e90] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e91]:
          - paragraph [ref=e92]: Models
          - list [ref=e93]:
            - listitem [ref=e94]:
              - link "Language Models" [ref=e95] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e96]:
              - link "Zero STT Indic" [ref=e97] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e98]:
              - link "Zero STT Codeswitch" [ref=e99] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e100]:
              - link "Specialised Models" [ref=e101] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e102]:
              - link "Zero STT Med" [ref=e103] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e104]:
              - link "On Device Models" [ref=e105] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e106]:
          - paragraph [ref=e107]: Solutions
          - list [ref=e108]:
            - listitem [ref=e109]:
              - link "Contact Centers" [ref=e110] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e111]:
              - link "Media & Entertainment" [ref=e112] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e113]:
              - link "Healthcare" [ref=e114] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e115]:
          - paragraph [ref=e116]: Resources
          - list [ref=e117]:
            - listitem [ref=e118]:
              - link "Blogs" [ref=e119] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e120]:
              - link "Benchmarks" [ref=e121] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e122]:
              - link "News & Media" [ref=e123] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e124]:
              - link "Patents" [ref=e125] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e126]:
              - link "Research" [ref=e127] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e129]:
          - link "Documentation" [ref=e130] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e132]:
          - listitem [ref=e133]:
            - link "About us" [ref=e134] [cursor=pointer]:
              - /url: /about
        - list [ref=e136]:
          - listitem [ref=e137]:
            - link "Pricing" [ref=e138] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e139]:
        - paragraph [ref=e140]: Follow us on
        - generic [ref=e141]:
          - link [ref=e142] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e143]
          - link [ref=e145] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e146]
          - link [ref=e148] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e149]
          - link [ref=e151] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e152]
      - generic [ref=e154]:
        - paragraph [ref=e155]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e156]:
          - link "Privacy" [ref=e157] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e158] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e159] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e160] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e161] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e162]
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