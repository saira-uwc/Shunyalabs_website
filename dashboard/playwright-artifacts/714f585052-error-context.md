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
    - main [ref=e34]:
      - img "Shunya Labs | nasscom" [ref=e37]
      - generic [ref=e38]:
        - generic [ref=e39]:
          - heading "Vāķ" [level=1] [ref=e40]
          - heading "Real-Time Translation in 55 Indic Languages" [level=2] [ref=e41]:
            - text: Real-Time Translation
            - text: in 55 Indic Languages
          - paragraph [ref=e42]:
            - text: Vāķ ensures no Indian gets left behind
            - text: by democratising voice AI
        - img "Vāk Goddess" [ref=e45]
      - generic [ref=e46]:
        - generic [ref=e47]:
          - paragraph [ref=e48]: OUR MODELS
          - heading "In the AI-driven economy, voice is the interface." [level=2] [ref=e49]
        - generic [ref=e50]:
          - generic [ref=e51]:
            - img [ref=e53]
            - generic [ref=e57]: LANGUAGES
            - heading "55 Indic Languages" [level=3] [ref=e58]
            - paragraph [ref=e59]: Real-time translation between 55 languages with <1.5s end-to-end latency and zero-shot voice cloning.
          - generic [ref=e60]:
            - img [ref=e62]
            - generic [ref=e65]: TRAINING
            - heading "More Accurate at Low Cost" [level=3] [ref=e66]
            - paragraph [ref=e67]: Trained using Shunya Labs' NASSCOM-published "Desirable Difficulties" methodology at 1/25th the cost of Big Tech.
          - generic [ref=e68]:
            - img [ref=e70]
            - generic [ref=e82]: MODELS
            - heading "Powered by Zero Suite" [level=3] [ref=e83]
            - paragraph [ref=e84]: "Powered by Zero STT, the #1 model on OpenASR Leaderboard. Built for CPUs and edge-compatibility."
        - generic [ref=e85]:
          - heading "Vāķ ensures the voice interface is accessible to everyone." [level=3] [ref=e87]:
            - text: Vāķ ensures the voice interface is
            - generic [ref=e88]: accessible to everyone.
          - link "Vāķ" [ref=e89] [cursor=pointer]:
            - /url: https://vak.shunyalabs.ai
            - img [ref=e90]
            - heading "Vāķ" [level=3] [ref=e92]
    - generic [ref=e94]:
      - paragraph [ref=e95]: OPEN-SOURCE
      - heading "Open-Weight for the Community" [level=2] [ref=e96]
      - paragraph [ref=e97]:
        - text: Open to every developer, government, startup,
        - text: and researcher. Sovereign by design.
      - link "Check out our models on Hugging Face" [ref=e98] [cursor=pointer]:
        - /url: https://huggingface.co/shunyalabs
        - text: Check out our models on Hugging Face
        - img [ref=e99]
    - generic [ref=e104]:
      - paragraph [ref=e105]: Documentation
      - heading "Technical Release" [level=2] [ref=e106]
      - paragraph [ref=e107]:
        - text: Complete model specifications,
        - generic [ref=e108]:
          - text: BLEU scores for all
          - text: 55 languages
        - text: ", and quick start integration guide."
      - link "Download Vāḳ Translate Release PDF" [ref=e109] [cursor=pointer]:
        - /url: /vak_translate_release.pdf
        - text: Download Vāḳ Translate Release PDF
        - img [ref=e110]
    - generic [ref=e114]:
      - img [ref=e116]
      - paragraph [ref=e118]: Launched at India AI Impact Summit
      - img "Shunya Labs | nasscom" [ref=e120]
      - paragraph [ref=e121]: Feb 19-20, 2026
    - contentinfo [ref=e122]:
      - generic [ref=e123]:
        - generic [ref=e124]:
          - img "Shunya Labs" [ref=e125]
          - paragraph [ref=e126]: Shunya Labs, Inc.
        - generic [ref=e127]:
          - paragraph [ref=e128]: Product
          - list [ref=e129]:
            - listitem [ref=e130]:
              - link "Overview" [ref=e131] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e132]:
              - link "Models" [ref=e133] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e134]:
              - link "Voice Agents" [ref=e135] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e136]:
              - link "Speech Intelligence" [ref=e137] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e138]:
              - link "Audio Processing" [ref=e139] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e140]:
              - link "Deployment" [ref=e141] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e142]:
          - paragraph [ref=e143]: Models
          - list [ref=e144]:
            - listitem [ref=e145]:
              - link "Language Models" [ref=e146] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e147]:
              - link "Zero STT Indic" [ref=e148] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e149]:
              - link "Zero STT Codeswitch" [ref=e150] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e151]:
              - link "Specialised Models" [ref=e152] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e153]:
              - link "Zero STT Med" [ref=e154] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e155]:
              - link "On Device Models" [ref=e156] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e157]:
          - paragraph [ref=e158]: Solutions
          - list [ref=e159]:
            - listitem [ref=e160]:
              - link "Contact Centers" [ref=e161] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e162]:
              - link "Media & Entertainment" [ref=e163] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e164]:
              - link "Healthcare" [ref=e165] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e166]:
          - paragraph [ref=e167]: Resources
          - list [ref=e168]:
            - listitem [ref=e169]:
              - link "Blogs" [ref=e170] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e171]:
              - link "Benchmarks" [ref=e172] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e173]:
              - link "News & Media" [ref=e174] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e175]:
              - link "Patents" [ref=e176] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e177]:
              - link "Research" [ref=e178] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e180]:
          - link "Documentation" [ref=e181] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e183]:
          - listitem [ref=e184]:
            - link "About us" [ref=e185] [cursor=pointer]:
              - /url: /about
        - list [ref=e187]:
          - listitem [ref=e188]:
            - link "Pricing" [ref=e189] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e190]:
        - paragraph [ref=e191]: Follow us on
        - generic [ref=e192]:
          - link [ref=e193] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e194]
          - link [ref=e196] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e197]
          - link [ref=e199] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e200]
          - link [ref=e202] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e203]
      - generic [ref=e205]:
        - paragraph [ref=e206]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e207]:
          - link "Privacy" [ref=e208] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e209] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e210] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e211] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e212] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e213]
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