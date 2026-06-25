# 📁 File Organization - Kopi Pagi Pagi Website

**Project:** E:\Project\kopi pagipagi\site2  
**Organized:** 25 Juni 2026

---

## 📂 Folder Structure

```
site2/
├── deployment/          ← FILES TO UPLOAD TO HOSTING
│   ├── images/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   ├── logo.png
│   ├── products.json
│   └── products-loader.js
│
├── docs/               ← GUIDES & DOCUMENTATION (DO NOT UPLOAD)
│   ├── PANDUAN.md
│   ├── GOOGLE-SHEETS-SETUP.md
│   ├── README-SETUP.md
│   └── google-apps-script-translation.js
│
└── (original files remain in root for backup)
```

---

## 🚀 What to Deploy (Upload to Hosting)

**ONLY upload files from `deployment/` folder:**

### Required Files:
- ✅ `index.html` - Main website page
- ✅ `style.css` - Website styles
- ✅ `script.js` - Website functionality
- ✅ `products.json` - Product data & Google Sheets config
- ✅ `products-loader.js` - Google Sheets integration
- ✅ `logo.png` - Logo image
- ✅ `images/` folder - All product images (.webp files)

### File Sizes:
- index.html: 34 KB
- style.css: 35 KB
- script.js: 16 KB
- products.json: 2.8 KB
- products-loader.js: 7.4 KB
- logo.png: 101 KB
- images/: ~1.3 MB (12 .webp files)

**Total size: ~1.5 MB**

---

## 📚 Documentation (Keep Locally - DO NOT UPLOAD)

**Files in `docs/` folder are for reference only:**

### For Your Sister:
- **PANDUAN.md** - Complete user guide in Bahasa Indonesia
  - How to edit products
  - How to add new products
  - How to upload images
  - Auto-translation setup

### For You (Tech Setup):
- **README-SETUP.md** - Setup summary and next steps
- **GOOGLE-SHEETS-SETUP.md** - Technical setup guide
  - Google Sheets template structure
  - Google Drive setup
  - API key instructions
- **google-apps-script-translation.js** - Optional auto-translate script

---

## 🔧 Deployment Steps

### Step 1: Prepare Google Integration
Before uploading, complete these:
1. ✅ Create Google Sheet with product data
2. ✅ Setup Google Drive folder for images
3. ✅ Get Google API Key
4. ✅ Update `deployment/products.json` with:
   - Sheet ID
   - API Key
   - Drive Folder ID

### Step 2: Upload to Hosting
1. Connect to hosting via FTP/File Manager
2. Upload ENTIRE `deployment/` folder contents
3. Or zip `deployment/` folder and upload, then extract

### Step 3: Test
1. Visit website URL
2. Open browser console (F12)
3. Look for: "✅ Products loaded from Google Sheets"
4. Verify all products display correctly
5. Test category filters

---

## 📝 Maintenance

### When Sister Edits Products:
- No files need re-upload
- Changes in Google Sheets appear automatically in 2-5 minutes
- Only upload if images change in `deployment/images/`

### When You Update Website Code:
- Edit files in `deployment/` folder
- Re-upload changed files only
- Keep `docs/` folder locally for reference

---

## 🔄 Backup Strategy

**Original files remain in site2/ root as backup:**
- If something goes wrong with deployment, originals are safe
- Can restore from root folder anytime
- `deployment/` is a clean copy for hosting

---

## ✅ Pre-Deployment Checklist

Before uploading to hosting:

- [ ] Google Sheet created and populated
- [ ] Google Drive folder created with images
- [ ] Google API Key obtained
- [ ] `deployment/products.json` updated with IDs
- [ ] All images exist in `deployment/images/`
- [ ] Tested locally (optional)
- [ ] Sister has access to Google Sheet
- [ ] Sister read PANDUAN.md

---

## 📞 Quick Reference

**What sister needs access to:**
- Google Sheet: "Kopi Pagi Pagi - Database Produk"
- Google Drive: "Kopi Pagi Pagi - Foto Produk"
- Guide: `docs/PANDUAN.md`

**What you need to maintain:**
- `deployment/` files on hosting
- Google API Key (in products.json)
- Hosting access

**What never changes:**
- HTML/CSS/JS (unless redesign)
- Logo
- Google Sheet structure

---

**Ready to deploy! Upload `deployment/` folder to hosting.** 🚀
