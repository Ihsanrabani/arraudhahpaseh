# Asset Strategy — Ar-Raudhah Paseh

## Prinsip Utama

- Foto/logo asli ditambahkan SETELAH pengembangan selesai
- Komponen `<AppImage>` membungkus `next/image`; menerima `slot` (kunci dari manifest)
- Jika file asli belum ada → tampilkan placeholder hijau zamrud + label nama slot
- Layout tidak boleh shift saat foto asli masuk (rasio & ukuran sama persis)
- DILARANG memakai foto orang asli dari internet

## Manifest Terpusat

File: `/content/images.ts`
Setiap slot: `{ src, alt, aspectRatio, width, height, sizes, priority? }`
Komponen halaman TIDAK menulis path gambar langsung — selalu lewat manifest.

## Struktur Direktori

```
/public/images/
  hero/           # slider beranda, poster video
  pengasuh/       # foto pengasuh & kiai
  pengurus/       # foto dewan pengurus yayasan
  legalitas/      # scan sertifikat, akta, SK
  fasilitas/      # masjid, asrama, kelas, perpustakaan, dll
  kegiatan/       # dokumentasi kegiatan santri
  galeri/         # foto galeri umum
  blog/           # thumbnail artikel
  logo/           # logo yayasan (SVG + PNG transparan), favicon, OG image
  brosur/         # brosur PPDB PDF & thumbnail

/assets-raw/      # foto mentah JPG/PNG sebelum dioptimasi (tidak di-commit)
```

## Konvensi Nama File

Format: `kategori-deskripsi-nomor.webp`
Contoh:

- `hero-kegiatan-santri-01.webp`
- `pengasuh-kiai-utama-01.webp`
- `fasilitas-masjid-01.webp`
- `logo-yayasan.svg`

## Skrip Optimasi

- `npm run images:optimize` — konversi JPG/PNG dari `/assets-raw/` → WebP/AVIF, resize multi-width, output ke `/public/images/`
- `npm run images:check` — laporan slot mana yang masih pakai placeholder

## Placeholder Behavior

- Background: `#0D5C3A` (emerald) dengan opacity 20%
- Label: nama slot, warna text muted
- Rasio aspek sesuai manifest agar tidak ada layout shift
- Komponen mendeteksi `src` kosong/undefined → render placeholder

## Format & Ukuran Target

- Format: WebP (primary), AVIF (modern browsers)
- Hero: 1920×1080, 1280×720, 768×432 (responsive)
- Thumbnail blog: 800×450 (16:9)
- Foto pengurus/pengasuh: 400×400 (1:1) atau 400×500 (4:5)
- Galeri: 800×600 (4:3)
- Logo: SVG (scalable) + PNG 512×512 (fallback)
- OG Image: 1200×630 PNG

## Logo & Branding

- Slot `logo` (SVG/PNG transparan): placeholder teks "Ar-Raudhah" dengan ornamen geometris
- Favicon: 32×32, 180×180 (apple-touch-icon)
- OG Image 1200×630: dapat diganti dengan file asli di `/public/images/logo/og-image.png`
