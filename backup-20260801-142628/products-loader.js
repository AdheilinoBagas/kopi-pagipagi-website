/**
 * Products Loader - Google Sheets Integration
 * Loads products from Google Sheets with fallback to local products.json
 */

class ProductsLoader {
  constructor(config = {}) {
    this.products = [];
    this.categories = [];
    this.settings = {
      googleSheetsId: config.googleSheetsId || '',
      googleApiKey: config.googleApiKey || '',
      googleDriveFolder: config.googleDriveFolder || '',
      whatsapp: '6281217219682',
      imageBasePath: 'images/'
    };
    this.currentLang = 'id';
  }

  /**
   * Initialize and load products
   */
  async init() {
    // Try to load from Google Sheets first if configured
    if (this.settings.googleSheetsId && this.settings.googleApiKey) {
      try {
        const sheetsData = await this.loadFromGoogleSheets();
        if (sheetsData) {
          this.products = sheetsData.products;
          this.categories = sheetsData.categories || this.getDefaultCategories();
          console.log('✅ Products loaded from Google Sheets:', this.products.length);
          return true;
        }
      } catch (error) {
        console.warn('⚠️ Could not load from Google Sheets, using local fallback:', error);
      }
    }

    // Fallback to local products.json
    try {
      const response = await fetch('products.json');
      const data = await response.json();
      this.products = data.products;
      this.categories = data.categories || this.getDefaultCategories();
      // Don't overwrite Google Sheets config from local JSON
      if (data.settings) {
        this.settings = { 
          ...data.settings, 
          ...this.settings // Keep constructor config as priority
        };
      }
      console.log('✅ Products loaded from local JSON');
      return true;
    } catch (error) {
      console.error('❌ Failed to load products:', error);
      return false;
    }
  }

  /**
   * Load products from Google Sheets
   */
  async loadFromGoogleSheets() {
    const sheetId = this.settings.googleSheetsId;
    const apiKey = this.settings.googleApiKey;
    
    // Google Sheets API endpoint - fetching from Sheet1 (columns A-K)
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/Sheet1!A2:K1000?key=${apiKey}`;
    
    try {
      console.log('📡 Fetching from Google Sheets...');
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Google Sheets API error: ${response.status}`);
      }
      
      const data = await response.json();
      const rows = data.values || [];
      
      console.log(`📊 Received ${rows.length} rows from Google Sheets`);
      
      // Transform rows to product objects
      // Columns: A=ID, B=Name(ID), C=Name(EN), D=Desc(ID), E=Desc(EN), F=Price, G=Category, H=LocalImage, I=DriveImageID, J=Featured, K=Status
      const products = rows
        .map((row, index) => ({
          id: row[0] || (index + 1),
          name: {
            id: row[1] || '',
            en: row[2] || row[1] || ''
          },
          description: {
            id: row[3] || '',
            en: row[4] || row[3] || ''
          },
          price: row[5] || '',
          category: (row[6] || 'personal').toLowerCase(),
          imageLocal: row[7] || '',
          imageDrive: row[8] || '',
          image: row[8] || row[7] || '', // Prefer Drive ID, fallback to local
          featured: row[9]?.toLowerCase() === 'yes' || row[9]?.toLowerCase() === 'ya' || row[9] === 'TRUE',
          status: (row[10]?.toLowerCase() || 'active')
        }))
        .filter(p => p.status === 'active' && p.name.id);

      console.log(`✅ Processed ${products.length} active products`);

      // Extract unique categories from products
      const categories = this.extractCategories(products);

      return {
        products,
        categories
      };
    } catch (error) {
      console.error('❌ Error loading from Google Sheets:', error);
      throw error;
    }
  }

  /**
   * Extract unique categories from products
   */
  extractCategories(products) {
    const categoryMap = new Map();
    
    // Always add "All" first
    categoryMap.set('all', { id: 'all', name: { id: 'Semua', en: 'All' } });
    
    // Extract unique categories from products
    products.forEach(product => {
      const catId = product.category.toLowerCase();
      if (!categoryMap.has(catId)) {
        // Capitalize first letter for display
        const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
        categoryMap.set(catId, {
          id: catId,
          name: {
            id: capitalize(catId),
            en: capitalize(catId)
          }
        });
      }
    });
    
    return Array.from(categoryMap.values());
  }

  /**
   * Get default categories
   */
  getDefaultCategories() {
    return [
      { id: 'all', name: { id: 'Semua', en: 'All' } },
      { id: 'corporate', name: { id: 'Korporat', en: 'Corporate' } },
      { id: 'personal', name: { id: 'Personal', en: 'Personal' } },
      { id: 'wedding', name: { id: 'Pernikahan', en: 'Wedding' } }
    ];
  }

  /**
   * Get image URL (from Google Drive or local)
   */
  getImageUrl(filename) {
    if (!filename) return 'images/placeholder.webp';
    
    // Check if it's already a full URL
    if (filename.startsWith('http://') || filename.startsWith('https://')) {
      return filename;
    }
    
    // If Google Drive folder ID is set, construct Drive URL
    if (this.settings.googleDriveFolder) {
      const fileId = this.extractDriveFileId(filename);
      return `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`;
    }
    
    // Otherwise use local images folder
    return `${this.settings.imageBasePath || 'images/'}${filename}`;
  }

  /**
   * Extract Google Drive file ID from filename or URL
   */
  extractDriveFileId(input) {
    if (!input) return '';
    
    // If it's already a file ID (no slashes), return as-is
    if (!input.includes('/') && !input.includes('?') && !input.includes('=')) {
      return input;
    }
    
    // Extract from Google Drive URL patterns
    const patterns = [
      /\/d\/([-\w]{25,})/,
      /id=([-\w]{25,})/,
      /[-\w]{25,}/
    ];
    
    for (const pattern of patterns) {
      const match = input.match(pattern);
      if (match) {
        return match[1] || match[0];
      }
    }
    
    return input;
  }

  /**
   * Get products by category
   */
  getProductsByCategory(category = 'all') {
    if (category === 'all') {
      return this.products.filter(p => p.status === 'active');
    }
    return this.products.filter(p => p.category === category && p.status === 'active');
  }

  /**
   * Get localized text
   */
  getText(textObj) {
    if (typeof textObj === 'string') return textObj;
    return textObj[this.currentLang] || textObj.id || '';
  }

  /**
   * Set current language
   */
  setLanguage(lang) {
    this.currentLang = lang;
  }

  /**
   * Render products to the grid
   */
  renderProducts(containerId = 'productGrid', category = 'all') {
    const container = document.getElementById(containerId);
    if (!container) return;

    const products = this.getProductsByCategory(category);
    
    container.innerHTML = products.map(product => `
      <div class="product-card animate-on-scroll" data-category="${product.category}">
        <div class="product-image">
          <img src="${this.getImageUrl(product.image)}" alt="${this.getText(product.name)}">
          ${product.featured ? '<span class="product-badge">⭐ Featured</span>' : ''}
        </div>
        <div class="product-body">
          <h3 class="product-name">${this.getText(product.name)}</h3>
          <p class="product-desc">${this.getText(product.description)}</p>
          <div class="product-price">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/>
              <line x1="7" y1="7" x2="7.01" y2="7"/>
            </svg>
            <span data-i18n="products.startFrom">Mulai dari</span> ${product.price}
          </div>
          <a href="https://wa.me/${this.settings.whatsapp}?text=Halo%20Kopi%20Pagi%20Pagi%2C%20saya%20tertarik%20dengan%20${encodeURIComponent(this.getText(product.name))}" 
             target="_blank" class="btn btn-primary btn-block">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            <span data-i18n="products.orderViaWa">Pesan via WhatsApp</span>
          </a>
        </div>
      </div>
    `).join('');

    // Re-trigger scroll animations
    if (typeof initScrollAnimations === 'function') {
      initScrollAnimations();
    }
  }

  /**
   * Render category filters dynamically
   */
  renderCategoryFilters(containerId = 'productFilters') {
    const container = document.querySelector('.product-filters') || document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = this.categories.map((category, index) => `
      <button class="filter-btn ${index === 0 ? 'active' : ''}" data-filter="${category.id}">
        <span data-lang-id>${category.name.id}</span>
        <span data-lang-en style="display:none">${category.name.en}</span>
      </button>
    `).join('');

    // Re-initialize filter event listeners
    if (typeof initProductFilter === 'function') {
      initProductFilter();
    }
  }
}
