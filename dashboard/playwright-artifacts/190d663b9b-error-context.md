# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/news-media/design.spec.js >> Resources - News & Media design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [images] Image "Media Logo" failed to load (was previously loaded, now broken)

expect(received).toBeTruthy()

Received: null
```

```
Error: [images] Image "Media Logo" failed to load (was previously loaded, now broken)

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "https://www.facebook.com/people/ShunyaLabsAI/61577801851308/" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 3 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 3
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
    - generic [ref=e37]:
      - heading "Media Coverage" [level=1] [ref=e38]
      - heading "Featuring ShunyaLabs and our leadership in AI infrastructure, voice technology, and edge computing" [level=2] [ref=e39]
    - generic [ref=e40]:
      - link "Media Logo May 11, 2026 Shunya Labs introduces 'Vak' voice AI system for multilingual India Shunya Labs introduces Vāk, a voice AI system purpose-built for multilingual India, supporting real-time speech recognition across Indic languages. Read Full Article" [ref=e41] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/amp/news/industry/shunya-labs-introduces-vak-voice-ai-system-for-multilingual-india/131015824
        - generic [ref=e42]:
          - img "Media Logo" [ref=e44]
          - paragraph [ref=e45]: May 11, 2026
          - generic [ref=e46]:
            - heading "Shunya Labs introduces 'Vak' voice AI system for multilingual India" [level=3] [ref=e47]
            - paragraph [ref=e48]: Shunya Labs introduces Vāk, a voice AI system purpose-built for multilingual India, supporting real-time speech recognition across Indic languages.
            - button "Read Full Article" [ref=e50]:
              - text: Read Full Article
              - img [ref=e51]
      - link "Media Logo Apr 29, 2026 What enterprises get wrong about AI—and what finally work An enterprise perspective on what companies commonly get wrong about AI adoption — and the approaches that actually deliver results. Read Full Article" [ref=e53] [cursor=pointer]:
        - /url: https://etedge-insights.com/technology/artificial-intelligence/what-enterprises-get-wrong-about-ai-and-what-finally-work/?amp=1
        - generic [ref=e54]:
          - img "Media Logo" [ref=e56]
          - paragraph [ref=e57]: Apr 29, 2026
          - generic [ref=e58]:
            - heading "What enterprises get wrong about AI—and what finally work" [level=3] [ref=e59]
            - paragraph [ref=e60]: An enterprise perspective on what companies commonly get wrong about AI adoption — and the approaches that actually deliver results.
            - button "Read Full Article" [ref=e62]:
              - text: Read Full Article
              - img [ref=e63]
      - link "Media Logo Apr 17, 2026 Shunya Labs launches unified voice AI localisation platform Shunya Labs launches a unified voice AI localisation platform enabling end-to-end dubbing, translation, and multilingual content at scale. Read Full Article" [ref=e65] [cursor=pointer]:
        - /url: https://www.campaignindia.in/article/shunya-labs-launches-unified-voice-ai-localisation-platform/46481dkwezbe46ws5abfs2c2dt
        - generic [ref=e66]:
          - img "Media Logo" [ref=e68]
          - paragraph [ref=e69]: Apr 17, 2026
          - generic [ref=e70]:
            - heading "Shunya Labs launches unified voice AI localisation platform" [level=3] [ref=e71]
            - paragraph [ref=e72]: Shunya Labs launches a unified voice AI localisation platform enabling end-to-end dubbing, translation, and multilingual content at scale.
            - button "Read Full Article" [ref=e74]:
              - text: Read Full Article
              - img [ref=e75]
      - link "Media Logo Apr 9, 2026 Shunya Labs Launches End-to-End Voice AI Platform for Dubbing, Translation and Multilingual Content Localisation Shunya Labs launches an end-to-end voice AI platform built for dubbing, translation, and multilingual content localisation at scale. Read Full Article" [ref=e77] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-launches-end-to-end-voice-ai-platform-for-dubbing-translation-and-multilingual-content-localisation/
        - generic [ref=e78]:
          - img "Media Logo" [ref=e80]
          - paragraph [ref=e81]: Apr 9, 2026
          - generic [ref=e82]:
            - heading "Shunya Labs Launches End-to-End Voice AI Platform for Dubbing, Translation and Multilingual Content Localisation" [level=3] [ref=e83]
            - paragraph [ref=e84]: Shunya Labs launches an end-to-end voice AI platform built for dubbing, translation, and multilingual content localisation at scale.
            - button "Read Full Article" [ref=e86]:
              - text: Read Full Article
              - img [ref=e87]
      - link "Media Logo Apr 9, 2026 Tech and gadget launches today (April 09, 2026) Indian Express covers today's top tech and gadget launches including Shunya Labs among the notable announcements. Read Full Article" [ref=e89] [cursor=pointer]:
        - /url: https://indianexpress.com/article/technology/tech-news-technology/tech-and-gadget-launches-today-april-09-2026-vivo-v70-fe-logitech-pro-x2-superstrike-and-more-10627858/
        - generic [ref=e90]:
          - img "Media Logo" [ref=e92]
          - paragraph [ref=e93]: Apr 9, 2026
          - generic [ref=e94]:
            - heading "Tech and gadget launches today (April 09, 2026)" [level=3] [ref=e95]
            - paragraph [ref=e96]: Indian Express covers today's top tech and gadget launches including Shunya Labs among the notable announcements.
            - button "Read Full Article" [ref=e98]:
              - text: Read Full Article
              - img [ref=e99]
      - link "Media Logo Mar 30, 2026 Indian startups turn to small language models to solve for efficiency, privacy, cost Indian startups are increasingly turning to small language models to solve for efficiency, privacy, and cost challenges. Read Full Article" [ref=e101] [cursor=pointer]:
        - /url: https://m.economictimes.com/tech/startups/indian-startups-turn-to-small-languages-models-to-solve-for-efficiency-privacy-cost/amp_articleshow/129884791.cms
        - generic [ref=e102]:
          - img "Media Logo" [ref=e104]
          - paragraph [ref=e105]: Mar 30, 2026
          - generic [ref=e106]:
            - heading "Indian startups turn to small language models to solve for efficiency, privacy, cost" [level=3] [ref=e107]
            - paragraph [ref=e108]: Indian startups are increasingly turning to small language models to solve for efficiency, privacy, and cost challenges.
            - button "Read Full Article" [ref=e110]:
              - text: Read Full Article
              - img [ref=e111]
      - link "Media Logo Mar 26, 2026 Shunya Labs unveils AI-driven voice intelligence platform for contact centre operations Shunya Labs unveils an AI-powered voice intelligence platform aimed at revolutionizing contact center operations. Read Full Article" [ref=e113] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/news/industry/revolutionizing-contact-centers-shunya-labs-launches-ai-powered-voice-intelligence-platform/129816076
        - generic [ref=e114]:
          - img "Media Logo" [ref=e116]
          - paragraph [ref=e117]: Mar 26, 2026
          - generic [ref=e118]:
            - heading "Shunya Labs unveils AI-driven voice intelligence platform for contact centre operations" [level=3] [ref=e119]
            - paragraph [ref=e120]: Shunya Labs unveils an AI-powered voice intelligence platform aimed at revolutionizing contact center operations.
            - button "Read Full Article" [ref=e122]:
              - text: Read Full Article
              - img [ref=e123]
      - 'link "Media Logo Mar 26, 2026 Top Startup News Today: India''s Deeptech Moment Is Here & Startups Are Leading the Charge India''s deeptech moment is here and startups are leading the charge — featuring Shunya Labs among the top startup news today. Read Full Article" [ref=e125] [cursor=pointer]':
        - /url: https://www.tice.news/tice-trending/top-startup-news-today-indias-deeptech-moment-is-here-and-startups-are-leading-the-charge-11264947
        - generic [ref=e126]:
          - img "Media Logo" [ref=e128]
          - paragraph [ref=e129]: Mar 26, 2026
          - generic [ref=e130]:
            - 'heading "Top Startup News Today: India''s Deeptech Moment Is Here & Startups Are Leading the Charge" [level=3] [ref=e131]'
            - paragraph [ref=e132]: India's deeptech moment is here and startups are leading the charge — featuring Shunya Labs among the top startup news today.
            - button "Read Full Article" [ref=e134]:
              - text: Read Full Article
              - img [ref=e135]
      - link "Media Logo Mar 25, 2026 Shunya Labs Launches Real-Time Voice Intelligence Platform for the Next Generation of Contact Centres Shunya Labs launches a real-time voice intelligence platform purpose-built for the next generation of contact centre operations. Read Full Article" [ref=e137] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-launches-real-time-voice-intelligence-platform-for-the-next-generation-of-contact-centres/
        - generic [ref=e138]:
          - img "Media Logo" [ref=e140]
          - paragraph [ref=e141]: Mar 25, 2026
          - generic [ref=e142]:
            - heading "Shunya Labs Launches Real-Time Voice Intelligence Platform for the Next Generation of Contact Centres" [level=3] [ref=e143]
            - paragraph [ref=e144]: Shunya Labs launches a real-time voice intelligence platform purpose-built for the next generation of contact centre operations.
            - button "Read Full Article" [ref=e146]:
              - text: Read Full Article
              - img [ref=e147]
      - 'link "Media Logo Feb 26, 2026 कमांड के साथ आपका मूड भी पहचानेगा यह AI! कैंसर से जंग के ... Success Story Ritu Mehrotra Shunyaa Labs: भारत की शून्य लैब्स ने वॉइस AI इंफ्रास्ट्रक्चर में ऐसा इतिहास रचा है. Read Full Article" [ref=e149] [cursor=pointer]':
        - /url: https://hindi.news18.com/news/delhi/cancer-survivor-idea-ritu-mehrotra-shunyaa-labs-voice-ai-mood-detection-200-languages-local18-ws-l-10222482.html
        - generic [ref=e150]:
          - img "Media Logo" [ref=e152]
          - paragraph [ref=e153]: Feb 26, 2026
          - generic [ref=e154]:
            - heading "कमांड के साथ आपका मूड भी पहचानेगा यह AI! कैंसर से जंग के ..." [level=3] [ref=e155]
            - paragraph [ref=e156]: "Success Story Ritu Mehrotra Shunyaa Labs: भारत की शून्य लैब्स ने वॉइस AI इंफ्रास्ट्रक्चर में ऐसा इतिहास रचा है."
            - button "Read Full Article" [ref=e158]:
              - text: Read Full Article
              - img [ref=e159]
      - 'link "Media Logo Feb 19, 2026 India must build sovereign infra for artificial intelligence: Experts The time is ripe for India to bring an ‘artificial intelligence'' infrastructure on the likes of digital public ... Read Full Article" [ref=e161] [cursor=pointer]':
        - /url: https://www.tribuneindia.com/news/india/india-must-build-sovereign-infra-for-artificial-intelligence-experts/amp
        - generic [ref=e162]:
          - img "Media Logo" [ref=e164]
          - paragraph [ref=e165]: Feb 19, 2026
          - generic [ref=e166]:
            - 'heading "India must build sovereign infra for artificial intelligence: Experts" [level=3] [ref=e167]'
            - paragraph [ref=e168]: The time is ripe for India to bring an ‘artificial intelligence' infrastructure on the likes of digital public ...
            - button "Read Full Article" [ref=e170]:
              - text: Read Full Article
              - img [ref=e171]
      - link "Media Logo Feb 19, 2026 Shunya Labs, in partnership with Nasscom, Launches Vāķ, India’s ... Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ... Read Full Article" [ref=e173] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-in-partnership-with-nasscom-launches-vak-indias-largest-open-weight-voice-ai-across-55-languages/
        - generic [ref=e174]:
          - img "Media Logo" [ref=e176]
          - paragraph [ref=e177]: Feb 19, 2026
          - generic [ref=e178]:
            - heading "Shunya Labs, in partnership with Nasscom, Launches Vāķ, India’s ..." [level=3] [ref=e179]
            - paragraph [ref=e180]: Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ...
            - button "Read Full Article" [ref=e182]:
              - text: Read Full Article
              - img [ref=e183]
      - link "Media Logo Feb 18, 2026 Shunya Labs Unveils Real-Time AI Translation Model for ... Launch Vāķ, a real-time voice translation model for 55 Indian languages, at India AI Impact Summit 2026. Read Full Article" [ref=e185] [cursor=pointer]:
        - /url: https://analyticsindiamag.com/ai-news/shunya-labs-unveils-real-time-ai-translation-model-for-55-indian-languages
        - generic [ref=e186]:
          - img "Media Logo" [ref=e188]
          - paragraph [ref=e189]: Feb 18, 2026
          - generic [ref=e190]:
            - heading "Shunya Labs Unveils Real-Time AI Translation Model for ..." [level=3] [ref=e191]
            - paragraph [ref=e192]: Launch Vāķ, a real-time voice translation model for 55 Indian languages, at India AI Impact Summit 2026.
            - button "Read Full Article" [ref=e194]:
              - text: Read Full Article
              - img [ref=e195]
      - link "Media Logo Feb 18, 2026 Shunya Labs unveils Vāķ, a real-time translation model ... Open-weight translation model with voice preservation, <1.5s latency, and zero-shot cloning, enabling sovereign ... Read Full Article" [ref=e197] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-unveils-vak-a-real-time-translation-model-available-in-55-indian-languages-across-2970-translation-pairs/
        - generic [ref=e198]:
          - img "Media Logo" [ref=e200]
          - paragraph [ref=e201]: Feb 18, 2026
          - generic [ref=e202]:
            - heading "Shunya Labs unveils Vāķ, a real-time translation model ..." [level=3] [ref=e203]
            - paragraph [ref=e204]: Open-weight translation model with voice preservation, <1.5s latency, and zero-shot cloning, enabling sovereign ...
            - button "Read Full Article" [ref=e206]:
              - text: Read Full Article
              - img [ref=e207]
      - 'link "Media Logo Feb 18, 2026 Shunya Labs unveils Vāķ, a real-time translation model ... Gurugram : Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ... Read Full Article" [ref=e209] [cursor=pointer]':
        - /url: https://www.apnnews.com/shunya-labs-unveils-vak-a-real-time-translation-model-available-in-55-indian-languages-across-2970-translation-pairs/
        - generic [ref=e210]:
          - img "Media Logo" [ref=e212]
          - paragraph [ref=e213]: Feb 18, 2026
          - generic [ref=e214]:
            - heading "Shunya Labs unveils Vāķ, a real-time translation model ..." [level=3] [ref=e215]
            - paragraph [ref=e216]: "Gurugram : Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ..."
            - button "Read Full Article" [ref=e218]:
              - text: Read Full Article
              - img [ref=e219]
      - link "Media Logo Feb 13, 2026 Shunya Labs develops CPU-optimized voice AI stack for ... Shunya Labs has announced a CPU-compatible voice AI architecture that enables high-accuracy speech recognition and multilingual ... Read Full Article" [ref=e221] [cursor=pointer]:
        - /url: https://www.varindia.com/news/shunya-labs-develops-cpu-optimized-voice-ai-stack-for-the-next-billion-users
        - generic [ref=e222]:
          - img "Media Logo" [ref=e224]
          - paragraph [ref=e225]: Feb 13, 2026
          - generic [ref=e226]:
            - heading "Shunya Labs develops CPU-optimized voice AI stack for ..." [level=3] [ref=e227]
            - paragraph [ref=e228]: Shunya Labs has announced a CPU-compatible voice AI architecture that enables high-accuracy speech recognition and multilingual ...
            - button "Read Full Article" [ref=e230]:
              - text: Read Full Article
              - img [ref=e231]
      - link "Media Logo Feb 13, 2026 Shunya Labs unveils CPU-compatible voice AI stack for real ... The platform targets regulated sectors such as healthcare, BFSI and government, where low latency and data sovereignty are critical. Read Full Article" [ref=e233] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/news/industry/shunya-labs-launches-innovative-cpu-compatible-voice-ai-stack-for-real-time-applications/128297497
        - generic [ref=e234]:
          - img "Media Logo" [ref=e236]
          - paragraph [ref=e237]: Feb 13, 2026
          - generic [ref=e238]:
            - heading "Shunya Labs unveils CPU-compatible voice AI stack for real ..." [level=3] [ref=e239]
            - paragraph [ref=e240]: The platform targets regulated sectors such as healthcare, BFSI and government, where low latency and data sovereignty are critical.
            - button "Read Full Article" [ref=e242]:
              - text: Read Full Article
              - img [ref=e243]
      - link "Media Logo Feb 12, 2026 Shunya Labs Builds the CPU Compatible Voice AI Stack for the ... Shunya Labs, a research-driven voice AI company, today announced a CPU-compatible voice AI architecture that enables ... Read Full Article" [ref=e245] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-builds-the-cpu-compatible-voice-ai-stack-for-the-next-billion-users/
        - generic [ref=e246]:
          - img "Media Logo" [ref=e248]
          - paragraph [ref=e249]: Feb 12, 2026
          - generic [ref=e250]:
            - heading "Shunya Labs Builds the CPU Compatible Voice AI Stack for the ..." [level=3] [ref=e251]
            - paragraph [ref=e252]: Shunya Labs, a research-driven voice AI company, today announced a CPU-compatible voice AI architecture that enables ...
            - button "Read Full Article" [ref=e254]:
              - text: Read Full Article
              - img [ref=e255]
      - link "Media Logo Sep 30, 2025 Nasscom planning local benchmarks for Indic AI models ... The plan is in its early stages, with Nasscom AI, the industry body's AI initiative, set to start consultations with industry experts ... Read Full Article" [ref=e257] [cursor=pointer]:
        - /url: https://m.economictimes.com/tech/artificial-intelligence/nasscom-planning-local-benchmarks-for-indic-ai-models/amp_articleshow/124218208.cms
        - generic [ref=e258]:
          - img "Media Logo" [ref=e260]
          - paragraph [ref=e261]: Sep 30, 2025
          - generic [ref=e262]:
            - heading "Nasscom planning local benchmarks for Indic AI models ..." [level=3] [ref=e263]
            - paragraph [ref=e264]: The plan is in its early stages, with Nasscom AI, the industry body's AI initiative, set to start consultations with industry experts ...
            - button "Read Full Article" [ref=e266]:
              - text: Read Full Article
              - img [ref=e267]
      - link "Media Logo Sep 22, 2025 Indian AI lab challenges Hugging Face over alleged Nvidia bias According to the platform, its speech recognition model Pingala V1 has reached a word error rate (WER) of 3.1%. ... Read Full Article" [ref=e269] [cursor=pointer]:
        - /url: https://www.techinasia.com/indian-ai-lab-shunya-labs-clashes-hugging-face-over-nvidias-leadership
        - generic [ref=e270]:
          - img "Media Logo" [ref=e272]
          - paragraph [ref=e273]: Sep 22, 2025
          - generic [ref=e274]:
            - heading "Indian AI lab challenges Hugging Face over alleged Nvidia bias" [level=3] [ref=e275]
            - paragraph [ref=e276]: According to the platform, its speech recognition model Pingala V1 has reached a word error rate (WER) of 3.1%. ...
            - button "Read Full Article" [ref=e278]:
              - text: Read Full Article
              - img [ref=e279]
      - 'link "Media Logo Aug 28, 2025 Redefining Voice Tech: Check 5 Automatic Speech Recognition ... Speech recognition technology is evolving rapidly. Automatic Speech Recognition (ASR) engines are no longer just simple ... Read Full Article" [ref=e281] [cursor=pointer]':
        - /url: https://zeenews.india.com/technology/redefining-voice-tech-check-5-automatic-speech-recognition-engines-in-2025-2952829.html
        - generic [ref=e282]:
          - img "Media Logo" [ref=e284]
          - paragraph [ref=e285]: Aug 28, 2025
          - generic [ref=e286]:
            - 'heading "Redefining Voice Tech: Check 5 Automatic Speech Recognition ..." [level=3] [ref=e287]'
            - paragraph [ref=e288]: Speech recognition technology is evolving rapidly. Automatic Speech Recognition (ASR) engines are no longer just simple ...
            - button "Read Full Article" [ref=e290]:
              - text: Read Full Article
              - img [ref=e291]
      - 'link "Media Logo Aug 26, 2025 The New Digital Divide in AI: Why Edge-Ready, CPU-First Models ... The global artificial intelligence (AI) market is expanding at a staggering pace. In 2024, it was valued at $257.68 billion, with ... Read Full Article" [ref=e293] [cursor=pointer]':
        - /url: https://www.unite.ai/the-new-digital-divide-in-ai-why-edge-ready-cpu-first-models-will-win-the-cost-war/
        - generic [ref=e294]:
          - img "Media Logo" [ref=e296]
          - paragraph [ref=e297]: Aug 26, 2025
          - generic [ref=e298]:
            - 'heading "The New Digital Divide in AI: Why Edge-Ready, CPU-First Models ..." [level=3] [ref=e299]'
            - paragraph [ref=e300]: The global artificial intelligence (AI) market is expanding at a staggering pace. In 2024, it was valued at $257.68 billion, with ...
            - button "Read Full Article" [ref=e302]:
              - text: Read Full Article
              - img [ref=e303]
      - 'link "Media Logo Jul 24, 2025 Shunya Labs Launches Pingala V1: Top-Ranked CPU-Based ... MENLO PARK, Calif., July 24, 2025 /PRNewswire/ -- Shunya Labs, the AI infrastructure company pioneering real-time, privacy-first ... Read Full Article" [ref=e305] [cursor=pointer]':
        - /url: https://finance.yahoo.com/news/shunya-labs-launches-pingala-v1-135500875.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMtr0jnmGFiQWsfH3SgnlGfhIzj5YjDGLEAIshdW1UY5M_FG5tDC0OqCi9WV9FAOP4_IlHvya0EhubMNezysyydSXpq3OfJcj3ujbmwmWWvJydYH7IXk6yfnAMoMj_vbhj0DO4Dn9kPGrWCzjQgosW_Sx8cnY_B2GlDAENC7nJJW
        - generic [ref=e306]:
          - img "Media Logo" [ref=e308]
          - paragraph [ref=e309]: Jul 24, 2025
          - generic [ref=e310]:
            - 'heading "Shunya Labs Launches Pingala V1: Top-Ranked CPU-Based ..." [level=3] [ref=e311]'
            - paragraph [ref=e312]: MENLO PARK, Calif., July 24, 2025 /PRNewswire/ -- Shunya Labs, the AI infrastructure company pioneering real-time, privacy-first ...
            - button "Read Full Article" [ref=e314]:
              - text: Read Full Article
              - img [ref=e315]
      - link "Media Logo Jul 17, 2025 United We Care’ Launches Shunya Labs, a Voice AI Infra ... The AI-driven mental health solutions startup has launched Shunya Labs to redefine AI speech technology. Read Full Article" [ref=e317] [cursor=pointer]:
        - /url: https://analyticsindiamag.com/ai-news-updates/united-we-care-launches-shunya-labs-a-voice-ai-infra-for-32-indic-languages/
        - generic [ref=e318]:
          - img "Media Logo" [ref=e320]
          - paragraph [ref=e321]: Jul 17, 2025
          - generic [ref=e322]:
            - heading "United We Care’ Launches Shunya Labs, a Voice AI Infra ..." [level=3] [ref=e323]
            - paragraph [ref=e324]: The AI-driven mental health solutions startup has launched Shunya Labs to redefine AI speech technology.
            - button "Read Full Article" [ref=e326]:
              - text: Read Full Article
              - img [ref=e327]
      - link "Media Logo Jul 17, 2025 United We Care Launches Shunya Labs to Revolutionise AI... The platform supports over 32 Indic languages, including Hindi, Marathi, Assamese, and Maithili. Seven additional languages are currently being... Read Full Article" [ref=e329] [cursor=pointer]:
        - /url: https://www.entrepreneur.com/en-in/news-and-trends/united-we-care-launches-shunya-labs-to-revolutionise-ai/494739
        - generic [ref=e330]:
          - img "Media Logo" [ref=e332]
          - paragraph [ref=e333]: Jul 17, 2025
          - generic [ref=e334]:
            - heading "United We Care Launches Shunya Labs to Revolutionise AI..." [level=3] [ref=e335]
            - paragraph [ref=e336]: The platform supports over 32 Indic languages, including Hindi, Marathi, Assamese, and Maithili. Seven additional languages are currently being...
            - button "Read Full Article" [ref=e338]:
              - text: Read Full Article
              - img [ref=e339]
      - link "Media Logo Jan 15, 2025 Kunal Shah, Ashneer Grover-backed wellness startup pivots ... United We Care, backed by prominent investors Kunal Shah and Ashneer Grover, pivots to AI with Shunya Labs, aiming to ra... Read Full Article" [ref=e341] [cursor=pointer]:
        - /url: https://www.vccircle.com/kunalshah-ashneer-grover-backed-wellness-startup-pivots-to-ai-looks-to-raise-series-a
        - generic [ref=e342]:
          - img "Media Logo" [ref=e344]
          - paragraph [ref=e345]: Jan 15, 2025
          - generic [ref=e346]:
            - heading "Kunal Shah, Ashneer Grover-backed wellness startup pivots ..." [level=3] [ref=e347]
            - paragraph [ref=e348]: United We Care, backed by prominent investors Kunal Shah and Ashneer Grover, pivots to AI with Shunya Labs, aiming to ra...
            - button "Read Full Article" [ref=e350]:
              - text: Read Full Article
              - img [ref=e351]
      - link "Media Logo Jan 10, 2025 Why AI Still Falls Short in Solving Healthcare's Hardest Problems... An in-depth analysis of AI's current limitations in healthcare and the challenges that remain in solving complex medical... Read Full Article" [ref=e353] [cursor=pointer]:
        - /url: https://healthcare.financialexpressb2b.com/interviews/why-ai-still-falls-short-in-solving-healthcares-problems
        - generic [ref=e354]:
          - img "Media Logo" [ref=e356]
          - paragraph [ref=e357]: Jan 10, 2025
          - generic [ref=e358]:
            - heading "Why AI Still Falls Short in Solving Healthcare's Hardest Problems..." [level=3] [ref=e359]
            - paragraph [ref=e360]: An in-depth analysis of AI's current limitations in healthcare and the challenges that remain in solving complex medical...
            - button "Read Full Article" [ref=e362]:
              - text: Read Full Article
              - img [ref=e363]
      - 'link "Media Logo Jan 08, 2025 From Google to Shunya Labs: Who''s Really Winning the Voice... A comprehensive comparison of voice technology leaders, examining how Shunya Labs competes with tech giants like Google... Read Full Article" [ref=e365] [cursor=pointer]':
        - /url: https://www.smartprix.com/bytes/from-google-to-shunya-labs-whos-really-winning-the-voice-tech-arms-race/
        - generic [ref=e366]:
          - img "Media Logo" [ref=e368]
          - paragraph [ref=e369]: Jan 08, 2025
          - generic [ref=e370]:
            - 'heading "From Google to Shunya Labs: Who''s Really Winning the Voice..." [level=3] [ref=e371]'
            - paragraph [ref=e372]: A comprehensive comparison of voice technology leaders, examining how Shunya Labs competes with tech giants like Google...
            - button "Read Full Article" [ref=e374]:
              - text: Read Full Article
              - img [ref=e375]
      - link "Media Logo Jan 05, 2025 5 Groundbreaking Speech Recognition Engines That Are... Featuring the top 5 speech recognition engines revolutionizing automatic speech recognition, including Shunya Labs' inno... Read Full Article" [ref=e377] [cursor=pointer]:
        - /url: https://cxotoday.com/story/5-groundbreaking-speech-recognition-engines-that-are-redefining-the-asr-landscape-in-2025/
        - generic [ref=e378]:
          - img "Media Logo" [ref=e380]
          - paragraph [ref=e381]: Jan 05, 2025
          - generic [ref=e382]:
            - heading "5 Groundbreaking Speech Recognition Engines That Are..." [level=3] [ref=e383]
            - paragraph [ref=e384]: Featuring the top 5 speech recognition engines revolutionizing automatic speech recognition, including Shunya Labs' inno...
            - button "Read Full Article" [ref=e386]:
              - text: Read Full Article
              - img [ref=e387]
      - 'link "Media Logo Jan 03, 2025 From Talk to Text: 5 Speech Recognition Engines Defining th... An analysis of the leading speech recognition technologies shaping 2025, highlighting breakthrough innovations in real-t... Read Full Article" [ref=e389] [cursor=pointer]':
        - /url: https://cxotoday.com/story/from-talk-to-text-5-speech-recognition-engines-defining-the-pace-for-2025/
        - generic [ref=e390]:
          - img "Media Logo" [ref=e392]
          - paragraph [ref=e393]: Jan 03, 2025
          - generic [ref=e394]:
            - 'heading "From Talk to Text: 5 Speech Recognition Engines Defining th..." [level=3] [ref=e395]'
            - paragraph [ref=e396]: An analysis of the leading speech recognition technologies shaping 2025, highlighting breakthrough innovations in real-t...
            - button "Read Full Article" [ref=e398]:
              - text: Read Full Article
              - img [ref=e399]
      - 'link "Media Logo Jan 03, 2025 From Talk to Text: 5 Speech Recognition Engines Defining th... Exploring the cutting-edge speech recognition engines that are setting new standards for accuracy, speed, and multilingu... Read Full Article" [ref=e401] [cursor=pointer]':
        - /url: https://www.cxodigitalpulse.com/from-talk-to-text-5-speech-recognition-engines-defining-the-pace-for-2025/
        - generic [ref=e402]:
          - img "Media Logo" [ref=e404]
          - paragraph [ref=e405]: Jan 03, 2025
          - generic [ref=e406]:
            - 'heading "From Talk to Text: 5 Speech Recognition Engines Defining th..." [level=3] [ref=e407]'
            - paragraph [ref=e408]: Exploring the cutting-edge speech recognition engines that are setting new standards for accuracy, speed, and multilingu...
            - button "Read Full Article" [ref=e410]:
              - text: Read Full Article
              - img [ref=e411]
    - contentinfo [ref=e413]:
      - generic [ref=e414]:
        - generic [ref=e415]:
          - img "Shunya Labs" [ref=e416]
          - paragraph [ref=e417]: Shunya Labs, Inc.
        - generic [ref=e418]:
          - paragraph [ref=e419]: Product
          - list [ref=e420]:
            - listitem [ref=e421]:
              - link "Overview" [ref=e422] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e423]:
              - link "Models" [ref=e424] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e425]:
              - link "Voice Agents" [ref=e426] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e427]:
              - link "Speech Intelligence" [ref=e428] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e429]:
              - link "Audio Processing" [ref=e430] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e431]:
              - link "Deployment" [ref=e432] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e433]:
          - paragraph [ref=e434]: Models
          - list [ref=e435]:
            - listitem [ref=e436]:
              - link "Language Models" [ref=e437] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e438]:
              - link "Zero STT Indic" [ref=e439] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e440]:
              - link "Zero STT Codeswitch" [ref=e441] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e442]:
              - link "Specialised Models" [ref=e443] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e444]:
              - link "Zero STT Med" [ref=e445] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e446]:
              - link "On Device Models" [ref=e447] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e448]:
          - paragraph [ref=e449]: Solutions
          - list [ref=e450]:
            - listitem [ref=e451]:
              - link "Contact Centers" [ref=e452] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e453]:
              - link "Media & Entertainment" [ref=e454] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e455]:
              - link "Healthcare" [ref=e456] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e457]:
          - paragraph [ref=e458]: Resources
          - list [ref=e459]:
            - listitem [ref=e460]:
              - link "Blogs" [ref=e461] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e462]:
              - link "Benchmarks" [ref=e463] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e464]:
              - link "News & Media" [ref=e465] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e466]:
              - link "Patents" [ref=e467] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e468]:
              - link "Research" [ref=e469] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e471]:
          - link "Documentation" [ref=e472] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e474]:
          - listitem [ref=e475]:
            - link "About us" [ref=e476] [cursor=pointer]:
              - /url: /about
        - list [ref=e478]:
          - listitem [ref=e479]:
            - link "Pricing" [ref=e480] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e481]:
        - paragraph [ref=e482]: Follow us on
        - generic [ref=e483]:
          - link [ref=e484] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e485]
          - link [ref=e487] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e488]
          - link [ref=e490] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e491]
          - link [ref=e493] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e494]
      - generic [ref=e496]:
        - paragraph [ref=e497]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e498]:
          - link "Privacy" [ref=e499] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e500] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e501] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e502] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e503] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e504]
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
     |                                                                                      ^ Error: 3 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```