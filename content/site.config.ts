// Konfigurasi situs — semua data yang bisa berubah ada di sini
// JANGAN hardcode nilai ini di dalam komponen

export const siteConfig = {
  name: "Yayasan Pesantren Ar-Raudhah Paseh",
  shortName: "Ar-Raudhah Paseh",
  tagline: "Mencetak Generasi Qur'ani, Berakhlak Mulia, dan Mandiri",
  description:
    "Yayasan Pesantren Ar-Raudhah Paseh adalah lembaga pendidikan Islam dan yayasan sosial keagamaan yang berlokasi di Kecamatan Paseh, Tasikmalaya, Jawa Barat.",
  url: "https://arraudhahpaseh.org",
  locale: "id_ID",

  // Kontak
  contact: {
    address: {
      street: "[ISI: Nama jalan, RT/RW, Dusun]",
      village: "[ISI: Nama Desa/Kelurahan]",
      district: "Kecamatan Paseh",
      city: "Tasikmalaya",
      province: "Jawa Barat",
      postalCode: "[ISI: Kode Pos]",
      full: "[ISI: Alamat lengkap: Jalan, RT/RW, Dusun, Desa, Kec. Paseh, Tasikmalaya, Jawa Barat XXXXX]",
    },
    phone: "[ISI: Nomor telepon kantor]",
    whatsapp: {
      humas: "[ISI: Nomor WA Humas format 628xxx]",
      ppdb: "[ISI: Nomor WA Panitia PPDB format 628xxx]",
      donasi: "[ISI: Nomor WA Konfirmasi Donasi format 628xxx]",
    },
    email: {
      info: "info@arraudhahpaseh.org",
      yayasan: "yayasan@arraudhahpaseh.org",
    },
  },

  // Media Sosial
  social: {
    instagram: "[ISI: URL Instagram @username]",
    facebook: "[ISI: URL Facebook Page]",
    youtube: "[ISI: URL YouTube Channel]",
    googleMaps: "[ISI: URL Google Maps embed/link lokasi pesantren]",
    googleMapsEmbed: "[ISI: URL iframe embed Google Maps untuk halaman kontak]",
  },

  // Jam Kunjungan
  visitHours: {
    days: "Senin – Sabtu",
    hours: "08.00 – 16.00 WIB",
    note: "Di luar jam kunjungan, hubungi Humas terlebih dahulu",
  },

  // Rekening Donasi
  bankAccounts: [
    {
      bank: "BSI",
      logo: "/images/logo/bank-bsi.png",
      accountNumber: "[ISI: Nomor Rekening BSI]",
      accountName: "Yayasan Pesantren Ar-Raudhah Paseh",
      note: "Pastikan nama penerima sesuai sebelum transfer",
    },
    {
      bank: "BRI",
      logo: "/images/logo/bank-bri.png",
      accountNumber: "[ISI: Nomor Rekening BRI]",
      accountName: "Yayasan Pesantren Ar-Raudhah Paseh",
      note: "Pastikan nama penerima sesuai sebelum transfer",
    },
    {
      bank: "Mandiri",
      logo: "/images/logo/bank-mandiri.png",
      accountNumber: "[ISI: Nomor Rekening Mandiri]",
      accountName: "Yayasan Pesantren Ar-Raudhah Paseh",
      note: "Pastikan nama penerima sesuai sebelum transfer",
    },
  ],

  // Statistik (update berkala)
  stats: {
    activeSantri: "[ISI: Jumlah santri aktif]",
    teachers: "[ISI: Jumlah asatidz/guru]",
    alumni: "[ISI: Jumlah angkatan/alumni]",
    facilities: "[ISI: Luas fasilitas atau jumlah kamar]",
  },

  // Legalitas
  legality: {
    aktaNotaris: "[ISI: Nomor Akta Notaris]",
    skKemenkumham: "[ISI: Nomor SK Kemenkumham]",
    nspp: "[ISI: NSPP Pesantren]",
    npsn: "[ISI: NPSN jika ada]",
    izinOperasional: "[ISI: Nomor SK Izin Operasional Kemenag]",
    tahunBerdiri: "[ISI: Tahun berdiri yayasan]",
  },

  // Analytics (opsional, diatur via env)
  analytics: {
    plausible: process.env["NEXT_PUBLIC_PLAUSIBLE_DOMAIN"] ?? null,
    ga4: process.env["NEXT_PUBLIC_GA4_ID"] ?? null,
  },
} as const;

export type SiteConfig = typeof siteConfig;
