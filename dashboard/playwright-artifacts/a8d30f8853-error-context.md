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
              - link "About Us" [ref=e27] [cursor=pointer]:
                - /url: /about
              - link "Pricing" [ref=e28] [cursor=pointer]:
                - /url: /pricing
          - generic [ref=e29]:
            - link "Playground" [ref=e30] [cursor=pointer]:
              - /url: https://playground.shunyalabs.ai/
              - img [ref=e31]
              - text: Playground
            - generic [ref=e33]:
              - button "Sign In" [ref=e34] [cursor=pointer]
              - link "Contact Sales" [ref=e35] [cursor=pointer]:
                - /url: /contact
      - generic [ref=e36]:
        - complementary [ref=e37]:
          - generic [ref=e38]:
            - heading "Speech to text" [level=1] [ref=e39]
            - navigation [ref=e40]:
              - button "Livestream Transcriptions" [ref=e42] [cursor=pointer]:
                - generic [ref=e43]: Livestream Transcriptions
                - img [ref=e45]
              - button "Batch Transcriptions" [ref=e48] [cursor=pointer]:
                - generic [ref=e49]: Batch Transcriptions
                - img [ref=e51]
              - button "Models" [ref=e54] [cursor=pointer]:
                - generic [ref=e55]: Models
                - img [ref=e57]
              - button "Features" [ref=e60] [cursor=pointer]:
                - generic [ref=e61]: Features
                - img [ref=e63]
        - generic [ref=e67]:
          - heading "Quickstart" [level=1] [ref=e68]
          - paragraph [ref=e69]: Convert your audio files into accurate text transcriptions with support for 200+ languages and speaker diarization.
          - heading "Transcribe a pre-recorded audio file" [level=2] [ref=e70]
          - heading "Overview" [level=3] [ref=e71]
          - paragraph [ref=e72]: By the end of this tutorial, you’ll be able to transcribe an audio file using REST and WebSocket APIs.
          - heading "Get Your API Key" [level=3] [ref=e73]
          - paragraph [ref=e74]: To use the ShunyaLabs ASR API, you'll need an API key.
          - list [ref=e75]:
            - listitem [ref=e76]:
              - text: Contact
              - link "api@shunyalabs.ai" [ref=e77] [cursor=pointer]:
                - /url: mailto:api@shunyalabs.ai
            - listitem [ref=e78]: Request API access for your use case
            - listitem [ref=e79]: Receive your unique API key via email
            - listitem [ref=e80]: Start transcribing immediately
          - heading "REST API" [level=3] [ref=e81]
          - paragraph [ref=e82]: The REST API provides a simple interface for batch transcription.
          - 'heading "Step 1: Install the requests library" [level=4] [ref=e83]'
          - generic [ref=e84]:
            - button "Copy code" [ref=e85] [cursor=pointer]:
              - img [ref=e86]
            - code [ref=e90]: pip install requests
          - 'heading "Step 2: Transcribe your audio file" [level=4] [ref=e91]'
          - generic [ref=e92]:
            - button "Copy code" [ref=e93] [cursor=pointer]:
              - img [ref=e94]
            - code [ref=e98]:
              - text: "import requests url = \"https://tb.shunyalabs.ai/transcribe\" headers = {\"X-API-Key\": \"your_api_key_here\"}"
              - text: "with open(\"your_audio.wav\", \"rb\") as audio_file: files = {\"file\": audio_file} data = { \"language_code\": \"en\" } response = requests.post(url, headers=headers, files=files, data=data) result = response.json()"
              - text: print(result["text"])
          - 'heading "Step 3: View the response" [level=4] [ref=e99]'
          - generic [ref=e100]:
            - button "Copy code" [ref=e101] [cursor=pointer]:
              - img [ref=e102]
            - code [ref=e106]:
              - text: "{ \"success\": true, \"text\": \"Hello, this is your transcribed text.\", \"detected_language\": \"English\", \"total_time\": 2.34"
              - text: "}"
          - heading "WebSocket API" [level=3] [ref=e107]
          - paragraph [ref=e108]: The WebSocket API provides a persistent connection for faster transcription and real-time processing feedback.
          - 'heading "Step 1: Install dependencies" [level=4] [ref=e109]'
          - generic [ref=e110]:
            - button "Copy code" [ref=e111] [cursor=pointer]:
              - img [ref=e112]
            - code [ref=e116]: pip install websockets
          - 'heading "Step 2: Connect and send audio" [level=4] [ref=e117]'
          - generic [ref=e118]:
            - button "Copy code" [ref=e119] [cursor=pointer]:
              - img [ref=e120]
            - code [ref=e124]:
              - text: import asyncio
              - text: import websockets
              - text: import base64
              - text: import json
              - text: "async def transcribe_audio(): uri = \"wss://tb.shunyalabs.ai/ws\" async with websockets.connect(uri) as websocket: config = { \"api_key\": \"your_api_key_here\", \"language_code\": \"en\" } with open(\"your_audio.wav\", \"rb\") as audio_file: audio_data = base64.b64encode(audio_file.read()).decode() message = json.dumps({\"config\": config, \"audio\": audio_data}) await websocket.send(message) response = await websocket.recv() result = json.loads(response) print(result[\"text\"]) asyncio.run(transcribe_audio())"
          - heading "Using cURL" [level=3] [ref=e125]
          - paragraph [ref=e126]: "You can also quickly test your transcription without writing any code:"
          - generic [ref=e127]:
            - button "Copy code" [ref=e128] [cursor=pointer]:
              - img [ref=e129]
            - code [ref=e133]: "curl -X POST \"https://tb.shunyalabs.ai/transcribe\" \\ -H \"X-API-Key: your_api_key_here\" \\ -F \"file=@your_audio.wav\" \\ -F \"language_code=en\" \\"
    - contentinfo [ref=e134]:
      - generic [ref=e135]:
        - generic [ref=e136]:
          - img "Shunya Labs" [ref=e137]
          - paragraph [ref=e138]: Shunya Labs, Inc.
        - generic [ref=e139]:
          - paragraph [ref=e140]: Product
          - list [ref=e141]:
            - listitem [ref=e142]:
              - link "Overview" [ref=e143] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e144]:
              - link "Models" [ref=e145] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e146]:
              - link "Voice Agents" [ref=e147] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e148]:
              - link "Speech Intelligence" [ref=e149] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e150]:
              - link "Audio Processing" [ref=e151] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e152]:
              - link "Deployment" [ref=e153] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e154]:
          - paragraph [ref=e155]: Models
          - list [ref=e156]:
            - listitem [ref=e157]:
              - link "Language Models" [ref=e158] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e159]:
              - link "Zero STT Indic" [ref=e160] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e161]:
              - link "Zero STT Codeswitch" [ref=e162] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e163]:
              - link "Specialised Models" [ref=e164] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e165]:
              - link "Zero STT Med" [ref=e166] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e167]:
              - link "On Device Models" [ref=e168] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e169]:
          - paragraph [ref=e170]: Solutions
          - list [ref=e171]:
            - listitem [ref=e172]:
              - link "Contact Centers" [ref=e173] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e174]:
              - link "Media & Entertainment" [ref=e175] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e176]:
              - link "Healthcare" [ref=e177] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e178]:
          - paragraph [ref=e179]: Resources
          - list [ref=e180]:
            - listitem [ref=e181]:
              - link "Blogs" [ref=e182] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e183]:
              - link "Benchmarks" [ref=e184] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e185]:
              - link "News & Media" [ref=e186] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e187]:
              - link "Patents" [ref=e188] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e189]:
              - link "Research" [ref=e190] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e192]:
          - link "Documentation" [ref=e193] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e195]:
          - listitem [ref=e196]:
            - link "About us" [ref=e197] [cursor=pointer]:
              - /url: /about
        - list [ref=e199]:
          - listitem [ref=e200]:
            - link "Pricing" [ref=e201] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e202]:
        - paragraph [ref=e203]: Follow us on
        - generic [ref=e204]:
          - link [ref=e205] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e206]
          - link [ref=e208] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e209]
          - link [ref=e211] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e212]
          - link [ref=e214] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e215]
      - generic [ref=e217]:
        - paragraph [ref=e218]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e219]:
          - link "Privacy" [ref=e220] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e221] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e222] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e223] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e224] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e225]
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