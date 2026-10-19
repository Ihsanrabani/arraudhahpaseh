# Tech Stack & Konvensi — Ar-Raudhah Paseh

## Stack Utama

- **Framework:** Next.js 15 (App Router) + TypeScript strict mode
- **Styling:** Tailwind CSS v4 + shadcn/ui (Radix UI primitives)
- **Konten:** MDX (artikel/blog), TypeScript files (`/content/*.ts`) untuk data situs
- **Form:** Server Actions + Zod validation
- **Gambar:** `next/image`, WebP/AVIF, lazy loading
- **Font:** `next/font` — Poppins (heading), Inter (body), Amiri (dekorasi Arab)
- **Deploy:** Vercel (primary), Cloudflare Pages (alternative)

## Konvensi Kode

- TypeScript strict; tidak ada `any` eksplisit
- Komponen: PascalCase, file: kebab-case
- Semua path gambar lewat `/content/images.ts` manifest, tidak hardcode di komponen
- Data yang berubah (kontak, rekening, jadwal) → `/content/site.config.ts`
- Teks UI dalam komponen; teks konten dalam data files
- Server Components by default; `"use client"` hanya bila perlu interaktivitas

## Lapisan Konten (`/content`)

```
/content
  site.config.ts    # kontak, rekening, jadwal, sosmed, jam kunjungan
  ppdb.ts           # gelombang, syarat, biaya, FAQ
  programs.ts       # unit pendidikan, kurikulum, jadwal harian
  images.ts         # manifest semua slot gambar
  posts/            # artikel MDX
```

Rancangan adapter: komponen UI tidak tahu sumber data; kelak bisa swap ke headless CMS tanpa ubah komponen.

## Form & Data Sensitif

- Validasi Zod di server (Server Action)
- Honeypot field + rate limiting untuk anti-spam
- Data pendaftar: default kirim ke WA panitia (whatsapp helper)
- Adapter Supabase disiapkan tapi tidak aktif default
- Jangan simpan data sensitif tanpa enkripsi + kebijakan privasi

## Kualitas

- ESLint (next/core-web-vitals) + Prettier
- `npm run build` dan `npm run lint` harus lulus sebelum commit
- Target Lighthouse mobile: Performance ≥ 90, Accessibility ≥ 95, Best Practices ≥ 95, SEO ≥ 95

## Security Headers (next.config.ts)

- Content-Security-Policy
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy

## Struktur Direktori

```
/app            → routes (App Router)
/components     → ui/, layout/, sections/, forms/
/content        → site.config.ts, ppdb.ts, programs.ts, images.ts, posts/*.mdx
/lib            → utils, seo, whatsapp, validators
/public/images  → aset final WebP/AVIF per kategori
/assets-raw     → foto mentah sebelum optimasi
/scripts        → images-optimize.mjs, images-check.mjs
/.kiro          → steering/, hooks/
```
