# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/contact/contact/design.spec.js >> Contact - Contact Us design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Page title: expected "Contact Shunya Labs" but got "Contact for Voice AI & Enterprise Support | Shunya Labs"

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
    - generic [ref=e36]:
      - generic [ref=e37]:
        - paragraph [ref=e38]: Connect with us
        - heading "Speak with an expert" [level=1] [ref=e39]
      - generic [ref=e40]:
        - generic [ref=e41]:
          - heading "Our Offices" [level=2] [ref=e42]
          - generic [ref=e43]:
            - generic [ref=e44]:
              - img "USA flag" [ref=e46]
              - heading "USA" [level=3] [ref=e47]
              - paragraph [ref=e48]: 2810 N Church Street, Wilmington, Delaware 19802, USA
              - paragraph
            - generic [ref=e49]:
              - img "Gurgaon, IN flag" [ref=e51]
              - heading "Gurgaon, IN" [level=3] [ref=e52]
              - paragraph [ref=e53]: 5th Floor, DLF Two Horizon Centre, Sector 43, Gurugram, Haryana 122009
              - paragraph [ref=e54]: +91 99713 41448
            - generic [ref=e55]:
              - img "Singapore flag" [ref=e57]
              - heading "Singapore" [level=3] [ref=e58]
              - paragraph [ref=e59]: "133 Cecil street #14-01 keck Seng Tower, Singapore - 069535"
              - paragraph
        - generic [ref=e61]:
          - generic [ref=e62]:
            - generic [ref=e63]: Name *
            - textbox [ref=e64]
          - generic [ref=e65]:
            - generic [ref=e66]:
              - generic [ref=e67]: Work Email *
              - textbox [ref=e68]
            - generic [ref=e69]:
              - generic [ref=e70]: Phone Number *
              - textbox [ref=e71]
          - generic [ref=e72]:
            - generic [ref=e73]: Message *
            - textbox [ref=e74]
          - generic [ref=e75]:
            - generic [ref=e76] [cursor=pointer]:
              - checkbox "I agree to receive marketing communications from Shunya Labs." [ref=e78]
              - generic [ref=e79]: I agree to receive marketing communications from Shunya Labs.
            - generic [ref=e80] [cursor=pointer]:
              - checkbox "I agree to the Privacy Policy and Terms & Conditions. *" [ref=e82]
              - generic [ref=e83]:
                - text: I agree to the
                - link "Privacy Policy" [ref=e84]:
                  - /url: https://www.shunyalabs.ai/privacy-policy
                - text: and
                - link "Terms & Conditions" [ref=e85]:
                  - /url: https://www.shunyalabs.ai/terms-conditions
                - text: . *
          - button "Submit" [ref=e86] [cursor=pointer]
    - contentinfo [ref=e87]:
      - generic [ref=e88]:
        - generic [ref=e89]:
          - img "Shunya Labs" [ref=e90]
          - paragraph [ref=e91]: Shunya Labs, Inc.
        - generic [ref=e92]:
          - paragraph [ref=e93]: Product
          - list [ref=e94]:
            - listitem [ref=e95]:
              - link "Overview" [ref=e96] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e97]:
              - link "Models" [ref=e98] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e99]:
              - link "Voice Agents" [ref=e100] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e101]:
              - link "Speech Intelligence" [ref=e102] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e103]:
              - link "Audio Processing" [ref=e104] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e105]:
              - link "Deployment" [ref=e106] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e107]:
          - paragraph [ref=e108]: Models
          - list [ref=e109]:
            - listitem [ref=e110]:
              - link "Language Models" [ref=e111] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e112]:
              - link "Zero STT Indic" [ref=e113] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e114]:
              - link "Zero STT Codeswitch" [ref=e115] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e116]:
              - link "Specialised Models" [ref=e117] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e118]:
              - link "Zero STT Med" [ref=e119] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e120]:
              - link "On Device Models" [ref=e121] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e122]:
          - paragraph [ref=e123]: Solutions
          - list [ref=e124]:
            - listitem [ref=e125]:
              - link "Contact Centers" [ref=e126] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e127]:
              - link "Media & Entertainment" [ref=e128] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e129]:
              - link "Healthcare" [ref=e130] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e131]:
          - paragraph [ref=e132]: Resources
          - list [ref=e133]:
            - listitem [ref=e134]:
              - link "Blogs" [ref=e135] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e136]:
              - link "Benchmarks" [ref=e137] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e138]:
              - link "News & Media" [ref=e139] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e140]:
              - link "Patents" [ref=e141] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e142]:
              - link "Research" [ref=e143] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e145]:
          - link "Documentation" [ref=e146] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e148]:
          - listitem [ref=e149]:
            - link "About us" [ref=e150] [cursor=pointer]:
              - /url: /about
        - list [ref=e152]:
          - listitem [ref=e153]:
            - link "Pricing" [ref=e154] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e155]:
        - paragraph [ref=e156]: Follow us on
        - generic [ref=e157]:
          - link [ref=e158] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e159]
          - link [ref=e161] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e162]
          - link [ref=e164] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e165]
          - link [ref=e167] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e168]
      - generic [ref=e170]:
        - paragraph [ref=e171]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e172]:
          - link "Privacy" [ref=e173] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e174] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e175] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e176] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e177] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e178]
  - iframe [ref=e181]:
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