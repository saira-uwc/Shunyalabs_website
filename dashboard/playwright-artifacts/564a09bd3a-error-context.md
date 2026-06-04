# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/use-cases/design.spec.js >> Solutions - Use Cases design compliance >> Figma design compliance
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
  - generic [ref=e2]:
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
        - heading "Enterprise Use Cases" [level=1] [ref=e38]
        - img "Enterprise Use Cases" [ref=e41]
      - generic [ref=e42]:
        - heading "Custom applications tailored to your specific context and workflows." [level=2] [ref=e43]
        - generic [ref=e44]:
          - generic [ref=e45]:
            - img [ref=e47]
            - generic [ref=e50]:
              - heading "Custom vocabularies" [level=3] [ref=e51]
              - paragraph [ref=e52]: Add custom vocabularies and pronunciations to specialized models
          - generic [ref=e53]:
            - img [ref=e55]
            - generic [ref=e58]:
              - heading "Business logic integration" [level=3] [ref=e59]
              - paragraph [ref=e60]: Embed your rules, workflows, and context
          - generic [ref=e61]:
            - img [ref=e63]
            - generic [ref=e65]:
              - heading "Flexible deployment" [level=3] [ref=e66]
              - paragraph [ref=e67]: Cloud, edge, or on-premises based on your needs
          - generic [ref=e68]:
            - img [ref=e70]
            - generic [ref=e73]:
              - heading "Speaker identification" [level=3] [ref=e74]
              - paragraph [ref=e75]: Register workplace voices for personalized speaker tags
          - generic [ref=e76]:
            - img [ref=e78]
            - generic [ref=e81]:
              - heading "Structured outputs" [level=3] [ref=e82]
              - paragraph [ref=e83]: Format data for seamless system integration
        - generic [ref=e84]:
          - generic [ref=e85]:
            - generic [ref=e86]:
              - img [ref=e89]
              - generic [ref=e91]:
                - heading "Voice Agents & Assistants" [level=2] [ref=e92]
                - paragraph [ref=e93]: Conversational automation with intelligent action execution.
            - generic [ref=e94]:
              - img "Voice Agents & Assistants" [ref=e96]
              - generic [ref=e97]:
                - generic [ref=e98]:
                  - generic [ref=e99]: •
                  - generic [ref=e100]:
                    - paragraph [ref=e101]: 200+ language
                    - paragraph [ref=e102]: Wide coverage with multilingual support
                - generic [ref=e103]:
                  - generic [ref=e104]: •
                  - generic [ref=e105]:
                    - paragraph [ref=e106]: Context-aware
                    - paragraph [ref=e107]: Understands your business workflows
                - generic [ref=e108]:
                  - generic [ref=e109]: •
                  - generic [ref=e110]:
                    - paragraph [ref=e111]: One integration
                    - paragraph [ref=e112]: Single API for workflows & automation
                - generic [ref=e113]:
                  - generic [ref=e114]: •
                  - generic [ref=e115]:
                    - paragraph [ref=e116]: Custom entities
                    - paragraph [ref=e117]: Recognizes your business terminology
                - link "Learn more →" [ref=e118] [cursor=pointer]:
                  - /url: /voice-agent
          - generic [ref=e119]:
            - generic [ref=e120]:
              - img [ref=e123]
              - generic [ref=e126]:
                - heading "Medical Documentation" [level=2] [ref=e127]
                - paragraph [ref=e128]: Clinical-grade speech recognition with structured EHR integration.
            - generic [ref=e129]:
              - img "Medical Documentation" [ref=e131]
              - generic [ref=e132]:
                - generic [ref=e133]:
                  - generic [ref=e134]: •
                  - generic [ref=e135]:
                    - paragraph [ref=e136]: Medical specialized
                    - paragraph [ref=e137]: Trained on medications, procedures, and diagnoses
                - generic [ref=e138]:
                  - generic [ref=e139]: •
                  - generic [ref=e140]:
                    - paragraph [ref=e141]: Noise-optimized
                    - paragraph [ref=e142]: Performs in clinical environments with equipment noise
                - generic [ref=e143]:
                  - generic [ref=e144]: •
                  - generic [ref=e145]:
                    - paragraph [ref=e146]: Structured outputs
                    - paragraph [ref=e147]: Direct FHIR, HL7, and EHR format compatibility
                - generic [ref=e148]:
                  - generic [ref=e149]: •
                  - generic [ref=e150]:
                    - paragraph [ref=e151]: HIPAA-compliant
                    - paragraph [ref=e152]: On-premises or dedicated tenant deployment
                - link "Learn more →" [ref=e153] [cursor=pointer]:
                  - /url: /healthcare
          - generic [ref=e154]:
            - generic [ref=e155]:
              - img [ref=e158]
              - generic [ref=e160]:
                - heading "Contact Center Intelligence" [level=2] [ref=e161]
                - paragraph [ref=e162]: Real-time analytics and agent assistance with conversational insights.
            - generic [ref=e163]:
              - img "Contact Center Intelligence" [ref=e165]
              - generic [ref=e166]:
                - generic [ref=e167]:
                  - generic [ref=e168]: •
                  - generic [ref=e169]:
                    - paragraph [ref=e170]: Live transcription
                    - paragraph [ref=e171]: Streaming ASR with <100ms latency for continuous support
                - generic [ref=e172]:
                  - generic [ref=e173]: •
                  - generic [ref=e174]:
                    - paragraph [ref=e175]: Emotion tracking
                    - paragraph [ref=e176]: Speaker-level sentiment throughout conversations
                - generic [ref=e177]:
                  - generic [ref=e178]: •
                  - generic [ref=e179]:
                    - paragraph [ref=e180]: Agent assist
                    - paragraph [ref=e181]: Real-time guidance for upsell opportunities
                - generic [ref=e182]:
                  - generic [ref=e183]: •
                  - generic [ref=e184]:
                    - paragraph [ref=e185]: Automated ticketing
                    - paragraph [ref=e186]: Structured extraction with CRM integration
                - link "Learn more →" [ref=e187] [cursor=pointer]:
                  - /url: /contact-centers
          - generic [ref=e188]:
            - generic [ref=e189]:
              - img [ref=e192]
              - generic [ref=e197]:
                - heading "Meeting Transcription" [level=2] [ref=e198]
                - paragraph [ref=e199]: High-fidelity capture with speaker attribution and structured output.
            - generic [ref=e200]:
              - img "Meeting Transcription" [ref=e202]
              - generic [ref=e203]:
                - generic [ref=e204]:
                  - generic [ref=e205]: •
                  - generic [ref=e206]:
                    - paragraph [ref=e207]: Speaker diarization
                    - paragraph [ref=e208]: Identifies who said what, even with crosstalk
                - generic [ref=e209]:
                  - generic [ref=e210]: •
                  - generic [ref=e211]:
                    - paragraph [ref=e212]: Numerical extraction
                    - paragraph [ref=e213]: Captures amounts, dates, and percentages accurately
                - generic [ref=e214]:
                  - generic [ref=e215]: •
                  - generic [ref=e216]:
                    - paragraph [ref=e217]: Word timestamps
                    - paragraph [ref=e218]: Precise alignment for video synchronization
                - generic [ref=e219]:
                  - generic [ref=e220]: •
                  - generic [ref=e221]:
                    - paragraph [ref=e222]: Custom vocabulary
                    - paragraph [ref=e223]: Recognizes brand names and proper nouns
                - link "Learn more →" [ref=e224] [cursor=pointer]:
                  - /url: /contact
    - contentinfo [ref=e225]:
      - generic [ref=e226]:
        - paragraph [ref=e227]: The fastest way to add voice AI to your products
        - paragraph [ref=e228]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e229]:
          - link "Go to Pricing page" [ref=e230] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e231] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e232]:
      - generic [ref=e233]:
        - generic [ref=e234]:
          - img "Shunya Labs" [ref=e235]
          - paragraph [ref=e236]: Shunya Labs, Inc.
        - generic [ref=e237]:
          - paragraph [ref=e238]: Product
          - list [ref=e239]:
            - listitem [ref=e240]:
              - link "Overview" [ref=e241] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e242]:
              - link "Models" [ref=e243] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e244]:
              - link "Voice Agents" [ref=e245] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e246]:
              - link "Speech Intelligence" [ref=e247] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e248]:
              - link "Audio Processing" [ref=e249] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e250]:
              - link "Deployment" [ref=e251] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e252]:
          - paragraph [ref=e253]: Models
          - list [ref=e254]:
            - listitem [ref=e255]:
              - link "Language Models" [ref=e256] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e257]:
              - link "Zero STT Indic" [ref=e258] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e259]:
              - link "Zero STT Codeswitch" [ref=e260] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e261]:
              - link "Specialised Models" [ref=e262] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e263]:
              - link "Zero STT Med" [ref=e264] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e265]:
              - link "On Device Models" [ref=e266] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e267]:
          - paragraph [ref=e268]: Solutions
          - list [ref=e269]:
            - listitem [ref=e270]:
              - link "Contact Centers" [ref=e271] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e272]:
              - link "Media & Entertainment" [ref=e273] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e274]:
              - link "Healthcare" [ref=e275] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e276]:
          - paragraph [ref=e277]: Resources
          - list [ref=e278]:
            - listitem [ref=e279]:
              - link "Blogs" [ref=e280] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e281]:
              - link "Benchmarks" [ref=e282] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e283]:
              - link "News & Media" [ref=e284] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e285]:
              - link "Patents" [ref=e286] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e287]:
              - link "Research" [ref=e288] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e290]:
          - link "Documentation" [ref=e291] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e293]:
          - listitem [ref=e294]:
            - link "About us" [ref=e295] [cursor=pointer]:
              - /url: /about
        - list [ref=e297]:
          - listitem [ref=e298]:
            - link "Pricing" [ref=e299] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e300]:
        - paragraph [ref=e301]: Follow us on
        - generic [ref=e302]:
          - link [ref=e303] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e304]
          - link [ref=e306] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e307]
          - link [ref=e309] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e310]
          - link [ref=e312] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e313]
      - generic [ref=e315]:
        - paragraph [ref=e316]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e317]:
          - link "Privacy" [ref=e318] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e319] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e320] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e321] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e322] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e323]
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