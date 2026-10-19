# Yayasan Pesantren Ar-Raudhah Paseh

Website resmi Yayasan Pesantren Ar-Raudhah Paseh — lembaga pendidikan Islam dan yayasan sosial keagamaan di Kecamatan Paseh, Tasikmalaya, Jawa Barat.

🌐 **Domain:** [arraudhahpaseh.org](https://arraudhahpaseh.org)

---

## Cara Menjalankan

```bash
# Install dependensi
npm install

# Development server
npm run dev
# Buka http://localhost:3000

# Build production
npm run build

# Start production server
npm start

# Lint
npm run lint

# Format kode
npm run format
```

---

## Mengubah Konten

Semua data yang bisa berubah ada di satu tempat:

| File                     | Isi                                                           |
| ------------------------ | ------------------------------------------------------------- |
| `content/site.config.ts` | Kontak, rekening, sosmed, jam kunjungan, statistik, legalitas |
| `content/ppdb.ts`        | Jadwal PPDB, syarat, biaya, FAQ                               |
| `content/programs.ts`    | Unit pendidikan, jadwal harian, pengurus, wakaf               |
| `content/images.ts`      | Manifest semua slot foto                                      |

**Langkah update konten:**

1. Buka file yang sesuai di `content/`
2. Cari `[ISI: ...]` dan ganti dengan data asli
3. Jalankan `npm run build` untuk verifikasi

Lihat daftar lengkap placeholder di **[CONTENT-TODO.md](./CONTENT-TODO.md)**

---

## Menambah & Mengganti Foto

### Tambah foto baru

1. Letakkan foto asli (JPG/PNG) di `/assets-raw/<kategori>/`
   ```
   assets-raw/hero/hero-kegiatan-santri-01.jpg
   assets-raw/pengasuh/pengasuh-kiai-utama-01.jpg
   assets-raw/fasilitas/fasilitas-masjid-01.jpg
   ```
2. Jalankan konversi otomatis:

   ```bash
   npm run images:optimize
   ```

   File WebP akan dibuat di `/public/images/<kategori>/`

3. Verifikasi:
   ```bash
   npm run images:check
   ```

### Path foto di kode

Semua path foto ada di `content/images.ts`. Komponen menggunakan `<AppImage slot="namaSlot" />` — tidak ada path yang ditulis langsung di komponen halaman.

Lihat daftar slot lengkap di **[ASSETS-TODO.md](./ASSETS-TODO.md)**

---

## Menambah Artikel Blog

1. Buat file MDX di `content/posts/`:

   ```
   content/posts/judul-artikel-saya.mdx
   ```

2. Tambahkan frontmatter:

   ```mdx
   ---
   title: "Judul Artikel"
   description: "Deskripsi singkat untuk SEO dan preview"
   date: "2026-10-15"
   category: "Berita Pondok"
   author: "Nama Penulis"
   image: "/images/blog/nama-gambar.webp"
   slug: "judul-artikel-saya"
   ---

   Isi artikel di sini...
   ```

3. Kategori yang tersedia: `Berita Pondok`, `Tausiyah`, `Kegiatan Santri`, `Pengumuman`

---

## Deploy ke Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy production
vercel --prod
```

**Environment variables** yang perlu diset di Vercel:

```env
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=arraudhahpaseh.org   # opsional, analytics
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX                    # opsional, Google Analytics
```

**Domain custom:**

1. Di Vercel Dashboard → Settings → Domains
2. Tambahkan `arraudhahpaseh.org` dan `www.arraudhahpaseh.org`
3. Update DNS di registrar: `A 76.76.19.61` dan `CNAME www cname.vercel-dns.com`

---

## Deploy ke Cloudflare Pages (alternatif)

```bash
# Build
npm run build

# Deploy via Cloudflare Pages
# Upload folder .next/output ke Cloudflare Pages
# Atau connect repository GitHub ke Cloudflare Pages
```

---

## Struktur Proyek

```
/src/app/          → Halaman (App Router Next.js 16)
  page.tsx          → Beranda
  ppdb/             → Halaman PPDB (konversi utama)
  donasi/           → Wakaf & Donasi
  profil/           → Profil yayasan
  pendidikan/       → Program pendidikan
  fasilitas/        → Sarana & fasilitas
  kabar/            → Blog & galeri
  kontak/           → Kontak & lokasi

/components/
  ui/               → Komponen dasar (Button, Card, AppImage, dll)
  layout/           → Navbar, Footer, FloatingWhatsApp, TopBar
  sections/         → Section beranda (Hero, Stats, Programs, dll)
  forms/            → Form PPDB dengan validasi Zod

/content/           → Data situs (UBAH DI SINI untuk update konten)
/lib/               → Utility functions (seo, whatsapp, posts, utils)
/scripts/           → Optimasi dan cek gambar
/public/images/     → Aset foto final (WebP)
/assets-raw/        → Foto mentah sebelum optimasi (tidak di-commit)
```

---

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript strict
- **Styling:** Tailwind CSS v4 (konfigurasi via CSS `@theme`)
- **Font:** Poppins (heading), Inter (body), Amiri (dekoratif Arab)
- **Konten:** MDX (artikel), TypeScript files (`/content/`)
- **Form:** Server Actions + Zod validation + honeypot anti-spam
- **Gambar:** next/image, WebP/AVIF, responsive sizes
- **SEO:** metadata API, JSON-LD (EducationalOrganization, Article, FAQPage, BreadcrumbList)

---

## Asumsi yang Dipakai

1. Pesantren menerima santri putra dan putri (asrama terpisah)
2. Terdapat minimal 2 gelombang PPDB per tahun
3. Metode form PPDB default: formulir online + opsi WhatsApp
4. Tiga rekening bank: BSI, BRI, Mandiri (sesuai prompt)
5. Jam kunjungan default: Senin–Sabtu 08.00–16.00 WIB
6. Pendidikan formal yang tersedia: belum ditentukan, diberi placeholder
7. `image.qualities` required di Next.js 16 — sudah dikonfigurasi
8. `priority` prop di `next/image` deprecated di v16, diganti `preload`/`loading="eager"`
9. Dark mode tidak diimplementasikan untuk menghindari kompleksitas tambahan
10. Blog menggunakan file MDX lokal (tidak headless CMS), struktur sudah disiapkan untuk migrasi

---

## Yang Belum Dikerjakan / Perlu Perhatian

- **Foto asli:** Semua foto masih placeholder — isi sesuai ASSETS-TODO.md
- **Data faktual:** Semua `[ISI: ...]` belum diisi — lihat CONTENT-TODO.md
- **Brosur PDF:** File PPDB PDF perlu diunggah ke `/public/images/brosur/brosur-ppdb.pdf`
- **Logo SVG:** Perlu dibuat logo asli dan letakkan di `/public/images/logo/logo-yayasan.svg`
- **OG Image:** Perlu dibuat gambar 1200×630px untuk Open Graph
- **Favicon:** Letakkan di `/public/favicon.ico` dan `/public/apple-touch-icon.png`
- **Google Maps embed:** Isi URL iframe di `site.config.ts` → `social.googleMapsEmbed`
- **Supabase adapter:** Disiapkan tapi tidak aktif — aktifkan di `src/app/ppdb/actions.ts`
- **RSS Feed:** Belum diimplementasikan (bisa ditambahkan di `src/app/feed.xml/route.ts`)
- **Lighthouse audit:** Perlu dijalankan setelah foto asli tersedia

---

_Dibangun dengan ❤️ untuk Yayasan Pesantren Ar-Raudhah Paseh_
