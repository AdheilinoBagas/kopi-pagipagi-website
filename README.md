# Kopi Pagi Pagi - Eco-Friendly Custom Hampers Website

## 🌿 Overview
A modern, bilingual (Indonesian/English) website for Kopi Pagi Pagi's eco-friendly custom hampers business, featuring Google Sheets CMS integration for easy product management.

## ✨ Features

- **Bilingual Support**: Switch between Indonesian and English
- **Google Sheets CMS**: Manage products via Google Sheets (no code changes needed)
- **Product Categories**: Corporate, Personal, Wedding
- **Responsive Design**: Mobile-first, works on all devices
- **Image Gallery**: Lightbox for viewing product images
- **Customer Testimonials**: Carousel of real customer reviews
- **WhatsApp Integration**: Direct ordering via WhatsApp
- **Eco-Friendly Focus**: Zero waste, sustainable packaging messaging

## 📁 File Structure

```
site/
├── index.html                    # Main HTML file
├── style.css                     # All styles
├── script.js                     # Main JavaScript (UI interactions)
├── products-loader.js            # Google Sheets integration logic
├── products.json                 # Fallback product data
├── google-sheets-template.csv    # CSV template for Google Sheets
├── GOOGLE_SHEETS_SETUP.md        # Complete setup instructions
├── README.md                     # This file
├── images/
│   └── logo.png                  # Site logo
└── images/                       # Product and gallery images
    ├── hero.webp
    ├── about.webp
    ├── product-corporate.webp
    └── ...
```

## 🚀 Quick Start

### Option 1: Use with Google Sheets (Recommended)
1. Follow instructions in `GOOGLE_SHEETS_SETUP.md`
2. Import `google-sheets-template.csv` to your Google Sheet
3. Update products in Google Sheet
4. Refresh website to see changes

### Option 2: Use Local JSON
1. Edit `products.json` to add/update products
2. Place product images in `images/` folder
3. Refresh website

## 🔧 Configuration

### Google Sheets Settings
In `index.html`, update these values if needed:

```javascript
const productsLoader = new ProductsLoader({
  googleSheetsId: 'YOUR_GOOGLE_SHEETS_ID',
  googleApiKey: 'YOUR_GOOGLE_API_KEY',
  googleDriveFolder: 'YOUR_GOOGLE_DRIVE_FOLDER_ID'
});
```

### Contact Information
In `script.js`, update these constants:

```javascript
const WHATSAPP_NUMBER = '6281217219682';
const INSTAGRAM_HANDLE = 'kopi.pagipagi';
const EMAIL_ADDRESS = 'kopi.bangunpagi@gmail.com';
```

## 📊 Google Sheets Structure

| Column | Description | Example |
|--------|-------------|---------|
| A | ID | 1 |
| B | Name (ID) | Hampers Korporat Premium |
| C | Name (EN) | Premium Corporate Hamper |
| D | Description (ID) | Hampers eksklusif... |
| E | Description (EN) | Exclusive hampers... |
| F | Price | Rp 350.000 |
| G | Category | corporate |
| H | Image | product-corporate.webp |
| I | Google Drive Image ID | Google Drive file ID (primary) |
| J | Featured | Is featured product? | YES, NO, ya, TRUE, FALSE |
| K | Status | Product status | active, inactive |

## 🎨 Customization

### Colors
Main colors are defined in CSS variables in `style.css`:

```css
:root {
  --primary: #2d5016;
  --primary-dark: #1a3009;
  --accent: #6b8e23;
  --text: #1a1a1a;
  --bg: #ffffff;
  --bg-soft: #f8f9fa;
}
```

### Adding New Categories
1. Add category in Google Sheet
2. Update `getDefaultCategories()` in `products-loader.js`
3. Add translation in `script.js` translations object

## 🌐 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select branch and root folder
4. Save

### Netlify
1. Connect GitHub repository
2. Build command: (none needed)
3. Publish directory: `/`
4. Deploy

### Vercel
```bash
vercel --prod
```

## 📱 Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Products not loading from Google Sheets?
- Check browser console (F12) for errors
- Verify Google Sheet is publicly shared
- Confirm API key is valid
- Check sheet name is "Sheet1"

### Images not displaying?
- Verify Google Drive folder is publicly shared
- Check image file IDs are correct
- Ensure local fallback images exist in `images/`

### Language toggle not working?
- Check browser console for JavaScript errors
- Clear browser cache
- Verify all translations exist in `script.js`

## 📄 License

© 2026 Kopi Pagi Pagi. All rights reserved.

## 🤝 Support

For questions or issues:
- Email: kopi.bangunpagi@gmail.com
- WhatsApp: +62 812-1721-9682
- Instagram: @kopi.pagipagi
