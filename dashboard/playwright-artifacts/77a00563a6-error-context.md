# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-med/design.spec.js >> Models - Zero STT Med design compliance >> Figma design compliance
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
Error: [content] Page title: expected "Zero Med Medical Speech-to-Text AI | Shunya Labs" but got "Medical Speech-to-Text API for Clinical Audio | Shunya Labs"

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 14 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 14
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - banner:
        - generic [ref=e4]:
          - link "Shunya Labs Logo" [ref=e5] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e6]
          - button "Open menu" [ref=e7] [cursor=pointer]: ☰
      - generic [ref=e9]:
        - generic [ref=e10]:
          - heading "Transform complex clinical conversations into precise documentation" [level=1] [ref=e11]
          - paragraph [ref=e12]: Zero Med delivers 11.1% WER and 5.1% CER on noisy, multi-speaker medical audio, trained on specialized medical data to ensure critical terminology is captured correctly every time.
        - iframe [ref=e16]:
          - generic [active]:
            - generic:
              - generic:
                - generic:
                  - main
            - alert [ref=f2e1]
        - link "Get Zero STT Med API now" [ref=e18] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/asr/models
    - generic [ref=e20]:
      - heading "Speech recognition built for healthcare" [level=2] [ref=e21]
      - paragraph [ref=e22]: Reduce administrative burden and improve accuracy-so healthcare professionals can focus more on patient care.
      - generic [ref=e23]:
        - generic [ref=e24]:
          - heading "Accurate Real-Time Transcripts" [level=3] [ref=e25]
          - paragraph [ref=e26]: Delivers 11.1% WER and 5.1% CER on challenging medical audio with real-time processing. Purpose-built for clinical environments where every word matters.
        - generic [ref=e27]:
          - heading "Clinical Terminology Precision" [level=3] [ref=e28]
          - paragraph [ref=e29]: Specialized training on clinical conversations ensures accurate capture of complex medical terms-from rare drug names to procedural terminology that generic models miss.
        - generic [ref=e30]:
          - heading "Language Support" [level=3] [ref=e31]
          - paragraph [ref=e32]: Processes speech in real hospital environments-handling background noise, equipment sounds, and overlapping conversations across English, Japanese, and Korean, with more languages coming soon.
      - link "Contact Us" [ref=e34] [cursor=pointer]:
        - /url: /contact
    - contentinfo [ref=e35]:
      - generic [ref=e36]:
        - paragraph [ref=e37]: The fastest way to add voice AI to your products
        - paragraph [ref=e38]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e39]:
          - link "Go to Pricing page" [ref=e40] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e41] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e42]:
      - generic [ref=e43]:
        - generic [ref=e44]:
          - img "Shunya Labs" [ref=e45]
          - paragraph [ref=e46]: Shunya Labs, Inc.
        - generic [ref=e47]:
          - paragraph [ref=e48]: Product
          - list [ref=e49]:
            - listitem [ref=e50]:
              - link "Overview" [ref=e51] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e52]:
              - link "Models" [ref=e53] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e54]:
              - link "Voice Agents" [ref=e55] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e56]:
              - link "Speech Intelligence" [ref=e57] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e58]:
              - link "Audio Processing" [ref=e59] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e60]:
              - link "Deployment" [ref=e61] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e62]:
          - paragraph [ref=e63]: Models
          - list [ref=e64]:
            - listitem [ref=e65]:
              - link "Language Models" [ref=e66] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e67]:
              - link "Zero STT Indic" [ref=e68] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e69]:
              - link "Zero STT Codeswitch" [ref=e70] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e71]:
              - link "Specialised Models" [ref=e72] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e73]:
              - link "Zero STT Med" [ref=e74] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e75]:
              - link "On Device Models" [ref=e76] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e77]:
          - paragraph [ref=e78]: Solutions
          - list [ref=e79]:
            - listitem [ref=e80]:
              - link "Contact Centers" [ref=e81] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e82]:
              - link "Media & Entertainment" [ref=e83] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e84]:
              - link "Healthcare" [ref=e85] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e86]:
          - paragraph [ref=e87]: Resources
          - list [ref=e88]:
            - listitem [ref=e89]:
              - link "Blogs" [ref=e90] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e91]:
              - link "Benchmarks" [ref=e92] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e93]:
              - link "News & Media" [ref=e94] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e95]:
              - link "Patents" [ref=e96] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e97]:
              - link "Research" [ref=e98] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e100]:
          - link "Documentation" [ref=e101] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e103]:
          - listitem [ref=e104]:
            - link "About us" [ref=e105] [cursor=pointer]:
              - /url: /about
        - list [ref=e107]:
          - listitem [ref=e108]:
            - link "Pricing" [ref=e109] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e110]:
        - paragraph [ref=e111]: Follow us on
        - generic [ref=e112]:
          - link [ref=e113] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e114]
          - link [ref=e116] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e117]
          - link [ref=e119] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e120]
          - link [ref=e122] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e123]
      - generic [ref=e125]:
        - paragraph [ref=e126]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e127]:
          - link "Privacy" [ref=e128] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e129] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e130] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e131] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e132] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e133]
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
     |                                                                                      ^ Error: 14 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```