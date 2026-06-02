# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/overview/design.spec.js >> Product - Overview design compliance >> Figma design compliance
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
    - generic [ref=e39]:
      - heading "The Complete Voice AI Stack for" [level=1] [ref=e40]
      - heading "Developers and Enterprises" [level=2] [ref=e41]
      - generic [ref=e42]:
        - generic [ref=e43]:
          - generic [ref=e44]: BUILT FOR
          - generic [ref=e45]: Developers
        - generic [ref=e47]:
          - generic [ref=e48]: READY FOR
          - generic [ref=e49]: Enterprises
    - generic [ref=e51]:
      - generic [ref=e52]:
        - heading "Foundation Models Built for Every Need" [level=2] [ref=e53]:
          - text: Foundation Models Built
          - text: for Every Need
        - paragraph [ref=e54]: Choose from our suite of specialized models designed for exceptional language support, tailored use cases, and flexible deployment.
      - generic [ref=e56]:
        - generic [ref=e57] [cursor=pointer]:
          - heading "Language Models" [level=3] [ref=e59]
          - paragraph [ref=e60]: Comprehensive multilingual support for 200+ languages, including Indic languages
          - link "Learn more →" [ref=e61]:
            - /url: /language-models
            - text: Learn more
            - generic [ref=e62]: →
        - generic [ref=e63] [cursor=pointer]:
          - heading "Specialized Models" [level=3] [ref=e65]
          - paragraph [ref=e66]: Purpose-built for specific industries and use cases
          - generic [ref=e67]:
            - text: Learn more
            - generic [ref=e68]: →
        - generic [ref=e69] [cursor=pointer]:
          - heading "On-Device Models" [level=3] [ref=e71]
          - paragraph [ref=e72]: Lightweight models optimized for edge deployment
          - generic [ref=e73]:
            - text: Learn more
            - generic [ref=e74]: →
    - generic [ref=e75]:
      - generic [ref=e76]:
        - heading "End-to-End Voice Agent Orchestration" [level=2] [ref=e77]
        - paragraph [ref=e78]: Build complete voice agents with Shunya Labs' intelligence layer— a fully integrated platform from voice input to intelligent response.
      - generic [ref=e79]:
        - generic [ref=e80]:
          - img [ref=e82]
          - generic [ref=e84]:
            - heading "Simple Voice Agent Integration" [level=3] [ref=e85]
            - paragraph [ref=e86]: Get a single API with speech-to-text, LLM orchestration, and text-to-speech in real time. No complex integrations—just seamless voice AI.
        - generic [ref=e87]:
          - img [ref=e89]
          - generic [ref=e93]:
            - heading "Optimized Full-Stack Performance" [level=3] [ref=e94]
            - paragraph [ref=e95]: Our custom-built voice stack optimizes every layer—STT, TTS, and runtime orchestration—for minimal latency and synchronized speech-to-speech flow.
        - generic [ref=e96]:
          - img [ref=e98]
          - generic [ref=e101]:
            - heading "Flexible Deployment Options" [level=3] [ref=e102]
            - paragraph [ref=e103]: Deploy fully managed or self-hosted. Full support for HIPAA and GDPR compliance.
    - generic [ref=e104]:
      - generic [ref=e105]:
        - heading "Intelligence Features That Give You Control" [level=2] [ref=e106]
        - paragraph [ref=e107]: Unlock powerful AI capabilities with flexible transcription features designed for precision and insight.
      - generic [ref=e108]:
        - generic [ref=e109]:
          - img [ref=e111]
          - heading "Language Expertise" [level=3] [ref=e113]
        - generic [ref=e115]:
          - generic [ref=e116]:
            - img [ref=e118]
            - heading "Language Identification" [level=4] [ref=e121]
            - paragraph [ref=e122]: Automatically detect the language in your audio files.
          - generic [ref=e124]:
            - img [ref=e126]
            - heading "Translation" [level=4] [ref=e128]
            - paragraph [ref=e129]: Translate audio during or after transcription.
          - generic [ref=e131]:
            - img [ref=e133]
            - heading "Transliteration" [level=4] [ref=e135]
            - paragraph [ref=e136]: Convert output to your preferred script.
      - generic [ref=e137]:
        - generic [ref=e138]:
          - img [ref=e140]
          - heading "Conversational Insights" [level=3] [ref=e142]
        - generic [ref=e144]:
          - generic [ref=e145]:
            - img [ref=e147]
            - heading "Intent Detection" [level=4] [ref=e157]
            - paragraph [ref=e158]: Understand the purpose behind every conversation
          - generic [ref=e160]:
            - img [ref=e162]
            - heading "Sentiment Analysis" [level=4] [ref=e164]
            - paragraph [ref=e165]: Track emotional tone across interactions.
          - generic [ref=e167]:
            - img [ref=e169]
            - heading "Emotion Diarization" [level=4] [ref=e171]
            - paragraph [ref=e172]: Get granular emotion tracking throughout conversations
      - generic [ref=e173]:
        - generic [ref=e174]:
          - img [ref=e176]
          - heading "Smart Formatting" [level=3] [ref=e178]
        - generic [ref=e180]:
          - generic [ref=e181]:
            - img [ref=e183]
            - heading "Timestamps" [level=4] [ref=e186]
            - paragraph [ref=e187]: Sentence or word-level timing for precise navigation
          - generic [ref=e189]:
            - img [ref=e191]
            - heading "Speaker Diarization" [level=4] [ref=e193]
            - paragraph [ref=e194]: Separate transcripts by speaker automatically
          - generic [ref=e196]:
            - img [ref=e198]
            - heading "Speaker Identification" [level=4] [ref=e200]
            - paragraph [ref=e201]: Customize speaker labels for personalized transcripts
      - link "See full list of features in documentation" [ref=e203] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/features/diarization
        - text: See full list of features in documentation
        - img [ref=e204]
    - generic [ref=e207]:
      - heading "Studio-Quality Audio Processing" [level=2] [ref=e208]
      - paragraph [ref=e209]: Deliver crystal-clear voice experiences with our proprietary audio tools.
      - generic [ref=e210]:
        - generic [ref=e211]:
          - img [ref=e213]
          - heading "Denoiser" [level=3] [ref=e215]
          - paragraph [ref=e216]: Remove background noise for pristine audio quality
        - generic [ref=e217]:
          - img [ref=e219]
          - heading "Enhancement" [level=3] [ref=e222]
          - paragraph [ref=e223]: Optimize audio clarity and intelligibility
    - generic [ref=e225]:
      - heading "Deploy Anywhere, Your Way" [level=2] [ref=e226]
      - paragraph [ref=e227]: Maintain complete control over your data with flexible hosting options.
      - generic [ref=e228]:
        - generic [ref=e229]:
          - img [ref=e231]
          - heading "Cloud" [level=3] [ref=e233]
          - paragraph [ref=e234]: Scalable infrastructure for rapid deployment
        - generic [ref=e235]:
          - img [ref=e237]
          - heading "Edge" [level=3] [ref=e241]
          - paragraph [ref=e242]: Low-latency processing at the network edge
        - generic [ref=e243]:
          - img [ref=e245]
          - heading "On-Premises" [level=3] [ref=e249]
          - paragraph [ref=e250]: Full data sovereignty and security control
    - contentinfo [ref=e251]:
      - generic [ref=e252]:
        - paragraph [ref=e253]: The fastest way to add voice AI to your products
        - paragraph [ref=e254]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e255]:
          - link "Go to Pricing page" [ref=e256] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e257] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e258]:
      - generic [ref=e259]:
        - generic [ref=e260]:
          - img "Shunya Labs" [ref=e261]
          - paragraph [ref=e262]: Shunya Labs, Inc.
        - generic [ref=e263]:
          - paragraph [ref=e264]: Product
          - list [ref=e265]:
            - listitem [ref=e266]:
              - link "Overview" [ref=e267] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e268]:
              - link "Models" [ref=e269] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e270]:
              - link "Voice Agents" [ref=e271] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e272]:
              - link "Speech Intelligence" [ref=e273] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e274]:
              - link "Audio Processing" [ref=e275] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e276]:
              - link "Deployment" [ref=e277] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e278]:
          - paragraph [ref=e279]: Models
          - list [ref=e280]:
            - listitem [ref=e281]:
              - link "Language Models" [ref=e282] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e283]:
              - link "Zero STT Indic" [ref=e284] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e285]:
              - link "Zero STT Codeswitch" [ref=e286] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e287]:
              - link "Specialised Models" [ref=e288] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e289]:
              - link "Zero STT Med" [ref=e290] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e291]:
              - link "On Device Models" [ref=e292] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e293]:
          - paragraph [ref=e294]: Solutions
          - list [ref=e295]:
            - listitem [ref=e296]:
              - link "Contact Centers" [ref=e297] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e298]:
              - link "Media & Entertainment" [ref=e299] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e300]:
              - link "Healthcare" [ref=e301] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e302]:
          - paragraph [ref=e303]: Resources
          - list [ref=e304]:
            - listitem [ref=e305]:
              - link "Blogs" [ref=e306] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e307]:
              - link "Benchmarks" [ref=e308] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e309]:
              - link "News & Media" [ref=e310] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e311]:
              - link "Patents" [ref=e312] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e313]:
              - link "Research" [ref=e314] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e316]:
          - link "Documentation" [ref=e317] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e319]:
          - listitem [ref=e320]:
            - link "About us" [ref=e321] [cursor=pointer]:
              - /url: /about
        - list [ref=e323]:
          - listitem [ref=e324]:
            - link "Pricing" [ref=e325] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e326]:
        - paragraph [ref=e327]: Follow us on
        - generic [ref=e328]:
          - link [ref=e329] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e330]
          - link [ref=e332] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e333]
          - link [ref=e335] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e336]
          - link [ref=e338] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e339]
      - generic [ref=e341]:
        - paragraph [ref=e342]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e343]:
          - link "Privacy" [ref=e344] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e345] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e346] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e347] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e348] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e349]
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