# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/audio-processing/design.spec.js >> Product - Audio Processing design compliance >> Figma design compliance
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
    - generic [ref=e37]:
      - heading "Studio-Quality Audio Processing" [level=1] [ref=e38]
      - heading "Proprietary tools that transform raw audio into crystal-clear voice for superior transcription and AI performance." [level=2] [ref=e39]
    - generic [ref=e40]:
      - generic [ref=e42]:
        - heading "Denoiser" [level=2] [ref=e43]
        - paragraph [ref=e44]: Eliminate background noise while preserving natural speech.
        - generic [ref=e45]:
          - generic [ref=e46]:
            - heading "Capabilities" [level=4] [ref=e47]
            - list [ref=e48]:
              - listitem [ref=e49]:
                - img [ref=e50]
                - generic [ref=e52]: Real-time adaptive noise reduction
              - listitem [ref=e53]:
                - img [ref=e54]
                - generic [ref=e56]: Multi-source interference suppression
              - listitem [ref=e57]:
                - img [ref=e58]
                - generic [ref=e60]: Speech characteristic preservation
          - generic [ref=e61]:
            - heading "Use Cases" [level=4] [ref=e62]
            - list [ref=e63]:
              - listitem [ref=e64]:
                - img [ref=e65]
                - generic [ref=e67]: Call centers
              - listitem [ref=e68]:
                - img [ref=e69]
                - generic [ref=e71]: Remote recordings
              - listitem [ref=e72]:
                - img [ref=e73]
                - generic [ref=e75]: mobile apps
              - listitem [ref=e76]:
                - img [ref=e77]
                - generic [ref=e79]: noisy environments
              - listitem [ref=e80]:
                - img [ref=e81]
                - generic [ref=e83]: conference calls
      - generic [ref=e85]:
        - heading "Enhancement" [level=2] [ref=e86]
        - paragraph [ref=e87]: Optimize clarity and intelligibility for maximum accuracy.
        - generic [ref=e88]:
          - generic [ref=e89]:
            - heading "Capabilities" [level=4] [ref=e90]
            - list [ref=e91]:
              - listitem [ref=e92]:
                - img [ref=e93]
                - generic [ref=e95]: Automatic volume normalization
              - listitem [ref=e96]:
                - img [ref=e97]
                - generic [ref=e99]: Frequency optimization for speech
              - listitem [ref=e100]:
                - img [ref=e101]
                - generic [ref=e103]: Artifact and distortion removal
          - generic [ref=e104]:
            - heading "Use Cases" [level=4] [ref=e105]
            - list [ref=e106]:
              - listitem [ref=e107]:
                - img [ref=e108]
                - generic [ref=e110]: Phone recordings
              - listitem [ref=e111]:
                - img [ref=e112]
                - generic [ref=e114]: low-quality audio
              - listitem [ref=e115]:
                - img [ref=e116]
                - generic [ref=e118]: variable conditions
              - listitem [ref=e119]:
                - img [ref=e120]
                - generic [ref=e122]: legacy recordings
    - link "Contact Us" [ref=e124] [cursor=pointer]:
      - /url: /contact
    - contentinfo [ref=e125]:
      - generic [ref=e126]:
        - paragraph [ref=e127]: The fastest way to add voice AI to your products
        - paragraph [ref=e128]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e129]:
          - link "Go to Pricing page" [ref=e130] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e131] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e132]:
      - generic [ref=e133]:
        - generic [ref=e134]:
          - img "Shunya Labs" [ref=e135]
          - paragraph [ref=e136]: Shunya Labs, Inc.
        - generic [ref=e137]:
          - paragraph [ref=e138]: Product
          - list [ref=e139]:
            - listitem [ref=e140]:
              - link "Overview" [ref=e141] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e142]:
              - link "Models" [ref=e143] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e144]:
              - link "Voice Agents" [ref=e145] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e146]:
              - link "Speech Intelligence" [ref=e147] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e148]:
              - link "Audio Processing" [ref=e149] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e150]:
              - link "Deployment" [ref=e151] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e152]:
          - paragraph [ref=e153]: Models
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link "Language Models" [ref=e156] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e157]:
              - link "Zero STT Indic" [ref=e158] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e159]:
              - link "Zero STT Codeswitch" [ref=e160] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e161]:
              - link "Specialised Models" [ref=e162] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e163]:
              - link "Zero STT Med" [ref=e164] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e165]:
              - link "On Device Models" [ref=e166] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e167]:
          - paragraph [ref=e168]: Solutions
          - list [ref=e169]:
            - listitem [ref=e170]:
              - link "Contact Centers" [ref=e171] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e172]:
              - link "Media & Entertainment" [ref=e173] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e174]:
              - link "Healthcare" [ref=e175] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e176]:
          - paragraph [ref=e177]: Resources
          - list [ref=e178]:
            - listitem [ref=e179]:
              - link "Blogs" [ref=e180] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e181]:
              - link "Benchmarks" [ref=e182] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e183]:
              - link "News & Media" [ref=e184] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e185]:
              - link "Patents" [ref=e186] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e187]:
              - link "Research" [ref=e188] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e190]:
          - link "Documentation" [ref=e191] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e193]:
          - listitem [ref=e194]:
            - link "About us" [ref=e195] [cursor=pointer]:
              - /url: /about
        - list [ref=e197]:
          - listitem [ref=e198]:
            - link "Pricing" [ref=e199] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e200]:
        - paragraph [ref=e201]: Follow us on
        - generic [ref=e202]:
          - link [ref=e203] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e204]
          - link [ref=e206] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e207]
          - link [ref=e209] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e210]
          - link [ref=e212] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e213]
      - generic [ref=e215]:
        - paragraph [ref=e216]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e217]:
          - link "Privacy" [ref=e218] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e219] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e220] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e221] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e222] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e223]
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