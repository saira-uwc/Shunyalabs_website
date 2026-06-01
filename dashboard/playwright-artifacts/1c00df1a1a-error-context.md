# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/contact/contact/contact-form.spec.js >> Contact — lead form >> Contact Sales → contact page → fill form → submit shows confirmation
- Location: tests/modules/contact/contact/contact-form.spec.js:39:3

# Error details

```
TimeoutError: page.reload: Timeout 30000ms exceeded.
Call log:
  - waiting for navigation until "domcontentloaded"
    - navigated to "https://www.shunyalabs.ai/contact"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e4]:
    - generic [ref=e5]:
      - link "Shunya Labs Logo":
        - /url: /
        - img "Shunya Labs Logo"
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Product" [ref=e8]:
            - text: Product
            - img [ref=e9]
          - generic [ref=e13]:
            - generic [ref=e14]:
              - link "Overview High-level view of the Shunya Labs AI ecosystem" [ref=e15] [cursor=pointer]:
                - /url: /overview
                - generic [ref=e16]: Overview
                - generic [ref=e17]: High-level view of the Shunya Labs AI ecosystem
              - link "Models Explore detailed specifications of our AI models" [ref=e18] [cursor=pointer]:
                - /url: /models-page
                - generic [ref=e19]: Models
                - generic [ref=e20]: Explore detailed specifications of our AI models
              - link "Voice Agent Build intelligent conversational voice assistant workflows" [ref=e21] [cursor=pointer]:
                - /url: /voice-agent
                - generic [ref=e22]: Voice Agent
                - generic [ref=e23]: Build intelligent conversational voice assistant workflows
            - generic [ref=e24]:
              - link "Speech Intelligence Tools for speech analytics, insights, and automation" [ref=e25] [cursor=pointer]:
                - /url: /speech-intelligence-page
                - generic [ref=e26]: Speech Intelligence
                - generic [ref=e27]: Tools for speech analytics, insights, and automation
              - link "Audio Processing Enhancements, denoising, segmentation & signal processing" [ref=e28] [cursor=pointer]:
                - /url: /audio-processing
                - generic [ref=e29]: Audio Processing
                - generic [ref=e30]: Enhancements, denoising, segmentation & signal processing
              - link "Deployment Deploy models on cloud, on-prem, or edge infrastructure" [ref=e31] [cursor=pointer]:
                - /url: /deployment
                - generic [ref=e32]: Deployment
                - generic [ref=e33]: Deploy models on cloud, on-prem, or edge infrastructure
        - generic [ref=e34]:
          - button "Models" [ref=e35]:
            - text: Models
            - img [ref=e36]
          - generic [ref=e39]:
            - generic [ref=e40]:
              - link "Language Models Accurate models covering 200+ languages" [ref=e41] [cursor=pointer]:
                - /url: /language-models
                - generic [ref=e42]:
                  - generic [ref=e43]: Language Models
                  - generic [ref=e44]: Accurate models covering 200+ languages
                - img [ref=e46]
              - link "Specialised Models Domain specialised models" [ref=e48] [cursor=pointer]:
                - /url: /domain-specialisation
                - generic [ref=e49]:
                  - generic [ref=e50]: Specialised Models
                  - generic [ref=e51]: Domain specialised models
                - img [ref=e53]
              - link "Translation Models Real-time speech to speech translation" [ref=e55] [cursor=pointer]:
                - /url: /vak
                - generic [ref=e56]:
                  - generic [ref=e57]: Translation Models
                  - generic [ref=e58]: Real-time speech to speech translation
                - img [ref=e60]
              - link "On Device Models Offline and edge-friendly models" [ref=e62] [cursor=pointer]:
                - /url: /on-device-models
                - generic [ref=e63]:
                  - generic [ref=e64]: On Device Models
                  - generic [ref=e65]: Offline and edge-friendly models
            - generic [ref=e67]:
              - link "Zero STT Indic Accurate transcription for Indic languages" [ref=e68] [cursor=pointer]:
                - /url: /zero-indic
                - generic [ref=e69]: Zero STT Indic
                - generic [ref=e70]: Accurate transcription for Indic languages
              - link "Zero STT Codeswitch Native codeswitch transcriptions" [ref=e71] [cursor=pointer]:
                - /url: /zero-code-switch
                - generic [ref=e72]: Zero STT Codeswitch
                - generic [ref=e73]: Native codeswitch transcriptions
        - generic [ref=e74]:
          - button "Solutions" [ref=e75]:
            - text: Solutions
            - img [ref=e76]
          - generic [ref=e80]:
            - generic [ref=e81]:
              - link "Use Cases Explore real-world speech AI applications" [ref=e82] [cursor=pointer]:
                - /url: /use-cases
                - generic [ref=e83]: Use Cases
                - generic [ref=e84]: Explore real-world speech AI applications
              - link "Contact Centers Real-time intelligence for support & operations" [ref=e85] [cursor=pointer]:
                - /url: /contact-centers
                - generic [ref=e86]: Contact Centers
                - generic [ref=e87]: Real-time intelligence for support & operations
              - link "Media & Entertainment Automation for production & post-processing" [ref=e88] [cursor=pointer]:
                - /url: /media-entertainment
                - generic [ref=e89]: Media & Entertainment
                - generic [ref=e90]: Automation for production & post-processing
            - link "Healthcare Medical speech AI for clinical workflows" [ref=e92] [cursor=pointer]:
              - /url: /healthcare
              - generic [ref=e93]: Healthcare
              - generic [ref=e94]: Medical speech AI for clinical workflows
        - generic [ref=e95]:
          - button "Resources" [ref=e96]:
            - text: Resources
            - img [ref=e97]
          - generic [ref=e101]:
            - generic [ref=e102]:
              - link "Blog Insights, product updates & engineering articles" [ref=e103] [cursor=pointer]:
                - /url: /blog
                - generic [ref=e104]: Blog
                - generic [ref=e105]: Insights, product updates & engineering articles
              - link "Benchmarks Compare accuracy across datasets and models" [ref=e106] [cursor=pointer]:
                - /url: /benchmarks
                - generic [ref=e107]: Benchmarks
                - generic [ref=e108]: Compare accuracy across datasets and models
              - link "News & Media Press coverage, announcements & interviews" [ref=e109] [cursor=pointer]:
                - /url: /media
                - generic [ref=e110]: News & Media
                - generic [ref=e111]: Press coverage, announcements & interviews
            - generic [ref=e112]:
              - link "Patents Explore our patented research & innovations" [ref=e113] [cursor=pointer]:
                - /url: /patents
                - generic [ref=e114]: Patents
                - generic [ref=e115]: Explore our patented research & innovations
              - link "Research Read our latest research publications" [ref=e116] [cursor=pointer]:
                - /url: /research
                - generic [ref=e117]: Research
                - generic [ref=e118]: Read our latest research publications
        - link "Documentation" [ref=e119] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/overview
        - link "About Us" [ref=e120] [cursor=pointer]:
          - /url: /about
        - link "Pricing" [ref=e121] [cursor=pointer]:
          - /url: /pricing
      - link "Playground" [ref=e122] [cursor=pointer]:
        - /url: https://playground.shunyalabs.ai/
        - img [ref=e123]
        - text: Playground
      - generic [ref=e125]:
        - button "Sign In" [ref=e126]
        - link "Contact Sales" [ref=e127] [cursor=pointer]:
          - /url: /contact
      - button "☰" [ref=e128]
    - generic [ref=e130]:
      - button "Product" [ref=e132]:
        - text: Product
        - img [ref=e133]
      - button "Models" [ref=e136]:
        - text: Models
        - img [ref=e137]
      - button "Solutions" [ref=e140]:
        - text: Solutions
        - img [ref=e141]
      - button "Resources" [ref=e144]:
        - text: Resources
        - img [ref=e145]
      - link "Documentation" [ref=e147] [cursor=pointer]:
        - /url: https://docs.shunyalabs.ai/overview
      - link "About Us" [ref=e148] [cursor=pointer]:
        - /url: /about
      - link "Pricing" [ref=e149] [cursor=pointer]:
        - /url: /pricing
      - generic [ref=e150]:
        - link "Playground" [ref=e151] [cursor=pointer]:
          - /url: https://playground.shunyalabs.ai/
          - img [ref=e152]
          - text: Playground
        - button "Sign In" [ref=e154]
        - link "Contact Sales" [ref=e155] [cursor=pointer]:
          - /url: /contact
  - generic [ref=e156]:
    - generic [ref=e157]:
      - paragraph [ref=e158]: Connect with us
      - heading "Speak with an expert" [level=1] [ref=e159]
    - generic [ref=e160]:
      - generic [ref=e161]:
        - heading "Our Offices" [level=2] [ref=e162]
        - generic [ref=e163]:
          - generic [ref=e164]:
            - img "USA flag" [ref=e166]
            - heading "USA" [level=3] [ref=e167]
            - paragraph [ref=e168]: 2810 N Church Street, Wilmington, Delaware 19802, USA
            - paragraph
          - generic [ref=e169]:
            - img "Gurgaon, IN flag" [ref=e171]
            - heading "Gurgaon, IN" [level=3] [ref=e172]
            - paragraph [ref=e173]: 5th Floor, DLF Two Horizon Centre, Sector 43, Gurugram, Haryana 122009
            - paragraph [ref=e174]: +91 99713 41448
          - generic [ref=e175]:
            - img "Singapore flag" [ref=e177]
            - heading "Singapore" [level=3] [ref=e178]
            - paragraph [ref=e179]: "133 Cecil street #14-01 keck Seng Tower, Singapore - 069535"
            - paragraph
      - generic [ref=e181]:
        - generic [ref=e182]:
          - generic [ref=e183]: Name *
          - textbox [ref=e184]
        - generic [ref=e185]:
          - generic [ref=e186]:
            - generic [ref=e187]: Work Email *
            - textbox [ref=e188]
          - generic [ref=e189]:
            - generic [ref=e190]: Phone Number *
            - textbox [ref=e191]
        - generic [ref=e192]:
          - generic [ref=e193]: Message *
          - textbox [ref=e194]
        - generic [ref=e195]:
          - generic [ref=e196]:
            - generic [ref=e197]:
              - checkbox "I agree to receive marketing communications from Shunya Labs." [ref=e198]
              - img [ref=e199]
            - generic [ref=e201]: I agree to receive marketing communications from Shunya Labs.
          - generic [ref=e202]:
            - generic [ref=e203]:
              - checkbox "I agree to the Privacy Policy and Terms & Conditions. *" [ref=e204]
              - img [ref=e205]
            - generic [ref=e207]:
              - text: I agree to the
              - link "Privacy Policy" [ref=e208] [cursor=pointer]:
                - /url: https://www.shunyalabs.ai/privacy-policy
              - text: and
              - link "Terms & Conditions" [ref=e209] [cursor=pointer]:
                - /url: https://www.shunyalabs.ai/terms-conditions
              - text: . *
        - button "Submit" [ref=e210]
  - contentinfo [ref=e211]:
    - generic [ref=e212]:
      - generic [ref=e213]:
        - img "Shunya Labs" [ref=e214]
        - paragraph [ref=e215]: Shunya Labs, Inc.
      - generic [ref=e216]:
        - paragraph [ref=e217]: Product
        - list [ref=e218]:
          - listitem [ref=e219]:
            - link "Overview" [ref=e220] [cursor=pointer]:
              - /url: /overview
          - listitem [ref=e221]:
            - link "Models" [ref=e222] [cursor=pointer]:
              - /url: /models-page
          - listitem [ref=e223]:
            - link "Voice Agents" [ref=e224] [cursor=pointer]:
              - /url: /voice-agent
          - listitem [ref=e225]:
            - link "Speech Intelligence" [ref=e226] [cursor=pointer]:
              - /url: /speech-intelligence-page
          - listitem [ref=e227]:
            - link "Audio Processing" [ref=e228] [cursor=pointer]:
              - /url: /audio-processing
          - listitem [ref=e229]:
            - link "Deployment" [ref=e230] [cursor=pointer]:
              - /url: /deployment
      - generic [ref=e231]:
        - paragraph [ref=e232]: Models
        - list [ref=e233]:
          - listitem [ref=e234]:
            - link "Language Models" [ref=e235] [cursor=pointer]:
              - /url: /language-models
          - listitem [ref=e236]:
            - link "Zero STT Indic" [ref=e237] [cursor=pointer]:
              - /url: /zero-indic
          - listitem [ref=e238]:
            - link "Zero STT Codeswitch" [ref=e239] [cursor=pointer]:
              - /url: /zero-code-switch
          - listitem [ref=e240]:
            - link "Specialised Models" [ref=e241] [cursor=pointer]:
              - /url: /domain-specialisation
          - listitem [ref=e242]:
            - link "Zero STT Med" [ref=e243] [cursor=pointer]:
              - /url: /zero-med
          - listitem [ref=e244]:
            - link "On Device Models" [ref=e245] [cursor=pointer]:
              - /url: /on-device-models
      - generic [ref=e246]:
        - paragraph [ref=e247]: Solutions
        - list [ref=e248]:
          - listitem [ref=e249]:
            - link "Contact Centers" [ref=e250] [cursor=pointer]:
              - /url: /contact-centers
          - listitem [ref=e251]:
            - link "Media & Entertainment" [ref=e252] [cursor=pointer]:
              - /url: /media-entertainment
          - listitem [ref=e253]:
            - link "Healthcare" [ref=e254] [cursor=pointer]:
              - /url: /healthcare
      - generic [ref=e255]:
        - paragraph [ref=e256]: Resources
        - list [ref=e257]:
          - listitem [ref=e258]:
            - link "Blogs" [ref=e259] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e260]:
            - link "Benchmarks" [ref=e261] [cursor=pointer]:
              - /url: /benchmarks
          - listitem [ref=e262]:
            - link "News & Media" [ref=e263] [cursor=pointer]:
              - /url: /media
          - listitem [ref=e264]:
            - link "Patents" [ref=e265] [cursor=pointer]:
              - /url: /patents
          - listitem [ref=e266]:
            - link "Research" [ref=e267] [cursor=pointer]:
              - /url: /research
      - paragraph [ref=e269]:
        - link "Documentation" [ref=e270] [cursor=pointer]:
          - /url: https://docs.shunyalabs.ai/overview
      - list [ref=e272]:
        - listitem [ref=e273]:
          - link "About us" [ref=e274] [cursor=pointer]:
            - /url: /about
      - list [ref=e276]:
        - listitem [ref=e277]:
          - link "Pricing" [ref=e278] [cursor=pointer]:
            - /url: /pricing
    - generic [ref=e279]:
      - paragraph [ref=e280]: Follow us on
      - generic [ref=e281]:
        - link [ref=e282] [cursor=pointer]:
          - /url: https://www.linkedin.com/company/shunya-labs-ai/
          - img [ref=e283]
        - link [ref=e285] [cursor=pointer]:
          - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
          - img [ref=e286]
        - link [ref=e288] [cursor=pointer]:
          - /url: https://www.instagram.com/shunyalabsai/
          - img [ref=e289]
        - link [ref=e291] [cursor=pointer]:
          - /url: https://x.com/ShunyaLabsAI
          - img [ref=e292]
    - generic [ref=e294]:
      - paragraph [ref=e295]: © 2026 Shunya Labs Inc. All rights reserved.
      - generic [ref=e296]:
        - link "Privacy" [ref=e297] [cursor=pointer]:
          - /url: /privacy-policy
        - link "Terms" [ref=e298] [cursor=pointer]:
          - /url: /terms-conditions
        - link "Security" [ref=e299] [cursor=pointer]:
          - /url: /security-policy
        - link "General License" [ref=e300] [cursor=pointer]:
          - /url: /general-rail-m-license
        - link "Custom License" [ref=e301] [cursor=pointer]:
          - /url: /shunya-labs-custom-model-rail-m-license
```

# Test source

```ts
  196 |             .split('\n')
  197 |             .map((part) => normalize(part))
  198 |             .filter(Boolean);
  199 |           return {
  200 |             label: parts[0] || '',
  201 |             description: parts.slice(1).join(' '),
  202 |             href: link.getAttribute('href') || '',
  203 |           };
  204 |         })
  205 |         .filter((item) => item.label && item.description);
  206 |     }, menuLabel);
  207 |   }
  208 | 
  209 |   async getFooterMenuStructure() {
  210 |     return this.page.evaluate(() => {
  211 |       const normalize = (value) =>
  212 |         (value || '').replace(/\s+/g, ' ').replace(/\u00a0/g, ' ').trim();
  213 |       const isVisible = (element) => {
  214 |         if (!element) return false;
  215 |         const style = window.getComputedStyle(element);
  216 |         if (!style || style.visibility === 'hidden' || style.display === 'none') {
  217 |           return false;
  218 |         }
  219 |         const rect = element.getBoundingClientRect();
  220 |         return rect.width > 0 && rect.height > 0;
  221 |       };
  222 | 
  223 |       const footers = document.querySelectorAll('footer');
  224 |       const footer = footers[footers.length - 1];
  225 |       if (!footer) return { columns: {}, followUs: '', copyright: '' };
  226 | 
  227 |       const columns = {};
  228 |       const headings = Array.from(footer.querySelectorAll('p'))
  229 |         .filter((el) => isVisible(el))
  230 |         .map((el) => ({ element: el, text: normalize(el.textContent) }))
  231 |         .filter((item) => item.text.length > 0);
  232 | 
  233 |       for (const heading of headings) {
  234 |         const parent = heading.element.parentElement;
  235 |         if (!parent) continue;
  236 |         const list = parent.querySelector('ul');
  237 |         if (list) {
  238 |           const items = Array.from(list.querySelectorAll('li > a, li:not(:has(a))'))
  239 |             .filter((el) => isVisible(el))
  240 |             .map((el) => normalize(el.textContent))
  241 |             .filter(Boolean);
  242 |           if (items.length) {
  243 |             columns[heading.text] = items;
  244 |           }
  245 |         }
  246 |       }
  247 | 
  248 |       // Standalone links that appear as single-item columns
  249 |       const standaloneSelectors = [
  250 |         'a[href*="docs.shunyalabs"]',
  251 |         'a[href*="documentation"]',
  252 |         'a[href="/about"]',
  253 |         'a[href="/pricing"]',
  254 |       ];
  255 |       for (const sel of standaloneSelectors) {
  256 |         const link = footer.querySelector(sel);
  257 |         if (link && isVisible(link)) {
  258 |           const label = normalize(link.textContent);
  259 |           if (label && !columns[label]) {
  260 |             columns[label] = [label];
  261 |           }
  262 |         }
  263 |       }
  264 | 
  265 |       const followUs = Array.from(footer.querySelectorAll('p'))
  266 |         .map((el) => normalize(el.textContent))
  267 |         .find((text) => text.toLowerCase() === 'follow us on') || '';
  268 | 
  269 |       const copyright = Array.from(footer.querySelectorAll('p'))
  270 |         .map((el) => normalize(el.textContent))
  271 |         .find((text) => text.startsWith('©')) || '';
  272 | 
  273 |       return { columns, followUs, copyright };
  274 |     });
  275 |   }
  276 | 
  277 |   /**
  278 |    * Primary nav CTA — lands on the Contact Us page with the lead form.
  279 |    * Opens the drawer on small viewports first. Reloads once so Next.js App Router
  280 |    * navigation leaves inputs interactive (otherwise submit may never POST).
  281 |    */
  282 |   async navigateToContactViaContactSalesLink() {
  283 |     const nav = this.page.locator('nav');
  284 |     const width = this.page.viewportSize()?.width ?? 1920;
  285 | 
  286 |     if (width <= 768) {
  287 |       const menuToggle = nav.getByRole('button', { name: '☰' });
  288 |       await menuToggle.click();
  289 |     }
  290 | 
  291 |     const link = nav.getByRole('link', { name: 'Contact Sales', exact: true }).first();
  292 |     await link.scrollIntoViewIfNeeded();
  293 |     await link.click();
  294 | 
  295 |     await this.page.waitForURL(/\/contact(?:\?|$)/, { timeout: 15_000 });
> 296 |     await this.page.reload({ waitUntil: 'domcontentloaded' });
      |                     ^ TimeoutError: page.reload: Timeout 30000ms exceeded.
  297 |     await this.page.waitForTimeout(750);
  298 |     await this.page.waitForLoadState('networkidle', { timeout: 15_000 }).catch(() => {});
  299 |   }
  300 | }
  301 | 
```