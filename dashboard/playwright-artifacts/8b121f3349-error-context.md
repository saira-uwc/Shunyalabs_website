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
    - generic [ref=e11]:
      - heading "Studio-Quality Audio Processing" [level=1] [ref=e12]
      - heading "Proprietary tools that transform raw audio into crystal-clear voice for superior transcription and AI performance." [level=2] [ref=e13]
    - generic [ref=e14]:
      - generic [ref=e16]:
        - heading "Denoiser" [level=2] [ref=e17]
        - paragraph [ref=e18]: Eliminate background noise while preserving natural speech.
        - generic [ref=e19]:
          - generic [ref=e20]:
            - heading "Capabilities" [level=4] [ref=e21]
            - list [ref=e22]:
              - listitem [ref=e23]:
                - img [ref=e24]
                - generic [ref=e26]: Real-time adaptive noise reduction
              - listitem [ref=e27]:
                - img [ref=e28]
                - generic [ref=e30]: Multi-source interference suppression
              - listitem [ref=e31]:
                - img [ref=e32]
                - generic [ref=e34]: Speech characteristic preservation
          - generic [ref=e35]:
            - heading "Use Cases" [level=4] [ref=e36]
            - list [ref=e37]:
              - listitem [ref=e38]:
                - img [ref=e39]
                - generic [ref=e41]: Call centers
              - listitem [ref=e42]:
                - img [ref=e43]
                - generic [ref=e45]: Remote recordings
              - listitem [ref=e46]:
                - img [ref=e47]
                - generic [ref=e49]: mobile apps
              - listitem [ref=e50]:
                - img [ref=e51]
                - generic [ref=e53]: noisy environments
              - listitem [ref=e54]:
                - img [ref=e55]
                - generic [ref=e57]: conference calls
      - generic [ref=e59]:
        - heading "Enhancement" [level=2] [ref=e60]
        - paragraph [ref=e61]: Optimize clarity and intelligibility for maximum accuracy.
        - generic [ref=e62]:
          - generic [ref=e63]:
            - heading "Capabilities" [level=4] [ref=e64]
            - list [ref=e65]:
              - listitem [ref=e66]:
                - img [ref=e67]
                - generic [ref=e69]: Automatic volume normalization
              - listitem [ref=e70]:
                - img [ref=e71]
                - generic [ref=e73]: Frequency optimization for speech
              - listitem [ref=e74]:
                - img [ref=e75]
                - generic [ref=e77]: Artifact and distortion removal
          - generic [ref=e78]:
            - heading "Use Cases" [level=4] [ref=e79]
            - list [ref=e80]:
              - listitem [ref=e81]:
                - img [ref=e82]
                - generic [ref=e84]: Phone recordings
              - listitem [ref=e85]:
                - img [ref=e86]
                - generic [ref=e88]: low-quality audio
              - listitem [ref=e89]:
                - img [ref=e90]
                - generic [ref=e92]: variable conditions
              - listitem [ref=e93]:
                - img [ref=e94]
                - generic [ref=e96]: legacy recordings
    - link "Contact Us" [ref=e98] [cursor=pointer]:
      - /url: /contact
    - contentinfo [ref=e99]:
      - generic [ref=e100]:
        - paragraph [ref=e101]: The fastest way to add voice AI to your products
        - paragraph [ref=e102]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e103]:
          - link "Go to Pricing page" [ref=e104] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e105] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e106]:
      - generic [ref=e107]:
        - generic [ref=e108]:
          - img "Shunya Labs" [ref=e109]
          - paragraph [ref=e110]: Shunya Labs, Inc.
        - generic [ref=e111]:
          - paragraph [ref=e112]: Product
          - list [ref=e113]:
            - listitem [ref=e114]:
              - link "Overview" [ref=e115] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e116]:
              - link "Models" [ref=e117] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e118]:
              - link "Voice Agents" [ref=e119] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e120]:
              - link "Speech Intelligence" [ref=e121] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e122]:
              - link "Audio Processing" [ref=e123] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e124]:
              - link "Deployment" [ref=e125] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e126]:
          - paragraph [ref=e127]: Models
          - list [ref=e128]:
            - listitem [ref=e129]:
              - link "Language Models" [ref=e130] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e131]:
              - link "Zero STT Indic" [ref=e132] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e133]:
              - link "Zero STT Codeswitch" [ref=e134] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e135]:
              - link "Specialised Models" [ref=e136] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e137]:
              - link "Zero STT Med" [ref=e138] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e139]:
              - link "On Device Models" [ref=e140] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e141]:
          - paragraph [ref=e142]: Solutions
          - list [ref=e143]:
            - listitem [ref=e144]:
              - link "Contact Centers" [ref=e145] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e146]:
              - link "Media & Entertainment" [ref=e147] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e148]:
              - link "Healthcare" [ref=e149] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e150]:
          - paragraph [ref=e151]: Resources
          - list [ref=e152]:
            - listitem [ref=e153]:
              - link "Blogs" [ref=e154] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e155]:
              - link "Benchmarks" [ref=e156] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e157]:
              - link "News & Media" [ref=e158] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e159]:
              - link "Patents" [ref=e160] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e161]:
              - link "Research" [ref=e162] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e164]:
          - link "Documentation" [ref=e165] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e167]:
          - listitem [ref=e168]:
            - link "About us" [ref=e169] [cursor=pointer]:
              - /url: /about
        - list [ref=e171]:
          - listitem [ref=e172]:
            - link "Pricing" [ref=e173] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e174]:
        - paragraph [ref=e175]: Follow us on
        - generic [ref=e176]:
          - link [ref=e177] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e178]
          - link [ref=e180] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e181]
          - link [ref=e183] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e184]
          - link [ref=e186] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e187]
      - generic [ref=e189]:
        - paragraph [ref=e190]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e191]:
          - link "Privacy" [ref=e192] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e193] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e194] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e195] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e196] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e197]
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