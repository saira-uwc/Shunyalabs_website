# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/about/about-us/design.spec.js >> About - About Us design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [headings] Heading "Foundation models" font-size: expected 26px but got 20px

expect(received).toBeTruthy()

Received: null
```

```
Error: [headings] Heading "Built for you" (h3) not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "© 2026 Shunya Labs, Inc. All rights reserved." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "We build foundation models for voice, including models that understand and produce codeswitched speech." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Built for you" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Custom SLMs trained on your corpus, your speakers, your terminology." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Lightweight models designed to run on CPUs for maximum accessibility." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "End to end platform for agent orchestration, with custom logic for enterprise workflows." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "© 2026 Shunya Labs, Inc. All rights reserved." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 9 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 9
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
        - heading "About Shunya Labs" [level=1] [ref=e11]
        - generic [ref=e16]:
          - paragraph [ref=e17]: We’re a research-forward organization building custom voice models for regional languages and mixed speech. Our goal is to make the voice interface of technology accessible to everyone.
          - paragraph [ref=e18]: We started our journey with Zero STT, the world’s most accurate transcription model, and expanded into complete voice agents that can be deployed in air-gapped environments.
      - generic [ref=e20]:
        - heading "What Sets Us Apart" [level=2] [ref=e21]
        - generic [ref=e22]:
          - generic [ref=e23]:
            - img [ref=e24]
            - generic [ref=e27]: RESEARCH
            - heading "First-principles research" [level=3] [ref=e28]
            - paragraph [ref=e29]: Proprietary training methodology, model architecture, and training data to improve baseline accuracy.
          - generic [ref=e30]:
            - img [ref=e31]
            - generic [ref=e34]: MODELS
            - heading "Foundation models" [level=3] [ref=e35]
            - paragraph [ref=e36]: We build foundation models for voice, including models that understand and produce state-of-the-art speech.
          - generic [ref=e37]:
            - img [ref=e38]
            - generic [ref=e40]: SECURITY
            - heading "Privacy-first solutioning" [level=3] [ref=e41]
            - paragraph [ref=e42]: On-prem deployment and custom agent architectures for enterprise-grade security.
          - generic [ref=e43]:
            - img [ref=e44]
            - generic [ref=e47]: DEPLOYMENT
            - heading "CPU-first architecture" [level=3] [ref=e48]
            - paragraph [ref=e49]: Lightweight models designed to run on a CPU for maximum accessibility.
          - generic [ref=e50]:
            - img [ref=e51]
            - generic [ref=e58]: PLATFORM
            - heading "Full stack orchestration" [level=3] [ref=e59]
            - paragraph [ref=e60]: End-to-end platform for agent orchestration, with custom logic for enterprise workflows.
          - generic [ref=e61]:
            - img [ref=e62]
            - generic [ref=e69]: COMMUNITY
            - heading "Open-source community" [level=3] [ref=e70]
            - paragraph [ref=e71]: Commitment to open models for the community on Hugging Face.
      - generic [ref=e73]:
        - heading "Meet the Team" [level=2] [ref=e74]
        - generic [ref=e75]:
          - generic [ref=e77]:
            - img "Ritu Mehrotra profile" [ref=e79]
            - generic [ref=e80]:
              - heading "Ritu Mehrotra" [level=2] [ref=e81]
              - paragraph [ref=e82]: Co-founder & CEO
              - paragraph [ref=e83]: 2X founder. Booking.com, Zomato, Mahindra. Understands how AI fails in regulated environments, and how to make it work. MBA, IIFT Delhi.
              - link "LinkedIn profile" [ref=e84] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/ritu-mehrotra-4861043/
                - img [ref=e85]
          - generic [ref=e90]:
            - img "Sourav Bandyopadhyay profile" [ref=e92]
            - generic [ref=e93]:
              - heading "Sourav Bandyopadhyay" [level=2] [ref=e94]
              - paragraph [ref=e95]: Co-Founder & Chief Scientist
              - paragraph [ref=e96]: PhD Scholar, IIT Kharagpur. Proven LLMs will always hallucinate (using Gödel's Incompleteness Theorem). 12 patents, 18 papers, 23 world records. Obsessed with correctness.
              - link "LinkedIn profile" [ref=e97] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/souravbandyo/
                - img [ref=e98]
          - generic [ref=e103]:
            - img "Abhishek Sharma profile" [ref=e105]
            - generic [ref=e106]:
              - heading "Abhishek Sharma" [level=2] [ref=e107]
              - paragraph [ref=e108]: Co-founder & CBO
              - paragraph [ref=e109]: Helped build TenMarks (acquired by Amazon) and Dineout (acquired by Swiggy) alongside incredible teams. Learned more from the journey than the outcomes. ISB’Hyderabad (PGPMAX).
              - link "LinkedIn profile" [ref=e110] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/abhishek78/
                - img [ref=e111]
          - generic [ref=e116]:
            - img "Arti Khanijo profile" [ref=e118]
            - generic [ref=e119]:
              - heading "Arti Khanijo" [level=2] [ref=e120]
              - paragraph [ref=e121]: Chief Product Officer
              - paragraph [ref=e122]: Worked with global brands like Airtel, ibibo, and Tencent with over 20 years of experience across wellness and consumer tech—known for building scalable, user-first products that create real human impact at the intersection of technology and purpose.
              - link "LinkedIn profile" [ref=e123] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/arti-khanijo-28697514/
                - img [ref=e124]
          - generic [ref=e129]:
            - img "Vivek Jain profile" [ref=e131]
            - generic [ref=e132]:
              - heading "Vivek Jain" [level=2] [ref=e133]
              - paragraph [ref=e134]: Chief Technology Officer
              - paragraph [ref=e135]: Built large-scale data science solutions at Amazon. Expert at turning big ideas into small tasks and small problems into big insights. NIT Trichy.
              - link "LinkedIn profile" [ref=e136] [cursor=pointer]:
                - /url: https://www.linkedin.com/in/vivekjain2/
                - img [ref=e137]
      - generic [ref=e140]:
        - heading "Built by a Team of Iconoclastic Researchers and Engineers" [level=2] [ref=e141]
        - img "Research Team" [ref=e143]
        - generic [ref=e144]:
          - generic [ref=e145]:
            - generic [ref=e146]:
              - img "Patents background" [ref=e147]
              - generic [ref=e149]:
                - heading "12" [level=2] [ref=e150]
                - paragraph [ref=e151]: patents
            - generic [ref=e152]:
              - generic [ref=e153]:
                - heading "18+" [level=3] [ref=e154]
                - paragraph [ref=e155]: peer-reviewed publications
              - generic [ref=e156]:
                - paragraph [ref=e157]: "Zero STT:"
                - generic [ref=e158]:
                  - heading "3.10%" [level=3] [ref=e159]
                  - generic [ref=e160]: word error rate
                - paragraph [ref=e161]: best in the industry.
              - generic [ref=e162]:
                - img "World records background" [ref=e163]
                - generic [ref=e165]:
                  - heading "23" [level=3] [ref=e166]
                  - paragraph [ref=e167]: world records
              - paragraph [ref=e170]:
                - text: Research informs
                - text: production.
                - text: Production sharpens
                - text: research.
          - link "Read our research" [ref=e172] [cursor=pointer]:
            - /url: https://www.shunyalabs.ai/patents
      - generic [ref=e174]:
        - heading "Who Uses Shunya" [level=2] [ref=e175]
        - generic [ref=e176]:
          - link "Healthcare Healthcare Clinical documentation, transcription" [ref=e177] [cursor=pointer]:
            - /url: /healthcare
            - img "Healthcare" [ref=e179]
            - generic [ref=e180]:
              - generic [ref=e181]:
                - heading "Healthcare" [level=3] [ref=e182]
                - paragraph [ref=e183]: Clinical documentation, transcription
              - img [ref=e186]
          - link "Contact Centers Contact Centers Transcription, sentiment, agent intelligence" [ref=e189] [cursor=pointer]:
            - /url: /contact-centers
            - img "Contact Centers" [ref=e191]
            - generic [ref=e192]:
              - generic [ref=e193]:
                - heading "Contact Centers" [level=3] [ref=e194]
                - paragraph [ref=e195]: Transcription, sentiment, agent intelligence
              - img [ref=e198]
          - link "Media & Entertainment Media & Entertainment Dubbing, lipsync, 200+ languages" [ref=e201] [cursor=pointer]:
            - /url: /media-entertainment
            - img "Media & Entertainment" [ref=e203]
            - generic [ref=e204]:
              - generic [ref=e205]:
                - heading "Media & Entertainment" [level=3] [ref=e206]
                - paragraph [ref=e207]: Dubbing, lipsync, 200+ languages
              - img [ref=e210]
      - generic [ref=e216]:
        - heading "Join Us" [level=2] [ref=e217]
        - paragraph [ref=e218]: We're building voice infrastructure for the next decade.
        - paragraph [ref=e219]: Hiring engineers, researchers and linguists who care about deployable intelligence.
        - link "careers@shunyalabs.ai" [ref=e221] [cursor=pointer]:
          - /url: mailto:0@shunyalabs.ai
    - contentinfo [ref=e222]:
      - generic [ref=e223]:
        - generic [ref=e224]:
          - img "Shunya Labs" [ref=e225]
          - paragraph [ref=e226]: Shunya Labs, Inc.
        - generic [ref=e227]:
          - paragraph [ref=e228]: Product
          - list [ref=e229]:
            - listitem [ref=e230]:
              - link "Overview" [ref=e231] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e232]:
              - link "Models" [ref=e233] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e234]:
              - link "Voice Agents" [ref=e235] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e236]:
              - link "Speech Intelligence" [ref=e237] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e238]:
              - link "Audio Processing" [ref=e239] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e240]:
              - link "Deployment" [ref=e241] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e242]:
          - paragraph [ref=e243]: Models
          - list [ref=e244]:
            - listitem [ref=e245]:
              - link "Language Models" [ref=e246] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e247]:
              - link "Zero STT Indic" [ref=e248] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e249]:
              - link "Zero STT Codeswitch" [ref=e250] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e251]:
              - link "Specialised Models" [ref=e252] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e253]:
              - link "Zero STT Med" [ref=e254] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e255]:
              - link "On Device Models" [ref=e256] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e257]:
          - paragraph [ref=e258]: Solutions
          - list [ref=e259]:
            - listitem [ref=e260]:
              - link "Contact Centers" [ref=e261] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e262]:
              - link "Media & Entertainment" [ref=e263] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e264]:
              - link "Healthcare" [ref=e265] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e266]:
          - paragraph [ref=e267]: Resources
          - list [ref=e268]:
            - listitem [ref=e269]:
              - link "Blogs" [ref=e270] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e271]:
              - link "Benchmarks" [ref=e272] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e273]:
              - link "News & Media" [ref=e274] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e275]:
              - link "Patents" [ref=e276] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e277]:
              - link "Research" [ref=e278] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e280]:
          - link "Documentation" [ref=e281] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e283]:
          - listitem [ref=e284]:
            - link "About us" [ref=e285] [cursor=pointer]:
              - /url: /about
        - list [ref=e287]:
          - listitem [ref=e288]:
            - link "Pricing" [ref=e289] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e290]:
        - paragraph [ref=e291]: Follow us on
        - generic [ref=e292]:
          - link [ref=e293] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e294]
          - link [ref=e296] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e297]
          - link [ref=e299] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e300]
          - link [ref=e302] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e303]
      - generic [ref=e305]:
        - paragraph [ref=e306]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e307]:
          - link "Privacy" [ref=e308] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e309] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e310] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e311] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e312] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e313]
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
     |                                                                                      ^ Error: 9 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```