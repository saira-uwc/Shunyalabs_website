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
    - generic [ref=e10]:
      - generic [ref=e11]:
        - heading "One API for 200+ languages and multilingual transcriptions" [level=1] [ref=e12]
        - paragraph [ref=e13]: Reach the largest possible audience in real time—without juggling multiple language APIs or wrestling with complex setup.
      - generic [ref=e14]:
        - generic [ref=e15]:
          - heading "Zero STT Indic" [level=3] [ref=e16]
          - generic [ref=e17]:
            - paragraph [ref=e18]: Superior Indic models for industry best accuracy and speed in transcribing speech in Hindi, Bengali, Kannada and Telugu.
            - link "Learn more" [ref=e19] [cursor=pointer]:
              - /url: /zero-indic
              - generic [ref=e20]: Learn more
              - img [ref=e21]
        - generic [ref=e23]:
          - heading "Zero STT Code-switch" [level=3] [ref=e24]
          - generic [ref=e25]:
            - paragraph [ref=e26]: The only model in the world that processes and returns output in mixed langauge tokens. Now available for Hinglish.
            - link "Learn more" [ref=e27] [cursor=pointer]:
              - /url: /zero-code-switch
              - generic [ref=e28]: Learn more
              - img [ref=e29]
        - generic [ref=e31]:
          - heading "Zero STT" [level=3] [ref=e32]
          - generic [ref=e33]:
            - paragraph [ref=e34]: Universal language model that supports everyday conversational speech transcription in 200+ languages.
            - link "Learn more" [ref=e35] [cursor=pointer]:
              - /url: /zero-stt
              - generic [ref=e36]: Learn more
              - img [ref=e37]
    - generic [ref=e39]:
      - generic [ref=e40]:
        - heading "Experience the magic of Shunya Labs’ code-switching transcription" [level=2] [ref=e41]
        - paragraph [ref=e42]: Shunya Labs’ code-switching ASR is the only in the world that returns native Hinglish transcripts in real time. Keep the natural flow of conversation and still get fast, accurate, mixed-language transcription.
      - img "img1" [ref=e44]
      - link "Try now" [ref=e45] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/models/language
        - button "Try now" [ref=e46]
    - generic [ref=e47]:
      - generic [ref=e48]:
        - heading "Transcribe Indian languages like never before" [level=2] [ref=e49]
        - paragraph [ref=e50]: Zero Indic is purpose-built for Indian speech, delivering up to 200% better accuracy than the next-best model. Unlock world-class support for your users with reliable, real-time transcripts that keep pace with the natural rhythm of conversation.
      - img "img1" [ref=e52]
      - link "Try now" [ref=e53] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/models/language
        - button "Try now" [ref=e54]
    - generic [ref=e55]:
      - generic [ref=e57]:
        - paragraph [ref=e58]: One API for 200+ languages, covering 97% of the global population
        - paragraph [ref=e59]: Zero STT is the world's most accurate speech-to-text model designed to support conversational speech in 200+ languages in noisy real world scenarios with speaker overlap. Transcribe audio in sub second latency for captions that feels natural.
      - generic [ref=e60]:
        - generic [ref=e61]:
          - button "Assamese Assamese" [ref=e62] [cursor=pointer]:
            - generic [ref=e63]:
              - generic [ref=e64]:
                - img "Assamese"
              - generic [ref=e65]: Assamese
            - img [ref=e66]
          - button "Awadhi Awadhi" [ref=e68] [cursor=pointer]:
            - generic [ref=e69]:
              - generic [ref=e70]:
                - img "Awadhi"
              - generic [ref=e71]: Awadhi
            - img [ref=e72]
          - button "Bagri Bagri" [ref=e74] [cursor=pointer]:
            - generic [ref=e75]:
              - generic [ref=e76]:
                - img "Bagri"
              - generic [ref=e77]: Bagri
            - img [ref=e78]
          - button "Bengali Bengali" [ref=e80] [cursor=pointer]:
            - generic [ref=e81]:
              - generic [ref=e82]:
                - img "Bengali"
              - generic [ref=e83]: Bengali
            - img [ref=e84]
          - button "Bhili Bhili" [ref=e86] [cursor=pointer]:
            - generic [ref=e87]:
              - generic [ref=e88]:
                - img "Bhili"
              - generic [ref=e89]: Bhili
            - img [ref=e90]
          - button "Bhojpuri Bhojpuri" [ref=e92] [cursor=pointer]:
            - generic [ref=e93]:
              - generic [ref=e94]:
                - img "Bhojpuri"
              - generic [ref=e95]: Bhojpuri
            - img [ref=e96]
          - button "Bodo Bodo" [ref=e98] [cursor=pointer]:
            - generic [ref=e99]:
              - generic [ref=e100]:
                - img "Bodo"
              - generic [ref=e101]: Bodo
            - img [ref=e102]
          - button "Braj Braj" [ref=e104] [cursor=pointer]:
            - generic [ref=e105]:
              - generic [ref=e106]:
                - img "Braj"
              - generic [ref=e107]: Braj
            - img [ref=e108]
          - button "Bundeli Bundeli" [ref=e110] [cursor=pointer]:
            - generic [ref=e111]:
              - generic [ref=e112]:
                - img "Bundeli"
              - generic [ref=e113]: Bundeli
            - img [ref=e114]
          - button "Chhattisgarhi Chhattisgarhi" [ref=e116] [cursor=pointer]:
            - generic [ref=e117]:
              - generic [ref=e118]:
                - img "Chhattisgarhi"
              - generic [ref=e119]: Chhattisgarhi
            - img [ref=e120]
          - button "Dogri Dogri" [ref=e122] [cursor=pointer]:
            - generic [ref=e123]:
              - generic [ref=e124]:
                - img "Dogri"
              - generic [ref=e125]: Dogri
            - img [ref=e126]
          - button "English English" [ref=e128] [cursor=pointer]:
            - generic [ref=e129]:
              - generic [ref=e130]:
                - img "English"
              - generic [ref=e131]: English
            - img [ref=e132]
          - button "Garhwali Garhwali" [ref=e134] [cursor=pointer]:
            - generic [ref=e135]:
              - generic [ref=e136]:
                - img "Garhwali"
              - generic [ref=e137]: Garhwali
            - img [ref=e138]
          - button "Garo Garo" [ref=e140] [cursor=pointer]:
            - generic [ref=e141]:
              - generic [ref=e142]:
                - img "Garo"
              - generic [ref=e143]: Garo
            - img [ref=e144]
          - button "Gujarati Gujarati" [ref=e146] [cursor=pointer]:
            - generic [ref=e147]:
              - generic [ref=e148]:
                - img "Gujarati"
              - generic [ref=e149]: Gujarati
            - img [ref=e150]
          - button "Harouti Harouti" [ref=e152] [cursor=pointer]:
            - generic [ref=e153]:
              - generic [ref=e154]:
                - img "Harouti"
              - generic [ref=e155]: Harouti
            - img [ref=e156]
          - button "Haryanvi Haryanvi" [ref=e158] [cursor=pointer]:
            - generic [ref=e159]:
              - generic [ref=e160]:
                - img "Haryanvi"
              - generic [ref=e161]: Haryanvi
            - img [ref=e162]
          - button "Hindi Hindi" [ref=e164] [cursor=pointer]:
            - generic [ref=e165]:
              - generic [ref=e166]:
                - img "Hindi"
              - generic [ref=e167]: Hindi
            - img [ref=e168]
          - button "Kangri Kangri" [ref=e170] [cursor=pointer]:
            - generic [ref=e171]:
              - generic [ref=e172]:
                - img "Kangri"
              - generic [ref=e173]: Kangri
            - img [ref=e174]
          - button "Kannada Kannada" [ref=e176] [cursor=pointer]:
            - generic [ref=e177]:
              - generic [ref=e178]:
                - img "Kannada"
              - generic [ref=e179]: Kannada
            - img [ref=e180]
          - button "Kashmiri Kashmiri" [ref=e182] [cursor=pointer]:
            - generic [ref=e183]:
              - generic [ref=e184]:
                - img "Kashmiri"
              - generic [ref=e185]: Kashmiri
            - img [ref=e186]
          - button "Konkani Konkani" [ref=e188] [cursor=pointer]:
            - generic [ref=e189]:
              - generic [ref=e190]:
                - img "Konkani"
              - generic [ref=e191]: Konkani
            - img [ref=e192]
          - button "Kumaoni Kumaoni" [ref=e194] [cursor=pointer]:
            - generic [ref=e195]:
              - generic [ref=e196]:
                - img "Kumaoni"
              - generic [ref=e197]: Kumaoni
            - img [ref=e198]
          - button "Kurukh Kurukh" [ref=e200] [cursor=pointer]:
            - generic [ref=e201]:
              - generic [ref=e202]:
                - img "Kurukh"
              - generic [ref=e203]: Kurukh
            - img [ref=e204]
          - button "Magahi Magahi" [ref=e206] [cursor=pointer]:
            - generic [ref=e207]:
              - generic [ref=e208]:
                - img "Magahi"
              - generic [ref=e209]: Magahi
            - img [ref=e210]
          - button "Maithili Maithili" [ref=e212] [cursor=pointer]:
            - generic [ref=e213]:
              - generic [ref=e214]:
                - img "Maithili"
              - generic [ref=e215]: Maithili
            - img [ref=e216]
          - button "Malayalam Malayalam" [ref=e218] [cursor=pointer]:
            - generic [ref=e219]:
              - generic [ref=e220]:
                - img "Malayalam"
              - generic [ref=e221]: Malayalam
            - img [ref=e222]
          - button "Manipuri Manipuri" [ref=e224] [cursor=pointer]:
            - generic [ref=e225]:
              - generic [ref=e226]:
                - img "Manipuri"
              - generic [ref=e227]: Manipuri
            - img [ref=e228]
          - button "Marathi Marathi" [ref=e230] [cursor=pointer]:
            - generic [ref=e231]:
              - generic [ref=e232]:
                - img "Marathi"
              - generic [ref=e233]: Marathi
            - img [ref=e234]
          - button "Marwadi Marwadi" [ref=e236] [cursor=pointer]:
            - generic [ref=e237]:
              - generic [ref=e238]:
                - img "Marwadi"
              - generic [ref=e239]: Marwadi
            - img [ref=e240]
          - button "Nepali Nepali" [ref=e242] [cursor=pointer]:
            - generic [ref=e243]:
              - generic [ref=e244]:
                - img "Nepali"
              - generic [ref=e245]: Nepali
            - img [ref=e246]
          - button "Nimadi Nimadi" [ref=e248] [cursor=pointer]:
            - generic [ref=e249]:
              - generic [ref=e250]:
                - img "Nimadi"
              - generic [ref=e251]: Nimadi
            - img [ref=e252]
          - button "Odia Odia" [ref=e254] [cursor=pointer]:
            - generic [ref=e255]:
              - generic [ref=e256]:
                - img "Odia"
              - generic [ref=e257]: Odia
            - img [ref=e258]
          - button "Pahari Mahasui Pahari Mahasui" [ref=e260] [cursor=pointer]:
            - generic [ref=e261]:
              - generic [ref=e262]:
                - img "Pahari Mahasui"
              - generic [ref=e263]: Pahari Mahasui
            - img [ref=e264]
          - button "Punjabi Punjabi" [ref=e266] [cursor=pointer]:
            - generic [ref=e267]:
              - generic [ref=e268]:
                - img "Punjabi"
              - generic [ref=e269]: Punjabi
            - img [ref=e270]
          - button "Rajasthani Rajasthani" [ref=e272] [cursor=pointer]:
            - generic [ref=e273]:
              - generic [ref=e274]:
                - img "Rajasthani"
              - generic [ref=e275]: Rajasthani
            - img [ref=e276]
          - button "Sanskrit Sanskrit" [ref=e278] [cursor=pointer]:
            - generic [ref=e279]:
              - generic [ref=e280]:
                - img "Sanskrit"
              - generic [ref=e281]: Sanskrit
            - img [ref=e282]
          - button "Santali Santali" [ref=e284] [cursor=pointer]:
            - generic [ref=e285]:
              - generic [ref=e286]:
                - img "Santali"
              - generic [ref=e287]: Santali
            - img [ref=e288]
          - button "Sindhi Sindhi" [ref=e290] [cursor=pointer]:
            - generic [ref=e291]:
              - generic [ref=e292]:
                - img "Sindhi"
              - generic [ref=e293]: Sindhi
            - img [ref=e294]
          - button "Surgujia Surgujia" [ref=e296] [cursor=pointer]:
            - generic [ref=e297]:
              - generic [ref=e298]:
                - img "Surgujia"
              - generic [ref=e299]: Surgujia
            - img [ref=e300]
          - button "Tamil Tamil" [ref=e302] [cursor=pointer]:
            - generic [ref=e303]:
              - generic [ref=e304]:
                - img "Tamil"
              - generic [ref=e305]: Tamil
            - img [ref=e306]
          - button "Telugu Telugu" [ref=e308] [cursor=pointer]:
            - generic [ref=e309]:
              - generic [ref=e310]:
                - img "Telugu"
              - generic [ref=e311]: Telugu
            - img [ref=e312]
          - button "Tulu Tulu" [ref=e314] [cursor=pointer]:
            - generic [ref=e315]:
              - generic [ref=e316]:
                - img "Tulu"
              - generic [ref=e317]: Tulu
            - img [ref=e318]
          - button "Urdu Urdu" [ref=e320] [cursor=pointer]:
            - generic [ref=e321]:
              - generic [ref=e322]:
                - img "Urdu"
              - generic [ref=e323]: Urdu
            - img [ref=e324]
          - button "Wagdi Wagdi" [ref=e326] [cursor=pointer]:
            - generic [ref=e327]:
              - generic [ref=e328]:
                - img "Wagdi"
              - generic [ref=e329]: Wagdi
            - img [ref=e330]
        - link "See the full list of languages supported by Shunya Labs" [ref=e333] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/models-languages/supported-languages
          - text: See the full list of languages supported by Shunya Labs
          - img [ref=e334]
    - contentinfo [ref=e336]:
      - generic [ref=e337]:
        - paragraph [ref=e338]: The fastest way to add voice AI to your products
        - paragraph [ref=e339]: One platform for speech in and speech out-secure by design, built to scale.
        - generic [ref=e340]:
          - link "Go to Pricing page" [ref=e341] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e342] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e343]:
      - generic [ref=e344]:
        - generic [ref=e345]:
          - img "Shunya Labs" [ref=e346]
          - paragraph [ref=e347]: Shunya Labs, Inc.
        - generic [ref=e348]:
          - paragraph [ref=e349]: Product
          - list [ref=e350]:
            - listitem [ref=e351]:
              - link "Overview" [ref=e352] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e353]:
              - link "Models" [ref=e354] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e355]:
              - link "Voice Agents" [ref=e356] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e357]:
              - link "Speech Intelligence" [ref=e358] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e359]:
              - link "Audio Processing" [ref=e360] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e361]:
              - link "Deployment" [ref=e362] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e363]:
          - paragraph [ref=e364]: Models
          - list [ref=e365]:
            - listitem [ref=e366]:
              - link "Language Models" [ref=e367] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e368]:
              - link "Zero STT Indic" [ref=e369] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e370]:
              - link "Zero STT Codeswitch" [ref=e371] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e372]:
              - link "Specialised Models" [ref=e373] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e374]:
              - link "Zero STT Med" [ref=e375] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e376]:
              - link "On Device Models" [ref=e377] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e378]:
          - paragraph [ref=e379]: Solutions
          - list [ref=e380]:
            - listitem [ref=e381]:
              - link "Contact Centers" [ref=e382] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e383]:
              - link "Media & Entertainment" [ref=e384] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e385]:
              - link "Healthcare" [ref=e386] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e387]:
          - paragraph [ref=e388]: Resources
          - list [ref=e389]:
            - listitem [ref=e390]:
              - link "Blogs" [ref=e391] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e392]:
              - link "Benchmarks" [ref=e393] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e394]:
              - link "News & Media" [ref=e395] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e396]:
              - link "Patents" [ref=e397] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e398]:
              - link "Research" [ref=e399] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e401]:
          - link "Documentation" [ref=e402] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e404]:
          - listitem [ref=e405]:
            - link "About us" [ref=e406] [cursor=pointer]:
              - /url: /about
        - list [ref=e408]:
          - listitem [ref=e409]:
            - link "Pricing" [ref=e410] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e411]:
        - paragraph [ref=e412]: Follow us on
        - generic [ref=e413]:
          - link [ref=e414] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e415]
          - link [ref=e417] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e418]
          - link [ref=e420] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e421]
          - link [ref=e423] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e424]
      - generic [ref=e426]:
        - paragraph [ref=e427]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e428]:
          - link "Privacy" [ref=e429] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e430] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e431] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e432] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e433] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e434]
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