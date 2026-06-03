# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/news-media/design.spec.js >> Resources - News & Media design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Footer item "© 2026 Shunya Labs, Inc. All rights reserved." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "© 2026 Shunya Labs, Inc. All rights reserved." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 2 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 2
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
    - generic [ref=e10]:
      - heading "Media Coverage" [level=1] [ref=e11]
      - heading "Featuring ShunyaLabs and our leadership in AI infrastructure, voice technology, and edge computing" [level=2] [ref=e12]
    - generic [ref=e13]:
      - link "Media Logo May 11, 2026 Shunya Labs introduces 'Vak' voice AI system for multilingual India Shunya Labs introduces Vāk, a voice AI system purpose-built for multilingual India, supporting real-time speech recognition across Indic languages. Read Full Article" [ref=e14] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/amp/news/industry/shunya-labs-introduces-vak-voice-ai-system-for-multilingual-india/131015824
        - generic [ref=e15]:
          - img "Media Logo" [ref=e17]
          - paragraph [ref=e18]: May 11, 2026
          - generic [ref=e19]:
            - heading "Shunya Labs introduces 'Vak' voice AI system for multilingual India" [level=3] [ref=e20]
            - paragraph [ref=e21]: Shunya Labs introduces Vāk, a voice AI system purpose-built for multilingual India, supporting real-time speech recognition across Indic languages.
            - button "Read Full Article" [ref=e23]:
              - text: Read Full Article
              - img [ref=e24]
      - link "Media Logo Apr 29, 2026 What enterprises get wrong about AI—and what finally work An enterprise perspective on what companies commonly get wrong about AI adoption — and the approaches that actually deliver results. Read Full Article" [ref=e26] [cursor=pointer]:
        - /url: https://etedge-insights.com/technology/artificial-intelligence/what-enterprises-get-wrong-about-ai-and-what-finally-work/?amp=1
        - generic [ref=e27]:
          - img "Media Logo" [ref=e29]
          - paragraph [ref=e30]: Apr 29, 2026
          - generic [ref=e31]:
            - heading "What enterprises get wrong about AI—and what finally work" [level=3] [ref=e32]
            - paragraph [ref=e33]: An enterprise perspective on what companies commonly get wrong about AI adoption — and the approaches that actually deliver results.
            - button "Read Full Article" [ref=e35]:
              - text: Read Full Article
              - img [ref=e36]
      - link "Media Logo Apr 17, 2026 Shunya Labs launches unified voice AI localisation platform Shunya Labs launches a unified voice AI localisation platform enabling end-to-end dubbing, translation, and multilingual content at scale. Read Full Article" [ref=e38] [cursor=pointer]:
        - /url: https://www.campaignindia.in/article/shunya-labs-launches-unified-voice-ai-localisation-platform/46481dkwezbe46ws5abfs2c2dt
        - generic [ref=e39]:
          - img "Media Logo" [ref=e41]
          - paragraph [ref=e42]: Apr 17, 2026
          - generic [ref=e43]:
            - heading "Shunya Labs launches unified voice AI localisation platform" [level=3] [ref=e44]
            - paragraph [ref=e45]: Shunya Labs launches a unified voice AI localisation platform enabling end-to-end dubbing, translation, and multilingual content at scale.
            - button "Read Full Article" [ref=e47]:
              - text: Read Full Article
              - img [ref=e48]
      - link "Media Logo Apr 9, 2026 Shunya Labs Launches End-to-End Voice AI Platform for Dubbing, Translation and Multilingual Content Localisation Shunya Labs launches an end-to-end voice AI platform built for dubbing, translation, and multilingual content localisation at scale. Read Full Article" [ref=e50] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-launches-end-to-end-voice-ai-platform-for-dubbing-translation-and-multilingual-content-localisation/
        - generic [ref=e51]:
          - img "Media Logo" [ref=e53]
          - paragraph [ref=e54]: Apr 9, 2026
          - generic [ref=e55]:
            - heading "Shunya Labs Launches End-to-End Voice AI Platform for Dubbing, Translation and Multilingual Content Localisation" [level=3] [ref=e56]
            - paragraph [ref=e57]: Shunya Labs launches an end-to-end voice AI platform built for dubbing, translation, and multilingual content localisation at scale.
            - button "Read Full Article" [ref=e59]:
              - text: Read Full Article
              - img [ref=e60]
      - link "Media Logo Apr 9, 2026 Tech and gadget launches today (April 09, 2026) Indian Express covers today's top tech and gadget launches including Shunya Labs among the notable announcements. Read Full Article" [ref=e62] [cursor=pointer]:
        - /url: https://indianexpress.com/article/technology/tech-news-technology/tech-and-gadget-launches-today-april-09-2026-vivo-v70-fe-logitech-pro-x2-superstrike-and-more-10627858/
        - generic [ref=e63]:
          - img "Media Logo" [ref=e65]
          - paragraph [ref=e66]: Apr 9, 2026
          - generic [ref=e67]:
            - heading "Tech and gadget launches today (April 09, 2026)" [level=3] [ref=e68]
            - paragraph [ref=e69]: Indian Express covers today's top tech and gadget launches including Shunya Labs among the notable announcements.
            - button "Read Full Article" [ref=e71]:
              - text: Read Full Article
              - img [ref=e72]
      - link "Media Logo Mar 30, 2026 Indian startups turn to small language models to solve for efficiency, privacy, cost Indian startups are increasingly turning to small language models to solve for efficiency, privacy, and cost challenges. Read Full Article" [ref=e74] [cursor=pointer]:
        - /url: https://m.economictimes.com/tech/startups/indian-startups-turn-to-small-languages-models-to-solve-for-efficiency-privacy-cost/amp_articleshow/129884791.cms
        - generic [ref=e75]:
          - img "Media Logo" [ref=e77]
          - paragraph [ref=e78]: Mar 30, 2026
          - generic [ref=e79]:
            - heading "Indian startups turn to small language models to solve for efficiency, privacy, cost" [level=3] [ref=e80]
            - paragraph [ref=e81]: Indian startups are increasingly turning to small language models to solve for efficiency, privacy, and cost challenges.
            - button "Read Full Article" [ref=e83]:
              - text: Read Full Article
              - img [ref=e84]
      - link "Media Logo Mar 26, 2026 Shunya Labs unveils AI-driven voice intelligence platform for contact centre operations Shunya Labs unveils an AI-powered voice intelligence platform aimed at revolutionizing contact center operations. Read Full Article" [ref=e86] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/news/industry/revolutionizing-contact-centers-shunya-labs-launches-ai-powered-voice-intelligence-platform/129816076
        - generic [ref=e87]:
          - img "Media Logo" [ref=e89]
          - paragraph [ref=e90]: Mar 26, 2026
          - generic [ref=e91]:
            - heading "Shunya Labs unveils AI-driven voice intelligence platform for contact centre operations" [level=3] [ref=e92]
            - paragraph [ref=e93]: Shunya Labs unveils an AI-powered voice intelligence platform aimed at revolutionizing contact center operations.
            - button "Read Full Article" [ref=e95]:
              - text: Read Full Article
              - img [ref=e96]
      - 'link "Media Logo Mar 26, 2026 Top Startup News Today: India''s Deeptech Moment Is Here & Startups Are Leading the Charge India''s deeptech moment is here and startups are leading the charge — featuring Shunya Labs among the top startup news today. Read Full Article" [ref=e98] [cursor=pointer]':
        - /url: https://www.tice.news/tice-trending/top-startup-news-today-indias-deeptech-moment-is-here-and-startups-are-leading-the-charge-11264947
        - generic [ref=e99]:
          - img "Media Logo" [ref=e101]
          - paragraph [ref=e102]: Mar 26, 2026
          - generic [ref=e103]:
            - 'heading "Top Startup News Today: India''s Deeptech Moment Is Here & Startups Are Leading the Charge" [level=3] [ref=e104]'
            - paragraph [ref=e105]: India's deeptech moment is here and startups are leading the charge — featuring Shunya Labs among the top startup news today.
            - button "Read Full Article" [ref=e107]:
              - text: Read Full Article
              - img [ref=e108]
      - link "Media Logo Mar 25, 2026 Shunya Labs Launches Real-Time Voice Intelligence Platform for the Next Generation of Contact Centres Shunya Labs launches a real-time voice intelligence platform purpose-built for the next generation of contact centre operations. Read Full Article" [ref=e110] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-launches-real-time-voice-intelligence-platform-for-the-next-generation-of-contact-centres/
        - generic [ref=e111]:
          - img "Media Logo" [ref=e113]
          - paragraph [ref=e114]: Mar 25, 2026
          - generic [ref=e115]:
            - heading "Shunya Labs Launches Real-Time Voice Intelligence Platform for the Next Generation of Contact Centres" [level=3] [ref=e116]
            - paragraph [ref=e117]: Shunya Labs launches a real-time voice intelligence platform purpose-built for the next generation of contact centre operations.
            - button "Read Full Article" [ref=e119]:
              - text: Read Full Article
              - img [ref=e120]
      - 'link "Media Logo Feb 26, 2026 कमांड के साथ आपका मूड भी पहचानेगा यह AI! कैंसर से जंग के ... Success Story Ritu Mehrotra Shunyaa Labs: भारत की शून्य लैब्स ने वॉइस AI इंफ्रास्ट्रक्चर में ऐसा इतिहास रचा है. Read Full Article" [ref=e122] [cursor=pointer]':
        - /url: https://hindi.news18.com/news/delhi/cancer-survivor-idea-ritu-mehrotra-shunyaa-labs-voice-ai-mood-detection-200-languages-local18-ws-l-10222482.html
        - generic [ref=e123]:
          - img "Media Logo" [ref=e125]
          - paragraph [ref=e126]: Feb 26, 2026
          - generic [ref=e127]:
            - heading "कमांड के साथ आपका मूड भी पहचानेगा यह AI! कैंसर से जंग के ..." [level=3] [ref=e128]
            - paragraph [ref=e129]: "Success Story Ritu Mehrotra Shunyaa Labs: भारत की शून्य लैब्स ने वॉइस AI इंफ्रास्ट्रक्चर में ऐसा इतिहास रचा है."
            - button "Read Full Article" [ref=e131]:
              - text: Read Full Article
              - img [ref=e132]
      - 'link "Media Logo Feb 19, 2026 India must build sovereign infra for artificial intelligence: Experts The time is ripe for India to bring an ‘artificial intelligence'' infrastructure on the likes of digital public ... Read Full Article" [ref=e134] [cursor=pointer]':
        - /url: https://www.tribuneindia.com/news/india/india-must-build-sovereign-infra-for-artificial-intelligence-experts/amp
        - generic [ref=e135]:
          - img "Media Logo" [ref=e137]
          - paragraph [ref=e138]: Feb 19, 2026
          - generic [ref=e139]:
            - 'heading "India must build sovereign infra for artificial intelligence: Experts" [level=3] [ref=e140]'
            - paragraph [ref=e141]: The time is ripe for India to bring an ‘artificial intelligence' infrastructure on the likes of digital public ...
            - button "Read Full Article" [ref=e143]:
              - text: Read Full Article
              - img [ref=e144]
      - link "Media Logo Feb 19, 2026 Shunya Labs, in partnership with Nasscom, Launches Vāķ, India’s ... Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ... Read Full Article" [ref=e146] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-in-partnership-with-nasscom-launches-vak-indias-largest-open-weight-voice-ai-across-55-languages/
        - generic [ref=e147]:
          - img "Media Logo" [ref=e149]
          - paragraph [ref=e150]: Feb 19, 2026
          - generic [ref=e151]:
            - heading "Shunya Labs, in partnership with Nasscom, Launches Vāķ, India’s ..." [level=3] [ref=e152]
            - paragraph [ref=e153]: Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ...
            - button "Read Full Article" [ref=e155]:
              - text: Read Full Article
              - img [ref=e156]
      - link "Media Logo Feb 18, 2026 Shunya Labs Unveils Real-Time AI Translation Model for ... Launch Vāķ, a real-time voice translation model for 55 Indian languages, at India AI Impact Summit 2026. Read Full Article" [ref=e158] [cursor=pointer]:
        - /url: https://analyticsindiamag.com/ai-news/shunya-labs-unveils-real-time-ai-translation-model-for-55-indian-languages
        - generic [ref=e159]:
          - img "Media Logo" [ref=e161]
          - paragraph [ref=e162]: Feb 18, 2026
          - generic [ref=e163]:
            - heading "Shunya Labs Unveils Real-Time AI Translation Model for ..." [level=3] [ref=e164]
            - paragraph [ref=e165]: Launch Vāķ, a real-time voice translation model for 55 Indian languages, at India AI Impact Summit 2026.
            - button "Read Full Article" [ref=e167]:
              - text: Read Full Article
              - img [ref=e168]
      - link "Media Logo Feb 18, 2026 Shunya Labs unveils Vāķ, a real-time translation model ... Open-weight translation model with voice preservation, <1.5s latency, and zero-shot cloning, enabling sovereign ... Read Full Article" [ref=e170] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-unveils-vak-a-real-time-translation-model-available-in-55-indian-languages-across-2970-translation-pairs/
        - generic [ref=e171]:
          - img "Media Logo" [ref=e173]
          - paragraph [ref=e174]: Feb 18, 2026
          - generic [ref=e175]:
            - heading "Shunya Labs unveils Vāķ, a real-time translation model ..." [level=3] [ref=e176]
            - paragraph [ref=e177]: Open-weight translation model with voice preservation, <1.5s latency, and zero-shot cloning, enabling sovereign ...
            - button "Read Full Article" [ref=e179]:
              - text: Read Full Article
              - img [ref=e180]
      - 'link "Media Logo Feb 18, 2026 Shunya Labs unveils Vāķ, a real-time translation model ... Gurugram : Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ... Read Full Article" [ref=e182] [cursor=pointer]':
        - /url: https://www.apnnews.com/shunya-labs-unveils-vak-a-real-time-translation-model-available-in-55-indian-languages-across-2970-translation-pairs/
        - generic [ref=e183]:
          - img "Media Logo" [ref=e185]
          - paragraph [ref=e186]: Feb 18, 2026
          - generic [ref=e187]:
            - heading "Shunya Labs unveils Vāķ, a real-time translation model ..." [level=3] [ref=e188]
            - paragraph [ref=e189]: "Gurugram : Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ..."
            - button "Read Full Article" [ref=e191]:
              - text: Read Full Article
              - img [ref=e192]
      - link "Media Logo Feb 13, 2026 Shunya Labs develops CPU-optimized voice AI stack for ... Shunya Labs has announced a CPU-compatible voice AI architecture that enables high-accuracy speech recognition and multilingual ... Read Full Article" [ref=e194] [cursor=pointer]:
        - /url: https://www.varindia.com/news/shunya-labs-develops-cpu-optimized-voice-ai-stack-for-the-next-billion-users
        - generic [ref=e195]:
          - img "Media Logo" [ref=e197]
          - paragraph [ref=e198]: Feb 13, 2026
          - generic [ref=e199]:
            - heading "Shunya Labs develops CPU-optimized voice AI stack for ..." [level=3] [ref=e200]
            - paragraph [ref=e201]: Shunya Labs has announced a CPU-compatible voice AI architecture that enables high-accuracy speech recognition and multilingual ...
            - button "Read Full Article" [ref=e203]:
              - text: Read Full Article
              - img [ref=e204]
      - link "Media Logo Feb 13, 2026 Shunya Labs unveils CPU-compatible voice AI stack for real ... The platform targets regulated sectors such as healthcare, BFSI and government, where low latency and data sovereignty are critical. Read Full Article" [ref=e206] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/news/industry/shunya-labs-launches-innovative-cpu-compatible-voice-ai-stack-for-real-time-applications/128297497
        - generic [ref=e207]:
          - img "Media Logo" [ref=e209]
          - paragraph [ref=e210]: Feb 13, 2026
          - generic [ref=e211]:
            - heading "Shunya Labs unveils CPU-compatible voice AI stack for real ..." [level=3] [ref=e212]
            - paragraph [ref=e213]: The platform targets regulated sectors such as healthcare, BFSI and government, where low latency and data sovereignty are critical.
            - button "Read Full Article" [ref=e215]:
              - text: Read Full Article
              - img [ref=e216]
      - link "Media Logo Feb 12, 2026 Shunya Labs Builds the CPU Compatible Voice AI Stack for the ... Shunya Labs, a research-driven voice AI company, today announced a CPU-compatible voice AI architecture that enables ... Read Full Article" [ref=e218] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-builds-the-cpu-compatible-voice-ai-stack-for-the-next-billion-users/
        - generic [ref=e219]:
          - img "Media Logo" [ref=e221]
          - paragraph [ref=e222]: Feb 12, 2026
          - generic [ref=e223]:
            - heading "Shunya Labs Builds the CPU Compatible Voice AI Stack for the ..." [level=3] [ref=e224]
            - paragraph [ref=e225]: Shunya Labs, a research-driven voice AI company, today announced a CPU-compatible voice AI architecture that enables ...
            - button "Read Full Article" [ref=e227]:
              - text: Read Full Article
              - img [ref=e228]
      - link "Media Logo Sep 30, 2025 Nasscom planning local benchmarks for Indic AI models ... The plan is in its early stages, with Nasscom AI, the industry body's AI initiative, set to start consultations with industry experts ... Read Full Article" [ref=e230] [cursor=pointer]:
        - /url: https://m.economictimes.com/tech/artificial-intelligence/nasscom-planning-local-benchmarks-for-indic-ai-models/amp_articleshow/124218208.cms
        - generic [ref=e231]:
          - img "Media Logo" [ref=e233]
          - paragraph [ref=e234]: Sep 30, 2025
          - generic [ref=e235]:
            - heading "Nasscom planning local benchmarks for Indic AI models ..." [level=3] [ref=e236]
            - paragraph [ref=e237]: The plan is in its early stages, with Nasscom AI, the industry body's AI initiative, set to start consultations with industry experts ...
            - button "Read Full Article" [ref=e239]:
              - text: Read Full Article
              - img [ref=e240]
      - link "Media Logo Sep 22, 2025 Indian AI lab challenges Hugging Face over alleged Nvidia bias According to the platform, its speech recognition model Pingala V1 has reached a word error rate (WER) of 3.1%. ... Read Full Article" [ref=e242] [cursor=pointer]:
        - /url: https://www.techinasia.com/indian-ai-lab-shunya-labs-clashes-hugging-face-over-nvidias-leadership
        - generic [ref=e243]:
          - img "Media Logo" [ref=e245]
          - paragraph [ref=e246]: Sep 22, 2025
          - generic [ref=e247]:
            - heading "Indian AI lab challenges Hugging Face over alleged Nvidia bias" [level=3] [ref=e248]
            - paragraph [ref=e249]: According to the platform, its speech recognition model Pingala V1 has reached a word error rate (WER) of 3.1%. ...
            - button "Read Full Article" [ref=e251]:
              - text: Read Full Article
              - img [ref=e252]
      - 'link "Media Logo Aug 28, 2025 Redefining Voice Tech: Check 5 Automatic Speech Recognition ... Speech recognition technology is evolving rapidly. Automatic Speech Recognition (ASR) engines are no longer just simple ... Read Full Article" [ref=e254] [cursor=pointer]':
        - /url: https://zeenews.india.com/technology/redefining-voice-tech-check-5-automatic-speech-recognition-engines-in-2025-2952829.html
        - generic [ref=e255]:
          - img "Media Logo" [ref=e257]
          - paragraph [ref=e258]: Aug 28, 2025
          - generic [ref=e259]:
            - 'heading "Redefining Voice Tech: Check 5 Automatic Speech Recognition ..." [level=3] [ref=e260]'
            - paragraph [ref=e261]: Speech recognition technology is evolving rapidly. Automatic Speech Recognition (ASR) engines are no longer just simple ...
            - button "Read Full Article" [ref=e263]:
              - text: Read Full Article
              - img [ref=e264]
      - 'link "Media Logo Aug 26, 2025 The New Digital Divide in AI: Why Edge-Ready, CPU-First Models ... The global artificial intelligence (AI) market is expanding at a staggering pace. In 2024, it was valued at $257.68 billion, with ... Read Full Article" [ref=e266] [cursor=pointer]':
        - /url: https://www.unite.ai/the-new-digital-divide-in-ai-why-edge-ready-cpu-first-models-will-win-the-cost-war/
        - generic [ref=e267]:
          - img "Media Logo" [ref=e269]
          - paragraph [ref=e270]: Aug 26, 2025
          - generic [ref=e271]:
            - 'heading "The New Digital Divide in AI: Why Edge-Ready, CPU-First Models ..." [level=3] [ref=e272]'
            - paragraph [ref=e273]: The global artificial intelligence (AI) market is expanding at a staggering pace. In 2024, it was valued at $257.68 billion, with ...
            - button "Read Full Article" [ref=e275]:
              - text: Read Full Article
              - img [ref=e276]
      - 'link "Media Logo Jul 24, 2025 Shunya Labs Launches Pingala V1: Top-Ranked CPU-Based ... MENLO PARK, Calif., July 24, 2025 /PRNewswire/ -- Shunya Labs, the AI infrastructure company pioneering real-time, privacy-first ... Read Full Article" [ref=e278] [cursor=pointer]':
        - /url: https://finance.yahoo.com/news/shunya-labs-launches-pingala-v1-135500875.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMtr0jnmGFiQWsfH3SgnlGfhIzj5YjDGLEAIshdW1UY5M_FG5tDC0OqCi9WV9FAOP4_IlHvya0EhubMNezysyydSXpq3OfJcj3ujbmwmWWvJydYH7IXk6yfnAMoMj_vbhj0DO4Dn9kPGrWCzjQgosW_Sx8cnY_B2GlDAENC7nJJW
        - generic [ref=e279]:
          - img "Media Logo" [ref=e281]
          - paragraph [ref=e282]: Jul 24, 2025
          - generic [ref=e283]:
            - 'heading "Shunya Labs Launches Pingala V1: Top-Ranked CPU-Based ..." [level=3] [ref=e284]'
            - paragraph [ref=e285]: MENLO PARK, Calif., July 24, 2025 /PRNewswire/ -- Shunya Labs, the AI infrastructure company pioneering real-time, privacy-first ...
            - button "Read Full Article" [ref=e287]:
              - text: Read Full Article
              - img [ref=e288]
      - link "Media Logo Jul 17, 2025 United We Care’ Launches Shunya Labs, a Voice AI Infra ... The AI-driven mental health solutions startup has launched Shunya Labs to redefine AI speech technology. Read Full Article" [ref=e290] [cursor=pointer]:
        - /url: https://analyticsindiamag.com/ai-news-updates/united-we-care-launches-shunya-labs-a-voice-ai-infra-for-32-indic-languages/
        - generic [ref=e291]:
          - img "Media Logo" [ref=e293]
          - paragraph [ref=e294]: Jul 17, 2025
          - generic [ref=e295]:
            - heading "United We Care’ Launches Shunya Labs, a Voice AI Infra ..." [level=3] [ref=e296]
            - paragraph [ref=e297]: The AI-driven mental health solutions startup has launched Shunya Labs to redefine AI speech technology.
            - button "Read Full Article" [ref=e299]:
              - text: Read Full Article
              - img [ref=e300]
      - link "Media Logo Jul 17, 2025 United We Care Launches Shunya Labs to Revolutionise AI... The platform supports over 32 Indic languages, including Hindi, Marathi, Assamese, and Maithili. Seven additional languages are currently being... Read Full Article" [ref=e302] [cursor=pointer]:
        - /url: https://www.entrepreneur.com/en-in/news-and-trends/united-we-care-launches-shunya-labs-to-revolutionise-ai/494739
        - generic [ref=e303]:
          - img "Media Logo" [ref=e305]
          - paragraph [ref=e306]: Jul 17, 2025
          - generic [ref=e307]:
            - heading "United We Care Launches Shunya Labs to Revolutionise AI..." [level=3] [ref=e308]
            - paragraph [ref=e309]: The platform supports over 32 Indic languages, including Hindi, Marathi, Assamese, and Maithili. Seven additional languages are currently being...
            - button "Read Full Article" [ref=e311]:
              - text: Read Full Article
              - img [ref=e312]
      - link "Media Logo Jan 15, 2025 Kunal Shah, Ashneer Grover-backed wellness startup pivots ... United We Care, backed by prominent investors Kunal Shah and Ashneer Grover, pivots to AI with Shunya Labs, aiming to ra... Read Full Article" [ref=e314] [cursor=pointer]:
        - /url: https://www.vccircle.com/kunalshah-ashneer-grover-backed-wellness-startup-pivots-to-ai-looks-to-raise-series-a
        - generic [ref=e315]:
          - img "Media Logo" [ref=e317]
          - paragraph [ref=e318]: Jan 15, 2025
          - generic [ref=e319]:
            - heading "Kunal Shah, Ashneer Grover-backed wellness startup pivots ..." [level=3] [ref=e320]
            - paragraph [ref=e321]: United We Care, backed by prominent investors Kunal Shah and Ashneer Grover, pivots to AI with Shunya Labs, aiming to ra...
            - button "Read Full Article" [ref=e323]:
              - text: Read Full Article
              - img [ref=e324]
      - link "Media Logo Jan 10, 2025 Why AI Still Falls Short in Solving Healthcare's Hardest Problems... An in-depth analysis of AI's current limitations in healthcare and the challenges that remain in solving complex medical... Read Full Article" [ref=e326] [cursor=pointer]:
        - /url: https://healthcare.financialexpressb2b.com/interviews/why-ai-still-falls-short-in-solving-healthcares-problems
        - generic [ref=e327]:
          - img "Media Logo" [ref=e329]
          - paragraph [ref=e330]: Jan 10, 2025
          - generic [ref=e331]:
            - heading "Why AI Still Falls Short in Solving Healthcare's Hardest Problems..." [level=3] [ref=e332]
            - paragraph [ref=e333]: An in-depth analysis of AI's current limitations in healthcare and the challenges that remain in solving complex medical...
            - button "Read Full Article" [ref=e335]:
              - text: Read Full Article
              - img [ref=e336]
      - 'link "Media Logo Jan 08, 2025 From Google to Shunya Labs: Who''s Really Winning the Voice... A comprehensive comparison of voice technology leaders, examining how Shunya Labs competes with tech giants like Google... Read Full Article" [ref=e338] [cursor=pointer]':
        - /url: https://www.smartprix.com/bytes/from-google-to-shunya-labs-whos-really-winning-the-voice-tech-arms-race/
        - generic [ref=e339]:
          - img "Media Logo" [ref=e341]
          - paragraph [ref=e342]: Jan 08, 2025
          - generic [ref=e343]:
            - 'heading "From Google to Shunya Labs: Who''s Really Winning the Voice..." [level=3] [ref=e344]'
            - paragraph [ref=e345]: A comprehensive comparison of voice technology leaders, examining how Shunya Labs competes with tech giants like Google...
            - button "Read Full Article" [ref=e347]:
              - text: Read Full Article
              - img [ref=e348]
      - link "Media Logo Jan 05, 2025 5 Groundbreaking Speech Recognition Engines That Are... Featuring the top 5 speech recognition engines revolutionizing automatic speech recognition, including Shunya Labs' inno... Read Full Article" [ref=e350] [cursor=pointer]:
        - /url: https://cxotoday.com/story/5-groundbreaking-speech-recognition-engines-that-are-redefining-the-asr-landscape-in-2025/
        - generic [ref=e351]:
          - img "Media Logo" [ref=e353]
          - paragraph [ref=e354]: Jan 05, 2025
          - generic [ref=e355]:
            - heading "5 Groundbreaking Speech Recognition Engines That Are..." [level=3] [ref=e356]
            - paragraph [ref=e357]: Featuring the top 5 speech recognition engines revolutionizing automatic speech recognition, including Shunya Labs' inno...
            - button "Read Full Article" [ref=e359]:
              - text: Read Full Article
              - img [ref=e360]
      - 'link "Media Logo Jan 03, 2025 From Talk to Text: 5 Speech Recognition Engines Defining th... An analysis of the leading speech recognition technologies shaping 2025, highlighting breakthrough innovations in real-t... Read Full Article" [ref=e362] [cursor=pointer]':
        - /url: https://cxotoday.com/story/from-talk-to-text-5-speech-recognition-engines-defining-the-pace-for-2025/
        - generic [ref=e363]:
          - img "Media Logo" [ref=e365]
          - paragraph [ref=e366]: Jan 03, 2025
          - generic [ref=e367]:
            - 'heading "From Talk to Text: 5 Speech Recognition Engines Defining th..." [level=3] [ref=e368]'
            - paragraph [ref=e369]: An analysis of the leading speech recognition technologies shaping 2025, highlighting breakthrough innovations in real-t...
            - button "Read Full Article" [ref=e371]:
              - text: Read Full Article
              - img [ref=e372]
      - 'link "Media Logo Jan 03, 2025 From Talk to Text: 5 Speech Recognition Engines Defining th... Exploring the cutting-edge speech recognition engines that are setting new standards for accuracy, speed, and multilingu... Read Full Article" [ref=e374] [cursor=pointer]':
        - /url: https://www.cxodigitalpulse.com/from-talk-to-text-5-speech-recognition-engines-defining-the-pace-for-2025/
        - generic [ref=e375]:
          - img "Media Logo" [ref=e377]
          - paragraph [ref=e378]: Jan 03, 2025
          - generic [ref=e379]:
            - 'heading "From Talk to Text: 5 Speech Recognition Engines Defining th..." [level=3] [ref=e380]'
            - paragraph [ref=e381]: Exploring the cutting-edge speech recognition engines that are setting new standards for accuracy, speed, and multilingu...
            - button "Read Full Article" [ref=e383]:
              - text: Read Full Article
              - img [ref=e384]
    - contentinfo [ref=e386]:
      - generic [ref=e387]:
        - generic [ref=e388]:
          - img "Shunya Labs" [ref=e389]
          - paragraph [ref=e390]: Shunya Labs, Inc.
        - generic [ref=e391]:
          - paragraph [ref=e392]: Product
          - list [ref=e393]:
            - listitem [ref=e394]:
              - link "Overview" [ref=e395] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e396]:
              - link "Models" [ref=e397] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e398]:
              - link "Voice Agents" [ref=e399] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e400]:
              - link "Speech Intelligence" [ref=e401] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e402]:
              - link "Audio Processing" [ref=e403] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e404]:
              - link "Deployment" [ref=e405] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e406]:
          - paragraph [ref=e407]: Models
          - list [ref=e408]:
            - listitem [ref=e409]:
              - link "Language Models" [ref=e410] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e411]:
              - link "Zero STT Indic" [ref=e412] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e413]:
              - link "Zero STT Codeswitch" [ref=e414] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e415]:
              - link "Specialised Models" [ref=e416] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e417]:
              - link "Zero STT Med" [ref=e418] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e419]:
              - link "On Device Models" [ref=e420] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e421]:
          - paragraph [ref=e422]: Solutions
          - list [ref=e423]:
            - listitem [ref=e424]:
              - link "Contact Centers" [ref=e425] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e426]:
              - link "Media & Entertainment" [ref=e427] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e428]:
              - link "Healthcare" [ref=e429] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e430]:
          - paragraph [ref=e431]: Resources
          - list [ref=e432]:
            - listitem [ref=e433]:
              - link "Blogs" [ref=e434] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e435]:
              - link "Benchmarks" [ref=e436] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e437]:
              - link "News & Media" [ref=e438] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e439]:
              - link "Patents" [ref=e440] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e441]:
              - link "Research" [ref=e442] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e444]:
          - link "Documentation" [ref=e445] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e447]:
          - listitem [ref=e448]:
            - link "About us" [ref=e449] [cursor=pointer]:
              - /url: /about
        - list [ref=e451]:
          - listitem [ref=e452]:
            - link "Pricing" [ref=e453] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e454]:
        - paragraph [ref=e455]: Follow us on
        - generic [ref=e456]:
          - link [ref=e457] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e458]
          - link [ref=e460] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e461]
          - link [ref=e463] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e464]
          - link [ref=e466] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e467]
      - generic [ref=e469]:
        - paragraph [ref=e470]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e471]:
          - link "Privacy" [ref=e472] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e473] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e474] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e475] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e476] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e477]
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
     |                                                                                      ^ Error: 2 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```