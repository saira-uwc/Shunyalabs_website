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
      - heading "Everything you need to build a Voice Agent" [level=1] [ref=e36]
      - heading "Build complete voice agents with Shunya Labs' intelligence layer—a fully integrated platform from voice input to intelligent response." [level=2] [ref=e37]
    - generic [ref=e40]:
      - generic [ref=e41]:
        - generic [ref=e42]:
          - img "Speech-to-Text" [ref=e44]
          - heading "Speech-to-Text" [level=3] [ref=e45]
          - paragraph [ref=e46]: Foundation models convert audio to text across 200+ languages
        - generic [ref=e47]:
          - img "Orchestration Intelligence" [ref=e49]
          - heading "Orchestration Intelligence" [level=3] [ref=e50]
          - paragraph [ref=e51]: Manages context, memory, behavior, and LLM integration
        - generic [ref=e52]:
          - img "Text-to-Speech" [ref=e54]
          - heading "Text-to-Speech" [level=3] [ref=e55]
          - paragraph [ref=e56]: Generates natural-sounding voice responses
      - link "Contact us" [ref=e57] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e59]:
      - heading "Build with Shunya Labs for an End-to-End Solution" [level=2] [ref=e60]
      - paragraph [ref=e61]: One unified API delivering developer simplicity and enterprise-grade orchestration in a single platform.
      - generic [ref=e62]:
        - generic [ref=e63]:
          - img [ref=e65]
          - heading "Simple Voice Agent Integration" [level=3] [ref=e68]
          - paragraph [ref=e69]: Single API integrating speech-to-text, LLM orchestration, and text-to-speech—no complex service integration required.
        - generic [ref=e70]:
          - img [ref=e72]
          - heading "Optimized Full-Stack Performance" [level=3] [ref=e75]
          - paragraph [ref=e76]: Custom-built voice stack with optimized STT, TTS, and runtime orchestration delivering minimal latency and maximum accuracy.
        - generic [ref=e77]:
          - img [ref=e79]
          - heading "Flexible Deployment Options" [level=3] [ref=e81]
          - paragraph [ref=e82]: Deploy fully managed or self-hosted with complete HIPAA and GDPR compliance support.
    - contentinfo [ref=e83]:
      - generic [ref=e87]:
        - paragraph [ref=e88]: The fastest way to add voice AI to your products
        - paragraph [ref=e89]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e90]:
          - link "Go to Pricing page" [ref=e91] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e92] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e93]:
      - generic [ref=e94]:
        - generic [ref=e95]:
          - img "Shunya Labs" [ref=e96]
          - paragraph [ref=e97]: Shunya Labs, Inc.
        - generic [ref=e98]:
          - paragraph [ref=e99]: Product
          - list [ref=e100]:
            - listitem [ref=e101]:
              - link "Overview" [ref=e102] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e103]:
              - link "Models" [ref=e104] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e105]:
              - link "Voice Agents" [ref=e106] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e107]:
              - link "Speech Intelligence" [ref=e108] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e109]:
              - link "Audio Processing" [ref=e110] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e111]:
              - link "Deployment" [ref=e112] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e113]:
          - paragraph [ref=e114]: Models
          - list [ref=e115]:
            - listitem [ref=e116]:
              - link "Language Models" [ref=e117] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e118]:
              - link "Zero STT Indic" [ref=e119] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e120]:
              - link "Zero STT Codeswitch" [ref=e121] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e122]:
              - link "Specialised Models" [ref=e123] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e124]:
              - link "Zero STT Med" [ref=e125] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e126]:
              - link "On Device Models" [ref=e127] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e128]:
          - paragraph [ref=e129]: Solutions
          - list [ref=e130]:
            - listitem [ref=e131]:
              - link "Contact Centers" [ref=e132] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e133]:
              - link "Media & Entertainment" [ref=e134] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e135]:
              - link "Healthcare" [ref=e136] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e137]:
          - paragraph [ref=e138]: Resources
          - list [ref=e139]:
            - listitem [ref=e140]:
              - link "Blogs" [ref=e141] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e142]:
              - link "Benchmarks" [ref=e143] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e144]:
              - link "News & Media" [ref=e145] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e146]:
              - link "Patents" [ref=e147] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e148]:
              - link "Research" [ref=e149] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e151]:
          - link "Documentation" [ref=e152] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e154]:
          - listitem [ref=e155]:
            - link "About us" [ref=e156] [cursor=pointer]:
              - /url: /about
        - list [ref=e158]:
          - listitem [ref=e159]:
            - link "Pricing" [ref=e160] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e161]:
        - paragraph [ref=e162]: Follow us on
        - generic [ref=e163]:
          - link [ref=e164] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e165]
          - link [ref=e167] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e168]
          - link [ref=e170] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e171]
          - link [ref=e173] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e174]
      - generic [ref=e176]:
        - paragraph [ref=e177]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e178]:
          - link "Privacy" [ref=e179] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e180] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e181] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e182] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e183] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e184]
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