# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/contact/contact/contact-form.spec.js >> Contact — lead form >> Contact Sales → contact page → fill form → submit shows confirmation
- Location: tests/modules/contact/contact/contact-form.spec.js:35:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 45000ms exceeded.
Call log:
  - waiting for locator('nav').getByRole('button', { name: '☰' }) to be visible

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - generic [ref=e4]:
        - heading [level=2] [ref=e5]: Voice AI demos
        - paragraph [ref=e6]: Interactive demos for Zero TTS Indic text-to-speech, Zero STT Indic speech-to-text, Zero STT Codeswitch multilingual transcription, and Zero STT Med medical speech-to-text.
      - generic [ref=e7]:
        - heading [level=2] [ref=e8]: Trusted by industry leaders
        - paragraph [ref=e9]: Trusted by Nasscom, OTTO, Panasonic, OMG Pharma, ZET, BOXX Insurance, and Jio GENNEXT.
      - generic [ref=e10]:
        - heading [level=2] [ref=e11]: Custom built for your enterprise
        - paragraph [ref=e12]: "Custom small language models trained on your data: audio corpus intake, custom training on the Zero base, evaluation against your ground truth, and full model ownership with on-prem deployment."
      - generic [ref=e13]:
        - heading [level=2] [ref=e14]: Vāk real-time translation
        - paragraph [ref=e15]: Real-time translation in 55 Indic languages.
      - generic [ref=e16]:
        - heading [level=2] [ref=e17]: What sets us apart
        - paragraph [ref=e18]: First-principles research, CPU-first architecture, full stack orchestration, foundation models for voice, privacy-first solutioning, and open-source models on Hugging Face.
      - generic [ref=e19]:
        - heading [level=2] [ref=e20]: Language regions
        - paragraph [ref=e21]: Explore comprehensive language coverage across the globe with 216+ languages supported.
    - banner:
      - generic [ref=e22]:
        - link "Shunya Labs Logo" [ref=e23] [cursor=pointer]:
          - /url: /
          - img "Shunya Labs Logo" [ref=e24]
        - button "Open menu" [ref=e25] [cursor=pointer]: ☰
    - generic [ref=e26]:
      - generic [ref=e27]:
        - heading "Voice AI Fails At Scale. Our Doesn't Hallucinate" [level=1] [ref=e29]:
          - generic [ref=e30]:
            - text: Voice AI Fails At Scale. Our
            - text: Doesn't Hallucinate
        - heading "Build multilingual Voice AI, AI Voice Agents, Speech-to-Text, Text-to-Speech, Speech Translation, and Conversational AI that understands your business, not just your prompts." [level=2] [ref=e31]:
          - generic [ref=e32]:
            - text: Build multilingual Voice AI, AI Voice
            - text: Agents, Speech-to-Text, Text-to-Speech,
            - text: Speech Translation, and Conversational
            - text: AI that understands your business,
            - text: not just your prompts.
        - generic [ref=e33]:
          - generic [ref=e34]:
            - generic [ref=e35]:
              - button "E-commerce" [ref=e36] [cursor=pointer]
              - button "BFSI" [ref=e37] [cursor=pointer]
              - button "Logistics" [ref=e38] [cursor=pointer]
            - button "🇮🇳 Hindi ▾" [ref=e40] [cursor=pointer]:
              - generic [ref=e41]: 🇮🇳
              - generic [ref=e42]: Hindi
              - generic [ref=e43]: ▾
          - generic [ref=e46]:
            - button [ref=e49] [cursor=pointer]:
              - img [ref=e50]
            - generic [ref=e52]: PLAY DEMO
      - generic [ref=e55]:
        - generic [ref=e56]:
          - img "Nasscom" [ref=e58]
          - img "OTTO" [ref=e60]
          - img "Panasonic" [ref=e62]
          - img "OMG Pharma" [ref=e64]
          - img "ZET" [ref=e66]
          - img "BOXX Insurance" [ref=e68]
          - img "Jio GENNEXT" [ref=e70]
          - img "Safe Health" [ref=e72]
        - generic [ref=e73]:
          - img [ref=e75]
          - img [ref=e77]
          - img [ref=e79]
          - img [ref=e81]
          - img [ref=e83]
          - img [ref=e85]
          - img [ref=e87]
          - img [ref=e89]
        - generic [ref=e90]:
          - img [ref=e92]
          - img [ref=e94]
          - img [ref=e96]
          - img [ref=e98]
          - img [ref=e100]
          - img [ref=e102]
          - img [ref=e104]
          - img [ref=e106]
        - generic [ref=e107]:
          - img [ref=e109]
          - img [ref=e111]
          - img [ref=e113]
          - img [ref=e115]
          - img [ref=e117]
          - img [ref=e119]
          - img [ref=e121]
          - img [ref=e123]
      - region "Why Enterprises Choose Shunya" [ref=e124]:
        - generic [ref=e125]:
          - generic [ref=e127]: Enterprise Trust
          - generic [ref=e128]:
            - heading "Why Enterprises Choose Shunya" [level=2] [ref=e129]
            - paragraph [ref=e130]: Enterprise AI isn't judged by demos. It's judged in production.
          - generic [ref=e131]:
            - generic [ref=e132]:
              - img [ref=e135]
              - generic [ref=e139]:
                - generic [ref=e140]: 216+ Languages
                - paragraph [ref=e141]: Built for multilingual conversations, code-switching and global deployments.
            - generic [ref=e142]:
              - generic [ref=e143]:
                - generic [ref=e144]:
                  - img [ref=e147]
                  - generic [ref=e151]:
                    - heading "7 Benchmark Records" [level=3] [ref=e152]
                    - paragraph [ref=e153]: Industry-leading performance across speech recognition, multilingual AI and reasoning.
                - generic [ref=e154]:
                  - img [ref=e157]
                  - generic [ref=e163]:
                    - heading "Purpose-Trained Intelligence" [level=3] [ref=e164]
                    - paragraph [ref=e165]: Custom Small Language Models and Knowledge Graphs built around your business.
              - generic [ref=e166]:
                - generic [ref=e167]:
                  - img [ref=e170]
                  - generic [ref=e172]:
                    - heading "Millions of Conversations" [level=3] [ref=e173]
                    - paragraph [ref=e174]: Powering enterprise Voice AI across telecom, healthcare, BFSI and retail.
                - generic [ref=e175]:
                  - img [ref=e178]
                  - generic [ref=e181]:
                    - heading "Production Deployments" [level=3] [ref=e182]
                    - paragraph [ref=e183]: Trusted in regulated industries where privacy, compliance and reliability are essential.
                - generic [ref=e184]:
                  - img [ref=e187]
                  - generic [ref=e190]:
                    - heading "Deploy Anywhere" [level=3] [ref=e191]
                    - paragraph [ref=e192]: Cloud, VPC, on-premises or edge - with complete ownership of your models and data.
      - region "Talk to Meera" [ref=e193]:
        - generic [ref=e196]:
          - generic [ref=e197]:
            - generic [ref=e198]: Voice Agent
            - generic [ref=e199]:
              - heading "Meet Meera" [level=2] [ref=e200]:
                - generic [ref=e201]: Meet Meera
              - paragraph [ref=e202]: Talk to the Intelligence Layer.
          - generic [ref=e203]:
            - paragraph [ref=e204]:
              - text: Most AI demos are videos.
              - strong [ref=e205]: Ours calls you back.
            - paragraph [ref=e206]: Ask Meera about Voice AI, AI Voice Agents, Speech Recognition, Speech-to-Text, Text-to-Speech, multilingual AI, enterprise deployments or Shunya itself. What you experience is exactly what you deploy.
        - generic [ref=e208]:
          - generic [ref=e209]: LIVE NOW · 50,000+ CALLS HANDLED
          - generic [ref=e276]:
            - generic [ref=e277]:
              - generic [ref=e278]: CUSTOMER · ENGLISH
              - generic [ref=e279]: "\"How many languages does Shunya support?\""
            - generic [ref=e280]:
              - generic [ref=e281]: CUSTOMER · JAPANESE
              - generic [ref=e282]: "\"Shunyaは多言語の会話をどのように処理しますか？\""
            - generic [ref=e283]:
              - generic [ref=e284]: CUSTOMER · KOREAN
              - generic [ref=e285]: "\"우리 회사를 위한 맞춤형 모델을 만들 수 있나요?\""
            - generic [ref=e286]:
              - generic [ref=e287]: CUSTOMER · HINDI
              - generic [ref=e288]: "\"क्या स्वास्थ्य सेवा और बीमा क्षेत्र के लिए विशेष मॉडल उपलब्ध हैं?\""
            - generic [ref=e289]:
              - generic [ref=e290]: CUSTOMER · HINGLISH
              - generic [ref=e291]: "\"Mujhe speech to text model ke baare mein batao.\""
          - generic [ref=e292]:
            - generic [ref=e293]:
              - generic "Country code India +91" [ref=e294]:
                - generic [ref=e295]: 🇮🇳
                - generic [ref=e296]: "+91"
              - textbox "Enter your number" [ref=e297]
            - status [ref=e298]: Demo calls are temporarily unavailable. Please try again later.
            - button "Talk to Meera" [disabled] [ref=e300]:
              - generic [ref=e301]: Talk to Meera
            - status [ref=e302]: She'll call you in under 30 seconds for 2 minutes · available 24/7
            - paragraph [ref=e303]: Your information is only used to initiate the demo call.
      - generic [ref=e305]:
        - generic [ref=e306]:
          - generic [ref=e307]:
            - generic [ref=e310]: Reach
            - heading "Understand Everyone. Speak to Anyone." [level=2] [ref=e311]:
              - text: Understand Everyone.
              - text: Speak to Anyone.
          - paragraph [ref=e313]: We solve the fundamental problems that make voice AI expensive, slow, and insecure.
        - generic [ref=e314]:
          - generic [ref=e315]:
            - generic [ref=e316]: 0+
            - generic [ref=e317]: Languages supported
          - generic [ref=e318]:
            - generic [ref=e319]: 0M+
            - generic [ref=e320]: Minimum native speakers
          - generic [ref=e321]:
            - generic [ref=e322]: 0%
            - generic [ref=e323]: Global population coverage
      - generic [ref=e324]:
        - generic [ref=e326]:
          - generic [ref=e327]: Custom Models
          - generic [ref=e328]:
            - generic [ref=e329]:
              - heading "Tell us your domain. We'll build the model." [level=2] [ref=e330]:
                - generic [ref=e331]: Tell us your domain.
                - generic [ref=e332]: We'll build the model.
              - generic [ref=e333]: Voice AI That Understands Your Business
            - generic [ref=e334]:
              - paragraph [ref=e335]: We train custom voice and language models on your data, workflows, and terminology for higher accuracy and better customer experiences.
              - link "Contact Us" [ref=e337] [cursor=pointer]:
                - /url: /contact
        - generic [ref=e340]:
          - generic [ref=e341]:
            - generic [ref=e343]:
              - generic [ref=e344]: 01 / 04
              - generic [ref=e346]:
                - generic [ref=e347]:
                  - generic [ref=e348]:
                    - img [ref=e350]
                    - generic [ref=e352]: Call Transcripts
                    - generic [ref=e353]: ASR · Annotated
                  - generic [ref=e354]:
                    - img [ref=e356]
                    - generic [ref=e360]: CRM & Tickets
                    - generic [ref=e361]: Logs · Support
                  - generic [ref=e362]:
                    - img [ref=e364]
                    - generic [ref=e367]: SOPs & FAQs
                    - generic [ref=e368]: Knowledge Base
                - generic [ref=e374]:
                  - generic [ref=e375]: Your Custom Model
                  - generic [ref=e376]: Intents · Entities · Flows · Terminology
            - generic [ref=e378]:
              - heading "Built on your real enterprise data" [level=3] [ref=e381]
              - paragraph [ref=e382]:
                - text: "We train on structured and unstructured datasets:"
                - button "Read more" [ref=e383] [cursor=pointer]
          - generic [ref=e384]:
            - generic [ref=e386]:
              - generic [ref=e387]: 02 / 04
              - generic [ref=e390]:
                - generic [ref=e391]:
                  - generic [ref=e392]: Generic AI
                  - generic [ref=e408]:
                    - text: Trained on everything
                    - text: Knows nothing well
                - generic [ref=e409]:
                  - generic [ref=e410]: Your data
                  - generic [ref=e412]: ▾
                - generic [ref=e413]:
                  - generic [ref=e414]: Your SLM
                  - generic [ref=e415]:
                    - generic [ref=e416]:
                      - generic [ref=e417]: EMI intent
                      - generic [ref=e420]: 96%
                    - generic [ref=e421]:
                      - generic [ref=e422]: Returns
                      - generic [ref=e425]: 94%
                    - generic [ref=e426]:
                      - generic [ref=e427]: Balance
                      - generic [ref=e430]: 98%
                    - generic [ref=e431]:
                      - generic [ref=e432]: Delivery
                      - generic [ref=e435]: 91%
                  - generic [ref=e436]:
                    - text: Trained on your data
                    - text: Knows your domain
            - generic [ref=e438]:
              - heading "Domain-adapted small language models" [level=3] [ref=e441]
              - paragraph [ref=e442]:
                - text: "We fine-tune compact transformer-based models optimized for enterprise use:"
                - button "Read more" [ref=e443] [cursor=pointer]
          - generic [ref=e444]:
            - generic [ref=e447]: 03 / 04
            - generic [ref=e453]:
              - heading "Secure deployment, full ownership" [level=3] [ref=e456]
              - paragraph [ref=e457]:
                - text: "Enterprise-grade deployment flexibility:"
                - button "Read more" [ref=e458] [cursor=pointer]
          - generic [ref=e459]:
            - generic [ref=e461]:
              - generic [ref=e462]: 04 / 04
              - generic [ref=e465]:
                - img [ref=e466]
                - generic [ref=e474]:
                  - img [ref=e476]
                  - generic [ref=e478]:
                    - text: Your data
                    - text: isolated
            - generic [ref=e480]:
              - heading "Your data stays yours" [level=3] [ref=e483]
              - paragraph [ref=e484]:
                - text: Your data is used to build your model, not ours.
                - button "Read more" [ref=e485] [cursor=pointer]
      - region "Enterprise Scale. Production Proven." [ref=e486]:
        - generic [ref=e488]:
          - generic [ref=e489]: Trusted At Scale
          - generic [ref=e490]:
            - heading "Enterprise Scale. Production Proven." [level=2] [ref=e491]
            - paragraph [ref=e492]: Built for organizations where Voice AI isn't a demo - it's mission critical.
        - generic [ref=e495]:
          - region "Trusted at scale highlights" [ref=e496]:
            - group "1 of 6" [ref=e497]:
              - generic [ref=e498]:
                - img [ref=e500]
                - generic [ref=e502]:
                  - strong [ref=e503]: 5M+
                  - text: Enterprise Conversations
                - generic [ref=e504]: Powering real customer interactions across industries.
                - generic [ref=e505]: Scale
            - group "2 of 6" [ref=e506]:
              - generic [ref=e507]:
                - img [ref=e509]
                - generic [ref=e512]:
                  - strong [ref=e513]: 50M+
                  - text: Voice AI API Requests
                - generic [ref=e514]: Serving enterprise AI workloads globally.
                - generic [ref=e515]: Infrastructure
            - group "3 of 6" [ref=e516]:
              - generic [ref=e517]:
                - img [ref=e519]
                - generic [ref=e522]:
                  - strong [ref=e523]: 100,000+
                  - text: Hours of Speech Processed
                - generic [ref=e524]: Across languages, accents and noisy environments.
                - generic [ref=e525]: Intelligence
            - group "4 of 6" [ref=e526]:
              - generic [ref=e527]:
                - img [ref=e529]
                - generic [ref=e532]:
                  - strong [ref=e533]: <2%
                  - text: Call Drop-off
                - generic [ref=e534]: Reliable enterprise Voice AI at production scale.
                - generic [ref=e535]: Reliability
            - group "5 of 6" [ref=e536]:
              - generic [ref=e537]:
                - img [ref=e539]
                - generic [ref=e542]:
                  - strong [ref=e543]: Industry-Leading
                  - text: Speech & Voice Benchmarks
                - generic [ref=e544]: Recognized for multilingual speech intelligence.
                - generic [ref=e545]: Benchmark
            - group "6 of 6" [ref=e546]:
              - generic [ref=e547]:
                - img [ref=e549]
                - generic [ref=e553]:
                  - strong [ref=e554]: World-Class
                  - text: Speech Recognition Accuracy
                - generic [ref=e555]: Built for real-world enterprise conversations.
                - generic [ref=e556]: Performance
          - generic [ref=e557]:
            - tablist "Choose highlight" [ref=e558]:
              - tab "Show Scale card" [selected] [ref=e559] [cursor=pointer]
              - tab "Show Infrastructure card" [ref=e560] [cursor=pointer]
              - tab "Show Intelligence card" [ref=e561] [cursor=pointer]
              - tab "Show Reliability card" [ref=e562] [cursor=pointer]
              - tab "Show Benchmark card" [ref=e563] [cursor=pointer]
              - tab "Show Performance card" [ref=e564] [cursor=pointer]
            - paragraph [ref=e565]: Swipe to explore more
      - region "The Voice AI Stack" [ref=e566]:
        - generic [ref=e567]:
          - generic [ref=e568]:
            - generic [ref=e569]: MODELS
            - heading "The Voice AI Stack" [level=2] [ref=e570]
            - paragraph [ref=e571]: Everything You Need To Build Voice Experiences
          - generic [ref=e572]:
            - button "Previous widget" [disabled] [ref=e573]:
              - img [ref=e574]
            - tablist "Voice AI models" [ref=e577]:
              - generic [ref=e578]:
                - tab "Zero TTS Indic" [selected] [ref=e579] [cursor=pointer]:
                  - generic [ref=e580]:
                    - generic [ref=e581]: Zero TTS
                    - generic [ref=e582]: Indic
                - tab "Zero STT Codeswitch" [ref=e583] [cursor=pointer]:
                  - generic [ref=e584]:
                    - generic [ref=e585]: Zero STT
                    - generic [ref=e586]: Codeswitch
                - tab "Zero STT Indic" [ref=e587] [cursor=pointer]:
                  - generic [ref=e588]:
                    - generic [ref=e589]: Zero STT
                    - generic [ref=e590]: Indic
                - tab "Zero STT JP/KR" [ref=e591] [cursor=pointer]:
                  - generic [ref=e592]:
                    - generic [ref=e593]: Zero STT
                    - generic [ref=e594]: JP/KR
                - tab "Zero STT Med" [ref=e595] [cursor=pointer]:
                  - generic [ref=e596]:
                    - generic [ref=e597]: Zero STT
                    - generic [ref=e598]: Med
                - tab "VAK" [ref=e599] [cursor=pointer]:
                  - generic [ref=e601]: VAK
            - button "Next widget" [ref=e602] [cursor=pointer]:
              - img [ref=e603]
          - iframe [ref=e607]:
            
      - region "Build Once. Deploy Anywhere" [ref=e608]:
        - generic [ref=e609]:
          - generic [ref=e610]:
            - generic [ref=e611]: Platform
            - heading "Build Once. Deploy Anywhere" [level=2] [ref=e612]
            - paragraph [ref=e613]: Deploy one intelligence layer across every customer touchpoint - from the phone in your hand to the cloud powering your enterprise.
          - generic [ref=e615]:
            - img [ref=e618]
            - generic [ref=e626]:
              - generic [ref=e627]: SHUNYA
              - generic [ref=e628]: Intelligence
              - generic [ref=e629]: One AI Layer
            - generic [ref=e630]:
              - img [ref=e632]
              - generic [ref=e634]:
                - generic [ref=e635]: DEPLOY
                - generic [ref=e636]: On-Premise
            - generic [ref=e637]:
              - img [ref=e639]
              - generic [ref=e644]:
                - generic [ref=e645]: DEPLOY
                - generic [ref=e646]: Edge Infrastructure
            - generic [ref=e647]:
              - img [ref=e649]
              - generic [ref=e651]:
                - generic [ref=e652]: DEPLOY
                - generic [ref=e653]: Private VPC
            - generic [ref=e654]:
              - img [ref=e656]
              - generic [ref=e658]:
                - generic [ref=e659]: DEPLOY
                - generic [ref=e660]: Cloud
            - generic [ref=e661]:
              - img [ref=e663]
              - generic [ref=e665]:
                - generic [ref=e666]: CHANNEL
                - generic [ref=e667]: Phone
            - generic [ref=e668]:
              - img [ref=e670]
              - generic [ref=e676]:
                - generic [ref=e677]: CHANNEL
                - generic [ref=e678]: Connected Devices
            - generic [ref=e679]:
              - img [ref=e681]
              - generic [ref=e685]:
                - generic [ref=e686]: CHANNEL
                - generic [ref=e687]: Web
            - generic [ref=e688]:
              - img [ref=e690]
              - generic [ref=e694]:
                - generic [ref=e695]: CHANNEL
                - generic [ref=e696]: Contact Centers
            - generic [ref=e697]:
              - img [ref=e699]
              - generic [ref=e701]:
                - generic [ref=e702]: CHANNEL
                - generic [ref=e703]: WhatsApp
            - generic [ref=e704]:
              - img [ref=e706]
              - generic [ref=e708]:
                - generic [ref=e709]: CHANNEL
                - generic [ref=e710]: Kiosks
            - generic [ref=e711]:
              - img [ref=e713]
              - generic [ref=e715]:
                - generic [ref=e716]: CHANNEL
                - generic [ref=e717]: Mobile Apps
      - generic [ref=e718]:
        - generic [ref=e719]:
          - generic [ref=e720]: Post-Call Analysis
          - heading "Every Call Matters Most Never gets Reviewed" [level=2] [ref=e721]:
            - text: Every Call Matters
            - text: Most Never gets Reviewed
          - heading "QA teams review only 1-3% of customer interactions. The rest remain invisible. Read more" [level=3] [ref=e722]:
            - generic [ref=e723]:
              - text: QA teams review only 1-3% of customer interactions. The rest remain invisible.
              - button "Read more" [ref=e724] [cursor=pointer]
        - generic [ref=e725]:
          - generic [ref=e726]:
            - generic [ref=e728]:
              - heading "Most contact centers review only 1–3% of interactions." [level=3] [ref=e729]
              - paragraph [ref=e864]: A tiny sample trying to represent an entire operation
              - paragraph [ref=e865]: Every unseen conversation could contain a customer complaint, compliance issue, missed sale, or churn signal.
            - generic [ref=e867]:
              - heading "What If Every Call Was Reviewed?" [level=3] [ref=e868]
              - paragraph [ref=e869]: "Shunya automatically analyzes 100% of conversations and extracts:"
              - generic [ref=e870]:
                - generic [ref=e871]:
                  - generic [ref=e872]:
                    - img [ref=e874]
                    - text: Customer Intent
                  - generic [ref=e877]:
                    - img [ref=e879]
                    - text: Emotion Detection
                  - generic [ref=e882]:
                    - img [ref=e884]
                    - text: Resolution Status
                  - generic [ref=e887]:
                    - img [ref=e889]
                    - text: Follow-Up Actions
                  - generic [ref=e892]:
                    - img [ref=e894]
                    - text: Coaching Opportunities
                - generic [ref=e897]:
                  - generic [ref=e898]:
                    - img [ref=e900]
                    - text: Sentiment Analysis
                  - generic [ref=e903]:
                    - img [ref=e905]
                    - text: Compliance Monitoring
                  - generic [ref=e908]:
                    - img [ref=e910]
                    - text: Recurring Issues
                  - generic [ref=e913]:
                    - img [ref=e915]
                    - text: Agent Performance
                  - generic [ref=e918]:
                    - img [ref=e920]
                    - text: Call Summaries
              - generic [ref=e925]: No manual sampling, no blind spots.
          - generic [ref=e926]:
            - article [ref=e927]:
              - generic [ref=e928]:
                - img [ref=e930]
                - heading "Understand Your Customers" [level=3] [ref=e935]
                - paragraph [ref=e936]: Discover why customers are calling, what issues appear most often and which trends are emerging across thousands of conversations.
                - generic [ref=e937]: CUSTOMER INSIGHTS
            - article [ref=e938]:
              - generic [ref=e939]:
                - img [ref=e941]
                - heading "Agent Performance" [level=3] [ref=e946]
                - paragraph [ref=e947]: Review conversations for SOP adherence, compliance, objection handling and missed opportunities. Help supervisors identify coaching moments without listening to hundreds of calls.
                - generic [ref=e948]: COACHING
            - article [ref=e949]:
              - generic [ref=e950]:
                - img [ref=e952]
                - heading "Automate What Happens Next" [level=3] [ref=e956]
                - paragraph [ref=e957]: Generate call summaries, follow-up actions, recommendations, and operational insights automatically.
                - generic [ref=e958]: FOLLOW-UP-ACTIONS
          - link "Contact us to know more" [ref=e960] [cursor=pointer]:
            - /url: /contact
      - generic [ref=e961]:
        - generic [ref=e962]:
          - generic [ref=e965]:
            - text: Built for every language
            - text: your customers speak.
          - heading "From English to Japanese" [level=2] [ref=e966]
          - paragraph [ref=e967]: One intelligence layer that understands how your customers actually speak - across languages, dialects, and code-switches.
        - generic [ref=e970]:
          - generic: Loading world map…
        - generic [ref=e973]:
          - generic [ref=e975] [cursor=pointer]: Afar
          - generic [ref=e977] [cursor=pointer]: Abkhaz
          - generic [ref=e979] [cursor=pointer]: Avestan
          - generic [ref=e981] [cursor=pointer]: Afrikaans
          - generic [ref=e983] [cursor=pointer]: Akan
          - generic [ref=e985] [cursor=pointer]: Amharic
          - generic [ref=e987] [cursor=pointer]: Aragonese
          - generic [ref=e989] [cursor=pointer]: Arabic
          - generic [ref=e991] [cursor=pointer]: Assamese
          - generic [ref=e993] [cursor=pointer]: Avaric
          - generic [ref=e995] [cursor=pointer]: Aymara
          - generic [ref=e997] [cursor=pointer]: Azerbaijani
          - generic [ref=e999] [cursor=pointer]: Bashkir
          - generic [ref=e1001] [cursor=pointer]: Belarusian
          - generic [ref=e1003] [cursor=pointer]: Bulgarian
          - generic [ref=e1005] [cursor=pointer]: Bihari
          - generic [ref=e1007] [cursor=pointer]: Bislama
          - generic [ref=e1009] [cursor=pointer]: Bambara
          - generic [ref=e1011] [cursor=pointer]: Bengali
          - generic [ref=e1013] [cursor=pointer]: Tibetan
          - generic [ref=e1015] [cursor=pointer]: Breton
          - generic [ref=e1017] [cursor=pointer]: Bosnian
          - generic [ref=e1019] [cursor=pointer]: Catalan
          - generic [ref=e1021] [cursor=pointer]: Chechen
          - generic [ref=e1023] [cursor=pointer]: Chamorro
          - generic [ref=e1025] [cursor=pointer]: Corsican
          - generic [ref=e1027] [cursor=pointer]: Cree
          - generic [ref=e1029] [cursor=pointer]: Czech
          - generic [ref=e1031] [cursor=pointer]: Old Church Slavonic
          - generic [ref=e1033] [cursor=pointer]: Chuvash
          - generic [ref=e1035] [cursor=pointer]: Welsh
          - generic [ref=e1037] [cursor=pointer]: Danish
          - generic [ref=e1039] [cursor=pointer]: German
          - generic [ref=e1041] [cursor=pointer]: Divehi
          - generic [ref=e1043] [cursor=pointer]: Dzongkha
          - generic [ref=e1045] [cursor=pointer]: Ewe
          - generic [ref=e1047] [cursor=pointer]: Greek
          - generic [ref=e1049] [cursor=pointer]: English
          - generic [ref=e1051] [cursor=pointer]: Esperanto
          - generic [ref=e1053] [cursor=pointer]: Spanish
          - generic [ref=e1055] [cursor=pointer]: Estonian
          - generic [ref=e1057] [cursor=pointer]: Basque
          - generic [ref=e1059] [cursor=pointer]: Persian
          - generic [ref=e1061] [cursor=pointer]: Fula
          - generic [ref=e1063] [cursor=pointer]: Finnish
          - generic [ref=e1065] [cursor=pointer]: Fijian
          - generic [ref=e1067] [cursor=pointer]: Faroese
          - generic [ref=e1069] [cursor=pointer]: French
          - generic [ref=e1071] [cursor=pointer]: Western Frisian
          - generic [ref=e1073] [cursor=pointer]: Irish
          - generic [ref=e1075] [cursor=pointer]: Scottish Gaelic
          - generic [ref=e1077] [cursor=pointer]: Galician
          - generic [ref=e1079] [cursor=pointer]: Guaraní
          - generic [ref=e1081] [cursor=pointer]: Gujarati
          - generic [ref=e1083] [cursor=pointer]: Manx
          - generic [ref=e1085] [cursor=pointer]: Hausa
          - generic [ref=e1087] [cursor=pointer]: Hebrew
          - generic [ref=e1089] [cursor=pointer]: Hindi
          - generic [ref=e1091] [cursor=pointer]: Hiri Motu
          - generic [ref=e1093] [cursor=pointer]: Croatian
          - generic [ref=e1095] [cursor=pointer]: Haitian
          - generic [ref=e1097] [cursor=pointer]: Hungarian
          - generic [ref=e1099] [cursor=pointer]: Armenian
          - generic [ref=e1101] [cursor=pointer]: Herero
          - generic [ref=e1103] [cursor=pointer]: Interlingua
          - generic [ref=e1105] [cursor=pointer]: Indonesian
          - generic [ref=e1107] [cursor=pointer]: Interlingue
          - generic [ref=e1109] [cursor=pointer]: Igbo
          - generic [ref=e1111] [cursor=pointer]: Nuosu
          - generic [ref=e1113] [cursor=pointer]: Inupiaq
          - generic [ref=e1115] [cursor=pointer]: Ido
          - generic [ref=e1117] [cursor=pointer]: Icelandic
          - generic [ref=e1119] [cursor=pointer]: Italian
          - generic [ref=e1121] [cursor=pointer]: Inuktitut
          - generic [ref=e1123] [cursor=pointer]: Japanese
          - generic [ref=e1125] [cursor=pointer]: Javanese
          - generic [ref=e1127] [cursor=pointer]: Georgian
          - generic [ref=e1129] [cursor=pointer]: Kongo
          - generic [ref=e1131] [cursor=pointer]: Kikuyu
          - generic [ref=e1133] [cursor=pointer]: Kwanyama
          - generic [ref=e1135] [cursor=pointer]: Kazakh
          - generic [ref=e1137] [cursor=pointer]: Kalaallisut
          - generic [ref=e1139] [cursor=pointer]: Khmer
          - generic [ref=e1141] [cursor=pointer]: Kannada
          - generic [ref=e1143] [cursor=pointer]: Korean
          - generic [ref=e1145] [cursor=pointer]: Kanuri
          - generic [ref=e1147] [cursor=pointer]: Kashmiri
          - generic [ref=e1149] [cursor=pointer]: Kurdish
          - generic [ref=e1151] [cursor=pointer]: Komi
          - generic [ref=e1153] [cursor=pointer]: Cornish
          - generic [ref=e1155] [cursor=pointer]: Kyrgyz
          - generic [ref=e1157] [cursor=pointer]: Latin
          - generic [ref=e1159] [cursor=pointer]: Luxembourgish
          - generic [ref=e1161] [cursor=pointer]: Ganda
          - generic [ref=e1163] [cursor=pointer]: Limburgish
          - generic [ref=e1165] [cursor=pointer]: Lingala
          - generic [ref=e1167] [cursor=pointer]: Lao
          - generic [ref=e1169] [cursor=pointer]: Lithuanian
          - generic [ref=e1171] [cursor=pointer]: Luba-Katanga
          - generic [ref=e1173] [cursor=pointer]: Latvian
          - generic [ref=e1175] [cursor=pointer]: Malagasy
          - generic [ref=e1177] [cursor=pointer]: Marshallese
          - generic [ref=e1179] [cursor=pointer]: Māori
          - generic [ref=e1181] [cursor=pointer]: Macedonian
          - generic [ref=e1183] [cursor=pointer]: Malayalam
          - generic [ref=e1185] [cursor=pointer]: Mongolian
          - generic [ref=e1187] [cursor=pointer]: Marathi
          - generic [ref=e1189] [cursor=pointer]: Malay
          - generic [ref=e1191] [cursor=pointer]: Maltese
          - generic [ref=e1193] [cursor=pointer]: Burmese
          - generic [ref=e1195] [cursor=pointer]: Nauru
          - generic [ref=e1197] [cursor=pointer]: Norwegian Bokmål
          - generic [ref=e1199] [cursor=pointer]: Northern Ndebele
          - generic [ref=e1201] [cursor=pointer]: Nepali
          - generic [ref=e1203] [cursor=pointer]: Ndonga
          - generic [ref=e1205] [cursor=pointer]: Dutch
          - generic [ref=e1207] [cursor=pointer]: Norwegian Nynorsk
          - generic [ref=e1209] [cursor=pointer]: Norwegian
          - generic [ref=e1211] [cursor=pointer]: Southern Ndebele
          - generic [ref=e1213] [cursor=pointer]: Navajo
          - generic [ref=e1215] [cursor=pointer]: Chichewa
          - generic [ref=e1217] [cursor=pointer]: Occitan
          - generic [ref=e1219] [cursor=pointer]: Ojibwe
          - generic [ref=e1221] [cursor=pointer]: Oromo
          - generic [ref=e1223] [cursor=pointer]: Odia
          - generic [ref=e1225] [cursor=pointer]: Ossetian
          - generic [ref=e1227] [cursor=pointer]: Punjabi
          - generic [ref=e1229] [cursor=pointer]: Pāli
          - generic [ref=e1231] [cursor=pointer]: Polish
          - generic [ref=e1233] [cursor=pointer]: Pashto
          - generic [ref=e1235] [cursor=pointer]: Portuguese
          - generic [ref=e1237] [cursor=pointer]: Quechua
          - generic [ref=e1239] [cursor=pointer]: Romansh
          - generic [ref=e1241] [cursor=pointer]: Kirundi
          - generic [ref=e1243] [cursor=pointer]: Romanian
          - generic [ref=e1245] [cursor=pointer]: Russian
          - generic [ref=e1247] [cursor=pointer]: Kinyarwanda
          - generic [ref=e1249] [cursor=pointer]: Sanskrit
          - generic [ref=e1251] [cursor=pointer]: Sardinian
          - generic [ref=e1253] [cursor=pointer]: Sindhi
          - generic [ref=e1255] [cursor=pointer]: Northern Sami
          - generic [ref=e1257] [cursor=pointer]: Sango
          - generic [ref=e1259] [cursor=pointer]: Sinhala
          - generic [ref=e1261] [cursor=pointer]: Slovak
          - generic [ref=e1263] [cursor=pointer]: Slovenian
          - generic [ref=e1265] [cursor=pointer]: Samoan
          - generic [ref=e1267] [cursor=pointer]: Shona
          - generic [ref=e1269] [cursor=pointer]: Somali
          - generic [ref=e1271] [cursor=pointer]: Albanian
          - generic [ref=e1273] [cursor=pointer]: Serbian
          - generic [ref=e1275] [cursor=pointer]: Swati
          - generic [ref=e1277] [cursor=pointer]: Southern Sotho
          - generic [ref=e1279] [cursor=pointer]: Sundanese
          - generic [ref=e1281] [cursor=pointer]: Swedish
          - generic [ref=e1283] [cursor=pointer]: Swahili
          - generic [ref=e1285] [cursor=pointer]: Tamil
          - generic [ref=e1287] [cursor=pointer]: Telugu
          - generic [ref=e1289] [cursor=pointer]: Tajik
          - generic [ref=e1291] [cursor=pointer]: Thai
          - generic [ref=e1293] [cursor=pointer]: Tigrinya
          - generic [ref=e1295] [cursor=pointer]: Turkmen
          - generic [ref=e1297] [cursor=pointer]: Tagalog
          - generic [ref=e1299] [cursor=pointer]: Tswana
          - generic [ref=e1301] [cursor=pointer]: Tonga
          - generic [ref=e1303] [cursor=pointer]: Turkish
          - generic [ref=e1305] [cursor=pointer]: Tsonga
          - generic [ref=e1307] [cursor=pointer]: Tatar
          - generic [ref=e1309] [cursor=pointer]: Twi
          - generic [ref=e1311] [cursor=pointer]: Tahitian
          - generic [ref=e1313] [cursor=pointer]: Uyghur
          - generic [ref=e1315] [cursor=pointer]: Ukrainian
          - generic [ref=e1317] [cursor=pointer]: Urdu
          - generic [ref=e1319] [cursor=pointer]: Uzbek
          - generic [ref=e1321] [cursor=pointer]: Venda
          - generic [ref=e1323] [cursor=pointer]: Vietnamese
          - generic [ref=e1325] [cursor=pointer]: Volapük
          - generic [ref=e1327] [cursor=pointer]: Walloon
          - generic [ref=e1329] [cursor=pointer]: Wolof
          - generic [ref=e1331] [cursor=pointer]: Xhosa
          - generic [ref=e1333] [cursor=pointer]: Yiddish
          - generic [ref=e1335] [cursor=pointer]: Yoruba
          - generic [ref=e1337] [cursor=pointer]: Zhuang
          - generic [ref=e1339] [cursor=pointer]: Chinese
          - generic [ref=e1341] [cursor=pointer]: Zulu
          - generic [ref=e1343] [cursor=pointer]: Filipino
          - generic [ref=e1345] [cursor=pointer]: Mandarin Chinese
          - generic [ref=e1347] [cursor=pointer]: Yue Chinese
          - generic [ref=e1349] [cursor=pointer]: Najdi Arabic
          - generic [ref=e1351] [cursor=pointer]: Moroccan Arabic
          - generic [ref=e1353] [cursor=pointer]: Egyptian Arabic
          - generic [ref=e1355] [cursor=pointer]: Dari
          - generic [ref=e1357] [cursor=pointer]: Iranian Persian
          - generic [ref=e1359] [cursor=pointer]: Bhojpuri
          - generic [ref=e1361] [cursor=pointer]: Maithili
          - generic [ref=e1363] [cursor=pointer]: Fiji Hindi
          - generic [ref=e1365] [cursor=pointer]: Central Atlas Tamazight
          - generic [ref=e1367] [cursor=pointer]: Kabyle
          - generic [ref=e1369] [cursor=pointer]: Berber
          - generic [ref=e1371] [cursor=pointer]: Sardinian
          - generic [ref=e1373] [cursor=pointer]: Asturian
          - generic [ref=e1375] [cursor=pointer]: Ladino
          - generic [ref=e1377] [cursor=pointer]: Lombard
          - generic [ref=e1379] [cursor=pointer]: Neapolitan
          - generic [ref=e1381] [cursor=pointer]: Central Kurdish
          - generic [ref=e1383] [cursor=pointer]: Hindi
          - generic [ref=e1385] [cursor=pointer]: Bengali
          - generic [ref=e1387] [cursor=pointer]: Telugu
          - generic [ref=e1389] [cursor=pointer]: Marathi
          - generic [ref=e1391] [cursor=pointer]: Kannada
          - generic [ref=e1393] [cursor=pointer]: Tamil
          - generic [ref=e1395] [cursor=pointer]: Malayalam
          - generic [ref=e1397] [cursor=pointer]: Gujarati
          - generic [ref=e1399] [cursor=pointer]: Punjabi
          - generic [ref=e1401] [cursor=pointer]: Odia
          - generic [ref=e1403] [cursor=pointer]: Assamese
          - generic [ref=e1405] [cursor=pointer]: English
          - generic [ref=e1407] [cursor=pointer]: Urdu
          - generic [ref=e1409] [cursor=pointer]: Kashmiri
          - generic [ref=e1411] [cursor=pointer]: Nepali
          - generic [ref=e1413] [cursor=pointer]: Sindhi
          - generic [ref=e1415] [cursor=pointer]: Sanskrit
          - generic [ref=e1417] [cursor=pointer]: Maithili
          - generic [ref=e1419] [cursor=pointer]: Bhojpuri
          - generic [ref=e1421] [cursor=pointer]: Magahi
          - generic [ref=e1423] [cursor=pointer]: Chhattisgarhi
          - generic [ref=e1425] [cursor=pointer]: Rajasthani
          - generic [ref=e1427] [cursor=pointer]: Dogri
          - generic [ref=e1429] [cursor=pointer]: Konkani
          - generic [ref=e1431] [cursor=pointer]: Santali
          - generic [ref=e1433] [cursor=pointer]: Bodo
          - generic [ref=e1435] [cursor=pointer]: Manipuri
          - generic [ref=e1437] [cursor=pointer]: Garo
          - generic [ref=e1439] [cursor=pointer]: Marwari
          - generic [ref=e1441] [cursor=pointer]: Haryanvi
          - generic [ref=e1443] [cursor=pointer]: Awadhi
          - generic [ref=e1445] [cursor=pointer]: Braj
          - generic [ref=e1447] [cursor=pointer]: Garhwali
          - generic [ref=e1449] [cursor=pointer]: Lambadi
          - generic [ref=e1451] [cursor=pointer]: Bhili
          - generic [ref=e1453] [cursor=pointer]: Bagri
          - generic [ref=e1455] [cursor=pointer]: Kumaoni
          - generic [ref=e1457] [cursor=pointer]: Kangri
          - generic [ref=e1459] [cursor=pointer]: Bagheli
          - generic [ref=e1461] [cursor=pointer]: Nimadi
          - generic [ref=e1463] [cursor=pointer]: Rajbanshi
          - generic [ref=e1465] [cursor=pointer]: Marwari
          - generic [ref=e1467] [cursor=pointer]: Mewari
          - generic [ref=e1469] [cursor=pointer]: Wagdi
          - generic [ref=e1471] [cursor=pointer]: Hadoti
          - generic [ref=e1473] [cursor=pointer]: Goan Konkani
          - generic [ref=e1475] [cursor=pointer]: Ahirani
          - generic [ref=e1477] [cursor=pointer]: Surgujia
          - generic [ref=e1479] [cursor=pointer]: Kurukh
          - generic [ref=e1481] [cursor=pointer]: Mundari
          - generic [ref=e1483] [cursor=pointer]: Sambalpuri
          - generic [ref=e1485] [cursor=pointer]: Kutchi
          - generic [ref=e1487] [cursor=pointer]: Tulu
          - generic [ref=e1489] [cursor=pointer]: Kodava
          - generic [ref=e1491] [cursor=pointer]: Sadri
          - generic [ref=e1493] [cursor=pointer]: Afar
          - generic [ref=e1495] [cursor=pointer]: Abkhaz
          - generic [ref=e1497] [cursor=pointer]: Avestan
          - generic [ref=e1499] [cursor=pointer]: Afrikaans
          - generic [ref=e1501] [cursor=pointer]: Akan
          - generic [ref=e1503] [cursor=pointer]: Amharic
          - generic [ref=e1505] [cursor=pointer]: Aragonese
          - generic [ref=e1507] [cursor=pointer]: Arabic
          - generic [ref=e1509] [cursor=pointer]: Assamese
          - generic [ref=e1511] [cursor=pointer]: Avaric
          - generic [ref=e1513] [cursor=pointer]: Aymara
          - generic [ref=e1515] [cursor=pointer]: Azerbaijani
          - generic [ref=e1517] [cursor=pointer]: Bashkir
          - generic [ref=e1519] [cursor=pointer]: Belarusian
          - generic [ref=e1521] [cursor=pointer]: Bulgarian
          - generic [ref=e1523] [cursor=pointer]: Bihari
          - generic [ref=e1525] [cursor=pointer]: Bislama
          - generic [ref=e1527] [cursor=pointer]: Bambara
          - generic [ref=e1529] [cursor=pointer]: Bengali
          - generic [ref=e1531] [cursor=pointer]: Tibetan
          - generic [ref=e1533] [cursor=pointer]: Breton
          - generic [ref=e1535] [cursor=pointer]: Bosnian
          - generic [ref=e1537] [cursor=pointer]: Catalan
          - generic [ref=e1539] [cursor=pointer]: Chechen
          - generic [ref=e1541] [cursor=pointer]: Chamorro
          - generic [ref=e1543] [cursor=pointer]: Corsican
          - generic [ref=e1545] [cursor=pointer]: Cree
          - generic [ref=e1547] [cursor=pointer]: Czech
          - generic [ref=e1549] [cursor=pointer]: Old Church Slavonic
          - generic [ref=e1551] [cursor=pointer]: Chuvash
          - generic [ref=e1553] [cursor=pointer]: Welsh
          - generic [ref=e1555] [cursor=pointer]: Danish
          - generic [ref=e1557] [cursor=pointer]: German
          - generic [ref=e1559] [cursor=pointer]: Divehi
          - generic [ref=e1561] [cursor=pointer]: Dzongkha
          - generic [ref=e1563] [cursor=pointer]: Ewe
          - generic [ref=e1565] [cursor=pointer]: Greek
          - generic [ref=e1567] [cursor=pointer]: English
          - generic [ref=e1569] [cursor=pointer]: Esperanto
          - generic [ref=e1571] [cursor=pointer]: Spanish
          - generic [ref=e1573] [cursor=pointer]: Estonian
          - generic [ref=e1575] [cursor=pointer]: Basque
          - generic [ref=e1577] [cursor=pointer]: Persian
          - generic [ref=e1579] [cursor=pointer]: Fula
          - generic [ref=e1581] [cursor=pointer]: Finnish
          - generic [ref=e1583] [cursor=pointer]: Fijian
          - generic [ref=e1585] [cursor=pointer]: Faroese
          - generic [ref=e1587] [cursor=pointer]: French
          - generic [ref=e1589] [cursor=pointer]: Western Frisian
          - generic [ref=e1591] [cursor=pointer]: Irish
          - generic [ref=e1593] [cursor=pointer]: Scottish Gaelic
          - generic [ref=e1595] [cursor=pointer]: Galician
          - generic [ref=e1597] [cursor=pointer]: Guaraní
          - generic [ref=e1599] [cursor=pointer]: Gujarati
          - generic [ref=e1601] [cursor=pointer]: Manx
          - generic [ref=e1603] [cursor=pointer]: Hausa
          - generic [ref=e1605] [cursor=pointer]: Hebrew
          - generic [ref=e1607] [cursor=pointer]: Hindi
          - generic [ref=e1609] [cursor=pointer]: Hiri Motu
          - generic [ref=e1611] [cursor=pointer]: Croatian
          - generic [ref=e1613] [cursor=pointer]: Haitian
          - generic [ref=e1615] [cursor=pointer]: Hungarian
          - generic [ref=e1617] [cursor=pointer]: Armenian
          - generic [ref=e1619] [cursor=pointer]: Herero
          - generic [ref=e1621] [cursor=pointer]: Interlingua
          - generic [ref=e1623] [cursor=pointer]: Indonesian
          - generic [ref=e1625] [cursor=pointer]: Interlingue
          - generic [ref=e1627] [cursor=pointer]: Igbo
          - generic [ref=e1629] [cursor=pointer]: Nuosu
          - generic [ref=e1631] [cursor=pointer]: Inupiaq
          - generic [ref=e1633] [cursor=pointer]: Ido
          - generic [ref=e1635] [cursor=pointer]: Icelandic
          - generic [ref=e1637] [cursor=pointer]: Italian
          - generic [ref=e1639] [cursor=pointer]: Inuktitut
          - generic [ref=e1641] [cursor=pointer]: Japanese
          - generic [ref=e1643] [cursor=pointer]: Javanese
          - generic [ref=e1645] [cursor=pointer]: Georgian
          - generic [ref=e1647] [cursor=pointer]: Kongo
          - generic [ref=e1649] [cursor=pointer]: Kikuyu
          - generic [ref=e1651] [cursor=pointer]: Kwanyama
          - generic [ref=e1653] [cursor=pointer]: Kazakh
          - generic [ref=e1655] [cursor=pointer]: Kalaallisut
          - generic [ref=e1657] [cursor=pointer]: Khmer
          - generic [ref=e1659] [cursor=pointer]: Kannada
          - generic [ref=e1661] [cursor=pointer]: Korean
          - generic [ref=e1663] [cursor=pointer]: Kanuri
          - generic [ref=e1665] [cursor=pointer]: Kashmiri
          - generic [ref=e1667] [cursor=pointer]: Kurdish
          - generic [ref=e1669] [cursor=pointer]: Komi
          - generic [ref=e1671] [cursor=pointer]: Cornish
          - generic [ref=e1673] [cursor=pointer]: Kyrgyz
          - generic [ref=e1675] [cursor=pointer]: Latin
          - generic [ref=e1677] [cursor=pointer]: Luxembourgish
          - generic [ref=e1679] [cursor=pointer]: Ganda
          - generic [ref=e1681] [cursor=pointer]: Limburgish
          - generic [ref=e1683] [cursor=pointer]: Lingala
          - generic [ref=e1685] [cursor=pointer]: Lao
          - generic [ref=e1687] [cursor=pointer]: Lithuanian
          - generic [ref=e1689] [cursor=pointer]: Luba-Katanga
          - generic [ref=e1691] [cursor=pointer]: Latvian
          - generic [ref=e1693] [cursor=pointer]: Malagasy
          - generic [ref=e1695] [cursor=pointer]: Marshallese
          - generic [ref=e1697] [cursor=pointer]: Māori
          - generic [ref=e1699] [cursor=pointer]: Macedonian
          - generic [ref=e1701] [cursor=pointer]: Malayalam
          - generic [ref=e1703] [cursor=pointer]: Mongolian
          - generic [ref=e1705] [cursor=pointer]: Marathi
          - generic [ref=e1707] [cursor=pointer]: Malay
          - generic [ref=e1709] [cursor=pointer]: Maltese
          - generic [ref=e1711] [cursor=pointer]: Burmese
          - generic [ref=e1713] [cursor=pointer]: Nauru
          - generic [ref=e1715] [cursor=pointer]: Norwegian Bokmål
          - generic [ref=e1717] [cursor=pointer]: Northern Ndebele
          - generic [ref=e1719] [cursor=pointer]: Nepali
          - generic [ref=e1721] [cursor=pointer]: Ndonga
          - generic [ref=e1723] [cursor=pointer]: Dutch
          - generic [ref=e1725] [cursor=pointer]: Norwegian Nynorsk
          - generic [ref=e1727] [cursor=pointer]: Norwegian
          - generic [ref=e1729] [cursor=pointer]: Southern Ndebele
          - generic [ref=e1731] [cursor=pointer]: Navajo
          - generic [ref=e1733] [cursor=pointer]: Chichewa
          - generic [ref=e1735] [cursor=pointer]: Occitan
          - generic [ref=e1737] [cursor=pointer]: Ojibwe
          - generic [ref=e1739] [cursor=pointer]: Oromo
          - generic [ref=e1741] [cursor=pointer]: Odia
          - generic [ref=e1743] [cursor=pointer]: Ossetian
          - generic [ref=e1745] [cursor=pointer]: Punjabi
          - generic [ref=e1747] [cursor=pointer]: Pāli
          - generic [ref=e1749] [cursor=pointer]: Polish
          - generic [ref=e1751] [cursor=pointer]: Pashto
          - generic [ref=e1753] [cursor=pointer]: Portuguese
          - generic [ref=e1755] [cursor=pointer]: Quechua
          - generic [ref=e1757] [cursor=pointer]: Romansh
          - generic [ref=e1759] [cursor=pointer]: Kirundi
          - generic [ref=e1761] [cursor=pointer]: Romanian
          - generic [ref=e1763] [cursor=pointer]: Russian
          - generic [ref=e1765] [cursor=pointer]: Kinyarwanda
          - generic [ref=e1767] [cursor=pointer]: Sanskrit
          - generic [ref=e1769] [cursor=pointer]: Sardinian
          - generic [ref=e1771] [cursor=pointer]: Sindhi
          - generic [ref=e1773] [cursor=pointer]: Northern Sami
          - generic [ref=e1775] [cursor=pointer]: Sango
          - generic [ref=e1777] [cursor=pointer]: Sinhala
          - generic [ref=e1779] [cursor=pointer]: Slovak
          - generic [ref=e1781] [cursor=pointer]: Slovenian
          - generic [ref=e1783] [cursor=pointer]: Samoan
          - generic [ref=e1785] [cursor=pointer]: Shona
          - generic [ref=e1787] [cursor=pointer]: Somali
          - generic [ref=e1789] [cursor=pointer]: Albanian
          - generic [ref=e1791] [cursor=pointer]: Serbian
          - generic [ref=e1793] [cursor=pointer]: Swati
          - generic [ref=e1795] [cursor=pointer]: Southern Sotho
          - generic [ref=e1797] [cursor=pointer]: Sundanese
          - generic [ref=e1799] [cursor=pointer]: Swedish
          - generic [ref=e1801] [cursor=pointer]: Swahili
          - generic [ref=e1803] [cursor=pointer]: Tamil
          - generic [ref=e1805] [cursor=pointer]: Telugu
          - generic [ref=e1807] [cursor=pointer]: Tajik
          - generic [ref=e1809] [cursor=pointer]: Thai
          - generic [ref=e1811] [cursor=pointer]: Tigrinya
          - generic [ref=e1813] [cursor=pointer]: Turkmen
          - generic [ref=e1815] [cursor=pointer]: Tagalog
          - generic [ref=e1817] [cursor=pointer]: Tswana
          - generic [ref=e1819] [cursor=pointer]: Tonga
          - generic [ref=e1821] [cursor=pointer]: Turkish
          - generic [ref=e1823] [cursor=pointer]: Tsonga
          - generic [ref=e1825] [cursor=pointer]: Tatar
          - generic [ref=e1827] [cursor=pointer]: Twi
          - generic [ref=e1829] [cursor=pointer]: Tahitian
          - generic [ref=e1831] [cursor=pointer]: Uyghur
          - generic [ref=e1833] [cursor=pointer]: Ukrainian
          - generic [ref=e1835] [cursor=pointer]: Urdu
          - generic [ref=e1837] [cursor=pointer]: Uzbek
          - generic [ref=e1839] [cursor=pointer]: Venda
          - generic [ref=e1841] [cursor=pointer]: Vietnamese
          - generic [ref=e1843] [cursor=pointer]: Volapük
          - generic [ref=e1845] [cursor=pointer]: Walloon
          - generic [ref=e1847] [cursor=pointer]: Wolof
          - generic [ref=e1849] [cursor=pointer]: Xhosa
          - generic [ref=e1851] [cursor=pointer]: Yiddish
          - generic [ref=e1853] [cursor=pointer]: Yoruba
          - generic [ref=e1855] [cursor=pointer]: Zhuang
          - generic [ref=e1857] [cursor=pointer]: Chinese
          - generic [ref=e1859] [cursor=pointer]: Zulu
          - generic [ref=e1861] [cursor=pointer]: Filipino
          - generic [ref=e1863] [cursor=pointer]: Mandarin Chinese
          - generic [ref=e1865] [cursor=pointer]: Yue Chinese
          - generic [ref=e1867] [cursor=pointer]: Najdi Arabic
          - generic [ref=e1869] [cursor=pointer]: Moroccan Arabic
          - generic [ref=e1871] [cursor=pointer]: Egyptian Arabic
          - generic [ref=e1873] [cursor=pointer]: Dari
          - generic [ref=e1875] [cursor=pointer]: Iranian Persian
          - generic [ref=e1877] [cursor=pointer]: Bhojpuri
          - generic [ref=e1879] [cursor=pointer]: Maithili
          - generic [ref=e1881] [cursor=pointer]: Fiji Hindi
          - generic [ref=e1883] [cursor=pointer]: Central Atlas Tamazight
          - generic [ref=e1885] [cursor=pointer]: Kabyle
          - generic [ref=e1887] [cursor=pointer]: Berber
          - generic [ref=e1889] [cursor=pointer]: Sardinian
          - generic [ref=e1891] [cursor=pointer]: Asturian
          - generic [ref=e1893] [cursor=pointer]: Ladino
          - generic [ref=e1895] [cursor=pointer]: Lombard
          - generic [ref=e1897] [cursor=pointer]: Neapolitan
          - generic [ref=e1899] [cursor=pointer]: Central Kurdish
          - generic [ref=e1901] [cursor=pointer]: Hindi
          - generic [ref=e1903] [cursor=pointer]: Bengali
          - generic [ref=e1905] [cursor=pointer]: Telugu
          - generic [ref=e1907] [cursor=pointer]: Marathi
          - generic [ref=e1909] [cursor=pointer]: Kannada
          - generic [ref=e1911] [cursor=pointer]: Tamil
          - generic [ref=e1913] [cursor=pointer]: Malayalam
          - generic [ref=e1915] [cursor=pointer]: Gujarati
          - generic [ref=e1917] [cursor=pointer]: Punjabi
          - generic [ref=e1919] [cursor=pointer]: Odia
          - generic [ref=e1921] [cursor=pointer]: Assamese
          - generic [ref=e1923] [cursor=pointer]: English
          - generic [ref=e1925] [cursor=pointer]: Urdu
          - generic [ref=e1927] [cursor=pointer]: Kashmiri
          - generic [ref=e1929] [cursor=pointer]: Nepali
          - generic [ref=e1931] [cursor=pointer]: Sindhi
          - generic [ref=e1933] [cursor=pointer]: Sanskrit
          - generic [ref=e1935] [cursor=pointer]: Maithili
          - generic [ref=e1937] [cursor=pointer]: Bhojpuri
          - generic [ref=e1939] [cursor=pointer]: Magahi
          - generic [ref=e1941] [cursor=pointer]: Chhattisgarhi
          - generic [ref=e1943] [cursor=pointer]: Rajasthani
          - generic [ref=e1945] [cursor=pointer]: Dogri
          - generic [ref=e1947] [cursor=pointer]: Konkani
          - generic [ref=e1949] [cursor=pointer]: Santali
          - generic [ref=e1951] [cursor=pointer]: Bodo
          - generic [ref=e1953] [cursor=pointer]: Manipuri
          - generic [ref=e1955] [cursor=pointer]: Garo
          - generic [ref=e1957] [cursor=pointer]: Marwari
          - generic [ref=e1959] [cursor=pointer]: Haryanvi
          - generic [ref=e1961] [cursor=pointer]: Awadhi
          - generic [ref=e1963] [cursor=pointer]: Braj
          - generic [ref=e1965] [cursor=pointer]: Garhwali
          - generic [ref=e1967] [cursor=pointer]: Lambadi
          - generic [ref=e1969] [cursor=pointer]: Bhili
          - generic [ref=e1971] [cursor=pointer]: Bagri
          - generic [ref=e1973] [cursor=pointer]: Kumaoni
          - generic [ref=e1975] [cursor=pointer]: Kangri
          - generic [ref=e1977] [cursor=pointer]: Bagheli
          - generic [ref=e1979] [cursor=pointer]: Nimadi
          - generic [ref=e1981] [cursor=pointer]: Rajbanshi
          - generic [ref=e1983] [cursor=pointer]: Marwari
          - generic [ref=e1985] [cursor=pointer]: Mewari
          - generic [ref=e1987] [cursor=pointer]: Wagdi
          - generic [ref=e1989] [cursor=pointer]: Hadoti
          - generic [ref=e1991] [cursor=pointer]: Goan Konkani
          - generic [ref=e1993] [cursor=pointer]: Ahirani
          - generic [ref=e1995] [cursor=pointer]: Surgujia
          - generic [ref=e1997] [cursor=pointer]: Kurukh
          - generic [ref=e1999] [cursor=pointer]: Mundari
          - generic [ref=e2001] [cursor=pointer]: Sambalpuri
          - generic [ref=e2003] [cursor=pointer]: Kutchi
          - generic [ref=e2005] [cursor=pointer]: Tulu
          - generic [ref=e2007] [cursor=pointer]: Kodava
          - generic [ref=e2009] [cursor=pointer]: Sadri
        - link "See the full list of languages supported by Shunya Labs →" [ref=e2011] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/get-started/supported-languages
      - contentinfo "Ready to build voice AI that actually speaks your customers' language?" [ref=e2012]:
        - generic [ref=e2013]:
          - generic [ref=e2014]: LET'S BUILD
          - heading "Ready to build voice AI that actually speaks your customers' language?" [level=2] [ref=e2015]:
            - generic [ref=e2016]: Ready to build voice AI that actually speaks
            - generic [ref=e2017]: your customers' language?
          - paragraph [ref=e2018]: From custom language models to enterprise deployment, let's find what works for your business.
          - link "Book a Demo" [ref=e2020] [cursor=pointer]:
            - /url: /contact
    - contentinfo [ref=e2021]:
      - generic [ref=e2022]:
        - generic [ref=e2023]:
          - img "Shunya Labs" [ref=e2024]
          - paragraph [ref=e2025]: Shunya Labs, Inc.
        - generic [ref=e2026]:
          - paragraph [ref=e2027]: Product
          - list [ref=e2028]:
            - listitem [ref=e2029]:
              - link "Overview" [ref=e2030] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e2031]:
              - link "Models" [ref=e2032] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e2033]:
              - link "Voice Agents" [ref=e2034] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e2035]:
              - link "Speech Intelligence" [ref=e2036] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e2037]:
              - link "Audio Processing" [ref=e2038] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e2039]:
              - link "Deployment" [ref=e2040] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e2041]:
          - paragraph [ref=e2042]: Models
          - list [ref=e2043]:
            - listitem [ref=e2044]:
              - link "Language Models" [ref=e2045] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e2046]:
              - link "Zero STT Indic" [ref=e2047] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e2048]:
              - link "Zero STT Codeswitch" [ref=e2049] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e2050]:
              - link "Specialised Models" [ref=e2051] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e2052]:
              - link "Zero STT Med" [ref=e2053] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e2054]:
              - link "On Device Models" [ref=e2055] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e2056]:
          - paragraph [ref=e2057]: Solutions
          - list [ref=e2058]:
            - listitem [ref=e2059]:
              - link "Contact Centers" [ref=e2060] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e2061]:
              - link "Media & Entertainment" [ref=e2062] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e2063]:
              - link "Healthcare" [ref=e2064] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e2065]:
          - paragraph [ref=e2066]: Resources
          - list [ref=e2067]:
            - listitem [ref=e2068]:
              - link "Blogs" [ref=e2069] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e2070]:
              - link "Benchmarks" [ref=e2071] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e2072]:
              - link "News & Media" [ref=e2073] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e2074]:
              - link "Patents" [ref=e2075] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e2076]:
              - link "Research" [ref=e2077] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e2079]:
          - link "Documentation" [ref=e2080] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e2082]:
          - listitem [ref=e2083]:
            - link "About us" [ref=e2084] [cursor=pointer]:
              - /url: /about
        - list [ref=e2086]:
          - listitem [ref=e2087]:
            - link "Pricing" [ref=e2088] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e2089]:
        - paragraph [ref=e2090]: Follow us on
        - generic [ref=e2091]:
          - link [ref=e2092] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e2093]
          - link [ref=e2095] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e2096]
          - link [ref=e2098] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e2099]
          - link [ref=e2101] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e2102]
      - generic [ref=e2104]:
        - paragraph [ref=e2105]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e2106]:
          - link "Privacy" [ref=e2107] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e2108] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e2109] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e2110] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e2111] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e2112]
```

# Test source

```ts
  274 |           const label = normalize(link.textContent);
  275 |           if (label && !columns[label]) {
  276 |             columns[label] = [label];
  277 |           }
  278 |         }
  279 |       }
  280 | 
  281 |       const followUs = Array.from(footer.querySelectorAll('p'))
  282 |         .map((el) => normalize(el.textContent))
  283 |         .find((text) => text.toLowerCase() === 'follow us on') || '';
  284 | 
  285 |       const copyright = Array.from(footer.querySelectorAll('p'))
  286 |         .map((el) => normalize(el.textContent))
  287 |         .find((text) => text.startsWith('©')) || '';
  288 | 
  289 |       return { columns, followUs, copyright };
  290 |     });
  291 |   }
  292 | 
  293 |   /**
  294 |    * Primary nav CTA — lands on the Contact Us page with the lead form.
  295 |    * Opens the drawer on small viewports first. Reloads once so Next.js App Router
  296 |    * navigation leaves inputs interactive (otherwise submit may never POST).
  297 |    */
  298 |   /** Custom SLMs carousel step labels (live homepage, 01–04). */
  299 |   static customSlmsCarouselSteps() {
  300 |     return [
  301 |       { step: '01 / 04', headingPattern: /Small, sharp/i },
  302 |       { step: '02 / 04', headingPattern: /Trained on what/i },
  303 |       { step: '03 / 04', headingPattern: /One layer in a/i },
  304 |       { step: '04 / 04', headingPattern: /Built to run/i },
  305 |     ];
  306 |   }
  307 | 
  308 |   async scrollToCustomSlmsSection() {
  309 |     const section = this.page.getByRole('heading', { name: /Custom Built/i }).first();
  310 |     await section.scrollIntoViewIfNeeded();
  311 |     await section.waitFor({ state: 'visible', timeout: pageReadyTimeout() });
  312 |   }
  313 | 
  314 |   async clickCustomSlmsCarouselStep(stepLabel) {
  315 |     const tab = this.page.getByText(stepLabel, { exact: false }).first();
  316 |     await tab.waitFor({ state: 'visible', timeout: pageReadyTimeout() });
  317 |     await tab.click();
  318 |     await this.page.waitForTimeout(600);
  319 |   }
  320 | 
  321 |   async getVisibleCustomSlmsHeadingTexts() {
  322 |     return this.page.evaluate(() => {
  323 |       const normalize = (s) => (s || '').replace(/\s+/g, ' ').trim();
  324 |       return Array.from(document.querySelectorAll('h2, h3'))
  325 |         .filter((el) => {
  326 |           const r = el.getBoundingClientRect();
  327 |           return r.width > 0 && r.height > 0 && r.top < window.innerHeight && r.bottom > 0;
  328 |         })
  329 |         .map((el) => normalize(el.textContent))
  330 |         .filter(Boolean);
  331 |     });
  332 |   }
  333 | 
  334 |   async collectNavAndFooterHrefs() {
  335 |     return this.page.evaluate(() => {
  336 |       const hrefs = new Set();
  337 |       document.querySelectorAll('nav a[href], footer a[href]').forEach((a) => {
  338 |         const h = a.getAttribute('href');
  339 |         if (h) hrefs.add(h);
  340 |       });
  341 |       return [...hrefs];
  342 |     });
  343 |   }
  344 | 
  345 |   async collectFooterHrefs() {
  346 |     return this.page.evaluate(() => {
  347 |       const hrefs = new Set();
  348 |       const footers = document.querySelectorAll('footer');
  349 |       const footer = footers[footers.length - 1];
  350 |       if (!footer) return [];
  351 |       footer.querySelectorAll('a[href]').forEach((a) => {
  352 |         const h = a.getAttribute('href');
  353 |         if (h) hrefs.add(h);
  354 |       });
  355 |       return [...hrefs];
  356 |     });
  357 |   }
  358 | 
  359 |   async getHomepageSectionHeadings() {
  360 |     return this.page.evaluate(() => {
  361 |       const normalize = (s) => (s || '').replace(/\s+/g, ' ').trim();
  362 |       return Array.from(document.querySelectorAll('h1, h2'))
  363 |         .map((el) => normalize(el.textContent))
  364 |         .filter(Boolean);
  365 |     });
  366 |   }
  367 | 
  368 |   async navigateToContactViaContactSalesLink({ timeout = pageReadyTimeout() } = {}) {
  369 |     const nav = this.page.locator('nav');
  370 |     const width = this.page.viewportSize()?.width ?? 1920;
  371 | 
  372 |     if (width <= 768) {
  373 |       const menuToggle = nav.getByRole('button', { name: '☰' });
> 374 |       await menuToggle.waitFor({ state: 'visible', timeout });
      |                        ^ TimeoutError: locator.waitFor: Timeout 45000ms exceeded.
  375 |       await menuToggle.click();
  376 |     }
  377 | 
  378 |     const link = nav.getByRole('link', { name: 'Contact Sales', exact: true }).first();
  379 |     await link.waitFor({ state: 'visible', timeout });
  380 |     await link.scrollIntoViewIfNeeded();
  381 |     await link.click();
  382 | 
  383 |     await this.page.waitForURL(/\/contact(?:\?|$)/, { timeout });
  384 |     await reloadAndWaitForSelector(this.page, 'input[name="name"]', timeout);
  385 |   }
  386 | }
  387 | 
```