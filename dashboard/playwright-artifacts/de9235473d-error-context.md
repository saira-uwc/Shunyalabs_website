# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/healthcare/design.spec.js >> Solutions - Healthcare design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Text content "© 2026 Shunya Labs Inc. All rights reserved." not found on page

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
        - heading "Intelligence That Cares. APIs That Power Clinical Systems." [level=1] [ref=e40]
        - paragraph [ref=e41]: Modular clinical AI — speech, reasoning, and documentation built for accuracy, privacy, and scale.
        - link "Live Demo" [ref=e42] [cursor=pointer]:
          - /url: /
          - button "Live Demo" [ref=e43]:
            - img [ref=e44]
            - text: Live Demo
      - generic [ref=e46]:
        - generic [ref=e48]:
          - heading "Capture clinical encounters—accurate, structured, compliant" [level=2] [ref=e50]
          - generic [ref=e51]:
            - generic [ref=e52]:
              - generic [ref=e54]:
                - generic [ref=e55] [cursor=pointer]:
                  - heading "Real-time clinical transcription" [level=3] [ref=e56]
                  - paragraph [ref=e57]: <3% WER, noise-resilient, tuned for medical vocab with clean labels for Doctor/Patient/Nurse.
                - generic [ref=e58] [cursor=pointer]:
                  - heading "Speaker-aware notes" [level=3] [ref=e59]
                  - paragraph [ref=e60]: Automatic diarization for clear who-said-what and action items.
                - generic [ref=e61] [cursor=pointer]:
                  - heading "Secure by design" [level=3] [ref=e62]
                  - paragraph [ref=e63]: HIPAA-ready APIs & SDKs; deploy in your private cloud or on-prem.
              - button "Try Now" [ref=e64] [cursor=pointer]
            - img "Capture clinical encounters—accurate, structured, compliant" [ref=e67]
        - generic [ref=e69]:
          - heading "Turn paperwork into EMR-ready data" [level=2] [ref=e71]
          - generic [ref=e72]:
            - generic [ref=e73]:
              - generic [ref=e75]:
                - generic [ref=e76] [cursor=pointer]:
                  - heading "Advanced healthcare OCR" [level=3] [ref=e77]
                  - paragraph [ref=e78]: Handwritten prescriptions, scans, lab forms, and tabular reports—no sweat.
                - generic [ref=e79] [cursor=pointer]:
                  - heading "Reasoning engine" [level=3] [ref=e80]
                  - paragraph [ref=e81]: LLM-powered understanding to normalize and disambiguate clinical meaning.
                - generic [ref=e82] [cursor=pointer]:
                  - heading "Structured outputs" [level=3] [ref=e83]
                  - paragraph [ref=e84]: Diagnoses, labs, vitals, prescriptions—exported as EMR-ready JSON.
              - button "Try Now" [ref=e85] [cursor=pointer]
            - img "Turn paperwork into EMR-ready data" [ref=e88]
        - generic [ref=e90]:
          - heading "Safer prescribing and stigma-free virtual care" [level=2] [ref=e92]
          - generic [ref=e93]:
            - generic [ref=e94]:
              - generic [ref=e96]:
                - generic [ref=e97] [cursor=pointer]:
                  - heading "Prescription validation" [level=3] [ref=e98]
                  - paragraph [ref=e99]: Real-time alerts for drug–drug and drug–disease risks, backed by a clinical knowledge graph.
                - generic [ref=e100] [cursor=pointer]:
                  - heading "Healthcare AI SDK" [level=3] [ref=e101]
                  - paragraph [ref=e102]: CBT, mindfulness, and coaching with clinical guardrails; detects risk and escalates safely.
                - generic [ref=e103] [cursor=pointer]:
                  - heading "Easy to integrate" [level=3] [ref=e104]
                  - paragraph [ref=e105]: Plug into EMRs and telehealth in minutes; clinician dashboard, multi-language support.
              - button "Try Now" [ref=e106] [cursor=pointer]
            - img "Safer prescribing and stigma-free virtual care" [ref=e109]
    - contentinfo [ref=e110]:
      - generic [ref=e111]:
        - paragraph [ref=e112]: Get Started
        - paragraph [ref=e113]: Provide safe, customised and instant care to your patients .
        - generic [ref=e114]:
          - link "Try for Free" [ref=e115] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e116] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e117]:
      - generic [ref=e118]:
        - generic [ref=e119]:
          - img "Shunya Labs" [ref=e120]
          - paragraph [ref=e121]: Shunya Labs, Inc.
        - generic [ref=e122]:
          - paragraph [ref=e123]: Product
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link "Overview" [ref=e126] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e127]:
              - link "Models" [ref=e128] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e129]:
              - link "Voice Agents" [ref=e130] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e131]:
              - link "Speech Intelligence" [ref=e132] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e133]:
              - link "Audio Processing" [ref=e134] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e135]:
              - link "Deployment" [ref=e136] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e137]:
          - paragraph [ref=e138]: Models
          - list [ref=e139]:
            - listitem [ref=e140]:
              - link "Language Models" [ref=e141] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e142]:
              - link "Zero STT Indic" [ref=e143] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e144]:
              - link "Zero STT Codeswitch" [ref=e145] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e146]:
              - link "Specialised Models" [ref=e147] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e148]:
              - link "Zero STT Med" [ref=e149] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e150]:
              - link "On Device Models" [ref=e151] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e152]:
          - paragraph [ref=e153]: Solutions
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link "Contact Centers" [ref=e156] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e157]:
              - link "Media & Entertainment" [ref=e158] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e159]:
              - link "Healthcare" [ref=e160] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e161]:
          - paragraph [ref=e162]: Resources
          - list [ref=e163]:
            - listitem [ref=e164]:
              - link "Blogs" [ref=e165] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e166]:
              - link "Benchmarks" [ref=e167] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e168]:
              - link "News & Media" [ref=e169] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e170]:
              - link "Patents" [ref=e171] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e172]:
              - link "Research" [ref=e173] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e175]:
          - link "Documentation" [ref=e176] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e178]:
          - listitem [ref=e179]:
            - link "About us" [ref=e180] [cursor=pointer]:
              - /url: /about
        - list [ref=e182]:
          - listitem [ref=e183]:
            - link "Pricing" [ref=e184] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e185]:
        - paragraph [ref=e186]: Follow us on
        - generic [ref=e187]:
          - link [ref=e188] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e189]
          - link [ref=e191] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e192]
          - link [ref=e194] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e195]
          - link [ref=e197] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e198]
      - generic [ref=e200]:
        - paragraph [ref=e201]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e202]:
          - link "Privacy" [ref=e203] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e204] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e205] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e206] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e207] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e208]
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