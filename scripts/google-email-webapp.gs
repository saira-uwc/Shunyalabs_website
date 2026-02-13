/**
 * Google Email Web App.
 * Deploy as: Web app → Execute as Me → Anyone has access
 *
 * POST payload: { to: "email1,email2", subject: "...", body: "<html>..." }
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var to = data.to || "";
    var subject = data.subject || "Automation Report";
    var body = data.body || "";

    if (!to) {
      return _json({ ok: false, error: "Missing 'to' field" });
    }

    MailApp.sendEmail({
      to: to,
      subject: subject,
      htmlBody: body,
    });

    return _json({ ok: true });
  } catch (err) {
    return _json({ ok: false, error: err.toString() });
  }
}

function _json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
