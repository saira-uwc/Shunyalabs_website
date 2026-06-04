# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/research/design.spec.js >> Resources - Research design compliance >> Figma design compliance
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
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e4]:
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
        - generic [ref=e28]:
          - link "Playground" [ref=e29] [cursor=pointer]:
            - /url: https://playground.shunyalabs.ai/
            - img [ref=e30]
            - text: Playground
          - generic [ref=e32]:
            - button "Sign In" [ref=e33] [cursor=pointer]
            - link "Contact Sales" [ref=e34] [cursor=pointer]:
              - /url: /contact
    - generic [ref=e35]:
      - heading "Our Research" [level=1] [ref=e37]
      - generic [ref=e38]:
        - link "RESEARCH PAPERS LLMs Will Always Hallucinate, and We Need to Live With This 1 February, 2024" [ref=e39] [cursor=pointer]:
          - /url: https://arxiv.org/abs/2409.05746
          - generic [ref=e40]:
            - generic [ref=e41]:
              - img [ref=e42]
              - generic [ref=e45]: RESEARCH PAPERS
            - heading "LLMs Will Always Hallucinate, and We Need to Live With This" [level=3] [ref=e46]
          - generic [ref=e47]:
            - generic [ref=e48]: 1 February, 2024
            - img [ref=e50]
        - 'link "RESEARCH PAPERS The Vulnerability of Language Model Benchmarks: Do They Accurately Reflect True LLM Performance? 2 December, 2024" [ref=e53] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.03597
          - generic [ref=e54]:
            - generic [ref=e55]:
              - img [ref=e56]
              - generic [ref=e59]: RESEARCH PAPERS
            - 'heading "The Vulnerability of Language Model Benchmarks: Do They Accurately Reflect True LLM Performance?" [level=3] [ref=e60]'
          - generic [ref=e61]:
            - generic [ref=e62]: 2 December, 2024
            - img [ref=e64]
        - 'link "RESEARCH PAPERS High-precision medical speech recognition through synthetic data and semantic correction: UNITED-MEDASR 24 November, 2024" [ref=e67] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.00055
          - generic [ref=e68]:
            - generic [ref=e69]:
              - img [ref=e70]
              - generic [ref=e73]: RESEARCH PAPERS
            - 'heading "High-precision medical speech recognition through synthetic data and semantic correction: UNITED-MEDASR" [level=3] [ref=e74]'
          - generic [ref=e75]:
            - generic [ref=e76]: 24 November, 2024
            - img [ref=e78]
        - 'link "RESEARCH PAPERS First Train to Generate, then Generate to Train: UnitedSynT5 for Few-Shot NLI 12 December, 2024" [ref=e81] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.09263
          - generic [ref=e82]:
            - generic [ref=e83]:
              - img [ref=e84]
              - generic [ref=e87]: RESEARCH PAPERS
            - 'heading "First Train to Generate, then Generate to Train: UnitedSynT5 for Few-Shot NLI" [level=3] [ref=e88]'
          - generic [ref=e89]:
            - generic [ref=e90]: 12 December, 2024
            - img [ref=e92]
        - 'link "RESEARCH PAPERS Securing Well-Being: Exploring Security Protocols and Mitigating Risks in AI-Driven Mental Health Chatbots for Employees 1 January, 2024" [ref=e95] [cursor=pointer]':
          - /url: https://www.researchgate.net/publication/377513888_Securing_Well-Being_Exploring_Security_Protocols_and_Mitigating_Risks_in_AI-Driven_Mental_Health_Chatbots_for_Employees
          - generic [ref=e96]:
            - generic [ref=e97]:
              - img [ref=e98]
              - generic [ref=e101]: RESEARCH PAPERS
            - 'heading "Securing Well-Being: Exploring Security Protocols and Mitigating Risks in AI-Driven Mental Health Chatbots for Employees" [level=3] [ref=e102]'
          - generic [ref=e103]:
            - generic [ref=e104]: 1 January, 2024
            - img [ref=e106]
        - 'link "RESEARCH PAPERS Chatbot-Enhanced Mental Health First Aid in Corporate Settings: Addressing Risks, Implementing Crisis Management, and Promoting Employee Well-Being 10 November, 2024" [ref=e109] [cursor=pointer]':
          - /url: https://www.researchgate.net/publication/377508078_Chatbot-Enhanced_Mental_Health_First_Aid_in_Corporate_Settings_Addressing_Risks_Implementing_Crisis_Management_and_Promoting_Employee_Well-Being
          - generic [ref=e110]:
            - generic [ref=e111]:
              - img [ref=e112]
              - generic [ref=e115]: RESEARCH PAPERS
            - 'heading "Chatbot-Enhanced Mental Health First Aid in Corporate Settings: Addressing Risks, Implementing Crisis Management, and Promoting Employee Well-Being" [level=3] [ref=e116]'
          - generic [ref=e117]:
            - generic [ref=e118]: 10 November, 2024
            - img [ref=e120]
        - 'link "RESEARCH PAPERS Boosting Workplace Well-Being: A Novel Approach with a Mental Health Chatbot for Employee Engagement and Satisfaction 12 January, 2024" [ref=e123] [cursor=pointer]':
          - /url: https://www.researchgate.net/publication/377510582_Boosting_Workplace_Well-Being_A_Novel_Approach_with_a_Mental_Health_Chatbot_for_Employee_Engagement_and_Satisfaction
          - generic [ref=e124]:
            - generic [ref=e125]:
              - img [ref=e126]
              - generic [ref=e129]: RESEARCH PAPERS
            - 'heading "Boosting Workplace Well-Being: A Novel Approach with a Mental Health Chatbot for Employee Engagement and Satisfaction" [level=3] [ref=e130]'
          - generic [ref=e131]:
            - generic [ref=e132]: 12 January, 2024
            - img [ref=e134]
    - contentinfo [ref=e137]:
      - generic [ref=e138]:
        - generic [ref=e139]:
          - img "Shunya Labs" [ref=e140]
          - paragraph [ref=e141]: Shunya Labs, Inc.
        - generic [ref=e142]:
          - paragraph [ref=e143]: Product
          - list [ref=e144]:
            - listitem [ref=e145]:
              - link "Overview" [ref=e146] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e147]:
              - link "Models" [ref=e148] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e149]:
              - link "Voice Agents" [ref=e150] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e151]:
              - link "Speech Intelligence" [ref=e152] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e153]:
              - link "Audio Processing" [ref=e154] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e155]:
              - link "Deployment" [ref=e156] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e157]:
          - paragraph [ref=e158]: Models
          - list [ref=e159]:
            - listitem [ref=e160]:
              - link "Language Models" [ref=e161] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e162]:
              - link "Zero STT Indic" [ref=e163] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e164]:
              - link "Zero STT Codeswitch" [ref=e165] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e166]:
              - link "Specialised Models" [ref=e167] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e168]:
              - link "Zero STT Med" [ref=e169] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e170]:
              - link "On Device Models" [ref=e171] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e172]:
          - paragraph [ref=e173]: Solutions
          - list [ref=e174]:
            - listitem [ref=e175]:
              - link "Contact Centers" [ref=e176] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e177]:
              - link "Media & Entertainment" [ref=e178] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e179]:
              - link "Healthcare" [ref=e180] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e181]:
          - paragraph [ref=e182]: Resources
          - list [ref=e183]:
            - listitem [ref=e184]:
              - link "Blogs" [ref=e185] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e186]:
              - link "Benchmarks" [ref=e187] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e188]:
              - link "News & Media" [ref=e189] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e190]:
              - link "Patents" [ref=e191] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e192]:
              - link "Research" [ref=e193] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e195]:
          - link "Documentation" [ref=e196] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e198]:
          - listitem [ref=e199]:
            - link "About us" [ref=e200] [cursor=pointer]:
              - /url: /about
        - list [ref=e202]:
          - listitem [ref=e203]:
            - link "Pricing" [ref=e204] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e205]:
        - paragraph [ref=e206]: Follow us on
        - generic [ref=e207]:
          - link [ref=e208] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e209]
          - link [ref=e211] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e212]
          - link [ref=e214] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e215]
          - link [ref=e217] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e218]
      - generic [ref=e220]:
        - paragraph [ref=e221]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e222]:
          - link "Privacy" [ref=e223] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e224] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e225] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e226] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e227] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e228]
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