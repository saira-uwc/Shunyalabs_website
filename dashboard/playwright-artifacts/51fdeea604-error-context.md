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
        - generic [ref=e7]:
          - button "Product" [ref=e9] [cursor=pointer]:
            - text: Product
            - img [ref=e10]
          - button "Models" [ref=e13] [cursor=pointer]:
            - text: Models
            - img [ref=e14]
          - button "Solutions" [ref=e17] [cursor=pointer]:
            - text: Solutions
            - img [ref=e18]
          - button "Resources" [ref=e21] [cursor=pointer]:
            - text: Resources
            - img [ref=e22]
          - link "Documentation" [ref=e24] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
          - link "About Us" [ref=e25] [cursor=pointer]:
            - /url: /about
          - link "Pricing" [ref=e26] [cursor=pointer]:
            - /url: /pricing
        - link "Playground" [ref=e27] [cursor=pointer]:
          - /url: https://playground.shunyalabs.ai/
          - img [ref=e28]
          - text: Playground
        - generic [ref=e30]:
          - button "Sign In" [ref=e31] [cursor=pointer]
          - link "Contact Sales" [ref=e32] [cursor=pointer]:
            - /url: /contact
    - generic [ref=e33]:
      - heading "Our Research" [level=1] [ref=e35]
      - generic [ref=e36]:
        - link "RESEARCH PAPERS LLMs Will Always Hallucinate, and We Need to Live With This 1 February, 2024" [ref=e37] [cursor=pointer]:
          - /url: https://arxiv.org/abs/2409.05746
          - generic [ref=e38]:
            - generic [ref=e39]:
              - img [ref=e40]
              - generic [ref=e43]: RESEARCH PAPERS
            - heading "LLMs Will Always Hallucinate, and We Need to Live With This" [level=3] [ref=e44]
          - generic [ref=e45]:
            - generic [ref=e46]: 1 February, 2024
            - img [ref=e48]
        - 'link "RESEARCH PAPERS The Vulnerability of Language Model Benchmarks: Do They Accurately Reflect True LLM Performance? 2 December, 2024" [ref=e51] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.03597
          - generic [ref=e52]:
            - generic [ref=e53]:
              - img [ref=e54]
              - generic [ref=e57]: RESEARCH PAPERS
            - 'heading "The Vulnerability of Language Model Benchmarks: Do They Accurately Reflect True LLM Performance?" [level=3] [ref=e58]'
          - generic [ref=e59]:
            - generic [ref=e60]: 2 December, 2024
            - img [ref=e62]
        - 'link "RESEARCH PAPERS High-precision medical speech recognition through synthetic data and semantic correction: UNITED-MEDASR 24 November, 2024" [ref=e65] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.00055
          - generic [ref=e66]:
            - generic [ref=e67]:
              - img [ref=e68]
              - generic [ref=e71]: RESEARCH PAPERS
            - 'heading "High-precision medical speech recognition through synthetic data and semantic correction: UNITED-MEDASR" [level=3] [ref=e72]'
          - generic [ref=e73]:
            - generic [ref=e74]: 24 November, 2024
            - img [ref=e76]
        - 'link "RESEARCH PAPERS First Train to Generate, then Generate to Train: UnitedSynT5 for Few-Shot NLI 12 December, 2024" [ref=e79] [cursor=pointer]':
          - /url: https://arxiv.org/abs/2412.09263
          - generic [ref=e80]:
            - generic [ref=e81]:
              - img [ref=e82]
              - generic [ref=e85]: RESEARCH PAPERS
            - 'heading "First Train to Generate, then Generate to Train: UnitedSynT5 for Few-Shot NLI" [level=3] [ref=e86]'
          - generic [ref=e87]:
            - generic [ref=e88]: 12 December, 2024
            - img [ref=e90]
        - 'link "RESEARCH PAPERS Securing Well-Being: Exploring Security Protocols and Mitigating Risks in AI-Driven Mental Health Chatbots for Employees 1 January, 2024" [ref=e93] [cursor=pointer]':
          - /url: https://www.researchgate.net/publication/377513888_Securing_Well-Being_Exploring_Security_Protocols_and_Mitigating_Risks_in_AI-Driven_Mental_Health_Chatbots_for_Employees
          - generic [ref=e94]:
            - generic [ref=e95]:
              - img [ref=e96]
              - generic [ref=e99]: RESEARCH PAPERS
            - 'heading "Securing Well-Being: Exploring Security Protocols and Mitigating Risks in AI-Driven Mental Health Chatbots for Employees" [level=3] [ref=e100]'
          - generic [ref=e101]:
            - generic [ref=e102]: 1 January, 2024
            - img [ref=e104]
        - 'link "RESEARCH PAPERS Chatbot-Enhanced Mental Health First Aid in Corporate Settings: Addressing Risks, Implementing Crisis Management, and Promoting Employee Well-Being 10 November, 2024" [ref=e107] [cursor=pointer]':
          - /url: https://www.researchgate.net/publication/377508078_Chatbot-Enhanced_Mental_Health_First_Aid_in_Corporate_Settings_Addressing_Risks_Implementing_Crisis_Management_and_Promoting_Employee_Well-Being
          - generic [ref=e108]:
            - generic [ref=e109]:
              - img [ref=e110]
              - generic [ref=e113]: RESEARCH PAPERS
            - 'heading "Chatbot-Enhanced Mental Health First Aid in Corporate Settings: Addressing Risks, Implementing Crisis Management, and Promoting Employee Well-Being" [level=3] [ref=e114]'
          - generic [ref=e115]:
            - generic [ref=e116]: 10 November, 2024
            - img [ref=e118]
        - 'link "RESEARCH PAPERS Boosting Workplace Well-Being: A Novel Approach with a Mental Health Chatbot for Employee Engagement and Satisfaction 12 January, 2024" [ref=e121] [cursor=pointer]':
          - /url: https://www.researchgate.net/publication/377510582_Boosting_Workplace_Well-Being_A_Novel_Approach_with_a_Mental_Health_Chatbot_for_Employee_Engagement_and_Satisfaction
          - generic [ref=e122]:
            - generic [ref=e123]:
              - img [ref=e124]
              - generic [ref=e127]: RESEARCH PAPERS
            - 'heading "Boosting Workplace Well-Being: A Novel Approach with a Mental Health Chatbot for Employee Engagement and Satisfaction" [level=3] [ref=e128]'
          - generic [ref=e129]:
            - generic [ref=e130]: 12 January, 2024
            - img [ref=e132]
    - contentinfo [ref=e135]:
      - generic [ref=e136]:
        - generic [ref=e137]:
          - img "Shunya Labs" [ref=e138]
          - paragraph [ref=e139]: Shunya Labs, Inc.
        - generic [ref=e140]:
          - paragraph [ref=e141]: Product
          - list [ref=e142]:
            - listitem [ref=e143]:
              - link "Overview" [ref=e144] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e145]:
              - link "Models" [ref=e146] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e147]:
              - link "Voice Agents" [ref=e148] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e149]:
              - link "Speech Intelligence" [ref=e150] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e151]:
              - link "Audio Processing" [ref=e152] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e153]:
              - link "Deployment" [ref=e154] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e155]:
          - paragraph [ref=e156]: Models
          - list [ref=e157]:
            - listitem [ref=e158]:
              - link "Language Models" [ref=e159] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e160]:
              - link "Zero STT Indic" [ref=e161] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e162]:
              - link "Zero STT Codeswitch" [ref=e163] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e164]:
              - link "Specialised Models" [ref=e165] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e166]:
              - link "Zero STT Med" [ref=e167] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e168]:
              - link "On Device Models" [ref=e169] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e170]:
          - paragraph [ref=e171]: Solutions
          - list [ref=e172]:
            - listitem [ref=e173]:
              - link "Contact Centers" [ref=e174] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e175]:
              - link "Media & Entertainment" [ref=e176] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e177]:
              - link "Healthcare" [ref=e178] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e179]:
          - paragraph [ref=e180]: Resources
          - list [ref=e181]:
            - listitem [ref=e182]:
              - link "Blogs" [ref=e183] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e184]:
              - link "Benchmarks" [ref=e185] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e186]:
              - link "News & Media" [ref=e187] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e188]:
              - link "Patents" [ref=e189] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e190]:
              - link "Research" [ref=e191] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e193]:
          - link "Documentation" [ref=e194] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e196]:
          - listitem [ref=e197]:
            - link "About us" [ref=e198] [cursor=pointer]:
              - /url: /about
        - list [ref=e200]:
          - listitem [ref=e201]:
            - link "Pricing" [ref=e202] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e203]:
        - paragraph [ref=e204]: Follow us on
        - generic [ref=e205]:
          - link [ref=e206] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e207]
          - link [ref=e209] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e210]
          - link [ref=e212] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e213]
          - link [ref=e215] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e216]
      - generic [ref=e218]:
        - paragraph [ref=e219]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e220]:
          - link "Privacy" [ref=e221] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e222] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e223] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e224] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e225] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e226]
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