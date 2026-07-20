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
  - generic [ref=e2]:
    - generic [ref=e3]:
      - banner:
        - generic [ref=e4]:
          - link "Shunya Labs Logo" [ref=e5] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e6]
          - button "Open menu" [ref=e7] [cursor=pointer]: ☰
      - generic [ref=e9]:
        - heading "Enterprise Use Cases" [level=1] [ref=e10]
        - img "Enterprise Use Cases" [ref=e13]
      - generic [ref=e14]:
        - heading "Custom applications tailored to your specific context and workflows." [level=2] [ref=e15]
        - generic [ref=e16]:
          - generic [ref=e17]:
            - img [ref=e19]
            - generic [ref=e22]:
              - heading "Custom vocabularies" [level=3] [ref=e23]
              - paragraph [ref=e24]: Add custom vocabularies and pronunciations to specialized models
          - generic [ref=e25]:
            - img [ref=e27]
            - generic [ref=e30]:
              - heading "Business logic integration" [level=3] [ref=e31]
              - paragraph [ref=e32]: Embed your rules, workflows, and context
          - generic [ref=e33]:
            - img [ref=e35]
            - generic [ref=e37]:
              - heading "Flexible deployment" [level=3] [ref=e38]
              - paragraph [ref=e39]: Cloud, edge, or on-premises based on your needs
          - generic [ref=e40]:
            - img [ref=e42]
            - generic [ref=e45]:
              - heading "Speaker identification" [level=3] [ref=e46]
              - paragraph [ref=e47]: Register workplace voices for personalized speaker tags
          - generic [ref=e48]:
            - img [ref=e50]
            - generic [ref=e53]:
              - heading "Structured outputs" [level=3] [ref=e54]
              - paragraph [ref=e55]: Format data for seamless system integration
        - generic [ref=e56]:
          - generic [ref=e57]:
            - generic [ref=e58]:
              - img [ref=e61]
              - generic [ref=e63]:
                - heading "Voice Agents & Assistants" [level=2] [ref=e64]
                - paragraph [ref=e65]: Conversational automation with intelligent action execution.
            - generic [ref=e66]:
              - img "Voice Agents & Assistants" [ref=e68]
              - generic [ref=e69]:
                - generic [ref=e70]:
                  - generic [ref=e71]: •
                  - generic [ref=e72]:
                    - paragraph [ref=e73]: 200+ language
                    - paragraph [ref=e74]: Wide coverage with multilingual support
                - generic [ref=e75]:
                  - generic [ref=e76]: •
                  - generic [ref=e77]:
                    - paragraph [ref=e78]: Context-aware
                    - paragraph [ref=e79]: Understands your business workflows
                - generic [ref=e80]:
                  - generic [ref=e81]: •
                  - generic [ref=e82]:
                    - paragraph [ref=e83]: One integration
                    - paragraph [ref=e84]: Single API for workflows & automation
                - generic [ref=e85]:
                  - generic [ref=e86]: •
                  - generic [ref=e87]:
                    - paragraph [ref=e88]: Custom entities
                    - paragraph [ref=e89]: Recognizes your business terminology
                - link "Learn more →" [ref=e90] [cursor=pointer]:
                  - /url: /voice-agent
          - generic [ref=e91]:
            - generic [ref=e92]:
              - img [ref=e95]
              - generic [ref=e98]:
                - heading "Medical Documentation" [level=2] [ref=e99]
                - paragraph [ref=e100]: Clinical-grade speech recognition with structured EHR integration.
            - generic [ref=e101]:
              - img "Medical Documentation" [ref=e103]
              - generic [ref=e104]:
                - generic [ref=e105]:
                  - generic [ref=e106]: •
                  - generic [ref=e107]:
                    - paragraph [ref=e108]: Medical specialized
                    - paragraph [ref=e109]: Trained on medications, procedures, and diagnoses
                - generic [ref=e110]:
                  - generic [ref=e111]: •
                  - generic [ref=e112]:
                    - paragraph [ref=e113]: Noise-optimized
                    - paragraph [ref=e114]: Performs in clinical environments with equipment noise
                - generic [ref=e115]:
                  - generic [ref=e116]: •
                  - generic [ref=e117]:
                    - paragraph [ref=e118]: Structured outputs
                    - paragraph [ref=e119]: Direct FHIR, HL7, and EHR format compatibility
                - generic [ref=e120]:
                  - generic [ref=e121]: •
                  - generic [ref=e122]:
                    - paragraph [ref=e123]: HIPAA-compliant
                    - paragraph [ref=e124]: On-premises or dedicated tenant deployment
                - link "Learn more →" [ref=e125] [cursor=pointer]:
                  - /url: /healthcare
          - generic [ref=e126]:
            - generic [ref=e127]:
              - img [ref=e130]
              - generic [ref=e132]:
                - heading "Contact Center Intelligence" [level=2] [ref=e133]
                - paragraph [ref=e134]: Real-time analytics and agent assistance with conversational insights.
            - generic [ref=e135]:
              - img "Contact Center Intelligence" [ref=e137]
              - generic [ref=e138]:
                - generic [ref=e139]:
                  - generic [ref=e140]: •
                  - generic [ref=e141]:
                    - paragraph [ref=e142]: Live transcription
                    - paragraph [ref=e143]: Streaming ASR with <100ms latency for continuous support
                - generic [ref=e144]:
                  - generic [ref=e145]: •
                  - generic [ref=e146]:
                    - paragraph [ref=e147]: Emotion tracking
                    - paragraph [ref=e148]: Speaker-level sentiment throughout conversations
                - generic [ref=e149]:
                  - generic [ref=e150]: •
                  - generic [ref=e151]:
                    - paragraph [ref=e152]: Agent assist
                    - paragraph [ref=e153]: Real-time guidance for upsell opportunities
                - generic [ref=e154]:
                  - generic [ref=e155]: •
                  - generic [ref=e156]:
                    - paragraph [ref=e157]: Automated ticketing
                    - paragraph [ref=e158]: Structured extraction with CRM integration
                - link "Learn more →" [ref=e159] [cursor=pointer]:
                  - /url: /contact-centers
          - generic [ref=e160]:
            - generic [ref=e161]:
              - img [ref=e164]
              - generic [ref=e169]:
                - heading "Meeting Transcription" [level=2] [ref=e170]
                - paragraph [ref=e171]: High-fidelity capture with speaker attribution and structured output.
            - generic [ref=e172]:
              - img "Meeting Transcription" [ref=e174]
              - generic [ref=e175]:
                - generic [ref=e176]:
                  - generic [ref=e177]: •
                  - generic [ref=e178]:
                    - paragraph [ref=e179]: Speaker diarization
                    - paragraph [ref=e180]: Identifies who said what, even with crosstalk
                - generic [ref=e181]:
                  - generic [ref=e182]: •
                  - generic [ref=e183]:
                    - paragraph [ref=e184]: Numerical extraction
                    - paragraph [ref=e185]: Captures amounts, dates, and percentages accurately
                - generic [ref=e186]:
                  - generic [ref=e187]: •
                  - generic [ref=e188]:
                    - paragraph [ref=e189]: Word timestamps
                    - paragraph [ref=e190]: Precise alignment for video synchronization
                - generic [ref=e191]:
                  - generic [ref=e192]: •
                  - generic [ref=e193]:
                    - paragraph [ref=e194]: Custom vocabulary
                    - paragraph [ref=e195]: Recognizes brand names and proper nouns
                - link "Learn more →" [ref=e196] [cursor=pointer]:
                  - /url: /contact
    - contentinfo [ref=e197]:
      - generic [ref=e198]:
        - paragraph [ref=e199]: The fastest way to add voice AI to your products
        - paragraph [ref=e200]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e201]:
          - link "Go to Pricing page" [ref=e202] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e203] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e204]:
      - generic [ref=e205]:
        - generic [ref=e206]:
          - img "Shunya Labs" [ref=e207]
          - paragraph [ref=e208]: Shunya Labs, Inc.
        - generic [ref=e209]:
          - paragraph [ref=e210]: Product
          - list [ref=e211]:
            - listitem [ref=e212]:
              - link "Overview" [ref=e213] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e214]:
              - link "Models" [ref=e215] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e216]:
              - link "Voice Agents" [ref=e217] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e218]:
              - link "Speech Intelligence" [ref=e219] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e220]:
              - link "Audio Processing" [ref=e221] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e222]:
              - link "Deployment" [ref=e223] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e224]:
          - paragraph [ref=e225]: Models
          - list [ref=e226]:
            - listitem [ref=e227]:
              - link "Language Models" [ref=e228] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e229]:
              - link "Zero STT Indic" [ref=e230] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e231]:
              - link "Zero STT Codeswitch" [ref=e232] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e233]:
              - link "Specialised Models" [ref=e234] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e235]:
              - link "Zero STT Med" [ref=e236] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e237]:
              - link "On Device Models" [ref=e238] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e239]:
          - paragraph [ref=e240]: Solutions
          - list [ref=e241]:
            - listitem [ref=e242]:
              - link "Contact Centers" [ref=e243] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e244]:
              - link "Media & Entertainment" [ref=e245] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e246]:
              - link "Healthcare" [ref=e247] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e248]:
          - paragraph [ref=e249]: Resources
          - list [ref=e250]:
            - listitem [ref=e251]:
              - link "Blogs" [ref=e252] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e253]:
              - link "Benchmarks" [ref=e254] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e255]:
              - link "News & Media" [ref=e256] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e257]:
              - link "Patents" [ref=e258] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e259]:
              - link "Research" [ref=e260] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e262]:
          - link "Documentation" [ref=e263] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e265]:
          - listitem [ref=e266]:
            - link "About us" [ref=e267] [cursor=pointer]:
              - /url: /about
        - list [ref=e269]:
          - listitem [ref=e270]:
            - link "Pricing" [ref=e271] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e272]:
        - paragraph [ref=e273]: Follow us on
        - generic [ref=e274]:
          - link [ref=e275] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e276]
          - link [ref=e278] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e279]
          - link [ref=e281] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e282]
          - link [ref=e284] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e285]
      - generic [ref=e287]:
        - paragraph [ref=e288]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e289]:
          - link "Privacy" [ref=e290] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e291] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e292] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e293] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e294] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e295]
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