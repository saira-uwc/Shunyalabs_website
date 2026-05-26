# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/contact/contact/contact-form.spec.js >> Contact — lead form >> Contact Sales → contact page → fill form → submit shows confirmation
- Location: tests/modules/contact/contact/contact-form.spec.js:32:3

# Error details

```
TypeError: contact.waitForSuccessToastVisible is not a function
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
          - button "☰" [ref=e8] [cursor=pointer]
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
      - generic [ref=e9]:
        - generic [ref=e10]:
          - paragraph [ref=e11]: Connect with us
          - heading "Speak with an expert" [level=1] [ref=e12]
        - generic [ref=e13]:
          - generic [ref=e14]:
            - heading "Our Offices" [level=2] [ref=e15]
            - generic [ref=e16]:
              - generic [ref=e17]:
                - img "USA flag" [ref=e19]
                - heading "USA" [level=3] [ref=e20]
                - paragraph [ref=e21]: 2810 N Church Street, Wilmington, Delaware 19802, USA
                - paragraph
              - generic [ref=e22]:
                - img "Gurgaon, IN flag" [ref=e24]
                - heading "Gurgaon, IN" [level=3] [ref=e25]
                - paragraph [ref=e26]: 5th Floor, DLF Two Horizon Centre, Sector 43, Gurugram, Haryana 122009
                - paragraph [ref=e27]: +91 99713 41448
              - generic [ref=e28]:
                - img "Singapore flag" [ref=e30]
                - heading "Singapore" [level=3] [ref=e31]
                - paragraph [ref=e32]: "133 Cecil street #14-01 keck Seng Tower, Singapore - 069535"
                - paragraph
          - generic [ref=e34]:
            - generic [ref=e35]:
              - generic [ref=e36]: Name *
              - textbox [ref=e37]
            - generic [ref=e38]:
              - generic [ref=e39]:
                - generic [ref=e40]: Work Email *
                - textbox [ref=e41]
              - generic [ref=e42]:
                - generic [ref=e43]: Phone Number *
                - textbox [ref=e44]
            - generic [ref=e45]:
              - generic [ref=e46]: Message *
              - textbox [ref=e47]
            - generic [ref=e48]:
              - generic [ref=e49] [cursor=pointer]:
                - checkbox "I agree to receive marketing communications from Shunya Labs." [ref=e51]
                - generic [ref=e52]: I agree to receive marketing communications from Shunya Labs.
              - generic [ref=e53] [cursor=pointer]:
                - checkbox "I agree to the Privacy Policy and Terms & Conditions. *" [ref=e55]
                - generic [ref=e56]:
                  - text: I agree to the
                  - link "Privacy Policy" [ref=e57]:
                    - /url: https://www.shunyalabs.ai/privacy-policy
                  - text: and
                  - link "Terms & Conditions" [ref=e58]:
                    - /url: https://www.shunyalabs.ai/terms-conditions
                  - text: . *
            - button "Submit" [ref=e59] [cursor=pointer]
      - contentinfo [ref=e60]:
        - generic [ref=e61]:
          - generic [ref=e62]:
            - img "Shunya Labs" [ref=e63]
            - paragraph [ref=e64]: Shunya Labs, Inc.
          - generic [ref=e65]:
            - paragraph [ref=e66]: Product
            - list [ref=e67]:
              - listitem [ref=e68]:
                - link "Overview" [ref=e69] [cursor=pointer]:
                  - /url: /overview
              - listitem [ref=e70]:
                - link "Models" [ref=e71] [cursor=pointer]:
                  - /url: /models-page
              - listitem [ref=e72]:
                - link "Voice Agents" [ref=e73] [cursor=pointer]:
                  - /url: /voice-agent
              - listitem [ref=e74]:
                - link "Speech Intelligence" [ref=e75] [cursor=pointer]:
                  - /url: /speech-intelligence-page
              - listitem [ref=e76]:
                - link "Audio Processing" [ref=e77] [cursor=pointer]:
                  - /url: /audio-processing
              - listitem [ref=e78]:
                - link "Deployment" [ref=e79] [cursor=pointer]:
                  - /url: /deployment
          - generic [ref=e80]:
            - paragraph [ref=e81]: Models
            - list [ref=e82]:
              - listitem [ref=e83]:
                - link "Language Models" [ref=e84] [cursor=pointer]:
                  - /url: /language-models
              - listitem [ref=e85]:
                - link "Zero STT Indic" [ref=e86] [cursor=pointer]:
                  - /url: /zero-indic
              - listitem [ref=e87]:
                - link "Zero STT Codeswitch" [ref=e88] [cursor=pointer]:
                  - /url: /zero-code-switch
              - listitem [ref=e89]:
                - link "Specialised Models" [ref=e90] [cursor=pointer]:
                  - /url: /domain-specialisation
              - listitem [ref=e91]:
                - link "Zero STT Med" [ref=e92] [cursor=pointer]:
                  - /url: /zero-med
              - listitem [ref=e93]:
                - link "On Device Models" [ref=e94] [cursor=pointer]:
                  - /url: /on-device-models
          - generic [ref=e95]:
            - paragraph [ref=e96]: Solutions
            - list [ref=e97]:
              - listitem [ref=e98]:
                - link "Contact Centers" [ref=e99] [cursor=pointer]:
                  - /url: /contact-centers
              - listitem [ref=e100]:
                - link "Media & Entertainment" [ref=e101] [cursor=pointer]:
                  - /url: /media-entertainment
              - listitem [ref=e102]:
                - link "Healthcare" [ref=e103] [cursor=pointer]:
                  - /url: /healthcare
          - generic [ref=e104]:
            - paragraph [ref=e105]: Resources
            - list [ref=e106]:
              - listitem [ref=e107]:
                - link "Blogs" [ref=e108] [cursor=pointer]:
                  - /url: /blog
              - listitem [ref=e109]:
                - link "Benchmarks" [ref=e110] [cursor=pointer]:
                  - /url: /benchmarks
              - listitem [ref=e111]:
                - link "News & Media" [ref=e112] [cursor=pointer]:
                  - /url: /media
              - listitem [ref=e113]:
                - link "Patents" [ref=e114] [cursor=pointer]:
                  - /url: /patents
              - listitem [ref=e115]:
                - link "Research" [ref=e116] [cursor=pointer]:
                  - /url: /research
          - paragraph [ref=e118]:
            - link "Documentation" [ref=e119] [cursor=pointer]:
              - /url: https://docs.shunyalabs.ai/overview
          - list [ref=e121]:
            - listitem [ref=e122]:
              - link "About us" [ref=e123] [cursor=pointer]:
                - /url: /about
          - list [ref=e125]:
            - listitem [ref=e126]:
              - link "Pricing" [ref=e127] [cursor=pointer]:
                - /url: /pricing
        - generic [ref=e128]:
          - paragraph [ref=e129]: Follow us on
          - generic [ref=e130]:
            - link [ref=e131] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/shunya-labs-ai/
              - img [ref=e132]
            - link [ref=e134] [cursor=pointer]:
              - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
              - img [ref=e135]
            - link [ref=e137] [cursor=pointer]:
              - /url: https://www.instagram.com/shunyalabsai/
              - img [ref=e138]
            - link [ref=e140] [cursor=pointer]:
              - /url: https://x.com/ShunyaLabsAI
              - img [ref=e141]
        - generic [ref=e143]:
          - paragraph [ref=e144]: © 2026 Shunya Labs Inc. All rights reserved.
          - generic [ref=e145]:
            - link "Privacy" [ref=e146] [cursor=pointer]:
              - /url: /privacy-policy
            - link "Terms" [ref=e147] [cursor=pointer]:
              - /url: /terms-conditions
            - link "Security" [ref=e148] [cursor=pointer]:
              - /url: /security-policy
            - link "General License" [ref=e149] [cursor=pointer]:
              - /url: /general-rail-m-license
            - link "Custom License" [ref=e150] [cursor=pointer]:
              - /url: /shunya-labs-custom-model-rail-m-license
    - status [ref=e156]: We have received your response. We’ll contact you shortly. Thank you!
  - alert [ref=e157]
  - iframe [ref=e160]:
    - generic [ref=f1e6]:
      - text: protected by
      - strong [ref=f1e7]: reCAPTCHA
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import { HomepagePage } from '../../../../pages/homepage/homepage.page.js';
  3  | import { ContactPage } from '../../../../pages/contact/contact.page.js';
  4  | import { createResultWriter } from '../../../../utils/result-writer.js';
  5  | 
  6  | /**
  7  |  * Real POSTs to `/api/send-mail` by default so failures (reCAPTCHA, server errors) match
  8  |  * production and the test cannot pass on a green mock while the site shows an error toast.
  9  |  *
  10 |  * CI cannot complete reCAPTCHA — set CONTACT_MAIL_MOCK=true (see scheduled-tests workflow)
  11 |  * to stub a successful API only for that environment.
  12 |  */
  13 | function contactMailMockEnabled() {
  14 |   const v = process.env.CONTACT_MAIL_MOCK;
  15 |   return v === 'true' || v === '1';
  16 | }
  17 | 
  18 | test.describe('Contact — lead form', () => {
  19 |   test.beforeEach(async ({ page }) => {
  20 |     if (!contactMailMockEnabled()) {
  21 |       return;
  22 |     }
  23 |     await page.route('**/api/send-mail', async (route) => {
  24 |       await route.fulfill({
  25 |         status: 200,
  26 |         contentType: 'application/json',
  27 |         body: JSON.stringify({ success: true, message: 'ok' }),
  28 |       });
  29 |     });
  30 |   });
  31 | 
  32 |   test('Contact Sales → contact page → fill form → submit shows confirmation', async ({ page }) => {
  33 |     const homepage = new HomepagePage(page);
  34 |     const contact = new ContactPage(page);
  35 |     const { writeResult } = await createResultWriter({
  36 |       moduleName: 'Contact',
  37 |       reportFileName: 'module-actions-report.csv',
  38 |     });
  39 | 
  40 |     await homepage.open();
  41 |     await homepage.navigateToContactViaContactSalesLink();
  42 |     await expect(page).toHaveURL(/\/contact/);
  43 | 
  44 |     await contact.fillLeadForm({
  45 |       name: 'Automated Test User',
  46 |       email: 'automated-test@example.com',
  47 |       phone: '+15555550123',
  48 |       message: 'Playwright automation — please ignore.',
  49 |     });
  50 |     await contact.setLeadFormConsents({ agreeMarketing: true, agreeTerms: true });
  51 | 
  52 |     const sendMailDone = contact.waitForLeadFormSubmissionResponse();
  53 |     await contact.submitLeadForm();
  54 |     const sendMailRes = await sendMailDone;
  55 | 
  56 |     await contact.assertLeadCaptureApiSucceeded(sendMailRes);
> 57 |     await contact.waitForSuccessToastVisible({ timeout: 15_000 });
     |                   ^ TypeError: contact.waitForSuccessToastVisible is not a function
  58 | 
  59 |     const note = contactMailMockEnabled() ? 'CONTACT_MAIL_MOCK' : 'live send-mail';
  60 |     await writeResult('Contact Sales lead form', 'PASS', `Success toast + API ok (${note})`);
  61 |   });
  62 | });
  63 | 
```