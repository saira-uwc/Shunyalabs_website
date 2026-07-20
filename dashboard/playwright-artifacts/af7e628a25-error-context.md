# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/benchmarks/design.spec.js >> Resources - Benchmarks design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [headings] Heading "Shunyalabs’ transcription leads the way — producing 48% fewer errors than the next best model." (h2) not found on page

expect(received).toBeTruthy()

Received: null
```

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
Error: [content] Page title: expected "Speech-to-Text AI Benchmarks & Accuracy | Shunya Labs" but got "Speech-to-Text Benchmarks & ASR Accuracy | Shunya Labs"

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 15 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 15
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
        - heading "Proven performance, backed by data" [level=1] [ref=e10]
        - heading "Shunyalabs’ transcription leads the way - producing 48% fewer errors than the next best model." [level=2] [ref=e11]
      - button "Book a Meeting" [ref=e13] [cursor=pointer]
      - generic [ref=e14]:
        - generic [ref=e15]:
          - heading "Highest Word Accuracy Rate" [level=2] [ref=e16]
          - img "upper" [ref=e18]
        - generic [ref=e19]:
          - generic [ref=e22]:
            - button "Tedlium Ted Talks" [ref=e23] [cursor=pointer]:
              - generic [ref=e24]:
                - text: Tedlium
                - text: Ted Talks
            - button "LibriSpeech Clean Audiobooks, Clear speech" [ref=e25] [cursor=pointer]:
              - generic [ref=e26]:
                - text: LibriSpeech Clean
                - text: Audiobooks, Clear speech
          - button [ref=e27] [cursor=pointer]:
            - img [ref=e28]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - generic:
              - generic: "100"
            - generic:
              - generic: "95"
            - generic:
              - generic: "90"
            - generic:
              - generic: "85"
            - generic [ref=e32]:
              - generic [ref=e35]:
                - generic [ref=e36]: "98.57"
                - text: "%"
              - generic [ref=e40]:
                - generic [ref=e41]: "97.29"
                - text: "%"
              - generic [ref=e45]:
                - generic [ref=e46]: "96.60"
                - text: "%"
              - generic [ref=e50]:
                - generic [ref=e51]: "97.06"
                - text: "%"
              - generic [ref=e55]:
                - generic [ref=e56]: "96.62"
                - text: "%"
              - generic [ref=e60]:
                - generic [ref=e61]: "96.88"
                - text: "%"
          - generic [ref=e63]:
            - generic [ref=e64]:
              - generic [ref=e65]: Pingala-v1-universal
              - paragraph [ref=e66]: Shunya Labs
            - generic [ref=e67]:
              - generic [ref=e68]: canary-qwen-2.5b
              - paragraph [ref=e69]: NVIDIA
            - generic [ref=e70]:
              - generic [ref=e71]: granite-speech-3.3-8b
              - paragraph [ref=e72]: IBM
            - generic [ref=e73]:
              - generic [ref=e74]: Phi-4-multimodal-instruct
              - paragraph [ref=e75]: Microsoft
            - generic [ref=e76]:
              - generic [ref=e77]: parakeet-tdt-0.6b
              - paragraph [ref=e78]: NVIDIA
            - generic [ref=e79]:
              - generic [ref=e80]: canary-1b-flash
              - paragraph [ref=e81]: NVIDIA
      - generic [ref=e82]:
        - generic [ref=e83]:
          - heading "Lowest Total Word Error Rate" [level=2] [ref=e84]
          - img "lower" [ref=e86]
        - generic [ref=e87]:
          - generic [ref=e88]:
            - generic [ref=e89]:
              - text: "3.10"
              - text: "%"
            - generic [ref=e90]:
              - text: "5.63"
              - text: "%"
            - generic [ref=e91]:
              - text: "5.74"
              - text: "%"
            - generic [ref=e92]:
              - text: "6.02"
              - text: "%"
            - generic [ref=e93]:
              - text: "6.05"
              - text: "%"
            - generic [ref=e94]:
              - text: "6.35"
              - text: "%"
          - generic [ref=e95]:
            - generic:
              - generic: "8"
            - generic:
              - generic: "6"
            - generic:
              - generic: "4"
            - generic:
              - generic: "2"
            - generic:
              - generic: "0"
          - generic [ref=e109]:
            - generic [ref=e110]:
              - generic [ref=e111]: Pingala-v1-universal
              - paragraph [ref=e112]: Shunya Labs
            - generic [ref=e113]:
              - generic [ref=e114]: canary-qwen-2.5b
              - paragraph [ref=e115]: NVIDIA
            - generic [ref=e116]:
              - generic [ref=e117]: granite-speech-3.3-8b
              - paragraph [ref=e118]: IBM
            - generic [ref=e119]:
              - generic [ref=e120]: Phi-4-multimodal-instruct
              - paragraph [ref=e121]: Microsoft
            - generic [ref=e122]:
              - generic [ref=e123]: parakeet-tdt-0.6b
              - paragraph [ref=e124]: NVIDIA
            - generic [ref=e125]:
              - generic [ref=e126]: canary-1b-flash
              - paragraph [ref=e127]: NVIDIA
      - generic [ref=e129]:
        - heading "Milestones" [level=2] [ref=e130]
        - generic [ref=e131]:
          - generic [ref=e132]:
            - paragraph [ref=e133]: 0ms
            - paragraph [ref=e134]: round-trip latency in production
          - generic [ref=e135]:
            - paragraph [ref=e136]: "0"
            - paragraph [ref=e137]: languages & dialects
        - generic [ref=e138]:
          - generic [ref=e139]:
            - paragraph [ref=e140]: 0%
            - paragraph [ref=e141]: GPU cost saved for a Fortune 100 logistics client
          - generic [ref=e142]:
            - paragraph [ref=e143]:
              - generic [ref=e144]: 0.00%
            - paragraph [ref=e145]: Word error rate
    - contentinfo [ref=e146]:
      - generic [ref=e147]:
        - paragraph [ref=e148]: The fastest way to add voice AI to your products
        - paragraph [ref=e149]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e150]:
          - link "Go to Pricing page" [ref=e151] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e152] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e153]:
      - generic [ref=e154]:
        - generic [ref=e155]:
          - img "Shunya Labs" [ref=e156]
          - paragraph [ref=e157]: Shunya Labs, Inc.
        - generic [ref=e158]:
          - paragraph [ref=e159]: Product
          - list [ref=e160]:
            - listitem [ref=e161]:
              - link "Overview" [ref=e162] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e163]:
              - link "Models" [ref=e164] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e165]:
              - link "Voice Agents" [ref=e166] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e167]:
              - link "Speech Intelligence" [ref=e168] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e169]:
              - link "Audio Processing" [ref=e170] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e171]:
              - link "Deployment" [ref=e172] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e173]:
          - paragraph [ref=e174]: Models
          - list [ref=e175]:
            - listitem [ref=e176]:
              - link "Language Models" [ref=e177] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e178]:
              - link "Zero STT Indic" [ref=e179] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e180]:
              - link "Zero STT Codeswitch" [ref=e181] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e182]:
              - link "Specialised Models" [ref=e183] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e184]:
              - link "Zero STT Med" [ref=e185] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e186]:
              - link "On Device Models" [ref=e187] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e188]:
          - paragraph [ref=e189]: Solutions
          - list [ref=e190]:
            - listitem [ref=e191]:
              - link "Contact Centers" [ref=e192] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e193]:
              - link "Media & Entertainment" [ref=e194] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e195]:
              - link "Healthcare" [ref=e196] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e197]:
          - paragraph [ref=e198]: Resources
          - list [ref=e199]:
            - listitem [ref=e200]:
              - link "Blogs" [ref=e201] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e202]:
              - link "Benchmarks" [ref=e203] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e204]:
              - link "News & Media" [ref=e205] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e206]:
              - link "Patents" [ref=e207] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e208]:
              - link "Research" [ref=e209] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e211]:
          - link "Documentation" [ref=e212] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e214]:
          - listitem [ref=e215]:
            - link "About us" [ref=e216] [cursor=pointer]:
              - /url: /about
        - list [ref=e218]:
          - listitem [ref=e219]:
            - link "Pricing" [ref=e220] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e221]:
        - paragraph [ref=e222]: Follow us on
        - generic [ref=e223]:
          - link [ref=e224] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e225]
          - link [ref=e227] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e228]
          - link [ref=e230] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e231]
          - link [ref=e233] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e234]
      - generic [ref=e236]:
        - paragraph [ref=e237]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e238]:
          - link "Privacy" [ref=e239] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e240] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e241] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e242] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e243] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e244]
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
     |                                                                                      ^ Error: 15 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```