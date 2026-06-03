# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/vak/design.spec.js >> Models - Translation Models (Vāk) design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Footer item "© 2026 Shunya Labs, Inc. All rights reserved." not found

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
    - main [ref=e9]:
      - img "Shunya Labs | nasscom" [ref=e12]
      - generic [ref=e13]:
        - generic [ref=e14]:
          - heading "Vāķ" [level=1] [ref=e15]
          - heading "Real-Time Translation in 55 Indic Languages" [level=2] [ref=e16]:
            - text: Real-Time Translation
            - text: in 55 Indic Languages
          - paragraph [ref=e17]:
            - text: Vāķ ensures no Indian gets left behind
            - text: by democratising voice AI
        - img "Vāk Goddess" [ref=e20]
      - generic [ref=e21]:
        - generic [ref=e22]:
          - paragraph [ref=e23]: OUR MODELS
          - heading "In the AI-driven economy, voice is the interface." [level=2] [ref=e24]
        - generic [ref=e25]:
          - generic [ref=e26]:
            - img [ref=e28]
            - generic [ref=e32]: LANGUAGES
            - heading "55 Indic Languages" [level=3] [ref=e33]
            - paragraph [ref=e34]: Real-time translation between 55 languages with <1.5s end-to-end latency and zero-shot voice cloning.
          - generic [ref=e35]:
            - img [ref=e37]
            - generic [ref=e40]: TRAINING
            - heading "More Accurate at Low Cost" [level=3] [ref=e41]
            - paragraph [ref=e42]: Trained using Shunya Labs' NASSCOM-published "Desirable Difficulties" methodology at 1/25th the cost of Big Tech.
          - generic [ref=e43]:
            - img [ref=e45]
            - generic [ref=e57]: MODELS
            - heading "Powered by Zero Suite" [level=3] [ref=e58]
            - paragraph [ref=e59]: "Powered by Zero STT, the #1 model on OpenASR Leaderboard. Built for CPUs and edge-compatibility."
        - generic [ref=e60]:
          - heading "Vāķ ensures the voice interface is accessible to everyone." [level=3] [ref=e62]:
            - text: Vāķ ensures the voice interface is
            - generic [ref=e63]: accessible to everyone.
          - link "Vāķ" [ref=e64] [cursor=pointer]:
            - /url: https://vak.shunyalabs.ai
            - img [ref=e65]
            - heading "Vāķ" [level=3] [ref=e67]
    - generic [ref=e69]:
      - paragraph [ref=e70]: OPEN-SOURCE
      - heading "Open-Weight for the Community" [level=2] [ref=e71]
      - paragraph [ref=e72]:
        - text: Open to every developer, government, startup,
        - text: and researcher. Sovereign by design.
      - link "Check out our models on Hugging Face" [ref=e73] [cursor=pointer]:
        - /url: https://huggingface.co/shunyalabs
        - text: Check out our models on Hugging Face
        - img [ref=e74]
    - generic [ref=e79]:
      - paragraph [ref=e80]: Documentation
      - heading "Technical Release" [level=2] [ref=e81]
      - paragraph [ref=e82]:
        - text: Complete model specifications,
        - generic [ref=e83]:
          - text: BLEU scores for all
          - text: 55 languages
        - text: ", and quick start integration guide."
      - link "Download Vāḳ Translate Release PDF" [ref=e84] [cursor=pointer]:
        - /url: /vak_translate_release.pdf
        - text: Download Vāḳ Translate Release PDF
        - img [ref=e85]
    - generic [ref=e89]:
      - img [ref=e91]
      - paragraph [ref=e93]: Launched at India AI Impact Summit
      - img "Shunya Labs | nasscom" [ref=e95]
      - paragraph [ref=e96]: Feb 19-20, 2026
    - contentinfo [ref=e97]:
      - generic [ref=e98]:
        - generic [ref=e99]:
          - img "Shunya Labs" [ref=e100]
          - paragraph [ref=e101]: Shunya Labs, Inc.
        - generic [ref=e102]:
          - paragraph [ref=e103]: Product
          - list [ref=e104]:
            - listitem [ref=e105]:
              - link "Overview" [ref=e106] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e107]:
              - link "Models" [ref=e108] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e109]:
              - link "Voice Agents" [ref=e110] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e111]:
              - link "Speech Intelligence" [ref=e112] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e113]:
              - link "Audio Processing" [ref=e114] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e115]:
              - link "Deployment" [ref=e116] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e117]:
          - paragraph [ref=e118]: Models
          - list [ref=e119]:
            - listitem [ref=e120]:
              - link "Language Models" [ref=e121] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e122]:
              - link "Zero STT Indic" [ref=e123] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e124]:
              - link "Zero STT Codeswitch" [ref=e125] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e126]:
              - link "Specialised Models" [ref=e127] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e128]:
              - link "Zero STT Med" [ref=e129] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e130]:
              - link "On Device Models" [ref=e131] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e132]:
          - paragraph [ref=e133]: Solutions
          - list [ref=e134]:
            - listitem [ref=e135]:
              - link "Contact Centers" [ref=e136] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e137]:
              - link "Media & Entertainment" [ref=e138] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e139]:
              - link "Healthcare" [ref=e140] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e141]:
          - paragraph [ref=e142]: Resources
          - list [ref=e143]:
            - listitem [ref=e144]:
              - link "Blogs" [ref=e145] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e146]:
              - link "Benchmarks" [ref=e147] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e148]:
              - link "News & Media" [ref=e149] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e150]:
              - link "Patents" [ref=e151] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e152]:
              - link "Research" [ref=e153] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e155]:
          - link "Documentation" [ref=e156] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e158]:
          - listitem [ref=e159]:
            - link "About us" [ref=e160] [cursor=pointer]:
              - /url: /about
        - list [ref=e162]:
          - listitem [ref=e163]:
            - link "Pricing" [ref=e164] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e165]:
        - paragraph [ref=e166]: Follow us on
        - generic [ref=e167]:
          - link [ref=e168] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e169]
          - link [ref=e171] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e172]
          - link [ref=e174] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e175]
          - link [ref=e177] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e178]
      - generic [ref=e180]:
        - paragraph [ref=e181]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e182]:
          - link "Privacy" [ref=e183] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e184] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e185] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e186] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e187] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e188]
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