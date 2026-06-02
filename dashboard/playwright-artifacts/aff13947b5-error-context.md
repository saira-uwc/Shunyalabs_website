# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/specialised-models/design.spec.js >> Models - Specialised Models design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [global] Footer background: expected rgb(0, 0, 0) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "One platform for speech in and speech out—secure by design, built to scale." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "One platform for speech in and speech out—secure by design, built to scale." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "© 2026 Shunya Labs Inc. All rights reserved." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 4 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 4
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
    - generic [ref=e38]:
      - generic [ref=e39]:
        - heading "Domain specialised models for accurate transcription" [level=1] [ref=e40]
        - paragraph [ref=e41]: ASR trained on your domain’s language, accents, and jargon—so transcripts are not just accurate, but actually usable.
      - generic [ref=e43]:
        - heading "Zero STT Med" [level=3] [ref=e44]
        - generic [ref=e45]:
          - paragraph [ref=e46]: Medical transcription model trained on clinical audio, built to capture medical terminology and abbreviations.
          - link "Try now" [ref=e47] [cursor=pointer]:
            - /url: /zero-med
            - generic [ref=e48]: Try now
            - img [ref=e49]
    - generic [ref=e53]:
      - heading "Built for your domain, not just your language" [level=2] [ref=e54]
      - generic [ref=e55]:
        - generic [ref=e56]:
          - paragraph [ref=e58]: Trained on field-specific language—medical terms, support scripts, policy/legal phrasing—so it actually understands how your domain speaks
          - heading "Domain-tuned understanding" [level=3] [ref=e60]
        - generic [ref=e62]:
          - heading "Keyword-level accuracy" [level=3] [ref=e64]
          - paragraph [ref=e66]: Fewer critical errors on key entities (symptoms, dosages, order IDs, intents) compared to generic ASR models
        - generic [ref=e68]:
          - paragraph [ref=e70]: Transcripts optimized for downstream tasks—notes, summaries, QA flags, CRM fields—so less post-processing and faster automation.
          - heading "Formatted outputs" [level=3] [ref=e72]
    - generic [ref=e73]:
      - generic [ref=e74]:
        - heading "Medical ASR that understands clinical reality" [level=2] [ref=e75]
        - paragraph [ref=e76]: Zero STT Med reaches 11.1% WER and 5.1% CER on noisy, multi-speaker medical audio, outperforming Whisper, ElevenLabs Scribe, and AWS Transcribe.
      - link "Learn now" [ref=e77] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/med-transcription
        - button "Learn now" [ref=e78]
    - contentinfo [ref=e79]:
      - generic [ref=e80]:
        - paragraph [ref=e81]: The fastest way to add voice AI to your products
        - paragraph [ref=e82]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e83]:
          - link "Go to Pricing page" [ref=e84] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
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
            - /url: https://docs.shunyalabs.ai/overview
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
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e161]
          - link [ref=e163] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e164]
          - link [ref=e166] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e167]
      - generic [ref=e169]:
        - paragraph [ref=e170]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e171]:
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
     |                                                                                      ^ Error: 4 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```