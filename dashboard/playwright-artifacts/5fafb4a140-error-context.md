# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/contact/contact/design.spec.js >> Contact - Contact Us design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [global] Footer background: expected rgb(11, 11, 15) but got rgb(255, 255, 255)

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
Error: [content] Text content "Contact Sales" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Contact Sales (/contact)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 18 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 18
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
    - generic [ref=e8]:
      - generic [ref=e9]:
        - paragraph [ref=e10]: Connect with us
        - heading "Speak with an expert" [level=1] [ref=e11]
      - generic [ref=e12]:
        - generic [ref=e13]:
          - heading "Our Offices" [level=2] [ref=e14]
          - generic [ref=e15]:
            - generic [ref=e16]:
              - img "USA flag" [ref=e18]
              - heading "USA" [level=3] [ref=e19]
              - paragraph [ref=e20]: 2810 N Church Street, Wilmington, Delaware 19802, USA
              - paragraph
            - generic [ref=e21]:
              - img "Gurgaon, IN flag" [ref=e23]
              - heading "Gurgaon, IN" [level=3] [ref=e24]
              - paragraph [ref=e25]: 5th Floor, DLF Two Horizon Centre, Sector 43, Gurugram, Haryana 122009
              - paragraph [ref=e26]: +91 99713 41448
            - generic [ref=e27]:
              - img "Singapore flag" [ref=e29]
              - heading "Singapore" [level=3] [ref=e30]
              - paragraph [ref=e31]: "133 Cecil street #14-01 keck Seng Tower, Singapore - 069535"
              - paragraph
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]: Name *
            - textbox [ref=e36]
          - generic [ref=e37]:
            - generic [ref=e38]:
              - generic [ref=e39]: Work Email *
              - textbox [ref=e40]
            - generic [ref=e41]:
              - generic [ref=e42]: Phone Number *
              - textbox [ref=e43]
          - generic [ref=e44]:
            - generic [ref=e45]: Message *
            - textbox [ref=e46]
          - generic [ref=e47]:
            - generic [ref=e48] [cursor=pointer]:
              - checkbox "I agree to receive marketing communications from Shunya Labs." [ref=e50]
              - generic [ref=e51]: I agree to receive marketing communications from Shunya Labs.
            - generic [ref=e52] [cursor=pointer]:
              - checkbox "I agree to the Privacy Policy and Terms & Conditions. *" [ref=e54]
              - generic [ref=e55]:
                - text: I agree to the
                - link "Privacy Policy" [ref=e56]:
                  - /url: https://www.shunyalabs.ai/privacy-policy
                - text: and
                - link "Terms & Conditions" [ref=e57]:
                  - /url: https://www.shunyalabs.ai/terms-conditions
                - text: . *
          - button "Submit" [ref=e58] [cursor=pointer]
    - contentinfo [ref=e59]:
      - generic [ref=e60]:
        - generic [ref=e61]:
          - img "Shunya Labs" [ref=e62]
          - paragraph [ref=e63]: Shunya Labs, Inc.
        - generic [ref=e64]:
          - paragraph [ref=e65]: Product
          - list [ref=e66]:
            - listitem [ref=e67]:
              - link "Overview" [ref=e68] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e69]:
              - link "Models" [ref=e70] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e71]:
              - link "Voice Agents" [ref=e72] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e73]:
              - link "Speech Intelligence" [ref=e74] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e75]:
              - link "Audio Processing" [ref=e76] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e77]:
              - link "Deployment" [ref=e78] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e79]:
          - paragraph [ref=e80]: Models
          - list [ref=e81]:
            - listitem [ref=e82]:
              - link "Language Models" [ref=e83] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e84]:
              - link "Zero STT Indic" [ref=e85] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e86]:
              - link "Zero STT Codeswitch" [ref=e87] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e88]:
              - link "Specialised Models" [ref=e89] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e90]:
              - link "Zero STT Med" [ref=e91] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e92]:
              - link "On Device Models" [ref=e93] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e94]:
          - paragraph [ref=e95]: Solutions
          - list [ref=e96]:
            - listitem [ref=e97]:
              - link "Contact Centers" [ref=e98] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e99]:
              - link "Media & Entertainment" [ref=e100] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e101]:
              - link "Healthcare" [ref=e102] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e103]:
          - paragraph [ref=e104]: Resources
          - list [ref=e105]:
            - listitem [ref=e106]:
              - link "Blogs" [ref=e107] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e108]:
              - link "Benchmarks" [ref=e109] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e110]:
              - link "News & Media" [ref=e111] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e112]:
              - link "Patents" [ref=e113] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e114]:
              - link "Research" [ref=e115] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e117]:
          - link "Documentation" [ref=e118] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e120]:
          - listitem [ref=e121]:
            - link "About us" [ref=e122] [cursor=pointer]:
              - /url: /about
        - list [ref=e124]:
          - listitem [ref=e125]:
            - link "Pricing" [ref=e126] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e127]:
        - paragraph [ref=e128]: Follow us on
        - generic [ref=e129]:
          - link [ref=e130] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e131]
          - link [ref=e133] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e134]
          - link [ref=e136] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e137]
          - link [ref=e139] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e140]
      - generic [ref=e142]:
        - paragraph [ref=e143]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e144]:
          - link "Privacy" [ref=e145] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e146] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e147] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e148] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e149] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e150]
  - iframe [ref=e153]:
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
     |                                                                                      ^ Error: 18 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```