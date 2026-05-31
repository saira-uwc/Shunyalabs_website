# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/contact/contact/contact-form.spec.js >> Contact — lead form >> Contact Sales → contact page → fill form → submit shows confirmation
- Location: tests/modules/contact/contact/contact-form.spec.js:39:3

# Error details

```
Error: Lead form send-mail did not succeed (HTTP 403). API: reCAPTCHA verification failed.. The site should show an error toast for this; fix the integration or set CONTACT_MAIL_MOCK=true only for CI/smoke.
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
              - textbox [ref=e37]: Automated Test User
            - generic [ref=e38]:
              - generic [ref=e39]:
                - generic [ref=e40]: Work Email *
                - textbox [ref=e41]: automated-test@example.com
              - generic [ref=e42]:
                - generic [ref=e43]: Phone Number *
                - textbox [ref=e44]: "+15555550123"
            - generic [ref=e45]:
              - generic [ref=e46]: Message *
              - textbox [ref=e47]: Playwright automation — please ignore.
            - generic [ref=e48]:
              - generic [ref=e49] [cursor=pointer]:
                - generic [ref=e50]:
                  - checkbox "I agree to receive marketing communications from Shunya Labs." [checked] [ref=e51]
                  - img [ref=e52]
                - generic [ref=e54]: I agree to receive marketing communications from Shunya Labs.
              - generic [ref=e55] [cursor=pointer]:
                - generic [ref=e56]:
                  - checkbox "I agree to the Privacy Policy and Terms & Conditions. *" [checked] [ref=e57]
                  - img [ref=e58]
                - generic [ref=e60]:
                  - text: I agree to the
                  - link "Privacy Policy" [ref=e61]:
                    - /url: https://www.shunyalabs.ai/privacy-policy
                  - text: and
                  - link "Terms & Conditions" [ref=e62]:
                    - /url: https://www.shunyalabs.ai/terms-conditions
                  - text: . *
            - button "Submit" [ref=e63] [cursor=pointer]
      - contentinfo [ref=e64]:
        - generic [ref=e65]:
          - generic [ref=e66]:
            - img "Shunya Labs" [ref=e67]
            - paragraph [ref=e68]: Shunya Labs, Inc.
          - generic [ref=e69]:
            - paragraph [ref=e70]: Product
            - list [ref=e71]:
              - listitem [ref=e72]:
                - link "Overview" [ref=e73] [cursor=pointer]:
                  - /url: /overview
              - listitem [ref=e74]:
                - link "Models" [ref=e75] [cursor=pointer]:
                  - /url: /models-page
              - listitem [ref=e76]:
                - link "Voice Agents" [ref=e77] [cursor=pointer]:
                  - /url: /voice-agent
              - listitem [ref=e78]:
                - link "Speech Intelligence" [ref=e79] [cursor=pointer]:
                  - /url: /speech-intelligence-page
              - listitem [ref=e80]:
                - link "Audio Processing" [ref=e81] [cursor=pointer]:
                  - /url: /audio-processing
              - listitem [ref=e82]:
                - link "Deployment" [ref=e83] [cursor=pointer]:
                  - /url: /deployment
          - generic [ref=e84]:
            - paragraph [ref=e85]: Models
            - list [ref=e86]:
              - listitem [ref=e87]:
                - link "Language Models" [ref=e88] [cursor=pointer]:
                  - /url: /language-models
              - listitem [ref=e89]:
                - link "Zero STT Indic" [ref=e90] [cursor=pointer]:
                  - /url: /zero-indic
              - listitem [ref=e91]:
                - link "Zero STT Codeswitch" [ref=e92] [cursor=pointer]:
                  - /url: /zero-code-switch
              - listitem [ref=e93]:
                - link "Specialised Models" [ref=e94] [cursor=pointer]:
                  - /url: /domain-specialisation
              - listitem [ref=e95]:
                - link "Zero STT Med" [ref=e96] [cursor=pointer]:
                  - /url: /zero-med
              - listitem [ref=e97]:
                - link "On Device Models" [ref=e98] [cursor=pointer]:
                  - /url: /on-device-models
          - generic [ref=e99]:
            - paragraph [ref=e100]: Solutions
            - list [ref=e101]:
              - listitem [ref=e102]:
                - link "Contact Centers" [ref=e103] [cursor=pointer]:
                  - /url: /contact-centers
              - listitem [ref=e104]:
                - link "Media & Entertainment" [ref=e105] [cursor=pointer]:
                  - /url: /media-entertainment
              - listitem [ref=e106]:
                - link "Healthcare" [ref=e107] [cursor=pointer]:
                  - /url: /healthcare
          - generic [ref=e108]:
            - paragraph [ref=e109]: Resources
            - list [ref=e110]:
              - listitem [ref=e111]:
                - link "Blogs" [ref=e112] [cursor=pointer]:
                  - /url: /blog
              - listitem [ref=e113]:
                - link "Benchmarks" [ref=e114] [cursor=pointer]:
                  - /url: /benchmarks
              - listitem [ref=e115]:
                - link "News & Media" [ref=e116] [cursor=pointer]:
                  - /url: /media
              - listitem [ref=e117]:
                - link "Patents" [ref=e118] [cursor=pointer]:
                  - /url: /patents
              - listitem [ref=e119]:
                - link "Research" [ref=e120] [cursor=pointer]:
                  - /url: /research
          - paragraph [ref=e122]:
            - link "Documentation" [ref=e123] [cursor=pointer]:
              - /url: https://docs.shunyalabs.ai/overview
          - list [ref=e125]:
            - listitem [ref=e126]:
              - link "About us" [ref=e127] [cursor=pointer]:
                - /url: /about
          - list [ref=e129]:
            - listitem [ref=e130]:
              - link "Pricing" [ref=e131] [cursor=pointer]:
                - /url: /pricing
        - generic [ref=e132]:
          - paragraph [ref=e133]: Follow us on
          - generic [ref=e134]:
            - link [ref=e135] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/shunya-labs-ai/
              - img [ref=e136]
            - link [ref=e138] [cursor=pointer]:
              - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
              - img [ref=e139]
            - link [ref=e141] [cursor=pointer]:
              - /url: https://www.instagram.com/shunyalabsai/
              - img [ref=e142]
            - link [ref=e144] [cursor=pointer]:
              - /url: https://x.com/ShunyaLabsAI
              - img [ref=e145]
        - generic [ref=e147]:
          - paragraph [ref=e148]: © 2026 Shunya Labs Inc. All rights reserved.
          - generic [ref=e149]:
            - link "Privacy" [ref=e150] [cursor=pointer]:
              - /url: /privacy-policy
            - link "Terms" [ref=e151] [cursor=pointer]:
              - /url: /terms-conditions
            - link "Security" [ref=e152] [cursor=pointer]:
              - /url: /security-policy
            - link "General License" [ref=e153] [cursor=pointer]:
              - /url: /general-rail-m-license
            - link "Custom License" [ref=e154] [cursor=pointer]:
              - /url: /shunya-labs-custom-model-rail-m-license
    - status [ref=e160]: reCAPTCHA verification failed. Please try again.
  - alert [ref=e161]
  - iframe [ref=e164]:
    - generic [ref=f1e6]:
      - text: protected by
      - strong [ref=f1e7]: reCAPTCHA
```

# Test source

```ts
  26  |     if (agreeTerms) {
  27  |       await this.page.locator('input[name="agreeTerms"]').check();
  28  |     }
  29  |   }
  30  | 
  31  |   submitLeadForm() {
  32  |     return this.page.getByRole('button', { name: /^Submit$/ }).click();
  33  |   }
  34  | 
  35  |   /**
  36  |    * Resolved when the POST to send-mail completes (success or failure).
  37  |    */
  38  |   waitForLeadFormSubmissionResponse({ timeout = 30_000 } = {}) {
  39  |     return this.page.waitForResponse(
  40  |       (r) => r.url().includes('/api/send-mail') && r.request().method() === 'POST',
  41  |       { timeout }
  42  |     );
  43  |   }
  44  | 
  45  |   /**
  46  |    * Exact success toast copy from production (Screenshot / live site). Apostrophe may be ASCII
  47  |    * or Unicode RIGHT SINGLE QUOTATION MARK (U+2019) in “We’ll”.
  48  |    */
  49  |   expectedSuccessToastPattern() {
  50  |     return /We have received your response\.\s+We['\u2019]ll contact you shortly\.\s+Thank you!/i;
  51  |   }
  52  | 
  53  |   strictSuccessToastLocator() {
  54  |     const re = this.expectedSuccessToastPattern();
  55  |     const sonner = this.page.locator('[data-sonner-toast]').filter({ hasText: re });
  56  |     return sonner.or(this.page.getByText(re));
  57  |   }
  58  | 
  59  |   /** @deprecated Prefer strict matcher — kept for readability in logs */
  60  |   successToastLocator() {
  61  |     return this.strictSuccessToastLocator().first();
  62  |   }
  63  | 
  64  |   async waitForSuccessToastVisible({ timeout = 15_000 } = {}) {
  65  |     await this.strictSuccessToastLocator().first().waitFor({ state: 'visible', timeout });
  66  |   }
  67  | 
  68  |   /**
  69  |    * Fails when a typical error toast is visibly shown (Sonner markup or common failure copy).
  70  |    */
  71  |   async assertNoVisibleSubmissionErrorToast() {
  72  |     const ok = this.expectedSuccessToastPattern();
  73  |     const sonnerErr = this.page.locator('[data-sonner-toast][data-type="error"]');
  74  |     for (let i = 0; i < Math.min(await sonnerErr.count(), 10); i++) {
  75  |       const loc = sonnerErr.nth(i);
  76  |       if (await loc.isVisible()) {
  77  |         const text = await loc.innerText().catch(() => '');
  78  |         throw new Error(
  79  |           `Error toast appeared (expected success toaster only): "${text.trim().slice(0, 300)}"`
  80  |         );
  81  |       }
  82  |     }
  83  | 
  84  |     const failureCopy =
  85  |       /reCAPTCHA\s+verification\s+failed|Verification\s+failed\.?|Something went wrong|Failed to submit|Unable to (submit|send)|please try again|Network error|\b\d{3}\s+error\b/i;
  86  | 
  87  |     const matches = this.page.getByText(failureCopy);
  88  |     const max = Math.min(await matches.count(), 25);
  89  |     for (let i = 0; i < max; i++) {
  90  |       const loc = matches.nth(i);
  91  |       if (!(await loc.isVisible())) continue;
  92  |       const text = (await loc.innerText().catch(() => '')).replace(/\s+/g, ' ').trim();
  93  |       if (ok.test(text)) continue;
  94  |       throw new Error(`Failure UI text is visible after submit (expected success toaster only): "${text.slice(0, 300)}"`);
  95  |     }
  96  |   }
  97  | 
  98  |   /**
  99  |    * Pass only when the canonical success toaster is visible and no submission error toaster/text is visible.
  100 |    */
  101 |   async assertLeadFeedbackSuccessPresentationOnly({ toastTimeout = 15_000 } = {}) {
  102 |     await this.waitForSuccessToastVisible({ timeout: toastTimeout });
  103 |     await this.assertNoVisibleSubmissionErrorToast();
  104 |   }
  105 | 
  106 |   /**
  107 |    * Throws if send-mail HTTP status or JSON `success` is not a real success — matches what
  108 |    * production uses to decide success vs error toasts.
  109 |    */
  110 |   async assertLeadCaptureApiSucceeded(sendMailResponse) {
  111 |     const status = sendMailResponse.status();
  112 |     const raw = await sendMailResponse.text();
  113 |     let payload = {};
  114 |     try {
  115 |       payload = raw ? JSON.parse(raw) : {};
  116 |     } catch {
  117 |       payload = { success: false, message: raw ? `Non-JSON body: ${raw.slice(0, 200)}` : 'Empty body' };
  118 |     }
  119 | 
  120 |     const businessOk = payload && payload.success === true;
  121 |     if (!sendMailResponse.ok() || !businessOk) {
  122 |       const msg =
  123 |         typeof payload.message === 'string' && payload.message.length > 0
  124 |           ? payload.message
  125 |           : JSON.stringify(payload);
> 126 |       throw new Error(
      |             ^ Error: Lead form send-mail did not succeed (HTTP 403). API: reCAPTCHA verification failed.. The site should show an error toast for this; fix the integration or set CONTACT_MAIL_MOCK=true only for CI/smoke.
  127 |         `Lead form send-mail did not succeed (HTTP ${status}). API: ${msg}. ` +
  128 |           `The site should show an error toast for this; fix the integration or set CONTACT_MAIL_MOCK=true only for CI/smoke.`
  129 |       );
  130 |     }
  131 |   }
  132 | }
  133 | 
```