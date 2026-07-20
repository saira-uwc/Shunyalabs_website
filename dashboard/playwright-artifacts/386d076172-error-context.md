# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-codeswitch/design.spec.js >> Models - Zero STT Codeswitch design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [layout] Section "ASR that transcribes like India speaks" background: expected rgb(0, 0, 0) but got rgb(255, 255, 255)

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
Error: [content] Page title: expected "Zero Code Switch Hinglish ASR Platform | Shunya Labs" but got "Hinglish & Code-Switching Speech-to-Text API | Shunya Labs"

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 16 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 16
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
        - generic [ref=e10]:
          - heading "Capture code-switching in conversations like never before" [level=1] [ref=e11]
          - paragraph [ref=e12]: The only ASR to transcribe Hinglish like its actually spoken, our breakthrough code-switching STT generates mixed Hinglish outputs.
        - iframe [ref=e16]:
          - generic [active]:
            - generic:
              - generic:
                - generic:
                  - main
            - alert [ref=f2e1]
        - link "Get Hinglish API now" [ref=e18] [cursor=pointer]:
          - /url: https://console.shunyalabs.ai/dashboard
    - generic [ref=e19]:
      - generic [ref=e24]:
        - heading "A first of its kind Hinglish model" [level=2] [ref=e25]
        - generic [ref=e26]:
          - generic [ref=e27]:
            - heading "Hinglish output" [level=3] [ref=e28]
            - paragraph [ref=e29]: Zero Hinglish is a true Hinglish model, generating tokens directly in mixed Hindi–English instead of forcing everything into a single language.
          - generic [ref=e30]:
            - heading "Sentence-level context" [level=3] [ref=e31]
            - paragraph [ref=e32]: Trained on genuine Hinglish, the model understands the entire sentence, delivering far more accurate transcripts in real time.
          - generic [ref=e33]:
            - heading "Faster than ever" [level=3] [ref=e34]
            - paragraph [ref=e35]: A novel architecture keeps layers minimal while handling code-switched speech, so you get low-latency, production-ready Hinglish transcription.
      - generic [ref=e37]:
        - generic [ref=e38]:
          - heading "ASR that transcribes like India speaks" [level=2] [ref=e39]
          - paragraph [ref=e40]: Our breakthrough innovation means Zero Hinglish stays as fast and fluid as the code switch in the conversation itself.
        - generic [ref=e41]:
          - generic [ref=e42]:
            - generic [ref=e43] [cursor=pointer]:
              - heading "Podcasts" [level=3] [ref=e45]
              - paragraph [ref=e46]: Capture every nuance in conversations held in the comfort of Hinglish.
            - generic [ref=e47] [cursor=pointer]:
              - heading "Interviews" [level=3] [ref=e48]
              - paragraph [ref=e49]: Livestream or post-process episodes with native Hinglish transcripts.
            - generic [ref=e50] [cursor=pointer]:
              - heading "News & talk shows" [level=3] [ref=e51]
              - paragraph [ref=e52]: Real-time, mixed-language captions for broadcast and digital.
          - generic [ref=e55]:
            - paragraph [ref=e57]: Podcasts
            - paragraph [ref=e59]: Interviews
            - paragraph [ref=e61]: News & talk shows
    - contentinfo [ref=e62]:
      - generic [ref=e63]:
        - paragraph [ref=e64]: The fastest way to add voice AI to your products
        - paragraph [ref=e65]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e66]:
          - link "Try for Free" [ref=e67] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e68] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e69]:
      - generic [ref=e70]:
        - generic [ref=e71]:
          - img "Shunya Labs" [ref=e72]
          - paragraph [ref=e73]: Shunya Labs, Inc.
        - generic [ref=e74]:
          - paragraph [ref=e75]: Product
          - list [ref=e76]:
            - listitem [ref=e77]:
              - link "Overview" [ref=e78] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e79]:
              - link "Models" [ref=e80] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e81]:
              - link "Voice Agents" [ref=e82] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e83]:
              - link "Speech Intelligence" [ref=e84] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e85]:
              - link "Audio Processing" [ref=e86] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e87]:
              - link "Deployment" [ref=e88] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e89]:
          - paragraph [ref=e90]: Models
          - list [ref=e91]:
            - listitem [ref=e92]:
              - link "Language Models" [ref=e93] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e94]:
              - link "Zero STT Indic" [ref=e95] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e96]:
              - link "Zero STT Codeswitch" [ref=e97] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e98]:
              - link "Specialised Models" [ref=e99] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e100]:
              - link "Zero STT Med" [ref=e101] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e102]:
              - link "On Device Models" [ref=e103] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e104]:
          - paragraph [ref=e105]: Solutions
          - list [ref=e106]:
            - listitem [ref=e107]:
              - link "Contact Centers" [ref=e108] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e109]:
              - link "Media & Entertainment" [ref=e110] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e111]:
              - link "Healthcare" [ref=e112] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e113]:
          - paragraph [ref=e114]: Resources
          - list [ref=e115]:
            - listitem [ref=e116]:
              - link "Blogs" [ref=e117] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e118]:
              - link "Benchmarks" [ref=e119] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e120]:
              - link "News & Media" [ref=e121] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e122]:
              - link "Patents" [ref=e123] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e124]:
              - link "Research" [ref=e125] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e127]:
          - link "Documentation" [ref=e128] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e130]:
          - listitem [ref=e131]:
            - link "About us" [ref=e132] [cursor=pointer]:
              - /url: /about
        - list [ref=e134]:
          - listitem [ref=e135]:
            - link "Pricing" [ref=e136] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e137]:
        - paragraph [ref=e138]: Follow us on
        - generic [ref=e139]:
          - link [ref=e140] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e141]
          - link [ref=e143] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e144]
          - link [ref=e146] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e147]
          - link [ref=e149] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e150]
      - generic [ref=e152]:
        - paragraph [ref=e153]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e154]:
          - link "Privacy" [ref=e155] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e156] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e157] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e158] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e159] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e160]
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
     |                                                                                      ^ Error: 16 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```