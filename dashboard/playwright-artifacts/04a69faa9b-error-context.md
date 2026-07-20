# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/pricing/pricing/design.spec.js >> Pricing - Pricing design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [layout] Section "Frequently Asked Questions" background: expected rgb(11, 11, 15) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

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
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [buttons] Button "☰" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [buttons] Button "Product" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [buttons] Button "Models" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [buttons] Button "Solutions" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [buttons] Button "Resources" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [buttons] Button "Sign In" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 23 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 23
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - banner:
      - generic [ref=e4]:
        - link "Shunya Labs Logo" [ref=e5] [cursor=pointer]:
          - /url: /
          - img "Shunya Labs Logo" [ref=e6]
        - button "Open menu" [ref=e7] [cursor=pointer]: ☰
    - generic [ref=e9]:
      - heading "Shunya Labs Plans" [level=1] [ref=e10]
      - heading "Flexible pricing for every scenario" [level=2] [ref=e11]
    - generic [ref=e13]:
      - generic [ref=e15]:
        - heading "Pay as you go" [level=3] [ref=e16]
        - generic [ref=e18]:
          - paragraph [ref=e19]: Free
          - paragraph [ref=e20]: $200
          - paragraph [ref=e21]: of Credit
        - paragraph [ref=e22]: Then pay-as-you-go. No minimums. No expiration. No credit card required.
        - list [ref=e23]:
          - listitem [ref=e24]:
            - img [ref=e26]
            - generic [ref=e28]: Industry leading speech to text foundation models
          - listitem [ref=e29]:
            - img [ref=e31]
            - generic [ref=e33]: Advanced intelligence features
          - listitem [ref=e34]:
            - img [ref=e36]
            - generic [ref=e38]: Custom voice agent orchestrations
        - button "Start for free" [ref=e39] [cursor=pointer]
      - generic [ref=e43]:
        - heading "Volume" [level=3] [ref=e44]
        - paragraph [ref=e46]: $500
        - paragraph [ref=e47]: Prepaid credits for the year with up to 10% lower rates on all services. Credits are redeemed against actual usage.
        - list [ref=e48]:
          - listitem [ref=e49]:
            - img [ref=e52]
            - generic [ref=e54]: Industry leading speech to text foundation models
          - listitem [ref=e55]:
            - img [ref=e58]
            - generic [ref=e60]: Advanced intelligence features
          - listitem [ref=e61]:
            - img [ref=e64]
            - generic [ref=e66]: Custom voice agent orchestrations
        - button "Buy Now" [ref=e67] [cursor=pointer]
      - generic [ref=e69]:
        - heading "Enterprise" [level=3] [ref=e70]
        - paragraph [ref=e72]: Custom pricing
        - paragraph [ref=e73]: For businesses with large volumes, data or deployment requirements, or support needs.
        - list [ref=e74]:
          - listitem [ref=e75]:
            - img [ref=e77]
            - generic [ref=e79]: Access all models with our best discounts
          - listitem [ref=e80]:
            - img [ref=e82]
            - generic [ref=e84]: Access to custom-trained speech-to-text models and intelligence features
          - listitem [ref=e85]:
            - img [ref=e87]
            - generic [ref=e89]: Highest concurrency support
          - listitem [ref=e90]:
            - img [ref=e92]
            - generic [ref=e94]: Self-hosted deployment options
          - listitem [ref=e95]:
            - img [ref=e97]
            - generic [ref=e99]: Dedicated SLAs and support
        - button "Contact Sales" [ref=e100] [cursor=pointer]
    - generic [ref=e101]:
      - generic [ref=e102]:
        - heading "Voice Agents" [level=2] [ref=e103]
        - paragraph [ref=e104]: Calculate your per minute cost for voice agents.
      - generic [ref=e105]:
        - generic [ref=e106]:
          - generic [ref=e107]:
            - generic [ref=e108]:
              - img [ref=e110]
              - heading "Speech to text" [level=4] [ref=e113]
            - generic [ref=e114]:
              - generic [ref=e115]:
                - text: Provider
                - button "Shunya Labs" [ref=e117] [cursor=pointer]:
                  - generic [ref=e118]: Shunya Labs
                  - img [ref=e119]
              - generic [ref=e121]:
                - text: Model
                - button "Zero STT $0.0045/min" [ref=e123] [cursor=pointer]:
                  - generic [ref=e124]: Zero STT
                  - generic [ref=e125]:
                    - generic [ref=e126]: $0.0045/min
                    - img [ref=e127]
          - generic [ref=e129]:
            - generic [ref=e130]:
              - img [ref=e132]
              - heading "LLM" [level=4] [ref=e144]
            - generic [ref=e145]:
              - generic [ref=e146]:
                - text: Provider
                - button "Open AI" [ref=e148] [cursor=pointer]:
                  - generic [ref=e149]: Open AI
                  - img [ref=e150]
              - generic [ref=e152]:
                - text: Model
                - button "gpt-4o-mini $0.0034/min" [ref=e154] [cursor=pointer]:
                  - generic [ref=e155]: gpt-4o-mini
                  - generic [ref=e156]:
                    - generic [ref=e157]: $0.0034/min
                    - img [ref=e158]
          - generic [ref=e160]:
            - generic [ref=e161]:
              - img [ref=e163]
              - heading "Text to Speech" [level=4] [ref=e167]
            - generic [ref=e168]:
              - generic [ref=e169]:
                - text: Provider
                - button "Open AI" [ref=e171] [cursor=pointer]:
                  - generic [ref=e172]: Open AI
                  - img [ref=e173]
              - generic [ref=e175]:
                - text: Model
                - button "alloy $0.0075/min" [ref=e177] [cursor=pointer]:
                  - generic [ref=e178]: alloy
                  - generic [ref=e179]:
                    - generic [ref=e180]: $0.0075/min
                    - img [ref=e181]
        - generic [ref=e183]:
          - heading "Estimated cost/minute" [level=3] [ref=e184]
          - generic [ref=e185]: $0.0154
          - img [ref=e187]
          - generic [ref=e191]:
            - generic [ref=e192]:
              - generic [ref=e195]: Speech to text
              - generic [ref=e196]: $ 0.0045
            - generic [ref=e197]:
              - generic [ref=e200]: LLM
              - generic [ref=e201]: $ 0.0034
            - generic [ref=e202]:
              - generic [ref=e205]: Text to Speech
              - generic [ref=e206]: $ 0.0075
      - generic [ref=e207]:
        - generic [ref=e208]:
          - generic [ref=e209]:
            - heading "Estimate your monthly custom plan for voice agents:" [level=4] [ref=e210]
            - generic [ref=e212]: $ 18.48
          - generic [ref=e213]:
            - slider [ref=e214] [cursor=pointer]: "1"
            - generic [ref=e215]:
              - generic [ref=e216]: "10"
              - generic [ref=e217]: "500"
          - generic [ref=e218]: Hours required per month
        - link "Add $18 to wallet" [ref=e219] [cursor=pointer]:
          - /url: /contact
    - generic [ref=e220]:
      - generic [ref=e221]:
        - heading "Speech to Text" [level=2] [ref=e222]
        - paragraph [ref=e223]: Industry-best speech to text foundation models for superior performance.
      - generic [ref=e224]:
        - button "Batch" [ref=e225] [cursor=pointer]
        - button "Realtime" [ref=e226] [cursor=pointer]
      - generic [ref=e227]:
        - generic [ref=e228]:
          - heading "Model" [level=3] [ref=e230]
          - heading "Pay as you go (USD/min)" [level=3] [ref=e232]:
            - text: Pay as you go
            - generic [ref=e233]: (USD/min)
          - heading "Volume (USD/min)" [level=3] [ref=e235]:
            - text: Volume
            - generic [ref=e236]: (USD/min)
        - generic [ref=e237]:
          - generic [ref=e238]:
            - generic [ref=e239]:
              - heading "Zero STT" [level=4] [ref=e240]
              - paragraph [ref=e241]: Supports 200+ languages
            - generic [ref=e243]: $0.0039
            - generic [ref=e245]: $0.0035
          - generic [ref=e246]:
            - generic [ref=e247]:
              - heading "Zero STT Indic" [level=4] [ref=e248]
              - paragraph [ref=e249]: Superior accuracy for Indic languages
            - generic [ref=e251]: $0.0045
            - generic [ref=e253]: $0.0040
          - generic [ref=e254]:
            - generic [ref=e255]:
              - heading "Zero STT Codeswitch" [level=4] [ref=e256]
              - paragraph [ref=e257]: Native codeswitch model for multilingual speech
            - generic [ref=e259]: $0.0050
            - generic [ref=e261]: $0.0045
          - generic [ref=e262]:
            - generic [ref=e263]:
              - heading "Zero STT Med" [level=4] [ref=e264]
              - paragraph [ref=e265]: Specialised model for healthcare transcriptions
            - generic [ref=e267]: $0.0050
            - generic [ref=e269]: $0.0045
          - generic [ref=e270]:
            - generic [ref=e271]:
              - heading "Zero STT Numerical" [level=4] [ref=e272]
              - paragraph [ref=e273]: Specialised model for transcripts containing numerical values
            - generic [ref=e275]: $0.0050
            - generic [ref=e277]: $0.0045
      - link "Contact Sales" [ref=e279] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e280]:
      - generic [ref=e281]:
        - heading "Audio Processing" [level=2] [ref=e282]
        - paragraph [ref=e283]: Get better transcripts with cleaner audio.
      - generic [ref=e284]:
        - generic [ref=e285]:
          - heading "Product" [level=3] [ref=e287]
          - heading "Pay as you go (USD/min)" [level=3] [ref=e289]:
            - text: Pay as you go
            - generic [ref=e290]: (USD/min)
          - heading "Volume (USD/min)" [level=3] [ref=e292]:
            - text: Volume
            - generic [ref=e293]: (USD/min)
        - generic [ref=e294]:
          - generic [ref=e295]:
            - heading "Denoiser" [level=4] [ref=e297]
            - generic [ref=e299]: $0.0039
            - generic [ref=e301]: $0.0034
          - generic [ref=e302]:
            - heading "Enhancer" [level=4] [ref=e304]
            - generic [ref=e306]: $0.0039
            - generic [ref=e308]: $0.0034
    - generic [ref=e309]:
      - generic [ref=e310]:
        - heading "Speech Intelligence Features" [level=2] [ref=e311]
        - paragraph [ref=e312]: Get analytics directly from speech and formatted outputs for integration into your workflows.
      - generic [ref=e313]:
        - generic [ref=e314]:
          - heading "Feature" [level=3] [ref=e316]
          - heading "Pay as you go (USD/min)" [level=3] [ref=e318]:
            - text: Pay as you go
            - generic [ref=e319]: (USD/min)
          - heading "Volume (USD/min)" [level=3] [ref=e321]:
            - text: Volume
            - generic [ref=e322]: (USD/min)
        - generic [ref=e323]:
          - generic [ref=e324]:
            - generic [ref=e325]:
              - heading "Language Identification" [level=4] [ref=e326]
              - paragraph [ref=e327]: Automatically detect the language in your audio files
            - generic [ref=e329]: $0.0001
            - generic [ref=e331]: $0.00009
          - generic [ref=e332]:
            - generic [ref=e333]:
              - heading "Translation" [level=4] [ref=e334]
              - paragraph [ref=e335]: Translate audio during or after transcription
            - generic [ref=e337]: $0.0003
            - generic [ref=e339]: $0.00027
          - generic [ref=e340]:
            - generic [ref=e341]:
              - heading "Transliteration" [level=4] [ref=e342]
              - paragraph [ref=e343]: Convert output to your preferred script
            - generic [ref=e345]: $0.0003
            - generic [ref=e347]: $0.00027
          - generic [ref=e348]:
            - generic [ref=e349]:
              - heading "Speaker Diarization" [level=4] [ref=e350]
              - paragraph [ref=e351]: Separate transcripts by speaker automatically
            - generic [ref=e353]: $0.0012
            - generic [ref=e355]: $0.00100
          - generic [ref=e356]:
            - generic [ref=e357]:
              - heading "Speaker Identification" [level=4] [ref=e358]
              - paragraph [ref=e359]: Customize speaker labels for personalized transcripts
            - generic [ref=e361]: $0.0009
            - generic [ref=e363]: $0.00080
          - generic [ref=e364]:
            - generic [ref=e365]:
              - heading "Word Timestamps" [level=4] [ref=e366]
              - paragraph [ref=e367]: Word-level timing for precise navigation
            - generic [ref=e369]: $0.0012
            - generic [ref=e371]: $0.00100
          - generic [ref=e372]:
            - generic [ref=e373]:
              - heading "Profanity and Keyword Hashing" [level=4] [ref=e374]
              - paragraph [ref=e375]: Filter and mask profanity or custom keywords
            - generic [ref=e377]: $0.0003
            - generic [ref=e379]: $0.00027
          - generic [ref=e380]:
            - generic [ref=e381]:
              - heading "Intent Detection" [level=4] [ref=e382]
              - paragraph [ref=e383]: Understand the purpose behind every conversation
            - generic [ref=e385]: $0.0003
            - generic [ref=e387]: $0.00027
          - generic [ref=e388]:
            - generic [ref=e389]:
              - heading "Sentiment Analysis" [level=4] [ref=e390]
              - paragraph [ref=e391]: Track emotional tone across interactions
            - generic [ref=e393]: $0.0003
            - generic [ref=e395]: $0.00027
          - generic [ref=e396]:
            - generic [ref=e397]:
              - heading "Emotion Diarization" [level=4] [ref=e398]
              - paragraph [ref=e399]: Get granular emotion tracking throughout conversations
            - generic [ref=e401]: $0.0005
            - generic [ref=e403]: $0.00045
          - generic [ref=e404]:
            - generic [ref=e405]:
              - heading "Summarization" [level=4] [ref=e406]
              - paragraph [ref=e407]: Generate concise summaries from audio or text
            - generic [ref=e409]: $0.0003
            - generic [ref=e411]: $0.00027
          - generic [ref=e412]:
            - generic [ref=e413]:
              - heading "Keyword Normalization" [level=4] [ref=e414]
              - paragraph [ref=e415]: Standardize brand names, acronyms, and custom terminology
            - generic [ref=e417]: $0.0003
            - generic [ref=e419]: $0.00027
          - generic [ref=e420]:
            - generic [ref=e421]:
              - heading "Medical Keyterm Correction" [level=4] [ref=e422]
              - paragraph [ref=e423]: Ensure accurate transcription of medical terminology
            - generic [ref=e425]: $0.0003
            - generic [ref=e427]: $0.00027
    - generic [ref=e429]:
      - heading "Frequently Asked Questions" [level=2] [ref=e430]
      - generic [ref=e431]:
        - button "What plans does Shunya Labs offer?" [ref=e433] [cursor=pointer]:
          - generic [ref=e434]: What plans does Shunya Labs offer?
          - img [ref=e436]
        - button "How do I receive my free credits?" [ref=e439] [cursor=pointer]:
          - generic [ref=e440]: How do I receive my free credits?
          - img [ref=e442]
        - button "Do my credits expire?" [ref=e445] [cursor=pointer]:
          - generic [ref=e446]: Do my credits expire?
          - img [ref=e448]
        - button "What happens when I switch plans?" [ref=e451] [cursor=pointer]:
          - generic [ref=e452]: What happens when I switch plans?
          - img [ref=e454]
        - button "What happens if I run out of credits on the Volume plan?" [ref=e457] [cursor=pointer]:
          - generic [ref=e458]: What happens if I run out of credits on the Volume plan?
          - img [ref=e460]
    - contentinfo [ref=e462]:
      - generic [ref=e463]:
        - generic [ref=e464]:
          - img "Shunya Labs" [ref=e465]
          - paragraph [ref=e466]: Shunya Labs, Inc.
        - generic [ref=e467]:
          - paragraph [ref=e468]: Product
          - list [ref=e469]:
            - listitem [ref=e470]:
              - link "Overview" [ref=e471] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e472]:
              - link "Models" [ref=e473] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e474]:
              - link "Voice Agents" [ref=e475] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e476]:
              - link "Speech Intelligence" [ref=e477] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e478]:
              - link "Audio Processing" [ref=e479] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e480]:
              - link "Deployment" [ref=e481] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e482]:
          - paragraph [ref=e483]: Models
          - list [ref=e484]:
            - listitem [ref=e485]:
              - link "Language Models" [ref=e486] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e487]:
              - link "Zero STT Indic" [ref=e488] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e489]:
              - link "Zero STT Codeswitch" [ref=e490] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e491]:
              - link "Specialised Models" [ref=e492] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e493]:
              - link "Zero STT Med" [ref=e494] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e495]:
              - link "On Device Models" [ref=e496] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e497]:
          - paragraph [ref=e498]: Solutions
          - list [ref=e499]:
            - listitem [ref=e500]:
              - link "Contact Centers" [ref=e501] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e502]:
              - link "Media & Entertainment" [ref=e503] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e504]:
              - link "Healthcare" [ref=e505] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e506]:
          - paragraph [ref=e507]: Resources
          - list [ref=e508]:
            - listitem [ref=e509]:
              - link "Blogs" [ref=e510] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e511]:
              - link "Benchmarks" [ref=e512] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e513]:
              - link "News & Media" [ref=e514] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e515]:
              - link "Patents" [ref=e516] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e517]:
              - link "Research" [ref=e518] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e520]:
          - link "Documentation" [ref=e521] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e523]:
          - listitem [ref=e524]:
            - link "About us" [ref=e525] [cursor=pointer]:
              - /url: /about
        - list [ref=e527]:
          - listitem [ref=e528]:
            - link "Pricing" [ref=e529] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e530]:
        - paragraph [ref=e531]: Follow us on
        - generic [ref=e532]:
          - link [ref=e533] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e534]
          - link [ref=e536] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e537]
          - link [ref=e539] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e540]
          - link [ref=e542] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e543]
      - generic [ref=e545]:
        - paragraph [ref=e546]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e547]:
          - link "Privacy" [ref=e548] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e549] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e550] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e551] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e552] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e553]
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
     |                                                                                      ^ Error: 23 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```