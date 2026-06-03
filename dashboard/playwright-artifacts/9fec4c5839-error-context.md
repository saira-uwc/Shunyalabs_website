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
      - generic [ref=e10]:
        - heading "One API for 200+ languages and multilingual transcriptions" [level=1] [ref=e11]
        - paragraph [ref=e12]: Reach the largest possible audience in real time—without juggling multiple language APIs or wrestling with complex setup.
      - generic [ref=e13]:
        - generic [ref=e14]:
          - heading "Zero STT Indic" [level=3] [ref=e15]
          - generic [ref=e16]:
            - paragraph [ref=e17]: Superior Indic models for industry best accuracy and speed in transcribing speech in Hindi, Bengali, Kannada and Telugu.
            - link "Learn more" [ref=e18] [cursor=pointer]:
              - /url: /zero-indic
              - generic [ref=e19]: Learn more
              - img [ref=e20]
        - generic [ref=e22]:
          - heading "Zero STT Code-switch" [level=3] [ref=e23]
          - generic [ref=e24]:
            - paragraph [ref=e25]: The only model in the world that processes and returns output in mixed langauge tokens. Now available for Hinglish.
            - link "Learn more" [ref=e26] [cursor=pointer]:
              - /url: /zero-code-switch
              - generic [ref=e27]: Learn more
              - img [ref=e28]
        - generic [ref=e30]:
          - heading "Zero STT" [level=3] [ref=e31]
          - generic [ref=e32]:
            - paragraph [ref=e33]: Universal language model that supports everyday conversational speech transcription in 200+ languages.
            - link "Learn more" [ref=e34] [cursor=pointer]:
              - /url: /zero-stt
              - generic [ref=e35]: Learn more
              - img [ref=e36]
    - generic [ref=e38]:
      - generic [ref=e39]:
        - heading "Experience the magic of Shunya Labs’ code-switching transcription" [level=2] [ref=e40]
        - paragraph [ref=e41]: Shunya Labs’ code-switching ASR is the only in the world that returns native Hinglish transcripts in real time. Keep the natural flow of conversation and still get fast, accurate, mixed-language transcription.
      - img "img1" [ref=e43]
      - link "Try now" [ref=e44] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/models/language
        - button "Try now" [ref=e45]
    - generic [ref=e46]:
      - generic [ref=e47]:
        - heading "Transcribe Indian languages like never before" [level=2] [ref=e48]
        - paragraph [ref=e49]: Zero Indic is purpose-built for Indian speech, delivering up to 200% better accuracy than the next-best model. Unlock world-class support for your users with reliable, real-time transcripts that keep pace with the natural rhythm of conversation.
      - img "img1" [ref=e51]
      - link "Try now" [ref=e52] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/models/language
        - button "Try now" [ref=e53]
    - generic [ref=e54]:
      - generic [ref=e56]:
        - paragraph [ref=e57]: One API for 200+ languages, covering 97% of the global population
        - paragraph [ref=e58]: Zero STT is the world's most accurate speech-to-text model designed to support conversational speech in 200+ languages in noisy real world scenarios with speaker overlap. Transcribe audio in sub second latency for captions that feels natural.
      - generic [ref=e59]:
        - generic [ref=e60]:
          - button "Assamese Assamese" [ref=e61] [cursor=pointer]:
            - generic [ref=e62]:
              - generic [ref=e63]:
                - img "Assamese"
              - generic [ref=e64]: Assamese
            - img [ref=e65]
          - button "Awadhi Awadhi" [ref=e67] [cursor=pointer]:
            - generic [ref=e68]:
              - generic [ref=e69]:
                - img "Awadhi"
              - generic [ref=e70]: Awadhi
            - img [ref=e71]
          - button "Bagri Bagri" [ref=e73] [cursor=pointer]:
            - generic [ref=e74]:
              - generic [ref=e75]:
                - img "Bagri"
              - generic [ref=e76]: Bagri
            - img [ref=e77]
          - button "Bengali Bengali" [ref=e79] [cursor=pointer]:
            - generic [ref=e80]:
              - generic [ref=e81]:
                - img "Bengali"
              - generic [ref=e82]: Bengali
            - img [ref=e83]
          - button "Bhili Bhili" [ref=e85] [cursor=pointer]:
            - generic [ref=e86]:
              - generic [ref=e87]:
                - img "Bhili"
              - generic [ref=e88]: Bhili
            - img [ref=e89]
          - button "Bhojpuri Bhojpuri" [ref=e91] [cursor=pointer]:
            - generic [ref=e92]:
              - generic [ref=e93]:
                - img "Bhojpuri"
              - generic [ref=e94]: Bhojpuri
            - img [ref=e95]
          - button "Bodo Bodo" [ref=e97] [cursor=pointer]:
            - generic [ref=e98]:
              - generic [ref=e99]:
                - img "Bodo"
              - generic [ref=e100]: Bodo
            - img [ref=e101]
          - button "Braj Braj" [ref=e103] [cursor=pointer]:
            - generic [ref=e104]:
              - generic [ref=e105]:
                - img "Braj"
              - generic [ref=e106]: Braj
            - img [ref=e107]
          - button "Bundeli Bundeli" [ref=e109] [cursor=pointer]:
            - generic [ref=e110]:
              - generic [ref=e111]:
                - img "Bundeli"
              - generic [ref=e112]: Bundeli
            - img [ref=e113]
          - button "Chhattisgarhi Chhattisgarhi" [ref=e115] [cursor=pointer]:
            - generic [ref=e116]:
              - generic [ref=e117]:
                - img "Chhattisgarhi"
              - generic [ref=e118]: Chhattisgarhi
            - img [ref=e119]
          - button "Dogri Dogri" [ref=e121] [cursor=pointer]:
            - generic [ref=e122]:
              - generic [ref=e123]:
                - img "Dogri"
              - generic [ref=e124]: Dogri
            - img [ref=e125]
          - button "English English" [ref=e127] [cursor=pointer]:
            - generic [ref=e128]:
              - generic [ref=e129]:
                - img "English"
              - generic [ref=e130]: English
            - img [ref=e131]
          - button "Garhwali Garhwali" [ref=e133] [cursor=pointer]:
            - generic [ref=e134]:
              - generic [ref=e135]:
                - img "Garhwali"
              - generic [ref=e136]: Garhwali
            - img [ref=e137]
          - button "Garo Garo" [ref=e139] [cursor=pointer]:
            - generic [ref=e140]:
              - generic [ref=e141]:
                - img "Garo"
              - generic [ref=e142]: Garo
            - img [ref=e143]
          - button "Gujarati Gujarati" [ref=e145] [cursor=pointer]:
            - generic [ref=e146]:
              - generic [ref=e147]:
                - img "Gujarati"
              - generic [ref=e148]: Gujarati
            - img [ref=e149]
          - button "Harouti Harouti" [ref=e151] [cursor=pointer]:
            - generic [ref=e152]:
              - generic [ref=e153]:
                - img "Harouti"
              - generic [ref=e154]: Harouti
            - img [ref=e155]
          - button "Haryanvi Haryanvi" [ref=e157] [cursor=pointer]:
            - generic [ref=e158]:
              - generic [ref=e159]:
                - img "Haryanvi"
              - generic [ref=e160]: Haryanvi
            - img [ref=e161]
          - button "Hindi Hindi" [ref=e163] [cursor=pointer]:
            - generic [ref=e164]:
              - generic [ref=e165]:
                - img "Hindi"
              - generic [ref=e166]: Hindi
            - img [ref=e167]
          - button "Kangri Kangri" [ref=e169] [cursor=pointer]:
            - generic [ref=e170]:
              - generic [ref=e171]:
                - img "Kangri"
              - generic [ref=e172]: Kangri
            - img [ref=e173]
          - button "Kannada Kannada" [ref=e175] [cursor=pointer]:
            - generic [ref=e176]:
              - generic [ref=e177]:
                - img "Kannada"
              - generic [ref=e178]: Kannada
            - img [ref=e179]
          - button "Kashmiri Kashmiri" [ref=e181] [cursor=pointer]:
            - generic [ref=e182]:
              - generic [ref=e183]:
                - img "Kashmiri"
              - generic [ref=e184]: Kashmiri
            - img [ref=e185]
          - button "Konkani Konkani" [ref=e187] [cursor=pointer]:
            - generic [ref=e188]:
              - generic [ref=e189]:
                - img "Konkani"
              - generic [ref=e190]: Konkani
            - img [ref=e191]
          - button "Kumaoni Kumaoni" [ref=e193] [cursor=pointer]:
            - generic [ref=e194]:
              - generic [ref=e195]:
                - img "Kumaoni"
              - generic [ref=e196]: Kumaoni
            - img [ref=e197]
          - button "Kurukh Kurukh" [ref=e199] [cursor=pointer]:
            - generic [ref=e200]:
              - generic [ref=e201]:
                - img "Kurukh"
              - generic [ref=e202]: Kurukh
            - img [ref=e203]
          - button "Magahi Magahi" [ref=e205] [cursor=pointer]:
            - generic [ref=e206]:
              - generic [ref=e207]:
                - img "Magahi"
              - generic [ref=e208]: Magahi
            - img [ref=e209]
          - button "Maithili Maithili" [ref=e211] [cursor=pointer]:
            - generic [ref=e212]:
              - generic [ref=e213]:
                - img "Maithili"
              - generic [ref=e214]: Maithili
            - img [ref=e215]
          - button "Malayalam Malayalam" [ref=e217] [cursor=pointer]:
            - generic [ref=e218]:
              - generic [ref=e219]:
                - img "Malayalam"
              - generic [ref=e220]: Malayalam
            - img [ref=e221]
          - button "Manipuri Manipuri" [ref=e223] [cursor=pointer]:
            - generic [ref=e224]:
              - generic [ref=e225]:
                - img "Manipuri"
              - generic [ref=e226]: Manipuri
            - img [ref=e227]
          - button "Marathi Marathi" [ref=e229] [cursor=pointer]:
            - generic [ref=e230]:
              - generic [ref=e231]:
                - img "Marathi"
              - generic [ref=e232]: Marathi
            - img [ref=e233]
          - button "Marwadi Marwadi" [ref=e235] [cursor=pointer]:
            - generic [ref=e236]:
              - generic [ref=e237]:
                - img "Marwadi"
              - generic [ref=e238]: Marwadi
            - img [ref=e239]
          - button "Nepali Nepali" [ref=e241] [cursor=pointer]:
            - generic [ref=e242]:
              - generic [ref=e243]:
                - img "Nepali"
              - generic [ref=e244]: Nepali
            - img [ref=e245]
          - button "Nimadi Nimadi" [ref=e247] [cursor=pointer]:
            - generic [ref=e248]:
              - generic [ref=e249]:
                - img "Nimadi"
              - generic [ref=e250]: Nimadi
            - img [ref=e251]
          - button "Odia Odia" [ref=e253] [cursor=pointer]:
            - generic [ref=e254]:
              - generic [ref=e255]:
                - img "Odia"
              - generic [ref=e256]: Odia
            - img [ref=e257]
          - button "Pahari Mahasui Pahari Mahasui" [ref=e259] [cursor=pointer]:
            - generic [ref=e260]:
              - generic [ref=e261]:
                - img "Pahari Mahasui"
              - generic [ref=e262]: Pahari Mahasui
            - img [ref=e263]
          - button "Punjabi Punjabi" [ref=e265] [cursor=pointer]:
            - generic [ref=e266]:
              - generic [ref=e267]:
                - img "Punjabi"
              - generic [ref=e268]: Punjabi
            - img [ref=e269]
          - button "Rajasthani Rajasthani" [ref=e271] [cursor=pointer]:
            - generic [ref=e272]:
              - generic [ref=e273]:
                - img "Rajasthani"
              - generic [ref=e274]: Rajasthani
            - img [ref=e275]
          - button "Sanskrit Sanskrit" [ref=e277] [cursor=pointer]:
            - generic [ref=e278]:
              - generic [ref=e279]:
                - img "Sanskrit"
              - generic [ref=e280]: Sanskrit
            - img [ref=e281]
          - button "Santali Santali" [ref=e283] [cursor=pointer]:
            - generic [ref=e284]:
              - generic [ref=e285]:
                - img "Santali"
              - generic [ref=e286]: Santali
            - img [ref=e287]
          - button "Sindhi Sindhi" [ref=e289] [cursor=pointer]:
            - generic [ref=e290]:
              - generic [ref=e291]:
                - img "Sindhi"
              - generic [ref=e292]: Sindhi
            - img [ref=e293]
          - button "Surgujia Surgujia" [ref=e295] [cursor=pointer]:
            - generic [ref=e296]:
              - generic [ref=e297]:
                - img "Surgujia"
              - generic [ref=e298]: Surgujia
            - img [ref=e299]
          - button "Tamil Tamil" [ref=e301] [cursor=pointer]:
            - generic [ref=e302]:
              - generic [ref=e303]:
                - img "Tamil"
              - generic [ref=e304]: Tamil
            - img [ref=e305]
          - button "Telugu Telugu" [ref=e307] [cursor=pointer]:
            - generic [ref=e308]:
              - generic [ref=e309]:
                - img "Telugu"
              - generic [ref=e310]: Telugu
            - img [ref=e311]
          - button "Tulu Tulu" [ref=e313] [cursor=pointer]:
            - generic [ref=e314]:
              - generic [ref=e315]:
                - img "Tulu"
              - generic [ref=e316]: Tulu
            - img [ref=e317]
          - button "Urdu Urdu" [ref=e319] [cursor=pointer]:
            - generic [ref=e320]:
              - generic [ref=e321]:
                - img "Urdu"
              - generic [ref=e322]: Urdu
            - img [ref=e323]
          - button "Wagdi Wagdi" [ref=e325] [cursor=pointer]:
            - generic [ref=e326]:
              - generic [ref=e327]:
                - img "Wagdi"
              - generic [ref=e328]: Wagdi
            - img [ref=e329]
        - link "See the full list of languages supported by Shunya Labs" [ref=e332] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/models-languages/supported-languages
          - text: See the full list of languages supported by Shunya Labs
          - img [ref=e333]
    - contentinfo [ref=e335]:
      - generic [ref=e339]:
        - paragraph [ref=e340]: The fastest way to add voice AI to your products
        - paragraph [ref=e341]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e342]:
          - link "Go to Pricing page" [ref=e343] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e344] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e345]:
      - generic [ref=e346]:
        - generic [ref=e347]:
          - img "Shunya Labs" [ref=e348]
          - paragraph [ref=e349]: Shunya Labs, Inc.
        - generic [ref=e350]:
          - paragraph [ref=e351]: Product
          - list [ref=e352]:
            - listitem [ref=e353]:
              - link "Overview" [ref=e354] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e355]:
              - link "Models" [ref=e356] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e357]:
              - link "Voice Agents" [ref=e358] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e359]:
              - link "Speech Intelligence" [ref=e360] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e361]:
              - link "Audio Processing" [ref=e362] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e363]:
              - link "Deployment" [ref=e364] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e365]:
          - paragraph [ref=e366]: Models
          - list [ref=e367]:
            - listitem [ref=e368]:
              - link "Language Models" [ref=e369] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e370]:
              - link "Zero STT Indic" [ref=e371] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e372]:
              - link "Zero STT Codeswitch" [ref=e373] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e374]:
              - link "Specialised Models" [ref=e375] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e376]:
              - link "Zero STT Med" [ref=e377] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e378]:
              - link "On Device Models" [ref=e379] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e380]:
          - paragraph [ref=e381]: Solutions
          - list [ref=e382]:
            - listitem [ref=e383]:
              - link "Contact Centers" [ref=e384] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e385]:
              - link "Media & Entertainment" [ref=e386] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e387]:
              - link "Healthcare" [ref=e388] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e389]:
          - paragraph [ref=e390]: Resources
          - list [ref=e391]:
            - listitem [ref=e392]:
              - link "Blogs" [ref=e393] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e394]:
              - link "Benchmarks" [ref=e395] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e396]:
              - link "News & Media" [ref=e397] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e398]:
              - link "Patents" [ref=e399] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e400]:
              - link "Research" [ref=e401] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e403]:
          - link "Documentation" [ref=e404] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e406]:
          - listitem [ref=e407]:
            - link "About us" [ref=e408] [cursor=pointer]:
              - /url: /about
        - list [ref=e410]:
          - listitem [ref=e411]:
            - link "Pricing" [ref=e412] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e413]:
        - paragraph [ref=e414]: Follow us on
        - generic [ref=e415]:
          - link [ref=e416] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e417]
          - link [ref=e419] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e420]
          - link [ref=e422] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e423]
          - link [ref=e425] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e426]
      - generic [ref=e428]:
        - paragraph [ref=e429]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e430]:
          - link "Privacy" [ref=e431] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e432] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e433] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e434] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e435] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e436]
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