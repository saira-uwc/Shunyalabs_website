# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/audio-processing/design.spec.js >> Product - Audio Processing design compliance >> Figma design compliance
- Location: tests/modules/product/audio-processing/design.spec.js:13:3

# Error details

```
Error: [content] Page title: expected "Audio Processing for Voice AI & Speech Recognition | Shunya Labs" but got "Audio Processing for Voice AI & Speech | Shunya Labs"

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
        - generic [ref=e8]:
          - button "Product" [ref=e10] [cursor=pointer]:
            - text: Product
            - img [ref=e11]
          - button "Models" [ref=e14] [cursor=pointer]:
            - text: Models
            - img [ref=e15]
          - button "Solutions" [ref=e18] [cursor=pointer]:
            - text: Solutions
            - img [ref=e19]
          - button "Resources" [ref=e22] [cursor=pointer]:
            - text: Resources
            - img [ref=e23]
          - link "Documentation" [ref=e25] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
          - link "About Us" [ref=e26] [cursor=pointer]:
            - /url: /about
          - link "Pricing" [ref=e27] [cursor=pointer]:
            - /url: /pricing
        - link "Playground" [ref=e28] [cursor=pointer]:
          - /url: https://playground.shunyalabs.ai/
          - img [ref=e29]
          - text: Playground
        - generic [ref=e31]:
          - button "Sign In" [ref=e32] [cursor=pointer]
          - link "Contact Sales" [ref=e33] [cursor=pointer]:
            - /url: /contact
    - generic [ref=e35]:
      - heading "Studio-Quality Audio Processing" [level=1] [ref=e36]
      - heading "Proprietary tools that transform raw audio into crystal-clear voice for superior transcription and AI performance." [level=2] [ref=e37]
    - generic [ref=e38]:
      - generic [ref=e40]:
        - heading "Denoiser" [level=2] [ref=e41]
        - paragraph [ref=e42]: Eliminate background noise while preserving natural speech.
        - generic [ref=e43]:
          - generic [ref=e44]:
            - heading "Capabilities" [level=4] [ref=e45]
            - list [ref=e46]:
              - listitem [ref=e47]:
                - img [ref=e48]
                - generic [ref=e50]: Real-time adaptive noise reduction
              - listitem [ref=e51]:
                - img [ref=e52]
                - generic [ref=e54]: Multi-source interference suppression
              - listitem [ref=e55]:
                - img [ref=e56]
                - generic [ref=e58]: Speech characteristic preservation
          - generic [ref=e59]:
            - heading "Use Cases" [level=4] [ref=e60]
            - list [ref=e61]:
              - listitem [ref=e62]:
                - img [ref=e63]
                - generic [ref=e65]: Call centers
              - listitem [ref=e66]:
                - img [ref=e67]
                - generic [ref=e69]: Remote recordings
              - listitem [ref=e70]:
                - img [ref=e71]
                - generic [ref=e73]: mobile apps
              - listitem [ref=e74]:
                - img [ref=e75]
                - generic [ref=e77]: noisy environments
              - listitem [ref=e78]:
                - img [ref=e79]
                - generic [ref=e81]: conference calls
      - generic [ref=e83]:
        - heading "Enhancement" [level=2] [ref=e84]
        - paragraph [ref=e85]: Optimize clarity and intelligibility for maximum accuracy.
        - generic [ref=e86]:
          - generic [ref=e87]:
            - heading "Capabilities" [level=4] [ref=e88]
            - list [ref=e89]:
              - listitem [ref=e90]:
                - img [ref=e91]
                - generic [ref=e93]: Automatic volume normalization
              - listitem [ref=e94]:
                - img [ref=e95]
                - generic [ref=e97]: Frequency optimization for speech
              - listitem [ref=e98]:
                - img [ref=e99]
                - generic [ref=e101]: Artifact and distortion removal
          - generic [ref=e102]:
            - heading "Use Cases" [level=4] [ref=e103]
            - list [ref=e104]:
              - listitem [ref=e105]:
                - img [ref=e106]
                - generic [ref=e108]: Phone recordings
              - listitem [ref=e109]:
                - img [ref=e110]
                - generic [ref=e112]: low-quality audio
              - listitem [ref=e113]:
                - img [ref=e114]
                - generic [ref=e116]: variable conditions
              - listitem [ref=e117]:
                - img [ref=e118]
                - generic [ref=e120]: legacy recordings
    - link "Contact Us" [ref=e122] [cursor=pointer]:
      - /url: /contact
    - contentinfo [ref=e123]:
      - generic [ref=e127]:
        - paragraph [ref=e128]: The fastest way to add voice AI to your products
        - paragraph [ref=e129]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e130]:
          - link "Go to Pricing page" [ref=e131] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e132] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e133]:
      - generic [ref=e134]:
        - generic [ref=e135]:
          - img "Shunya Labs" [ref=e136]
          - paragraph [ref=e137]: Shunya Labs, Inc.
        - generic [ref=e138]:
          - paragraph [ref=e139]: Product
          - list [ref=e140]:
            - listitem [ref=e141]:
              - link "Overview" [ref=e142] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e143]:
              - link "Models" [ref=e144] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e145]:
              - link "Voice Agents" [ref=e146] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e147]:
              - link "Speech Intelligence" [ref=e148] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e149]:
              - link "Audio Processing" [ref=e150] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e151]:
              - link "Deployment" [ref=e152] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e153]:
          - paragraph [ref=e154]: Models
          - list [ref=e155]:
            - listitem [ref=e156]:
              - link "Language Models" [ref=e157] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e158]:
              - link "Zero STT Indic" [ref=e159] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e160]:
              - link "Zero STT Codeswitch" [ref=e161] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e162]:
              - link "Specialised Models" [ref=e163] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e164]:
              - link "Zero STT Med" [ref=e165] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e166]:
              - link "On Device Models" [ref=e167] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e168]:
          - paragraph [ref=e169]: Solutions
          - list [ref=e170]:
            - listitem [ref=e171]:
              - link "Contact Centers" [ref=e172] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e173]:
              - link "Media & Entertainment" [ref=e174] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e175]:
              - link "Healthcare" [ref=e176] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e177]:
          - paragraph [ref=e178]: Resources
          - list [ref=e179]:
            - listitem [ref=e180]:
              - link "Blogs" [ref=e181] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e182]:
              - link "Benchmarks" [ref=e183] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e184]:
              - link "News & Media" [ref=e185] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e186]:
              - link "Patents" [ref=e187] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e188]:
              - link "Research" [ref=e189] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e191]:
          - link "Documentation" [ref=e192] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e194]:
          - listitem [ref=e195]:
            - link "About us" [ref=e196] [cursor=pointer]:
              - /url: /about
        - list [ref=e198]:
          - listitem [ref=e199]:
            - link "Pricing" [ref=e200] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e201]:
        - paragraph [ref=e202]: Follow us on
        - generic [ref=e203]:
          - link [ref=e204] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e205]
          - link [ref=e207] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e208]
          - link [ref=e210] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e211]
          - link [ref=e213] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e214]
      - generic [ref=e216]:
        - paragraph [ref=e217]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e218]:
          - link "Privacy" [ref=e219] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e220] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e221] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e222] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e223] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e224]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { pageRegistry } from '../../../../test-data/page-registry.js';
  3  | import { runDesignComplianceTest } from '../../../../utils/design-validator.js';
  4  | 
  5  | const pageEntry = pageRegistry.find(
  6  |   (page) => page.moduleKey === 'product' && page.slug === 'audio-processing'
  7  | );
  8  | 
  9  | const moduleLabel = pageEntry?.moduleLabel || 'product';
  10 | const pageLabel = pageEntry?.pageLabel || 'audio-processing';
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