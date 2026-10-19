// Manifest terpusat semua slot gambar
// Komponen halaman TIDAK menulis path gambar langsung — selalu lewat manifest ini

export interface ImageSlot {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  preload?: boolean;
}

export const images: Record<string, ImageSlot> = {
  // === LOGO ===
  logo: {
    src: "/images/logo/logo-yayasan.svg",
    alt: "Logo Yayasan Pesantren Ar-Raudhah Paseh",
    width: 160,
    height: 60,
  },
  logoIcon: {
    src: "/images/logo/logo-icon.png",
    alt: "Ikon Logo Ar-Raudhah Paseh",
    width: 48,
    height: 48,
  },
  ogImage: {
    src: "/images/logo/og-image.png",
    alt: "Yayasan Pesantren Ar-Raudhah Paseh",
    width: 1200,
    height: 630,
  },

  // === HERO ===
  hero1: {
    src: "/images/hero/hero-kegiatan-santri-01.webp",
    alt: "Kegiatan santri di Pesantren Ar-Raudhah Paseh",
    width: 1920,
    height: 1080,
    sizes: "100vw",
    preload: true,
  },
  hero2: {
    src: "/images/hero/hero-kegiatan-santri-02.webp",
    alt: "Santri belajar Al-Qur'an di Pesantren Ar-Raudhah Paseh",
    width: 1920,
    height: 1080,
    sizes: "100vw",
  },
  hero3: {
    src: "/images/hero/hero-kegiatan-santri-03.webp",
    alt: "Suasana pesantren Ar-Raudhah Paseh",
    width: 1920,
    height: 1080,
    sizes: "100vw",
  },

  // === PENGASUH ===
  pengasuhUtama: {
    src: "/images/pengasuh/pengasuh-kiai-utama-01.webp",
    alt: "[ISI: Nama Pengasuh Utama] — Pengasuh Yayasan Pesantren Ar-Raudhah Paseh",
    width: 400,
    height: 500,
    sizes: "(max-width: 768px) 50vw, 25vw",
  },

  // === PENGURUS ===
  pengurusPembina: {
    src: "/images/pengurus/pengurus-pembina-01.webp",
    alt: "[ISI: Nama Pembina] — Pembina Yayasan",
    width: 400,
    height: 400,
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  pengurusKetua: {
    src: "/images/pengurus/pengurus-ketua-01.webp",
    alt: "[ISI: Nama Ketua] — Ketua Yayasan",
    width: 400,
    height: 400,
    sizes: "(max-width: 768px) 50vw, 25vw",
  },
  pengurusKepala: {
    src: "/images/pengurus/pengurus-kepala-madrasah-01.webp",
    alt: "[ISI: Nama Kepala Madrasah] — Kepala Madrasah",
    width: 400,
    height: 400,
    sizes: "(max-width: 768px) 50vw, 25vw",
  },

  // === LEGALITAS ===
  sertifikatAkta: {
    src: "/images/legalitas/legalitas-akta-notaris-01.webp",
    alt: "Akta Notaris Yayasan Pesantren Ar-Raudhah Paseh",
    width: 800,
    height: 1100,
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  sertifikatKemenkumham: {
    src: "/images/legalitas/legalitas-sk-kemenkumham-01.webp",
    alt: "SK Kemenkumham Yayasan Pesantren Ar-Raudhah Paseh",
    width: 800,
    height: 1100,
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  sertifikatKemenag: {
    src: "/images/legalitas/legalitas-sk-kemenag-01.webp",
    alt: "SK Izin Operasional Kemenag",
    width: 800,
    height: 1100,
    sizes: "(max-width: 768px) 100vw, 50vw",
  },

  // === FASILITAS ===
  fasilitasMasjid: {
    src: "/images/fasilitas/fasilitas-masjid-01.webp",
    alt: "Masjid Jami Pesantren Ar-Raudhah Paseh",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  fasilitasAsramaPutra: {
    src: "/images/fasilitas/fasilitas-asrama-putra-01.webp",
    alt: "Asrama Putra Pesantren Ar-Raudhah Paseh",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  fasilitasAsramaPutri: {
    src: "/images/fasilitas/fasilitas-asrama-putri-01.webp",
    alt: "Asrama Putri Pesantren Ar-Raudhah Paseh",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  fasilitasKelas: {
    src: "/images/fasilitas/fasilitas-kelas-01.webp",
    alt: "Ruang Kelas Pesantren Ar-Raudhah Paseh",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  fasilitasPerpustakaan: {
    src: "/images/fasilitas/fasilitas-perpustakaan-01.webp",
    alt: "Perpustakaan Pesantren Ar-Raudhah Paseh",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  fasilitasOlahraga: {
    src: "/images/fasilitas/fasilitas-olahraga-01.webp",
    alt: "Area Olahraga Pesantren Ar-Raudhah Paseh",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  fasilitasDapur: {
    src: "/images/fasilitas/fasilitas-dapur-01.webp",
    alt: "Dapur Umum Pesantren Ar-Raudhah Paseh",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 50vw",
  },
  fasilitasKantin: {
    src: "/images/fasilitas/fasilitas-kantin-01.webp",
    alt: "Kantin / Koperasi Pesantren Ar-Raudhah Paseh",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 50vw",
  },

  // === KEGIATAN (galeri beranda) ===
  kegiatan1: {
    src: "/images/kegiatan/kegiatan-santri-01.webp",
    alt: "Kegiatan santri Ar-Raudhah Paseh",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  kegiatan2: {
    src: "/images/kegiatan/kegiatan-santri-02.webp",
    alt: "Santri mengaji di Ar-Raudhah Paseh",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  kegiatan3: {
    src: "/images/kegiatan/kegiatan-santri-03.webp",
    alt: "Kegiatan belajar santri",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  kegiatan4: {
    src: "/images/kegiatan/kegiatan-santri-04.webp",
    alt: "Ekstrakurikuler santri Ar-Raudhah Paseh",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  kegiatan5: {
    src: "/images/kegiatan/kegiatan-santri-05.webp",
    alt: "Pembinaan akhlak santri",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  kegiatan6: {
    src: "/images/kegiatan/kegiatan-santri-06.webp",
    alt: "Kegiatan harian santri Ar-Raudhah Paseh",
    width: 800,
    height: 600,
    sizes: "(max-width: 768px) 100vw, 33vw",
  },

  // === BLOG THUMBNAILS ===
  blogPost1: {
    src: "/images/blog/blog-artikel-01.webp",
    alt: "Artikel blog Pesantren Ar-Raudhah Paseh",
    width: 800,
    height: 450,
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  blogPost2: {
    src: "/images/blog/blog-artikel-02.webp",
    alt: "Berita kegiatan pesantren",
    width: 800,
    height: 450,
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
  blogPost3: {
    src: "/images/blog/blog-artikel-03.webp",
    alt: "Pengumuman pesantren Ar-Raudhah Paseh",
    width: 800,
    height: 450,
    sizes: "(max-width: 768px) 100vw, 33vw",
  },
};
