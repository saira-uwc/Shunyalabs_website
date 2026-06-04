# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/voice-agents/design.spec.js >> Product - Voice Agents design compliance >> Figma design compliance
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
      - heading "Everything you need to build a Voice Agent" [level=1] [ref=e12]
      - heading "Build complete voice agents with Shunya Labs' intelligence layer—a fully integrated platform from voice input to intelligent response." [level=2] [ref=e13]
    - generic [ref=e16]:
      - generic [ref=e17]:
        - generic [ref=e18]:
          - img "Speech-to-Text" [ref=e20]
          - heading "Speech-to-Text" [level=3] [ref=e21]
          - paragraph [ref=e22]: Foundation models convert audio to text across 200+ languages
        - generic [ref=e23]:
          - img "Orchestration Intelligence" [ref=e25]
          - heading "Orchestration Intelligence" [level=3] [ref=e26]
          - paragraph [ref=e27]: Manages context, memory, behavior, and LLM integration
        - generic [ref=e28]:
          - img "Text-to-Speech" [ref=e30]
          - heading "Text-to-Speech" [level=3] [ref=e31]
          - paragraph [ref=e32]: Generates natural-sounding voice responses
      - link "Contact us" [ref=e33] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e35]:
      - heading "Build with Shunya Labs for an End-to-End Solution" [level=2] [ref=e36]
      - paragraph [ref=e37]: One unified API delivering developer simplicity and enterprise-grade orchestration in a single platform.
      - generic [ref=e38]:
        - generic [ref=e39]:
          - img [ref=e41]
          - heading "Simple Voice Agent Integration" [level=3] [ref=e44]
          - paragraph [ref=e45]: Single API integrating speech-to-text, LLM orchestration, and text-to-speech—no complex service integration required.
        - generic [ref=e46]:
          - img [ref=e48]
          - heading "Optimized Full-Stack Performance" [level=3] [ref=e51]
          - paragraph [ref=e52]: Custom-built voice stack with optimized STT, TTS, and runtime orchestration delivering minimal latency and maximum accuracy.
        - generic [ref=e53]:
          - img [ref=e55]
          - heading "Flexible Deployment Options" [level=3] [ref=e57]
          - paragraph [ref=e58]: Deploy fully managed or self-hosted with complete HIPAA and GDPR compliance support.
    - contentinfo [ref=e59]:
      - generic [ref=e60]:
        - paragraph [ref=e61]: The fastest way to add voice AI to your products
        - paragraph [ref=e62]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e63]:
          - link "Go to Pricing page" [ref=e64] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e65] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e66]:
      - generic [ref=e67]:
        - generic [ref=e68]:
          - img "Shunya Labs" [ref=e69]
          - paragraph [ref=e70]: Shunya Labs, Inc.
        - generic [ref=e71]:
          - paragraph [ref=e72]: Product
          - list [ref=e73]:
            - listitem [ref=e74]:
              - link "Overview" [ref=e75] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e76]:
              - link "Models" [ref=e77] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e78]:
              - link "Voice Agents" [ref=e79] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e80]:
              - link "Speech Intelligence" [ref=e81] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e82]:
              - link "Audio Processing" [ref=e83] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e84]:
              - link "Deployment" [ref=e85] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e86]:
          - paragraph [ref=e87]: Models
          - list [ref=e88]:
            - listitem [ref=e89]:
              - link "Language Models" [ref=e90] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e91]:
              - link "Zero STT Indic" [ref=e92] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e93]:
              - link "Zero STT Codeswitch" [ref=e94] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e95]:
              - link "Specialised Models" [ref=e96] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e97]:
              - link "Zero STT Med" [ref=e98] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e99]:
              - link "On Device Models" [ref=e100] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e101]:
          - paragraph [ref=e102]: Solutions
          - list [ref=e103]:
            - listitem [ref=e104]:
              - link "Contact Centers" [ref=e105] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e106]:
              - link "Media & Entertainment" [ref=e107] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e108]:
              - link "Healthcare" [ref=e109] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e110]:
          - paragraph [ref=e111]: Resources
          - list [ref=e112]:
            - listitem [ref=e113]:
              - link "Blogs" [ref=e114] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e115]:
              - link "Benchmarks" [ref=e116] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e117]:
              - link "News & Media" [ref=e118] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e119]:
              - link "Patents" [ref=e120] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e121]:
              - link "Research" [ref=e122] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e124]:
          - link "Documentation" [ref=e125] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e127]:
          - listitem [ref=e128]:
            - link "About us" [ref=e129] [cursor=pointer]:
              - /url: /about
        - list [ref=e131]:
          - listitem [ref=e132]:
            - link "Pricing" [ref=e133] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e134]:
        - paragraph [ref=e135]: Follow us on
        - generic [ref=e136]:
          - link [ref=e137] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e138]
          - link [ref=e140] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e141]
          - link [ref=e143] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e144]
          - link [ref=e146] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e147]
      - generic [ref=e149]:
        - paragraph [ref=e150]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e151]:
          - link "Privacy" [ref=e152] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e153] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e154] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e155] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e156] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e157]
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