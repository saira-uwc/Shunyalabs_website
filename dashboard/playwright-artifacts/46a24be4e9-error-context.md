# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/specialised-models/design.spec.js >> Models - Specialised Models design compliance >> Figma design compliance
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
      - generic [ref=e11]:
        - heading "Domain specialised models for accurate transcription" [level=1] [ref=e12]
        - paragraph [ref=e13]: ASR trained on your domain’s language, accents, and jargon—so transcripts are not just accurate, but actually usable.
      - generic [ref=e15]:
        - heading "Zero STT Med" [level=3] [ref=e16]
        - generic [ref=e17]:
          - paragraph [ref=e18]: Medical transcription model trained on clinical audio, built to capture medical terminology and abbreviations.
          - link "Try now" [ref=e19] [cursor=pointer]:
            - /url: /zero-med
            - generic [ref=e20]: Try now
            - img [ref=e21]
    - generic [ref=e25]:
      - heading "Built for your domain, not just your language" [level=2] [ref=e26]
      - generic [ref=e27]:
        - generic [ref=e28]:
          - heading "Domain-tuned understanding" [level=3] [ref=e29]
          - paragraph [ref=e30]: Trained on field-specific language—medical terms, support scripts, policy/legal phrasing—so it actually understands how your domain speaks
        - generic [ref=e32]:
          - heading "Keyword-level accuracy" [level=3] [ref=e33]
          - paragraph [ref=e34]: Fewer critical errors on key entities (symptoms, dosages, order IDs, intents) compared to generic ASR models
        - generic [ref=e36]:
          - heading "Formatted outputs" [level=3] [ref=e37]
          - paragraph [ref=e38]: Transcripts optimized for downstream tasks—notes, summaries, QA flags, CRM fields—so less post-processing and faster automation.
    - generic [ref=e39]:
      - generic [ref=e40]:
        - heading "Medical ASR that understands clinical reality" [level=2] [ref=e41]
        - paragraph [ref=e42]: Zero STT Med reaches 11.1% WER and 5.1% CER on noisy, multi-speaker medical audio, outperforming Whisper, ElevenLabs Scribe, and AWS Transcribe.
      - link "Learn now" [ref=e43] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/med-transcription
        - button "Learn now" [ref=e44]
    - contentinfo [ref=e45]:
      - generic [ref=e46]:
        - paragraph [ref=e47]: The fastest way to add voice AI to your products
        - paragraph [ref=e48]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e49]:
          - link "Go to Pricing page" [ref=e50] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e51] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e52]:
      - generic [ref=e53]:
        - generic [ref=e54]:
          - img "Shunya Labs" [ref=e55]
          - paragraph [ref=e56]: Shunya Labs, Inc.
        - generic [ref=e57]:
          - paragraph [ref=e58]: Product
          - list [ref=e59]:
            - listitem [ref=e60]:
              - link "Overview" [ref=e61] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e62]:
              - link "Models" [ref=e63] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e64]:
              - link "Voice Agents" [ref=e65] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e66]:
              - link "Speech Intelligence" [ref=e67] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e68]:
              - link "Audio Processing" [ref=e69] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e70]:
              - link "Deployment" [ref=e71] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e72]:
          - paragraph [ref=e73]: Models
          - list [ref=e74]:
            - listitem [ref=e75]:
              - link "Language Models" [ref=e76] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e77]:
              - link "Zero STT Indic" [ref=e78] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e79]:
              - link "Zero STT Codeswitch" [ref=e80] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e81]:
              - link "Specialised Models" [ref=e82] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e83]:
              - link "Zero STT Med" [ref=e84] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e85]:
              - link "On Device Models" [ref=e86] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e87]:
          - paragraph [ref=e88]: Solutions
          - list [ref=e89]:
            - listitem [ref=e90]:
              - link "Contact Centers" [ref=e91] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e92]:
              - link "Media & Entertainment" [ref=e93] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e94]:
              - link "Healthcare" [ref=e95] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e96]:
          - paragraph [ref=e97]: Resources
          - list [ref=e98]:
            - listitem [ref=e99]:
              - link "Blogs" [ref=e100] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e101]:
              - link "Benchmarks" [ref=e102] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e103]:
              - link "News & Media" [ref=e104] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e105]:
              - link "Patents" [ref=e106] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e107]:
              - link "Research" [ref=e108] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e110]:
          - link "Documentation" [ref=e111] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e113]:
          - listitem [ref=e114]:
            - link "About us" [ref=e115] [cursor=pointer]:
              - /url: /about
        - list [ref=e117]:
          - listitem [ref=e118]:
            - link "Pricing" [ref=e119] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e120]:
        - paragraph [ref=e121]: Follow us on
        - generic [ref=e122]:
          - link [ref=e123] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e124]
          - link [ref=e126] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e127]
          - link [ref=e129] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e130]
          - link [ref=e132] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e133]
      - generic [ref=e135]:
        - paragraph [ref=e136]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e137]:
          - link "Privacy" [ref=e138] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e139] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e140] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e141] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e142] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e143]
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