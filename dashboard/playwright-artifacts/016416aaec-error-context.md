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
      - heading "Studio-Quality Audio Processing" [level=1] [ref=e11]
      - heading "Proprietary tools that transform raw audio into crystal-clear voice for superior transcription and AI performance." [level=2] [ref=e12]
    - generic [ref=e13]:
      - generic [ref=e15]:
        - heading "Denoiser" [level=2] [ref=e16]
        - paragraph [ref=e17]: Eliminate background noise while preserving natural speech.
        - generic [ref=e18]:
          - generic [ref=e19]:
            - heading "Capabilities" [level=4] [ref=e20]
            - list [ref=e21]:
              - listitem [ref=e22]:
                - img [ref=e23]
                - generic [ref=e25]: Real-time adaptive noise reduction
              - listitem [ref=e26]:
                - img [ref=e27]
                - generic [ref=e29]: Multi-source interference suppression
              - listitem [ref=e30]:
                - img [ref=e31]
                - generic [ref=e33]: Speech characteristic preservation
          - generic [ref=e34]:
            - heading "Use Cases" [level=4] [ref=e35]
            - list [ref=e36]:
              - listitem [ref=e37]:
                - img [ref=e38]
                - generic [ref=e40]: Call centers
              - listitem [ref=e41]:
                - img [ref=e42]
                - generic [ref=e44]: Remote recordings
              - listitem [ref=e45]:
                - img [ref=e46]
                - generic [ref=e48]: mobile apps
              - listitem [ref=e49]:
                - img [ref=e50]
                - generic [ref=e52]: noisy environments
              - listitem [ref=e53]:
                - img [ref=e54]
                - generic [ref=e56]: conference calls
      - generic [ref=e58]:
        - heading "Enhancement" [level=2] [ref=e59]
        - paragraph [ref=e60]: Optimize clarity and intelligibility for maximum accuracy.
        - generic [ref=e61]:
          - generic [ref=e62]:
            - heading "Capabilities" [level=4] [ref=e63]
            - list [ref=e64]:
              - listitem [ref=e65]:
                - img [ref=e66]
                - generic [ref=e68]: Automatic volume normalization
              - listitem [ref=e69]:
                - img [ref=e70]
                - generic [ref=e72]: Frequency optimization for speech
              - listitem [ref=e73]:
                - img [ref=e74]
                - generic [ref=e76]: Artifact and distortion removal
          - generic [ref=e77]:
            - heading "Use Cases" [level=4] [ref=e78]
            - list [ref=e79]:
              - listitem [ref=e80]:
                - img [ref=e81]
                - generic [ref=e83]: Phone recordings
              - listitem [ref=e84]:
                - img [ref=e85]
                - generic [ref=e87]: low-quality audio
              - listitem [ref=e88]:
                - img [ref=e89]
                - generic [ref=e91]: variable conditions
              - listitem [ref=e92]:
                - img [ref=e93]
                - generic [ref=e95]: legacy recordings
    - link "Contact Us" [ref=e97] [cursor=pointer]:
      - /url: /contact
    - contentinfo [ref=e98]:
      - generic [ref=e102]:
        - paragraph [ref=e103]: The fastest way to add voice AI to your products
        - paragraph [ref=e104]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e105]:
          - link "Go to Pricing page" [ref=e106] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e107] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e108]:
      - generic [ref=e109]:
        - generic [ref=e110]:
          - img "Shunya Labs" [ref=e111]
          - paragraph [ref=e112]: Shunya Labs, Inc.
        - generic [ref=e113]:
          - paragraph [ref=e114]: Product
          - list [ref=e115]:
            - listitem [ref=e116]:
              - link "Overview" [ref=e117] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e118]:
              - link "Models" [ref=e119] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e120]:
              - link "Voice Agents" [ref=e121] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e122]:
              - link "Speech Intelligence" [ref=e123] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e124]:
              - link "Audio Processing" [ref=e125] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e126]:
              - link "Deployment" [ref=e127] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e128]:
          - paragraph [ref=e129]: Models
          - list [ref=e130]:
            - listitem [ref=e131]:
              - link "Language Models" [ref=e132] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e133]:
              - link "Zero STT Indic" [ref=e134] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e135]:
              - link "Zero STT Codeswitch" [ref=e136] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e137]:
              - link "Specialised Models" [ref=e138] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e139]:
              - link "Zero STT Med" [ref=e140] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e141]:
              - link "On Device Models" [ref=e142] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e143]:
          - paragraph [ref=e144]: Solutions
          - list [ref=e145]:
            - listitem [ref=e146]:
              - link "Contact Centers" [ref=e147] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e148]:
              - link "Media & Entertainment" [ref=e149] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e150]:
              - link "Healthcare" [ref=e151] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e152]:
          - paragraph [ref=e153]: Resources
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link "Blogs" [ref=e156] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e157]:
              - link "Benchmarks" [ref=e158] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e159]:
              - link "News & Media" [ref=e160] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e161]:
              - link "Patents" [ref=e162] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e163]:
              - link "Research" [ref=e164] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e166]:
          - link "Documentation" [ref=e167] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e169]:
          - listitem [ref=e170]:
            - link "About us" [ref=e171] [cursor=pointer]:
              - /url: /about
        - list [ref=e173]:
          - listitem [ref=e174]:
            - link "Pricing" [ref=e175] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e176]:
        - paragraph [ref=e177]: Follow us on
        - generic [ref=e178]:
          - link [ref=e179] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e180]
          - link [ref=e182] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e183]
          - link [ref=e185] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e186]
          - link [ref=e188] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e189]
      - generic [ref=e191]:
        - paragraph [ref=e192]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e193]:
          - link "Privacy" [ref=e194] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e195] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e196] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e197] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e198] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e199]
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