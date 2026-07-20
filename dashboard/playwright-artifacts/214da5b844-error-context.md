# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-indic/design.spec.js >> Models - Zero STT Indic design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [layout] Section "Indic language transcription backed by data" background: expected rgb(0, 0, 0) but got rgb(237, 244, 248)

expect(received).toBeTruthy()

Received: null
```

```
Error: [global] Footer background: expected rgb(17, 17, 17) but got rgb(0, 0, 0)

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
Error: [content] Footer item "One platform for speech in and speech out—secure by design, built to scale." not found

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
Error: [content] Text content "One platform for speech in and speech out—secure by design, built to scale." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Page title: expected "Indic Speech-to-Text AI for Indian Languages | Shunya Labs" but got "Indic Speech-to-Text API for Indian Languages | Shunya Labs"

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 20 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 20
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
      - generic [ref=e10]:
        - generic [ref=e11]:
          - heading "Indic language transcription backed by data" [level=1] [ref=e12]
          - paragraph [ref=e13]: Get world-class speed and accuracy for major Indian languages, so your users experience natural, reliable transcription in the languages they actually speak.
        - generic [ref=e14]:
          - generic [ref=e16]:
            - heading "Hindi" [level=3] [ref=e18]
            - generic [ref=e19]:
              - paragraph [ref=e20]: Hindi ASR built for 350M+ native speakers
              - paragraph [ref=e21]: Trained on 430.6 hours of real-world audio from OpenSLR, Gramvaani, Shrutilipi, Kathbath, Vaani, and proprietary data in just 35.9 hours on dual A100 GPUs.
          - generic [ref=e24]:
            - heading "Telugu" [level=3] [ref=e26]
            - generic [ref=e27]:
              - paragraph [ref=e28]: Telugu ASR built for 80M+ native speakers
              - paragraph [ref=e29]: Trained on 110.6 hours of real-world audio from Kathbath and Google Fleurs in just 13.43 hours on dual A100 GPUs.
          - generic [ref=e32]:
            - heading "Kannada" [level=3] [ref=e34]
            - generic [ref=e35]:
              - paragraph [ref=e36]: Kannada ASR built for 40M+ native speakers
              - paragraph [ref=e37]: Trained on 90.6 hours of real-world audio from OpenSLR, Kathbath, and Vaani in just 9.9 hours on dual A100 GPUs.
          - generic [ref=e40]:
            - heading "Bengali" [level=3] [ref=e42]
            - generic [ref=e43]:
              - paragraph [ref=e44]: Bengali ASR built for 230M+ native speakers
              - paragraph [ref=e45]: Trained on 110.6 hours of real-world audio from OpenSLR, Kathbath, Vaani, and Shrutilipi in just 12.9 hours on dual A100 GPUs.
        - link "Try now" [ref=e47] [cursor=pointer]:
          - /url: /?innertab=speech-to-text#HomePageWidget
    - contentinfo [ref=e48]:
      - generic [ref=e49]:
        - paragraph [ref=e50]: The fastest way to add voice AI to your products
        - paragraph [ref=e51]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e52]:
          - link "Try for Free" [ref=e53] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e54] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e55]:
      - generic [ref=e56]:
        - generic [ref=e57]:
          - img "Shunya Labs" [ref=e58]
          - paragraph [ref=e59]: Shunya Labs, Inc.
        - generic [ref=e60]:
          - paragraph [ref=e61]: Product
          - list [ref=e62]:
            - listitem [ref=e63]:
              - link "Overview" [ref=e64] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e65]:
              - link "Models" [ref=e66] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e67]:
              - link "Voice Agents" [ref=e68] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e69]:
              - link "Speech Intelligence" [ref=e70] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e71]:
              - link "Audio Processing" [ref=e72] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e73]:
              - link "Deployment" [ref=e74] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e75]:
          - paragraph [ref=e76]: Models
          - list [ref=e77]:
            - listitem [ref=e78]:
              - link "Language Models" [ref=e79] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e80]:
              - link "Zero STT Indic" [ref=e81] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e82]:
              - link "Zero STT Codeswitch" [ref=e83] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e84]:
              - link "Specialised Models" [ref=e85] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e86]:
              - link "Zero STT Med" [ref=e87] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e88]:
              - link "On Device Models" [ref=e89] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e90]:
          - paragraph [ref=e91]: Solutions
          - list [ref=e92]:
            - listitem [ref=e93]:
              - link "Contact Centers" [ref=e94] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e95]:
              - link "Media & Entertainment" [ref=e96] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e97]:
              - link "Healthcare" [ref=e98] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e99]:
          - paragraph [ref=e100]: Resources
          - list [ref=e101]:
            - listitem [ref=e102]:
              - link "Blogs" [ref=e103] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e104]:
              - link "Benchmarks" [ref=e105] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e106]:
              - link "News & Media" [ref=e107] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e108]:
              - link "Patents" [ref=e109] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e110]:
              - link "Research" [ref=e111] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e113]:
          - link "Documentation" [ref=e114] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e116]:
          - listitem [ref=e117]:
            - link "About us" [ref=e118] [cursor=pointer]:
              - /url: /about
        - list [ref=e120]:
          - listitem [ref=e121]:
            - link "Pricing" [ref=e122] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e123]:
        - paragraph [ref=e124]: Follow us on
        - generic [ref=e125]:
          - link [ref=e126] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e127]
          - link [ref=e129] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e130]
          - link [ref=e132] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e133]
          - link [ref=e135] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e136]
      - generic [ref=e138]:
        - paragraph [ref=e139]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e140]:
          - link "Privacy" [ref=e141] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e142] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e143] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e144] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e145] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e146]
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
     |                                                                                      ^ Error: 20 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```