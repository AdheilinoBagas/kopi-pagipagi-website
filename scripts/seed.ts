/**
 * Seed script — populates Sanity with existing site content.
 *
 * Usage:
 *   SANITY_API_TOKEN=xxx npx tsx scripts/seed.ts
 *
 * You need a Sanity API token with "Editor" permissions.
 * Create one at https://sanity.io/manage → project → API → Tokens.
 */
import {createClient} from '@sanity/client'

const client = createClient({
  projectId: process.env.SANITY_STUDIO_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || 'rj2im5qa',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN || '',
  useCdn: false,
})

async function seed() {
  console.log('🌱 Seeding Sanity with existing content...')

  // ─── Site Settings ───
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    siteName: 'Kopi Pagi Pagi',
    whatsappNumber: '6281217219682',
    instagramHandle: 'kopi.pagipagi',
    email: 'kopi.bangunpagi@gmail.com',
  })
  console.log('✅ Site settings created')

  // ─── Hero Section ───
  await client.createOrReplace({
    _id: 'heroSection',
    _type: 'heroSection',
    badge: {id: '🌿 Eco-Friendly Hampers & Gifts', en: '🌿 Eco-Friendly Hampers & Gifts'},
    titleLine1: {id: 'Hadiah yang Hangat di Hati,', en: 'Warm on the Heart,'},
    titleLine2: {id: 'Ringan untuk Bumi', en: 'Light on the Earth'},
    description: {
      id: 'Hampers custom ramah lingkungan dengan kemasan zero waste. Dirangkai tangan untuk orang tersayang — dan untuk bumi tempat kita tinggal.',
      en: 'Eco-friendly custom hampers with zero-waste packaging. Handcrafted for the people you love — and for the planet we share.',
    },
    stats: [
      {value: '500+', label: {id: 'Hampers Terkirim', en: 'Hampers Delivered'}},
      {value: '✨', label: {id: 'Fast Custom Service', en: 'Fast Custom Service'}},
      {value: '🎁', label: {id: 'Premium Packaging', en: 'Premium Packaging'}},
      {value: '📦', label: {id: 'Bulk Orders Welcome', en: 'Bulk Orders Welcome'}},
    ],
  })
  console.log('✅ Hero section created')

  // ─── About Section ───
  await client.createOrReplace({
    _id: 'aboutSection',
    _type: 'aboutSection',
    badge: {id: 'Tentang Kami', en: 'About Us'},
    title: {id: 'Kehangatan yang Dirangkai Tangan', en: 'Warmth, Handcrafted'},
    description1: {
      id: 'Semuanya berawal dari hal sederhana: secangkir kopi hangat di pagi hari. Momen kecil yang membuat hari terasa lebih hangat — cara diam-diam untuk berkata "kamu berharga".',
      en: "It all began with something simple: a cup of coffee in the morning. A small moment that makes the day feel warmer — a quiet way of saying you matter.",
    },
    description2: {
      id: 'Itulah rasa yang kami titipkan lewat setiap hampers — cara untuk berkata "aku ingat kamu", tanpa meninggalkan sampah untuk bumi. Setiap kotak dirangkai dengan tangan dari material yang dapat terurai.',
      en: 'That is the feeling we tuck into every hamper — a way to say "I remember you", without leaving waste behind. Each box is arranged by hand from materials that return to the earth.',
    },
    missionCards: [
      {title: {id: 'Zero Waste', en: 'Zero Waste'}, description: {id: 'Kemasan 100% dapat terurai dan ramah lingkungan', en: '100% biodegradable and eco-friendly packaging'}},
      {title: {id: 'Handcrafted', en: 'Handcrafted'}, description: {id: 'Setiap hampers dirangkai dengan tangan penuh cinta', en: 'Every hamper is handcrafted with love and care'}},
      {title: {id: 'Customizable', en: 'Customizable'}, description: {id: 'Sesuaikan isi dan desain sesuai kebutuhan Anda', en: 'Customize contents and design to suit your needs'}},
      {title: {id: 'Sustainable', en: 'Sustainable'}, description: {id: 'Mendukung #PlasticFree & #SustainableLiving', en: 'Supporting #PlasticFree & #SustainableLiving'}},
    ],
  })
  console.log('✅ About section created')

  // ─── Categories ───
  const categories = [
    {_id: 'cat-corporate', _type: 'category', name: {id: 'Korporat', en: 'Corporate'}, slug: {_type: 'slug', current: 'corporate'}, order: 1},
    {_id: 'cat-personal', _type: 'category', name: {id: 'Personal', en: 'Personal'}, slug: {_type: 'slug', current: 'personal'}, order: 2},
    {_id: 'cat-wedding', _type: 'category', name: {id: 'Pernikahan', en: 'Wedding'}, slug: {_type: 'slug', current: 'wedding'}, order: 3},
  ]
  for (const cat of categories) {
    await client.createOrReplace(cat)
  }
  console.log('✅ Categories created')

  // ─── Products ───
  const products = [
    {
      _id: 'product-1', _type: 'product',
      name: {id: 'Hampers Korporat Premium', en: 'Premium Corporate Hamper'},
      description: {id: 'Hampers eksklusif untuk klien dan mitra bisnis. Termasuk bamboo tumbler, organiser kulit, dan camilan organik.', en: 'Exclusive hampers for clients and business partners. Includes bamboo tumbler, leather organizer, and organic snacks.'},
      price: 'Rp 350.000',
      category: {_type: 'reference', _ref: 'cat-corporate'},
      featured: true, status: 'active', order: 1,
    },
    {
      _id: 'product-2', _type: 'product',
      name: {id: 'Tumbler Bouquet', en: 'Tumbler Bouquet'},
      description: {id: 'Tumbler bamboo dengan rangkaian bunga kering yang cantik. Hadiah sempurna untuk orang tersayang.', en: 'Bamboo tumbler with beautiful dried flower arrangement. The perfect gift for your loved ones.'},
      price: 'Rp 185.000',
      category: {_type: 'reference', _ref: 'cat-personal'},
      featured: true, status: 'active', order: 2,
    },
    {
      _id: 'product-3', _type: 'product',
      name: {id: 'Hampers Pernikahan Elegan', en: 'Elegant Wedding Hamper'},
      description: {id: 'Hampers pernikahan dengan kemasan zero waste. Ceramic mug, sabun organik, dan succulent cantik.', en: 'Wedding hampers with zero waste packaging. Ceramic mug, organic soap, and beautiful succulent.'},
      price: 'Rp 275.000',
      category: {_type: 'reference', _ref: 'cat-wedding'},
      featured: true, status: 'active', order: 3,
    },
    {
      _id: 'product-4', _type: 'product',
      name: {id: 'Custom Branded Gift Set', en: 'Custom Branded Gift Set'},
      description: {id: 'Set hadiah dengan logo perusahaan Anda. Tumbler, sedotan bamboo, dan teh organik dalam pouch kraft.', en: 'Gift set with your company logo. Tumbler, bamboo straw, and organic tea in kraft pouch.'},
      price: 'Rp 225.000',
      category: {_type: 'reference', _ref: 'cat-corporate'},
      featured: false, status: 'active', order: 4,
    },
  ]
  for (const p of products) {
    await client.createOrReplace(p)
  }
  console.log('✅ Products created')

  // ─── Testimonials ───
  const testimonials = [
    {_id: 'test-1', _type: 'testimonial', quote: {id: 'Rapi banget packagingnya. Bubble wrapnya super rapi. Terus udh dibungkus jg kardusnya, dikasi pita jg, dalem kardusnya jg udh dikasi yg sobekan2nya itu. Ini udh ready bgt lah pokoknya kl mau dipake buat gift👍🏻 seller jg sangat responsive😊 makasih seller. Sukses terus ya😊', en: "The packaging is very neat. The bubble wrap is super tidy. Already wrapped in a box, with ribbon too, and inside the box there's shredded paper. This is totally ready to use as a gift👍🏻 seller is also very responsive😊 thank you seller. Keep succeeding😊"}, authorName: 'b*****t', avatarLetter: 'B', order: 1},
    {_id: 'test-2', _type: 'testimonial', quote: {id: 'makasih admin sdh mau direpotin buat bikin requestn custom form tulisan dll, semuanya keren jadi ga berani bongkar semua soalnya buat kado temen makasih bnyk skli lagi😍💕', en: "Thank you admin for taking the trouble to make custom form requests, writing, etc., everything is great so I don't dare to open it all because it's for a friend's gift, thank you so much again😍💕"}, authorName: 'hayatunthoiyibah', avatarLetter: 'H', order: 2},
    {_id: 'test-3', _type: 'testimonial', quote: {id: 'Tulisan sesuai dengan keinginan saya. Respon cepat dan sangat baik.', en: 'The writing matches my wishes. Fast response and very good.'}, authorName: 'wpriyati', avatarLetter: 'W', order: 3},
    {_id: 'test-4', _type: 'testimonial', quote: {id: 'sangat puas. pesan untuk acara kantor 30 pcs, barang jadi sesuai desain, packing aman dan pengerjaan sesuai target', en: 'Very satisfied. Ordered for office event 30 pcs, the goods were according to design, safe packing and work on target'}, authorName: 'Bayu', avatarLetter: 'B', order: 4},
    {_id: 'test-5', _type: 'testimonial', quote: {id: 'Bagus banget sesuai ekspektasi 👍 Seller nya pun fast respon dan ramah. terimakasih, sukses selalu seller.', en: 'Really good as expected 👍 The seller is fast response and friendly. Thank you, always success seller.'}, authorName: 'Astika', avatarLetter: 'A', order: 5},
    {_id: 'test-6', _type: 'testimonial', quote: {id: 'Hasilnya bagus sesuai permintaan walau jumlah banyak (quality control ok), packing rapi dan kartunya bisa custom. Seller ramah :-) thank you!', en: 'The results are good as requested even though the quantity is large (quality control ok), neat packing and the cards can be customized. Seller is friendly :-) thank you!'}, authorName: 'R***a', avatarLetter: 'R', order: 6},
  ]
  for (const t of testimonials) {
    await client.createOrReplace(t)
  }
  console.log('✅ Testimonials created')

  // ─── Gallery Items ───
  const gallery = [
    {_id: 'gal-1', _type: 'galleryItem', alt: {id: 'Eco-friendly hampers', en: 'Eco-friendly hampers'}, size: 'large', order: 1},
    {_id: 'gal-2', _type: 'galleryItem', alt: {id: 'Koleksi hampers premium', en: 'Premium hamper collection'}, size: 'normal', order: 2},
    {_id: 'gal-3', _type: 'galleryItem', alt: {id: 'Hampers korporat', en: 'Corporate hampers'}, size: 'normal', order: 3},
    {_id: 'gal-4', _type: 'galleryItem', alt: {id: 'Hampers ulang tahun', en: 'Birthday hampers'}, size: 'normal', order: 4},
    {_id: 'gal-5', _type: 'galleryItem', alt: {id: 'Tumbler bouquet', en: 'Tumbler bouquet'}, size: 'normal', order: 5},
    {_id: 'gal-6', _type: 'galleryItem', alt: {id: 'Stasiun kemasan sustainable', en: 'Sustainable packaging station'}, size: 'normal', order: 6},
    {_id: 'gal-7', _type: 'galleryItem', alt: {id: 'Hampers pernikahan', en: 'Wedding hampers'}, size: 'normal', order: 7},
    {_id: 'gal-8', _type: 'galleryItem', alt: {id: 'Pengiriman hampers', en: 'Hamper delivery'}, size: 'normal', order: 8},
    {_id: 'gal-9', _type: 'galleryItem', alt: {id: 'Custom branded gift', en: 'Custom branded gift'}, size: 'normal', order: 9},
  ]
  for (const g of gallery) {
    await client.createOrReplace(g)
  }
  console.log('✅ Gallery items created')

  // ─── Contact Section ───
  await client.createOrReplace({
    _id: 'contactSection',
    _type: 'contactSection',
    badge: {id: 'Hubungi Kami', en: 'Contact Us'},
    title: {id: 'Siap Membuat Hampers Impian Anda?', en: 'Ready to Create Your Dream Hamper?'},
    description: {
      id: 'Hubungi kami melalui WhatsApp untuk konsultasi dan pemesanan. Kami siap membantu Anda membuat hampers yang sempurna!',
      en: "Contact us via WhatsApp for consultation and ordering. We're ready to help you create the perfect hamper!",
    },
    impactTitle: {id: 'Setiap Pesanan Membawa Dampak', en: 'Every Order Makes an Impact'},
    impactDescription: {id: 'Bergabunglah dengan kami dalam mendukung kehidupan berkelanjutan', en: 'Join us in supporting sustainable living'},
    impactStats: [
      {value: '500+', label: 'Hampers'},
      {value: '0%', label: 'Plastik'},
      {value: '100%', label: 'Eco'},
    ],
    operatingHours: {
      weekday: {id: 'Senin - Jumat: 09:00 - 17:00', en: 'Monday - Friday: 09:00 - 17:00'},
      weekend: {id: 'Sabtu: 09:00 - 14:00', en: 'Saturday: 09:00 - 14:00'},
    },
  })
  console.log('✅ Contact section created')

  console.log('\n🎉 Seed complete! All content has been added to Sanity.')
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
