# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/use-cases/design.spec.js >> Solutions - Use Cases design compliance >> Figma design compliance
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
  - generic [ref=e2]:
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
      - generic [ref=e11]:
        - heading "Enterprise Use Cases" [level=1] [ref=e12]
        - img "Enterprise Use Cases" [ref=e15]
      - generic [ref=e16]:
        - heading "Custom applications tailored to your specific context and workflows." [level=2] [ref=e17]
        - generic [ref=e18]:
          - generic [ref=e19]:
            - img [ref=e21]
            - generic [ref=e24]:
              - heading "Custom vocabularies" [level=3] [ref=e25]
              - paragraph [ref=e26]: Add custom vocabularies and pronunciations to specialized models
          - generic [ref=e27]:
            - img [ref=e29]
            - generic [ref=e32]:
              - heading "Business logic integration" [level=3] [ref=e33]
              - paragraph [ref=e34]: Embed your rules, workflows, and context
          - generic [ref=e35]:
            - img [ref=e37]
            - generic [ref=e39]:
              - heading "Flexible deployment" [level=3] [ref=e40]
              - paragraph [ref=e41]: Cloud, edge, or on-premises based on your needs
          - generic [ref=e42]:
            - img [ref=e44]
            - generic [ref=e47]:
              - heading "Speaker identification" [level=3] [ref=e48]
              - paragraph [ref=e49]: Register workplace voices for personalized speaker tags
          - generic [ref=e50]:
            - img [ref=e52]
            - generic [ref=e55]:
              - heading "Structured outputs" [level=3] [ref=e56]
              - paragraph [ref=e57]: Format data for seamless system integration
        - generic [ref=e58]:
          - generic [ref=e59]:
            - generic [ref=e60]:
              - img [ref=e63]
              - generic [ref=e65]:
                - heading "Voice Agents & Assistants" [level=2] [ref=e66]
                - paragraph [ref=e67]: Conversational automation with intelligent action execution.
            - generic [ref=e68]:
              - img "Voice Agents & Assistants" [ref=e70]
              - generic [ref=e71]:
                - generic [ref=e72]:
                  - generic [ref=e73]: •
                  - generic [ref=e74]:
                    - paragraph [ref=e75]: 200+ language
                    - paragraph [ref=e76]: Wide coverage with multilingual support
                - generic [ref=e77]:
                  - generic [ref=e78]: •
                  - generic [ref=e79]:
                    - paragraph [ref=e80]: Context-aware
                    - paragraph [ref=e81]: Understands your business workflows
                - generic [ref=e82]:
                  - generic [ref=e83]: •
                  - generic [ref=e84]:
                    - paragraph [ref=e85]: One integration
                    - paragraph [ref=e86]: Single API for workflows & automation
                - generic [ref=e87]:
                  - generic [ref=e88]: •
                  - generic [ref=e89]:
                    - paragraph [ref=e90]: Custom entities
                    - paragraph [ref=e91]: Recognizes your business terminology
                - link "Learn more →" [ref=e92] [cursor=pointer]:
                  - /url: /voice-agent
          - generic [ref=e93]:
            - generic [ref=e94]:
              - img [ref=e97]
              - generic [ref=e100]:
                - heading "Medical Documentation" [level=2] [ref=e101]
                - paragraph [ref=e102]: Clinical-grade speech recognition with structured EHR integration.
            - generic [ref=e103]:
              - img "Medical Documentation" [ref=e105]
              - generic [ref=e106]:
                - generic [ref=e107]:
                  - generic [ref=e108]: •
                  - generic [ref=e109]:
                    - paragraph [ref=e110]: Medical specialized
                    - paragraph [ref=e111]: Trained on medications, procedures, and diagnoses
                - generic [ref=e112]:
                  - generic [ref=e113]: •
                  - generic [ref=e114]:
                    - paragraph [ref=e115]: Noise-optimized
                    - paragraph [ref=e116]: Performs in clinical environments with equipment noise
                - generic [ref=e117]:
                  - generic [ref=e118]: •
                  - generic [ref=e119]:
                    - paragraph [ref=e120]: Structured outputs
                    - paragraph [ref=e121]: Direct FHIR, HL7, and EHR format compatibility
                - generic [ref=e122]:
                  - generic [ref=e123]: •
                  - generic [ref=e124]:
                    - paragraph [ref=e125]: HIPAA-compliant
                    - paragraph [ref=e126]: On-premises or dedicated tenant deployment
                - link "Learn more →" [ref=e127] [cursor=pointer]:
                  - /url: /healthcare
          - generic [ref=e128]:
            - generic [ref=e129]:
              - img [ref=e132]
              - generic [ref=e134]:
                - heading "Contact Center Intelligence" [level=2] [ref=e135]
                - paragraph [ref=e136]: Real-time analytics and agent assistance with conversational insights.
            - generic [ref=e137]:
              - img "Contact Center Intelligence" [ref=e139]
              - generic [ref=e140]:
                - generic [ref=e141]:
                  - generic [ref=e142]: •
                  - generic [ref=e143]:
                    - paragraph [ref=e144]: Live transcription
                    - paragraph [ref=e145]: Streaming ASR with <100ms latency for continuous support
                - generic [ref=e146]:
                  - generic [ref=e147]: •
                  - generic [ref=e148]:
                    - paragraph [ref=e149]: Emotion tracking
                    - paragraph [ref=e150]: Speaker-level sentiment throughout conversations
                - generic [ref=e151]:
                  - generic [ref=e152]: •
                  - generic [ref=e153]:
                    - paragraph [ref=e154]: Agent assist
                    - paragraph [ref=e155]: Real-time guidance for upsell opportunities
                - generic [ref=e156]:
                  - generic [ref=e157]: •
                  - generic [ref=e158]:
                    - paragraph [ref=e159]: Automated ticketing
                    - paragraph [ref=e160]: Structured extraction with CRM integration
                - link "Learn more →" [ref=e161] [cursor=pointer]:
                  - /url: /contact-centers
          - generic [ref=e162]:
            - generic [ref=e163]:
              - img [ref=e166]
              - generic [ref=e171]:
                - heading "Meeting Transcription" [level=2] [ref=e172]
                - paragraph [ref=e173]: High-fidelity capture with speaker attribution and structured output.
            - generic [ref=e174]:
              - img "Meeting Transcription" [ref=e176]
              - generic [ref=e177]:
                - generic [ref=e178]:
                  - generic [ref=e179]: •
                  - generic [ref=e180]:
                    - paragraph [ref=e181]: Speaker diarization
                    - paragraph [ref=e182]: Identifies who said what, even with crosstalk
                - generic [ref=e183]:
                  - generic [ref=e184]: •
                  - generic [ref=e185]:
                    - paragraph [ref=e186]: Numerical extraction
                    - paragraph [ref=e187]: Captures amounts, dates, and percentages accurately
                - generic [ref=e188]:
                  - generic [ref=e189]: •
                  - generic [ref=e190]:
                    - paragraph [ref=e191]: Word timestamps
                    - paragraph [ref=e192]: Precise alignment for video synchronization
                - generic [ref=e193]:
                  - generic [ref=e194]: •
                  - generic [ref=e195]:
                    - paragraph [ref=e196]: Custom vocabulary
                    - paragraph [ref=e197]: Recognizes brand names and proper nouns
                - link "Learn more →" [ref=e198] [cursor=pointer]:
                  - /url: /contact
    - contentinfo [ref=e199]:
      - generic [ref=e200]:
        - paragraph [ref=e201]: The fastest way to add voice AI to your products
        - paragraph [ref=e202]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e203]:
          - link "Go to Pricing page" [ref=e204] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e205] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e206]:
      - generic [ref=e207]:
        - generic [ref=e208]:
          - img "Shunya Labs" [ref=e209]
          - paragraph [ref=e210]: Shunya Labs, Inc.
        - generic [ref=e211]:
          - paragraph [ref=e212]: Product
          - list [ref=e213]:
            - listitem [ref=e214]:
              - link "Overview" [ref=e215] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e216]:
              - link "Models" [ref=e217] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e218]:
              - link "Voice Agents" [ref=e219] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e220]:
              - link "Speech Intelligence" [ref=e221] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e222]:
              - link "Audio Processing" [ref=e223] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e224]:
              - link "Deployment" [ref=e225] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e226]:
          - paragraph [ref=e227]: Models
          - list [ref=e228]:
            - listitem [ref=e229]:
              - link "Language Models" [ref=e230] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e231]:
              - link "Zero STT Indic" [ref=e232] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e233]:
              - link "Zero STT Codeswitch" [ref=e234] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e235]:
              - link "Specialised Models" [ref=e236] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e237]:
              - link "Zero STT Med" [ref=e238] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e239]:
              - link "On Device Models" [ref=e240] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e241]:
          - paragraph [ref=e242]: Solutions
          - list [ref=e243]:
            - listitem [ref=e244]:
              - link "Contact Centers" [ref=e245] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e246]:
              - link "Media & Entertainment" [ref=e247] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e248]:
              - link "Healthcare" [ref=e249] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e250]:
          - paragraph [ref=e251]: Resources
          - list [ref=e252]:
            - listitem [ref=e253]:
              - link "Blogs" [ref=e254] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e255]:
              - link "Benchmarks" [ref=e256] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e257]:
              - link "News & Media" [ref=e258] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e259]:
              - link "Patents" [ref=e260] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e261]:
              - link "Research" [ref=e262] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e264]:
          - link "Documentation" [ref=e265] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e267]:
          - listitem [ref=e268]:
            - link "About us" [ref=e269] [cursor=pointer]:
              - /url: /about
        - list [ref=e271]:
          - listitem [ref=e272]:
            - link "Pricing" [ref=e273] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e274]:
        - paragraph [ref=e275]: Follow us on
        - generic [ref=e276]:
          - link [ref=e277] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e278]
          - link [ref=e280] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e281]
          - link [ref=e283] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e284]
          - link [ref=e286] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e287]
      - generic [ref=e289]:
        - paragraph [ref=e290]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e291]:
          - link "Privacy" [ref=e292] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e293] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e294] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e295] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e296] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e297]
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