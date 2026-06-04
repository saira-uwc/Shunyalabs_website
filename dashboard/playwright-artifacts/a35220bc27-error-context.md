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
    - generic [ref=e37]:
      - heading "The Complete Voice AI Stack for" [level=1] [ref=e38]
      - heading "Developers and Enterprises" [level=2] [ref=e39]
      - generic [ref=e40]:
        - generic [ref=e41]:
          - generic [ref=e42]: BUILT FOR
          - generic [ref=e43]: Developers
        - generic [ref=e45]:
          - generic [ref=e46]: READY FOR
          - generic [ref=e47]: Enterprises
    - generic [ref=e49]:
      - generic [ref=e50]:
        - heading "Foundation Models Built for Every Need" [level=2] [ref=e51]:
          - text: Foundation Models Built
          - text: for Every Need
        - paragraph [ref=e52]: Choose from our suite of specialized models designed for exceptional language support, tailored use cases, and flexible deployment.
      - generic [ref=e54]:
        - generic [ref=e55] [cursor=pointer]:
          - heading "Language Models" [level=3] [ref=e57]
          - paragraph [ref=e58]: Comprehensive multilingual support for 200+ languages, including Indic languages
          - link "Learn more →" [ref=e59]:
            - /url: /language-models
            - text: Learn more
            - generic [ref=e60]: →
        - generic [ref=e61] [cursor=pointer]:
          - heading "Specialized Models" [level=3] [ref=e63]
          - paragraph [ref=e64]: Purpose-built for specific industries and use cases
          - generic [ref=e65]:
            - text: Learn more
            - generic [ref=e66]: →
        - generic [ref=e67] [cursor=pointer]:
          - heading "On-Device Models" [level=3] [ref=e69]
          - paragraph [ref=e70]: Lightweight models optimized for edge deployment
          - generic [ref=e71]:
            - text: Learn more
            - generic [ref=e72]: →
    - generic [ref=e73]:
      - generic [ref=e74]:
        - heading "End-to-End Voice Agent Orchestration" [level=2] [ref=e75]
        - paragraph [ref=e76]: Build complete voice agents with Shunya Labs' intelligence layer— a fully integrated platform from voice input to intelligent response.
      - generic [ref=e77]:
        - generic [ref=e78]:
          - img [ref=e80]
          - generic [ref=e82]:
            - heading "Simple Voice Agent Integration" [level=3] [ref=e83]
            - paragraph [ref=e84]: Get a single API with speech-to-text, LLM orchestration, and text-to-speech in real time. No complex integrations—just seamless voice AI.
        - generic [ref=e85]:
          - img [ref=e87]
          - generic [ref=e91]:
            - heading "Optimized Full-Stack Performance" [level=3] [ref=e92]
            - paragraph [ref=e93]: Our custom-built voice stack optimizes every layer—STT, TTS, and runtime orchestration—for minimal latency and synchronized speech-to-speech flow.
        - generic [ref=e94]:
          - img [ref=e96]
          - generic [ref=e99]:
            - heading "Flexible Deployment Options" [level=3] [ref=e100]
            - paragraph [ref=e101]: Deploy fully managed or self-hosted. Full support for HIPAA and GDPR compliance.
    - generic [ref=e102]:
      - generic [ref=e103]:
        - heading "Intelligence Features That Give You Control" [level=2] [ref=e104]
        - paragraph [ref=e105]: Unlock powerful AI capabilities with flexible transcription features designed for precision and insight.
      - generic [ref=e106]:
        - generic [ref=e107]:
          - img [ref=e109]
          - heading "Language Expertise" [level=3] [ref=e111]
        - generic [ref=e113]:
          - generic [ref=e114]:
            - img [ref=e116]
            - heading "Language Identification" [level=4] [ref=e119]
            - paragraph [ref=e120]: Automatically detect the language in your audio files.
          - generic [ref=e122]:
            - img [ref=e124]
            - heading "Translation" [level=4] [ref=e126]
            - paragraph [ref=e127]: Translate audio during or after transcription.
          - generic [ref=e129]:
            - img [ref=e131]
            - heading "Transliteration" [level=4] [ref=e133]
            - paragraph [ref=e134]: Convert output to your preferred script.
      - generic [ref=e135]:
        - generic [ref=e136]:
          - img [ref=e138]
          - heading "Conversational Insights" [level=3] [ref=e140]
        - generic [ref=e142]:
          - generic [ref=e143]:
            - img [ref=e145]
            - heading "Intent Detection" [level=4] [ref=e155]
            - paragraph [ref=e156]: Understand the purpose behind every conversation
          - generic [ref=e158]:
            - img [ref=e160]
            - heading "Sentiment Analysis" [level=4] [ref=e162]
            - paragraph [ref=e163]: Track emotional tone across interactions.
          - generic [ref=e165]:
            - img [ref=e167]
            - heading "Emotion Diarization" [level=4] [ref=e169]
            - paragraph [ref=e170]: Get granular emotion tracking throughout conversations
      - generic [ref=e171]:
        - generic [ref=e172]:
          - img [ref=e174]
          - heading "Smart Formatting" [level=3] [ref=e176]
        - generic [ref=e178]:
          - generic [ref=e179]:
            - img [ref=e181]
            - heading "Timestamps" [level=4] [ref=e184]
            - paragraph [ref=e185]: Sentence or word-level timing for precise navigation
          - generic [ref=e187]:
            - img [ref=e189]
            - heading "Speaker Diarization" [level=4] [ref=e191]
            - paragraph [ref=e192]: Separate transcripts by speaker automatically
          - generic [ref=e194]:
            - img [ref=e196]
            - heading "Speaker Identification" [level=4] [ref=e198]
            - paragraph [ref=e199]: Customize speaker labels for personalized transcripts
      - link "See full list of features in documentation" [ref=e201] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/features/diarization
        - text: See full list of features in documentation
        - img [ref=e202]
    - generic [ref=e205]:
      - heading "Studio-Quality Audio Processing" [level=2] [ref=e206]
      - paragraph [ref=e207]: Deliver crystal-clear voice experiences with our proprietary audio tools.
      - generic [ref=e208]:
        - generic [ref=e209]:
          - img [ref=e211]
          - heading "Denoiser" [level=3] [ref=e213]
          - paragraph [ref=e214]: Remove background noise for pristine audio quality
        - generic [ref=e215]:
          - img [ref=e217]
          - heading "Enhancement" [level=3] [ref=e220]
          - paragraph [ref=e221]: Optimize audio clarity and intelligibility
    - generic [ref=e223]:
      - heading "Deploy Anywhere, Your Way" [level=2] [ref=e224]
      - paragraph [ref=e225]: Maintain complete control over your data with flexible hosting options.
      - generic [ref=e226]:
        - generic [ref=e227]:
          - img [ref=e229]
          - heading "Cloud" [level=3] [ref=e231]
          - paragraph [ref=e232]: Scalable infrastructure for rapid deployment
        - generic [ref=e233]:
          - img [ref=e235]
          - heading "Edge" [level=3] [ref=e239]
          - paragraph [ref=e240]: Low-latency processing at the network edge
        - generic [ref=e241]:
          - img [ref=e243]
          - heading "On-Premises" [level=3] [ref=e247]
          - paragraph [ref=e248]: Full data sovereignty and security control
    - contentinfo [ref=e249]:
      - generic [ref=e250]:
        - paragraph [ref=e251]: The fastest way to add voice AI to your products
        - paragraph [ref=e252]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e253]:
          - link "Go to Pricing page" [ref=e254] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e255] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e256]:
      - generic [ref=e257]:
        - generic [ref=e258]:
          - img "Shunya Labs" [ref=e259]
          - paragraph [ref=e260]: Shunya Labs, Inc.
        - generic [ref=e261]:
          - paragraph [ref=e262]: Product
          - list [ref=e263]:
            - listitem [ref=e264]:
              - link "Overview" [ref=e265] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e266]:
              - link "Models" [ref=e267] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e268]:
              - link "Voice Agents" [ref=e269] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e270]:
              - link "Speech Intelligence" [ref=e271] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e272]:
              - link "Audio Processing" [ref=e273] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e274]:
              - link "Deployment" [ref=e275] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e276]:
          - paragraph [ref=e277]: Models
          - list [ref=e278]:
            - listitem [ref=e279]:
              - link "Language Models" [ref=e280] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e281]:
              - link "Zero STT Indic" [ref=e282] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e283]:
              - link "Zero STT Codeswitch" [ref=e284] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e285]:
              - link "Specialised Models" [ref=e286] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e287]:
              - link "Zero STT Med" [ref=e288] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e289]:
              - link "On Device Models" [ref=e290] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e291]:
          - paragraph [ref=e292]: Solutions
          - list [ref=e293]:
            - listitem [ref=e294]:
              - link "Contact Centers" [ref=e295] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e296]:
              - link "Media & Entertainment" [ref=e297] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e298]:
              - link "Healthcare" [ref=e299] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e300]:
          - paragraph [ref=e301]: Resources
          - list [ref=e302]:
            - listitem [ref=e303]:
              - link "Blogs" [ref=e304] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e305]:
              - link "Benchmarks" [ref=e306] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e307]:
              - link "News & Media" [ref=e308] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e309]:
              - link "Patents" [ref=e310] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e311]:
              - link "Research" [ref=e312] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e314]:
          - link "Documentation" [ref=e315] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e317]:
          - listitem [ref=e318]:
            - link "About us" [ref=e319] [cursor=pointer]:
              - /url: /about
        - list [ref=e321]:
          - listitem [ref=e322]:
            - link "Pricing" [ref=e323] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e324]:
        - paragraph [ref=e325]: Follow us on
        - generic [ref=e326]:
          - link [ref=e327] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e328]
          - link [ref=e330] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e331]
          - link [ref=e333] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e334]
          - link [ref=e336] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e337]
      - generic [ref=e339]:
        - paragraph [ref=e340]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e341]:
          - link "Privacy" [ref=e342] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e343] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e344] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e345] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e346] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e347]
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