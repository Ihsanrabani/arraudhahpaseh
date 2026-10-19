# Design System — Ar-Raudhah Paseh

## Warna (CSS Variables / Tailwind Tokens)

```
--color-primary:        #0D5C3A   /* Deep Emerald Green */
--color-primary-dark:   #1A4329   /* Footer, hover state */
--color-accent:         #D4AF37   /* Warm Gold */
--color-accent-dark:    #C59B27   /* Gold hover */
--color-bg:             #FBFBFB   /* Background utama */
--color-bg-white:       #FFFFFF
--color-text:           #1A1A1A   /* Body text */
--color-text-muted:     #6B7280   /* Subtitle, meta */
```

### Aturan Kontras (WCAG AA)

- Teks emas (#D4AF37) di atas putih: DILARANG untuk teks <18px
- Emas digunakan untuk: aksen, garis, ikon, teks di atas hijau gelap
- Teks putih di atas primary/primary-dark: ✓ OK
- Teks #1A1A1A di atas #FBFBFB: ✓ OK

## Tipografi

- **Heading:** Poppins (via next/font) — weight 600, 700
- **Body:** Inter (via next/font) — weight 400, 500; min 16px di mobile
- **Arab/Dekoratif:** Amiri atau Scheherazade New — hanya untuk ayat/hadits dekorasi
- **Scale:**
  - h1: 2.25rem–3rem (clamp)
  - h2: 1.75rem–2.25rem
  - h3: 1.25rem–1.5rem
  - body: 1rem (16px)
  - small: 0.875rem

## Spacing & Layout

- Container max-width: 1280px, padding horizontal: 1rem (mobile) → 2rem (md) → 4rem (lg)
- Section padding: 4rem 0 (mobile: 3rem 0)
- Grid: 1 col (mobile) → 2 col (md) → 3–4 col (lg)
- Border radius: sm=4px, md=8px, lg=16px, xl=24px

## Komponen Utama

- **Button:** variant primary (hijau solid), secondary (outline hijau), ghost, accent (emas)
- **Card:** shadow-sm, radius-lg, hover shadow-md transition
- **Section:** alternating bg (white / #FBFBFB), centered heading dengan aksen garis emas bawah
- **Badge:** rounded-full, ukuran kecil, warna kategori
- **Ornamen:** pattern geometris Islami SVG tipis sebagai bg aksen — opacity rendah, tidak dominan

## Gaya Visual

- Bersih, ruang putih lega
- Sudut membulat lembut (bukan sharp, bukan pill)
- Ornamen geometris Islami tipis (SVG inline) sebagai aksen latar section tertentu
- Shadow ringan (tidak heavy drop shadow)
- Transisi halus: 150–200ms ease

## Aksesibilitas

- Focus ring: 2px solid #0D5C3A, offset 2px
- Minimum touch target: 44×44px
- Color tidak satu-satunya pembeda informasi
- `prefers-reduced-motion`: matikan semua animasi/counter

## Dark Mode

- Opsional; hanya dikerjakan jika tidak menambah kompleksitas berlebih
- Default: light mode saja
