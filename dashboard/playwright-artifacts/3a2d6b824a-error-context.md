# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/vak/design.spec.js >> Models - Translation Models (Vāk) design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [layout] Section "Open-Weight for the Community" background: expected rgb(5, 10, 16) but got rgb(237, 244, 248)

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Technical Release" background: expected rgb(0, 0, 0) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Section 4" background: expected rgb(0, 0, 0) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

```
Error: [global] Footer background: expected rgb(11, 11, 15) but got rgb(255, 255, 255)

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
Error: [content] Page title: expected "Vāķ Real-Time Indic Speech Translation | Shunya Labs" but got "Real-Time Indic Speech Translation, Vāķ | Shunya Labs"

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "/" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Contact Sales (/contact)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 19 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 19
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
    - main [ref=e8]:
      - generic [ref=e11]:
        - img "Shunya Labs" [ref=e12]
        - img "NASSCOM" [ref=e14]
      - generic [ref=e15]:
        - generic [ref=e16]:
          - heading "Vāķ" [level=1] [ref=e17]
          - heading "Real-Time Translation in 55 Indic Languages" [level=2] [ref=e18]:
            - text: Real-Time Translation
            - text: in 55 Indic Languages
          - paragraph [ref=e19]:
            - text: Vāķ ensures no Indian gets left behind
            - text: by democratising voice AI
          - link "Try Vāķ" [ref=e20] [cursor=pointer]:
            - /url: https://vak.shunyalabs.ai/setup
            - text: Try Vāķ
            - img [ref=e21]
        - img "Vāk Goddess" [ref=e27]
      - generic [ref=e28]:
        - generic [ref=e29]:
          - paragraph [ref=e30]: OUR MODELS
          - heading "In the AI-driven economy, voice is the interface." [level=2] [ref=e31]
        - generic [ref=e32]:
          - generic [ref=e33]:
            - img [ref=e35]
            - generic [ref=e39]: LANGUAGES
            - heading "55 Indic Languages" [level=3] [ref=e40]
            - paragraph [ref=e41]: Real-time translation between 55 languages with <1.5s end-to-end latency and zero-shot voice cloning.
          - generic [ref=e42]:
            - img [ref=e44]
            - generic [ref=e47]: TRAINING
            - heading "More Accurate at Low Cost" [level=3] [ref=e48]
            - paragraph [ref=e49]: Trained using Shunya Labs' NASSCOM-published "Desirable Difficulties" methodology at 1/25th the cost of Big Tech.
          - generic [ref=e50]:
            - img [ref=e52]
            - generic [ref=e64]: MODELS
            - heading "Powered by Zero Suite" [level=3] [ref=e65]
            - paragraph [ref=e66]: "Powered by Zero STT, the #1 model on OpenASR Leaderboard. Built for CPUs and edge-compatibility."
        - generic [ref=e67]:
          - heading "Vāķ ensures the voice interface is accessible to everyone." [level=3] [ref=e69]:
            - text: Vāķ ensures the voice interface is
            - generic [ref=e70]: accessible to everyone.
          - link "Vāķ" [ref=e71] [cursor=pointer]:
            - /url: https://vak.shunyalabs.ai/setup
            - img [ref=e72]
            - heading "Vāķ" [level=3] [ref=e74]
    - generic [ref=e76]:
      - paragraph [ref=e77]: OPEN-SOURCE
      - heading "Open-Weight for the Community" [level=2] [ref=e78]
      - paragraph [ref=e79]:
        - text: Open to every developer, government, startup,
        - text: and researcher. Sovereign by design.
      - link "Check out our models on Hugging Face" [ref=e80] [cursor=pointer]:
        - /url: https://huggingface.co/shunyalabs
        - text: Check out our models on Hugging Face
        - img [ref=e81]
    - generic [ref=e86]:
      - paragraph [ref=e87]: Documentation
      - heading "Technical Release" [level=2] [ref=e88]
      - paragraph [ref=e89]:
        - text: Complete model specifications,
        - generic [ref=e90]:
          - text: BLEU scores for all
          - text: 55 languages
        - text: ", and quick start integration guide."
      - link "Download Vāḳ Translate Release PDF" [ref=e91] [cursor=pointer]:
        - /url: /vak_translate_release.pdf
        - text: Download Vāḳ Translate Release PDF
        - img [ref=e92]
    - generic [ref=e96]:
      - img [ref=e98]
      - paragraph [ref=e100]: Launched at India AI Impact Summit
      - generic [ref=e103]:
        - img "Shunya Labs" [ref=e104]
        - img "NASSCOM" [ref=e106]
      - paragraph [ref=e107]: Feb 19-20, 2026
    - contentinfo [ref=e108]:
      - generic [ref=e109]:
        - generic [ref=e110]:
          - img "Shunya Labs" [ref=e111]
          - paragraph [ref=e112]: Shunya Labs, Inc.
        - generic [ref=e113]:
          - paragraph [ref=e114]: Product
          - list [ref=e115]:
            - listitem [ref=e116]:
              - link "Overview" [ref=e117] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e118]:
              - link "Models" [ref=e119] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e120]:
              - link "Voice Agents" [ref=e121] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e122]:
              - link "Speech Intelligence" [ref=e123] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e124]:
              - link "Audio Processing" [ref=e125] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e126]:
              - link "Deployment" [ref=e127] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e128]:
          - paragraph [ref=e129]: Models
          - list [ref=e130]:
            - listitem [ref=e131]:
              - link "Language Models" [ref=e132] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e133]:
              - link "Zero STT Indic" [ref=e134] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e135]:
              - link "Zero STT Codeswitch" [ref=e136] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e137]:
              - link "Specialised Models" [ref=e138] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e139]:
              - link "Zero STT Med" [ref=e140] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e141]:
              - link "On Device Models" [ref=e142] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e143]:
          - paragraph [ref=e144]: Solutions
          - list [ref=e145]:
            - listitem [ref=e146]:
              - link "Contact Centers" [ref=e147] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e148]:
              - link "Media & Entertainment" [ref=e149] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e150]:
              - link "Healthcare" [ref=e151] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e152]:
          - paragraph [ref=e153]: Resources
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link "Blogs" [ref=e156] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e157]:
              - link "Benchmarks" [ref=e158] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e159]:
              - link "News & Media" [ref=e160] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e161]:
              - link "Patents" [ref=e162] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e163]:
              - link "Research" [ref=e164] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e166]:
          - link "Documentation" [ref=e167] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e169]:
          - listitem [ref=e170]:
            - link "About us" [ref=e171] [cursor=pointer]:
              - /url: /about
        - list [ref=e173]:
          - listitem [ref=e174]:
            - link "Pricing" [ref=e175] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e176]:
        - paragraph [ref=e177]: Follow us on
        - generic [ref=e178]:
          - link [ref=e179] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e180]
          - link [ref=e182] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e183]
          - link [ref=e185] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e186]
          - link [ref=e188] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e189]
      - generic [ref=e191]:
        - paragraph [ref=e192]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e193]:
          - link "Privacy" [ref=e194] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e195] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e196] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e197] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e198] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e199]
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
     |                                                                                      ^ Error: 19 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```