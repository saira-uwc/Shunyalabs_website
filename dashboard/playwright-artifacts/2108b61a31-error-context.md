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
      - generic [ref=e9]:
        - complementary [ref=e10]:
          - generic [ref=e11]:
            - heading "Speech to text" [level=1] [ref=e12]
            - navigation [ref=e13]:
              - button "Livestream Transcriptions" [ref=e15] [cursor=pointer]:
                - generic [ref=e16]: Livestream Transcriptions
                - img [ref=e18]
              - button "Batch Transcriptions" [ref=e21] [cursor=pointer]:
                - generic [ref=e22]: Batch Transcriptions
                - img [ref=e24]
              - button "Models" [ref=e27] [cursor=pointer]:
                - generic [ref=e28]: Models
                - img [ref=e30]
              - button "Features" [ref=e33] [cursor=pointer]:
                - generic [ref=e34]: Features
                - img [ref=e36]
        - generic [ref=e38]:
          - generic:
            - generic:
              - heading "Quickstart" [level=1]
              - paragraph: Convert your audio files into accurate text transcriptions with support for 200+ languages and speaker diarization.
              - heading "Transcribe a pre-recorded audio file" [level=2]
              - heading "Overview" [level=3]
              - paragraph: By the end of this tutorial, you’ll be able to transcribe an audio file using REST and WebSocket APIs.
              - heading "Get Your API Key" [level=3]
              - paragraph: To use the ShunyaLabs ASR API, you'll need an API key.
              - list:
                - listitem:
                  - text: Contact
                  - link "api@shunyalabs.ai" [ref=e39] [cursor=pointer]:
                    - /url: mailto:api@shunyalabs.ai
                - listitem: Request API access for your use case
                - listitem: Receive your unique API key via email
                - listitem: Start transcribing immediately
              - heading "REST API" [level=3]
              - paragraph: The REST API provides a simple interface for batch transcription.
              - 'heading "Step 1: Install the requests library" [level=4]'
              - generic:
                - button "Copy code" [ref=e40] [cursor=pointer]:
                  - img [ref=e41]
                - code [ref=e45]: pip install requests
              - 'heading "Step 2: Transcribe your audio file" [level=4]'
              - generic:
                - button "Copy code" [ref=e46] [cursor=pointer]:
                  - img [ref=e47]
                - code [ref=e51]:
                  - text: "import requests url = \"https://tb.shunyalabs.ai/transcribe\" headers = {\"X-API-Key\": \"your_api_key_here\"}"
                  - text: "with open(\"your_audio.wav\", \"rb\") as audio_file: files = {\"file\": audio_file} data = { \"language_code\": \"en\" } response = requests.post(url, headers=headers, files=files, data=data) result = response.json()"
                  - text: print(result["text"])
              - 'heading "Step 3: View the response" [level=4]'
              - generic:
                - button "Copy code" [ref=e52] [cursor=pointer]:
                  - img [ref=e53]
                - code [ref=e57]:
                  - text: "{ \"success\": true, \"text\": \"Hello, this is your transcribed text.\", \"detected_language\": \"English\", \"total_time\": 2.34"
                  - text: "}"
              - heading "WebSocket API" [level=3]
              - paragraph: The WebSocket API provides a persistent connection for faster transcription and real-time processing feedback.
              - 'heading "Step 1: Install dependencies" [level=4]'
              - generic:
                - button "Copy code" [ref=e58] [cursor=pointer]:
                  - img [ref=e59]
                - code [ref=e63]: pip install websockets
              - 'heading "Step 2: Connect and send audio" [level=4]'
              - generic:
                - button "Copy code" [ref=e64] [cursor=pointer]:
                  - img [ref=e65]
                - code [ref=e69]:
                  - text: import asyncio
                  - text: import websockets
                  - text: import base64
                  - text: import json
                  - text: "async def transcribe_audio(): uri = \"wss://tb.shunyalabs.ai/ws\" async with websockets.connect(uri) as websocket: config = { \"api_key\": \"your_api_key_here\", \"language_code\": \"en\" } with open(\"your_audio.wav\", \"rb\") as audio_file: audio_data = base64.b64encode(audio_file.read()).decode() message = json.dumps({\"config\": config, \"audio\": audio_data}) await websocket.send(message) response = await websocket.recv() result = json.loads(response) print(result[\"text\"]) asyncio.run(transcribe_audio())"
              - heading "Using cURL" [level=3]
              - paragraph: "You can also quickly test your transcription without writing any code:"
              - generic:
                - button "Copy code" [ref=e70] [cursor=pointer]:
                  - img [ref=e71]
                - code [ref=e75]: "curl -X POST \"https://tb.shunyalabs.ai/transcribe\" \\ -H \"X-API-Key: your_api_key_here\" \\ -F \"file=@your_audio.wav\" \\ -F \"language_code=en\" \\"
    - contentinfo [ref=e76]:
      - generic [ref=e77]:
        - generic [ref=e78]:
          - img "Shunya Labs" [ref=e79]
          - paragraph [ref=e80]: Shunya Labs, Inc.
        - generic [ref=e81]:
          - paragraph [ref=e82]: Product
          - list [ref=e83]:
            - listitem [ref=e84]:
              - link "Overview" [ref=e85] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e86]:
              - link "Models" [ref=e87] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e88]:
              - link "Voice Agents" [ref=e89] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e90]:
              - link "Speech Intelligence" [ref=e91] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e92]:
              - link "Audio Processing" [ref=e93] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e94]:
              - link "Deployment" [ref=e95] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e96]:
          - paragraph [ref=e97]: Models
          - list [ref=e98]:
            - listitem [ref=e99]:
              - link "Language Models" [ref=e100] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e101]:
              - link "Zero STT Indic" [ref=e102] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e103]:
              - link "Zero STT Codeswitch" [ref=e104] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e105]:
              - link "Specialised Models" [ref=e106] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e107]:
              - link "Zero STT Med" [ref=e108] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e109]:
              - link "On Device Models" [ref=e110] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e111]:
          - paragraph [ref=e112]: Solutions
          - list [ref=e113]:
            - listitem [ref=e114]:
              - link "Contact Centers" [ref=e115] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e116]:
              - link "Media & Entertainment" [ref=e117] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e118]:
              - link "Healthcare" [ref=e119] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e120]:
          - paragraph [ref=e121]: Resources
          - list [ref=e122]:
            - listitem [ref=e123]:
              - link "Blogs" [ref=e124] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e125]:
              - link "Benchmarks" [ref=e126] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e127]:
              - link "News & Media" [ref=e128] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e129]:
              - link "Patents" [ref=e130] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e131]:
              - link "Research" [ref=e132] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e134]:
          - link "Documentation" [ref=e135] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e137]:
          - listitem [ref=e138]:
            - link "About us" [ref=e139] [cursor=pointer]:
              - /url: /about
        - list [ref=e141]:
          - listitem [ref=e142]:
            - link "Pricing" [ref=e143] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e144]:
        - paragraph [ref=e145]: Follow us on
        - generic [ref=e146]:
          - link [ref=e147] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e148]
          - link [ref=e150] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e151]
          - link [ref=e153] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e154]
          - link [ref=e156] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e157]
      - generic [ref=e159]:
        - paragraph [ref=e160]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e161]:
          - link "Privacy" [ref=e162] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e163] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e164] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e165] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e166] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e167]
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