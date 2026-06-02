# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/speech-intelligence/design.spec.js >> Product - Speech Intelligence design compliance >> Figma design compliance
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
    - generic [ref=e38]:
      - generic [ref=e39]:
        - heading "Understand Every Conversation with Intelligence Features" [level=1] [ref=e40]
        - heading "Full flexibility and control across multilingual support, smart formatting, conversational analytics, and advanced AI capabilities." [level=2] [ref=e41]
      - link "Try Now" [ref=e42] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e43]:
      - generic [ref=e44]:
        - heading "Language Expertise" [level=2] [ref=e47]
        - generic [ref=e48]:
          - generic [ref=e49]:
            - img [ref=e51]
            - generic [ref=e53]:
              - heading "Language Identification" [level=3] [ref=e54]
              - paragraph [ref=e55]: Automatically detect the language in your audio files
          - generic [ref=e56]:
            - img [ref=e58]
            - generic [ref=e61]:
              - heading "Translation" [level=3] [ref=e62]
              - paragraph [ref=e63]: Translate audio during or after transcription
          - generic [ref=e64]:
            - img [ref=e66]
            - generic [ref=e70]:
              - heading "Transliteration" [level=3] [ref=e71]
              - paragraph [ref=e72]: Convert output to your preferred script
      - generic [ref=e73]:
        - heading "Smart Formatting" [level=2] [ref=e76]
        - generic [ref=e77]:
          - generic [ref=e78]:
            - img [ref=e80]
            - generic [ref=e82]:
              - heading "Speaker Diarization" [level=3] [ref=e83]
              - paragraph [ref=e84]: Separate transcripts by speaker automatically
          - generic [ref=e85]:
            - img [ref=e87]
            - generic [ref=e89]:
              - heading "Speaker Identification" [level=3] [ref=e90]
              - paragraph [ref=e91]: Customize speaker labels for personalized transcripts
          - generic [ref=e92]:
            - img [ref=e94]
            - generic [ref=e98]:
              - heading "Word Timestamps" [level=3] [ref=e99]
              - paragraph [ref=e100]: Word-level timing for precise navigation
          - generic [ref=e101]:
            - img [ref=e103]
            - generic [ref=e105]:
              - heading "Profanity and Keyword Hashing" [level=3] [ref=e106]
              - paragraph [ref=e107]: Filter and mask profanity or custom keywords
      - generic [ref=e108]:
        - heading "Conversational Insights" [level=2] [ref=e111]
        - generic [ref=e112]:
          - generic [ref=e113]:
            - img [ref=e115]
            - generic [ref=e117]:
              - heading "Intent Detection" [level=3] [ref=e118]
              - paragraph [ref=e119]: Understand the purpose behind every conversation
          - generic [ref=e120]:
            - img [ref=e122]
            - generic [ref=e124]:
              - heading "Sentiment Analysis" [level=3] [ref=e125]
              - paragraph [ref=e126]: Track emotional tone across interactions
          - generic [ref=e127]:
            - img [ref=e129]
            - generic [ref=e131]:
              - heading "Emotion Diarization" [level=3] [ref=e132]
              - paragraph [ref=e133]: Get clearer emotion tracking throughout conversations
          - generic [ref=e134]:
            - img [ref=e136]
            - generic [ref=e138]:
              - heading "Summarisation" [level=3] [ref=e139]
              - paragraph [ref=e140]: Generate concise summaries from audio or text
    - generic [ref=e143]:
      - heading "Advanced Features" [level=2] [ref=e146]
      - generic [ref=e147]:
        - generic [ref=e148]:
          - img [ref=e150]
          - generic [ref=e152]:
            - heading "Keyword Normalisation" [level=3] [ref=e153]
            - paragraph [ref=e154]: Standardize brand names, acronyms, and custom terminology
        - generic [ref=e155]:
          - img [ref=e157]
          - generic [ref=e160]:
            - heading "Medical Keyterm Correction" [level=3] [ref=e161]
            - paragraph [ref=e162]: Ensure accurate transcription of medical terminology
    - contentinfo [ref=e163]:
      - generic [ref=e164]:
        - paragraph [ref=e165]: The fastest way to add voice AI to your products
        - paragraph [ref=e166]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e167]:
          - link "Go to Pricing page" [ref=e168] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e169] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e170]:
      - generic [ref=e171]:
        - generic [ref=e172]:
          - img "Shunya Labs" [ref=e173]
          - paragraph [ref=e174]: Shunya Labs, Inc.
        - generic [ref=e175]:
          - paragraph [ref=e176]: Product
          - list [ref=e177]:
            - listitem [ref=e178]:
              - link "Overview" [ref=e179] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e180]:
              - link "Models" [ref=e181] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e182]:
              - link "Voice Agents" [ref=e183] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e184]:
              - link "Speech Intelligence" [ref=e185] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e186]:
              - link "Audio Processing" [ref=e187] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e188]:
              - link "Deployment" [ref=e189] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e190]:
          - paragraph [ref=e191]: Models
          - list [ref=e192]:
            - listitem [ref=e193]:
              - link "Language Models" [ref=e194] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e195]:
              - link "Zero STT Indic" [ref=e196] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e197]:
              - link "Zero STT Codeswitch" [ref=e198] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e199]:
              - link "Specialised Models" [ref=e200] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e201]:
              - link "Zero STT Med" [ref=e202] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e203]:
              - link "On Device Models" [ref=e204] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e205]:
          - paragraph [ref=e206]: Solutions
          - list [ref=e207]:
            - listitem [ref=e208]:
              - link "Contact Centers" [ref=e209] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e210]:
              - link "Media & Entertainment" [ref=e211] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e212]:
              - link "Healthcare" [ref=e213] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e214]:
          - paragraph [ref=e215]: Resources
          - list [ref=e216]:
            - listitem [ref=e217]:
              - link "Blogs" [ref=e218] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e219]:
              - link "Benchmarks" [ref=e220] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e221]:
              - link "News & Media" [ref=e222] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e223]:
              - link "Patents" [ref=e224] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e225]:
              - link "Research" [ref=e226] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e228]:
          - link "Documentation" [ref=e229] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e231]:
          - listitem [ref=e232]:
            - link "About us" [ref=e233] [cursor=pointer]:
              - /url: /about
        - list [ref=e235]:
          - listitem [ref=e236]:
            - link "Pricing" [ref=e237] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e238]:
        - paragraph [ref=e239]: Follow us on
        - generic [ref=e240]:
          - link [ref=e241] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e242]
          - link [ref=e244] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e245]
          - link [ref=e247] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e248]
          - link [ref=e250] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e251]
      - generic [ref=e253]:
        - paragraph [ref=e254]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e255]:
          - link "Privacy" [ref=e256] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e257] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e258] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e259] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e260] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e261]
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