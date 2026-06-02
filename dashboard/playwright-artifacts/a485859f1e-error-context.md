# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/pricing/pricing/design.spec.js >> Pricing - Pricing design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Footer item "© 2026 Shunya Labs Inc. All rights reserved." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "© 2026 Shunya Labs Inc. All rights reserved." not found on page

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
            - text: Documentation
            - img
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
    - generic [ref=e11]:
      - heading "Shunya Labs Plans" [level=1] [ref=e12]
      - heading "Flexible pricing for every scenario" [level=2] [ref=e13]
    - generic [ref=e15]:
      - generic [ref=e17]:
        - heading "Pay as you go" [level=3] [ref=e18]
        - generic [ref=e20]:
          - paragraph [ref=e21]: Free
          - paragraph [ref=e22]: $200
          - paragraph [ref=e23]: of Credit
        - paragraph [ref=e24]: Then pay-as-you-go. No minimums. No expiration. No credit card required.
        - list [ref=e25]:
          - listitem [ref=e26]:
            - img [ref=e28]
            - generic [ref=e30]: Industry leading speech to text foundation models
          - listitem [ref=e31]:
            - img [ref=e33]
            - generic [ref=e35]: Advanced intelligence features
          - listitem [ref=e36]:
            - img [ref=e38]
            - generic [ref=e40]: Custom voice agent orchestrations
        - button "Start for free" [ref=e41] [cursor=pointer]
      - generic [ref=e45]:
        - heading "Volume" [level=3] [ref=e46]
        - paragraph [ref=e48]: $500
        - paragraph [ref=e49]: Prepaid credits for the year with up to 10% lower rates on all services. Credits are redeemed against actual usage.
        - list [ref=e50]:
          - listitem [ref=e51]:
            - img [ref=e54]
            - generic [ref=e56]: Industry leading speech to text foundation models
          - listitem [ref=e57]:
            - img [ref=e60]
            - generic [ref=e62]: Advanced intelligence features
          - listitem [ref=e63]:
            - img [ref=e66]
            - generic [ref=e68]: Custom voice agent orchestrations
        - button "Buy Now" [ref=e69] [cursor=pointer]
      - generic [ref=e71]:
        - heading "Enterprise" [level=3] [ref=e72]
        - paragraph [ref=e74]: Custom pricing
        - paragraph [ref=e75]: For businesses with large volumes, data or deployment requirements, or support needs.
        - list [ref=e76]:
          - listitem [ref=e77]:
            - img [ref=e79]
            - generic [ref=e81]: Access all models with our best discounts
          - listitem [ref=e82]:
            - img [ref=e84]
            - generic [ref=e86]: Access to custom-trained speech-to-text models and intelligence features
          - listitem [ref=e87]:
            - img [ref=e89]
            - generic [ref=e91]: Highest concurrency support
          - listitem [ref=e92]:
            - img [ref=e94]
            - generic [ref=e96]: Self-hosted deployment options
          - listitem [ref=e97]:
            - img [ref=e99]
            - generic [ref=e101]: Dedicated SLAs and support
        - button "Contact Sales" [ref=e102] [cursor=pointer]
    - generic [ref=e103]:
      - generic [ref=e104]:
        - heading "Voice Agents" [level=2] [ref=e105]
        - paragraph [ref=e106]: Calculate your per minute cost for voice agents.
      - generic [ref=e107]:
        - generic [ref=e108]:
          - generic [ref=e109]:
            - generic [ref=e110]:
              - img [ref=e112]
              - heading "Speech to text" [level=4] [ref=e115]
            - generic [ref=e116]:
              - generic [ref=e117]:
                - text: Provider
                - button "Shunya Labs" [ref=e119] [cursor=pointer]:
                  - generic [ref=e120]: Shunya Labs
                  - img [ref=e121]
              - generic [ref=e123]:
                - text: Model
                - button "Zero STT $0.0045/min" [ref=e125] [cursor=pointer]:
                  - generic [ref=e126]: Zero STT
                  - generic [ref=e127]:
                    - generic [ref=e128]: $0.0045/min
                    - img [ref=e129]
          - generic [ref=e131]:
            - generic [ref=e132]:
              - img [ref=e134]
              - heading "LLM" [level=4] [ref=e146]
            - generic [ref=e147]:
              - generic [ref=e148]:
                - text: Provider
                - button "Open AI" [ref=e150] [cursor=pointer]:
                  - generic [ref=e151]: Open AI
                  - img [ref=e152]
              - generic [ref=e154]:
                - text: Model
                - button "gpt-4o-mini $0.0034/min" [ref=e156] [cursor=pointer]:
                  - generic [ref=e157]: gpt-4o-mini
                  - generic [ref=e158]:
                    - generic [ref=e159]: $0.0034/min
                    - img [ref=e160]
          - generic [ref=e162]:
            - generic [ref=e163]:
              - img [ref=e165]
              - heading "Text to Speech" [level=4] [ref=e169]
            - generic [ref=e170]:
              - generic [ref=e171]:
                - text: Provider
                - button "Open AI" [ref=e173] [cursor=pointer]:
                  - generic [ref=e174]: Open AI
                  - img [ref=e175]
              - generic [ref=e177]:
                - text: Model
                - button "alloy $0.0075/min" [ref=e179] [cursor=pointer]:
                  - generic [ref=e180]: alloy
                  - generic [ref=e181]:
                    - generic [ref=e182]: $0.0075/min
                    - img [ref=e183]
        - generic [ref=e185]:
          - heading "Estimated cost/minute" [level=3] [ref=e186]
          - generic [ref=e187]: $0.0154
          - img [ref=e189]
          - generic [ref=e193]:
            - generic [ref=e194]:
              - generic [ref=e197]: Speech to text
              - generic [ref=e198]: $ 0.0045
            - generic [ref=e199]:
              - generic [ref=e202]: LLM
              - generic [ref=e203]: $ 0.0034
            - generic [ref=e204]:
              - generic [ref=e207]: Text to Speech
              - generic [ref=e208]: $ 0.0075
      - generic [ref=e209]:
        - generic [ref=e210]:
          - generic [ref=e211]:
            - heading "Estimate your monthly custom plan for voice agents:" [level=4] [ref=e212]
            - generic [ref=e214]: $ 18.48
          - generic [ref=e215]:
            - slider [ref=e216] [cursor=pointer]: "1"
            - generic [ref=e217]:
              - generic [ref=e218]: "10"
              - generic [ref=e219]: "500"
          - generic [ref=e220]: Hours required per month
        - link "Add $18 to wallet" [ref=e221] [cursor=pointer]:
          - /url: /contact
    - generic [ref=e222]:
      - generic [ref=e223]:
        - heading "Speech to Text" [level=2] [ref=e224]
        - paragraph [ref=e225]: Industry-best speech to text foundation models for superior performance.
      - generic [ref=e226]:
        - button "Batch" [ref=e227] [cursor=pointer]
        - button "Realtime" [ref=e228] [cursor=pointer]
      - generic [ref=e229]:
        - generic [ref=e230]:
          - heading "Model" [level=3] [ref=e232]
          - heading "Pay as you go (USD/min)" [level=3] [ref=e234]:
            - text: Pay as you go
            - generic [ref=e235]: (USD/min)
          - heading "Volume (USD/min)" [level=3] [ref=e237]:
            - text: Volume
            - generic [ref=e238]: (USD/min)
        - generic [ref=e239]:
          - generic [ref=e240]:
            - generic [ref=e241]:
              - heading "Zero STT" [level=4] [ref=e242]
              - paragraph [ref=e243]: Supports 200+ languages
            - generic [ref=e245]: $0.0039
            - generic [ref=e247]: $0.0035
          - generic [ref=e248]:
            - generic [ref=e249]:
              - heading "Zero STT Indic" [level=4] [ref=e250]
              - paragraph [ref=e251]: Superior accuracy for Indic languages
            - generic [ref=e253]: $0.0045
            - generic [ref=e255]: $0.0040
          - generic [ref=e256]:
            - generic [ref=e257]:
              - heading "Zero STT Codeswitch" [level=4] [ref=e258]
              - paragraph [ref=e259]: Native codeswitch model for multilingual speech
            - generic [ref=e261]: $0.0050
            - generic [ref=e263]: $0.0045
          - generic [ref=e264]:
            - generic [ref=e265]:
              - heading "Zero STT Med" [level=4] [ref=e266]
              - paragraph [ref=e267]: Specialised model for healthcare transcriptions
            - generic [ref=e269]: $0.0050
            - generic [ref=e271]: $0.0045
          - generic [ref=e272]:
            - generic [ref=e273]:
              - heading "Zero STT Numerical" [level=4] [ref=e274]
              - paragraph [ref=e275]: Specialised model for transcripts containing numerical values
            - generic [ref=e277]: $0.0050
            - generic [ref=e279]: $0.0045
      - link "Contact Sales" [ref=e281] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e282]:
      - generic [ref=e283]:
        - heading "Audio Processing" [level=2] [ref=e284]
        - paragraph [ref=e285]: Get better transcripts with cleaner audio.
      - generic [ref=e286]:
        - generic [ref=e287]:
          - heading "Product" [level=3] [ref=e289]
          - heading "Pay as you go (USD/min)" [level=3] [ref=e291]:
            - text: Pay as you go
            - generic [ref=e292]: (USD/min)
          - heading "Volume (USD/min)" [level=3] [ref=e294]:
            - text: Volume
            - generic [ref=e295]: (USD/min)
        - generic [ref=e296]:
          - generic [ref=e297]:
            - heading "Denoiser" [level=4] [ref=e299]
            - generic [ref=e301]: $0.0039
            - generic [ref=e303]: $0.0034
          - generic [ref=e304]:
            - heading "Enhancer" [level=4] [ref=e306]
            - generic [ref=e308]: $0.0039
            - generic [ref=e310]: $0.0034
    - generic [ref=e311]:
      - generic [ref=e312]:
        - heading "Speech Intelligence Features" [level=2] [ref=e313]
        - paragraph [ref=e314]: Get analytics directly from speech and formatted outputs for integration into your workflows.
      - generic [ref=e315]:
        - generic [ref=e316]:
          - heading "Feature" [level=3] [ref=e318]
          - heading "Pay as you go (USD/min)" [level=3] [ref=e320]:
            - text: Pay as you go
            - generic [ref=e321]: (USD/min)
          - heading "Volume (USD/min)" [level=3] [ref=e323]:
            - text: Volume
            - generic [ref=e324]: (USD/min)
        - generic [ref=e325]:
          - generic [ref=e326]:
            - generic [ref=e327]:
              - heading "Language Identification" [level=4] [ref=e328]
              - paragraph [ref=e329]: Automatically detect the language in your audio files
            - generic [ref=e331]: $0.0001
            - generic [ref=e333]: $0.00009
          - generic [ref=e334]:
            - generic [ref=e335]:
              - heading "Translation" [level=4] [ref=e336]
              - paragraph [ref=e337]: Translate audio during or after transcription
            - generic [ref=e339]: $0.0003
            - generic [ref=e341]: $0.00027
          - generic [ref=e342]:
            - generic [ref=e343]:
              - heading "Transliteration" [level=4] [ref=e344]
              - paragraph [ref=e345]: Convert output to your preferred script
            - generic [ref=e347]: $0.0003
            - generic [ref=e349]: $0.00027
          - generic [ref=e350]:
            - generic [ref=e351]:
              - heading "Speaker Diarization" [level=4] [ref=e352]
              - paragraph [ref=e353]: Separate transcripts by speaker automatically
            - generic [ref=e355]: $0.0012
            - generic [ref=e357]: $0.00100
          - generic [ref=e358]:
            - generic [ref=e359]:
              - heading "Speaker Identification" [level=4] [ref=e360]
              - paragraph [ref=e361]: Customize speaker labels for personalized transcripts
            - generic [ref=e363]: $0.0009
            - generic [ref=e365]: $0.00080
          - generic [ref=e366]:
            - generic [ref=e367]:
              - heading "Word Timestamps" [level=4] [ref=e368]
              - paragraph [ref=e369]: Word-level timing for precise navigation
            - generic [ref=e371]: $0.0012
            - generic [ref=e373]: $0.00100
          - generic [ref=e374]:
            - generic [ref=e375]:
              - heading "Profanity and Keyword Hashing" [level=4] [ref=e376]
              - paragraph [ref=e377]: Filter and mask profanity or custom keywords
            - generic [ref=e379]: $0.0003
            - generic [ref=e381]: $0.00027
          - generic [ref=e382]:
            - generic [ref=e383]:
              - heading "Intent Detection" [level=4] [ref=e384]
              - paragraph [ref=e385]: Understand the purpose behind every conversation
            - generic [ref=e387]: $0.0003
            - generic [ref=e389]: $0.00027
          - generic [ref=e390]:
            - generic [ref=e391]:
              - heading "Sentiment Analysis" [level=4] [ref=e392]
              - paragraph [ref=e393]: Track emotional tone across interactions
            - generic [ref=e395]: $0.0003
            - generic [ref=e397]: $0.00027
          - generic [ref=e398]:
            - generic [ref=e399]:
              - heading "Emotion Diarization" [level=4] [ref=e400]
              - paragraph [ref=e401]: Get granular emotion tracking throughout conversations
            - generic [ref=e403]: $0.0005
            - generic [ref=e405]: $0.00045
          - generic [ref=e406]:
            - generic [ref=e407]:
              - heading "Summarization" [level=4] [ref=e408]
              - paragraph [ref=e409]: Generate concise summaries from audio or text
            - generic [ref=e411]: $0.0003
            - generic [ref=e413]: $0.00027
          - generic [ref=e414]:
            - generic [ref=e415]:
              - heading "Keyword Normalization" [level=4] [ref=e416]
              - paragraph [ref=e417]: Standardize brand names, acronyms, and custom terminology
            - generic [ref=e419]: $0.0003
            - generic [ref=e421]: $0.00027
          - generic [ref=e422]:
            - generic [ref=e423]:
              - heading "Medical Keyterm Correction" [level=4] [ref=e424]
              - paragraph [ref=e425]: Ensure accurate transcription of medical terminology
            - generic [ref=e427]: $0.0003
            - generic [ref=e429]: $0.00027
    - generic [ref=e431]:
      - heading "Frequently Asked Questions" [level=2] [ref=e432]
      - generic [ref=e433]:
        - button "What plans does Shunya Labs offer?" [ref=e435] [cursor=pointer]:
          - generic [ref=e436]: What plans does Shunya Labs offer?
          - img [ref=e438]
        - button "How do I receive my free credits?" [ref=e441] [cursor=pointer]:
          - generic [ref=e442]: How do I receive my free credits?
          - img [ref=e444]
        - button "Do my credits expire?" [ref=e447] [cursor=pointer]:
          - generic [ref=e448]: Do my credits expire?
          - img [ref=e450]
        - button "What happens when I switch plans?" [ref=e453] [cursor=pointer]:
          - generic [ref=e454]: What happens when I switch plans?
          - img [ref=e456]
        - button "What happens if I run out of credits on the Volume plan?" [ref=e459] [cursor=pointer]:
          - generic [ref=e460]: What happens if I run out of credits on the Volume plan?
          - img [ref=e462]
    - contentinfo [ref=e464]:
      - generic [ref=e465]:
        - generic [ref=e466]:
          - img "Shunya Labs" [ref=e467]
          - paragraph [ref=e468]: Shunya Labs, Inc.
        - generic [ref=e469]:
          - paragraph [ref=e470]: Product
          - list [ref=e471]:
            - listitem [ref=e472]:
              - link "Overview" [ref=e473] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e474]:
              - link "Models" [ref=e475] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e476]:
              - link "Voice Agents" [ref=e477] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e478]:
              - link "Speech Intelligence" [ref=e479] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e480]:
              - link "Audio Processing" [ref=e481] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e482]:
              - link "Deployment" [ref=e483] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e484]:
          - paragraph [ref=e485]: Models
          - list [ref=e486]:
            - listitem [ref=e487]:
              - link "Language Models" [ref=e488] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e489]:
              - link "Zero STT Indic" [ref=e490] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e491]:
              - link "Zero STT Codeswitch" [ref=e492] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e493]:
              - link "Specialised Models" [ref=e494] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e495]:
              - link "Zero STT Med" [ref=e496] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e497]:
              - link "On Device Models" [ref=e498] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e499]:
          - paragraph [ref=e500]: Solutions
          - list [ref=e501]:
            - listitem [ref=e502]:
              - link "Contact Centers" [ref=e503] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e504]:
              - link "Media & Entertainment" [ref=e505] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e506]:
              - link "Healthcare" [ref=e507] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e508]:
          - paragraph [ref=e509]: Resources
          - list [ref=e510]:
            - listitem [ref=e511]:
              - link "Blogs" [ref=e512] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e513]:
              - link "Benchmarks" [ref=e514] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e515]:
              - link "News & Media" [ref=e516] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e517]:
              - link "Patents" [ref=e518] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e519]:
              - link "Research" [ref=e520] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e522]:
          - link "Documentation" [ref=e523] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e525]:
          - listitem [ref=e526]:
            - link "About us" [ref=e527] [cursor=pointer]:
              - /url: /about
        - list [ref=e529]:
          - listitem [ref=e530]:
            - link "Pricing" [ref=e531] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e532]:
        - paragraph [ref=e533]: Follow us on
        - generic [ref=e534]:
          - link [ref=e535] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e536]
          - link [ref=e538] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e539]
          - link [ref=e541] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e542]
          - link [ref=e544] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e545]
      - generic [ref=e547]:
        - paragraph [ref=e548]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e549]:
          - link "Privacy" [ref=e550] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e551] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e552] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e553] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e554] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e555]
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