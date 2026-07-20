# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/audio-processing/design.spec.js >> Product - Audio Processing design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

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
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 16 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 16
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
    - generic [ref=e9]:
      - heading "Studio-Quality Audio Processing" [level=1] [ref=e10]
      - heading "Proprietary tools that transform raw audio into crystal-clear voice for superior transcription and AI performance." [level=2] [ref=e11]
    - generic [ref=e12]:
      - generic [ref=e13]:
        - heading "Denoiser" [level=2] [ref=e14]
        - paragraph [ref=e15]: Eliminate background noise while preserving natural speech.
        - generic [ref=e16]:
          - generic [ref=e17]:
            - heading "Capabilities" [level=4] [ref=e18]
            - list [ref=e19]:
              - listitem [ref=e20]:
                - img [ref=e21]
                - generic [ref=e23]: Real-time adaptive noise reduction
              - listitem [ref=e24]:
                - img [ref=e25]
                - generic [ref=e27]: Multi-source interference suppression
              - listitem [ref=e28]:
                - img [ref=e29]
                - generic [ref=e31]: Speech characteristic preservation
          - generic [ref=e32]:
            - heading "Use Cases" [level=4] [ref=e33]
            - list [ref=e34]:
              - listitem [ref=e35]:
                - img [ref=e36]
                - generic [ref=e38]: Call centers
              - listitem [ref=e39]:
                - img [ref=e40]
                - generic [ref=e42]: Remote recordings
              - listitem [ref=e43]:
                - img [ref=e44]
                - generic [ref=e46]: mobile apps
              - listitem [ref=e47]:
                - img [ref=e48]
                - generic [ref=e50]: noisy environments
              - listitem [ref=e51]:
                - img [ref=e52]
                - generic [ref=e54]: conference calls
      - generic [ref=e55]:
        - heading "Enhancement" [level=2] [ref=e56]
        - paragraph [ref=e57]: Optimize clarity and intelligibility for maximum accuracy.
        - generic [ref=e58]:
          - generic [ref=e59]:
            - heading "Capabilities" [level=4] [ref=e60]
            - list [ref=e61]:
              - listitem [ref=e62]:
                - img [ref=e63]
                - generic [ref=e65]: Automatic volume normalization
              - listitem [ref=e66]:
                - img [ref=e67]
                - generic [ref=e69]: Frequency optimization for speech
              - listitem [ref=e70]:
                - img [ref=e71]
                - generic [ref=e73]: Artifact and distortion removal
          - generic [ref=e74]:
            - heading "Use Cases" [level=4] [ref=e75]
            - list [ref=e76]:
              - listitem [ref=e77]:
                - img [ref=e78]
                - generic [ref=e80]: Phone recordings
              - listitem [ref=e81]:
                - img [ref=e82]
                - generic [ref=e84]: low-quality audio
              - listitem [ref=e85]:
                - img [ref=e86]
                - generic [ref=e88]: variable conditions
              - listitem [ref=e89]:
                - img [ref=e90]
                - generic [ref=e92]: legacy recordings
    - link "Contact Us" [ref=e94] [cursor=pointer]:
      - /url: /contact
    - contentinfo [ref=e95]:
      - generic [ref=e96]:
        - paragraph [ref=e97]: The fastest way to add voice AI to your products
        - paragraph [ref=e98]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e99]:
          - link "Go to Pricing page" [ref=e100] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e101] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e102]:
      - generic [ref=e103]:
        - generic [ref=e104]:
          - img "Shunya Labs" [ref=e105]
          - paragraph [ref=e106]: Shunya Labs, Inc.
        - generic [ref=e107]:
          - paragraph [ref=e108]: Product
          - list [ref=e109]:
            - listitem [ref=e110]:
              - link "Overview" [ref=e111] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e112]:
              - link "Models" [ref=e113] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e114]:
              - link "Voice Agents" [ref=e115] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e116]:
              - link "Speech Intelligence" [ref=e117] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e118]:
              - link "Audio Processing" [ref=e119] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e120]:
              - link "Deployment" [ref=e121] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e122]:
          - paragraph [ref=e123]: Models
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link "Language Models" [ref=e126] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e127]:
              - link "Zero STT Indic" [ref=e128] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e129]:
              - link "Zero STT Codeswitch" [ref=e130] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e131]:
              - link "Specialised Models" [ref=e132] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e133]:
              - link "Zero STT Med" [ref=e134] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e135]:
              - link "On Device Models" [ref=e136] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e137]:
          - paragraph [ref=e138]: Solutions
          - list [ref=e139]:
            - listitem [ref=e140]:
              - link "Contact Centers" [ref=e141] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e142]:
              - link "Media & Entertainment" [ref=e143] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e144]:
              - link "Healthcare" [ref=e145] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e146]:
          - paragraph [ref=e147]: Resources
          - list [ref=e148]:
            - listitem [ref=e149]:
              - link "Blogs" [ref=e150] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e151]:
              - link "Benchmarks" [ref=e152] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e153]:
              - link "News & Media" [ref=e154] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e155]:
              - link "Patents" [ref=e156] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e157]:
              - link "Research" [ref=e158] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e160]:
          - link "Documentation" [ref=e161] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e163]:
          - listitem [ref=e164]:
            - link "About us" [ref=e165] [cursor=pointer]:
              - /url: /about
        - list [ref=e167]:
          - listitem [ref=e168]:
            - link "Pricing" [ref=e169] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e170]:
        - paragraph [ref=e171]: Follow us on
        - generic [ref=e172]:
          - link [ref=e173] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e174]
          - link [ref=e176] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e177]
          - link [ref=e179] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e180]
          - link [ref=e182] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e183]
      - generic [ref=e185]:
        - paragraph [ref=e186]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e187]:
          - link "Privacy" [ref=e188] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e189] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e190] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e191] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e192] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e193]
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
     |                                                                                      ^ Error: 16 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```