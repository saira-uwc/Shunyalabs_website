# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: modules/models/specialised-models/design.spec.js >> Models - Specialised Models design compliance >> Figma design compliance
- Location: tests/modules/models/specialised-models/design.spec.js:13:3

# Error details

```
TimeoutError: page.goto: Timeout 30000ms exceeded.
Call log:
  - navigating to "https://www.shunyalabs.ai/domain-specialisation", waiting until "domcontentloaded"

```

# Test source

```ts
  492 | }
  493 | 
  494 | function validateSections(actual, expected, failures) {
  495 |   if (!expected.sections || !expected.sections.length) return;
  496 | 
  497 |   for (const exp of expected.sections) {
  498 |     const found = actual.sections.find(
  499 |       (s) => s.name === exp.name || s.name.includes(exp.name) || exp.name.includes(s.name)
  500 |     );
  501 | 
  502 |     if (!found) {
  503 |       failures.push({ section: 'layout', property: `"${exp.name}" presence`, message: `Section "${exp.name}" not found on page` });
  504 |       continue;
  505 |     }
  506 | 
  507 |     if (exp.backgroundColor && !colorsMatch(found.backgroundColor, exp.backgroundColor)) {
  508 |       failures.push({
  509 |         section: 'layout',
  510 |         property: `"${exp.name}" background`,
  511 |         message: `Section "${exp.name}" background: expected ${formatColor(exp.backgroundColor)} but got ${formatColor(found.backgroundColor)}`,
  512 |       });
  513 |     }
  514 |   }
  515 | 
  516 |   // Section order check
  517 |   const expectedOrder = expected.sections.map((s) => s.name);
  518 |   const actualOrder = actual.sections
  519 |     .filter((s) => expectedOrder.some((e) => s.name.includes(e) || e.includes(s.name)))
  520 |     .sort((a, b) => a.top - b.top)
  521 |     .map((s) => expectedOrder.find((e) => s.name.includes(e) || e.includes(s.name)) || s.name);
  522 | 
  523 |   for (let i = 0; i < expectedOrder.length; i++) {
  524 |     const actualIdx = actualOrder.indexOf(expectedOrder[i]);
  525 |     if (actualIdx === -1) continue;
  526 |     if (actualIdx !== i) {
  527 |       failures.push({
  528 |         section: 'layout',
  529 |         property: `"${expectedOrder[i]}" order`,
  530 |         message: `Section "${expectedOrder[i]}" expected at position ${i + 1} but found at position ${actualIdx + 1}`,
  531 |       });
  532 |     }
  533 |   }
  534 | }
  535 | 
  536 | function validateGlobalStyles(actual, expected, failures) {
  537 |   if (!expected.globalStyles) return;
  538 |   const exp = expected.globalStyles;
  539 |   const act = actual.globalStyles;
  540 | 
  541 |   if (exp.bodyFontFamily && !fontFamilyMatches(act.bodyFontFamily, exp.bodyFontFamily)) {
  542 |     failures.push({ section: 'global', property: 'body font-family', message: `Body font-family: expected "${exp.bodyFontFamily}" not found in "${act.bodyFontFamily}"` });
  543 |   }
  544 |   if (exp.navBackgroundColor && act.navBackgroundColor && !colorsMatch(act.navBackgroundColor, exp.navBackgroundColor)) {
  545 |     failures.push({ section: 'global', property: 'nav background', message: `Nav background: expected ${formatColor(exp.navBackgroundColor)} but got ${formatColor(act.navBackgroundColor)}` });
  546 |   }
  547 |   if (exp.footerBackgroundColor && act.footerBackgroundColor && !colorsMatch(act.footerBackgroundColor, exp.footerBackgroundColor)) {
  548 |     failures.push({ section: 'global', property: 'footer background', message: `Footer background: expected ${formatColor(exp.footerBackgroundColor)} but got ${formatColor(act.footerBackgroundColor)}` });
  549 |   }
  550 | }
  551 | 
  552 | function validateConsoleErrors(consoleErrors, failures) {
  553 |   // Filter out third-party/CSP noise that isn't a real page bug
  554 |   const meaningful = consoleErrors.filter((msg) =>
  555 |     !msg.includes('Content Security Policy') &&
  556 |     !msg.includes('ERR_BLOCKED_BY_CSP') &&
  557 |     !msg.includes('frame-ancestors') &&
  558 |     !msg.includes('net::ERR_INTERNET_DISCONNECTED') &&
  559 |     !msg.includes('net::ERR_NAME_NOT_RESOLVED') &&
  560 |     !msg.includes('Failed to load resource')
  561 |   );
  562 |   if (meaningful.length > 0) {
  563 |     failures.push({
  564 |       section: 'console',
  565 |       property: 'errors',
  566 |       message: `${meaningful.length} console error(s): ${meaningful.slice(0, 3).join(' | ')}`,
  567 |     });
  568 |   }
  569 | }
  570 | 
  571 | // ─── Main Test Runner ───
  572 | 
  573 | export async function runDesignComplianceTest({ page, pageEntry }) {
  574 |   const { moduleKey, slug, moduleLabel, pageLabel, path: pagePath } = pageEntry;
  575 | 
  576 |   const { writeResult } = await createResultWriter({
  577 |     moduleName: moduleLabel,
  578 |     reportFileName: 'module-design-report.csv',
  579 |   });
  580 | 
  581 |   const viewport = detectViewport(page);
  582 |   const designSpec = loadDesignSpec(moduleKey, slug, viewport);
  583 |   if (!designSpec) {
  584 |     const cmd = viewport === 'mobile' ? 'npm run baseline:design:mobile' : 'npm run baseline:design';
  585 |     const msg = `No ${viewport} design baseline found for ${moduleLabel} - ${pageLabel}. Run: ${cmd}`;
  586 |     await writeResult(`${pageLabel} design compliance`, 'FAIL', msg);
  587 |     return [{ section: 'setup', property: 'baseline', message: msg }];
  588 |   }
  589 | 
  590 |   const consoleErrors = setupConsoleCapture(page);
  591 | 
> 592 |   await page.goto(pagePath, { waitUntil: 'domcontentloaded' });
      |              ^ TimeoutError: page.goto: Timeout 30000ms exceeded.
  593 |   await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  594 |   await page.waitForTimeout(5000);
  595 | 
  596 |   const actualData = await extractPageDesignData(page);
  597 |   const failures = [];
  598 | 
  599 |   // Design validations
  600 |   validateHeadings(actualData, designSpec, failures);
  601 |   validateImages(actualData, designSpec, failures);
  602 |   validateImageCount(actualData, designSpec, failures);
  603 |   validateSections(actualData, designSpec, failures);
  604 |   validateGlobalStyles(actualData, designSpec, failures);
  605 | 
  606 |   // Content validations (replaces content.spec.js)
  607 |   validateContent(actualData, designSpec, failures);
  608 | 
  609 |   // Link/CTA validations (replaces cta.spec.js)
  610 |   validateLinks(actualData, designSpec, failures);
  611 | 
  612 |   // Button validations (replaces actions.spec.js)
  613 |   validateButtons(actualData, designSpec, failures);
  614 | 
  615 |   // Console errors
  616 |   validateConsoleErrors(consoleErrors, failures);
  617 | 
  618 |   // Write CSV results
  619 |   if (failures.length === 0) {
  620 |     await writeResult(`${pageLabel} design compliance`, 'PASS', 'All design checks passed');
  621 |   } else {
  622 |     for (const f of failures) {
  623 |       await writeResult(`${pageLabel} Design - ${f.section} - ${f.property}`, 'FAIL', f.message);
  624 |     }
  625 |   }
  626 | 
  627 |   return failures;
  628 | }
  629 | 
  630 | // ─── Baseline Capture ───
  631 | 
  632 | // Buttons/text that are widget-state-dependent and must never be saved in baselines
  633 | const UNSTABLE_BUTTONS = new Set([
  634 |   'Play audio', 'No conversation to copy', 'Sample Audio',
  635 |   'Customer Support Call', 'Podcast', 'Patient Notes', "Doctor's Appointment",
  636 | ]);
  637 | const UNSTABLE_TEXT = new Set([
  638 |   'Sample Audio', 'Customer Support Call', 'Podcast',
  639 |   'Patient Notes', "Doctor's Appointment",
  640 | ]);
  641 | const UNSTABLE_TEXT_PATTERNS = [
  642 |   'Select your input language',
  643 |   'Pick a sample, upload a file, or start speaking',
  644 | ];
  645 | // Language flag images are lazy-loaded and unreliable in headless
  646 | const LANGUAGE_FLAG_ALTS = new Set([
  647 |   'Akan','Arabic (Global)','Assamese','Awadhi','Azerbaijani','Bambara','Bavarian',
  648 |   'Bengali (Bangladesh)','Berber (Tamazight)','Bhojpuri','Catalan','Cebuano',
  649 |   'Chhattisgarhi','Chichewa','Chinese (Global)','Czech','Dari','Dutch','English',
  650 |   'French','Fulani','German','Greek','Gujarati','Haitian Creole','Haryanvi',
  651 |   'Hausa','Hindi','Hungarian','Igbo','Indonesian','Italian','Japanese','Javanese',
  652 |   'Kannada','Kazakh','Kikongo','Kinyarwanda','Kirundi','Korean','Kurdish (Kurmanji)',
  653 |   'Lingala','Madurese','Magahi','Maithili','Malagasy','Malay','Malayalam','Marathi',
  654 |   'Marwari','Nepali','Oromo','Pashto','Persian','Polish','Portuguese','Punjabi',
  655 |   'Rajasthani','Romanian','Russian','Shona','Sindhi','Somali','Spanish','Sundanese',
  656 |   'Swahili','Swedish','Tagalog','Tamil','Telugu','Thai','Turkish','Twi','Ukrainian',
  657 |   'Urdu','Uyghur','Uzbek','Vietnamese','Wolof','Yoruba',
  658 | ]);
  659 | 
  660 | function cleanCapturedData(data) {
  661 |   const cleanedButtons = data.buttons.filter((b) => !UNSTABLE_BUTTONS.has(b.label) && !/^🇺🇸/.test(b.label));
  662 |   const cleanedText = data.mainText.filter((t) =>
  663 |     !UNSTABLE_TEXT.has(t) &&
  664 |     !UNSTABLE_TEXT_PATTERNS.some((p) => t.includes(p)) &&
  665 |     !/^🇺🇸/.test(t)
  666 |   );
  667 |   const cleanedImages = data.images.filter((img) => !LANGUAGE_FLAG_ALTS.has(img.alt));
  668 |   return { ...data, buttons: cleanedButtons, mainText: cleanedText, images: cleanedImages };
  669 | }
  670 | 
  671 | export async function captureDesignBaseline(page, pageEntry) {
  672 |   await page.goto(pageEntry.path, { waitUntil: 'domcontentloaded' });
  673 |   await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  674 |   await page.waitForTimeout(5000);
  675 | 
  676 |   const raw = await extractPageDesignData(page);
  677 |   const data = cleanCapturedData(raw);
  678 |   const viewport = detectViewport(page);
  679 |   const size = page.viewportSize();
  680 | 
  681 |   return {
  682 |     moduleKey: pageEntry.moduleKey,
  683 |     moduleLabel: pageEntry.moduleLabel,
  684 |     pageLabel: pageEntry.pageLabel,
  685 |     slug: pageEntry.slug,
  686 |     path: pageEntry.path,
  687 |     viewport,
  688 |     viewportWidth: size ? size.width : null,
  689 |     capturedAt: new Date().toISOString(),
  690 |     headings: data.headings.map((h) => ({ text: h.text, tag: h.tag, style: h.style })),
  691 |     images: data.images.map((img) => ({ src: img.src, alt: img.alt, loaded: img.loaded, naturalWidth: img.naturalWidth, naturalHeight: img.naturalHeight })),
  692 |     totalImages: data.images.length,
```