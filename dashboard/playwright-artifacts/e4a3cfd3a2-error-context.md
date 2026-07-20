# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/documentation/documentation/design.spec.js >> Documentation - Documentation design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

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
Error: 22 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 22
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e3]:
      - banner:
        - generic [ref=e4]:
          - link "Shunya Labs Logo" [ref=e5] [cursor=pointer]:
            - /url: /
            - img "Shunya Labs Logo" [ref=e6]
          - button "Open menu" [ref=e7] [cursor=pointer]: ☰
      - generic [ref=e8]:
        - complementary [ref=e9]:
          - generic [ref=e10]:
            - heading "Speech to text" [level=1] [ref=e11]
            - navigation [ref=e12]:
              - button "Livestream Transcriptions" [ref=e14] [cursor=pointer]:
                - generic [ref=e15]: Livestream Transcriptions
                - img [ref=e17]
              - button "Batch Transcriptions" [ref=e20] [cursor=pointer]:
                - generic [ref=e21]: Batch Transcriptions
                - img [ref=e23]
              - button "Models" [ref=e26] [cursor=pointer]:
                - generic [ref=e27]: Models
                - img [ref=e29]
              - button "Features" [ref=e32] [cursor=pointer]:
                - generic [ref=e33]: Features
                - img [ref=e35]
        - generic [ref=e39]:
          - heading "Quickstart" [level=1] [ref=e40]
          - paragraph [ref=e41]: Convert your audio files into accurate text transcriptions with support for 200+ languages and speaker diarization.
          - heading "Transcribe a pre-recorded audio file" [level=2] [ref=e42]
          - heading "Overview" [level=3] [ref=e43]
          - paragraph [ref=e44]: By the end of this tutorial, you’ll be able to transcribe an audio file using REST and WebSocket APIs.
          - heading "Get Your API Key" [level=3] [ref=e45]
          - paragraph [ref=e46]: To use the ShunyaLabs ASR API, you'll need an API key.
          - list [ref=e47]:
            - listitem [ref=e48]:
              - text: Contact
              - link "api@shunyalabs.ai" [ref=e49] [cursor=pointer]:
                - /url: mailto:api@shunyalabs.ai
            - listitem [ref=e50]: Request API access for your use case
            - listitem [ref=e51]: Receive your unique API key via email
            - listitem [ref=e52]: Start transcribing immediately
          - heading "REST API" [level=3] [ref=e53]
          - paragraph [ref=e54]: The REST API provides a simple interface for batch transcription.
          - 'heading "Step 1: Install the requests library" [level=4] [ref=e55]'
          - generic [ref=e56]:
            - button "Copy code" [ref=e57] [cursor=pointer]:
              - img [ref=e58]
            - code [ref=e62]: pip install requests
          - 'heading "Step 2: Transcribe your audio file" [level=4] [ref=e63]'
          - generic [ref=e64]:
            - button "Copy code" [ref=e65] [cursor=pointer]:
              - img [ref=e66]
            - code [ref=e70]:
              - text: "import requests url = \"https://tb.shunyalabs.ai/transcribe\" headers = {\"X-API-Key\": \"your_api_key_here\"}"
              - text: "with open(\"your_audio.wav\", \"rb\") as audio_file: files = {\"file\": audio_file} data = { \"language_code\": \"en\" } response = requests.post(url, headers=headers, files=files, data=data) result = response.json()"
              - text: print(result["text"])
          - 'heading "Step 3: View the response" [level=4] [ref=e71]'
          - generic [ref=e72]:
            - button "Copy code" [ref=e73] [cursor=pointer]:
              - img [ref=e74]
            - code [ref=e78]:
              - text: "{ \"success\": true, \"text\": \"Hello, this is your transcribed text.\", \"detected_language\": \"English\", \"total_time\": 2.34"
              - text: "}"
          - heading "WebSocket API" [level=3] [ref=e79]
          - paragraph [ref=e80]: The WebSocket API provides a persistent connection for faster transcription and real-time processing feedback.
          - 'heading "Step 1: Install dependencies" [level=4] [ref=e81]'
          - generic [ref=e82]:
            - button "Copy code" [ref=e83] [cursor=pointer]:
              - img [ref=e84]
            - code [ref=e88]: pip install websockets
          - 'heading "Step 2: Connect and send audio" [level=4] [ref=e89]'
          - generic [ref=e90]:
            - button "Copy code" [ref=e91] [cursor=pointer]:
              - img [ref=e92]
            - code [ref=e96]:
              - text: import asyncio
              - text: import websockets
              - text: import base64
              - text: import json
              - text: "async def transcribe_audio(): uri = \"wss://tb.shunyalabs.ai/ws\" async with websockets.connect(uri) as websocket: config = { \"api_key\": \"your_api_key_here\", \"language_code\": \"en\" } with open(\"your_audio.wav\", \"rb\") as audio_file: audio_data = base64.b64encode(audio_file.read()).decode() message = json.dumps({\"config\": config, \"audio\": audio_data}) await websocket.send(message) response = await websocket.recv() result = json.loads(response) print(result[\"text\"]) asyncio.run(transcribe_audio())"
          - heading "Using cURL" [level=3] [ref=e97]
          - paragraph [ref=e98]: "You can also quickly test your transcription without writing any code:"
          - generic [ref=e99]:
            - button "Copy code" [ref=e100] [cursor=pointer]:
              - img [ref=e101]
            - code [ref=e105]: "curl -X POST \"https://tb.shunyalabs.ai/transcribe\" \\ -H \"X-API-Key: your_api_key_here\" \\ -F \"file=@your_audio.wav\" \\ -F \"language_code=en\" \\"
    - contentinfo [ref=e106]:
      - generic [ref=e107]:
        - generic [ref=e108]:
          - img "Shunya Labs" [ref=e109]
          - paragraph [ref=e110]: Shunya Labs, Inc.
        - generic [ref=e111]:
          - paragraph [ref=e112]: Product
          - list [ref=e113]:
            - listitem [ref=e114]:
              - link "Overview" [ref=e115] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e116]:
              - link "Models" [ref=e117] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e118]:
              - link "Voice Agents" [ref=e119] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e120]:
              - link "Speech Intelligence" [ref=e121] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e122]:
              - link "Audio Processing" [ref=e123] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e124]:
              - link "Deployment" [ref=e125] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e126]:
          - paragraph [ref=e127]: Models
          - list [ref=e128]:
            - listitem [ref=e129]:
              - link "Language Models" [ref=e130] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e131]:
              - link "Zero STT Indic" [ref=e132] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e133]:
              - link "Zero STT Codeswitch" [ref=e134] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e135]:
              - link "Specialised Models" [ref=e136] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e137]:
              - link "Zero STT Med" [ref=e138] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e139]:
              - link "On Device Models" [ref=e140] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e141]:
          - paragraph [ref=e142]: Solutions
          - list [ref=e143]:
            - listitem [ref=e144]:
              - link "Contact Centers" [ref=e145] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e146]:
              - link "Media & Entertainment" [ref=e147] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e148]:
              - link "Healthcare" [ref=e149] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e150]:
          - paragraph [ref=e151]: Resources
          - list [ref=e152]:
            - listitem [ref=e153]:
              - link "Blogs" [ref=e154] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e155]:
              - link "Benchmarks" [ref=e156] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e157]:
              - link "News & Media" [ref=e158] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e159]:
              - link "Patents" [ref=e160] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e161]:
              - link "Research" [ref=e162] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e164]:
          - link "Documentation" [ref=e165] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e167]:
          - listitem [ref=e168]:
            - link "About us" [ref=e169] [cursor=pointer]:
              - /url: /about
        - list [ref=e171]:
          - listitem [ref=e172]:
            - link "Pricing" [ref=e173] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e174]:
        - paragraph [ref=e175]: Follow us on
        - generic [ref=e176]:
          - link [ref=e177] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e178]
          - link [ref=e180] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e181]
          - link [ref=e183] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e184]
          - link [ref=e186] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e187]
      - generic [ref=e189]:
        - paragraph [ref=e190]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e191]:
          - link "Privacy" [ref=e192] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e193] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e194] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e195] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e196] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e197]
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
     |                                                                                      ^ Error: 22 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```