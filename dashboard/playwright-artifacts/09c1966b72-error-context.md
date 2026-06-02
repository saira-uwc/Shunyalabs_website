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
                - text: Documentation
                - img [ref=e27]
              - link "About Us" [ref=e29] [cursor=pointer]:
                - /url: /about
              - link "Pricing" [ref=e30] [cursor=pointer]:
                - /url: /pricing
          - generic [ref=e31]:
            - link "Playground" [ref=e32] [cursor=pointer]:
              - /url: https://playground.shunyalabs.ai/
              - img [ref=e33]
              - text: Playground
            - generic [ref=e35]:
              - button "Sign In" [ref=e36] [cursor=pointer]
              - link "Contact Sales" [ref=e37] [cursor=pointer]:
                - /url: /contact
      - generic [ref=e39]:
        - heading "Proven performance, backed by data" [level=1] [ref=e40]
        - heading "Shunyalabs’ transcription leads the way — producing 48% fewer errors than the next best model." [level=2] [ref=e41]
      - button "Book a Meeting" [ref=e43] [cursor=pointer]
      - generic [ref=e44]:
        - generic [ref=e45]:
          - heading "Highest Word Accuracy Rate" [level=2] [ref=e46]
          - img "upper" [ref=e48]
        - generic [ref=e49]:
          - generic [ref=e52]:
            - button "Tedlium Ted Talks" [ref=e53] [cursor=pointer]:
              - generic [ref=e54]:
                - text: Tedlium
                - text: Ted Talks
            - button "LibriSpeech Clean Audiobooks, Clear speech" [ref=e55] [cursor=pointer]:
              - generic [ref=e56]:
                - text: LibriSpeech Clean
                - text: Audiobooks, Clear speech
            - button "LibriSpeech Other Audiobooks, noisy audio" [ref=e57] [cursor=pointer]:
              - generic [ref=e58]:
                - text: LibriSpeech Other
                - text: Audiobooks, noisy audio
            - button "SPGISpeech Financial earnings calls" [ref=e59] [cursor=pointer]:
              - generic [ref=e60]:
                - text: SPGISpeech
                - text: Financial earnings calls
          - button [ref=e61] [cursor=pointer]:
            - img [ref=e62]
        - generic [ref=e64]:
          - generic [ref=e65]:
            - generic:
              - generic: "100"
            - generic:
              - generic: "95"
            - generic:
              - generic: "90"
            - generic:
              - generic: "85"
            - generic [ref=e66]:
              - generic [ref=e69]: 98.57%
              - generic [ref=e73]: 97.29%
              - generic [ref=e77]: 96.60%
              - generic [ref=e81]: 97.06%
              - generic [ref=e85]: 96.62%
              - generic [ref=e89]: 96.88%
          - generic [ref=e91]:
            - generic [ref=e92]:
              - generic [ref=e93]: Pingala-v1-universal
              - paragraph [ref=e94]: Shunya Labs
            - generic [ref=e95]:
              - generic [ref=e96]: canary-qwen-2.5b
              - paragraph [ref=e97]: NVIDIA
            - generic [ref=e98]:
              - generic [ref=e99]: granite-speech-3.3-8b
              - paragraph [ref=e100]: IBM
            - generic [ref=e101]:
              - generic [ref=e102]: Phi-4-multimodal-instruct
              - paragraph [ref=e103]: Microsoft
            - generic [ref=e104]:
              - generic [ref=e105]: parakeet-tdt-0.6b
              - paragraph [ref=e106]: NVIDIA
            - generic [ref=e107]:
              - generic [ref=e108]: canary-1b-flash
              - paragraph [ref=e109]: NVIDIA
      - generic [ref=e110]:
        - generic [ref=e111]:
          - heading "Lowest Total Word Error Rate" [level=2] [ref=e112]
          - img "lower" [ref=e114]
        - generic [ref=e115]:
          - generic [ref=e116]:
            - generic [ref=e117]: 3.10 %
            - generic [ref=e118]: 5.63 %
            - generic [ref=e119]: 5.74 %
            - generic [ref=e120]: 6.02 %
            - generic [ref=e121]: 6.05 %
            - generic [ref=e122]: 6.35 %
          - generic [ref=e123]:
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
          - generic [ref=e137]:
            - generic [ref=e138]:
              - generic [ref=e139]: Pingala-v1-universal
              - paragraph [ref=e140]: Shunya Labs
            - generic [ref=e141]:
              - generic [ref=e142]: canary-qwen-2.5b
              - paragraph [ref=e143]: NVIDIA
            - generic [ref=e144]:
              - generic [ref=e145]: granite-speech-3.3-8b
              - paragraph [ref=e146]: IBM
            - generic [ref=e147]:
              - generic [ref=e148]: Phi-4-multimodal-instruct
              - paragraph [ref=e149]: Microsoft
            - generic [ref=e150]:
              - generic [ref=e151]: parakeet-tdt-0.6b
              - paragraph [ref=e152]: NVIDIA
            - generic [ref=e153]:
              - generic [ref=e154]: canary-1b-flash
              - paragraph [ref=e155]: NVIDIA
      - generic [ref=e157]:
        - heading "Milestones" [level=2] [ref=e158]
        - generic [ref=e159]:
          - generic [ref=e160]:
            - paragraph [ref=e161]: 0ms
            - paragraph [ref=e162]: round-trip latency in production
          - generic [ref=e163]:
            - paragraph [ref=e164]: "0"
            - paragraph [ref=e165]: languages & dialects
        - generic [ref=e166]:
          - generic [ref=e167]:
            - paragraph [ref=e168]: 0%
            - paragraph [ref=e169]: GPU cost saved for a Fortune 100 logistics client
          - generic [ref=e170]:
            - paragraph [ref=e171]:
              - generic [ref=e172]: 0.00%
            - paragraph [ref=e173]: Word error rate
    - contentinfo [ref=e174]:
      - generic [ref=e175]:
        - paragraph [ref=e176]: The fastest way to add voice AI to your products
        - paragraph [ref=e177]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e178]:
          - link "Go to Pricing page" [ref=e179] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e180] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e181]:
      - generic [ref=e182]:
        - generic [ref=e183]:
          - img "Shunya Labs" [ref=e184]
          - paragraph [ref=e185]: Shunya Labs, Inc.
        - generic [ref=e186]:
          - paragraph [ref=e187]: Product
          - list [ref=e188]:
            - listitem [ref=e189]:
              - link "Overview" [ref=e190] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e191]:
              - link "Models" [ref=e192] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e193]:
              - link "Voice Agents" [ref=e194] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e195]:
              - link "Speech Intelligence" [ref=e196] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e197]:
              - link "Audio Processing" [ref=e198] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e199]:
              - link "Deployment" [ref=e200] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e201]:
          - paragraph [ref=e202]: Models
          - list [ref=e203]:
            - listitem [ref=e204]:
              - link "Language Models" [ref=e205] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e206]:
              - link "Zero STT Indic" [ref=e207] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e208]:
              - link "Zero STT Codeswitch" [ref=e209] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e210]:
              - link "Specialised Models" [ref=e211] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e212]:
              - link "Zero STT Med" [ref=e213] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e214]:
              - link "On Device Models" [ref=e215] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e216]:
          - paragraph [ref=e217]: Solutions
          - list [ref=e218]:
            - listitem [ref=e219]:
              - link "Contact Centers" [ref=e220] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e221]:
              - link "Media & Entertainment" [ref=e222] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e223]:
              - link "Healthcare" [ref=e224] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e225]:
          - paragraph [ref=e226]: Resources
          - list [ref=e227]:
            - listitem [ref=e228]:
              - link "Blogs" [ref=e229] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e230]:
              - link "Benchmarks" [ref=e231] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e232]:
              - link "News & Media" [ref=e233] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e234]:
              - link "Patents" [ref=e235] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e236]:
              - link "Research" [ref=e237] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e239]:
          - link "Documentation" [ref=e240] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e242]:
          - listitem [ref=e243]:
            - link "About us" [ref=e244] [cursor=pointer]:
              - /url: /about
        - list [ref=e246]:
          - listitem [ref=e247]:
            - link "Pricing" [ref=e248] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e249]:
        - paragraph [ref=e250]: Follow us on
        - generic [ref=e251]:
          - link [ref=e252] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e253]
          - link [ref=e255] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e256]
          - link [ref=e258] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e259]
          - link [ref=e261] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e262]
      - generic [ref=e264]:
        - paragraph [ref=e265]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e266]:
          - link "Privacy" [ref=e267] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e268] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e269] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e270] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e271] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e272]
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