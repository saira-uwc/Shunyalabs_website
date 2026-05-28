# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/benchmarks/design.spec.js >> Resources - Benchmarks design compliance >> Figma design compliance
- Location: tests/modules/resources/benchmarks/design.spec.js:13:3

# Error details

```
Error: [content] Page title: expected "Speech-to-Text AI Benchmarks & Accuracy Results | Shunya Labs" but got "Speech-to-Text AI Benchmarks & Accuracy | Shunya Labs"

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
  - generic [ref=e2]:
    - generic [ref=e3]:
      - navigation [ref=e4]:
        - generic [ref=e5]:
          - link "Shunya Labs Logo" [ref=e6] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e7]
          - generic [ref=e8]:
            - button "Product" [ref=e10] [cursor=pointer]:
              - text: Product
              - img [ref=e11]
            - button "Models" [ref=e14] [cursor=pointer]:
              - text: Models
              - img [ref=e15]
            - button "Solutions" [ref=e18] [cursor=pointer]:
              - text: Solutions
              - img [ref=e19]
            - button "Resources" [ref=e22] [cursor=pointer]:
              - text: Resources
              - img [ref=e23]
            - link "Documentation" [ref=e25] [cursor=pointer]:
              - /url: https://docs.shunyalabs.ai/overview
            - link "About Us" [ref=e26] [cursor=pointer]:
              - /url: /about
            - link "Pricing" [ref=e27] [cursor=pointer]:
              - /url: /pricing
          - link "Playground" [ref=e28] [cursor=pointer]:
            - /url: https://playground.shunyalabs.ai/
            - img [ref=e29]
            - text: Playground
          - generic [ref=e31]:
            - button "Sign In" [ref=e32] [cursor=pointer]
            - link "Contact Sales" [ref=e33] [cursor=pointer]:
              - /url: /contact
      - generic [ref=e35]:
        - heading "Proven performance, backed by data" [level=1] [ref=e36]
        - heading "Shunyalabs’ transcription leads the way — producing 48% fewer errors than the next best model." [level=2] [ref=e37]
      - button "Book a Meeting" [ref=e39] [cursor=pointer]
      - generic [ref=e40]:
        - generic [ref=e41]:
          - heading "Highest Word Accuracy Rate" [level=2] [ref=e42]
          - img "upper" [ref=e44]
        - generic [ref=e45]:
          - generic [ref=e48]:
            - button "Tedlium Ted Talks" [ref=e49] [cursor=pointer]:
              - generic [ref=e50]:
                - text: Tedlium
                - text: Ted Talks
            - button "LibriSpeech Clean Audiobooks, Clear speech" [ref=e51] [cursor=pointer]:
              - generic [ref=e52]:
                - text: LibriSpeech Clean
                - text: Audiobooks, Clear speech
            - button "LibriSpeech Other Audiobooks, noisy audio" [ref=e53] [cursor=pointer]:
              - generic [ref=e54]:
                - text: LibriSpeech Other
                - text: Audiobooks, noisy audio
            - button "SPGISpeech Financial earnings calls" [ref=e55] [cursor=pointer]:
              - generic [ref=e56]:
                - text: SPGISpeech
                - text: Financial earnings calls
          - button [ref=e57] [cursor=pointer]:
            - img [ref=e58]
        - generic [ref=e60]:
          - generic [ref=e61]:
            - generic:
              - generic: "100"
            - generic:
              - generic: "95"
            - generic:
              - generic: "90"
            - generic:
              - generic: "85"
            - generic [ref=e62]:
              - generic [ref=e65]: 98.57%
              - generic [ref=e69]: 97.29%
              - generic [ref=e73]: 96.60%
              - generic [ref=e77]: 97.06%
              - generic [ref=e81]: 96.62%
              - generic [ref=e85]: 96.88%
          - generic [ref=e87]:
            - generic [ref=e88]:
              - generic [ref=e89]: Pingala-v1-universal
              - paragraph [ref=e90]: Shunya Labs
            - generic [ref=e91]:
              - generic [ref=e92]: canary-qwen-2.5b
              - paragraph [ref=e93]: NVIDIA
            - generic [ref=e94]:
              - generic [ref=e95]: granite-speech-3.3-8b
              - paragraph [ref=e96]: IBM
            - generic [ref=e97]:
              - generic [ref=e98]: Phi-4-multimodal-instruct
              - paragraph [ref=e99]: Microsoft
            - generic [ref=e100]:
              - generic [ref=e101]: parakeet-tdt-0.6b
              - paragraph [ref=e102]: NVIDIA
            - generic [ref=e103]:
              - generic [ref=e104]: canary-1b-flash
              - paragraph [ref=e105]: NVIDIA
      - generic [ref=e106]:
        - generic [ref=e107]:
          - heading "Lowest Total Word Error Rate" [level=2] [ref=e108]
          - img "lower" [ref=e110]
        - generic [ref=e111]:
          - generic [ref=e112]:
            - generic [ref=e113]: 3.10 %
            - generic [ref=e114]: 5.63 %
            - generic [ref=e115]: 5.74 %
            - generic [ref=e116]: 6.02 %
            - generic [ref=e117]: 6.05 %
            - generic [ref=e118]: 6.35 %
          - generic [ref=e119]:
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
          - generic [ref=e133]:
            - generic [ref=e134]:
              - generic [ref=e135]: Pingala-v1-universal
              - paragraph [ref=e136]: Shunya Labs
            - generic [ref=e137]:
              - generic [ref=e138]: canary-qwen-2.5b
              - paragraph [ref=e139]: NVIDIA
            - generic [ref=e140]:
              - generic [ref=e141]: granite-speech-3.3-8b
              - paragraph [ref=e142]: IBM
            - generic [ref=e143]:
              - generic [ref=e144]: Phi-4-multimodal-instruct
              - paragraph [ref=e145]: Microsoft
            - generic [ref=e146]:
              - generic [ref=e147]: parakeet-tdt-0.6b
              - paragraph [ref=e148]: NVIDIA
            - generic [ref=e149]:
              - generic [ref=e150]: canary-1b-flash
              - paragraph [ref=e151]: NVIDIA
      - generic [ref=e153]:
        - heading "Milestones" [level=2] [ref=e154]
        - generic [ref=e155]:
          - generic [ref=e156]:
            - paragraph [ref=e157]: 0ms
            - paragraph [ref=e158]: round-trip latency in production
          - generic [ref=e159]:
            - paragraph [ref=e160]: "0"
            - paragraph [ref=e161]: languages & dialects
        - generic [ref=e162]:
          - generic [ref=e163]:
            - paragraph [ref=e164]: 0%
            - paragraph [ref=e165]: GPU cost saved for a Fortune 100 logistics client
          - generic [ref=e166]:
            - paragraph [ref=e167]:
              - generic [ref=e168]: 0.00%
            - paragraph [ref=e169]: Word error rate
    - contentinfo [ref=e170]:
      - generic [ref=e174]:
        - paragraph [ref=e175]: The fastest way to add voice AI to your products
        - paragraph [ref=e176]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e177]:
          - link "Go to Pricing page" [ref=e178] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e179] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e180]:
      - generic [ref=e181]:
        - generic [ref=e182]:
          - img "Shunya Labs" [ref=e183]
          - paragraph [ref=e184]: Shunya Labs, Inc.
        - generic [ref=e185]:
          - paragraph [ref=e186]: Product
          - list [ref=e187]:
            - listitem [ref=e188]:
              - link "Overview" [ref=e189] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e190]:
              - link "Models" [ref=e191] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e192]:
              - link "Voice Agents" [ref=e193] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e194]:
              - link "Speech Intelligence" [ref=e195] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e196]:
              - link "Audio Processing" [ref=e197] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e198]:
              - link "Deployment" [ref=e199] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e200]:
          - paragraph [ref=e201]: Models
          - list [ref=e202]:
            - listitem [ref=e203]:
              - link "Language Models" [ref=e204] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e205]:
              - link "Zero STT Indic" [ref=e206] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e207]:
              - link "Zero STT Codeswitch" [ref=e208] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e209]:
              - link "Specialised Models" [ref=e210] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e211]:
              - link "Zero STT Med" [ref=e212] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e213]:
              - link "On Device Models" [ref=e214] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e215]:
          - paragraph [ref=e216]: Solutions
          - list [ref=e217]:
            - listitem [ref=e218]:
              - link "Contact Centers" [ref=e219] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e220]:
              - link "Media & Entertainment" [ref=e221] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e222]:
              - link "Healthcare" [ref=e223] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e224]:
          - paragraph [ref=e225]: Resources
          - list [ref=e226]:
            - listitem [ref=e227]:
              - link "Blogs" [ref=e228] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e229]:
              - link "Benchmarks" [ref=e230] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e231]:
              - link "News & Media" [ref=e232] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e233]:
              - link "Patents" [ref=e234] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e235]:
              - link "Research" [ref=e236] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e238]:
          - link "Documentation" [ref=e239] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e241]:
          - listitem [ref=e242]:
            - link "About us" [ref=e243] [cursor=pointer]:
              - /url: /about
        - list [ref=e245]:
          - listitem [ref=e246]:
            - link "Pricing" [ref=e247] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e248]:
        - paragraph [ref=e249]: Follow us on
        - generic [ref=e250]:
          - link [ref=e251] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e252]
          - link [ref=e254] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e255]
          - link [ref=e257] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e258]
          - link [ref=e260] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e261]
      - generic [ref=e263]:
        - paragraph [ref=e264]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e265]:
          - link "Privacy" [ref=e266] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e267] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e268] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e269] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e270] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e271]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { pageRegistry } from '../../../../test-data/page-registry.js';
  3  | import { runDesignComplianceTest } from '../../../../utils/design-validator.js';
  4  | 
  5  | const pageEntry = pageRegistry.find(
  6  |   (page) => page.moduleKey === 'resources' && page.slug === 'benchmarks'
  7  | );
  8  | 
  9  | const moduleLabel = pageEntry?.moduleLabel || 'resources';
  10 | const pageLabel = pageEntry?.pageLabel || 'benchmarks';
  11 | 
  12 | test.describe(`${moduleLabel} - ${pageLabel} design compliance`, () => {
  13 |   test('Figma design compliance', async ({ page }) => {
  14 |     const failures = await runDesignComplianceTest({ page, pageEntry });
  15 | 
  16 |     for (const f of failures) {
  17 |       expect.soft(null, `[${f.section}] ${f.message}`).toBeTruthy();
  18 |     }
  19 | 
> 20 |     expect(failures.length, `${failures.length} design compliance issue(s) found`).toBe(0);
     |                                                                                    ^ Error: 1 design compliance issue(s) found
  21 |   });
  22 | });
  23 | 
```