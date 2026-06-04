# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/speech-intelligence/design.spec.js >> Product - Speech Intelligence design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [links] CTA/Link "https://www.facebook.com/people/ShunyaLabsAI/61577801851308/" not found on page

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
      - generic [ref=e37]:
        - heading "Understand Every Conversation with Intelligence Features" [level=1] [ref=e38]
        - heading "Full flexibility and control across multilingual support, smart formatting, conversational analytics, and advanced AI capabilities." [level=2] [ref=e39]
      - link "Try Now" [ref=e40] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e41]:
      - generic [ref=e42]:
        - heading "Language Expertise" [level=2] [ref=e45]
        - generic [ref=e46]:
          - generic [ref=e47]:
            - img [ref=e49]
            - generic [ref=e51]:
              - heading "Language Identification" [level=3] [ref=e52]
              - paragraph [ref=e53]: Automatically detect the language in your audio files
          - generic [ref=e54]:
            - img [ref=e56]
            - generic [ref=e59]:
              - heading "Translation" [level=3] [ref=e60]
              - paragraph [ref=e61]: Translate audio during or after transcription
          - generic [ref=e62]:
            - img [ref=e64]
            - generic [ref=e68]:
              - heading "Transliteration" [level=3] [ref=e69]
              - paragraph [ref=e70]: Convert output to your preferred script
      - generic [ref=e71]:
        - heading "Smart Formatting" [level=2] [ref=e74]
        - generic [ref=e75]:
          - generic [ref=e76]:
            - img [ref=e78]
            - generic [ref=e80]:
              - heading "Speaker Diarization" [level=3] [ref=e81]
              - paragraph [ref=e82]: Separate transcripts by speaker automatically
          - generic [ref=e83]:
            - img [ref=e85]
            - generic [ref=e87]:
              - heading "Speaker Identification" [level=3] [ref=e88]
              - paragraph [ref=e89]: Customize speaker labels for personalized transcripts
          - generic [ref=e90]:
            - img [ref=e92]
            - generic [ref=e96]:
              - heading "Word Timestamps" [level=3] [ref=e97]
              - paragraph [ref=e98]: Word-level timing for precise navigation
          - generic [ref=e99]:
            - img [ref=e101]
            - generic [ref=e103]:
              - heading "Profanity and Keyword Hashing" [level=3] [ref=e104]
              - paragraph [ref=e105]: Filter and mask profanity or custom keywords
      - generic [ref=e106]:
        - heading "Conversational Insights" [level=2] [ref=e109]
        - generic [ref=e110]:
          - generic [ref=e111]:
            - img [ref=e113]
            - generic [ref=e115]:
              - heading "Intent Detection" [level=3] [ref=e116]
              - paragraph [ref=e117]: Understand the purpose behind every conversation
          - generic [ref=e118]:
            - img [ref=e120]
            - generic [ref=e122]:
              - heading "Sentiment Analysis" [level=3] [ref=e123]
              - paragraph [ref=e124]: Track emotional tone across interactions
          - generic [ref=e125]:
            - img [ref=e127]
            - generic [ref=e129]:
              - heading "Emotion Diarization" [level=3] [ref=e130]
              - paragraph [ref=e131]: Get clearer emotion tracking throughout conversations
          - generic [ref=e132]:
            - img [ref=e134]
            - generic [ref=e136]:
              - heading "Summarisation" [level=3] [ref=e137]
              - paragraph [ref=e138]: Generate concise summaries from audio or text
    - generic [ref=e141]:
      - heading "Advanced Features" [level=2] [ref=e144]
      - generic [ref=e145]:
        - generic [ref=e146]:
          - img [ref=e148]
          - generic [ref=e150]:
            - heading "Keyword Normalisation" [level=3] [ref=e151]
            - paragraph [ref=e152]: Standardize brand names, acronyms, and custom terminology
        - generic [ref=e153]:
          - img [ref=e155]
          - generic [ref=e158]:
            - heading "Medical Keyterm Correction" [level=3] [ref=e159]
            - paragraph [ref=e160]: Ensure accurate transcription of medical terminology
    - contentinfo [ref=e161]:
      - generic [ref=e162]:
        - paragraph [ref=e163]: The fastest way to add voice AI to your products
        - paragraph [ref=e164]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e165]:
          - link "Go to Pricing page" [ref=e166] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e167] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e168]:
      - generic [ref=e169]:
        - generic [ref=e170]:
          - img "Shunya Labs" [ref=e171]
          - paragraph [ref=e172]: Shunya Labs, Inc.
        - generic [ref=e173]:
          - paragraph [ref=e174]: Product
          - list [ref=e175]:
            - listitem [ref=e176]:
              - link "Overview" [ref=e177] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e178]:
              - link "Models" [ref=e179] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e180]:
              - link "Voice Agents" [ref=e181] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e182]:
              - link "Speech Intelligence" [ref=e183] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e184]:
              - link "Audio Processing" [ref=e185] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e186]:
              - link "Deployment" [ref=e187] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e188]:
          - paragraph [ref=e189]: Models
          - list [ref=e190]:
            - listitem [ref=e191]:
              - link "Language Models" [ref=e192] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e193]:
              - link "Zero STT Indic" [ref=e194] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e195]:
              - link "Zero STT Codeswitch" [ref=e196] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e197]:
              - link "Specialised Models" [ref=e198] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e199]:
              - link "Zero STT Med" [ref=e200] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e201]:
              - link "On Device Models" [ref=e202] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e203]:
          - paragraph [ref=e204]: Solutions
          - list [ref=e205]:
            - listitem [ref=e206]:
              - link "Contact Centers" [ref=e207] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e208]:
              - link "Media & Entertainment" [ref=e209] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e210]:
              - link "Healthcare" [ref=e211] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e212]:
          - paragraph [ref=e213]: Resources
          - list [ref=e214]:
            - listitem [ref=e215]:
              - link "Blogs" [ref=e216] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e217]:
              - link "Benchmarks" [ref=e218] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e219]:
              - link "News & Media" [ref=e220] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e221]:
              - link "Patents" [ref=e222] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e223]:
              - link "Research" [ref=e224] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e226]:
          - link "Documentation" [ref=e227] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e229]:
          - listitem [ref=e230]:
            - link "About us" [ref=e231] [cursor=pointer]:
              - /url: /about
        - list [ref=e233]:
          - listitem [ref=e234]:
            - link "Pricing" [ref=e235] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e236]:
        - paragraph [ref=e237]: Follow us on
        - generic [ref=e238]:
          - link [ref=e239] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e240]
          - link [ref=e242] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e243]
          - link [ref=e245] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e246]
          - link [ref=e248] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e249]
      - generic [ref=e251]:
        - paragraph [ref=e252]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e253]:
          - link "Privacy" [ref=e254] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e255] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e256] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e257] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e258] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e259]
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