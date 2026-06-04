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
      - heading "Everything you need to build a Voice Agent" [level=1] [ref=e38]
      - heading "Build complete voice agents with Shunya Labs' intelligence layer—a fully integrated platform from voice input to intelligent response." [level=2] [ref=e39]
    - generic [ref=e42]:
      - generic [ref=e43]:
        - generic [ref=e44]:
          - img "Speech-to-Text" [ref=e46]
          - heading "Speech-to-Text" [level=3] [ref=e47]
          - paragraph [ref=e48]: Foundation models convert audio to text across 200+ languages
        - generic [ref=e49]:
          - img "Orchestration Intelligence" [ref=e51]
          - heading "Orchestration Intelligence" [level=3] [ref=e52]
          - paragraph [ref=e53]: Manages context, memory, behavior, and LLM integration
        - generic [ref=e54]:
          - img "Text-to-Speech" [ref=e56]
          - heading "Text-to-Speech" [level=3] [ref=e57]
          - paragraph [ref=e58]: Generates natural-sounding voice responses
      - link "Contact us" [ref=e59] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e61]:
      - heading "Build with Shunya Labs for an End-to-End Solution" [level=2] [ref=e62]
      - paragraph [ref=e63]: One unified API delivering developer simplicity and enterprise-grade orchestration in a single platform.
      - generic [ref=e64]:
        - generic [ref=e65]:
          - img [ref=e67]
          - heading "Simple Voice Agent Integration" [level=3] [ref=e70]
          - paragraph [ref=e71]: Single API integrating speech-to-text, LLM orchestration, and text-to-speech—no complex service integration required.
        - generic [ref=e72]:
          - img [ref=e74]
          - heading "Optimized Full-Stack Performance" [level=3] [ref=e77]
          - paragraph [ref=e78]: Custom-built voice stack with optimized STT, TTS, and runtime orchestration delivering minimal latency and maximum accuracy.
        - generic [ref=e79]:
          - img [ref=e81]
          - heading "Flexible Deployment Options" [level=3] [ref=e83]
          - paragraph [ref=e84]: Deploy fully managed or self-hosted with complete HIPAA and GDPR compliance support.
    - contentinfo [ref=e85]:
      - generic [ref=e86]:
        - paragraph [ref=e87]: The fastest way to add voice AI to your products
        - paragraph [ref=e88]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e89]:
          - link "Go to Pricing page" [ref=e90] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e91] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e92]:
      - generic [ref=e93]:
        - generic [ref=e94]:
          - img "Shunya Labs" [ref=e95]
          - paragraph [ref=e96]: Shunya Labs, Inc.
        - generic [ref=e97]:
          - paragraph [ref=e98]: Product
          - list [ref=e99]:
            - listitem [ref=e100]:
              - link "Overview" [ref=e101] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e102]:
              - link "Models" [ref=e103] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e104]:
              - link "Voice Agents" [ref=e105] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e106]:
              - link "Speech Intelligence" [ref=e107] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e108]:
              - link "Audio Processing" [ref=e109] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e110]:
              - link "Deployment" [ref=e111] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e112]:
          - paragraph [ref=e113]: Models
          - list [ref=e114]:
            - listitem [ref=e115]:
              - link "Language Models" [ref=e116] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e117]:
              - link "Zero STT Indic" [ref=e118] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e119]:
              - link "Zero STT Codeswitch" [ref=e120] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e121]:
              - link "Specialised Models" [ref=e122] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e123]:
              - link "Zero STT Med" [ref=e124] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e125]:
              - link "On Device Models" [ref=e126] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e127]:
          - paragraph [ref=e128]: Solutions
          - list [ref=e129]:
            - listitem [ref=e130]:
              - link "Contact Centers" [ref=e131] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e132]:
              - link "Media & Entertainment" [ref=e133] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e134]:
              - link "Healthcare" [ref=e135] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e136]:
          - paragraph [ref=e137]: Resources
          - list [ref=e138]:
            - listitem [ref=e139]:
              - link "Blogs" [ref=e140] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e141]:
              - link "Benchmarks" [ref=e142] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e143]:
              - link "News & Media" [ref=e144] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e145]:
              - link "Patents" [ref=e146] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e147]:
              - link "Research" [ref=e148] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e150]:
          - link "Documentation" [ref=e151] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e153]:
          - listitem [ref=e154]:
            - link "About us" [ref=e155] [cursor=pointer]:
              - /url: /about
        - list [ref=e157]:
          - listitem [ref=e158]:
            - link "Pricing" [ref=e159] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e160]:
        - paragraph [ref=e161]: Follow us on
        - generic [ref=e162]:
          - link [ref=e163] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e164]
          - link [ref=e166] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e167]
          - link [ref=e169] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e170]
          - link [ref=e172] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e173]
      - generic [ref=e175]:
        - paragraph [ref=e176]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e177]:
          - link "Privacy" [ref=e178] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e179] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e180] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e181] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e182] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e183]
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