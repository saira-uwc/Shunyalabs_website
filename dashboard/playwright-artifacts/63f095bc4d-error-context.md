# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/voice-agents/design.spec.js >> Product - Voice Agents design compliance >> Figma design compliance
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
      - heading "Everything you need to build a Voice Agent" [level=1] [ref=e40]
      - heading "Build complete voice agents with Shunya Labs' intelligence layer—a fully integrated platform from voice input to intelligent response." [level=2] [ref=e41]
    - generic [ref=e44]:
      - generic [ref=e45]:
        - generic [ref=e46]:
          - img "Speech-to-Text" [ref=e48]
          - heading "Speech-to-Text" [level=3] [ref=e49]
          - paragraph [ref=e50]: Foundation models convert audio to text across 200+ languages
        - generic [ref=e51]:
          - img "Orchestration Intelligence" [ref=e53]
          - heading "Orchestration Intelligence" [level=3] [ref=e54]
          - paragraph [ref=e55]: Manages context, memory, behavior, and LLM integration
        - generic [ref=e56]:
          - img "Text-to-Speech" [ref=e58]
          - heading "Text-to-Speech" [level=3] [ref=e59]
          - paragraph [ref=e60]: Generates natural-sounding voice responses
      - link "Contact us" [ref=e61] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e63]:
      - heading "Build with Shunya Labs for an End-to-End Solution" [level=2] [ref=e64]
      - paragraph [ref=e65]: One unified API delivering developer simplicity and enterprise-grade orchestration in a single platform.
      - generic [ref=e66]:
        - generic [ref=e67]:
          - img [ref=e69]
          - heading "Simple Voice Agent Integration" [level=3] [ref=e72]
          - paragraph [ref=e73]: Single API integrating speech-to-text, LLM orchestration, and text-to-speech—no complex service integration required.
        - generic [ref=e74]:
          - img [ref=e76]
          - heading "Optimized Full-Stack Performance" [level=3] [ref=e79]
          - paragraph [ref=e80]: Custom-built voice stack with optimized STT, TTS, and runtime orchestration delivering minimal latency and maximum accuracy.
        - generic [ref=e81]:
          - img [ref=e83]
          - heading "Flexible Deployment Options" [level=3] [ref=e85]
          - paragraph [ref=e86]: Deploy fully managed or self-hosted with complete HIPAA and GDPR compliance support.
    - contentinfo [ref=e87]:
      - generic [ref=e88]:
        - paragraph [ref=e89]: The fastest way to add voice AI to your products
        - paragraph [ref=e90]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e91]:
          - link "Go to Pricing page" [ref=e92] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e93] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e94]:
      - generic [ref=e95]:
        - generic [ref=e96]:
          - img "Shunya Labs" [ref=e97]
          - paragraph [ref=e98]: Shunya Labs, Inc.
        - generic [ref=e99]:
          - paragraph [ref=e100]: Product
          - list [ref=e101]:
            - listitem [ref=e102]:
              - link "Overview" [ref=e103] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e104]:
              - link "Models" [ref=e105] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e106]:
              - link "Voice Agents" [ref=e107] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e108]:
              - link "Speech Intelligence" [ref=e109] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e110]:
              - link "Audio Processing" [ref=e111] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e112]:
              - link "Deployment" [ref=e113] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e114]:
          - paragraph [ref=e115]: Models
          - list [ref=e116]:
            - listitem [ref=e117]:
              - link "Language Models" [ref=e118] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e119]:
              - link "Zero STT Indic" [ref=e120] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e121]:
              - link "Zero STT Codeswitch" [ref=e122] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e123]:
              - link "Specialised Models" [ref=e124] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e125]:
              - link "Zero STT Med" [ref=e126] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e127]:
              - link "On Device Models" [ref=e128] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e129]:
          - paragraph [ref=e130]: Solutions
          - list [ref=e131]:
            - listitem [ref=e132]:
              - link "Contact Centers" [ref=e133] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e134]:
              - link "Media & Entertainment" [ref=e135] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e136]:
              - link "Healthcare" [ref=e137] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e138]:
          - paragraph [ref=e139]: Resources
          - list [ref=e140]:
            - listitem [ref=e141]:
              - link "Blogs" [ref=e142] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e143]:
              - link "Benchmarks" [ref=e144] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e145]:
              - link "News & Media" [ref=e146] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e147]:
              - link "Patents" [ref=e148] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e149]:
              - link "Research" [ref=e150] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e152]:
          - link "Documentation" [ref=e153] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e155]:
          - listitem [ref=e156]:
            - link "About us" [ref=e157] [cursor=pointer]:
              - /url: /about
        - list [ref=e159]:
          - listitem [ref=e160]:
            - link "Pricing" [ref=e161] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e162]:
        - paragraph [ref=e163]: Follow us on
        - generic [ref=e164]:
          - link [ref=e165] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e166]
          - link [ref=e168] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e169]
          - link [ref=e171] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e172]
          - link [ref=e174] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e175]
      - generic [ref=e177]:
        - paragraph [ref=e178]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e179]:
          - link "Privacy" [ref=e180] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e181] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e182] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e183] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e184] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e185]
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