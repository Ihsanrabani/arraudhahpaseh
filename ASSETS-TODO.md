# ASSETS-TODO — Yayasan Pesantren Ar-Raudhah Paseh

Semua slot foto yang perlu diisi. Jalankan `npm run images:check` untuk status terkini.

## Cara Menambah Foto

1. Letakkan foto mentah (JPG/PNG) di `/assets-raw/<kategori>/`
2. Jalankan `npm run images:optimize` → file WebP otomatis dibuat di `/public/images/`
3. Pastikan nama file sesuai kolom "Nama File yang Diharapkan"
4. Jalankan `npm run images:check` untuk verifikasi

---

## Logo & Branding

| Slot       | Lokasi Pemakaian | Ukuran/Rasio   | Nama File                             | Status   |
| ---------- | ---------------- | -------------- | ------------------------------------- | -------- |
| `logo`     | Navbar, Footer   | SVG / 160×60px | `public/images/logo/logo-yayasan.svg` | ⬜ Belum |
| `logoIcon` | Favicon, dll     | 48×48px PNG    | `public/images/logo/logo-icon.png`    | ⬜ Belum |
| `ogImage`  | Open Graph SEO   | 1200×630px PNG | `public/images/logo/og-image.png`     | ⬜ Belum |

---

## Hero (Slider Beranda)

| Slot    | Lokasi                | Ukuran/Rasio     | Nama File                                         | Status   |
| ------- | --------------------- | ---------------- | ------------------------------------------------- | -------- |
| `hero1` | Slide 1 beranda (LCP) | 1920×1080 (16:9) | `public/images/hero/hero-kegiatan-santri-01.webp` | ⬜ Belum |
| `hero2` | Slide 2 beranda       | 1920×1080 (16:9) | `public/images/hero/hero-kegiatan-santri-02.webp` | ⬜ Belum |
| `hero3` | Slide 3 beranda       | 1920×1080 (16:9) | `public/images/hero/hero-kegiatan-santri-03.webp` | ⬜ Belum |

---

## Pengasuh & Pengurus

| Slot              | Lokasi                             | Ukuran/Rasio    | Nama File                                                 | Status   |
| ----------------- | ---------------------------------- | --------------- | --------------------------------------------------------- | -------- |
| `pengasuhUtama`   | Sambutan beranda, halaman pengurus | 400×500px (4:5) | `public/images/pengasuh/pengasuh-kiai-utama-01.webp`      | ⬜ Belum |
| `pengurusPembina` | Halaman pengurus                   | 400×400px (1:1) | `public/images/pengurus/pengurus-pembina-01.webp`         | ⬜ Belum |
| `pengurusKetua`   | Halaman pengurus                   | 400×400px (1:1) | `public/images/pengurus/pengurus-ketua-01.webp`           | ⬜ Belum |
| `pengurusKepala`  | Halaman pengurus                   | 400×400px (1:1) | `public/images/pengurus/pengurus-kepala-madrasah-01.webp` | ⬜ Belum |

---

## Legalitas

| Slot                    | Lokasi            | Ukuran/Rasio    | Nama File                                                  | Status   |
| ----------------------- | ----------------- | --------------- | ---------------------------------------------------------- | -------- |
| `sertifikatAkta`        | Halaman legalitas | 800×1100px (A4) | `public/images/legalitas/legalitas-akta-notaris-01.webp`   | ⬜ Belum |
| `sertifikatKemenkumham` | Halaman legalitas | 800×1100px (A4) | `public/images/legalitas/legalitas-sk-kemenkumham-01.webp` | ⬜ Belum |
| `sertifikatKemenag`     | Halaman legalitas | 800×1100px (A4) | `public/images/legalitas/legalitas-sk-kemenag-01.webp`     | ⬜ Belum |

---

## Fasilitas

| Slot                    | Lokasi            | Ukuran/Rasio    | Nama File                                                | Status   |
| ----------------------- | ----------------- | --------------- | -------------------------------------------------------- | -------- |
| `fasilitasMasjid`       | Halaman fasilitas | 800×600px (4:3) | `public/images/fasilitas/fasilitas-masjid-01.webp`       | ⬜ Belum |
| `fasilitasAsramaPutra`  | Halaman fasilitas | 800×600px (4:3) | `public/images/fasilitas/fasilitas-asrama-putra-01.webp` | ⬜ Belum |
| `fasilitasAsramaPutri`  | Halaman fasilitas | 800×600px (4:3) | `public/images/fasilitas/fasilitas-asrama-putri-01.webp` | ⬜ Belum |
| `fasilitasKelas`        | Halaman fasilitas | 800×600px (4:3) | `public/images/fasilitas/fasilitas-kelas-01.webp`        | ⬜ Belum |
| `fasilitasPerpustakaan` | Halaman fasilitas | 800×600px (4:3) | `public/images/fasilitas/fasilitas-perpustakaan-01.webp` | ⬜ Belum |
| `fasilitasOlahraga`     | Halaman fasilitas | 800×600px (4:3) | `public/images/fasilitas/fasilitas-olahraga-01.webp`     | ⬜ Belum |
| `fasilitasDapur`        | Halaman fasilitas | 800×600px (4:3) | `public/images/fasilitas/fasilitas-dapur-01.webp`        | ⬜ Belum |
| `fasilitasKantin`       | Halaman fasilitas | 800×600px (4:3) | `public/images/fasilitas/fasilitas-kantin-01.webp`       | ⬜ Belum |

---

## Kegiatan Santri (Galeri Beranda)

| Slot        | Lokasi                    | Ukuran/Rasio    | Nama File                                        | Status   |
| ----------- | ------------------------- | --------------- | ------------------------------------------------ | -------- |
| `kegiatan1` | Galeri beranda (1 dari 6) | 800×600px (4:3) | `public/images/kegiatan/kegiatan-santri-01.webp` | ⬜ Belum |
| `kegiatan2` | Galeri beranda (2 dari 6) | 800×600px (4:3) | `public/images/kegiatan/kegiatan-santri-02.webp` | ⬜ Belum |
| `kegiatan3` | Galeri beranda (3 dari 6) | 800×600px (4:3) | `public/images/kegiatan/kegiatan-santri-03.webp` | ⬜ Belum |
| `kegiatan4` | Galeri beranda (4 dari 6) | 800×600px (4:3) | `public/images/kegiatan/kegiatan-santri-04.webp` | ⬜ Belum |
| `kegiatan5` | Galeri beranda (5 dari 6) | 800×600px (4:3) | `public/images/kegiatan/kegiatan-santri-05.webp` | ⬜ Belum |
| `kegiatan6` | Galeri beranda (6 dari 6) | 800×600px (4:3) | `public/images/kegiatan/kegiatan-santri-06.webp` | ⬜ Belum |

---

## Blog / Artikel

| Slot        | Lokasi              | Ukuran/Rasio     | Nama File                                 | Status   |
| ----------- | ------------------- | ---------------- | ----------------------------------------- | -------- |
| `blogPost1` | Thumbnail artikel 1 | 800×450px (16:9) | `public/images/blog/blog-artikel-01.webp` | ⬜ Belum |
| `blogPost2` | Thumbnail artikel 2 | 800×450px (16:9) | `public/images/blog/blog-artikel-02.webp` | ⬜ Belum |
| `blogPost3` | Thumbnail artikel 3 | 800×450px (16:9) | `public/images/blog/blog-artikel-03.webp` | ⬜ Belum |

---

## Bank & Brosur

| Item         | Lokasi         | Format         | Nama File                              | Status   |
| ------------ | -------------- | -------------- | -------------------------------------- | -------- |
| Logo BSI     | Halaman donasi | PNG transparan | `public/images/logo/bank-bsi.png`      | ⬜ Belum |
| Logo BRI     | Halaman donasi | PNG transparan | `public/images/logo/bank-bri.png`      | ⬜ Belum |
| Logo Mandiri | Halaman donasi | PNG transparan | `public/images/logo/bank-mandiri.png`  | ⬜ Belum |
| Brosur PPDB  | Halaman PPDB   | PDF            | `public/images/brosur/brosur-ppdb.pdf` | ⬜ Belum |

---

**Total: 30 slot foto + 1 PDF brosur + 3 logo bank**

Jalankan `npm run images:check` untuk status terbaru.
