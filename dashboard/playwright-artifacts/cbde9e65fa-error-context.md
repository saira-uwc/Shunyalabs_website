# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/benchmarks/design.spec.js >> Resources - Benchmarks design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [global] Footer background: expected rgb(255, 255, 255) but got rgb(0, 0, 0)

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "One platform for speech in and speech out-secure by design, built to scale." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "One platform for speech in and speech out-secure by design, built to scale." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "© 2026 Shunya Labs, Inc. All rights reserved." not found on page

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
          - link "Shunya Labs Logo" [ref=e6] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e7]
          - button "☰" [ref=e8] [cursor=pointer]
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
      - generic [ref=e10]:
        - heading "Proven performance, backed by data" [level=1] [ref=e11]
        - heading "Shunyalabs’ transcription leads the way — producing 48% fewer errors than the next best model." [level=2] [ref=e12]
      - button "Book a Meeting" [ref=e14] [cursor=pointer]
      - generic [ref=e15]:
        - generic [ref=e16]:
          - heading "Highest Word Accuracy Rate" [level=2] [ref=e17]
          - img "upper" [ref=e19]
        - generic [ref=e20]:
          - generic [ref=e23]:
            - button "Tedlium Ted Talks" [ref=e24] [cursor=pointer]:
              - generic [ref=e25]:
                - text: Tedlium
                - text: Ted Talks
            - button "LibriSpeech Clean Audiobooks, Clear speech" [ref=e26] [cursor=pointer]:
              - generic [ref=e27]:
                - text: LibriSpeech Clean
                - text: Audiobooks, Clear speech
          - button [ref=e28] [cursor=pointer]:
            - img [ref=e29]
        - generic [ref=e31]:
          - generic [ref=e32]:
            - generic:
              - generic: "100"
            - generic:
              - generic: "95"
            - generic:
              - generic: "90"
            - generic:
              - generic: "85"
            - generic [ref=e33]:
              - generic [ref=e36]:
                - generic [ref=e37]: "98.57"
                - text: "%"
              - generic [ref=e41]:
                - generic [ref=e42]: "97.29"
                - text: "%"
              - generic [ref=e46]:
                - generic [ref=e47]: "96.60"
                - text: "%"
              - generic [ref=e51]:
                - generic [ref=e52]: "97.06"
                - text: "%"
              - generic [ref=e56]:
                - generic [ref=e57]: "96.62"
                - text: "%"
              - generic [ref=e61]:
                - generic [ref=e62]: "96.88"
                - text: "%"
          - generic [ref=e64]:
            - generic [ref=e65]:
              - generic [ref=e66]: Pingala-v1-universal
              - paragraph [ref=e67]: Shunya Labs
            - generic [ref=e68]:
              - generic [ref=e69]: canary-qwen-2.5b
              - paragraph [ref=e70]: NVIDIA
            - generic [ref=e71]:
              - generic [ref=e72]: granite-speech-3.3-8b
              - paragraph [ref=e73]: IBM
            - generic [ref=e74]:
              - generic [ref=e75]: Phi-4-multimodal-instruct
              - paragraph [ref=e76]: Microsoft
            - generic [ref=e77]:
              - generic [ref=e78]: parakeet-tdt-0.6b
              - paragraph [ref=e79]: NVIDIA
            - generic [ref=e80]:
              - generic [ref=e81]: canary-1b-flash
              - paragraph [ref=e82]: NVIDIA
      - generic [ref=e83]:
        - generic [ref=e84]:
          - heading "Lowest Total Word Error Rate" [level=2] [ref=e85]
          - img "lower" [ref=e87]
        - generic [ref=e88]:
          - generic [ref=e89]:
            - generic [ref=e90]:
              - text: "3.10"
              - text: "%"
            - generic [ref=e91]:
              - text: "5.63"
              - text: "%"
            - generic [ref=e92]:
              - text: "5.74"
              - text: "%"
            - generic [ref=e93]:
              - text: "6.02"
              - text: "%"
            - generic [ref=e94]:
              - text: "6.05"
              - text: "%"
            - generic [ref=e95]:
              - text: "6.35"
              - text: "%"
          - generic [ref=e96]:
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
          - generic [ref=e110]:
            - generic [ref=e111]:
              - generic [ref=e112]: Pingala-v1-universal
              - paragraph [ref=e113]: Shunya Labs
            - generic [ref=e114]:
              - generic [ref=e115]: canary-qwen-2.5b
              - paragraph [ref=e116]: NVIDIA
            - generic [ref=e117]:
              - generic [ref=e118]: granite-speech-3.3-8b
              - paragraph [ref=e119]: IBM
            - generic [ref=e120]:
              - generic [ref=e121]: Phi-4-multimodal-instruct
              - paragraph [ref=e122]: Microsoft
            - generic [ref=e123]:
              - generic [ref=e124]: parakeet-tdt-0.6b
              - paragraph [ref=e125]: NVIDIA
            - generic [ref=e126]:
              - generic [ref=e127]: canary-1b-flash
              - paragraph [ref=e128]: NVIDIA
      - generic [ref=e130]:
        - heading "Milestones" [level=2] [ref=e131]
        - generic [ref=e132]:
          - generic [ref=e133]:
            - paragraph [ref=e134]: 0ms
            - paragraph [ref=e135]: round-trip latency in production
          - generic [ref=e136]:
            - paragraph [ref=e137]: "0"
            - paragraph [ref=e138]: languages & dialects
        - generic [ref=e139]:
          - generic [ref=e140]:
            - paragraph [ref=e141]: 0%
            - paragraph [ref=e142]: GPU cost saved for a Fortune 100 logistics client
          - generic [ref=e143]:
            - paragraph [ref=e144]:
              - generic [ref=e145]: 0.00%
            - paragraph [ref=e146]: Word error rate
    - contentinfo [ref=e147]:
      - generic [ref=e151]:
        - paragraph [ref=e152]: The fastest way to add voice AI to your products
        - paragraph [ref=e153]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e154]:
          - link "Go to Pricing page" [ref=e155] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e156] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e157]:
      - generic [ref=e158]:
        - generic [ref=e159]:
          - img "Shunya Labs" [ref=e160]
          - paragraph [ref=e161]: Shunya Labs, Inc.
        - generic [ref=e162]:
          - paragraph [ref=e163]: Product
          - list [ref=e164]:
            - listitem [ref=e165]:
              - link "Overview" [ref=e166] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e167]:
              - link "Models" [ref=e168] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e169]:
              - link "Voice Agents" [ref=e170] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e171]:
              - link "Speech Intelligence" [ref=e172] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e173]:
              - link "Audio Processing" [ref=e174] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e175]:
              - link "Deployment" [ref=e176] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e177]:
          - paragraph [ref=e178]: Models
          - list [ref=e179]:
            - listitem [ref=e180]:
              - link "Language Models" [ref=e181] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e182]:
              - link "Zero STT Indic" [ref=e183] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e184]:
              - link "Zero STT Codeswitch" [ref=e185] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e186]:
              - link "Specialised Models" [ref=e187] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e188]:
              - link "Zero STT Med" [ref=e189] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e190]:
              - link "On Device Models" [ref=e191] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e192]:
          - paragraph [ref=e193]: Solutions
          - list [ref=e194]:
            - listitem [ref=e195]:
              - link "Contact Centers" [ref=e196] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e197]:
              - link "Media & Entertainment" [ref=e198] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e199]:
              - link "Healthcare" [ref=e200] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e201]:
          - paragraph [ref=e202]: Resources
          - list [ref=e203]:
            - listitem [ref=e204]:
              - link "Blogs" [ref=e205] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e206]:
              - link "Benchmarks" [ref=e207] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e208]:
              - link "News & Media" [ref=e209] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e210]:
              - link "Patents" [ref=e211] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e212]:
              - link "Research" [ref=e213] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e215]:
          - link "Documentation" [ref=e216] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e218]:
          - listitem [ref=e219]:
            - link "About us" [ref=e220] [cursor=pointer]:
              - /url: /about
        - list [ref=e222]:
          - listitem [ref=e223]:
            - link "Pricing" [ref=e224] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e225]:
        - paragraph [ref=e226]: Follow us on
        - generic [ref=e227]:
          - link [ref=e228] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e229]
          - link [ref=e231] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e232]
          - link [ref=e234] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e235]
          - link [ref=e237] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e238]
      - generic [ref=e240]:
        - paragraph [ref=e241]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e242]:
          - link "Privacy" [ref=e243] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e244] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e245] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e246] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e247] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e248]
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