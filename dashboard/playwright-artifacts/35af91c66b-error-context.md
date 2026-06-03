# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/voice-agents/design.spec.js >> Product - Voice Agents design compliance >> Figma design compliance
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
      - heading "Everything you need to build a Voice Agent" [level=1] [ref=e11]
      - heading "Build complete voice agents with Shunya Labs' intelligence layer—a fully integrated platform from voice input to intelligent response." [level=2] [ref=e12]
    - generic [ref=e15]:
      - generic [ref=e16]:
        - generic [ref=e17]:
          - img "Speech-to-Text" [ref=e19]
          - heading "Speech-to-Text" [level=3] [ref=e20]
          - paragraph [ref=e21]: Foundation models convert audio to text across 200+ languages
        - generic [ref=e22]:
          - img "Orchestration Intelligence" [ref=e24]
          - heading "Orchestration Intelligence" [level=3] [ref=e25]
          - paragraph [ref=e26]: Manages context, memory, behavior, and LLM integration
        - generic [ref=e27]:
          - img "Text-to-Speech" [ref=e29]
          - heading "Text-to-Speech" [level=3] [ref=e30]
          - paragraph [ref=e31]: Generates natural-sounding voice responses
      - link "Contact us" [ref=e32] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e34]:
      - heading "Build with Shunya Labs for an End-to-End Solution" [level=2] [ref=e35]
      - paragraph [ref=e36]: One unified API delivering developer simplicity and enterprise-grade orchestration in a single platform.
      - generic [ref=e37]:
        - generic [ref=e38]:
          - img [ref=e40]
          - heading "Simple Voice Agent Integration" [level=3] [ref=e43]
          - paragraph [ref=e44]: Single API integrating speech-to-text, LLM orchestration, and text-to-speech—no complex service integration required.
        - generic [ref=e45]:
          - img [ref=e47]
          - heading "Optimized Full-Stack Performance" [level=3] [ref=e50]
          - paragraph [ref=e51]: Custom-built voice stack with optimized STT, TTS, and runtime orchestration delivering minimal latency and maximum accuracy.
        - generic [ref=e52]:
          - img [ref=e54]
          - heading "Flexible Deployment Options" [level=3] [ref=e56]
          - paragraph [ref=e57]: Deploy fully managed or self-hosted with complete HIPAA and GDPR compliance support.
    - contentinfo [ref=e58]:
      - generic [ref=e62]:
        - paragraph [ref=e63]: The fastest way to add voice AI to your products
        - paragraph [ref=e64]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e65]:
          - link "Go to Pricing page" [ref=e66] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e67] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e68]:
      - generic [ref=e69]:
        - generic [ref=e70]:
          - img "Shunya Labs" [ref=e71]
          - paragraph [ref=e72]: Shunya Labs, Inc.
        - generic [ref=e73]:
          - paragraph [ref=e74]: Product
          - list [ref=e75]:
            - listitem [ref=e76]:
              - link "Overview" [ref=e77] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e78]:
              - link "Models" [ref=e79] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e80]:
              - link "Voice Agents" [ref=e81] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e82]:
              - link "Speech Intelligence" [ref=e83] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e84]:
              - link "Audio Processing" [ref=e85] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e86]:
              - link "Deployment" [ref=e87] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e88]:
          - paragraph [ref=e89]: Models
          - list [ref=e90]:
            - listitem [ref=e91]:
              - link "Language Models" [ref=e92] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e93]:
              - link "Zero STT Indic" [ref=e94] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e95]:
              - link "Zero STT Codeswitch" [ref=e96] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e97]:
              - link "Specialised Models" [ref=e98] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e99]:
              - link "Zero STT Med" [ref=e100] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e101]:
              - link "On Device Models" [ref=e102] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e103]:
          - paragraph [ref=e104]: Solutions
          - list [ref=e105]:
            - listitem [ref=e106]:
              - link "Contact Centers" [ref=e107] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e108]:
              - link "Media & Entertainment" [ref=e109] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e110]:
              - link "Healthcare" [ref=e111] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e112]:
          - paragraph [ref=e113]: Resources
          - list [ref=e114]:
            - listitem [ref=e115]:
              - link "Blogs" [ref=e116] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e117]:
              - link "Benchmarks" [ref=e118] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e119]:
              - link "News & Media" [ref=e120] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e121]:
              - link "Patents" [ref=e122] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e123]:
              - link "Research" [ref=e124] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e126]:
          - link "Documentation" [ref=e127] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e129]:
          - listitem [ref=e130]:
            - link "About us" [ref=e131] [cursor=pointer]:
              - /url: /about
        - list [ref=e133]:
          - listitem [ref=e134]:
            - link "Pricing" [ref=e135] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e136]:
        - paragraph [ref=e137]: Follow us on
        - generic [ref=e138]:
          - link [ref=e139] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e140]
          - link [ref=e142] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e143]
          - link [ref=e145] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e146]
          - link [ref=e148] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e149]
      - generic [ref=e151]:
        - paragraph [ref=e152]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e153]:
          - link "Privacy" [ref=e154] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e155] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e156] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e157] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e158] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e159]
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