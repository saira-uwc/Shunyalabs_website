function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

    if (data.action === 'updateCoverage') {
      // Get the sheet - use specified name or fall back to 'test-coverage' or active sheet
      const sheetName = data.sheetName || 'test-coverage';
      const sheet = spreadsheet.getSheetByName(sheetName) || spreadsheet.getActiveSheet();

      const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
      const idCol = headers.indexOf('Testcase ID') + 1;
      const nameCol = headers.indexOf('Test Name') + 1;
      const descCol = headers.indexOf('Description') + 1;
      const updatedCol = headers.indexOf('Update Date & time') + 1;
      const statusCol = headers.indexOf('Status') + 1;
      const reasonCol = headers.indexOf('Reason') + 1;
      const commentCol =
        headers.indexOf('Comment(proof)') + 1 ||
        headers.indexOf('Comment (proof)') + 1 ||
        headers.indexOf('Comment') + 1;

      if (!nameCol || !updatedCol || !statusCol) {
        return ContentService.createTextOutput(JSON.stringify({
          success: false,
          error: 'Missing required columns. Need: Test Name, Update Date & time, Status'
        }))
          .setMimeType(ContentService.MimeType.JSON);
      }

      const lastRow = sheet.getLastRow();
      const names = lastRow > 1
        ? sheet.getRange(2, nameCol, lastRow - 1, 1).getValues()
        : [];
      const nameToRow = {};
      names.forEach((row, i) => {
        if (row[0]) nameToRow[row[0]] = i + 2;
      });

      let rowsUpdated = 0;
      (data.rows || []).forEach(item => {
        const rowIndex = nameToRow[item.testName];
        if (rowIndex) {
          rowsUpdated++;
          if (idCol && item.testId && !sheet.getRange(rowIndex, idCol).getValue()) {
            sheet.getRange(rowIndex, idCol).setValue(item.testId);
          }
          if (descCol && item.description && !sheet.getRange(rowIndex, descCol).getValue()) {
            sheet.getRange(rowIndex, descCol).setValue(item.description);
          }
          sheet.getRange(rowIndex, updatedCol).setValue(item.updatedAt || new Date().toISOString());
          sheet.getRange(rowIndex, statusCol).setValue(item.status || '');
          if (reasonCol) sheet.getRange(rowIndex, reasonCol).setValue(item.reason || '');
          if (commentCol) sheet.getRange(rowIndex, commentCol).setValue(item.comment || '');
        }
      });

      return ContentService.createTextOutput(JSON.stringify({
        success: true,
        updated: rowsUpdated,
        totalRows: (data.rows || []).length,
        sheetName: sheet.getName()
      }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // Fallback for old individual row appends
    const sheet = spreadsheet.getSheetByName('Report') || spreadsheet.getActiveSheet();
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Date/Time', 'Module Name', 'Test Point', 'Status', 'Output/Comment']);
    }
    sheet.appendRow([
      data.timestamp || new Date().toISOString(),
      data.moduleName,
      data.testPoint,
      data.status,
      data.output
    ]);

    return ContentService.createTextOutput(JSON.stringify({success: true}))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString(),
      stack: error.stack
    }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
