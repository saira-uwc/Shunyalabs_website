# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/resources/news-media/design.spec.js >> Resources - News & Media design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [headings] Heading "What enterprises get wrong about AI—and what finally work" (h3) not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [global] Footer background: expected rgb(11, 11, 15) but got rgb(255, 255, 255)

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "☰" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Product" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Models" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Solutions" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Resources" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Documentation" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "About Us" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Pricing" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Playground" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Sign In" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Navigation item "Contact Sales" not found in header

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "About Us" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Playground" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Sign In" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Contact Sales" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Apr 29, 2026What enterprises get wrong about AI—and what finally workAn enterprise perspective on what companies commonly get wrong about AI adoption — and the approaches that actually deliver results.Read Full Article" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "What enterprises get wrong about AI—and what finally work" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "An enterprise perspective on what companies commonly get wrong about AI adoption — and the approaches that actually deliver results." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Mar 26, 2026Top Startup News Today: India's Deeptech Moment Is Here & Startups Are Leading the ChargeIndia's deeptech moment is here and startups are leading the charge — featuring Shunya Labs among the top startup news today.Read Full Article" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "India's deeptech moment is here and startups are leading the charge — featuring Shunya Labs among the top startup news today." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Contact Sales (/contact)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [buttons] Button "☰" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [buttons] Button "Product" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [buttons] Button "Models" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [buttons] Button "Solutions" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [buttons] Button "Resources" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [buttons] Button "Sign In" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 30 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 30
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - banner:
      - generic [ref=e4]:
        - link "Shunya Labs Logo" [ref=e5] [cursor=pointer]:
          - /url: /
          - img "Shunya Labs Logo" [ref=e6]
        - button "Open menu" [ref=e7] [cursor=pointer]: ☰
    - generic [ref=e9]:
      - heading "Media Coverage" [level=1] [ref=e10]
      - heading "Featuring ShunyaLabs and our leadership in AI infrastructure, voice technology, and edge computing" [level=2] [ref=e11]
    - generic [ref=e12]:
      - link "Media Logo May 11, 2026 Shunya Labs introduces 'Vak' voice AI system for multilingual India Shunya Labs introduces Vāk, a voice AI system purpose-built for multilingual India, supporting real-time speech recognition across Indic languages. Read Full Article" [ref=e13] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/amp/news/industry/shunya-labs-introduces-vak-voice-ai-system-for-multilingual-india/131015824
        - generic [ref=e14]:
          - img "Media Logo" [ref=e16]
          - paragraph [ref=e17]: May 11, 2026
          - generic [ref=e18]:
            - heading "Shunya Labs introduces 'Vak' voice AI system for multilingual India" [level=3] [ref=e19]
            - paragraph [ref=e20]: Shunya Labs introduces Vāk, a voice AI system purpose-built for multilingual India, supporting real-time speech recognition across Indic languages.
            - button "Read Full Article" [ref=e22]:
              - text: Read Full Article
              - img [ref=e23]
      - link "Media Logo Apr 29, 2026 What enterprises get wrong about AI-and what finally work An enterprise perspective on what companies commonly get wrong about AI adoption - and the approaches that actually deliver results. Read Full Article" [ref=e25] [cursor=pointer]:
        - /url: https://etedge-insights.com/technology/artificial-intelligence/what-enterprises-get-wrong-about-ai-and-what-finally-work/?amp=1
        - generic [ref=e26]:
          - img "Media Logo" [ref=e28]
          - paragraph [ref=e29]: Apr 29, 2026
          - generic [ref=e30]:
            - heading "What enterprises get wrong about AI-and what finally work" [level=3] [ref=e31]
            - paragraph [ref=e32]: An enterprise perspective on what companies commonly get wrong about AI adoption - and the approaches that actually deliver results.
            - button "Read Full Article" [ref=e34]:
              - text: Read Full Article
              - img [ref=e35]
      - link "Media Logo Apr 17, 2026 Shunya Labs launches unified voice AI localisation platform Shunya Labs launches a unified voice AI localisation platform enabling end-to-end dubbing, translation, and multilingual content at scale. Read Full Article" [ref=e37] [cursor=pointer]:
        - /url: https://www.campaignindia.in/article/shunya-labs-launches-unified-voice-ai-localisation-platform/46481dkwezbe46ws5abfs2c2dt
        - generic [ref=e38]:
          - img "Media Logo" [ref=e40]
          - paragraph [ref=e41]: Apr 17, 2026
          - generic [ref=e42]:
            - heading "Shunya Labs launches unified voice AI localisation platform" [level=3] [ref=e43]
            - paragraph [ref=e44]: Shunya Labs launches a unified voice AI localisation platform enabling end-to-end dubbing, translation, and multilingual content at scale.
            - button "Read Full Article" [ref=e46]:
              - text: Read Full Article
              - img [ref=e47]
      - link "Media Logo Apr 9, 2026 Shunya Labs Launches End-to-End Voice AI Platform for Dubbing, Translation and Multilingual Content Localisation Shunya Labs launches an end-to-end voice AI platform built for dubbing, translation, and multilingual content localisation at scale. Read Full Article" [ref=e49] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-launches-end-to-end-voice-ai-platform-for-dubbing-translation-and-multilingual-content-localisation/
        - generic [ref=e50]:
          - img "Media Logo" [ref=e52]
          - paragraph [ref=e53]: Apr 9, 2026
          - generic [ref=e54]:
            - heading "Shunya Labs Launches End-to-End Voice AI Platform for Dubbing, Translation and Multilingual Content Localisation" [level=3] [ref=e55]
            - paragraph [ref=e56]: Shunya Labs launches an end-to-end voice AI platform built for dubbing, translation, and multilingual content localisation at scale.
            - button "Read Full Article" [ref=e58]:
              - text: Read Full Article
              - img [ref=e59]
      - link "Media Logo Apr 9, 2026 Tech and gadget launches today (April 09, 2026) Indian Express covers today's top tech and gadget launches including Shunya Labs among the notable announcements. Read Full Article" [ref=e61] [cursor=pointer]:
        - /url: https://indianexpress.com/article/technology/tech-news-technology/tech-and-gadget-launches-today-april-09-2026-vivo-v70-fe-logitech-g-pro-x2-superstrike-and-more-10627858/
        - generic [ref=e62]:
          - img "Media Logo" [ref=e64]
          - paragraph [ref=e65]: Apr 9, 2026
          - generic [ref=e66]:
            - heading "Tech and gadget launches today (April 09, 2026)" [level=3] [ref=e67]
            - paragraph [ref=e68]: Indian Express covers today's top tech and gadget launches including Shunya Labs among the notable announcements.
            - button "Read Full Article" [ref=e70]:
              - text: Read Full Article
              - img [ref=e71]
      - link "Media Logo Mar 30, 2026 Indian startups turn to small language models to solve for efficiency, privacy, cost Indian startups are increasingly turning to small language models to solve for efficiency, privacy, and cost challenges. Read Full Article" [ref=e73] [cursor=pointer]:
        - /url: https://m.economictimes.com/tech/startups/indian-startups-turn-to-small-languages-models-to-solve-for-efficiency-privacy-cost/amp_articleshow/129884791.cms
        - generic [ref=e74]:
          - img "Media Logo" [ref=e76]
          - paragraph [ref=e77]: Mar 30, 2026
          - generic [ref=e78]:
            - heading "Indian startups turn to small language models to solve for efficiency, privacy, cost" [level=3] [ref=e79]
            - paragraph [ref=e80]: Indian startups are increasingly turning to small language models to solve for efficiency, privacy, and cost challenges.
            - button "Read Full Article" [ref=e82]:
              - text: Read Full Article
              - img [ref=e83]
      - link "Media Logo Mar 26, 2026 Shunya Labs unveils AI-driven voice intelligence platform for contact centre operations Shunya Labs unveils an AI-powered voice intelligence platform aimed at revolutionizing contact center operations. Read Full Article" [ref=e85] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/news/industry/revolutionizing-contact-centers-shunya-labs-launches-ai-powered-voice-intelligence-platform/129816076
        - generic [ref=e86]:
          - img "Media Logo" [ref=e88]
          - paragraph [ref=e89]: Mar 26, 2026
          - generic [ref=e90]:
            - heading "Shunya Labs unveils AI-driven voice intelligence platform for contact centre operations" [level=3] [ref=e91]
            - paragraph [ref=e92]: Shunya Labs unveils an AI-powered voice intelligence platform aimed at revolutionizing contact center operations.
            - button "Read Full Article" [ref=e94]:
              - text: Read Full Article
              - img [ref=e95]
      - 'link "Media Logo Mar 26, 2026 Top Startup News Today: India''s Deeptech Moment Is Here & Startups Are Leading the Charge India''s deeptech moment is here and startups are leading the charge - featuring Shunya Labs among the top startup news today. Read Full Article" [ref=e97] [cursor=pointer]':
        - /url: https://www.tice.news/tice-trending/top-startup-news-today-indias-deeptech-moment-is-here-and-startups-are-leading-the-charge-11264947
        - generic [ref=e98]:
          - img "Media Logo" [ref=e100]
          - paragraph [ref=e101]: Mar 26, 2026
          - generic [ref=e102]:
            - 'heading "Top Startup News Today: India''s Deeptech Moment Is Here & Startups Are Leading the Charge" [level=3] [ref=e103]'
            - paragraph [ref=e104]: India's deeptech moment is here and startups are leading the charge - featuring Shunya Labs among the top startup news today.
            - button "Read Full Article" [ref=e106]:
              - text: Read Full Article
              - img [ref=e107]
      - link "Media Logo Mar 25, 2026 Shunya Labs Launches Real-Time Voice Intelligence Platform for the Next Generation of Contact Centres Shunya Labs launches a real-time voice intelligence platform purpose-built for the next generation of contact centre operations. Read Full Article" [ref=e109] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-launches-real-time-voice-intelligence-platform-for-the-next-generation-of-contact-centres/
        - generic [ref=e110]:
          - img "Media Logo" [ref=e112]
          - paragraph [ref=e113]: Mar 25, 2026
          - generic [ref=e114]:
            - heading "Shunya Labs Launches Real-Time Voice Intelligence Platform for the Next Generation of Contact Centres" [level=3] [ref=e115]
            - paragraph [ref=e116]: Shunya Labs launches a real-time voice intelligence platform purpose-built for the next generation of contact centre operations.
            - button "Read Full Article" [ref=e118]:
              - text: Read Full Article
              - img [ref=e119]
      - 'link "Media Logo Feb 26, 2026 कमांड के साथ आपका मूड भी पहचानेगा यह AI! कैंसर से जंग के ... Success Story Ritu Mehrotra Shunyaa Labs: भारत की शून्य लैब्स ने वॉइस AI इंफ्रास्ट्रक्चर में ऐसा इतिहास रचा है. Read Full Article" [ref=e121] [cursor=pointer]':
        - /url: https://hindi.news18.com/news/delhi/cancer-survivor-idea-ritu-mehrotra-shunyaa-labs-voice-ai-mood-detection-200-languages-local18-ws-l-10222482.html
        - generic [ref=e122]:
          - img "Media Logo" [ref=e124]
          - paragraph [ref=e125]: Feb 26, 2026
          - generic [ref=e126]:
            - heading "कमांड के साथ आपका मूड भी पहचानेगा यह AI! कैंसर से जंग के ..." [level=3] [ref=e127]
            - paragraph [ref=e128]: "Success Story Ritu Mehrotra Shunyaa Labs: भारत की शून्य लैब्स ने वॉइस AI इंफ्रास्ट्रक्चर में ऐसा इतिहास रचा है."
            - button "Read Full Article" [ref=e130]:
              - text: Read Full Article
              - img [ref=e131]
      - 'link "Media Logo Feb 19, 2026 India must build sovereign infra for artificial intelligence: Experts The time is ripe for India to bring an ‘artificial intelligence'' infrastructure on the likes of digital public ... Read Full Article" [ref=e133] [cursor=pointer]':
        - /url: https://www.tribuneindia.com/news/india/india-must-build-sovereign-infra-for-artificial-intelligence-experts/amp
        - generic [ref=e134]:
          - img "Media Logo" [ref=e136]
          - paragraph [ref=e137]: Feb 19, 2026
          - generic [ref=e138]:
            - 'heading "India must build sovereign infra for artificial intelligence: Experts" [level=3] [ref=e139]'
            - paragraph [ref=e140]: The time is ripe for India to bring an ‘artificial intelligence' infrastructure on the likes of digital public ...
            - button "Read Full Article" [ref=e142]:
              - text: Read Full Article
              - img [ref=e143]
      - link "Media Logo Feb 19, 2026 Shunya Labs, in partnership with Nasscom, Launches Vāķ, India’s ... Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ... Read Full Article" [ref=e145] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-in-partnership-with-nasscom-launches-vak-indias-largest-open-weight-voice-ai-across-55-languages/
        - generic [ref=e146]:
          - img "Media Logo" [ref=e148]
          - paragraph [ref=e149]: Feb 19, 2026
          - generic [ref=e150]:
            - heading "Shunya Labs, in partnership with Nasscom, Launches Vāķ, India’s ..." [level=3] [ref=e151]
            - paragraph [ref=e152]: Shunya Labs, a Nasscom GenAI Cohort 1 startup, has announced the launch of Vāķ, India’s largest open-weight ...
            - button "Read Full Article" [ref=e154]:
              - text: Read Full Article
              - img [ref=e155]
      - link "Media Logo Feb 18, 2026 Shunya Labs Unveils Real-Time AI Translation Model for ... Launch Vāķ, a real-time voice translation model for 55 Indian languages, at India AI Impact Summit 2026. Read Full Article" [ref=e157] [cursor=pointer]:
        - /url: https://analyticsindiamag.com/ai-news/shunya-labs-unveils-real-time-ai-translation-model-for-55-indian-languages
        - generic [ref=e158]:
          - img "Media Logo" [ref=e160]
          - paragraph [ref=e161]: Feb 18, 2026
          - generic [ref=e162]:
            - heading "Shunya Labs Unveils Real-Time AI Translation Model for ..." [level=3] [ref=e163]
            - paragraph [ref=e164]: Launch Vāķ, a real-time voice translation model for 55 Indian languages, at India AI Impact Summit 2026.
            - button "Read Full Article" [ref=e166]:
              - text: Read Full Article
              - img [ref=e167]
      - link "Media Logo Feb 18, 2026 Shunya Labs unveils Vāķ, a real-time translation model ... Open-weight translation model with voice preservation, <1.5s latency, and zero-shot cloning, enabling sovereign ... Read Full Article" [ref=e169] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-unveils-vak-a-real-time-translation-model-available-in-55-indian-languages-across-2970-translation-pairs/
        - generic [ref=e170]:
          - img "Media Logo" [ref=e172]
          - paragraph [ref=e173]: Feb 18, 2026
          - generic [ref=e174]:
            - heading "Shunya Labs unveils Vāķ, a real-time translation model ..." [level=3] [ref=e175]
            - paragraph [ref=e176]: Open-weight translation model with voice preservation, <1.5s latency, and zero-shot cloning, enabling sovereign ...
            - button "Read Full Article" [ref=e178]:
              - text: Read Full Article
              - img [ref=e179]
      - link "Media Logo Feb 13, 2026 Shunya Labs develops CPU-optimized voice AI stack for ... Shunya Labs has announced a CPU-compatible voice AI architecture that enables high-accuracy speech recognition and multilingual ... Read Full Article" [ref=e181] [cursor=pointer]:
        - /url: https://www.varindia.com/news/shunya-labs-develops-cpu-optimized-voice-ai-stack-for-the-next-billion-users
        - generic [ref=e182]:
          - img "Media Logo" [ref=e184]
          - paragraph [ref=e185]: Feb 13, 2026
          - generic [ref=e186]:
            - heading "Shunya Labs develops CPU-optimized voice AI stack for ..." [level=3] [ref=e187]
            - paragraph [ref=e188]: Shunya Labs has announced a CPU-compatible voice AI architecture that enables high-accuracy speech recognition and multilingual ...
            - button "Read Full Article" [ref=e190]:
              - text: Read Full Article
              - img [ref=e191]
      - link "Media Logo Feb 13, 2026 Shunya Labs unveils CPU-compatible voice AI stack for real ... The platform targets regulated sectors such as healthcare, BFSI and government, where low latency and data sovereignty are critical. Read Full Article" [ref=e193] [cursor=pointer]:
        - /url: https://enterpriseai.economictimes.indiatimes.com/news/industry/shunya-labs-launches-innovative-cpu-compatible-voice-ai-stack-for-real-time-applications/128297497
        - generic [ref=e194]:
          - img "Media Logo" [ref=e196]
          - paragraph [ref=e197]: Feb 13, 2026
          - generic [ref=e198]:
            - heading "Shunya Labs unveils CPU-compatible voice AI stack for real ..." [level=3] [ref=e199]
            - paragraph [ref=e200]: The platform targets regulated sectors such as healthcare, BFSI and government, where low latency and data sovereignty are critical.
            - button "Read Full Article" [ref=e202]:
              - text: Read Full Article
              - img [ref=e203]
      - link "Media Logo Feb 12, 2026 Shunya Labs Builds the CPU Compatible Voice AI Stack for the ... Shunya Labs, a research-driven voice AI company, today announced a CPU-compatible voice AI architecture that enables ... Read Full Article" [ref=e205] [cursor=pointer]:
        - /url: https://cxotoday.com/media-coverage/shunya-labs-builds-the-cpu-compatible-voice-ai-stack-for-the-next-billion-users/
        - generic [ref=e206]:
          - img "Media Logo" [ref=e208]
          - paragraph [ref=e209]: Feb 12, 2026
          - generic [ref=e210]:
            - heading "Shunya Labs Builds the CPU Compatible Voice AI Stack for the ..." [level=3] [ref=e211]
            - paragraph [ref=e212]: Shunya Labs, a research-driven voice AI company, today announced a CPU-compatible voice AI architecture that enables ...
            - button "Read Full Article" [ref=e214]:
              - text: Read Full Article
              - img [ref=e215]
      - link "Media Logo Sep 30, 2025 Nasscom planning local benchmarks for Indic AI models ... The plan is in its early stages, with Nasscom AI, the industry body's AI initiative, set to start consultations with industry experts ... Read Full Article" [ref=e217] [cursor=pointer]:
        - /url: https://m.economictimes.com/tech/artificial-intelligence/nasscom-planning-local-benchmarks-for-indic-ai-models/amp_articleshow/124218208.cms
        - generic [ref=e218]:
          - img "Media Logo" [ref=e220]
          - paragraph [ref=e221]: Sep 30, 2025
          - generic [ref=e222]:
            - heading "Nasscom planning local benchmarks for Indic AI models ..." [level=3] [ref=e223]
            - paragraph [ref=e224]: The plan is in its early stages, with Nasscom AI, the industry body's AI initiative, set to start consultations with industry experts ...
            - button "Read Full Article" [ref=e226]:
              - text: Read Full Article
              - img [ref=e227]
      - link "Media Logo Sep 22, 2025 Indian AI lab challenges Hugging Face over alleged Nvidia bias According to the platform, its speech recognition model Pingala V1 has reached a word error rate (WER) of 3.1%. ... Read Full Article" [ref=e229] [cursor=pointer]:
        - /url: https://beamstart.com/news/indian-ai-lab-clashes-with-17585138651646
        - generic [ref=e230]:
          - img "Media Logo" [ref=e232]
          - paragraph [ref=e233]: Sep 22, 2025
          - generic [ref=e234]:
            - heading "Indian AI lab challenges Hugging Face over alleged Nvidia bias" [level=3] [ref=e235]
            - paragraph [ref=e236]: According to the platform, its speech recognition model Pingala V1 has reached a word error rate (WER) of 3.1%. ...
            - button "Read Full Article" [ref=e238]:
              - text: Read Full Article
              - img [ref=e239]
      - 'link "Media Logo Aug 28, 2025 Redefining Voice Tech: Check 5 Automatic Speech Recognition ... Speech recognition technology is evolving rapidly. Automatic Speech Recognition (ASR) engines are no longer just simple ... Read Full Article" [ref=e241] [cursor=pointer]':
        - /url: https://zeenews.india.com/technology/redefining-voice-tech-check-5-automatic-speech-recognition-engines-in-2025-2952829.html
        - generic [ref=e242]:
          - img "Media Logo" [ref=e244]
          - paragraph [ref=e245]: Aug 28, 2025
          - generic [ref=e246]:
            - 'heading "Redefining Voice Tech: Check 5 Automatic Speech Recognition ..." [level=3] [ref=e247]'
            - paragraph [ref=e248]: Speech recognition technology is evolving rapidly. Automatic Speech Recognition (ASR) engines are no longer just simple ...
            - button "Read Full Article" [ref=e250]:
              - text: Read Full Article
              - img [ref=e251]
      - 'link "Media Logo Aug 26, 2025 The New Digital Divide in AI: Why Edge-Ready, CPU-First Models ... The global artificial intelligence (AI) market is expanding at a staggering pace. In 2024, it was valued at $257.68 billion, with ... Read Full Article" [ref=e253] [cursor=pointer]':
        - /url: https://www.unite.ai/the-new-digital-divide-in-ai-why-edge-ready-cpu-first-models-will-win-the-cost-war/
        - generic [ref=e254]:
          - img "Media Logo" [ref=e256]
          - paragraph [ref=e257]: Aug 26, 2025
          - generic [ref=e258]:
            - 'heading "The New Digital Divide in AI: Why Edge-Ready, CPU-First Models ..." [level=3] [ref=e259]'
            - paragraph [ref=e260]: The global artificial intelligence (AI) market is expanding at a staggering pace. In 2024, it was valued at $257.68 billion, with ...
            - button "Read Full Article" [ref=e262]:
              - text: Read Full Article
              - img [ref=e263]
      - 'link "Media Logo Jul 24, 2025 Shunya Labs Launches Pingala V1: Top-Ranked CPU-Based ... MENLO PARK, Calif., July 24, 2025 /PRNewswire/ -- Shunya Labs, the AI infrastructure company pioneering real-time, privacy-first ... Read Full Article" [ref=e265] [cursor=pointer]':
        - /url: https://finance.yahoo.com/news/shunya-labs-launches-pingala-v1-135500875.html?guccounter=1&guce_referrer=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8&guce_referrer_sig=AQAAAMtr0jnmGFiQWsfH3SgnlGfhIzj5YjDGLEAIshdW1UY5M_FG5tDC0OqCi9WV9FAOP4_IlHvya0EhubMNezysyydSXpq3OfJcj3ujbmwmWWvJydYH7IXk6yfnAMoMj_vbhj0DO4Dn9kPGrWCzjQgosW_Sx8cnY_B2GlDAENC7nJJW
        - generic [ref=e266]:
          - img "Media Logo" [ref=e268]
          - paragraph [ref=e269]: Jul 24, 2025
          - generic [ref=e270]:
            - 'heading "Shunya Labs Launches Pingala V1: Top-Ranked CPU-Based ..." [level=3] [ref=e271]'
            - paragraph [ref=e272]: MENLO PARK, Calif., July 24, 2025 /PRNewswire/ -- Shunya Labs, the AI infrastructure company pioneering real-time, privacy-first ...
            - button "Read Full Article" [ref=e274]:
              - text: Read Full Article
              - img [ref=e275]
      - link "Media Logo Jul 17, 2025 United We Care’ Launches Shunya Labs, a Voice AI Infra ... The AI-driven mental health solutions startup has launched Shunya Labs to redefine AI speech technology. Read Full Article" [ref=e277] [cursor=pointer]:
        - /url: https://analyticsindiamag.com/ai-news-updates/united-we-care-launches-shunya-labs-a-voice-ai-infra-for-32-indic-languages/
        - generic [ref=e278]:
          - img "Media Logo" [ref=e280]
          - paragraph [ref=e281]: Jul 17, 2025
          - generic [ref=e282]:
            - heading "United We Care’ Launches Shunya Labs, a Voice AI Infra ..." [level=3] [ref=e283]
            - paragraph [ref=e284]: The AI-driven mental health solutions startup has launched Shunya Labs to redefine AI speech technology.
            - button "Read Full Article" [ref=e286]:
              - text: Read Full Article
              - img [ref=e287]
      - link "Media Logo Jul 17, 2025 United We Care Launches Shunya Labs to Revolutionise AI... The platform supports over 32 Indic languages, including Hindi, Marathi, Assamese, and Maithili. Seven additional languages are currently being... Read Full Article" [ref=e289] [cursor=pointer]:
        - /url: https://analyticsindiamag.com/ai-news-updates/united-we-care-launches-shunya-labs-a-voice-ai-infra-for-32-indic-languages/
        - generic [ref=e290]:
          - img "Media Logo" [ref=e292]
          - paragraph [ref=e293]: Jul 17, 2025
          - generic [ref=e294]:
            - heading "United We Care Launches Shunya Labs to Revolutionise AI..." [level=3] [ref=e295]
            - paragraph [ref=e296]: The platform supports over 32 Indic languages, including Hindi, Marathi, Assamese, and Maithili. Seven additional languages are currently being...
            - button "Read Full Article" [ref=e298]:
              - text: Read Full Article
              - img [ref=e299]
      - link "Media Logo Jan 15, 2025 Kunal Shah, Ashneer Grover-backed wellness startup pivots ... United We Care, backed by prominent investors Kunal Shah and Ashneer Grover, pivots to AI with Shunya Labs, aiming to ra... Read Full Article" [ref=e301] [cursor=pointer]:
        - /url: https://www.vccircle.com/kunalshah-ashneer-grover-backed-wellness-startup-pivots-to-ai-looks-to-raise-series-a
        - generic [ref=e302]:
          - img "Media Logo" [ref=e304]
          - paragraph [ref=e305]: Jan 15, 2025
          - generic [ref=e306]:
            - heading "Kunal Shah, Ashneer Grover-backed wellness startup pivots ..." [level=3] [ref=e307]
            - paragraph [ref=e308]: United We Care, backed by prominent investors Kunal Shah and Ashneer Grover, pivots to AI with Shunya Labs, aiming to ra...
            - button "Read Full Article" [ref=e310]:
              - text: Read Full Article
              - img [ref=e311]
      - 'link "Media Logo Jan 08, 2025 From Google to Shunya Labs: Who''s Really Winning the Voice... A comprehensive comparison of voice technology leaders, examining how Shunya Labs competes with tech giants like Google... Read Full Article" [ref=e313] [cursor=pointer]':
        - /url: https://cxotoday.com/daily-news/5-groundbreaking-speech-recognition-engines-that-are-redefining-the-asr-landscape-in-2025/
        - generic [ref=e314]:
          - img "Media Logo" [ref=e316]
          - paragraph [ref=e317]: Jan 08, 2025
          - generic [ref=e318]:
            - 'heading "From Google to Shunya Labs: Who''s Really Winning the Voice..." [level=3] [ref=e319]'
            - paragraph [ref=e320]: A comprehensive comparison of voice technology leaders, examining how Shunya Labs competes with tech giants like Google...
            - button "Read Full Article" [ref=e322]:
              - text: Read Full Article
              - img [ref=e323]
      - link "Media Logo Jan 05, 2025 5 Groundbreaking Speech Recognition Engines That Are... Featuring the top 5 speech recognition engines revolutionizing automatic speech recognition, including Shunya Labs' inno... Read Full Article" [ref=e325] [cursor=pointer]:
        - /url: https://cxotoday.com/daily-news/5-groundbreaking-speech-recognition-engines-that-are-redefining-the-asr-landscape-in-2025/
        - generic [ref=e326]:
          - img "Media Logo" [ref=e328]
          - paragraph [ref=e329]: Jan 05, 2025
          - generic [ref=e330]:
            - heading "5 Groundbreaking Speech Recognition Engines That Are..." [level=3] [ref=e331]
            - paragraph [ref=e332]: Featuring the top 5 speech recognition engines revolutionizing automatic speech recognition, including Shunya Labs' inno...
            - button "Read Full Article" [ref=e334]:
              - text: Read Full Article
              - img [ref=e335]
      - 'link "Media Logo Jan 03, 2025 From Talk to Text: 5 Speech Recognition Engines Defining th... An analysis of the leading speech recognition technologies shaping 2025, highlighting breakthrough innovations in real-t... Read Full Article" [ref=e337] [cursor=pointer]':
        - /url: https://cxotoday.com/daily-news/from-talk-to-text-5-speech-recognition-engines-defining-the-pace-for-2025/
        - generic [ref=e338]:
          - img "Media Logo" [ref=e340]
          - paragraph [ref=e341]: Jan 03, 2025
          - generic [ref=e342]:
            - 'heading "From Talk to Text: 5 Speech Recognition Engines Defining th..." [level=3] [ref=e343]'
            - paragraph [ref=e344]: An analysis of the leading speech recognition technologies shaping 2025, highlighting breakthrough innovations in real-t...
            - button "Read Full Article" [ref=e346]:
              - text: Read Full Article
              - img [ref=e347]
      - 'link "Media Logo Jan 03, 2025 From Talk to Text: 5 Speech Recognition Engines Defining th... Exploring the cutting-edge speech recognition engines that are setting new standards for accuracy, speed, and multilingu... Read Full Article" [ref=e349] [cursor=pointer]':
        - /url: https://www.cxodigitalpulse.com/from-talk-to-text-5-speech-recognition-engines-defining-the-pace-for-2025/
        - generic [ref=e350]:
          - img "Media Logo" [ref=e352]
          - paragraph [ref=e353]: Jan 03, 2025
          - generic [ref=e354]:
            - 'heading "From Talk to Text: 5 Speech Recognition Engines Defining th..." [level=3] [ref=e355]'
            - paragraph [ref=e356]: Exploring the cutting-edge speech recognition engines that are setting new standards for accuracy, speed, and multilingu...
            - button "Read Full Article" [ref=e358]:
              - text: Read Full Article
              - img [ref=e359]
    - contentinfo [ref=e361]:
      - generic [ref=e362]:
        - generic [ref=e363]:
          - img "Shunya Labs" [ref=e364]
          - paragraph [ref=e365]: Shunya Labs, Inc.
        - generic [ref=e366]:
          - paragraph [ref=e367]: Product
          - list [ref=e368]:
            - listitem [ref=e369]:
              - link "Overview" [ref=e370] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e371]:
              - link "Models" [ref=e372] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e373]:
              - link "Voice Agents" [ref=e374] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e375]:
              - link "Speech Intelligence" [ref=e376] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e377]:
              - link "Audio Processing" [ref=e378] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e379]:
              - link "Deployment" [ref=e380] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e381]:
          - paragraph [ref=e382]: Models
          - list [ref=e383]:
            - listitem [ref=e384]:
              - link "Language Models" [ref=e385] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e386]:
              - link "Zero STT Indic" [ref=e387] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e388]:
              - link "Zero STT Codeswitch" [ref=e389] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e390]:
              - link "Specialised Models" [ref=e391] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e392]:
              - link "Zero STT Med" [ref=e393] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e394]:
              - link "On Device Models" [ref=e395] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e396]:
          - paragraph [ref=e397]: Solutions
          - list [ref=e398]:
            - listitem [ref=e399]:
              - link "Contact Centers" [ref=e400] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e401]:
              - link "Media & Entertainment" [ref=e402] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e403]:
              - link "Healthcare" [ref=e404] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e405]:
          - paragraph [ref=e406]: Resources
          - list [ref=e407]:
            - listitem [ref=e408]:
              - link "Blogs" [ref=e409] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e410]:
              - link "Benchmarks" [ref=e411] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e412]:
              - link "News & Media" [ref=e413] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e414]:
              - link "Patents" [ref=e415] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e416]:
              - link "Research" [ref=e417] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e419]:
          - link "Documentation" [ref=e420] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e422]:
          - listitem [ref=e423]:
            - link "About us" [ref=e424] [cursor=pointer]:
              - /url: /about
        - list [ref=e426]:
          - listitem [ref=e427]:
            - link "Pricing" [ref=e428] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e429]:
        - paragraph [ref=e430]: Follow us on
        - generic [ref=e431]:
          - link [ref=e432] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e433]
          - link [ref=e435] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e436]
          - link [ref=e438] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e439]
          - link [ref=e441] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e442]
      - generic [ref=e444]:
        - paragraph [ref=e445]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e446]:
          - link "Privacy" [ref=e447] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e448] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e449] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e450] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e451] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e452]
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
     |                                                                                      ^ Error: 30 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```