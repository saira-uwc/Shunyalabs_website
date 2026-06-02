# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/language-models/design.spec.js >> Models - Language Models design compliance >> Figma design compliance
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
Error: [content] Text content "One platform for speech in and speech out—secure by design, built to scale." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "© 2026 Shunya Labs Inc. All rights reserved." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 4 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 4
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
    - generic [ref=e38]:
      - generic [ref=e39]:
        - heading "One API for 200+ languages and multilingual transcriptions" [level=1] [ref=e40]
        - paragraph [ref=e41]: Reach the largest possible audience in real time—without juggling multiple language APIs or wrestling with complex setup.
      - generic [ref=e42]:
        - generic [ref=e43]:
          - heading "Zero STT Indic" [level=3] [ref=e44]
          - generic [ref=e45]:
            - paragraph [ref=e46]: Superior Indic models for industry best accuracy and speed in transcribing speech in Hindi, Bengali, Kannada and Telugu.
            - link "Learn more" [ref=e47] [cursor=pointer]:
              - /url: /zero-indic
              - generic [ref=e48]: Learn more
              - img [ref=e49]
        - generic [ref=e51]:
          - heading "Zero STT Code-switch" [level=3] [ref=e52]
          - generic [ref=e53]:
            - paragraph [ref=e54]: The only model in the world that processes and returns output in mixed langauge tokens. Now available for Hinglish.
            - link "Learn more" [ref=e55] [cursor=pointer]:
              - /url: /zero-code-switch
              - generic [ref=e56]: Learn more
              - img [ref=e57]
        - generic [ref=e59]:
          - heading "Zero STT" [level=3] [ref=e60]
          - generic [ref=e61]:
            - paragraph [ref=e62]: Universal language model that supports everyday conversational speech transcription in 200+ languages.
            - link "Learn more" [ref=e63] [cursor=pointer]:
              - /url: /zero-stt
              - generic [ref=e64]: Learn more
              - img [ref=e65]
    - generic [ref=e67]:
      - generic [ref=e68]:
        - heading "Experience the magic of Shunya Labs’ code-switching transcription" [level=2] [ref=e69]
        - paragraph [ref=e70]: Shunya Labs’ code-switching ASR is the only in the world that returns native Hinglish transcripts in real time. Keep the natural flow of conversation and still get fast, accurate, mixed-language transcription.
      - img "img1" [ref=e72]
      - link "Try now" [ref=e73] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/models/language
        - button "Try now" [ref=e74]
    - generic [ref=e75]:
      - generic [ref=e76]:
        - heading "Transcribe Indian languages like never before" [level=2] [ref=e77]
        - paragraph [ref=e78]: Zero Indic is purpose-built for Indian speech, delivering up to 200% better accuracy than the next-best model. Unlock world-class support for your users with reliable, real-time transcripts that keep pace with the natural rhythm of conversation.
      - img "img1" [ref=e80]
      - link "Try now" [ref=e81] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/models/language
        - button "Try now" [ref=e82]
    - generic [ref=e83]:
      - generic [ref=e85]:
        - paragraph [ref=e86]: One API for 200+ languages, covering 97% of the global population
        - paragraph [ref=e87]: Zero STT is the world's most accurate speech-to-text model designed to support conversational speech in 200+ languages in noisy real world scenarios with speaker overlap. Transcribe audio in sub second latency for captions that feels natural.
      - generic [ref=e88]:
        - generic [ref=e89]:
          - button "Assamese Assamese" [ref=e90] [cursor=pointer]:
            - generic [ref=e91]:
              - img "Assamese" [ref=e93]
              - generic [ref=e94]: Assamese
            - img [ref=e95]
          - button "Awadhi Awadhi" [ref=e97] [cursor=pointer]:
            - generic [ref=e98]:
              - img "Awadhi" [ref=e100]
              - generic [ref=e101]: Awadhi
            - img [ref=e102]
          - button "Bagri Bagri" [ref=e104] [cursor=pointer]:
            - generic [ref=e105]:
              - img "Bagri" [ref=e107]
              - generic [ref=e108]: Bagri
            - img [ref=e109]
          - button "Bengali Bengali" [ref=e111] [cursor=pointer]:
            - generic [ref=e112]:
              - img "Bengali" [ref=e114]
              - generic [ref=e115]: Bengali
            - img [ref=e116]
          - button "Bhili Bhili" [ref=e118] [cursor=pointer]:
            - generic [ref=e119]:
              - img "Bhili" [ref=e121]
              - generic [ref=e122]: Bhili
            - img [ref=e123]
          - button "Bhojpuri Bhojpuri" [ref=e125] [cursor=pointer]:
            - generic [ref=e126]:
              - img "Bhojpuri" [ref=e128]
              - generic [ref=e129]: Bhojpuri
            - img [ref=e130]
          - button "Bodo Bodo" [ref=e132] [cursor=pointer]:
            - generic [ref=e133]:
              - img "Bodo" [ref=e135]
              - generic [ref=e136]: Bodo
            - img [ref=e137]
          - button "Braj Braj" [ref=e139] [cursor=pointer]:
            - generic [ref=e140]:
              - img "Braj" [ref=e142]
              - generic [ref=e143]: Braj
            - img [ref=e144]
          - button "Bundeli Bundeli" [ref=e146] [cursor=pointer]:
            - generic [ref=e147]:
              - img "Bundeli" [ref=e149]
              - generic [ref=e150]: Bundeli
            - img [ref=e151]
          - button "Chhattisgarhi Chhattisgarhi" [ref=e153] [cursor=pointer]:
            - generic [ref=e154]:
              - img "Chhattisgarhi" [ref=e156]
              - generic [ref=e157]: Chhattisgarhi
            - img [ref=e158]
          - button "Dogri Dogri" [ref=e160] [cursor=pointer]:
            - generic [ref=e161]:
              - img "Dogri" [ref=e163]
              - generic [ref=e164]: Dogri
            - img [ref=e165]
          - button "English English" [ref=e167] [cursor=pointer]:
            - generic [ref=e168]:
              - img "English" [ref=e170]
              - generic [ref=e171]: English
            - img [ref=e172]
          - button "Garhwali Garhwali" [ref=e174] [cursor=pointer]:
            - generic [ref=e175]:
              - img "Garhwali" [ref=e177]
              - generic [ref=e178]: Garhwali
            - img [ref=e179]
          - button "Garo Garo" [ref=e181] [cursor=pointer]:
            - generic [ref=e182]:
              - img "Garo" [ref=e184]
              - generic [ref=e185]: Garo
            - img [ref=e186]
          - button "Gujarati Gujarati" [ref=e188] [cursor=pointer]:
            - generic [ref=e189]:
              - img "Gujarati" [ref=e191]
              - generic [ref=e192]: Gujarati
            - img [ref=e193]
          - button "Harouti Harouti" [ref=e195] [cursor=pointer]:
            - generic [ref=e196]:
              - img "Harouti" [ref=e198]
              - generic [ref=e199]: Harouti
            - img [ref=e200]
          - button "Haryanvi Haryanvi" [ref=e202] [cursor=pointer]:
            - generic [ref=e203]:
              - img "Haryanvi" [ref=e205]
              - generic [ref=e206]: Haryanvi
            - img [ref=e207]
          - button "Hindi Hindi" [ref=e209] [cursor=pointer]:
            - generic [ref=e210]:
              - img "Hindi" [ref=e212]
              - generic [ref=e213]: Hindi
            - img [ref=e214]
          - button "Kangri Kangri" [ref=e216] [cursor=pointer]:
            - generic [ref=e217]:
              - img "Kangri" [ref=e219]
              - generic [ref=e220]: Kangri
            - img [ref=e221]
          - button "Kannada Kannada" [ref=e223] [cursor=pointer]:
            - generic [ref=e224]:
              - img "Kannada" [ref=e226]
              - generic [ref=e227]: Kannada
            - img [ref=e228]
          - button "Kashmiri Kashmiri" [ref=e230] [cursor=pointer]:
            - generic [ref=e231]:
              - img "Kashmiri" [ref=e233]
              - generic [ref=e234]: Kashmiri
            - img [ref=e235]
          - button "Konkani Konkani" [ref=e237] [cursor=pointer]:
            - generic [ref=e238]:
              - img "Konkani" [ref=e240]
              - generic [ref=e241]: Konkani
            - img [ref=e242]
          - button "Kumaoni Kumaoni" [ref=e244] [cursor=pointer]:
            - generic [ref=e245]:
              - img "Kumaoni" [ref=e247]
              - generic [ref=e248]: Kumaoni
            - img [ref=e249]
          - button "Kurukh Kurukh" [ref=e251] [cursor=pointer]:
            - generic [ref=e252]:
              - img "Kurukh" [ref=e254]
              - generic [ref=e255]: Kurukh
            - img [ref=e256]
          - button "Magahi Magahi" [ref=e258] [cursor=pointer]:
            - generic [ref=e259]:
              - img "Magahi" [ref=e261]
              - generic [ref=e262]: Magahi
            - img [ref=e263]
          - button "Maithili Maithili" [ref=e265] [cursor=pointer]:
            - generic [ref=e266]:
              - img "Maithili" [ref=e268]
              - generic [ref=e269]: Maithili
            - img [ref=e270]
          - button "Malayalam Malayalam" [ref=e272] [cursor=pointer]:
            - generic [ref=e273]:
              - img "Malayalam" [ref=e275]
              - generic [ref=e276]: Malayalam
            - img [ref=e277]
          - button "Manipuri Manipuri" [ref=e279] [cursor=pointer]:
            - generic [ref=e280]:
              - img "Manipuri" [ref=e282]
              - generic [ref=e283]: Manipuri
            - img [ref=e284]
          - button "Marathi Marathi" [ref=e286] [cursor=pointer]:
            - generic [ref=e287]:
              - img "Marathi" [ref=e289]
              - generic [ref=e290]: Marathi
            - img [ref=e291]
          - button "Marwadi Marwadi" [ref=e293] [cursor=pointer]:
            - generic [ref=e294]:
              - img "Marwadi" [ref=e296]
              - generic [ref=e297]: Marwadi
            - img [ref=e298]
          - button "Nepali Nepali" [ref=e300] [cursor=pointer]:
            - generic [ref=e301]:
              - img "Nepali" [ref=e303]
              - generic [ref=e304]: Nepali
            - img [ref=e305]
          - button "Nimadi Nimadi" [ref=e307] [cursor=pointer]:
            - generic [ref=e308]:
              - img "Nimadi" [ref=e310]
              - generic [ref=e311]: Nimadi
            - img [ref=e312]
          - button "Odia Odia" [ref=e314] [cursor=pointer]:
            - generic [ref=e315]:
              - img "Odia" [ref=e317]
              - generic [ref=e318]: Odia
            - img [ref=e319]
          - button "Pahari Mahasui Pahari Mahasui" [ref=e321] [cursor=pointer]:
            - generic [ref=e322]:
              - img "Pahari Mahasui" [ref=e324]
              - generic [ref=e325]: Pahari Mahasui
            - img [ref=e326]
          - button "Punjabi Punjabi" [ref=e328] [cursor=pointer]:
            - generic [ref=e329]:
              - img "Punjabi" [ref=e331]
              - generic [ref=e332]: Punjabi
            - img [ref=e333]
          - button "Rajasthani Rajasthani" [ref=e335] [cursor=pointer]:
            - generic [ref=e336]:
              - img "Rajasthani" [ref=e338]
              - generic [ref=e339]: Rajasthani
            - img [ref=e340]
          - button "Sanskrit Sanskrit" [ref=e342] [cursor=pointer]:
            - generic [ref=e343]:
              - img "Sanskrit" [ref=e345]
              - generic [ref=e346]: Sanskrit
            - img [ref=e347]
          - button "Santali Santali" [ref=e349] [cursor=pointer]:
            - generic [ref=e350]:
              - img "Santali" [ref=e352]
              - generic [ref=e353]: Santali
            - img [ref=e354]
          - button "Sindhi Sindhi" [ref=e356] [cursor=pointer]:
            - generic [ref=e357]:
              - img "Sindhi" [ref=e359]
              - generic [ref=e360]: Sindhi
            - img [ref=e361]
          - button "Surgujia Surgujia" [ref=e363] [cursor=pointer]:
            - generic [ref=e364]:
              - img "Surgujia" [ref=e366]
              - generic [ref=e367]: Surgujia
            - img [ref=e368]
          - button "Tamil Tamil" [ref=e370] [cursor=pointer]:
            - generic [ref=e371]:
              - img "Tamil" [ref=e373]
              - generic [ref=e374]: Tamil
            - img [ref=e375]
          - button "Telugu Telugu" [ref=e377] [cursor=pointer]:
            - generic [ref=e378]:
              - img "Telugu" [ref=e380]
              - generic [ref=e381]: Telugu
            - img [ref=e382]
          - button "Tulu Tulu" [ref=e384] [cursor=pointer]:
            - generic [ref=e385]:
              - img "Tulu" [ref=e387]
              - generic [ref=e388]: Tulu
            - img [ref=e389]
          - button "Urdu Urdu" [ref=e391] [cursor=pointer]:
            - generic [ref=e392]:
              - img "Urdu" [ref=e394]
              - generic [ref=e395]: Urdu
            - img [ref=e396]
          - button "Wagdi Wagdi" [ref=e398] [cursor=pointer]:
            - generic [ref=e399]:
              - img "Wagdi" [ref=e401]
              - generic [ref=e402]: Wagdi
            - img [ref=e403]
        - link "See the full list of languages supported by Shunya Labs" [ref=e406] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/models-languages/supported-languages
          - text: See the full list of languages supported by Shunya Labs
          - img [ref=e407]
    - contentinfo [ref=e409]:
      - generic [ref=e410]:
        - paragraph [ref=e411]: The fastest way to add voice AI to your products
        - paragraph [ref=e412]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e413]:
          - link "Go to Pricing page" [ref=e414] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e415] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e416]:
      - generic [ref=e417]:
        - generic [ref=e418]:
          - img "Shunya Labs" [ref=e419]
          - paragraph [ref=e420]: Shunya Labs, Inc.
        - generic [ref=e421]:
          - paragraph [ref=e422]: Product
          - list [ref=e423]:
            - listitem [ref=e424]:
              - link "Overview" [ref=e425] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e426]:
              - link "Models" [ref=e427] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e428]:
              - link "Voice Agents" [ref=e429] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e430]:
              - link "Speech Intelligence" [ref=e431] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e432]:
              - link "Audio Processing" [ref=e433] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e434]:
              - link "Deployment" [ref=e435] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e436]:
          - paragraph [ref=e437]: Models
          - list [ref=e438]:
            - listitem [ref=e439]:
              - link "Language Models" [ref=e440] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e441]:
              - link "Zero STT Indic" [ref=e442] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e443]:
              - link "Zero STT Codeswitch" [ref=e444] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e445]:
              - link "Specialised Models" [ref=e446] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e447]:
              - link "Zero STT Med" [ref=e448] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e449]:
              - link "On Device Models" [ref=e450] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e451]:
          - paragraph [ref=e452]: Solutions
          - list [ref=e453]:
            - listitem [ref=e454]:
              - link "Contact Centers" [ref=e455] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e456]:
              - link "Media & Entertainment" [ref=e457] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e458]:
              - link "Healthcare" [ref=e459] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e460]:
          - paragraph [ref=e461]: Resources
          - list [ref=e462]:
            - listitem [ref=e463]:
              - link "Blogs" [ref=e464] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e465]:
              - link "Benchmarks" [ref=e466] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e467]:
              - link "News & Media" [ref=e468] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e469]:
              - link "Patents" [ref=e470] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e471]:
              - link "Research" [ref=e472] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e474]:
          - link "Documentation" [ref=e475] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e477]:
          - listitem [ref=e478]:
            - link "About us" [ref=e479] [cursor=pointer]:
              - /url: /about
        - list [ref=e481]:
          - listitem [ref=e482]:
            - link "Pricing" [ref=e483] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e484]:
        - paragraph [ref=e485]: Follow us on
        - generic [ref=e486]:
          - link [ref=e487] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e488]
          - link [ref=e490] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e491]
          - link [ref=e493] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e494]
          - link [ref=e496] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e497]
      - generic [ref=e499]:
        - paragraph [ref=e500]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e501]:
          - link "Privacy" [ref=e502] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e503] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e504] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e505] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e506] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e507]
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
     |                                                                                      ^ Error: 4 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```