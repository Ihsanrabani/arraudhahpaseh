export const programs = [
  {
    id: "tahfidz",
    nama: "Program Tahfidz Al-Qur'an",
    deskripsi:
      "Program menghafal Al-Qur'an 30 juz dengan metode yang terstruktur, dibimbing oleh pengajar hafidz/hafidzah berpengalaman.",
    icon: "BookOpen" as const,
    target: "[ISI: Target hafalan per tahun, contoh: 5 juz/tahun]",
    detail: [
      "Setoran hafalan harian kepada musyrif/musyrifah",
      "Murajaah (mengulang hafalan) terjadwal",
      "Tahsin (perbaikan) tajwid dan makharijul huruf",
      "Target hafalan: [ISI: target per jenjang]",
    ],
    color: "emerald",
  },
  {
    id: "diniyah",
    nama: "Madrasah Diniyah / Salafiyah",
    deskripsi:
      "Pembelajaran kitab kuning secara sistematis meliputi ilmu nahwu, sharaf, fiqih, akhlak, tauhid, dan berbagai cabang ilmu agama.",
    icon: "Scroll" as const,
    kitab: [
      "Jurumiyyah",
      "Imrithi",
      "Alfiyah",
      "Fathul Qarib",
      "Riyadhus Shalihin",
      "[ISI: Kitab lainnya]",
    ],
    detail: [
      "Halaqah kitab kuning dengan metode sorogan dan bandongan",
      "Pemahaman mendalam terhadap teks Arab klasik",
      "Diskusi dan bahtsul masail (kajian hukum Islam)",
    ],
    color: "amber",
  },
  {
    id: "formal",
    nama: "Pendidikan Formal",
    deskripsi:
      "Pendidikan formal yang terintegrasi dengan kurikulum pesantren, mempersiapkan santri untuk melanjutkan ke jenjang pendidikan tinggi.",
    icon: "GraduationCap" as const,
    jenjang: ["[ISI: Jenjang pendidikan formal yang tersedia, mis. MTs/MA]"],
    detail: [
      "Kurikulum nasional (Kemendikbud/Kemenag)",
      "Terintegrasi dengan program diniyah dan tahfidz",
      "[ISI: Informasi akreditasi jika ada]",
    ],
    color: "blue",
  },
  {
    id: "akhlak",
    nama: "Pembinaan Akhlak & Karakter",
    deskripsi:
      "Program pembinaan karakter Islami yang komprehensif, membentuk santri yang berakhlak mulia, mandiri, dan siap berkontribusi bagi masyarakat.",
    icon: "Heart" as const,
    detail: [
      "Pembinaan adab dan akhlak mulia sehari-hari",
      "Program kemandirian dan life skills",
      "Pembinaan jiwa kepemimpinan",
      "Kegiatan sosial dan pengabdian masyarakat",
    ],
    color: "rose",
  },
];

export const jadwalHarian = [
  {
    waktu: "04.00 – 04.30",
    kegiatan: "Bangun Tidur & Qiyamul Lail",
    ikon: "🌙",
  },
  {
    waktu: "04.30 – 05.30",
    kegiatan: "Shalat Subuh Berjamaah & Mufradat/Tadarus",
    ikon: "⭐",
  },
  { waktu: "05.30 – 06.30", kegiatan: "Olahraga Pagi & Persiapan", ikon: "☀️" },
  { waktu: "06.30 – 07.00", kegiatan: "Makan Pagi", ikon: "🍽️" },
  {
    waktu: "07.00 – 12.00",
    kegiatan: "Kegiatan Belajar Formal / Halaqah Kitab",
    ikon: "📚",
  },
  {
    waktu: "12.00 – 13.30",
    kegiatan: "Shalat Dzuhur Berjamaah & Istirahat Siang",
    ikon: "🕐",
  },
  {
    waktu: "13.30 – 15.30",
    kegiatan: "Halaqah Kitab / Belajar Mandiri",
    ikon: "📖",
  },
  { waktu: "15.30 – 16.00", kegiatan: "Shalat Ashar Berjamaah", ikon: "🕓" },
  {
    waktu: "16.00 – 17.30",
    kegiatan: "Pembinaan Sore & Ekstrakurikuler",
    ikon: "🤸",
  },
  { waktu: "17.30 – 18.00", kegiatan: "Persiapan Shalat Maghrib", ikon: "🌅" },
  {
    waktu: "18.00 – 19.00",
    kegiatan: "Shalat Maghrib Berjamaah & Tadarus",
    ikon: "📿",
  },
  { waktu: "19.00 – 19.30", kegiatan: "Shalat Isya Berjamaah", ikon: "🕌" },
  { waktu: "19.30 – 20.00", kegiatan: "Makan Malam", ikon: "🍽️" },
  {
    waktu: "20.00 – 21.30",
    kegiatan: "Setoran Hafalan & Muthala'ah Kitab",
    ikon: "📚",
  },
  { waktu: "21.30 – 04.00", kegiatan: "Istirahat Malam", ikon: "🌙" },
] as const;

export const ekstrakurikuler = [
  { nama: "Hadrah / Rebana", ikon: "🥁" },
  { nama: "Pidato 3 Bahasa (Arab, Inggris, Sunda/Indonesia)", ikon: "🎤" },
  { nama: "Kaligrafi Islam", ikon: "✍️" },
  { nama: "Pramuka", ikon: "🏕️" },
  { nama: "Pencak Silat", ikon: "🥋" },
] as const;

export const pancaJiwa = [
  {
    judul: "Keikhlasan",
    deskripsi:
      "Berbuat dan belajar semata-mata karena Allah SWT, bukan untuk mencari pujian atau keuntungan duniawi.",
  },
  {
    judul: "Kesederhanaan",
    deskripsi:
      "Hidup sederhana bukan berarti melarat, melainkan kekuatan jiwa yang tidak terikat oleh kemewahan dunia.",
  },
  {
    judul: "Kemandirian",
    deskripsi:
      "Berdiri di atas kaki sendiri, tidak bergantung kepada orang lain kecuali kepada Allah SWT.",
  },
  {
    judul: "Ukhuwah Islamiyah",
    deskripsi:
      "Persaudaraan sejati sesama Muslim yang dilandasi iman dan kasih sayang karena Allah.",
  },
  {
    judul: "Kebebasan Berpikir Bertanggung Jawab",
    deskripsi:
      "Bebas dalam berpikir, berkreasi, dan berpendapat, namun tetap bertanggung jawab kepada Allah, agama, dan umat.",
  },
] as const;

export const pengurusYayasan = [
  {
    jabatan: "Pembina Yayasan",
    nama: "[ISI: Nama Pembina Yayasan]",
    gelar: "[ISI: Gelar akademik/keagamaan]",
    imageSlot: "pengurusPembina",
  },
  {
    jabatan: "Pengasuh Pesantren",
    nama: "[ISI: Nama Pengasuh / Kiai]",
    gelar: "[ISI: Gelar, mis. KH. / Ustadz / Dr.]",
    imageSlot: "pengasuhUtama",
  },
  {
    jabatan: "Ketua Yayasan",
    nama: "[ISI: Nama Ketua Yayasan]",
    gelar: "[ISI: Gelar]",
    imageSlot: "pengurusKetua",
  },
  {
    jabatan: "Kepala Madrasah",
    nama: "[ISI: Nama Kepala Madrasah]",
    gelar: "[ISI: Gelar]",
    imageSlot: "pengurusKepala",
  },
] as const;

export const wakafPrograms = [
  {
    id: "gedung",
    judul: "Wakaf Pembebasan Tanah & Gedung Kelas",
    deskripsi:
      "Bantu kami menyediakan ruang belajar yang layak bagi para santri. Setiap jengkal tanah yang diwakafkan adalah amal jariyah yang terus mengalir.",
    target: "[ISI: Target nominal wakaf gedung jika ada]",
    terkumpul: "[ISI: Dana terkumpul jika ada]",
    icon: "Building",
    urgent: true,
  },
  {
    id: "orang-tua-asuh",
    judul: "Orang Tua Asuh Santri Yatim & Dhuafa",
    deskripsi:
      "Sponsori seorang santri yatim atau dari keluarga kurang mampu agar tetap bisa menuntut ilmu dan menghafal Al-Qur'an.",
    target: "[ISI: Nominal per santri per bulan]",
    terkumpul: null,
    icon: "Heart",
    urgent: false,
  },
  {
    id: "mushaf",
    judul: "Sedekah Mushaf & Kitab Kuning",
    deskripsi:
      "Donasikan mushaf Al-Qur'an dan kitab-kitab kuning untuk melengkapi perpustakaan dan menunjang proses belajar santri.",
    target: null,
    terkumpul: null,
    icon: "BookOpen",
    urgent: false,
  },
] as const;
