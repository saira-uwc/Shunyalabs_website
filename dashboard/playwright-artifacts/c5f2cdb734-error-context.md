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
                - text: Documentation
                - img [ref=e27]
              - link "About Us" [ref=e29] [cursor=pointer]:
                - /url: /about
              - link "Pricing" [ref=e30] [cursor=pointer]:
                - /url: /pricing
          - generic [ref=e31]:
            - link "Playground" [ref=e32] [cursor=pointer]:
              - /url: https://playground.shunyalabs.ai/
              - img [ref=e33]
              - text: Playground
            - generic [ref=e35]:
              - button "Sign In" [ref=e36] [cursor=pointer]
              - link "Contact Sales" [ref=e37] [cursor=pointer]:
                - /url: /contact
      - generic [ref=e39]:
        - heading "Voice Stack for Global Media to Localise at Scale" [level=1] [ref=e40]
        - paragraph [ref=e41]: Dubbing, translation, subtitling, voice cloning, and lip sync—220+ languages, one platform, studio-grade quality
        - link "Contact Sales" [ref=e42] [cursor=pointer]:
          - /url: /contact
          - button "Contact Sales" [ref=e43]
      - generic [ref=e46]:
        - generic [ref=e47]: Global Language Coverage
        - generic [ref=e49]: Codeswitch Native Models
        - generic [ref=e51]: Fully Configurable Tools
      - generic [ref=e53]:
        - heading "Deep Language Coverage to Reach Every Viewer" [level=2] [ref=e54]
        - generic [ref=e58]:
          - generic [ref=e59]:
            - generic [ref=e60]:
              - img [ref=e62]
              - heading "Translate across formats" [level=3] [ref=e66]
            - paragraph [ref=e67]: Text-to-text, speech-to-speech, speech-to-text — translate in any direction.
          - generic [ref=e68]:
            - generic [ref=e69]:
              - img [ref=e71]
              - heading "Languages & dialects" [level=3] [ref=e73]
            - paragraph [ref=e74]: 220+ languages with dialect-level precision across regions.
          - generic [ref=e75]:
            - generic [ref=e76]:
              - img [ref=e78]
              - heading "Native codeswitch AI" [level=3] [ref=e80]
            - paragraph [ref=e81]: Real-world code switching like Hinglish, Tanglish, Arabizi.
          - generic [ref=e82]:
            - generic [ref=e83]:
              - img [ref=e85]
              - heading "Foundation models" [level=3] [ref=e87]
            - paragraph [ref=e88]: 220+ languages with dialect-level precision (LatAm vs European Spanish, Gulf vs Levantine Arabic)
      - generic [ref=e90]:
        - heading "Turn Content into Searchable, Monetizable Assets" [level=2] [ref=e91]
        - generic [ref=e95]:
          - generic [ref=e96]:
            - generic [ref=e97]:
              - img [ref=e99]
              - heading "Speech Intelligence" [level=3] [ref=e101]
            - paragraph [ref=e102]: Scene segmentation, emotion arcs, and narrative beat detection.
          - generic [ref=e103]:
            - generic [ref=e104]:
              - img [ref=e106]
              - heading "Content generation" [level=3] [ref=e108]
            - paragraph [ref=e109]: Auto-generate highlights, trailers, and chaptered indexes.
          - generic [ref=e110]:
            - generic [ref=e111]:
              - img [ref=e113]
              - heading "Compliance at scale" [level=3] [ref=e116]
            - paragraph [ref=e117]: Ad suitability, compliance tagging, and multilingual metadata at scale.
          - generic [ref=e118]:
            - generic [ref=e119]:
              - img [ref=e121]
              - heading "Global discoverability" [level=3] [ref=e123]
            - paragraph [ref=e124]: Search inside video and audio, in any language.
      - generic [ref=e126]:
        - heading "Create Characters, not just Voiceovers" [level=2] [ref=e127]
        - generic [ref=e131]:
          - generic [ref=e132]:
            - generic [ref=e133]:
              - img [ref=e135]
              - heading "Configurable voices" [level=3] [ref=e138]
            - paragraph [ref=e139]: Design and modulate voices—adjust tone, age, accent, and personality in real time.
          - generic [ref=e140]:
            - generic [ref=e141]:
              - img [ref=e143]
              - heading "Script to audio" [level=3] [ref=e146]
            - paragraph [ref=e147]: Skip the recording studio—go from script to final audio instantly.
          - generic [ref=e148]:
            - generic [ref=e149]:
              - img [ref=e151]
              - heading "Emotion tagging" [level=3] [ref=e159]
            - paragraph [ref=e160]: Natural emotion tagging for high-fidelity, expressive output.
          - generic [ref=e161]:
            - generic [ref=e162]:
              - img [ref=e164]
              - heading "Character consistency" [level=3] [ref=e167]
            - paragraph [ref=e168]: Save and reuse character voices across projects, episodes, and languages.
      - generic [ref=e170]:
        - heading "Dubbing, Cloning and Lip Sync that Sounds Natural, not Synthetic" [level=2] [ref=e171]
        - generic [ref=e175]:
          - generic [ref=e176]:
            - generic [ref=e177]:
              - img [ref=e179]
              - heading "Advanced dubbing" [level=3] [ref=e183]
            - paragraph [ref=e184]: Voice-matched dubbing that preserves emotion, tone, and speaker identity.
          - generic [ref=e185]:
            - generic [ref=e186]:
              - img [ref=e188]
              - heading "Accurate lip sync" [level=3] [ref=e191]
            - paragraph [ref=e192]: Phoneme-accurate lip sync for film, animation, games, and avatars.
          - generic [ref=e193]:
            - generic [ref=e194]:
              - img [ref=e196]
              - heading "Low-shot cloning" [level=3] [ref=e199]
            - paragraph [ref=e200]: Studio-quality clones from just minutes of audio.
          - generic [ref=e201]:
            - generic [ref=e202]:
              - img [ref=e204]
              - heading "Preserved accents" [level=3] [ref=e207]
            - paragraph [ref=e208]: Accent and identity preservation across languages.
      - generic [ref=e212]:
        - heading "Ready to Localise your Content at Scale?" [level=2] [ref=e213]
        - paragraph [ref=e214]: Skip stitching multiple vendors. Choose Shunya Lab's one stop solution to configure all your audio and speech intelligence needs across geographies.
        - link "Contact Sales" [ref=e216] [cursor=pointer]:
          - /url: /contact
    - contentinfo [ref=e217]:
      - generic [ref=e218]:
        - generic [ref=e219]:
          - img "Shunya Labs" [ref=e220]
          - paragraph [ref=e221]: Shunya Labs, Inc.
        - generic [ref=e222]:
          - paragraph [ref=e223]: Product
          - list [ref=e224]:
            - listitem [ref=e225]:
              - link "Overview" [ref=e226] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e227]:
              - link "Models" [ref=e228] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e229]:
              - link "Voice Agents" [ref=e230] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e231]:
              - link "Speech Intelligence" [ref=e232] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e233]:
              - link "Audio Processing" [ref=e234] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e235]:
              - link "Deployment" [ref=e236] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e237]:
          - paragraph [ref=e238]: Models
          - list [ref=e239]:
            - listitem [ref=e240]:
              - link "Language Models" [ref=e241] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e242]:
              - link "Zero STT Indic" [ref=e243] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e244]:
              - link "Zero STT Codeswitch" [ref=e245] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e246]:
              - link "Specialised Models" [ref=e247] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e248]:
              - link "Zero STT Med" [ref=e249] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e250]:
              - link "On Device Models" [ref=e251] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e252]:
          - paragraph [ref=e253]: Solutions
          - list [ref=e254]:
            - listitem [ref=e255]:
              - link "Contact Centers" [ref=e256] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e257]:
              - link "Media & Entertainment" [ref=e258] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e259]:
              - link "Healthcare" [ref=e260] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e261]:
          - paragraph [ref=e262]: Resources
          - list [ref=e263]:
            - listitem [ref=e264]:
              - link "Blogs" [ref=e265] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e266]:
              - link "Benchmarks" [ref=e267] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e268]:
              - link "News & Media" [ref=e269] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e270]:
              - link "Patents" [ref=e271] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e272]:
              - link "Research" [ref=e273] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e275]:
          - link "Documentation" [ref=e276] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e278]:
          - listitem [ref=e279]:
            - link "About us" [ref=e280] [cursor=pointer]:
              - /url: /about
        - list [ref=e282]:
          - listitem [ref=e283]:
            - link "Pricing" [ref=e284] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e285]:
        - paragraph [ref=e286]: Follow us on
        - generic [ref=e287]:
          - link [ref=e288] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e289]
          - link [ref=e291] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e292]
          - link [ref=e294] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e295]
          - link [ref=e297] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e298]
      - generic [ref=e300]:
        - paragraph [ref=e301]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e302]:
          - link "Privacy" [ref=e303] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e304] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e305] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e306] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e307] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e308]
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