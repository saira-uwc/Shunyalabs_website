# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/about/about-us/design.spec.js >> About - About Us design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [global] Footer background: expected rgb(11, 11, 15) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "☰" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Product" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Models" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Solutions" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Resources" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Documentation" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "About Us" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Pricing" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Playground" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Sign In" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Contact Sales" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "About Us" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Playground" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Sign In" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Contact Sales" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Page title: expected "About Custom Voice AI & Speech Research | Shunya Labs" but got "About Shunya Labs | Voice AI Research & Enterprise Speech AI"

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Contact Sales (/contact)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 19 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 19
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - banner:
        - generic [ref=e4]:
          - link "Shunya Labs Logo" [ref=e5] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e6]
          - button "Open menu" [ref=e7] [cursor=pointer]: ☰
      - generic [ref=e8]:
        - heading "About Shunya Labs" [level=1] [ref=e10]
        - generic [ref=e15]:
          - paragraph [ref=e16]: We’re a research-forward organization building custom voice models for regional languages and mixed speech. Our goal is to make the voice interface of technology accessible to everyone.
          - paragraph [ref=e17]: We started our journey with Zero STT, the world’s most accurate transcription model, and expanded into complete voice agents that can be deployed in air-gapped environments.
      - generic [ref=e19]:
        - heading "What Sets Us Apart" [level=2] [ref=e20]
        - generic [ref=e22]:
          - img [ref=e23]
          - generic [ref=e34]:
            - generic [ref=e35]: CUSTOM
            - heading "Foundation models" [level=3] [ref=e36]
            - paragraph [ref=e37]: We build foundation models for voice, including models that understand and produce codeswitched speech.
        - generic [ref=e38]:
          - generic [ref=e39]:
            - img [ref=e40]
            - generic [ref=e43]:
              - generic [ref=e44]: RESEARCH
              - heading "First-principles research" [level=3] [ref=e45]
              - paragraph [ref=e46]: Proprietary training methodology, model architecture, and training data to improve baseline accuracy.
          - generic [ref=e47]:
            - img [ref=e48]
            - generic [ref=e51]:
              - generic [ref=e52]: MODELS
              - heading "Built for you" [level=3] [ref=e53]
              - paragraph [ref=e54]: Custom SLMs trained on your corpus, your speakers, your terminology.
          - generic [ref=e55]:
            - img [ref=e56]
            - generic [ref=e58]:
              - generic [ref=e59]: SECURITY
              - heading "Privacy-first solutioning" [level=3] [ref=e60]
              - paragraph [ref=e61]: On-prem deployment and custom agent architectures for enterprise-grade security.
        - generic [ref=e62]:
          - generic [ref=e63]:
            - img [ref=e64]
            - generic [ref=e67]:
              - generic [ref=e68]: DEPLOYMENT
              - heading "CPU-first architecture" [level=3] [ref=e69]
              - paragraph [ref=e70]: Lightweight models designed to run on CPUs for maximum accessibility.
          - generic [ref=e71]:
            - img [ref=e72]
            - generic [ref=e79]:
              - generic [ref=e80]: PLATFORM
              - heading "Full stack orchestration" [level=3] [ref=e81]
              - paragraph [ref=e82]: End to end platform for agent orchestration, with custom logic for enterprise workflows.
          - generic [ref=e83]:
            - img [ref=e84]
            - generic [ref=e91]:
              - generic [ref=e92]: COMMUNITY
              - heading "Open-source community" [level=3] [ref=e93]
              - paragraph [ref=e94]: Commitment to open models for the community on Hugging Face.
      - generic [ref=e96]:
        - heading "Meet the Team" [level=2] [ref=e97]
        - generic [ref=e98]:
          - generic [ref=e100]:
            - img "Ritu Mehrotra profile" [ref=e102]
            - generic [ref=e103]:
              - heading "Ritu Mehrotra" [level=2] [ref=e104]
              - paragraph [ref=e105]: Co-founder & CEO
              - paragraph [ref=e106]: 2X founder. Booking.com, Zomato, Mahindra. Understands how AI fails in regulated environments, and how to make it work. MBA, IIFT Delhi.
              - link "LinkedIn profile" [ref=e107] [cursor=pointer]:
                - /url: https://in.linkedin.com/in/ritu-mehrotra-4861043
                - img [ref=e108]
          - generic [ref=e113]:
            - img "Sourav Bandyopadhyay profile" [ref=e115]
            - generic [ref=e116]:
              - heading "Sourav Bandyopadhyay" [level=2] [ref=e117]
              - paragraph [ref=e118]: Co-Founder & Chief Scientist
              - paragraph [ref=e119]: PhD Scholar, IIT Kharagpur. Proven LLMs will always hallucinate (using Gödel's Incompleteness Theorem). 12 patents, 18 papers, 23 world records. Obsessed with correctness.
              - link "LinkedIn profile" [ref=e120] [cursor=pointer]:
                - /url: https://in.linkedin.com/in/souravbandyo
                - img [ref=e121]
          - generic [ref=e126]:
            - img "Abhishek Sharma profile" [ref=e128]
            - generic [ref=e129]:
              - heading "Abhishek Sharma" [level=2] [ref=e130]
              - paragraph [ref=e131]: Co-founder & CBO
              - paragraph [ref=e132]: Helped build TenMarks (acquired by Amazon) and Dineout (acquired by Swiggy) alongside incredible teams. Learned more from the journey than the outcomes. ISB’Hyderabad (PGPMAX).
              - link "LinkedIn profile" [ref=e133] [cursor=pointer]:
                - /url: https://in.linkedin.com/in/abhishek78
                - img [ref=e134]
          - generic [ref=e139]:
            - img "Arti Khanijo profile" [ref=e141]
            - generic [ref=e142]:
              - heading "Arti Khanijo" [level=2] [ref=e143]
              - paragraph [ref=e144]: Chief Product Officer
              - paragraph [ref=e145]: Worked with global brands like Airtel, ibibo, and Tencent with over 20 years of experience across wellness and consumer tech—known for building scalable, user-first products that create real human impact at the intersection of technology and purpose.
              - link "LinkedIn profile" [ref=e146] [cursor=pointer]:
                - /url: https://in.linkedin.com/in/arti-khanijo-28697514
                - img [ref=e147]
          - generic [ref=e152]:
            - img "Vivek Jain profile" [ref=e154]
            - generic [ref=e155]:
              - heading "Vivek Jain" [level=2] [ref=e156]
              - paragraph [ref=e157]: Chief Technology Officer
              - paragraph [ref=e158]: Built large-scale data science solutions at Amazon. Expert at turning big ideas into small tasks and small problems into big insights. NIT Trichy.
              - link "LinkedIn profile" [ref=e159] [cursor=pointer]:
                - /url: https://in.linkedin.com/in/vivekjain2
                - img [ref=e160]
      - generic [ref=e163]:
        - heading "Built by a Team of Iconoclastic Researchers and Engineers" [level=2] [ref=e164]
        - img "Research Team" [ref=e166]
        - generic [ref=e167]:
          - generic [ref=e168]:
            - generic [ref=e169]:
              - img "Patents background" [ref=e170]
              - generic [ref=e172]:
                - heading "12" [level=2] [ref=e173]
                - paragraph [ref=e174]: patents
            - generic [ref=e175]:
              - generic [ref=e176]:
                - heading "18+" [level=3] [ref=e177]
                - paragraph [ref=e178]: peer-reviewed publications
              - generic [ref=e179]:
                - paragraph [ref=e180]: "Zero STT:"
                - generic [ref=e181]:
                  - heading "3.10%" [level=3] [ref=e182]
                  - generic [ref=e183]: word error rate
                - paragraph [ref=e184]: best in the industry.
              - generic [ref=e185]:
                - img "World records background" [ref=e186]
                - generic [ref=e188]:
                  - heading "23" [level=3] [ref=e189]
                  - paragraph [ref=e190]: world records
              - paragraph [ref=e193]:
                - text: Research informs
                - text: production.
                - text: Production sharpens
                - text: research.
          - link "Read our research" [ref=e195] [cursor=pointer]:
            - /url: https://www.shunyalabs.ai/patents
      - generic [ref=e197]:
        - heading "Who Uses Shunya" [level=2] [ref=e198]
        - generic [ref=e199]:
          - link "Healthcare Healthcare Clinical documentation, transcription" [ref=e200] [cursor=pointer]:
            - /url: /healthcare
            - img "Healthcare" [ref=e202]
            - generic [ref=e203]:
              - generic [ref=e204]:
                - heading "Healthcare" [level=3] [ref=e205]
                - paragraph [ref=e206]: Clinical documentation, transcription
              - img [ref=e209]
          - link "Contact Centers Contact Centers Transcription, sentiment, agent intelligence" [ref=e212] [cursor=pointer]:
            - /url: /contact-centers
            - img "Contact Centers" [ref=e214]
            - generic [ref=e215]:
              - generic [ref=e216]:
                - heading "Contact Centers" [level=3] [ref=e217]
                - paragraph [ref=e218]: Transcription, sentiment, agent intelligence
              - img [ref=e221]
          - link "Media & Entertainment Media & Entertainment Dubbing, lipsync, 200+ languages" [ref=e224] [cursor=pointer]:
            - /url: /media-entertainment
            - img "Media & Entertainment" [ref=e226]
            - generic [ref=e227]:
              - generic [ref=e228]:
                - heading "Media & Entertainment" [level=3] [ref=e229]
                - paragraph [ref=e230]: Dubbing, lipsync, 200+ languages
              - img [ref=e233]
      - generic [ref=e239]:
        - heading "Join Us" [level=2] [ref=e240]
        - paragraph [ref=e241]: We're building voice infrastructure for the next decade.
        - paragraph [ref=e242]: Hiring engineers, researchers and linguists who care about deployable intelligence.
        - link "careers@shunyalabs.ai" [ref=e244] [cursor=pointer]:
          - /url: mailto:careers@shunyalabs.ai
    - contentinfo [ref=e245]:
      - generic [ref=e246]:
        - generic [ref=e247]:
          - img "Shunya Labs" [ref=e248]
          - paragraph [ref=e249]: Shunya Labs, Inc.
        - generic [ref=e250]:
          - paragraph [ref=e251]: Product
          - list [ref=e252]:
            - listitem [ref=e253]:
              - link "Overview" [ref=e254] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e255]:
              - link "Models" [ref=e256] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e257]:
              - link "Voice Agents" [ref=e258] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e259]:
              - link "Speech Intelligence" [ref=e260] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e261]:
              - link "Audio Processing" [ref=e262] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e263]:
              - link "Deployment" [ref=e264] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e265]:
          - paragraph [ref=e266]: Models
          - list [ref=e267]:
            - listitem [ref=e268]:
              - link "Language Models" [ref=e269] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e270]:
              - link "Zero STT Indic" [ref=e271] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e272]:
              - link "Zero STT Codeswitch" [ref=e273] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e274]:
              - link "Specialised Models" [ref=e275] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e276]:
              - link "Zero STT Med" [ref=e277] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e278]:
              - link "On Device Models" [ref=e279] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e280]:
          - paragraph [ref=e281]: Solutions
          - list [ref=e282]:
            - listitem [ref=e283]:
              - link "Contact Centers" [ref=e284] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e285]:
              - link "Media & Entertainment" [ref=e286] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e287]:
              - link "Healthcare" [ref=e288] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e289]:
          - paragraph [ref=e290]: Resources
          - list [ref=e291]:
            - listitem [ref=e292]:
              - link "Blogs" [ref=e293] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e294]:
              - link "Benchmarks" [ref=e295] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e296]:
              - link "News & Media" [ref=e297] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e298]:
              - link "Patents" [ref=e299] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e300]:
              - link "Research" [ref=e301] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e303]:
          - link "Documentation" [ref=e304] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e306]:
          - listitem [ref=e307]:
            - link "About us" [ref=e308] [cursor=pointer]:
              - /url: /about
        - list [ref=e310]:
          - listitem [ref=e311]:
            - link "Pricing" [ref=e312] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e313]:
        - paragraph [ref=e314]: Follow us on
        - generic [ref=e315]:
          - link [ref=e316] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e317]
          - link [ref=e319] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e320]
          - link [ref=e322] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e323]
          - link [ref=e325] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e326]
      - generic [ref=e328]:
        - paragraph [ref=e329]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e330]:
          - link "Privacy" [ref=e331] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e332] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e333] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e334] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e335] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e336]
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
     |                                                                                      ^ Error: 19 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```