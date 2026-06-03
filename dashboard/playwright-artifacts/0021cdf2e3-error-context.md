# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/speech-intelligence/design.spec.js >> Product - Speech Intelligence design compliance >> Figma design compliance
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
    - generic [ref=e9]:
      - generic [ref=e10]:
        - heading "Understand Every Conversation with Intelligence Features" [level=1] [ref=e11]
        - heading "Full flexibility and control across multilingual support, smart formatting, conversational analytics, and advanced AI capabilities." [level=2] [ref=e12]
      - link "Try Now" [ref=e13] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e14]:
      - generic [ref=e15]:
        - heading "Language Expertise" [level=2] [ref=e18]
        - generic [ref=e19]:
          - generic [ref=e20]:
            - img [ref=e22]
            - generic [ref=e24]:
              - heading "Language Identification" [level=3] [ref=e25]
              - paragraph [ref=e26]: Automatically detect the language in your audio files
          - generic [ref=e27]:
            - img [ref=e29]
            - generic [ref=e32]:
              - heading "Translation" [level=3] [ref=e33]
              - paragraph [ref=e34]: Translate audio during or after transcription
          - generic [ref=e35]:
            - img [ref=e37]
            - generic [ref=e41]:
              - heading "Transliteration" [level=3] [ref=e42]
              - paragraph [ref=e43]: Convert output to your preferred script
      - generic [ref=e44]:
        - heading "Smart Formatting" [level=2] [ref=e47]
        - generic [ref=e48]:
          - generic [ref=e49]:
            - img [ref=e51]
            - generic [ref=e53]:
              - heading "Speaker Diarization" [level=3] [ref=e54]
              - paragraph [ref=e55]: Separate transcripts by speaker automatically
          - generic [ref=e56]:
            - img [ref=e58]
            - generic [ref=e60]:
              - heading "Speaker Identification" [level=3] [ref=e61]
              - paragraph [ref=e62]: Customize speaker labels for personalized transcripts
          - generic [ref=e63]:
            - img [ref=e65]
            - generic [ref=e69]:
              - heading "Word Timestamps" [level=3] [ref=e70]
              - paragraph [ref=e71]: Word-level timing for precise navigation
          - generic [ref=e72]:
            - img [ref=e74]
            - generic [ref=e76]:
              - heading "Profanity and Keyword Hashing" [level=3] [ref=e77]
              - paragraph [ref=e78]: Filter and mask profanity or custom keywords
      - generic [ref=e79]:
        - heading "Conversational Insights" [level=2] [ref=e82]
        - generic [ref=e83]:
          - generic [ref=e84]:
            - img [ref=e86]
            - generic [ref=e88]:
              - heading "Intent Detection" [level=3] [ref=e89]
              - paragraph [ref=e90]: Understand the purpose behind every conversation
          - generic [ref=e91]:
            - img [ref=e93]
            - generic [ref=e95]:
              - heading "Sentiment Analysis" [level=3] [ref=e96]
              - paragraph [ref=e97]: Track emotional tone across interactions
          - generic [ref=e98]:
            - img [ref=e100]
            - generic [ref=e102]:
              - heading "Emotion Diarization" [level=3] [ref=e103]
              - paragraph [ref=e104]: Get clearer emotion tracking throughout conversations
          - generic [ref=e105]:
            - img [ref=e107]
            - generic [ref=e109]:
              - heading "Summarisation" [level=3] [ref=e110]
              - paragraph [ref=e111]: Generate concise summaries from audio or text
    - generic [ref=e114]:
      - heading "Advanced Features" [level=2] [ref=e117]
      - generic [ref=e118]:
        - generic [ref=e119]:
          - img [ref=e121]
          - generic [ref=e123]:
            - heading "Keyword Normalisation" [level=3] [ref=e124]
            - paragraph [ref=e125]: Standardize brand names, acronyms, and custom terminology
        - generic [ref=e126]:
          - img [ref=e128]
          - generic [ref=e131]:
            - heading "Medical Keyterm Correction" [level=3] [ref=e132]
            - paragraph [ref=e133]: Ensure accurate transcription of medical terminology
    - contentinfo [ref=e134]:
      - generic [ref=e138]:
        - paragraph [ref=e139]: The fastest way to add voice AI to your products
        - paragraph [ref=e140]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e141]:
          - link "Go to Pricing page" [ref=e142] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e143] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e144]:
      - generic [ref=e145]:
        - generic [ref=e146]:
          - img "Shunya Labs" [ref=e147]
          - paragraph [ref=e148]: Shunya Labs, Inc.
        - generic [ref=e149]:
          - paragraph [ref=e150]: Product
          - list [ref=e151]:
            - listitem [ref=e152]:
              - link "Overview" [ref=e153] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e154]:
              - link "Models" [ref=e155] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e156]:
              - link "Voice Agents" [ref=e157] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e158]:
              - link "Speech Intelligence" [ref=e159] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e160]:
              - link "Audio Processing" [ref=e161] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e162]:
              - link "Deployment" [ref=e163] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e164]:
          - paragraph [ref=e165]: Models
          - list [ref=e166]:
            - listitem [ref=e167]:
              - link "Language Models" [ref=e168] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e169]:
              - link "Zero STT Indic" [ref=e170] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e171]:
              - link "Zero STT Codeswitch" [ref=e172] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e173]:
              - link "Specialised Models" [ref=e174] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e175]:
              - link "Zero STT Med" [ref=e176] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e177]:
              - link "On Device Models" [ref=e178] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e179]:
          - paragraph [ref=e180]: Solutions
          - list [ref=e181]:
            - listitem [ref=e182]:
              - link "Contact Centers" [ref=e183] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e184]:
              - link "Media & Entertainment" [ref=e185] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e186]:
              - link "Healthcare" [ref=e187] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e188]:
          - paragraph [ref=e189]: Resources
          - list [ref=e190]:
            - listitem [ref=e191]:
              - link "Blogs" [ref=e192] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e193]:
              - link "Benchmarks" [ref=e194] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e195]:
              - link "News & Media" [ref=e196] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e197]:
              - link "Patents" [ref=e198] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e199]:
              - link "Research" [ref=e200] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e202]:
          - link "Documentation" [ref=e203] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e205]:
          - listitem [ref=e206]:
            - link "About us" [ref=e207] [cursor=pointer]:
              - /url: /about
        - list [ref=e209]:
          - listitem [ref=e210]:
            - link "Pricing" [ref=e211] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e212]:
        - paragraph [ref=e213]: Follow us on
        - generic [ref=e214]:
          - link [ref=e215] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e216]
          - link [ref=e218] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e219]
          - link [ref=e221] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e222]
          - link [ref=e224] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e225]
      - generic [ref=e227]:
        - paragraph [ref=e228]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e229]:
          - link "Privacy" [ref=e230] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e231] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e232] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e233] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e234] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e235]
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