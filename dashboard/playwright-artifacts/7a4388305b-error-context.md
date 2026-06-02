# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-universal/design.spec.js >> Models - Zero STT Universal design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [global] Footer background: expected rgb(0, 0, 0) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "One platform for speech in and speech out—secure by design, built to scale." not found

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
      - generic [ref=e40]:
        - heading "The world’s most accurate speech-to-text model supporting 200+ languages" [level=1] [ref=e41]
        - paragraph [ref=e42]: Zero Universal is 48% more accurate than the next best speech-to-text model, designed to support conversational speech in 200+ languages in noisy real world scenarios with speaker overlap.
      - main [ref=e45]:
        - generic [ref=e50]:
          - generic [ref=e54]:
            - generic [ref=e56]:
              - generic [ref=e57]: Language
              - button "🇺🇸English" [ref=e60] [cursor=pointer]:
                - generic [ref=e61]: 🇺🇸English
                - generic:
                  - img
            - generic [ref=e63]:
              - generic [ref=e64]: Input Audio
              - generic [ref=e65]:
                - generic [ref=e66]: Pre-recorded
                - generic [ref=e69]:
                  - button "Customer Support Call" [ref=e70] [cursor=pointer]
                  - button "Podcast" [ref=e71] [cursor=pointer]
                  - button "Upload your file" [ref=e72] [cursor=pointer]
            - generic [ref=e74]:
              - generic [ref=e76]: or
              - generic [ref=e77]:
                - generic [ref=e79]: Live recording
                - button "Start Speaking" [ref=e80] [cursor=pointer]:
                  - generic [ref=e81]: Start Speaking
          - generic [ref=e85]:
            - generic [ref=e86]:
              - button "Play audio" [ref=e89] [cursor=pointer]:
                - img [ref=e90]
              - button "No conversation to copy" [disabled] [ref=e157]:
                - img [ref=e158]
            - generic [ref=e167]:
              - img [ref=e170]
              - paragraph [ref=e174]: Select your input language, then pick a sample, upload a file, or start speaking to capture live audio.
      - link "Get Zero STT API now" [ref=e176] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/models/language
        - button "Get Zero STT API now" [ref=e177]
    - generic [ref=e179]:
      - heading "Speech recognition built for scale" [level=2] [ref=e180]
      - paragraph [ref=e181]: Deploy once, transcribe everywhere—with the accuracy and speed your users demand.
      - generic [ref=e182]:
        - generic [ref=e183]:
          - heading "Superior Accuracy" [level=3] [ref=e184]
          - paragraph [ref=e185]: Industry-leading 3.10% WER delivers accurate transcriptions, built for production workloads where precision matters.
        - generic [ref=e186]:
          - heading "Broad Language Support" [level=3] [ref=e187]
          - paragraph [ref=e188]: Understand the world with 200+ languages and robust accent support. One model that works everywhere, for everyone.
        - generic [ref=e189]:
          - heading "Subsecond Latency" [level=3] [ref=e190]
          - paragraph [ref=e191]: Lightning-fast processing keeps conversations flowing naturally. Real-time transcription that feels instant, every time.
    - generic [ref=e192]:
      - generic [ref=e194]:
        - paragraph [ref=e195]: Language Regions
        - paragraph [ref=e196]: Explore our comprehensive language coverage across the globe
      - generic [ref=e197]:
        - generic [ref=e198]:
          - button "Assamese Assamese" [ref=e199] [cursor=pointer]:
            - generic [ref=e200]:
              - img "Assamese" [ref=e202]
              - generic [ref=e203]: Assamese
            - img [ref=e204]
          - button "Awadhi Awadhi" [ref=e206] [cursor=pointer]:
            - generic [ref=e207]:
              - img "Awadhi" [ref=e209]
              - generic [ref=e210]: Awadhi
            - img [ref=e211]
          - button "Bagri Bagri" [ref=e213] [cursor=pointer]:
            - generic [ref=e214]:
              - img "Bagri" [ref=e216]
              - generic [ref=e217]: Bagri
            - img [ref=e218]
          - button "Bengali Bengali" [ref=e220] [cursor=pointer]:
            - generic [ref=e221]:
              - img "Bengali" [ref=e223]
              - generic [ref=e224]: Bengali
            - img [ref=e225]
          - button "Bhili Bhili" [ref=e227] [cursor=pointer]:
            - generic [ref=e228]:
              - img "Bhili" [ref=e230]
              - generic [ref=e231]: Bhili
            - img [ref=e232]
          - button "Bhojpuri Bhojpuri" [ref=e234] [cursor=pointer]:
            - generic [ref=e235]:
              - img "Bhojpuri" [ref=e237]
              - generic [ref=e238]: Bhojpuri
            - img [ref=e239]
          - button "Bodo Bodo" [ref=e241] [cursor=pointer]:
            - generic [ref=e242]:
              - img "Bodo" [ref=e244]
              - generic [ref=e245]: Bodo
            - img [ref=e246]
          - button "Braj Braj" [ref=e248] [cursor=pointer]:
            - generic [ref=e249]:
              - img "Braj" [ref=e251]
              - generic [ref=e252]: Braj
            - img [ref=e253]
          - button "Bundeli Bundeli" [ref=e255] [cursor=pointer]:
            - generic [ref=e256]:
              - img "Bundeli" [ref=e258]
              - generic [ref=e259]: Bundeli
            - img [ref=e260]
          - button "Chhattisgarhi Chhattisgarhi" [ref=e262] [cursor=pointer]:
            - generic [ref=e263]:
              - img "Chhattisgarhi" [ref=e265]
              - generic [ref=e266]: Chhattisgarhi
            - img [ref=e267]
          - button "Dogri Dogri" [ref=e269] [cursor=pointer]:
            - generic [ref=e270]:
              - img "Dogri" [ref=e272]
              - generic [ref=e273]: Dogri
            - img [ref=e274]
          - button "English English" [ref=e276] [cursor=pointer]:
            - generic [ref=e277]:
              - img "English" [ref=e279]
              - generic [ref=e280]: English
            - img [ref=e281]
          - button "Garhwali Garhwali" [ref=e283] [cursor=pointer]:
            - generic [ref=e284]:
              - img "Garhwali" [ref=e286]
              - generic [ref=e287]: Garhwali
            - img [ref=e288]
          - button "Garo Garo" [ref=e290] [cursor=pointer]:
            - generic [ref=e291]:
              - img "Garo" [ref=e293]
              - generic [ref=e294]: Garo
            - img [ref=e295]
          - button "Gujarati Gujarati" [ref=e297] [cursor=pointer]:
            - generic [ref=e298]:
              - img "Gujarati" [ref=e300]
              - generic [ref=e301]: Gujarati
            - img [ref=e302]
          - button "Harouti Harouti" [ref=e304] [cursor=pointer]:
            - generic [ref=e305]:
              - img "Harouti" [ref=e307]
              - generic [ref=e308]: Harouti
            - img [ref=e309]
          - button "Haryanvi Haryanvi" [ref=e311] [cursor=pointer]:
            - generic [ref=e312]:
              - img "Haryanvi" [ref=e314]
              - generic [ref=e315]: Haryanvi
            - img [ref=e316]
          - button "Hindi Hindi" [ref=e318] [cursor=pointer]:
            - generic [ref=e319]:
              - img "Hindi" [ref=e321]
              - generic [ref=e322]: Hindi
            - img [ref=e323]
          - button "Kangri Kangri" [ref=e325] [cursor=pointer]:
            - generic [ref=e326]:
              - img "Kangri" [ref=e328]
              - generic [ref=e329]: Kangri
            - img [ref=e330]
          - button "Kannada Kannada" [ref=e332] [cursor=pointer]:
            - generic [ref=e333]:
              - img "Kannada" [ref=e335]
              - generic [ref=e336]: Kannada
            - img [ref=e337]
          - button "Kashmiri Kashmiri" [ref=e339] [cursor=pointer]:
            - generic [ref=e340]:
              - img "Kashmiri" [ref=e342]
              - generic [ref=e343]: Kashmiri
            - img [ref=e344]
          - button "Konkani Konkani" [ref=e346] [cursor=pointer]:
            - generic [ref=e347]:
              - img "Konkani" [ref=e349]
              - generic [ref=e350]: Konkani
            - img [ref=e351]
          - button "Kumaoni Kumaoni" [ref=e353] [cursor=pointer]:
            - generic [ref=e354]:
              - img "Kumaoni" [ref=e356]
              - generic [ref=e357]: Kumaoni
            - img [ref=e358]
          - button "Kurukh Kurukh" [ref=e360] [cursor=pointer]:
            - generic [ref=e361]:
              - img "Kurukh" [ref=e363]
              - generic [ref=e364]: Kurukh
            - img [ref=e365]
          - button "Magahi Magahi" [ref=e367] [cursor=pointer]:
            - generic [ref=e368]:
              - img "Magahi" [ref=e370]
              - generic [ref=e371]: Magahi
            - img [ref=e372]
          - button "Maithili Maithili" [ref=e374] [cursor=pointer]:
            - generic [ref=e375]:
              - img "Maithili" [ref=e377]
              - generic [ref=e378]: Maithili
            - img [ref=e379]
          - button "Malayalam Malayalam" [ref=e381] [cursor=pointer]:
            - generic [ref=e382]:
              - img "Malayalam" [ref=e384]
              - generic [ref=e385]: Malayalam
            - img [ref=e386]
          - button "Manipuri Manipuri" [ref=e388] [cursor=pointer]:
            - generic [ref=e389]:
              - img "Manipuri" [ref=e391]
              - generic [ref=e392]: Manipuri
            - img [ref=e393]
          - button "Marathi Marathi" [ref=e395] [cursor=pointer]:
            - generic [ref=e396]:
              - img "Marathi" [ref=e398]
              - generic [ref=e399]: Marathi
            - img [ref=e400]
          - button "Marwadi Marwadi" [ref=e402] [cursor=pointer]:
            - generic [ref=e403]:
              - img "Marwadi" [ref=e405]
              - generic [ref=e406]: Marwadi
            - img [ref=e407]
          - button "Nepali Nepali" [ref=e409] [cursor=pointer]:
            - generic [ref=e410]:
              - img "Nepali" [ref=e412]
              - generic [ref=e413]: Nepali
            - img [ref=e414]
          - button "Nimadi Nimadi" [ref=e416] [cursor=pointer]:
            - generic [ref=e417]:
              - img "Nimadi" [ref=e419]
              - generic [ref=e420]: Nimadi
            - img [ref=e421]
          - button "Odia Odia" [ref=e423] [cursor=pointer]:
            - generic [ref=e424]:
              - img "Odia" [ref=e426]
              - generic [ref=e427]: Odia
            - img [ref=e428]
          - button "Pahari Mahasui Pahari Mahasui" [ref=e430] [cursor=pointer]:
            - generic [ref=e431]:
              - img "Pahari Mahasui" [ref=e433]
              - generic [ref=e434]: Pahari Mahasui
            - img [ref=e435]
          - button "Punjabi Punjabi" [ref=e437] [cursor=pointer]:
            - generic [ref=e438]:
              - img "Punjabi" [ref=e440]
              - generic [ref=e441]: Punjabi
            - img [ref=e442]
          - button "Rajasthani Rajasthani" [ref=e444] [cursor=pointer]:
            - generic [ref=e445]:
              - img "Rajasthani" [ref=e447]
              - generic [ref=e448]: Rajasthani
            - img [ref=e449]
          - button "Sanskrit Sanskrit" [ref=e451] [cursor=pointer]:
            - generic [ref=e452]:
              - img "Sanskrit" [ref=e454]
              - generic [ref=e455]: Sanskrit
            - img [ref=e456]
          - button "Santali Santali" [ref=e458] [cursor=pointer]:
            - generic [ref=e459]:
              - img "Santali" [ref=e461]
              - generic [ref=e462]: Santali
            - img [ref=e463]
          - button "Sindhi Sindhi" [ref=e465] [cursor=pointer]:
            - generic [ref=e466]:
              - img "Sindhi" [ref=e468]
              - generic [ref=e469]: Sindhi
            - img [ref=e470]
          - button "Surgujia Surgujia" [ref=e472] [cursor=pointer]:
            - generic [ref=e473]:
              - img "Surgujia" [ref=e475]
              - generic [ref=e476]: Surgujia
            - img [ref=e477]
          - button "Tamil Tamil" [ref=e479] [cursor=pointer]:
            - generic [ref=e480]:
              - img "Tamil" [ref=e482]
              - generic [ref=e483]: Tamil
            - img [ref=e484]
          - button "Telugu Telugu" [ref=e486] [cursor=pointer]:
            - generic [ref=e487]:
              - img "Telugu" [ref=e489]
              - generic [ref=e490]: Telugu
            - img [ref=e491]
          - button "Tulu Tulu" [ref=e493] [cursor=pointer]:
            - generic [ref=e494]:
              - img "Tulu" [ref=e496]
              - generic [ref=e497]: Tulu
            - img [ref=e498]
          - button "Urdu Urdu" [ref=e500] [cursor=pointer]:
            - generic [ref=e501]:
              - img "Urdu" [ref=e503]
              - generic [ref=e504]: Urdu
            - img [ref=e505]
          - button "Wagdi Wagdi" [ref=e507] [cursor=pointer]:
            - generic [ref=e508]:
              - img "Wagdi" [ref=e510]
              - generic [ref=e511]: Wagdi
            - img [ref=e512]
        - link "See the full list of languages supported by Shunya Labs" [ref=e515] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/models-languages/supported-languages
          - text: See the full list of languages supported by Shunya Labs
          - img [ref=e516]
    - contentinfo [ref=e518]:
      - generic [ref=e519]:
        - paragraph [ref=e520]: The fastest way to add voice AI to your products
        - paragraph [ref=e521]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e522]:
          - link "Go to Pricing page" [ref=e523] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e524] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e525]:
      - generic [ref=e526]:
        - generic [ref=e527]:
          - img "Shunya Labs" [ref=e528]
          - paragraph [ref=e529]: Shunya Labs, Inc.
        - generic [ref=e530]:
          - paragraph [ref=e531]: Product
          - list [ref=e532]:
            - listitem [ref=e533]:
              - link "Overview" [ref=e534] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e535]:
              - link "Models" [ref=e536] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e537]:
              - link "Voice Agents" [ref=e538] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e539]:
              - link "Speech Intelligence" [ref=e540] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e541]:
              - link "Audio Processing" [ref=e542] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e543]:
              - link "Deployment" [ref=e544] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e545]:
          - paragraph [ref=e546]: Models
          - list [ref=e547]:
            - listitem [ref=e548]:
              - link "Language Models" [ref=e549] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e550]:
              - link "Zero STT Indic" [ref=e551] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e552]:
              - link "Zero STT Codeswitch" [ref=e553] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e554]:
              - link "Specialised Models" [ref=e555] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e556]:
              - link "Zero STT Med" [ref=e557] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e558]:
              - link "On Device Models" [ref=e559] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e560]:
          - paragraph [ref=e561]: Solutions
          - list [ref=e562]:
            - listitem [ref=e563]:
              - link "Contact Centers" [ref=e564] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e565]:
              - link "Media & Entertainment" [ref=e566] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e567]:
              - link "Healthcare" [ref=e568] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e569]:
          - paragraph [ref=e570]: Resources
          - list [ref=e571]:
            - listitem [ref=e572]:
              - link "Blogs" [ref=e573] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e574]:
              - link "Benchmarks" [ref=e575] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e576]:
              - link "News & Media" [ref=e577] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e578]:
              - link "Patents" [ref=e579] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e580]:
              - link "Research" [ref=e581] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e583]:
          - link "Documentation" [ref=e584] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e586]:
          - listitem [ref=e587]:
            - link "About us" [ref=e588] [cursor=pointer]:
              - /url: /about
        - list [ref=e590]:
          - listitem [ref=e591]:
            - link "Pricing" [ref=e592] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e593]:
        - paragraph [ref=e594]: Follow us on
        - generic [ref=e595]:
          - link [ref=e596] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e597]
          - link [ref=e599] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e600]
          - link [ref=e602] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e603]
          - link [ref=e605] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e606]
      - generic [ref=e608]:
        - paragraph [ref=e609]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e610]:
          - link "Privacy" [ref=e611] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e612] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e613] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e614] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e615] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e616]
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