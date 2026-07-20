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
Error: [content] Text content "About Us" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Playground" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Sign In" not found on page

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
  - generic [ref=e3]:
    - banner:
      - generic [ref=e4]:
        - link "Shunya Labs Logo" [ref=e5] [cursor=pointer]:
          - /url: /
          - img "Shunya Labs Logo" [ref=e6]
        - button "Open menu" [ref=e7] [cursor=pointer]: ☰
    - generic [ref=e8]:
      - generic [ref=e9]:
        - heading "Understand Every Conversation with Intelligence Features" [level=1] [ref=e10]
        - heading "Full flexibility and control across multilingual support, smart formatting, conversational analytics, and advanced AI capabilities." [level=2] [ref=e11]
      - link "Try Now" [ref=e12] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e13]:
      - generic [ref=e14]:
        - heading "Language Expertise" [level=2] [ref=e17]
        - generic [ref=e18]:
          - generic [ref=e19]:
            - img [ref=e22]
            - generic [ref=e24]:
              - heading "Language Identification" [level=3] [ref=e25]
              - paragraph [ref=e26]: Automatically detect the language in your audio files
          - generic [ref=e27]:
            - img [ref=e30]
            - generic [ref=e33]:
              - heading "Translation" [level=3] [ref=e34]
              - paragraph [ref=e35]: Translate audio during or after transcription
          - generic [ref=e36]:
            - img [ref=e39]
            - generic [ref=e43]:
              - heading "Transliteration" [level=3] [ref=e44]
              - paragraph [ref=e45]: Convert output to your preferred script
      - generic [ref=e46]:
        - heading "Smart Formatting" [level=2] [ref=e49]
        - generic [ref=e50]:
          - generic [ref=e51]:
            - img [ref=e54]
            - generic [ref=e56]:
              - heading "Speaker Diarization" [level=3] [ref=e57]
              - paragraph [ref=e58]: Separate transcripts by speaker automatically
          - generic [ref=e59]:
            - img [ref=e62]
            - generic [ref=e64]:
              - heading "Speaker Identification" [level=3] [ref=e65]
              - paragraph [ref=e66]: Customize speaker labels for personalized transcripts
          - generic [ref=e67]:
            - img [ref=e70]
            - generic [ref=e74]:
              - heading "Word Timestamps" [level=3] [ref=e75]
              - paragraph [ref=e76]: Word-level timing for precise navigation
          - generic [ref=e77]:
            - img [ref=e80]
            - generic [ref=e82]:
              - heading "Profanity and Keyword Hashing" [level=3] [ref=e83]
              - paragraph [ref=e84]: Filter and mask profanity or custom keywords
      - generic [ref=e85]:
        - heading "Conversational Insights" [level=2] [ref=e88]
        - generic [ref=e89]:
          - generic [ref=e90]:
            - img [ref=e93]
            - generic [ref=e95]:
              - heading "Intent Detection" [level=3] [ref=e96]
              - paragraph [ref=e97]: Understand the purpose behind every conversation
          - generic [ref=e98]:
            - img [ref=e101]
            - generic [ref=e103]:
              - heading "Sentiment Analysis" [level=3] [ref=e104]
              - paragraph [ref=e105]: Track emotional tone across interactions
          - generic [ref=e106]:
            - img [ref=e109]
            - generic [ref=e111]:
              - heading "Emotion Diarization" [level=3] [ref=e112]
              - paragraph [ref=e113]: Get clearer emotion tracking throughout conversations
          - generic [ref=e114]:
            - img [ref=e117]
            - generic [ref=e119]:
              - heading "Summarisation" [level=3] [ref=e120]
              - paragraph [ref=e121]: Generate concise summaries from audio or text
    - generic [ref=e124]:
      - heading "Advanced Features" [level=2] [ref=e127]
      - generic [ref=e128]:
        - generic [ref=e129]:
          - img [ref=e132]
          - generic [ref=e134]:
            - heading "Keyword Normalisation" [level=3] [ref=e135]
            - paragraph [ref=e136]: Standardize brand names, acronyms, and custom terminology
        - generic [ref=e137]:
          - img [ref=e140]
          - generic [ref=e143]:
            - heading "Medical Keyterm Correction" [level=3] [ref=e144]
            - paragraph [ref=e145]: Ensure accurate transcription of medical terminology
    - contentinfo [ref=e146]:
      - generic [ref=e147]:
        - paragraph [ref=e148]: The fastest way to add voice AI to your products
        - paragraph [ref=e149]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e150]:
          - link "Go to Pricing page" [ref=e151] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e152] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e153]:
      - generic [ref=e154]:
        - generic [ref=e155]:
          - img "Shunya Labs" [ref=e156]
          - paragraph [ref=e157]: Shunya Labs, Inc.
        - generic [ref=e158]:
          - paragraph [ref=e159]: Product
          - list [ref=e160]:
            - listitem [ref=e161]:
              - link "Overview" [ref=e162] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e163]:
              - link "Models" [ref=e164] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e165]:
              - link "Voice Agents" [ref=e166] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e167]:
              - link "Speech Intelligence" [ref=e168] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e169]:
              - link "Audio Processing" [ref=e170] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e171]:
              - link "Deployment" [ref=e172] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e173]:
          - paragraph [ref=e174]: Models
          - list [ref=e175]:
            - listitem [ref=e176]:
              - link "Language Models" [ref=e177] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e178]:
              - link "Zero STT Indic" [ref=e179] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e180]:
              - link "Zero STT Codeswitch" [ref=e181] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e182]:
              - link "Specialised Models" [ref=e183] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e184]:
              - link "Zero STT Med" [ref=e185] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e186]:
              - link "On Device Models" [ref=e187] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e188]:
          - paragraph [ref=e189]: Solutions
          - list [ref=e190]:
            - listitem [ref=e191]:
              - link "Contact Centers" [ref=e192] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e193]:
              - link "Media & Entertainment" [ref=e194] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e195]:
              - link "Healthcare" [ref=e196] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e197]:
          - paragraph [ref=e198]: Resources
          - list [ref=e199]:
            - listitem [ref=e200]:
              - link "Blogs" [ref=e201] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e202]:
              - link "Benchmarks" [ref=e203] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e204]:
              - link "News & Media" [ref=e205] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e206]:
              - link "Patents" [ref=e207] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e208]:
              - link "Research" [ref=e209] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e211]:
          - link "Documentation" [ref=e212] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e214]:
          - listitem [ref=e215]:
            - link "About us" [ref=e216] [cursor=pointer]:
              - /url: /about
        - list [ref=e218]:
          - listitem [ref=e219]:
            - link "Pricing" [ref=e220] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e221]:
        - paragraph [ref=e222]: Follow us on
        - generic [ref=e223]:
          - link [ref=e224] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e225]
          - link [ref=e227] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e228]
          - link [ref=e230] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e231]
          - link [ref=e233] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e234]
      - generic [ref=e236]:
        - paragraph [ref=e237]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e238]:
          - link "Privacy" [ref=e239] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e240] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e241] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e242] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e243] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e244]
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