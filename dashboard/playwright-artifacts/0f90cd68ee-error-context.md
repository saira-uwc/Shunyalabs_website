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
      - generic [ref=e12]:
        - heading "Transform complex clinical conversations into precise documentation" [level=1] [ref=e13]
        - paragraph [ref=e14]: Zero Med delivers 11.1% WER and 5.1% CER on noisy, multi-speaker medical audio, trained on specialized medical data to ensure critical terminology is captured correctly every time.
      - main [ref=e17]:
        - generic [ref=e22]:
          - generic [ref=e26]:
            - generic [ref=e28]:
              - generic [ref=e29]: Language
              - button "🇺🇸English" [disabled] [ref=e32]:
                - generic [ref=e33]: 🇺🇸English
                - generic:
                  - img
            - generic [ref=e34]:
              - generic [ref=e35]: Input Audio
              - generic [ref=e36]:
                - generic [ref=e37]: Pre-recorded
                - generic [ref=e40]:
                  - button "Patient Notes" [ref=e41] [cursor=pointer]
                  - button "Doctor's Appointment" [ref=e42] [cursor=pointer]
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
              - paragraph [ref=e100]: Pick a sample, upload a file, or start speaking to capture live audio.
      - link "Get Zero STT Med API now" [ref=e102] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/med-transcription
    - generic [ref=e104]:
      - heading "Speech recognition built for healthcare" [level=2] [ref=e105]
      - paragraph [ref=e106]: Reduce administrative burden and improve accuracy—so healthcare professionals can focus more on patient care.
      - generic [ref=e107]:
        - generic [ref=e108]:
          - heading "Accurate Real-Time Transcripts" [level=3] [ref=e109]
          - paragraph [ref=e110]: Delivers 11.1% WER and 5.1% CER on challenging medical audio with real-time processing. Purpose-built for clinical environments where every word matters.
        - generic [ref=e111]:
          - heading "Clinical Terminology Precision" [level=3] [ref=e112]
          - paragraph [ref=e113]: Specialized training on clinical conversations ensures accurate capture of complex medical terms—from rare drug names to procedural terminology that generic models miss.
        - generic [ref=e114]:
          - heading "Language Support" [level=3] [ref=e115]
          - paragraph [ref=e116]: Processes speech in real hospital environments—handling background noise, equipment sounds, and overlapping conversations across English, Japanese, and Korean, with more languages coming soon.
      - link "Contact Us" [ref=e118] [cursor=pointer]:
        - /url: /contact
    - contentinfo [ref=e119]:
      - generic [ref=e120]:
        - paragraph [ref=e121]: The fastest way to add voice AI to your products
        - paragraph [ref=e122]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e123]:
          - link "Go to Pricing page" [ref=e124] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e125] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e126]:
      - generic [ref=e127]:
        - generic [ref=e128]:
          - img "Shunya Labs" [ref=e129]
          - paragraph [ref=e130]: Shunya Labs, Inc.
        - generic [ref=e131]:
          - paragraph [ref=e132]: Product
          - list [ref=e133]:
            - listitem [ref=e134]:
              - link "Overview" [ref=e135] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e136]:
              - link "Models" [ref=e137] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e138]:
              - link "Voice Agents" [ref=e139] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e140]:
              - link "Speech Intelligence" [ref=e141] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e142]:
              - link "Audio Processing" [ref=e143] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e144]:
              - link "Deployment" [ref=e145] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e146]:
          - paragraph [ref=e147]: Models
          - list [ref=e148]:
            - listitem [ref=e149]:
              - link "Language Models" [ref=e150] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e151]:
              - link "Zero STT Indic" [ref=e152] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e153]:
              - link "Zero STT Codeswitch" [ref=e154] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e155]:
              - link "Specialised Models" [ref=e156] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e157]:
              - link "Zero STT Med" [ref=e158] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e159]:
              - link "On Device Models" [ref=e160] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e161]:
          - paragraph [ref=e162]: Solutions
          - list [ref=e163]:
            - listitem [ref=e164]:
              - link "Contact Centers" [ref=e165] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e166]:
              - link "Media & Entertainment" [ref=e167] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e168]:
              - link "Healthcare" [ref=e169] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e170]:
          - paragraph [ref=e171]: Resources
          - list [ref=e172]:
            - listitem [ref=e173]:
              - link "Blogs" [ref=e174] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e175]:
              - link "Benchmarks" [ref=e176] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e177]:
              - link "News & Media" [ref=e178] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e179]:
              - link "Patents" [ref=e180] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e181]:
              - link "Research" [ref=e182] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e184]:
          - link "Documentation" [ref=e185] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e187]:
          - listitem [ref=e188]:
            - link "About us" [ref=e189] [cursor=pointer]:
              - /url: /about
        - list [ref=e191]:
          - listitem [ref=e192]:
            - link "Pricing" [ref=e193] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e194]:
        - paragraph [ref=e195]: Follow us on
        - generic [ref=e196]:
          - link [ref=e197] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e198]
          - link [ref=e200] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e201]
          - link [ref=e203] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e204]
          - link [ref=e206] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e207]
      - generic [ref=e209]:
        - paragraph [ref=e210]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e211]:
          - link "Privacy" [ref=e212] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e213] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e214] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e215] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e216] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e217]
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