# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/healthcare/design.spec.js >> Solutions - Healthcare design compliance >> Figma design compliance
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
  - generic [ref=e2]:
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
        - heading "Intelligence That Cares. APIs That Power Clinical Systems." [level=1] [ref=e38]
        - paragraph [ref=e39]: Modular clinical AI — speech, reasoning, and documentation built for accuracy, privacy, and scale.
        - link "Live Demo" [ref=e40] [cursor=pointer]:
          - /url: /
          - button "Live Demo" [ref=e41]:
            - img [ref=e42]
            - text: Live Demo
      - generic [ref=e44]:
        - generic [ref=e46]:
          - heading "Capture clinical encounters—accurate, structured, compliant" [level=2] [ref=e48]
          - generic [ref=e49]:
            - generic [ref=e50]:
              - generic [ref=e52]:
                - generic [ref=e53] [cursor=pointer]:
                  - heading "Real-time clinical transcription" [level=3] [ref=e54]
                  - paragraph [ref=e55]: <3% WER, noise-resilient, tuned for medical vocab with clean labels for Doctor/Patient/Nurse.
                - generic [ref=e56] [cursor=pointer]:
                  - heading "Speaker-aware notes" [level=3] [ref=e57]
                  - paragraph [ref=e58]: Automatic diarization for clear who-said-what and action items.
                - generic [ref=e59] [cursor=pointer]:
                  - heading "Secure by design" [level=3] [ref=e60]
                  - paragraph [ref=e61]: HIPAA-ready APIs & SDKs; deploy in your private cloud or on-prem.
              - button "Try Now" [ref=e62] [cursor=pointer]
            - img "Capture clinical encounters—accurate, structured, compliant" [ref=e65]
        - generic [ref=e67]:
          - heading "Turn paperwork into EMR-ready data" [level=2] [ref=e69]
          - generic [ref=e70]:
            - generic [ref=e71]:
              - generic [ref=e73]:
                - generic [ref=e74] [cursor=pointer]:
                  - heading "Advanced healthcare OCR" [level=3] [ref=e75]
                  - paragraph [ref=e76]: Handwritten prescriptions, scans, lab forms, and tabular reports—no sweat.
                - generic [ref=e77] [cursor=pointer]:
                  - heading "Reasoning engine" [level=3] [ref=e78]
                  - paragraph [ref=e79]: LLM-powered understanding to normalize and disambiguate clinical meaning.
                - generic [ref=e80] [cursor=pointer]:
                  - heading "Structured outputs" [level=3] [ref=e81]
                  - paragraph [ref=e82]: Diagnoses, labs, vitals, prescriptions—exported as EMR-ready JSON.
              - button "Try Now" [ref=e83] [cursor=pointer]
            - img "Turn paperwork into EMR-ready data" [ref=e86]
        - generic [ref=e88]:
          - heading "Safer prescribing and stigma-free virtual care" [level=2] [ref=e90]
          - generic [ref=e91]:
            - generic [ref=e92]:
              - generic [ref=e94]:
                - generic [ref=e95] [cursor=pointer]:
                  - heading "Prescription validation" [level=3] [ref=e96]
                  - paragraph [ref=e97]: Real-time alerts for drug–drug and drug–disease risks, backed by a clinical knowledge graph.
                - generic [ref=e98] [cursor=pointer]:
                  - heading "Healthcare AI SDK" [level=3] [ref=e99]
                  - paragraph [ref=e100]: CBT, mindfulness, and coaching with clinical guardrails; detects risk and escalates safely.
                - generic [ref=e101] [cursor=pointer]:
                  - heading "Easy to integrate" [level=3] [ref=e102]
                  - paragraph [ref=e103]: Plug into EMRs and telehealth in minutes; clinician dashboard, multi-language support.
              - button "Try Now" [ref=e104] [cursor=pointer]
            - img "Safer prescribing and stigma-free virtual care" [ref=e107]
    - contentinfo [ref=e108]:
      - generic [ref=e109]:
        - paragraph [ref=e110]: Get Started
        - paragraph [ref=e111]: Provide safe, customised and instant care to your patients .
        - generic [ref=e112]:
          - link "Try for Free" [ref=e113] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e114] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e115]:
      - generic [ref=e116]:
        - generic [ref=e117]:
          - img "Shunya Labs" [ref=e118]
          - paragraph [ref=e119]: Shunya Labs, Inc.
        - generic [ref=e120]:
          - paragraph [ref=e121]: Product
          - list [ref=e122]:
            - listitem [ref=e123]:
              - link "Overview" [ref=e124] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e125]:
              - link "Models" [ref=e126] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e127]:
              - link "Voice Agents" [ref=e128] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e129]:
              - link "Speech Intelligence" [ref=e130] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e131]:
              - link "Audio Processing" [ref=e132] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e133]:
              - link "Deployment" [ref=e134] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e135]:
          - paragraph [ref=e136]: Models
          - list [ref=e137]:
            - listitem [ref=e138]:
              - link "Language Models" [ref=e139] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e140]:
              - link "Zero STT Indic" [ref=e141] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e142]:
              - link "Zero STT Codeswitch" [ref=e143] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e144]:
              - link "Specialised Models" [ref=e145] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e146]:
              - link "Zero STT Med" [ref=e147] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e148]:
              - link "On Device Models" [ref=e149] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e150]:
          - paragraph [ref=e151]: Solutions
          - list [ref=e152]:
            - listitem [ref=e153]:
              - link "Contact Centers" [ref=e154] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e155]:
              - link "Media & Entertainment" [ref=e156] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e157]:
              - link "Healthcare" [ref=e158] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e159]:
          - paragraph [ref=e160]: Resources
          - list [ref=e161]:
            - listitem [ref=e162]:
              - link "Blogs" [ref=e163] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e164]:
              - link "Benchmarks" [ref=e165] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e166]:
              - link "News & Media" [ref=e167] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e168]:
              - link "Patents" [ref=e169] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e170]:
              - link "Research" [ref=e171] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e173]:
          - link "Documentation" [ref=e174] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e176]:
          - listitem [ref=e177]:
            - link "About us" [ref=e178] [cursor=pointer]:
              - /url: /about
        - list [ref=e180]:
          - listitem [ref=e181]:
            - link "Pricing" [ref=e182] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e183]:
        - paragraph [ref=e184]: Follow us on
        - generic [ref=e185]:
          - link [ref=e186] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e187]
          - link [ref=e189] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e190]
          - link [ref=e192] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e193]
          - link [ref=e195] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e196]
      - generic [ref=e198]:
        - paragraph [ref=e199]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e200]:
          - link "Privacy" [ref=e201] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e202] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e203] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e204] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e205] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e206]
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