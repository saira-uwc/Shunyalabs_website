/**
 * Google Sheets Web App for test coverage updates.
 * Deploy as: Web app → Execute as Me → Anyone has access
 *
 * Expected headers in sheet row 1:
 *   Testcase ID | Test Name | Description | Update Date & time | Status | Comment(proof)
 *
 * POST payload:
 *   { action: "updateCoverage", rows: [...], spreadsheetId?, sheetName?, clearSheet? }
 *
 * Each row: { testId, testName, description, status, comment, updatedAt }
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var ssId = data.spreadsheetId || PropertiesService.getScriptProperties().getProperty("SPREADSHEET_ID");
    var spreadsheet = ssId ? SpreadsheetApp.openById(ssId) : SpreadsheetApp.getActiveSpreadsheet();

    if (data.action === "updateCoverage") {
      var sheetName = data.sheetName || "test-coverage";
      var sheet = spreadsheet.getSheetByName(sheetName);

      // Create sheet with headers if it doesn't exist
      if (!sheet) {
        sheet = spreadsheet.insertSheet(sheetName);
        sheet.appendRow(["Testcase ID", "Test Name", "Description", "Update Date & time", "Status", "Comment(proof)"]);
      }

      var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      var col = {};
      ["Testcase ID", "Test Name", "Description", "Update Date & time", "Status"].forEach(function(h) {
        col[h] = headers.indexOf(h) + 1;
      });
      // Comment column — try several common names
      col["Comment"] = headers.indexOf("Comment(proof)") + 1
        || headers.indexOf("Comment (proof)") + 1
        || headers.indexOf("Comment") + 1;

      if (!col["Test Name"] || !col["Status"]) {
        return _json({ ok: false, error: "Sheet missing required columns: Test Name, Status" });
      }

      // Optional: clear all data rows before writing (keeps headers)
      if (data.clearSheet && sheet.getLastRow() > 1) {
        sheet.getRange(2, 1, sheet.getLastRow() - 1, sheet.getLastColumn()).clearContent();
      }

      // Build lookup map: Testcase ID → row number (for upsert)
      var lastRow = sheet.getLastRow();
      var idLookup = {};
      var nameLookup = {};
      if (lastRow > 1 && col["Testcase ID"]) {
        var ids = sheet.getRange(2, col["Testcase ID"], lastRow - 1, 1).getValues();
        ids.forEach(function(r, i) { if (r[0]) idLookup[r[0]] = i + 2; });
      }
      if (lastRow > 1 && col["Test Name"]) {
        var names = sheet.getRange(2, col["Test Name"], lastRow - 1, 1).getValues();
        names.forEach(function(r, i) { if (r[0]) nameLookup[r[0]] = i + 2; });
      }

      var rowsProcessed = 0;
      (data.rows || []).forEach(function(item) {
        // Find existing row by Testcase ID first, then by Test Name
        var rowIdx = (item.testId && idLookup[item.testId]) || nameLookup[item.testName];

        if (rowIdx) {
          // Update existing row
          if (col["Testcase ID"] && item.testId) sheet.getRange(rowIdx, col["Testcase ID"]).setValue(item.testId);
          if (col["Description"] && item.description) sheet.getRange(rowIdx, col["Description"]).setValue(item.description);
          if (col["Update Date & time"]) sheet.getRange(rowIdx, col["Update Date & time"]).setValue(item.updatedAt || new Date().toISOString());
          if (col["Status"]) sheet.getRange(rowIdx, col["Status"]).setValue(item.status || "");
          if (col["Comment"]) sheet.getRange(rowIdx, col["Comment"]).setValue(item.comment || "");
        } else {
          // Append new row
          var newRow = [];
          for (var c = 0; c < headers.length; c++) newRow.push("");
          if (col["Testcase ID"]) newRow[col["Testcase ID"] - 1] = item.testId || "";
          if (col["Test Name"]) newRow[col["Test Name"] - 1] = item.testName || "";
          if (col["Description"]) newRow[col["Description"] - 1] = item.description || "";
          if (col["Update Date & time"]) newRow[col["Update Date & time"] - 1] = item.updatedAt || new Date().toISOString();
          if (col["Status"]) newRow[col["Status"] - 1] = item.status || "";
          if (col["Comment"]) newRow[col["Comment"] - 1] = item.comment || "";
          sheet.appendRow(newRow);
          // Update lookup for subsequent items
          var appended = sheet.getLastRow();
          if (item.testId) idLookup[item.testId] = appended;
          if (item.testName) nameLookup[item.testName] = appended;
        }
        rowsProcessed++;
      });

      return _json({ ok: true, rows: rowsProcessed, sheet: sheet.getName() });
    }

    return _json({ ok: false, error: "Unknown action: " + (data.action || "none") });
  } catch (err) {
    return _json({ ok: false, error: err.toString() });
  }
}

function _json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
