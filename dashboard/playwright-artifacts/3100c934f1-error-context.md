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
          - generic [ref=e7]:
            - link "Shunya Labs Logo" [ref=e8] [cursor=pointer]:
              - /url: /
              - img "Shunya Labs Logo" [ref=e9]
            - generic [ref=e10]:
              - button "Product" [ref=e12] [cursor=pointer]:
                - text: Product
                - img [ref=e13]
              - button "Models" [ref=e16] [cursor=pointer]:
                - text: Models
                - img [ref=e17]
              - button "Solutions" [ref=e20] [cursor=pointer]:
                - text: Solutions
                - img [ref=e21]
              - button "Resources" [ref=e24] [cursor=pointer]:
                - text: Resources
                - img [ref=e25]
              - link "Documentation" [ref=e27] [cursor=pointer]:
                - /url: https://docs.shunyalabs.ai/overview
                - text: Documentation
                - img [ref=e28]
              - link "About Us" [ref=e30] [cursor=pointer]:
                - /url: /about
              - link "Pricing" [ref=e31] [cursor=pointer]:
                - /url: /pricing
          - generic [ref=e32]:
            - link "Playground" [ref=e33] [cursor=pointer]:
              - /url: https://playground.shunyalabs.ai/
              - img [ref=e34]
              - text: Playground
            - generic [ref=e36]:
              - button "Sign In" [ref=e37] [cursor=pointer]
              - link "Contact Sales" [ref=e38] [cursor=pointer]:
                - /url: /contact
      - generic [ref=e40]:
        - heading "On device speech-to-text for real-time transcription" [level=1] [ref=e41]
        - heading "Run fast, accurate speech-to-text directly on your devices with Shunya Labs’ ONNX-based English ASR model" [level=2] [ref=e42]
      - generic [ref=e44]:
        - generic [ref=e45]:
          - generic [ref=e47]:
            - img [ref=e49]
            - generic [ref=e51]:
              - heading "Offline-ready" [level=3] [ref=e52]
              - paragraph [ref=e53]: Operates without network connectivity or in low-bandwidth environments
          - generic [ref=e55]:
            - img [ref=e57]
            - generic [ref=e60]:
              - heading "Lightweight models" [level=3] [ref=e61]
              - paragraph [ref=e62]: Optimized edge architectures for resource-constrained devices
          - generic [ref=e64]:
            - img [ref=e66]
            - generic [ref=e69]:
              - heading "ONNX format" [level=3] [ref=e70]
              - paragraph [ref=e71]: Portable models deploy seamlessly across iOS, Android, Linux, and embedded systems
          - generic [ref=e73]:
            - img [ref=e75]
            - generic [ref=e77]:
              - heading "Low latency" [level=3] [ref=e78]
              - paragraph [ref=e79]: Fast local processing without round-trip delays
        - paragraph [ref=e80]: Ideal for healthcare, automotive, mobile apps, and privacy-critical use cases.
      - generic [ref=e82]:
        - heading "Tiny ONNX model, big performance" [level=2] [ref=e83]
        - generic [ref=e84]:
          - generic [ref=e85]:
            - paragraph [ref=e87]: Small enough to fit on edge devices and existing servers without a hardware refresh
            - heading "Lightweight" [level=3] [ref=e89]
          - generic [ref=e91]:
            - heading "Fast" [level=3] [ref=e93]
            - paragraph [ref=e95]: Transcribes as people speak, with sub-100 ms latency for partials
          - generic [ref=e97]:
            - paragraph [ref=e99]: Trained on high entropy data to achieve industry best 3.10% WER
            - heading "Accurate" [level=3] [ref=e101]
    - link "Contact Us" [ref=e103] [cursor=pointer]:
      - /url: contact
    - contentinfo [ref=e104]:
      - generic [ref=e105]:
        - paragraph [ref=e106]: The fastest way to add voice AI to your products
        - paragraph [ref=e107]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e108]:
          - link "Go to Pricing page" [ref=e109] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e110] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e111]:
      - generic [ref=e112]:
        - generic [ref=e113]:
          - img "Shunya Labs" [ref=e114]
          - paragraph [ref=e115]: Shunya Labs, Inc.
        - generic [ref=e116]:
          - paragraph [ref=e117]: Product
          - list [ref=e118]:
            - listitem [ref=e119]:
              - link "Overview" [ref=e120] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e121]:
              - link "Models" [ref=e122] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e123]:
              - link "Voice Agents" [ref=e124] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e125]:
              - link "Speech Intelligence" [ref=e126] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e127]:
              - link "Audio Processing" [ref=e128] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e129]:
              - link "Deployment" [ref=e130] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e131]:
          - paragraph [ref=e132]: Models
          - list [ref=e133]:
            - listitem [ref=e134]:
              - link "Language Models" [ref=e135] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e136]:
              - link "Zero STT Indic" [ref=e137] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e138]:
              - link "Zero STT Codeswitch" [ref=e139] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e140]:
              - link "Specialised Models" [ref=e141] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e142]:
              - link "Zero STT Med" [ref=e143] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e144]:
              - link "On Device Models" [ref=e145] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e146]:
          - paragraph [ref=e147]: Solutions
          - list [ref=e148]:
            - listitem [ref=e149]:
              - link "Contact Centers" [ref=e150] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e151]:
              - link "Media & Entertainment" [ref=e152] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e153]:
              - link "Healthcare" [ref=e154] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e155]:
          - paragraph [ref=e156]: Resources
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "Blogs" [ref=e159] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e160]:
              - link "Benchmarks" [ref=e161] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e162]:
              - link "News & Media" [ref=e163] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e164]:
              - link "Patents" [ref=e165] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e166]:
              - link "Research" [ref=e167] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e169]:
          - link "Documentation" [ref=e170] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e172]:
          - listitem [ref=e173]:
            - link "About us" [ref=e174] [cursor=pointer]:
              - /url: /about
        - list [ref=e176]:
          - listitem [ref=e177]:
            - link "Pricing" [ref=e178] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e179]:
        - paragraph [ref=e180]: Follow us on
        - generic [ref=e181]:
          - link [ref=e182] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e183]
          - link [ref=e185] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e186]
          - link [ref=e188] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e189]
          - link [ref=e191] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e192]
      - generic [ref=e194]:
        - paragraph [ref=e195]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e196]:
          - link "Privacy" [ref=e197] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e198] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e199] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e200] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e201] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e202]
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