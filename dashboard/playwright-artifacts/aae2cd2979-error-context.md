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
          - generic [ref=e6]:
            - link "Shunya Labs Logo" [ref=e7] [cursor=pointer]:
              - /url: /
              - img "Shunya Labs Logo" [ref=e8]
            - generic [ref=e9]:
              - button "Product" [ref=e11] [cursor=pointer]:
                - text: Product
                - img [ref=e12]
              - button "Models" [ref=e15] [cursor=pointer]:
                - text: Models
                - img [ref=e16]
              - button "Solutions" [ref=e19] [cursor=pointer]:
                - text: Solutions
                - img [ref=e20]
              - button "Resources" [ref=e23] [cursor=pointer]:
                - text: Resources
                - img [ref=e24]
              - link "Documentation" [ref=e26] [cursor=pointer]:
                - /url: https://docs.shunyalabs.ai/overview
              - link "About Us" [ref=e27] [cursor=pointer]:
                - /url: /about
              - link "Pricing" [ref=e28] [cursor=pointer]:
                - /url: /pricing
          - generic [ref=e29]:
            - link "Playground" [ref=e30] [cursor=pointer]:
              - /url: https://playground.shunyalabs.ai/
              - img [ref=e31]
              - text: Playground
            - generic [ref=e33]:
              - button "Sign In" [ref=e34] [cursor=pointer]
              - link "Contact Sales" [ref=e35] [cursor=pointer]:
                - /url: /contact
      - generic [ref=e36]:
        - heading "About Shunya Labs" [level=1] [ref=e38]
        - generic [ref=e43]:
          - paragraph [ref=e44]: We’re a research-forward organization building custom voice models for regional languages and mixed speech. Our goal is to make the voice interface of technology accessible to everyone.
          - paragraph [ref=e45]: We started our journey with Zero STT, the world’s most accurate transcription model, and expanded into complete voice agents that can be deployed in air-gapped environments.
      - generic [ref=e47]:
        - heading "What Sets Us Apart" [level=2] [ref=e48]
        - generic [ref=e50]:
          - img [ref=e51]
          - generic [ref=e62]:
            - generic [ref=e63]: CUSTOM
            - heading "Foundation models" [level=3] [ref=e64]
            - paragraph [ref=e65]: We build foundation models for voice, including models that understand and produce codeswitched speech.
        - generic [ref=e66]:
          - generic [ref=e67]:
            - img [ref=e68]
            - generic [ref=e71]:
              - generic [ref=e72]: RESEARCH
              - heading "First-principles research" [level=3] [ref=e73]
              - paragraph [ref=e74]: Proprietary training methodology, model architecture, and training data to improve baseline accuracy.
          - generic [ref=e75]:
            - img [ref=e76]
            - generic [ref=e79]:
              - generic [ref=e80]: MODELS
              - heading "Built for you" [level=3] [ref=e81]
              - paragraph [ref=e82]: Custom SLMs trained on your corpus, your speakers, your terminology.
          - generic [ref=e83]:
            - img [ref=e84]
            - generic [ref=e86]:
              - generic [ref=e87]: SECURITY
              - heading "Privacy-first solutioning" [level=3] [ref=e88]
              - paragraph [ref=e89]: On-prem deployment and custom agent architectures for enterprise-grade security.
        - generic [ref=e90]:
          - generic [ref=e91]:
            - img [ref=e92]
            - generic [ref=e95]:
              - generic [ref=e96]: DEPLOYMENT
              - heading "CPU-first architecture" [level=3] [ref=e97]
              - paragraph [ref=e98]: Lightweight models designed to run on CPUs for maximum accessibility.
          - generic [ref=e99]:
            - img [ref=e100]
            - generic [ref=e107]:
              - generic [ref=e108]: PLATFORM
              - heading "Full stack orchestration" [level=3] [ref=e109]
              - paragraph [ref=e110]: End to end platform for agent orchestration, with custom logic for enterprise workflows.
          - generic [ref=e111]:
            - img [ref=e112]
            - generic [ref=e119]:
              - generic [ref=e120]: COMMUNITY
              - heading "Open-source community" [level=3] [ref=e121]
              - paragraph [ref=e122]: Commitment to open models for the community on Hugging Face.
      - generic [ref=e124]:
        - heading "Meet the Team" [level=2] [ref=e125]
        - generic [ref=e126]:
          - generic [ref=e128]:
            - img "Ritu Mehrotra profile" [ref=e130]
            - generic [ref=e131]:
              - heading "Ritu Mehrotra" [level=2] [ref=e132]
              - paragraph [ref=e133]: Co-founder & CEO
              - paragraph [ref=e134]: 2X founder. Booking.com, Zomato, Mahindra. Understands how AI fails in regulated environments, and how to make it work. MBA, IIFT Delhi.
              - link "LinkedIn profile" [ref=e135] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/ritu-mehrotra-4861043/
                - img [ref=e136]
          - generic [ref=e141]:
            - img "Sourav Bandyopadhyay profile" [ref=e143]
            - generic [ref=e144]:
              - heading "Sourav Bandyopadhyay" [level=2] [ref=e145]
              - paragraph [ref=e146]: Co-Founder & Chief Scientist
              - paragraph [ref=e147]: PhD Scholar, IIT Kharagpur. Proven LLMs will always hallucinate (using Gödel's Incompleteness Theorem). 12 patents, 18 papers, 23 world records. Obsessed with correctness.
              - link "LinkedIn profile" [ref=e148] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/souravbandyo/
                - img [ref=e149]
          - generic [ref=e154]:
            - img "Abhishek Sharma profile" [ref=e156]
            - generic [ref=e157]:
              - heading "Abhishek Sharma" [level=2] [ref=e158]
              - paragraph [ref=e159]: Co-founder & CBO
              - paragraph [ref=e160]: Helped build TenMarks (acquired by Amazon) and Dineout (acquired by Swiggy) alongside incredible teams. Learned more from the journey than the outcomes. ISB’Hyderabad (PGPMAX).
              - link "LinkedIn profile" [ref=e161] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/abhishek78/
                - img [ref=e162]
          - generic [ref=e167]:
            - img "Arti Khanijo profile" [ref=e169]
            - generic [ref=e170]:
              - heading "Arti Khanijo" [level=2] [ref=e171]
              - paragraph [ref=e172]: Chief Product Officer
              - paragraph [ref=e173]: Worked with global brands like Airtel, ibibo, and Tencent with over 20 years of experience across wellness and consumer tech—known for building scalable, user-first products that create real human impact at the intersection of technology and purpose.
              - link "LinkedIn profile" [ref=e174] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/arti-khanijo-28697514/
                - img [ref=e175]
          - generic [ref=e180]:
            - img "Vivek Jain profile" [ref=e182]
            - generic [ref=e183]:
              - heading "Vivek Jain" [level=2] [ref=e184]
              - paragraph [ref=e185]: Chief Technology Officer
              - paragraph [ref=e186]: Built large-scale data science solutions at Amazon. Expert at turning big ideas into small tasks and small problems into big insights. NIT Trichy.
              - link "LinkedIn profile" [ref=e187] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/vivekjain2/
                - img [ref=e188]
      - generic [ref=e191]:
        - heading "Built by a Team of Iconoclastic Researchers and Engineers" [level=2] [ref=e192]
        - img "Research Team" [ref=e194]
        - generic [ref=e195]:
          - generic [ref=e196]:
            - generic [ref=e197]:
              - img "Patents background" [ref=e198]
              - generic [ref=e200]:
                - heading "12" [level=2] [ref=e201]
                - paragraph [ref=e202]: patents
            - generic [ref=e203]:
              - generic [ref=e204]:
                - heading "18+" [level=3] [ref=e205]
                - paragraph [ref=e206]: peer-reviewed publications
              - generic [ref=e207]:
                - paragraph [ref=e208]: "Zero STT:"
                - generic [ref=e209]:
                  - heading "3.10%" [level=3] [ref=e210]
                  - generic [ref=e211]: word error rate
                - paragraph [ref=e212]: best in the industry.
              - generic [ref=e213]:
                - img "World records background" [ref=e214]
                - generic [ref=e216]:
                  - heading "23" [level=3] [ref=e217]
                  - paragraph [ref=e218]: world records
              - paragraph [ref=e221]:
                - text: Research informs
                - text: production.
                - text: Production sharpens
                - text: research.
          - link "Read our research" [ref=e223] [cursor=pointer]:
            - /url: https://www.shunyalabs.ai/patents
      - generic [ref=e225]:
        - heading "Who Uses Shunya" [level=2] [ref=e226]
        - generic [ref=e227]:
          - link "Healthcare Healthcare Clinical documentation, transcription" [ref=e228] [cursor=pointer]:
            - /url: /healthcare
            - img "Healthcare" [ref=e230]
            - generic [ref=e231]:
              - generic [ref=e232]:
                - heading "Healthcare" [level=3] [ref=e233]
                - paragraph [ref=e234]: Clinical documentation, transcription
              - img [ref=e237]
          - link "Contact Centers Contact Centers Transcription, sentiment, agent intelligence" [ref=e240] [cursor=pointer]:
            - /url: /contact-centers
            - img "Contact Centers" [ref=e242]
            - generic [ref=e243]:
              - generic [ref=e244]:
                - heading "Contact Centers" [level=3] [ref=e245]
                - paragraph [ref=e246]: Transcription, sentiment, agent intelligence
              - img [ref=e249]
          - link "Media & Entertainment Media & Entertainment Dubbing, lipsync, 200+ languages" [ref=e252] [cursor=pointer]:
            - /url: /media-entertainment
            - img "Media & Entertainment" [ref=e254]
            - generic [ref=e255]:
              - generic [ref=e256]:
                - heading "Media & Entertainment" [level=3] [ref=e257]
                - paragraph [ref=e258]: Dubbing, lipsync, 200+ languages
              - img [ref=e261]
      - generic [ref=e267]:
        - heading "Join Us" [level=2] [ref=e268]
        - paragraph [ref=e269]: We're building voice infrastructure for the next decade.
        - paragraph [ref=e270]: Hiring engineers, researchers and linguists who care about deployable intelligence.
        - link "careers@shunyalabs.ai" [ref=e272] [cursor=pointer]:
          - /url: mailto:0@shunyalabs.ai
    - contentinfo [ref=e273]:
      - generic [ref=e274]:
        - generic [ref=e275]:
          - img "Shunya Labs" [ref=e276]
          - paragraph [ref=e277]: Shunya Labs, Inc.
        - generic [ref=e278]:
          - paragraph [ref=e279]: Product
          - list [ref=e280]:
            - listitem [ref=e281]:
              - link "Overview" [ref=e282] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e283]:
              - link "Models" [ref=e284] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e285]:
              - link "Voice Agents" [ref=e286] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e287]:
              - link "Speech Intelligence" [ref=e288] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e289]:
              - link "Audio Processing" [ref=e290] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e291]:
              - link "Deployment" [ref=e292] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e293]:
          - paragraph [ref=e294]: Models
          - list [ref=e295]:
            - listitem [ref=e296]:
              - link "Language Models" [ref=e297] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e298]:
              - link "Zero STT Indic" [ref=e299] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e300]:
              - link "Zero STT Codeswitch" [ref=e301] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e302]:
              - link "Specialised Models" [ref=e303] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e304]:
              - link "Zero STT Med" [ref=e305] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e306]:
              - link "On Device Models" [ref=e307] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e308]:
          - paragraph [ref=e309]: Solutions
          - list [ref=e310]:
            - listitem [ref=e311]:
              - link "Contact Centers" [ref=e312] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e313]:
              - link "Media & Entertainment" [ref=e314] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e315]:
              - link "Healthcare" [ref=e316] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e317]:
          - paragraph [ref=e318]: Resources
          - list [ref=e319]:
            - listitem [ref=e320]:
              - link "Blogs" [ref=e321] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e322]:
              - link "Benchmarks" [ref=e323] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e324]:
              - link "News & Media" [ref=e325] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e326]:
              - link "Patents" [ref=e327] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e328]:
              - link "Research" [ref=e329] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e331]:
          - link "Documentation" [ref=e332] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e334]:
          - listitem [ref=e335]:
            - link "About us" [ref=e336] [cursor=pointer]:
              - /url: /about
        - list [ref=e338]:
          - listitem [ref=e339]:
            - link "Pricing" [ref=e340] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e341]:
        - paragraph [ref=e342]: Follow us on
        - generic [ref=e343]:
          - link [ref=e344] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e345]
          - link [ref=e347] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e348]
          - link [ref=e350] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e351]
          - link [ref=e353] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e354]
      - generic [ref=e356]:
        - paragraph [ref=e357]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e358]:
          - link "Privacy" [ref=e359] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e360] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e361] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e362] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e363] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e364]
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