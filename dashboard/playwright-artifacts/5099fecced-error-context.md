# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/deployment/design.spec.js >> Product - Deployment design compliance >> Figma design compliance
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
      - heading "Deploy Anywhere, Your Way" [level=1] [ref=e40]
      - heading "Flexible deployment options for your security, performance, and compliance needs." [level=2] [ref=e41]
    - generic [ref=e43]:
      - generic [ref=e44]:
        - generic [ref=e45]:
          - img [ref=e47]
          - heading "Cloud" [level=3] [ref=e49]
        - paragraph [ref=e50]: Fully managed infrastructure for rapid deployment and effortless scaling.
        - heading "Capabilities" [level=4] [ref=e51]
        - list [ref=e52]:
          - listitem [ref=e53]:
            - img [ref=e54]
            - generic [ref=e56]: Zero infrastructure management
          - listitem [ref=e57]:
            - img [ref=e58]
            - generic [ref=e60]: Instant auto-scaling
          - listitem [ref=e61]:
            - img [ref=e62]
            - generic [ref=e64]: Global low-latency access
        - generic [ref=e65]:
          - heading "Ideal for:" [level=5] [ref=e66]
          - paragraph [ref=e67]: Startups and fast-growing companies prioritizing speed to market.
      - generic [ref=e68]:
        - generic [ref=e69]:
          - img [ref=e71]
          - heading "Edge" [level=3] [ref=e76]
        - paragraph [ref=e77]: Ultra-low latency processing at the network edge.
        - heading "Capabilities" [level=4] [ref=e78]
        - list [ref=e79]:
          - listitem [ref=e80]:
            - img [ref=e81]
            - generic [ref=e83]: Regional data residency
          - listitem [ref=e84]:
            - img [ref=e85]
            - generic [ref=e87]: Reduced bandwidth costs
          - listitem [ref=e88]:
            - img [ref=e89]
            - generic [ref=e91]: Continues during network disruptions
        - generic [ref=e93]:
          - heading "Ideal for:" [level=5] [ref=e94]
          - paragraph [ref=e95]: Real-time applications, IoT, telecom, and multi-region deployments.
      - generic [ref=e96]:
        - generic [ref=e97]:
          - img [ref=e99]
          - heading "On-Premises" [level=3] [ref=e101]
        - paragraph [ref=e102]: Complete control within your infrastructure.
        - heading "Capabilities" [level=4] [ref=e103]
        - list [ref=e104]:
          - listitem [ref=e105]:
            - img [ref=e106]
            - generic [ref=e108]: Full data sovereignty
          - listitem [ref=e109]:
            - img [ref=e110]
            - generic [ref=e112]: Air-gapped deployment option
          - listitem [ref=e113]:
            - img [ref=e114]
            - generic [ref=e116]: Custom security integration
        - generic [ref=e118]:
          - heading "Ideal for:" [level=5] [ref=e119]
          - paragraph [ref=e120]: Startups and fast-growing companies prioritizing speed to market.
    - link "Contact Us" [ref=e122] [cursor=pointer]:
      - /url: /contact
    - contentinfo [ref=e123]:
      - generic [ref=e124]:
        - paragraph [ref=e125]: The fastest way to add voice AI to your products
        - paragraph [ref=e126]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e127]:
          - link "Go to Pricing page" [ref=e128] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e129] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e130]:
      - generic [ref=e131]:
        - generic [ref=e132]:
          - img "Shunya Labs" [ref=e133]
          - paragraph [ref=e134]: Shunya Labs, Inc.
        - generic [ref=e135]:
          - paragraph [ref=e136]: Product
          - list [ref=e137]:
            - listitem [ref=e138]:
              - link "Overview" [ref=e139] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e140]:
              - link "Models" [ref=e141] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e142]:
              - link "Voice Agents" [ref=e143] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e144]:
              - link "Speech Intelligence" [ref=e145] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e146]:
              - link "Audio Processing" [ref=e147] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e148]:
              - link "Deployment" [ref=e149] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e150]:
          - paragraph [ref=e151]: Models
          - list [ref=e152]:
            - listitem [ref=e153]:
              - link "Language Models" [ref=e154] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e155]:
              - link "Zero STT Indic" [ref=e156] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e157]:
              - link "Zero STT Codeswitch" [ref=e158] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e159]:
              - link "Specialised Models" [ref=e160] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e161]:
              - link "Zero STT Med" [ref=e162] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e163]:
              - link "On Device Models" [ref=e164] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e165]:
          - paragraph [ref=e166]: Solutions
          - list [ref=e167]:
            - listitem [ref=e168]:
              - link "Contact Centers" [ref=e169] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e170]:
              - link "Media & Entertainment" [ref=e171] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e172]:
              - link "Healthcare" [ref=e173] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e174]:
          - paragraph [ref=e175]: Resources
          - list [ref=e176]:
            - listitem [ref=e177]:
              - link "Blogs" [ref=e178] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e179]:
              - link "Benchmarks" [ref=e180] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e181]:
              - link "News & Media" [ref=e182] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e183]:
              - link "Patents" [ref=e184] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e185]:
              - link "Research" [ref=e186] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e188]:
          - link "Documentation" [ref=e189] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e191]:
          - listitem [ref=e192]:
            - link "About us" [ref=e193] [cursor=pointer]:
              - /url: /about
        - list [ref=e195]:
          - listitem [ref=e196]:
            - link "Pricing" [ref=e197] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e198]:
        - paragraph [ref=e199]: Follow us on
        - generic [ref=e200]:
          - link [ref=e201] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e202]
          - link [ref=e204] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e205]
          - link [ref=e207] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e208]
          - link [ref=e210] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e211]
      - generic [ref=e213]:
        - paragraph [ref=e214]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e215]:
          - link "Privacy" [ref=e216] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e217] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e218] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e219] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e220] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e221]
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