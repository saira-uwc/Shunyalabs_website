# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/research/design.spec.js >> Resources - Research design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Footer item "© 2026 Shunya Labs, Inc. All rights reserved." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "© 2026 Shunya Labs, Inc. All rights reserved." not found on page

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
  - generic [ref=e2]:
    - navigation [ref=e3]:
      - generic [ref=e4]:
        - link "Shunya Labs Logo" [ref=e5] [cursor=pointer]:
          - /url: /
          - img "Shunya Labs Logo" [ref=e6]
        - button "☰" [ref=e7] [cursor=pointer]
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
    - generic [ref=e8]:
      - heading "Our Research" [level=1] [ref=e10]
      - generic [ref=e11]:
        - link "RESEARCH PAPERS LLMs Will Always Hallucinate, and We Need to Live With This 1 February, 2024" [ref=e12] [cursor=pointer]:
          - /url: https://arxiv.org/abs/2409.05746
          - generic [ref=e13]:
            - generic [ref=e14]:
              - img [ref=e15]
              - generic [ref=e18]: RESEARCH PAPERS
            - heading "LLMs Will Always Hallucinate, and We Need to Live With This" [level=3] [ref=e19]
          - generic [ref=e20]:
            - generic [ref=e21]: 1 February, 2024
            - img [ref=e23]
        - 'link "RESEARCH PAPERS The Vulnerability of Language Model Benchmarks: Do They Accurately Reflect True LLM Performance? 2 December, 2024" [ref=e26] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.03597
          - generic [ref=e27]:
            - generic [ref=e28]:
              - img [ref=e29]
              - generic [ref=e32]: RESEARCH PAPERS
            - 'heading "The Vulnerability of Language Model Benchmarks: Do They Accurately Reflect True LLM Performance?" [level=3] [ref=e33]'
          - generic [ref=e34]:
            - generic [ref=e35]: 2 December, 2024
            - img [ref=e37]
        - 'link "RESEARCH PAPERS High-precision medical speech recognition through synthetic data and semantic correction: UNITED-MEDASR 24 November, 2024" [ref=e40] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.00055
          - generic [ref=e41]:
            - generic [ref=e42]:
              - img [ref=e43]
              - generic [ref=e46]: RESEARCH PAPERS
            - 'heading "High-precision medical speech recognition through synthetic data and semantic correction: UNITED-MEDASR" [level=3] [ref=e47]'
          - generic [ref=e48]:
            - generic [ref=e49]: 24 November, 2024
            - img [ref=e51]
        - 'link "RESEARCH PAPERS First Train to Generate, then Generate to Train: UnitedSynT5 for Few-Shot NLI 12 December, 2024" [ref=e54] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.09263
          - generic [ref=e55]:
            - generic [ref=e56]:
              - img [ref=e57]
              - generic [ref=e60]: RESEARCH PAPERS
            - 'heading "First Train to Generate, then Generate to Train: UnitedSynT5 for Few-Shot NLI" [level=3] [ref=e61]'
          - generic [ref=e62]:
            - generic [ref=e63]: 12 December, 2024
            - img [ref=e65]
        - 'link "RESEARCH PAPERS Securing Well-Being: Exploring Security Protocols and Mitigating Risks in AI-Driven Mental Health Chatbots for Employees 1 January, 2024" [ref=e68] [cursor=pointer]':
          - /url: https://www.researchgate.net/publication/377513888_Securing_Well-Being_Exploring_Security_Protocols_and_Mitigating_Risks_in_AI-Driven_Mental_Health_Chatbots_for_Employees
          - generic [ref=e69]:
            - generic [ref=e70]:
              - img [ref=e71]
              - generic [ref=e74]: RESEARCH PAPERS
            - 'heading "Securing Well-Being: Exploring Security Protocols and Mitigating Risks in AI-Driven Mental Health Chatbots for Employees" [level=3] [ref=e75]'
          - generic [ref=e76]:
            - generic [ref=e77]: 1 January, 2024
            - img [ref=e79]
        - 'link "RESEARCH PAPERS Chatbot-Enhanced Mental Health First Aid in Corporate Settings: Addressing Risks, Implementing Crisis Management, and Promoting Employee Well-Being 10 November, 2024" [ref=e82] [cursor=pointer]':
          - /url: https://www.researchgate.net/publication/377508078_Chatbot-Enhanced_Mental_Health_First_Aid_in_Corporate_Settings_Addressing_Risks_Implementing_Crisis_Management_and_Promoting_Employee_Well-Being
          - generic [ref=e83]:
            - generic [ref=e84]:
              - img [ref=e85]
              - generic [ref=e88]: RESEARCH PAPERS
            - 'heading "Chatbot-Enhanced Mental Health First Aid in Corporate Settings: Addressing Risks, Implementing Crisis Management, and Promoting Employee Well-Being" [level=3] [ref=e89]'
          - generic [ref=e90]:
            - generic [ref=e91]: 10 November, 2024
            - img [ref=e93]
        - 'link "RESEARCH PAPERS Boosting Workplace Well-Being: A Novel Approach with a Mental Health Chatbot for Employee Engagement and Satisfaction 12 January, 2024" [ref=e96] [cursor=pointer]':
          - /url: https://www.researchgate.net/publication/377510582_Boosting_Workplace_Well-Being_A_Novel_Approach_with_a_Mental_Health_Chatbot_for_Employee_Engagement_and_Satisfaction
          - generic [ref=e97]:
            - generic [ref=e98]:
              - img [ref=e99]
              - generic [ref=e102]: RESEARCH PAPERS
            - 'heading "Boosting Workplace Well-Being: A Novel Approach with a Mental Health Chatbot for Employee Engagement and Satisfaction" [level=3] [ref=e103]'
          - generic [ref=e104]:
            - generic [ref=e105]: 12 January, 2024
            - img [ref=e107]
    - contentinfo [ref=e110]:
      - generic [ref=e111]:
        - generic [ref=e112]:
          - img "Shunya Labs" [ref=e113]
          - paragraph [ref=e114]: Shunya Labs, Inc.
        - generic [ref=e115]:
          - paragraph [ref=e116]: Product
          - list [ref=e117]:
            - listitem [ref=e118]:
              - link "Overview" [ref=e119] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e120]:
              - link "Models" [ref=e121] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e122]:
              - link "Voice Agents" [ref=e123] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e124]:
              - link "Speech Intelligence" [ref=e125] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e126]:
              - link "Audio Processing" [ref=e127] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e128]:
              - link "Deployment" [ref=e129] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e130]:
          - paragraph [ref=e131]: Models
          - list [ref=e132]:
            - listitem [ref=e133]:
              - link "Language Models" [ref=e134] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e135]:
              - link "Zero STT Indic" [ref=e136] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e137]:
              - link "Zero STT Codeswitch" [ref=e138] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e139]:
              - link "Specialised Models" [ref=e140] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e141]:
              - link "Zero STT Med" [ref=e142] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e143]:
              - link "On Device Models" [ref=e144] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e145]:
          - paragraph [ref=e146]: Solutions
          - list [ref=e147]:
            - listitem [ref=e148]:
              - link "Contact Centers" [ref=e149] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e150]:
              - link "Media & Entertainment" [ref=e151] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e152]:
              - link "Healthcare" [ref=e153] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e154]:
          - paragraph [ref=e155]: Resources
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link "Blogs" [ref=e158] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e159]:
              - link "Benchmarks" [ref=e160] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e161]:
              - link "News & Media" [ref=e162] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e163]:
              - link "Patents" [ref=e164] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e165]:
              - link "Research" [ref=e166] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e168]:
          - link "Documentation" [ref=e169] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e171]:
          - listitem [ref=e172]:
            - link "About us" [ref=e173] [cursor=pointer]:
              - /url: /about
        - list [ref=e175]:
          - listitem [ref=e176]:
            - link "Pricing" [ref=e177] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e178]:
        - paragraph [ref=e179]: Follow us on
        - generic [ref=e180]:
          - link [ref=e181] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e182]
          - link [ref=e184] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e185]
          - link [ref=e187] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e188]
          - link [ref=e190] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e191]
      - generic [ref=e193]:
        - paragraph [ref=e194]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e195]:
          - link "Privacy" [ref=e196] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e197] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e198] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e199] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e200] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e201]
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