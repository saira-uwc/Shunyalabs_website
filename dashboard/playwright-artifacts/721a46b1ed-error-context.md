# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/solutions/media-entertainment/design.spec.js >> Solutions - Media & Entertainment design compliance >> Figma design compliance
- Location: tests/modules/solutions/media-entertainment/design.spec.js:13:3

# Error details

```
Error: [content] Page title: expected "AI Speech Technology for Studios, Broadcasters & Media Platforms | Shunya Labs" but got "AI Speech Technology for Media & Entertainment | Shunya Labs"

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
      - generic [ref=e35]:
        - heading "Voice Stack for Global Media to Localise at Scale" [level=1] [ref=e36]
        - paragraph [ref=e37]: Dubbing, translation, subtitling, voice cloning, and lip sync—220+ languages, one platform, studio-grade quality
        - link "Contact Sales" [ref=e38] [cursor=pointer]:
          - /url: /contact
          - button "Contact Sales" [ref=e39]
      - generic [ref=e42]:
        - generic [ref=e43]: Global Language Coverage
        - generic [ref=e45]: Codeswitch Native Models
        - generic [ref=e47]: Fully Configurable Tools
      - generic [ref=e49]:
        - heading "Deep Language Coverage to Reach Every Viewer" [level=2] [ref=e50]
        - generic [ref=e54]:
          - generic [ref=e55]:
            - generic [ref=e56]:
              - img [ref=e58]
              - heading "Translate across formats" [level=3] [ref=e62]
            - paragraph [ref=e63]: Text-to-text, speech-to-speech, speech-to-text — translate in any direction.
          - generic [ref=e64]:
            - generic [ref=e65]:
              - img [ref=e67]
              - heading "Languages & dialects" [level=3] [ref=e69]
            - paragraph [ref=e70]: 220+ languages with dialect-level precision across regions.
          - generic [ref=e71]:
            - generic [ref=e72]:
              - img [ref=e74]
              - heading "Native codeswitch AI" [level=3] [ref=e76]
            - paragraph [ref=e77]: Real-world code switching like Hinglish, Tanglish, Arabizi.
          - generic [ref=e78]:
            - generic [ref=e79]:
              - img [ref=e81]
              - heading "Foundation models" [level=3] [ref=e83]
            - paragraph [ref=e84]: 220+ languages with dialect-level precision (LatAm vs European Spanish, Gulf vs Levantine Arabic)
      - generic [ref=e86]:
        - heading "Turn Content into Searchable, Monetizable Assets" [level=2] [ref=e87]
        - generic [ref=e91]:
          - generic [ref=e92]:
            - generic [ref=e93]:
              - img [ref=e95]
              - heading "Speech Intelligence" [level=3] [ref=e97]
            - paragraph [ref=e98]: Scene segmentation, emotion arcs, and narrative beat detection.
          - generic [ref=e99]:
            - generic [ref=e100]:
              - img [ref=e102]
              - heading "Content generation" [level=3] [ref=e104]
            - paragraph [ref=e105]: Auto-generate highlights, trailers, and chaptered indexes.
          - generic [ref=e106]:
            - generic [ref=e107]:
              - img [ref=e109]
              - heading "Compliance at scale" [level=3] [ref=e112]
            - paragraph [ref=e113]: Ad suitability, compliance tagging, and multilingual metadata at scale.
          - generic [ref=e114]:
            - generic [ref=e115]:
              - img [ref=e117]
              - heading "Global discoverability" [level=3] [ref=e119]
            - paragraph [ref=e120]: Search inside video and audio, in any language.
      - generic [ref=e122]:
        - heading "Create Characters, not just Voiceovers" [level=2] [ref=e123]
        - generic [ref=e127]:
          - generic [ref=e128]:
            - generic [ref=e129]:
              - img [ref=e131]
              - heading "Configurable voices" [level=3] [ref=e134]
            - paragraph [ref=e135]: Design and modulate voices—adjust tone, age, accent, and personality in real time.
          - generic [ref=e136]:
            - generic [ref=e137]:
              - img [ref=e139]
              - heading "Script to audio" [level=3] [ref=e142]
            - paragraph [ref=e143]: Skip the recording studio—go from script to final audio instantly.
          - generic [ref=e144]:
            - generic [ref=e145]:
              - img [ref=e147]
              - heading "Emotion tagging" [level=3] [ref=e155]
            - paragraph [ref=e156]: Natural emotion tagging for high-fidelity, expressive output.
          - generic [ref=e157]:
            - generic [ref=e158]:
              - img [ref=e160]
              - heading "Character consistency" [level=3] [ref=e163]
            - paragraph [ref=e164]: Save and reuse character voices across projects, episodes, and languages.
      - generic [ref=e166]:
        - heading "Dubbing, Cloning and Lip Sync that Sounds Natural, not Synthetic" [level=2] [ref=e167]
        - generic [ref=e171]:
          - generic [ref=e172]:
            - generic [ref=e173]:
              - img [ref=e175]
              - heading "Advanced dubbing" [level=3] [ref=e179]
            - paragraph [ref=e180]: Voice-matched dubbing that preserves emotion, tone, and speaker identity.
          - generic [ref=e181]:
            - generic [ref=e182]:
              - img [ref=e184]
              - heading "Accurate lip sync" [level=3] [ref=e187]
            - paragraph [ref=e188]: Phoneme-accurate lip sync for film, animation, games, and avatars.
          - generic [ref=e189]:
            - generic [ref=e190]:
              - img [ref=e192]
              - heading "Low-shot cloning" [level=3] [ref=e195]
            - paragraph [ref=e196]: Studio-quality clones from just minutes of audio.
          - generic [ref=e197]:
            - generic [ref=e198]:
              - img [ref=e200]
              - heading "Preserved accents" [level=3] [ref=e203]
            - paragraph [ref=e204]: Accent and identity preservation across languages.
      - generic [ref=e208]:
        - heading "Ready to Localise your Content at Scale?" [level=2] [ref=e209]
        - paragraph [ref=e210]: Skip stitching multiple vendors. Choose Shunya Lab's one stop solution to configure all your audio and speech intelligence needs across geographies.
        - link "Contact Sales" [ref=e212] [cursor=pointer]:
          - /url: /contact
    - contentinfo [ref=e213]:
      - generic [ref=e214]:
        - generic [ref=e215]:
          - img "Shunya Labs" [ref=e216]
          - paragraph [ref=e217]: Shunya Labs, Inc.
        - generic [ref=e218]:
          - paragraph [ref=e219]: Product
          - list [ref=e220]:
            - listitem [ref=e221]:
              - link "Overview" [ref=e222] [cursor=pointer]:
                - /url: /overview
            - listitem [ref=e223]:
              - link "Models" [ref=e224] [cursor=pointer]:
                - /url: /models-page
            - listitem [ref=e225]:
              - link "Voice Agents" [ref=e226] [cursor=pointer]:
                - /url: /voice-agent
            - listitem [ref=e227]:
              - link "Speech Intelligence" [ref=e228] [cursor=pointer]:
                - /url: /speech-intelligence-page
            - listitem [ref=e229]:
              - link "Audio Processing" [ref=e230] [cursor=pointer]:
                - /url: /audio-processing
            - listitem [ref=e231]:
              - link "Deployment" [ref=e232] [cursor=pointer]:
                - /url: /deployment
        - generic [ref=e233]:
          - paragraph [ref=e234]: Models
          - list [ref=e235]:
            - listitem [ref=e236]:
              - link "Language Models" [ref=e237] [cursor=pointer]:
                - /url: /language-models
            - listitem [ref=e238]:
              - link "Zero STT Indic" [ref=e239] [cursor=pointer]:
                - /url: /zero-indic
            - listitem [ref=e240]:
              - link "Zero STT Codeswitch" [ref=e241] [cursor=pointer]:
                - /url: /zero-code-switch
            - listitem [ref=e242]:
              - link "Specialised Models" [ref=e243] [cursor=pointer]:
                - /url: /domain-specialisation
            - listitem [ref=e244]:
              - link "Zero STT Med" [ref=e245] [cursor=pointer]:
                - /url: /zero-med
            - listitem [ref=e246]:
              - link "On Device Models" [ref=e247] [cursor=pointer]:
                - /url: /on-device-models
        - generic [ref=e248]:
          - paragraph [ref=e249]: Solutions
          - list [ref=e250]:
            - listitem [ref=e251]:
              - link "Contact Centers" [ref=e252] [cursor=pointer]:
                - /url: /contact-centers
            - listitem [ref=e253]:
              - link "Media & Entertainment" [ref=e254] [cursor=pointer]:
                - /url: /media-entertainment
            - listitem [ref=e255]:
              - link "Healthcare" [ref=e256] [cursor=pointer]:
                - /url: /healthcare
        - generic [ref=e257]:
          - paragraph [ref=e258]: Resources
          - list [ref=e259]:
            - listitem [ref=e260]:
              - link "Blogs" [ref=e261] [cursor=pointer]:
                - /url: /blog
            - listitem [ref=e262]:
              - link "Benchmarks" [ref=e263] [cursor=pointer]:
                - /url: /benchmarks
            - listitem [ref=e264]:
              - link "News & Media" [ref=e265] [cursor=pointer]:
                - /url: /media
            - listitem [ref=e266]:
              - link "Patents" [ref=e267] [cursor=pointer]:
                - /url: /patents
            - listitem [ref=e268]:
              - link "Research" [ref=e269] [cursor=pointer]:
                - /url: /research
        - paragraph [ref=e271]:
          - link "Documentation" [ref=e272] [cursor=pointer]:
            - /url: https://docs.shunyalabs.ai/overview
        - list [ref=e274]:
          - listitem [ref=e275]:
            - link "About us" [ref=e276] [cursor=pointer]:
              - /url: /about
        - list [ref=e278]:
          - listitem [ref=e279]:
            - link "Pricing" [ref=e280] [cursor=pointer]:
              - /url: /pricing
      - generic [ref=e281]:
        - paragraph [ref=e282]: Follow us on
        - generic [ref=e283]:
          - link [ref=e284] [cursor=pointer]:
            - /url: https://www.linkedin.com/company/shunya-labs-ai/
            - img [ref=e285]
          - link [ref=e287] [cursor=pointer]:
            - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
            - img [ref=e288]
          - link [ref=e290] [cursor=pointer]:
            - /url: https://www.instagram.com/shunyalabsai/
            - img [ref=e291]
          - link [ref=e293] [cursor=pointer]:
            - /url: https://x.com/ShunyaLabsAI
            - img [ref=e294]
      - generic [ref=e296]:
        - paragraph [ref=e297]: © 2026 Shunya Labs Inc. All rights reserved.
        - generic [ref=e298]:
          - link "Privacy" [ref=e299] [cursor=pointer]:
            - /url: /privacy-policy
          - link "Terms" [ref=e300] [cursor=pointer]:
            - /url: /terms-conditions
          - link "Security" [ref=e301] [cursor=pointer]:
            - /url: /security-policy
          - link "General License" [ref=e302] [cursor=pointer]:
            - /url: /general-rail-m-license
          - link "Custom License" [ref=e303] [cursor=pointer]:
            - /url: /shunya-labs-custom-model-rail-m-license
  - alert [ref=e304]
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { pageRegistry } from '../../../../test-data/page-registry.js';
  3  | import { runDesignComplianceTest } from '../../../../utils/design-validator.js';
  4  | 
  5  | const pageEntry = pageRegistry.find(
  6  |   (page) => page.moduleKey === 'solutions' && page.slug === 'media-entertainment'
  7  | );
  8  | 
  9  | const moduleLabel = pageEntry?.moduleLabel || 'solutions';
  10 | const pageLabel = pageEntry?.pageLabel || 'media-entertainment';
  11 | 
  12 | test.describe(`${moduleLabel} - ${pageLabel} design compliance`, () => {
  13 |   test('Figma design compliance', async ({ page }) => {
  14 |     const failures = await runDesignComplianceTest({ page, pageEntry });
  15 | 
  16 |     for (const f of failures) {
  17 |       expect.soft(null, `[${f.section}] ${f.message}`).toBeTruthy();
  18 |     }
  19 | 
> 20 |     expect(failures.length, `${failures.length} design compliance issue(s) found`).toBe(0);
     |                                                                                    ^ Error: 1 design compliance issue(s) found
  21 |   });
  22 | });
  23 | 
```