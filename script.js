// ─── CONFIG ──────────────────────────────
// Change WhatsApp number here (just once!)
const WHATSAPP_NUMBER = '6281217219682';
const INSTAGRAM_HANDLE = 'kopi.pagipagi';
const EMAIL_ADDRESS = 'kopi.bangunpagi@gmail.com';

// ─── TRANSLATIONS ────────────────────────
// All bilingual text in one place
const translations = {
  'nav.home':          { id: 'Beranda', en: 'Home' },
  'nav.about':         { id: 'Tentang', en: 'About' },
  'nav.products':      { id: 'Produk', en: 'Products' },
  'nav.gallery':       { id: 'Galeri', en: 'Gallery' },
  'nav.testimonials':  { id: 'Testimoni', en: 'Testimonials' },
  'nav.contact':       { id: 'Kontak', en: 'Contact' },
  'nav.orderNow':      { id: 'Pesan Sekarang', en: 'Order Now' },
  'hero.badge':        { id: '🌿 Eco-Friendly Hampers & Gifts', en: '🌿 Eco-Friendly Hampers & Gifts' },
  'hero.title1':       { id: 'Hadirkan Kebahagiaan', en: 'Deliver Happiness' },
  'hero.title2':       { id: 'dengan Hadiah Berkelanjutan', en: 'with Sustainable Gifts' },
  'hero.description':  { id: 'Hampers ramah lingkungan dengan kemasan zero waste. Setiap produk kami dibuat dengan cinta untuk bumi dan orang tersayang.', en: 'Eco-friendly hampers with zero waste packaging. Every product is crafted with love for the earth and your loved ones.' },
  'hero.ctaPrimary':   { id: 'Lihat Koleksi', en: 'View Collection' },
  'hero.ctaSecondary': { id: 'Pesan via WhatsApp', en: 'Order via WhatsApp' },
  'hero.statLabel1':   { id: 'Hampers Terkirim', en: 'Hampers Delivered' },
  'about.badge':         { id: 'Tentang Kami', en: 'About Us' },
  'about.title':         { id: 'Kopi Pagi Pagi Custom Hampers', en: 'Kopi Pagi Pagi Custom Hampers' },
  'about.description1':  { id: 'Kami percaya bahwa memberikan hadiah tidak harus merusak lingkungan. Kopi Pagi Pagi hadir sebagai solusi hampers ramah lingkungan yang tetap elegan dan berkesan.', en: "We believe that giving gifts shouldn't harm the environment. Kopi Pagi Pagi offers eco-friendly hampers that remain elegant and memorable." },
  'about.description2':  { id: 'Setiap hampers kami dikemas dengan material daur ulang dan dapat terurai, tanpa mengurangi keindahan dan kualitas. Dari bamboo tumbler hingga kemasan kraft paper — semua dipilih dengan cermat.', en: 'Every hamper is packaged with recycled and biodegradable materials, without compromising beauty and quality. From bamboo tumblers to kraft paper packaging — all carefully selected.' },
  'about.mission1Title': { id: 'Zero Waste', en: 'Zero Waste' },
  'about.mission1Desc':  { id: 'Kemasan 100% dapat terurai dan ramah lingkungan', en: '100% biodegradable and eco-friendly packaging' },
  'about.mission2Title': { id: 'Handcrafted', en: 'Handcrafted' },
  'about.mission2Desc':  { id: 'Setiap hampers dirangkai dengan tangan penuh cinta', en: 'Every hamper is handcrafted with love and care' },
  'about.mission3Title': { id: 'Customizable', en: 'Customizable' },
  'about.mission3Desc':  { id: 'Sesuaikan isi dan desain sesuai kebutuhan Anda', en: 'Customize contents and design to suit your needs' },
  'about.mission4Title': { id: 'Sustainable', en: 'Sustainable' },
  'about.mission4Desc':  { id: 'Mendukung #PlasticFree & #SustainableLiving', en: 'Supporting #PlasticFree & #SustainableLiving' },
  'products.badge':        { id: 'Produk Kami', en: 'Our Products' },
  'products.title':        { id: 'Koleksi Hampers Pilihan', en: 'Premium Hamper Collection' },
  'products.description':  { id: 'Pilihan hampers terbaik untuk berbagai momen spesial. Semua produk kami menggunakan material ramah lingkungan.', en: 'The finest hampers for every special occasion. All our products use eco-friendly materials.' },
  'products.catAll':       { id: 'Semua', en: 'All' },
  'products.catCorporate': { id: 'Korporat', en: 'Corporate' },
  'products.catPersonal':  { id: 'Personal', en: 'Personal' },
  'products.catWedding':   { id: 'Pernikahan', en: 'Wedding' },
  'products.orderViaWa':   { id: 'Pesan via WhatsApp', en: 'Order via WhatsApp' },
  'products.startFrom':    { id: 'Mulai dari', en: 'Starting from' },
  'gallery.badge':       { id: 'Galeri Kami', en: 'Our Gallery' },
  'gallery.title':       { id: 'Inspirasi Hampers Kami', en: 'Our Hamper Inspirations' },
  'gallery.description': { id: 'Lihat koleksi karya kami yang telah membawa kebahagiaan ke berbagai acara.', en: 'Browse our collection of works that have brought joy to various occasions.' },
  'testimonials.badge':       { id: 'Testimoni', en: 'Testimonials' },
  'testimonials.title':       { id: 'Apa Kata Mereka?', en: 'What Do They Say?' },
  'testimonials.description': { id: 'Kepuasan pelanggan adalah prioritas utama kami.', en: 'Customer satisfaction is our top priority.' },
  'contact.badge':         { id: 'Hubungi Kami', en: 'Contact Us' },
  'contact.title':         { id: 'Siap Membuat Hampers Impian Anda?', en: 'Ready to Create Your Dream Hamper?' },
  'contact.description':   { id: 'Hubungi kami melalui WhatsApp untuk konsultasi dan pemesanan. Kami siap membantu Anda membuat hampers yang sempurna!', en: "Contact us via WhatsApp for consultation and ordering. We're ready to help you create the perfect hamper!" },
  'contact.ctaWa':         { id: 'Chat via WhatsApp', en: 'Chat via WhatsApp' },
  'contact.ctaIg':         { id: 'Follow Instagram', en: 'Follow Instagram' },
  'contact.infoWa':        { id: 'WhatsApp', en: 'WhatsApp' },
  'contact.infoIg':        { id: 'Instagram', en: 'Instagram' },
  'contact.infoEmail':     { id: 'Email', en: 'Email' },
  'contact.infoLocation':  { id: 'Lokasi', en: 'Location' },
  'contact.locationValue': { id: 'Indonesia', en: 'Indonesia' },
  'contact.hoursTitle':    { id: 'Jam Operasional', en: 'Operating Hours' },
  'contact.hoursWeekday':  { id: 'Senin - Jumat: 09:00 - 17:00', en: 'Monday - Friday: 09:00 - 17:00' },
  'contact.hoursWeekend':  { id: 'Sabtu: 09:00 - 14:00', en: 'Saturday: 09:00 - 14:00' },
  'contact.impactTitle':   { id: 'Setiap Pesanan Membawa Dampak', en: 'Every Order Makes an Impact' },
  'contact.impactDesc':    { id: 'Bergabunglah dengan kami dalam mendukung kehidupan berkelanjutan', en: 'Join us in supporting sustainable living' },
  'footer.tagline':  { id: 'Hampers ramah lingkungan untuk momen spesial Anda.', en: 'Eco-friendly hampers for your special moments.' },
  'footer.quickLinks': { id: 'Tautan Cepat', en: 'Quick Links' },
  'footer.products':   { id: 'Produk', en: 'Products' },
  'footer.connect':    { id: 'Terhubung', en: 'Connect' },
  'footer.rights':     { id: 'Semua hak dilindungi.', en: 'All rights reserved.' },
  'footer.ecoTag':     { id: 'Dibuat dengan 🌿 untuk bumi', en: 'Made with 🌿 for the earth' },
  // Testimonials
  'testimonial.1': { id: 'Rapi banget packagingnya. Bubble wrapnya super rapi. Terus udh dibungkus jg kardusnya, dikasi pita jg, dalem kardusnya jg udh dikasi yg sobekan2nya itu. Ini udh ready bgt lah pokoknya kl mau dipake buat gift👍🏻 seller jg sangat responsive😊 makasih seller. Sukses terus ya😊', en: 'The packaging is very neat. The bubble wrap is super tidy. Already wrapped in a box, with ribbon too, and inside the box there\'s shredded paper. This is totally ready to use as a gift👍🏻 seller is also very responsive😊 thank you seller. Keep succeeding😊' },
  'testimonial.2': { id: 'makasih admin sdh mau direpotin buat bikin requestn custom form tulisan dll, semuanya keren jadi ga berani bongkar semua soalnya buat kado temen makasih bnyk skli lagi😍💕', en: 'Thank you admin for taking the trouble to make custom form requests, writing, etc., everything is great so I don\'t dare to open it all because it\'s for a friend\'s gift, thank you so much again😍💕' },
  'testimonial.3': { id: 'Tulisan sesuai dengan keinginan saya. Respon cepat dan sangat baik.', en: 'The writing matches my wishes. Fast response and very good.' },
  'testimonial.4': { id: 'sangat puas. pesan untuk acara kantor 30 pcs, barang jadi sesuai desain, packing aman dan pengerjaan sesuai target', en: 'Very satisfied. Ordered for office event 30 pcs, the goods were according to design, safe packing and work on target' },
  'testimonial.5': { id: 'Bagus banget sesuai ekspektasi 👍 Seller nya pun fast respon dan ramah. terimakasih, sukses selalu seller.', en: 'Really good as expected 👍 The seller is fast response and friendly. Thank you, always success seller.' },
  'testimonial.6': { id: 'Hasilnya bagus sesuai permintaan walau jumlah banyak (quality control ok), packing rapi dan kartunya bisa custom. Seller ramah :-) thank you!', en: 'The results are good as requested even though the quantity is large (quality control ok), neat packing and the cards can be customized. Seller is friendly :-) thank you!' },
};


// ─── LANGUAGE TOGGLE ─────────────────────
let currentLang = localStorage.getItem('kopi-pagi-pagi-lang') || 'id';

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('kopi-pagi-pagi-lang', lang);
  document.documentElement.lang = lang;

  // Update toggle button text - shows current language
  const toggle = document.getElementById('langToggle');
  if (toggle) toggle.textContent = lang === 'id' ? 'ID' : 'EN';

  // Update all data-i18n elements
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[key] && translations[key][lang]) {
      el.textContent = translations[key][lang];
    }
  });

  // Update all data-id/data-en elements (product names, descriptions, etc.)
  document.querySelectorAll('[data-id][data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`) || el.textContent;
  });
}

function toggleLanguage() {
  applyLanguage(currentLang === 'id' ? 'en' : 'id');
}


// ─── THEME TOGGLE ────────────────────────
let currentTheme = localStorage.getItem('kopi-pagi-pagi-theme') || 'light';

function applyTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('kopi-pagi-pagi-theme', theme);
  document.documentElement.setAttribute('data-theme', theme);

  // Update toggle button icon - shows current mode
  const toggle = document.getElementById('themeToggle');
  if (toggle) toggle.textContent = theme === 'dark' ? '🌙' : '☀️';
}

function toggleTheme() {
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
}


// ─── NAVBAR ──────────────────────────────
function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // Scroll effect
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileMenu.classList.toggle('open');
    });

    // Close mobile menu on link click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('open');
      });
    });
  }
}


// ─── SMOOTH SCROLL ───────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80; // navbar height
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}


// ─── PRODUCT FILTER ──────────────────────
function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const productCards = document.querySelectorAll('.product-card');
  const productGrid = document.getElementById('productGrid');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      productCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });

      if (productGrid) {
        productGrid.scrollTo({ left: 0, behavior: 'auto' });
      }

      if (typeof window.updateProductCarouselState === 'function') {
        window.updateProductCarouselState();
      }
    });
  });
}


// ─── PRODUCT CAROUSEL NAV ───────────────
function initProductCarousel() {
  const grid = document.getElementById('productGrid');
  const prevBtn = document.getElementById('productPrev');
  const nextBtn = document.getElementById('productNext');

  if (!grid || !prevBtn || !nextBtn) return;

  const getStep = () => {
    const card = grid.querySelector('.product-card:not(.hidden)');
    if (!card) return 300;
    const styles = window.getComputedStyle(grid);
    const gap = parseFloat(styles.columnGap || styles.gap || '16');
    return card.getBoundingClientRect().width + gap;
  };

  const updateButtons = () => {
    const tolerance = 5;
    const maxScroll = Math.max(0, grid.scrollWidth - grid.clientWidth);
    const atStart = grid.scrollLeft <= tolerance;
    const atEnd = grid.scrollLeft >= maxScroll - tolerance;

    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
    prevBtn.hidden = atStart;
    nextBtn.hidden = atEnd;
  };

  window.updateProductCarouselState = updateButtons;

  prevBtn.addEventListener('click', () => {
    grid.scrollBy({ left: -getStep(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    grid.scrollBy({ left: getStep(), behavior: 'smooth' });
  });

  grid.addEventListener('scroll', updateButtons);
  window.addEventListener('resize', updateButtons);
  requestAnimationFrame(updateButtons);
  window.addEventListener('load', updateButtons, { once: true });
}


// ─── GALLERY LIGHTBOX ────────────────────
function openLightbox(el) {
  const img = el.querySelector('img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');

  if (img && lightbox && lightboxImg) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeLightbox() {
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    lightbox.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Close lightbox on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeLightbox();
});


// ─── SCROLL ANIMATIONS ───────────────────
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
}


// ─── TESTIMONIAL SCROLL NAV ──────────────
function initTestimonialNav() {
  const grid = document.getElementById('testimonialGrid');
  const prevBtn = document.getElementById('testimonialPrev');
  const nextBtn = document.getElementById('testimonialNext');

  if (!grid || !prevBtn || !nextBtn) return;

  const getStep = () => {
    const card = grid.querySelector('.testimonial-card');
    if (!card) return 300;
    const styles = window.getComputedStyle(grid);
    const gap = parseFloat(styles.columnGap || styles.gap || '16');
    return card.getBoundingClientRect().width + gap;
  };

  const updateButtons = () => {
    const tolerance = 5;
    const maxScroll = grid.scrollWidth - grid.clientWidth;
    const atStart = grid.scrollLeft <= tolerance;
    const atEnd = grid.scrollLeft >= maxScroll - tolerance;

    prevBtn.disabled = atStart;
    nextBtn.disabled = atEnd;
    prevBtn.hidden = atStart;
    nextBtn.hidden = atEnd;
  };

  prevBtn.addEventListener('click', () => {
    grid.scrollBy({ left: -getStep(), behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    grid.scrollBy({ left: getStep(), behavior: 'smooth' });
  });

  grid.addEventListener('scroll', updateButtons);
  window.addEventListener('resize', updateButtons);
  // Initial state
  requestAnimationFrame(updateButtons);
  window.addEventListener('load', updateButtons, { once: true });
}


// ─── INIT ────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  // Apply saved language
  applyLanguage(currentLang);

  // Apply saved theme
  applyTheme(currentTheme);

  // Language toggle button
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('click', toggleLanguage);
  }

  // Theme toggle button
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
  }

  // Initialize all features
  initNavbar();
  initSmoothScroll();
  initProductFilter();
  initProductCarousel();
  initScrollAnimations();
  initTestimonialNav();
});
