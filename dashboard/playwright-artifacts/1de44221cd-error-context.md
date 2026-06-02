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
              - text: Documentation
              - img [ref=e27]
            - link "About Us" [ref=e29] [cursor=pointer]:
              - /url: /about
            - link "Pricing" [ref=e30] [cursor=pointer]:
              - /url: /pricing
        - generic [ref=e31]:
          - link "Playground" [ref=e32] [cursor=pointer]:
            - /url: https://playground.shunyalabs.ai/
            - img [ref=e33]
            - text: Playground
          - generic [ref=e35]:
            - button "Sign In" [ref=e36] [cursor=pointer]
            - link "Contact Sales" [ref=e37] [cursor=pointer]:
              - /url: /contact
    - generic [ref=e39]:
      - heading "Shunya Labs Plans" [level=1] [ref=e40]
      - heading "Flexible pricing for every scenario" [level=2] [ref=e41]
    - generic [ref=e43]:
      - generic [ref=e45]:
        - heading "Pay as you go" [level=3] [ref=e46]
        - generic [ref=e48]:
          - paragraph [ref=e49]: Free
          - paragraph [ref=e50]: $200
          - paragraph [ref=e51]: of Credit
        - paragraph [ref=e52]: Then pay-as-you-go. No minimums. No expiration. No credit card required.
        - list [ref=e53]:
          - listitem [ref=e54]:
            - img [ref=e56]
            - generic [ref=e58]: Industry leading speech to text foundation models
          - listitem [ref=e59]:
            - img [ref=e61]
            - generic [ref=e63]: Advanced intelligence features
          - listitem [ref=e64]:
            - img [ref=e66]
            - generic [ref=e68]: Custom voice agent orchestrations
        - button "Start for free" [ref=e69] [cursor=pointer]
      - generic [ref=e73]:
        - heading "Volume" [level=3] [ref=e74]
        - paragraph [ref=e76]: $500
        - paragraph [ref=e77]: Prepaid credits for the year with up to 10% lower rates on all services. Credits are redeemed against actual usage.
        - list [ref=e78]:
          - listitem [ref=e79]:
            - img [ref=e82]
            - generic [ref=e84]: Industry leading speech to text foundation models
          - listitem [ref=e85]:
            - img [ref=e88]
            - generic [ref=e90]: Advanced intelligence features
          - listitem [ref=e91]:
            - img [ref=e94]
            - generic [ref=e96]: Custom voice agent orchestrations
        - button "Buy Now" [ref=e97] [cursor=pointer]
      - generic [ref=e99]:
        - heading "Enterprise" [level=3] [ref=e100]
        - paragraph [ref=e102]: Custom pricing
        - paragraph [ref=e103]: For businesses with large volumes, data or deployment requirements, or support needs.
        - list [ref=e104]:
          - listitem [ref=e105]:
            - img [ref=e107]
            - generic [ref=e109]: Access all models with our best discounts
          - listitem [ref=e110]:
            - img [ref=e112]
            - generic [ref=e114]: Access to custom-trained speech-to-text models and intelligence features
          - listitem [ref=e115]:
            - img [ref=e117]
            - generic [ref=e119]: Highest concurrency support
          - listitem [ref=e120]:
            - img [ref=e122]
            - generic [ref=e124]: Self-hosted deployment options
          - listitem [ref=e125]:
            - img [ref=e127]
            - generic [ref=e129]: Dedicated SLAs and support
        - button "Contact Sales" [ref=e130] [cursor=pointer]
    - generic [ref=e131]:
      - generic [ref=e132]:
        - heading "Voice Agents" [level=2] [ref=e133]
        - paragraph [ref=e134]: Calculate your per minute cost for voice agents.
      - generic [ref=e135]:
        - generic [ref=e136]:
          - generic [ref=e137]:
            - generic [ref=e138]:
              - img [ref=e140]
              - heading "Speech to text" [level=4] [ref=e143]
            - generic [ref=e144]:
              - generic [ref=e145]:
                - text: Provider
                - button "Shunya Labs" [ref=e147] [cursor=pointer]:
                  - generic [ref=e148]: Shunya Labs
                  - img [ref=e149]
              - generic [ref=e151]:
                - text: Model
                - button "Zero STT $0.0045/min" [ref=e153] [cursor=pointer]:
                  - generic [ref=e154]: Zero STT
                  - generic [ref=e155]:
                    - generic [ref=e156]: $0.0045/min
                    - img [ref=e157]
          - generic [ref=e159]:
            - generic [ref=e160]:
              - img [ref=e162]
              - heading "LLM" [level=4] [ref=e174]
            - generic [ref=e175]:
              - generic [ref=e176]:
                - text: Provider
                - button "Open AI" [ref=e178] [cursor=pointer]:
                  - generic [ref=e179]: Open AI
                  - img [ref=e180]
              - generic [ref=e182]:
                - text: Model
                - button "gpt-4o-mini $0.0034/min" [ref=e184] [cursor=pointer]:
                  - generic [ref=e185]: gpt-4o-mini
                  - generic [ref=e186]:
                    - generic [ref=e187]: $0.0034/min
                    - img [ref=e188]
          - generic [ref=e190]:
            - generic [ref=e191]:
              - img [ref=e193]
              - heading "Text to Speech" [level=4] [ref=e197]
            - generic [ref=e198]:
              - generic [ref=e199]:
                - text: Provider
                - button "Open AI" [ref=e201] [cursor=pointer]:
                  - generic [ref=e202]: Open AI
                  - img [ref=e203]
              - generic [ref=e205]:
                - text: Model
                - button "alloy $0.0075/min" [ref=e207] [cursor=pointer]:
                  - generic [ref=e208]: alloy
                  - generic [ref=e209]:
                    - generic [ref=e210]: $0.0075/min
                    - img [ref=e211]
        - generic [ref=e213]:
          - heading "Estimated cost/minute" [level=3] [ref=e214]
          - generic [ref=e215]: $0.0154
          - img [ref=e217]
          - generic [ref=e221]:
            - generic [ref=e222]:
              - generic [ref=e225]: Speech to text
              - generic [ref=e226]: $ 0.0045
            - generic [ref=e227]:
              - generic [ref=e230]: LLM
              - generic [ref=e231]: $ 0.0034
            - generic [ref=e232]:
              - generic [ref=e235]: Text to Speech
              - generic [ref=e236]: $ 0.0075
      - generic [ref=e237]:
        - generic [ref=e238]:
          - generic [ref=e239]:
            - heading "Estimate your monthly custom plan for voice agents:" [level=4] [ref=e240]
            - generic [ref=e242]: $ 18.48
          - generic [ref=e243]:
            - slider [ref=e244] [cursor=pointer]: "1"
            - generic [ref=e245]:
              - generic [ref=e248]: "10"
              - generic [ref=e251]: "20"
              - generic [ref=e254]: "30"
              - generic [ref=e257]: "40"
              - generic [ref=e260]: "50"
              - generic [ref=e263]: "60"
              - generic [ref=e266]: "70"
              - generic [ref=e269]: "80"
              - generic [ref=e272]: "90"
              - generic [ref=e275]: "100"
              - generic [ref=e278]: "200"
              - generic [ref=e281]: "300"
              - generic [ref=e284]: "400"
              - generic [ref=e287]: "500"
          - generic [ref=e288]: Hours required per month
        - link "Add $18 to wallet" [ref=e289] [cursor=pointer]:
          - /url: /contact
    - generic [ref=e290]:
      - generic [ref=e291]:
        - heading "Speech to Text" [level=2] [ref=e292]
        - paragraph [ref=e293]: Industry-best speech to text foundation models for superior performance.
      - generic [ref=e294]:
        - button "Batch" [ref=e295] [cursor=pointer]
        - button "Realtime" [ref=e296] [cursor=pointer]
      - generic [ref=e297]:
        - generic [ref=e298]:
          - heading "Model" [level=3] [ref=e300]
          - heading "Pay as you go (USD/min)" [level=3] [ref=e302]:
            - text: Pay as you go
            - generic [ref=e303]: (USD/min)
          - heading "Volume (USD/min)" [level=3] [ref=e305]:
            - text: Volume
            - generic [ref=e306]: (USD/min)
        - generic [ref=e307]:
          - generic [ref=e308]:
            - generic [ref=e309]:
              - heading "Zero STT" [level=4] [ref=e310]
              - paragraph [ref=e311]: Supports 200+ languages
            - generic [ref=e313]: $0.0039
            - generic [ref=e315]: $0.0035
          - generic [ref=e316]:
            - generic [ref=e317]:
              - heading "Zero STT Indic" [level=4] [ref=e318]
              - paragraph [ref=e319]: Superior accuracy for Indic languages
            - generic [ref=e321]: $0.0045
            - generic [ref=e323]: $0.0040
          - generic [ref=e324]:
            - generic [ref=e325]:
              - heading "Zero STT Codeswitch" [level=4] [ref=e326]
              - paragraph [ref=e327]: Native codeswitch model for multilingual speech
            - generic [ref=e329]: $0.0050
            - generic [ref=e331]: $0.0045
          - generic [ref=e332]:
            - generic [ref=e333]:
              - heading "Zero STT Med" [level=4] [ref=e334]
              - paragraph [ref=e335]: Specialised model for healthcare transcriptions
            - generic [ref=e337]: $0.0050
            - generic [ref=e339]: $0.0045
          - generic [ref=e340]:
            - generic [ref=e341]:
              - heading "Zero STT Numerical" [level=4] [ref=e342]
              - paragraph [ref=e343]: Specialised model for transcripts containing numerical values
            - generic [ref=e345]: $0.0050
            - generic [ref=e347]: $0.0045
      - link "Contact Sales" [ref=e349] [cursor=pointer]:
        - /url: /contact
    - generic [ref=e350]:
      - generic [ref=e351]:
        - heading "Audio Processing" [level=2] [ref=e352]
        - paragraph [ref=e353]: Get better transcripts with cleaner audio.
      - generic [ref=e354]:
        - generic [ref=e355]:
          - heading "Product" [level=3] [ref=e357]
          - heading "Pay as you go (USD/min)" [level=3] [ref=e359]:
            - text: Pay as you go
            - generic [ref=e360]: (USD/min)
          - heading "Volume (USD/min)" [level=3] [ref=e362]:
            - text: Volume
            - generic [ref=e363]: (USD/min)
        - generic [ref=e364]:
          - generic [ref=e365]:
            - heading "Denoiser" [level=4] [ref=e367]
            - generic [ref=e369]: $0.0039
            - generic [ref=e371]: $0.0034
          - generic [ref=e372]:
            - heading "Enhancer" [level=4] [ref=e374]
            - generic [ref=e376]: $0.0039
            - generic [ref=e378]: $0.0034
    - generic [ref=e379]:
      - generic [ref=e380]:
        - heading "Speech Intelligence Features" [level=2] [ref=e381]
        - paragraph [ref=e382]: Get analytics directly from speech and formatted outputs for integration into your workflows.
      - generic [ref=e383]:
        - generic [ref=e384]:
          - heading "Feature" [level=3] [ref=e386]
          - heading "Pay as you go (USD/min)" [level=3] [ref=e388]:
            - text: Pay as you go
            - generic [ref=e389]: (USD/min)
          - heading "Volume (USD/min)" [level=3] [ref=e391]:
            - text: Volume
            - generic [ref=e392]: (USD/min)
        - generic [ref=e393]:
          - generic [ref=e394]:
            - generic [ref=e395]:
              - heading "Language Identification" [level=4] [ref=e396]
              - paragraph [ref=e397]: Automatically detect the language in your audio files
            - generic [ref=e399]: $0.0001
            - generic [ref=e401]: $0.00009
          - generic [ref=e402]:
            - generic [ref=e403]:
              - heading "Translation" [level=4] [ref=e404]
              - paragraph [ref=e405]: Translate audio during or after transcription
            - generic [ref=e407]: $0.0003
            - generic [ref=e409]: $0.00027
          - generic [ref=e410]:
            - generic [ref=e411]:
              - heading "Transliteration" [level=4] [ref=e412]
              - paragraph [ref=e413]: Convert output to your preferred script
            - generic [ref=e415]: $0.0003
            - generic [ref=e417]: $0.00027
          - generic [ref=e418]:
            - generic [ref=e419]:
              - heading "Speaker Diarization" [level=4] [ref=e420]
              - paragraph [ref=e421]: Separate transcripts by speaker automatically
            - generic [ref=e423]: $0.0012
            - generic [ref=e425]: $0.00100
          - generic [ref=e426]:
            - generic [ref=e427]:
              - heading "Speaker Identification" [level=4] [ref=e428]
              - paragraph [ref=e429]: Customize speaker labels for personalized transcripts
            - generic [ref=e431]: $0.0009
            - generic [ref=e433]: $0.00080
          - generic [ref=e434]:
            - generic [ref=e435]:
              - heading "Word Timestamps" [level=4] [ref=e436]
              - paragraph [ref=e437]: Word-level timing for precise navigation
            - generic [ref=e439]: $0.0012
            - generic [ref=e441]: $0.00100
          - generic [ref=e442]:
            - generic [ref=e443]:
              - heading "Profanity and Keyword Hashing" [level=4] [ref=e444]
              - paragraph [ref=e445]: Filter and mask profanity or custom keywords
            - generic [ref=e447]: $0.0003
            - generic [ref=e449]: $0.00027
          - generic [ref=e450]:
            - generic [ref=e451]:
              - heading "Intent Detection" [level=4] [ref=e452]
              - paragraph [ref=e453]: Understand the purpose behind every conversation
            - generic [ref=e455]: $0.0003
            - generic [ref=e457]: $0.00027
          - generic [ref=e458]:
            - generic [ref=e459]:
              - heading "Sentiment Analysis" [level=4] [ref=e460]
              - paragraph [ref=e461]: Track emotional tone across interactions
            - generic [ref=e463]: $0.0003
            - generic [ref=e465]: $0.00027
          - generic [ref=e466]:
            - generic [ref=e467]:
              - heading "Emotion Diarization" [level=4] [ref=e468]
              - paragraph [ref=e469]: Get granular emotion tracking throughout conversations
            - generic [ref=e471]: $0.0005
            - generic [ref=e473]: $0.00045
          - generic [ref=e474]:
            - generic [ref=e475]:
              - heading "Summarization" [level=4] [ref=e476]
              - paragraph [ref=e477]: Generate concise summaries from audio or text
            - generic [ref=e479]: $0.0003
            - generic [ref=e481]: $0.00027
          - generic [ref=e482]:
            - generic [ref=e483]:
              - heading "Keyword Normalization" [level=4] [ref=e484]
              - paragraph [ref=e485]: Standardize brand names, acronyms, and custom terminology
            - generic [ref=e487]: $0.0003
            - generic [ref=e489]: $0.00027
          - generic [ref=e490]:
            - generic [ref=e491]:
              - heading "Medical Keyterm Correction" [level=4] [ref=e492]
              - paragraph [ref=e493]: Ensure accurate transcription of medical terminology
            - generic [ref=e495]: $0.0003
            - generic [ref=e497]: $0.00027
    - generic [ref=e499]:
      - heading "Frequently Asked Questions" [level=2] [ref=e500]
      - generic [ref=e501]:
        - button "What plans does Shunya Labs offer?" [ref=e503] [cursor=pointer]:
          - generic [ref=e504]: What plans does Shunya Labs offer?
          - img [ref=e506]
        - button "How do I receive my free credits?" [ref=e509] [cursor=pointer]:
          - generic [ref=e510]: How do I receive my free credits?
          - img [ref=e512]
        - button "Do my credits expire?" [ref=e515] [cursor=pointer]:
          - generic [ref=e516]: Do my credits expire?
          - img [ref=e518]
        - button "What happens when I switch plans?" [ref=e521] [cursor=pointer]:
          - generic [ref=e522]: What happens when I switch plans?
          - img [ref=e524]
        - button "What happens if I run out of credits on the Volume plan?" [ref=e527] [cursor=pointer]:
          - generic [ref=e528]: What happens if I run out of credits on the Volume plan?
          - img [ref=e530]
    - contentinfo [ref=e532]:
      - generic [ref=e533]:
        - generic [ref=e534]:
          - img "Shunya Labs" [ref=e535]
          - paragraph [ref=e536]: Shunya Labs, Inc.
        - generic [ref=e537]:
          - paragraph [ref=e538]: Product
          - list [ref=e539]:
            - listitem [ref=e540]:
              - link "Overview" [ref=e541] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e542]:
              - link "Models" [ref=e543] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e544]:
              - link "Voice Agents" [ref=e545] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e546]:
              - link "Speech Intelligence" [ref=e547] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e548]:
              - link "Audio Processing" [ref=e549] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e550]:
              - link "Deployment" [ref=e551] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e552]:
          - paragraph [ref=e553]: Models
          - list [ref=e554]:
            - listitem [ref=e555]:
              - link "Language Models" [ref=e556] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e557]:
              - link "Zero STT Indic" [ref=e558] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e559]:
              - link "Zero STT Codeswitch" [ref=e560] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e561]:
              - link "Specialised Models" [ref=e562] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e563]:
              - link "Zero STT Med" [ref=e564] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e565]:
              - link "On Device Models" [ref=e566] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e567]:
          - paragraph [ref=e568]: Solutions
          - list [ref=e569]:
            - listitem [ref=e570]:
              - link "Contact Centers" [ref=e571] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e572]:
              - link "Media & Entertainment" [ref=e573] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e574]:
              - link "Healthcare" [ref=e575] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e576]:
          - paragraph [ref=e577]: Resources
          - list [ref=e578]:
            - listitem [ref=e579]:
              - link "Blogs" [ref=e580] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e581]:
              - link "Benchmarks" [ref=e582] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e583]:
              - link "News & Media" [ref=e584] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e585]:
              - link "Patents" [ref=e586] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e587]:
              - link "Research" [ref=e588] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e590]:
          - link "Documentation" [ref=e591] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e593]:
          - listitem [ref=e594]:
            - link "About us" [ref=e595] [cursor=pointer]:
              - /url: /about
        - list [ref=e597]:
          - listitem [ref=e598]:
            - link "Pricing" [ref=e599] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e600]:
        - paragraph [ref=e601]: Follow us on
        - generic [ref=e602]:
          - link [ref=e603] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e604]
          - link [ref=e606] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e607]
          - link [ref=e609] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e610]
          - link [ref=e612] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e613]
      - generic [ref=e615]:
        - paragraph [ref=e616]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e617]:
          - link "Privacy" [ref=e618] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e619] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e620] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e621] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e622] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e623]
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