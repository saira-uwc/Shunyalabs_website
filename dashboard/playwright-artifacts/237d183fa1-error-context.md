# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/product/deployment/design.spec.js >> Product - Deployment design compliance >> Figma design compliance
- Location: tests/modules/product/deployment/design.spec.js:13:3

# Error details

```
Error: [content] Page title: expected "Voice AI Deployment Options – Cloud, On-Prem & Edge | Shunya Labs" but got "Voice AI Deployment: Cloud, Edge & On-Prem | Shunya Labs"

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
    - generic [ref=e35]:
      - heading "Deploy Anywhere, Your Way" [level=1] [ref=e36]
      - heading "Flexible deployment options for your security, performance, and compliance needs." [level=2] [ref=e37]
    - generic [ref=e39]:
      - generic [ref=e40]:
        - generic [ref=e41]:
          - img [ref=e43]
          - heading "Cloud" [level=3] [ref=e45]
        - paragraph [ref=e46]: Fully managed infrastructure for rapid deployment and effortless scaling.
        - heading "Capabilities" [level=4] [ref=e47]
        - list [ref=e48]:
          - listitem [ref=e49]:
            - img [ref=e50]
            - generic [ref=e52]: Zero infrastructure management
          - listitem [ref=e53]:
            - img [ref=e54]
            - generic [ref=e56]: Instant auto-scaling
          - listitem [ref=e57]:
            - img [ref=e58]
            - generic [ref=e60]: Global low-latency access
        - generic [ref=e61]:
          - heading "Ideal for:" [level=5] [ref=e62]
          - paragraph [ref=e63]: Startups and fast-growing companies prioritizing speed to market.
      - generic [ref=e64]:
        - generic [ref=e65]:
          - img [ref=e67]
          - heading "Edge" [level=3] [ref=e72]
        - paragraph [ref=e73]: Ultra-low latency processing at the network edge.
        - heading "Capabilities" [level=4] [ref=e74]
        - list [ref=e75]:
          - listitem [ref=e76]:
            - img [ref=e77]
            - generic [ref=e79]: Regional data residency
          - listitem [ref=e80]:
            - img [ref=e81]
            - generic [ref=e83]: Reduced bandwidth costs
          - listitem [ref=e84]:
            - img [ref=e85]
            - generic [ref=e87]: Continues during network disruptions
        - generic [ref=e89]:
          - heading "Ideal for:" [level=5] [ref=e90]
          - paragraph [ref=e91]: Real-time applications, IoT, telecom, and multi-region deployments.
      - generic [ref=e92]:
        - generic [ref=e93]:
          - img [ref=e95]
          - heading "On-Premises" [level=3] [ref=e97]
        - paragraph [ref=e98]: Complete control within your infrastructure.
        - heading "Capabilities" [level=4] [ref=e99]
        - list [ref=e100]:
          - listitem [ref=e101]:
            - img [ref=e102]
            - generic [ref=e104]: Full data sovereignty
          - listitem [ref=e105]:
            - img [ref=e106]
            - generic [ref=e108]: Air-gapped deployment option
          - listitem [ref=e109]:
            - img [ref=e110]
            - generic [ref=e112]: Custom security integration
        - generic [ref=e114]:
          - heading "Ideal for:" [level=5] [ref=e115]
          - paragraph [ref=e116]: Startups and fast-growing companies prioritizing speed to market.
    - link "Contact Us" [ref=e118] [cursor=pointer]:
      - /url: /contact
    - contentinfo [ref=e119]:
      - generic [ref=e123]:
        - paragraph [ref=e124]: The fastest way to add voice AI to your products
        - paragraph [ref=e125]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e126]:
          - link "Go to Pricing page" [ref=e127] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e128] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e129]:
      - generic [ref=e130]:
        - generic [ref=e131]:
          - img "Shunya Labs" [ref=e132]
          - paragraph [ref=e133]: Shunya Labs, Inc.
        - generic [ref=e134]:
          - paragraph [ref=e135]: Product
          - list [ref=e136]:
            - listitem [ref=e137]:
              - link "Overview" [ref=e138] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e139]:
              - link "Models" [ref=e140] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e141]:
              - link "Voice Agents" [ref=e142] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e143]:
              - link "Speech Intelligence" [ref=e144] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e145]:
              - link "Audio Processing" [ref=e146] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e147]:
              - link "Deployment" [ref=e148] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e149]:
          - paragraph [ref=e150]: Models
          - list [ref=e151]:
            - listitem [ref=e152]:
              - link "Language Models" [ref=e153] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e154]:
              - link "Zero STT Indic" [ref=e155] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e156]:
              - link "Zero STT Codeswitch" [ref=e157] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e158]:
              - link "Specialised Models" [ref=e159] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e160]:
              - link "Zero STT Med" [ref=e161] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e162]:
              - link "On Device Models" [ref=e163] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e164]:
          - paragraph [ref=e165]: Solutions
          - list [ref=e166]:
            - listitem [ref=e167]:
              - link "Contact Centers" [ref=e168] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e169]:
              - link "Media & Entertainment" [ref=e170] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e171]:
              - link "Healthcare" [ref=e172] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e173]:
          - paragraph [ref=e174]: Resources
          - list [ref=e175]:
            - listitem [ref=e176]:
              - link "Blogs" [ref=e177] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e178]:
              - link "Benchmarks" [ref=e179] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e180]:
              - link "News & Media" [ref=e181] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e182]:
              - link "Patents" [ref=e183] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e184]:
              - link "Research" [ref=e185] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e187]:
          - link "Documentation" [ref=e188] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e190]:
          - listitem [ref=e191]:
            - link "About us" [ref=e192] [cursor=pointer]:
              - /url: /about
        - list [ref=e194]:
          - listitem [ref=e195]:
            - link "Pricing" [ref=e196] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e197]:
        - paragraph [ref=e198]: Follow us on
        - generic [ref=e199]:
          - link [ref=e200] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e201]
          - link [ref=e203] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e204]
          - link [ref=e206] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e207]
          - link [ref=e209] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e210]
      - generic [ref=e212]:
        - paragraph [ref=e213]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e214]:
          - link "Privacy" [ref=e215] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e216] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e217] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e218] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e219] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e220]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { pageRegistry } from '../../../../test-data/page-registry.js';
  3  | import { runDesignComplianceTest } from '../../../../utils/design-validator.js';
  4  | 
  5  | const pageEntry = pageRegistry.find(
  6  |   (page) => page.moduleKey === 'product' && page.slug === 'deployment'
  7  | );
  8  | 
  9  | const moduleLabel = pageEntry?.moduleLabel || 'product';
  10 | const pageLabel = pageEntry?.pageLabel || 'deployment';
  11 | 
  12 | test.describe(`${moduleLabel} - ${pageLabel} design compliance`, () => {
  13 |   test('Figma design compliance', async ({ page }) => {
  14 |     const failures = await runDesignComplianceTest({ page, pageEntry });
  15 | 
  16 |     for (const f of failures) {
  17 |       expect.soft(null, `[${f.section}] ${f.message}`).toBeTruthy();
  18 |     }
  19 | 
> 20 |     expect(failures.length, `${failures.length} design compliance issue(s) found`).toBe(0);
     |                                                                                    ^ Error: 1 design compliance issue(s) found
  21 |   });
  22 | });
  23 | 
```