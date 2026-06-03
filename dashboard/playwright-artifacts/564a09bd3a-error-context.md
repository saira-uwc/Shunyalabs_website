# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/use-cases/design.spec.js >> Solutions - Use Cases design compliance >> Figma design compliance
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
  - generic [ref=e2]:
    - generic [ref=e3]:
      - navigation [ref=e4]:
        - generic [ref=e5]:
          - link "Shunya Labs Logo" [ref=e6] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e7]
          - generic [ref=e8]:
            - button "Product" [ref=e10] [cursor=pointer]:
              - text: Product
              - img [ref=e11]
            - button "Models" [ref=e14] [cursor=pointer]:
              - text: Models
              - img [ref=e15]
            - button "Solutions" [ref=e18] [cursor=pointer]:
              - text: Solutions
              - img [ref=e19]
            - button "Resources" [ref=e22] [cursor=pointer]:
              - text: Resources
              - img [ref=e23]
            - link "Documentation" [ref=e25] [cursor=pointer]:
              - /url: https://docs.shunyalabs.ai/overview
            - link "About Us" [ref=e26] [cursor=pointer]:
              - /url: /about
            - link "Pricing" [ref=e27] [cursor=pointer]:
              - /url: /pricing
          - link "Playground" [ref=e28] [cursor=pointer]:
            - /url: https://playground.shunyalabs.ai/
            - img [ref=e29]
            - text: Playground
          - generic [ref=e31]:
            - button "Sign In" [ref=e32] [cursor=pointer]
            - link "Contact Sales" [ref=e33] [cursor=pointer]:
              - /url: /contact
      - generic [ref=e35]:
        - heading "Enterprise Use Cases" [level=1] [ref=e36]
        - img "Enterprise Use Cases" [ref=e39]
      - generic [ref=e40]:
        - heading "Custom applications tailored to your specific context and workflows." [level=2] [ref=e41]
        - generic [ref=e42]:
          - generic [ref=e43]:
            - img [ref=e45]
            - generic [ref=e48]:
              - heading "Custom vocabularies" [level=3] [ref=e49]
              - paragraph [ref=e50]: Add custom vocabularies and pronunciations to specialized models
          - generic [ref=e51]:
            - img [ref=e53]
            - generic [ref=e56]:
              - heading "Business logic integration" [level=3] [ref=e57]
              - paragraph [ref=e58]: Embed your rules, workflows, and context
          - generic [ref=e59]:
            - img [ref=e61]
            - generic [ref=e63]:
              - heading "Flexible deployment" [level=3] [ref=e64]
              - paragraph [ref=e65]: Cloud, edge, or on-premises based on your needs
          - generic [ref=e66]:
            - img [ref=e68]
            - generic [ref=e71]:
              - heading "Speaker identification" [level=3] [ref=e72]
              - paragraph [ref=e73]: Register workplace voices for personalized speaker tags
          - generic [ref=e74]:
            - img [ref=e76]
            - generic [ref=e79]:
              - heading "Structured outputs" [level=3] [ref=e80]
              - paragraph [ref=e81]: Format data for seamless system integration
        - generic [ref=e82]:
          - generic [ref=e83]:
            - generic [ref=e84]:
              - img [ref=e87]
              - generic [ref=e89]:
                - heading "Voice Agents & Assistants" [level=2] [ref=e90]
                - paragraph [ref=e91]: Conversational automation with intelligent action execution.
            - generic [ref=e92]:
              - img "Voice Agents & Assistants" [ref=e94]
              - generic [ref=e95]:
                - generic [ref=e96]:
                  - generic [ref=e97]: •
                  - generic [ref=e98]:
                    - paragraph [ref=e99]: 200+ language
                    - paragraph [ref=e100]: Wide coverage with multilingual support
                - generic [ref=e101]:
                  - generic [ref=e102]: •
                  - generic [ref=e103]:
                    - paragraph [ref=e104]: Context-aware
                    - paragraph [ref=e105]: Understands your business workflows
                - generic [ref=e106]:
                  - generic [ref=e107]: •
                  - generic [ref=e108]:
                    - paragraph [ref=e109]: One integration
                    - paragraph [ref=e110]: Single API for workflows & automation
                - generic [ref=e111]:
                  - generic [ref=e112]: •
                  - generic [ref=e113]:
                    - paragraph [ref=e114]: Custom entities
                    - paragraph [ref=e115]: Recognizes your business terminology
                - link "Learn more →" [ref=e116] [cursor=pointer]:
                  - /url: /voice-agent
          - generic [ref=e117]:
            - generic [ref=e118]:
              - img [ref=e121]
              - generic [ref=e124]:
                - heading "Medical Documentation" [level=2] [ref=e125]
                - paragraph [ref=e126]: Clinical-grade speech recognition with structured EHR integration.
            - generic [ref=e127]:
              - img "Medical Documentation" [ref=e129]
              - generic [ref=e130]:
                - generic [ref=e131]:
                  - generic [ref=e132]: •
                  - generic [ref=e133]:
                    - paragraph [ref=e134]: Medical specialized
                    - paragraph [ref=e135]: Trained on medications, procedures, and diagnoses
                - generic [ref=e136]:
                  - generic [ref=e137]: •
                  - generic [ref=e138]:
                    - paragraph [ref=e139]: Noise-optimized
                    - paragraph [ref=e140]: Performs in clinical environments with equipment noise
                - generic [ref=e141]:
                  - generic [ref=e142]: •
                  - generic [ref=e143]:
                    - paragraph [ref=e144]: Structured outputs
                    - paragraph [ref=e145]: Direct FHIR, HL7, and EHR format compatibility
                - generic [ref=e146]:
                  - generic [ref=e147]: •
                  - generic [ref=e148]:
                    - paragraph [ref=e149]: HIPAA-compliant
                    - paragraph [ref=e150]: On-premises or dedicated tenant deployment
                - link "Learn more →" [ref=e151] [cursor=pointer]:
                  - /url: /healthcare
          - generic [ref=e152]:
            - generic [ref=e153]:
              - img [ref=e156]
              - generic [ref=e158]:
                - heading "Contact Center Intelligence" [level=2] [ref=e159]
                - paragraph [ref=e160]: Real-time analytics and agent assistance with conversational insights.
            - generic [ref=e161]:
              - img "Contact Center Intelligence" [ref=e163]
              - generic [ref=e164]:
                - generic [ref=e165]:
                  - generic [ref=e166]: •
                  - generic [ref=e167]:
                    - paragraph [ref=e168]: Live transcription
                    - paragraph [ref=e169]: Streaming ASR with <100ms latency for continuous support
                - generic [ref=e170]:
                  - generic [ref=e171]: •
                  - generic [ref=e172]:
                    - paragraph [ref=e173]: Emotion tracking
                    - paragraph [ref=e174]: Speaker-level sentiment throughout conversations
                - generic [ref=e175]:
                  - generic [ref=e176]: •
                  - generic [ref=e177]:
                    - paragraph [ref=e178]: Agent assist
                    - paragraph [ref=e179]: Real-time guidance for upsell opportunities
                - generic [ref=e180]:
                  - generic [ref=e181]: •
                  - generic [ref=e182]:
                    - paragraph [ref=e183]: Automated ticketing
                    - paragraph [ref=e184]: Structured extraction with CRM integration
                - link "Learn more →" [ref=e185] [cursor=pointer]:
                  - /url: /contact-centers
          - generic [ref=e186]:
            - generic [ref=e187]:
              - img [ref=e190]
              - generic [ref=e195]:
                - heading "Meeting Transcription" [level=2] [ref=e196]
                - paragraph [ref=e197]: High-fidelity capture with speaker attribution and structured output.
            - generic [ref=e198]:
              - img "Meeting Transcription" [ref=e200]
              - generic [ref=e201]:
                - generic [ref=e202]:
                  - generic [ref=e203]: •
                  - generic [ref=e204]:
                    - paragraph [ref=e205]: Speaker diarization
                    - paragraph [ref=e206]: Identifies who said what, even with crosstalk
                - generic [ref=e207]:
                  - generic [ref=e208]: •
                  - generic [ref=e209]:
                    - paragraph [ref=e210]: Numerical extraction
                    - paragraph [ref=e211]: Captures amounts, dates, and percentages accurately
                - generic [ref=e212]:
                  - generic [ref=e213]: •
                  - generic [ref=e214]:
                    - paragraph [ref=e215]: Word timestamps
                    - paragraph [ref=e216]: Precise alignment for video synchronization
                - generic [ref=e217]:
                  - generic [ref=e218]: •
                  - generic [ref=e219]:
                    - paragraph [ref=e220]: Custom vocabulary
                    - paragraph [ref=e221]: Recognizes brand names and proper nouns
                - link "Learn more →" [ref=e222] [cursor=pointer]:
                  - /url: /contact
    - contentinfo [ref=e223]:
      - generic [ref=e227]:
        - paragraph [ref=e228]: The fastest way to add voice AI to your products
        - paragraph [ref=e229]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e230]:
          - link "Go to Pricing page" [ref=e231] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e232] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e233]:
      - generic [ref=e234]:
        - generic [ref=e235]:
          - img "Shunya Labs" [ref=e236]
          - paragraph [ref=e237]: Shunya Labs, Inc.
        - generic [ref=e238]:
          - paragraph [ref=e239]: Product
          - list [ref=e240]:
            - listitem [ref=e241]:
              - link "Overview" [ref=e242] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e243]:
              - link "Models" [ref=e244] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e245]:
              - link "Voice Agents" [ref=e246] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e247]:
              - link "Speech Intelligence" [ref=e248] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e249]:
              - link "Audio Processing" [ref=e250] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e251]:
              - link "Deployment" [ref=e252] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e253]:
          - paragraph [ref=e254]: Models
          - list [ref=e255]:
            - listitem [ref=e256]:
              - link "Language Models" [ref=e257] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e258]:
              - link "Zero STT Indic" [ref=e259] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e260]:
              - link "Zero STT Codeswitch" [ref=e261] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e262]:
              - link "Specialised Models" [ref=e263] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e264]:
              - link "Zero STT Med" [ref=e265] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e266]:
              - link "On Device Models" [ref=e267] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e268]:
          - paragraph [ref=e269]: Solutions
          - list [ref=e270]:
            - listitem [ref=e271]:
              - link "Contact Centers" [ref=e272] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e273]:
              - link "Media & Entertainment" [ref=e274] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e275]:
              - link "Healthcare" [ref=e276] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e277]:
          - paragraph [ref=e278]: Resources
          - list [ref=e279]:
            - listitem [ref=e280]:
              - link "Blogs" [ref=e281] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e282]:
              - link "Benchmarks" [ref=e283] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e284]:
              - link "News & Media" [ref=e285] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e286]:
              - link "Patents" [ref=e287] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e288]:
              - link "Research" [ref=e289] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e291]:
          - link "Documentation" [ref=e292] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e294]:
          - listitem [ref=e295]:
            - link "About us" [ref=e296] [cursor=pointer]:
              - /url: /about
        - list [ref=e298]:
          - listitem [ref=e299]:
            - link "Pricing" [ref=e300] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e301]:
        - paragraph [ref=e302]: Follow us on
        - generic [ref=e303]:
          - link [ref=e304] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e305]
          - link [ref=e307] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e308]
          - link [ref=e310] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e311]
          - link [ref=e313] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e314]
      - generic [ref=e316]:
        - paragraph [ref=e317]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e318]:
          - link "Privacy" [ref=e319] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e320] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e321] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e322] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e323] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e324]
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