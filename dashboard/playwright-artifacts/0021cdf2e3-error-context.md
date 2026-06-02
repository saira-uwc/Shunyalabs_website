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
    - generic [ref=e10]:
      - generic [ref=e11]:
        - heading "Understand Every Conversation with Intelligence Features" [level=1] [ref=e12]
        - heading "Full flexibility and control across multilingual support, smart formatting, conversational analytics, and advanced AI capabilities." [level=2] [ref=e13]
      - link "Try Now" [ref=e14] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e15]:
      - generic [ref=e16]:
        - heading "Language Expertise" [level=2] [ref=e19]
        - generic [ref=e20]:
          - generic [ref=e21]:
            - img [ref=e23]
            - generic [ref=e25]:
              - heading "Language Identification" [level=3] [ref=e26]
              - paragraph [ref=e27]: Automatically detect the language in your audio files
          - generic [ref=e28]:
            - img [ref=e30]
            - generic [ref=e33]:
              - heading "Translation" [level=3] [ref=e34]
              - paragraph [ref=e35]: Translate audio during or after transcription
          - generic [ref=e36]:
            - img [ref=e38]
            - generic [ref=e42]:
              - heading "Transliteration" [level=3] [ref=e43]
              - paragraph [ref=e44]: Convert output to your preferred script
      - generic [ref=e45]:
        - heading "Smart Formatting" [level=2] [ref=e48]
        - generic [ref=e49]:
          - generic [ref=e50]:
            - img [ref=e52]
            - generic [ref=e54]:
              - heading "Speaker Diarization" [level=3] [ref=e55]
              - paragraph [ref=e56]: Separate transcripts by speaker automatically
          - generic [ref=e57]:
            - img [ref=e59]
            - generic [ref=e61]:
              - heading "Speaker Identification" [level=3] [ref=e62]
              - paragraph [ref=e63]: Customize speaker labels for personalized transcripts
          - generic [ref=e64]:
            - img [ref=e66]
            - generic [ref=e70]:
              - heading "Word Timestamps" [level=3] [ref=e71]
              - paragraph [ref=e72]: Word-level timing for precise navigation
          - generic [ref=e73]:
            - img [ref=e75]
            - generic [ref=e77]:
              - heading "Profanity and Keyword Hashing" [level=3] [ref=e78]
              - paragraph [ref=e79]: Filter and mask profanity or custom keywords
      - generic [ref=e80]:
        - heading "Conversational Insights" [level=2] [ref=e83]
        - generic [ref=e84]:
          - generic [ref=e85]:
            - img [ref=e87]
            - generic [ref=e89]:
              - heading "Intent Detection" [level=3] [ref=e90]
              - paragraph [ref=e91]: Understand the purpose behind every conversation
          - generic [ref=e92]:
            - img [ref=e94]
            - generic [ref=e96]:
              - heading "Sentiment Analysis" [level=3] [ref=e97]
              - paragraph [ref=e98]: Track emotional tone across interactions
          - generic [ref=e99]:
            - img [ref=e101]
            - generic [ref=e103]:
              - heading "Emotion Diarization" [level=3] [ref=e104]
              - paragraph [ref=e105]: Get clearer emotion tracking throughout conversations
          - generic [ref=e106]:
            - img [ref=e108]
            - generic [ref=e110]:
              - heading "Summarisation" [level=3] [ref=e111]
              - paragraph [ref=e112]: Generate concise summaries from audio or text
    - generic [ref=e115]:
      - heading "Advanced Features" [level=2] [ref=e118]
      - generic [ref=e119]:
        - generic [ref=e120]:
          - img [ref=e122]
          - generic [ref=e124]:
            - heading "Keyword Normalisation" [level=3] [ref=e125]
            - paragraph [ref=e126]: Standardize brand names, acronyms, and custom terminology
        - generic [ref=e127]:
          - img [ref=e129]
          - generic [ref=e132]:
            - heading "Medical Keyterm Correction" [level=3] [ref=e133]
            - paragraph [ref=e134]: Ensure accurate transcription of medical terminology
    - contentinfo [ref=e135]:
      - generic [ref=e136]:
        - paragraph [ref=e137]: The fastest way to add voice AI to your products
        - paragraph [ref=e138]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e139]:
          - link "Go to Pricing page" [ref=e140] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e141] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e142]:
      - generic [ref=e143]:
        - generic [ref=e144]:
          - img "Shunya Labs" [ref=e145]
          - paragraph [ref=e146]: Shunya Labs, Inc.
        - generic [ref=e147]:
          - paragraph [ref=e148]: Product
          - list [ref=e149]:
            - listitem [ref=e150]:
              - link "Overview" [ref=e151] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e152]:
              - link "Models" [ref=e153] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e154]:
              - link "Voice Agents" [ref=e155] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e156]:
              - link "Speech Intelligence" [ref=e157] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e158]:
              - link "Audio Processing" [ref=e159] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e160]:
              - link "Deployment" [ref=e161] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e162]:
          - paragraph [ref=e163]: Models
          - list [ref=e164]:
            - listitem [ref=e165]:
              - link "Language Models" [ref=e166] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e167]:
              - link "Zero STT Indic" [ref=e168] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e169]:
              - link "Zero STT Codeswitch" [ref=e170] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e171]:
              - link "Specialised Models" [ref=e172] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e173]:
              - link "Zero STT Med" [ref=e174] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e175]:
              - link "On Device Models" [ref=e176] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e177]:
          - paragraph [ref=e178]: Solutions
          - list [ref=e179]:
            - listitem [ref=e180]:
              - link "Contact Centers" [ref=e181] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e182]:
              - link "Media & Entertainment" [ref=e183] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e184]:
              - link "Healthcare" [ref=e185] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e186]:
          - paragraph [ref=e187]: Resources
          - list [ref=e188]:
            - listitem [ref=e189]:
              - link "Blogs" [ref=e190] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e191]:
              - link "Benchmarks" [ref=e192] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e193]:
              - link "News & Media" [ref=e194] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e195]:
              - link "Patents" [ref=e196] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e197]:
              - link "Research" [ref=e198] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e200]:
          - link "Documentation" [ref=e201] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e203]:
          - listitem [ref=e204]:
            - link "About us" [ref=e205] [cursor=pointer]:
              - /url: /about
        - list [ref=e207]:
          - listitem [ref=e208]:
            - link "Pricing" [ref=e209] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e210]:
        - paragraph [ref=e211]: Follow us on
        - generic [ref=e212]:
          - link [ref=e213] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e214]
          - link [ref=e216] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e217]
          - link [ref=e219] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e220]
          - link [ref=e222] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e223]
      - generic [ref=e225]:
        - paragraph [ref=e226]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e227]:
          - link "Privacy" [ref=e228] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e229] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e230] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e231] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e232] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e233]
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