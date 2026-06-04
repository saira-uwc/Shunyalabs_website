# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/benchmarks/design.spec.js >> Resources - Benchmarks design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Text content "0.59%" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "0.59%" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 2 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 2
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
              - link "About Us" [ref=e27] [cursor=pointer]:
                - /url: /about
              - link "Pricing" [ref=e28] [cursor=pointer]:
                - /url: /pricing
          - generic [ref=e29]:
            - link "Playground" [ref=e30] [cursor=pointer]:
              - /url: https://playground.shunyalabs.ai/
              - img [ref=e31]
              - text: Playground
            - generic [ref=e33]:
              - button "Sign In" [ref=e34] [cursor=pointer]
              - link "Contact Sales" [ref=e35] [cursor=pointer]:
                - /url: /contact
      - generic [ref=e37]:
        - heading "Proven performance, backed by data" [level=1] [ref=e38]
        - heading "Shunyalabs’ transcription leads the way — producing 48% fewer errors than the next best model." [level=2] [ref=e39]
      - button "Book a Meeting" [ref=e41] [cursor=pointer]
      - generic [ref=e42]:
        - generic [ref=e43]:
          - heading "Highest Word Accuracy Rate" [level=2] [ref=e44]
          - img "upper" [ref=e46]
        - generic [ref=e47]:
          - generic [ref=e50]:
            - button "Tedlium Ted Talks" [ref=e51] [cursor=pointer]:
              - generic [ref=e52]:
                - text: Tedlium
                - text: Ted Talks
            - button "LibriSpeech Clean Audiobooks, Clear speech" [ref=e53] [cursor=pointer]:
              - generic [ref=e54]:
                - text: LibriSpeech Clean
                - text: Audiobooks, Clear speech
            - button "LibriSpeech Other Audiobooks, noisy audio" [ref=e55] [cursor=pointer]:
              - generic [ref=e56]:
                - text: LibriSpeech Other
                - text: Audiobooks, noisy audio
            - button "SPGISpeech Financial earnings calls" [ref=e57] [cursor=pointer]:
              - generic [ref=e58]:
                - text: SPGISpeech
                - text: Financial earnings calls
          - button [ref=e59] [cursor=pointer]:
            - img [ref=e60]
        - generic [ref=e62]:
          - generic [ref=e63]:
            - generic:
              - generic: "100"
            - generic:
              - generic: "95"
            - generic:
              - generic: "90"
            - generic:
              - generic: "85"
            - generic [ref=e64]:
              - generic [ref=e67]: 98.57%
              - generic [ref=e71]: 97.29%
              - generic [ref=e75]: 96.60%
              - generic [ref=e79]: 97.06%
              - generic [ref=e83]: 96.62%
              - generic [ref=e87]: 96.88%
          - generic [ref=e89]:
            - generic [ref=e90]:
              - generic [ref=e91]: Pingala-v1-universal
              - paragraph [ref=e92]: Shunya Labs
            - generic [ref=e93]:
              - generic [ref=e94]: canary-qwen-2.5b
              - paragraph [ref=e95]: NVIDIA
            - generic [ref=e96]:
              - generic [ref=e97]: granite-speech-3.3-8b
              - paragraph [ref=e98]: IBM
            - generic [ref=e99]:
              - generic [ref=e100]: Phi-4-multimodal-instruct
              - paragraph [ref=e101]: Microsoft
            - generic [ref=e102]:
              - generic [ref=e103]: parakeet-tdt-0.6b
              - paragraph [ref=e104]: NVIDIA
            - generic [ref=e105]:
              - generic [ref=e106]: canary-1b-flash
              - paragraph [ref=e107]: NVIDIA
      - generic [ref=e108]:
        - generic [ref=e109]:
          - heading "Lowest Total Word Error Rate" [level=2] [ref=e110]
          - img "lower" [ref=e112]
        - generic [ref=e113]:
          - generic [ref=e114]:
            - generic [ref=e115]: 3.10 %
            - generic [ref=e116]: 5.63 %
            - generic [ref=e117]: 5.74 %
            - generic [ref=e118]: 6.02 %
            - generic [ref=e119]: 6.05 %
            - generic [ref=e120]: 6.35 %
          - generic [ref=e121]:
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
          - generic [ref=e135]:
            - generic [ref=e136]:
              - generic [ref=e137]: Pingala-v1-universal
              - paragraph [ref=e138]: Shunya Labs
            - generic [ref=e139]:
              - generic [ref=e140]: canary-qwen-2.5b
              - paragraph [ref=e141]: NVIDIA
            - generic [ref=e142]:
              - generic [ref=e143]: granite-speech-3.3-8b
              - paragraph [ref=e144]: IBM
            - generic [ref=e145]:
              - generic [ref=e146]: Phi-4-multimodal-instruct
              - paragraph [ref=e147]: Microsoft
            - generic [ref=e148]:
              - generic [ref=e149]: parakeet-tdt-0.6b
              - paragraph [ref=e150]: NVIDIA
            - generic [ref=e151]:
              - generic [ref=e152]: canary-1b-flash
              - paragraph [ref=e153]: NVIDIA
      - generic [ref=e155]:
        - heading "Milestones" [level=2] [ref=e156]
        - generic [ref=e157]:
          - generic [ref=e158]:
            - paragraph [ref=e159]: 0ms
            - paragraph [ref=e160]: round-trip latency in production
          - generic [ref=e161]:
            - paragraph [ref=e162]: "0"
            - paragraph [ref=e163]: languages & dialects
        - generic [ref=e164]:
          - generic [ref=e165]:
            - paragraph [ref=e166]: 41%
            - paragraph [ref=e167]: GPU cost saved for a Fortune 100 logistics client
          - generic [ref=e168]:
            - paragraph [ref=e169]:
              - generic [ref=e170]: 1.39%
            - paragraph [ref=e171]: Word error rate
    - contentinfo [ref=e172]:
      - generic [ref=e173]:
        - paragraph [ref=e174]: The fastest way to add voice AI to your products
        - paragraph [ref=e175]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e176]:
          - link "Go to Pricing page" [ref=e177] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e178] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e179]:
      - generic [ref=e180]:
        - generic [ref=e181]:
          - img "Shunya Labs" [ref=e182]
          - paragraph [ref=e183]: Shunya Labs, Inc.
        - generic [ref=e184]:
          - paragraph [ref=e185]: Product
          - list [ref=e186]:
            - listitem [ref=e187]:
              - link "Overview" [ref=e188] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e189]:
              - link "Models" [ref=e190] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e191]:
              - link "Voice Agents" [ref=e192] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e193]:
              - link "Speech Intelligence" [ref=e194] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e195]:
              - link "Audio Processing" [ref=e196] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e197]:
              - link "Deployment" [ref=e198] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e199]:
          - paragraph [ref=e200]: Models
          - list [ref=e201]:
            - listitem [ref=e202]:
              - link "Language Models" [ref=e203] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e204]:
              - link "Zero STT Indic" [ref=e205] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e206]:
              - link "Zero STT Codeswitch" [ref=e207] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e208]:
              - link "Specialised Models" [ref=e209] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e210]:
              - link "Zero STT Med" [ref=e211] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e212]:
              - link "On Device Models" [ref=e213] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e214]:
          - paragraph [ref=e215]: Solutions
          - list [ref=e216]:
            - listitem [ref=e217]:
              - link "Contact Centers" [ref=e218] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e219]:
              - link "Media & Entertainment" [ref=e220] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e221]:
              - link "Healthcare" [ref=e222] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e223]:
          - paragraph [ref=e224]: Resources
          - list [ref=e225]:
            - listitem [ref=e226]:
              - link "Blogs" [ref=e227] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e228]:
              - link "Benchmarks" [ref=e229] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e230]:
              - link "News & Media" [ref=e231] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e232]:
              - link "Patents" [ref=e233] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e234]:
              - link "Research" [ref=e235] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e237]:
          - link "Documentation" [ref=e238] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e240]:
          - listitem [ref=e241]:
            - link "About us" [ref=e242] [cursor=pointer]:
              - /url: /about
        - list [ref=e244]:
          - listitem [ref=e245]:
            - link "Pricing" [ref=e246] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e247]:
        - paragraph [ref=e248]: Follow us on
        - generic [ref=e249]:
          - link [ref=e250] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e251]
          - link [ref=e253] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e254]
          - link [ref=e256] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e257]
          - link [ref=e259] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e260]
      - generic [ref=e262]:
        - paragraph [ref=e263]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e264]:
          - link "Privacy" [ref=e265] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e266] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e267] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e268] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e269] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e270]
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
     |                                                                                      ^ Error: 2 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```