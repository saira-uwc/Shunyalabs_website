# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/on-device-models/design.spec.js >> Models - On Device Models design compliance >> Figma design compliance
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
    - generic [ref=e4]:
      - navigation [ref=e5]:
        - generic [ref=e6]:
          - link "Shunya Labs Logo" [ref=e8] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e9]
          - button "☰" [ref=e10] [cursor=pointer]
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
        - heading "On device speech-to-text for real-time transcription" [level=1] [ref=e13]
        - heading "Run fast, accurate speech-to-text directly on your devices with Shunya Labs’ ONNX-based English ASR model" [level=2] [ref=e14]
      - generic [ref=e16]:
        - generic [ref=e17]:
          - generic [ref=e19]:
            - img [ref=e21]
            - generic [ref=e23]:
              - heading "Offline-ready" [level=3] [ref=e24]
              - paragraph [ref=e25]: Operates without network connectivity or in low-bandwidth environments
          - generic [ref=e27]:
            - img [ref=e29]
            - generic [ref=e32]:
              - heading "Lightweight models" [level=3] [ref=e33]
              - paragraph [ref=e34]: Optimized edge architectures for resource-constrained devices
          - generic [ref=e36]:
            - img [ref=e38]
            - generic [ref=e41]:
              - heading "ONNX format" [level=3] [ref=e42]
              - paragraph [ref=e43]: Portable models deploy seamlessly across iOS, Android, Linux, and embedded systems
          - generic [ref=e45]:
            - img [ref=e47]
            - generic [ref=e49]:
              - heading "Low latency" [level=3] [ref=e50]
              - paragraph [ref=e51]: Fast local processing without round-trip delays
        - paragraph [ref=e52]: Ideal for healthcare, automotive, mobile apps, and privacy-critical use cases.
      - generic [ref=e54]:
        - heading "Tiny ONNX model, big performance" [level=2] [ref=e55]
        - generic [ref=e56]:
          - generic [ref=e57]:
            - heading "Lightweight" [level=3] [ref=e58]
            - paragraph [ref=e59]: Small enough to fit on edge devices and existing servers without a hardware refresh
          - generic [ref=e61]:
            - heading "Fast" [level=3] [ref=e62]
            - paragraph [ref=e63]: Transcribes as people speak, with sub-100 ms latency for partials
          - generic [ref=e65]:
            - heading "Accurate" [level=3] [ref=e66]
            - paragraph [ref=e67]: Trained on high entropy data to achieve industry best 3.10% WER
    - link "Contact Us" [ref=e69] [cursor=pointer]:
      - /url: contact
    - contentinfo [ref=e70]:
      - generic [ref=e71]:
        - paragraph [ref=e72]: The fastest way to add voice AI to your products
        - paragraph [ref=e73]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e74]:
          - link "Go to Pricing page" [ref=e75] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e76] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e77]:
      - generic [ref=e78]:
        - generic [ref=e79]:
          - img "Shunya Labs" [ref=e80]
          - paragraph [ref=e81]: Shunya Labs, Inc.
        - generic [ref=e82]:
          - paragraph [ref=e83]: Product
          - list [ref=e84]:
            - listitem [ref=e85]:
              - link "Overview" [ref=e86] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e87]:
              - link "Models" [ref=e88] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e89]:
              - link "Voice Agents" [ref=e90] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e91]:
              - link "Speech Intelligence" [ref=e92] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e93]:
              - link "Audio Processing" [ref=e94] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e95]:
              - link "Deployment" [ref=e96] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e97]:
          - paragraph [ref=e98]: Models
          - list [ref=e99]:
            - listitem [ref=e100]:
              - link "Language Models" [ref=e101] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e102]:
              - link "Zero STT Indic" [ref=e103] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e104]:
              - link "Zero STT Codeswitch" [ref=e105] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e106]:
              - link "Specialised Models" [ref=e107] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e108]:
              - link "Zero STT Med" [ref=e109] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e110]:
              - link "On Device Models" [ref=e111] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e112]:
          - paragraph [ref=e113]: Solutions
          - list [ref=e114]:
            - listitem [ref=e115]:
              - link "Contact Centers" [ref=e116] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e117]:
              - link "Media & Entertainment" [ref=e118] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e119]:
              - link "Healthcare" [ref=e120] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e121]:
          - paragraph [ref=e122]: Resources
          - list [ref=e123]:
            - listitem [ref=e124]:
              - link "Blogs" [ref=e125] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e126]:
              - link "Benchmarks" [ref=e127] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e128]:
              - link "News & Media" [ref=e129] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e130]:
              - link "Patents" [ref=e131] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e132]:
              - link "Research" [ref=e133] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e135]:
          - link "Documentation" [ref=e136] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e138]:
          - listitem [ref=e139]:
            - link "About us" [ref=e140] [cursor=pointer]:
              - /url: /about
        - list [ref=e142]:
          - listitem [ref=e143]:
            - link "Pricing" [ref=e144] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e145]:
        - paragraph [ref=e146]: Follow us on
        - generic [ref=e147]:
          - link [ref=e148] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e149]
          - link [ref=e151] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e152]
          - link [ref=e154] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e155]
          - link [ref=e157] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e158]
      - generic [ref=e160]:
        - paragraph [ref=e161]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e162]:
          - link "Privacy" [ref=e163] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e164] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e165] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e166] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e167] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e168]
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