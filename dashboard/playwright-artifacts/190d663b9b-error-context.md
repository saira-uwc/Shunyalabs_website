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
              - text: Documentation
              - img [ref=e27]
            - link "About Us" [ref=e29] [cursor=pointer]:
              - /url: /about
            - link "Pricing" [ref=e30] [cursor=pointer]:
              - /url: /pricing
        - generic [ref=e31]:
          - link "Playground" [ref=e32] [cursor=pointer]:
            - /url: https://playground.shunyalabs.ai/
            - img [ref=e33]
            - text: Playground
          - generic [ref=e35]:
            - button "Sign In" [ref=e36] [cursor=pointer]
            - link "Contact Sales" [ref=e37] [cursor=pointer]:
              - /url: /contact
    - generic [ref=e39]:
      - heading "Media Coverage" [level=1] [ref=e40]
      - heading "Featuring ShunyaLabs and our leadership in AI infrastructure, voice technology, and edge computing" [level=2] [ref=e41]
    - generic [ref=e42]:
      - link "Media Logo May 11, 2026 Shunya Labs introduces 'Vak' voice AI system for multilingual India Shunya Labs introduces Vāk, a voice AI system purpose-built for multilingual India, supporting real-time speech recognition across Indic languages. Read Full Article" [ref=e43] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/amp/news/industry/shunya-labs-introduces-vak-voice-ai-system-for-multilingual-india/131015824
        - generic [ref=e44]:
          - img "Media Logo" [ref=e46]
          - paragraph [ref=e47]: May 11, 2026
          - generic [ref=e48]:
            - heading "Shunya Labs introduces 'Vak' voice AI system for multilingual India" [level=3] [ref=e49]
            - paragraph [ref=e50]: Shunya Labs introduces Vāk, a voice AI system purpose-built for multilingual India, supporting real-time speech recognition across Indic languages.
            - button "Read Full Article" [ref=e52]:
              - text: Read Full Article
              - img [ref=e53]
      - link "Media Logo Apr 29, 2026 What enterprises get wrong about AI—and what finally work An enterprise perspective on what companies commonly get wrong about AI adoption — and the approaches that actually deliver results. Read Full Article" [ref=e55] [cursor=pointer]:
        - /url: https://etedge-insights.com/technology/artificial-intelligence/what-enterprises-get-wrong-about-ai-and-what-finally-work/?amp=1
        - generic [ref=e56]:
          - img "Media Logo" [ref=e58]
          - paragraph [ref=e59]: Apr 29, 2026
          - generic [ref=e60]:
            - heading "What enterprises get wrong about AI—and what finally work" [level=3] [ref=e61]
            - paragraph [ref=e62]: An enterprise perspective on what companies commonly get wrong about AI adoption — and the approaches that actually deliver results.
            - button "Read Full Article" [ref=e64]:
              - text: Read Full Article
              - img [ref=e65]
      - link "Media Logo Apr 17, 2026 Shunya Labs launches unified voice AI localisation platform Shunya Labs launches a unified voice AI localisation platform enabling end-to-end dubbing, translation, and multilingual content at scale. Read Full Article" [ref=e67] [cursor=pointer]:
        - /url: https://www.campaignindia.in/article/shunya-labs-launches-unified-voice-ai-localisation-platform/46481dkwezbe46ws5abfs2c2dt
        - generic [ref=e68]:
          - img "Media Logo" [ref=e70]
          - paragraph [ref=e71]: Apr 17, 2026
          - generic [ref=e72]:
            - heading "Shunya Labs launches unified voice AI localisation platform" [level=3] [ref=e73]
            - paragraph [ref=e74]: Shunya Labs launches a unified voice AI localisation platform enabling end-to-end dubbing, translation, and multilingual content at scale.
            - button "Read Full Article" [ref=e76]:
              - text: Read Full Article
              - img [ref=e77]
      - link "Media Logo Apr 9, 2026 Shunya Labs Launches End-to-End Voice AI Platform for Dubbing, Translation and Multilingual Content Localisation Shunya Labs launches an end-to-end voice AI platform built for dubbing, translation, and multilingual content localisation at scale. Read Full Article" [ref=e79] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-launches-end-to-end-voice-ai-platform-for-dubbing-translation-and-multilingual-content-localisation/
        - generic [ref=e80]:
          - img "Media Logo" [ref=e82]
          - paragraph [ref=e83]: Apr 9, 2026
          - generic [ref=e84]:
            - heading "Shunya Labs Launches End-to-End Voice AI Platform for Dubbing, Translation and Multilingual Content Localisation" [level=3] [ref=e85]
            - paragraph [ref=e86]: Shunya Labs launches an end-to-end voice AI platform built for dubbing, translation, and multilingual content localisation at scale.
            - button "Read Full Article" [ref=e88]:
              - text: Read Full Article
              - img [ref=e89]
      - link "Media Logo Apr 9, 2026 Tech and gadget launches today (April 09, 2026) Indian Express covers today's top tech and gadget launches including Shunya Labs among the notable announcements. Read Full Article" [ref=e91] [cursor=pointer]:
        - /url: https://indianexpress.com/article/technology/tech-news-technology/tech-and-gadget-launches-today-april-09-2026-vivo-v70-fe-logitech-pro-x2-superstrike-and-more-10627858/
        - generic [ref=e92]:
          - img "Media Logo" [ref=e94]
          - paragraph [ref=e95]: Apr 9, 2026
          - generic [ref=e96]:
            - heading "Tech and gadget launches today (April 09, 2026)" [level=3] [ref=e97]
            - paragraph [ref=e98]: Indian Express covers today's top tech and gadget launches including Shunya Labs among the notable announcements.
            - button "Read Full Article" [ref=e100]:
              - text: Read Full Article
              - img [ref=e101]
      - link "Media Logo Mar 30, 2026 Indian startups turn to small language models to solve for efficiency, privacy, cost Indian startups are increasingly turning to small language models to solve for efficiency, privacy, and cost challenges. Read Full Article" [ref=e103] [cursor=pointer]:
        - /url: https://m.economictimes.com/tech/startups/indian-startups-turn-to-small-languages-models-to-solve-for-efficiency-privacy-cost/amp_articleshow/129884791.cms
        - generic [ref=e104]:
          - img "Media Logo" [ref=e106]
          - paragraph [ref=e107]: Mar 30, 2026
          - generic [ref=e108]:
            - heading "Indian startups turn to small language models to solve for efficiency, privacy, cost" [level=3] [ref=e109]
            - paragraph [ref=e110]: Indian startups are increasingly turning to small language models to solve for efficiency, privacy, and cost challenges.
            - button "Read Full Article" [ref=e112]:
              - text: Read Full Article
              - img [ref=e113]
      - link "Media Logo Mar 26, 2026 Shunya Labs unveils AI-driven voice intelligence platform for contact centre operations Shunya Labs unveils an AI-powered voice intelligence platform aimed at revolutionizing contact center operations. Read Full Article" [ref=e115] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/news/industry/revolutionizing-contact-centers-shunya-labs-launches-ai-powered-voice-intelligence-platform/129816076
        - generic [ref=e116]:
          - img "Media Logo" [ref=e118]
          - paragraph [ref=e119]: Mar 26, 2026
          - generic [ref=e120]:
            - heading "Shunya Labs unveils AI-driven voice intelligence platform for contact centre operations" [level=3] [ref=e121]
            - paragraph [ref=e122]: Shunya Labs unveils an AI-powered voice intelligence platform aimed at revolutionizing contact center operations.
            - button "Read Full Article" [ref=e124]:
              - text: Read Full Article
              - img [ref=e125]
      - 'link "Media Logo Mar 26, 2026 Top Startup News Today: India''s Deeptech Moment Is Here & Startups Are Leading the Charge India''s deeptech moment is here and startups are leading the charge — featuring Shunya Labs among the top startup news today. Read Full Article" [ref=e127] [cursor=pointer]':
        - /url: https://www.tice.news/tice-trending/top-startup-news-today-indias-deeptech-moment-is-here-and-startups-are-leading-the-charge-11264947
        - generic [ref=e128]:
          - img "Media Logo" [ref=e130]
          - paragraph [ref=e131]: Mar 26, 2026
          - generic [ref=e132]:
            - 'heading "Top Startup News Today: India''s Deeptech Moment Is Here & Startups Are Leading the Charge" [level=3] [ref=e133]'
            - paragraph [ref=e134]: India's deeptech moment is here and startups are leading the charge — featuring Shunya Labs among the top startup news today.
            - button "Read Full Article" [ref=e136]:
              - text: Read Full Article
              - img [ref=e137]
      - link "Media Logo Mar 25, 2026 Shunya Labs Launches Real-Time Voice Intelligence Platform for the Next Generation of Contact Centres Shunya Labs launches a real-time voice intelligence platform purpose-built for the next generation of contact centre operations. Read Full Article" [ref=e139] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-launches-real-time-voice-intelligence-platform-for-the-next-generation-of-contact-centres/
        - generic [ref=e140]:
          - img "Media Logo" [ref=e142]
          - paragraph [ref=e143]: Mar 25, 2026
          - generic [ref=e144]:
            - heading "Shunya Labs Launches Real-Time Voice Intelligence Platform for the Next Generation of Contact Centres" [level=3] [ref=e145]
            - paragraph [ref=e146]: Shunya Labs launches a real-time voice intelligence platform purpose-built for the next generation of contact centre operations.
            - button "Read Full Article" [ref=e148]:
              - text: Read Full Article
              - img [ref=e149]
      - 'link "Media Logo Feb 26, 2026 कमांड के साथ आपका मूड भी पहचानेगा यह AI! कैंसर से जंग के ... Success Story Ritu Mehrotra Shunyaa Labs: भारत की शून्य लैब्स ने वॉइस AI इंफ्रास्ट्रक्चर में ऐसा इतिहास रचा है. Read Full Article" [ref=e151] [cursor=pointer]':
        - /url: https://hindi.news18.com/news/delhi/cancer-survivor-idea-ritu-mehrotra-shunyaa-labs-voice-ai-mood-detection-200-languages-local18-ws-l-10222482.html
        - generic [ref=e152]:
          - img "Media Logo" [ref=e154]
          - paragraph [ref=e155]: Feb 26, 2026
          - generic [ref=e156]:
            - heading "कमांड के साथ आपका मूड भी पहचानेगा यह AI! कैंसर से जंग के ..." [level=3] [ref=e157]
            - paragraph [ref=e158]: "Success Story Ritu Mehrotra Shunyaa Labs: भारत की शून्य लैब्स ने वॉइस AI इंफ्रास्ट्रक्चर में ऐसा इतिहास रचा है."
            - button "Read Full Article" [ref=e160]:
              - text: Read Full Article
              - img [ref=e161]
      - 'link "Media Logo Feb 19, 2026 India must build sovereign infra for artificial intelligence: Experts The time is ripe for India to bring an ‘artificial intelligence'' infrastructure on the likes of digital public ... Read Full Article" [ref=e163] [cursor=pointer]':
        - /url: https://www.tribuneindia.com/news/india/india-must-build-sovereign-infra-for-artificial-intelligence-experts/amp
        - generic [ref=e164]:
          - img "Media Logo" [ref=e166]
          - paragraph [ref=e167]: Feb 19, 2026
          - generic [ref=e168]:
            - 'heading "India must build sovereign infra for artificial intelligence: Experts" [level=3] [ref=e169]'
            - paragraph [ref=e170]: The time is ripe for India to bring an ‘artificial intelligence' infrastructure on the likes of digital public ...
            - button "Read Full Article" [ref=e172]:
              - text: Read Full Article
              - img [ref=e173]
      - link "Media Logo Feb 19, 2026 Shunya Labs, in partnership with Nasscom, Launches Vāķ, India’s ... Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ... Read Full Article" [ref=e175] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-in-partnership-with-nasscom-launches-vak-indias-largest-open-weight-voice-ai-across-55-languages/
        - generic [ref=e176]:
          - img "Media Logo" [ref=e178]
          - paragraph [ref=e179]: Feb 19, 2026
          - generic [ref=e180]:
            - heading "Shunya Labs, in partnership with Nasscom, Launches Vāķ, India’s ..." [level=3] [ref=e181]
            - paragraph [ref=e182]: Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ...
            - button "Read Full Article" [ref=e184]:
              - text: Read Full Article
              - img [ref=e185]
      - link "Media Logo Feb 18, 2026 Shunya Labs Unveils Real-Time AI Translation Model for ... Launch Vāķ, a real-time voice translation model for 55 Indian languages, at India AI Impact Summit 2026. Read Full Article" [ref=e187] [cursor=pointer]:
        - /url: https://analyticsindiamag.com/ai-news/shunya-labs-unveils-real-time-ai-translation-model-for-55-indian-languages
        - generic [ref=e188]:
          - img "Media Logo" [ref=e190]
          - paragraph [ref=e191]: Feb 18, 2026
          - generic [ref=e192]:
            - heading "Shunya Labs Unveils Real-Time AI Translation Model for ..." [level=3] [ref=e193]
            - paragraph [ref=e194]: Launch Vāķ, a real-time voice translation model for 55 Indian languages, at India AI Impact Summit 2026.
            - button "Read Full Article" [ref=e196]:
              - text: Read Full Article
              - img [ref=e197]
      - link "Media Logo Feb 18, 2026 Shunya Labs unveils Vāķ, a real-time translation model ... Open-weight translation model with voice preservation, <1.5s latency, and zero-shot cloning, enabling sovereign ... Read Full Article" [ref=e199] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-unveils-vak-a-real-time-translation-model-available-in-55-indian-languages-across-2970-translation-pairs/
        - generic [ref=e200]:
          - img "Media Logo" [ref=e202]
          - paragraph [ref=e203]: Feb 18, 2026
          - generic [ref=e204]:
            - heading "Shunya Labs unveils Vāķ, a real-time translation model ..." [level=3] [ref=e205]
            - paragraph [ref=e206]: Open-weight translation model with voice preservation, <1.5s latency, and zero-shot cloning, enabling sovereign ...
            - button "Read Full Article" [ref=e208]:
              - text: Read Full Article
              - img [ref=e209]
      - 'link "Media Logo Feb 18, 2026 Shunya Labs unveils Vāķ, a real-time translation model ... Gurugram : Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ... Read Full Article" [ref=e211] [cursor=pointer]':
        - /url: https://www.apnnews.com/shunya-labs-unveils-vak-a-real-time-translation-model-available-in-55-indian-languages-across-2970-translation-pairs/
        - generic [ref=e212]:
          - img "Media Logo" [ref=e214]
          - paragraph [ref=e215]: Feb 18, 2026
          - generic [ref=e216]:
            - heading "Shunya Labs unveils Vāķ, a real-time translation model ..." [level=3] [ref=e217]
            - paragraph [ref=e218]: "Gurugram : Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ..."
            - button "Read Full Article" [ref=e220]:
              - text: Read Full Article
              - img [ref=e221]
      - link "Media Logo Feb 13, 2026 Shunya Labs develops CPU-optimized voice AI stack for ... Shunya Labs has announced a CPU-compatible voice AI architecture that enables high-accuracy speech recognition and multilingual ... Read Full Article" [ref=e223] [cursor=pointer]:
        - /url: https://www.varindia.com/news/shunya-labs-develops-cpu-optimized-voice-ai-stack-for-the-next-billion-users
        - generic [ref=e224]:
          - img "Media Logo" [ref=e226]
          - paragraph [ref=e227]: Feb 13, 2026
          - generic [ref=e228]:
            - heading "Shunya Labs develops CPU-optimized voice AI stack for ..." [level=3] [ref=e229]
            - paragraph [ref=e230]: Shunya Labs has announced a CPU-compatible voice AI architecture that enables high-accuracy speech recognition and multilingual ...
            - button "Read Full Article" [ref=e232]:
              - text: Read Full Article
              - img [ref=e233]
      - link "Media Logo Feb 13, 2026 Shunya Labs unveils CPU-compatible voice AI stack for real ... The platform targets regulated sectors such as healthcare, BFSI and government, where low latency and data sovereignty are critical. Read Full Article" [ref=e235] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/news/industry/shunya-labs-launches-innovative-cpu-compatible-voice-ai-stack-for-real-time-applications/128297497
        - generic [ref=e236]:
          - img "Media Logo" [ref=e238]
          - paragraph [ref=e239]: Feb 13, 2026
          - generic [ref=e240]:
            - heading "Shunya Labs unveils CPU-compatible voice AI stack for real ..." [level=3] [ref=e241]
            - paragraph [ref=e242]: The platform targets regulated sectors such as healthcare, BFSI and government, where low latency and data sovereignty are critical.
            - button "Read Full Article" [ref=e244]:
              - text: Read Full Article
              - img [ref=e245]
      - link "Media Logo Feb 12, 2026 Shunya Labs Builds the CPU Compatible Voice AI Stack for the ... Shunya Labs, a research-driven voice AI company, today announced a CPU-compatible voice AI architecture that enables ... Read Full Article" [ref=e247] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-builds-the-cpu-compatible-voice-ai-stack-for-the-next-billion-users/
        - generic [ref=e248]:
          - img "Media Logo" [ref=e250]
          - paragraph [ref=e251]: Feb 12, 2026
          - generic [ref=e252]:
            - heading "Shunya Labs Builds the CPU Compatible Voice AI Stack for the ..." [level=3] [ref=e253]
            - paragraph [ref=e254]: Shunya Labs, a research-driven voice AI company, today announced a CPU-compatible voice AI architecture that enables ...
            - button "Read Full Article" [ref=e256]:
              - text: Read Full Article
              - img [ref=e257]
      - link "Media Logo Sep 30, 2025 Nasscom planning local benchmarks for Indic AI models ... The plan is in its early stages, with Nasscom AI, the industry body's AI initiative, set to start consultations with industry experts ... Read Full Article" [ref=e259] [cursor=pointer]:
        - /url: https://m.economictimes.com/tech/artificial-intelligence/nasscom-planning-local-benchmarks-for-indic-ai-models/amp_articleshow/124218208.cms
        - generic [ref=e260]:
          - img "Media Logo" [ref=e262]
          - paragraph [ref=e263]: Sep 30, 2025
          - generic [ref=e264]:
            - heading "Nasscom planning local benchmarks for Indic AI models ..." [level=3] [ref=e265]
            - paragraph [ref=e266]: The plan is in its early stages, with Nasscom AI, the industry body's AI initiative, set to start consultations with industry experts ...
            - button "Read Full Article" [ref=e268]:
              - text: Read Full Article
              - img [ref=e269]
      - link "Media Logo Sep 22, 2025 Indian AI lab challenges Hugging Face over alleged Nvidia bias According to the platform, its speech recognition model Pingala V1 has reached a word error rate (WER) of 3.1%. ... Read Full Article" [ref=e271] [cursor=pointer]:
        - /url: https://www.techinasia.com/indian-ai-lab-shunya-labs-clashes-hugging-face-over-nvidias-leadership
        - generic [ref=e272]:
          - img "Media Logo" [ref=e274]
          - paragraph [ref=e275]: Sep 22, 2025
          - generic [ref=e276]:
            - heading "Indian AI lab challenges Hugging Face over alleged Nvidia bias" [level=3] [ref=e277]
            - paragraph [ref=e278]: According to the platform, its speech recognition model Pingala V1 has reached a word error rate (WER) of 3.1%. ...
            - button "Read Full Article" [ref=e280]:
              - text: Read Full Article
              - img [ref=e281]
      - 'link "Media Logo Aug 28, 2025 Redefining Voice Tech: Check 5 Automatic Speech Recognition ... Speech recognition technology is evolving rapidly. Automatic Speech Recognition (ASR) engines are no longer just simple ... Read Full Article" [ref=e283] [cursor=pointer]':
        - /url: https://zeenews.india.com/technology/redefining-voice-tech-check-5-automatic-speech-recognition-engines-in-2025-2952829.html
        - generic [ref=e284]:
          - img "Media Logo" [ref=e286]
          - paragraph [ref=e287]: Aug 28, 2025
          - generic [ref=e288]:
            - 'heading "Redefining Voice Tech: Check 5 Automatic Speech Recognition ..." [level=3] [ref=e289]'
            - paragraph [ref=e290]: Speech recognition technology is evolving rapidly. Automatic Speech Recognition (ASR) engines are no longer just simple ...
            - button "Read Full Article" [ref=e292]:
              - text: Read Full Article
              - img [ref=e293]
      - 'link "Media Logo Aug 26, 2025 The New Digital Divide in AI: Why Edge-Ready, CPU-First Models ... The global artificial intelligence (AI) market is expanding at a staggering pace. In 2024, it was valued at $257.68 billion, with ... Read Full Article" [ref=e295] [cursor=pointer]':
        - /url: https://www.unite.ai/the-new-digital-divide-in-ai-why-edge-ready-cpu-first-models-will-win-the-cost-war/
        - generic [ref=e296]:
          - img "Media Logo" [ref=e298]
          - paragraph [ref=e299]: Aug 26, 2025
          - generic [ref=e300]:
            - 'heading "The New Digital Divide in AI: Why Edge-Ready, CPU-First Models ..." [level=3] [ref=e301]'
            - paragraph [ref=e302]: The global artificial intelligence (AI) market is expanding at a staggering pace. In 2024, it was valued at $257.68 billion, with ...
            - button "Read Full Article" [ref=e304]:
              - text: Read Full Article
              - img [ref=e305]
      - 'link "Media Logo Jul 24, 2025 Shunya Labs Launches Pingala V1: Top-Ranked CPU-Based ... MENLO PARK, Calif., July 24, 2025 /PRNewswire/ -- Shunya Labs, the AI infrastructure company pioneering real-time, privacy-first ... Read Full Article" [ref=e307] [cursor=pointer]':
        - /url: https://finance.yahoo.com/news/shunya-labs-launches-pingala-v1-135500875.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMtr0jnmGFiQWsfH3SgnlGfhIzj5YjDGLEAIshdW1UY5M_FG5tDC0OqCi9WV9FAOP4_IlHvya0EhubMNezysyydSXpq3OfJcj3ujbmwmWWvJydYH7IXk6yfnAMoMj_vbhj0DO4Dn9kPGrWCzjQgosW_Sx8cnY_B2GlDAENC7nJJW
        - generic [ref=e308]:
          - img "Media Logo" [ref=e310]
          - paragraph [ref=e311]: Jul 24, 2025
          - generic [ref=e312]:
            - 'heading "Shunya Labs Launches Pingala V1: Top-Ranked CPU-Based ..." [level=3] [ref=e313]'
            - paragraph [ref=e314]: MENLO PARK, Calif., July 24, 2025 /PRNewswire/ -- Shunya Labs, the AI infrastructure company pioneering real-time, privacy-first ...
            - button "Read Full Article" [ref=e316]:
              - text: Read Full Article
              - img [ref=e317]
      - link "Media Logo Jul 17, 2025 United We Care’ Launches Shunya Labs, a Voice AI Infra ... The AI-driven mental health solutions startup has launched Shunya Labs to redefine AI speech technology. Read Full Article" [ref=e319] [cursor=pointer]:
        - /url: https://analyticsindiamag.com/ai-news-updates/united-we-care-launches-shunya-labs-a-voice-ai-infra-for-32-indic-languages/
        - generic [ref=e320]:
          - img "Media Logo" [ref=e322]
          - paragraph [ref=e323]: Jul 17, 2025
          - generic [ref=e324]:
            - heading "United We Care’ Launches Shunya Labs, a Voice AI Infra ..." [level=3] [ref=e325]
            - paragraph [ref=e326]: The AI-driven mental health solutions startup has launched Shunya Labs to redefine AI speech technology.
            - button "Read Full Article" [ref=e328]:
              - text: Read Full Article
              - img [ref=e329]
      - link "Media Logo Jul 17, 2025 United We Care Launches Shunya Labs to Revolutionise AI... The platform supports over 32 Indic languages, including Hindi, Marathi, Assamese, and Maithili. Seven additional languages are currently being... Read Full Article" [ref=e331] [cursor=pointer]:
        - /url: https://www.entrepreneur.com/en-in/news-and-trends/united-we-care-launches-shunya-labs-to-revolutionise-ai/494739
        - generic [ref=e332]:
          - img "Media Logo" [ref=e334]
          - paragraph [ref=e335]: Jul 17, 2025
          - generic [ref=e336]:
            - heading "United We Care Launches Shunya Labs to Revolutionise AI..." [level=3] [ref=e337]
            - paragraph [ref=e338]: The platform supports over 32 Indic languages, including Hindi, Marathi, Assamese, and Maithili. Seven additional languages are currently being...
            - button "Read Full Article" [ref=e340]:
              - text: Read Full Article
              - img [ref=e341]
      - link "Media Logo Jan 15, 2025 Kunal Shah, Ashneer Grover-backed wellness startup pivots ... United We Care, backed by prominent investors Kunal Shah and Ashneer Grover, pivots to AI with Shunya Labs, aiming to ra... Read Full Article" [ref=e343] [cursor=pointer]:
        - /url: https://www.vccircle.com/kunalshah-ashneer-grover-backed-wellness-startup-pivots-to-ai-looks-to-raise-series-a
        - generic [ref=e344]:
          - img "Media Logo" [ref=e346]
          - paragraph [ref=e347]: Jan 15, 2025
          - generic [ref=e348]:
            - heading "Kunal Shah, Ashneer Grover-backed wellness startup pivots ..." [level=3] [ref=e349]
            - paragraph [ref=e350]: United We Care, backed by prominent investors Kunal Shah and Ashneer Grover, pivots to AI with Shunya Labs, aiming to ra...
            - button "Read Full Article" [ref=e352]:
              - text: Read Full Article
              - img [ref=e353]
      - link "Media Logo Jan 10, 2025 Why AI Still Falls Short in Solving Healthcare's Hardest Problems... An in-depth analysis of AI's current limitations in healthcare and the challenges that remain in solving complex medical... Read Full Article" [ref=e355] [cursor=pointer]:
        - /url: https://healthcare.financialexpressb2b.com/interviews/why-ai-still-falls-short-in-solving-healthcares-problems
        - generic [ref=e356]:
          - img "Media Logo" [ref=e358]
          - paragraph [ref=e359]: Jan 10, 2025
          - generic [ref=e360]:
            - heading "Why AI Still Falls Short in Solving Healthcare's Hardest Problems..." [level=3] [ref=e361]
            - paragraph [ref=e362]: An in-depth analysis of AI's current limitations in healthcare and the challenges that remain in solving complex medical...
            - button "Read Full Article" [ref=e364]:
              - text: Read Full Article
              - img [ref=e365]
      - 'link "Media Logo Jan 08, 2025 From Google to Shunya Labs: Who''s Really Winning the Voice... A comprehensive comparison of voice technology leaders, examining how Shunya Labs competes with tech giants like Google... Read Full Article" [ref=e367] [cursor=pointer]':
        - /url: https://www.smartprix.com/bytes/from-google-to-shunya-labs-whos-really-winning-the-voice-tech-arms-race/
        - generic [ref=e368]:
          - img "Media Logo" [ref=e370]
          - paragraph [ref=e371]: Jan 08, 2025
          - generic [ref=e372]:
            - 'heading "From Google to Shunya Labs: Who''s Really Winning the Voice..." [level=3] [ref=e373]'
            - paragraph [ref=e374]: A comprehensive comparison of voice technology leaders, examining how Shunya Labs competes with tech giants like Google...
            - button "Read Full Article" [ref=e376]:
              - text: Read Full Article
              - img [ref=e377]
      - link "Media Logo Jan 05, 2025 5 Groundbreaking Speech Recognition Engines That Are... Featuring the top 5 speech recognition engines revolutionizing automatic speech recognition, including Shunya Labs' inno... Read Full Article" [ref=e379] [cursor=pointer]:
        - /url: https://cxotoday.com/story/5-groundbreaking-speech-recognition-engines-that-are-redefining-the-asr-landscape-in-2025/
        - generic [ref=e380]:
          - img "Media Logo" [ref=e382]
          - paragraph [ref=e383]: Jan 05, 2025
          - generic [ref=e384]:
            - heading "5 Groundbreaking Speech Recognition Engines That Are..." [level=3] [ref=e385]
            - paragraph [ref=e386]: Featuring the top 5 speech recognition engines revolutionizing automatic speech recognition, including Shunya Labs' inno...
            - button "Read Full Article" [ref=e388]:
              - text: Read Full Article
              - img [ref=e389]
      - 'link "Media Logo Jan 03, 2025 From Talk to Text: 5 Speech Recognition Engines Defining th... An analysis of the leading speech recognition technologies shaping 2025, highlighting breakthrough innovations in real-t... Read Full Article" [ref=e391] [cursor=pointer]':
        - /url: https://cxotoday.com/story/from-talk-to-text-5-speech-recognition-engines-defining-the-pace-for-2025/
        - generic [ref=e392]:
          - img "Media Logo" [ref=e394]
          - paragraph [ref=e395]: Jan 03, 2025
          - generic [ref=e396]:
            - 'heading "From Talk to Text: 5 Speech Recognition Engines Defining th..." [level=3] [ref=e397]'
            - paragraph [ref=e398]: An analysis of the leading speech recognition technologies shaping 2025, highlighting breakthrough innovations in real-t...
            - button "Read Full Article" [ref=e400]:
              - text: Read Full Article
              - img [ref=e401]
      - 'link "Media Logo Jan 03, 2025 From Talk to Text: 5 Speech Recognition Engines Defining th... Exploring the cutting-edge speech recognition engines that are setting new standards for accuracy, speed, and multilingu... Read Full Article" [ref=e403] [cursor=pointer]':
        - /url: https://www.cxodigitalpulse.com/from-talk-to-text-5-speech-recognition-engines-defining-the-pace-for-2025/
        - generic [ref=e404]:
          - img "Media Logo" [ref=e406]
          - paragraph [ref=e407]: Jan 03, 2025
          - generic [ref=e408]:
            - 'heading "From Talk to Text: 5 Speech Recognition Engines Defining th..." [level=3] [ref=e409]'
            - paragraph [ref=e410]: Exploring the cutting-edge speech recognition engines that are setting new standards for accuracy, speed, and multilingu...
            - button "Read Full Article" [ref=e412]:
              - text: Read Full Article
              - img [ref=e413]
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
        - paragraph [ref=e499]: © 2026 Shunya Labs, Inc. All rights reserved.
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
     |                                                                                      ^ Error: 2 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```