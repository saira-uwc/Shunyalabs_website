# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/contact/contact/design.spec.js >> Contact - Contact Us design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Footer item "© 2026 Shunya Labs, Inc. All rights reserved." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "© 2026 Shunya Labs, Inc. All rights reserved." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 2 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 2
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
    - generic [ref=e34]:
      - generic [ref=e35]:
        - paragraph [ref=e36]: Connect with us
        - heading "Speak with an expert" [level=1] [ref=e37]
      - generic [ref=e38]:
        - generic [ref=e39]:
          - heading "Our Offices" [level=2] [ref=e40]
          - generic [ref=e41]:
            - generic [ref=e42]:
              - img "USA flag" [ref=e44]
              - heading "USA" [level=3] [ref=e45]
              - paragraph [ref=e46]: 2810 N Church Street, Wilmington, Delaware 19802, USA
              - paragraph
            - generic [ref=e47]:
              - img "Gurgaon, IN flag" [ref=e49]
              - heading "Gurgaon, IN" [level=3] [ref=e50]
              - paragraph [ref=e51]: 5th Floor, DLF Two Horizon Centre, Sector 43, Gurugram, Haryana 122009
              - paragraph [ref=e52]: +91 99713 41448
            - generic [ref=e53]:
              - img "Singapore flag" [ref=e55]
              - heading "Singapore" [level=3] [ref=e56]
              - paragraph [ref=e57]: "133 Cecil street #14-01 keck Seng Tower, Singapore - 069535"
              - paragraph
        - generic [ref=e59]:
          - generic [ref=e60]:
            - generic [ref=e61]: Name *
            - textbox [ref=e62]
          - generic [ref=e63]:
            - generic [ref=e64]:
              - generic [ref=e65]: Work Email *
              - textbox [ref=e66]
            - generic [ref=e67]:
              - generic [ref=e68]: Phone Number *
              - textbox [ref=e69]
          - generic [ref=e70]:
            - generic [ref=e71]: Message *
            - textbox [ref=e72]
          - generic [ref=e73]:
            - generic [ref=e74] [cursor=pointer]:
              - checkbox "I agree to receive marketing communications from Shunya Labs." [ref=e76]
              - generic [ref=e77]: I agree to receive marketing communications from Shunya Labs.
            - generic [ref=e78] [cursor=pointer]:
              - checkbox "I agree to the Privacy Policy and Terms & Conditions. *" [ref=e80]
              - generic [ref=e81]:
                - text: I agree to the
                - link "Privacy Policy" [ref=e82]:
                  - /url: https://www.shunyalabs.ai/privacy-policy
                - text: and
                - link "Terms & Conditions" [ref=e83]:
                  - /url: https://www.shunyalabs.ai/terms-conditions
                - text: . *
          - button "Submit" [ref=e84] [cursor=pointer]
    - contentinfo [ref=e85]:
      - generic [ref=e86]:
        - generic [ref=e87]:
          - img "Shunya Labs" [ref=e88]
          - paragraph [ref=e89]: Shunya Labs, Inc.
        - generic [ref=e90]:
          - paragraph [ref=e91]: Product
          - list [ref=e92]:
            - listitem [ref=e93]:
              - link "Overview" [ref=e94] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e95]:
              - link "Models" [ref=e96] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e97]:
              - link "Voice Agents" [ref=e98] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e99]:
              - link "Speech Intelligence" [ref=e100] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e101]:
              - link "Audio Processing" [ref=e102] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e103]:
              - link "Deployment" [ref=e104] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e105]:
          - paragraph [ref=e106]: Models
          - list [ref=e107]:
            - listitem [ref=e108]:
              - link "Language Models" [ref=e109] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e110]:
              - link "Zero STT Indic" [ref=e111] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e112]:
              - link "Zero STT Codeswitch" [ref=e113] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e114]:
              - link "Specialised Models" [ref=e115] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e116]:
              - link "Zero STT Med" [ref=e117] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e118]:
              - link "On Device Models" [ref=e119] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e120]:
          - paragraph [ref=e121]: Solutions
          - list [ref=e122]:
            - listitem [ref=e123]:
              - link "Contact Centers" [ref=e124] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e125]:
              - link "Media & Entertainment" [ref=e126] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e127]:
              - link "Healthcare" [ref=e128] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e129]:
          - paragraph [ref=e130]: Resources
          - list [ref=e131]:
            - listitem [ref=e132]:
              - link "Blogs" [ref=e133] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e134]:
              - link "Benchmarks" [ref=e135] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e136]:
              - link "News & Media" [ref=e137] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e138]:
              - link "Patents" [ref=e139] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e140]:
              - link "Research" [ref=e141] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e143]:
          - link "Documentation" [ref=e144] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e146]:
          - listitem [ref=e147]:
            - link "About us" [ref=e148] [cursor=pointer]:
              - /url: /about
        - list [ref=e150]:
          - listitem [ref=e151]:
            - link "Pricing" [ref=e152] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e153]:
        - paragraph [ref=e154]: Follow us on
        - generic [ref=e155]:
          - link [ref=e156] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e157]
          - link [ref=e159] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e160]
          - link [ref=e162] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e163]
          - link [ref=e165] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e166]
      - generic [ref=e168]:
        - paragraph [ref=e169]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e170]:
          - link "Privacy" [ref=e171] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e172] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e173] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e174] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e175] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e176]
  - iframe [ref=e179]:
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
     |                                                                                      ^ Error: 2 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```