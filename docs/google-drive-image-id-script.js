/**
 * Google Apps Script: Auto-Fill Drive Image IDs
 * For Kopi Pagi Pagi Product Management
 * 
 * HOW TO INSTALL:
 * 1. Open your Google Sheet
 * 2. Click Extensions → Apps Script
 * 3. Delete any existing code
 * 4. Paste this entire script
 * 5. Click Save (💾 icon)
 * 6. Update FOLDER_ID below with your Google Drive folder ID
 * 7. Click Run → authorize the script
 * 8. Go back to your sheet
 * 
 * HOW IT WORKS:
 * - When you type an image filename in column H (Gambar)
 * - Script automatically searches your Drive folder
 * - Finds the matching file
 * - Fills in the Drive file ID or full URL
 */

// ============================================
// CONFIGURATION - UPDATE THIS!
// ============================================

// YOUR GOOGLE DRIVE FOLDER ID
// Get this from the folder URL: https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE
const FOLDER_ID = 'YOUR_FOLDER_ID_HERE'; // ⚠️ REPLACE THIS!

// Column numbers (1-based)
const COL_IMAGE_FILENAME = 8; // Column H: Gambar (filename)
const COL_IMAGE_ID = 9;       // Column I: Drive ID (auto-filled)

// ============================================
// MAIN FUNCTIONS
// ============================================

/**
 * Automatically runs when cell is edited
 */
function onEdit(e) {
  const sheet = e.source.getActiveSheet();
  const range = e.range;
  const col = range.getColumn();
  const row = range.getRow();
  
  // Only process if Column H (image filename) was edited
  if (col !== COL_IMAGE_FILENAME || row === 1) {
    return; // Skip header row
  }
  
  const filename = range.getValue();
  
  // Skip if cell is empty
  if (!filename || filename.toString().trim() === '') {
    // Clear the ID column if filename was deleted
    sheet.getRange(row, COL_IMAGE_ID).setValue('');
    return;
  }
  
  // Search for file in Drive folder
  const fileId = findFileInFolder(filename);
  
  if (fileId) {
    // Fill in the Drive ID in column I
    sheet.getRange(row, COL_IMAGE_ID).setValue(fileId);
    SpreadsheetApp.getActiveSpreadsheet().toast(
      `✅ Found: ${filename}`,
      'Image ID Auto-Filled',
      3
    );
  } else {
    // File not found
    sheet.getRange(row, COL_IMAGE_ID).setValue('NOT FOUND');
    SpreadsheetApp.getActiveSpreadsheet().toast(
      `❌ File not found: ${filename}\nMake sure it's uploaded to the Drive folder.`,
      'Image Not Found',
      5
    );
  }
}

/**
 * Search for a file in the specified Drive folder
 * @param {string} filename - Name of the file to search
 * @return {string|null} - File ID if found, null otherwise
 */
function findFileInFolder(filename) {
  try {
    // Get the folder
    const folder = DriveApp.getFolderById(FOLDER_ID);
    
    // Search for exact filename match
    const files = folder.getFilesByName(filename);
    
    if (files.hasNext()) {
      const file = files.next();
      return file.getId();
    }
    
    // If exact match not found, try case-insensitive search
    const allFiles = folder.getFiles();
    while (allFiles.hasNext()) {
      const file = allFiles.next();
      if (file.getName().toLowerCase() === filename.toLowerCase()) {
        return file.getId();
      }
    }
    
    return null; // File not found
    
  } catch (error) {
    Logger.log('Error searching for file: ' + error.toString());
    return null;
  }
}

/**
 * Custom menu in Google Sheets
 */
function onOpen() {
  const ui = SpreadsheetApp.getUi();
  ui.createMenu('🖼️ Image Tools')
    .addItem('📁 Set Drive Folder ID', 'setFolderId')
    .addItem('🔄 Refresh All Image IDs', 'refreshAllImageIds')
    .addItem('📋 List All Images in Folder', 'listAllImages')
    .addSeparator()
    .addItem('ℹ️ Help', 'showHelp')
    .addToUi();
}

/**
 * Set/Update the Drive folder ID
 */
function setFolderId() {
  const ui = SpreadsheetApp.getUi();
  const result = ui.prompt(
    'Set Google Drive Folder ID',
    'Enter your Google Drive folder ID:\n\n' +
    'Get this from the folder URL:\n' +
    'https://drive.google.com/drive/folders/YOUR_FOLDER_ID_HERE',
    ui.ButtonSet.OK_CANCEL
  );
  
  if (result.getSelectedButton() === ui.Button.OK) {
    const folderId = result.getResponseText().trim();
    
    // Validate folder ID
    try {
      DriveApp.getFolderById(folderId);
      
      // Save to Script Properties
      PropertiesService.getScriptProperties().setProperty('FOLDER_ID', folderId);
      
      ui.alert('✅ Success', 'Folder ID saved successfully!', ui.ButtonSet.OK);
    } catch (error) {
      ui.alert('❌ Error', 'Invalid folder ID or no access to folder.', ui.ButtonSet.OK);
    }
  }
}

/**
 * Refresh all image IDs in the sheet
 */
function refreshAllImageIds() {
  const sheet = SpreadsheetApp.getActiveSheet();
  const lastRow = sheet.getLastRow();
  
  if (lastRow < 2) {
    SpreadsheetApp.getActiveSpreadsheet().toast(
      'No data to process',
      'Refresh',
      3
    );
    return;
  }
  
  SpreadsheetApp.getActiveSpreadsheet().toast(
    'Processing...',
    'Refreshing Image IDs',
    -1 // Show until completion
  );
  
  let found = 0;
  let notFound = 0;
  
  // Process each row (starting from row 2, skip header)
  for (let row = 2; row <= lastRow; row++) {
    const filename = sheet.getRange(row, COL_IMAGE_FILENAME).getValue();
    
    if (filename && filename.toString().trim() !== '') {
      const fileId = findFileInFolder(filename);
      
      if (fileId) {
        sheet.getRange(row, COL_IMAGE_ID).setValue(fileId);
        found++;
      } else {
        sheet.getRange(row, COL_IMAGE_ID).setValue('NOT FOUND');
        notFound++;
      }
    }
  }
  
  SpreadsheetApp.getActiveSpreadsheet().toast(
    `✅ Found: ${found} | ❌ Not Found: ${notFound}`,
    'Refresh Complete',
    5
  );
}

/**
 * List all images in the Drive folder
 */
function listAllImages() {
  try {
    const folder = DriveApp.getFolderById(FOLDER_ID);
    const files = folder.getFiles();
    
    let fileList = [];
    while (files.hasNext()) {
      const file = files.next();
      const mimeType = file.getMimeType();
      
      // Only list image files
      if (mimeType.startsWith('image/')) {
        fileList.push(`📷 ${file.getName()} (${file.getId()})`);
      }
    }
    
    if (fileList.length === 0) {
      SpreadsheetApp.getUi().alert(
        '📁 No Images Found',
        'No image files found in the Drive folder.',
        SpreadsheetApp.getUi().ButtonSet.OK
      );
    } else {
      SpreadsheetApp.getUi().alert(
        `📁 ${fileList.length} Images Found`,
        fileList.join('\n\n'),
        SpreadsheetApp.getUi().ButtonSet.OK
      );
    }
    
  } catch (error) {
    SpreadsheetApp.getUi().alert(
      '❌ Error',
      'Could not access folder. Check FOLDER_ID.',
      SpreadsheetApp.getUi().ButtonSet.OK
    );
  }
}

/**
 * Show help information
 */
function showHelp() {
  const ui = SpreadsheetApp.getUi();
  ui.alert(
    'ℹ️ How to Use',
    'AUTO MODE:\n' +
    '1. Type image filename in Column H (Gambar)\n' +
    '2. Column I will auto-fill with Drive ID\n\n' +
    'MANUAL REFRESH:\n' +
    '• Use menu: Image Tools → Refresh All Image IDs\n\n' +
    'SETUP:\n' +
    '• Use menu: Image Tools → Set Drive Folder ID\n' +
    '• Or edit FOLDER_ID in the script code\n\n' +
    'TROUBLESHOOTING:\n' +
    '• "NOT FOUND" = File not in Drive folder\n' +
    '• Check filename spelling (case-sensitive)\n' +
    '• Make sure file is uploaded to correct folder',
    ui.ButtonSet.OK
  );
}
