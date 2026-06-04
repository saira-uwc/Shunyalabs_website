# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/homepage/homepage/design.spec.js >> Homepage - Homepage design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [layout] Section "Vāk" background: expected rgb(237, 237, 237) but got rgb(0, 0, 0)

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Section 11" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Section 12" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Section 13" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Custom BuiltFor Your Enterprise" expected at position 2 but found at position 3

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Small, sharp,specialised" expected at position 3 but found at position 4

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Tell Us Your Domain.We'll Build the Model." expected at position 4 but found at position 5

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Vāk" expected at position 5 but found at position 2

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Understand Everyone.Speak to Anyone." expected at position 6 but found at position 7

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Industry-Leading Standards for Enterprise Security" expected at position 7 but found at position 8

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "What Sets Us Apart" expected at position 8 but found at position 9

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Start Building with Shunya Labs." expected at position 9 but found at position 10

expect(received).toBeTruthy()

Received: null
```

```
Error: [layout] Section "Language Regions" expected at position 10 but found at position 11

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Page title: expected "Voice AI on Your Terms | Shunya Labs" but got "Voice AI Platform for developers & enterprises | Shunya Labs"

expect(received).toBeTruthy()

Received: null
```

```
Error: 14 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 14
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
        - paragraph [ref=e9]: Trusted by Nasscom, OTTO, Panasonic, OMG Pharma, and ZET.
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
    - generic [ref=e22]:
      - navigation [ref=e23]:
        - generic [ref=e24]:
          - link "Shunya Labs Logo" [ref=e26] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e27]
          - button "☰" [ref=e28] [cursor=pointer]
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
      - generic [ref=e29]:
        - generic [ref=e31]:
          - heading "Voice AI on your terms" [level=1] [ref=e32]
          - heading "Custom models to voice agents, complete voice AI stack." [level=2] [ref=e33]
          - paragraph [ref=e34]:
            - text: Built for developers.
            - generic [ref=e35]: Ready for enterprises.
        - main [ref=e39]:
          - generic [ref=e41]:
            - generic [ref=e45]:
              - button "Zero TTS Indic" [ref=e46] [cursor=pointer]
              - button "Zero STT Codeswitch" [ref=e47] [cursor=pointer]
              - button "Zero STT Indic" [ref=e48] [cursor=pointer]
              - button "Zero STT Med" [ref=e49] [cursor=pointer]
            - iframe [ref=e53]:
              - generic [active] [ref=f2e1]:
                - main [ref=f2e5]:
                  - generic [ref=f2e7]:
                    - generic [ref=f2e10]:
                      - generic [ref=f2e11]:
                        - generic [ref=f2e13]: Text Input
                        - generic [ref=f2e14]:
                          - textbox "Ready to hear it in action? Type or paste any text here to try it out.." [ref=f2e15]
                          - generic [ref=f2e16]: 0 / 1000
                      - generic [ref=f2e17]:
                        - generic [ref=f2e18]:
                          - generic [ref=f2e19]: Script
                          - button "🇺🇸English" [ref=f2e22] [cursor=pointer]:
                            - generic [ref=f2e23]: 🇺🇸English
                            - generic:
                              - img
                        - generic [ref=f2e24]:
                          - generic [ref=f2e25]: "Speed: 1x"
                          - slider [ref=f2e26] [cursor=pointer]: "1"
                          - generic [ref=f2e27]:
                            - generic [ref=f2e28]: 0.25x
                            - generic [ref=f2e29]: 4.0x
                        - generic [ref=f2e30]:
                          - generic [ref=f2e31]: Format
                          - combobox [ref=f2e32] [cursor=pointer]:
                            - option "MP3" [selected]
                            - option "PCM"
                            - option "WAV"
                            - option "OGG Opus"
                            - option "FLAC"
                            - option "mu-law"
                            - option "A-law"
                        - generic [ref=f2e33]:
                          - generic [ref=f2e34]: Expression Style
                          - combobox [ref=f2e35] [cursor=pointer]:
                            - option "Neutral" [selected]
                            - option "Happy"
                            - option "Sad"
                            - option "Angry"
                            - option "Fearful"
                            - option "Surprised"
                            - option "Disgust"
                            - option "News"
                            - option "Conversational"
                            - option "Narrative"
                            - option "Enthusiastic"
                        - generic [ref=f2e36]:
                          - generic [ref=f2e37]: Trim Silence
                          - button [ref=f2e38] [cursor=pointer]
                    - generic [ref=f2e41]:
                      - generic [ref=f2e42]:
                        - generic [ref=f2e43]:
                          - generic [ref=f2e44]: Select Voice
                          - generic [ref=f2e45]: 46 Speakers
                        - generic [ref=f2e46]:
                          - 'button "Bimal Native: Assamese Speaks all languages · Assamese accent" [ref=f2e47] [cursor=pointer]':
                            - generic [ref=f2e48]:
                              - img [ref=f2e50]
                              - generic [ref=f2e53]: Bimal
                            - generic [ref=f2e54]:
                              - generic [ref=f2e55]: "Native: Assamese"
                              - generic [ref=f2e56]: Speaks all languages · Assamese accent
                          - 'button "Anjana Native: Assamese Speaks all languages · Assamese accent" [ref=f2e57] [cursor=pointer]':
                            - generic [ref=f2e58]:
                              - img [ref=f2e60]
                              - generic [ref=f2e63]: Anjana
                            - generic [ref=f2e64]:
                              - generic [ref=f2e65]: "Native: Assamese"
                              - generic [ref=f2e66]: Speaks all languages · Assamese accent
                          - 'button "Arjun Native: Bengali Speaks all languages · Bengali accent" [ref=f2e67] [cursor=pointer]':
                            - generic [ref=f2e68]:
                              - img [ref=f2e70]
                              - generic [ref=f2e73]: Arjun
                            - generic [ref=f2e74]:
                              - generic [ref=f2e75]: "Native: Bengali"
                              - generic [ref=f2e76]: Speaks all languages · Bengali accent
                          - 'button "Priyanka Native: Bengali Speaks all languages · Bengali accent" [ref=f2e77] [cursor=pointer]':
                            - generic [ref=f2e78]:
                              - img [ref=f2e80]
                              - generic [ref=f2e83]: Priyanka
                            - generic [ref=f2e84]:
                              - generic [ref=f2e85]: "Native: Bengali"
                              - generic [ref=f2e86]: Speaks all languages · Bengali accent
                          - 'button "Daimalu Native: Bodo Speaks all languages · Bodo accent" [ref=f2e87] [cursor=pointer]':
                            - generic [ref=f2e88]:
                              - img [ref=f2e90]
                              - generic [ref=f2e93]: Daimalu
                            - generic [ref=f2e94]:
                              - generic [ref=f2e95]: "Native: Bodo"
                              - generic [ref=f2e96]: Speaks all languages · Bodo accent
                          - 'button "Hasina Native: Bodo Speaks all languages · Bodo accent" [ref=f2e97] [cursor=pointer]':
                            - generic [ref=f2e98]:
                              - img [ref=f2e100]
                              - generic [ref=f2e103]: Hasina
                            - generic [ref=f2e104]:
                              - generic [ref=f2e105]: "Native: Bodo"
                              - generic [ref=f2e106]: Speaks all languages · Bodo accent
                          - 'button "Vishal Native: Dogri Speaks all languages · Dogri accent" [ref=f2e107] [cursor=pointer]':
                            - generic [ref=f2e108]:
                              - img [ref=f2e110]
                              - generic [ref=f2e113]: Vishal
                            - generic [ref=f2e114]:
                              - generic [ref=f2e115]: "Native: Dogri"
                              - generic [ref=f2e116]: Speaks all languages · Dogri accent
                          - 'button "Neelam Native: Dogri Speaks all languages · Dogri accent" [ref=f2e117] [cursor=pointer]':
                            - generic [ref=f2e118]:
                              - img [ref=f2e120]
                              - generic [ref=f2e123]: Neelam
                            - generic [ref=f2e124]:
                              - generic [ref=f2e125]: "Native: Dogri"
                              - generic [ref=f2e126]: Speaks all languages · Dogri accent
                          - 'button "Varun Native: English Speaks all languages · English accent" [ref=f2e127] [cursor=pointer]':
                            - generic [ref=f2e128]:
                              - img [ref=f2e130]
                              - generic [ref=f2e133]: Varun
                            - generic [ref=f2e134]:
                              - generic [ref=f2e135]: "Native: English"
                              - generic [ref=f2e136]: Speaks all languages · English accent
                          - 'button "Nisha Native: English Speaks all languages · English accent" [ref=f2e137] [cursor=pointer]':
                            - generic [ref=f2e138]:
                              - img [ref=f2e140]
                              - generic [ref=f2e143]: Nisha
                            - generic [ref=f2e144]:
                              - generic [ref=f2e145]: "Native: English"
                              - generic [ref=f2e146]: Speaks all languages · English accent
                          - 'button "Rakesh Native: Gujarati Speaks all languages · Gujarati accent" [ref=f2e147] [cursor=pointer]':
                            - generic [ref=f2e148]:
                              - img [ref=f2e150]
                              - generic [ref=f2e153]: Rakesh
                            - generic [ref=f2e154]:
                              - generic [ref=f2e155]: "Native: Gujarati"
                              - generic [ref=f2e156]: Speaks all languages · Gujarati accent
                          - 'button "Pooja Native: Gujarati Speaks all languages · Gujarati accent" [ref=f2e157] [cursor=pointer]':
                            - generic [ref=f2e158]:
                              - img [ref=f2e160]
                              - generic [ref=f2e163]: Pooja
                            - generic [ref=f2e164]:
                              - generic [ref=f2e165]: "Native: Gujarati"
                              - generic [ref=f2e166]: Speaks all languages · Gujarati accent
                          - 'button "Rajesh Native: Hindi Speaks all languages · Hindi accent" [ref=f2e167] [cursor=pointer]':
                            - generic [ref=f2e168]:
                              - img [ref=f2e170]
                              - generic [ref=f2e173]: Rajesh
                            - generic [ref=f2e174]:
                              - generic [ref=f2e175]: "Native: Hindi"
                              - generic [ref=f2e176]: Speaks all languages · Hindi accent
                          - 'button "Sunita Native: Hindi Speaks all languages · Hindi accent" [ref=f2e177] [cursor=pointer]':
                            - generic [ref=f2e178]:
                              - img [ref=f2e180]
                              - generic [ref=f2e183]: Sunita
                            - generic [ref=f2e184]:
                              - generic [ref=f2e185]: "Native: Hindi"
                              - generic [ref=f2e186]: Speaks all languages · Hindi accent
                          - 'button "Kiran Native: Kannada Speaks all languages · Kannada accent" [ref=f2e187] [cursor=pointer]':
                            - generic [ref=f2e188]:
                              - img [ref=f2e190]
                              - generic [ref=f2e193]: Kiran
                            - generic [ref=f2e194]:
                              - generic [ref=f2e195]: "Native: Kannada"
                              - generic [ref=f2e196]: Speaks all languages · Kannada accent
                          - 'button "Shreya Native: Kannada Speaks all languages · Kannada accent" [ref=f2e197] [cursor=pointer]':
                            - generic [ref=f2e198]:
                              - img [ref=f2e200]
                              - generic [ref=f2e203]: Shreya
                            - generic [ref=f2e204]:
                              - generic [ref=f2e205]: "Native: Kannada"
                              - generic [ref=f2e206]: Speaks all languages · Kannada accent
                          - 'button "Farooq Native: Kashmiri Speaks all languages · Kashmiri accent" [ref=f2e207] [cursor=pointer]':
                            - generic [ref=f2e208]:
                              - img [ref=f2e210]
                              - generic [ref=f2e213]: Farooq
                            - generic [ref=f2e214]:
                              - generic [ref=f2e215]: "Native: Kashmiri"
                              - generic [ref=f2e216]: Speaks all languages · Kashmiri accent
                          - 'button "Habba Native: Kashmiri Speaks all languages · Kashmiri accent" [ref=f2e217] [cursor=pointer]':
                            - generic [ref=f2e218]:
                              - img [ref=f2e220]
                              - generic [ref=f2e223]: Habba
                            - generic [ref=f2e224]:
                              - generic [ref=f2e225]: "Native: Kashmiri"
                              - generic [ref=f2e226]: Speaks all languages · Kashmiri accent
                          - 'button "Mohan Native: Konkani Speaks all languages · Konkani accent" [ref=f2e227] [cursor=pointer]':
                            - generic [ref=f2e228]:
                              - img [ref=f2e230]
                              - generic [ref=f2e233]: Mohan
                            - generic [ref=f2e234]:
                              - generic [ref=f2e235]: "Native: Konkani"
                              - generic [ref=f2e236]: Speaks all languages · Konkani accent
                          - 'button "Sarita Native: Konkani Speaks all languages · Konkani accent" [ref=f2e237] [cursor=pointer]':
                            - generic [ref=f2e238]:
                              - img [ref=f2e240]
                              - generic [ref=f2e243]: Sarita
                            - generic [ref=f2e244]:
                              - generic [ref=f2e245]: "Native: Konkani"
                              - generic [ref=f2e246]: Speaks all languages · Konkani accent
                          - 'button "Suresh Native: Maithili Speaks all languages · Maithili accent" [ref=f2e247] [cursor=pointer]':
                            - generic [ref=f2e248]:
                              - img [ref=f2e250]
                              - generic [ref=f2e253]: Suresh
                            - generic [ref=f2e254]:
                              - generic [ref=f2e255]: "Native: Maithili"
                              - generic [ref=f2e256]: Speaks all languages · Maithili accent
                          - 'button "Meera Native: Maithili Speaks all languages · Maithili accent" [ref=f2e257] [cursor=pointer]':
                            - generic [ref=f2e258]:
                              - img [ref=f2e260]
                              - generic [ref=f2e263]: Meera
                            - generic [ref=f2e264]:
                              - generic [ref=f2e265]: "Native: Maithili"
                              - generic [ref=f2e266]: Speaks all languages · Maithili accent
                          - 'button "Krishnan Native: Malayalam Speaks all languages · Malayalam accent" [ref=f2e267] [cursor=pointer]':
                            - generic [ref=f2e268]:
                              - img [ref=f2e270]
                              - generic [ref=f2e273]: Krishnan
                            - generic [ref=f2e274]:
                              - generic [ref=f2e275]: "Native: Malayalam"
                              - generic [ref=f2e276]: Speaks all languages · Malayalam accent
                          - 'button "Deepa Native: Malayalam Speaks all languages · Malayalam accent" [ref=f2e277] [cursor=pointer]':
                            - generic [ref=f2e278]:
                              - img [ref=f2e280]
                              - generic [ref=f2e283]: Deepa
                            - generic [ref=f2e284]:
                              - generic [ref=f2e285]: "Native: Malayalam"
                              - generic [ref=f2e286]: Speaks all languages · Malayalam accent
                          - 'button "Tomba Native: Manipuri Speaks all languages · Manipuri accent" [ref=f2e287] [cursor=pointer]':
                            - generic [ref=f2e288]:
                              - img [ref=f2e290]
                              - generic [ref=f2e293]: Tomba
                            - generic [ref=f2e294]:
                              - generic [ref=f2e295]: "Native: Manipuri"
                              - generic [ref=f2e296]: Speaks all languages · Manipuri accent
                          - 'button "Ibemhal Native: Manipuri Speaks all languages · Manipuri accent" [ref=f2e297] [cursor=pointer]':
                            - generic [ref=f2e298]:
                              - img [ref=f2e300]
                              - generic [ref=f2e303]: Ibemhal
                            - generic [ref=f2e304]:
                              - generic [ref=f2e305]: "Native: Manipuri"
                              - generic [ref=f2e306]: Speaks all languages · Manipuri accent
                          - 'button "Siddharth Native: Marathi Speaks all languages · Marathi accent" [ref=f2e307] [cursor=pointer]':
                            - generic [ref=f2e308]:
                              - img [ref=f2e310]
                              - generic [ref=f2e313]: Siddharth
                            - generic [ref=f2e314]:
                              - generic [ref=f2e315]: "Native: Marathi"
                              - generic [ref=f2e316]: Speaks all languages · Marathi accent
                          - 'button "Ananya Native: Marathi Speaks all languages · Marathi accent" [ref=f2e317] [cursor=pointer]':
                            - generic [ref=f2e318]:
                              - img [ref=f2e320]
                              - generic [ref=f2e323]: Ananya
                            - generic [ref=f2e324]:
                              - generic [ref=f2e325]: "Native: Marathi"
                              - generic [ref=f2e326]: Speaks all languages · Marathi accent
                          - 'button "Bikash Native: Nepali Speaks all languages · Nepali accent" [ref=f2e327] [cursor=pointer]':
                            - generic [ref=f2e328]:
                              - img [ref=f2e330]
                              - generic [ref=f2e333]: Bikash
                            - generic [ref=f2e334]:
                              - generic [ref=f2e335]: "Native: Nepali"
                              - generic [ref=f2e336]: Speaks all languages · Nepali accent
                          - 'button "Sapana Native: Nepali Speaks all languages · Nepali accent" [ref=f2e337] [cursor=pointer]':
                            - generic [ref=f2e338]:
                              - img [ref=f2e340]
                              - generic [ref=f2e343]: Sapana
                            - generic [ref=f2e344]:
                              - generic [ref=f2e345]: "Native: Nepali"
                              - generic [ref=f2e346]: Speaks all languages · Nepali accent
                          - 'button "Bijay Native: Odia Speaks all languages · Odia accent" [ref=f2e347] [cursor=pointer]':
                            - generic [ref=f2e348]:
                              - img [ref=f2e350]
                              - generic [ref=f2e353]: Bijay
                            - generic [ref=f2e354]:
                              - generic [ref=f2e355]: "Native: Odia"
                              - generic [ref=f2e356]: Speaks all languages · Odia accent
                          - 'button "Sujata Native: Odia Speaks all languages · Odia accent" [ref=f2e357] [cursor=pointer]':
                            - generic [ref=f2e358]:
                              - img [ref=f2e360]
                              - generic [ref=f2e363]: Sujata
                            - generic [ref=f2e364]:
                              - generic [ref=f2e365]: "Native: Odia"
                              - generic [ref=f2e366]: Speaks all languages · Odia accent
                          - 'button "Gurpreet Native: Punjabi Speaks all languages · Punjabi accent" [ref=f2e367] [cursor=pointer]':
                            - generic [ref=f2e368]:
                              - img [ref=f2e370]
                              - generic [ref=f2e373]: Gurpreet
                            - generic [ref=f2e374]:
                              - generic [ref=f2e375]: "Native: Punjabi"
                              - generic [ref=f2e376]: Speaks all languages · Punjabi accent
                          - 'button "Simran Native: Punjabi Speaks all languages · Punjabi accent" [ref=f2e377] [cursor=pointer]':
                            - generic [ref=f2e378]:
                              - img [ref=f2e380]
                              - generic [ref=f2e383]: Simran
                            - generic [ref=f2e384]:
                              - generic [ref=f2e385]: "Native: Punjabi"
                              - generic [ref=f2e386]: Speaks all languages · Punjabi accent
                          - 'button "Vedant Native: Sanskrit Speaks all languages · Sanskrit accent" [ref=f2e387] [cursor=pointer]':
                            - generic [ref=f2e388]:
                              - img [ref=f2e390]
                              - generic [ref=f2e393]: Vedant
                            - generic [ref=f2e394]:
                              - generic [ref=f2e395]: "Native: Sanskrit"
                              - generic [ref=f2e396]: Speaks all languages · Sanskrit accent
                          - 'button "Gayatri Native: Sanskrit Speaks all languages · Sanskrit accent" [ref=f2e397] [cursor=pointer]':
                            - generic [ref=f2e398]:
                              - img [ref=f2e400]
                              - generic [ref=f2e403]: Gayatri
                            - generic [ref=f2e404]:
                              - generic [ref=f2e405]: "Native: Sanskrit"
                              - generic [ref=f2e406]: Speaks all languages · Sanskrit accent
                          - 'button "Chandu Native: Santali Speaks all languages · Santali accent" [ref=f2e407] [cursor=pointer]':
                            - generic [ref=f2e408]:
                              - img [ref=f2e410]
                              - generic [ref=f2e413]: Chandu
                            - generic [ref=f2e414]:
                              - generic [ref=f2e415]: "Native: Santali"
                              - generic [ref=f2e416]: Speaks all languages · Santali accent
                          - 'button "Roshni Native: Santali Speaks all languages · Santali accent" [ref=f2e417] [cursor=pointer]':
                            - generic [ref=f2e418]:
                              - img [ref=f2e420]
                              - generic [ref=f2e423]: Roshni
                            - generic [ref=f2e424]:
                              - generic [ref=f2e425]: "Native: Santali"
                              - generic [ref=f2e426]: Speaks all languages · Santali accent
                          - 'button "Amjad Native: Sindhi Speaks all languages · Sindhi accent" [ref=f2e427] [cursor=pointer]':
                            - generic [ref=f2e428]:
                              - img [ref=f2e430]
                              - generic [ref=f2e433]: Amjad
                            - generic [ref=f2e434]:
                              - generic [ref=f2e435]: "Native: Sindhi"
                              - generic [ref=f2e436]: Speaks all languages · Sindhi accent
                          - 'button "Kavita Native: Sindhi Speaks all languages · Sindhi accent" [ref=f2e437] [cursor=pointer]':
                            - generic [ref=f2e438]:
                              - img [ref=f2e440]
                              - generic [ref=f2e443]: Kavita
                            - generic [ref=f2e444]:
                              - generic [ref=f2e445]: "Native: Sindhi"
                              - generic [ref=f2e446]: Speaks all languages · Sindhi accent
                          - 'button "Murugan Native: Tamil Speaks all languages · Tamil accent" [ref=f2e447] [cursor=pointer]':
                            - generic [ref=f2e448]:
                              - img [ref=f2e450]
                              - generic [ref=f2e453]: Murugan
                            - generic [ref=f2e454]:
                              - generic [ref=f2e455]: "Native: Tamil"
                              - generic [ref=f2e456]: Speaks all languages · Tamil accent
                          - 'button "Thangam Native: Tamil Speaks all languages · Tamil accent" [ref=f2e457] [cursor=pointer]':
                            - generic [ref=f2e458]:
                              - img [ref=f2e460]
                              - generic [ref=f2e463]: Thangam
                            - generic [ref=f2e464]:
                              - generic [ref=f2e465]: "Native: Tamil"
                              - generic [ref=f2e466]: Speaks all languages · Tamil accent
                          - 'button "Vishnu Native: Telugu Speaks all languages · Telugu accent" [ref=f2e467] [cursor=pointer]':
                            - generic [ref=f2e468]:
                              - img [ref=f2e470]
                              - generic [ref=f2e473]: Vishnu
                            - generic [ref=f2e474]:
                              - generic [ref=f2e475]: "Native: Telugu"
                              - generic [ref=f2e476]: Speaks all languages · Telugu accent
                          - 'button "Lakshmi Native: Telugu Speaks all languages · Telugu accent" [ref=f2e477] [cursor=pointer]':
                            - generic [ref=f2e478]:
                              - img [ref=f2e480]
                              - generic [ref=f2e483]: Lakshmi
                            - generic [ref=f2e484]:
                              - generic [ref=f2e485]: "Native: Telugu"
                              - generic [ref=f2e486]: Speaks all languages · Telugu accent
                          - 'button "Salman Native: Urdu Speaks all languages · Urdu accent" [ref=f2e487] [cursor=pointer]':
                            - generic [ref=f2e488]:
                              - img [ref=f2e490]
                              - generic [ref=f2e493]: Salman
                            - generic [ref=f2e494]:
                              - generic [ref=f2e495]: "Native: Urdu"
                              - generic [ref=f2e496]: Speaks all languages · Urdu accent
                          - 'button "Fatima Native: Urdu Speaks all languages · Urdu accent" [ref=f2e497] [cursor=pointer]':
                            - generic [ref=f2e498]:
                              - img [ref=f2e500]
                              - generic [ref=f2e503]: Fatima
                            - generic [ref=f2e504]:
                              - generic [ref=f2e505]: "Native: Urdu"
                              - generic [ref=f2e506]: Speaks all languages · Urdu accent
                      - button "Generate Speech" [disabled] [ref=f2e507]
                - alert [ref=f2e508]
      - generic [ref=e55]:
        - generic [ref=e58]: Trusted by
        - generic [ref=e61]:
          - generic [ref=e62]:
            - img "Nasscom" [ref=e65]
            - img "OTTO" [ref=e68]
            - img "Panasonic" [ref=e71]
            - img "OMG Pharma" [ref=e74]
            - img "ZET" [ref=e77]
          - generic [ref=e78]:
            - img [ref=e81]
            - img [ref=e84]
            - img [ref=e87]
            - img [ref=e90]
            - img [ref=e93]
          - generic [ref=e94]:
            - img [ref=e97]
            - img [ref=e100]
            - img [ref=e103]
            - img [ref=e106]
            - img [ref=e109]
          - generic [ref=e110]:
            - img [ref=e113]
            - img [ref=e116]
            - img [ref=e119]
            - img [ref=e122]
            - img [ref=e125]
      - generic [ref=e128]:
        - generic [ref=e130]:
          - generic [ref=e131]: Custom SLMs
          - heading "Custom Built For Your Enterprise" [level=2] [ref=e132]:
            - text: Custom Built
            - text: For Your Enterprise
          - paragraph [ref=e133]: Off-the-shelf LLMs were trained on everything. They hallucinate, they cost a fortune to scale, and they don't know your domain. We build small language models trained on your data, deployed on your hardware. Yours to own.
        - generic [ref=e135]:
          - text: + + + + + + + + + + + + + + + +
          - generic [ref=e136]:
            - generic [ref=e137]:
              - generic [ref=e139]:
                - generic [ref=e140]: Shunya Labs
                - generic [ref=e141]: 01 / 04
              - generic [ref=e209]:
                - generic [ref=e210]: 01 / 04
                - heading "Small, sharp, specialised" [level=3] [ref=e211]:
                  - text: Small, sharp,
                  - text: specialised
                - paragraph [ref=e212]: A 70B-parameter generalist will tell you everything it knows about everything. Our SLM tells you exactly what matters in your domain, and runs 16× more concurrent users on the same GPU. Smaller doesn't mean weaker. It means precise.
                - list [ref=e213]:
                  - listitem [ref=e214]: + Small custom models · built for your enterprise
                  - listitem [ref=e215]: + 240+ concurrent users on a single L4 GPU
                  - listitem [ref=e216]: + Runs on CPU, edge, or your own GPU fleet
                  - listitem [ref=e217]: + Sub-100ms end-to-end latency
            - generic [ref=e218]:
              - generic [ref=e220]:
                - generic [ref=e221]: Shunya Labs
                - generic [ref=e222]: 02 / 04
                - generic [ref=e224]:
                  - generic [ref=e225]:
                    - generic [ref=e226]: "01"
                    - generic [ref=e227]:
                      - generic [ref=e228]: Audio corpus intake
                      - generic [ref=e229]: Your recordings · labelled transcripts · domain vocabulary
                      - generic [ref=e230]: Structured + cleaned
                  - generic [ref=e231]:
                    - generic [ref=e232]: "02"
                    - generic [ref=e233]:
                      - generic [ref=e234]: Custom train, not fine-tune
                      - generic [ref=e235]: Built ground-up on Zero base · 40 GPU-hours to production
                      - generic [ref=e236]: 250× faster than industry
                  - generic [ref=e237]:
                    - generic [ref=e238]: "03"
                    - generic [ref=e239]:
                      - generic [ref=e240]: Evaluate against your ground truth
                      - generic [ref=e241]: Domain accuracy · latency · edge-case coverage
                      - generic [ref=e242]: Iterated on your benchmarks
                  - generic [ref=e243]:
                    - generic [ref=e244]: "04"
                    - generic [ref=e245]:
                      - generic [ref=e246]: "Model delivered: weights + artifacts"
                      - generic [ref=e247]: Yours to deploy anywhere · 72-hour deployment · you own it
                      - generic [ref=e248]: Full ownership
              - generic [ref=e249]:
                - generic [ref=e250]: 02 / 04
                - heading "Trained on what makes you different" [level=3] [ref=e251]:
                  - text: Trained on what
                  - text: makes you different
                - paragraph [ref=e252]: "We start with your corpus: recordings, transcripts, ticket history, whatever defines how your business actually speaks. Then we train a custom model from the ground up on Zero, our proprietary base. This isn't a thin LoRA on someone else's foundation. 40 GPU-hours to a production model. 250× faster than industry. Fully air-gapped."
                - list [ref=e253]:
                  - listitem [ref=e254]: "+ Intake: structured and cleaned domain corpus"
                  - listitem [ref=e255]: "+ Train: custom model on Zero base, not fine-tuning"
                  - listitem [ref=e256]: "+ Evaluate: tested against your ground truth and edge cases"
                  - listitem [ref=e257]: "+ Deliver: weights + artifacts you own outright"
            - generic [ref=e258]:
              - generic [ref=e260]:
                - generic [ref=e261]: Shunya Labs
                - generic [ref=e262]: 03 / 04
                - generic [ref=e265]:
                  - generic [ref=e266]:
                    - generic [ref=e267]: Channel
                    - generic [ref=e268]: Voice · Text · API
                  - generic [ref=e270]:
                    - generic [ref=e271]: ASR
                    - generic [ref=e272]: 22 proprietary models
                  - generic [ref=e274]:
                    - generic [ref=e275]: SLM (custom)
                    - generic [ref=e276]: Your Small custom models
                    - generic [ref=e277]: Built on Zero base · trained on your data
                  - generic [ref=e279]:
                    - generic [ref=e280]: TTS
                    - generic [ref=e281]: 4 engines · 200+ languages
                  - generic [ref=e283]:
                    - generic [ref=e284]: Deploy
                    - generic [ref=e285]: Cloud · On-prem · Edge
              - generic [ref=e286]:
                - generic [ref=e287]: 03 / 04
                - heading "One layer in a complete stack" [level=3] [ref=e288]:
                  - text: One layer in a
                  - text: complete stack
                - paragraph [ref=e289]: SLMs are the reasoning core. Pair them with our 22 proprietary ASR models and 4 TTS engines for full-stack voice agents. Plug them into your existing orchestration for text. STGAT replaces RAG when context gets complex. Relationships and time, no degradation past 10,000 nodes.
                - list [ref=e290]:
                  - listitem [ref=e291]: + ASR → SLM → TTS for real-time voice
                  - listitem [ref=e292]: + 22 proprietary ASR models · 4 TTS engines
                  - listitem [ref=e293]: + STGAT context retrieval, built for 10,000+ nodes
                  - listitem [ref=e294]: + 200+ languages, 32+ Indic, single-model code-switching
            - generic [ref=e295]:
              - generic [ref=e297]:
                - generic [ref=e298]: Shunya Labs
                - generic [ref=e299]: 04 / 04
                - generic [ref=e301]:
                  - generic [ref=e302]:
                    - img [ref=e304]
                    - generic [ref=e306]:
                      - generic [ref=e307]: Sub-100ms latency
                      - generic [ref=e308]: End-to-end, under real load
                  - generic [ref=e309]:
                    - img [ref=e311]
                    - generic [ref=e313]:
                      - generic [ref=e314]: ~20× lower cost
                      - generic [ref=e315]: Inference cost vs generic LLMs
                  - generic [ref=e316]:
                    - img [ref=e318]
                    - generic [ref=e323]:
                      - generic [ref=e324]: 72-hour deployment
                      - generic [ref=e325]: From training to production
                  - generic [ref=e326]:
                    - img [ref=e328]
                    - generic [ref=e331]:
                      - generic [ref=e332]: Deploy anywhere
                      - generic [ref=e333]: Cloud · on-prem · edge · air-gapped
                  - generic [ref=e334]: No throttling · No vendor lock-in · No surprise pricing
              - generic [ref=e335]:
                - generic [ref=e336]: 04 / 04
                - heading "Built to run, not to demo" [level=3] [ref=e337]:
                  - text: Built to run,
                  - text: not to demo
                - paragraph [ref=e338]: "We don't sell wrappers. We ship production systems. Custom SLMs are designed for the constraints production actually has: latency budgets, cost ceilings, sovereignty requirements, edge deployments. No throttling. No vendor lock-in. No surprise pricing."
                - list [ref=e339]:
                  - listitem [ref=e340]: + Sub-100ms end-to-end latency
                  - listitem [ref=e341]: + ~20× lower inference cost vs generic LLMs
                  - listitem [ref=e342]: + 72-hour deployment to production
                  - listitem [ref=e343]: + Cloud, on-prem, edge, or air-gapped
        - generic [ref=e345]:
          - generic [ref=e346]: Get started
          - heading "Tell Us Your Domain. We'll Build the Model." [level=2] [ref=e347]:
            - text: Tell Us Your Domain.
            - text: We'll Build the Model.
          - paragraph [ref=e348]: "Every project starts with a conversation. Your data, your latency budget, what production looks like. From there: 40 GPU-hours of training, 72-hour deployment, full ownership of the model."
          - generic [ref=e349]:
            - link "Start a project" [ref=e350] [cursor=pointer]:
              - /url: https://console.shunyalabs.ai/dashboard
            - link "Read the technical brief" [ref=e351] [cursor=pointer]:
              - /url: https://docs.shunyalabs.ai/overview
      - generic [ref=e352]:
        - img
        - generic [ref=e353]:
          - generic [ref=e354]:
            - generic [ref=e357]: Real-Time Translation
            - heading "Vāk" [level=2] [ref=e359]
            - paragraph [ref=e360]: Real-Time Translation in 55 Indic Languages
          - generic [ref=e362]:
            - status "Loading Vāk demo" [ref=e363]
            - iframe [ref=e370]:
              
      - generic [ref=e372]:
        - generic [ref=e373]:
          - generic [ref=e374]:
            - generic [ref=e377]: Reach
            - heading "Understand Everyone. Speak to Anyone." [level=2] [ref=e378]:
              - text: Understand Everyone.
              - text: Speak to Anyone.
          - paragraph [ref=e380]: We solve the fundamental problems that make voice AI expensive, slow, and insecure.
        - generic [ref=e381]:
          - generic [ref=e382]:
            - generic [ref=e383]: "0"
            - generic [ref=e384]: Languages supported
          - generic [ref=e385]:
            - generic [ref=e386]: 0M+
            - generic [ref=e387]: Minimum native speakers
          - generic [ref=e388]:
            - generic [ref=e389]: 0%
            - generic [ref=e390]: Global population coverage
      - generic [ref=e391]:
        - img
        - generic [ref=e392]:
          - generic [ref=e395]: Security
          - heading "Industry-Leading Standards for Enterprise Security" [level=2] [ref=e396]
          - generic [ref=e397]:
            - generic [ref=e398]:
              - generic [ref=e399]:
                - img "SOC 2 Type II"
              - generic [ref=e400]:
                - heading "SOC 2 Type II" [level=3] [ref=e401]
                - paragraph [ref=e402]: Trusted where privacy matters most. SOC 2 Type II- certified.
            - generic [ref=e403]:
              - generic [ref=e404]:
                - img "ISO 27001"
              - generic [ref=e405]:
                - heading "ISO 27001" [level=3] [ref=e406]
                - paragraph [ref=e407]: Privacy and compliance build in with our ISO/IEC 27001:2022 accreditation.
            - generic [ref=e408]:
              - generic [ref=e409]:
                - img "HIPAA"
              - generic [ref=e410]:
                - heading "HIPAA" [level=3] [ref=e411]
                - paragraph [ref=e412]: Fully compliant with the health insurance portability and accountability act.
            - generic [ref=e413]:
              - generic [ref=e414]:
                - img "Two-Sided Encryption"
              - generic [ref=e415]:
                - heading "Two-Sided Encryption" [level=3] [ref=e416]
                - paragraph [ref=e417]: Data is encrypted in transit and at rest-TLS for every connection, AES-256 for storage, with keys managed in your cloud.
      - generic [ref=e419]:
        - generic [ref=e420]:
          - generic [ref=e421]: About us
          - heading "What Sets Us Apart" [level=2] [ref=e423]
          - paragraph [ref=e424]:
            - text: Foundation models fine-tuned for your domain.
            - text: State-of-the-art accuracy at a fraction of the compute.
        - generic [ref=e425]:
          - article [ref=e426] [cursor=pointer]:
            - generic:
              - img
            - generic [ref=e427]: Proprietary
            - generic [ref=e428]:
              - heading "First-principles research" [level=3] [ref=e429]:
                - text: First-principles
                - text: research
              - paragraph [ref=e430]: Proprietary training methodology, model architecture, and training data to improve baseline accuracy.
          - article [ref=e431] [cursor=pointer]:
            - generic:
              - img
            - generic [ref=e432]: Performance
            - generic [ref=e433]:
              - heading "CPU-first architecture" [level=3] [ref=e434]
              - paragraph [ref=e435]: Lightweight models designed to run on CPUs for maximum accessibility.
          - article [ref=e436] [cursor=pointer]:
            - generic:
              - img
            - generic [ref=e437]: Platform
            - generic [ref=e438]:
              - heading "Full stack orchestration" [level=3] [ref=e439]
              - paragraph [ref=e440]:
                - text: End-to-end platform for agent orchestration with
                - text: custom logic for enterprise workflows.
          - article [ref=e441] [cursor=pointer]:
            - generic:
              - img
            - generic [ref=e442]: Foundation
            - generic [ref=e443]:
              - heading "Foundation models" [level=3] [ref=e444]
              - paragraph [ref=e445]: We build foundation models for voice, including models that understand and produce codeswitched speech.
          - article [ref=e446] [cursor=pointer]:
            - generic:
              - img
            - generic [ref=e447]: Security
            - generic [ref=e448]:
              - heading "Privacy-first solutioning" [level=3] [ref=e449]
              - paragraph [ref=e450]: On-prem deployment and custom agent architectures for enterprise-grade security.
          - article [ref=e451] [cursor=pointer]:
            - generic:
              - img
            - generic [ref=e452]: Community
            - generic [ref=e453]:
              - heading "Open-source community" [level=3] [ref=e454]
              - paragraph [ref=e455]:
                - text: Commitment to open models for the community
                - text: on Hugging Face.
      - generic [ref=e458]:
        - generic [ref=e459]:
          - generic [ref=e462]: Quickstart
          - heading "Start Building with Shunya Labs." [level=2] [ref=e463]
          - paragraph [ref=e464]: One SDK. Every model. Drop it into any stack - Python, Node, cURL - and ship voice in hours, not quarters.
          - generic [ref=e465]:
            - link "Get API Key" [ref=e466] [cursor=pointer]:
              - /url: /pricing
            - link "Read the docs" [ref=e467] [cursor=pointer]:
              - /url: https://docs.shunyalabs.ai/overview
            - link "Explore open models" [ref=e468] [cursor=pointer]:
              - /url: https://huggingface.co/shunyalabs
        - generic [ref=e469]:
          - generic [ref=e470]:
            - button "Python" [ref=e471] [cursor=pointer]
            - button "cURL" [ref=e472] [cursor=pointer]
            - button "Node.js" [ref=e473] [cursor=pointer]
            - button "⎘ Copy" [ref=e474] [cursor=pointer]
          - generic [ref=e476]:
            - generic [ref=e477]: "# pip install requests"
            - generic [ref=e478]: import os, requests
            - generic [ref=e479]: "with open(\"meeting.wav\", \"rb\") as f:"
            - generic [ref=e480]: r = requests.post(
            - generic [ref=e481]: "\"https://asr.shunyalabs.ai/v1/audio/transcriptions\","
            - generic [ref=e482]: "headers={\"Authorization\": f\"Bearer {os.environ['SHUNYALABS_API_KEY']}\"},"
            - generic [ref=e483]: "files={\"file\": f},"
            - generic [ref=e484]: "data={\"model\": \"zero-indic\", \"language_code\": \"en\"},"
            - generic [ref=e485]: )
            - generic [ref=e486]: r.raise_for_status()
            - generic [ref=e487]: print(r.json()["text"])
      - generic [ref=e488]:
        - generic [ref=e489]:
          - generic [ref=e490]: Global coverage
          - heading "Language Regions" [level=2] [ref=e492]
          - paragraph [ref=e493]: Explore our comprehensive language coverage across the globe.
        - generic [ref=e494]:
          - generic: Loading world map…
        - generic [ref=e497]:
          - generic [ref=e499] [cursor=pointer]: Afar
          - generic [ref=e501] [cursor=pointer]: Abkhaz
          - generic [ref=e503] [cursor=pointer]: Avestan
          - generic [ref=e505] [cursor=pointer]: Afrikaans
          - generic [ref=e507] [cursor=pointer]: Akan
          - generic [ref=e509] [cursor=pointer]: Amharic
          - generic [ref=e511] [cursor=pointer]: Aragonese
          - generic [ref=e513] [cursor=pointer]: Arabic
          - generic [ref=e515] [cursor=pointer]: Assamese
          - generic [ref=e517] [cursor=pointer]: Avaric
          - generic [ref=e519] [cursor=pointer]: Aymara
          - generic [ref=e521] [cursor=pointer]: Azerbaijani
          - generic [ref=e523] [cursor=pointer]: Bashkir
          - generic [ref=e525] [cursor=pointer]: Belarusian
          - generic [ref=e527] [cursor=pointer]: Bulgarian
          - generic [ref=e529] [cursor=pointer]: Bihari
          - generic [ref=e531] [cursor=pointer]: Bislama
          - generic [ref=e533] [cursor=pointer]: Bambara
          - generic [ref=e535] [cursor=pointer]: Bengali
          - generic [ref=e537] [cursor=pointer]: Tibetan
          - generic [ref=e539] [cursor=pointer]: Breton
          - generic [ref=e541] [cursor=pointer]: Bosnian
          - generic [ref=e543] [cursor=pointer]: Catalan
          - generic [ref=e545] [cursor=pointer]: Chechen
          - generic [ref=e547] [cursor=pointer]: Chamorro
          - generic [ref=e549] [cursor=pointer]: Corsican
          - generic [ref=e551] [cursor=pointer]: Cree
          - generic [ref=e553] [cursor=pointer]: Czech
          - generic [ref=e555] [cursor=pointer]: Old Church Slavonic
          - generic [ref=e557] [cursor=pointer]: Chuvash
          - generic [ref=e559] [cursor=pointer]: Welsh
          - generic [ref=e561] [cursor=pointer]: Danish
          - generic [ref=e563] [cursor=pointer]: German
          - generic [ref=e565] [cursor=pointer]: Divehi
          - generic [ref=e567] [cursor=pointer]: Dzongkha
          - generic [ref=e569] [cursor=pointer]: Ewe
          - generic [ref=e571] [cursor=pointer]: Greek
          - generic [ref=e573] [cursor=pointer]: English
          - generic [ref=e575] [cursor=pointer]: Esperanto
          - generic [ref=e577] [cursor=pointer]: Spanish
          - generic [ref=e579] [cursor=pointer]: Estonian
          - generic [ref=e581] [cursor=pointer]: Basque
          - generic [ref=e583] [cursor=pointer]: Persian
          - generic [ref=e585] [cursor=pointer]: Fula
          - generic [ref=e587] [cursor=pointer]: Finnish
          - generic [ref=e589] [cursor=pointer]: Fijian
          - generic [ref=e591] [cursor=pointer]: Faroese
          - generic [ref=e593] [cursor=pointer]: French
          - generic [ref=e595] [cursor=pointer]: Western Frisian
          - generic [ref=e597] [cursor=pointer]: Irish
          - generic [ref=e599] [cursor=pointer]: Scottish Gaelic
          - generic [ref=e601] [cursor=pointer]: Galician
          - generic [ref=e603] [cursor=pointer]: Guaraní
          - generic [ref=e605] [cursor=pointer]: Gujarati
          - generic [ref=e607] [cursor=pointer]: Manx
          - generic [ref=e609] [cursor=pointer]: Hausa
          - generic [ref=e611] [cursor=pointer]: Hebrew
          - generic [ref=e613] [cursor=pointer]: Hindi
          - generic [ref=e615] [cursor=pointer]: Hiri Motu
          - generic [ref=e617] [cursor=pointer]: Croatian
          - generic [ref=e619] [cursor=pointer]: Haitian
          - generic [ref=e621] [cursor=pointer]: Hungarian
          - generic [ref=e623] [cursor=pointer]: Armenian
          - generic [ref=e625] [cursor=pointer]: Herero
          - generic [ref=e627] [cursor=pointer]: Interlingua
          - generic [ref=e629] [cursor=pointer]: Indonesian
          - generic [ref=e631] [cursor=pointer]: Interlingue
          - generic [ref=e633] [cursor=pointer]: Igbo
          - generic [ref=e635] [cursor=pointer]: Nuosu
          - generic [ref=e637] [cursor=pointer]: Inupiaq
          - generic [ref=e639] [cursor=pointer]: Ido
          - generic [ref=e641] [cursor=pointer]: Icelandic
          - generic [ref=e643] [cursor=pointer]: Italian
          - generic [ref=e645] [cursor=pointer]: Inuktitut
          - generic [ref=e647] [cursor=pointer]: Japanese
          - generic [ref=e649] [cursor=pointer]: Javanese
          - generic [ref=e651] [cursor=pointer]: Georgian
          - generic [ref=e653] [cursor=pointer]: Kongo
          - generic [ref=e655] [cursor=pointer]: Kikuyu
          - generic [ref=e657] [cursor=pointer]: Kwanyama
          - generic [ref=e659] [cursor=pointer]: Kazakh
          - generic [ref=e661] [cursor=pointer]: Kalaallisut
          - generic [ref=e663] [cursor=pointer]: Khmer
          - generic [ref=e665] [cursor=pointer]: Kannada
          - generic [ref=e667] [cursor=pointer]: Korean
          - generic [ref=e669] [cursor=pointer]: Kanuri
          - generic [ref=e671] [cursor=pointer]: Kashmiri
          - generic [ref=e673] [cursor=pointer]: Kurdish
          - generic [ref=e675] [cursor=pointer]: Komi
          - generic [ref=e677] [cursor=pointer]: Cornish
          - generic [ref=e679] [cursor=pointer]: Kyrgyz
          - generic [ref=e681] [cursor=pointer]: Latin
          - generic [ref=e683] [cursor=pointer]: Luxembourgish
          - generic [ref=e685] [cursor=pointer]: Ganda
          - generic [ref=e687] [cursor=pointer]: Limburgish
          - generic [ref=e689] [cursor=pointer]: Lingala
          - generic [ref=e691] [cursor=pointer]: Lao
          - generic [ref=e693] [cursor=pointer]: Lithuanian
          - generic [ref=e695] [cursor=pointer]: Luba-Katanga
          - generic [ref=e697] [cursor=pointer]: Latvian
          - generic [ref=e699] [cursor=pointer]: Malagasy
          - generic [ref=e701] [cursor=pointer]: Marshallese
          - generic [ref=e703] [cursor=pointer]: Māori
          - generic [ref=e705] [cursor=pointer]: Macedonian
          - generic [ref=e707] [cursor=pointer]: Malayalam
          - generic [ref=e709] [cursor=pointer]: Mongolian
          - generic [ref=e711] [cursor=pointer]: Marathi
          - generic [ref=e713] [cursor=pointer]: Malay
          - generic [ref=e715] [cursor=pointer]: Maltese
          - generic [ref=e717] [cursor=pointer]: Burmese
          - generic [ref=e719] [cursor=pointer]: Nauru
          - generic [ref=e721] [cursor=pointer]: Norwegian Bokmål
          - generic [ref=e723] [cursor=pointer]: Northern Ndebele
          - generic [ref=e725] [cursor=pointer]: Nepali
          - generic [ref=e727] [cursor=pointer]: Ndonga
          - generic [ref=e729] [cursor=pointer]: Dutch
          - generic [ref=e731] [cursor=pointer]: Norwegian Nynorsk
          - generic [ref=e733] [cursor=pointer]: Norwegian
          - generic [ref=e735] [cursor=pointer]: Southern Ndebele
          - generic [ref=e737] [cursor=pointer]: Navajo
          - generic [ref=e739] [cursor=pointer]: Chichewa
          - generic [ref=e741] [cursor=pointer]: Occitan
          - generic [ref=e743] [cursor=pointer]: Ojibwe
          - generic [ref=e745] [cursor=pointer]: Oromo
          - generic [ref=e747] [cursor=pointer]: Odia
          - generic [ref=e749] [cursor=pointer]: Ossetian
          - generic [ref=e751] [cursor=pointer]: Punjabi
          - generic [ref=e753] [cursor=pointer]: Pāli
          - generic [ref=e755] [cursor=pointer]: Polish
          - generic [ref=e757] [cursor=pointer]: Pashto
          - generic [ref=e759] [cursor=pointer]: Portuguese
          - generic [ref=e761] [cursor=pointer]: Quechua
          - generic [ref=e763] [cursor=pointer]: Romansh
          - generic [ref=e765] [cursor=pointer]: Kirundi
          - generic [ref=e767] [cursor=pointer]: Romanian
          - generic [ref=e769] [cursor=pointer]: Russian
          - generic [ref=e771] [cursor=pointer]: Kinyarwanda
          - generic [ref=e773] [cursor=pointer]: Sanskrit
          - generic [ref=e775] [cursor=pointer]: Sardinian
          - generic [ref=e777] [cursor=pointer]: Sindhi
          - generic [ref=e779] [cursor=pointer]: Northern Sami
          - generic [ref=e781] [cursor=pointer]: Sango
          - generic [ref=e783] [cursor=pointer]: Sinhala
          - generic [ref=e785] [cursor=pointer]: Slovak
          - generic [ref=e787] [cursor=pointer]: Slovenian
          - generic [ref=e789] [cursor=pointer]: Samoan
          - generic [ref=e791] [cursor=pointer]: Shona
          - generic [ref=e793] [cursor=pointer]: Somali
          - generic [ref=e795] [cursor=pointer]: Albanian
          - generic [ref=e797] [cursor=pointer]: Serbian
          - generic [ref=e799] [cursor=pointer]: Swati
          - generic [ref=e801] [cursor=pointer]: Southern Sotho
          - generic [ref=e803] [cursor=pointer]: Sundanese
          - generic [ref=e805] [cursor=pointer]: Swedish
          - generic [ref=e807] [cursor=pointer]: Swahili
          - generic [ref=e809] [cursor=pointer]: Tamil
          - generic [ref=e811] [cursor=pointer]: Telugu
          - generic [ref=e813] [cursor=pointer]: Tajik
          - generic [ref=e815] [cursor=pointer]: Thai
          - generic [ref=e817] [cursor=pointer]: Tigrinya
          - generic [ref=e819] [cursor=pointer]: Turkmen
          - generic [ref=e821] [cursor=pointer]: Tagalog
          - generic [ref=e823] [cursor=pointer]: Tswana
          - generic [ref=e825] [cursor=pointer]: Tonga
          - generic [ref=e827] [cursor=pointer]: Turkish
          - generic [ref=e829] [cursor=pointer]: Tsonga
          - generic [ref=e831] [cursor=pointer]: Tatar
          - generic [ref=e833] [cursor=pointer]: Twi
          - generic [ref=e835] [cursor=pointer]: Tahitian
          - generic [ref=e837] [cursor=pointer]: Uyghur
          - generic [ref=e839] [cursor=pointer]: Ukrainian
          - generic [ref=e841] [cursor=pointer]: Urdu
          - generic [ref=e843] [cursor=pointer]: Uzbek
          - generic [ref=e845] [cursor=pointer]: Venda
          - generic [ref=e847] [cursor=pointer]: Vietnamese
          - generic [ref=e849] [cursor=pointer]: Volapük
          - generic [ref=e851] [cursor=pointer]: Walloon
          - generic [ref=e853] [cursor=pointer]: Wolof
          - generic [ref=e855] [cursor=pointer]: Xhosa
          - generic [ref=e857] [cursor=pointer]: Yiddish
          - generic [ref=e859] [cursor=pointer]: Yoruba
          - generic [ref=e861] [cursor=pointer]: Zhuang
          - generic [ref=e863] [cursor=pointer]: Chinese
          - generic [ref=e865] [cursor=pointer]: Zulu
          - generic [ref=e867] [cursor=pointer]: Filipino
          - generic [ref=e869] [cursor=pointer]: Mandarin Chinese
          - generic [ref=e871] [cursor=pointer]: Yue Chinese
          - generic [ref=e873] [cursor=pointer]: Najdi Arabic
          - generic [ref=e875] [cursor=pointer]: Moroccan Arabic
          - generic [ref=e877] [cursor=pointer]: Egyptian Arabic
          - generic [ref=e879] [cursor=pointer]: Dari
          - generic [ref=e881] [cursor=pointer]: Iranian Persian
          - generic [ref=e883] [cursor=pointer]: Bhojpuri
          - generic [ref=e885] [cursor=pointer]: Maithili
          - generic [ref=e887] [cursor=pointer]: Fiji Hindi
          - generic [ref=e889] [cursor=pointer]: Central Atlas Tamazight
          - generic [ref=e891] [cursor=pointer]: Kabyle
          - generic [ref=e893] [cursor=pointer]: Berber
          - generic [ref=e895] [cursor=pointer]: Sardinian
          - generic [ref=e897] [cursor=pointer]: Asturian
          - generic [ref=e899] [cursor=pointer]: Ladino
          - generic [ref=e901] [cursor=pointer]: Lombard
          - generic [ref=e903] [cursor=pointer]: Neapolitan
          - generic [ref=e905] [cursor=pointer]: Central Kurdish
          - generic [ref=e907] [cursor=pointer]: Hindi
          - generic [ref=e909] [cursor=pointer]: Bengali
          - generic [ref=e911] [cursor=pointer]: Telugu
          - generic [ref=e913] [cursor=pointer]: Marathi
          - generic [ref=e915] [cursor=pointer]: Kannada
          - generic [ref=e917] [cursor=pointer]: Tamil
          - generic [ref=e919] [cursor=pointer]: Malayalam
          - generic [ref=e921] [cursor=pointer]: Gujarati
          - generic [ref=e923] [cursor=pointer]: Punjabi
          - generic [ref=e925] [cursor=pointer]: Odia
          - generic [ref=e927] [cursor=pointer]: Assamese
          - generic [ref=e929] [cursor=pointer]: English
          - generic [ref=e931] [cursor=pointer]: Urdu
          - generic [ref=e933] [cursor=pointer]: Kashmiri
          - generic [ref=e935] [cursor=pointer]: Nepali
          - generic [ref=e937] [cursor=pointer]: Sindhi
          - generic [ref=e939] [cursor=pointer]: Sanskrit
          - generic [ref=e941] [cursor=pointer]: Maithili
          - generic [ref=e943] [cursor=pointer]: Bhojpuri
          - generic [ref=e945] [cursor=pointer]: Magahi
          - generic [ref=e947] [cursor=pointer]: Chhattisgarhi
          - generic [ref=e949] [cursor=pointer]: Rajasthani
          - generic [ref=e951] [cursor=pointer]: Dogri
          - generic [ref=e953] [cursor=pointer]: Konkani
          - generic [ref=e955] [cursor=pointer]: Santali
          - generic [ref=e957] [cursor=pointer]: Bodo
          - generic [ref=e959] [cursor=pointer]: Manipuri
          - generic [ref=e961] [cursor=pointer]: Garo
          - generic [ref=e963] [cursor=pointer]: Marwari
          - generic [ref=e965] [cursor=pointer]: Haryanvi
          - generic [ref=e967] [cursor=pointer]: Awadhi
          - generic [ref=e969] [cursor=pointer]: Braj
          - generic [ref=e971] [cursor=pointer]: Garhwali
          - generic [ref=e973] [cursor=pointer]: Lambadi
          - generic [ref=e975] [cursor=pointer]: Bhili
          - generic [ref=e977] [cursor=pointer]: Bagri
          - generic [ref=e979] [cursor=pointer]: Kumaoni
          - generic [ref=e981] [cursor=pointer]: Kangri
          - generic [ref=e983] [cursor=pointer]: Bagheli
          - generic [ref=e985] [cursor=pointer]: Nimadi
          - generic [ref=e987] [cursor=pointer]: Rajbanshi
          - generic [ref=e989] [cursor=pointer]: Marwari
          - generic [ref=e991] [cursor=pointer]: Mewari
          - generic [ref=e993] [cursor=pointer]: Wagdi
          - generic [ref=e995] [cursor=pointer]: Hadoti
          - generic [ref=e997] [cursor=pointer]: Goan Konkani
          - generic [ref=e999] [cursor=pointer]: Ahirani
          - generic [ref=e1001] [cursor=pointer]: Surgujia
          - generic [ref=e1003] [cursor=pointer]: Kurukh
          - generic [ref=e1005] [cursor=pointer]: Mundari
          - generic [ref=e1007] [cursor=pointer]: Sambalpuri
          - generic [ref=e1009] [cursor=pointer]: Kutchi
          - generic [ref=e1011] [cursor=pointer]: Tulu
          - generic [ref=e1013] [cursor=pointer]: Kodava
          - generic [ref=e1015] [cursor=pointer]: Sadri
          - generic [ref=e1017] [cursor=pointer]: Afar
          - generic [ref=e1019] [cursor=pointer]: Abkhaz
          - generic [ref=e1021] [cursor=pointer]: Avestan
          - generic [ref=e1023] [cursor=pointer]: Afrikaans
          - generic [ref=e1025] [cursor=pointer]: Akan
          - generic [ref=e1027] [cursor=pointer]: Amharic
          - generic [ref=e1029] [cursor=pointer]: Aragonese
          - generic [ref=e1031] [cursor=pointer]: Arabic
          - generic [ref=e1033] [cursor=pointer]: Assamese
          - generic [ref=e1035] [cursor=pointer]: Avaric
          - generic [ref=e1037] [cursor=pointer]: Aymara
          - generic [ref=e1039] [cursor=pointer]: Azerbaijani
          - generic [ref=e1041] [cursor=pointer]: Bashkir
          - generic [ref=e1043] [cursor=pointer]: Belarusian
          - generic [ref=e1045] [cursor=pointer]: Bulgarian
          - generic [ref=e1047] [cursor=pointer]: Bihari
          - generic [ref=e1049] [cursor=pointer]: Bislama
          - generic [ref=e1051] [cursor=pointer]: Bambara
          - generic [ref=e1053] [cursor=pointer]: Bengali
          - generic [ref=e1055] [cursor=pointer]: Tibetan
          - generic [ref=e1057] [cursor=pointer]: Breton
          - generic [ref=e1059] [cursor=pointer]: Bosnian
          - generic [ref=e1061] [cursor=pointer]: Catalan
          - generic [ref=e1063] [cursor=pointer]: Chechen
          - generic [ref=e1065] [cursor=pointer]: Chamorro
          - generic [ref=e1067] [cursor=pointer]: Corsican
          - generic [ref=e1069] [cursor=pointer]: Cree
          - generic [ref=e1071] [cursor=pointer]: Czech
          - generic [ref=e1073] [cursor=pointer]: Old Church Slavonic
          - generic [ref=e1075] [cursor=pointer]: Chuvash
          - generic [ref=e1077] [cursor=pointer]: Welsh
          - generic [ref=e1079] [cursor=pointer]: Danish
          - generic [ref=e1081] [cursor=pointer]: German
          - generic [ref=e1083] [cursor=pointer]: Divehi
          - generic [ref=e1085] [cursor=pointer]: Dzongkha
          - generic [ref=e1087] [cursor=pointer]: Ewe
          - generic [ref=e1089] [cursor=pointer]: Greek
          - generic [ref=e1091] [cursor=pointer]: English
          - generic [ref=e1093] [cursor=pointer]: Esperanto
          - generic [ref=e1095] [cursor=pointer]: Spanish
          - generic [ref=e1097] [cursor=pointer]: Estonian
          - generic [ref=e1099] [cursor=pointer]: Basque
          - generic [ref=e1101] [cursor=pointer]: Persian
          - generic [ref=e1103] [cursor=pointer]: Fula
          - generic [ref=e1105] [cursor=pointer]: Finnish
          - generic [ref=e1107] [cursor=pointer]: Fijian
          - generic [ref=e1109] [cursor=pointer]: Faroese
          - generic [ref=e1111] [cursor=pointer]: French
          - generic [ref=e1113] [cursor=pointer]: Western Frisian
          - generic [ref=e1115] [cursor=pointer]: Irish
          - generic [ref=e1117] [cursor=pointer]: Scottish Gaelic
          - generic [ref=e1119] [cursor=pointer]: Galician
          - generic [ref=e1121] [cursor=pointer]: Guaraní
          - generic [ref=e1123] [cursor=pointer]: Gujarati
          - generic [ref=e1125] [cursor=pointer]: Manx
          - generic [ref=e1127] [cursor=pointer]: Hausa
          - generic [ref=e1129] [cursor=pointer]: Hebrew
          - generic [ref=e1131] [cursor=pointer]: Hindi
          - generic [ref=e1133] [cursor=pointer]: Hiri Motu
          - generic [ref=e1135] [cursor=pointer]: Croatian
          - generic [ref=e1137] [cursor=pointer]: Haitian
          - generic [ref=e1139] [cursor=pointer]: Hungarian
          - generic [ref=e1141] [cursor=pointer]: Armenian
          - generic [ref=e1143] [cursor=pointer]: Herero
          - generic [ref=e1145] [cursor=pointer]: Interlingua
          - generic [ref=e1147] [cursor=pointer]: Indonesian
          - generic [ref=e1149] [cursor=pointer]: Interlingue
          - generic [ref=e1151] [cursor=pointer]: Igbo
          - generic [ref=e1153] [cursor=pointer]: Nuosu
          - generic [ref=e1155] [cursor=pointer]: Inupiaq
          - generic [ref=e1157] [cursor=pointer]: Ido
          - generic [ref=e1159] [cursor=pointer]: Icelandic
          - generic [ref=e1161] [cursor=pointer]: Italian
          - generic [ref=e1163] [cursor=pointer]: Inuktitut
          - generic [ref=e1165] [cursor=pointer]: Japanese
          - generic [ref=e1167] [cursor=pointer]: Javanese
          - generic [ref=e1169] [cursor=pointer]: Georgian
          - generic [ref=e1171] [cursor=pointer]: Kongo
          - generic [ref=e1173] [cursor=pointer]: Kikuyu
          - generic [ref=e1175] [cursor=pointer]: Kwanyama
          - generic [ref=e1177] [cursor=pointer]: Kazakh
          - generic [ref=e1179] [cursor=pointer]: Kalaallisut
          - generic [ref=e1181] [cursor=pointer]: Khmer
          - generic [ref=e1183] [cursor=pointer]: Kannada
          - generic [ref=e1185] [cursor=pointer]: Korean
          - generic [ref=e1187] [cursor=pointer]: Kanuri
          - generic [ref=e1189] [cursor=pointer]: Kashmiri
          - generic [ref=e1191] [cursor=pointer]: Kurdish
          - generic [ref=e1193] [cursor=pointer]: Komi
          - generic [ref=e1195] [cursor=pointer]: Cornish
          - generic [ref=e1197] [cursor=pointer]: Kyrgyz
          - generic [ref=e1199] [cursor=pointer]: Latin
          - generic [ref=e1201] [cursor=pointer]: Luxembourgish
          - generic [ref=e1203] [cursor=pointer]: Ganda
          - generic [ref=e1205] [cursor=pointer]: Limburgish
          - generic [ref=e1207] [cursor=pointer]: Lingala
          - generic [ref=e1209] [cursor=pointer]: Lao
          - generic [ref=e1211] [cursor=pointer]: Lithuanian
          - generic [ref=e1213] [cursor=pointer]: Luba-Katanga
          - generic [ref=e1215] [cursor=pointer]: Latvian
          - generic [ref=e1217] [cursor=pointer]: Malagasy
          - generic [ref=e1219] [cursor=pointer]: Marshallese
          - generic [ref=e1221] [cursor=pointer]: Māori
          - generic [ref=e1223] [cursor=pointer]: Macedonian
          - generic [ref=e1225] [cursor=pointer]: Malayalam
          - generic [ref=e1227] [cursor=pointer]: Mongolian
          - generic [ref=e1229] [cursor=pointer]: Marathi
          - generic [ref=e1231] [cursor=pointer]: Malay
          - generic [ref=e1233] [cursor=pointer]: Maltese
          - generic [ref=e1235] [cursor=pointer]: Burmese
          - generic [ref=e1237] [cursor=pointer]: Nauru
          - generic [ref=e1239] [cursor=pointer]: Norwegian Bokmål
          - generic [ref=e1241] [cursor=pointer]: Northern Ndebele
          - generic [ref=e1243] [cursor=pointer]: Nepali
          - generic [ref=e1245] [cursor=pointer]: Ndonga
          - generic [ref=e1247] [cursor=pointer]: Dutch
          - generic [ref=e1249] [cursor=pointer]: Norwegian Nynorsk
          - generic [ref=e1251] [cursor=pointer]: Norwegian
          - generic [ref=e1253] [cursor=pointer]: Southern Ndebele
          - generic [ref=e1255] [cursor=pointer]: Navajo
          - generic [ref=e1257] [cursor=pointer]: Chichewa
          - generic [ref=e1259] [cursor=pointer]: Occitan
          - generic [ref=e1261] [cursor=pointer]: Ojibwe
          - generic [ref=e1263] [cursor=pointer]: Oromo
          - generic [ref=e1265] [cursor=pointer]: Odia
          - generic [ref=e1267] [cursor=pointer]: Ossetian
          - generic [ref=e1269] [cursor=pointer]: Punjabi
          - generic [ref=e1271] [cursor=pointer]: Pāli
          - generic [ref=e1273] [cursor=pointer]: Polish
          - generic [ref=e1275] [cursor=pointer]: Pashto
          - generic [ref=e1277] [cursor=pointer]: Portuguese
          - generic [ref=e1279] [cursor=pointer]: Quechua
          - generic [ref=e1281] [cursor=pointer]: Romansh
          - generic [ref=e1283] [cursor=pointer]: Kirundi
          - generic [ref=e1285] [cursor=pointer]: Romanian
          - generic [ref=e1287] [cursor=pointer]: Russian
          - generic [ref=e1289] [cursor=pointer]: Kinyarwanda
          - generic [ref=e1291] [cursor=pointer]: Sanskrit
          - generic [ref=e1293] [cursor=pointer]: Sardinian
          - generic [ref=e1295] [cursor=pointer]: Sindhi
          - generic [ref=e1297] [cursor=pointer]: Northern Sami
          - generic [ref=e1299] [cursor=pointer]: Sango
          - generic [ref=e1301] [cursor=pointer]: Sinhala
          - generic [ref=e1303] [cursor=pointer]: Slovak
          - generic [ref=e1305] [cursor=pointer]: Slovenian
          - generic [ref=e1307] [cursor=pointer]: Samoan
          - generic [ref=e1309] [cursor=pointer]: Shona
          - generic [ref=e1311] [cursor=pointer]: Somali
          - generic [ref=e1313] [cursor=pointer]: Albanian
          - generic [ref=e1315] [cursor=pointer]: Serbian
          - generic [ref=e1317] [cursor=pointer]: Swati
          - generic [ref=e1319] [cursor=pointer]: Southern Sotho
          - generic [ref=e1321] [cursor=pointer]: Sundanese
          - generic [ref=e1323] [cursor=pointer]: Swedish
          - generic [ref=e1325] [cursor=pointer]: Swahili
          - generic [ref=e1327] [cursor=pointer]: Tamil
          - generic [ref=e1329] [cursor=pointer]: Telugu
          - generic [ref=e1331] [cursor=pointer]: Tajik
          - generic [ref=e1333] [cursor=pointer]: Thai
          - generic [ref=e1335] [cursor=pointer]: Tigrinya
          - generic [ref=e1337] [cursor=pointer]: Turkmen
          - generic [ref=e1339] [cursor=pointer]: Tagalog
          - generic [ref=e1341] [cursor=pointer]: Tswana
          - generic [ref=e1343] [cursor=pointer]: Tonga
          - generic [ref=e1345] [cursor=pointer]: Turkish
          - generic [ref=e1347] [cursor=pointer]: Tsonga
          - generic [ref=e1349] [cursor=pointer]: Tatar
          - generic [ref=e1351] [cursor=pointer]: Twi
          - generic [ref=e1353] [cursor=pointer]: Tahitian
          - generic [ref=e1355] [cursor=pointer]: Uyghur
          - generic [ref=e1357] [cursor=pointer]: Ukrainian
          - generic [ref=e1359] [cursor=pointer]: Urdu
          - generic [ref=e1361] [cursor=pointer]: Uzbek
          - generic [ref=e1363] [cursor=pointer]: Venda
          - generic [ref=e1365] [cursor=pointer]: Vietnamese
          - generic [ref=e1367] [cursor=pointer]: Volapük
          - generic [ref=e1369] [cursor=pointer]: Walloon
          - generic [ref=e1371] [cursor=pointer]: Wolof
          - generic [ref=e1373] [cursor=pointer]: Xhosa
          - generic [ref=e1375] [cursor=pointer]: Yiddish
          - generic [ref=e1377] [cursor=pointer]: Yoruba
          - generic [ref=e1379] [cursor=pointer]: Zhuang
          - generic [ref=e1381] [cursor=pointer]: Chinese
          - generic [ref=e1383] [cursor=pointer]: Zulu
          - generic [ref=e1385] [cursor=pointer]: Filipino
          - generic [ref=e1387] [cursor=pointer]: Mandarin Chinese
          - generic [ref=e1389] [cursor=pointer]: Yue Chinese
          - generic [ref=e1391] [cursor=pointer]: Najdi Arabic
          - generic [ref=e1393] [cursor=pointer]: Moroccan Arabic
          - generic [ref=e1395] [cursor=pointer]: Egyptian Arabic
          - generic [ref=e1397] [cursor=pointer]: Dari
          - generic [ref=e1399] [cursor=pointer]: Iranian Persian
          - generic [ref=e1401] [cursor=pointer]: Bhojpuri
          - generic [ref=e1403] [cursor=pointer]: Maithili
          - generic [ref=e1405] [cursor=pointer]: Fiji Hindi
          - generic [ref=e1407] [cursor=pointer]: Central Atlas Tamazight
          - generic [ref=e1409] [cursor=pointer]: Kabyle
          - generic [ref=e1411] [cursor=pointer]: Berber
          - generic [ref=e1413] [cursor=pointer]: Sardinian
          - generic [ref=e1415] [cursor=pointer]: Asturian
          - generic [ref=e1417] [cursor=pointer]: Ladino
          - generic [ref=e1419] [cursor=pointer]: Lombard
          - generic [ref=e1421] [cursor=pointer]: Neapolitan
          - generic [ref=e1423] [cursor=pointer]: Central Kurdish
          - generic [ref=e1425] [cursor=pointer]: Hindi
          - generic [ref=e1427] [cursor=pointer]: Bengali
          - generic [ref=e1429] [cursor=pointer]: Telugu
          - generic [ref=e1431] [cursor=pointer]: Marathi
          - generic [ref=e1433] [cursor=pointer]: Kannada
          - generic [ref=e1435] [cursor=pointer]: Tamil
          - generic [ref=e1437] [cursor=pointer]: Malayalam
          - generic [ref=e1439] [cursor=pointer]: Gujarati
          - generic [ref=e1441] [cursor=pointer]: Punjabi
          - generic [ref=e1443] [cursor=pointer]: Odia
          - generic [ref=e1445] [cursor=pointer]: Assamese
          - generic [ref=e1447] [cursor=pointer]: English
          - generic [ref=e1449] [cursor=pointer]: Urdu
          - generic [ref=e1451] [cursor=pointer]: Kashmiri
          - generic [ref=e1453] [cursor=pointer]: Nepali
          - generic [ref=e1455] [cursor=pointer]: Sindhi
          - generic [ref=e1457] [cursor=pointer]: Sanskrit
          - generic [ref=e1459] [cursor=pointer]: Maithili
          - generic [ref=e1461] [cursor=pointer]: Bhojpuri
          - generic [ref=e1463] [cursor=pointer]: Magahi
          - generic [ref=e1465] [cursor=pointer]: Chhattisgarhi
          - generic [ref=e1467] [cursor=pointer]: Rajasthani
          - generic [ref=e1469] [cursor=pointer]: Dogri
          - generic [ref=e1471] [cursor=pointer]: Konkani
          - generic [ref=e1473] [cursor=pointer]: Santali
          - generic [ref=e1475] [cursor=pointer]: Bodo
          - generic [ref=e1477] [cursor=pointer]: Manipuri
          - generic [ref=e1479] [cursor=pointer]: Garo
          - generic [ref=e1481] [cursor=pointer]: Marwari
          - generic [ref=e1483] [cursor=pointer]: Haryanvi
          - generic [ref=e1485] [cursor=pointer]: Awadhi
          - generic [ref=e1487] [cursor=pointer]: Braj
          - generic [ref=e1489] [cursor=pointer]: Garhwali
          - generic [ref=e1491] [cursor=pointer]: Lambadi
          - generic [ref=e1493] [cursor=pointer]: Bhili
          - generic [ref=e1495] [cursor=pointer]: Bagri
          - generic [ref=e1497] [cursor=pointer]: Kumaoni
          - generic [ref=e1499] [cursor=pointer]: Kangri
          - generic [ref=e1501] [cursor=pointer]: Bagheli
          - generic [ref=e1503] [cursor=pointer]: Nimadi
          - generic [ref=e1505] [cursor=pointer]: Rajbanshi
          - generic [ref=e1507] [cursor=pointer]: Marwari
          - generic [ref=e1509] [cursor=pointer]: Mewari
          - generic [ref=e1511] [cursor=pointer]: Wagdi
          - generic [ref=e1513] [cursor=pointer]: Hadoti
          - generic [ref=e1515] [cursor=pointer]: Goan Konkani
          - generic [ref=e1517] [cursor=pointer]: Ahirani
          - generic [ref=e1519] [cursor=pointer]: Surgujia
          - generic [ref=e1521] [cursor=pointer]: Kurukh
          - generic [ref=e1523] [cursor=pointer]: Mundari
          - generic [ref=e1525] [cursor=pointer]: Sambalpuri
          - generic [ref=e1527] [cursor=pointer]: Kutchi
          - generic [ref=e1529] [cursor=pointer]: Tulu
          - generic [ref=e1531] [cursor=pointer]: Kodava
          - generic [ref=e1533] [cursor=pointer]: Sadri
        - link "See the full list of languages supported by Shunya Labs →" [ref=e1535] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/models-languages/supported-languages
      - contentinfo [ref=e1536]:
        - generic [ref=e1537]:
          - paragraph [ref=e1538]: The fastest way to add voice AI to your products
          - paragraph [ref=e1539]: One platform for speech in and speech out-secure by design, built to scale.
          - generic [ref=e1540]:
            - link "Go to Pricing page" [ref=e1541] [cursor=pointer]:
              - /url: /pricing
              - text: Get Started
            - link "Contact Sales" [ref=e1542] [cursor=pointer]:
              - /url: /contact
      - contentinfo [ref=e1543]:
        - generic [ref=e1544]:
          - generic [ref=e1545]:
            - img "Shunya Labs" [ref=e1546]
            - paragraph [ref=e1547]: Shunya Labs, Inc.
          - generic [ref=e1548]:
            - paragraph [ref=e1549]: Product
            - list [ref=e1550]:
              - listitem [ref=e1551]:
                - link "Overview" [ref=e1552] [cursor=pointer]:
                  - /url: /overview
              - listitem [ref=e1553]:
                - link "Models" [ref=e1554] [cursor=pointer]:
                  - /url: /models-page
              - listitem [ref=e1555]:
                - link "Voice Agents" [ref=e1556] [cursor=pointer]:
                  - /url: /voice-agent
              - listitem [ref=e1557]:
                - link "Speech Intelligence" [ref=e1558] [cursor=pointer]:
                  - /url: /speech-intelligence-page
              - listitem [ref=e1559]:
                - link "Audio Processing" [ref=e1560] [cursor=pointer]:
                  - /url: /audio-processing
              - listitem [ref=e1561]:
                - link "Deployment" [ref=e1562] [cursor=pointer]:
                  - /url: /deployment
          - generic [ref=e1563]:
            - paragraph [ref=e1564]: Models
            - list [ref=e1565]:
              - listitem [ref=e1566]:
                - link "Language Models" [ref=e1567] [cursor=pointer]:
                  - /url: /language-models
              - listitem [ref=e1568]:
                - link "Zero STT Indic" [ref=e1569] [cursor=pointer]:
                  - /url: /zero-indic
              - listitem [ref=e1570]:
                - link "Zero STT Codeswitch" [ref=e1571] [cursor=pointer]:
                  - /url: /zero-code-switch
              - listitem [ref=e1572]:
                - link "Specialised Models" [ref=e1573] [cursor=pointer]:
                  - /url: /domain-specialisation
              - listitem [ref=e1574]:
                - link "Zero STT Med" [ref=e1575] [cursor=pointer]:
                  - /url: /zero-med
              - listitem [ref=e1576]:
                - link "On Device Models" [ref=e1577] [cursor=pointer]:
                  - /url: /on-device-models
          - generic [ref=e1578]:
            - paragraph [ref=e1579]: Solutions
            - list [ref=e1580]:
              - listitem [ref=e1581]:
                - link "Contact Centers" [ref=e1582] [cursor=pointer]:
                  - /url: /contact-centers
              - listitem [ref=e1583]:
                - link "Media & Entertainment" [ref=e1584] [cursor=pointer]:
                  - /url: /media-entertainment
              - listitem [ref=e1585]:
                - link "Healthcare" [ref=e1586] [cursor=pointer]:
                  - /url: /healthcare
          - generic [ref=e1587]:
            - paragraph [ref=e1588]: Resources
            - list [ref=e1589]:
              - listitem [ref=e1590]:
                - link "Blogs" [ref=e1591] [cursor=pointer]:
                  - /url: /blog
              - listitem [ref=e1592]:
                - link "Benchmarks" [ref=e1593] [cursor=pointer]:
                  - /url: /benchmarks
              - listitem [ref=e1594]:
                - link "News & Media" [ref=e1595] [cursor=pointer]:
                  - /url: /media
              - listitem [ref=e1596]:
                - link "Patents" [ref=e1597] [cursor=pointer]:
                  - /url: /patents
              - listitem [ref=e1598]:
                - link "Research" [ref=e1599] [cursor=pointer]:
                  - /url: /research
          - paragraph [ref=e1601]:
            - link "Documentation" [ref=e1602] [cursor=pointer]:
              - /url: https://docs.shunyalabs.ai/overview
          - list [ref=e1604]:
            - listitem [ref=e1605]:
              - link "About us" [ref=e1606] [cursor=pointer]:
                - /url: /about
          - list [ref=e1608]:
            - listitem [ref=e1609]:
              - link "Pricing" [ref=e1610] [cursor=pointer]:
                - /url: /pricing
        - generic [ref=e1611]:
          - paragraph [ref=e1612]: Follow us on
          - generic [ref=e1613]:
            - link [ref=e1614] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/shunya-labs-ai/
              - img [ref=e1615]
            - link [ref=e1617] [cursor=pointer]:
              - /url: https://www.facebook.com/profile.php?id=61577801651308
              - img [ref=e1618]
            - link [ref=e1620] [cursor=pointer]:
              - /url: https://www.instagram.com/shunyalabsai/
              - img [ref=e1621]
            - link [ref=e1623] [cursor=pointer]:
              - /url: https://x.com/ShunyaLabsAI
              - img [ref=e1624]
        - generic [ref=e1626]:
          - paragraph [ref=e1627]: © 2026 Shunya Labs, Inc. All rights reserved.
          - generic [ref=e1628]:
            - link "Privacy" [ref=e1629] [cursor=pointer]:
              - /url: /privacy-policy
            - link "Terms" [ref=e1630] [cursor=pointer]:
              - /url: /terms-conditions
            - link "Security" [ref=e1631] [cursor=pointer]:
              - /url: /security-policy
            - link "General License" [ref=e1632] [cursor=pointer]:
              - /url: /general-rail-m-license
            - link "Custom License" [ref=e1633] [cursor=pointer]:
              - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e1634]
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
     |                                                                                      ^ Error: 14 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```