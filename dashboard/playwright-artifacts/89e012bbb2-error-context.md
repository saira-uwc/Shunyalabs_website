# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/research/design.spec.js >> Resources - Research design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [headings] Heading "Securing Well-Being: Exploring Security Protocols and Mitigating Risks in AI-Driven Mental Health Chatbots for Employees" (h3) not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [headings] Heading "Chatbot-Enhanced Mental Health First Aid in Corporate Settings: Addressing Risks, Implementing Crisis Management, and Promoting Employee Well-Being" (h3) not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [headings] Heading "Boosting Workplace Well-Being: A Novel Approach with a Mental Health Chatbot for Employee Engagement and Satisfaction" (h3) not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "RESEARCH PAPERSSecuring Well-Being: Exploring Security Protocols and Mitigating Risks in AI-Driven Mental Health Chatbots for Employees1 January, 2024" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Securing Well-Being: Exploring Security Protocols and Mitigating Risks in AI-Driven Mental Health Chatbots for Employees" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "1 January, 2024" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "RESEARCH PAPERSChatbot-Enhanced Mental Health First Aid in Corporate Settings: Addressing Risks, Implementing Crisis Management, and Promoting Employee Well-Being10 November, 2024" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Chatbot-Enhanced Mental Health First Aid in Corporate Settings: Addressing Risks, Implementing Crisis Management, and Promoting Employee Well-Being" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "10 November, 2024" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "RESEARCH PAPERSBoosting Workplace Well-Being: A Novel Approach with a Mental Health Chatbot for Employee Engagement and Satisfaction12 January, 2024" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Boosting Workplace Well-Being: A Novel Approach with a Mental Health Chatbot for Employee Engagement and Satisfaction" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "12 January, 2024" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "RESEARCH PAPERSSecuring Well-Being: Exploring Security Protocols and Mitigating Risks in AI-Driven Mental Health Chatbots for Employees1 January, 2024 (https://www.researchgate.net/publication/377513888_Securing_Well-Being_Exploring_Security_Protocols_and_Mitigating_Risks_in_AI-Driven_Mental_Health_Chatbots_for_Employees)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "RESEARCH PAPERSChatbot-Enhanced Mental Health First Aid in Corporate Settings: Addressing Risks, Implementing Crisis Management, and Promoting Employee Well-Being10 November, 2024 (https://www.researchgate.net/publication/377508078_Chatbot-Enhanced_Mental_Health_First_Aid_in_Corporate_Settings_Addressing_Risks_Implementing_Crisis_Management_and_Promoting_Employee_Well-Being)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "RESEARCH PAPERSBoosting Workplace Well-Being: A Novel Approach with a Mental Health Chatbot for Employee Engagement and Satisfaction12 January, 2024 (https://www.researchgate.net/publication/377510582_Boosting_Workplace_Well-Being_A_Novel_Approach_with_a_Mental_Health_Chatbot_for_Employee_Engagement_and_Satisfaction)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 15 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 15
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
            - /url: https://docs.shunyalabs.ai/
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
    - contentinfo [ref=e69]:
      - generic [ref=e70]:
        - generic [ref=e71]:
          - img "Shunya Labs" [ref=e72]
          - paragraph [ref=e73]: Shunya Labs, Inc.
        - generic [ref=e74]:
          - paragraph [ref=e75]: Product
          - list [ref=e76]:
            - listitem [ref=e77]:
              - link "Overview" [ref=e78] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e79]:
              - link "Models" [ref=e80] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e81]:
              - link "Voice Agents" [ref=e82] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e83]:
              - link "Speech Intelligence" [ref=e84] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e85]:
              - link "Audio Processing" [ref=e86] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e87]:
              - link "Deployment" [ref=e88] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e89]:
          - paragraph [ref=e90]: Models
          - list [ref=e91]:
            - listitem [ref=e92]:
              - link "Language Models" [ref=e93] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e94]:
              - link "Zero STT Indic" [ref=e95] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e96]:
              - link "Zero STT Codeswitch" [ref=e97] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e98]:
              - link "Specialised Models" [ref=e99] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e100]:
              - link "Zero STT Med" [ref=e101] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e102]:
              - link "On Device Models" [ref=e103] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e104]:
          - paragraph [ref=e105]: Solutions
          - list [ref=e106]:
            - listitem [ref=e107]:
              - link "Contact Centers" [ref=e108] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e109]:
              - link "Media & Entertainment" [ref=e110] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e111]:
              - link "Healthcare" [ref=e112] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e113]:
          - paragraph [ref=e114]: Resources
          - list [ref=e115]:
            - listitem [ref=e116]:
              - link "Blogs" [ref=e117] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e118]:
              - link "Benchmarks" [ref=e119] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e120]:
              - link "News & Media" [ref=e121] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e122]:
              - link "Patents" [ref=e123] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e124]:
              - link "Research" [ref=e125] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e127]:
          - link "Documentation" [ref=e128] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e130]:
          - listitem [ref=e131]:
            - link "About us" [ref=e132] [cursor=pointer]:
              - /url: /about
        - list [ref=e134]:
          - listitem [ref=e135]:
            - link "Pricing" [ref=e136] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e137]:
        - paragraph [ref=e138]: Follow us on
        - generic [ref=e139]:
          - link [ref=e140] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e141]
          - link [ref=e143] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e144]
          - link [ref=e146] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e147]
          - link [ref=e149] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e150]
      - generic [ref=e152]:
        - paragraph [ref=e153]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e154]:
          - link "Privacy" [ref=e155] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e156] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e157] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e158] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e159] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e160]
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
     |                                                                                      ^ Error: 15 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```