# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/healthcare/design.spec.js >> Solutions - Healthcare design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Text content "© 2026 Shunya Labs, Inc. All rights reserved." not found on page

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
      - generic [ref=e10]:
        - heading "Intelligence That Cares. APIs That Power Clinical Systems." [level=1] [ref=e11]
        - paragraph [ref=e12]: Modular clinical AI — speech, reasoning, and documentation built for accuracy, privacy, and scale.
        - link "Live Demo" [ref=e13] [cursor=pointer]:
          - /url: /
          - button "Live Demo" [ref=e14]:
            - img [ref=e15]
            - text: Live Demo
      - generic [ref=e17]:
        - generic [ref=e19]:
          - heading "Capture clinical encounters—accurate, structured, compliant" [level=2] [ref=e21]
          - generic [ref=e22]:
            - generic [ref=e23]:
              - generic [ref=e25]:
                - generic [ref=e26] [cursor=pointer]:
                  - heading "Real-time clinical transcription" [level=3] [ref=e27]
                  - paragraph [ref=e28]: <3% WER, noise-resilient, tuned for medical vocab with clean labels for Doctor/Patient/Nurse.
                - generic [ref=e29] [cursor=pointer]:
                  - heading "Speaker-aware notes" [level=3] [ref=e30]
                  - paragraph [ref=e31]: Automatic diarization for clear who-said-what and action items.
                - generic [ref=e32] [cursor=pointer]:
                  - heading "Secure by design" [level=3] [ref=e33]
                  - paragraph [ref=e34]: HIPAA-ready APIs & SDKs; deploy in your private cloud or on-prem.
              - button "Try Now" [ref=e35] [cursor=pointer]
            - img "Capture clinical encounters—accurate, structured, compliant" [ref=e38]
        - generic [ref=e40]:
          - heading "Turn paperwork into EMR-ready data" [level=2] [ref=e42]
          - generic [ref=e43]:
            - generic [ref=e44]:
              - generic [ref=e46]:
                - generic [ref=e47] [cursor=pointer]:
                  - heading "Advanced healthcare OCR" [level=3] [ref=e48]
                  - paragraph [ref=e49]: Handwritten prescriptions, scans, lab forms, and tabular reports—no sweat.
                - generic [ref=e50] [cursor=pointer]:
                  - heading "Reasoning engine" [level=3] [ref=e51]
                  - paragraph [ref=e52]: LLM-powered understanding to normalize and disambiguate clinical meaning.
                - generic [ref=e53] [cursor=pointer]:
                  - heading "Structured outputs" [level=3] [ref=e54]
                  - paragraph [ref=e55]: Diagnoses, labs, vitals, prescriptions—exported as EMR-ready JSON.
              - button "Try Now" [ref=e56] [cursor=pointer]
            - img "Turn paperwork into EMR-ready data" [ref=e59]
        - generic [ref=e61]:
          - heading "Safer prescribing and stigma-free virtual care" [level=2] [ref=e63]
          - generic [ref=e64]:
            - generic [ref=e65]:
              - generic [ref=e67]:
                - generic [ref=e68] [cursor=pointer]:
                  - heading "Prescription validation" [level=3] [ref=e69]
                  - paragraph [ref=e70]: Real-time alerts for drug–drug and drug–disease risks, backed by a clinical knowledge graph.
                - generic [ref=e71] [cursor=pointer]:
                  - heading "Healthcare AI SDK" [level=3] [ref=e72]
                  - paragraph [ref=e73]: CBT, mindfulness, and coaching with clinical guardrails; detects risk and escalates safely.
                - generic [ref=e74] [cursor=pointer]:
                  - heading "Easy to integrate" [level=3] [ref=e75]
                  - paragraph [ref=e76]: Plug into EMRs and telehealth in minutes; clinician dashboard, multi-language support.
              - button "Try Now" [ref=e77] [cursor=pointer]
            - img "Safer prescribing and stigma-free virtual care" [ref=e80]
    - contentinfo [ref=e81]:
      - generic [ref=e82]:
        - paragraph [ref=e83]: Get Started
        - paragraph [ref=e84]: Provide safe, customised and instant care to your patients .
        - generic [ref=e85]:
          - link "Try for Free" [ref=e86] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e87] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e88]:
      - generic [ref=e89]:
        - generic [ref=e90]:
          - img "Shunya Labs" [ref=e91]
          - paragraph [ref=e92]: Shunya Labs, Inc.
        - generic [ref=e93]:
          - paragraph [ref=e94]: Product
          - list [ref=e95]:
            - listitem [ref=e96]:
              - link "Overview" [ref=e97] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e98]:
              - link "Models" [ref=e99] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e100]:
              - link "Voice Agents" [ref=e101] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e102]:
              - link "Speech Intelligence" [ref=e103] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e104]:
              - link "Audio Processing" [ref=e105] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e106]:
              - link "Deployment" [ref=e107] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e108]:
          - paragraph [ref=e109]: Models
          - list [ref=e110]:
            - listitem [ref=e111]:
              - link "Language Models" [ref=e112] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e113]:
              - link "Zero STT Indic" [ref=e114] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e115]:
              - link "Zero STT Codeswitch" [ref=e116] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e117]:
              - link "Specialised Models" [ref=e118] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e119]:
              - link "Zero STT Med" [ref=e120] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e121]:
              - link "On Device Models" [ref=e122] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e123]:
          - paragraph [ref=e124]: Solutions
          - list [ref=e125]:
            - listitem [ref=e126]:
              - link "Contact Centers" [ref=e127] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e128]:
              - link "Media & Entertainment" [ref=e129] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e130]:
              - link "Healthcare" [ref=e131] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e132]:
          - paragraph [ref=e133]: Resources
          - list [ref=e134]:
            - listitem [ref=e135]:
              - link "Blogs" [ref=e136] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e137]:
              - link "Benchmarks" [ref=e138] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e139]:
              - link "News & Media" [ref=e140] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e141]:
              - link "Patents" [ref=e142] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e143]:
              - link "Research" [ref=e144] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e146]:
          - link "Documentation" [ref=e147] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e149]:
          - listitem [ref=e150]:
            - link "About us" [ref=e151] [cursor=pointer]:
              - /url: /about
        - list [ref=e153]:
          - listitem [ref=e154]:
            - link "Pricing" [ref=e155] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e156]:
        - paragraph [ref=e157]: Follow us on
        - generic [ref=e158]:
          - link [ref=e159] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e160]
          - link [ref=e162] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e163]
          - link [ref=e165] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e166]
          - link [ref=e168] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e169]
      - generic [ref=e171]:
        - paragraph [ref=e172]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e173]:
          - link "Privacy" [ref=e174] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e175] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e176] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e177] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e178] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e179]
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