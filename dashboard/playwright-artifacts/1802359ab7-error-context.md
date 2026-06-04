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
    - generic [ref=e10]:
      - generic [ref=e11]:
        - heading "Foundation Models Built to Power Voice Agents" [level=1] [ref=e12]
        - heading "Trained on proprietary methods and data, delivering industry-leading results across languages, specializations, and deployment environments." [level=2] [ref=e13]
      - link "Try Now" [ref=e14] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Language Models" [level=2] [ref=e19]
        - paragraph [ref=e20]: Global coverage across 200+ languages with state-of-the-art Indic and code-switch capabilities for exceptional accuracy.
      - generic [ref=e22]:
        - generic [ref=e23] [cursor=pointer]:
          - heading "Zero STT Indic" [level=3] [ref=e25]
          - paragraph [ref=e26]: Superior accuracy for deep Indic language support
          - link "Learn more →" [ref=e28]:
            - /url: /zero-indic
            - text: Learn more
            - generic [ref=e29]: →
        - generic [ref=e30] [cursor=pointer]:
          - heading "Zero STT Codeswitch" [level=3] [ref=e32]
          - paragraph [ref=e33]: One-of-a-kind model for Hinglish speech
          - generic [ref=e34]:
            - generic: Learn more →
        - generic [ref=e35] [cursor=pointer]:
          - heading "Zero STT" [level=3] [ref=e37]
          - paragraph [ref=e38]: Industry-leading accuracy across all languages and accents
          - generic [ref=e39]:
            - generic: Learn more →
    - generic [ref=e41]:
      - generic [ref=e42]:
        - heading "Specialized Models" [level=2] [ref=e43]
        - paragraph [ref=e44]: Domain-specific models that understand your use case, from specialised terminology to proper nouns and numerical entities.
      - generic [ref=e47] [cursor=pointer]:
        - heading "Zero STT Med" [level=3] [ref=e49]
        - paragraph [ref=e50]: Clinical-grade accuracy for medical transcription and healthcare terminology
        - link "Learn more →" [ref=e51]:
          - /url: /zero-med
          - text: Learn more
          - generic [ref=e52]: →
    - generic [ref=e54]:
      - generic [ref=e55]:
        - heading "On-Device Models" [level=2] [ref=e56]
        - paragraph [ref=e57]: Lightweight, high-performance models that run locally without compromising accuracy.
      - generic [ref=e60] [cursor=pointer]:
        - heading "Zero Tinny ONNX" [level=3] [ref=e62]
        - paragraph [ref=e63]: Compact ONNX format for accurate on-device transcription
        - link "Learn more →" [ref=e64]:
          - /url: /on-device-models
          - text: Learn more
          - generic [ref=e65]: →
    - contentinfo [ref=e66]:
      - generic [ref=e67]:
        - paragraph [ref=e68]: The fastest way to add voice AI to your products
        - paragraph [ref=e69]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e70]:
          - link "Go to Pricing page" [ref=e71] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e72] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e73]:
      - generic [ref=e74]:
        - generic [ref=e75]:
          - img "Shunya Labs" [ref=e76]
          - paragraph [ref=e77]: Shunya Labs, Inc.
        - generic [ref=e78]:
          - paragraph [ref=e79]: Product
          - list [ref=e80]:
            - listitem [ref=e81]:
              - link "Overview" [ref=e82] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e83]:
              - link "Models" [ref=e84] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e85]:
              - link "Voice Agents" [ref=e86] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e87]:
              - link "Speech Intelligence" [ref=e88] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e89]:
              - link "Audio Processing" [ref=e90] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e91]:
              - link "Deployment" [ref=e92] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e93]:
          - paragraph [ref=e94]: Models
          - list [ref=e95]:
            - listitem [ref=e96]:
              - link "Language Models" [ref=e97] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e98]:
              - link "Zero STT Indic" [ref=e99] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e100]:
              - link "Zero STT Codeswitch" [ref=e101] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e102]:
              - link "Specialised Models" [ref=e103] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e104]:
              - link "Zero STT Med" [ref=e105] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e106]:
              - link "On Device Models" [ref=e107] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e108]:
          - paragraph [ref=e109]: Solutions
          - list [ref=e110]:
            - listitem [ref=e111]:
              - link "Contact Centers" [ref=e112] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e113]:
              - link "Media & Entertainment" [ref=e114] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e115]:
              - link "Healthcare" [ref=e116] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e117]:
          - paragraph [ref=e118]: Resources
          - list [ref=e119]:
            - listitem [ref=e120]:
              - link "Blogs" [ref=e121] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e122]:
              - link "Benchmarks" [ref=e123] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e124]:
              - link "News & Media" [ref=e125] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e126]:
              - link "Patents" [ref=e127] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e128]:
              - link "Research" [ref=e129] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e131]:
          - link "Documentation" [ref=e132] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e134]:
          - listitem [ref=e135]:
            - link "About us" [ref=e136] [cursor=pointer]:
              - /url: /about
        - list [ref=e138]:
          - listitem [ref=e139]:
            - link "Pricing" [ref=e140] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e141]:
        - paragraph [ref=e142]: Follow us on
        - generic [ref=e143]:
          - link [ref=e144] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e145]
          - link [ref=e147] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e148]
          - link [ref=e150] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e151]
          - link [ref=e153] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e154]
      - generic [ref=e156]:
        - paragraph [ref=e157]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e158]:
          - link "Privacy" [ref=e159] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e160] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e161] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e162] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e163] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e164]
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