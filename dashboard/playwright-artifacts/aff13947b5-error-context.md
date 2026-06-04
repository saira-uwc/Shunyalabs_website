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
    - generic [ref=e36]:
      - generic [ref=e37]:
        - heading "Domain specialised models for accurate transcription" [level=1] [ref=e38]
        - paragraph [ref=e39]: ASR trained on your domain’s language, accents, and jargon—so transcripts are not just accurate, but actually usable.
      - generic [ref=e41]:
        - heading "Zero STT Med" [level=3] [ref=e42]
        - generic [ref=e43]:
          - paragraph [ref=e44]: Medical transcription model trained on clinical audio, built to capture medical terminology and abbreviations.
          - link "Try now" [ref=e45] [cursor=pointer]:
            - /url: /zero-med
            - generic [ref=e46]: Try now
            - img [ref=e47]
    - generic [ref=e51]:
      - heading "Built for your domain, not just your language" [level=2] [ref=e52]
      - generic [ref=e53]:
        - generic [ref=e54]:
          - paragraph [ref=e56]: Trained on field-specific language—medical terms, support scripts, policy/legal phrasing—so it actually understands how your domain speaks
          - heading "Domain-tuned understanding" [level=3] [ref=e58]
        - generic [ref=e60]:
          - heading "Keyword-level accuracy" [level=3] [ref=e62]
          - paragraph [ref=e64]: Fewer critical errors on key entities (symptoms, dosages, order IDs, intents) compared to generic ASR models
        - generic [ref=e66]:
          - paragraph [ref=e68]: Transcripts optimized for downstream tasks—notes, summaries, QA flags, CRM fields—so less post-processing and faster automation.
          - heading "Formatted outputs" [level=3] [ref=e70]
    - generic [ref=e71]:
      - generic [ref=e72]:
        - heading "Medical ASR that understands clinical reality" [level=2] [ref=e73]
        - paragraph [ref=e74]: Zero STT Med reaches 11.1% WER and 5.1% CER on noisy, multi-speaker medical audio, outperforming Whisper, ElevenLabs Scribe, and AWS Transcribe.
      - link "Learn now" [ref=e75] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/med-transcription
        - button "Learn now" [ref=e76]
    - contentinfo [ref=e77]:
      - generic [ref=e78]:
        - paragraph [ref=e79]: The fastest way to add voice AI to your products
        - paragraph [ref=e80]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e81]:
          - link "Go to Pricing page" [ref=e82] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e83] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e84]:
      - generic [ref=e85]:
        - generic [ref=e86]:
          - img "Shunya Labs" [ref=e87]
          - paragraph [ref=e88]: Shunya Labs, Inc.
        - generic [ref=e89]:
          - paragraph [ref=e90]: Product
          - list [ref=e91]:
            - listitem [ref=e92]:
              - link "Overview" [ref=e93] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e94]:
              - link "Models" [ref=e95] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e96]:
              - link "Voice Agents" [ref=e97] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e98]:
              - link "Speech Intelligence" [ref=e99] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e100]:
              - link "Audio Processing" [ref=e101] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e102]:
              - link "Deployment" [ref=e103] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e104]:
          - paragraph [ref=e105]: Models
          - list [ref=e106]:
            - listitem [ref=e107]:
              - link "Language Models" [ref=e108] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e109]:
              - link "Zero STT Indic" [ref=e110] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e111]:
              - link "Zero STT Codeswitch" [ref=e112] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e113]:
              - link "Specialised Models" [ref=e114] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e115]:
              - link "Zero STT Med" [ref=e116] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e117]:
              - link "On Device Models" [ref=e118] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e119]:
          - paragraph [ref=e120]: Solutions
          - list [ref=e121]:
            - listitem [ref=e122]:
              - link "Contact Centers" [ref=e123] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e124]:
              - link "Media & Entertainment" [ref=e125] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e126]:
              - link "Healthcare" [ref=e127] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e128]:
          - paragraph [ref=e129]: Resources
          - list [ref=e130]:
            - listitem [ref=e131]:
              - link "Blogs" [ref=e132] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e133]:
              - link "Benchmarks" [ref=e134] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e135]:
              - link "News & Media" [ref=e136] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e137]:
              - link "Patents" [ref=e138] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e139]:
              - link "Research" [ref=e140] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e142]:
          - link "Documentation" [ref=e143] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e145]:
          - listitem [ref=e146]:
            - link "About us" [ref=e147] [cursor=pointer]:
              - /url: /about
        - list [ref=e149]:
          - listitem [ref=e150]:
            - link "Pricing" [ref=e151] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e152]:
        - paragraph [ref=e153]: Follow us on
        - generic [ref=e154]:
          - link [ref=e155] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e156]
          - link [ref=e158] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e159]
          - link [ref=e161] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e162]
          - link [ref=e164] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e165]
      - generic [ref=e167]:
        - paragraph [ref=e168]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e169]:
          - link "Privacy" [ref=e170] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e171] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e172] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e173] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e174] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e175]
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