# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/media-entertainment/design.spec.js >> Solutions - Media & Entertainment design compliance >> Figma design compliance
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
      - generic [ref=e37]:
        - heading "Voice Stack for Global Media to Localise at Scale" [level=1] [ref=e38]
        - paragraph [ref=e39]: Dubbing, translation, subtitling, voice cloning, and lip sync—220+ languages, one platform, studio-grade quality
        - link "Contact Sales" [ref=e40] [cursor=pointer]:
          - /url: /contact
          - button "Contact Sales" [ref=e41]
      - generic [ref=e44]:
        - generic [ref=e45]: Global Language Coverage
        - generic [ref=e47]: Codeswitch Native Models
        - generic [ref=e49]: Fully Configurable Tools
      - generic [ref=e51]:
        - heading "Deep Language Coverage to Reach Every Viewer" [level=2] [ref=e52]
        - generic [ref=e56]:
          - generic [ref=e57]:
            - generic [ref=e58]:
              - img [ref=e60]
              - heading "Translate across formats" [level=3] [ref=e64]
            - paragraph [ref=e65]: Text-to-text, speech-to-speech, speech-to-text — translate in any direction.
          - generic [ref=e66]:
            - generic [ref=e67]:
              - img [ref=e69]
              - heading "Languages & dialects" [level=3] [ref=e71]
            - paragraph [ref=e72]: 220+ languages with dialect-level precision across regions.
          - generic [ref=e73]:
            - generic [ref=e74]:
              - img [ref=e76]
              - heading "Native codeswitch AI" [level=3] [ref=e78]
            - paragraph [ref=e79]: Real-world code switching like Hinglish, Tanglish, Arabizi.
          - generic [ref=e80]:
            - generic [ref=e81]:
              - img [ref=e83]
              - heading "Foundation models" [level=3] [ref=e85]
            - paragraph [ref=e86]: 220+ languages with dialect-level precision (LatAm vs European Spanish, Gulf vs Levantine Arabic)
      - generic [ref=e88]:
        - heading "Turn Content into Searchable, Monetizable Assets" [level=2] [ref=e89]
        - generic [ref=e93]:
          - generic [ref=e94]:
            - generic [ref=e95]:
              - img [ref=e97]
              - heading "Speech Intelligence" [level=3] [ref=e99]
            - paragraph [ref=e100]: Scene segmentation, emotion arcs, and narrative beat detection.
          - generic [ref=e101]:
            - generic [ref=e102]:
              - img [ref=e104]
              - heading "Content generation" [level=3] [ref=e106]
            - paragraph [ref=e107]: Auto-generate highlights, trailers, and chaptered indexes.
          - generic [ref=e108]:
            - generic [ref=e109]:
              - img [ref=e111]
              - heading "Compliance at scale" [level=3] [ref=e114]
            - paragraph [ref=e115]: Ad suitability, compliance tagging, and multilingual metadata at scale.
          - generic [ref=e116]:
            - generic [ref=e117]:
              - img [ref=e119]
              - heading "Global discoverability" [level=3] [ref=e121]
            - paragraph [ref=e122]: Search inside video and audio, in any language.
      - generic [ref=e124]:
        - heading "Create Characters, not just Voiceovers" [level=2] [ref=e125]
        - generic [ref=e129]:
          - generic [ref=e130]:
            - generic [ref=e131]:
              - img [ref=e133]
              - heading "Configurable voices" [level=3] [ref=e136]
            - paragraph [ref=e137]: Design and modulate voices—adjust tone, age, accent, and personality in real time.
          - generic [ref=e138]:
            - generic [ref=e139]:
              - img [ref=e141]
              - heading "Script to audio" [level=3] [ref=e144]
            - paragraph [ref=e145]: Skip the recording studio—go from script to final audio instantly.
          - generic [ref=e146]:
            - generic [ref=e147]:
              - img [ref=e149]
              - heading "Emotion tagging" [level=3] [ref=e157]
            - paragraph [ref=e158]: Natural emotion tagging for high-fidelity, expressive output.
          - generic [ref=e159]:
            - generic [ref=e160]:
              - img [ref=e162]
              - heading "Character consistency" [level=3] [ref=e165]
            - paragraph [ref=e166]: Save and reuse character voices across projects, episodes, and languages.
      - generic [ref=e168]:
        - heading "Dubbing, Cloning and Lip Sync that Sounds Natural, not Synthetic" [level=2] [ref=e169]
        - generic [ref=e173]:
          - generic [ref=e174]:
            - generic [ref=e175]:
              - img [ref=e177]
              - heading "Advanced dubbing" [level=3] [ref=e181]
            - paragraph [ref=e182]: Voice-matched dubbing that preserves emotion, tone, and speaker identity.
          - generic [ref=e183]:
            - generic [ref=e184]:
              - img [ref=e186]
              - heading "Accurate lip sync" [level=3] [ref=e189]
            - paragraph [ref=e190]: Phoneme-accurate lip sync for film, animation, games, and avatars.
          - generic [ref=e191]:
            - generic [ref=e192]:
              - img [ref=e194]
              - heading "Low-shot cloning" [level=3] [ref=e197]
            - paragraph [ref=e198]: Studio-quality clones from just minutes of audio.
          - generic [ref=e199]:
            - generic [ref=e200]:
              - img [ref=e202]
              - heading "Preserved accents" [level=3] [ref=e205]
            - paragraph [ref=e206]: Accent and identity preservation across languages.
      - generic [ref=e210]:
        - heading "Ready to Localise your Content at Scale?" [level=2] [ref=e211]
        - paragraph [ref=e212]: Skip stitching multiple vendors. Choose Shunya Lab's one stop solution to configure all your audio and speech intelligence needs across geographies.
        - link "Contact Sales" [ref=e214] [cursor=pointer]:
          - /url: /contact
    - contentinfo [ref=e215]:
      - generic [ref=e216]:
        - generic [ref=e217]:
          - img "Shunya Labs" [ref=e218]
          - paragraph [ref=e219]: Shunya Labs, Inc.
        - generic [ref=e220]:
          - paragraph [ref=e221]: Product
          - list [ref=e222]:
            - listitem [ref=e223]:
              - link "Overview" [ref=e224] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e225]:
              - link "Models" [ref=e226] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e227]:
              - link "Voice Agents" [ref=e228] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e229]:
              - link "Speech Intelligence" [ref=e230] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e231]:
              - link "Audio Processing" [ref=e232] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e233]:
              - link "Deployment" [ref=e234] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e235]:
          - paragraph [ref=e236]: Models
          - list [ref=e237]:
            - listitem [ref=e238]:
              - link "Language Models" [ref=e239] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e240]:
              - link "Zero STT Indic" [ref=e241] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e242]:
              - link "Zero STT Codeswitch" [ref=e243] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e244]:
              - link "Specialised Models" [ref=e245] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e246]:
              - link "Zero STT Med" [ref=e247] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e248]:
              - link "On Device Models" [ref=e249] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e250]:
          - paragraph [ref=e251]: Solutions
          - list [ref=e252]:
            - listitem [ref=e253]:
              - link "Contact Centers" [ref=e254] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e255]:
              - link "Media & Entertainment" [ref=e256] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e257]:
              - link "Healthcare" [ref=e258] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e259]:
          - paragraph [ref=e260]: Resources
          - list [ref=e261]:
            - listitem [ref=e262]:
              - link "Blogs" [ref=e263] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e264]:
              - link "Benchmarks" [ref=e265] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e266]:
              - link "News & Media" [ref=e267] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e268]:
              - link "Patents" [ref=e269] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e270]:
              - link "Research" [ref=e271] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e273]:
          - link "Documentation" [ref=e274] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e276]:
          - listitem [ref=e277]:
            - link "About us" [ref=e278] [cursor=pointer]:
              - /url: /about
        - list [ref=e280]:
          - listitem [ref=e281]:
            - link "Pricing" [ref=e282] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e283]:
        - paragraph [ref=e284]: Follow us on
        - generic [ref=e285]:
          - link [ref=e286] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e287]
          - link [ref=e289] [cursor=pointer]:
            - /url: https://www.facebook.com/profile.php?id=61577801651308
            - img [ref=e290]
          - link [ref=e292] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e293]
          - link [ref=e295] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e296]
      - generic [ref=e298]:
        - paragraph [ref=e299]: © 2026 Shunya Labs, Inc. All rights reserved.
        - generic [ref=e300]:
          - link "Privacy" [ref=e301] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e302] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e303] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e304] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e305] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e306]
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