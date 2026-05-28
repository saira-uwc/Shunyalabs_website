# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/models/design.spec.js >> Product - Models design compliance >> Figma design compliance
- Location: tests/modules/product/models/design.spec.js:13:3

# Error details

```
Error: [content] Page title: expected "Voice AI Models for Speech-to-Text & Multilingual AI | Shunya Labs" but got "Voice AI Models: Speech-to-Text & Multilingual | Shunya Labs"

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
        - button "☰" [ref=e8] [cursor=pointer]
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
    - generic [ref=e9]:
      - generic [ref=e10]:
        - heading "Foundation Models Built to Power Voice Agents" [level=1] [ref=e11]
        - heading "Trained on proprietary methods and data, delivering industry-leading results across languages, specializations, and deployment environments." [level=2] [ref=e12]
      - link "Try Now" [ref=e13] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e16]:
      - generic [ref=e17]:
        - heading "Language Models" [level=2] [ref=e18]
        - paragraph [ref=e19]: Global coverage across 200+ languages with state-of-the-art Indic and code-switch capabilities for exceptional accuracy.
      - generic [ref=e21]:
        - generic [ref=e22] [cursor=pointer]:
          - heading "Zero STT Indic" [level=3] [ref=e24]
          - paragraph [ref=e25]: Superior accuracy for deep Indic language support
          - link "Learn more →" [ref=e27]:
            - /url: /zero-indic
            - text: Learn more
            - generic [ref=e28]: →
        - generic [ref=e29] [cursor=pointer]:
          - heading "Zero STT Codeswitch" [level=3] [ref=e31]
          - paragraph [ref=e32]: One-of-a-kind model for Hinglish speech
          - generic [ref=e33]:
            - generic: Learn more →
        - generic [ref=e34] [cursor=pointer]:
          - heading "Zero STT" [level=3] [ref=e36]
          - paragraph [ref=e37]: Industry-leading accuracy across all languages and accents
          - generic [ref=e38]:
            - generic: Learn more →
    - generic [ref=e40]:
      - generic [ref=e41]:
        - heading "Specialized Models" [level=2] [ref=e42]
        - paragraph [ref=e43]: Domain-specific models that understand your use case, from specialised terminology to proper nouns and numerical entities.
      - generic [ref=e46] [cursor=pointer]:
        - heading "Zero STT Med" [level=3] [ref=e48]
        - paragraph [ref=e49]: Clinical-grade accuracy for medical transcription and healthcare terminology
        - link "Learn more →" [ref=e50]:
          - /url: /zero-med
          - text: Learn more
          - generic [ref=e51]: →
    - generic [ref=e53]:
      - generic [ref=e54]:
        - heading "On-Device Models" [level=2] [ref=e55]
        - paragraph [ref=e56]: Lightweight, high-performance models that run locally without compromising accuracy.
      - generic [ref=e59] [cursor=pointer]:
        - heading "Zero Tinny ONNX" [level=3] [ref=e61]
        - paragraph [ref=e62]: Compact ONNX format for accurate on-device transcription
        - link "Learn more →" [ref=e63]:
          - /url: /on-device-models
          - text: Learn more
          - generic [ref=e64]: →
    - contentinfo [ref=e65]:
      - generic [ref=e69]:
        - paragraph [ref=e70]: The fastest way to add voice AI to your products
        - paragraph [ref=e71]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e72]:
          - link "Go to Pricing page" [ref=e73] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e74] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e75]:
      - generic [ref=e76]:
        - generic [ref=e77]:
          - img "Shunya Labs" [ref=e78]
          - paragraph [ref=e79]: Shunya Labs, Inc.
        - generic [ref=e80]:
          - paragraph [ref=e81]: Product
          - list [ref=e82]:
            - listitem [ref=e83]:
              - link "Overview" [ref=e84] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e85]:
              - link "Models" [ref=e86] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e87]:
              - link "Voice Agents" [ref=e88] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e89]:
              - link "Speech Intelligence" [ref=e90] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e91]:
              - link "Audio Processing" [ref=e92] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e93]:
              - link "Deployment" [ref=e94] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e95]:
          - paragraph [ref=e96]: Models
          - list [ref=e97]:
            - listitem [ref=e98]:
              - link "Language Models" [ref=e99] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e100]:
              - link "Zero STT Indic" [ref=e101] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e102]:
              - link "Zero STT Codeswitch" [ref=e103] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e104]:
              - link "Specialised Models" [ref=e105] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e106]:
              - link "Zero STT Med" [ref=e107] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e108]:
              - link "On Device Models" [ref=e109] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e110]:
          - paragraph [ref=e111]: Solutions
          - list [ref=e112]:
            - listitem [ref=e113]:
              - link "Contact Centers" [ref=e114] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e115]:
              - link "Media & Entertainment" [ref=e116] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e117]:
              - link "Healthcare" [ref=e118] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e119]:
          - paragraph [ref=e120]: Resources
          - list [ref=e121]:
            - listitem [ref=e122]:
              - link "Blogs" [ref=e123] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e124]:
              - link "Benchmarks" [ref=e125] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e126]:
              - link "News & Media" [ref=e127] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e128]:
              - link "Patents" [ref=e129] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e130]:
              - link "Research" [ref=e131] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e133]:
          - link "Documentation" [ref=e134] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e136]:
          - listitem [ref=e137]:
            - link "About us" [ref=e138] [cursor=pointer]:
              - /url: /about
        - list [ref=e140]:
          - listitem [ref=e141]:
            - link "Pricing" [ref=e142] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e143]:
        - paragraph [ref=e144]: Follow us on
        - generic [ref=e145]:
          - link [ref=e146] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e147]
          - link [ref=e149] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e150]
          - link [ref=e152] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e153]
          - link [ref=e155] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e156]
      - generic [ref=e158]:
        - paragraph [ref=e159]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e160]:
          - link "Privacy" [ref=e161] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e162] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e163] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e164] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e165] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e166]
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