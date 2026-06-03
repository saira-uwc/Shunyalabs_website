# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/homepage/homepage/homepage-sections.spec.js >> Homepage - major sections >> Live homepage exposes all primary marketing sections
- Location: tests/modules/homepage/homepage/homepage-sections.spec.js:21:3

# Error details

```
Error: Missing section matching /Custom Built/i

expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
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
        - heading "Voice AI on your terms" [level=1] [ref=e36]
        - heading "Foundation models to voice agents, complete voice AI stack." [level=2] [ref=e37]
        - text: Built for developers. Ready for enterprises.
      - main [ref=e40]:
        - generic [ref=e44]:
          - generic [ref=e48]:
            - button "Zero STT Indic" [ref=e49] [cursor=pointer]
            - button "Zero STT Codeswitch" [ref=e50] [cursor=pointer]
            - button "Zero STT Med" [ref=e51] [cursor=pointer]
            - button "Zero TTS Indic" [ref=e52] [cursor=pointer]
          - generic [ref=e53]:
            - generic [ref=e57]:
              - generic [ref=e59]:
                - generic [ref=e60]: Language
                - button "🇺🇸English" [ref=e63] [cursor=pointer]:
                  - generic [ref=e64]: 🇺🇸English
                  - generic:
                    - img
              - generic [ref=e66]:
                - generic [ref=e67]: Input Audio
                - generic [ref=e68]:
                  - generic [ref=e69]: Pre-recorded
                  - generic [ref=e72]:
                    - button "Customer Support Call" [ref=e73] [cursor=pointer]
                    - button "Podcast" [ref=e74] [cursor=pointer]
                    - button "Upload your file" [ref=e75] [cursor=pointer]
              - generic [ref=e77]:
                - generic [ref=e79]: or
                - generic [ref=e80]:
                  - generic [ref=e82]: Live recording
                  - button "Start Speaking" [ref=e83] [cursor=pointer]:
                    - generic [ref=e84]: Start Speaking
            - generic [ref=e88]:
              - generic [ref=e89]:
                - button "Play audio" [ref=e92] [cursor=pointer]:
                  - img [ref=e93]
                - button "No conversation to copy" [disabled] [ref=e160]:
                  - img [ref=e161]
              - generic [ref=e170]:
                - img [ref=e173]
                - paragraph [ref=e177]: Select your input language, then pick a sample, upload a file, or start speaking to capture live audio.
      - generic [ref=e179]:
        - link "Cloud API Production Ready →" [ref=e180] [cursor=pointer]:
          - /url: /pricing
          - generic [ref=e181]:
            - generic [ref=e182]: Cloud API
            - generic [ref=e183]: Production Ready
          - generic [ref=e184]: →
        - link "Developer Documentation Local Deployment →" [ref=e185] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/overview
          - generic [ref=e186]:
            - generic [ref=e187]: Developer Documentation
            - generic [ref=e188]: Local Deployment
          - generic [ref=e189]: →
        - link "Hugging Face Open Models →" [ref=e190] [cursor=pointer]:
          - /url: https://huggingface.co/shunyalabs
          - generic [ref=e191]:
            - generic [ref=e192]: Hugging Face
            - generic [ref=e193]: Open Models
          - generic [ref=e194]: →
      - generic [ref=e196]:
        - heading "Custom Models for Modular Voice Agents" [level=2] [ref=e197]
        - generic [ref=e198]:
          - generic [ref=e199]:
            - generic [ref=e201] [cursor=pointer]:
              - heading "Custom Models" [level=3] [ref=e203]
              - paragraph [ref=e204]: STT, TTS, and SLMs built for specific use cases.
            - generic [ref=e205] [cursor=pointer]:
              - heading "Intelligence Layer" [level=3] [ref=e207]
              - paragraph [ref=e208]: SLMs for intent recognition, entity extraction, and sentiment analysis.
            - generic [ref=e209] [cursor=pointer]:
              - heading "Orchestration Framework" [level=3] [ref=e211]
              - paragraph [ref=e212]: Easy to configure business rules, prompts, and conversation flows.
            - generic [ref=e213] [cursor=pointer]:
              - heading "Channel Integrations" [level=3] [ref=e215]
              - paragraph [ref=e216]: Telephony, web, mobile, and messaging connections.
            - generic [ref=e217] [cursor=pointer]:
              - heading "Analytics and Observability" [level=3] [ref=e219]
              - paragraph [ref=e220]: Performance tracking, debugging, and optimization.
          - img "Default Architecture" [ref=e223]
      - generic [ref=e225]:
        - generic [ref=e226]:
          - heading "Vāķ" [level=2] [ref=e227]
          - paragraph [ref=e228]: Real-Time Speech-to-Speech Translation · 55 Languages · 2,970 Pairs
        - generic [ref=e229]:
          - generic [ref=e231]:
            - generic [ref=e232]: SOURCE
            - generic [ref=e233]: Hindi
            - generic [ref=e234]: →
            - generic [ref=e235]: DESTINATION
            - generic [ref=e236]: Indian English
          - generic [ref=e237]:
            - generic [ref=e239]:
              - generic [ref=e240]:
                - generic [ref=e242]: Hindi
                - paragraph [ref=e244]: Tap mic to speak, or type and press Enter to translate
              - generic [ref=e247]:
                - generic [ref=e249]: Indian English
                - paragraph [ref=e251]: Translation will appear here
            - generic [ref=e252]:
              - generic [ref=e253]:
                - generic [ref=e254]:
                  - generic [ref=e255]: Source
                  - button "हिन्दी (Hindi)" [ref=e256] [cursor=pointer]:
                    - generic [ref=e257]: हिन्दी (Hindi)
                    - img [ref=e258]
                - button "Swap languages" [ref=e260] [cursor=pointer]:
                  - img [ref=e261]
                - generic [ref=e264]:
                  - generic [ref=e265]: Destination
                  - button "Indian English" [ref=e266] [cursor=pointer]:
                    - generic [ref=e267]: Indian English
                    - img [ref=e268]
                - generic [ref=e270]:
                  - generic [ref=e271]: Speaker
                  - button "English ⬤ Nisha ♀" [ref=e272] [cursor=pointer]:
                    - generic [ref=e273]:
                      - generic [ref=e274]: English
                      - generic [ref=e275]: ⬤
                      - generic [ref=e276]: Nisha
                      - generic [ref=e277]: ♀
                    - img [ref=e278]
                - generic [ref=e280]:
                  - generic [ref=e281]: Emotions
                  - button "😐 Neutral" [ref=e282] [cursor=pointer]:
                    - generic [ref=e283]: 😐 Neutral
                    - img [ref=e284]
              - generic [ref=e287]:
                - textbox "Type text in source language to translate..." [ref=e289]
                - button "Press to speak" [ref=e290] [cursor=pointer]:
                  - img [ref=e291]
            - generic [ref=e294]:
              - generic [ref=e295]: 55 Languages
              - generic [ref=e297]: 46 Speakers
              - generic [ref=e299]: 11 Emotions
    - generic [ref=e302]:
      - heading "Understand Everyone. Speak to Anyone" [level=2] [ref=e303]
      - paragraph [ref=e304]: We solve the fundamental problems that make voice AI expensive, slow, and insecure.
      - generic [ref=e305]:
        - generic [ref=e306]:
          - paragraph [ref=e307]: "0"
          - paragraph [ref=e308]: Language Supported
        - generic [ref=e309]:
          - paragraph [ref=e310]: 0.0%
          - paragraph [ref=e311]: Global Population Coverage
        - generic [ref=e312]:
          - paragraph [ref=e313]: 0K
          - paragraph [ref=e314]: Minimum Native Speakers
    - generic [ref=e315]:
      - img [ref=e317]
      - generic [ref=e321]:
        - heading "Industry-leading standards for enterprise security" [level=2] [ref=e322]
        - generic [ref=e323]:
          - generic [ref=e324]:
            - img "SOC 2 Type II" [ref=e326]
            - heading "SOC 2 Type II" [level=3] [ref=e327]
            - paragraph [ref=e328]: Trusted where privacy matters most — SOC 2 Type II certified.
          - generic [ref=e329]:
            - img "ISO 27001" [ref=e331]
            - heading "ISO 27001" [level=3] [ref=e332]
            - paragraph [ref=e333]: Privacy and compliance built in with our ISO/IEC 27001:2022 accreditation.
          - generic [ref=e334]:
            - img "HIPAA" [ref=e336]
            - heading "HIPAA" [level=3] [ref=e337]
            - paragraph [ref=e338]: Fully compliant with the health insurance portability and accountability act.
          - generic [ref=e339]:
            - img "Two-Sided Encryption" [ref=e341]
            - heading "Two-Sided Encryption" [level=3] [ref=e342]
            - paragraph [ref=e343]: Data is encrypted in transit and at rest—TLS for every connection, AES-256 for storage, with keys managed in your cloud.
    - generic [ref=e344]:
      - generic [ref=e346]:
        - paragraph [ref=e347]: Language Regions
        - paragraph [ref=e348]: Explore our comprehensive language coverage across the globe
      - generic [ref=e349]:
        - generic [ref=e350]:
          - button "Assamese Assamese" [ref=e351] [cursor=pointer]:
            - generic [ref=e352]:
              - generic [ref=e353]:
                - img "Assamese"
              - generic [ref=e354]: Assamese
            - img [ref=e355]
          - button "Awadhi Awadhi" [ref=e357] [cursor=pointer]:
            - generic [ref=e358]:
              - generic [ref=e359]:
                - img "Awadhi"
              - generic [ref=e360]: Awadhi
            - img [ref=e361]
          - button "Bagri Bagri" [ref=e363] [cursor=pointer]:
            - generic [ref=e364]:
              - generic [ref=e365]:
                - img "Bagri"
              - generic [ref=e366]: Bagri
            - img [ref=e367]
          - button "Bengali Bengali" [ref=e369] [cursor=pointer]:
            - generic [ref=e370]:
              - generic [ref=e371]:
                - img "Bengali"
              - generic [ref=e372]: Bengali
            - img [ref=e373]
          - button "Bhili Bhili" [ref=e375] [cursor=pointer]:
            - generic [ref=e376]:
              - generic [ref=e377]:
                - img "Bhili"
              - generic [ref=e378]: Bhili
            - img [ref=e379]
          - button "Bhojpuri Bhojpuri" [ref=e381] [cursor=pointer]:
            - generic [ref=e382]:
              - generic [ref=e383]:
                - img "Bhojpuri"
              - generic [ref=e384]: Bhojpuri
            - img [ref=e385]
          - button "Bodo Bodo" [ref=e387] [cursor=pointer]:
            - generic [ref=e388]:
              - generic [ref=e389]:
                - img "Bodo"
              - generic [ref=e390]: Bodo
            - img [ref=e391]
          - button "Braj Braj" [ref=e393] [cursor=pointer]:
            - generic [ref=e394]:
              - generic [ref=e395]:
                - img "Braj"
              - generic [ref=e396]: Braj
            - img [ref=e397]
          - button "Bundeli Bundeli" [ref=e399] [cursor=pointer]:
            - generic [ref=e400]:
              - generic [ref=e401]:
                - img "Bundeli"
              - generic [ref=e402]: Bundeli
            - img [ref=e403]
          - button "Chhattisgarhi Chhattisgarhi" [ref=e405] [cursor=pointer]:
            - generic [ref=e406]:
              - generic [ref=e407]:
                - img "Chhattisgarhi"
              - generic [ref=e408]: Chhattisgarhi
            - img [ref=e409]
          - button "Dogri Dogri" [ref=e411] [cursor=pointer]:
            - generic [ref=e412]:
              - generic [ref=e413]:
                - img "Dogri"
              - generic [ref=e414]: Dogri
            - img [ref=e415]
          - button "English English" [ref=e417] [cursor=pointer]:
            - generic [ref=e418]:
              - generic [ref=e419]:
                - img "English"
              - generic [ref=e420]: English
            - img [ref=e421]
          - button "Garhwali Garhwali" [ref=e423] [cursor=pointer]:
            - generic [ref=e424]:
              - generic [ref=e425]:
                - img "Garhwali"
              - generic [ref=e426]: Garhwali
            - img [ref=e427]
          - button "Garo Garo" [ref=e429] [cursor=pointer]:
            - generic [ref=e430]:
              - generic [ref=e431]:
                - img "Garo"
              - generic [ref=e432]: Garo
            - img [ref=e433]
          - button "Gujarati Gujarati" [ref=e435] [cursor=pointer]:
            - generic [ref=e436]:
              - generic [ref=e437]:
                - img "Gujarati"
              - generic [ref=e438]: Gujarati
            - img [ref=e439]
          - button "Harouti Harouti" [ref=e441] [cursor=pointer]:
            - generic [ref=e442]:
              - generic [ref=e443]:
                - img "Harouti"
              - generic [ref=e444]: Harouti
            - img [ref=e445]
          - button "Haryanvi Haryanvi" [ref=e447] [cursor=pointer]:
            - generic [ref=e448]:
              - generic [ref=e449]:
                - img "Haryanvi"
              - generic [ref=e450]: Haryanvi
            - img [ref=e451]
          - button "Hindi Hindi" [ref=e453] [cursor=pointer]:
            - generic [ref=e454]:
              - generic [ref=e455]:
                - img "Hindi"
              - generic [ref=e456]: Hindi
            - img [ref=e457]
          - button "Kangri Kangri" [ref=e459] [cursor=pointer]:
            - generic [ref=e460]:
              - generic [ref=e461]:
                - img "Kangri"
              - generic [ref=e462]: Kangri
            - img [ref=e463]
          - button "Kannada Kannada" [ref=e465] [cursor=pointer]:
            - generic [ref=e466]:
              - generic [ref=e467]:
                - img "Kannada"
              - generic [ref=e468]: Kannada
            - img [ref=e469]
          - button "Kashmiri Kashmiri" [ref=e471] [cursor=pointer]:
            - generic [ref=e472]:
              - generic [ref=e473]:
                - img "Kashmiri"
              - generic [ref=e474]: Kashmiri
            - img [ref=e475]
          - button "Konkani Konkani" [ref=e477] [cursor=pointer]:
            - generic [ref=e478]:
              - generic [ref=e479]:
                - img "Konkani"
              - generic [ref=e480]: Konkani
            - img [ref=e481]
          - button "Kumaoni Kumaoni" [ref=e483] [cursor=pointer]:
            - generic [ref=e484]:
              - generic [ref=e485]:
                - img "Kumaoni"
              - generic [ref=e486]: Kumaoni
            - img [ref=e487]
          - button "Kurukh Kurukh" [ref=e489] [cursor=pointer]:
            - generic [ref=e490]:
              - generic [ref=e491]:
                - img "Kurukh"
              - generic [ref=e492]: Kurukh
            - img [ref=e493]
          - button "Magahi Magahi" [ref=e495] [cursor=pointer]:
            - generic [ref=e496]:
              - generic [ref=e497]:
                - img "Magahi"
              - generic [ref=e498]: Magahi
            - img [ref=e499]
          - button "Maithili Maithili" [ref=e501] [cursor=pointer]:
            - generic [ref=e502]:
              - generic [ref=e503]:
                - img "Maithili"
              - generic [ref=e504]: Maithili
            - img [ref=e505]
          - button "Malayalam Malayalam" [ref=e507] [cursor=pointer]:
            - generic [ref=e508]:
              - generic [ref=e509]:
                - img "Malayalam"
              - generic [ref=e510]: Malayalam
            - img [ref=e511]
          - button "Manipuri Manipuri" [ref=e513] [cursor=pointer]:
            - generic [ref=e514]:
              - generic [ref=e515]:
                - img "Manipuri"
              - generic [ref=e516]: Manipuri
            - img [ref=e517]
          - button "Marathi Marathi" [ref=e519] [cursor=pointer]:
            - generic [ref=e520]:
              - generic [ref=e521]:
                - img "Marathi"
              - generic [ref=e522]: Marathi
            - img [ref=e523]
          - button "Marwadi Marwadi" [ref=e525] [cursor=pointer]:
            - generic [ref=e526]:
              - generic [ref=e527]:
                - img "Marwadi"
              - generic [ref=e528]: Marwadi
            - img [ref=e529]
          - button "Nepali Nepali" [ref=e531] [cursor=pointer]:
            - generic [ref=e532]:
              - generic [ref=e533]:
                - img "Nepali"
              - generic [ref=e534]: Nepali
            - img [ref=e535]
          - button "Nimadi Nimadi" [ref=e537] [cursor=pointer]:
            - generic [ref=e538]:
              - generic [ref=e539]:
                - img "Nimadi"
              - generic [ref=e540]: Nimadi
            - img [ref=e541]
          - button "Odia Odia" [ref=e543] [cursor=pointer]:
            - generic [ref=e544]:
              - generic [ref=e545]:
                - img "Odia"
              - generic [ref=e546]: Odia
            - img [ref=e547]
          - button "Pahari Mahasui Pahari Mahasui" [ref=e549] [cursor=pointer]:
            - generic [ref=e550]:
              - generic [ref=e551]:
                - img "Pahari Mahasui"
              - generic [ref=e552]: Pahari Mahasui
            - img [ref=e553]
          - button "Punjabi Punjabi" [ref=e555] [cursor=pointer]:
            - generic [ref=e556]:
              - generic [ref=e557]:
                - img "Punjabi"
              - generic [ref=e558]: Punjabi
            - img [ref=e559]
          - button "Rajasthani Rajasthani" [ref=e561] [cursor=pointer]:
            - generic [ref=e562]:
              - generic [ref=e563]:
                - img "Rajasthani"
              - generic [ref=e564]: Rajasthani
            - img [ref=e565]
          - button "Sanskrit Sanskrit" [ref=e567] [cursor=pointer]:
            - generic [ref=e568]:
              - generic [ref=e569]:
                - img "Sanskrit"
              - generic [ref=e570]: Sanskrit
            - img [ref=e571]
          - button "Santali Santali" [ref=e573] [cursor=pointer]:
            - generic [ref=e574]:
              - generic [ref=e575]:
                - img "Santali"
              - generic [ref=e576]: Santali
            - img [ref=e577]
          - button "Sindhi Sindhi" [ref=e579] [cursor=pointer]:
            - generic [ref=e580]:
              - generic [ref=e581]:
                - img "Sindhi"
              - generic [ref=e582]: Sindhi
            - img [ref=e583]
          - button "Surgujia Surgujia" [ref=e585] [cursor=pointer]:
            - generic [ref=e586]:
              - generic [ref=e587]:
                - img "Surgujia"
              - generic [ref=e588]: Surgujia
            - img [ref=e589]
          - button "Tamil Tamil" [ref=e591] [cursor=pointer]:
            - generic [ref=e592]:
              - generic [ref=e593]:
                - img "Tamil"
              - generic [ref=e594]: Tamil
            - img [ref=e595]
          - button "Telugu Telugu" [ref=e597] [cursor=pointer]:
            - generic [ref=e598]:
              - generic [ref=e599]:
                - img "Telugu"
              - generic [ref=e600]: Telugu
            - img [ref=e601]
          - button "Tulu Tulu" [ref=e603] [cursor=pointer]:
            - generic [ref=e604]:
              - generic [ref=e605]:
                - img "Tulu"
              - generic [ref=e606]: Tulu
            - img [ref=e607]
          - button "Urdu Urdu" [ref=e609] [cursor=pointer]:
            - generic [ref=e610]:
              - generic [ref=e611]:
                - img "Urdu"
              - generic [ref=e612]: Urdu
            - img [ref=e613]
          - button "Wagdi Wagdi" [ref=e615] [cursor=pointer]:
            - generic [ref=e616]:
              - generic [ref=e617]:
                - img "Wagdi"
              - generic [ref=e618]: Wagdi
            - img [ref=e619]
        - link "See the full list of languages supported by Shunya Labs" [ref=e622] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/models-languages/supported-languages
          - text: See the full list of languages supported by Shunya Labs
          - img [ref=e623]
    - contentinfo [ref=e625]:
      - generic [ref=e629]:
        - paragraph [ref=e630]: The fastest way to add voice AI to your products
        - paragraph [ref=e631]: One platform for speech in and speech out—secure by design, built to scale.
        - generic [ref=e632]:
          - link "Go to Pricing page" [ref=e633] [cursor=pointer]:
            - /url: /pricing
            - text: Get Started
          - link "Contact Sales" [ref=e634] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e635]:
      - generic [ref=e636]:
        - generic [ref=e637]:
          - img "Shunya Labs" [ref=e638]
          - paragraph [ref=e639]: Shunya Labs, Inc.
        - generic [ref=e640]:
          - paragraph [ref=e641]: Product
          - list [ref=e642]:
            - listitem [ref=e643]:
              - link "Overview" [ref=e644] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e645]:
              - link "Models" [ref=e646] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e647]:
              - link "Voice Agents" [ref=e648] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e649]:
              - link "Speech Intelligence" [ref=e650] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e651]:
              - link "Audio Processing" [ref=e652] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e653]:
              - link "Deployment" [ref=e654] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e655]:
          - paragraph [ref=e656]: Models
          - list [ref=e657]:
            - listitem [ref=e658]:
              - link "Language Models" [ref=e659] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e660]:
              - link "Zero STT Indic" [ref=e661] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e662]:
              - link "Zero STT Codeswitch" [ref=e663] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e664]:
              - link "Specialised Models" [ref=e665] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e666]:
              - link "Zero STT Med" [ref=e667] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e668]:
              - link "On Device Models" [ref=e669] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e670]:
          - paragraph [ref=e671]: Solutions
          - list [ref=e672]:
            - listitem [ref=e673]:
              - link "Contact Centers" [ref=e674] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e675]:
              - link "Media & Entertainment" [ref=e676] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e677]:
              - link "Healthcare" [ref=e678] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e679]:
          - paragraph [ref=e680]: Resources
          - list [ref=e681]:
            - listitem [ref=e682]:
              - link "Blogs" [ref=e683] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e684]:
              - link "Benchmarks" [ref=e685] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e686]:
              - link "News & Media" [ref=e687] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e688]:
              - link "Patents" [ref=e689] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e690]:
              - link "Research" [ref=e691] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e693]:
          - link "Documentation" [ref=e694] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e696]:
          - listitem [ref=e697]:
            - link "About us" [ref=e698] [cursor=pointer]:
              - /url: /about
        - list [ref=e700]:
          - listitem [ref=e701]:
            - link "Pricing" [ref=e702] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e703]:
        - paragraph [ref=e704]: Follow us on
        - generic [ref=e705]:
          - link [ref=e706] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e707]
          - link [ref=e709] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e710]
          - link [ref=e712] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e713]
          - link [ref=e715] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e716]
      - generic [ref=e718]:
        - paragraph [ref=e719]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e720]:
          - link "Privacy" [ref=e721] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e722] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e723] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e724] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e725] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e726]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
  3  | import { createResultWriter } from '../../../../utils/result-writer.js';
  4  | import { MODULE_TEST_TIMEOUT } from '../../../../utils/page-readiness.js';
  5  | 
  6  | const REQUIRED_SECTIONS = [
  7  |   /Voice AI on your terms/i,
  8  |   /Custom Built/i,
  9  |   /Vāk|Vak/i,
  10 |   /Understand Everyone/i,
  11 |   /Industry-Leading Standards for Enterprise Security/i,
  12 |   /What Sets Us Apart/i,
  13 |   /Start Building with Shunya Labs/i,
  14 |   /Language Regions/i,
  15 |   /fastest way to add voice AI/i,
  16 | ];
  17 | 
  18 | test.describe('Homepage - major sections', () => {
  19 |   test.setTimeout(MODULE_TEST_TIMEOUT);
  20 | 
  21 |   test('Live homepage exposes all primary marketing sections', async ({ page }) => {
  22 |     const homepage = new HomepagePage(page);
  23 |     await homepage.open();
  24 | 
  25 |     const { writeResult } = await createResultWriter({
  26 |       moduleName: 'Homepage',
  27 |       reportFileName: 'module-pages-report.csv',
  28 |     });
  29 | 
  30 |     const headings = await homepage.getHomepageSectionHeadings();
  31 |     const body = await page.locator('body').innerText();
  32 | 
  33 |     for (const pattern of REQUIRED_SECTIONS) {
  34 |       const inHeadings = headings.some((h) => pattern.test(h));
  35 |       const inBody = pattern.test(body);
> 36 |       expect(inHeadings || inBody, `Missing section matching ${pattern}`).toBe(true);
     |                                                                           ^ Error: Missing section matching /Custom Built/i
  37 |     }
  38 | 
  39 |     await writeResult('Homepage major sections', 'PASS', `${REQUIRED_SECTIONS.length} sections present`);
  40 |   });
  41 | });
  42 | 
```