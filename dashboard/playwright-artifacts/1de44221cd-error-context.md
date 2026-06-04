# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/pricing/pricing/design.spec.js >> Pricing - Pricing design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Page title: expected "Shunya Labs Pricing" but got "STT, TTS, Voice Agents & Audio AI Pricing | Shunya Labs"

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
    - generic [ref=e37]:
      - heading "Shunya Labs Plans" [level=1] [ref=e38]
      - heading "Flexible pricing for every scenario" [level=2] [ref=e39]
    - generic [ref=e41]:
      - generic [ref=e43]:
        - heading "Pay as you go" [level=3] [ref=e44]
        - generic [ref=e46]:
          - paragraph [ref=e47]: Free
          - paragraph [ref=e48]: $200
          - paragraph [ref=e49]: of Credit
        - paragraph [ref=e50]: Then pay-as-you-go. No minimums. No expiration. No credit card required.
        - list [ref=e51]:
          - listitem [ref=e52]:
            - img [ref=e54]
            - generic [ref=e56]: Industry leading speech to text foundation models
          - listitem [ref=e57]:
            - img [ref=e59]
            - generic [ref=e61]: Advanced intelligence features
          - listitem [ref=e62]:
            - img [ref=e64]
            - generic [ref=e66]: Custom voice agent orchestrations
        - button "Start for free" [ref=e67] [cursor=pointer]
      - generic [ref=e71]:
        - heading "Volume" [level=3] [ref=e72]
        - paragraph [ref=e74]: $500
        - paragraph [ref=e75]: Prepaid credits for the year with up to 10% lower rates on all services. Credits are redeemed against actual usage.
        - list [ref=e76]:
          - listitem [ref=e77]:
            - img [ref=e80]
            - generic [ref=e82]: Industry leading speech to text foundation models
          - listitem [ref=e83]:
            - img [ref=e86]
            - generic [ref=e88]: Advanced intelligence features
          - listitem [ref=e89]:
            - img [ref=e92]
            - generic [ref=e94]: Custom voice agent orchestrations
        - button "Buy Now" [ref=e95] [cursor=pointer]
      - generic [ref=e97]:
        - heading "Enterprise" [level=3] [ref=e98]
        - paragraph [ref=e100]: Custom pricing
        - paragraph [ref=e101]: For businesses with large volumes, data or deployment requirements, or support needs.
        - list [ref=e102]:
          - listitem [ref=e103]:
            - img [ref=e105]
            - generic [ref=e107]: Access all models with our best discounts
          - listitem [ref=e108]:
            - img [ref=e110]
            - generic [ref=e112]: Access to custom-trained speech-to-text models and intelligence features
          - listitem [ref=e113]:
            - img [ref=e115]
            - generic [ref=e117]: Highest concurrency support
          - listitem [ref=e118]:
            - img [ref=e120]
            - generic [ref=e122]: Self-hosted deployment options
          - listitem [ref=e123]:
            - img [ref=e125]
            - generic [ref=e127]: Dedicated SLAs and support
        - button "Contact Sales" [ref=e128] [cursor=pointer]
    - generic [ref=e129]:
      - generic [ref=e130]:
        - heading "Voice Agents" [level=2] [ref=e131]
        - paragraph [ref=e132]: Calculate your per minute cost for voice agents.
      - generic [ref=e133]:
        - generic [ref=e134]:
          - generic [ref=e135]:
            - generic [ref=e136]:
              - img [ref=e138]
              - heading "Speech to text" [level=4] [ref=e141]
            - generic [ref=e142]:
              - generic [ref=e143]:
                - text: Provider
                - button "Shunya Labs" [ref=e145] [cursor=pointer]:
                  - generic [ref=e146]: Shunya Labs
                  - img [ref=e147]
              - generic [ref=e149]:
                - text: Model
                - button "Zero STT $0.0045/min" [ref=e151] [cursor=pointer]:
                  - generic [ref=e152]: Zero STT
                  - generic [ref=e153]:
                    - generic [ref=e154]: $0.0045/min
                    - img [ref=e155]
          - generic [ref=e157]:
            - generic [ref=e158]:
              - img [ref=e160]
              - heading "LLM" [level=4] [ref=e172]
            - generic [ref=e173]:
              - generic [ref=e174]:
                - text: Provider
                - button "Open AI" [ref=e176] [cursor=pointer]:
                  - generic [ref=e177]: Open AI
                  - img [ref=e178]
              - generic [ref=e180]:
                - text: Model
                - button "gpt-4o-mini $0.0034/min" [ref=e182] [cursor=pointer]:
                  - generic [ref=e183]: gpt-4o-mini
                  - generic [ref=e184]:
                    - generic [ref=e185]: $0.0034/min
                    - img [ref=e186]
          - generic [ref=e188]:
            - generic [ref=e189]:
              - img [ref=e191]
              - heading "Text to Speech" [level=4] [ref=e195]
            - generic [ref=e196]:
              - generic [ref=e197]:
                - text: Provider
                - button "Open AI" [ref=e199] [cursor=pointer]:
                  - generic [ref=e200]: Open AI
                  - img [ref=e201]
              - generic [ref=e203]:
                - text: Model
                - button "alloy $0.0075/min" [ref=e205] [cursor=pointer]:
                  - generic [ref=e206]: alloy
                  - generic [ref=e207]:
                    - generic [ref=e208]: $0.0075/min
                    - img [ref=e209]
        - generic [ref=e211]:
          - heading "Estimated cost/minute" [level=3] [ref=e212]
          - generic [ref=e213]: $0.0154
          - img [ref=e215]
          - generic [ref=e219]:
            - generic [ref=e220]:
              - generic [ref=e223]: Speech to text
              - generic [ref=e224]: $ 0.0045
            - generic [ref=e225]:
              - generic [ref=e228]: LLM
              - generic [ref=e229]: $ 0.0034
            - generic [ref=e230]:
              - generic [ref=e233]: Text to Speech
              - generic [ref=e234]: $ 0.0075
      - generic [ref=e235]:
        - generic [ref=e236]:
          - generic [ref=e237]:
            - heading "Estimate your monthly custom plan for voice agents:" [level=4] [ref=e238]
            - generic [ref=e240]: $ 18.48
          - generic [ref=e241]:
            - slider [ref=e242] [cursor=pointer]: "1"
            - generic [ref=e243]:
              - generic [ref=e246]: "10"
              - generic [ref=e249]: "20"
              - generic [ref=e252]: "30"
              - generic [ref=e255]: "40"
              - generic [ref=e258]: "50"
              - generic [ref=e261]: "60"
              - generic [ref=e264]: "70"
              - generic [ref=e267]: "80"
              - generic [ref=e270]: "90"
              - generic [ref=e273]: "100"
              - generic [ref=e276]: "200"
              - generic [ref=e279]: "300"
              - generic [ref=e282]: "400"
              - generic [ref=e285]: "500"
          - generic [ref=e286]: Hours required per month
        - link "Add $18 to wallet" [ref=e287] [cursor=pointer]:
          - /url: /contact
    - generic [ref=e288]:
      - generic [ref=e289]:
        - heading "Speech to Text" [level=2] [ref=e290]
        - paragraph [ref=e291]: Industry-best speech to text foundation models for superior performance.
      - generic [ref=e292]:
        - button "Batch" [ref=e293] [cursor=pointer]
        - button "Realtime" [ref=e294] [cursor=pointer]
      - generic [ref=e295]:
        - generic [ref=e296]:
          - heading "Model" [level=3] [ref=e298]
          - heading "Pay as you go (USD/min)" [level=3] [ref=e300]:
            - text: Pay as you go
            - generic [ref=e301]: (USD/min)
          - heading "Volume (USD/min)" [level=3] [ref=e303]:
            - text: Volume
            - generic [ref=e304]: (USD/min)
        - generic [ref=e305]:
          - generic [ref=e306]:
            - generic [ref=e307]:
              - heading "Zero STT" [level=4] [ref=e308]
              - paragraph [ref=e309]: Supports 200+ languages
            - generic [ref=e311]: $0.0039
            - generic [ref=e313]: $0.0035
          - generic [ref=e314]:
            - generic [ref=e315]:
              - heading "Zero STT Indic" [level=4] [ref=e316]
              - paragraph [ref=e317]: Superior accuracy for Indic languages
            - generic [ref=e319]: $0.0045
            - generic [ref=e321]: $0.0040
          - generic [ref=e322]:
            - generic [ref=e323]:
              - heading "Zero STT Codeswitch" [level=4] [ref=e324]
              - paragraph [ref=e325]: Native codeswitch model for multilingual speech
            - generic [ref=e327]: $0.0050
            - generic [ref=e329]: $0.0045
          - generic [ref=e330]:
            - generic [ref=e331]:
              - heading "Zero STT Med" [level=4] [ref=e332]
              - paragraph [ref=e333]: Specialised model for healthcare transcriptions
            - generic [ref=e335]: $0.0050
            - generic [ref=e337]: $0.0045
          - generic [ref=e338]:
            - generic [ref=e339]:
              - heading "Zero STT Numerical" [level=4] [ref=e340]
              - paragraph [ref=e341]: Specialised model for transcripts containing numerical values
            - generic [ref=e343]: $0.0050
            - generic [ref=e345]: $0.0045
      - link "Contact Sales" [ref=e347] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e348]:
      - generic [ref=e349]:
        - heading "Audio Processing" [level=2] [ref=e350]
        - paragraph [ref=e351]: Get better transcripts with cleaner audio.
      - generic [ref=e352]:
        - generic [ref=e353]:
          - heading "Product" [level=3] [ref=e355]
          - heading "Pay as you go (USD/min)" [level=3] [ref=e357]:
            - text: Pay as you go
            - generic [ref=e358]: (USD/min)
          - heading "Volume (USD/min)" [level=3] [ref=e360]:
            - text: Volume
            - generic [ref=e361]: (USD/min)
        - generic [ref=e362]:
          - generic [ref=e363]:
            - heading "Denoiser" [level=4] [ref=e365]
            - generic [ref=e367]: $0.0039
            - generic [ref=e369]: $0.0034
          - generic [ref=e370]:
            - heading "Enhancer" [level=4] [ref=e372]
            - generic [ref=e374]: $0.0039
            - generic [ref=e376]: $0.0034
    - generic [ref=e377]:
      - generic [ref=e378]:
        - heading "Speech Intelligence Features" [level=2] [ref=e379]
        - paragraph [ref=e380]: Get analytics directly from speech and formatted outputs for integration into your workflows.
      - generic [ref=e381]:
        - generic [ref=e382]:
          - heading "Feature" [level=3] [ref=e384]
          - heading "Pay as you go (USD/min)" [level=3] [ref=e386]:
            - text: Pay as you go
            - generic [ref=e387]: (USD/min)
          - heading "Volume (USD/min)" [level=3] [ref=e389]:
            - text: Volume
            - generic [ref=e390]: (USD/min)
        - generic [ref=e391]:
          - generic [ref=e392]:
            - generic [ref=e393]:
              - heading "Language Identification" [level=4] [ref=e394]
              - paragraph [ref=e395]: Automatically detect the language in your audio files
            - generic [ref=e397]: $0.0001
            - generic [ref=e399]: $0.00009
          - generic [ref=e400]:
            - generic [ref=e401]:
              - heading "Translation" [level=4] [ref=e402]
              - paragraph [ref=e403]: Translate audio during or after transcription
            - generic [ref=e405]: $0.0003
            - generic [ref=e407]: $0.00027
          - generic [ref=e408]:
            - generic [ref=e409]:
              - heading "Transliteration" [level=4] [ref=e410]
              - paragraph [ref=e411]: Convert output to your preferred script
            - generic [ref=e413]: $0.0003
            - generic [ref=e415]: $0.00027
          - generic [ref=e416]:
            - generic [ref=e417]:
              - heading "Speaker Diarization" [level=4] [ref=e418]
              - paragraph [ref=e419]: Separate transcripts by speaker automatically
            - generic [ref=e421]: $0.0012
            - generic [ref=e423]: $0.00100
          - generic [ref=e424]:
            - generic [ref=e425]:
              - heading "Speaker Identification" [level=4] [ref=e426]
              - paragraph [ref=e427]: Customize speaker labels for personalized transcripts
            - generic [ref=e429]: $0.0009
            - generic [ref=e431]: $0.00080
          - generic [ref=e432]:
            - generic [ref=e433]:
              - heading "Word Timestamps" [level=4] [ref=e434]
              - paragraph [ref=e435]: Word-level timing for precise navigation
            - generic [ref=e437]: $0.0012
            - generic [ref=e439]: $0.00100
          - generic [ref=e440]:
            - generic [ref=e441]:
              - heading "Profanity and Keyword Hashing" [level=4] [ref=e442]
              - paragraph [ref=e443]: Filter and mask profanity or custom keywords
            - generic [ref=e445]: $0.0003
            - generic [ref=e447]: $0.00027
          - generic [ref=e448]:
            - generic [ref=e449]:
              - heading "Intent Detection" [level=4] [ref=e450]
              - paragraph [ref=e451]: Understand the purpose behind every conversation
            - generic [ref=e453]: $0.0003
            - generic [ref=e455]: $0.00027
          - generic [ref=e456]:
            - generic [ref=e457]:
              - heading "Sentiment Analysis" [level=4] [ref=e458]
              - paragraph [ref=e459]: Track emotional tone across interactions
            - generic [ref=e461]: $0.0003
            - generic [ref=e463]: $0.00027
          - generic [ref=e464]:
            - generic [ref=e465]:
              - heading "Emotion Diarization" [level=4] [ref=e466]
              - paragraph [ref=e467]: Get granular emotion tracking throughout conversations
            - generic [ref=e469]: $0.0005
            - generic [ref=e471]: $0.00045
          - generic [ref=e472]:
            - generic [ref=e473]:
              - heading "Summarization" [level=4] [ref=e474]
              - paragraph [ref=e475]: Generate concise summaries from audio or text
            - generic [ref=e477]: $0.0003
            - generic [ref=e479]: $0.00027
          - generic [ref=e480]:
            - generic [ref=e481]:
              - heading "Keyword Normalization" [level=4] [ref=e482]
              - paragraph [ref=e483]: Standardize brand names, acronyms, and custom terminology
            - generic [ref=e485]: $0.0003
            - generic [ref=e487]: $0.00027
          - generic [ref=e488]:
            - generic [ref=e489]:
              - heading "Medical Keyterm Correction" [level=4] [ref=e490]
              - paragraph [ref=e491]: Ensure accurate transcription of medical terminology
            - generic [ref=e493]: $0.0003
            - generic [ref=e495]: $0.00027
    - generic [ref=e497]:
      - heading "Frequently Asked Questions" [level=2] [ref=e498]
      - generic [ref=e499]:
        - button "What plans does Shunya Labs offer?" [ref=e501] [cursor=pointer]:
          - generic [ref=e502]: What plans does Shunya Labs offer?
          - img [ref=e504]
        - button "How do I receive my free credits?" [ref=e507] [cursor=pointer]:
          - generic [ref=e508]: How do I receive my free credits?
          - img [ref=e510]
        - button "Do my credits expire?" [ref=e513] [cursor=pointer]:
          - generic [ref=e514]: Do my credits expire?
          - img [ref=e516]
        - button "What happens when I switch plans?" [ref=e519] [cursor=pointer]:
          - generic [ref=e520]: What happens when I switch plans?
          - img [ref=e522]
        - button "What happens if I run out of credits on the Volume plan?" [ref=e525] [cursor=pointer]:
          - generic [ref=e526]: What happens if I run out of credits on the Volume plan?
          - img [ref=e528]
    - contentinfo [ref=e530]:
      - generic [ref=e531]:
        - generic [ref=e532]:
          - img "Shunya Labs" [ref=e533]
          - paragraph [ref=e534]: Shunya Labs, Inc.
        - generic [ref=e535]:
          - paragraph [ref=e536]: Product
          - list [ref=e537]:
            - listitem [ref=e538]:
              - link "Overview" [ref=e539] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e540]:
              - link "Models" [ref=e541] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e542]:
              - link "Voice Agents" [ref=e543] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e544]:
              - link "Speech Intelligence" [ref=e545] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e546]:
              - link "Audio Processing" [ref=e547] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e548]:
              - link "Deployment" [ref=e549] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e550]:
          - paragraph [ref=e551]: Models
          - list [ref=e552]:
            - listitem [ref=e553]:
              - link "Language Models" [ref=e554] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e555]:
              - link "Zero STT Indic" [ref=e556] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e557]:
              - link "Zero STT Codeswitch" [ref=e558] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e559]:
              - link "Specialised Models" [ref=e560] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e561]:
              - link "Zero STT Med" [ref=e562] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e563]:
              - link "On Device Models" [ref=e564] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e565]:
          - paragraph [ref=e566]: Solutions
          - list [ref=e567]:
            - listitem [ref=e568]:
              - link "Contact Centers" [ref=e569] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e570]:
              - link "Media & Entertainment" [ref=e571] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e572]:
              - link "Healthcare" [ref=e573] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e574]:
          - paragraph [ref=e575]: Resources
          - list [ref=e576]:
            - listitem [ref=e577]:
              - link "Blogs" [ref=e578] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e579]:
              - link "Benchmarks" [ref=e580] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e581]:
              - link "News & Media" [ref=e582] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e583]:
              - link "Patents" [ref=e584] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e585]:
              - link "Research" [ref=e586] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e588]:
          - link "Documentation" [ref=e589] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e591]:
          - listitem [ref=e592]:
            - link "About us" [ref=e593] [cursor=pointer]:
              - /url: /about
        - list [ref=e595]:
          - listitem [ref=e596]:
            - link "Pricing" [ref=e597] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e598]:
        - paragraph [ref=e599]: Follow us on
        - generic [ref=e600]:
          - link [ref=e601] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e602]
          - link [ref=e604] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e605]
          - link [ref=e607] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e608]
          - link [ref=e610] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e611]
      - generic [ref=e613]:
        - paragraph [ref=e614]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e615]:
          - link "Privacy" [ref=e616] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e617] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e618] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e619] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e620] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e621]
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