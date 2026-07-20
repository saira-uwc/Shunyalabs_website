# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/voice-agents/design.spec.js >> Product - Voice Agents design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [headings] Heading "Build complete voice agents with Shunya Labs' intelligence layer—a fully integrated platform from voice input to intelligent response." (h2) not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Speech-to-Text" background: expected rgb(14, 18, 25) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

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
Error: [content] Text content "Build complete voice agents with Shunya Labs' intelligence layer—a fully integrated platform from voice input to intelligent response." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Single API integrating speech-to-text, LLM orchestration, and text-to-speech—no complex service integration required." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 20 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 20
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - banner:
      - generic [ref=e4]:
        - link "Shunya Labs Logo" [ref=e5] [cursor=pointer]:
          - /url: /
          - img "Shunya Labs Logo" [ref=e6]
        - button "Open menu" [ref=e7] [cursor=pointer]: ☰
    - generic [ref=e9]:
      - heading "Everything you need to build a Voice Agent" [level=1] [ref=e10]
      - heading "Build complete voice agents with Shunya Labs' intelligence layer-a fully integrated platform from voice input to intelligent response." [level=2] [ref=e11]
    - generic [ref=e14]:
      - generic [ref=e15]:
        - generic [ref=e16]:
          - generic [ref=e19]:
            - img [ref=e20]
            - img [ref=e23]
          - heading "Speech-to-Text" [level=3] [ref=e26]
          - paragraph [ref=e27]: Foundation models convert audio to text across 200+ languages
        - generic [ref=e28]:
          - img [ref=e31]
          - heading "Orchestration Intelligence" [level=3] [ref=e39]
          - paragraph [ref=e40]: Manages context, memory, behavior, and LLM integration
        - generic [ref=e41]:
          - generic [ref=e44]:
            - img [ref=e45]
            - img [ref=e48]
          - heading "Text-to-Speech" [level=3] [ref=e49]
          - paragraph [ref=e50]: Generates natural-sounding voice responses
      - link "Contact us" [ref=e51] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e53]:
      - heading "Build with Shunya Labs for an End-to-End Solution" [level=2] [ref=e54]
      - paragraph [ref=e55]: One unified API delivering developer simplicity and enterprise-grade orchestration in a single platform.
      - generic [ref=e56]:
        - generic [ref=e57]:
          - img [ref=e59]
          - heading "Simple Voice Agent Integration" [level=3] [ref=e62]
          - paragraph [ref=e63]: Single API integrating speech-to-text, LLM orchestration, and text-to-speech-no complex service integration required.
        - generic [ref=e64]:
          - img [ref=e66]
          - heading "Optimized Full-Stack Performance" [level=3] [ref=e69]
          - paragraph [ref=e70]: Custom-built voice stack with optimized STT, TTS, and runtime orchestration delivering minimal latency and maximum accuracy.
        - generic [ref=e71]:
          - img [ref=e73]
          - heading "Flexible Deployment Options" [level=3] [ref=e75]
          - paragraph [ref=e76]: Deploy fully managed or self-hosted with complete HIPAA and GDPR compliance support.
    - contentinfo [ref=e77]:
      - generic [ref=e78]:
        - paragraph [ref=e79]: The fastest way to add voice AI to your products
        - paragraph [ref=e80]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e81]:
          - link "Go to Pricing page" [ref=e82] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e83] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e84]:
      - generic [ref=e85]:
        - generic [ref=e86]:
          - img "Shunya Labs" [ref=e87]
          - paragraph [ref=e88]: Shunya Labs, Inc.
        - generic [ref=e89]:
          - paragraph [ref=e90]: Product
          - list [ref=e91]:
            - listitem [ref=e92]:
              - link "Overview" [ref=e93] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e94]:
              - link "Models" [ref=e95] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e96]:
              - link "Voice Agents" [ref=e97] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e98]:
              - link "Speech Intelligence" [ref=e99] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e100]:
              - link "Audio Processing" [ref=e101] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e102]:
              - link "Deployment" [ref=e103] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e104]:
          - paragraph [ref=e105]: Models
          - list [ref=e106]:
            - listitem [ref=e107]:
              - link "Language Models" [ref=e108] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e109]:
              - link "Zero STT Indic" [ref=e110] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e111]:
              - link "Zero STT Codeswitch" [ref=e112] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e113]:
              - link "Specialised Models" [ref=e114] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e115]:
              - link "Zero STT Med" [ref=e116] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e117]:
              - link "On Device Models" [ref=e118] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e119]:
          - paragraph [ref=e120]: Solutions
          - list [ref=e121]:
            - listitem [ref=e122]:
              - link "Contact Centers" [ref=e123] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e124]:
              - link "Media & Entertainment" [ref=e125] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e126]:
              - link "Healthcare" [ref=e127] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e128]:
          - paragraph [ref=e129]: Resources
          - list [ref=e130]:
            - listitem [ref=e131]:
              - link "Blogs" [ref=e132] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e133]:
              - link "Benchmarks" [ref=e134] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e135]:
              - link "News & Media" [ref=e136] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e137]:
              - link "Patents" [ref=e138] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e139]:
              - link "Research" [ref=e140] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e142]:
          - link "Documentation" [ref=e143] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e145]:
          - listitem [ref=e146]:
            - link "About us" [ref=e147] [cursor=pointer]:
              - /url: /about
        - list [ref=e149]:
          - listitem [ref=e150]:
            - link "Pricing" [ref=e151] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e152]:
        - paragraph [ref=e153]: Follow us on
        - generic [ref=e154]:
          - link [ref=e155] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e156]
          - link [ref=e158] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e159]
          - link [ref=e161] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e162]
          - link [ref=e164] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e165]
      - generic [ref=e167]:
        - paragraph [ref=e168]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e169]:
          - link "Privacy" [ref=e170] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e171] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e172] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e173] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e174] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e175]
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
     |                                                                                      ^ Error: 20 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```