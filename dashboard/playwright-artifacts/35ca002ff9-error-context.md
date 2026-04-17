# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/zero-stt-indic/design.spec.js >> Models - Zero STT Indic design compliance >> Figma design compliance
- Location: tests/modules/models/zero-stt-indic/design.spec.js:13:3

# Error details

```
Error: [images] Broken image: src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fsl-logo.772b3166.png&w=384&q=75&dpl=dpl_6y2Da4aZz7T1CBLygTje2EMAAqdt" alt="Shunya Labs"

expect(received).toBeTruthy()

Received: null
```

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
Error: 19 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 19
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
        - heading "Every Indian Voice. Understood." [level=1] [ref=e11]
        - paragraph [ref=e12]: Built for real-world audio - accents, mixed languages, and natural speech.
      - generic [ref=e14]:
        - generic [ref=e16]:
          - generic [ref=e17]:
            - generic [ref=e18]: Language
            - button "🇮🇳 Hindi" [ref=e20] [cursor=pointer]:
              - generic [ref=e21]: 🇮🇳
              - generic [ref=e22]: Hindi
              - img [ref=e23]
          - generic [ref=e25]:
            - generic [ref=e26]: Input audio
            - generic [ref=e27]:
              - generic [ref=e28]:
                - generic [ref=e29]: Pre-recorded
                - button "Customer Support Call" [ref=e30] [cursor=pointer]
              - button "Podcast" [ref=e31] [cursor=pointer]
              - generic [ref=e32] [cursor=pointer]: Upload your file
              - generic [ref=e33]: or
              - generic [ref=e34]:
                - generic [ref=e35]: Live recording
                - button "Start Speaking" [ref=e36] [cursor=pointer]
        - generic [ref=e37]:
          - generic [ref=e38]:
            - button [ref=e40] [cursor=pointer]:
              - img [ref=e41]
            - button [ref=e84] [cursor=pointer]:
              - img [ref=e85]
          - paragraph [ref=e89]: नमस्ते! Shunya Labs Zero-Indic में आपका स्वागत है। हम भारत की 55 भाषाओं के लिए advanced speech-to-text technology लेकर आए हैं। आप जो भी बोलते हैं - आपकी भाषा, आपका लहजा - हम उसे सटीक ट्रांसक्रिप्शन में बदलते हैं। चाहे live audio हो या recorded voice, बस बोलिए... और तुरंत परिणाम पाएं।
    - generic [ref=e91]:
      - generic [ref=e92]:
        - generic [ref=e93]: "55"
        - generic [ref=e94]: Indic Languages
      - generic [ref=e95]:
        - generic [ref=e96]: Batch + Streaming
        - generic [ref=e97]: HTTP + WebSocket support
      - generic [ref=e98]:
        - generic [ref=e99]: Single API + NLP
        - generic [ref=e100]: Enable only what you need
    - generic [ref=e102]:
      - generic [ref=e103]:
        - heading "One model. 55 Indic languages." [level=2] [ref=e104]
        - paragraph [ref=e105]: One API. Same model and setup across all languages.
      - generic [ref=e106]:
        - generic [ref=e107]:
          - img [ref=e109]
          - heading "Single model across languages" [level=3] [ref=e114]
          - paragraph [ref=e115]: Send audio. Get transcripts - same model for all supported languages.
        - generic [ref=e116]:
          - img [ref=e118]
          - heading "Wide language & script coverage" [level=3] [ref=e122]
          - paragraph [ref=e123]: Works across Indic languages with support for multiple scripts.
        - generic [ref=e124]:
          - img [ref=e126]
          - heading "Diarization, timestamps, LID - one API call." [level=3] [ref=e130]
          - paragraph [ref=e131]: Enable features as needed - no separate pipeline.
        - generic [ref=e132]:
          - img [ref=e134]
          - heading "Summarization & intent, in one call" [level=3] [ref=e138]
          - paragraph [ref=e139]: Get a summary and classify intent - complaint, inquiry, service request - no extra steps.
        - generic [ref=e140]:
          - img [ref=e142]
          - heading "Emotion & sentiment per speaker" [level=3] [ref=e145]
          - paragraph [ref=e146]: Detect frustration, neutrality, or satisfaction per segment. Built for call analytics.
        - generic [ref=e147]:
          - img [ref=e149]
          - heading "Auto language detection" [level=3] [ref=e155]
          - paragraph [ref=e156]: Set language_code=auto - model detects language and handles code-switching natively.
    - generic [ref=e157]:
      - generic [ref=e159]:
        - generic [ref=e160]: Ahirani · अहिराणी
        - generic [ref=e161]: Assamese · অসমীয়া
        - generic [ref=e162]: Awadhi · अवधी
        - generic [ref=e163]: Bagheli · बघेली
        - generic [ref=e164]: Bagri · बागड़ी
        - generic [ref=e165]: Banjari · बंजारी
        - generic [ref=e166]: Bengali · বাংলা
        - generic [ref=e167]: Bhili · भीली
        - generic [ref=e168]: Bhojpuri · भोजपुरी
        - generic [ref=e169]: Bodo · बड़ो
        - generic [ref=e170]: Braj · ब्रज
        - generic [ref=e171]: Bundeli · बुंदेली
        - generic [ref=e172]: Chhattisgarhi · छत्तीसगढ़ी
        - generic [ref=e173]: Dogri · डोगरी
        - generic [ref=e174]: English · English
        - generic [ref=e175]: Garhwali · गढ़वाली
        - generic [ref=e176]: Garo · গাৰো
        - generic [ref=e177]: Gujarati · ગુજરાતી
        - generic [ref=e178]: Harouti · हाड़ौती
        - generic [ref=e179]: Haryanvi · हरियाणवी
        - generic [ref=e180]: Hindi · हिन्दी
        - generic [ref=e181]: Kachchhi · કચ્છી
        - generic [ref=e182]: Kangri · कांगड़ी
        - generic [ref=e183]: Kannada · ಕನ್ನಡ
        - generic [ref=e184]: Kashmiri · کٲشُر
        - generic [ref=e185]: Khortha · खोरठा
        - generic [ref=e186]: Kodava · ಕೊಡವ
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
      - generic [ref=e215]:
        - generic [ref=e216]: Konkani · कोंकणी
        - generic [ref=e217]: Kumaoni · कुमाऊँनी
        - generic [ref=e218]: Kurukh · कुड़ुख़
        - generic [ref=e219]: Lambadi · లంబాడి
        - generic [ref=e220]: Magahi · मगही
        - generic [ref=e221]: Maithili · मैथिली
        - generic [ref=e222]: Malayalam · മലയാളം
        - generic [ref=e223]: Manipuri · মণিপুরী
        - generic [ref=e224]: Marathi · मराठी
        - generic [ref=e225]: Marwadi · मारवाड़ी
        - generic [ref=e226]: Meitei · ꯃꯩꯇꯩ
        - generic [ref=e227]: Mewari · मेवाड़ी
        - generic [ref=e228]: Nepali · नेपाली
        - generic [ref=e229]: Nimadi · निमाड़ी
        - generic [ref=e230]: Odia · ଓଡ଼ିଆ
        - generic [ref=e231]: Pahari Mahasui · पहाड़ी महासुई
        - generic [ref=e232]: Punjabi · ਪੰਜਾਬੀ
        - generic [ref=e233]: Rajasthani · राजस्थानी
        - generic [ref=e234]: Sambalpuri · ସମ୍ବଲପୁରୀ
        - generic [ref=e235]: Sanskrit · संस्कृत
        - generic [ref=e236]: Santali · ᱥᱟᱱᱛᱟᱲᱤ
        - generic [ref=e237]: Sindhi · سنڌي
        - generic [ref=e238]: Surgujia · सरगुजिया
        - generic [ref=e239]: Tamil · தமிழ்
        - generic [ref=e240]: Telugu · తెలుగు
        - generic [ref=e241]: Tulu · ತುಳು
        - generic [ref=e242]: Urdu · اردو
        - generic [ref=e243]: Wagdi · वागड़ी
        - generic [ref=e244]: Konkani · कोंकणी
        - generic [ref=e245]: Kumaoni · कुमाऊँनी
        - generic [ref=e246]: Kurukh · कुड़ुख़
        - generic [ref=e247]: Lambadi · లంబాడి
        - generic [ref=e248]: Magahi · मगही
        - generic [ref=e249]: Maithili · मैथिली
        - generic [ref=e250]: Malayalam · മലയാളം
        - generic [ref=e251]: Manipuri · মণিপুরী
        - generic [ref=e252]: Marathi · मराठी
        - generic [ref=e253]: Marwadi · मारवाड़ी
        - generic [ref=e254]: Meitei · ꯃꯩꯇꯩ
        - generic [ref=e255]: Mewari · मेवाड़ी
        - generic [ref=e256]: Nepali · नेपाली
        - generic [ref=e257]: Nimadi · निमाड़ी
        - generic [ref=e258]: Odia · ଓଡ଼ିଆ
        - generic [ref=e259]: Pahari Mahasui · पहाड़ी महासुई
        - generic [ref=e260]: Punjabi · ਪੰਜਾਬੀ
        - generic [ref=e261]: Rajasthani · राजस्थानी
        - generic [ref=e262]: Sambalpuri · ସମ୍ବଲପୁରୀ
        - generic [ref=e263]: Sanskrit · संस्कृत
        - generic [ref=e264]: Santali · ᱥᱟᱱᱛᱟᱲᱤ
        - generic [ref=e265]: Sindhi · سنڌي
        - generic [ref=e266]: Surgujia · सरगुजिया
        - generic [ref=e267]: Tamil · தமிழ்
        - generic [ref=e268]: Telugu · తెలుగు
        - generic [ref=e269]: Tulu · ತುಳು
        - generic [ref=e270]: Urdu · اردو
        - generic [ref=e271]: Wagdi · वागड़ी
    - generic [ref=e273]:
      - generic [ref=e274]:
        - heading "What teams ship with Zero STT Indic" [level=2] [ref=e275]:
          - text: What teams ship with
          - text: Zero STT Indic
        - paragraph [ref=e276]: From call centers to content platforms - built for Indian voices.
      - generic [ref=e277]:
        - generic [ref=e278]:
          - img [ref=e280]
          - heading "Call centers" [level=3] [ref=e282]
          - paragraph [ref=e283]: Transcribe calls for QA, compliance, and analytics
        - generic [ref=e284]:
          - img [ref=e286]
          - heading "Media & podcasts" [level=3] [ref=e289]
          - paragraph [ref=e290]: Generate transcripts, subtitles, and archives
        - generic [ref=e291]:
          - img [ref=e293]
          - heading "Offline processing" [level=3] [ref=e296]
          - paragraph [ref=e297]: Run batch transcription on recorded audio
        - generic [ref=e298]:
          - img [ref=e300]
          - heading "Voice agents" [level=3] [ref=e303]
          - paragraph [ref=e304]: Understand speech across languages
        - generic [ref=e305]:
          - img [ref=e307]
          - heading "Live captions" [level=3] [ref=e309]
          - paragraph [ref=e310]: Real-time transcription for live audio
        - generic [ref=e311]:
          - img [ref=e313]
          - heading "IVR & telephony" [level=3] [ref=e315]
          - paragraph [ref=e316]: Process regional language calls at scale
    - generic [ref=e317]:
      - heading "The fastest way to add voice AI to your products" [level=2] [ref=e318]
      - paragraph [ref=e319]: One platform for speech in and speech out - secure by design, built to scale.
      - generic [ref=e320]:
        - link "Try for Free" [ref=e321] [cursor=pointer]:
          - /url: https://www.shunyalabs.ai/pricing
        - link "Contact Sales" [ref=e322] [cursor=pointer]:
          - /url: https://www.shunyalabs.ai/contact
    - contentinfo [ref=e323]:
      - generic [ref=e324]:
        - generic [ref=e325]:
          - img "Shunya Labs" [ref=e326]
          - paragraph [ref=e327]: Shunya Labs, Inc.
        - generic [ref=e328]:
          - paragraph [ref=e329]: Product
          - list [ref=e330]:
            - listitem [ref=e331]:
              - link "Overview" [ref=e332] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e333]:
              - link "Models" [ref=e334] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e335]:
              - link "Voice Agents" [ref=e336] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e337]:
              - link "Speech Intelligence" [ref=e338] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e339]:
              - link "Audio Processing" [ref=e340] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e341]:
              - link "Deployment" [ref=e342] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e343]:
          - paragraph [ref=e344]: Models
          - list [ref=e345]:
            - listitem [ref=e346]:
              - link "Language Models" [ref=e347] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e348]:
              - link "Zero STT Indic" [ref=e349] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e350]:
              - link "Zero STT Codeswitch" [ref=e351] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e352]:
              - link "Specialised Models" [ref=e353] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e354]:
              - link "Zero STT Med" [ref=e355] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e356]:
              - link "On Device Models" [ref=e357] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e358]:
          - paragraph [ref=e359]: Solutions
          - list [ref=e360]:
            - listitem [ref=e361]:
              - link "Contact Centers" [ref=e362] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e363]:
              - link "Media & Entertainment" [ref=e364] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e365]:
              - link "Healthcare" [ref=e366] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e367]:
          - paragraph [ref=e368]: Resources
          - list [ref=e369]:
            - listitem [ref=e370]:
              - link "Blogs" [ref=e371] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e372]:
              - link "Benchmarks" [ref=e373] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e374]:
              - link "News & Media" [ref=e375] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e376]:
              - link "Patents" [ref=e377] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e378]:
              - link "Research" [ref=e379] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e381]:
          - link "Documentation" [ref=e382] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e384]:
          - listitem [ref=e385]:
            - link "About us" [ref=e386] [cursor=pointer]:
              - /url: /about
        - list [ref=e388]:
          - listitem [ref=e389]:
            - link "Pricing" [ref=e390] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e391]:
        - paragraph [ref=e392]: Follow us on
        - generic [ref=e393]:
          - link [ref=e394] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e395]
          - link [ref=e397] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e398]
          - link [ref=e400] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e401]
          - link [ref=e403] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e404]
      - generic [ref=e406]:
        - paragraph [ref=e407]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e408]:
          - link "Privacy" [ref=e409] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e410] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e411] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e412] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e413] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e414]
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
     |                                                                                    ^ Error: 19 design compliance issue(s) found
  21 |   });
  22 | });
  23 | 
```