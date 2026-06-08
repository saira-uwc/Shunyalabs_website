# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/media-entertainment/design.spec.js >> Solutions - Media & Entertainment design compliance >> Figma design compliance
- Location: utils/design-compliance-suite.js:23:5

# Error details

```
Error: [buttons] Button "Contact Sales" not found on page

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
      - generic [ref=e11]:
        - heading "Voice Stack for Global Media to Localise at Scale" [level=1] [ref=e12]
        - paragraph [ref=e13]: Dubbing, translation, subtitling, voice cloning, and lip sync—220+ languages, one platform, studio-grade quality
        - link "Contact Sales" [ref=e14] [cursor=pointer]:
          - /url: /contact
      - generic [ref=e17]:
        - generic [ref=e18]: Global Language Coverage
        - generic [ref=e20]: Codeswitch Native Models
        - generic [ref=e22]: Fully Configurable Tools
      - generic [ref=e24]:
        - heading "Deep Language Coverage to Reach Every Viewer" [level=2] [ref=e25]
        - generic [ref=e29]:
          - generic [ref=e30]:
            - generic [ref=e31]:
              - img [ref=e33]
              - heading "Translate across formats" [level=3] [ref=e37]
            - paragraph [ref=e38]: Text-to-text, speech-to-speech, speech-to-text — translate in any direction.
          - generic [ref=e39]:
            - generic [ref=e40]:
              - img [ref=e42]
              - heading "Languages & dialects" [level=3] [ref=e44]
            - paragraph [ref=e45]: 220+ languages with dialect-level precision across regions.
          - generic [ref=e46]:
            - generic [ref=e47]:
              - img [ref=e49]
              - heading "Native codeswitch AI" [level=3] [ref=e51]
            - paragraph [ref=e52]: Real-world code switching like Hinglish, Tanglish, Arabizi.
          - generic [ref=e53]:
            - generic [ref=e54]:
              - img [ref=e56]
              - heading "Foundation models" [level=3] [ref=e58]
            - paragraph [ref=e59]: 220+ languages with dialect-level precision (LatAm vs European Spanish, Gulf vs Levantine Arabic)
      - generic [ref=e61]:
        - heading "Turn Content into Searchable, Monetizable Assets" [level=2] [ref=e62]
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
        - generic [ref=e102]:
          - generic [ref=e103]:
            - generic [ref=e104]:
              - img [ref=e106]
              - heading "Configurable voices" [level=3] [ref=e109]
            - paragraph [ref=e110]: Design and modulate voices—adjust tone, age, accent, and personality in real time.
          - generic [ref=e111]:
            - generic [ref=e112]:
              - img [ref=e114]
              - heading "Script to audio" [level=3] [ref=e117]
            - paragraph [ref=e118]: Skip the recording studio—go from script to final audio instantly.
          - generic [ref=e119]:
            - generic [ref=e120]:
              - img [ref=e122]
              - heading "Emotion tagging" [level=3] [ref=e130]
            - paragraph [ref=e131]: Natural emotion tagging for high-fidelity, expressive output.
          - generic [ref=e132]:
            - generic [ref=e133]:
              - img [ref=e135]
              - heading "Character consistency" [level=3] [ref=e138]
            - paragraph [ref=e139]: Save and reuse character voices across projects, episodes, and languages.
      - generic [ref=e141]:
        - heading "Dubbing, Cloning and Lip Sync that Sounds Natural, not Synthetic" [level=2] [ref=e142]
        - generic [ref=e146]:
          - generic [ref=e147]:
            - generic [ref=e148]:
              - img [ref=e150]
              - heading "Advanced dubbing" [level=3] [ref=e154]
            - paragraph [ref=e155]: Voice-matched dubbing that preserves emotion, tone, and speaker identity.
          - generic [ref=e156]:
            - generic [ref=e157]:
              - img [ref=e159]
              - heading "Accurate lip sync" [level=3] [ref=e162]
            - paragraph [ref=e163]: Phoneme-accurate lip sync for film, animation, games, and avatars.
          - generic [ref=e164]:
            - generic [ref=e165]:
              - img [ref=e167]
              - heading "Low-shot cloning" [level=3] [ref=e170]
            - paragraph [ref=e171]: Studio-quality clones from just minutes of audio.
          - generic [ref=e172]:
            - generic [ref=e173]:
              - img [ref=e175]
              - heading "Preserved accents" [level=3] [ref=e178]
            - paragraph [ref=e179]: Accent and identity preservation across languages.
      - generic [ref=e183]:
        - heading "Ready to Localise your Content at Scale?" [level=2] [ref=e184]
        - paragraph [ref=e185]: Skip stitching multiple vendors. Choose Shunya Lab's one stop solution to configure all your audio and speech intelligence needs across geographies.
        - link "Contact Sales" [ref=e187] [cursor=pointer]:
          - /url: /contact
    - contentinfo [ref=e188]:
      - generic [ref=e189]:
        - generic [ref=e190]:
          - img "Shunya Labs" [ref=e191]
          - paragraph [ref=e192]: Shunya Labs, Inc.
        - generic [ref=e193]:
          - paragraph [ref=e194]: Product
          - list [ref=e195]:
            - listitem [ref=e196]:
              - link "Overview" [ref=e197] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e198]:
              - link "Models" [ref=e199] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e200]:
              - link "Voice Agents" [ref=e201] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e202]:
              - link "Speech Intelligence" [ref=e203] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e204]:
              - link "Audio Processing" [ref=e205] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e206]:
              - link "Deployment" [ref=e207] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e208]:
          - paragraph [ref=e209]: Models
          - list [ref=e210]:
            - listitem [ref=e211]:
              - link "Language Models" [ref=e212] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e213]:
              - link "Zero STT Indic" [ref=e214] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e215]:
              - link "Zero STT Codeswitch" [ref=e216] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e217]:
              - link "Specialised Models" [ref=e218] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e219]:
              - link "Zero STT Med" [ref=e220] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e221]:
              - link "On Device Models" [ref=e222] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e223]:
          - paragraph [ref=e224]: Solutions
          - list [ref=e225]:
            - listitem [ref=e226]:
              - link "Contact Centers" [ref=e227] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e228]:
              - link "Media & Entertainment" [ref=e229] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e230]:
              - link "Healthcare" [ref=e231] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e232]:
          - paragraph [ref=e233]: Resources
          - list [ref=e234]:
            - listitem [ref=e235]:
              - link "Blogs" [ref=e236] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e237]:
              - link "Benchmarks" [ref=e238] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e239]:
              - link "News & Media" [ref=e240] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e241]:
              - link "Patents" [ref=e242] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e243]:
              - link "Research" [ref=e244] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e246]:
          - link "Documentation" [ref=e247] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e249]:
          - listitem [ref=e250]:
            - link "About us" [ref=e251] [cursor=pointer]:
              - /url: /about
        - list [ref=e253]:
          - listitem [ref=e254]:
            - link "Pricing" [ref=e255] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e256]:
        - paragraph [ref=e257]: Follow us on
        - generic [ref=e258]:
          - link [ref=e259] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e260]
          - link [ref=e262] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e263]
          - link [ref=e265] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e266]
          - link [ref=e268] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e269]
      - generic [ref=e271]:
        - paragraph [ref=e272]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e273]:
          - link "Privacy" [ref=e274] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e275] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e276] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e277] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e278] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e279]
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