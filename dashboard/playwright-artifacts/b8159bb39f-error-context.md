# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/contact-centers/design.spec.js >> Solutions - Contact Centers design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Text content "© 2026 Shunya Labs, Inc. All rights reserved." not found on page

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
  - generic [ref=e2]:
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
        - heading "Intelligence That Listens. APIs That Power Contact Centers" [level=1] [ref=e36]
        - paragraph [ref=e37]: Real-time transcription, analytics, and voice automation — plug-and-play intelligence for every conversation.
        - link "Live Demo" [ref=e38] [cursor=pointer]:
          - /url: /
          - button "Live Demo" [ref=e39]:
            - img [ref=e40]
            - text: Live Demo
      - generic [ref=e42]:
        - generic [ref=e44]:
          - heading "End-to-end support infra—secure, compliant, structured" [level=2] [ref=e46]
          - generic [ref=e47]:
            - generic [ref=e48]:
              - generic [ref=e50]:
                - generic [ref=e51] [cursor=pointer]:
                  - heading "Get structured data" [level=3] [ref=e52]
                  - paragraph [ref=e53]: Convert messages & attachments to structured fields with smart OCR + LLM reasoning. Pull out intent, product, issue type, account data, and promised actions—export as CRM/ITSM-ready JSON.
                - generic [ref=e54] [cursor=pointer]:
                  - heading "QA & compliance" [level=3] [ref=e55]
                  - paragraph [ref=e56]: Auto-check script adherence and policies, redact card details and personal data, and keep full trails with audit-friendly logs.
                - generic [ref=e57] [cursor=pointer]:
                  - heading "Secure by design" [level=3] [ref=e58]
                  - paragraph [ref=e59]: Deploy in your private cloud or on-premises. CPU-efficient, cost-controlled, and built for strict privacy and uptime.
              - button "Try Now" [ref=e60] [cursor=pointer]
            - img "End-to-end support infra—secure, compliant, structured" [ref=e63]
        - generic [ref=e65]:
          - heading "Equip agents to win and lift your CSAT" [level=2] [ref=e67]
          - generic [ref=e68]:
            - generic [ref=e69]:
              - generic [ref=e71]:
                - generic [ref=e72] [cursor=pointer]:
                  - heading "Cue agents in real-time" [level=3] [ref=e73]
                  - paragraph [ref=e74]: Live captions, knowledge-base lookups, and “next best response” with steady sub-second speed. Embed in any agent desktop or cloud contact-center platform.
                - generic [ref=e75] [cursor=pointer]:
                  - heading "Automate procedures" [level=3] [ref=e76]
                  - paragraph [ref=e77]: Detect intent and complete common requests end-to-end. Smart routing sends complex cases to the right expert—no dropped balls.
                - generic [ref=e78] [cursor=pointer]:
                  - heading "Understand every customer" [level=3] [ref=e79]
                  - paragraph [ref=e80]: Transcripts in 120+ languages—accent-aware, and code-switching smart—built for real-world noise.
              - button "Try Now" [ref=e81] [cursor=pointer]
            - img "Equip agents to win and lift your CSAT" [ref=e84]
        - generic [ref=e86]:
          - heading "Get post-call intelligence to see the bigger picture" [level=2] [ref=e88]
          - generic [ref=e89]:
            - generic [ref=e90]:
              - generic [ref=e92]:
                - generic [ref=e93] [cursor=pointer]:
                  - heading "Analytics" [level=3] [ref=e94]
                  - paragraph [ref=e95]: Auto-generate call summaries, sentiment, topics, and trends with searchable transcripts—export to QA tools and your data lake.
                - generic [ref=e96] [cursor=pointer]:
                  - heading "Insights-driven coaching" [level=3] [ref=e97]
                  - paragraph [ref=e98]: Get sentiment analysis and trends from every transcript and turn knowledge from every conversation into agent coaching that lifts performance in real time.
                - generic [ref=e99] [cursor=pointer]:
                  - heading "Be future ready with features" [level=3] [ref=e100]
                  - paragraph [ref=e101]: Partner with an R&D leader—continuous model upgrades and new features without re-platforming.
              - button "Try Now" [ref=e102] [cursor=pointer]
            - img "Get post-call intelligence to see the bigger picture" [ref=e105]
    - contentinfo [ref=e106]:
      - generic [ref=e107]:
        - paragraph [ref=e108]: Get Started
        - paragraph [ref=e109]: Make your call center smart and future ready today.
        - generic [ref=e110]:
          - link "Try for Free" [ref=e111] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e112] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e113]:
      - generic [ref=e114]:
        - generic [ref=e115]:
          - img "Shunya Labs" [ref=e116]
          - paragraph [ref=e117]: Shunya Labs, Inc.
        - generic [ref=e118]:
          - paragraph [ref=e119]: Product
          - list [ref=e120]:
            - listitem [ref=e121]:
              - link "Overview" [ref=e122] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e123]:
              - link "Models" [ref=e124] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e125]:
              - link "Voice Agents" [ref=e126] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e127]:
              - link "Speech Intelligence" [ref=e128] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e129]:
              - link "Audio Processing" [ref=e130] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e131]:
              - link "Deployment" [ref=e132] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e133]:
          - paragraph [ref=e134]: Models
          - list [ref=e135]:
            - listitem [ref=e136]:
              - link "Language Models" [ref=e137] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e138]:
              - link "Zero STT Indic" [ref=e139] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e140]:
              - link "Zero STT Codeswitch" [ref=e141] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e142]:
              - link "Specialised Models" [ref=e143] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e144]:
              - link "Zero STT Med" [ref=e145] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e146]:
              - link "On Device Models" [ref=e147] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e148]:
          - paragraph [ref=e149]: Solutions
          - list [ref=e150]:
            - listitem [ref=e151]:
              - link "Contact Centers" [ref=e152] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e153]:
              - link "Media & Entertainment" [ref=e154] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e155]:
              - link "Healthcare" [ref=e156] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e157]:
          - paragraph [ref=e158]: Resources
          - list [ref=e159]:
            - listitem [ref=e160]:
              - link "Blogs" [ref=e161] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e162]:
              - link "Benchmarks" [ref=e163] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e164]:
              - link "News & Media" [ref=e165] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e166]:
              - link "Patents" [ref=e167] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e168]:
              - link "Research" [ref=e169] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e171]:
          - link "Documentation" [ref=e172] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e174]:
          - listitem [ref=e175]:
            - link "About us" [ref=e176] [cursor=pointer]:
              - /url: /about
        - list [ref=e178]:
          - listitem [ref=e179]:
            - link "Pricing" [ref=e180] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e181]:
        - paragraph [ref=e182]: Follow us on
        - generic [ref=e183]:
          - link [ref=e184] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e185]
          - link [ref=e187] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e188]
          - link [ref=e190] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e191]
          - link [ref=e193] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e194]
      - generic [ref=e196]:
        - paragraph [ref=e197]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e198]:
          - link "Privacy" [ref=e199] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e200] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e201] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e202] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e203] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e204]
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