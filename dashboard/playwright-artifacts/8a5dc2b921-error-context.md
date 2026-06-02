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
              - text: Documentation
              - img
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
        - heading "Intelligence That Cares. APIs That Power Clinical Systems." [level=1] [ref=e12]
        - paragraph [ref=e13]: Modular clinical AI — speech, reasoning, and documentation built for accuracy, privacy, and scale.
        - link "Live Demo" [ref=e14] [cursor=pointer]:
          - /url: /
          - button "Live Demo" [ref=e15]:
            - img [ref=e16]
            - text: Live Demo
      - generic [ref=e18]:
        - generic [ref=e20]:
          - heading "Capture clinical encounters—accurate, structured, compliant" [level=2] [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]:
              - generic [ref=e26]:
                - generic [ref=e27] [cursor=pointer]:
                  - heading "Real-time clinical transcription" [level=3] [ref=e28]
                  - paragraph [ref=e29]: <3% WER, noise-resilient, tuned for medical vocab with clean labels for Doctor/Patient/Nurse.
                - generic [ref=e30] [cursor=pointer]:
                  - heading "Speaker-aware notes" [level=3] [ref=e31]
                  - paragraph [ref=e32]: Automatic diarization for clear who-said-what and action items.
                - generic [ref=e33] [cursor=pointer]:
                  - heading "Secure by design" [level=3] [ref=e34]
                  - paragraph [ref=e35]: HIPAA-ready APIs & SDKs; deploy in your private cloud or on-prem.
              - button "Try Now" [ref=e36] [cursor=pointer]
            - img "Capture clinical encounters—accurate, structured, compliant" [ref=e39]
        - generic [ref=e41]:
          - heading "Turn paperwork into EMR-ready data" [level=2] [ref=e43]
          - generic [ref=e44]:
            - generic [ref=e45]:
              - generic [ref=e47]:
                - generic [ref=e48] [cursor=pointer]:
                  - heading "Advanced healthcare OCR" [level=3] [ref=e49]
                  - paragraph [ref=e50]: Handwritten prescriptions, scans, lab forms, and tabular reports—no sweat.
                - generic [ref=e51] [cursor=pointer]:
                  - heading "Reasoning engine" [level=3] [ref=e52]
                  - paragraph [ref=e53]: LLM-powered understanding to normalize and disambiguate clinical meaning.
                - generic [ref=e54] [cursor=pointer]:
                  - heading "Structured outputs" [level=3] [ref=e55]
                  - paragraph [ref=e56]: Diagnoses, labs, vitals, prescriptions—exported as EMR-ready JSON.
              - button "Try Now" [ref=e57] [cursor=pointer]
            - img "Turn paperwork into EMR-ready data" [ref=e60]
        - generic [ref=e62]:
          - heading "Safer prescribing and stigma-free virtual care" [level=2] [ref=e64]
          - generic [ref=e65]:
            - generic [ref=e66]:
              - generic [ref=e68]:
                - generic [ref=e69] [cursor=pointer]:
                  - heading "Prescription validation" [level=3] [ref=e70]
                  - paragraph [ref=e71]: Real-time alerts for drug–drug and drug–disease risks, backed by a clinical knowledge graph.
                - generic [ref=e72] [cursor=pointer]:
                  - heading "Healthcare AI SDK" [level=3] [ref=e73]
                  - paragraph [ref=e74]: CBT, mindfulness, and coaching with clinical guardrails; detects risk and escalates safely.
                - generic [ref=e75] [cursor=pointer]:
                  - heading "Easy to integrate" [level=3] [ref=e76]
                  - paragraph [ref=e77]: Plug into EMRs and telehealth in minutes; clinician dashboard, multi-language support.
              - button "Try Now" [ref=e78] [cursor=pointer]
            - img "Safer prescribing and stigma-free virtual care" [ref=e81]
    - contentinfo [ref=e82]:
      - generic [ref=e83]:
        - paragraph [ref=e84]: Get Started
        - paragraph [ref=e85]: Provide safe, customised and instant care to your patients .
        - generic [ref=e86]:
          - link "Try for Free" [ref=e87] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e88] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e89]:
      - generic [ref=e90]:
        - generic [ref=e91]:
          - img "Shunya Labs" [ref=e92]
          - paragraph [ref=e93]: Shunya Labs, Inc.
        - generic [ref=e94]:
          - paragraph [ref=e95]: Product
          - list [ref=e96]:
            - listitem [ref=e97]:
              - link "Overview" [ref=e98] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e99]:
              - link "Models" [ref=e100] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e101]:
              - link "Voice Agents" [ref=e102] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e103]:
              - link "Speech Intelligence" [ref=e104] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e105]:
              - link "Audio Processing" [ref=e106] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e107]:
              - link "Deployment" [ref=e108] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e109]:
          - paragraph [ref=e110]: Models
          - list [ref=e111]:
            - listitem [ref=e112]:
              - link "Language Models" [ref=e113] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e114]:
              - link "Zero STT Indic" [ref=e115] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e116]:
              - link "Zero STT Codeswitch" [ref=e117] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e118]:
              - link "Specialised Models" [ref=e119] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e120]:
              - link "Zero STT Med" [ref=e121] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e122]:
              - link "On Device Models" [ref=e123] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e124]:
          - paragraph [ref=e125]: Solutions
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "Contact Centers" [ref=e128] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e129]:
              - link "Media & Entertainment" [ref=e130] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e131]:
              - link "Healthcare" [ref=e132] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e133]:
          - paragraph [ref=e134]: Resources
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "Blogs" [ref=e137] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e138]:
              - link "Benchmarks" [ref=e139] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e140]:
              - link "News & Media" [ref=e141] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e142]:
              - link "Patents" [ref=e143] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e144]:
              - link "Research" [ref=e145] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e147]:
          - link "Documentation" [ref=e148] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e150]:
          - listitem [ref=e151]:
            - link "About us" [ref=e152] [cursor=pointer]:
              - /url: /about
        - list [ref=e154]:
          - listitem [ref=e155]:
            - link "Pricing" [ref=e156] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e157]:
        - paragraph [ref=e158]: Follow us on
        - generic [ref=e159]:
          - link [ref=e160] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e161]
          - link [ref=e163] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e164]
          - link [ref=e166] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e167]
          - link [ref=e169] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e170]
      - generic [ref=e172]:
        - paragraph [ref=e173]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e174]:
          - link "Privacy" [ref=e175] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e176] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e177] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e178] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e179] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e180]
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