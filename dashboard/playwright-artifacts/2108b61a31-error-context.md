# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/documentation/documentation/design.spec.js >> Documentation - Documentation design compliance >> Figma design compliance
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
  - generic [ref=e2]:
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
      - generic [ref=e10]:
        - complementary [ref=e11]:
          - generic [ref=e12]:
            - heading "Speech to text" [level=1] [ref=e13]
            - navigation [ref=e14]:
              - button "Livestream Transcriptions" [ref=e16] [cursor=pointer]:
                - generic [ref=e17]: Livestream Transcriptions
                - img [ref=e19]
              - button "Batch Transcriptions" [ref=e22] [cursor=pointer]:
                - generic [ref=e23]: Batch Transcriptions
                - img [ref=e25]
              - button "Models" [ref=e28] [cursor=pointer]:
                - generic [ref=e29]: Models
                - img [ref=e31]
              - button "Features" [ref=e34] [cursor=pointer]:
                - generic [ref=e35]: Features
                - img [ref=e37]
        - generic [ref=e39]:
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
                  - link "api@shunyalabs.ai" [ref=e40] [cursor=pointer]:
                    - /url: mailto:api@shunyalabs.ai
                - listitem: Request API access for your use case
                - listitem: Receive your unique API key via email
                - listitem: Start transcribing immediately
              - heading "REST API" [level=3]
              - paragraph: The REST API provides a simple interface for batch transcription.
              - 'heading "Step 1: Install the requests library" [level=4]'
              - generic:
                - button "Copy code" [ref=e41] [cursor=pointer]:
                  - img [ref=e42]
                - code [ref=e46]: pip install requests
              - 'heading "Step 2: Transcribe your audio file" [level=4]'
              - generic:
                - button "Copy code" [ref=e47] [cursor=pointer]:
                  - img [ref=e48]
                - code [ref=e52]:
                  - text: "import requests url = \"https://tb.shunyalabs.ai/transcribe\" headers = {\"X-API-Key\": \"your_api_key_here\"}"
                  - text: "with open(\"your_audio.wav\", \"rb\") as audio_file: files = {\"file\": audio_file} data = { \"language_code\": \"en\" } response = requests.post(url, headers=headers, files=files, data=data) result = response.json()"
                  - text: print(result["text"])
              - 'heading "Step 3: View the response" [level=4]'
              - generic:
                - button "Copy code" [ref=e53] [cursor=pointer]:
                  - img [ref=e54]
                - code [ref=e58]:
                  - text: "{ \"success\": true, \"text\": \"Hello, this is your transcribed text.\", \"detected_language\": \"English\", \"total_time\": 2.34"
                  - text: "}"
              - heading "WebSocket API" [level=3]
              - paragraph: The WebSocket API provides a persistent connection for faster transcription and real-time processing feedback.
              - 'heading "Step 1: Install dependencies" [level=4]'
              - generic:
                - button "Copy code" [ref=e59] [cursor=pointer]:
                  - img [ref=e60]
                - code [ref=e64]: pip install websockets
              - 'heading "Step 2: Connect and send audio" [level=4]'
              - generic:
                - button "Copy code" [ref=e65] [cursor=pointer]:
                  - img [ref=e66]
                - code [ref=e70]:
                  - text: import asyncio
                  - text: import websockets
                  - text: import base64
                  - text: import json
                  - text: "async def transcribe_audio(): uri = \"wss://tb.shunyalabs.ai/ws\" async with websockets.connect(uri) as websocket: config = { \"api_key\": \"your_api_key_here\", \"language_code\": \"en\" } with open(\"your_audio.wav\", \"rb\") as audio_file: audio_data = base64.b64encode(audio_file.read()).decode() message = json.dumps({\"config\": config, \"audio\": audio_data}) await websocket.send(message) response = await websocket.recv() result = json.loads(response) print(result[\"text\"]) asyncio.run(transcribe_audio())"
              - heading "Using cURL" [level=3]
              - paragraph: "You can also quickly test your transcription without writing any code:"
              - generic:
                - button "Copy code" [ref=e71] [cursor=pointer]:
                  - img [ref=e72]
                - code [ref=e76]: "curl -X POST \"https://tb.shunyalabs.ai/transcribe\" \\ -H \"X-API-Key: your_api_key_here\" \\ -F \"file=@your_audio.wav\" \\ -F \"language_code=en\" \\"
    - contentinfo [ref=e77]:
      - generic [ref=e78]:
        - generic [ref=e79]:
          - img "Shunya Labs" [ref=e80]
          - paragraph [ref=e81]: Shunya Labs, Inc.
        - generic [ref=e82]:
          - paragraph [ref=e83]: Product
          - list [ref=e84]:
            - listitem [ref=e85]:
              - link "Overview" [ref=e86] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e87]:
              - link "Models" [ref=e88] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e89]:
              - link "Voice Agents" [ref=e90] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e91]:
              - link "Speech Intelligence" [ref=e92] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e93]:
              - link "Audio Processing" [ref=e94] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e95]:
              - link "Deployment" [ref=e96] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e97]:
          - paragraph [ref=e98]: Models
          - list [ref=e99]:
            - listitem [ref=e100]:
              - link "Language Models" [ref=e101] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e102]:
              - link "Zero STT Indic" [ref=e103] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e104]:
              - link "Zero STT Codeswitch" [ref=e105] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e106]:
              - link "Specialised Models" [ref=e107] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e108]:
              - link "Zero STT Med" [ref=e109] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e110]:
              - link "On Device Models" [ref=e111] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e112]:
          - paragraph [ref=e113]: Solutions
          - list [ref=e114]:
            - listitem [ref=e115]:
              - link "Contact Centers" [ref=e116] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e117]:
              - link "Media & Entertainment" [ref=e118] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e119]:
              - link "Healthcare" [ref=e120] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e121]:
          - paragraph [ref=e122]: Resources
          - list [ref=e123]:
            - listitem [ref=e124]:
              - link "Blogs" [ref=e125] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e126]:
              - link "Benchmarks" [ref=e127] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e128]:
              - link "News & Media" [ref=e129] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e130]:
              - link "Patents" [ref=e131] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e132]:
              - link "Research" [ref=e133] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e135]:
          - link "Documentation" [ref=e136] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e138]:
          - listitem [ref=e139]:
            - link "About us" [ref=e140] [cursor=pointer]:
              - /url: /about
        - list [ref=e142]:
          - listitem [ref=e143]:
            - link "Pricing" [ref=e144] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e145]:
        - paragraph [ref=e146]: Follow us on
        - generic [ref=e147]:
          - link [ref=e148] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e149]
          - link [ref=e151] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e152]
          - link [ref=e154] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e155]
          - link [ref=e157] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e158]
      - generic [ref=e160]:
        - paragraph [ref=e161]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e162]:
          - link "Privacy" [ref=e163] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e164] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e165] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e166] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e167] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e168]
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