# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/about/about-us/design.spec.js >> About - About Us design compliance >> Figma design compliance
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
      - generic [ref=e10]:
        - heading "About Shunya Labs" [level=1] [ref=e12]
        - generic [ref=e17]:
          - paragraph [ref=e18]: We’re a research-forward organization building custom voice models for regional languages and mixed speech. Our goal is to make the voice interface of technology accessible to everyone.
          - paragraph [ref=e19]: We started our journey with Zero STT, the world’s most accurate transcription model, and expanded into complete voice agents that can be deployed in air-gapped environments.
      - generic [ref=e21]:
        - heading "What Sets Us Apart" [level=2] [ref=e22]
        - generic [ref=e24]:
          - img [ref=e25]
          - generic [ref=e36]:
            - generic [ref=e37]: CUSTOM
            - heading "Foundation models" [level=3] [ref=e38]
            - paragraph [ref=e39]: We build foundation models for voice, including models that understand and produce codeswitched speech.
        - generic [ref=e40]:
          - generic [ref=e41]:
            - img [ref=e42]
            - generic [ref=e45]:
              - generic [ref=e46]: RESEARCH
              - heading "First-principles research" [level=3] [ref=e47]
              - paragraph [ref=e48]: Proprietary training methodology, model architecture, and training data to improve baseline accuracy.
          - generic [ref=e49]:
            - img [ref=e50]
            - generic [ref=e53]:
              - generic [ref=e54]: MODELS
              - heading "Built for you" [level=3] [ref=e55]
              - paragraph [ref=e56]: Custom SLMs trained on your corpus, your speakers, your terminology.
          - generic [ref=e57]:
            - img [ref=e58]
            - generic [ref=e60]:
              - generic [ref=e61]: SECURITY
              - heading "Privacy-first solutioning" [level=3] [ref=e62]
              - paragraph [ref=e63]: On-prem deployment and custom agent architectures for enterprise-grade security.
        - generic [ref=e64]:
          - generic [ref=e65]:
            - img [ref=e66]
            - generic [ref=e69]:
              - generic [ref=e70]: DEPLOYMENT
              - heading "CPU-first architecture" [level=3] [ref=e71]
              - paragraph [ref=e72]: Lightweight models designed to run on CPUs for maximum accessibility.
          - generic [ref=e73]:
            - img [ref=e74]
            - generic [ref=e81]:
              - generic [ref=e82]: PLATFORM
              - heading "Full stack orchestration" [level=3] [ref=e83]
              - paragraph [ref=e84]: End to end platform for agent orchestration, with custom logic for enterprise workflows.
          - generic [ref=e85]:
            - img [ref=e86]
            - generic [ref=e93]:
              - generic [ref=e94]: COMMUNITY
              - heading "Open-source community" [level=3] [ref=e95]
              - paragraph [ref=e96]: Commitment to open models for the community on Hugging Face.
      - generic [ref=e98]:
        - heading "Meet the Team" [level=2] [ref=e99]
        - generic [ref=e100]:
          - generic [ref=e102]:
            - img "Ritu Mehrotra profile" [ref=e104]
            - generic [ref=e105]:
              - heading "Ritu Mehrotra" [level=2] [ref=e106]
              - paragraph [ref=e107]: Co-founder & CEO
              - paragraph [ref=e108]: 2X founder. Booking.com, Zomato, Mahindra. Understands how AI fails in regulated environments, and how to make it work. MBA, IIFT Delhi.
              - link "LinkedIn profile" [ref=e109] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/ritu-mehrotra-4861043/
                - img [ref=e110]
          - generic [ref=e115]:
            - img "Sourav Bandyopadhyay profile" [ref=e117]
            - generic [ref=e118]:
              - heading "Sourav Bandyopadhyay" [level=2] [ref=e119]
              - paragraph [ref=e120]: Co-Founder & Chief Scientist
              - paragraph [ref=e121]: PhD Scholar, IIT Kharagpur. Proven LLMs will always hallucinate (using Gödel's Incompleteness Theorem). 12 patents, 18 papers, 23 world records. Obsessed with correctness.
              - link "LinkedIn profile" [ref=e122] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/souravbandyo/
                - img [ref=e123]
          - generic [ref=e128]:
            - img "Abhishek Sharma profile" [ref=e130]
            - generic [ref=e131]:
              - heading "Abhishek Sharma" [level=2] [ref=e132]
              - paragraph [ref=e133]: Co-founder & CBO
              - paragraph [ref=e134]: Helped build TenMarks (acquired by Amazon) and Dineout (acquired by Swiggy) alongside incredible teams. Learned more from the journey than the outcomes. ISB’Hyderabad (PGPMAX).
              - link "LinkedIn profile" [ref=e135] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/abhishek78/
                - img [ref=e136]
          - generic [ref=e141]:
            - img "Arti Khanijo profile" [ref=e143]
            - generic [ref=e144]:
              - heading "Arti Khanijo" [level=2] [ref=e145]
              - paragraph [ref=e146]: Chief Product Officer
              - paragraph [ref=e147]: Worked with global brands like Airtel, ibibo, and Tencent with over 20 years of experience across wellness and consumer tech—known for building scalable, user-first products that create real human impact at the intersection of technology and purpose.
              - link "LinkedIn profile" [ref=e148] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/arti-khanijo-28697514/
                - img [ref=e149]
          - generic [ref=e154]:
            - img "Vivek Jain profile" [ref=e156]
            - generic [ref=e157]:
              - heading "Vivek Jain" [level=2] [ref=e158]
              - paragraph [ref=e159]: Chief Technology Officer
              - paragraph [ref=e160]: Built large-scale data science solutions at Amazon. Expert at turning big ideas into small tasks and small problems into big insights. NIT Trichy.
              - link "LinkedIn profile" [ref=e161] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/vivekjain2/
                - img [ref=e162]
      - generic [ref=e165]:
        - heading "Built by a Team of Iconoclastic Researchers and Engineers" [level=2] [ref=e166]
        - img "Research Team" [ref=e168]
        - generic [ref=e169]:
          - generic [ref=e170]:
            - generic [ref=e171]:
              - img "Patents background" [ref=e172]
              - generic [ref=e174]:
                - heading "12" [level=2] [ref=e175]
                - paragraph [ref=e176]: patents
            - generic [ref=e177]:
              - generic [ref=e178]:
                - heading "18+" [level=3] [ref=e179]
                - paragraph [ref=e180]: peer-reviewed publications
              - generic [ref=e181]:
                - paragraph [ref=e182]: "Zero STT:"
                - generic [ref=e183]:
                  - heading "3.10%" [level=3] [ref=e184]
                  - generic [ref=e185]: word error rate
                - paragraph [ref=e186]: best in the industry.
              - generic [ref=e187]:
                - img "World records background" [ref=e188]
                - generic [ref=e190]:
                  - heading "23" [level=3] [ref=e191]
                  - paragraph [ref=e192]: world records
              - paragraph [ref=e195]:
                - text: Research informs
                - text: production.
                - text: Production sharpens
                - text: research.
          - link "Read our research" [ref=e197] [cursor=pointer]:
            - /url: https://www.shunyalabs.ai/patents
      - generic [ref=e199]:
        - heading "Who Uses Shunya" [level=2] [ref=e200]
        - generic [ref=e201]:
          - link "Healthcare Healthcare Clinical documentation, transcription" [ref=e202] [cursor=pointer]:
            - /url: /healthcare
            - img "Healthcare" [ref=e204]
            - generic [ref=e205]:
              - generic [ref=e206]:
                - heading "Healthcare" [level=3] [ref=e207]
                - paragraph [ref=e208]: Clinical documentation, transcription
              - img [ref=e211]
          - link "Contact Centers Contact Centers Transcription, sentiment, agent intelligence" [ref=e214] [cursor=pointer]:
            - /url: /contact-centers
            - img "Contact Centers" [ref=e216]
            - generic [ref=e217]:
              - generic [ref=e218]:
                - heading "Contact Centers" [level=3] [ref=e219]
                - paragraph [ref=e220]: Transcription, sentiment, agent intelligence
              - img [ref=e223]
          - link "Media & Entertainment Media & Entertainment Dubbing, lipsync, 200+ languages" [ref=e226] [cursor=pointer]:
            - /url: /media-entertainment
            - img "Media & Entertainment" [ref=e228]
            - generic [ref=e229]:
              - generic [ref=e230]:
                - heading "Media & Entertainment" [level=3] [ref=e231]
                - paragraph [ref=e232]: Dubbing, lipsync, 200+ languages
              - img [ref=e235]
      - generic [ref=e241]:
        - heading "Join Us" [level=2] [ref=e242]
        - paragraph [ref=e243]: We're building voice infrastructure for the next decade.
        - paragraph [ref=e244]: Hiring engineers, researchers and linguists who care about deployable intelligence.
        - link "careers@shunyalabs.ai" [ref=e246] [cursor=pointer]:
          - /url: mailto:0@shunyalabs.ai
    - contentinfo [ref=e247]:
      - generic [ref=e248]:
        - generic [ref=e249]:
          - img "Shunya Labs" [ref=e250]
          - paragraph [ref=e251]: Shunya Labs, Inc.
        - generic [ref=e252]:
          - paragraph [ref=e253]: Product
          - list [ref=e254]:
            - listitem [ref=e255]:
              - link "Overview" [ref=e256] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e257]:
              - link "Models" [ref=e258] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e259]:
              - link "Voice Agents" [ref=e260] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e261]:
              - link "Speech Intelligence" [ref=e262] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e263]:
              - link "Audio Processing" [ref=e264] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e265]:
              - link "Deployment" [ref=e266] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e267]:
          - paragraph [ref=e268]: Models
          - list [ref=e269]:
            - listitem [ref=e270]:
              - link "Language Models" [ref=e271] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e272]:
              - link "Zero STT Indic" [ref=e273] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e274]:
              - link "Zero STT Codeswitch" [ref=e275] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e276]:
              - link "Specialised Models" [ref=e277] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e278]:
              - link "Zero STT Med" [ref=e279] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e280]:
              - link "On Device Models" [ref=e281] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e282]:
          - paragraph [ref=e283]: Solutions
          - list [ref=e284]:
            - listitem [ref=e285]:
              - link "Contact Centers" [ref=e286] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e287]:
              - link "Media & Entertainment" [ref=e288] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e289]:
              - link "Healthcare" [ref=e290] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e291]:
          - paragraph [ref=e292]: Resources
          - list [ref=e293]:
            - listitem [ref=e294]:
              - link "Blogs" [ref=e295] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e296]:
              - link "Benchmarks" [ref=e297] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e298]:
              - link "News & Media" [ref=e299] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e300]:
              - link "Patents" [ref=e301] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e302]:
              - link "Research" [ref=e303] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e305]:
          - link "Documentation" [ref=e306] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e308]:
          - listitem [ref=e309]:
            - link "About us" [ref=e310] [cursor=pointer]:
              - /url: /about
        - list [ref=e312]:
          - listitem [ref=e313]:
            - link "Pricing" [ref=e314] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e315]:
        - paragraph [ref=e316]: Follow us on
        - generic [ref=e317]:
          - link [ref=e318] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e319]
          - link [ref=e321] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e322]
          - link [ref=e324] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e325]
          - link [ref=e327] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e328]
      - generic [ref=e330]:
        - paragraph [ref=e331]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e332]:
          - link "Privacy" [ref=e333] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e334] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e335] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e336] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e337] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e338]
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