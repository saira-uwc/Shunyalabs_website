# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/on-device-models/design.spec.js >> Models - On Device Models design compliance >> Figma design compliance
- Location: tests/modules/models/on-device-models/design.spec.js:13:3

# Error details

```
Error: [content] Page title: expected "On-Device Speech Recognition Models | Edge AI – Shunya Labs" but got "On-Device Speech Recognition Models | Shunya Labs"

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
    - generic [ref=e4]:
      - navigation [ref=e5]:
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
          - link "Playground" [ref=e29] [cursor=pointer]:
            - /url: https://playground.shunyalabs.ai/
            - img [ref=e30]
            - text: Playground
          - generic [ref=e32]:
            - button "Sign In" [ref=e33] [cursor=pointer]
            - link "Contact Sales" [ref=e34] [cursor=pointer]:
              - /url: /contact
      - generic [ref=e36]:
        - heading "On device speech-to-text for real-time transcription" [level=1] [ref=e37]
        - heading "Run fast, accurate speech-to-text directly on your devices with Shunya Labs’ ONNX-based English ASR model" [level=2] [ref=e38]
      - generic [ref=e40]:
        - generic [ref=e41]:
          - generic [ref=e43]:
            - img [ref=e45]
            - generic [ref=e47]:
              - heading "Offline-ready" [level=3] [ref=e48]
              - paragraph [ref=e49]: Operates without network connectivity or in low-bandwidth environments
          - generic [ref=e51]:
            - img [ref=e53]
            - generic [ref=e56]:
              - heading "Lightweight models" [level=3] [ref=e57]
              - paragraph [ref=e58]: Optimized edge architectures for resource-constrained devices
          - generic [ref=e60]:
            - img [ref=e62]
            - generic [ref=e65]:
              - heading "ONNX format" [level=3] [ref=e66]
              - paragraph [ref=e67]: Portable models deploy seamlessly across iOS, Android, Linux, and embedded systems
          - generic [ref=e69]:
            - img [ref=e71]
            - generic [ref=e73]:
              - heading "Low latency" [level=3] [ref=e74]
              - paragraph [ref=e75]: Fast local processing without round-trip delays
        - paragraph [ref=e76]: Ideal for healthcare, automotive, mobile apps, and privacy-critical use cases.
      - generic [ref=e78]:
        - heading "Tiny ONNX model, big performance" [level=2] [ref=e79]
        - generic [ref=e80]:
          - generic [ref=e81]:
            - paragraph [ref=e83]: Small enough to fit on edge devices and existing servers without a hardware refresh
            - heading "Lightweight" [level=3] [ref=e85]
          - generic [ref=e87]:
            - heading "Fast" [level=3] [ref=e89]
            - paragraph [ref=e91]: Transcribes as people speak, with sub-100 ms latency for partials
          - generic [ref=e93]:
            - paragraph [ref=e95]: Trained on high entropy data to achieve industry best 3.10% WER
            - heading "Accurate" [level=3] [ref=e97]
    - link "Contact Us" [ref=e99] [cursor=pointer]:
      - /url: contact
    - contentinfo [ref=e100]:
      - generic [ref=e104]:
        - paragraph [ref=e105]: The fastest way to add voice AI to your products
        - paragraph [ref=e106]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e107]:
          - link "Go to Pricing page" [ref=e108] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e109] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - img "Shunya Labs" [ref=e113]
          - paragraph [ref=e114]: Shunya Labs, Inc.
        - generic [ref=e115]:
          - paragraph [ref=e116]: Product
          - list [ref=e117]:
            - listitem [ref=e118]:
              - link "Overview" [ref=e119] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e120]:
              - link "Models" [ref=e121] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e122]:
              - link "Voice Agents" [ref=e123] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e124]:
              - link "Speech Intelligence" [ref=e125] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e126]:
              - link "Audio Processing" [ref=e127] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e128]:
              - link "Deployment" [ref=e129] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e130]:
          - paragraph [ref=e131]: Models
          - list [ref=e132]:
            - listitem [ref=e133]:
              - link "Language Models" [ref=e134] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e135]:
              - link "Zero STT Indic" [ref=e136] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e137]:
              - link "Zero STT Codeswitch" [ref=e138] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e139]:
              - link "Specialised Models" [ref=e140] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e141]:
              - link "Zero STT Med" [ref=e142] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e143]:
              - link "On Device Models" [ref=e144] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e145]:
          - paragraph [ref=e146]: Solutions
          - list [ref=e147]:
            - listitem [ref=e148]:
              - link "Contact Centers" [ref=e149] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e150]:
              - link "Media & Entertainment" [ref=e151] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e152]:
              - link "Healthcare" [ref=e153] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e154]:
          - paragraph [ref=e155]: Resources
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link "Blogs" [ref=e158] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e159]:
              - link "Benchmarks" [ref=e160] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e161]:
              - link "News & Media" [ref=e162] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e163]:
              - link "Patents" [ref=e164] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e165]:
              - link "Research" [ref=e166] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e168]:
          - link "Documentation" [ref=e169] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e171]:
          - listitem [ref=e172]:
            - link "About us" [ref=e173] [cursor=pointer]:
              - /url: /about
        - list [ref=e175]:
          - listitem [ref=e176]:
            - link "Pricing" [ref=e177] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e178]:
        - paragraph [ref=e179]: Follow us on
        - generic [ref=e180]:
          - link [ref=e181] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e182]
          - link [ref=e184] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e185]
          - link [ref=e187] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e188]
          - link [ref=e190] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e191]
      - generic [ref=e193]:
        - paragraph [ref=e194]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e195]:
          - link "Privacy" [ref=e196] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e197] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e198] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e199] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e200] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e201]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { pageRegistry } from '../../../../test-data/page-registry.js';
  3  | import { runDesignComplianceTest } from '../../../../utils/design-validator.js';
  4  | 
  5  | const pageEntry = pageRegistry.find(
  6  |   (page) => page.moduleKey === 'models' && page.slug === 'on-device-models'
  7  | );
  8  | 
  9  | const moduleLabel = pageEntry?.moduleLabel || 'models';
  10 | const pageLabel = pageEntry?.pageLabel || 'on-device-models';
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