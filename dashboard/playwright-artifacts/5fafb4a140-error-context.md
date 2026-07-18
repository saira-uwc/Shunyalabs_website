# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/contact/contact/design.spec.js >> Contact - Contact Us design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [console] 1 console error(s): requestStorageAccess: Permission denied.

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
            - /url: https://docs.shunyalabs.ai/
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
      - generic [ref=e11]:
        - paragraph [ref=e12]: Connect with us
        - heading "Speak with an expert" [level=1] [ref=e13]
      - generic [ref=e14]:
        - generic [ref=e15]:
          - heading "Our Offices" [level=2] [ref=e16]
          - generic [ref=e17]:
            - generic [ref=e18]:
              - img "USA flag" [ref=e20]
              - heading "USA" [level=3] [ref=e21]
              - paragraph [ref=e22]: 2810 N Church Street, Wilmington, Delaware 19802, USA
              - paragraph
            - generic [ref=e23]:
              - img "Gurgaon, IN flag" [ref=e25]
              - heading "Gurgaon, IN" [level=3] [ref=e26]
              - paragraph [ref=e27]: 5th Floor, DLF Two Horizon Centre, Sector 43, Gurugram, Haryana 122009
              - paragraph [ref=e28]: +91 99713 41448
            - generic [ref=e29]:
              - img "Singapore flag" [ref=e31]
              - heading "Singapore" [level=3] [ref=e32]
              - paragraph [ref=e33]: "133 Cecil street #14-01 keck Seng Tower, Singapore - 069535"
              - paragraph
        - generic [ref=e35]:
          - generic [ref=e36]:
            - generic [ref=e37]: Name *
            - textbox [ref=e38]
          - generic [ref=e39]:
            - generic [ref=e40]:
              - generic [ref=e41]: Work Email *
              - textbox [ref=e42]
            - generic [ref=e43]:
              - generic [ref=e44]: Phone Number *
              - textbox [ref=e45]
          - generic [ref=e46]:
            - generic [ref=e47]: Message *
            - textbox [ref=e48]
          - generic [ref=e49]:
            - generic [ref=e50] [cursor=pointer]:
              - checkbox "I agree to receive marketing communications from Shunya Labs." [ref=e52]
              - generic [ref=e53]: I agree to receive marketing communications from Shunya Labs.
            - generic [ref=e54] [cursor=pointer]:
              - checkbox "I agree to the Privacy Policy and Terms & Conditions. *" [ref=e56]
              - generic [ref=e57]:
                - text: I agree to the
                - link "Privacy Policy" [ref=e58]:
                  - /url: https://www.shunyalabs.ai/privacy-policy
                - text: and
                - link "Terms & Conditions" [ref=e59]:
                  - /url: https://www.shunyalabs.ai/terms-conditions
                - text: . *
          - button "Submit" [ref=e60] [cursor=pointer]
    - contentinfo [ref=e61]:
      - generic [ref=e62]:
        - generic [ref=e63]:
          - img "Shunya Labs" [ref=e64]
          - paragraph [ref=e65]: Shunya Labs, Inc.
        - generic [ref=e66]:
          - paragraph [ref=e67]: Product
          - list [ref=e68]:
            - listitem [ref=e69]:
              - link "Overview" [ref=e70] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e71]:
              - link "Models" [ref=e72] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e73]:
              - link "Voice Agents" [ref=e74] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e75]:
              - link "Speech Intelligence" [ref=e76] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e77]:
              - link "Audio Processing" [ref=e78] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e79]:
              - link "Deployment" [ref=e80] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e81]:
          - paragraph [ref=e82]: Models
          - list [ref=e83]:
            - listitem [ref=e84]:
              - link "Language Models" [ref=e85] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e86]:
              - link "Zero STT Indic" [ref=e87] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e88]:
              - link "Zero STT Codeswitch" [ref=e89] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e90]:
              - link "Specialised Models" [ref=e91] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e92]:
              - link "Zero STT Med" [ref=e93] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e94]:
              - link "On Device Models" [ref=e95] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e96]:
          - paragraph [ref=e97]: Solutions
          - list [ref=e98]:
            - listitem [ref=e99]:
              - link "Contact Centers" [ref=e100] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e101]:
              - link "Media & Entertainment" [ref=e102] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e103]:
              - link "Healthcare" [ref=e104] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e105]:
          - paragraph [ref=e106]: Resources
          - list [ref=e107]:
            - listitem [ref=e108]:
              - link "Blogs" [ref=e109] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e110]:
              - link "Benchmarks" [ref=e111] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e112]:
              - link "News & Media" [ref=e113] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e114]:
              - link "Patents" [ref=e115] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e116]:
              - link "Research" [ref=e117] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e119]:
          - link "Documentation" [ref=e120] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e122]:
          - listitem [ref=e123]:
            - link "About us" [ref=e124] [cursor=pointer]:
              - /url: /about
        - list [ref=e126]:
          - listitem [ref=e127]:
            - link "Pricing" [ref=e128] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e129]:
        - paragraph [ref=e130]: Follow us on
        - generic [ref=e131]:
          - link [ref=e132] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e133]
          - link [ref=e135] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e136]
          - link [ref=e138] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e139]
          - link [ref=e141] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e142]
      - generic [ref=e144]:
        - paragraph [ref=e145]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e146]:
          - link "Privacy" [ref=e147] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e148] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e149] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e150] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e151] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e152]
  - iframe [ref=e155]:
    - generic [ref=f1e6]:
      - text: protected by
      - strong [ref=f1e7]: reCAPTCHA
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