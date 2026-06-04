# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/language-models/design.spec.js >> Models - Language Models design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [links] CTA/Link "https://www.facebook.com/people/ShunyaLabsAI/61577801851308/" not found on page

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
            - link "About Us" [ref=e27] [cursor=pointer]:
              - /url: /about
            - link "Pricing" [ref=e28] [cursor=pointer]:
              - /url: /pricing
        - generic [ref=e29]:
          - link "Playground" [ref=e30] [cursor=pointer]:
            - /url: https://playground.shunyalabs.ai/
            - img [ref=e31]
            - text: Playground
          - generic [ref=e33]:
            - button "Sign In" [ref=e34] [cursor=pointer]
            - link "Contact Sales" [ref=e35] [cursor=pointer]:
              - /url: /contact
    - generic [ref=e36]:
      - generic [ref=e37]:
        - heading "One API for 200+ languages and multilingual transcriptions" [level=1] [ref=e38]
        - paragraph [ref=e39]: Reach the largest possible audience in real time—without juggling multiple language APIs or wrestling with complex setup.
      - generic [ref=e40]:
        - generic [ref=e41]:
          - heading "Zero STT Indic" [level=3] [ref=e42]
          - generic [ref=e43]:
            - paragraph [ref=e44]: Superior Indic models for industry best accuracy and speed in transcribing speech in Hindi, Bengali, Kannada and Telugu.
            - link "Learn more" [ref=e45] [cursor=pointer]:
              - /url: /zero-indic
              - generic [ref=e46]: Learn more
              - img [ref=e47]
        - generic [ref=e49]:
          - heading "Zero STT Code-switch" [level=3] [ref=e50]
          - generic [ref=e51]:
            - paragraph [ref=e52]: The only model in the world that processes and returns output in mixed langauge tokens. Now available for Hinglish.
            - link "Learn more" [ref=e53] [cursor=pointer]:
              - /url: /zero-code-switch
              - generic [ref=e54]: Learn more
              - img [ref=e55]
        - generic [ref=e57]:
          - heading "Zero STT" [level=3] [ref=e58]
          - generic [ref=e59]:
            - paragraph [ref=e60]: Universal language model that supports everyday conversational speech transcription in 200+ languages.
            - link "Learn more" [ref=e61] [cursor=pointer]:
              - /url: /zero-stt
              - generic [ref=e62]: Learn more
              - img [ref=e63]
    - generic [ref=e65]:
      - generic [ref=e66]:
        - heading "Experience the magic of Shunya Labs’ code-switching transcription" [level=2] [ref=e67]
        - paragraph [ref=e68]: Shunya Labs’ code-switching ASR is the only in the world that returns native Hinglish transcripts in real time. Keep the natural flow of conversation and still get fast, accurate, mixed-language transcription.
      - img "img1" [ref=e70]
      - link "Try now" [ref=e71] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/models/language
        - button "Try now" [ref=e72]
    - generic [ref=e73]:
      - generic [ref=e74]:
        - heading "Transcribe Indian languages like never before" [level=2] [ref=e75]
        - paragraph [ref=e76]: Zero Indic is purpose-built for Indian speech, delivering up to 200% better accuracy than the next-best model. Unlock world-class support for your users with reliable, real-time transcripts that keep pace with the natural rhythm of conversation.
      - img "img1" [ref=e78]
      - link "Try now" [ref=e79] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/models/language
        - button "Try now" [ref=e80]
    - generic [ref=e81]:
      - generic [ref=e83]:
        - paragraph [ref=e84]: One API for 200+ languages, covering 97% of the global population
        - paragraph [ref=e85]: Zero STT is the world's most accurate speech-to-text model designed to support conversational speech in 200+ languages in noisy real world scenarios with speaker overlap. Transcribe audio in sub second latency for captions that feels natural.
      - generic [ref=e86]:
        - generic [ref=e87]:
          - button "Assamese Assamese" [ref=e88] [cursor=pointer]:
            - generic [ref=e89]:
              - img "Assamese" [ref=e91]
              - generic [ref=e92]: Assamese
            - img [ref=e93]
          - button "Awadhi Awadhi" [ref=e95] [cursor=pointer]:
            - generic [ref=e96]:
              - img "Awadhi" [ref=e98]
              - generic [ref=e99]: Awadhi
            - img [ref=e100]
          - button "Bagri Bagri" [ref=e102] [cursor=pointer]:
            - generic [ref=e103]:
              - img "Bagri" [ref=e105]
              - generic [ref=e106]: Bagri
            - img [ref=e107]
          - button "Bengali Bengali" [ref=e109] [cursor=pointer]:
            - generic [ref=e110]:
              - img "Bengali" [ref=e112]
              - generic [ref=e113]: Bengali
            - img [ref=e114]
          - button "Bhili Bhili" [ref=e116] [cursor=pointer]:
            - generic [ref=e117]:
              - img "Bhili" [ref=e119]
              - generic [ref=e120]: Bhili
            - img [ref=e121]
          - button "Bhojpuri Bhojpuri" [ref=e123] [cursor=pointer]:
            - generic [ref=e124]:
              - img "Bhojpuri" [ref=e126]
              - generic [ref=e127]: Bhojpuri
            - img [ref=e128]
          - button "Bodo Bodo" [ref=e130] [cursor=pointer]:
            - generic [ref=e131]:
              - img "Bodo" [ref=e133]
              - generic [ref=e134]: Bodo
            - img [ref=e135]
          - button "Braj Braj" [ref=e137] [cursor=pointer]:
            - generic [ref=e138]:
              - img "Braj" [ref=e140]
              - generic [ref=e141]: Braj
            - img [ref=e142]
          - button "Bundeli Bundeli" [ref=e144] [cursor=pointer]:
            - generic [ref=e145]:
              - img "Bundeli" [ref=e147]
              - generic [ref=e148]: Bundeli
            - img [ref=e149]
          - button "Chhattisgarhi Chhattisgarhi" [ref=e151] [cursor=pointer]:
            - generic [ref=e152]:
              - img "Chhattisgarhi" [ref=e154]
              - generic [ref=e155]: Chhattisgarhi
            - img [ref=e156]
          - button "Dogri Dogri" [ref=e158] [cursor=pointer]:
            - generic [ref=e159]:
              - img "Dogri" [ref=e161]
              - generic [ref=e162]: Dogri
            - img [ref=e163]
          - button "English English" [ref=e165] [cursor=pointer]:
            - generic [ref=e166]:
              - img "English" [ref=e168]
              - generic [ref=e169]: English
            - img [ref=e170]
          - button "Garhwali Garhwali" [ref=e172] [cursor=pointer]:
            - generic [ref=e173]:
              - img "Garhwali" [ref=e175]
              - generic [ref=e176]: Garhwali
            - img [ref=e177]
          - button "Garo Garo" [ref=e179] [cursor=pointer]:
            - generic [ref=e180]:
              - img "Garo" [ref=e182]
              - generic [ref=e183]: Garo
            - img [ref=e184]
          - button "Gujarati Gujarati" [ref=e186] [cursor=pointer]:
            - generic [ref=e187]:
              - img "Gujarati" [ref=e189]
              - generic [ref=e190]: Gujarati
            - img [ref=e191]
          - button "Harouti Harouti" [ref=e193] [cursor=pointer]:
            - generic [ref=e194]:
              - img "Harouti" [ref=e196]
              - generic [ref=e197]: Harouti
            - img [ref=e198]
          - button "Haryanvi Haryanvi" [ref=e200] [cursor=pointer]:
            - generic [ref=e201]:
              - img "Haryanvi" [ref=e203]
              - generic [ref=e204]: Haryanvi
            - img [ref=e205]
          - button "Hindi Hindi" [ref=e207] [cursor=pointer]:
            - generic [ref=e208]:
              - img "Hindi" [ref=e210]
              - generic [ref=e211]: Hindi
            - img [ref=e212]
          - button "Kangri Kangri" [ref=e214] [cursor=pointer]:
            - generic [ref=e215]:
              - img "Kangri" [ref=e217]
              - generic [ref=e218]: Kangri
            - img [ref=e219]
          - button "Kannada Kannada" [ref=e221] [cursor=pointer]:
            - generic [ref=e222]:
              - img "Kannada" [ref=e224]
              - generic [ref=e225]: Kannada
            - img [ref=e226]
          - button "Kashmiri Kashmiri" [ref=e228] [cursor=pointer]:
            - generic [ref=e229]:
              - img "Kashmiri" [ref=e231]
              - generic [ref=e232]: Kashmiri
            - img [ref=e233]
          - button "Konkani Konkani" [ref=e235] [cursor=pointer]:
            - generic [ref=e236]:
              - img "Konkani" [ref=e238]
              - generic [ref=e239]: Konkani
            - img [ref=e240]
          - button "Kumaoni Kumaoni" [ref=e242] [cursor=pointer]:
            - generic [ref=e243]:
              - img "Kumaoni" [ref=e245]
              - generic [ref=e246]: Kumaoni
            - img [ref=e247]
          - button "Kurukh Kurukh" [ref=e249] [cursor=pointer]:
            - generic [ref=e250]:
              - img "Kurukh" [ref=e252]
              - generic [ref=e253]: Kurukh
            - img [ref=e254]
          - button "Magahi Magahi" [ref=e256] [cursor=pointer]:
            - generic [ref=e257]:
              - img "Magahi" [ref=e259]
              - generic [ref=e260]: Magahi
            - img [ref=e261]
          - button "Maithili Maithili" [ref=e263] [cursor=pointer]:
            - generic [ref=e264]:
              - img "Maithili" [ref=e266]
              - generic [ref=e267]: Maithili
            - img [ref=e268]
          - button "Malayalam Malayalam" [ref=e270] [cursor=pointer]:
            - generic [ref=e271]:
              - img "Malayalam" [ref=e273]
              - generic [ref=e274]: Malayalam
            - img [ref=e275]
          - button "Manipuri Manipuri" [ref=e277] [cursor=pointer]:
            - generic [ref=e278]:
              - img "Manipuri" [ref=e280]
              - generic [ref=e281]: Manipuri
            - img [ref=e282]
          - button "Marathi Marathi" [ref=e284] [cursor=pointer]:
            - generic [ref=e285]:
              - img "Marathi" [ref=e287]
              - generic [ref=e288]: Marathi
            - img [ref=e289]
          - button "Marwadi Marwadi" [ref=e291] [cursor=pointer]:
            - generic [ref=e292]:
              - img "Marwadi" [ref=e294]
              - generic [ref=e295]: Marwadi
            - img [ref=e296]
          - button "Nepali Nepali" [ref=e298] [cursor=pointer]:
            - generic [ref=e299]:
              - img "Nepali" [ref=e301]
              - generic [ref=e302]: Nepali
            - img [ref=e303]
          - button "Nimadi Nimadi" [ref=e305] [cursor=pointer]:
            - generic [ref=e306]:
              - img "Nimadi" [ref=e308]
              - generic [ref=e309]: Nimadi
            - img [ref=e310]
          - button "Odia Odia" [ref=e312] [cursor=pointer]:
            - generic [ref=e313]:
              - img "Odia" [ref=e315]
              - generic [ref=e316]: Odia
            - img [ref=e317]
          - button "Pahari Mahasui Pahari Mahasui" [ref=e319] [cursor=pointer]:
            - generic [ref=e320]:
              - img "Pahari Mahasui" [ref=e322]
              - generic [ref=e323]: Pahari Mahasui
            - img [ref=e324]
          - button "Punjabi Punjabi" [ref=e326] [cursor=pointer]:
            - generic [ref=e327]:
              - img "Punjabi" [ref=e329]
              - generic [ref=e330]: Punjabi
            - img [ref=e331]
          - button "Rajasthani Rajasthani" [ref=e333] [cursor=pointer]:
            - generic [ref=e334]:
              - img "Rajasthani" [ref=e336]
              - generic [ref=e337]: Rajasthani
            - img [ref=e338]
          - button "Sanskrit Sanskrit" [ref=e340] [cursor=pointer]:
            - generic [ref=e341]:
              - img "Sanskrit" [ref=e343]
              - generic [ref=e344]: Sanskrit
            - img [ref=e345]
          - button "Santali Santali" [ref=e347] [cursor=pointer]:
            - generic [ref=e348]:
              - img "Santali" [ref=e350]
              - generic [ref=e351]: Santali
            - img [ref=e352]
          - button "Sindhi Sindhi" [ref=e354] [cursor=pointer]:
            - generic [ref=e355]:
              - img "Sindhi" [ref=e357]
              - generic [ref=e358]: Sindhi
            - img [ref=e359]
          - button "Surgujia Surgujia" [ref=e361] [cursor=pointer]:
            - generic [ref=e362]:
              - img "Surgujia" [ref=e364]
              - generic [ref=e365]: Surgujia
            - img [ref=e366]
          - button "Tamil Tamil" [ref=e368] [cursor=pointer]:
            - generic [ref=e369]:
              - img "Tamil" [ref=e371]
              - generic [ref=e372]: Tamil
            - img [ref=e373]
          - button "Telugu Telugu" [ref=e375] [cursor=pointer]:
            - generic [ref=e376]:
              - img "Telugu" [ref=e378]
              - generic [ref=e379]: Telugu
            - img [ref=e380]
          - button "Tulu Tulu" [ref=e382] [cursor=pointer]:
            - generic [ref=e383]:
              - img "Tulu" [ref=e385]
              - generic [ref=e386]: Tulu
            - img [ref=e387]
          - button "Urdu Urdu" [ref=e389] [cursor=pointer]:
            - generic [ref=e390]:
              - img "Urdu" [ref=e392]
              - generic [ref=e393]: Urdu
            - img [ref=e394]
          - button "Wagdi Wagdi" [ref=e396] [cursor=pointer]:
            - generic [ref=e397]:
              - img "Wagdi" [ref=e399]
              - generic [ref=e400]: Wagdi
            - img [ref=e401]
        - link "See the full list of languages supported by Shunya Labs" [ref=e404] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/models-languages/supported-languages
          - text: See the full list of languages supported by Shunya Labs
          - img [ref=e405]
    - contentinfo [ref=e407]:
      - generic [ref=e408]:
        - paragraph [ref=e409]: The fastest way to add voice AI to your products
        - paragraph [ref=e410]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e411]:
          - link "Go to Pricing page" [ref=e412] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e413] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e414]:
      - generic [ref=e415]:
        - generic [ref=e416]:
          - img "Shunya Labs" [ref=e417]
          - paragraph [ref=e418]: Shunya Labs, Inc.
        - generic [ref=e419]:
          - paragraph [ref=e420]: Product
          - list [ref=e421]:
            - listitem [ref=e422]:
              - link "Overview" [ref=e423] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e424]:
              - link "Models" [ref=e425] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e426]:
              - link "Voice Agents" [ref=e427] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e428]:
              - link "Speech Intelligence" [ref=e429] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e430]:
              - link "Audio Processing" [ref=e431] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e432]:
              - link "Deployment" [ref=e433] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e434]:
          - paragraph [ref=e435]: Models
          - list [ref=e436]:
            - listitem [ref=e437]:
              - link "Language Models" [ref=e438] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e439]:
              - link "Zero STT Indic" [ref=e440] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e441]:
              - link "Zero STT Codeswitch" [ref=e442] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e443]:
              - link "Specialised Models" [ref=e444] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e445]:
              - link "Zero STT Med" [ref=e446] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e447]:
              - link "On Device Models" [ref=e448] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e449]:
          - paragraph [ref=e450]: Solutions
          - list [ref=e451]:
            - listitem [ref=e452]:
              - link "Contact Centers" [ref=e453] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e454]:
              - link "Media & Entertainment" [ref=e455] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e456]:
              - link "Healthcare" [ref=e457] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e458]:
          - paragraph [ref=e459]: Resources
          - list [ref=e460]:
            - listitem [ref=e461]:
              - link "Blogs" [ref=e462] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e463]:
              - link "Benchmarks" [ref=e464] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e465]:
              - link "News & Media" [ref=e466] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e467]:
              - link "Patents" [ref=e468] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e469]:
              - link "Research" [ref=e470] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e472]:
          - link "Documentation" [ref=e473] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e475]:
          - listitem [ref=e476]:
            - link "About us" [ref=e477] [cursor=pointer]:
              - /url: /about
        - list [ref=e479]:
          - listitem [ref=e480]:
            - link "Pricing" [ref=e481] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e482]:
        - paragraph [ref=e483]: Follow us on
        - generic [ref=e484]:
          - link [ref=e485] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e486]
          - link [ref=e488] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e489]
          - link [ref=e491] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e492]
          - link [ref=e494] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e495]
      - generic [ref=e497]:
        - paragraph [ref=e498]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e499]:
          - link "Privacy" [ref=e500] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e501] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e502] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e503] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e504] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e505]
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
     |                                                                                      ^ Error: 1 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```