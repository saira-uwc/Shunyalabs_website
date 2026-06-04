# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/on-device-models/design.spec.js >> Models - On Device Models design compliance >> Figma design compliance
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
              - link "About Us" [ref=e28] [cursor=pointer]:
                - /url: /about
              - link "Pricing" [ref=e29] [cursor=pointer]:
                - /url: /pricing
          - generic [ref=e30]:
            - link "Playground" [ref=e31] [cursor=pointer]:
              - /url: https://playground.shunyalabs.ai/
              - img [ref=e32]
              - text: Playground
            - generic [ref=e34]:
              - button "Sign In" [ref=e35] [cursor=pointer]
              - link "Contact Sales" [ref=e36] [cursor=pointer]:
                - /url: /contact
      - generic [ref=e38]:
        - heading "On device speech-to-text for real-time transcription" [level=1] [ref=e39]
        - heading "Run fast, accurate speech-to-text directly on your devices with Shunya Labs’ ONNX-based English ASR model" [level=2] [ref=e40]
      - generic [ref=e42]:
        - generic [ref=e43]:
          - generic [ref=e45]:
            - img [ref=e47]
            - generic [ref=e49]:
              - heading "Offline-ready" [level=3] [ref=e50]
              - paragraph [ref=e51]: Operates without network connectivity or in low-bandwidth environments
          - generic [ref=e53]:
            - img [ref=e55]
            - generic [ref=e58]:
              - heading "Lightweight models" [level=3] [ref=e59]
              - paragraph [ref=e60]: Optimized edge architectures for resource-constrained devices
          - generic [ref=e62]:
            - img [ref=e64]
            - generic [ref=e67]:
              - heading "ONNX format" [level=3] [ref=e68]
              - paragraph [ref=e69]: Portable models deploy seamlessly across iOS, Android, Linux, and embedded systems
          - generic [ref=e71]:
            - img [ref=e73]
            - generic [ref=e75]:
              - heading "Low latency" [level=3] [ref=e76]
              - paragraph [ref=e77]: Fast local processing without round-trip delays
        - paragraph [ref=e78]: Ideal for healthcare, automotive, mobile apps, and privacy-critical use cases.
      - generic [ref=e80]:
        - heading "Tiny ONNX model, big performance" [level=2] [ref=e81]
        - generic [ref=e82]:
          - generic [ref=e83]:
            - paragraph [ref=e85]: Small enough to fit on edge devices and existing servers without a hardware refresh
            - heading "Lightweight" [level=3] [ref=e87]
          - generic [ref=e89]:
            - heading "Fast" [level=3] [ref=e91]
            - paragraph [ref=e93]: Transcribes as people speak, with sub-100 ms latency for partials
          - generic [ref=e95]:
            - paragraph [ref=e97]: Trained on high entropy data to achieve industry best 3.10% WER
            - heading "Accurate" [level=3] [ref=e99]
    - link "Contact Us" [ref=e101] [cursor=pointer]:
      - /url: contact
    - contentinfo [ref=e102]:
      - generic [ref=e103]:
        - paragraph [ref=e104]: The fastest way to add voice AI to your products
        - paragraph [ref=e105]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e106]:
          - link "Go to Pricing page" [ref=e107] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e108] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e109]:
      - generic [ref=e110]:
        - generic [ref=e111]:
          - img "Shunya Labs" [ref=e112]
          - paragraph [ref=e113]: Shunya Labs, Inc.
        - generic [ref=e114]:
          - paragraph [ref=e115]: Product
          - list [ref=e116]:
            - listitem [ref=e117]:
              - link "Overview" [ref=e118] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e119]:
              - link "Models" [ref=e120] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e121]:
              - link "Voice Agents" [ref=e122] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e123]:
              - link "Speech Intelligence" [ref=e124] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e125]:
              - link "Audio Processing" [ref=e126] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e127]:
              - link "Deployment" [ref=e128] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e129]:
          - paragraph [ref=e130]: Models
          - list [ref=e131]:
            - listitem [ref=e132]:
              - link "Language Models" [ref=e133] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e134]:
              - link "Zero STT Indic" [ref=e135] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e136]:
              - link "Zero STT Codeswitch" [ref=e137] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e138]:
              - link "Specialised Models" [ref=e139] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e140]:
              - link "Zero STT Med" [ref=e141] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e142]:
              - link "On Device Models" [ref=e143] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e144]:
          - paragraph [ref=e145]: Solutions
          - list [ref=e146]:
            - listitem [ref=e147]:
              - link "Contact Centers" [ref=e148] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e149]:
              - link "Media & Entertainment" [ref=e150] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e151]:
              - link "Healthcare" [ref=e152] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e153]:
          - paragraph [ref=e154]: Resources
          - list [ref=e155]:
            - listitem [ref=e156]:
              - link "Blogs" [ref=e157] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e158]:
              - link "Benchmarks" [ref=e159] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e160]:
              - link "News & Media" [ref=e161] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e162]:
              - link "Patents" [ref=e163] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e164]:
              - link "Research" [ref=e165] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e167]:
          - link "Documentation" [ref=e168] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e170]:
          - listitem [ref=e171]:
            - link "About us" [ref=e172] [cursor=pointer]:
              - /url: /about
        - list [ref=e174]:
          - listitem [ref=e175]:
            - link "Pricing" [ref=e176] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e177]:
        - paragraph [ref=e178]: Follow us on
        - generic [ref=e179]:
          - link [ref=e180] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e181]
          - link [ref=e183] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e184]
          - link [ref=e186] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e187]
          - link [ref=e189] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e190]
      - generic [ref=e192]:
        - paragraph [ref=e193]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e194]:
          - link "Privacy" [ref=e195] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e196] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e197] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e198] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e199] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e200]
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