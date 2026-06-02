# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-med/design.spec.js >> Models - Zero STT Med design compliance >> Figma design compliance
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
      - generic [ref=e40]:
        - heading "Transform complex clinical conversations into precise documentation" [level=1] [ref=e41]
        - paragraph [ref=e42]: Zero Med delivers 11.1% WER and 5.1% CER on noisy, multi-speaker medical audio, trained on specialized medical data to ensure critical terminology is captured correctly every time.
      - main [ref=e45]:
        - generic [ref=e50]:
          - generic [ref=e54]:
            - generic [ref=e56]:
              - generic [ref=e57]: Language
              - button "🇺🇸English" [disabled] [ref=e60]:
                - generic [ref=e61]: 🇺🇸English
                - generic:
                  - img
            - generic [ref=e63]:
              - generic [ref=e64]: Input Audio
              - generic [ref=e65]:
                - generic [ref=e66]: Pre-recorded
                - generic [ref=e69]:
                  - button "Patient Notes" [ref=e70] [cursor=pointer]
                  - button "Doctor's Appointment" [ref=e71] [cursor=pointer]
                  - button "Upload your file" [ref=e72] [cursor=pointer]
            - generic [ref=e74]:
              - generic [ref=e76]: or
              - generic [ref=e77]:
                - generic [ref=e79]: Live recording
                - button "Start Speaking" [ref=e80] [cursor=pointer]:
                  - generic [ref=e81]: Start Speaking
          - generic [ref=e85]:
            - generic [ref=e86]:
              - button "Play audio" [ref=e89] [cursor=pointer]:
                - img [ref=e90]
              - button "No conversation to copy" [disabled] [ref=e157]:
                - img [ref=e158]
            - generic [ref=e167]:
              - img [ref=e170]
              - paragraph [ref=e174]: Pick a sample, upload a file, or start speaking to capture live audio.
      - link "Get Zero STT Med API now" [ref=e176] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/med-transcription
    - generic [ref=e178]:
      - heading "Speech recognition built for healthcare" [level=2] [ref=e179]
      - paragraph [ref=e180]: Reduce administrative burden and improve accuracy—so healthcare professionals can focus more on patient care.
      - generic [ref=e181]:
        - generic [ref=e182]:
          - heading "Accurate Real-Time Transcripts" [level=3] [ref=e183]
          - paragraph [ref=e184]: Delivers 11.1% WER and 5.1% CER on challenging medical audio with real-time processing. Purpose-built for clinical environments where every word matters.
        - generic [ref=e185]:
          - heading "Clinical Terminology Precision" [level=3] [ref=e186]
          - paragraph [ref=e187]: Specialized training on clinical conversations ensures accurate capture of complex medical terms—from rare drug names to procedural terminology that generic models miss.
        - generic [ref=e188]:
          - heading "Language Support" [level=3] [ref=e189]
          - paragraph [ref=e190]: Processes speech in real hospital environments—handling background noise, equipment sounds, and overlapping conversations across English, Japanese, and Korean, with more languages coming soon.
      - link "Contact Us" [ref=e192] [cursor=pointer]:
        - /url: /contact
    - contentinfo [ref=e193]:
      - generic [ref=e194]:
        - paragraph [ref=e195]: The fastest way to add voice AI to your products
        - paragraph [ref=e196]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e197]:
          - link "Go to Pricing page" [ref=e198] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e199] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e200]:
      - generic [ref=e201]:
        - generic [ref=e202]:
          - img "Shunya Labs" [ref=e203]
          - paragraph [ref=e204]: Shunya Labs, Inc.
        - generic [ref=e205]:
          - paragraph [ref=e206]: Product
          - list [ref=e207]:
            - listitem [ref=e208]:
              - link "Overview" [ref=e209] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e210]:
              - link "Models" [ref=e211] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e212]:
              - link "Voice Agents" [ref=e213] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e214]:
              - link "Speech Intelligence" [ref=e215] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e216]:
              - link "Audio Processing" [ref=e217] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e218]:
              - link "Deployment" [ref=e219] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e220]:
          - paragraph [ref=e221]: Models
          - list [ref=e222]:
            - listitem [ref=e223]:
              - link "Language Models" [ref=e224] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e225]:
              - link "Zero STT Indic" [ref=e226] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e227]:
              - link "Zero STT Codeswitch" [ref=e228] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e229]:
              - link "Specialised Models" [ref=e230] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e231]:
              - link "Zero STT Med" [ref=e232] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e233]:
              - link "On Device Models" [ref=e234] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e235]:
          - paragraph [ref=e236]: Solutions
          - list [ref=e237]:
            - listitem [ref=e238]:
              - link "Contact Centers" [ref=e239] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e240]:
              - link "Media & Entertainment" [ref=e241] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e242]:
              - link "Healthcare" [ref=e243] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e244]:
          - paragraph [ref=e245]: Resources
          - list [ref=e246]:
            - listitem [ref=e247]:
              - link "Blogs" [ref=e248] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e249]:
              - link "Benchmarks" [ref=e250] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e251]:
              - link "News & Media" [ref=e252] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e253]:
              - link "Patents" [ref=e254] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e255]:
              - link "Research" [ref=e256] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e258]:
          - link "Documentation" [ref=e259] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e261]:
          - listitem [ref=e262]:
            - link "About us" [ref=e263] [cursor=pointer]:
              - /url: /about
        - list [ref=e265]:
          - listitem [ref=e266]:
            - link "Pricing" [ref=e267] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e268]:
        - paragraph [ref=e269]: Follow us on
        - generic [ref=e270]:
          - link [ref=e271] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e272]
          - link [ref=e274] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e275]
          - link [ref=e277] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e278]
          - link [ref=e280] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e281]
      - generic [ref=e283]:
        - paragraph [ref=e284]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e285]:
          - link "Privacy" [ref=e286] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e287] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e288] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e289] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e290] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e291]
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