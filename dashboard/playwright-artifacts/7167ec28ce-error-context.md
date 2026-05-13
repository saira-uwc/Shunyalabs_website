# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-universal/design.spec.js >> Models - Zero STT Universal design compliance >> Figma design compliance
- Location: tests/modules/models/zero-stt-universal/design.spec.js:13:3

# Error details

```
Error: [content] Page title: expected "Zero STT - Real-Time Speech-to-Text AI for 200+ Languages | Shunya Labs" but got "Zero STT: Real-Time Speech-to-Text AI for 200+ Languages"

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
        - link "Shunya Labs Logo" [ref=e6] [cursor=pointer]:
          - /url: /
          - img "Shunya Labs Logo" [ref=e7]
        - generic [ref=e8]:
          - button "Product" [ref=e10] [cursor=pointer]:
            - text: Product
            - img [ref=e11]
          - button "Models" [ref=e14] [cursor=pointer]:
            - text: Models
            - img [ref=e15]
          - button "Solutions" [ref=e18] [cursor=pointer]:
            - text: Solutions
            - img [ref=e19]
          - button "Resources" [ref=e22] [cursor=pointer]:
            - text: Resources
            - img [ref=e23]
          - link "Documentation" [ref=e25] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
          - link "About Us" [ref=e26] [cursor=pointer]:
            - /url: /about
          - link "Pricing" [ref=e27] [cursor=pointer]:
            - /url: /pricing
        - link "Playground" [ref=e28] [cursor=pointer]:
          - /url: https://playground.shunyalabs.ai/
          - img [ref=e29]
          - text: Playground
        - generic [ref=e31]:
          - button "Sign In" [ref=e32] [cursor=pointer]
          - link "Contact Sales" [ref=e33] [cursor=pointer]:
            - /url: /contact
    - generic [ref=e35]:
      - generic [ref=e36]:
        - heading "The world’s most accurate speech-to-text model supporting 200+ languages" [level=1] [ref=e37]
        - paragraph [ref=e38]: Zero Universal is 48% more accurate than the next best speech-to-text model, designed to support conversational speech in 200+ languages in noisy real world scenarios with speaker overlap.
      - main [ref=e41]:
        - generic [ref=e46]:
          - generic [ref=e50]:
            - generic [ref=e52]:
              - generic [ref=e53]: Language
              - button "🇺🇸English" [ref=e56] [cursor=pointer]:
                - generic [ref=e57]: 🇺🇸English
                - generic:
                  - img
            - generic [ref=e59]:
              - generic [ref=e60]: Input Audio
              - generic [ref=e61]:
                - generic [ref=e62]: Pre-recorded
                - generic [ref=e65]:
                  - button "Customer Support Call" [ref=e66] [cursor=pointer]
                  - button "Podcast" [ref=e67] [cursor=pointer]
                  - button "Upload your file" [ref=e68] [cursor=pointer]
            - generic [ref=e70]:
              - generic [ref=e72]: or
              - generic [ref=e73]:
                - generic [ref=e75]: Live recording
                - button "Start Speaking" [ref=e76] [cursor=pointer]:
                  - generic [ref=e77]: Start Speaking
          - generic [ref=e81]:
            - generic [ref=e82]:
              - button "Play audio" [ref=e85] [cursor=pointer]:
                - img [ref=e86]
              - button "No conversation to copy" [disabled] [ref=e153]:
                - img [ref=e154]
            - generic [ref=e163]:
              - img [ref=e166]
              - paragraph [ref=e170]: Select your input language, then pick a sample, upload a file, or start speaking to capture live audio.
      - link "Get Zero STT API now" [ref=e172] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/models/language
        - button "Get Zero STT API now" [ref=e173]
    - generic [ref=e175]:
      - heading "Speech recognition built for scale" [level=2] [ref=e176]
      - paragraph [ref=e177]: Deploy once, transcribe everywhere—with the accuracy and speed your users demand.
      - generic [ref=e178]:
        - generic [ref=e179]:
          - heading "Superior Accuracy" [level=3] [ref=e180]
          - paragraph [ref=e181]: Industry-leading 3.10% WER delivers accurate transcriptions, built for production workloads where precision matters.
        - generic [ref=e182]:
          - heading "Broad Language Support" [level=3] [ref=e183]
          - paragraph [ref=e184]: Understand the world with 200+ languages and robust accent support. One model that works everywhere, for everyone.
        - generic [ref=e185]:
          - heading "Subsecond Latency" [level=3] [ref=e186]
          - paragraph [ref=e187]: Lightning-fast processing keeps conversations flowing naturally. Real-time transcription that feels instant, every time.
    - generic [ref=e188]:
      - generic [ref=e190]:
        - paragraph [ref=e191]: Language Regions
        - paragraph [ref=e192]: Explore our comprehensive language coverage across the globe
      - generic [ref=e193]:
        - generic [ref=e194]:
          - button "Assamese Assamese" [ref=e195] [cursor=pointer]:
            - generic [ref=e196]:
              - img "Assamese" [ref=e198]
              - generic [ref=e199]: Assamese
            - img [ref=e200]
          - button "Awadhi Awadhi" [ref=e202] [cursor=pointer]:
            - generic [ref=e203]:
              - img "Awadhi" [ref=e205]
              - generic [ref=e206]: Awadhi
            - img [ref=e207]
          - button "Bagri Bagri" [ref=e209] [cursor=pointer]:
            - generic [ref=e210]:
              - img "Bagri" [ref=e212]
              - generic [ref=e213]: Bagri
            - img [ref=e214]
          - button "Bengali Bengali" [ref=e216] [cursor=pointer]:
            - generic [ref=e217]:
              - img "Bengali" [ref=e219]
              - generic [ref=e220]: Bengali
            - img [ref=e221]
          - button "Bhili Bhili" [ref=e223] [cursor=pointer]:
            - generic [ref=e224]:
              - img "Bhili" [ref=e226]
              - generic [ref=e227]: Bhili
            - img [ref=e228]
          - button "Bhojpuri Bhojpuri" [ref=e230] [cursor=pointer]:
            - generic [ref=e231]:
              - img "Bhojpuri" [ref=e233]
              - generic [ref=e234]: Bhojpuri
            - img [ref=e235]
          - button "Bodo Bodo" [ref=e237] [cursor=pointer]:
            - generic [ref=e238]:
              - img "Bodo" [ref=e240]
              - generic [ref=e241]: Bodo
            - img [ref=e242]
          - button "Braj Braj" [ref=e244] [cursor=pointer]:
            - generic [ref=e245]:
              - img "Braj" [ref=e247]
              - generic [ref=e248]: Braj
            - img [ref=e249]
          - button "Bundeli Bundeli" [ref=e251] [cursor=pointer]:
            - generic [ref=e252]:
              - img "Bundeli" [ref=e254]
              - generic [ref=e255]: Bundeli
            - img [ref=e256]
          - button "Chhattisgarhi Chhattisgarhi" [ref=e258] [cursor=pointer]:
            - generic [ref=e259]:
              - img "Chhattisgarhi" [ref=e261]
              - generic [ref=e262]: Chhattisgarhi
            - img [ref=e263]
          - button "Dogri Dogri" [ref=e265] [cursor=pointer]:
            - generic [ref=e266]:
              - img "Dogri" [ref=e268]
              - generic [ref=e269]: Dogri
            - img [ref=e270]
          - button "English English" [ref=e272] [cursor=pointer]:
            - generic [ref=e273]:
              - img "English" [ref=e275]
              - generic [ref=e276]: English
            - img [ref=e277]
          - button "Garhwali Garhwali" [ref=e279] [cursor=pointer]:
            - generic [ref=e280]:
              - img "Garhwali" [ref=e282]
              - generic [ref=e283]: Garhwali
            - img [ref=e284]
          - button "Garo Garo" [ref=e286] [cursor=pointer]:
            - generic [ref=e287]:
              - img "Garo" [ref=e289]
              - generic [ref=e290]: Garo
            - img [ref=e291]
          - button "Gujarati Gujarati" [ref=e293] [cursor=pointer]:
            - generic [ref=e294]:
              - img "Gujarati" [ref=e296]
              - generic [ref=e297]: Gujarati
            - img [ref=e298]
          - button "Harouti Harouti" [ref=e300] [cursor=pointer]:
            - generic [ref=e301]:
              - img "Harouti" [ref=e303]
              - generic [ref=e304]: Harouti
            - img [ref=e305]
          - button "Haryanvi Haryanvi" [ref=e307] [cursor=pointer]:
            - generic [ref=e308]:
              - img "Haryanvi" [ref=e310]
              - generic [ref=e311]: Haryanvi
            - img [ref=e312]
          - button "Hindi Hindi" [ref=e314] [cursor=pointer]:
            - generic [ref=e315]:
              - img "Hindi" [ref=e317]
              - generic [ref=e318]: Hindi
            - img [ref=e319]
          - button "Kangri Kangri" [ref=e321] [cursor=pointer]:
            - generic [ref=e322]:
              - img "Kangri" [ref=e324]
              - generic [ref=e325]: Kangri
            - img [ref=e326]
          - button "Kannada Kannada" [ref=e328] [cursor=pointer]:
            - generic [ref=e329]:
              - img "Kannada" [ref=e331]
              - generic [ref=e332]: Kannada
            - img [ref=e333]
          - button "Kashmiri Kashmiri" [ref=e335] [cursor=pointer]:
            - generic [ref=e336]:
              - img "Kashmiri" [ref=e338]
              - generic [ref=e339]: Kashmiri
            - img [ref=e340]
          - button "Konkani Konkani" [ref=e342] [cursor=pointer]:
            - generic [ref=e343]:
              - img "Konkani" [ref=e345]
              - generic [ref=e346]: Konkani
            - img [ref=e347]
          - button "Kumaoni Kumaoni" [ref=e349] [cursor=pointer]:
            - generic [ref=e350]:
              - img "Kumaoni" [ref=e352]
              - generic [ref=e353]: Kumaoni
            - img [ref=e354]
          - button "Kurukh Kurukh" [ref=e356] [cursor=pointer]:
            - generic [ref=e357]:
              - img "Kurukh" [ref=e359]
              - generic [ref=e360]: Kurukh
            - img [ref=e361]
          - button "Magahi Magahi" [ref=e363] [cursor=pointer]:
            - generic [ref=e364]:
              - img "Magahi" [ref=e366]
              - generic [ref=e367]: Magahi
            - img [ref=e368]
          - button "Maithili Maithili" [ref=e370] [cursor=pointer]:
            - generic [ref=e371]:
              - img "Maithili" [ref=e373]
              - generic [ref=e374]: Maithili
            - img [ref=e375]
          - button "Malayalam Malayalam" [ref=e377] [cursor=pointer]:
            - generic [ref=e378]:
              - img "Malayalam" [ref=e380]
              - generic [ref=e381]: Malayalam
            - img [ref=e382]
          - button "Manipuri Manipuri" [ref=e384] [cursor=pointer]:
            - generic [ref=e385]:
              - img "Manipuri" [ref=e387]
              - generic [ref=e388]: Manipuri
            - img [ref=e389]
          - button "Marathi Marathi" [ref=e391] [cursor=pointer]:
            - generic [ref=e392]:
              - img "Marathi" [ref=e394]
              - generic [ref=e395]: Marathi
            - img [ref=e396]
          - button "Marwadi Marwadi" [ref=e398] [cursor=pointer]:
            - generic [ref=e399]:
              - img "Marwadi" [ref=e401]
              - generic [ref=e402]: Marwadi
            - img [ref=e403]
          - button "Nepali Nepali" [ref=e405] [cursor=pointer]:
            - generic [ref=e406]:
              - img "Nepali" [ref=e408]
              - generic [ref=e409]: Nepali
            - img [ref=e410]
          - button "Nimadi Nimadi" [ref=e412] [cursor=pointer]:
            - generic [ref=e413]:
              - img "Nimadi" [ref=e415]
              - generic [ref=e416]: Nimadi
            - img [ref=e417]
          - button "Odia Odia" [ref=e419] [cursor=pointer]:
            - generic [ref=e420]:
              - img "Odia" [ref=e422]
              - generic [ref=e423]: Odia
            - img [ref=e424]
          - button "Pahari Mahasui Pahari Mahasui" [ref=e426] [cursor=pointer]:
            - generic [ref=e427]:
              - img "Pahari Mahasui" [ref=e429]
              - generic [ref=e430]: Pahari Mahasui
            - img [ref=e431]
          - button "Punjabi Punjabi" [ref=e433] [cursor=pointer]:
            - generic [ref=e434]:
              - img "Punjabi" [ref=e436]
              - generic [ref=e437]: Punjabi
            - img [ref=e438]
          - button "Rajasthani Rajasthani" [ref=e440] [cursor=pointer]:
            - generic [ref=e441]:
              - img "Rajasthani" [ref=e443]
              - generic [ref=e444]: Rajasthani
            - img [ref=e445]
          - button "Sanskrit Sanskrit" [ref=e447] [cursor=pointer]:
            - generic [ref=e448]:
              - img "Sanskrit" [ref=e450]
              - generic [ref=e451]: Sanskrit
            - img [ref=e452]
          - button "Santali Santali" [ref=e454] [cursor=pointer]:
            - generic [ref=e455]:
              - img "Santali" [ref=e457]
              - generic [ref=e458]: Santali
            - img [ref=e459]
          - button "Sindhi Sindhi" [ref=e461] [cursor=pointer]:
            - generic [ref=e462]:
              - img "Sindhi" [ref=e464]
              - generic [ref=e465]: Sindhi
            - img [ref=e466]
          - button "Surgujia Surgujia" [ref=e468] [cursor=pointer]:
            - generic [ref=e469]:
              - img "Surgujia" [ref=e471]
              - generic [ref=e472]: Surgujia
            - img [ref=e473]
          - button "Tamil Tamil" [ref=e475] [cursor=pointer]:
            - generic [ref=e476]:
              - img "Tamil" [ref=e478]
              - generic [ref=e479]: Tamil
            - img [ref=e480]
          - button "Telugu Telugu" [ref=e482] [cursor=pointer]:
            - generic [ref=e483]:
              - img "Telugu" [ref=e485]
              - generic [ref=e486]: Telugu
            - img [ref=e487]
          - button "Tulu Tulu" [ref=e489] [cursor=pointer]:
            - generic [ref=e490]:
              - img "Tulu" [ref=e492]
              - generic [ref=e493]: Tulu
            - img [ref=e494]
          - button "Urdu Urdu" [ref=e496] [cursor=pointer]:
            - generic [ref=e497]:
              - img "Urdu" [ref=e499]
              - generic [ref=e500]: Urdu
            - img [ref=e501]
          - button "Wagdi Wagdi" [ref=e503] [cursor=pointer]:
            - generic [ref=e504]:
              - img "Wagdi" [ref=e506]
              - generic [ref=e507]: Wagdi
            - img [ref=e508]
        - link "See the full list of languages supported by Shunya Labs" [ref=e511] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/models-languages/supported-languages
          - text: See the full list of languages supported by Shunya Labs
          - img [ref=e512]
    - contentinfo [ref=e514]:
      - generic [ref=e518]:
        - paragraph [ref=e519]: The fastest way to add voice AI to your products
        - paragraph [ref=e520]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e521]:
          - link "Go to Pricing page" [ref=e522] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e523] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e524]:
      - generic [ref=e525]:
        - generic [ref=e526]:
          - img "Shunya Labs" [ref=e527]
          - paragraph [ref=e528]: Shunya Labs, Inc.
        - generic [ref=e529]:
          - paragraph [ref=e530]: Product
          - list [ref=e531]:
            - listitem [ref=e532]:
              - link "Overview" [ref=e533] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e534]:
              - link "Models" [ref=e535] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e536]:
              - link "Voice Agents" [ref=e537] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e538]:
              - link "Speech Intelligence" [ref=e539] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e540]:
              - link "Audio Processing" [ref=e541] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e542]:
              - link "Deployment" [ref=e543] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e544]:
          - paragraph [ref=e545]: Models
          - list [ref=e546]:
            - listitem [ref=e547]:
              - link "Language Models" [ref=e548] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e549]:
              - link "Zero STT Indic" [ref=e550] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e551]:
              - link "Zero STT Codeswitch" [ref=e552] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e553]:
              - link "Specialised Models" [ref=e554] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e555]:
              - link "Zero STT Med" [ref=e556] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e557]:
              - link "On Device Models" [ref=e558] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e559]:
          - paragraph [ref=e560]: Solutions
          - list [ref=e561]:
            - listitem [ref=e562]:
              - link "Contact Centers" [ref=e563] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e564]:
              - link "Media & Entertainment" [ref=e565] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e566]:
              - link "Healthcare" [ref=e567] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e568]:
          - paragraph [ref=e569]: Resources
          - list [ref=e570]:
            - listitem [ref=e571]:
              - link "Blogs" [ref=e572] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e573]:
              - link "Benchmarks" [ref=e574] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e575]:
              - link "News & Media" [ref=e576] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e577]:
              - link "Patents" [ref=e578] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e579]:
              - link "Research" [ref=e580] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e582]:
          - link "Documentation" [ref=e583] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e585]:
          - listitem [ref=e586]:
            - link "About us" [ref=e587] [cursor=pointer]:
              - /url: /about
        - list [ref=e589]:
          - listitem [ref=e590]:
            - link "Pricing" [ref=e591] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e592]:
        - paragraph [ref=e593]: Follow us on
        - generic [ref=e594]:
          - link [ref=e595] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e596]
          - link [ref=e598] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e599]
          - link [ref=e601] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e602]
          - link [ref=e604] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e605]
      - generic [ref=e607]:
        - paragraph [ref=e608]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e609]:
          - link "Privacy" [ref=e610] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e611] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e612] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e613] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e614] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e615]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { pageRegistry } from '../../../../test-data/page-registry.js';
  3  | import { runDesignComplianceTest } from '../../../../utils/design-validator.js';
  4  | 
  5  | const pageEntry = pageRegistry.find(
  6  |   (page) => page.moduleKey === 'models' && page.slug === 'zero-stt-universal'
  7  | );
  8  | 
  9  | const moduleLabel = pageEntry?.moduleLabel || 'models';
  10 | const pageLabel = pageEntry?.pageLabel || 'zero-stt-universal';
  11 | 
  12 | test.describe(`${moduleLabel} - ${pageLabel} design compliance`, () => {
  13 |   test('Figma design compliance', async ({ page }) => {
  14 |     const failures = await runDesignComplianceTest({ page, pageEntry });
  15 | 
  16 |     for (const f of failures) {
  17 |       expect.soft(null, `[${f.section}] ${f.message}`).toBeTruthy();
  18 |     }
  19 | 
> 20 |     expect(failures.length, `${failures.length} design compliance issue(s) found`).toBe(0);
     |                                                                                    ^ Error: 1 design compliance issue(s) found
  21 |   });
  22 | });
  23 | 
```