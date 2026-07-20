# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/media-entertainment/design.spec.js >> Solutions - Media & Entertainment design compliance >> Figma design compliance
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
Error: [content] Text content "Dubbing, translation, subtitling, voice cloning, and lip sync—220+ languages, one platform, studio-grade quality" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Text-to-text, speech-to-speech, speech-to-text — translate in any direction." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Design and modulate voices—adjust tone, age, accent, and personality in real time." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "Skip the recording studio—go from script to final audio instantly." not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: [links] CTA/Link "Playground (https://playground.shunyalabs.ai/)" not found on page

expect(received).toBeTruthy()

Received: null
```

```
Error: 20 design compliance issue(s) found

expect(received).toBe(expected) // Object.is equality

Expected: 0
Received: 20
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
      - generic [ref=e9]:
        - heading "Voice Stack for Global Media to Localise at Scale" [level=1] [ref=e10]
        - paragraph [ref=e11]: Dubbing, translation, subtitling, voice cloning, and lip sync-220+ languages, one platform, studio-grade quality
        - link "Contact Sales" [ref=e12] [cursor=pointer]:
          - /url: /contact
      - generic [ref=e15]:
        - generic [ref=e16]: Global Language Coverage
        - generic [ref=e18]: Codeswitch Native Models
        - generic [ref=e20]: Fully Configurable Tools
      - generic [ref=e22]:
        - heading "Deep Language Coverage to Reach Every Viewer" [level=2] [ref=e23]
        - generic [ref=e24]:
          - img "Deep Language Coverage to Reach Every Viewer" [ref=e27]
          - generic [ref=e28]:
            - generic [ref=e29]:
              - generic [ref=e30]:
                - img [ref=e32]
                - heading "Translate across formats" [level=3] [ref=e36]
              - paragraph [ref=e37]: Text-to-text, speech-to-speech, speech-to-text - translate in any direction.
            - generic [ref=e38]:
              - generic [ref=e39]:
                - img [ref=e41]
                - heading "Languages & dialects" [level=3] [ref=e43]
              - paragraph [ref=e44]: 220+ languages with dialect-level precision across regions.
            - generic [ref=e45]:
              - generic [ref=e46]:
                - img [ref=e48]
                - heading "Native codeswitch AI" [level=3] [ref=e50]
              - paragraph [ref=e51]: Real-world code switching like Hinglish, Tanglish, Arabizi.
            - generic [ref=e52]:
              - generic [ref=e53]:
                - img [ref=e55]
                - heading "Foundation models" [level=3] [ref=e57]
              - paragraph [ref=e58]: 220+ languages with dialect-level precision (LatAm vs European Spanish, Gulf vs Levantine Arabic)
      - generic [ref=e60]:
        - heading "Turn Content into Searchable, Monetizable Assets" [level=2] [ref=e61]
        - generic [ref=e62]:
          - img "Turn Content into Searchable, Monetizable Assets" [ref=e65]
          - generic [ref=e66]:
            - generic [ref=e67]:
              - generic [ref=e68]:
                - img [ref=e70]
                - heading "Speech Intelligence" [level=3] [ref=e72]
              - paragraph [ref=e73]: Scene segmentation, emotion arcs, and narrative beat detection.
            - generic [ref=e74]:
              - generic [ref=e75]:
                - img [ref=e77]
                - heading "Content generation" [level=3] [ref=e79]
              - paragraph [ref=e80]: Auto-generate highlights, trailers, and chaptered indexes.
            - generic [ref=e81]:
              - generic [ref=e82]:
                - img [ref=e84]
                - heading "Compliance at scale" [level=3] [ref=e87]
              - paragraph [ref=e88]: Ad suitability, compliance tagging, and multilingual metadata at scale.
            - generic [ref=e89]:
              - generic [ref=e90]:
                - img [ref=e92]
                - heading "Global discoverability" [level=3] [ref=e94]
              - paragraph [ref=e95]: Search inside video and audio, in any language.
      - generic [ref=e97]:
        - heading "Create Characters, not just Voiceovers" [level=2] [ref=e98]
        - generic [ref=e99]:
          - img "Create Characters, not just Voiceovers" [ref=e102]
          - generic [ref=e103]:
            - generic [ref=e104]:
              - generic [ref=e105]:
                - img [ref=e107]
                - heading "Configurable voices" [level=3] [ref=e110]
              - paragraph [ref=e111]: Design and modulate voices-adjust tone, age, accent, and personality in real time.
            - generic [ref=e112]:
              - generic [ref=e113]:
                - img [ref=e115]
                - heading "Script to audio" [level=3] [ref=e118]
              - paragraph [ref=e119]: Skip the recording studio-go from script to final audio instantly.
            - generic [ref=e120]:
              - generic [ref=e121]:
                - img [ref=e123]
                - heading "Emotion tagging" [level=3] [ref=e131]
              - paragraph [ref=e132]: Natural emotion tagging for high-fidelity, expressive output.
            - generic [ref=e133]:
              - generic [ref=e134]:
                - img [ref=e136]
                - heading "Character consistency" [level=3] [ref=e139]
              - paragraph [ref=e140]: Save and reuse character voices across projects, episodes, and languages.
      - generic [ref=e142]:
        - heading "Dubbing, Cloning and Lip Sync that Sounds Natural, not Synthetic" [level=2] [ref=e143]
        - generic [ref=e144]:
          - img "Dubbing, Cloning and Lip Sync that Sounds Natural, not Synthetic" [ref=e147]
          - generic [ref=e148]:
            - generic [ref=e149]:
              - generic [ref=e150]:
                - img [ref=e152]
                - heading "Advanced dubbing" [level=3] [ref=e156]
              - paragraph [ref=e157]: Voice-matched dubbing that preserves emotion, tone, and speaker identity.
            - generic [ref=e158]:
              - generic [ref=e159]:
                - img [ref=e161]
                - heading "Accurate lip sync" [level=3] [ref=e164]
              - paragraph [ref=e165]: Phoneme-accurate lip sync for film, animation, games, and avatars.
            - generic [ref=e166]:
              - generic [ref=e167]:
                - img [ref=e169]
                - heading "Low-shot cloning" [level=3] [ref=e172]
              - paragraph [ref=e173]: Studio-quality clones from just minutes of audio.
            - generic [ref=e174]:
              - generic [ref=e175]:
                - img [ref=e177]
                - heading "Preserved accents" [level=3] [ref=e180]
              - paragraph [ref=e181]: Accent and identity preservation across languages.
      - generic [ref=e185]:
        - heading "Ready to Localise your Content at Scale?" [level=2] [ref=e186]
        - paragraph [ref=e187]: Skip stitching multiple vendors. Choose Shunya Lab's one stop solution to configure all your audio and speech intelligence needs across geographies.
        - link "Contact Sales" [ref=e189] [cursor=pointer]:
          - /url: /contact
    - contentinfo [ref=e190]:
      - generic [ref=e191]:
        - generic [ref=e192]:
          - img "Shunya Labs" [ref=e193]
          - paragraph [ref=e194]: Shunya Labs, Inc.
        - generic [ref=e195]:
          - paragraph [ref=e196]: Product
          - list [ref=e197]:
            - listitem [ref=e198]:
              - link "Overview" [ref=e199] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e200]:
              - link "Models" [ref=e201] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e202]:
              - link "Voice Agents" [ref=e203] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e204]:
              - link "Speech Intelligence" [ref=e205] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e206]:
              - link "Audio Processing" [ref=e207] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e208]:
              - link "Deployment" [ref=e209] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e210]:
          - paragraph [ref=e211]: Models
          - list [ref=e212]:
            - listitem [ref=e213]:
              - link "Language Models" [ref=e214] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e215]:
              - link "Zero STT Indic" [ref=e216] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e217]:
              - link "Zero STT Codeswitch" [ref=e218] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e219]:
              - link "Specialised Models" [ref=e220] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e221]:
              - link "Zero STT Med" [ref=e222] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e223]:
              - link "On Device Models" [ref=e224] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e225]:
          - paragraph [ref=e226]: Solutions
          - list [ref=e227]:
            - listitem [ref=e228]:
              - link "Contact Centers" [ref=e229] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e230]:
              - link "Media & Entertainment" [ref=e231] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e232]:
              - link "Healthcare" [ref=e233] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e234]:
          - paragraph [ref=e235]: Resources
          - list [ref=e236]:
            - listitem [ref=e237]:
              - link "Blogs" [ref=e238] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e239]:
              - link "Benchmarks" [ref=e240] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e241]:
              - link "News & Media" [ref=e242] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e243]:
              - link "Patents" [ref=e244] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e245]:
              - link "Research" [ref=e246] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e248]:
          - link "Documentation" [ref=e249] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/
        - list [ref=e251]:
          - listitem [ref=e252]:
            - link "About us" [ref=e253] [cursor=pointer]:
              - /url: /about
        - list [ref=e255]:
          - listitem [ref=e256]:
            - link "Pricing" [ref=e257] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e258]:
        - paragraph [ref=e259]: Follow us on
        - generic [ref=e260]:
          - link [ref=e261] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e262]
          - link [ref=e264] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801651308/
            - img [ref=e265]
          - link [ref=e267] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e268]
          - link [ref=e270] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e271]
      - generic [ref=e273]:
        - paragraph [ref=e274]: © 2026 Shunya Labs, Inc. All rights reserved.
        - navigation "Legal" [ref=e275]:
          - link "Privacy" [ref=e276] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e277] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e278] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e279] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e280] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e281]
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
     |                                                                                      ^ Error: 20 design compliance issue(s) found
  31 |     });
  32 |   });
  33 | }
  34 | 
```