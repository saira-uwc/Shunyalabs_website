# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/healthcare/design.spec.js >> Solutions - Healthcare design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [headings] Heading "Capture clinical encounters—accurate, structured, compliant" (h2) not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [images] Image "Capture clinical encounters—accurate, structured, compliant" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [global] Footer background: expected rgb(17, 17, 17) but got rgb(0, 0, 0)

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
Error: [content] Text content "Modular clinical AI — speech, reasoning, and documentation built for accuracy, privacy, and scale." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Capture clinical encounters—accurate, structured, compliant" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Handwritten prescriptions, scans, lab forms, and tabular reports—no sweat." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Diagnoses, labs, vitals, prescriptions—exported as EMR-ready JSON." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Page title: expected "Medical Transcription & Healthcare Speech AI | Shunya Labs" but got "Healthcare Speech AI & Medical Transcription APIs | Shunya Labs"

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 23 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 23
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - banner:
        - generic [ref=e4]:
          - link "Shunya Labs Logo" [ref=e5] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e6]
          - button "Open menu" [ref=e7] [cursor=pointer]: ☰
      - generic [ref=e9]:
        - heading "Intelligence That Cares. APIs That Power Clinical Systems." [level=1] [ref=e10]
        - paragraph [ref=e11]: Modular clinical AI - speech, reasoning, and documentation built for accuracy, privacy, and scale.
        - link "Live Demo" [ref=e12] [cursor=pointer]:
          - /url: /
          - img [ref=e13]
          - text: Live Demo
      - generic [ref=e15]:
        - generic [ref=e17]:
          - heading "Capture clinical encounters-accurate, structured, compliant" [level=2] [ref=e19]
          - generic [ref=e20]:
            - generic [ref=e21]:
              - generic [ref=e23]:
                - generic [ref=e24] [cursor=pointer]:
                  - heading "Real-time clinical transcription" [level=3] [ref=e25]
                  - paragraph [ref=e26]: <3% WER, noise-resilient, tuned for medical vocab with clean labels for Doctor/Patient/Nurse.
                - generic [ref=e27] [cursor=pointer]:
                  - heading "Speaker-aware notes" [level=3] [ref=e28]
                  - paragraph [ref=e29]: Automatic diarization for clear who-said-what and action items.
                - generic [ref=e30] [cursor=pointer]:
                  - heading "Secure by design" [level=3] [ref=e31]
                  - paragraph [ref=e32]: HIPAA-ready APIs & SDKs; deploy in your private cloud or on-prem.
              - button "Try Now" [ref=e33] [cursor=pointer]
            - img "Capture clinical encounters-accurate, structured, compliant" [ref=e36]
        - generic [ref=e38]:
          - heading "Turn paperwork into EMR-ready data" [level=2] [ref=e40]
          - generic [ref=e41]:
            - generic [ref=e42]:
              - generic [ref=e44]:
                - generic [ref=e45] [cursor=pointer]:
                  - heading "Advanced healthcare OCR" [level=3] [ref=e46]
                  - paragraph [ref=e47]: Handwritten prescriptions, scans, lab forms, and tabular reports-no sweat.
                - generic [ref=e48] [cursor=pointer]:
                  - heading "Reasoning engine" [level=3] [ref=e49]
                  - paragraph [ref=e50]: LLM-powered understanding to normalize and disambiguate clinical meaning.
                - generic [ref=e51] [cursor=pointer]:
                  - heading "Structured outputs" [level=3] [ref=e52]
                  - paragraph [ref=e53]: Diagnoses, labs, vitals, prescriptions-exported as EMR-ready JSON.
              - button "Try Now" [ref=e54] [cursor=pointer]
            - img "Turn paperwork into EMR-ready data" [ref=e57]
        - generic [ref=e59]:
          - heading "Safer prescribing and stigma-free virtual care" [level=2] [ref=e61]
          - generic [ref=e62]:
            - generic [ref=e63]:
              - generic [ref=e65]:
                - generic [ref=e66] [cursor=pointer]:
                  - heading "Prescription validation" [level=3] [ref=e67]
                  - paragraph [ref=e68]: Real-time alerts for drug–drug and drug–disease risks, backed by a clinical knowledge graph.
                - generic [ref=e69] [cursor=pointer]:
                  - heading "Healthcare AI SDK" [level=3] [ref=e70]
                  - paragraph [ref=e71]: CBT, mindfulness, and coaching with clinical guardrails; detects risk and escalates safely.
                - generic [ref=e72] [cursor=pointer]:
                  - heading "Easy to integrate" [level=3] [ref=e73]
                  - paragraph [ref=e74]: Plug into EMRs and telehealth in minutes; clinician dashboard, multi-language support.
              - button "Try Now" [ref=e75] [cursor=pointer]
            - img "Safer prescribing and stigma-free virtual care" [ref=e78]
    - contentinfo [ref=e79]:
      - generic [ref=e80]:
        - paragraph [ref=e81]: Get Started
        - paragraph [ref=e82]: Provide safe, customised and instant care to your patients .
        - generic [ref=e83]:
          - link "Try for Free" [ref=e84] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e85] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e86]:
      - generic [ref=e87]:
        - generic [ref=e88]:
          - img "Shunya Labs" [ref=e89]
          - paragraph [ref=e90]: Shunya Labs, Inc.
        - generic [ref=e91]:
          - paragraph [ref=e92]: Product
          - list [ref=e93]:
            - listitem [ref=e94]:
              - link "Overview" [ref=e95] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e96]:
              - link "Models" [ref=e97] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e98]:
              - link "Voice Agents" [ref=e99] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e100]:
              - link "Speech Intelligence" [ref=e101] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e102]:
              - link "Audio Processing" [ref=e103] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e104]:
              - link "Deployment" [ref=e105] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e106]:
          - paragraph [ref=e107]: Models
          - list [ref=e108]:
            - listitem [ref=e109]:
              - link "Language Models" [ref=e110] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e111]:
              - link "Zero STT Indic" [ref=e112] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e113]:
              - link "Zero STT Codeswitch" [ref=e114] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e115]:
              - link "Specialised Models" [ref=e116] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e117]:
              - link "Zero STT Med" [ref=e118] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e119]:
              - link "On Device Models" [ref=e120] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e121]:
          - paragraph [ref=e122]: Solutions
          - list [ref=e123]:
            - listitem [ref=e124]:
              - link "Contact Centers" [ref=e125] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e126]:
              - link "Media & Entertainment" [ref=e127] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e128]:
              - link "Healthcare" [ref=e129] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e130]:
          - paragraph [ref=e131]: Resources
          - list [ref=e132]:
            - listitem [ref=e133]:
              - link "Blogs" [ref=e134] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e135]:
              - link "Benchmarks" [ref=e136] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e137]:
              - link "News & Media" [ref=e138] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e139]:
              - link "Patents" [ref=e140] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e141]:
              - link "Research" [ref=e142] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e144]:
          - link "Documentation" [ref=e145] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e147]:
          - listitem [ref=e148]:
            - link "About us" [ref=e149] [cursor=pointer]:
              - /url: /about
        - list [ref=e151]:
          - listitem [ref=e152]:
            - link "Pricing" [ref=e153] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e154]:
        - paragraph [ref=e155]: Follow us on
        - generic [ref=e156]:
          - link [ref=e157] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e158]
          - link [ref=e160] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e161]
          - link [ref=e163] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e164]
          - link [ref=e166] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e167]
      - generic [ref=e169]:
        - paragraph [ref=e170]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e171]:
          - link "Privacy" [ref=e172] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e173] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e174] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e175] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e176] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e177]
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
     |                                                                                      ^ Error: 23 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```