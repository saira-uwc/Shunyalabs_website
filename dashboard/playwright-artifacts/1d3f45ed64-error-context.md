# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-codeswitch/design.spec.js >> Models - Zero STT Codeswitch design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Page title: expected "Zero Indic - Hinglish ASR" but got "Zero Code Switch Hinglish ASR Platform | Shunya Labs"

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
      - generic [ref=e36]:
        - generic [ref=e38]:
          - generic [ref=e39]:
            - heading "Capture code-switching in conversations like never before" [level=1] [ref=e40]
            - paragraph [ref=e41]: The only ASR to transcribe Hinglish like its actually spoken, our breakthrough code-switching STT generates mixed Hinglish outputs.
          - main [ref=e44]:
            - generic [ref=e49]:
              - generic [ref=e53]:
                - generic [ref=e55]:
                  - generic [ref=e56]: Language
                  - button "🇮🇳Hinglish" [disabled] [ref=e59]:
                    - generic [ref=e60]: 🇮🇳Hinglish
                    - generic:
                      - img
                - generic [ref=e62]:
                  - generic [ref=e63]: Input Audio
                  - generic [ref=e64]:
                    - generic [ref=e65]: Pre-recorded
                    - generic [ref=e68]:
                      - button "Sample Audio" [ref=e69] [cursor=pointer]
                      - button "Upload your file" [ref=e70] [cursor=pointer]
                - generic [ref=e72]:
                  - generic [ref=e74]: or
                  - generic [ref=e75]:
                    - generic [ref=e77]: Live recording
                    - button "Start Speaking" [ref=e78] [cursor=pointer]:
                      - generic [ref=e79]: Start Speaking
              - generic [ref=e83]:
                - generic [ref=e84]:
                  - button "Play audio" [ref=e87] [cursor=pointer]:
                    - img [ref=e88]
                  - button "No conversation to copy" [disabled] [ref=e155]:
                    - img [ref=e156]
                - generic [ref=e165]:
                  - img [ref=e168]
                  - paragraph [ref=e172]: Select your input language, then upload a file or start speaking to capture live audio.
          - link "Get Hinglish API now" [ref=e174] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/models/language
          - generic [ref=e177]:
            - heading "A first of its kind Hinglish model" [level=2] [ref=e178]
            - generic [ref=e179]:
              - generic [ref=e180]:
                - paragraph [ref=e182]: Zero Hinglish is a true Hinglish model, generating tokens directly in mixed Hindi–English instead of forcing everything into a single language.
                - heading "Hinglish output" [level=3] [ref=e184]
              - generic [ref=e186]:
                - heading "Sentence-level context" [level=3] [ref=e188]
                - paragraph [ref=e190]: Trained on genuine Hinglish, the model understands the entire sentence, delivering far more accurate transcripts in real time.
              - generic [ref=e192]:
                - paragraph [ref=e194]: A novel architecture keeps layers minimal while handling code-switched speech, so you get low-latency, production-ready Hinglish transcription.
                - heading "Faster than ever" [level=3] [ref=e196]
        - generic [ref=e198]:
          - generic [ref=e199]:
            - heading "ASR that transcribes like India speaks" [level=2] [ref=e200]
            - paragraph [ref=e201]: Our breakthrough innovation means Zero Hinglish stays as fast and fluid as the code switch in the conversation itself.
          - generic [ref=e202]:
            - generic [ref=e203]:
              - generic [ref=e204] [cursor=pointer]:
                - heading "Podcasts" [level=3] [ref=e206]
                - paragraph [ref=e207]: Capture every nuance in conversations held in the comfort of Hinglish.
              - generic [ref=e208] [cursor=pointer]:
                - heading "Interviews" [level=3] [ref=e209]
                - paragraph [ref=e210]: Livestream or post-process episodes with native Hinglish transcripts.
              - generic [ref=e211] [cursor=pointer]:
                - heading "News & talk shows" [level=3] [ref=e212]
                - paragraph [ref=e213]: Real-time, mixed-language captions for broadcast and digital.
            - generic [ref=e216]:
              - paragraph [ref=e218]: Podcasts
              - paragraph [ref=e220]: Interviews
              - paragraph [ref=e222]: News & talk shows
    - contentinfo [ref=e223]:
      - generic [ref=e224]:
        - paragraph [ref=e225]: The fastest way to add voice AI to your products
        - paragraph [ref=e226]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e227]:
          - link "Try for Free" [ref=e228] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e229] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e230]:
      - generic [ref=e231]:
        - generic [ref=e232]:
          - img "Shunya Labs" [ref=e233]
          - paragraph [ref=e234]: Shunya Labs, Inc.
        - generic [ref=e235]:
          - paragraph [ref=e236]: Product
          - list [ref=e237]:
            - listitem [ref=e238]:
              - link "Overview" [ref=e239] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e240]:
              - link "Models" [ref=e241] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e242]:
              - link "Voice Agents" [ref=e243] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e244]:
              - link "Speech Intelligence" [ref=e245] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e246]:
              - link "Audio Processing" [ref=e247] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e248]:
              - link "Deployment" [ref=e249] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e250]:
          - paragraph [ref=e251]: Models
          - list [ref=e252]:
            - listitem [ref=e253]:
              - link "Language Models" [ref=e254] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e255]:
              - link "Zero STT Indic" [ref=e256] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e257]:
              - link "Zero STT Codeswitch" [ref=e258] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e259]:
              - link "Specialised Models" [ref=e260] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e261]:
              - link "Zero STT Med" [ref=e262] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e263]:
              - link "On Device Models" [ref=e264] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e265]:
          - paragraph [ref=e266]: Solutions
          - list [ref=e267]:
            - listitem [ref=e268]:
              - link "Contact Centers" [ref=e269] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e270]:
              - link "Media & Entertainment" [ref=e271] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e272]:
              - link "Healthcare" [ref=e273] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e274]:
          - paragraph [ref=e275]: Resources
          - list [ref=e276]:
            - listitem [ref=e277]:
              - link "Blogs" [ref=e278] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e279]:
              - link "Benchmarks" [ref=e280] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e281]:
              - link "News & Media" [ref=e282] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e283]:
              - link "Patents" [ref=e284] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e285]:
              - link "Research" [ref=e286] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e288]:
          - link "Documentation" [ref=e289] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e291]:
          - listitem [ref=e292]:
            - link "About us" [ref=e293] [cursor=pointer]:
              - /url: /about
        - list [ref=e295]:
          - listitem [ref=e296]:
            - link "Pricing" [ref=e297] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e298]:
        - paragraph [ref=e299]: Follow us on
        - generic [ref=e300]:
          - link [ref=e301] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e302]
          - link [ref=e304] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e305]
          - link [ref=e307] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e308]
          - link [ref=e310] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e311]
      - generic [ref=e313]:
        - paragraph [ref=e314]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e315]:
          - link "Privacy" [ref=e316] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e317] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e318] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e319] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e320] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e321]
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