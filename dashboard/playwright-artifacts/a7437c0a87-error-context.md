# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/models/design.spec.js >> Product - Models design compliance >> Figma design compliance
- Location: tests/modules/product/models/design.spec.js:13:3

# Error details

```
Error: [content] Page title: expected "Voice AI Models for Speech-to-Text & Multilingual AI | Shunya Labs" but got "Voice AI Models for Speech-to-Text & Multilingual | Shunya"

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
    - generic [ref=e34]:
      - generic [ref=e35]:
        - heading "Foundation Models Built to Power Voice Agents" [level=1] [ref=e36]
        - heading "Trained on proprietary methods and data, delivering industry-leading results across languages, specializations, and deployment environments." [level=2] [ref=e37]
      - link "Try Now" [ref=e38] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e41]:
      - generic [ref=e42]:
        - heading "Language Models" [level=2] [ref=e43]
        - paragraph [ref=e44]: Global coverage across 200+ languages with state-of-the-art Indic and code-switch capabilities for exceptional accuracy.
      - generic [ref=e46]:
        - generic [ref=e47] [cursor=pointer]:
          - heading "Zero STT Indic" [level=3] [ref=e49]
          - paragraph [ref=e50]: Superior accuracy for deep Indic language support
          - link "Learn more →" [ref=e52]:
            - /url: /zero-indic
            - text: Learn more
            - generic [ref=e53]: →
        - generic [ref=e54] [cursor=pointer]:
          - heading "Zero STT Codeswitch" [level=3] [ref=e56]
          - paragraph [ref=e57]: One-of-a-kind model for Hinglish speech
          - generic [ref=e58]:
            - generic: Learn more →
        - generic [ref=e59] [cursor=pointer]:
          - heading "Zero STT" [level=3] [ref=e61]
          - paragraph [ref=e62]: Industry-leading accuracy across all languages and accents
          - generic [ref=e63]:
            - generic: Learn more →
    - generic [ref=e65]:
      - generic [ref=e66]:
        - heading "Specialized Models" [level=2] [ref=e67]
        - paragraph [ref=e68]: Domain-specific models that understand your use case, from specialised terminology to proper nouns and numerical entities.
      - generic [ref=e71] [cursor=pointer]:
        - heading "Zero STT Med" [level=3] [ref=e73]
        - paragraph [ref=e74]: Clinical-grade accuracy for medical transcription and healthcare terminology
        - link "Learn more →" [ref=e75]:
          - /url: /zero-med
          - text: Learn more
          - generic [ref=e76]: →
    - generic [ref=e78]:
      - generic [ref=e79]:
        - heading "On-Device Models" [level=2] [ref=e80]
        - paragraph [ref=e81]: Lightweight, high-performance models that run locally without compromising accuracy.
      - generic [ref=e84] [cursor=pointer]:
        - heading "Zero Tinny ONNX" [level=3] [ref=e86]
        - paragraph [ref=e87]: Compact ONNX format for accurate on-device transcription
        - link "Learn more →" [ref=e88]:
          - /url: /on-device-models
          - text: Learn more
          - generic [ref=e89]: →
    - contentinfo [ref=e90]:
      - generic [ref=e94]:
        - paragraph [ref=e95]: The fastest way to add voice AI to your products
        - paragraph [ref=e96]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e97]:
          - link "Go to Pricing page" [ref=e98] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e99] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e100]:
      - generic [ref=e101]:
        - generic [ref=e102]:
          - img "Shunya Labs" [ref=e103]
          - paragraph [ref=e104]: Shunya Labs, Inc.
        - generic [ref=e105]:
          - paragraph [ref=e106]: Product
          - list [ref=e107]:
            - listitem [ref=e108]:
              - link "Overview" [ref=e109] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e110]:
              - link "Models" [ref=e111] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e112]:
              - link "Voice Agents" [ref=e113] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e114]:
              - link "Speech Intelligence" [ref=e115] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e116]:
              - link "Audio Processing" [ref=e117] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e118]:
              - link "Deployment" [ref=e119] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e120]:
          - paragraph [ref=e121]: Models
          - list [ref=e122]:
            - listitem [ref=e123]:
              - link "Language Models" [ref=e124] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e125]:
              - link "Zero STT Indic" [ref=e126] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e127]:
              - link "Zero STT Codeswitch" [ref=e128] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e129]:
              - link "Specialised Models" [ref=e130] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e131]:
              - link "Zero STT Med" [ref=e132] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e133]:
              - link "On Device Models" [ref=e134] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e135]:
          - paragraph [ref=e136]: Solutions
          - list [ref=e137]:
            - listitem [ref=e138]:
              - link "Contact Centers" [ref=e139] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e140]:
              - link "Media & Entertainment" [ref=e141] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e142]:
              - link "Healthcare" [ref=e143] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e144]:
          - paragraph [ref=e145]: Resources
          - list [ref=e146]:
            - listitem [ref=e147]:
              - link "Blogs" [ref=e148] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e149]:
              - link "Benchmarks" [ref=e150] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e151]:
              - link "News & Media" [ref=e152] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e153]:
              - link "Patents" [ref=e154] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e155]:
              - link "Research" [ref=e156] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e158]:
          - link "Documentation" [ref=e159] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e161]:
          - listitem [ref=e162]:
            - link "About us" [ref=e163] [cursor=pointer]:
              - /url: /about
        - list [ref=e165]:
          - listitem [ref=e166]:
            - link "Pricing" [ref=e167] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e168]:
        - paragraph [ref=e169]: Follow us on
        - generic [ref=e170]:
          - link [ref=e171] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e172]
          - link [ref=e174] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e175]
          - link [ref=e177] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e178]
          - link [ref=e180] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e181]
      - generic [ref=e183]:
        - paragraph [ref=e184]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e185]:
          - link "Privacy" [ref=e186] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e187] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e188] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e189] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e190] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e191]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { pageRegistry } from '../../../../test-data/page-registry.js';
  3  | import { runDesignComplianceTest } from '../../../../utils/design-validator.js';
  4  | 
  5  | const pageEntry = pageRegistry.find(
  6  |   (page) => page.moduleKey === 'product' && page.slug === 'models'
  7  | );
  8  | 
  9  | const moduleLabel = pageEntry?.moduleLabel || 'product';
  10 | const pageLabel = pageEntry?.pageLabel || 'models';
  11 | 
  12 | test.describe(`${moduleLabel} - ${pageLabel} design compliance`, () => {
  13 |   test('Figma design compliance', async ({ page }) => {
  14 |     const failures = await runDesignComplianceTest({ page, pageEntry });
  15 | 
  16 |     for (const f of failures) {
  17 |       expect.soft(null, `[${f.section}] ${f.message}`).toBeTruthy();
  18 |     }
  19 | 
> 20 |     expect(failures.length, `${failures.length} design compliance issue(s) found`).toBe(0);
     |                                                                                    ^ Error: 1 design compliance issue(s) found
  21 |   });
  22 | });
  23 | 
```