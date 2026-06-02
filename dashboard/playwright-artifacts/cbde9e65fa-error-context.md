# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/benchmarks/design.spec.js >> Resources - Benchmarks design compliance >> Figma design compliance
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
  - generic [ref=e2]:
    - generic [ref=e3]:
      - navigation [ref=e4]:
        - generic [ref=e5]:
          - link "Shunya Labs Logo" [ref=e7] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e8]
          - button "☰" [ref=e9] [cursor=pointer]
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
      - generic [ref=e11]:
        - heading "Proven performance, backed by data" [level=1] [ref=e12]
        - heading "Shunyalabs’ transcription leads the way — producing 48% fewer errors than the next best model." [level=2] [ref=e13]
      - button "Book a Meeting" [ref=e15] [cursor=pointer]
      - generic [ref=e16]:
        - generic [ref=e17]:
          - heading "Highest Word Accuracy Rate" [level=2] [ref=e18]
          - img "upper" [ref=e20]
        - generic [ref=e21]:
          - generic [ref=e24]:
            - button "Tedlium Ted Talks" [ref=e25] [cursor=pointer]:
              - generic [ref=e26]:
                - text: Tedlium
                - text: Ted Talks
            - button "LibriSpeech Clean Audiobooks, Clear speech" [ref=e27] [cursor=pointer]:
              - generic [ref=e28]:
                - text: LibriSpeech Clean
                - text: Audiobooks, Clear speech
          - button [ref=e29] [cursor=pointer]:
            - img [ref=e30]
        - generic [ref=e32]:
          - generic [ref=e33]:
            - generic:
              - generic: "100"
            - generic:
              - generic: "95"
            - generic:
              - generic: "90"
            - generic:
              - generic: "85"
            - generic [ref=e34]:
              - generic [ref=e37]:
                - generic [ref=e38]: "98.57"
                - text: "%"
              - generic [ref=e42]:
                - generic [ref=e43]: "97.29"
                - text: "%"
              - generic [ref=e47]:
                - generic [ref=e48]: "96.60"
                - text: "%"
              - generic [ref=e52]:
                - generic [ref=e53]: "97.06"
                - text: "%"
              - generic [ref=e57]:
                - generic [ref=e58]: "96.62"
                - text: "%"
              - generic [ref=e62]:
                - generic [ref=e63]: "96.88"
                - text: "%"
          - generic [ref=e65]:
            - generic [ref=e66]:
              - generic [ref=e67]: Pingala-v1-universal
              - paragraph [ref=e68]: Shunya Labs
            - generic [ref=e69]:
              - generic [ref=e70]: canary-qwen-2.5b
              - paragraph [ref=e71]: NVIDIA
            - generic [ref=e72]:
              - generic [ref=e73]: granite-speech-3.3-8b
              - paragraph [ref=e74]: IBM
            - generic [ref=e75]:
              - generic [ref=e76]: Phi-4-multimodal-instruct
              - paragraph [ref=e77]: Microsoft
            - generic [ref=e78]:
              - generic [ref=e79]: parakeet-tdt-0.6b
              - paragraph [ref=e80]: NVIDIA
            - generic [ref=e81]:
              - generic [ref=e82]: canary-1b-flash
              - paragraph [ref=e83]: NVIDIA
      - generic [ref=e84]:
        - generic [ref=e85]:
          - heading "Lowest Total Word Error Rate" [level=2] [ref=e86]
          - img "lower" [ref=e88]
        - generic [ref=e89]:
          - generic [ref=e90]:
            - generic [ref=e91]:
              - text: "3.10"
              - text: "%"
            - generic [ref=e92]:
              - text: "5.63"
              - text: "%"
            - generic [ref=e93]:
              - text: "5.74"
              - text: "%"
            - generic [ref=e94]:
              - text: "6.02"
              - text: "%"
            - generic [ref=e95]:
              - text: "6.05"
              - text: "%"
            - generic [ref=e96]:
              - text: "6.35"
              - text: "%"
          - generic [ref=e97]:
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
          - generic [ref=e111]:
            - generic [ref=e112]:
              - generic [ref=e113]: Pingala-v1-universal
              - paragraph [ref=e114]: Shunya Labs
            - generic [ref=e115]:
              - generic [ref=e116]: canary-qwen-2.5b
              - paragraph [ref=e117]: NVIDIA
            - generic [ref=e118]:
              - generic [ref=e119]: granite-speech-3.3-8b
              - paragraph [ref=e120]: IBM
            - generic [ref=e121]:
              - generic [ref=e122]: Phi-4-multimodal-instruct
              - paragraph [ref=e123]: Microsoft
            - generic [ref=e124]:
              - generic [ref=e125]: parakeet-tdt-0.6b
              - paragraph [ref=e126]: NVIDIA
            - generic [ref=e127]:
              - generic [ref=e128]: canary-1b-flash
              - paragraph [ref=e129]: NVIDIA
      - generic [ref=e131]:
        - heading "Milestones" [level=2] [ref=e132]
        - generic [ref=e133]:
          - generic [ref=e134]:
            - paragraph [ref=e135]: 0ms
            - paragraph [ref=e136]: round-trip latency in production
          - generic [ref=e137]:
            - paragraph [ref=e138]: "0"
            - paragraph [ref=e139]: languages & dialects
        - generic [ref=e140]:
          - generic [ref=e141]:
            - paragraph [ref=e142]: 0%
            - paragraph [ref=e143]: GPU cost saved for a Fortune 100 logistics client
          - generic [ref=e144]:
            - paragraph [ref=e145]:
              - generic [ref=e146]: 0.00%
            - paragraph [ref=e147]: Word error rate
    - contentinfo [ref=e148]:
      - generic [ref=e149]:
        - paragraph [ref=e150]: The fastest way to add voice AI to your products
        - paragraph [ref=e151]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e152]:
          - link "Go to Pricing page" [ref=e153] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e154] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e155]:
      - generic [ref=e156]:
        - generic [ref=e157]:
          - img "Shunya Labs" [ref=e158]
          - paragraph [ref=e159]: Shunya Labs, Inc.
        - generic [ref=e160]:
          - paragraph [ref=e161]: Product
          - list [ref=e162]:
            - listitem [ref=e163]:
              - link "Overview" [ref=e164] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e165]:
              - link "Models" [ref=e166] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e167]:
              - link "Voice Agents" [ref=e168] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e169]:
              - link "Speech Intelligence" [ref=e170] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e171]:
              - link "Audio Processing" [ref=e172] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e173]:
              - link "Deployment" [ref=e174] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e175]:
          - paragraph [ref=e176]: Models
          - list [ref=e177]:
            - listitem [ref=e178]:
              - link "Language Models" [ref=e179] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e180]:
              - link "Zero STT Indic" [ref=e181] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e182]:
              - link "Zero STT Codeswitch" [ref=e183] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e184]:
              - link "Specialised Models" [ref=e185] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e186]:
              - link "Zero STT Med" [ref=e187] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e188]:
              - link "On Device Models" [ref=e189] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e190]:
          - paragraph [ref=e191]: Solutions
          - list [ref=e192]:
            - listitem [ref=e193]:
              - link "Contact Centers" [ref=e194] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e195]:
              - link "Media & Entertainment" [ref=e196] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e197]:
              - link "Healthcare" [ref=e198] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e199]:
          - paragraph [ref=e200]: Resources
          - list [ref=e201]:
            - listitem [ref=e202]:
              - link "Blogs" [ref=e203] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e204]:
              - link "Benchmarks" [ref=e205] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e206]:
              - link "News & Media" [ref=e207] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e208]:
              - link "Patents" [ref=e209] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e210]:
              - link "Research" [ref=e211] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e213]:
          - link "Documentation" [ref=e214] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e216]:
          - listitem [ref=e217]:
            - link "About us" [ref=e218] [cursor=pointer]:
              - /url: /about
        - list [ref=e220]:
          - listitem [ref=e221]:
            - link "Pricing" [ref=e222] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e223]:
        - paragraph [ref=e224]: Follow us on
        - generic [ref=e225]:
          - link [ref=e226] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e227]
          - link [ref=e229] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e230]
          - link [ref=e232] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e233]
          - link [ref=e235] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e236]
      - generic [ref=e238]:
        - paragraph [ref=e239]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e240]:
          - link "Privacy" [ref=e241] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e242] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e243] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e244] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e245] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e246]
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