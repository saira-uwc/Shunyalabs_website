# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-indic/design.spec.js >> Models - Zero STT Indic design compliance >> Figma design compliance
- Location: tests/modules/models/zero-stt-indic/design.spec.js:13:3

# Error details

```
Error: [layout] Section "Indic language transcription backed by data" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "The fastest way to add voice AI to your products" not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "One platform for speech in and speech out—secure by design, built to scale." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "Try for Free" not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Footer item "Contact Sales" not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Indic language transcription backed by data" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Get world-class speed and accuracy for major Indian languages, so your users experience natural, reliable transcription in the languages they actually speak." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Hindi ASR built for 350M+ native speakers" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Trained on 430.6 hours of real-world audio from OpenSLR, Gramvaani, Shrutilipi, Kathbath, Vaani, and proprietary data in just 35.9 hours on dual A100 GPUs." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Telugu ASR built for 80M+ native speakers" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Trained on 110.6 hours of real-world audio from Kathbath and Google Fleurs in just 13.43 hours on dual A100 GPUs." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Kannada ASR built for 40M+ native speakers" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Trained on 90.6 hours of real-world audio from OpenSLR, Kathbath, and Vaani in just 9.9 hours on dual A100 GPUs." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Bengali ASR built for 230M+ native speakers" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Trained on 110.6 hours of real-world audio from OpenSLR, Kathbath, Vaani, and Shrutilipi in just 12.9 hours on dual A100 GPUs." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Try now" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "One platform for speech in and speech out—secure by design, built to scale." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Try now (https://docs.shunyalabs.ai/models/language)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 18 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 18
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
        - heading "Every Indian Voice. Understood." [level=1] [ref=e36]
        - paragraph [ref=e37]: Built for real-world audio - accents, mixed languages, and natural speech.
      - generic [ref=e39]:
        - generic [ref=e41]:
          - generic [ref=e42]:
            - generic [ref=e43]: Language
            - button "🇮🇳 Hindi" [ref=e45] [cursor=pointer]:
              - generic [ref=e46]: 🇮🇳
              - generic [ref=e47]: Hindi
              - img [ref=e48]
          - generic [ref=e50]:
            - generic [ref=e51]: Input audio
            - generic [ref=e52]:
              - generic [ref=e53]:
                - generic [ref=e54]: Pre-recorded
                - button "Customer Support Call" [ref=e55] [cursor=pointer]
              - button "Podcast" [ref=e56] [cursor=pointer]
              - generic [ref=e57] [cursor=pointer]: Upload your file
              - generic [ref=e58]: or
              - generic [ref=e59]:
                - generic [ref=e60]: Live recording
                - button "Start Speaking" [ref=e61] [cursor=pointer]
        - generic [ref=e62]:
          - generic [ref=e63]:
            - button [ref=e65] [cursor=pointer]:
              - img [ref=e66]
            - button [ref=e109] [cursor=pointer]:
              - img [ref=e110]
          - paragraph [ref=e114]: नमस्ते! Shunya Labs Zero-Indic में आपका स्वागत है। हम भारत की 55 भाषाओं के लिए advanced speech-to-text technology लेकर आए हैं। आप जो भी बोलते हैं - आपकी भाषा, आपका लहजा - हम उसे सटीक ट्रांसक्रिप्शन में बदलते हैं। चाहे live audio हो या recorded voice, बस बोलिए... और तुरंत परिणाम पाएं।
    - generic [ref=e116]:
      - generic [ref=e117]:
        - generic [ref=e118]: "55"
        - generic [ref=e119]: Indic Languages
      - generic [ref=e121]:
        - generic [ref=e122]: Batch + Streaming
        - generic [ref=e123]: HTTP + WebSocket support
      - generic [ref=e125]:
        - generic [ref=e126]: Single API + NLP
        - generic [ref=e127]: Enable only what you need
    - generic [ref=e129]:
      - generic [ref=e130]:
        - heading "One model. 55 Indic languages." [level=2] [ref=e131]
        - paragraph [ref=e132]: One API. Same model and setup across all languages.
      - generic [ref=e133]:
        - generic [ref=e134]:
          - img [ref=e136]
          - heading "Single model across languages" [level=3] [ref=e141]
          - paragraph [ref=e142]: Send audio. Get transcripts - same model for all supported languages.
        - generic [ref=e143]:
          - img [ref=e145]
          - heading "Wide language & script coverage" [level=3] [ref=e149]
          - paragraph [ref=e150]: Works across Indic languages with support for multiple scripts.
        - generic [ref=e151]:
          - img [ref=e153]
          - heading "Diarization, timestamps, LID - one API call." [level=3] [ref=e157]
          - paragraph [ref=e158]: Enable features as needed - no separate pipeline.
        - generic [ref=e159]:
          - img [ref=e161]
          - heading "Summarization & intent, in one call" [level=3] [ref=e165]
          - paragraph [ref=e166]: Get a summary and classify intent - complaint, inquiry, service request - no extra steps.
        - generic [ref=e167]:
          - img [ref=e169]
          - heading "Emotion & sentiment per speaker" [level=3] [ref=e172]
          - paragraph [ref=e173]: Detect frustration, neutrality, or satisfaction per segment. Built for call analytics.
        - generic [ref=e174]:
          - img [ref=e176]
          - heading "Auto language detection" [level=3] [ref=e182]
          - paragraph [ref=e183]: Set language_code=auto - model detects language and handles code-switching natively.
    - generic [ref=e184]:
      - generic [ref=e186]:
        - generic [ref=e187]: Ahirani · अहिराणी
        - generic [ref=e188]: Assamese · অসমীয়া
        - generic [ref=e189]: Awadhi · अवधी
        - generic [ref=e190]: Bagheli · बघेली
        - generic [ref=e191]: Bagri · बागड़ी
        - generic [ref=e192]: Banjari · बंजारी
        - generic [ref=e193]: Bengali · বাংলা
        - generic [ref=e194]: Bhili · भीली
        - generic [ref=e195]: Bhojpuri · भोजपुरी
        - generic [ref=e196]: Bodo · बड़ो
        - generic [ref=e197]: Braj · ब्रज
        - generic [ref=e198]: Bundeli · बुंदेली
        - generic [ref=e199]: Chhattisgarhi · छत्तीसगढ़ी
        - generic [ref=e200]: Dogri · डोगरी
        - generic [ref=e201]: English · English
        - generic [ref=e202]: Garhwali · गढ़वाली
        - generic [ref=e203]: Garo · গাৰো
        - generic [ref=e204]: Gujarati · ગુજરાતી
        - generic [ref=e205]: Harouti · हाड़ौती
        - generic [ref=e206]: Haryanvi · हरियाणवी
        - generic [ref=e207]: Hindi · हिन्दी
        - generic [ref=e208]: Kachchhi · કચ્છી
        - generic [ref=e209]: Kangri · कांगड़ी
        - generic [ref=e210]: Kannada · ಕನ್ನಡ
        - generic [ref=e211]: Kashmiri · کٲشُر
        - generic [ref=e212]: Khortha · खोरठा
        - generic [ref=e213]: Kodava · ಕೊಡವ
        - generic [ref=e214]: Ahirani · अहिराणी
        - generic [ref=e215]: Assamese · অসমীয়া
        - generic [ref=e216]: Awadhi · अवधी
        - generic [ref=e217]: Bagheli · बघेली
        - generic [ref=e218]: Bagri · बागड़ी
        - generic [ref=e219]: Banjari · बंजारी
        - generic [ref=e220]: Bengali · বাংলা
        - generic [ref=e221]: Bhili · भीली
        - generic [ref=e222]: Bhojpuri · भोजपुरी
        - generic [ref=e223]: Bodo · बड़ो
        - generic [ref=e224]: Braj · ब्रज
        - generic [ref=e225]: Bundeli · बुंदेली
        - generic [ref=e226]: Chhattisgarhi · छत्तीसगढ़ी
        - generic [ref=e227]: Dogri · डोगरी
        - generic [ref=e228]: English · English
        - generic [ref=e229]: Garhwali · गढ़वाली
        - generic [ref=e230]: Garo · গাৰো
        - generic [ref=e231]: Gujarati · ગુજરાતી
        - generic [ref=e232]: Harouti · हाड़ौती
        - generic [ref=e233]: Haryanvi · हरियाणवी
        - generic [ref=e234]: Hindi · हिन्दी
        - generic [ref=e235]: Kachchhi · કચ્છી
        - generic [ref=e236]: Kangri · कांगड़ी
        - generic [ref=e237]: Kannada · ಕನ್ನಡ
        - generic [ref=e238]: Kashmiri · کٲشُر
        - generic [ref=e239]: Khortha · खोरठा
        - generic [ref=e240]: Kodava · ಕೊಡವ
      - generic [ref=e242]:
        - generic [ref=e243]: Konkani · कोंकणी
        - generic [ref=e244]: Kumaoni · कुमाऊँनी
        - generic [ref=e245]: Kurukh · कुड़ुख़
        - generic [ref=e246]: Lambadi · లంబాడి
        - generic [ref=e247]: Magahi · मगही
        - generic [ref=e248]: Maithili · मैथिली
        - generic [ref=e249]: Malayalam · മലയാളം
        - generic [ref=e250]: Manipuri · মণিপুরী
        - generic [ref=e251]: Marathi · मराठी
        - generic [ref=e252]: Marwadi · मारवाड़ी
        - generic [ref=e253]: Meitei · ꯃꯩꯇꯩ
        - generic [ref=e254]: Mewari · मेवाड़ी
        - generic [ref=e255]: Nepali · नेपाली
        - generic [ref=e256]: Nimadi · निमाड़ी
        - generic [ref=e257]: Odia · ଓଡ଼ିଆ
        - generic [ref=e258]: Pahari Mahasui · पहाड़ी महासुई
        - generic [ref=e259]: Punjabi · ਪੰਜਾਬੀ
        - generic [ref=e260]: Rajasthani · राजस्थानी
        - generic [ref=e261]: Sambalpuri · ସମ୍ବଲପୁରୀ
        - generic [ref=e262]: Sanskrit · संस्कृत
        - generic [ref=e263]: Santali · ᱥᱟᱱᱛᱟᱲᱤ
        - generic [ref=e264]: Sindhi · سنڌي
        - generic [ref=e265]: Surgujia · सरगुजिया
        - generic [ref=e266]: Tamil · தமிழ்
        - generic [ref=e267]: Telugu · తెలుగు
        - generic [ref=e268]: Tulu · ತುಳು
        - generic [ref=e269]: Urdu · اردو
        - generic [ref=e270]: Wagdi · वागड़ी
        - generic [ref=e271]: Konkani · कोंकणी
        - generic [ref=e272]: Kumaoni · कुमाऊँनी
        - generic [ref=e273]: Kurukh · कुड़ुख़
        - generic [ref=e274]: Lambadi · లంబాడి
        - generic [ref=e275]: Magahi · मगही
        - generic [ref=e276]: Maithili · मैथिली
        - generic [ref=e277]: Malayalam · മലയാളം
        - generic [ref=e278]: Manipuri · মণিপুরী
        - generic [ref=e279]: Marathi · मराठी
        - generic [ref=e280]: Marwadi · मारवाड़ी
        - generic [ref=e281]: Meitei · ꯃꯩꯇꯩ
        - generic [ref=e282]: Mewari · मेवाड़ी
        - generic [ref=e283]: Nepali · नेपाली
        - generic [ref=e284]: Nimadi · निमाड़ी
        - generic [ref=e285]: Odia · ଓଡ଼ିଆ
        - generic [ref=e286]: Pahari Mahasui · पहाड़ी महासुई
        - generic [ref=e287]: Punjabi · ਪੰਜਾਬੀ
        - generic [ref=e288]: Rajasthani · राजस्थानी
        - generic [ref=e289]: Sambalpuri · ସମ୍ବଲପୁରୀ
        - generic [ref=e290]: Sanskrit · संस्कृत
        - generic [ref=e291]: Santali · ᱥᱟᱱᱛᱟᱲᱤ
        - generic [ref=e292]: Sindhi · سنڌي
        - generic [ref=e293]: Surgujia · सरगुजिया
        - generic [ref=e294]: Tamil · தமிழ்
        - generic [ref=e295]: Telugu · తెలుగు
        - generic [ref=e296]: Tulu · ತುಳು
        - generic [ref=e297]: Urdu · اردو
        - generic [ref=e298]: Wagdi · वागड़ी
    - generic [ref=e300]:
      - generic [ref=e301]:
        - heading "What teams ship with Zero STT Indic" [level=2] [ref=e302]:
          - text: What teams ship with
          - text: Zero STT Indic
        - paragraph [ref=e303]: From call centers to content platforms - built for Indian voices.
      - generic [ref=e304]:
        - generic [ref=e305]:
          - img [ref=e307]
          - heading "Call centers" [level=3] [ref=e309]
          - paragraph [ref=e310]: Transcribe calls for QA, compliance, and analytics
        - generic [ref=e311]:
          - img [ref=e313]
          - heading "Media & podcasts" [level=3] [ref=e316]
          - paragraph [ref=e317]: Generate transcripts, subtitles, and archives
        - generic [ref=e318]:
          - img [ref=e320]
          - heading "Offline processing" [level=3] [ref=e323]
          - paragraph [ref=e324]: Run batch transcription on recorded audio
        - generic [ref=e325]:
          - img [ref=e327]
          - heading "Voice agents" [level=3] [ref=e330]
          - paragraph [ref=e331]: Understand speech across languages
        - generic [ref=e332]:
          - img [ref=e334]
          - heading "Live captions" [level=3] [ref=e336]
          - paragraph [ref=e337]: Real-time transcription for live audio
        - generic [ref=e338]:
          - img [ref=e340]
          - heading "IVR & telephony" [level=3] [ref=e342]
          - paragraph [ref=e343]: Process regional language calls at scale
    - generic [ref=e344]:
      - heading "The fastest way to add voice AI to your products" [level=2] [ref=e345]
      - paragraph [ref=e346]: One platform for speech in and speech out - secure by design, built to scale.
      - generic [ref=e347]:
        - link "Try for Free" [ref=e348] [cursor=pointer]:
          - /url: https://www.shunyalabs.ai/pricing
        - link "Contact Sales" [ref=e349] [cursor=pointer]:
          - /url: https://www.shunyalabs.ai/contact
    - contentinfo [ref=e350]:
      - generic [ref=e351]:
        - generic [ref=e352]:
          - img "Shunya Labs" [ref=e353]
          - paragraph [ref=e354]: Shunya Labs, Inc.
        - generic [ref=e355]:
          - paragraph [ref=e356]: Product
          - list [ref=e357]:
            - listitem [ref=e358]:
              - link "Overview" [ref=e359] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e360]:
              - link "Models" [ref=e361] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e362]:
              - link "Voice Agents" [ref=e363] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e364]:
              - link "Speech Intelligence" [ref=e365] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e366]:
              - link "Audio Processing" [ref=e367] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e368]:
              - link "Deployment" [ref=e369] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e370]:
          - paragraph [ref=e371]: Models
          - list [ref=e372]:
            - listitem [ref=e373]:
              - link "Language Models" [ref=e374] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e375]:
              - link "Zero STT Indic" [ref=e376] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e377]:
              - link "Zero STT Codeswitch" [ref=e378] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e379]:
              - link "Specialised Models" [ref=e380] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e381]:
              - link "Zero STT Med" [ref=e382] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e383]:
              - link "On Device Models" [ref=e384] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e385]:
          - paragraph [ref=e386]: Solutions
          - list [ref=e387]:
            - listitem [ref=e388]:
              - link "Contact Centers" [ref=e389] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e390]:
              - link "Media & Entertainment" [ref=e391] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e392]:
              - link "Healthcare" [ref=e393] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e394]:
          - paragraph [ref=e395]: Resources
          - list [ref=e396]:
            - listitem [ref=e397]:
              - link "Blogs" [ref=e398] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e399]:
              - link "Benchmarks" [ref=e400] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e401]:
              - link "News & Media" [ref=e402] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e403]:
              - link "Patents" [ref=e404] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e405]:
              - link "Research" [ref=e406] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e408]:
          - link "Documentation" [ref=e409] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e411]:
          - listitem [ref=e412]:
            - link "About us" [ref=e413] [cursor=pointer]:
              - /url: /about
        - list [ref=e415]:
          - listitem [ref=e416]:
            - link "Pricing" [ref=e417] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e418]:
        - paragraph [ref=e419]: Follow us on
        - generic [ref=e420]:
          - link [ref=e421] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e422]
          - link [ref=e424] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e425]
          - link [ref=e427] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e428]
          - link [ref=e430] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e431]
      - generic [ref=e433]:
        - paragraph [ref=e434]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e435]:
          - link "Privacy" [ref=e436] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e437] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e438] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e439] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e440] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e441]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { pageRegistry } from '../../../../test-data/page-registry.js';
  3  | import { runDesignComplianceTest } from '../../../../utils/design-validator.js';
  4  | 
  5  | const pageEntry = pageRegistry.find(
  6  |   (page) => page.moduleKey === 'models' && page.slug === 'zero-stt-indic'
  7  | );
  8  | 
  9  | const moduleLabel = pageEntry?.moduleLabel || 'models';
  10 | const pageLabel = pageEntry?.pageLabel || 'zero-stt-indic';
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
     |                                                                                    ^ Error: 18 design compliance issue(s) found
  21 |   });
  22 | });
  23 | 
```