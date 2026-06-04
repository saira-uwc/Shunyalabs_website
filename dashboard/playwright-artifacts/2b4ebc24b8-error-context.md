# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/news-media/design.spec.js >> Resources - News & Media design compliance >> Figma design compliance
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
    - generic [ref=e11]:
      - heading "Media Coverage" [level=1] [ref=e12]
      - heading "Featuring ShunyaLabs and our leadership in AI infrastructure, voice technology, and edge computing" [level=2] [ref=e13]
    - generic [ref=e14]:
      - link "Media Logo May 11, 2026 Shunya Labs introduces 'Vak' voice AI system for multilingual India Shunya Labs introduces Vāk, a voice AI system purpose-built for multilingual India, supporting real-time speech recognition across Indic languages. Read Full Article" [ref=e15] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/amp/news/industry/shunya-labs-introduces-vak-voice-ai-system-for-multilingual-india/131015824
        - generic [ref=e16]:
          - img "Media Logo" [ref=e18]
          - paragraph [ref=e19]: May 11, 2026
          - generic [ref=e20]:
            - heading "Shunya Labs introduces 'Vak' voice AI system for multilingual India" [level=3] [ref=e21]
            - paragraph [ref=e22]: Shunya Labs introduces Vāk, a voice AI system purpose-built for multilingual India, supporting real-time speech recognition across Indic languages.
            - button "Read Full Article" [ref=e24]:
              - text: Read Full Article
              - img [ref=e25]
      - link "Media Logo Apr 29, 2026 What enterprises get wrong about AI—and what finally work An enterprise perspective on what companies commonly get wrong about AI adoption — and the approaches that actually deliver results. Read Full Article" [ref=e27] [cursor=pointer]:
        - /url: https://etedge-insights.com/technology/artificial-intelligence/what-enterprises-get-wrong-about-ai-and-what-finally-work/?amp=1
        - generic [ref=e28]:
          - img "Media Logo" [ref=e30]
          - paragraph [ref=e31]: Apr 29, 2026
          - generic [ref=e32]:
            - heading "What enterprises get wrong about AI—and what finally work" [level=3] [ref=e33]
            - paragraph [ref=e34]: An enterprise perspective on what companies commonly get wrong about AI adoption — and the approaches that actually deliver results.
            - button "Read Full Article" [ref=e36]:
              - text: Read Full Article
              - img [ref=e37]
      - link "Media Logo Apr 17, 2026 Shunya Labs launches unified voice AI localisation platform Shunya Labs launches a unified voice AI localisation platform enabling end-to-end dubbing, translation, and multilingual content at scale. Read Full Article" [ref=e39] [cursor=pointer]:
        - /url: https://www.campaignindia.in/article/shunya-labs-launches-unified-voice-ai-localisation-platform/46481dkwezbe46ws5abfs2c2dt
        - generic [ref=e40]:
          - img "Media Logo" [ref=e42]
          - paragraph [ref=e43]: Apr 17, 2026
          - generic [ref=e44]:
            - heading "Shunya Labs launches unified voice AI localisation platform" [level=3] [ref=e45]
            - paragraph [ref=e46]: Shunya Labs launches a unified voice AI localisation platform enabling end-to-end dubbing, translation, and multilingual content at scale.
            - button "Read Full Article" [ref=e48]:
              - text: Read Full Article
              - img [ref=e49]
      - link "Media Logo Apr 9, 2026 Shunya Labs Launches End-to-End Voice AI Platform for Dubbing, Translation and Multilingual Content Localisation Shunya Labs launches an end-to-end voice AI platform built for dubbing, translation, and multilingual content localisation at scale. Read Full Article" [ref=e51] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-launches-end-to-end-voice-ai-platform-for-dubbing-translation-and-multilingual-content-localisation/
        - generic [ref=e52]:
          - img "Media Logo" [ref=e54]
          - paragraph [ref=e55]: Apr 9, 2026
          - generic [ref=e56]:
            - heading "Shunya Labs Launches End-to-End Voice AI Platform for Dubbing, Translation and Multilingual Content Localisation" [level=3] [ref=e57]
            - paragraph [ref=e58]: Shunya Labs launches an end-to-end voice AI platform built for dubbing, translation, and multilingual content localisation at scale.
            - button "Read Full Article" [ref=e60]:
              - text: Read Full Article
              - img [ref=e61]
      - link "Media Logo Apr 9, 2026 Tech and gadget launches today (April 09, 2026) Indian Express covers today's top tech and gadget launches including Shunya Labs among the notable announcements. Read Full Article" [ref=e63] [cursor=pointer]:
        - /url: https://indianexpress.com/article/technology/tech-news-technology/tech-and-gadget-launches-today-april-09-2026-vivo-v70-fe-logitech-pro-x2-superstrike-and-more-10627858/
        - generic [ref=e64]:
          - img "Media Logo" [ref=e66]
          - paragraph [ref=e67]: Apr 9, 2026
          - generic [ref=e68]:
            - heading "Tech and gadget launches today (April 09, 2026)" [level=3] [ref=e69]
            - paragraph [ref=e70]: Indian Express covers today's top tech and gadget launches including Shunya Labs among the notable announcements.
            - button "Read Full Article" [ref=e72]:
              - text: Read Full Article
              - img [ref=e73]
      - link "Media Logo Mar 30, 2026 Indian startups turn to small language models to solve for efficiency, privacy, cost Indian startups are increasingly turning to small language models to solve for efficiency, privacy, and cost challenges. Read Full Article" [ref=e75] [cursor=pointer]:
        - /url: https://m.economictimes.com/tech/startups/indian-startups-turn-to-small-languages-models-to-solve-for-efficiency-privacy-cost/amp_articleshow/129884791.cms
        - generic [ref=e76]:
          - img "Media Logo" [ref=e78]
          - paragraph [ref=e79]: Mar 30, 2026
          - generic [ref=e80]:
            - heading "Indian startups turn to small language models to solve for efficiency, privacy, cost" [level=3] [ref=e81]
            - paragraph [ref=e82]: Indian startups are increasingly turning to small language models to solve for efficiency, privacy, and cost challenges.
            - button "Read Full Article" [ref=e84]:
              - text: Read Full Article
              - img [ref=e85]
      - link "Media Logo Mar 26, 2026 Shunya Labs unveils AI-driven voice intelligence platform for contact centre operations Shunya Labs unveils an AI-powered voice intelligence platform aimed at revolutionizing contact center operations. Read Full Article" [ref=e87] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/news/industry/revolutionizing-contact-centers-shunya-labs-launches-ai-powered-voice-intelligence-platform/129816076
        - generic [ref=e88]:
          - img "Media Logo" [ref=e90]
          - paragraph [ref=e91]: Mar 26, 2026
          - generic [ref=e92]:
            - heading "Shunya Labs unveils AI-driven voice intelligence platform for contact centre operations" [level=3] [ref=e93]
            - paragraph [ref=e94]: Shunya Labs unveils an AI-powered voice intelligence platform aimed at revolutionizing contact center operations.
            - button "Read Full Article" [ref=e96]:
              - text: Read Full Article
              - img [ref=e97]
      - 'link "Media Logo Mar 26, 2026 Top Startup News Today: India''s Deeptech Moment Is Here & Startups Are Leading the Charge India''s deeptech moment is here and startups are leading the charge — featuring Shunya Labs among the top startup news today. Read Full Article" [ref=e99] [cursor=pointer]':
        - /url: https://www.tice.news/tice-trending/top-startup-news-today-indias-deeptech-moment-is-here-and-startups-are-leading-the-charge-11264947
        - generic [ref=e100]:
          - img "Media Logo" [ref=e102]
          - paragraph [ref=e103]: Mar 26, 2026
          - generic [ref=e104]:
            - 'heading "Top Startup News Today: India''s Deeptech Moment Is Here & Startups Are Leading the Charge" [level=3] [ref=e105]'
            - paragraph [ref=e106]: India's deeptech moment is here and startups are leading the charge — featuring Shunya Labs among the top startup news today.
            - button "Read Full Article" [ref=e108]:
              - text: Read Full Article
              - img [ref=e109]
      - link "Media Logo Mar 25, 2026 Shunya Labs Launches Real-Time Voice Intelligence Platform for the Next Generation of Contact Centres Shunya Labs launches a real-time voice intelligence platform purpose-built for the next generation of contact centre operations. Read Full Article" [ref=e111] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-launches-real-time-voice-intelligence-platform-for-the-next-generation-of-contact-centres/
        - generic [ref=e112]:
          - img "Media Logo" [ref=e114]
          - paragraph [ref=e115]: Mar 25, 2026
          - generic [ref=e116]:
            - heading "Shunya Labs Launches Real-Time Voice Intelligence Platform for the Next Generation of Contact Centres" [level=3] [ref=e117]
            - paragraph [ref=e118]: Shunya Labs launches a real-time voice intelligence platform purpose-built for the next generation of contact centre operations.
            - button "Read Full Article" [ref=e120]:
              - text: Read Full Article
              - img [ref=e121]
      - 'link "Media Logo Feb 26, 2026 कमांड के साथ आपका मूड भी पहचानेगा यह AI! कैंसर से जंग के ... Success Story Ritu Mehrotra Shunyaa Labs: भारत की शून्य लैब्स ने वॉइस AI इंफ्रास्ट्रक्चर में ऐसा इतिहास रचा है. Read Full Article" [ref=e123] [cursor=pointer]':
        - /url: https://hindi.news18.com/news/delhi/cancer-survivor-idea-ritu-mehrotra-shunyaa-labs-voice-ai-mood-detection-200-languages-local18-ws-l-10222482.html
        - generic [ref=e124]:
          - img "Media Logo" [ref=e126]
          - paragraph [ref=e127]: Feb 26, 2026
          - generic [ref=e128]:
            - heading "कमांड के साथ आपका मूड भी पहचानेगा यह AI! कैंसर से जंग के ..." [level=3] [ref=e129]
            - paragraph [ref=e130]: "Success Story Ritu Mehrotra Shunyaa Labs: भारत की शून्य लैब्स ने वॉइस AI इंफ्रास्ट्रक्चर में ऐसा इतिहास रचा है."
            - button "Read Full Article" [ref=e132]:
              - text: Read Full Article
              - img [ref=e133]
      - 'link "Media Logo Feb 19, 2026 India must build sovereign infra for artificial intelligence: Experts The time is ripe for India to bring an ‘artificial intelligence'' infrastructure on the likes of digital public ... Read Full Article" [ref=e135] [cursor=pointer]':
        - /url: https://www.tribuneindia.com/news/india/india-must-build-sovereign-infra-for-artificial-intelligence-experts/amp
        - generic [ref=e136]:
          - img "Media Logo" [ref=e138]
          - paragraph [ref=e139]: Feb 19, 2026
          - generic [ref=e140]:
            - 'heading "India must build sovereign infra for artificial intelligence: Experts" [level=3] [ref=e141]'
            - paragraph [ref=e142]: The time is ripe for India to bring an ‘artificial intelligence' infrastructure on the likes of digital public ...
            - button "Read Full Article" [ref=e144]:
              - text: Read Full Article
              - img [ref=e145]
      - link "Media Logo Feb 19, 2026 Shunya Labs, in partnership with Nasscom, Launches Vāķ, India’s ... Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ... Read Full Article" [ref=e147] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-in-partnership-with-nasscom-launches-vak-indias-largest-open-weight-voice-ai-across-55-languages/
        - generic [ref=e148]:
          - img "Media Logo" [ref=e150]
          - paragraph [ref=e151]: Feb 19, 2026
          - generic [ref=e152]:
            - heading "Shunya Labs, in partnership with Nasscom, Launches Vāķ, India’s ..." [level=3] [ref=e153]
            - paragraph [ref=e154]: Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ...
            - button "Read Full Article" [ref=e156]:
              - text: Read Full Article
              - img [ref=e157]
      - link "Media Logo Feb 18, 2026 Shunya Labs Unveils Real-Time AI Translation Model for ... Launch Vāķ, a real-time voice translation model for 55 Indian languages, at India AI Impact Summit 2026. Read Full Article" [ref=e159] [cursor=pointer]:
        - /url: https://analyticsindiamag.com/ai-news/shunya-labs-unveils-real-time-ai-translation-model-for-55-indian-languages
        - generic [ref=e160]:
          - img "Media Logo" [ref=e162]
          - paragraph [ref=e163]: Feb 18, 2026
          - generic [ref=e164]:
            - heading "Shunya Labs Unveils Real-Time AI Translation Model for ..." [level=3] [ref=e165]
            - paragraph [ref=e166]: Launch Vāķ, a real-time voice translation model for 55 Indian languages, at India AI Impact Summit 2026.
            - button "Read Full Article" [ref=e168]:
              - text: Read Full Article
              - img [ref=e169]
      - link "Media Logo Feb 18, 2026 Shunya Labs unveils Vāķ, a real-time translation model ... Open-weight translation model with voice preservation, <1.5s latency, and zero-shot cloning, enabling sovereign ... Read Full Article" [ref=e171] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-unveils-vak-a-real-time-translation-model-available-in-55-indian-languages-across-2970-translation-pairs/
        - generic [ref=e172]:
          - img "Media Logo" [ref=e174]
          - paragraph [ref=e175]: Feb 18, 2026
          - generic [ref=e176]:
            - heading "Shunya Labs unveils Vāķ, a real-time translation model ..." [level=3] [ref=e177]
            - paragraph [ref=e178]: Open-weight translation model with voice preservation, <1.5s latency, and zero-shot cloning, enabling sovereign ...
            - button "Read Full Article" [ref=e180]:
              - text: Read Full Article
              - img [ref=e181]
      - 'link "Media Logo Feb 18, 2026 Shunya Labs unveils Vāķ, a real-time translation model ... Gurugram : Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ... Read Full Article" [ref=e183] [cursor=pointer]':
        - /url: https://www.apnnews.com/shunya-labs-unveils-vak-a-real-time-translation-model-available-in-55-indian-languages-across-2970-translation-pairs/
        - generic [ref=e184]:
          - img "Media Logo" [ref=e186]
          - paragraph [ref=e187]: Feb 18, 2026
          - generic [ref=e188]:
            - heading "Shunya Labs unveils Vāķ, a real-time translation model ..." [level=3] [ref=e189]
            - paragraph [ref=e190]: "Gurugram : Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ..."
            - button "Read Full Article" [ref=e192]:
              - text: Read Full Article
              - img [ref=e193]
      - link "Media Logo Feb 13, 2026 Shunya Labs develops CPU-optimized voice AI stack for ... Shunya Labs has announced a CPU-compatible voice AI architecture that enables high-accuracy speech recognition and multilingual ... Read Full Article" [ref=e195] [cursor=pointer]:
        - /url: https://www.varindia.com/news/shunya-labs-develops-cpu-optimized-voice-ai-stack-for-the-next-billion-users
        - generic [ref=e196]:
          - img "Media Logo" [ref=e198]
          - paragraph [ref=e199]: Feb 13, 2026
          - generic [ref=e200]:
            - heading "Shunya Labs develops CPU-optimized voice AI stack for ..." [level=3] [ref=e201]
            - paragraph [ref=e202]: Shunya Labs has announced a CPU-compatible voice AI architecture that enables high-accuracy speech recognition and multilingual ...
            - button "Read Full Article" [ref=e204]:
              - text: Read Full Article
              - img [ref=e205]
      - link "Media Logo Feb 13, 2026 Shunya Labs unveils CPU-compatible voice AI stack for real ... The platform targets regulated sectors such as healthcare, BFSI and government, where low latency and data sovereignty are critical. Read Full Article" [ref=e207] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/news/industry/shunya-labs-launches-innovative-cpu-compatible-voice-ai-stack-for-real-time-applications/128297497
        - generic [ref=e208]:
          - img "Media Logo" [ref=e210]
          - paragraph [ref=e211]: Feb 13, 2026
          - generic [ref=e212]:
            - heading "Shunya Labs unveils CPU-compatible voice AI stack for real ..." [level=3] [ref=e213]
            - paragraph [ref=e214]: The platform targets regulated sectors such as healthcare, BFSI and government, where low latency and data sovereignty are critical.
            - button "Read Full Article" [ref=e216]:
              - text: Read Full Article
              - img [ref=e217]
      - link "Media Logo Feb 12, 2026 Shunya Labs Builds the CPU Compatible Voice AI Stack for the ... Shunya Labs, a research-driven voice AI company, today announced a CPU-compatible voice AI architecture that enables ... Read Full Article" [ref=e219] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-builds-the-cpu-compatible-voice-ai-stack-for-the-next-billion-users/
        - generic [ref=e220]:
          - img "Media Logo" [ref=e222]
          - paragraph [ref=e223]: Feb 12, 2026
          - generic [ref=e224]:
            - heading "Shunya Labs Builds the CPU Compatible Voice AI Stack for the ..." [level=3] [ref=e225]
            - paragraph [ref=e226]: Shunya Labs, a research-driven voice AI company, today announced a CPU-compatible voice AI architecture that enables ...
            - button "Read Full Article" [ref=e228]:
              - text: Read Full Article
              - img [ref=e229]
      - link "Media Logo Sep 30, 2025 Nasscom planning local benchmarks for Indic AI models ... The plan is in its early stages, with Nasscom AI, the industry body's AI initiative, set to start consultations with industry experts ... Read Full Article" [ref=e231] [cursor=pointer]:
        - /url: https://m.economictimes.com/tech/artificial-intelligence/nasscom-planning-local-benchmarks-for-indic-ai-models/amp_articleshow/124218208.cms
        - generic [ref=e232]:
          - img "Media Logo" [ref=e234]
          - paragraph [ref=e235]: Sep 30, 2025
          - generic [ref=e236]:
            - heading "Nasscom planning local benchmarks for Indic AI models ..." [level=3] [ref=e237]
            - paragraph [ref=e238]: The plan is in its early stages, with Nasscom AI, the industry body's AI initiative, set to start consultations with industry experts ...
            - button "Read Full Article" [ref=e240]:
              - text: Read Full Article
              - img [ref=e241]
      - link "Media Logo Sep 22, 2025 Indian AI lab challenges Hugging Face over alleged Nvidia bias According to the platform, its speech recognition model Pingala V1 has reached a word error rate (WER) of 3.1%. ... Read Full Article" [ref=e243] [cursor=pointer]:
        - /url: https://www.techinasia.com/indian-ai-lab-shunya-labs-clashes-hugging-face-over-nvidias-leadership
        - generic [ref=e244]:
          - img "Media Logo" [ref=e246]
          - paragraph [ref=e247]: Sep 22, 2025
          - generic [ref=e248]:
            - heading "Indian AI lab challenges Hugging Face over alleged Nvidia bias" [level=3] [ref=e249]
            - paragraph [ref=e250]: According to the platform, its speech recognition model Pingala V1 has reached a word error rate (WER) of 3.1%. ...
            - button "Read Full Article" [ref=e252]:
              - text: Read Full Article
              - img [ref=e253]
      - 'link "Media Logo Aug 28, 2025 Redefining Voice Tech: Check 5 Automatic Speech Recognition ... Speech recognition technology is evolving rapidly. Automatic Speech Recognition (ASR) engines are no longer just simple ... Read Full Article" [ref=e255] [cursor=pointer]':
        - /url: https://zeenews.india.com/technology/redefining-voice-tech-check-5-automatic-speech-recognition-engines-in-2025-2952829.html
        - generic [ref=e256]:
          - img "Media Logo" [ref=e258]
          - paragraph [ref=e259]: Aug 28, 2025
          - generic [ref=e260]:
            - 'heading "Redefining Voice Tech: Check 5 Automatic Speech Recognition ..." [level=3] [ref=e261]'
            - paragraph [ref=e262]: Speech recognition technology is evolving rapidly. Automatic Speech Recognition (ASR) engines are no longer just simple ...
            - button "Read Full Article" [ref=e264]:
              - text: Read Full Article
              - img [ref=e265]
      - 'link "Media Logo Aug 26, 2025 The New Digital Divide in AI: Why Edge-Ready, CPU-First Models ... The global artificial intelligence (AI) market is expanding at a staggering pace. In 2024, it was valued at $257.68 billion, with ... Read Full Article" [ref=e267] [cursor=pointer]':
        - /url: https://www.unite.ai/the-new-digital-divide-in-ai-why-edge-ready-cpu-first-models-will-win-the-cost-war/
        - generic [ref=e268]:
          - img "Media Logo" [ref=e270]
          - paragraph [ref=e271]: Aug 26, 2025
          - generic [ref=e272]:
            - 'heading "The New Digital Divide in AI: Why Edge-Ready, CPU-First Models ..." [level=3] [ref=e273]'
            - paragraph [ref=e274]: The global artificial intelligence (AI) market is expanding at a staggering pace. In 2024, it was valued at $257.68 billion, with ...
            - button "Read Full Article" [ref=e276]:
              - text: Read Full Article
              - img [ref=e277]
      - 'link "Media Logo Jul 24, 2025 Shunya Labs Launches Pingala V1: Top-Ranked CPU-Based ... MENLO PARK, Calif., July 24, 2025 /PRNewswire/ -- Shunya Labs, the AI infrastructure company pioneering real-time, privacy-first ... Read Full Article" [ref=e279] [cursor=pointer]':
        - /url: https://finance.yahoo.com/news/shunya-labs-launches-pingala-v1-135500875.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMtr0jnmGFiQWsfH3SgnlGfhIzj5YjDGLEAIshdW1UY5M_FG5tDC0OqCi9WV9FAOP4_IlHvya0EhubMNezysyydSXpq3OfJcj3ujbmwmWWvJydYH7IXk6yfnAMoMj_vbhj0DO4Dn9kPGrWCzjQgosW_Sx8cnY_B2GlDAENC7nJJW
        - generic [ref=e280]:
          - img "Media Logo" [ref=e282]
          - paragraph [ref=e283]: Jul 24, 2025
          - generic [ref=e284]:
            - 'heading "Shunya Labs Launches Pingala V1: Top-Ranked CPU-Based ..." [level=3] [ref=e285]'
            - paragraph [ref=e286]: MENLO PARK, Calif., July 24, 2025 /PRNewswire/ -- Shunya Labs, the AI infrastructure company pioneering real-time, privacy-first ...
            - button "Read Full Article" [ref=e288]:
              - text: Read Full Article
              - img [ref=e289]
      - link "Media Logo Jul 17, 2025 United We Care’ Launches Shunya Labs, a Voice AI Infra ... The AI-driven mental health solutions startup has launched Shunya Labs to redefine AI speech technology. Read Full Article" [ref=e291] [cursor=pointer]:
        - /url: https://analyticsindiamag.com/ai-news-updates/united-we-care-launches-shunya-labs-a-voice-ai-infra-for-32-indic-languages/
        - generic [ref=e292]:
          - img "Media Logo" [ref=e294]
          - paragraph [ref=e295]: Jul 17, 2025
          - generic [ref=e296]:
            - heading "United We Care’ Launches Shunya Labs, a Voice AI Infra ..." [level=3] [ref=e297]
            - paragraph [ref=e298]: The AI-driven mental health solutions startup has launched Shunya Labs to redefine AI speech technology.
            - button "Read Full Article" [ref=e300]:
              - text: Read Full Article
              - img [ref=e301]
      - link "Media Logo Jul 17, 2025 United We Care Launches Shunya Labs to Revolutionise AI... The platform supports over 32 Indic languages, including Hindi, Marathi, Assamese, and Maithili. Seven additional languages are currently being... Read Full Article" [ref=e303] [cursor=pointer]:
        - /url: https://www.entrepreneur.com/en-in/news-and-trends/united-we-care-launches-shunya-labs-to-revolutionise-ai/494739
        - generic [ref=e304]:
          - img "Media Logo" [ref=e306]
          - paragraph [ref=e307]: Jul 17, 2025
          - generic [ref=e308]:
            - heading "United We Care Launches Shunya Labs to Revolutionise AI..." [level=3] [ref=e309]
            - paragraph [ref=e310]: The platform supports over 32 Indic languages, including Hindi, Marathi, Assamese, and Maithili. Seven additional languages are currently being...
            - button "Read Full Article" [ref=e312]:
              - text: Read Full Article
              - img [ref=e313]
      - link "Media Logo Jan 15, 2025 Kunal Shah, Ashneer Grover-backed wellness startup pivots ... United We Care, backed by prominent investors Kunal Shah and Ashneer Grover, pivots to AI with Shunya Labs, aiming to ra... Read Full Article" [ref=e315] [cursor=pointer]:
        - /url: https://www.vccircle.com/kunalshah-ashneer-grover-backed-wellness-startup-pivots-to-ai-looks-to-raise-series-a
        - generic [ref=e316]:
          - img "Media Logo" [ref=e318]
          - paragraph [ref=e319]: Jan 15, 2025
          - generic [ref=e320]:
            - heading "Kunal Shah, Ashneer Grover-backed wellness startup pivots ..." [level=3] [ref=e321]
            - paragraph [ref=e322]: United We Care, backed by prominent investors Kunal Shah and Ashneer Grover, pivots to AI with Shunya Labs, aiming to ra...
            - button "Read Full Article" [ref=e324]:
              - text: Read Full Article
              - img [ref=e325]
      - link "Media Logo Jan 10, 2025 Why AI Still Falls Short in Solving Healthcare's Hardest Problems... An in-depth analysis of AI's current limitations in healthcare and the challenges that remain in solving complex medical... Read Full Article" [ref=e327] [cursor=pointer]:
        - /url: https://healthcare.financialexpressb2b.com/interviews/why-ai-still-falls-short-in-solving-healthcares-problems
        - generic [ref=e328]:
          - img "Media Logo" [ref=e330]
          - paragraph [ref=e331]: Jan 10, 2025
          - generic [ref=e332]:
            - heading "Why AI Still Falls Short in Solving Healthcare's Hardest Problems..." [level=3] [ref=e333]
            - paragraph [ref=e334]: An in-depth analysis of AI's current limitations in healthcare and the challenges that remain in solving complex medical...
            - button "Read Full Article" [ref=e336]:
              - text: Read Full Article
              - img [ref=e337]
      - 'link "Media Logo Jan 08, 2025 From Google to Shunya Labs: Who''s Really Winning the Voice... A comprehensive comparison of voice technology leaders, examining how Shunya Labs competes with tech giants like Google... Read Full Article" [ref=e339] [cursor=pointer]':
        - /url: https://www.smartprix.com/bytes/from-google-to-shunya-labs-whos-really-winning-the-voice-tech-arms-race/
        - generic [ref=e340]:
          - img "Media Logo" [ref=e342]
          - paragraph [ref=e343]: Jan 08, 2025
          - generic [ref=e344]:
            - 'heading "From Google to Shunya Labs: Who''s Really Winning the Voice..." [level=3] [ref=e345]'
            - paragraph [ref=e346]: A comprehensive comparison of voice technology leaders, examining how Shunya Labs competes with tech giants like Google...
            - button "Read Full Article" [ref=e348]:
              - text: Read Full Article
              - img [ref=e349]
      - link "Media Logo Jan 05, 2025 5 Groundbreaking Speech Recognition Engines That Are... Featuring the top 5 speech recognition engines revolutionizing automatic speech recognition, including Shunya Labs' inno... Read Full Article" [ref=e351] [cursor=pointer]:
        - /url: https://cxotoday.com/story/5-groundbreaking-speech-recognition-engines-that-are-redefining-the-asr-landscape-in-2025/
        - generic [ref=e352]:
          - img "Media Logo" [ref=e354]
          - paragraph [ref=e355]: Jan 05, 2025
          - generic [ref=e356]:
            - heading "5 Groundbreaking Speech Recognition Engines That Are..." [level=3] [ref=e357]
            - paragraph [ref=e358]: Featuring the top 5 speech recognition engines revolutionizing automatic speech recognition, including Shunya Labs' inno...
            - button "Read Full Article" [ref=e360]:
              - text: Read Full Article
              - img [ref=e361]
      - 'link "Media Logo Jan 03, 2025 From Talk to Text: 5 Speech Recognition Engines Defining th... An analysis of the leading speech recognition technologies shaping 2025, highlighting breakthrough innovations in real-t... Read Full Article" [ref=e363] [cursor=pointer]':
        - /url: https://cxotoday.com/story/from-talk-to-text-5-speech-recognition-engines-defining-the-pace-for-2025/
        - generic [ref=e364]:
          - img "Media Logo" [ref=e366]
          - paragraph [ref=e367]: Jan 03, 2025
          - generic [ref=e368]:
            - 'heading "From Talk to Text: 5 Speech Recognition Engines Defining th..." [level=3] [ref=e369]'
            - paragraph [ref=e370]: An analysis of the leading speech recognition technologies shaping 2025, highlighting breakthrough innovations in real-t...
            - button "Read Full Article" [ref=e372]:
              - text: Read Full Article
              - img [ref=e373]
      - 'link "Media Logo Jan 03, 2025 From Talk to Text: 5 Speech Recognition Engines Defining th... Exploring the cutting-edge speech recognition engines that are setting new standards for accuracy, speed, and multilingu... Read Full Article" [ref=e375] [cursor=pointer]':
        - /url: https://www.cxodigitalpulse.com/from-talk-to-text-5-speech-recognition-engines-defining-the-pace-for-2025/
        - generic [ref=e376]:
          - img "Media Logo" [ref=e378]
          - paragraph [ref=e379]: Jan 03, 2025
          - generic [ref=e380]:
            - 'heading "From Talk to Text: 5 Speech Recognition Engines Defining th..." [level=3] [ref=e381]'
            - paragraph [ref=e382]: Exploring the cutting-edge speech recognition engines that are setting new standards for accuracy, speed, and multilingu...
            - button "Read Full Article" [ref=e384]:
              - text: Read Full Article
              - img [ref=e385]
    - contentinfo [ref=e387]:
      - generic [ref=e388]:
        - generic [ref=e389]:
          - img "Shunya Labs" [ref=e390]
          - paragraph [ref=e391]: Shunya Labs, Inc.
        - generic [ref=e392]:
          - paragraph [ref=e393]: Product
          - list [ref=e394]:
            - listitem [ref=e395]:
              - link "Overview" [ref=e396] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e397]:
              - link "Models" [ref=e398] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e399]:
              - link "Voice Agents" [ref=e400] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e401]:
              - link "Speech Intelligence" [ref=e402] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e403]:
              - link "Audio Processing" [ref=e404] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e405]:
              - link "Deployment" [ref=e406] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e407]:
          - paragraph [ref=e408]: Models
          - list [ref=e409]:
            - listitem [ref=e410]:
              - link "Language Models" [ref=e411] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e412]:
              - link "Zero STT Indic" [ref=e413] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e414]:
              - link "Zero STT Codeswitch" [ref=e415] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e416]:
              - link "Specialised Models" [ref=e417] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e418]:
              - link "Zero STT Med" [ref=e419] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e420]:
              - link "On Device Models" [ref=e421] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e422]:
          - paragraph [ref=e423]: Solutions
          - list [ref=e424]:
            - listitem [ref=e425]:
              - link "Contact Centers" [ref=e426] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e427]:
              - link "Media & Entertainment" [ref=e428] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e429]:
              - link "Healthcare" [ref=e430] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e431]:
          - paragraph [ref=e432]: Resources
          - list [ref=e433]:
            - listitem [ref=e434]:
              - link "Blogs" [ref=e435] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e436]:
              - link "Benchmarks" [ref=e437] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e438]:
              - link "News & Media" [ref=e439] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e440]:
              - link "Patents" [ref=e441] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e442]:
              - link "Research" [ref=e443] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e445]:
          - link "Documentation" [ref=e446] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e448]:
          - listitem [ref=e449]:
            - link "About us" [ref=e450] [cursor=pointer]:
              - /url: /about
        - list [ref=e452]:
          - listitem [ref=e453]:
            - link "Pricing" [ref=e454] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e455]:
        - paragraph [ref=e456]: Follow us on
        - generic [ref=e457]:
          - link [ref=e458] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e459]
          - link [ref=e461] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e462]
          - link [ref=e464] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e465]
          - link [ref=e467] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e468]
      - generic [ref=e470]:
        - paragraph [ref=e471]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e472]:
          - link "Privacy" [ref=e473] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e474] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e475] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e476] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e477] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e478]
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