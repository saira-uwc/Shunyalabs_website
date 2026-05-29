# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/contact/contact/contact-form.spec.js >> Contact — lead form >> Contact Sales → contact page → fill form → submit shows confirmation
- Location: tests/modules/contact/contact/contact-form.spec.js:39:3

# Error details

```
TimeoutError: locator.click: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('nav').getByRole('link', { name: 'Contact Sales', exact: true }).first()
    - locator resolved to <a href="/contact" class="border border-gray-400 text-gray-200 hover:bg-gray-800 px-5 py-2 rounded-xl text-center font-semibold">Contact Sales</a>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <a href="/pricing" class="group relative inline-flex items-center px-8 py-1 rounded-full border border-white/30 bg-[linear-gradient(90deg,#361D83_0%,#3F2E71_50%,#0C061D_100%)] text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] min-w-[260px]">…</a> from <div class="pt-10 pb-5">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <a href="/pricing" class="group relative inline-flex items-center px-8 py-1 rounded-full border border-white/30 bg-[linear-gradient(90deg,#361D83_0%,#3F2E71_50%,#0C061D_100%)] text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] min-w-[260px]">…</a> from <div class="pt-10 pb-5">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <a href="/pricing" class="group relative inline-flex items-center px-8 py-1 rounded-full border border-white/30 bg-[linear-gradient(90deg,#361D83_0%,#3F2E71_50%,#0C061D_100%)] text-white transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,130,246,0.6)] min-w-[260px]">…</a> from <div class="pt-10 pb-5">…</div> subtree intercepts pointer events
  28 × retrying click action
       - waiting 500ms
       - waiting for element to be visible, enabled and stable
       - element is visible, enabled and stable
       - scrolling into view if needed
       - done scrolling
       - <div class="w-full rounded-2xl sm:rounded-full bg-white/10 backdrop-blur-md p-1 sm:p-1.5 flex flex-wrap sm:flex-nowrap gap-1 sm:gap-2">…</div> from <div id="HomePageWidget">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - navigation [ref=e4]:
        - generic [ref=e5]:
          - link "Shunya Labs Logo" [ref=e6] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e7]
          - button "☰" [active] [ref=e8] [cursor=pointer]
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
        - heading "Voice AI on your terms" [level=1] [ref=e11]
        - heading "Foundation models to voice agents, complete voice AI stack." [level=2] [ref=e12]
        - text: Built for developers. Ready for enterprises.
      - main [ref=e15]:
        - generic [ref=e19]:
          - generic [ref=e23]:
            - button "Zero STT Indic" [ref=e24] [cursor=pointer]
            - button "Zero STT Codeswitch" [ref=e25] [cursor=pointer]
            - button "Zero STT Med" [ref=e26] [cursor=pointer]
            - button "Zero TTS Indic" [ref=e27] [cursor=pointer]
          - generic [ref=e28]:
            - generic [ref=e32]:
              - generic [ref=e34]:
                - generic [ref=e35]: Language
                - button "🇺🇸English" [ref=e38] [cursor=pointer]:
                  - generic [ref=e39]: 🇺🇸English
                  - generic:
                    - img
              - generic [ref=e40]:
                - generic [ref=e41]: Input Audio
                - generic [ref=e42]:
                  - generic [ref=e43]: Pre-recorded
                  - generic [ref=e46]:
                    - button "Customer Support Call" [ref=e47] [cursor=pointer]
                    - button "Podcast" [ref=e48] [cursor=pointer]
                    - button "Upload your file" [ref=e49] [cursor=pointer]
              - generic [ref=e52]:
                - generic [ref=e54]: Live recording
                - button "Start Speaking" [ref=e55] [cursor=pointer]:
                  - generic [ref=e56]: Start Speaking
            - generic [ref=e60]:
              - generic [ref=e61]:
                - button "Play audio" [ref=e64] [cursor=pointer]:
                  - img [ref=e65]
                - button "No conversation to copy" [disabled] [ref=e87]:
                  - img [ref=e88]
              - generic [ref=e97]:
                - img [ref=e100]
                - paragraph [ref=e104]: Select your input language, then pick a sample, upload a file, or start speaking to capture live audio.
      - generic [ref=e106]:
        - link "Cloud API Production Ready →" [ref=e107] [cursor=pointer]:
          - /url: /pricing
          - generic [ref=e108]:
            - generic [ref=e109]: Cloud API
            - generic [ref=e110]: Production Ready
          - generic [ref=e111]: →
        - link "Developer Documentation Local Deployment →" [ref=e112] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/overview
          - generic [ref=e113]:
            - generic [ref=e114]: Developer Documentation
            - generic [ref=e115]: Local Deployment
          - generic [ref=e116]: →
        - link "Hugging Face Open Models →" [ref=e117] [cursor=pointer]:
          - /url: https://huggingface.co/shunyalabs
          - generic [ref=e118]:
            - generic [ref=e119]: Hugging Face
            - generic [ref=e120]: Open Models
          - generic [ref=e121]: →
      - generic [ref=e123]:
        - heading "Custom Models for Modular Voice Agents" [level=2] [ref=e124]
        - generic [ref=e125]:
          - generic [ref=e126]:
            - generic [ref=e128] [cursor=pointer]:
              - heading "Custom Models" [level=3] [ref=e130]
              - paragraph [ref=e131]: STT, TTS, and SLMs built for specific use cases.
            - generic [ref=e132] [cursor=pointer]:
              - heading "Intelligence Layer" [level=3] [ref=e134]
              - paragraph [ref=e135]: SLMs for intent recognition, entity extraction, and sentiment analysis.
            - generic [ref=e136] [cursor=pointer]:
              - heading "Orchestration Framework" [level=3] [ref=e138]
              - paragraph [ref=e139]: Easy to configure business rules, prompts, and conversation flows.
            - generic [ref=e140] [cursor=pointer]:
              - heading "Channel Integrations" [level=3] [ref=e142]
              - paragraph [ref=e143]: Telephony, web, mobile, and messaging connections.
            - generic [ref=e144] [cursor=pointer]:
              - heading "Analytics and Observability" [level=3] [ref=e146]
              - paragraph [ref=e147]: Performance tracking, debugging, and optimization.
          - img "Default Architecture" [ref=e150]
      - generic [ref=e152]:
        - generic [ref=e153]:
          - heading "Vāķ" [level=2] [ref=e154]
          - paragraph [ref=e155]: Real-Time Speech-to-Speech Translation · 55 Languages · 2,970 Pairs
        - generic [ref=e156]:
          - generic [ref=e158]:
            - generic [ref=e159]: SOURCE
            - generic [ref=e160]: Hindi
            - generic [ref=e161]: →
            - generic [ref=e162]: DESTINATION
            - generic [ref=e163]: Indian English
          - generic [ref=e164]:
            - generic [ref=e166]:
              - generic [ref=e167]:
                - generic [ref=e169]: Hindi
                - paragraph [ref=e171]: Tap mic to speak, or type and press Enter to translate
              - generic [ref=e173]:
                - generic [ref=e175]: Indian English
                - paragraph [ref=e177]: Translation will appear here
            - generic [ref=e178]:
              - generic [ref=e179]:
                - generic [ref=e180]:
                  - generic [ref=e181]: Source
                  - button "हिन्दी (Hindi)" [ref=e182] [cursor=pointer]:
                    - generic [ref=e183]: हिन्दी (Hindi)
                    - img [ref=e184]
                - button "Swap languages" [ref=e186] [cursor=pointer]:
                  - img [ref=e187]
                - generic [ref=e190]:
                  - generic [ref=e191]: Destination
                  - button "Indian English" [ref=e192] [cursor=pointer]:
                    - generic [ref=e193]: Indian English
                    - img [ref=e194]
                - generic [ref=e196]:
                  - generic [ref=e197]: Speaker
                  - button "English ⬤ Nisha ♀" [ref=e198] [cursor=pointer]:
                    - generic [ref=e199]:
                      - generic [ref=e200]: English
                      - generic [ref=e201]: ⬤
                      - generic [ref=e202]: Nisha
                      - generic [ref=e203]: ♀
                    - img [ref=e204]
                - generic [ref=e206]:
                  - generic [ref=e207]: Emotions
                  - button "😐 Neutral" [ref=e208] [cursor=pointer]:
                    - generic [ref=e209]: 😐 Neutral
                    - img [ref=e210]
              - generic [ref=e213]:
                - textbox "Type text in source language to translate..." [ref=e215]
                - button "Press to speak" [ref=e216] [cursor=pointer]:
                  - img [ref=e217]
            - generic [ref=e220]:
              - generic [ref=e221]: 55 Languages
              - generic [ref=e223]: 46 Speakers
              - generic [ref=e225]: 11 Emotions
    - generic [ref=e228]:
      - heading "Understand Everyone. Speak to Anyone" [level=2] [ref=e229]
      - paragraph [ref=e230]: We solve the fundamental problems that make voice AI expensive, slow, and insecure.
      - generic [ref=e231]:
        - generic [ref=e232]:
          - paragraph [ref=e233]: "0"
          - paragraph [ref=e234]: Language Supported
        - generic [ref=e235]:
          - paragraph [ref=e236]: 0.0%
          - paragraph [ref=e237]: Global Population Coverage
        - generic [ref=e238]:
          - paragraph [ref=e239]: 0K
          - paragraph [ref=e240]: Minimum Native Speakers
    - generic [ref=e241]:
      - img [ref=e243]
      - generic [ref=e247]:
        - heading "Industry-leading standards for enterprise security" [level=2] [ref=e248]
        - generic [ref=e249]:
          - generic [ref=e250]:
            - generic [ref=e251]:
              - img "SOC 2 Type II"
            - heading "SOC 2 Type II" [level=3] [ref=e252]
            - paragraph [ref=e253]: Trusted where privacy matters most — SOC 2 Type II certified.
          - generic [ref=e254]:
            - generic [ref=e255]:
              - img "ISO 27001"
            - heading "ISO 27001" [level=3] [ref=e256]
            - paragraph [ref=e257]: Privacy and compliance built in with our ISO/IEC 27001:2022 accreditation.
          - generic [ref=e258]:
            - generic [ref=e259]:
              - img "HIPAA"
            - heading "HIPAA" [level=3] [ref=e260]
            - paragraph [ref=e261]: Fully compliant with the health insurance portability and accountability act.
          - generic [ref=e262]:
            - generic [ref=e263]:
              - img "Two-Sided Encryption"
            - heading "Two-Sided Encryption" [level=3] [ref=e264]
            - paragraph [ref=e265]: Data is encrypted in transit and at rest—TLS for every connection, AES-256 for storage, with keys managed in your cloud.
    - generic [ref=e266]:
      - generic [ref=e268]:
        - paragraph [ref=e269]: Language Regions
        - paragraph [ref=e270]: Explore our comprehensive language coverage across the globe
      - generic [ref=e271]:
        - generic [ref=e272]:
          - button "Assamese Assamese" [ref=e273] [cursor=pointer]:
            - generic [ref=e274]:
              - generic [ref=e275]:
                - img "Assamese"
              - generic [ref=e276]: Assamese
            - img [ref=e277]
          - button "Awadhi Awadhi" [ref=e279] [cursor=pointer]:
            - generic [ref=e280]:
              - generic [ref=e281]:
                - img "Awadhi"
              - generic [ref=e282]: Awadhi
            - img [ref=e283]
          - button "Bagri Bagri" [ref=e285] [cursor=pointer]:
            - generic [ref=e286]:
              - generic [ref=e287]:
                - img "Bagri"
              - generic [ref=e288]: Bagri
            - img [ref=e289]
          - button "Bengali Bengali" [ref=e291] [cursor=pointer]:
            - generic [ref=e292]:
              - generic [ref=e293]:
                - img "Bengali"
              - generic [ref=e294]: Bengali
            - img [ref=e295]
          - button "Bhili Bhili" [ref=e297] [cursor=pointer]:
            - generic [ref=e298]:
              - generic [ref=e299]:
                - img "Bhili"
              - generic [ref=e300]: Bhili
            - img [ref=e301]
          - button "Bhojpuri Bhojpuri" [ref=e303] [cursor=pointer]:
            - generic [ref=e304]:
              - generic [ref=e305]:
                - img "Bhojpuri"
              - generic [ref=e306]: Bhojpuri
            - img [ref=e307]
          - button "Bodo Bodo" [ref=e309] [cursor=pointer]:
            - generic [ref=e310]:
              - generic [ref=e311]:
                - img "Bodo"
              - generic [ref=e312]: Bodo
            - img [ref=e313]
          - button "Braj Braj" [ref=e315] [cursor=pointer]:
            - generic [ref=e316]:
              - generic [ref=e317]:
                - img "Braj"
              - generic [ref=e318]: Braj
            - img [ref=e319]
          - button "Bundeli Bundeli" [ref=e321] [cursor=pointer]:
            - generic [ref=e322]:
              - generic [ref=e323]:
                - img "Bundeli"
              - generic [ref=e324]: Bundeli
            - img [ref=e325]
          - button "Chhattisgarhi Chhattisgarhi" [ref=e327] [cursor=pointer]:
            - generic [ref=e328]:
              - generic [ref=e329]:
                - img "Chhattisgarhi"
              - generic [ref=e330]: Chhattisgarhi
            - img [ref=e331]
          - button "Dogri Dogri" [ref=e333] [cursor=pointer]:
            - generic [ref=e334]:
              - generic [ref=e335]:
                - img "Dogri"
              - generic [ref=e336]: Dogri
            - img [ref=e337]
          - button "English English" [ref=e339] [cursor=pointer]:
            - generic [ref=e340]:
              - generic [ref=e341]:
                - img "English"
              - generic [ref=e342]: English
            - img [ref=e343]
          - button "Garhwali Garhwali" [ref=e345] [cursor=pointer]:
            - generic [ref=e346]:
              - generic [ref=e347]:
                - img "Garhwali"
              - generic [ref=e348]: Garhwali
            - img [ref=e349]
          - button "Garo Garo" [ref=e351] [cursor=pointer]:
            - generic [ref=e352]:
              - generic [ref=e353]:
                - img "Garo"
              - generic [ref=e354]: Garo
            - img [ref=e355]
          - button "Gujarati Gujarati" [ref=e357] [cursor=pointer]:
            - generic [ref=e358]:
              - generic [ref=e359]:
                - img "Gujarati"
              - generic [ref=e360]: Gujarati
            - img [ref=e361]
          - button "Harouti Harouti" [ref=e363] [cursor=pointer]:
            - generic [ref=e364]:
              - generic [ref=e365]:
                - img "Harouti"
              - generic [ref=e366]: Harouti
            - img [ref=e367]
          - button "Haryanvi Haryanvi" [ref=e369] [cursor=pointer]:
            - generic [ref=e370]:
              - generic [ref=e371]:
                - img "Haryanvi"
              - generic [ref=e372]: Haryanvi
            - img [ref=e373]
          - button "Hindi Hindi" [ref=e375] [cursor=pointer]:
            - generic [ref=e376]:
              - generic [ref=e377]:
                - img "Hindi"
              - generic [ref=e378]: Hindi
            - img [ref=e379]
          - button "Kangri Kangri" [ref=e381] [cursor=pointer]:
            - generic [ref=e382]:
              - generic [ref=e383]:
                - img "Kangri"
              - generic [ref=e384]: Kangri
            - img [ref=e385]
          - button "Kannada Kannada" [ref=e387] [cursor=pointer]:
            - generic [ref=e388]:
              - generic [ref=e389]:
                - img "Kannada"
              - generic [ref=e390]: Kannada
            - img [ref=e391]
          - button "Kashmiri Kashmiri" [ref=e393] [cursor=pointer]:
            - generic [ref=e394]:
              - generic [ref=e395]:
                - img "Kashmiri"
              - generic [ref=e396]: Kashmiri
            - img [ref=e397]
          - button "Konkani Konkani" [ref=e399] [cursor=pointer]:
            - generic [ref=e400]:
              - generic [ref=e401]:
                - img "Konkani"
              - generic [ref=e402]: Konkani
            - img [ref=e403]
          - button "Kumaoni Kumaoni" [ref=e405] [cursor=pointer]:
            - generic [ref=e406]:
              - generic [ref=e407]:
                - img "Kumaoni"
              - generic [ref=e408]: Kumaoni
            - img [ref=e409]
          - button "Kurukh Kurukh" [ref=e411] [cursor=pointer]:
            - generic [ref=e412]:
              - generic [ref=e413]:
                - img "Kurukh"
              - generic [ref=e414]: Kurukh
            - img [ref=e415]
          - button "Magahi Magahi" [ref=e417] [cursor=pointer]:
            - generic [ref=e418]:
              - generic [ref=e419]:
                - img "Magahi"
              - generic [ref=e420]: Magahi
            - img [ref=e421]
          - button "Maithili Maithili" [ref=e423] [cursor=pointer]:
            - generic [ref=e424]:
              - generic [ref=e425]:
                - img "Maithili"
              - generic [ref=e426]: Maithili
            - img [ref=e427]
          - button "Malayalam Malayalam" [ref=e429] [cursor=pointer]:
            - generic [ref=e430]:
              - generic [ref=e431]:
                - img "Malayalam"
              - generic [ref=e432]: Malayalam
            - img [ref=e433]
          - button "Manipuri Manipuri" [ref=e435] [cursor=pointer]:
            - generic [ref=e436]:
              - generic [ref=e437]:
                - img "Manipuri"
              - generic [ref=e438]: Manipuri
            - img [ref=e439]
          - button "Marathi Marathi" [ref=e441] [cursor=pointer]:
            - generic [ref=e442]:
              - generic [ref=e443]:
                - img "Marathi"
              - generic [ref=e444]: Marathi
            - img [ref=e445]
          - button "Marwadi Marwadi" [ref=e447] [cursor=pointer]:
            - generic [ref=e448]:
              - generic [ref=e449]:
                - img "Marwadi"
              - generic [ref=e450]: Marwadi
            - img [ref=e451]
          - button "Nepali Nepali" [ref=e453] [cursor=pointer]:
            - generic [ref=e454]:
              - generic [ref=e455]:
                - img "Nepali"
              - generic [ref=e456]: Nepali
            - img [ref=e457]
          - button "Nimadi Nimadi" [ref=e459] [cursor=pointer]:
            - generic [ref=e460]:
              - generic [ref=e461]:
                - img "Nimadi"
              - generic [ref=e462]: Nimadi
            - img [ref=e463]
          - button "Odia Odia" [ref=e465] [cursor=pointer]:
            - generic [ref=e466]:
              - generic [ref=e467]:
                - img "Odia"
              - generic [ref=e468]: Odia
            - img [ref=e469]
          - button "Pahari Mahasui Pahari Mahasui" [ref=e471] [cursor=pointer]:
            - generic [ref=e472]:
              - generic [ref=e473]:
                - img "Pahari Mahasui"
              - generic [ref=e474]: Pahari Mahasui
            - img [ref=e475]
          - button "Punjabi Punjabi" [ref=e477] [cursor=pointer]:
            - generic [ref=e478]:
              - generic [ref=e479]:
                - img "Punjabi"
              - generic [ref=e480]: Punjabi
            - img [ref=e481]
          - button "Rajasthani Rajasthani" [ref=e483] [cursor=pointer]:
            - generic [ref=e484]:
              - generic [ref=e485]:
                - img "Rajasthani"
              - generic [ref=e486]: Rajasthani
            - img [ref=e487]
          - button "Sanskrit Sanskrit" [ref=e489] [cursor=pointer]:
            - generic [ref=e490]:
              - generic [ref=e491]:
                - img "Sanskrit"
              - generic [ref=e492]: Sanskrit
            - img [ref=e493]
          - button "Santali Santali" [ref=e495] [cursor=pointer]:
            - generic [ref=e496]:
              - generic [ref=e497]:
                - img "Santali"
              - generic [ref=e498]: Santali
            - img [ref=e499]
          - button "Sindhi Sindhi" [ref=e501] [cursor=pointer]:
            - generic [ref=e502]:
              - generic [ref=e503]:
                - img "Sindhi"
              - generic [ref=e504]: Sindhi
            - img [ref=e505]
          - button "Surgujia Surgujia" [ref=e507] [cursor=pointer]:
            - generic [ref=e508]:
              - generic [ref=e509]:
                - img "Surgujia"
              - generic [ref=e510]: Surgujia
            - img [ref=e511]
          - button "Tamil Tamil" [ref=e513] [cursor=pointer]:
            - generic [ref=e514]:
              - generic [ref=e515]:
                - img "Tamil"
              - generic [ref=e516]: Tamil
            - img [ref=e517]
          - button "Telugu Telugu" [ref=e519] [cursor=pointer]:
            - generic [ref=e520]:
              - generic [ref=e521]:
                - img "Telugu"
              - generic [ref=e522]: Telugu
            - img [ref=e523]
          - button "Tulu Tulu" [ref=e525] [cursor=pointer]:
            - generic [ref=e526]:
              - generic [ref=e527]:
                - img "Tulu"
              - generic [ref=e528]: Tulu
            - img [ref=e529]
          - button "Urdu Urdu" [ref=e531] [cursor=pointer]:
            - generic [ref=e532]:
              - generic [ref=e533]:
                - img "Urdu"
              - generic [ref=e534]: Urdu
            - img [ref=e535]
          - button "Wagdi Wagdi" [ref=e537] [cursor=pointer]:
            - generic [ref=e538]:
              - generic [ref=e539]:
                - img "Wagdi"
              - generic [ref=e540]: Wagdi
            - img [ref=e541]
        - link "See the full list of languages supported by Shunya Labs" [ref=e544] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/models-languages/supported-languages
          - text: See the full list of languages supported by Shunya Labs
          - img [ref=e545]
    - contentinfo [ref=e547]:
      - generic [ref=e551]:
        - paragraph [ref=e552]: The fastest way to add voice AI to your products
        - paragraph [ref=e553]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e554]:
          - link "Go to Pricing page" [ref=e555] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e556] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e557]:
      - generic [ref=e558]:
        - generic [ref=e559]:
          - img "Shunya Labs" [ref=e560]
          - paragraph [ref=e561]: Shunya Labs, Inc.
        - generic [ref=e562]:
          - paragraph [ref=e563]: Product
          - list [ref=e564]:
            - listitem [ref=e565]:
              - link "Overview" [ref=e566] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e567]:
              - link "Models" [ref=e568] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e569]:
              - link "Voice Agents" [ref=e570] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e571]:
              - link "Speech Intelligence" [ref=e572] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e573]:
              - link "Audio Processing" [ref=e574] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e575]:
              - link "Deployment" [ref=e576] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e577]:
          - paragraph [ref=e578]: Models
          - list [ref=e579]:
            - listitem [ref=e580]:
              - link "Language Models" [ref=e581] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e582]:
              - link "Zero STT Indic" [ref=e583] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e584]:
              - link "Zero STT Codeswitch" [ref=e585] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e586]:
              - link "Specialised Models" [ref=e587] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e588]:
              - link "Zero STT Med" [ref=e589] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e590]:
              - link "On Device Models" [ref=e591] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e592]:
          - paragraph [ref=e593]: Solutions
          - list [ref=e594]:
            - listitem [ref=e595]:
              - link "Contact Centers" [ref=e596] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e597]:
              - link "Media & Entertainment" [ref=e598] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e599]:
              - link "Healthcare" [ref=e600] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e601]:
          - paragraph [ref=e602]: Resources
          - list [ref=e603]:
            - listitem [ref=e604]:
              - link "Blogs" [ref=e605] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e606]:
              - link "Benchmarks" [ref=e607] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e608]:
              - link "News & Media" [ref=e609] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e610]:
              - link "Patents" [ref=e611] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e612]:
              - link "Research" [ref=e613] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e615]:
          - link "Documentation" [ref=e616] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e618]:
          - listitem [ref=e619]:
            - link "About us" [ref=e620] [cursor=pointer]:
              - /url: /about
        - list [ref=e622]:
          - listitem [ref=e623]:
            - link "Pricing" [ref=e624] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e625]:
        - paragraph [ref=e626]: Follow us on
        - generic [ref=e627]:
          - link [ref=e628] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e629]
          - link [ref=e631] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e632]
          - link [ref=e634] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e635]
          - link [ref=e637] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e638]
      - generic [ref=e640]:
        - paragraph [ref=e641]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e642]:
          - link "Privacy" [ref=e643] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e644] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e645] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e646] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e647] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e648]
```

# Test source

```ts
  193 |         .filter((link) => isVisible(link))
  194 |         .map((link) => {
  195 |           const parts = (link.innerText || link.textContent || '')
  196 |             .split('\n')
  197 |             .map((part) => normalize(part))
  198 |             .filter(Boolean);
  199 |           return {
  200 |             label: parts[0] || '',
  201 |             description: parts.slice(1).join(' '),
  202 |             href: link.getAttribute('href') || '',
  203 |           };
  204 |         })
  205 |         .filter((item) => item.label && item.description);
  206 |     }, menuLabel);
  207 |   }
  208 | 
  209 |   async getFooterMenuStructure() {
  210 |     return this.page.evaluate(() => {
  211 |       const normalize = (value) =>
  212 |         (value || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();
  213 |       const isVisible = (element) => {
  214 |         if (!element) return false;
  215 |         const style = window.getComputedStyle(element);
  216 |         if (!style || style.visibility === 'hidden' || style.display === 'none') {
  217 |           return false;
  218 |         }
  219 |         const rect = element.getBoundingClientRect();
  220 |         return rect.width > 0 && rect.height > 0;
  221 |       };
  222 | 
  223 |       const footers = document.querySelectorAll('footer');
  224 |       const footer = footers[footers.length - 1];
  225 |       if (!footer) return { columns: {}, followUs: '', copyright: '' };
  226 | 
  227 |       const columns = {};
  228 |       const headings = Array.from(footer.querySelectorAll('p'))
  229 |         .filter((el) => isVisible(el))
  230 |         .map((el) => ({ element: el, text: normalize(el.textContent) }))
  231 |         .filter((item) => item.text.length > 0);
  232 | 
  233 |       for (const heading of headings) {
  234 |         const parent = heading.element.parentElement;
  235 |         if (!parent) continue;
  236 |         const list = parent.querySelector('ul');
  237 |         if (list) {
  238 |           const items = Array.from(list.querySelectorAll('li > a, li:not(:has(a))'))
  239 |             .filter((el) => isVisible(el))
  240 |             .map((el) => normalize(el.textContent))
  241 |             .filter(Boolean);
  242 |           if (items.length) {
  243 |             columns[heading.text] = items;
  244 |           }
  245 |         }
  246 |       }
  247 | 
  248 |       // Standalone links that appear as single-item columns
  249 |       const standaloneSelectors = [
  250 |         'a[href*="docs.shunyalabs"]',
  251 |         'a[href*="documentation"]',
  252 |         'a[href="/about"]',
  253 |         'a[href="/pricing"]',
  254 |       ];
  255 |       for (const sel of standaloneSelectors) {
  256 |         const link = footer.querySelector(sel);
  257 |         if (link && isVisible(link)) {
  258 |           const label = normalize(link.textContent);
  259 |           if (label && !columns[label]) {
  260 |             columns[label] = [label];
  261 |           }
  262 |         }
  263 |       }
  264 | 
  265 |       const followUs = Array.from(footer.querySelectorAll('p'))
  266 |         .map((el) => normalize(el.textContent))
  267 |         .find((text) => text.toLowerCase() === 'follow us on') || '';
  268 | 
  269 |       const copyright = Array.from(footer.querySelectorAll('p'))
  270 |         .map((el) => normalize(el.textContent))
  271 |         .find((text) => text.startsWith('©')) || '';
  272 | 
  273 |       return { columns, followUs, copyright };
  274 |     });
  275 |   }
  276 | 
  277 |   /**
  278 |    * Primary nav CTA — lands on the Contact Us page with the lead form.
  279 |    * Opens the drawer on small viewports first. Reloads once so Next.js App Router
  280 |    * navigation leaves inputs interactive (otherwise submit may never POST).
  281 |    */
  282 |   async navigateToContactViaContactSalesLink() {
  283 |     const nav = this.page.locator('nav');
  284 |     const width = this.page.viewportSize()?.width ?? 1920;
  285 | 
  286 |     if (width <= 768) {
  287 |       const menuToggle = nav.getByRole('button', { name: '☰' });
  288 |       await menuToggle.click();
  289 |     }
  290 | 
  291 |     const link = nav.getByRole('link', { name: 'Contact Sales', exact: true }).first();
  292 |     await link.scrollIntoViewIfNeeded();
> 293 |     await link.click();
      |                ^ TimeoutError: locator.click: Timeout 15000ms exceeded.
  294 | 
  295 |     await this.page.waitForURL(/\/contact(?:\?|$)/, { timeout: 15_000 });
  296 |     await this.page.reload({ waitUntil: 'domcontentloaded' });
  297 |     await this.page.waitForTimeout(750);
  298 |     await this.page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});
  299 |   }
  300 | }
  301 | 
```