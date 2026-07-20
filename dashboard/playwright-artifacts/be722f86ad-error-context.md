# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/deployment/design.spec.js >> Product - Deployment design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [layout] Section "Cloud" background: expected rgb(11, 11, 15) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

```
Error: [global] Footer background: expected rgb(255, 255, 255) but got rgb(0, 0, 0)

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
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 17 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 17
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
    - generic [ref=e9]:
      - heading "Deploy Anywhere, Your Way" [level=1] [ref=e10]
      - heading "Flexible deployment options for your security, performance, and compliance needs." [level=2] [ref=e11]
    - generic [ref=e13]:
      - generic [ref=e14]:
        - generic [ref=e15]:
          - img [ref=e17]
          - heading "Cloud" [level=3] [ref=e19]
        - paragraph [ref=e20]: Fully managed infrastructure for rapid deployment and effortless scaling.
        - heading "Capabilities" [level=4] [ref=e21]
        - list [ref=e22]:
          - listitem [ref=e23]:
            - img [ref=e24]
            - generic [ref=e26]: Zero infrastructure management
          - listitem [ref=e27]:
            - img [ref=e28]
            - generic [ref=e30]: Instant auto-scaling
          - listitem [ref=e31]:
            - img [ref=e32]
            - generic [ref=e34]: Global low-latency access
        - generic [ref=e35]:
          - heading "Ideal for:" [level=5] [ref=e36]
          - paragraph [ref=e37]: Startups and fast-growing companies prioritizing speed to market.
      - generic [ref=e38]:
        - generic [ref=e39]:
          - img [ref=e41]
          - heading "Edge" [level=3] [ref=e46]
        - paragraph [ref=e47]: Ultra-low latency processing at the network edge.
        - heading "Capabilities" [level=4] [ref=e48]
        - list [ref=e49]:
          - listitem [ref=e50]:
            - img [ref=e51]
            - generic [ref=e53]: Regional data residency
          - listitem [ref=e54]:
            - img [ref=e55]
            - generic [ref=e57]: Reduced bandwidth costs
          - listitem [ref=e58]:
            - img [ref=e59]
            - generic [ref=e61]: Continues during network disruptions
        - generic [ref=e62]:
          - heading "Ideal for:" [level=5] [ref=e63]
          - paragraph [ref=e64]: Real-time applications, IoT, telecom, and multi-region deployments.
      - generic [ref=e65]:
        - generic [ref=e66]:
          - img [ref=e68]
          - heading "On-Premises" [level=3] [ref=e70]
        - paragraph [ref=e71]: Complete control within your infrastructure.
        - heading "Capabilities" [level=4] [ref=e72]
        - list [ref=e73]:
          - listitem [ref=e74]:
            - img [ref=e75]
            - generic [ref=e77]: Full data sovereignty
          - listitem [ref=e78]:
            - img [ref=e79]
            - generic [ref=e81]: Air-gapped deployment option
          - listitem [ref=e82]:
            - img [ref=e83]
            - generic [ref=e85]: Custom security integration
        - generic [ref=e86]:
          - heading "Ideal for:" [level=5] [ref=e87]
          - paragraph [ref=e88]: Startups and fast-growing companies prioritizing speed to market.
    - link "Contact Us" [ref=e90] [cursor=pointer]:
      - /url: /contact
    - contentinfo [ref=e91]:
      - generic [ref=e92]:
        - paragraph [ref=e93]: The fastest way to add voice AI to your products
        - paragraph [ref=e94]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e95]:
          - link "Go to Pricing page" [ref=e96] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e97] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e98]:
      - generic [ref=e99]:
        - generic [ref=e100]:
          - img "Shunya Labs" [ref=e101]
          - paragraph [ref=e102]: Shunya Labs, Inc.
        - generic [ref=e103]:
          - paragraph [ref=e104]: Product
          - list [ref=e105]:
            - listitem [ref=e106]:
              - link "Overview" [ref=e107] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e108]:
              - link "Models" [ref=e109] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e110]:
              - link "Voice Agents" [ref=e111] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e112]:
              - link "Speech Intelligence" [ref=e113] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e114]:
              - link "Audio Processing" [ref=e115] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e116]:
              - link "Deployment" [ref=e117] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e118]:
          - paragraph [ref=e119]: Models
          - list [ref=e120]:
            - listitem [ref=e121]:
              - link "Language Models" [ref=e122] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e123]:
              - link "Zero STT Indic" [ref=e124] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e125]:
              - link "Zero STT Codeswitch" [ref=e126] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e127]:
              - link "Specialised Models" [ref=e128] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e129]:
              - link "Zero STT Med" [ref=e130] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e131]:
              - link "On Device Models" [ref=e132] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e133]:
          - paragraph [ref=e134]: Solutions
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "Contact Centers" [ref=e137] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e138]:
              - link "Media & Entertainment" [ref=e139] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e140]:
              - link "Healthcare" [ref=e141] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e142]:
          - paragraph [ref=e143]: Resources
          - list [ref=e144]:
            - listitem [ref=e145]:
              - link "Blogs" [ref=e146] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e147]:
              - link "Benchmarks" [ref=e148] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e149]:
              - link "News & Media" [ref=e150] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e151]:
              - link "Patents" [ref=e152] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e153]:
              - link "Research" [ref=e154] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e156]:
          - link "Documentation" [ref=e157] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e159]:
          - listitem [ref=e160]:
            - link "About us" [ref=e161] [cursor=pointer]:
              - /url: /about
        - list [ref=e163]:
          - listitem [ref=e164]:
            - link "Pricing" [ref=e165] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e166]:
        - paragraph [ref=e167]: Follow us on
        - generic [ref=e168]:
          - link [ref=e169] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e170]
          - link [ref=e172] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e173]
          - link [ref=e175] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e176]
          - link [ref=e178] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e179]
      - generic [ref=e181]:
        - paragraph [ref=e182]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e183]:
          - link "Privacy" [ref=e184] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e185] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e186] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e187] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e188] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e189]
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
     |                                                                                      ^ Error: 17 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```