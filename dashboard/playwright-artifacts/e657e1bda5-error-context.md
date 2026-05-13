# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/specialised-models/design.spec.js >> Models - Specialised Models design compliance >> Figma design compliance
- Location: tests/modules/models/specialised-models/design.spec.js:13:3

# Error details

```
Error: [content] Page title: expected "Domain-Specialized Speech-to-Text Models | Shunya Labs" but got "Domain-Specialised Voice AI Models | Shunya Labs"

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
    - generic [ref=e9]:
      - generic [ref=e10]:
        - heading "Domain specialised models for accurate transcription" [level=1] [ref=e11]
        - paragraph [ref=e12]: ASR trained on your domain’s language, accents, and jargon—so transcripts are not just accurate, but actually usable.
      - generic [ref=e14]:
        - heading "Zero STT Med" [level=3] [ref=e15]
        - generic [ref=e16]:
          - paragraph [ref=e17]: Medical transcription model trained on clinical audio, built to capture medical terminology and abbreviations.
          - link "Try now" [ref=e18] [cursor=pointer]:
            - /url: /zero-med
            - generic [ref=e19]: Try now
            - img [ref=e20]
    - generic [ref=e24]:
      - heading "Built for your domain, not just your language" [level=2] [ref=e25]
      - generic [ref=e26]:
        - generic [ref=e27]:
          - heading "Domain-tuned understanding" [level=3] [ref=e28]
          - paragraph [ref=e29]: Trained on field-specific language—medical terms, support scripts, policy/legal phrasing—so it actually understands how your domain speaks
        - generic [ref=e31]:
          - heading "Keyword-level accuracy" [level=3] [ref=e32]
          - paragraph [ref=e33]: Fewer critical errors on key entities (symptoms, dosages, order IDs, intents) compared to generic ASR models
        - generic [ref=e35]:
          - heading "Formatted outputs" [level=3] [ref=e36]
          - paragraph [ref=e37]: Transcripts optimized for downstream tasks—notes, summaries, QA flags, CRM fields—so less post-processing and faster automation.
    - generic [ref=e38]:
      - generic [ref=e39]:
        - heading "Medical ASR that understands clinical reality" [level=2] [ref=e40]
        - paragraph [ref=e41]: Zero STT Med reaches 11.1% WER and 5.1% CER on noisy, multi-speaker medical audio, outperforming Whisper, ElevenLabs Scribe, and AWS Transcribe.
      - link "Learn now" [ref=e42] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/med-transcription
        - button "Learn now" [ref=e43]
    - contentinfo [ref=e44]:
      - generic [ref=e48]:
        - paragraph [ref=e49]: The fastest way to add voice AI to your products
        - paragraph [ref=e50]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e51]:
          - link "Go to Pricing page" [ref=e52] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e53] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e54]:
      - generic [ref=e55]:
        - generic [ref=e56]:
          - img "Shunya Labs" [ref=e57]
          - paragraph [ref=e58]: Shunya Labs, Inc.
        - generic [ref=e59]:
          - paragraph [ref=e60]: Product
          - list [ref=e61]:
            - listitem [ref=e62]:
              - link "Overview" [ref=e63] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e64]:
              - link "Models" [ref=e65] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e66]:
              - link "Voice Agents" [ref=e67] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e68]:
              - link "Speech Intelligence" [ref=e69] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e70]:
              - link "Audio Processing" [ref=e71] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e72]:
              - link "Deployment" [ref=e73] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e74]:
          - paragraph [ref=e75]: Models
          - list [ref=e76]:
            - listitem [ref=e77]:
              - link "Language Models" [ref=e78] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e79]:
              - link "Zero STT Indic" [ref=e80] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e81]:
              - link "Zero STT Codeswitch" [ref=e82] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e83]:
              - link "Specialised Models" [ref=e84] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e85]:
              - link "Zero STT Med" [ref=e86] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e87]:
              - link "On Device Models" [ref=e88] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e89]:
          - paragraph [ref=e90]: Solutions
          - list [ref=e91]:
            - listitem [ref=e92]:
              - link "Contact Centers" [ref=e93] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e94]:
              - link "Media & Entertainment" [ref=e95] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e96]:
              - link "Healthcare" [ref=e97] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e98]:
          - paragraph [ref=e99]: Resources
          - list [ref=e100]:
            - listitem [ref=e101]:
              - link "Blogs" [ref=e102] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e103]:
              - link "Benchmarks" [ref=e104] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e105]:
              - link "News & Media" [ref=e106] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e107]:
              - link "Patents" [ref=e108] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e109]:
              - link "Research" [ref=e110] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e112]:
          - link "Documentation" [ref=e113] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e115]:
          - listitem [ref=e116]:
            - link "About us" [ref=e117] [cursor=pointer]:
              - /url: /about
        - list [ref=e119]:
          - listitem [ref=e120]:
            - link "Pricing" [ref=e121] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e122]:
        - paragraph [ref=e123]: Follow us on
        - generic [ref=e124]:
          - link [ref=e125] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e126]
          - link [ref=e128] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e129]
          - link [ref=e131] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e132]
          - link [ref=e134] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e135]
      - generic [ref=e137]:
        - paragraph [ref=e138]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e139]:
          - link "Privacy" [ref=e140] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e141] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e142] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e143] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e144] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e145]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { pageRegistry } from '../../../../test-data/page-registry.js';
  3  | import { runDesignComplianceTest } from '../../../../utils/design-validator.js';
  4  | 
  5  | const pageEntry = pageRegistry.find(
  6  |   (page) => page.moduleKey === 'models' && page.slug === 'specialised-models'
  7  | );
  8  | 
  9  | const moduleLabel = pageEntry?.moduleLabel || 'models';
  10 | const pageLabel = pageEntry?.pageLabel || 'specialised-models';
  11 | 
  12 | test.describe(`${moduleLabel} - ${pageLabel} design compliance`, () => {
  13 |   test('Figma design compliance', async ({ page }) => {
  14 |     const failures = await runDesignComplianceTest({ page, pageEntry });
  15 | 
  16 |     for (const f of failures) {
  17 |       expect.soft(null, `[${f.section}] ${f.message}`).toBeTruthy();
  18 |     }
  19 | 
> 20 |     expect(failures.length, `${failures.length} design compliance issue(s) found`).toBe(0);
     |                                                                                    ^ Error: 1 design compliance issue(s) found
  21 |   });
  22 | });
  23 | 
```