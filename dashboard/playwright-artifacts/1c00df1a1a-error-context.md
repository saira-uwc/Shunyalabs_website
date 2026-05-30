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
      - generic [ref=e34]:
        - generic [ref=e35]:
          - paragraph [ref=e36]: Connect with us
          - heading "Speak with an expert" [level=1] [ref=e37]
        - generic [ref=e38]:
          - generic [ref=e39]:
            - heading "Our Offices" [level=2] [ref=e40]
            - generic [ref=e41]:
              - generic [ref=e42]:
                - img "USA flag" [ref=e44]
                - heading "USA" [level=3] [ref=e45]
                - paragraph [ref=e46]: 2810 N Church Street, Wilmington, Delaware 19802, USA
                - paragraph
              - generic [ref=e47]:
                - img "Gurgaon, IN flag" [ref=e49]
                - heading "Gurgaon, IN" [level=3] [ref=e50]
                - paragraph [ref=e51]: 5th Floor, DLF Two Horizon Centre, Sector 43, Gurugram, Haryana 122009
                - paragraph [ref=e52]: +91 99713 41448
              - generic [ref=e53]:
                - img "Singapore flag" [ref=e55]
                - heading "Singapore" [level=3] [ref=e56]
                - paragraph [ref=e57]: "133 Cecil street #14-01 keck Seng Tower, Singapore - 069535"
                - paragraph
          - generic [ref=e59]:
            - generic [ref=e60]:
              - generic [ref=e61]: Name *
              - textbox [ref=e62]: Automated Test User
            - generic [ref=e63]:
              - generic [ref=e64]:
                - generic [ref=e65]: Work Email *
                - textbox [ref=e66]: automated-test@example.com
              - generic [ref=e67]:
                - generic [ref=e68]: Phone Number *
                - textbox [ref=e69]: "+15555550123"
            - generic [ref=e70]:
              - generic [ref=e71]: Message *
              - textbox [ref=e72]: Playwright automation — please ignore.
            - generic [ref=e73]:
              - generic [ref=e74] [cursor=pointer]:
                - generic [ref=e75]:
                  - checkbox "I agree to receive marketing communications from Shunya Labs." [checked] [ref=e76]
                  - img [ref=e77]
                - generic [ref=e79]: I agree to receive marketing communications from Shunya Labs.
              - generic [ref=e80] [cursor=pointer]:
                - generic [ref=e81]:
                  - checkbox "I agree to the Privacy Policy and Terms & Conditions. *" [checked] [ref=e82]
                  - img [ref=e83]
                - generic [ref=e85]:
                  - text: I agree to the
                  - link "Privacy Policy" [ref=e86]:
                    - /url: https://www.shunyalabs.ai/privacy-policy
                  - text: and
                  - link "Terms & Conditions" [ref=e87]:
                    - /url: https://www.shunyalabs.ai/terms-conditions
                  - text: . *
            - button "Submit" [ref=e88] [cursor=pointer]
      - contentinfo [ref=e89]:
        - generic [ref=e90]:
          - generic [ref=e91]:
            - img "Shunya Labs" [ref=e92]
            - paragraph [ref=e93]: Shunya Labs, Inc.
          - generic [ref=e94]:
            - paragraph [ref=e95]: Product
            - list [ref=e96]:
              - listitem [ref=e97]:
                - link "Overview" [ref=e98] [cursor=pointer]:
                  - /url: /overview
              - listitem [ref=e99]:
                - link "Models" [ref=e100] [cursor=pointer]:
                  - /url: /models-page
              - listitem [ref=e101]:
                - link "Voice Agents" [ref=e102] [cursor=pointer]:
                  - /url: /voice-agent
              - listitem [ref=e103]:
                - link "Speech Intelligence" [ref=e104] [cursor=pointer]:
                  - /url: /speech-intelligence-page
              - listitem [ref=e105]:
                - link "Audio Processing" [ref=e106] [cursor=pointer]:
                  - /url: /audio-processing
              - listitem [ref=e107]:
                - link "Deployment" [ref=e108] [cursor=pointer]:
                  - /url: /deployment
          - generic [ref=e109]:
            - paragraph [ref=e110]: Models
            - list [ref=e111]:
              - listitem [ref=e112]:
                - link "Language Models" [ref=e113] [cursor=pointer]:
                  - /url: /language-models
              - listitem [ref=e114]:
                - link "Zero STT Indic" [ref=e115] [cursor=pointer]:
                  - /url: /zero-indic
              - listitem [ref=e116]:
                - link "Zero STT Codeswitch" [ref=e117] [cursor=pointer]:
                  - /url: /zero-code-switch
              - listitem [ref=e118]:
                - link "Specialised Models" [ref=e119] [cursor=pointer]:
                  - /url: /domain-specialisation
              - listitem [ref=e120]:
                - link "Zero STT Med" [ref=e121] [cursor=pointer]:
                  - /url: /zero-med
              - listitem [ref=e122]:
                - link "On Device Models" [ref=e123] [cursor=pointer]:
                  - /url: /on-device-models
          - generic [ref=e124]:
            - paragraph [ref=e125]: Solutions
            - list [ref=e126]:
              - listitem [ref=e127]:
                - link "Contact Centers" [ref=e128] [cursor=pointer]:
                  - /url: /contact-centers
              - listitem [ref=e129]:
                - link "Media & Entertainment" [ref=e130] [cursor=pointer]:
                  - /url: /media-entertainment
              - listitem [ref=e131]:
                - link "Healthcare" [ref=e132] [cursor=pointer]:
                  - /url: /healthcare
          - generic [ref=e133]:
            - paragraph [ref=e134]: Resources
            - list [ref=e135]:
              - listitem [ref=e136]:
                - link "Blogs" [ref=e137] [cursor=pointer]:
                  - /url: /blog
              - listitem [ref=e138]:
                - link "Benchmarks" [ref=e139] [cursor=pointer]:
                  - /url: /benchmarks
              - listitem [ref=e140]:
                - link "News & Media" [ref=e141] [cursor=pointer]:
                  - /url: /media
              - listitem [ref=e142]:
                - link "Patents" [ref=e143] [cursor=pointer]:
                  - /url: /patents
              - listitem [ref=e144]:
                - link "Research" [ref=e145] [cursor=pointer]:
                  - /url: /research
          - paragraph [ref=e147]:
            - link "Documentation" [ref=e148] [cursor=pointer]:
              - /url: https://docs.shunyalabs.ai/overview
          - list [ref=e150]:
            - listitem [ref=e151]:
              - link "About us" [ref=e152] [cursor=pointer]:
                - /url: /about
          - list [ref=e154]:
            - listitem [ref=e155]:
              - link "Pricing" [ref=e156] [cursor=pointer]:
                - /url: /pricing
        - generic [ref=e157]:
          - paragraph [ref=e158]: Follow us on
          - generic [ref=e159]:
            - link [ref=e160] [cursor=pointer]:
              - /url: https://www.linkedin.com/company/shunya-labs-ai/
              - img [ref=e161]
            - link [ref=e163] [cursor=pointer]:
              - /url: https://www.facebook.com/people/ShunyaLabsAI/61577801851308/
              - img [ref=e164]
            - link [ref=e166] [cursor=pointer]:
              - /url: https://www.instagram.com/shunyalabsai/
              - img [ref=e167]
            - link [ref=e169] [cursor=pointer]:
              - /url: https://x.com/ShunyaLabsAI
              - img [ref=e170]
        - generic [ref=e172]:
          - paragraph [ref=e173]: © 2026 Shunya Labs Inc. All rights reserved.
          - generic [ref=e174]:
            - link "Privacy" [ref=e175] [cursor=pointer]:
              - /url: /privacy-policy
            - link "Terms" [ref=e176] [cursor=pointer]:
              - /url: /terms-conditions
            - link "Security" [ref=e177] [cursor=pointer]:
              - /url: /security-policy
            - link "General License" [ref=e178] [cursor=pointer]:
              - /url: /general-rail-m-license
            - link "Custom License" [ref=e179] [cursor=pointer]:
              - /url: /shunya-labs-custom-model-rail-m-license
    - status [ref=e185]: reCAPTCHA verification failed. Please try again.
  - alert [ref=e186]
  - iframe [ref=e189]:
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