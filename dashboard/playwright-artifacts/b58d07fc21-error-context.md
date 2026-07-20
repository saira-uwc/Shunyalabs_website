# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/language-models/design.spec.js >> Models - Language Models design compliance >> Figma design compliance
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
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 13 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 13
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
        - heading "One API for 200+ languages and multilingual transcriptions" [level=1] [ref=e10]
        - paragraph [ref=e11]: Reach the largest possible audience in real time-without juggling multiple language APIs or wrestling with complex setup.
      - generic [ref=e12]:
        - generic [ref=e13]:
          - heading "Zero STT Indic" [level=3] [ref=e14]
          - generic [ref=e15]:
            - paragraph [ref=e16]: Superior Indic models for industry best accuracy and speed in transcribing speech in Hindi, Bengali, Kannada and Telugu.
            - link "Learn more" [ref=e17] [cursor=pointer]:
              - /url: /zero-indic
              - generic [ref=e18]: Learn more
              - img [ref=e19]
        - generic [ref=e21]:
          - heading "Zero STT Code-switch" [level=3] [ref=e22]
          - generic [ref=e23]:
            - paragraph [ref=e24]: The only model in the world that processes and returns output in mixed langauge tokens. Now available for Hinglish.
            - link "Learn more" [ref=e25] [cursor=pointer]:
              - /url: /zero-code-switch
              - generic [ref=e26]: Learn more
              - img [ref=e27]
        - generic [ref=e29]:
          - heading "Zero STT" [level=3] [ref=e30]
          - generic [ref=e31]:
            - paragraph [ref=e32]: Universal language model that supports everyday conversational speech transcription in 200+ languages.
            - link "Learn more" [ref=e33] [cursor=pointer]:
              - /url: /zero-stt
              - generic [ref=e34]: Learn more
              - img [ref=e35]
    - generic [ref=e37]:
      - generic [ref=e38]:
        - heading "Experience the magic of Shunya Labs’ code-switching transcription" [level=2] [ref=e39]
        - paragraph [ref=e40]: Shunya Labs’ code-switching ASR is the only in the world that returns native Hinglish transcripts in real time. Keep the natural flow of conversation and still get fast, accurate, mixed-language transcription.
      - img "img1" [ref=e42]
      - link "Try now" [ref=e43] [cursor=pointer]:
        - /url: /zero-code-switch
        - button "Try now" [ref=e44]
    - generic [ref=e45]:
      - generic [ref=e46]:
        - heading "Transcribe Indian languages like never before" [level=2] [ref=e47]
        - paragraph [ref=e48]: Zero Indic is purpose-built for Indian speech, delivering up to 200% better accuracy than the next-best model. Unlock world-class support for your users with reliable, real-time transcripts that keep pace with the natural rhythm of conversation.
      - img "img1" [ref=e50]
      - link "Try now" [ref=e51] [cursor=pointer]:
        - /url: /?innertab=speech-to-text#HomePageWidget
        - button "Try now" [ref=e52]
    - generic [ref=e54]:
      - paragraph [ref=e55]: One API for 200+ languages, covering 97% of the global population
      - paragraph [ref=e56]: Zero STT is the world's most accurate speech-to-text model designed to support conversational speech in 200+ languages in noisy real world scenarios with speaker overlap. Transcribe audio in sub second latency for captions that feels natural.
    - generic [ref=e60]:
      - generic: Loading world map…
    - link "See the full list of languages supported by Shunya Labs" [ref=e63] [cursor=pointer]:
      - /url: https://docs.shunyalabs.ai/get-started/supported-languages
      - text: See the full list of languages supported by Shunya Labs
      - img [ref=e64]
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
            - /url: https://docs.shunyalabs.ai/
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
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e148]
          - link [ref=e150] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e151]
          - link [ref=e153] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e154]
      - generic [ref=e156]:
        - paragraph [ref=e157]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e158]:
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
     |                                                                                      ^ Error: 13 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```