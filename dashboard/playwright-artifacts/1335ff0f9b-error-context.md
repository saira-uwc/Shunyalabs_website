# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/overview/design.spec.js >> Product - Overview design compliance >> Figma design compliance
- Location: tests/modules/product/overview/design.spec.js:13:3

# Error details

```
Error: [headings] Heading "Developers and Enterprises" tag: expected <h1> but got <h2>

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Page title: expected "Shunya Labs Voice AI Platform Overview | Speech-to-Text & Voice Agents" but got "Complete Voice AI Stack for Developers & Enterprises | Shunya Labs"

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
    - generic [ref=e10]:
      - heading "The Complete Voice AI Stack for" [level=1] [ref=e11]
      - heading "Developers and Enterprises" [level=2] [ref=e12]
      - generic [ref=e13]:
        - generic [ref=e14]:
          - generic [ref=e15]: BUILT FOR
          - generic [ref=e16]: Developers
        - generic [ref=e18]:
          - generic [ref=e19]: READY FOR
          - generic [ref=e20]: Enterprises
    - generic [ref=e22]:
      - generic [ref=e23]:
        - heading "Foundation Models Built for Every Need" [level=2] [ref=e24]:
          - text: Foundation Models Built
          - text: for Every Need
        - paragraph [ref=e25]: Choose from our suite of specialized models designed for exceptional language support, tailored use cases, and flexible deployment.
      - generic [ref=e27]:
        - generic [ref=e28] [cursor=pointer]:
          - heading "Language Models" [level=3] [ref=e30]
          - paragraph [ref=e31]: Comprehensive multilingual support for 200+ languages, including Indic languages
          - link "Learn more →" [ref=e32]:
            - /url: /language-models
            - text: Learn more
            - generic [ref=e33]: →
        - generic [ref=e34] [cursor=pointer]:
          - heading "Specialized Models" [level=3] [ref=e36]
          - paragraph [ref=e37]: Purpose-built for specific industries and use cases
          - generic [ref=e38]:
            - text: Learn more
            - generic [ref=e39]: →
        - generic [ref=e40] [cursor=pointer]:
          - heading "On-Device Models" [level=3] [ref=e42]
          - paragraph [ref=e43]: Lightweight models optimized for edge deployment
          - generic [ref=e44]:
            - text: Learn more
            - generic [ref=e45]: →
    - generic [ref=e46]:
      - generic [ref=e47]:
        - heading "End-to-End Voice Agent Orchestration" [level=2] [ref=e48]
        - paragraph [ref=e49]: Build complete voice agents with Shunya Labs' intelligence layer— a fully integrated platform from voice input to intelligent response.
      - generic [ref=e50]:
        - generic [ref=e51]:
          - img [ref=e53]
          - generic [ref=e55]:
            - heading "Simple Voice Agent Integration" [level=3] [ref=e56]
            - paragraph [ref=e57]: Get a single API with speech-to-text, LLM orchestration, and text-to-speech in real time. No complex integrations—just seamless voice AI.
        - generic [ref=e58]:
          - img [ref=e60]
          - generic [ref=e64]:
            - heading "Optimized Full-Stack Performance" [level=3] [ref=e65]
            - paragraph [ref=e66]: Our custom-built voice stack optimizes every layer—STT, TTS, and runtime orchestration—for minimal latency and synchronized speech-to-speech flow.
        - generic [ref=e67]:
          - img [ref=e69]
          - generic [ref=e72]:
            - heading "Flexible Deployment Options" [level=3] [ref=e73]
            - paragraph [ref=e74]: Deploy fully managed or self-hosted. Full support for HIPAA and GDPR compliance.
    - generic [ref=e75]:
      - generic [ref=e76]:
        - heading "Intelligence Features That Give You Control" [level=2] [ref=e77]
        - paragraph [ref=e78]: Unlock powerful AI capabilities with flexible transcription features designed for precision and insight.
      - generic [ref=e79]:
        - generic [ref=e80]:
          - img [ref=e82]
          - heading "Language Expertise" [level=3] [ref=e84]
        - generic [ref=e86]:
          - generic [ref=e87]:
            - img [ref=e89]
            - heading "Language Identification" [level=4] [ref=e92]
            - paragraph [ref=e93]: Automatically detect the language in your audio files.
          - generic [ref=e94]:
            - img [ref=e96]
            - heading "Translation" [level=4] [ref=e98]
            - paragraph [ref=e99]: Translate audio during or after transcription.
          - generic [ref=e100]:
            - img [ref=e102]
            - heading "Transliteration" [level=4] [ref=e104]
            - paragraph [ref=e105]: Convert output to your preferred script.
      - generic [ref=e106]:
        - generic [ref=e107]:
          - img [ref=e109]
          - heading "Conversational Insights" [level=3] [ref=e111]
        - generic [ref=e113]:
          - generic [ref=e114]:
            - img [ref=e116]
            - heading "Intent Detection" [level=4] [ref=e126]
            - paragraph [ref=e127]: Understand the purpose behind every conversation
          - generic [ref=e128]:
            - img [ref=e130]
            - heading "Sentiment Analysis" [level=4] [ref=e132]
            - paragraph [ref=e133]: Track emotional tone across interactions.
          - generic [ref=e134]:
            - img [ref=e136]
            - heading "Emotion Diarization" [level=4] [ref=e138]
            - paragraph [ref=e139]: Get granular emotion tracking throughout conversations
      - generic [ref=e140]:
        - generic [ref=e141]:
          - img [ref=e143]
          - heading "Smart Formatting" [level=3] [ref=e145]
        - generic [ref=e147]:
          - generic [ref=e148]:
            - img [ref=e150]
            - heading "Timestamps" [level=4] [ref=e153]
            - paragraph [ref=e154]: Sentence or word-level timing for precise navigation
          - generic [ref=e155]:
            - img [ref=e157]
            - heading "Speaker Diarization" [level=4] [ref=e159]
            - paragraph [ref=e160]: Separate transcripts by speaker automatically
          - generic [ref=e161]:
            - img [ref=e163]
            - heading "Speaker Identification" [level=4] [ref=e165]
            - paragraph [ref=e166]: Customize speaker labels for personalized transcripts
      - link "See full list of features in documentation" [ref=e168] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/features/diarization
        - text: See full list of features in documentation
        - img [ref=e169]
    - generic [ref=e172]:
      - heading "Studio-Quality Audio Processing" [level=2] [ref=e173]
      - paragraph [ref=e174]: Deliver crystal-clear voice experiences with our proprietary audio tools.
      - generic [ref=e175]:
        - generic [ref=e176]:
          - img [ref=e178]
          - heading "Denoiser" [level=3] [ref=e180]
          - paragraph [ref=e181]: Remove background noise for pristine audio quality
        - generic [ref=e182]:
          - img [ref=e184]
          - heading "Enhancement" [level=3] [ref=e187]
          - paragraph [ref=e188]: Optimize audio clarity and intelligibility
    - generic [ref=e190]:
      - heading "Deploy Anywhere, Your Way" [level=2] [ref=e191]
      - paragraph [ref=e192]: Maintain complete control over your data with flexible hosting options.
      - generic [ref=e193]:
        - generic [ref=e194]:
          - img [ref=e196]
          - heading "Cloud" [level=3] [ref=e198]
          - paragraph [ref=e199]: Scalable infrastructure for rapid deployment
        - generic [ref=e200]:
          - img [ref=e202]
          - heading "Edge" [level=3] [ref=e206]
          - paragraph [ref=e207]: Low-latency processing at the network edge
        - generic [ref=e208]:
          - img [ref=e210]
          - heading "On-Premises" [level=3] [ref=e214]
          - paragraph [ref=e215]: Full data sovereignty and security control
    - contentinfo [ref=e216]:
      - generic [ref=e220]:
        - paragraph [ref=e221]: The fastest way to add voice AI to your products
        - paragraph [ref=e222]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e223]:
          - link "Go to Pricing page" [ref=e224] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e225] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e226]:
      - generic [ref=e227]:
        - generic [ref=e228]:
          - img "Shunya Labs" [ref=e229]
          - paragraph [ref=e230]: Shunya Labs, Inc.
        - generic [ref=e231]:
          - paragraph [ref=e232]: Product
          - list [ref=e233]:
            - listitem [ref=e234]:
              - link "Overview" [ref=e235] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e236]:
              - link "Models" [ref=e237] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e238]:
              - link "Voice Agents" [ref=e239] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e240]:
              - link "Speech Intelligence" [ref=e241] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e242]:
              - link "Audio Processing" [ref=e243] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e244]:
              - link "Deployment" [ref=e245] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e246]:
          - paragraph [ref=e247]: Models
          - list [ref=e248]:
            - listitem [ref=e249]:
              - link "Language Models" [ref=e250] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e251]:
              - link "Zero STT Indic" [ref=e252] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e253]:
              - link "Zero STT Codeswitch" [ref=e254] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e255]:
              - link "Specialised Models" [ref=e256] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e257]:
              - link "Zero STT Med" [ref=e258] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e259]:
              - link "On Device Models" [ref=e260] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e261]:
          - paragraph [ref=e262]: Solutions
          - list [ref=e263]:
            - listitem [ref=e264]:
              - link "Contact Centers" [ref=e265] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e266]:
              - link "Media & Entertainment" [ref=e267] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e268]:
              - link "Healthcare" [ref=e269] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e270]:
          - paragraph [ref=e271]: Resources
          - list [ref=e272]:
            - listitem [ref=e273]:
              - link "Blogs" [ref=e274] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e275]:
              - link "Benchmarks" [ref=e276] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e277]:
              - link "News & Media" [ref=e278] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e279]:
              - link "Patents" [ref=e280] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e281]:
              - link "Research" [ref=e282] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e284]:
          - link "Documentation" [ref=e285] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e287]:
          - listitem [ref=e288]:
            - link "About us" [ref=e289] [cursor=pointer]:
              - /url: /about
        - list [ref=e291]:
          - listitem [ref=e292]:
            - link "Pricing" [ref=e293] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e294]:
        - paragraph [ref=e295]: Follow us on
        - generic [ref=e296]:
          - link [ref=e297] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e298]
          - link [ref=e300] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e301]
          - link [ref=e303] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e304]
          - link [ref=e306] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e307]
      - generic [ref=e309]:
        - paragraph [ref=e310]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e311]:
          - link "Privacy" [ref=e312] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e313] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e314] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e315] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e316] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e317]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { pageRegistry } from '../../../../test-data/page-registry.js';
  3  | import { runDesignComplianceTest } from '../../../../utils/design-validator.js';
  4  | 
  5  | const pageEntry = pageRegistry.find(
  6  |   (page) => page.moduleKey === 'product' && page.slug === 'overview'
  7  | );
  8  | 
  9  | const moduleLabel = pageEntry?.moduleLabel || 'product';
  10 | const pageLabel = pageEntry?.pageLabel || 'overview';
  11 | 
  12 | test.describe(`${moduleLabel} - ${pageLabel} design compliance`, () => {
  13 |   test('Figma design compliance', async ({ page }) => {
  14 |     const failures = await runDesignComplianceTest({ page, pageEntry });
  15 | 
  16 |     for (const f of failures) {
  17 |       expect.soft(null, `[${f.section}] ${f.message}`).toBeTruthy();
  18 |     }
  19 | 
> 20 |     expect(failures.length, `${failures.length} design compliance issue(s) found`).toBe(0);
     |                                                                                    ^ Error: 2 design compliance issue(s) found
  21 |   });
  22 | });
  23 | 
```