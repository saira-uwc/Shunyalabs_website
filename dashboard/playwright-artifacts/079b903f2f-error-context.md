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
        - link "Shunya Labs Logo" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "Shunya Labs Logo" [ref=e7]
        - button "☰" [ref=e8] [cursor=pointer]
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
    - generic [ref=e9]:
      - heading "Our Research" [level=1] [ref=e11]
      - generic [ref=e12]:
        - link "RESEARCH PAPERS LLMs Will Always Hallucinate, and We Need to Live With This 1 February, 2024" [ref=e13] [cursor=pointer]:
          - /url: https://arxiv.org/abs/2409.05746
          - generic [ref=e14]:
            - generic [ref=e15]:
              - img [ref=e16]
              - generic [ref=e19]: RESEARCH PAPERS
            - heading "LLMs Will Always Hallucinate, and We Need to Live With This" [level=3] [ref=e20]
          - generic [ref=e21]:
            - generic [ref=e22]: 1 February, 2024
            - img [ref=e24]
        - 'link "RESEARCH PAPERS The Vulnerability of Language Model Benchmarks: Do They Accurately Reflect True LLM Performance? 2 December, 2024" [ref=e27] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.03597
          - generic [ref=e28]:
            - generic [ref=e29]:
              - img [ref=e30]
              - generic [ref=e33]: RESEARCH PAPERS
            - 'heading "The Vulnerability of Language Model Benchmarks: Do They Accurately Reflect True LLM Performance?" [level=3] [ref=e34]'
          - generic [ref=e35]:
            - generic [ref=e36]: 2 December, 2024
            - img [ref=e38]
        - 'link "RESEARCH PAPERS High-precision medical speech recognition through synthetic data and semantic correction: UNITED-MEDASR 24 November, 2024" [ref=e41] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.00055
          - generic [ref=e42]:
            - generic [ref=e43]:
              - img [ref=e44]
              - generic [ref=e47]: RESEARCH PAPERS
            - 'heading "High-precision medical speech recognition through synthetic data and semantic correction: UNITED-MEDASR" [level=3] [ref=e48]'
          - generic [ref=e49]:
            - generic [ref=e50]: 24 November, 2024
            - img [ref=e52]
        - 'link "RESEARCH PAPERS First Train to Generate, then Generate to Train: UnitedSynT5 for Few-Shot NLI 12 December, 2024" [ref=e55] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.09263
          - generic [ref=e56]:
            - generic [ref=e57]:
              - img [ref=e58]
              - generic [ref=e61]: RESEARCH PAPERS
            - 'heading "First Train to Generate, then Generate to Train: UnitedSynT5 for Few-Shot NLI" [level=3] [ref=e62]'
          - generic [ref=e63]:
            - generic [ref=e64]: 12 December, 2024
            - img [ref=e66]
        - 'link "RESEARCH PAPERS Securing Well-Being: Exploring Security Protocols and Mitigating Risks in AI-Driven Mental Health Chatbots for Employees 1 January, 2024" [ref=e69] [cursor=pointer]':
          - /url: https://www.researchgate.net/publication/377513888_Securing_Well-Being_Exploring_Security_Protocols_and_Mitigating_Risks_in_AI-Driven_Mental_Health_Chatbots_for_Employees
          - generic [ref=e70]:
            - generic [ref=e71]:
              - img [ref=e72]
              - generic [ref=e75]: RESEARCH PAPERS
            - 'heading "Securing Well-Being: Exploring Security Protocols and Mitigating Risks in AI-Driven Mental Health Chatbots for Employees" [level=3] [ref=e76]'
          - generic [ref=e77]:
            - generic [ref=e78]: 1 January, 2024
            - img [ref=e80]
        - 'link "RESEARCH PAPERS Chatbot-Enhanced Mental Health First Aid in Corporate Settings: Addressing Risks, Implementing Crisis Management, and Promoting Employee Well-Being 10 November, 2024" [ref=e83] [cursor=pointer]':
          - /url: https://www.researchgate.net/publication/377508078_Chatbot-Enhanced_Mental_Health_First_Aid_in_Corporate_Settings_Addressing_Risks_Implementing_Crisis_Management_and_Promoting_Employee_Well-Being
          - generic [ref=e84]:
            - generic [ref=e85]:
              - img [ref=e86]
              - generic [ref=e89]: RESEARCH PAPERS
            - 'heading "Chatbot-Enhanced Mental Health First Aid in Corporate Settings: Addressing Risks, Implementing Crisis Management, and Promoting Employee Well-Being" [level=3] [ref=e90]'
          - generic [ref=e91]:
            - generic [ref=e92]: 10 November, 2024
            - img [ref=e94]
        - 'link "RESEARCH PAPERS Boosting Workplace Well-Being: A Novel Approach with a Mental Health Chatbot for Employee Engagement and Satisfaction 12 January, 2024" [ref=e97] [cursor=pointer]':
          - /url: https://www.researchgate.net/publication/377510582_Boosting_Workplace_Well-Being_A_Novel_Approach_with_a_Mental_Health_Chatbot_for_Employee_Engagement_and_Satisfaction
          - generic [ref=e98]:
            - generic [ref=e99]:
              - img [ref=e100]
              - generic [ref=e103]: RESEARCH PAPERS
            - 'heading "Boosting Workplace Well-Being: A Novel Approach with a Mental Health Chatbot for Employee Engagement and Satisfaction" [level=3] [ref=e104]'
          - generic [ref=e105]:
            - generic [ref=e106]: 12 January, 2024
            - img [ref=e108]
    - contentinfo [ref=e111]:
      - generic [ref=e112]:
        - generic [ref=e113]:
          - img "Shunya Labs" [ref=e114]
          - paragraph [ref=e115]: Shunya Labs, Inc.
        - generic [ref=e116]:
          - paragraph [ref=e117]: Product
          - list [ref=e118]:
            - listitem [ref=e119]:
              - link "Overview" [ref=e120] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e121]:
              - link "Models" [ref=e122] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e123]:
              - link "Voice Agents" [ref=e124] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e125]:
              - link "Speech Intelligence" [ref=e126] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e127]:
              - link "Audio Processing" [ref=e128] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e129]:
              - link "Deployment" [ref=e130] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e131]:
          - paragraph [ref=e132]: Models
          - list [ref=e133]:
            - listitem [ref=e134]:
              - link "Language Models" [ref=e135] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e136]:
              - link "Zero STT Indic" [ref=e137] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e138]:
              - link "Zero STT Codeswitch" [ref=e139] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e140]:
              - link "Specialised Models" [ref=e141] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e142]:
              - link "Zero STT Med" [ref=e143] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e144]:
              - link "On Device Models" [ref=e145] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e146]:
          - paragraph [ref=e147]: Solutions
          - list [ref=e148]:
            - listitem [ref=e149]:
              - link "Contact Centers" [ref=e150] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e151]:
              - link "Media & Entertainment" [ref=e152] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e153]:
              - link "Healthcare" [ref=e154] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e155]:
          - paragraph [ref=e156]: Resources
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "Blogs" [ref=e159] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e160]:
              - link "Benchmarks" [ref=e161] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e162]:
              - link "News & Media" [ref=e163] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e164]:
              - link "Patents" [ref=e165] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e166]:
              - link "Research" [ref=e167] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e169]:
          - link "Documentation" [ref=e170] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e172]:
          - listitem [ref=e173]:
            - link "About us" [ref=e174] [cursor=pointer]:
              - /url: /about
        - list [ref=e176]:
          - listitem [ref=e177]:
            - link "Pricing" [ref=e178] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e179]:
        - paragraph [ref=e180]: Follow us on
        - generic [ref=e181]:
          - link [ref=e182] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e183]
          - link [ref=e185] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e186]
          - link [ref=e188] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e189]
          - link [ref=e191] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e192]
      - generic [ref=e194]:
        - paragraph [ref=e195]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e196]:
          - link "Privacy" [ref=e197] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e198] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e199] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e200] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e201] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e202]
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