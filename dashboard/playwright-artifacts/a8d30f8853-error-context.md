# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/documentation/documentation/design.spec.js >> Documentation - Documentation design compliance >> Figma design compliance
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
      - generic [ref=e34]:
        - complementary [ref=e35]:
          - generic [ref=e36]:
            - heading "Speech to text" [level=1] [ref=e37]
            - navigation [ref=e38]:
              - button "Livestream Transcriptions" [ref=e40] [cursor=pointer]:
                - generic [ref=e41]: Livestream Transcriptions
                - img [ref=e43]
              - button "Batch Transcriptions" [ref=e46] [cursor=pointer]:
                - generic [ref=e47]: Batch Transcriptions
                - img [ref=e49]
              - button "Models" [ref=e52] [cursor=pointer]:
                - generic [ref=e53]: Models
                - img [ref=e55]
              - button "Features" [ref=e58] [cursor=pointer]:
                - generic [ref=e59]: Features
                - img [ref=e61]
        - generic [ref=e65]:
          - heading "Quickstart" [level=1] [ref=e66]
          - paragraph [ref=e67]: Convert your audio files into accurate text transcriptions with support for 200+ languages and speaker diarization.
          - heading "Transcribe a pre-recorded audio file" [level=2] [ref=e68]
          - heading "Overview" [level=3] [ref=e69]
          - paragraph [ref=e70]: By the end of this tutorial, you’ll be able to transcribe an audio file using REST and WebSocket APIs.
          - heading "Get Your API Key" [level=3] [ref=e71]
          - paragraph [ref=e72]: To use the ShunyaLabs ASR API, you'll need an API key.
          - list [ref=e73]:
            - listitem [ref=e74]:
              - text: Contact
              - link "api@shunyalabs.ai" [ref=e75] [cursor=pointer]:
                - /url: mailto:api@shunyalabs.ai
            - listitem [ref=e76]: Request API access for your use case
            - listitem [ref=e77]: Receive your unique API key via email
            - listitem [ref=e78]: Start transcribing immediately
          - heading "REST API" [level=3] [ref=e79]
          - paragraph [ref=e80]: The REST API provides a simple interface for batch transcription.
          - 'heading "Step 1: Install the requests library" [level=4] [ref=e81]'
          - generic [ref=e82]:
            - button "Copy code" [ref=e83] [cursor=pointer]:
              - img [ref=e84]
            - code [ref=e88]: pip install requests
          - 'heading "Step 2: Transcribe your audio file" [level=4] [ref=e89]'
          - generic [ref=e90]:
            - button "Copy code" [ref=e91] [cursor=pointer]:
              - img [ref=e92]
            - code [ref=e96]:
              - text: "import requests url = \"https://tb.shunyalabs.ai/transcribe\" headers = {\"X-API-Key\": \"your_api_key_here\"}"
              - text: "with open(\"your_audio.wav\", \"rb\") as audio_file: files = {\"file\": audio_file} data = { \"language_code\": \"en\" } response = requests.post(url, headers=headers, files=files, data=data) result = response.json()"
              - text: print(result["text"])
          - 'heading "Step 3: View the response" [level=4] [ref=e97]'
          - generic [ref=e98]:
            - button "Copy code" [ref=e99] [cursor=pointer]:
              - img [ref=e100]
            - code [ref=e104]:
              - text: "{ \"success\": true, \"text\": \"Hello, this is your transcribed text.\", \"detected_language\": \"English\", \"total_time\": 2.34"
              - text: "}"
          - heading "WebSocket API" [level=3] [ref=e105]
          - paragraph [ref=e106]: The WebSocket API provides a persistent connection for faster transcription and real-time processing feedback.
          - 'heading "Step 1: Install dependencies" [level=4] [ref=e107]'
          - generic [ref=e108]:
            - button "Copy code" [ref=e109] [cursor=pointer]:
              - img [ref=e110]
            - code [ref=e114]: pip install websockets
          - 'heading "Step 2: Connect and send audio" [level=4] [ref=e115]'
          - generic [ref=e116]:
            - button "Copy code" [ref=e117] [cursor=pointer]:
              - img [ref=e118]
            - code [ref=e122]:
              - text: import asyncio
              - text: import websockets
              - text: import base64
              - text: import json
              - text: "async def transcribe_audio(): uri = \"wss://tb.shunyalabs.ai/ws\" async with websockets.connect(uri) as websocket: config = { \"api_key\": \"your_api_key_here\", \"language_code\": \"en\" } with open(\"your_audio.wav\", \"rb\") as audio_file: audio_data = base64.b64encode(audio_file.read()).decode() message = json.dumps({\"config\": config, \"audio\": audio_data}) await websocket.send(message) response = await websocket.recv() result = json.loads(response) print(result[\"text\"]) asyncio.run(transcribe_audio())"
          - heading "Using cURL" [level=3] [ref=e123]
          - paragraph [ref=e124]: "You can also quickly test your transcription without writing any code:"
          - generic [ref=e125]:
            - button "Copy code" [ref=e126] [cursor=pointer]:
              - img [ref=e127]
            - code [ref=e131]: "curl -X POST \"https://tb.shunyalabs.ai/transcribe\" \\ -H \"X-API-Key: your_api_key_here\" \\ -F \"file=@your_audio.wav\" \\ -F \"language_code=en\" \\"
    - contentinfo [ref=e132]:
      - generic [ref=e133]:
        - generic [ref=e134]:
          - img "Shunya Labs" [ref=e135]
          - paragraph [ref=e136]: Shunya Labs, Inc.
        - generic [ref=e137]:
          - paragraph [ref=e138]: Product
          - list [ref=e139]:
            - listitem [ref=e140]:
              - link "Overview" [ref=e141] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e142]:
              - link "Models" [ref=e143] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e144]:
              - link "Voice Agents" [ref=e145] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e146]:
              - link "Speech Intelligence" [ref=e147] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e148]:
              - link "Audio Processing" [ref=e149] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e150]:
              - link "Deployment" [ref=e151] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e152]:
          - paragraph [ref=e153]: Models
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link "Language Models" [ref=e156] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e157]:
              - link "Zero STT Indic" [ref=e158] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e159]:
              - link "Zero STT Codeswitch" [ref=e160] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e161]:
              - link "Specialised Models" [ref=e162] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e163]:
              - link "Zero STT Med" [ref=e164] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e165]:
              - link "On Device Models" [ref=e166] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e167]:
          - paragraph [ref=e168]: Solutions
          - list [ref=e169]:
            - listitem [ref=e170]:
              - link "Contact Centers" [ref=e171] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e172]:
              - link "Media & Entertainment" [ref=e173] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e174]:
              - link "Healthcare" [ref=e175] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e176]:
          - paragraph [ref=e177]: Resources
          - list [ref=e178]:
            - listitem [ref=e179]:
              - link "Blogs" [ref=e180] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e181]:
              - link "Benchmarks" [ref=e182] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e183]:
              - link "News & Media" [ref=e184] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e185]:
              - link "Patents" [ref=e186] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e187]:
              - link "Research" [ref=e188] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e190]:
          - link "Documentation" [ref=e191] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e193]:
          - listitem [ref=e194]:
            - link "About us" [ref=e195] [cursor=pointer]:
              - /url: /about
        - list [ref=e197]:
          - listitem [ref=e198]:
            - link "Pricing" [ref=e199] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e200]:
        - paragraph [ref=e201]: Follow us on
        - generic [ref=e202]:
          - link [ref=e203] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e204]
          - link [ref=e206] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e207]
          - link [ref=e209] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e210]
          - link [ref=e212] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e213]
      - generic [ref=e215]:
        - paragraph [ref=e216]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e217]:
          - link "Privacy" [ref=e218] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e219] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e220] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e221] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e222] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e223]
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