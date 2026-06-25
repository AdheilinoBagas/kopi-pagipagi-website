/**
 * Products Loader - Google Sheets Integration
 * Loads products from Google Sheets with fallback to local products.json
 */

class ProductsLoader {
  constructor() {
    this.products = [];
    this.categories = [];
    this.settings = {};
    this.currentLang = 'id';
    this.googleSheetsUrl = '';
    this.googleDriveBaseUrl = '';
  }

  /**
   * Initialize and load products
   */
  async init() {
    try {
      // FIRST: Load configuration from local products.json
      const configResponse = await fetch('products.json');
      const localData = await configResponse.json();
      this.settings = localData.settings;
      this.categories = localData.categories;
      
      // THEN: Try to load products from Google Sheets
      const sheetsData = await this.loadFromGoogleSheets();
      if (sheetsData) {
        this.products = sheetsData.products;
        console.log('✅ Products loaded from Google Sheets');
        return true;
      }
      
      // If Google Sheets fails, use products from local JSON
      this.products = localData.products;
      console.log('✅ Products loaded from local JSON (Google Sheets unavailable)');
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
    // If no Google Sheets ID is configured, return null
    if (!this.settings.googleSheetsId) {
      return null;
    }

    const sheetId = this.settings.googleSheetsId;
    const apiKey = this.settings.googleApiKey;
    
    // Google Sheets API endpoint - using the actual sheet name
    const sheetName = encodeURIComponent('Kopi Pagi Pagi - Produk Database');
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}!A2:J1000?key=${apiKey}`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) return null;
      
      const data = await response.json();
      const rows = data.values || [];
      
      // Transform rows to product objects
      const products = rows.map((row, index) => ({
        id: index + 1,
        name: {
          id: row[1] || '',
          en: row[2] || row[1] || ''
        },
        description: {
          id: row[3] || '',
          en: row[4] || row[3] || ''
        },
        price: row[5] || '',
        category: row[6] || 'personal',
        image: row[7] || '',
        featured: row[8]?.toLowerCase() === 'yes' || row[8]?.toLowerCase() === 'ya',
        status: row[9]?.toLowerCase() || 'active'
      })).filter(p => p.status === 'active');

      return {
        products,
        categories: this.categories,
        settings: this.settings
      };
    } catch (error) {
      console.error('Error loading from Google Sheets:', error);
      return null;
    }
  }

  /**
   * Get image URL (from Google Drive or local)
   */
  getImageUrl(filename) {
    if (!filename) return 'images/placeholder.webp';
    
    // If Google Drive folder ID is set, use Drive
    if (this.settings.googleDriveFolder) {
      // Google Drive direct link format
      return `https://drive.google.com/uc?export=view&id=${this.extractDriveFileId(filename)}`;
    }
    
    // Otherwise use local images folder
    return `${this.settings.imageBasePath || 'images/'}${filename}`;
  }

  /**
   * Extract Google Drive file ID from filename or URL
   */
  extractDriveFileId(input) {
    // If it's already a file ID (no slashes), return as-is
    if (!input.includes('/') && !input.includes('?')) {
      return input;
    }
    
    // Extract from Google Drive URL
    const match = input.match(/[-\w]{25,}/);
    return match ? match[0] : input;
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
    if (window.observeElements) {
      window.observeElements();
    }
  }

  /**
   * Render category filters
   */
  renderCategories(containerId = 'categoryFilters') {
    const container = document.querySelector('.product-filters');
    if (!container) return;

    container.innerHTML = this.categories.map(cat => `
      <button class="filter-btn ${cat.id === 'all' ? 'active' : ''}" 
              data-filter="${cat.id}">
        ${this.getText(cat.name)}
      </button>
    `).join('');
  }
}

// Initialize products loader
const productsLoader = new ProductsLoader();

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initProducts);
} else {
  initProducts();
}

async function initProducts() {
  await productsLoader.init();
  productsLoader.renderProducts();
  setupCategoryFilters();
}

function setupCategoryFilters() {
  // Use event delegation on the parent container
  const filterContainer = document.querySelector('.product-filters');
  
  if (!filterContainer) {
    console.error('Filter container not found');
    return;
  }
  
  // Check if already initialized to avoid duplicate listeners
  if (filterContainer.dataset.initialized === 'true') {
    console.log('Filters already initialized, skipping');
    return;
  }
  
  // Mark as initialized
  filterContainer.dataset.initialized = 'true';
  
  // Add single event listener to the container (event delegation)
  filterContainer.addEventListener('click', function(e) {
    const btn = e.target.closest('.filter-btn');
    
    if (!btn) return;
    
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Filter clicked:', btn.getAttribute('data-filter'));
    
    // Remove active class from all buttons
    filterContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    // Filter products by showing/hiding instead of re-rendering
    const category = btn.getAttribute('data-filter');
    const productCards = document.querySelectorAll('.product-card');
    
    console.log('Filtering products for category:', category, 'Total products:', productCards.length);
    
    productCards.forEach(card => {
      const cardCategory = card.getAttribute('data-category');
      if (category === 'all' || cardCategory === category) {
        card.classList.remove('hidden');
        card.style.display = '';
      } else {
        card.classList.add('hidden');
        card.style.display = 'none';
      }
    });
    
    // Reset scroll position and update carousel state
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
      productGrid.scrollTo({ left: 0, behavior: 'auto' });
    }
    
    if (typeof window.updateProductCarouselState === 'function') {
      window.updateProductCarouselState();
    }
  });
  
  console.log('Category filters initialized with event delegation');
}
