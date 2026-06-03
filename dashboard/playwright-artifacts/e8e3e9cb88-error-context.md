# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-med/design.spec.js >> Models - Zero STT Med design compliance >> Figma design compliance
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
Error: 2 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 2
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
      - generic [ref=e36]:
        - heading "Transform complex clinical conversations into precise documentation" [level=1] [ref=e37]
        - paragraph [ref=e38]: Zero Med delivers 11.1% WER and 5.1% CER on noisy, multi-speaker medical audio, trained on specialized medical data to ensure critical terminology is captured correctly every time.
      - main [ref=e41]:
        - generic [ref=e46]:
          - generic [ref=e50]:
            - generic [ref=e52]:
              - generic [ref=e53]: Language
              - button "🇺🇸English" [disabled] [ref=e56]:
                - generic [ref=e57]: 🇺🇸English
                - generic:
                  - img
            - generic [ref=e59]:
              - generic [ref=e60]: Input Audio
              - generic [ref=e61]:
                - generic [ref=e62]: Pre-recorded
                - generic [ref=e65]:
                  - button "Patient Notes" [ref=e66] [cursor=pointer]
                  - button "Doctor's Appointment" [ref=e67] [cursor=pointer]
                  - button "Upload your file" [ref=e68] [cursor=pointer]
            - generic [ref=e70]:
              - generic [ref=e72]: or
              - generic [ref=e73]:
                - generic [ref=e75]: Live recording
                - button "Start Speaking" [ref=e76] [cursor=pointer]:
                  - generic [ref=e77]: Start Speaking
          - generic [ref=e81]:
            - generic [ref=e82]:
              - button "Play audio" [ref=e85] [cursor=pointer]:
                - img [ref=e86]
              - button "No conversation to copy" [disabled] [ref=e153]:
                - img [ref=e154]
            - generic [ref=e163]:
              - img [ref=e166]
              - paragraph [ref=e170]: Pick a sample, upload a file, or start speaking to capture live audio.
      - link "Get Zero STT Med API now" [ref=e172] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/med-transcription
    - generic [ref=e174]:
      - heading "Speech recognition built for healthcare" [level=2] [ref=e175]
      - paragraph [ref=e176]: Reduce administrative burden and improve accuracy—so healthcare professionals can focus more on patient care.
      - generic [ref=e177]:
        - generic [ref=e178]:
          - heading "Accurate Real-Time Transcripts" [level=3] [ref=e179]
          - paragraph [ref=e180]: Delivers 11.1% WER and 5.1% CER on challenging medical audio with real-time processing. Purpose-built for clinical environments where every word matters.
        - generic [ref=e181]:
          - heading "Clinical Terminology Precision" [level=3] [ref=e182]
          - paragraph [ref=e183]: Specialized training on clinical conversations ensures accurate capture of complex medical terms—from rare drug names to procedural terminology that generic models miss.
        - generic [ref=e184]:
          - heading "Language Support" [level=3] [ref=e185]
          - paragraph [ref=e186]: Processes speech in real hospital environments—handling background noise, equipment sounds, and overlapping conversations across English, Japanese, and Korean, with more languages coming soon.
      - link "Contact Us" [ref=e188] [cursor=pointer]:
        - /url: /contact
    - contentinfo [ref=e189]:
      - generic [ref=e193]:
        - paragraph [ref=e194]: The fastest way to add voice AI to your products
        - paragraph [ref=e195]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e196]:
          - link "Go to Pricing page" [ref=e197] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e198] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e199]:
      - generic [ref=e200]:
        - generic [ref=e201]:
          - img "Shunya Labs" [ref=e202]
          - paragraph [ref=e203]: Shunya Labs, Inc.
        - generic [ref=e204]:
          - paragraph [ref=e205]: Product
          - list [ref=e206]:
            - listitem [ref=e207]:
              - link "Overview" [ref=e208] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e209]:
              - link "Models" [ref=e210] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e211]:
              - link "Voice Agents" [ref=e212] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e213]:
              - link "Speech Intelligence" [ref=e214] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e215]:
              - link "Audio Processing" [ref=e216] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e217]:
              - link "Deployment" [ref=e218] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e219]:
          - paragraph [ref=e220]: Models
          - list [ref=e221]:
            - listitem [ref=e222]:
              - link "Language Models" [ref=e223] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e224]:
              - link "Zero STT Indic" [ref=e225] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e226]:
              - link "Zero STT Codeswitch" [ref=e227] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e228]:
              - link "Specialised Models" [ref=e229] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e230]:
              - link "Zero STT Med" [ref=e231] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e232]:
              - link "On Device Models" [ref=e233] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e234]:
          - paragraph [ref=e235]: Solutions
          - list [ref=e236]:
            - listitem [ref=e237]:
              - link "Contact Centers" [ref=e238] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e239]:
              - link "Media & Entertainment" [ref=e240] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e241]:
              - link "Healthcare" [ref=e242] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e243]:
          - paragraph [ref=e244]: Resources
          - list [ref=e245]:
            - listitem [ref=e246]:
              - link "Blogs" [ref=e247] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e248]:
              - link "Benchmarks" [ref=e249] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e250]:
              - link "News & Media" [ref=e251] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e252]:
              - link "Patents" [ref=e253] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e254]:
              - link "Research" [ref=e255] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e257]:
          - link "Documentation" [ref=e258] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e260]:
          - listitem [ref=e261]:
            - link "About us" [ref=e262] [cursor=pointer]:
              - /url: /about
        - list [ref=e264]:
          - listitem [ref=e265]:
            - link "Pricing" [ref=e266] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e267]:
        - paragraph [ref=e268]: Follow us on
        - generic [ref=e269]:
          - link [ref=e270] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e271]
          - link [ref=e273] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e274]
          - link [ref=e276] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e277]
          - link [ref=e279] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e280]
      - generic [ref=e282]:
        - paragraph [ref=e283]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e284]:
          - link "Privacy" [ref=e285] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e286] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e287] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e288] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e289] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e290]
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