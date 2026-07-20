# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/specialised-models/design.spec.js >> Models - Specialised Models design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [layout] Section "Medical ASR that understands clinical reality" background: expected rgb(20, 20, 20) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

```
Error: [global] Footer background: expected rgb(255, 255, 255) but got rgb(0, 0, 0)

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
Error: [content] Text content "ASR trained on your domain’s language, accents, and jargon—so transcripts are not just accurate, but actually usable." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Trained on field-specific language—medical terms, support scripts, policy/legal phrasing—so it actually understands how your domain speaks" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Transcripts optimized for downstream tasks—notes, summaries, QA flags, CRM fields—so less post-processing and faster automation." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 20 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 20
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - banner:
      - generic [ref=e4]:
        - link "Shunya Labs Logo" [ref=e5] [cursor=pointer]:
          - /url: /
          - img "Shunya Labs Logo" [ref=e6]
        - button "Open menu" [ref=e7] [cursor=pointer]: ☰
    - generic [ref=e8]:
      - generic [ref=e9]:
        - heading "Domain specialised models for accurate transcription" [level=1] [ref=e10]
        - paragraph [ref=e11]: ASR trained on your domain’s language, accents, and jargon-so transcripts are not just accurate, but actually usable.
      - generic [ref=e13]:
        - heading "Zero STT Med" [level=3] [ref=e14]
        - generic [ref=e15]:
          - paragraph [ref=e16]: Medical transcription model trained on clinical audio, built to capture medical terminology and abbreviations.
          - link "Try now" [ref=e17] [cursor=pointer]:
            - /url: /zero-med
            - generic [ref=e18]: Try now
            - img [ref=e19]
    - generic [ref=e23]:
      - heading "Built for your domain, not just your language" [level=2] [ref=e24]
      - generic [ref=e25]:
        - generic [ref=e26]:
          - heading "Domain-tuned understanding" [level=3] [ref=e27]
          - paragraph [ref=e28]: Trained on field-specific language-medical terms, support scripts, policy/legal phrasing-so it actually understands how your domain speaks
        - generic [ref=e29]:
          - heading "Keyword-level accuracy" [level=3] [ref=e30]
          - paragraph [ref=e31]: Fewer critical errors on key entities (symptoms, dosages, order IDs, intents) compared to generic ASR models
        - generic [ref=e32]:
          - heading "Formatted outputs" [level=3] [ref=e33]
          - paragraph [ref=e34]: Transcripts optimized for downstream tasks-notes, summaries, QA flags, CRM fields-so less post-processing and faster automation.
    - generic [ref=e35]:
      - generic [ref=e36]:
        - heading "Medical ASR that understands clinical reality" [level=2] [ref=e37]
        - paragraph [ref=e38]: Zero STT Med reaches 11.1% WER and 5.1% CER on noisy, multi-speaker medical audio, outperforming Whisper, ElevenLabs Scribe, and AWS Transcribe.
      - link "Learn now" [ref=e39] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/asr/models
        - button "Learn now" [ref=e40]
    - contentinfo [ref=e41]:
      - generic [ref=e42]:
        - paragraph [ref=e43]: The fastest way to add voice AI to your products
        - paragraph [ref=e44]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e45]:
          - link "Go to Pricing page" [ref=e46] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e47] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e48]:
      - generic [ref=e49]:
        - generic [ref=e50]:
          - img "Shunya Labs" [ref=e51]
          - paragraph [ref=e52]: Shunya Labs, Inc.
        - generic [ref=e53]:
          - paragraph [ref=e54]: Product
          - list [ref=e55]:
            - listitem [ref=e56]:
              - link "Overview" [ref=e57] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e58]:
              - link "Models" [ref=e59] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e60]:
              - link "Voice Agents" [ref=e61] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e62]:
              - link "Speech Intelligence" [ref=e63] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e64]:
              - link "Audio Processing" [ref=e65] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e66]:
              - link "Deployment" [ref=e67] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e68]:
          - paragraph [ref=e69]: Models
          - list [ref=e70]:
            - listitem [ref=e71]:
              - link "Language Models" [ref=e72] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e73]:
              - link "Zero STT Indic" [ref=e74] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e75]:
              - link "Zero STT Codeswitch" [ref=e76] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e77]:
              - link "Specialised Models" [ref=e78] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e79]:
              - link "Zero STT Med" [ref=e80] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e81]:
              - link "On Device Models" [ref=e82] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e83]:
          - paragraph [ref=e84]: Solutions
          - list [ref=e85]:
            - listitem [ref=e86]:
              - link "Contact Centers" [ref=e87] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e88]:
              - link "Media & Entertainment" [ref=e89] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e90]:
              - link "Healthcare" [ref=e91] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e92]:
          - paragraph [ref=e93]: Resources
          - list [ref=e94]:
            - listitem [ref=e95]:
              - link "Blogs" [ref=e96] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e97]:
              - link "Benchmarks" [ref=e98] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e99]:
              - link "News & Media" [ref=e100] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e101]:
              - link "Patents" [ref=e102] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e103]:
              - link "Research" [ref=e104] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e106]:
          - link "Documentation" [ref=e107] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e109]:
          - listitem [ref=e110]:
            - link "About us" [ref=e111] [cursor=pointer]:
              - /url: /about
        - list [ref=e113]:
          - listitem [ref=e114]:
            - link "Pricing" [ref=e115] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e116]:
        - paragraph [ref=e117]: Follow us on
        - generic [ref=e118]:
          - link [ref=e119] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e120]
          - link [ref=e122] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e123]
          - link [ref=e125] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e126]
          - link [ref=e128] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e129]
      - generic [ref=e131]:
        - paragraph [ref=e132]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e133]:
          - link "Privacy" [ref=e134] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e135] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e136] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e137] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e138] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e139]
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
     |                                                                                      ^ Error: 20 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```