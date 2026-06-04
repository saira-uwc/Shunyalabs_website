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
      - heading "Deploy Anywhere, Your Way" [level=1] [ref=e12]
      - heading "Flexible deployment options for your security, performance, and compliance needs." [level=2] [ref=e13]
    - generic [ref=e15]:
      - generic [ref=e16]:
        - generic [ref=e17]:
          - img [ref=e19]
          - heading "Cloud" [level=3] [ref=e21]
        - paragraph [ref=e22]: Fully managed infrastructure for rapid deployment and effortless scaling.
        - heading "Capabilities" [level=4] [ref=e23]
        - list [ref=e24]:
          - listitem [ref=e25]:
            - img [ref=e26]
            - generic [ref=e28]: Zero infrastructure management
          - listitem [ref=e29]:
            - img [ref=e30]
            - generic [ref=e32]: Instant auto-scaling
          - listitem [ref=e33]:
            - img [ref=e34]
            - generic [ref=e36]: Global low-latency access
        - generic [ref=e37]:
          - heading "Ideal for:" [level=5] [ref=e38]
          - paragraph [ref=e39]: Startups and fast-growing companies prioritizing speed to market.
      - generic [ref=e40]:
        - generic [ref=e41]:
          - img [ref=e43]
          - heading "Edge" [level=3] [ref=e48]
        - paragraph [ref=e49]: Ultra-low latency processing at the network edge.
        - heading "Capabilities" [level=4] [ref=e50]
        - list [ref=e51]:
          - listitem [ref=e52]:
            - img [ref=e53]
            - generic [ref=e55]: Regional data residency
          - listitem [ref=e56]:
            - img [ref=e57]
            - generic [ref=e59]: Reduced bandwidth costs
          - listitem [ref=e60]:
            - img [ref=e61]
            - generic [ref=e63]: Continues during network disruptions
        - generic [ref=e64]:
          - heading "Ideal for:" [level=5] [ref=e65]
          - paragraph [ref=e66]: Real-time applications, IoT, telecom, and multi-region deployments.
      - generic [ref=e67]:
        - generic [ref=e68]:
          - img [ref=e70]
          - heading "On-Premises" [level=3] [ref=e72]
        - paragraph [ref=e73]: Complete control within your infrastructure.
        - heading "Capabilities" [level=4] [ref=e74]
        - list [ref=e75]:
          - listitem [ref=e76]:
            - img [ref=e77]
            - generic [ref=e79]: Full data sovereignty
          - listitem [ref=e80]:
            - img [ref=e81]
            - generic [ref=e83]: Air-gapped deployment option
          - listitem [ref=e84]:
            - img [ref=e85]
            - generic [ref=e87]: Custom security integration
        - generic [ref=e88]:
          - heading "Ideal for:" [level=5] [ref=e89]
          - paragraph [ref=e90]: Startups and fast-growing companies prioritizing speed to market.
    - link "Contact Us" [ref=e92] [cursor=pointer]:
      - /url: /contact
    - contentinfo [ref=e93]:
      - generic [ref=e94]:
        - paragraph [ref=e95]: The fastest way to add voice AI to your products
        - paragraph [ref=e96]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e97]:
          - link "Go to Pricing page" [ref=e98] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e99] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e100]:
      - generic [ref=e101]:
        - generic [ref=e102]:
          - img "Shunya Labs" [ref=e103]
          - paragraph [ref=e104]: Shunya Labs, Inc.
        - generic [ref=e105]:
          - paragraph [ref=e106]: Product
          - list [ref=e107]:
            - listitem [ref=e108]:
              - link "Overview" [ref=e109] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e110]:
              - link "Models" [ref=e111] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e112]:
              - link "Voice Agents" [ref=e113] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e114]:
              - link "Speech Intelligence" [ref=e115] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e116]:
              - link "Audio Processing" [ref=e117] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e118]:
              - link "Deployment" [ref=e119] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e120]:
          - paragraph [ref=e121]: Models
          - list [ref=e122]:
            - listitem [ref=e123]:
              - link "Language Models" [ref=e124] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e125]:
              - link "Zero STT Indic" [ref=e126] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e127]:
              - link "Zero STT Codeswitch" [ref=e128] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e129]:
              - link "Specialised Models" [ref=e130] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e131]:
              - link "Zero STT Med" [ref=e132] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e133]:
              - link "On Device Models" [ref=e134] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e135]:
          - paragraph [ref=e136]: Solutions
          - list [ref=e137]:
            - listitem [ref=e138]:
              - link "Contact Centers" [ref=e139] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e140]:
              - link "Media & Entertainment" [ref=e141] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e142]:
              - link "Healthcare" [ref=e143] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e144]:
          - paragraph [ref=e145]: Resources
          - list [ref=e146]:
            - listitem [ref=e147]:
              - link "Blogs" [ref=e148] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e149]:
              - link "Benchmarks" [ref=e150] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e151]:
              - link "News & Media" [ref=e152] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e153]:
              - link "Patents" [ref=e154] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e155]:
              - link "Research" [ref=e156] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e158]:
          - link "Documentation" [ref=e159] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e161]:
          - listitem [ref=e162]:
            - link "About us" [ref=e163] [cursor=pointer]:
              - /url: /about
        - list [ref=e165]:
          - listitem [ref=e166]:
            - link "Pricing" [ref=e167] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e168]:
        - paragraph [ref=e169]: Follow us on
        - generic [ref=e170]:
          - link [ref=e171] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e172]
          - link [ref=e174] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e175]
          - link [ref=e177] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e178]
          - link [ref=e180] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e181]
      - generic [ref=e183]:
        - paragraph [ref=e184]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e185]:
          - link "Privacy" [ref=e186] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e187] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e188] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e189] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e190] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e191]
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