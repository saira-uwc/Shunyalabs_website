# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/overview/design.spec.js >> Product - Overview design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [layout] Section "Foundation Models Built for Every Need" background: expected rgb(12, 0, 36) but got rgb(247, 244, 255)

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "End-to-End Voice Agent Orchestration" background: expected rgb(23, 23, 23) but got rgb(237, 244, 248)

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Intelligence Features That Give You Control" background: expected rgb(11, 11, 15) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Studio-Quality Audio Processing" background: expected rgb(12, 0, 36) but got rgb(247, 244, 255)

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Deploy Anywhere, Your Way" background: expected rgb(11, 11, 15) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

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
Error: [content] Text content "Build complete voice agents with Shunya Labs' intelligence layer— a fully integrated platform from voice input to intelligent response." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Get a single API with speech-to-text, LLM orchestration, and text-to-speech in real time. No complex integrations—just seamless voice AI." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Our custom-built voice stack optimizes every layer—STT, TTS, and runtime orchestration—for minimal latency and synchronized speech-to-speech flow." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 24 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 24
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
    - generic [ref=e9]:
      - heading "The Complete Voice AI Stack for" [level=1] [ref=e10]
      - heading "Developers and Enterprises" [level=2] [ref=e11]
      - generic [ref=e12]:
        - generic [ref=e13]:
          - generic [ref=e14]: BUILT FOR
          - generic [ref=e15]: Developers
        - generic [ref=e17]:
          - generic [ref=e18]: READY FOR
          - generic [ref=e19]: Enterprises
    - generic [ref=e21]:
      - generic [ref=e22]:
        - heading "Foundation Models Built for Every Need" [level=2] [ref=e23]:
          - text: Foundation Models Built
          - text: for Every Need
        - paragraph [ref=e24]: Choose from our suite of specialized models designed for exceptional language support, tailored use cases, and flexible deployment.
      - generic [ref=e26]:
        - generic [ref=e27] [cursor=pointer]:
          - heading "Language Models" [level=3] [ref=e29]
          - paragraph [ref=e30]: Comprehensive multilingual support for 200+ languages, including Indic languages
          - link "Learn more →" [ref=e31]:
            - /url: /language-models
            - text: Learn more
            - generic [ref=e32]: →
        - generic [ref=e33] [cursor=pointer]:
          - heading "Specialized Models" [level=3] [ref=e35]
          - paragraph [ref=e36]: Purpose-built for specific industries and use cases
          - generic [ref=e37]:
            - text: Learn more
            - generic [ref=e38]: →
        - generic [ref=e39] [cursor=pointer]:
          - heading "On-Device Models" [level=3] [ref=e41]
          - paragraph [ref=e42]: Lightweight models optimized for edge deployment
          - generic [ref=e43]:
            - text: Learn more
            - generic [ref=e44]: →
    - generic [ref=e45]:
      - generic [ref=e46]:
        - heading "End-to-End Voice Agent Orchestration" [level=2] [ref=e47]
        - paragraph [ref=e48]: Build complete voice agents with Shunya Labs' intelligence layer- a fully integrated platform from voice input to intelligent response.
      - generic [ref=e49]:
        - generic [ref=e50]:
          - img [ref=e52]
          - generic [ref=e54]:
            - heading "Simple Voice Agent Integration" [level=3] [ref=e55]
            - paragraph [ref=e56]: Get a single API with speech-to-text, LLM orchestration, and text-to-speech in real time. No complex integrations-just seamless voice AI.
        - generic [ref=e57]:
          - img [ref=e59]
          - generic [ref=e63]:
            - heading "Optimized Full-Stack Performance" [level=3] [ref=e64]
            - paragraph [ref=e65]: Our custom-built voice stack optimizes every layer-STT, TTS, and runtime orchestration-for minimal latency and synchronized speech-to-speech flow.
        - generic [ref=e66]:
          - img [ref=e68]
          - generic [ref=e71]:
            - heading "Flexible Deployment Options" [level=3] [ref=e72]
            - paragraph [ref=e73]: Deploy fully managed or self-hosted. Full support for HIPAA and GDPR compliance.
    - generic [ref=e74]:
      - generic [ref=e75]:
        - heading "Intelligence Features That Give You Control" [level=2] [ref=e76]
        - paragraph [ref=e77]: Unlock powerful AI capabilities with flexible transcription features designed for precision and insight.
      - generic [ref=e78]:
        - generic [ref=e79]:
          - img [ref=e81]
          - heading "Language Expertise" [level=3] [ref=e83]
        - generic [ref=e85]:
          - generic [ref=e86]:
            - img [ref=e88]
            - heading "Language Identification" [level=4] [ref=e91]
            - paragraph [ref=e92]: Automatically detect the language in your audio files.
          - generic [ref=e93]:
            - img [ref=e95]
            - heading "Translation" [level=4] [ref=e97]
            - paragraph [ref=e98]: Translate audio during or after transcription.
          - generic [ref=e99]:
            - img [ref=e101]
            - heading "Transliteration" [level=4] [ref=e103]
            - paragraph [ref=e104]: Convert output to your preferred script.
      - generic [ref=e105]:
        - generic [ref=e106]:
          - img [ref=e108]
          - heading "Conversational Insights" [level=3] [ref=e110]
        - generic [ref=e112]:
          - generic [ref=e113]:
            - img [ref=e115]
            - heading "Intent Detection" [level=4] [ref=e125]
            - paragraph [ref=e126]: Understand the purpose behind every conversation
          - generic [ref=e127]:
            - img [ref=e129]
            - heading "Sentiment Analysis" [level=4] [ref=e131]
            - paragraph [ref=e132]: Track emotional tone across interactions.
          - generic [ref=e133]:
            - img [ref=e135]
            - heading "Emotion Diarization" [level=4] [ref=e137]
            - paragraph [ref=e138]: Get granular emotion tracking throughout conversations
      - generic [ref=e139]:
        - generic [ref=e140]:
          - img [ref=e142]
          - heading "Smart Formatting" [level=3] [ref=e144]
        - generic [ref=e146]:
          - generic [ref=e147]:
            - img [ref=e149]
            - heading "Timestamps" [level=4] [ref=e152]
            - paragraph [ref=e153]: Sentence or word-level timing for precise navigation
          - generic [ref=e154]:
            - img [ref=e156]
            - heading "Speaker Diarization" [level=4] [ref=e158]
            - paragraph [ref=e159]: Separate transcripts by speaker automatically
          - generic [ref=e160]:
            - img [ref=e162]
            - heading "Speaker Identification" [level=4] [ref=e164]
            - paragraph [ref=e165]: Customize speaker labels for personalized transcripts
      - link "See full list of features in documentation" [ref=e167] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/intelligence/overview#diarization
        - text: See full list of features in documentation
        - img [ref=e168]
    - generic [ref=e171]:
      - heading "Studio-Quality Audio Processing" [level=2] [ref=e172]
      - paragraph [ref=e173]: Deliver crystal-clear voice experiences with our proprietary audio tools.
      - generic [ref=e174]:
        - generic [ref=e175]:
          - img [ref=e177]
          - heading "Denoiser" [level=3] [ref=e179]
          - paragraph [ref=e180]: Remove background noise for pristine audio quality
        - generic [ref=e181]:
          - img [ref=e183]
          - heading "Enhancement" [level=3] [ref=e186]
          - paragraph [ref=e187]: Optimize audio clarity and intelligibility
    - generic [ref=e189]:
      - heading "Deploy Anywhere, Your Way" [level=2] [ref=e190]
      - paragraph [ref=e191]: Maintain complete control over your data with flexible hosting options.
      - generic [ref=e192]:
        - generic [ref=e193]:
          - img [ref=e195]
          - heading "Cloud" [level=3] [ref=e197]
          - paragraph [ref=e198]: Scalable infrastructure for rapid deployment
        - generic [ref=e199]:
          - img [ref=e201]
          - heading "Edge" [level=3] [ref=e205]
          - paragraph [ref=e206]: Low-latency processing at the network edge
        - generic [ref=e207]:
          - img [ref=e209]
          - heading "On-Premises" [level=3] [ref=e213]
          - paragraph [ref=e214]: Full data sovereignty and security control
    - contentinfo [ref=e215]:
      - generic [ref=e216]:
        - paragraph [ref=e217]: The fastest way to add voice AI to your products
        - paragraph [ref=e218]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e219]:
          - link "Go to Pricing page" [ref=e220] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e221] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e222]:
      - generic [ref=e223]:
        - generic [ref=e224]:
          - img "Shunya Labs" [ref=e225]
          - paragraph [ref=e226]: Shunya Labs, Inc.
        - generic [ref=e227]:
          - paragraph [ref=e228]: Product
          - list [ref=e229]:
            - listitem [ref=e230]:
              - link "Overview" [ref=e231] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e232]:
              - link "Models" [ref=e233] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e234]:
              - link "Voice Agents" [ref=e235] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e236]:
              - link "Speech Intelligence" [ref=e237] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e238]:
              - link "Audio Processing" [ref=e239] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e240]:
              - link "Deployment" [ref=e241] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e242]:
          - paragraph [ref=e243]: Models
          - list [ref=e244]:
            - listitem [ref=e245]:
              - link "Language Models" [ref=e246] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e247]:
              - link "Zero STT Indic" [ref=e248] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e249]:
              - link "Zero STT Codeswitch" [ref=e250] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e251]:
              - link "Specialised Models" [ref=e252] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e253]:
              - link "Zero STT Med" [ref=e254] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e255]:
              - link "On Device Models" [ref=e256] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e257]:
          - paragraph [ref=e258]: Solutions
          - list [ref=e259]:
            - listitem [ref=e260]:
              - link "Contact Centers" [ref=e261] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e262]:
              - link "Media & Entertainment" [ref=e263] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e264]:
              - link "Healthcare" [ref=e265] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e266]:
          - paragraph [ref=e267]: Resources
          - list [ref=e268]:
            - listitem [ref=e269]:
              - link "Blogs" [ref=e270] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e271]:
              - link "Benchmarks" [ref=e272] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e273]:
              - link "News & Media" [ref=e274] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e275]:
              - link "Patents" [ref=e276] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e277]:
              - link "Research" [ref=e278] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e280]:
          - link "Documentation" [ref=e281] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e283]:
          - listitem [ref=e284]:
            - link "About us" [ref=e285] [cursor=pointer]:
              - /url: /about
        - list [ref=e287]:
          - listitem [ref=e288]:
            - link "Pricing" [ref=e289] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e290]:
        - paragraph [ref=e291]: Follow us on
        - generic [ref=e292]:
          - link [ref=e293] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e294]
          - link [ref=e296] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e297]
          - link [ref=e299] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e300]
          - link [ref=e302] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e303]
      - generic [ref=e305]:
        - paragraph [ref=e306]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e307]:
          - link "Privacy" [ref=e308] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e309] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e310] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e311] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e312] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e313]
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
     |                                                                                      ^ Error: 24 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```