# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/audio-processing/design.spec.js >> Product - Audio Processing design compliance >> Figma design compliance
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
    - generic [ref=e39]:
      - heading "Studio-Quality Audio Processing" [level=1] [ref=e40]
      - heading "Proprietary tools that transform raw audio into crystal-clear voice for superior transcription and AI performance." [level=2] [ref=e41]
    - generic [ref=e42]:
      - generic [ref=e44]:
        - heading "Denoiser" [level=2] [ref=e45]
        - paragraph [ref=e46]: Eliminate background noise while preserving natural speech.
        - generic [ref=e47]:
          - generic [ref=e48]:
            - heading "Capabilities" [level=4] [ref=e49]
            - list [ref=e50]:
              - listitem [ref=e51]:
                - img [ref=e52]
                - generic [ref=e54]: Real-time adaptive noise reduction
              - listitem [ref=e55]:
                - img [ref=e56]
                - generic [ref=e58]: Multi-source interference suppression
              - listitem [ref=e59]:
                - img [ref=e60]
                - generic [ref=e62]: Speech characteristic preservation
          - generic [ref=e63]:
            - heading "Use Cases" [level=4] [ref=e64]
            - list [ref=e65]:
              - listitem [ref=e66]:
                - img [ref=e67]
                - generic [ref=e69]: Call centers
              - listitem [ref=e70]:
                - img [ref=e71]
                - generic [ref=e73]: Remote recordings
              - listitem [ref=e74]:
                - img [ref=e75]
                - generic [ref=e77]: mobile apps
              - listitem [ref=e78]:
                - img [ref=e79]
                - generic [ref=e81]: noisy environments
              - listitem [ref=e82]:
                - img [ref=e83]
                - generic [ref=e85]: conference calls
      - generic [ref=e87]:
        - heading "Enhancement" [level=2] [ref=e88]
        - paragraph [ref=e89]: Optimize clarity and intelligibility for maximum accuracy.
        - generic [ref=e90]:
          - generic [ref=e91]:
            - heading "Capabilities" [level=4] [ref=e92]
            - list [ref=e93]:
              - listitem [ref=e94]:
                - img [ref=e95]
                - generic [ref=e97]: Automatic volume normalization
              - listitem [ref=e98]:
                - img [ref=e99]
                - generic [ref=e101]: Frequency optimization for speech
              - listitem [ref=e102]:
                - img [ref=e103]
                - generic [ref=e105]: Artifact and distortion removal
          - generic [ref=e106]:
            - heading "Use Cases" [level=4] [ref=e107]
            - list [ref=e108]:
              - listitem [ref=e109]:
                - img [ref=e110]
                - generic [ref=e112]: Phone recordings
              - listitem [ref=e113]:
                - img [ref=e114]
                - generic [ref=e116]: low-quality audio
              - listitem [ref=e117]:
                - img [ref=e118]
                - generic [ref=e120]: variable conditions
              - listitem [ref=e121]:
                - img [ref=e122]
                - generic [ref=e124]: legacy recordings
    - link "Contact Us" [ref=e126] [cursor=pointer]:
      - /url: /contact
    - contentinfo [ref=e127]:
      - generic [ref=e128]:
        - paragraph [ref=e129]: The fastest way to add voice AI to your products
        - paragraph [ref=e130]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e131]:
          - link "Go to Pricing page" [ref=e132] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e133] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e134]:
      - generic [ref=e135]:
        - generic [ref=e136]:
          - img "Shunya Labs" [ref=e137]
          - paragraph [ref=e138]: Shunya Labs, Inc.
        - generic [ref=e139]:
          - paragraph [ref=e140]: Product
          - list [ref=e141]:
            - listitem [ref=e142]:
              - link "Overview" [ref=e143] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e144]:
              - link "Models" [ref=e145] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e146]:
              - link "Voice Agents" [ref=e147] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e148]:
              - link "Speech Intelligence" [ref=e149] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e150]:
              - link "Audio Processing" [ref=e151] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e152]:
              - link "Deployment" [ref=e153] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e154]:
          - paragraph [ref=e155]: Models
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link "Language Models" [ref=e158] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e159]:
              - link "Zero STT Indic" [ref=e160] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e161]:
              - link "Zero STT Codeswitch" [ref=e162] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e163]:
              - link "Specialised Models" [ref=e164] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e165]:
              - link "Zero STT Med" [ref=e166] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e167]:
              - link "On Device Models" [ref=e168] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e169]:
          - paragraph [ref=e170]: Solutions
          - list [ref=e171]:
            - listitem [ref=e172]:
              - link "Contact Centers" [ref=e173] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e174]:
              - link "Media & Entertainment" [ref=e175] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e176]:
              - link "Healthcare" [ref=e177] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e178]:
          - paragraph [ref=e179]: Resources
          - list [ref=e180]:
            - listitem [ref=e181]:
              - link "Blogs" [ref=e182] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e183]:
              - link "Benchmarks" [ref=e184] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e185]:
              - link "News & Media" [ref=e186] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e187]:
              - link "Patents" [ref=e188] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e189]:
              - link "Research" [ref=e190] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e192]:
          - link "Documentation" [ref=e193] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e195]:
          - listitem [ref=e196]:
            - link "About us" [ref=e197] [cursor=pointer]:
              - /url: /about
        - list [ref=e199]:
          - listitem [ref=e200]:
            - link "Pricing" [ref=e201] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e202]:
        - paragraph [ref=e203]: Follow us on
        - generic [ref=e204]:
          - link [ref=e205] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e206]
          - link [ref=e208] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e209]
          - link [ref=e211] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e212]
          - link [ref=e214] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e215]
      - generic [ref=e217]:
        - paragraph [ref=e218]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e219]:
          - link "Privacy" [ref=e220] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e221] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e222] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e223] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e224] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e225]
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