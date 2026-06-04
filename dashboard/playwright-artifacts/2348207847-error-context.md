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
        - generic [ref=e12]:
          - generic [ref=e13]:
            - heading "Capture code-switching in conversations like never before" [level=1] [ref=e14]
            - paragraph [ref=e15]: The only ASR to transcribe Hinglish like its actually spoken, our breakthrough code-switching STT generates mixed Hinglish outputs.
          - main [ref=e18]:
            - generic [ref=e23]:
              - generic [ref=e27]:
                - generic [ref=e29]:
                  - generic [ref=e30]: Language
                  - button "🇮🇳Hinglish" [disabled] [ref=e33]:
                    - generic [ref=e34]: 🇮🇳Hinglish
                    - generic:
                      - img
                - generic [ref=e35]:
                  - generic [ref=e36]: Input Audio
                  - generic [ref=e37]:
                    - generic [ref=e38]: Pre-recorded
                    - generic [ref=e41]:
                      - button "Sample Audio" [ref=e42] [cursor=pointer]
                      - button "Upload your file" [ref=e43] [cursor=pointer]
                - generic [ref=e45]:
                  - generic [ref=e47]: or
                  - generic [ref=e48]:
                    - generic [ref=e50]: Live recording
                    - button "Start Speaking" [ref=e51] [cursor=pointer]:
                      - generic [ref=e52]: Start Speaking
              - generic [ref=e56]:
                - generic [ref=e57]:
                  - button "Play audio" [ref=e60] [cursor=pointer]:
                    - img [ref=e61]
                  - button "No conversation to copy" [disabled] [ref=e83]:
                    - img [ref=e84]
                - generic [ref=e93]:
                  - img [ref=e96]
                  - paragraph [ref=e100]: Select your input language, then upload a file or start speaking to capture live audio.
          - link "Get Hinglish API now" [ref=e102] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/models/language
          - generic [ref=e105]:
            - heading "A first of its kind Hinglish model" [level=2] [ref=e106]
            - generic [ref=e107]:
              - generic [ref=e108]:
                - heading "Hinglish output" [level=3] [ref=e109]
                - paragraph [ref=e110]: Zero Hinglish is a true Hinglish model, generating tokens directly in mixed Hindi–English instead of forcing everything into a single language.
              - generic [ref=e112]:
                - heading "Sentence-level context" [level=3] [ref=e113]
                - paragraph [ref=e114]: Trained on genuine Hinglish, the model understands the entire sentence, delivering far more accurate transcripts in real time.
              - generic [ref=e116]:
                - heading "Faster than ever" [level=3] [ref=e117]
                - paragraph [ref=e118]: A novel architecture keeps layers minimal while handling code-switched speech, so you get low-latency, production-ready Hinglish transcription.
        - generic [ref=e120]:
          - generic [ref=e121]:
            - heading "ASR that transcribes like India speaks" [level=2] [ref=e122]
            - paragraph [ref=e123]: Our breakthrough innovation means Zero Hinglish stays as fast and fluid as the code switch in the conversation itself.
          - generic [ref=e124]:
            - generic [ref=e125]:
              - generic [ref=e126] [cursor=pointer]:
                - heading "Podcasts" [level=3] [ref=e128]
                - paragraph [ref=e129]: Capture every nuance in conversations held in the comfort of Hinglish.
              - generic [ref=e130] [cursor=pointer]:
                - heading "Interviews" [level=3] [ref=e131]
                - paragraph [ref=e132]: Livestream or post-process episodes with native Hinglish transcripts.
              - generic [ref=e133] [cursor=pointer]:
                - heading "News & talk shows" [level=3] [ref=e134]
                - paragraph [ref=e135]: Real-time, mixed-language captions for broadcast and digital.
            - generic [ref=e138]:
              - paragraph [ref=e140]: Podcasts
              - paragraph [ref=e142]: Interviews
              - paragraph [ref=e144]: News & talk shows
    - contentinfo [ref=e145]:
      - generic [ref=e146]:
        - paragraph [ref=e147]: The fastest way to add voice AI to your products
        - paragraph [ref=e148]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e149]:
          - link "Try for Free" [ref=e150] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e151] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e152]:
      - generic [ref=e153]:
        - generic [ref=e154]:
          - img "Shunya Labs" [ref=e155]
          - paragraph [ref=e156]: Shunya Labs, Inc.
        - generic [ref=e157]:
          - paragraph [ref=e158]: Product
          - list [ref=e159]:
            - listitem [ref=e160]:
              - link "Overview" [ref=e161] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e162]:
              - link "Models" [ref=e163] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e164]:
              - link "Voice Agents" [ref=e165] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e166]:
              - link "Speech Intelligence" [ref=e167] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e168]:
              - link "Audio Processing" [ref=e169] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e170]:
              - link "Deployment" [ref=e171] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e172]:
          - paragraph [ref=e173]: Models
          - list [ref=e174]:
            - listitem [ref=e175]:
              - link "Language Models" [ref=e176] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e177]:
              - link "Zero STT Indic" [ref=e178] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e179]:
              - link "Zero STT Codeswitch" [ref=e180] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e181]:
              - link "Specialised Models" [ref=e182] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e183]:
              - link "Zero STT Med" [ref=e184] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e185]:
              - link "On Device Models" [ref=e186] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e187]:
          - paragraph [ref=e188]: Solutions
          - list [ref=e189]:
            - listitem [ref=e190]:
              - link "Contact Centers" [ref=e191] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e192]:
              - link "Media & Entertainment" [ref=e193] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e194]:
              - link "Healthcare" [ref=e195] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e196]:
          - paragraph [ref=e197]: Resources
          - list [ref=e198]:
            - listitem [ref=e199]:
              - link "Blogs" [ref=e200] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e201]:
              - link "Benchmarks" [ref=e202] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e203]:
              - link "News & Media" [ref=e204] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e205]:
              - link "Patents" [ref=e206] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e207]:
              - link "Research" [ref=e208] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e210]:
          - link "Documentation" [ref=e211] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e213]:
          - listitem [ref=e214]:
            - link "About us" [ref=e215] [cursor=pointer]:
              - /url: /about
        - list [ref=e217]:
          - listitem [ref=e218]:
            - link "Pricing" [ref=e219] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e220]:
        - paragraph [ref=e221]: Follow us on
        - generic [ref=e222]:
          - link [ref=e223] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e224]
          - link [ref=e226] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e227]
          - link [ref=e229] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e230]
          - link [ref=e232] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e233]
      - generic [ref=e235]:
        - paragraph [ref=e236]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e237]:
          - link "Privacy" [ref=e238] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e239] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e240] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e241] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e242] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e243]
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