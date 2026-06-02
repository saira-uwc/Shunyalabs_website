# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/contact-centers/design.spec.js >> Solutions - Contact Centers design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Text content "© 2026 Shunya Labs Inc. All rights reserved." not found on page

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
              - text: Documentation
              - img
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
        - heading "Intelligence That Listens. APIs That Power Contact Centers" [level=1] [ref=e12]
        - paragraph [ref=e13]: Real-time transcription, analytics, and voice automation — plug-and-play intelligence for every conversation.
        - link "Live Demo" [ref=e14] [cursor=pointer]:
          - /url: /
          - button "Live Demo" [ref=e15]:
            - img [ref=e16]
            - text: Live Demo
      - generic [ref=e18]:
        - generic [ref=e20]:
          - heading "End-to-end support infra—secure, compliant, structured" [level=2] [ref=e22]
          - generic [ref=e23]:
            - generic [ref=e24]:
              - generic [ref=e26]:
                - generic [ref=e27] [cursor=pointer]:
                  - heading "Get structured data" [level=3] [ref=e28]
                  - paragraph [ref=e29]: Convert messages & attachments to structured fields with smart OCR + LLM reasoning. Pull out intent, product, issue type, account data, and promised actions—export as CRM/ITSM-ready JSON.
                - generic [ref=e30] [cursor=pointer]:
                  - heading "QA & compliance" [level=3] [ref=e31]
                  - paragraph [ref=e32]: Auto-check script adherence and policies, redact card details and personal data, and keep full trails with audit-friendly logs.
                - generic [ref=e33] [cursor=pointer]:
                  - heading "Secure by design" [level=3] [ref=e34]
                  - paragraph [ref=e35]: Deploy in your private cloud or on-premises. CPU-efficient, cost-controlled, and built for strict privacy and uptime.
              - button "Try Now" [ref=e36] [cursor=pointer]
            - img "End-to-end support infra—secure, compliant, structured" [ref=e39]
        - generic [ref=e41]:
          - heading "Equip agents to win and lift your CSAT" [level=2] [ref=e43]
          - generic [ref=e44]:
            - generic [ref=e45]:
              - generic [ref=e47]:
                - generic [ref=e48] [cursor=pointer]:
                  - heading "Cue agents in real-time" [level=3] [ref=e49]
                  - paragraph [ref=e50]: Live captions, knowledge-base lookups, and “next best response” with steady sub-second speed. Embed in any agent desktop or cloud contact-center platform.
                - generic [ref=e51] [cursor=pointer]:
                  - heading "Automate procedures" [level=3] [ref=e52]
                  - paragraph [ref=e53]: Detect intent and complete common requests end-to-end. Smart routing sends complex cases to the right expert—no dropped balls.
                - generic [ref=e54] [cursor=pointer]:
                  - heading "Understand every customer" [level=3] [ref=e55]
                  - paragraph [ref=e56]: Transcripts in 120+ languages—accent-aware, and code-switching smart—built for real-world noise.
              - button "Try Now" [ref=e57] [cursor=pointer]
            - img "Equip agents to win and lift your CSAT" [ref=e60]
        - generic [ref=e62]:
          - heading "Get post-call intelligence to see the bigger picture" [level=2] [ref=e64]
          - generic [ref=e65]:
            - generic [ref=e66]:
              - generic [ref=e68]:
                - generic [ref=e69] [cursor=pointer]:
                  - heading "Analytics" [level=3] [ref=e70]
                  - paragraph [ref=e71]: Auto-generate call summaries, sentiment, topics, and trends with searchable transcripts—export to QA tools and your data lake.
                - generic [ref=e72] [cursor=pointer]:
                  - heading "Insights-driven coaching" [level=3] [ref=e73]
                  - paragraph [ref=e74]: Get sentiment analysis and trends from every transcript and turn knowledge from every conversation into agent coaching that lifts performance in real time.
                - generic [ref=e75] [cursor=pointer]:
                  - heading "Be future ready with features" [level=3] [ref=e76]
                  - paragraph [ref=e77]: Partner with an R&D leader—continuous model upgrades and new features without re-platforming.
              - button "Try Now" [ref=e78] [cursor=pointer]
            - img "Get post-call intelligence to see the bigger picture" [ref=e81]
    - contentinfo [ref=e82]:
      - generic [ref=e83]:
        - paragraph [ref=e84]: Get Started
        - paragraph [ref=e85]: Make your call center smart and future ready today.
        - generic [ref=e86]:
          - link "Try for Free" [ref=e87] [cursor=pointer]:
            - /url: /pricing
          - link "Contact Sales" [ref=e88] [cursor=pointer]:
            - /url: /contact
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