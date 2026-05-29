# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-indic/design.spec.js >> Models - Zero STT Indic design compliance >> Figma design compliance
- Location: tests/modules/models/zero-stt-indic/design.spec.js:13:3

# Error details

```
Error: [images] Broken image: src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsl-logo.772b3166.png&w=384&q=75&dpl=dpl_FnB31vxdrRHHzRvzs1uXZTV1MZxB" alt="Shunya Labs"

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
      - generic [ref=e11]:
        - generic [ref=e12]:
          - heading "Indic language transcription backed by data" [level=1] [ref=e13]
          - paragraph [ref=e14]: Get world-class speed and accuracy for major Indian languages, so your users experience natural, reliable transcription in the languages they actually speak.
        - generic [ref=e15]:
          - generic [ref=e17]:
            - heading "Hindi" [level=3] [ref=e19]
            - generic [ref=e20]:
              - paragraph [ref=e21]: Hindi ASR built for 350M+ native speakers
              - paragraph [ref=e22]: Trained on 430.6 hours of real-world audio from OpenSLR, Gramvaani, Shrutilipi, Kathbath, Vaani, and proprietary data in just 35.9 hours on dual A100 GPUs.
          - generic [ref=e25]:
            - heading "Telugu" [level=3] [ref=e27]
            - generic [ref=e28]:
              - paragraph [ref=e29]: Telugu ASR built for 80M+ native speakers
              - paragraph [ref=e30]: Trained on 110.6 hours of real-world audio from Kathbath and Google Fleurs in just 13.43 hours on dual A100 GPUs.
          - generic [ref=e33]:
            - heading "Kannada" [level=3] [ref=e35]
            - generic [ref=e36]:
              - paragraph [ref=e37]: Kannada ASR built for 40M+ native speakers
              - paragraph [ref=e38]: Trained on 90.6 hours of real-world audio from OpenSLR, Kathbath, and Vaani in just 9.9 hours on dual A100 GPUs.
          - generic [ref=e41]:
            - heading "Bengali" [level=3] [ref=e43]
            - generic [ref=e44]:
              - paragraph [ref=e45]: Bengali ASR built for 230M+ native speakers
              - paragraph [ref=e46]: Trained on 110.6 hours of real-world audio from OpenSLR, Kathbath, Vaani, and Shrutilipi in just 12.9 hours on dual A100 GPUs.
        - link "Try now" [ref=e48] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/models/language
    - contentinfo [ref=e49]:
      - generic [ref=e50]:
        - paragraph [ref=e51]: The fastest way to add voice AI to your products
        - paragraph [ref=e52]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e53]:
          - link "Try for Free" [ref=e54] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e55] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e56]:
      - generic [ref=e57]:
        - generic [ref=e58]:
          - img "Shunya Labs" [ref=e59]
          - paragraph [ref=e60]: Shunya Labs, Inc.
        - generic [ref=e61]:
          - paragraph [ref=e62]: Product
          - list [ref=e63]:
            - listitem [ref=e64]:
              - link "Overview" [ref=e65] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e66]:
              - link "Models" [ref=e67] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e68]:
              - link "Voice Agents" [ref=e69] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e70]:
              - link "Speech Intelligence" [ref=e71] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e72]:
              - link "Audio Processing" [ref=e73] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e74]:
              - link "Deployment" [ref=e75] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e76]:
          - paragraph [ref=e77]: Models
          - list [ref=e78]:
            - listitem [ref=e79]:
              - link "Language Models" [ref=e80] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e81]:
              - link "Zero STT Indic" [ref=e82] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e83]:
              - link "Zero STT Codeswitch" [ref=e84] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e85]:
              - link "Specialised Models" [ref=e86] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e87]:
              - link "Zero STT Med" [ref=e88] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e89]:
              - link "On Device Models" [ref=e90] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e91]:
          - paragraph [ref=e92]: Solutions
          - list [ref=e93]:
            - listitem [ref=e94]:
              - link "Contact Centers" [ref=e95] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e96]:
              - link "Media & Entertainment" [ref=e97] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e98]:
              - link "Healthcare" [ref=e99] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e100]:
          - paragraph [ref=e101]: Resources
          - list [ref=e102]:
            - listitem [ref=e103]:
              - link "Blogs" [ref=e104] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e105]:
              - link "Benchmarks" [ref=e106] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e107]:
              - link "News & Media" [ref=e108] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e109]:
              - link "Patents" [ref=e110] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e111]:
              - link "Research" [ref=e112] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e114]:
          - link "Documentation" [ref=e115] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e117]:
          - listitem [ref=e118]:
            - link "About us" [ref=e119] [cursor=pointer]:
              - /url: /about
        - list [ref=e121]:
          - listitem [ref=e122]:
            - link "Pricing" [ref=e123] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e124]:
        - paragraph [ref=e125]: Follow us on
        - generic [ref=e126]:
          - link [ref=e127] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e128]
          - link [ref=e130] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e131]
          - link [ref=e133] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e134]
          - link [ref=e136] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e137]
      - generic [ref=e139]:
        - paragraph [ref=e140]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e141]:
          - link "Privacy" [ref=e142] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e143] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e144] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e145] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e146] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e147]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { pageRegistry } from '../../../../test-data/page-registry.js';
  3  | import { runDesignComplianceTest } from '../../../../utils/design-validator.js';
  4  | 
  5  | const pageEntry = pageRegistry.find(
  6  |   (page) => page.moduleKey === 'models' && page.slug === 'zero-stt-indic'
  7  | );
  8  | 
  9  | const moduleLabel = pageEntry?.moduleLabel || 'models';
  10 | const pageLabel = pageEntry?.pageLabel || 'zero-stt-indic';
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