# 🚀 Deployment Guide: Cloudflare Pages + Google Sheets CMS

**Project:** Kopi Pagi Pagi Website  
**Created:** 25 Juni 2026  
**Estimated Time:** 30-45 minutes

---

## 📋 Overview

This guide will walk you through:
1. Setting up Google Sheets as your CMS
2. Getting Google API credentials
3. Deploying to Cloudflare Pages
4. Connecting everything together

---

## ✅ Prerequisites

Before starting, make sure you have:
- ✅ Google Account (for Google Sheets & Drive)
- ✅ GitHub Account (free - for code hosting)
- ✅ Cloudflare Account (free - for website hosting)
- ✅ Git installed on your PC

---

# PART 1: Setup Google Sheets CMS

## Step 1: Create Your Product Database

### 1.1. Open Google Sheets
1. Go to: https://sheets.google.com
2. Click **"Blank"** to create new spreadsheet
3. Rename it: **"Kopi Pagi Pagi - Product Database"**

### 1.2. Add Column Headers (Row 1)

Type these headers in Row 1:

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| ID | Nama Produk (ID) | Product Name (EN) | Deskripsi (ID) | Description (EN) | Harga | Kategori | Gambar | Drive_Image_ID | Featured | Status |

### 1.3. Add Auto-Translate Formulas

**Column C (Cell C2):**
```
=GOOGLETRANSLATE(B2,"id","en")
```

**Column E (Cell E2):**
```
=GOOGLETRANSLATE(D2,"id","en")
```

**Drag both formulas down** to at least row 10.

### 1.4. Add Example Products (Optional)

Add your products starting from Row 2. Example:

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| 1 | Hampers Korporat Premium | (auto) | Hampers eksklusif untuk klien... | (auto) | Rp 350.000 | corporate | product-corporate.webp | | YES | active |
| 2 | Tumbler Bouquet | (auto) | Tumbler bamboo dengan bunga... | (auto) | Rp 185.000 | personal | product-tumbler.webp | | YES | active |

### 1.5. Share Your Sheet (IMPORTANT!)

1. Click **"Share"** button (top-right)
2. Click **"Change to anyone with the link"**
3. Set permission: **"Viewer"**
4. Click **"Copy link"**
5. **Save this link!** You'll need it later.

**Your Sheet ID is the long code in the URL:**
```
https://docs.google.com/spreadsheets/d/1abc123xyz456.../edit
                                        ^^^^^^^^^^^^^^^^
                                        This is your Sheet ID
```

---

## Step 2: Create Google Drive Folder for Images

### 2.1. Create Folder
1. Go to: https://drive.google.com
2. Click **"New" → "Folder"**
3. Name it: **"Kopi Pagi Pagi - Product Images"**

### 2.2. Upload Your Product Images
1. Open the folder
2. Click **"New" → "File upload"**
3. Upload all your `.webp` images from `E:\Project\kopi pagipagi\site2\deployment\images\`
4. Make sure filenames match what's in Google Sheets Column H

### 2.3. Share Folder Publicly (IMPORTANT!)
1. Right-click the folder
2. Click **"Share" → "Anyone with the link"**
3. Set permission: **"Viewer"**
4. Click **"Copy link"**
5. **Save this link!**

**Your Folder ID is the code in the URL:**
```
https://drive.google.com/drive/folders/1xyz789abc123...
                                         ^^^^^^^^^^^^^^^^
                                         This is your Folder ID
```

---

## Step 3: Get Google API Key

### 3.1. Go to Google Cloud Console
1. Visit: https://console.cloud.google.com
2. Click **"Select a project"** (top bar)
3. Click **"NEW PROJECT"**

### 3.2. Create New Project
1. **Project name:** `Kopi-Pagi-Pagi-Website`
2. Click **"CREATE"**
3. Wait 30 seconds, then click **"SELECT PROJECT"**

### 3.3. Enable Required APIs

**Enable Google Sheets API:**
1. In search bar (top), type: **"Google Sheets API"**
2. Click **"Google Sheets API"** result
3. Click **"ENABLE"**
4. Wait for it to activate

**Enable Google Drive API:**
1. In search bar (top), type: **"Google Drive API"**
2. Click **"Google Drive API"** result
3. Click **"ENABLE"**
4. Wait for it to activate

### 3.4. Create API Key
1. Click **"Credentials"** (left sidebar)
2. Click **"+ CREATE CREDENTIALS"** (top)
3. Select **"API key"**
4. A popup shows your API key
5. Click **"Copy"** and **SAVE IT!** (You can't see it again easily)
6. Click **"EDIT API KEY"**

### 3.5. Restrict API Key (Security)
1. **API restrictions:**
   - Select **"Restrict key"**
   - Check ✅ **"Google Sheets API"**
   - Check ✅ **"Google Drive API"**
2. **Application restrictions:**
   - Select **"HTTP referrers (web sites)"**
   - Click **"ADD"**
   - Enter: `*.pages.dev/*` (allows Cloudflare Pages)
   - Click **"ADD"** again
   - Enter your custom domain if you have one
3. Click **"SAVE"**

---

# PART 2: Prepare for Deployment

## Step 4: Update products.json with Your IDs

### 4.1. Open products.json
Open file: `E:\Project\kopi pagipagi\site2\deployment\products.json`

### 4.2. Update Settings Section (Lines 98-103)

Find this section at the bottom:
```json
"settings": {
  "whatsapp": "6281217219682",
  "googleDriveFolder": "",
  "googleSheetsId": "",
  "imageBasePath": "images/"
}
```

Replace with YOUR values:
```json
"settings": {
  "whatsapp": "6281217219682",
  "googleDriveFolder": "YOUR_DRIVE_FOLDER_ID_HERE",
  "googleSheetsId": "YOUR_GOOGLE_SHEETS_ID_HERE",
  "googleApiKey": "YOUR_GOOGLE_API_KEY_HERE",
  "imageBasePath": "images/"
}
```

**Example:**
```json
"settings": {
  "whatsapp": "6281217219682",
  "googleDriveFolder": "1xyz789abc123def456ghi",
  "googleSheetsId": "1abc123xyz456def789ghi",
  "googleApiKey": "AIzaSyABC123XYZ456DEF789GHI",
  "imageBasePath": "images/"
}
```

Save the file!

---

# PART 3: Deploy to Cloudflare Pages

## Step 5: Push Code to GitHub
### 5.1. Create GitHub Repository

1. Go to: https://github.com
2. Click **"+"** (top-right) → **"New repository"**
3. **Repository name:** `kopi-pagi-pagi-website`
4. ⚠️ **IMPORTANT:** Select **"Private"** (NOT Public!)
5. **DO NOT** check "Add README" or "Add .gitignore"
6. Click **"Create repository"**

**Why Private?**
- ✅ Your API keys in `products.json` will be safe
- ✅ Only you and Cloudflare Pages can access the code
- ✅ No complicated environment variable setup needed
- ✅ Repository is hidden from public view

### 5.2. Initialize Git in Your Project

Open **Git Bash** in Windows and run:

```bash
cd /e/Project/kopi\ pagipagi/site2/deployment
git init
git add .
git commit -m "Initial commit: Kopi Pagi Pagi website"
```

### 5.3. Push to GitHub

Replace `YOUR_USERNAME` with your GitHub username:

```bash
git remote add origin https://github.com/YOUR_USERNAME/kopi-pagi-pagi-website.git
git branch -M main
git push -u origin main
```

**Enter your GitHub username and password (or Personal Access Token) when prompted.**

---

## Step 6: Deploy to Cloudflare Pages

### 6.1. Sign Up / Login to Cloudflare
1. Go to: https://pages.cloudflare.com
2. Click **"Sign up"** (or **"Log in"** if you have account)
3. **Free plan is sufficient!**

### 6.2. Connect GitHub Repository
1. Click **"Create a project"**
2. Click **"Connect to Git"**
3. Select **"GitHub"**
4. Click **"Connect GitHub"**
5. Authorize Cloudflare to access your GitHub

### 6.3. Select Your Repository
1. Find **"kopi-pagi-pagi-website"** in the list
2. Click **"Begin setup"**

### 6.4. Configure Build Settings

**Project name:** `kopi-pagi-pagi` (or your preferred subdomain)

**Build settings:**
- **Framework preset:** None
- **Build command:** (leave empty)
- **Build output directory:** `/` (root)

Click **"Save and Deploy"**

### 6.5. Wait for Deployment
- Cloudflare will build and deploy your site
- **Takes 1-3 minutes**
- You'll see: "Success! Your site is live!"

### 6.6. Get Your Website URL

Your site is now live at:
```
https://kopi-pagi-pagi.pages.dev
```

**🎉 Congratulations! Your website is LIVE!**

---

# PART 4: Test Everything

## Step 7: Verify Google Sheets Integration

### 7.1. Open Your Website
Visit: `https://kopi-pagi-pagi.pages.dev` (or your URL)

### 7.2. Open Browser Console
- Press **F12** (Windows)
- Click **"Console"** tab

### 7.3. Check for Success Messages
You should see:
```
✅ Products loaded from Google Sheets
✅ Loaded 4 products
```

**If you see errors:**
```
❌ Could not load from Google Sheets, using local fallback
```

**Troubleshooting:**
1. Check `products.json` has correct IDs
2. Check Google Sheets is shared publicly (Anyone with link)
3. Check Google Drive folder is shared publicly
4. Check API key restrictions allow `*.pages.dev`
5. Wait 5 minutes for API key restrictions to propagate

### 7.4. Test Product Display
1. Products should load from Google Sheets
2. Images should display from Google Drive
3. Categories should filter correctly
4. WhatsApp button should work

---

## Step 8: Update Google Sheets and See Changes

### 8.1. Edit a Product in Google Sheets
1. Open your Google Sheet
2. Change a product name or price
3. Save (automatic)

### 8.2. Refresh Your Website
1. Wait **2-5 minutes** for cache to expire
2. Refresh website (Ctrl + F5)
3. **Changes should appear!**

**🎉 Your CMS is working!**

---

# PART 5: Custom Domain (Optional)

## Step 9: Add Your Own Domain

### 9.1. Buy Domain (if you don't have one)
Recommended registrars:
- **Niagahoster.co.id** (Indonesian)
- **Namecheap.com** (International)
- **Cloudflare Registrar** (Cheapest)

### 9.2. Add Domain to Cloudflare Pages
1. Go to Cloudflare Pages dashboard
2. Click your project **"kopi-pagi-pagi"**
3. Click **"Custom domains"** tab
4. Click **"Set up a custom domain"**
5. Enter your domain: `kopipagipagi.com`
6. Click **"Continue"**

### 9.3. Update DNS Records
Cloudflare will show you DNS records to add:

**At your domain registrar:**
1. Go to DNS settings
2. Add **CNAME record:**
   - **Name:** `@` (or your subdomain)
   - **Value:** `kopi-pagi-pagi.pages.dev`
   - **TTL:** Automatic

3. Wait **10-60 minutes** for DNS propagation

### 9.4. Enable HTTPS
1. Cloudflare automatically provisions SSL certificate
2. Your site will be accessible via: `https://kopipagipagi.com`

**🎉 Your custom domain is live!**

---

# PART 6: Maintenance & Updates

## How to Update Your Website

### Method 1: Update Content (Google Sheets)
1. Edit Google Sheets
2. Changes appear in 2-5 minutes
3. **No deployment needed!**

### Method 2: Update Code (Git + Cloudflare)
1. Edit files in `E:\Project\kopi pagipagi\site2\deployment\`
2. Open Git Bash:
   ```bash
   cd /e/Project/kopi\ pagipagi/site2/deployment
   git add .
   git commit -m "Updated design"
   git push
   ```
3. Cloudflare auto-deploys in 1-3 minutes

---

# Troubleshooting

## Issue: Products not loading from Google Sheets

**Solution:**
1. Check Google Sheets is shared: **"Anyone with link"** → Viewer
2. Check Google Drive folder is shared: **"Anyone with link"** → Viewer
3. Check `products.json` has correct Sheet ID, Folder ID, API Key
4. Open browser console (F12) and check error messages
5. Verify API key restrictions allow `*.pages.dev`

## Issue: Images not displaying

**Solution:**
1. Check image filenames in Column H match uploaded files
2. Check Google Drive folder is shared publicly
3. Check Drive Folder ID in `products.json` is correct
4. Try re-uploading images to Google Drive

## Issue: Changes in Google Sheets not appearing

**Solution:**
1. Wait 5 minutes (cache expiration)
2. Hard refresh: **Ctrl + Shift + R** (Windows)
3. Check browser console for errors
4. Verify Sheet ID is correct in `products.json`

## Issue: Website shows old version after push

**Solution:**
1. Go to Cloudflare Pages dashboard
2. Check **"Deployments"** tab
3. Wait for build to finish (green checkmark)
4. Hard refresh browser: **Ctrl + Shift + R**

---

# Summary

## ✅ What You've Accomplished:

1. ✅ Created Google Sheets CMS with auto-translation
2. ✅ Set up Google Drive for product images
3. ✅ Got Google API credentials
4. ✅ Deployed website to Cloudflare Pages (FREE!)
5. ✅ Connected Google Sheets to website
6. ✅ Website is LIVE and publicly accessible
7. ✅ Your sister can now manage products from Google Sheets

## 📊 Your Live Website:

**URL:** `https://kopi-pagi-pagi.pages.dev` (or your custom domain)

**CMS:** Google Sheets (edit products anytime)

**Hosting:** Cloudflare Pages (FREE, fast, secure)

**CDN:** Jakarta, Singapore, Global (automatic)

---

# Next Steps

## For Your Sister:

Give her:
1. ✅ Google Sheets link
2. ✅ Google Drive folder link
3. ✅ PANDUAN.md guide (in Bahasa Indonesia)

She can now:
- Add new products
- Edit prices and descriptions
- Upload product images
- Hide/show products

**All from Google Sheets - NO CODING REQUIRED!**

---

# Support

## Need Help?

**Documentation:**
- `PANDUAN.md` - Guide for your sister (Bahasa Indonesia)
- `GOOGLE-SHEETS-SETUP.md` - Technical setup reference
- `FILE-ORGANIZATION.md` - Project structure

**Contact:**
- Ask your tech-savvy sibling/friend
- Cloudflare Community: https://community.cloudflare.com
- Google API Console: https://console.cloud.google.com

---

**🎉 Congratulations! Your website is LIVE with Google Sheets CMS!**

**Created:** 25 Juni 2026  
**Author:** AI Assistant (Hermes Agent)  
**Project:** Kopi Pagi Pagi Website
