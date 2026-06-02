# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/contact/contact/design.spec.js >> Contact - Contact Us design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Footer item "© 2026 Shunya Labs Inc. All rights reserved." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "© 2026 Shunya Labs Inc. All rights reserved." not found on page

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
    - generic [ref=e38]:
      - generic [ref=e39]:
        - paragraph [ref=e40]: Connect with us
        - heading "Speak with an expert" [level=1] [ref=e41]
      - generic [ref=e42]:
        - generic [ref=e43]:
          - heading "Our Offices" [level=2] [ref=e44]
          - generic [ref=e45]:
            - generic [ref=e46]:
              - img "USA flag" [ref=e48]
              - heading "USA" [level=3] [ref=e49]
              - paragraph [ref=e50]: 2810 N Church Street, Wilmington, Delaware 19802, USA
              - paragraph
            - generic [ref=e51]:
              - img "Gurgaon, IN flag" [ref=e53]
              - heading "Gurgaon, IN" [level=3] [ref=e54]
              - paragraph [ref=e55]: 5th Floor, DLF Two Horizon Centre, Sector 43, Gurugram, Haryana 122009
              - paragraph [ref=e56]: +91 99713 41448
            - generic [ref=e57]:
              - img "Singapore flag" [ref=e59]
              - heading "Singapore" [level=3] [ref=e60]
              - paragraph [ref=e61]: "133 Cecil street #14-01 keck Seng Tower, Singapore - 069535"
              - paragraph
        - generic [ref=e63]:
          - generic [ref=e64]:
            - generic [ref=e65]: Name *
            - textbox [ref=e66]
          - generic [ref=e67]:
            - generic [ref=e68]:
              - generic [ref=e69]: Work Email *
              - textbox [ref=e70]
            - generic [ref=e71]:
              - generic [ref=e72]: Phone Number *
              - textbox [ref=e73]
          - generic [ref=e74]:
            - generic [ref=e75]: Message *
            - textbox [ref=e76]
          - generic [ref=e77]:
            - generic [ref=e78] [cursor=pointer]:
              - checkbox "I agree to receive marketing communications from Shunya Labs." [ref=e80]
              - generic [ref=e81]: I agree to receive marketing communications from Shunya Labs.
            - generic [ref=e82] [cursor=pointer]:
              - checkbox "I agree to the Privacy Policy and Terms & Conditions. *" [ref=e84]
              - generic [ref=e85]:
                - text: I agree to the
                - link "Privacy Policy" [ref=e86]:
                  - /url: https://www.shunyalabs.ai/privacy-policy
                - text: and
                - link "Terms & Conditions" [ref=e87]:
                  - /url: https://www.shunyalabs.ai/terms-conditions
                - text: . *
          - button "Submit" [ref=e88] [cursor=pointer]
    - contentinfo [ref=e89]:
      - generic [ref=e90]:
        - generic [ref=e91]:
          - img "Shunya Labs" [ref=e92]
          - paragraph [ref=e93]: Shunya Labs, Inc.
        - generic [ref=e94]:
          - paragraph [ref=e95]: Product
          - list [ref=e96]:
            - listitem [ref=e97]:
              - link "Overview" [ref=e98] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e99]:
              - link "Models" [ref=e100] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e101]:
              - link "Voice Agents" [ref=e102] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e103]:
              - link "Speech Intelligence" [ref=e104] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e105]:
              - link "Audio Processing" [ref=e106] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e107]:
              - link "Deployment" [ref=e108] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e109]:
          - paragraph [ref=e110]: Models
          - list [ref=e111]:
            - listitem [ref=e112]:
              - link "Language Models" [ref=e113] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e114]:
              - link "Zero STT Indic" [ref=e115] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e116]:
              - link "Zero STT Codeswitch" [ref=e117] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e118]:
              - link "Specialised Models" [ref=e119] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e120]:
              - link "Zero STT Med" [ref=e121] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e122]:
              - link "On Device Models" [ref=e123] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e124]:
          - paragraph [ref=e125]: Solutions
          - list [ref=e126]:
            - listitem [ref=e127]:
              - link "Contact Centers" [ref=e128] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e129]:
              - link "Media & Entertainment" [ref=e130] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e131]:
              - link "Healthcare" [ref=e132] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e133]:
          - paragraph [ref=e134]: Resources
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "Blogs" [ref=e137] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e138]:
              - link "Benchmarks" [ref=e139] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e140]:
              - link "News & Media" [ref=e141] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e142]:
              - link "Patents" [ref=e143] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e144]:
              - link "Research" [ref=e145] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e147]:
          - link "Documentation" [ref=e148] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e150]:
          - listitem [ref=e151]:
            - link "About us" [ref=e152] [cursor=pointer]:
              - /url: /about
        - list [ref=e154]:
          - listitem [ref=e155]:
            - link "Pricing" [ref=e156] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e157]:
        - paragraph [ref=e158]: Follow us on
        - generic [ref=e159]:
          - link [ref=e160] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e161]
          - link [ref=e163] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e164]
          - link [ref=e166] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e167]
          - link [ref=e169] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e170]
      - generic [ref=e172]:
        - paragraph [ref=e173]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e174]:
          - link "Privacy" [ref=e175] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e176] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e177] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e178] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e179] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e180]
  - iframe [ref=e183]:
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