# Google Sheets CMS Setup Guide

## Overview
Your website is now configured to use Google Sheets as a Content Management System (CMS). You can manage all product data directly from your Google Sheet, and the website will automatically fetch and display the latest information.

## Configuration Details

### Google Sheets ID
```
1w8SbsIeQ_0VsC2JhgeOKe-jhhvH0pUMmz2dSB6fJRRY
```

### Google Drive Folder ID (for images)
```
1CLUJT9-atzt9n1RQ8As5ouNsJlueRVi3
```

### Google API Key
```
AIzaSyCs6D0Apwjf92avqbI_z5aPEJLk25s8Yd8
```

## Google Sheet Structure

Your Google Sheet should have the following columns in **Sheet1**:

| Column | Header | Description | Example |
|--------|--------|-------------|---------|
| A | ID | Product ID (optional, auto-generated if empty) | 1, 2, 3 |
| B | Name (ID) | Product name in Indonesian | Hampers Korporat Premium |
| C | Name (EN) | Product name in English | Premium Corporate Hamper |
| D | Description (ID) | Product description in Indonesian | Hampers eksklusif untuk klien |
| E | Description (EN) | Product description in English | Exclusive hampers for clients |
| F | Price | Product price | Rp 350.000 |
| G | Category | Product category (lowercase) | corporate, personal, wedding |
| H | Image | Local image filename (fallback) | product-corporate.webp |
| I | Google Drive Image ID | Google Drive file ID (primary) | 1a2b3c4d5e6f7g8h9i0j |
| J | Featured | Is featured product? | YES, NO, ya, TRUE, FALSE |
| K | Status | Product status | active, inactive |

### Important Notes:

1. **First row** should contain headers
2. **Data starts from row 2**
3. Only products with `status = active` will be displayed
4. Categories must be lowercase: `corporate`, `personal`, or `wedding`
5. Featured products will have a star badge

## Setting Up Your Google Sheet

### Step 1: Share Your Google Sheet
1. Open your Google Sheet
2. Click **Share** button (top right)
3. Change "Restricted" to **"Anyone with the link"**
4. Set permission to **"Viewer"**
5. Click **Done**

### Step 2: Enable Google Sheets API
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable **Google Sheets API**
4. Create credentials (API Key)
5. Copy the API key and update it in `index.html` if needed

### Step 3: Upload Images to Google Drive
1. Create a folder in Google Drive
2. Upload all product images to this folder
3. Right-click the folder → Share → "Anyone with the link" (Viewer)
4. Copy the folder ID from the URL (format: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`)
5. The folder ID is already configured: `1CLUJT9-atzt9n1RQ8As5ouNsJlueRVi3`

### Step 4: Link Images in Your Sheet
In the **Google Drive Image ID** column (I), you can use:
- **Option 1**: Google Drive File ID (recommended, e.g., `1A2B3C4D5E6F7G8H9I0J`)
  - Upload image to Google Drive
  - Right-click → Get link
  - Extract file ID from URL: `https://drive.google.com/file/d/FILE_ID/view`
  - Paste file ID into column I
- **Option 2**: Leave empty to use local image from column H (fallback)
  - System will use filename from column H
  - Image must exist in local `images/` folder

## How It Works

1. **Website loads** → Tries to fetch data from Google Sheets
2. **Success** → Displays products from Google Sheets
3. **Failure** → Falls back to local `products.json` file
4. **Images** → Loaded from Google Drive if folder ID is configured, otherwise from local `images/` folder

## Testing Your Setup

1. Open your website in a browser
2. Open browser console (F12 → Console tab)
3. Look for these messages:
   - ✅ `"📡 Fetching from Google Sheets..."`
   - ✅ `"📊 Received X rows from Google Sheets"`
   - ✅ `"✅ Processed X active products"`
   - ✅ `"✅ Products rendered successfully"`

If you see errors:
- ⚠️ Check if Google Sheet is shared publicly
- ⚠️ Verify Google Sheets API is enabled
- ⚠️ Confirm API key is correct
- ⚠️ Check Sheet name is "Sheet1" or update the code

## Updating Products

To add or update products:

1. Open your Google Sheet
2. Add/edit rows with product information
3. Save the sheet (auto-saves)
4. Refresh your website
5. Products will update automatically!

**No need to republish or redeploy your website!**

## Example Product Entry

```
ID: 5
Name (ID): Hampers Ulang Tahun Spesial
Name (EN): Special Birthday Hamper
Description (ID): Hadiah ulang tahun dengan tumbler, cokelat organik, dan kartu ucapan
Description (EN): Birthday gift with tumbler, organic chocolate, and greeting card
Price: Rp 225.000
Category: personal
Image: 1XyZ9AbC8dEf7GhI6JkL5
Featured: YES
Status: active
```

## Troubleshooting

### Products not showing up?
- Check if `Status` column is set to `active`
- Verify `Name (ID)` is not empty
- Check browser console for errors

### Images not loading?
- Verify Google Drive folder is shared publicly
- Check if file IDs are correct
- Try using direct image URLs instead

### Changes not reflecting?
- Hard refresh browser: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac)
- Clear browser cache
- Check if you're editing the correct Google Sheet

## Benefits of Google Sheets CMS

✅ **Easy Updates**: Update products without touching code  
✅ **No Deployment**: Changes reflect immediately after page refresh  
✅ **Collaborative**: Multiple team members can edit  
✅ **Backup**: Google Sheets auto-saves and has version history  
✅ **Fallback**: Local JSON file as backup if Google Sheets is down  

## Need Help?

If you encounter issues:
1. Check browser console for error messages
2. Verify all URLs and IDs are correct
3. Test with local `products.json` first
4. Contact your developer with console error messages
