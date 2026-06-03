# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/language-models/design.spec.js >> Models - Language Models design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [global] Footer background: expected rgb(255, 255, 255) but got rgb(0, 0, 0)

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "One platform for speech in and speech out-secure by design, built to scale." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "One platform for speech in and speech out-secure by design, built to scale." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "© 2026 Shunya Labs, Inc. All rights reserved." not found on page

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
    - generic [ref=e34]:
      - generic [ref=e35]:
        - heading "One API for 200+ languages and multilingual transcriptions" [level=1] [ref=e36]
        - paragraph [ref=e37]: Reach the largest possible audience in real time—without juggling multiple language APIs or wrestling with complex setup.
      - generic [ref=e38]:
        - generic [ref=e39]:
          - heading "Zero STT Indic" [level=3] [ref=e40]
          - generic [ref=e41]:
            - paragraph [ref=e42]: Superior Indic models for industry best accuracy and speed in transcribing speech in Hindi, Bengali, Kannada and Telugu.
            - link "Learn more" [ref=e43] [cursor=pointer]:
              - /url: /zero-indic
              - generic [ref=e44]: Learn more
              - img [ref=e45]
        - generic [ref=e47]:
          - heading "Zero STT Code-switch" [level=3] [ref=e48]
          - generic [ref=e49]:
            - paragraph [ref=e50]: The only model in the world that processes and returns output in mixed langauge tokens. Now available for Hinglish.
            - link "Learn more" [ref=e51] [cursor=pointer]:
              - /url: /zero-code-switch
              - generic [ref=e52]: Learn more
              - img [ref=e53]
        - generic [ref=e55]:
          - heading "Zero STT" [level=3] [ref=e56]
          - generic [ref=e57]:
            - paragraph [ref=e58]: Universal language model that supports everyday conversational speech transcription in 200+ languages.
            - link "Learn more" [ref=e59] [cursor=pointer]:
              - /url: /zero-stt
              - generic [ref=e60]: Learn more
              - img [ref=e61]
    - generic [ref=e63]:
      - generic [ref=e64]:
        - heading "Experience the magic of Shunya Labs’ code-switching transcription" [level=2] [ref=e65]
        - paragraph [ref=e66]: Shunya Labs’ code-switching ASR is the only in the world that returns native Hinglish transcripts in real time. Keep the natural flow of conversation and still get fast, accurate, mixed-language transcription.
      - img "img1" [ref=e68]
      - link "Try now" [ref=e69] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/models/language
        - button "Try now" [ref=e70]
    - generic [ref=e71]:
      - generic [ref=e72]:
        - heading "Transcribe Indian languages like never before" [level=2] [ref=e73]
        - paragraph [ref=e74]: Zero Indic is purpose-built for Indian speech, delivering up to 200% better accuracy than the next-best model. Unlock world-class support for your users with reliable, real-time transcripts that keep pace with the natural rhythm of conversation.
      - img "img1" [ref=e76]
      - link "Try now" [ref=e77] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/models/language
        - button "Try now" [ref=e78]
    - generic [ref=e79]:
      - generic [ref=e81]:
        - paragraph [ref=e82]: One API for 200+ languages, covering 97% of the global population
        - paragraph [ref=e83]: Zero STT is the world's most accurate speech-to-text model designed to support conversational speech in 200+ languages in noisy real world scenarios with speaker overlap. Transcribe audio in sub second latency for captions that feels natural.
      - generic [ref=e84]:
        - generic [ref=e85]:
          - button "Assamese Assamese" [ref=e86] [cursor=pointer]:
            - generic [ref=e87]:
              - img "Assamese" [ref=e89]
              - generic [ref=e90]: Assamese
            - img [ref=e91]
          - button "Awadhi Awadhi" [ref=e93] [cursor=pointer]:
            - generic [ref=e94]:
              - img "Awadhi" [ref=e96]
              - generic [ref=e97]: Awadhi
            - img [ref=e98]
          - button "Bagri Bagri" [ref=e100] [cursor=pointer]:
            - generic [ref=e101]:
              - img "Bagri" [ref=e103]
              - generic [ref=e104]: Bagri
            - img [ref=e105]
          - button "Bengali Bengali" [ref=e107] [cursor=pointer]:
            - generic [ref=e108]:
              - img "Bengali" [ref=e110]
              - generic [ref=e111]: Bengali
            - img [ref=e112]
          - button "Bhili Bhili" [ref=e114] [cursor=pointer]:
            - generic [ref=e115]:
              - img "Bhili" [ref=e117]
              - generic [ref=e118]: Bhili
            - img [ref=e119]
          - button "Bhojpuri Bhojpuri" [ref=e121] [cursor=pointer]:
            - generic [ref=e122]:
              - img "Bhojpuri" [ref=e124]
              - generic [ref=e125]: Bhojpuri
            - img [ref=e126]
          - button "Bodo Bodo" [ref=e128] [cursor=pointer]:
            - generic [ref=e129]:
              - img "Bodo" [ref=e131]
              - generic [ref=e132]: Bodo
            - img [ref=e133]
          - button "Braj Braj" [ref=e135] [cursor=pointer]:
            - generic [ref=e136]:
              - img "Braj" [ref=e138]
              - generic [ref=e139]: Braj
            - img [ref=e140]
          - button "Bundeli Bundeli" [ref=e142] [cursor=pointer]:
            - generic [ref=e143]:
              - img "Bundeli" [ref=e145]
              - generic [ref=e146]: Bundeli
            - img [ref=e147]
          - button "Chhattisgarhi Chhattisgarhi" [ref=e149] [cursor=pointer]:
            - generic [ref=e150]:
              - img "Chhattisgarhi" [ref=e152]
              - generic [ref=e153]: Chhattisgarhi
            - img [ref=e154]
          - button "Dogri Dogri" [ref=e156] [cursor=pointer]:
            - generic [ref=e157]:
              - img "Dogri" [ref=e159]
              - generic [ref=e160]: Dogri
            - img [ref=e161]
          - button "English English" [ref=e163] [cursor=pointer]:
            - generic [ref=e164]:
              - img "English" [ref=e166]
              - generic [ref=e167]: English
            - img [ref=e168]
          - button "Garhwali Garhwali" [ref=e170] [cursor=pointer]:
            - generic [ref=e171]:
              - img "Garhwali" [ref=e173]
              - generic [ref=e174]: Garhwali
            - img [ref=e175]
          - button "Garo Garo" [ref=e177] [cursor=pointer]:
            - generic [ref=e178]:
              - img "Garo" [ref=e180]
              - generic [ref=e181]: Garo
            - img [ref=e182]
          - button "Gujarati Gujarati" [ref=e184] [cursor=pointer]:
            - generic [ref=e185]:
              - img "Gujarati" [ref=e187]
              - generic [ref=e188]: Gujarati
            - img [ref=e189]
          - button "Harouti Harouti" [ref=e191] [cursor=pointer]:
            - generic [ref=e192]:
              - img "Harouti" [ref=e194]
              - generic [ref=e195]: Harouti
            - img [ref=e196]
          - button "Haryanvi Haryanvi" [ref=e198] [cursor=pointer]:
            - generic [ref=e199]:
              - img "Haryanvi" [ref=e201]
              - generic [ref=e202]: Haryanvi
            - img [ref=e203]
          - button "Hindi Hindi" [ref=e205] [cursor=pointer]:
            - generic [ref=e206]:
              - img "Hindi" [ref=e208]
              - generic [ref=e209]: Hindi
            - img [ref=e210]
          - button "Kangri Kangri" [ref=e212] [cursor=pointer]:
            - generic [ref=e213]:
              - img "Kangri" [ref=e215]
              - generic [ref=e216]: Kangri
            - img [ref=e217]
          - button "Kannada Kannada" [ref=e219] [cursor=pointer]:
            - generic [ref=e220]:
              - img "Kannada" [ref=e222]
              - generic [ref=e223]: Kannada
            - img [ref=e224]
          - button "Kashmiri Kashmiri" [ref=e226] [cursor=pointer]:
            - generic [ref=e227]:
              - img "Kashmiri" [ref=e229]
              - generic [ref=e230]: Kashmiri
            - img [ref=e231]
          - button "Konkani Konkani" [ref=e233] [cursor=pointer]:
            - generic [ref=e234]:
              - img "Konkani" [ref=e236]
              - generic [ref=e237]: Konkani
            - img [ref=e238]
          - button "Kumaoni Kumaoni" [ref=e240] [cursor=pointer]:
            - generic [ref=e241]:
              - img "Kumaoni" [ref=e243]
              - generic [ref=e244]: Kumaoni
            - img [ref=e245]
          - button "Kurukh Kurukh" [ref=e247] [cursor=pointer]:
            - generic [ref=e248]:
              - img "Kurukh" [ref=e250]
              - generic [ref=e251]: Kurukh
            - img [ref=e252]
          - button "Magahi Magahi" [ref=e254] [cursor=pointer]:
            - generic [ref=e255]:
              - img "Magahi" [ref=e257]
              - generic [ref=e258]: Magahi
            - img [ref=e259]
          - button "Maithili Maithili" [ref=e261] [cursor=pointer]:
            - generic [ref=e262]:
              - img "Maithili" [ref=e264]
              - generic [ref=e265]: Maithili
            - img [ref=e266]
          - button "Malayalam Malayalam" [ref=e268] [cursor=pointer]:
            - generic [ref=e269]:
              - img "Malayalam" [ref=e271]
              - generic [ref=e272]: Malayalam
            - img [ref=e273]
          - button "Manipuri Manipuri" [ref=e275] [cursor=pointer]:
            - generic [ref=e276]:
              - img "Manipuri" [ref=e278]
              - generic [ref=e279]: Manipuri
            - img [ref=e280]
          - button "Marathi Marathi" [ref=e282] [cursor=pointer]:
            - generic [ref=e283]:
              - img "Marathi" [ref=e285]
              - generic [ref=e286]: Marathi
            - img [ref=e287]
          - button "Marwadi Marwadi" [ref=e289] [cursor=pointer]:
            - generic [ref=e290]:
              - img "Marwadi" [ref=e292]
              - generic [ref=e293]: Marwadi
            - img [ref=e294]
          - button "Nepali Nepali" [ref=e296] [cursor=pointer]:
            - generic [ref=e297]:
              - img "Nepali" [ref=e299]
              - generic [ref=e300]: Nepali
            - img [ref=e301]
          - button "Nimadi Nimadi" [ref=e303] [cursor=pointer]:
            - generic [ref=e304]:
              - img "Nimadi" [ref=e306]
              - generic [ref=e307]: Nimadi
            - img [ref=e308]
          - button "Odia Odia" [ref=e310] [cursor=pointer]:
            - generic [ref=e311]:
              - img "Odia" [ref=e313]
              - generic [ref=e314]: Odia
            - img [ref=e315]
          - button "Pahari Mahasui Pahari Mahasui" [ref=e317] [cursor=pointer]:
            - generic [ref=e318]:
              - img "Pahari Mahasui" [ref=e320]
              - generic [ref=e321]: Pahari Mahasui
            - img [ref=e322]
          - button "Punjabi Punjabi" [ref=e324] [cursor=pointer]:
            - generic [ref=e325]:
              - img "Punjabi" [ref=e327]
              - generic [ref=e328]: Punjabi
            - img [ref=e329]
          - button "Rajasthani Rajasthani" [ref=e331] [cursor=pointer]:
            - generic [ref=e332]:
              - img "Rajasthani" [ref=e334]
              - generic [ref=e335]: Rajasthani
            - img [ref=e336]
          - button "Sanskrit Sanskrit" [ref=e338] [cursor=pointer]:
            - generic [ref=e339]:
              - img "Sanskrit" [ref=e341]
              - generic [ref=e342]: Sanskrit
            - img [ref=e343]
          - button "Santali Santali" [ref=e345] [cursor=pointer]:
            - generic [ref=e346]:
              - img "Santali" [ref=e348]
              - generic [ref=e349]: Santali
            - img [ref=e350]
          - button "Sindhi Sindhi" [ref=e352] [cursor=pointer]:
            - generic [ref=e353]:
              - img "Sindhi" [ref=e355]
              - generic [ref=e356]: Sindhi
            - img [ref=e357]
          - button "Surgujia Surgujia" [ref=e359] [cursor=pointer]:
            - generic [ref=e360]:
              - img "Surgujia" [ref=e362]
              - generic [ref=e363]: Surgujia
            - img [ref=e364]
          - button "Tamil Tamil" [ref=e366] [cursor=pointer]:
            - generic [ref=e367]:
              - img "Tamil" [ref=e369]
              - generic [ref=e370]: Tamil
            - img [ref=e371]
          - button "Telugu Telugu" [ref=e373] [cursor=pointer]:
            - generic [ref=e374]:
              - img "Telugu" [ref=e376]
              - generic [ref=e377]: Telugu
            - img [ref=e378]
          - button "Tulu Tulu" [ref=e380] [cursor=pointer]:
            - generic [ref=e381]:
              - img "Tulu" [ref=e383]
              - generic [ref=e384]: Tulu
            - img [ref=e385]
          - button "Urdu Urdu" [ref=e387] [cursor=pointer]:
            - generic [ref=e388]:
              - img "Urdu" [ref=e390]
              - generic [ref=e391]: Urdu
            - img [ref=e392]
          - button "Wagdi Wagdi" [ref=e394] [cursor=pointer]:
            - generic [ref=e395]:
              - img "Wagdi" [ref=e397]
              - generic [ref=e398]: Wagdi
            - img [ref=e399]
        - link "See the full list of languages supported by Shunya Labs" [ref=e402] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/models-languages/supported-languages
          - text: See the full list of languages supported by Shunya Labs
          - img [ref=e403]
    - contentinfo [ref=e405]:
      - generic [ref=e409]:
        - paragraph [ref=e410]: The fastest way to add voice AI to your products
        - paragraph [ref=e411]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e412]:
          - link "Go to Pricing page" [ref=e413] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e414] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e415]:
      - generic [ref=e416]:
        - generic [ref=e417]:
          - img "Shunya Labs" [ref=e418]
          - paragraph [ref=e419]: Shunya Labs, Inc.
        - generic [ref=e420]:
          - paragraph [ref=e421]: Product
          - list [ref=e422]:
            - listitem [ref=e423]:
              - link "Overview" [ref=e424] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e425]:
              - link "Models" [ref=e426] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e427]:
              - link "Voice Agents" [ref=e428] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e429]:
              - link "Speech Intelligence" [ref=e430] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e431]:
              - link "Audio Processing" [ref=e432] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e433]:
              - link "Deployment" [ref=e434] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e435]:
          - paragraph [ref=e436]: Models
          - list [ref=e437]:
            - listitem [ref=e438]:
              - link "Language Models" [ref=e439] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e440]:
              - link "Zero STT Indic" [ref=e441] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e442]:
              - link "Zero STT Codeswitch" [ref=e443] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e444]:
              - link "Specialised Models" [ref=e445] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e446]:
              - link "Zero STT Med" [ref=e447] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e448]:
              - link "On Device Models" [ref=e449] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e450]:
          - paragraph [ref=e451]: Solutions
          - list [ref=e452]:
            - listitem [ref=e453]:
              - link "Contact Centers" [ref=e454] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e455]:
              - link "Media & Entertainment" [ref=e456] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e457]:
              - link "Healthcare" [ref=e458] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e459]:
          - paragraph [ref=e460]: Resources
          - list [ref=e461]:
            - listitem [ref=e462]:
              - link "Blogs" [ref=e463] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e464]:
              - link "Benchmarks" [ref=e465] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e466]:
              - link "News & Media" [ref=e467] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e468]:
              - link "Patents" [ref=e469] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e470]:
              - link "Research" [ref=e471] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e473]:
          - link "Documentation" [ref=e474] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e476]:
          - listitem [ref=e477]:
            - link "About us" [ref=e478] [cursor=pointer]:
              - /url: /about
        - list [ref=e480]:
          - listitem [ref=e481]:
            - link "Pricing" [ref=e482] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e483]:
        - paragraph [ref=e484]: Follow us on
        - generic [ref=e485]:
          - link [ref=e486] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e487]
          - link [ref=e489] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e490]
          - link [ref=e492] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e493]
          - link [ref=e495] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e496]
      - generic [ref=e498]:
        - paragraph [ref=e499]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e500]:
          - link "Privacy" [ref=e501] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e502] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e503] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e504] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e505] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e506]
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