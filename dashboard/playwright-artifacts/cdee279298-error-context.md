# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/media-entertainment/design.spec.js >> Solutions - Media & Entertainment design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [content] Footer item "© 2026 Shunya Labs Inc. All rights reserved." not found

expect(received).toBeTruthy()

Received: null
```

```
Error: [content] Text content "© 2026 Shunya Labs Inc. All rights reserved." not found on page

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
              - text: Documentation
              - img
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
        - heading "Voice Stack for Global Media to Localise at Scale" [level=1] [ref=e12]
        - paragraph [ref=e13]: Dubbing, translation, subtitling, voice cloning, and lip sync—220+ languages, one platform, studio-grade quality
        - link "Contact Sales" [ref=e14] [cursor=pointer]:
          - /url: /contact
          - button "Contact Sales" [ref=e15]
      - generic [ref=e18]:
        - generic [ref=e19]: Global Language Coverage
        - generic [ref=e21]: Codeswitch Native Models
        - generic [ref=e23]: Fully Configurable Tools
      - generic [ref=e25]:
        - heading "Deep Language Coverage to Reach Every Viewer" [level=2] [ref=e26]
        - generic [ref=e30]:
          - generic [ref=e31]:
            - generic [ref=e32]:
              - img [ref=e34]
              - heading "Translate across formats" [level=3] [ref=e38]
            - paragraph [ref=e39]: Text-to-text, speech-to-speech, speech-to-text — translate in any direction.
          - generic [ref=e40]:
            - generic [ref=e41]:
              - img [ref=e43]
              - heading "Languages & dialects" [level=3] [ref=e45]
            - paragraph [ref=e46]: 220+ languages with dialect-level precision across regions.
          - generic [ref=e47]:
            - generic [ref=e48]:
              - img [ref=e50]
              - heading "Native codeswitch AI" [level=3] [ref=e52]
            - paragraph [ref=e53]: Real-world code switching like Hinglish, Tanglish, Arabizi.
          - generic [ref=e54]:
            - generic [ref=e55]:
              - img [ref=e57]
              - heading "Foundation models" [level=3] [ref=e59]
            - paragraph [ref=e60]: 220+ languages with dialect-level precision (LatAm vs European Spanish, Gulf vs Levantine Arabic)
      - generic [ref=e62]:
        - heading "Turn Content into Searchable, Monetizable Assets" [level=2] [ref=e63]
        - generic [ref=e67]:
          - generic [ref=e68]:
            - generic [ref=e69]:
              - img [ref=e71]
              - heading "Speech Intelligence" [level=3] [ref=e73]
            - paragraph [ref=e74]: Scene segmentation, emotion arcs, and narrative beat detection.
          - generic [ref=e75]:
            - generic [ref=e76]:
              - img [ref=e78]
              - heading "Content generation" [level=3] [ref=e80]
            - paragraph [ref=e81]: Auto-generate highlights, trailers, and chaptered indexes.
          - generic [ref=e82]:
            - generic [ref=e83]:
              - img [ref=e85]
              - heading "Compliance at scale" [level=3] [ref=e88]
            - paragraph [ref=e89]: Ad suitability, compliance tagging, and multilingual metadata at scale.
          - generic [ref=e90]:
            - generic [ref=e91]:
              - img [ref=e93]
              - heading "Global discoverability" [level=3] [ref=e95]
            - paragraph [ref=e96]: Search inside video and audio, in any language.
      - generic [ref=e98]:
        - heading "Create Characters, not just Voiceovers" [level=2] [ref=e99]
        - generic [ref=e103]:
          - generic [ref=e104]:
            - generic [ref=e105]:
              - img [ref=e107]
              - heading "Configurable voices" [level=3] [ref=e110]
            - paragraph [ref=e111]: Design and modulate voices—adjust tone, age, accent, and personality in real time.
          - generic [ref=e112]:
            - generic [ref=e113]:
              - img [ref=e115]
              - heading "Script to audio" [level=3] [ref=e118]
            - paragraph [ref=e119]: Skip the recording studio—go from script to final audio instantly.
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
        - generic [ref=e147]:
          - generic [ref=e148]:
            - generic [ref=e149]:
              - img [ref=e151]
              - heading "Advanced dubbing" [level=3] [ref=e155]
            - paragraph [ref=e156]: Voice-matched dubbing that preserves emotion, tone, and speaker identity.
          - generic [ref=e157]:
            - generic [ref=e158]:
              - img [ref=e160]
              - heading "Accurate lip sync" [level=3] [ref=e163]
            - paragraph [ref=e164]: Phoneme-accurate lip sync for film, animation, games, and avatars.
          - generic [ref=e165]:
            - generic [ref=e166]:
              - img [ref=e168]
              - heading "Low-shot cloning" [level=3] [ref=e171]
            - paragraph [ref=e172]: Studio-quality clones from just minutes of audio.
          - generic [ref=e173]:
            - generic [ref=e174]:
              - img [ref=e176]
              - heading "Preserved accents" [level=3] [ref=e179]
            - paragraph [ref=e180]: Accent and identity preservation across languages.
      - generic [ref=e184]:
        - heading "Ready to Localise your Content at Scale?" [level=2] [ref=e185]
        - paragraph [ref=e186]: Skip stitching multiple vendors. Choose Shunya Lab's one stop solution to configure all your audio and speech intelligence needs across geographies.
        - link "Contact Sales" [ref=e188] [cursor=pointer]:
          - /url: /contact
    - contentinfo [ref=e189]:
      - generic [ref=e190]:
        - generic [ref=e191]:
          - img "Shunya Labs" [ref=e192]
          - paragraph [ref=e193]: Shunya Labs, Inc.
        - generic [ref=e194]:
          - paragraph [ref=e195]: Product
          - list [ref=e196]:
            - listitem [ref=e197]:
              - link "Overview" [ref=e198] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e199]:
              - link "Models" [ref=e200] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e201]:
              - link "Voice Agents" [ref=e202] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e203]:
              - link "Speech Intelligence" [ref=e204] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e205]:
              - link "Audio Processing" [ref=e206] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e207]:
              - link "Deployment" [ref=e208] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e209]:
          - paragraph [ref=e210]: Models
          - list [ref=e211]:
            - listitem [ref=e212]:
              - link "Language Models" [ref=e213] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e214]:
              - link "Zero STT Indic" [ref=e215] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e216]:
              - link "Zero STT Codeswitch" [ref=e217] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e218]:
              - link "Specialised Models" [ref=e219] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e220]:
              - link "Zero STT Med" [ref=e221] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e222]:
              - link "On Device Models" [ref=e223] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e224]:
          - paragraph [ref=e225]: Solutions
          - list [ref=e226]:
            - listitem [ref=e227]:
              - link "Contact Centers" [ref=e228] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e229]:
              - link "Media & Entertainment" [ref=e230] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e231]:
              - link "Healthcare" [ref=e232] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e233]:
          - paragraph [ref=e234]: Resources
          - list [ref=e235]:
            - listitem [ref=e236]:
              - link "Blogs" [ref=e237] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e238]:
              - link "Benchmarks" [ref=e239] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e240]:
              - link "News & Media" [ref=e241] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e242]:
              - link "Patents" [ref=e243] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e244]:
              - link "Research" [ref=e245] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e247]:
          - link "Documentation" [ref=e248] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e250]:
          - listitem [ref=e251]:
            - link "About us" [ref=e252] [cursor=pointer]:
              - /url: /about
        - list [ref=e254]:
          - listitem [ref=e255]:
            - link "Pricing" [ref=e256] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e257]:
        - paragraph [ref=e258]: Follow us on
        - generic [ref=e259]:
          - link [ref=e260] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e261]
          - link [ref=e263] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e264]
          - link [ref=e266] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e267]
          - link [ref=e269] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e270]
      - generic [ref=e272]:
        - paragraph [ref=e273]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e274]:
          - link "Privacy" [ref=e275] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e276] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e277] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e278] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e279] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e280]
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