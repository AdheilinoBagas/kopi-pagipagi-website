# Google Sheets Template Structure
# For Kopi Pagi Pagi Product Management

## Sheet Name: "Products"

### Column Headers (Row 1):

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| ID | Nama Produk (ID) | Product Name (EN) | Deskripsi (ID) | Description (EN) | Harga | Kategori | Nama File Foto | Featured | Status |

---

## Sample Data (Starting from Row 2):

### Row 2: Hampers Korporat Premium
```
A2: 1
B2: Hampers Korporat Premium
C2: Premium Corporate Hamper
D2: Hampers eksklusif untuk klien dan mitra bisnis. Termasuk bamboo tumbler, organiser kulit, dan camilan organik.
E2: Exclusive hampers for clients and business partners. Includes bamboo tumbler, leather organizer, and organic snacks.
F2: Rp 350.000
G2: corporate
H2: product-corporate.webp
I2: Yes
J2: active
```

### Row 3: Tumbler Bouquet
```
A3: 2
B3: Tumbler Bouquet
C3: Tumbler Bouquet
D3: Tumbler bamboo dengan rangkaian bunga kering yang cantik. Hadiah sempurna untuk orang tersayang.
E3: Bamboo tumbler with beautiful dried flower arrangement. The perfect gift for your loved ones.
F3: Rp 185.000
G3: personal
H3: product-tumbler.webp
I3: Yes
J3: active
```

### Row 4: Hampers Pernikahan Elegan
```
A4: 3
B4: Hampers Pernikahan Elegan
C4: Elegant Wedding Hamper
D4: Hampers pernikahan dengan kemasan zero waste. Ceramic mug, sabun organik, dan succulent cantik.
E4: Wedding hampers with zero waste packaging. Ceramic mug, organic soap, and beautiful succulent.
F4: Rp 275.000
G4: wedding
H4: product-wedding.webp
I4: Yes
J4: active
```

### Row 5: Custom Branded Gift Set
```
A5: 4
B5: Custom Branded Gift Set
C5: Custom Branded Gift Set
D5: Set hadiah dengan logo perusahaan Anda. Tumbler, sedotan bamboo, dan teh organik dalam pouch kraft.
E5: Gift set with your company logo. Tumbler, bamboo straw, and organic tea in kraft pouch.
F5: Rp 225.000
G5: corporate
H5: product-custom.webp
I5: No
J5: active
```

---

## Column Descriptions:

### A - ID (Number)
- **Format:** 1, 2, 3, 4...
- **Purpose:** Unique identifier for each product
- **Rules:** Must be sequential and unique

### B - Nama Produk (ID) (Text)
- **Format:** Text in Bahasa Indonesia
- **Purpose:** Product name displayed to Indonesian customers
- **Example:** "Hampers Korporat Premium"

### C - Product Name (EN) (Text)
- **Format:** Text in English
- **Purpose:** Product name for English language toggle
- **Example:** "Premium Corporate Hamper"

### D - Deskripsi (ID) (Long Text)
- **Format:** Paragraph text in Bahasa Indonesia
- **Purpose:** Product description for Indonesian customers
- **Example:** "Hampers eksklusif untuk klien..."

### E - Description (EN) (Long Text)
- **Format:** Paragraph text in English
- **Purpose:** Product description for English language toggle
- **Example:** "Exclusive hampers for clients..."

### F - Harga (Text/Number)
- **Format:** "Rp XXX.XXX" (with dot separator)
- **Purpose:** Price displayed on website
- **Examples:** 
  - ✅ "Rp 350.000"
  - ✅ "Rp 1.250.000"
  - ❌ "350000" (missing Rp and format)

### G - Kategori (Text)
- **Format:** Lowercase, no spaces
- **Purpose:** Category filter on website
- **Valid Values:**
  - `corporate` - Corporate/business gifts
  - `personal` - Personal gifts
  - `wedding` - Wedding hampers
  - (Can add custom categories: `birthday`, `anniversary`, etc.)

### H - Nama File Foto (Text)
- **Format:** filename.webp OR Google Drive file ID
- **Purpose:** Product image reference
- **Examples:**
  - ✅ Local: "product-corporate.webp"
  - ✅ Drive: "1a2b3c4d5e6f7g8h9i0j"
- **Rules:**
  - Use lowercase
  - No spaces (use hyphens)
  - .webp extension preferred

### I - Featured (Yes/No)
- **Format:** "Yes" or "No" (or "Ya" or "Tidak")
- **Purpose:** Shows star badge on product
- **Values:**
  - `Yes` / `Ya` - Product shows ⭐ Featured badge
  - `No` / `Tidak` - No badge

### J - Status (Text)
- **Format:** Lowercase
- **Purpose:** Show/hide product on website
- **Valid Values:**
  - `active` - Product visible on website
  - `hidden` - Product hidden (not deleted, can reactivate)
  - `draft` - Product hidden (work in progress)

---

## Setup Instructions:

### Step 1: Create Google Sheet
1. Go to https://sheets.google.com
2. Click "+ Blank" to create new sheet
3. Name it: "Kopi Pagi Pagi - Database Produk"

### Step 2: Set Up Headers
1. Copy the column headers into Row 1 (A1-J1)
2. Make Row 1 bold (select row, click Bold button)
3. Freeze Row 1 (View → Freeze → 1 row)

### Step 3: Add Sample Data
1. Copy the sample data (rows 2-5) into the sheet
2. Verify all data is correctly formatted

### Step 4: Share the Sheet
1. Click "Share" button (top-right)
2. Change to: "Anyone with the link can view"
3. Copy the Sheet ID from URL

**Sheet URL format:**
```
https://docs.google.com/spreadsheets/d/[SHEET_ID]/edit
                                        ^^^^^^^^^^^^
                                        Copy this part
```

### Step 5: Get Google API Key
1. Go to: https://console.cloud.google.com
2. Create new project: "Kopi Pagi Pagi Website"
3. Enable "Google Sheets API"
4. Create credentials → API Key
5. Copy the API Key

### Step 6: Update products.json
Open `products.json` and update:
```json
{
  "settings": {
    "googleSheetsId": "[PASTE_SHEET_ID_HERE]",
    "googleApiKey": "[PASTE_API_KEY_HERE]",
    "googleDriveFolder": "[PASTE_DRIVE_FOLDER_ID_HERE]"
  }
}
```

---

## Google Drive Setup for Images:

### Step 1: Create Folder
1. Go to https://drive.google.com
2. Click "+ New" → "Folder"
3. Name: "Kopi Pagi Pagi - Foto Produk"

### Step 2: Share Folder
1. Right-click folder → "Share"
2. Change to: "Anyone with the link can view"
3. Copy folder ID from URL

**Drive URL format:**
```
https://drive.google.com/drive/folders/[FOLDER_ID]
                                        ^^^^^^^^^^^
                                        Copy this part
```

### Step 3: Upload Images
1. Open the folder
2. Drag & drop product images
3. For each image:
   - Right-click → "Get link"
   - Copy file ID from URL
   - Paste into column H in Google Sheets

**Image URL format:**
```
https://drive.google.com/file/d/[FILE_ID]/view
                                 ^^^^^^^^^
                                 Copy this part
```

---

## Validation Rules:

### Required Fields (Cannot be empty):
- ✅ ID (Column A)
- ✅ Nama Produk (Column B)
- ✅ Harga (Column F)
- ✅ Kategori (Column G)
- ✅ Status (Column K)

### Optional Fields:
- Product Name EN (Column C) - defaults to Nama Produk
- Deskripsi EN (Column E) - defaults to Deskripsi ID
- Nama File Foto (Column H) - uses placeholder if empty
- Drive_Image_ID (Column I) - auto-filled by script or manual
- Featured (Column J) - defaults to "No"

---

## Testing:

### After Setup, Test:
1. Open website
2. Open browser console (F12)
3. Look for: "✅ Products loaded from Google Sheets"
4. If you see: "⚠️ Could not load from Google Sheets, using local fallback"
   - Check Sheet ID is correct
   - Check API Key is correct
   - Check Sheet is shared publicly

### Add Test Product:
1. Add new row in Google Sheets:
   - ID: 999
   - Nama: "TEST PRODUCT"
   - Kategori: personal
   - Status: active
2. Wait 2-5 minutes
3. Refresh website (Ctrl + F5)
4. Test product should appear
5. Delete test row when done

---

**Setup Complete! Your sister can now manage products from Google Sheets.**
