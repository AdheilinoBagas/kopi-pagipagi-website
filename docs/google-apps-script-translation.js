/**
 * Google Sheets Auto-Translation Script
 * For Kopi Pagi Pagi Product Management
 * 
 * HOW TO INSTALL:
 * 1. Open your Google Sheet
 * 2. Click Extensions → Apps Script
 * 3. Delete any existing code
 * 4. Paste this entire script
 * 5. Click Save (disk icon)
 * 6. Close Apps Script tab
 * 7. Test by editing a product name in Bahasa
 */

/**
 * Auto-translate when cell is edited
 * Translates column B → C and column D → E
 */
function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const range = e.range;
  const row = range.getRow();
  const col = range.getColumn();
  
  // Only process data rows (skip header row 1)
  if (row < 2) return;
  
  // Only process if Products sheet
  if (sheet.getName() !== 'Products') return;
  
  try {
    // If edited column B (Nama Produk ID), translate to column C
    if (col === 2) {
      const textToTranslate = range.getValue();
      if (textToTranslate && textToTranslate.toString().trim() !== '') {
        const translatedText = LanguageApp.translate(textToTranslate, 'id', 'en');
        sheet.getRange(row, 3).setValue(translatedText);
      }
    }
    
    // If edited column D (Deskripsi ID), translate to column E
    if (col === 4) {
      const textToTranslate = range.getValue();
      if (textToTranslate && textToTranslate.toString().trim() !== '') {
        const translatedText = LanguageApp.translate(textToTranslate, 'id', 'en');
        sheet.getRange(row, 5).setValue(translatedText);
      }
    }
  } catch (error) {
    Logger.log('Translation error: ' + error);
  }
}

/**
 * Batch translate all existing products
 * Run this once after installing to translate all existing rows
 */
function translateAllProducts() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Products');
  const lastRow = sheet.getLastRow();
  
  // Start from row 2 (skip header)
  for (let row = 2; row <= lastRow; row++) {
    try {
      // Translate product name (B → C)
      const productNameID = sheet.getRange(row, 2).getValue();
      if (productNameID && productNameID.toString().trim() !== '') {
        const productNameEN = LanguageApp.translate(productNameID, 'id', 'en');
        sheet.getRange(row, 3).setValue(productNameEN);
      }
      
      // Translate description (D → E)
      const descriptionID = sheet.getRange(row, 4).getValue();
      if (descriptionID && descriptionID.toString().trim() !== '') {
        const descriptionEN = LanguageApp.translate(descriptionID, 'id', 'en');
        sheet.getRange(row, 5).setValue(descriptionEN);
      }
      
      // Add small delay to avoid API rate limits
      Utilities.sleep(100);
    } catch (error) {
      Logger.log('Error translating row ' + row + ': ' + error);
    }
  }
  
  SpreadsheetApp.getUi().alert('Translation complete!');
}

/**
 * Create custom menu for manual operations
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🌐 Translation')
    .addItem('Translate All Products', 'translateAllProducts')
    .addItem('Help', 'showHelp')
    .addToUi();
}

/**
 * Show help dialog
 */
function showHelp() {
  const ui = SpreadsheetApp.getUi();
  ui.alert(
    '🌐 Auto-Translation Help',
    'How it works:\n\n' +
    '1. Type product name in column B (Bahasa Indonesia)\n' +
    '2. Column C auto-translates to English\n' +
    '3. Type description in column D (Bahasa Indonesia)\n' +
    '4. Column E auto-translates to English\n\n' +
    'You only need to edit columns B and D!\n\n' +
    'To translate all existing products:\n' +
    'Click: Translation → Translate All Products',
    ui.ButtonSet.OK
  );
}
