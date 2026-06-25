# 📖 Panduan Mengelola Produk Website Kopi Pagi Pagi

**Untuk: Kakak (Pemilik Kopi Pagi Pagi)**  
**Dibuat: 25 Juni 2026**

---

## 🎯 Ringkasan Cepat

Website ini menggunakan **Google Sheets** untuk mengelola produk. Kakak bisa:
- ✅ Menambah produk baru
- ✅ Mengedit produk yang ada
- ✅ Menghapus produk
- ✅ Mengubah harga dan deskripsi
- ✅ Mengganti foto produk

**Semua dilakukan dari Google Sheets - seperti pakai Excel!**

---

## 📋 Daftar Isi

1. [Setup Awal (Satu Kali)](#setup-awal)
2. [Cara Mengedit Produk](#cara-mengedit-produk)
3. [Cara Menambah Produk Baru](#cara-menambah-produk-baru)
4. [Cara Upload Foto Produk](#cara-upload-foto-produk)
5. [Cara Menghapus Produk](#cara-menghapus-produk)
6. [FAQ & Troubleshooting](#faq)

---

## 🚀 Setup Awal (Satu Kali)

### Langkah 1: Buka Google Sheets Template

1. Buka link ini: **[LINK AKAN DIBERIKAN]**
2. Klik **"File" → "Buat Salinan"** (Make a Copy)
3. Ubah nama file jadi: `Kopi Pagi Pagi - Database Produk`
4. Simpan di Google Drive kakak

### Langkah 2: Setup Google Drive untuk Foto

1. Buat folder baru di Google Drive: `Kopi Pagi Pagi - Foto Produk`
2. Klik kanan folder → **"Bagikan" (Share)**
3. Ubah akses jadi: **"Siapa saja yang punya link bisa melihat"**
4. Copy link folder (akan dipakai nanti)

### Langkah 3: Setup Auto-Translate (Opsional tapi Disarankan!)

**Supaya tidak perlu ketik 2 kali (Bahasa Indonesia & English):**

1. **Buka Google Sheets** yang sudah dibuat
2. **Klik sel C2** (kolom "Product Name EN")
3. **Ketik formula ini:**
   ```
   =GOOGLETRANSLATE(B2,"id","en")
   ```
4. **Tekan Enter**
5. **Drag pojok kanan bawah sel C2 ke bawah** sampai baris terakhir
6. **Ulangi untuk kolom E2** (Description EN):
   ```
   =GOOGLETRANSLATE(D2,"id","en")
   ```
7. **Drag ke bawah** seperti tadi

**Sekarang kakak HANYA perlu ketik di kolom B dan D (Bahasa Indonesia)!**  
Kolom C dan E otomatis terisi English! 🎉

### Langkah 4: Hubungi Adik untuk Setup Teknis

Kirim ke adik:
- ✅ Link Google Sheets yang sudah dibuat
- ✅ Link Google Drive folder foto

Adik akan setup website supaya otomatis baca dari Google Sheets kakak.

---

## ✏️ Cara Mengedit Produk

### Langkah-langkah:

1. **Buka Google Sheets** `Kopi Pagi Pagi - Database Produk`
2. **Cari produk** yang mau diedit (lihat kolom B = Nama Produk)
3. **Klik sel** yang mau diubah
4. **Ketik** informasi baru
5. **Tekan Enter** - selesai!

### Contoh: Mengubah Harga

```
Sebelum: Rp 350.000
Sesudah: Rp 400.000
```

Langsung klik kolom "Harga" (Kolom F) dan ketik `Rp 400.000`

### Yang Bisa Diedit:
- **Kolom B:** Nama Produk (Bahasa Indonesia) ⭐ KETIK DI SINI
- **Kolom C:** Nama Produk (English) ✨ AUTO-TRANSLATE (jangan diketik manual)
- **Kolom D:** Deskripsi (Bahasa Indonesia) ⭐ KETIK DI SINI
- **Kolom E:** Deskripsi (English) ✨ AUTO-TRANSLATE (jangan diketik manual)
- **Kolom F:** Harga
- **Kolom G:** Kategori (corporate / personal / wedding)
- **Kolom H:** Nama File Foto
- **Kolom I:** Drive_Image_ID ✨ AUTO-FILL (dengan script, atau isi manual)
- **Kolom J:** Featured (YES/NO - produk unggulan ditampilkan lebih menonjol)
- **Kolom K:** Status (active/inactive - sembunyikan produk tanpa hapus)

💡 **TIPS:** Kalau sudah setup auto-translate (Langkah 3), kakak HANYA ketik di kolom B dan D!
Kolom C dan E otomatis terisi sendiri.

⏱️ **Website akan update otomatis dalam 2-5 menit**

---

## ➕ Cara Menambah Produk Baru

### Langkah-langkah:

1. **Buka Google Sheets**
2. **Scroll ke bawah** sampai baris terakhir yang ada produk
3. **Klik baris kosong di bawahnya**
4. **Isi kolom-kolom** sesuai template:

### Template Isi Produk Baru:

| Kolom | Isi Apa? | Contoh |
|-------|----------|--------|
| A | ID (nomor urut) | 5 |
| B | Nama Produk (Indonesia) | Hampers Lebaran |
| C | Nama Produk (English) | Eid Hamper |
| D | Deskripsi (Indonesia) | Hampers spesial untuk Hari Raya... |
| E | Deskripsi (English) | Special hamper for Eid celebration... |
| F | Harga | Rp 300.000 |
| G | Kategori | personal |
| H | Nama File Foto | product-lebaran.webp |
| I | Drive_Image_ID | (auto-fill dengan script) |
| J | Featured? | YES (produk unggulan) atau NO |
| K | Status | active |

5. **Upload foto produk** ke Google Drive (lihat bagian Upload Foto)
6. **Save** otomatis - selesai!

⏱️ **Produk baru muncul di website dalam 2-5 menit**

---

## 📸 Cara Upload Foto Produk

### Metode 1: Upload ke Google Drive (Paling Mudah)

1. **Buka folder** `Kopi Pagi Pagi - Foto Produk` di Google Drive
2. **Drag & drop** foto dari komputer/HP ke folder
3. **Tunggu upload selesai**
4. **Klik kanan foto** → Klik **"Dapatkan Link" (Get Link)**
5. **Copy** kode panjang di tengah link (contoh: `1a2b3c4d5e6f7g8h9i0j`)
6. **Paste** kode itu ke kolom H di Google Sheets

### Contoh Link Google Drive:
```
https://drive.google.com/file/d/1a2b3c4d5e6f7g8h9i0j/view
                              ^^^^^^^^^^^^^^^^^^^^
                              Copy bagian ini aja
```

### Format Foto yang Disarankan:
- **Format:** .webp atau .jpg atau .png
- **Ukuran:** Maksimal 2 MB
- **Dimensi:** 800x800 px atau 1000x1000 px (kotak)
- **Nama file:** Pakai huruf kecil, ganti spasi dengan `-`
  - ✅ Benar: `product-lebaran.webp`
  - ❌ Salah: `Produk Lebaran.jpg`

---

## 🗑️ Cara Menghapus Produk

### Opsi 1: Sembunyikan Produk (Recommended)

Produk tidak muncul di website, tapi data tetap tersimpan.

1. **Buka Google Sheets**
2. **Cari produk** yang mau disembunyikan
3. **Ubah kolom K (Status)** dari `active` jadi `inactive`
4. **Selesai** - produk hilang dari website tapi data aman

### Opsi 2: Hapus Permanent

⚠️ **HATI-HATI:** Data akan hilang permanent!

1. **Klik nomor baris** (di sebelah kiri)
2. **Klik kanan** → **"Hapus Baris" (Delete Row)**
3. **Confirm** - produk terhapus permanent

💡 **Tip:** Lebih baik pakai Opsi 1 (hidden) supaya bisa dimunculkan lagi nanti

---

## ❓ FAQ & Troubleshooting

### Q: Produk baru tidak muncul di website?
**A:** Tunggu 2-5 menit. Kalau masih belum muncul:
- Cek kolom K (Status) apakah `active`
- Cek koneksi internet
- Refresh website (Ctrl + F5)
- Hubungi adik untuk bantuan

### Q: Foto tidak muncul di website?
**A:** 
- Cek nama file foto di kolom H sudah benar
- Cek foto sudah diupload ke Google Drive
- Cek folder Google Drive sudah di-share publik
- Coba upload ulang foto

### Q: Salah edit, bagaimana undo?
**A:** 
- Tekan **Ctrl + Z** (Windows) atau **Cmd + Z** (Mac)
- Atau klik **Edit → Undo** di menu atas

### Q: Bisa edit dari HP?
**A:** 
- ✅ **BISA!** Download app "Google Sheets" di HP
- Login pakai akun Google yang sama
- Buka file, edit seperti biasa

### Q: Bisa tambah kategori baru?
**A:**
- ✅ **BISA!** Ketik kategori baru di kolom G
- Contoh: `birthday`, `anniversary`, `christmas`
- Filter kategori otomatis muncul di website

---

## 📞 Butuh Bantuan?

Hubungi adik kalau ada masalah:
- 💬 **WhatsApp:** [Nomor HP Adik]
- 📧 **Email:** [Email Adik]

---

**Selamat mencoba! 🎉**

*Panduan ini dibuat khusus untuk Kakak supaya bisa kelola website sendiri tanpa ribet.*
