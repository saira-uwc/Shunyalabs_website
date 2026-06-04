# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/deployment/design.spec.js >> Product - Deployment design compliance >> Figma design compliance
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
      - heading "Deploy Anywhere, Your Way" [level=1] [ref=e38]
      - heading "Flexible deployment options for your security, performance, and compliance needs." [level=2] [ref=e39]
    - generic [ref=e41]:
      - generic [ref=e42]:
        - generic [ref=e43]:
          - img [ref=e45]
          - heading "Cloud" [level=3] [ref=e47]
        - paragraph [ref=e48]: Fully managed infrastructure for rapid deployment and effortless scaling.
        - heading "Capabilities" [level=4] [ref=e49]
        - list [ref=e50]:
          - listitem [ref=e51]:
            - img [ref=e52]
            - generic [ref=e54]: Zero infrastructure management
          - listitem [ref=e55]:
            - img [ref=e56]
            - generic [ref=e58]: Instant auto-scaling
          - listitem [ref=e59]:
            - img [ref=e60]
            - generic [ref=e62]: Global low-latency access
        - generic [ref=e63]:
          - heading "Ideal for:" [level=5] [ref=e64]
          - paragraph [ref=e65]: Startups and fast-growing companies prioritizing speed to market.
      - generic [ref=e66]:
        - generic [ref=e67]:
          - img [ref=e69]
          - heading "Edge" [level=3] [ref=e74]
        - paragraph [ref=e75]: Ultra-low latency processing at the network edge.
        - heading "Capabilities" [level=4] [ref=e76]
        - list [ref=e77]:
          - listitem [ref=e78]:
            - img [ref=e79]
            - generic [ref=e81]: Regional data residency
          - listitem [ref=e82]:
            - img [ref=e83]
            - generic [ref=e85]: Reduced bandwidth costs
          - listitem [ref=e86]:
            - img [ref=e87]
            - generic [ref=e89]: Continues during network disruptions
        - generic [ref=e91]:
          - heading "Ideal for:" [level=5] [ref=e92]
          - paragraph [ref=e93]: Real-time applications, IoT, telecom, and multi-region deployments.
      - generic [ref=e94]:
        - generic [ref=e95]:
          - img [ref=e97]
          - heading "On-Premises" [level=3] [ref=e99]
        - paragraph [ref=e100]: Complete control within your infrastructure.
        - heading "Capabilities" [level=4] [ref=e101]
        - list [ref=e102]:
          - listitem [ref=e103]:
            - img [ref=e104]
            - generic [ref=e106]: Full data sovereignty
          - listitem [ref=e107]:
            - img [ref=e108]
            - generic [ref=e110]: Air-gapped deployment option
          - listitem [ref=e111]:
            - img [ref=e112]
            - generic [ref=e114]: Custom security integration
        - generic [ref=e116]:
          - heading "Ideal for:" [level=5] [ref=e117]
          - paragraph [ref=e118]: Startups and fast-growing companies prioritizing speed to market.
    - link "Contact Us" [ref=e120] [cursor=pointer]:
      - /url: /contact
    - contentinfo [ref=e121]:
      - generic [ref=e122]:
        - paragraph [ref=e123]: The fastest way to add voice AI to your products
        - paragraph [ref=e124]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e125]:
          - link "Go to Pricing page" [ref=e126] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e127] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e128]:
      - generic [ref=e129]:
        - generic [ref=e130]:
          - img "Shunya Labs" [ref=e131]
          - paragraph [ref=e132]: Shunya Labs, Inc.
        - generic [ref=e133]:
          - paragraph [ref=e134]: Product
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "Overview" [ref=e137] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e138]:
              - link "Models" [ref=e139] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e140]:
              - link "Voice Agents" [ref=e141] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e142]:
              - link "Speech Intelligence" [ref=e143] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e144]:
              - link "Audio Processing" [ref=e145] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e146]:
              - link "Deployment" [ref=e147] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e148]:
          - paragraph [ref=e149]: Models
          - list [ref=e150]:
            - listitem [ref=e151]:
              - link "Language Models" [ref=e152] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e153]:
              - link "Zero STT Indic" [ref=e154] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e155]:
              - link "Zero STT Codeswitch" [ref=e156] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e157]:
              - link "Specialised Models" [ref=e158] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e159]:
              - link "Zero STT Med" [ref=e160] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e161]:
              - link "On Device Models" [ref=e162] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e163]:
          - paragraph [ref=e164]: Solutions
          - list [ref=e165]:
            - listitem [ref=e166]:
              - link "Contact Centers" [ref=e167] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e168]:
              - link "Media & Entertainment" [ref=e169] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e170]:
              - link "Healthcare" [ref=e171] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e172]:
          - paragraph [ref=e173]: Resources
          - list [ref=e174]:
            - listitem [ref=e175]:
              - link "Blogs" [ref=e176] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e177]:
              - link "Benchmarks" [ref=e178] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e179]:
              - link "News & Media" [ref=e180] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e181]:
              - link "Patents" [ref=e182] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e183]:
              - link "Research" [ref=e184] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e186]:
          - link "Documentation" [ref=e187] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e189]:
          - listitem [ref=e190]:
            - link "About us" [ref=e191] [cursor=pointer]:
              - /url: /about
        - list [ref=e193]:
          - listitem [ref=e194]:
            - link "Pricing" [ref=e195] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e196]:
        - paragraph [ref=e197]: Follow us on
        - generic [ref=e198]:
          - link [ref=e199] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e200]
          - link [ref=e202] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e203]
          - link [ref=e205] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e206]
          - link [ref=e208] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e209]
      - generic [ref=e211]:
        - paragraph [ref=e212]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e213]:
          - link "Privacy" [ref=e214] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e215] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e216] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e217] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e218] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e219]
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