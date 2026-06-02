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
        - heading "Enterprise Use Cases" [level=1] [ref=e40]
        - img "Enterprise Use Cases" [ref=e43]
      - generic [ref=e44]:
        - heading "Custom applications tailored to your specific context and workflows." [level=2] [ref=e45]
        - generic [ref=e46]:
          - generic [ref=e47]:
            - img [ref=e49]
            - generic [ref=e52]:
              - heading "Custom vocabularies" [level=3] [ref=e53]
              - paragraph [ref=e54]: Add custom vocabularies and pronunciations to specialized models
          - generic [ref=e55]:
            - img [ref=e57]
            - generic [ref=e60]:
              - heading "Business logic integration" [level=3] [ref=e61]
              - paragraph [ref=e62]: Embed your rules, workflows, and context
          - generic [ref=e63]:
            - img [ref=e65]
            - generic [ref=e67]:
              - heading "Flexible deployment" [level=3] [ref=e68]
              - paragraph [ref=e69]: Cloud, edge, or on-premises based on your needs
          - generic [ref=e70]:
            - img [ref=e72]
            - generic [ref=e75]:
              - heading "Speaker identification" [level=3] [ref=e76]
              - paragraph [ref=e77]: Register workplace voices for personalized speaker tags
          - generic [ref=e78]:
            - img [ref=e80]
            - generic [ref=e83]:
              - heading "Structured outputs" [level=3] [ref=e84]
              - paragraph [ref=e85]: Format data for seamless system integration
        - generic [ref=e86]:
          - generic [ref=e87]:
            - generic [ref=e88]:
              - img [ref=e91]
              - generic [ref=e93]:
                - heading "Voice Agents & Assistants" [level=2] [ref=e94]
                - paragraph [ref=e95]: Conversational automation with intelligent action execution.
            - generic [ref=e96]:
              - img "Voice Agents & Assistants" [ref=e98]
              - generic [ref=e99]:
                - generic [ref=e100]:
                  - generic [ref=e101]: •
                  - generic [ref=e102]:
                    - paragraph [ref=e103]: 200+ language
                    - paragraph [ref=e104]: Wide coverage with multilingual support
                - generic [ref=e105]:
                  - generic [ref=e106]: •
                  - generic [ref=e107]:
                    - paragraph [ref=e108]: Context-aware
                    - paragraph [ref=e109]: Understands your business workflows
                - generic [ref=e110]:
                  - generic [ref=e111]: •
                  - generic [ref=e112]:
                    - paragraph [ref=e113]: One integration
                    - paragraph [ref=e114]: Single API for workflows & automation
                - generic [ref=e115]:
                  - generic [ref=e116]: •
                  - generic [ref=e117]:
                    - paragraph [ref=e118]: Custom entities
                    - paragraph [ref=e119]: Recognizes your business terminology
                - link "Learn more →" [ref=e120] [cursor=pointer]:
                  - /url: /voice-agent
          - generic [ref=e121]:
            - generic [ref=e122]:
              - img [ref=e125]
              - generic [ref=e128]:
                - heading "Medical Documentation" [level=2] [ref=e129]
                - paragraph [ref=e130]: Clinical-grade speech recognition with structured EHR integration.
            - generic [ref=e131]:
              - img "Medical Documentation" [ref=e133]
              - generic [ref=e134]:
                - generic [ref=e135]:
                  - generic [ref=e136]: •
                  - generic [ref=e137]:
                    - paragraph [ref=e138]: Medical specialized
                    - paragraph [ref=e139]: Trained on medications, procedures, and diagnoses
                - generic [ref=e140]:
                  - generic [ref=e141]: •
                  - generic [ref=e142]:
                    - paragraph [ref=e143]: Noise-optimized
                    - paragraph [ref=e144]: Performs in clinical environments with equipment noise
                - generic [ref=e145]:
                  - generic [ref=e146]: •
                  - generic [ref=e147]:
                    - paragraph [ref=e148]: Structured outputs
                    - paragraph [ref=e149]: Direct FHIR, HL7, and EHR format compatibility
                - generic [ref=e150]:
                  - generic [ref=e151]: •
                  - generic [ref=e152]:
                    - paragraph [ref=e153]: HIPAA-compliant
                    - paragraph [ref=e154]: On-premises or dedicated tenant deployment
                - link "Learn more →" [ref=e155] [cursor=pointer]:
                  - /url: /healthcare
          - generic [ref=e156]:
            - generic [ref=e157]:
              - img [ref=e160]
              - generic [ref=e162]:
                - heading "Contact Center Intelligence" [level=2] [ref=e163]
                - paragraph [ref=e164]: Real-time analytics and agent assistance with conversational insights.
            - generic [ref=e165]:
              - img "Contact Center Intelligence" [ref=e167]
              - generic [ref=e168]:
                - generic [ref=e169]:
                  - generic [ref=e170]: •
                  - generic [ref=e171]:
                    - paragraph [ref=e172]: Live transcription
                    - paragraph [ref=e173]: Streaming ASR with <100ms latency for continuous support
                - generic [ref=e174]:
                  - generic [ref=e175]: •
                  - generic [ref=e176]:
                    - paragraph [ref=e177]: Emotion tracking
                    - paragraph [ref=e178]: Speaker-level sentiment throughout conversations
                - generic [ref=e179]:
                  - generic [ref=e180]: •
                  - generic [ref=e181]:
                    - paragraph [ref=e182]: Agent assist
                    - paragraph [ref=e183]: Real-time guidance for upsell opportunities
                - generic [ref=e184]:
                  - generic [ref=e185]: •
                  - generic [ref=e186]:
                    - paragraph [ref=e187]: Automated ticketing
                    - paragraph [ref=e188]: Structured extraction with CRM integration
                - link "Learn more →" [ref=e189] [cursor=pointer]:
                  - /url: /contact-centers
          - generic [ref=e190]:
            - generic [ref=e191]:
              - img [ref=e194]
              - generic [ref=e199]:
                - heading "Meeting Transcription" [level=2] [ref=e200]
                - paragraph [ref=e201]: High-fidelity capture with speaker attribution and structured output.
            - generic [ref=e202]:
              - img "Meeting Transcription" [ref=e204]
              - generic [ref=e205]:
                - generic [ref=e206]:
                  - generic [ref=e207]: •
                  - generic [ref=e208]:
                    - paragraph [ref=e209]: Speaker diarization
                    - paragraph [ref=e210]: Identifies who said what, even with crosstalk
                - generic [ref=e211]:
                  - generic [ref=e212]: •
                  - generic [ref=e213]:
                    - paragraph [ref=e214]: Numerical extraction
                    - paragraph [ref=e215]: Captures amounts, dates, and percentages accurately
                - generic [ref=e216]:
                  - generic [ref=e217]: •
                  - generic [ref=e218]:
                    - paragraph [ref=e219]: Word timestamps
                    - paragraph [ref=e220]: Precise alignment for video synchronization
                - generic [ref=e221]:
                  - generic [ref=e222]: •
                  - generic [ref=e223]:
                    - paragraph [ref=e224]: Custom vocabulary
                    - paragraph [ref=e225]: Recognizes brand names and proper nouns
                - link "Learn more →" [ref=e226] [cursor=pointer]:
                  - /url: /contact
    - contentinfo [ref=e227]:
      - generic [ref=e228]:
        - paragraph [ref=e229]: The fastest way to add voice AI to your products
        - paragraph [ref=e230]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e231]:
          - link "Go to Pricing page" [ref=e232] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e233] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e234]:
      - generic [ref=e235]:
        - generic [ref=e236]:
          - img "Shunya Labs" [ref=e237]
          - paragraph [ref=e238]: Shunya Labs, Inc.
        - generic [ref=e239]:
          - paragraph [ref=e240]: Product
          - list [ref=e241]:
            - listitem [ref=e242]:
              - link "Overview" [ref=e243] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e244]:
              - link "Models" [ref=e245] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e246]:
              - link "Voice Agents" [ref=e247] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e248]:
              - link "Speech Intelligence" [ref=e249] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e250]:
              - link "Audio Processing" [ref=e251] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e252]:
              - link "Deployment" [ref=e253] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e254]:
          - paragraph [ref=e255]: Models
          - list [ref=e256]:
            - listitem [ref=e257]:
              - link "Language Models" [ref=e258] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e259]:
              - link "Zero STT Indic" [ref=e260] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e261]:
              - link "Zero STT Codeswitch" [ref=e262] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e263]:
              - link "Specialised Models" [ref=e264] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e265]:
              - link "Zero STT Med" [ref=e266] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e267]:
              - link "On Device Models" [ref=e268] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e269]:
          - paragraph [ref=e270]: Solutions
          - list [ref=e271]:
            - listitem [ref=e272]:
              - link "Contact Centers" [ref=e273] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e274]:
              - link "Media & Entertainment" [ref=e275] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e276]:
              - link "Healthcare" [ref=e277] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e278]:
          - paragraph [ref=e279]: Resources
          - list [ref=e280]:
            - listitem [ref=e281]:
              - link "Blogs" [ref=e282] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e283]:
              - link "Benchmarks" [ref=e284] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e285]:
              - link "News & Media" [ref=e286] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e287]:
              - link "Patents" [ref=e288] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e289]:
              - link "Research" [ref=e290] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e292]:
          - link "Documentation" [ref=e293] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e295]:
          - listitem [ref=e296]:
            - link "About us" [ref=e297] [cursor=pointer]:
              - /url: /about
        - list [ref=e299]:
          - listitem [ref=e300]:
            - link "Pricing" [ref=e301] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e302]:
        - paragraph [ref=e303]: Follow us on
        - generic [ref=e304]:
          - link [ref=e305] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e306]
          - link [ref=e308] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e309]
          - link [ref=e311] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e312]
          - link [ref=e314] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e315]
      - generic [ref=e317]:
        - paragraph [ref=e318]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e319]:
          - link "Privacy" [ref=e320] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e321] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e322] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e323] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e324] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e325]
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