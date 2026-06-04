# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/overview/design.spec.js >> Product - Overview design compliance >> Figma design compliance
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
    - generic [ref=e11]:
      - heading "The Complete Voice AI Stack for" [level=1] [ref=e12]
      - heading "Developers and Enterprises" [level=2] [ref=e13]
      - generic [ref=e14]:
        - generic [ref=e15]:
          - generic [ref=e16]: BUILT FOR
          - generic [ref=e17]: Developers
        - generic [ref=e19]:
          - generic [ref=e20]: READY FOR
          - generic [ref=e21]: Enterprises
    - generic [ref=e23]:
      - generic [ref=e24]:
        - heading "Foundation Models Built for Every Need" [level=2] [ref=e25]:
          - text: Foundation Models Built
          - text: for Every Need
        - paragraph [ref=e26]: Choose from our suite of specialized models designed for exceptional language support, tailored use cases, and flexible deployment.
      - generic [ref=e28]:
        - generic [ref=e29] [cursor=pointer]:
          - heading "Language Models" [level=3] [ref=e31]
          - paragraph [ref=e32]: Comprehensive multilingual support for 200+ languages, including Indic languages
          - link "Learn more →" [ref=e33]:
            - /url: /language-models
            - text: Learn more
            - generic [ref=e34]: →
        - generic [ref=e35] [cursor=pointer]:
          - heading "Specialized Models" [level=3] [ref=e37]
          - paragraph [ref=e38]: Purpose-built for specific industries and use cases
          - generic [ref=e39]:
            - text: Learn more
            - generic [ref=e40]: →
        - generic [ref=e41] [cursor=pointer]:
          - heading "On-Device Models" [level=3] [ref=e43]
          - paragraph [ref=e44]: Lightweight models optimized for edge deployment
          - generic [ref=e45]:
            - text: Learn more
            - generic [ref=e46]: →
    - generic [ref=e47]:
      - generic [ref=e48]:
        - heading "End-to-End Voice Agent Orchestration" [level=2] [ref=e49]
        - paragraph [ref=e50]: Build complete voice agents with Shunya Labs' intelligence layer— a fully integrated platform from voice input to intelligent response.
      - generic [ref=e51]:
        - generic [ref=e52]:
          - img [ref=e54]
          - generic [ref=e56]:
            - heading "Simple Voice Agent Integration" [level=3] [ref=e57]
            - paragraph [ref=e58]: Get a single API with speech-to-text, LLM orchestration, and text-to-speech in real time. No complex integrations—just seamless voice AI.
        - generic [ref=e59]:
          - img [ref=e61]
          - generic [ref=e65]:
            - heading "Optimized Full-Stack Performance" [level=3] [ref=e66]
            - paragraph [ref=e67]: Our custom-built voice stack optimizes every layer—STT, TTS, and runtime orchestration—for minimal latency and synchronized speech-to-speech flow.
        - generic [ref=e68]:
          - img [ref=e70]
          - generic [ref=e73]:
            - heading "Flexible Deployment Options" [level=3] [ref=e74]
            - paragraph [ref=e75]: Deploy fully managed or self-hosted. Full support for HIPAA and GDPR compliance.
    - generic [ref=e76]:
      - generic [ref=e77]:
        - heading "Intelligence Features That Give You Control" [level=2] [ref=e78]
        - paragraph [ref=e79]: Unlock powerful AI capabilities with flexible transcription features designed for precision and insight.
      - generic [ref=e80]:
        - generic [ref=e81]:
          - img [ref=e83]
          - heading "Language Expertise" [level=3] [ref=e85]
        - generic [ref=e87]:
          - generic [ref=e88]:
            - img [ref=e90]
            - heading "Language Identification" [level=4] [ref=e93]
            - paragraph [ref=e94]: Automatically detect the language in your audio files.
          - generic [ref=e95]:
            - img [ref=e97]
            - heading "Translation" [level=4] [ref=e99]
            - paragraph [ref=e100]: Translate audio during or after transcription.
          - generic [ref=e101]:
            - img [ref=e103]
            - heading "Transliteration" [level=4] [ref=e105]
            - paragraph [ref=e106]: Convert output to your preferred script.
      - generic [ref=e107]:
        - generic [ref=e108]:
          - img [ref=e110]
          - heading "Conversational Insights" [level=3] [ref=e112]
        - generic [ref=e114]:
          - generic [ref=e115]:
            - img [ref=e117]
            - heading "Intent Detection" [level=4] [ref=e127]
            - paragraph [ref=e128]: Understand the purpose behind every conversation
          - generic [ref=e129]:
            - img [ref=e131]
            - heading "Sentiment Analysis" [level=4] [ref=e133]
            - paragraph [ref=e134]: Track emotional tone across interactions.
          - generic [ref=e135]:
            - img [ref=e137]
            - heading "Emotion Diarization" [level=4] [ref=e139]
            - paragraph [ref=e140]: Get granular emotion tracking throughout conversations
      - generic [ref=e141]:
        - generic [ref=e142]:
          - img [ref=e144]
          - heading "Smart Formatting" [level=3] [ref=e146]
        - generic [ref=e148]:
          - generic [ref=e149]:
            - img [ref=e151]
            - heading "Timestamps" [level=4] [ref=e154]
            - paragraph [ref=e155]: Sentence or word-level timing for precise navigation
          - generic [ref=e156]:
            - img [ref=e158]
            - heading "Speaker Diarization" [level=4] [ref=e160]
            - paragraph [ref=e161]: Separate transcripts by speaker automatically
          - generic [ref=e162]:
            - img [ref=e164]
            - heading "Speaker Identification" [level=4] [ref=e166]
            - paragraph [ref=e167]: Customize speaker labels for personalized transcripts
      - link "See full list of features in documentation" [ref=e169] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/features/diarization
        - text: See full list of features in documentation
        - img [ref=e170]
    - generic [ref=e173]:
      - heading "Studio-Quality Audio Processing" [level=2] [ref=e174]
      - paragraph [ref=e175]: Deliver crystal-clear voice experiences with our proprietary audio tools.
      - generic [ref=e176]:
        - generic [ref=e177]:
          - img [ref=e179]
          - heading "Denoiser" [level=3] [ref=e181]
          - paragraph [ref=e182]: Remove background noise for pristine audio quality
        - generic [ref=e183]:
          - img [ref=e185]
          - heading "Enhancement" [level=3] [ref=e188]
          - paragraph [ref=e189]: Optimize audio clarity and intelligibility
    - generic [ref=e191]:
      - heading "Deploy Anywhere, Your Way" [level=2] [ref=e192]
      - paragraph [ref=e193]: Maintain complete control over your data with flexible hosting options.
      - generic [ref=e194]:
        - generic [ref=e195]:
          - img [ref=e197]
          - heading "Cloud" [level=3] [ref=e199]
          - paragraph [ref=e200]: Scalable infrastructure for rapid deployment
        - generic [ref=e201]:
          - img [ref=e203]
          - heading "Edge" [level=3] [ref=e207]
          - paragraph [ref=e208]: Low-latency processing at the network edge
        - generic [ref=e209]:
          - img [ref=e211]
          - heading "On-Premises" [level=3] [ref=e215]
          - paragraph [ref=e216]: Full data sovereignty and security control
    - contentinfo [ref=e217]:
      - generic [ref=e218]:
        - paragraph [ref=e219]: The fastest way to add voice AI to your products
        - paragraph [ref=e220]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e221]:
          - link "Go to Pricing page" [ref=e222] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e223] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e224]:
      - generic [ref=e225]:
        - generic [ref=e226]:
          - img "Shunya Labs" [ref=e227]
          - paragraph [ref=e228]: Shunya Labs, Inc.
        - generic [ref=e229]:
          - paragraph [ref=e230]: Product
          - list [ref=e231]:
            - listitem [ref=e232]:
              - link "Overview" [ref=e233] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e234]:
              - link "Models" [ref=e235] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e236]:
              - link "Voice Agents" [ref=e237] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e238]:
              - link "Speech Intelligence" [ref=e239] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e240]:
              - link "Audio Processing" [ref=e241] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e242]:
              - link "Deployment" [ref=e243] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e244]:
          - paragraph [ref=e245]: Models
          - list [ref=e246]:
            - listitem [ref=e247]:
              - link "Language Models" [ref=e248] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e249]:
              - link "Zero STT Indic" [ref=e250] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e251]:
              - link "Zero STT Codeswitch" [ref=e252] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e253]:
              - link "Specialised Models" [ref=e254] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e255]:
              - link "Zero STT Med" [ref=e256] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e257]:
              - link "On Device Models" [ref=e258] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e259]:
          - paragraph [ref=e260]: Solutions
          - list [ref=e261]:
            - listitem [ref=e262]:
              - link "Contact Centers" [ref=e263] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e264]:
              - link "Media & Entertainment" [ref=e265] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e266]:
              - link "Healthcare" [ref=e267] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e268]:
          - paragraph [ref=e269]: Resources
          - list [ref=e270]:
            - listitem [ref=e271]:
              - link "Blogs" [ref=e272] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e273]:
              - link "Benchmarks" [ref=e274] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e275]:
              - link "News & Media" [ref=e276] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e277]:
              - link "Patents" [ref=e278] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e279]:
              - link "Research" [ref=e280] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e282]:
          - link "Documentation" [ref=e283] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e285]:
          - listitem [ref=e286]:
            - link "About us" [ref=e287] [cursor=pointer]:
              - /url: /about
        - list [ref=e289]:
          - listitem [ref=e290]:
            - link "Pricing" [ref=e291] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e292]:
        - paragraph [ref=e293]: Follow us on
        - generic [ref=e294]:
          - link [ref=e295] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e296]
          - link [ref=e298] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e299]
          - link [ref=e301] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e302]
          - link [ref=e304] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e305]
      - generic [ref=e307]:
        - paragraph [ref=e308]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e309]:
          - link "Privacy" [ref=e310] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e311] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e312] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e313] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e314] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e315]
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