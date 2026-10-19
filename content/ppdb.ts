export type PPDBStatus = "open" | "closed" | "coming_soon";
export type GelombangStatus = "open" | "closed";

export const ppdbConfig = {
  // Ubah ke 'closed' saat tidak ada pendaftaran aktif
  status: "open" as PPDBStatus,

  tahunAjaran: "[ISI: Tahun ajaran, contoh: 2026/2027]",

  gelombang: [
    {
      id: 1,
      nama: "Gelombang I",
      pendaftaran: {
        mulai: "[ISI: Tanggal mulai pendaftaran Gel. I]",
        selesai: "[ISI: Tanggal selesai pendaftaran Gel. I]",
      },
      tes: "[ISI: Tanggal tes seleksi Gel. I]",
      pengumuman: "[ISI: Tanggal pengumuman Gel. I]",
      masukAsrama: "[ISI: Tanggal masuk asrama Gel. I]",
      status: "open" as GelombangStatus,
    },
    {
      id: 2,
      nama: "Gelombang II",
      pendaftaran: {
        mulai: "[ISI: Tanggal mulai pendaftaran Gel. II]",
        selesai: "[ISI: Tanggal selesai pendaftaran Gel. II]",
      },
      tes: "[ISI: Tanggal tes seleksi Gel. II]",
      pengumuman: "[ISI: Tanggal pengumuman Gel. II]",
      masukAsrama: "[ISI: Tanggal masuk asrama Gel. II]",
      status: "closed" as GelombangStatus,
    },
  ],

  syarat: [
    "Fotokopi Kartu Keluarga (KK)",
    "Fotokopi Akta Kelahiran",
    "Fotokopi Ijazah/Rapor terakhir (SD/MI untuk masuk MTs, MTs/SMP untuk masuk MA)",
    "Pas foto 3×4 berwarna (4 lembar)",
    "Tes dasar membaca Al-Qur'an",
    "[ISI: Syarat tambahan jika ada]",
  ],

  biaya: {
    note: "Hubungi panitia PPDB untuk informasi biaya terkini. Harga dapat berubah sewaktu-waktu.",
    items: [
      {
        nama: "Uang Pendaftaran",
        jumlah: "[ISI: Nominal biaya pendaftaran]",
        keterangan: "Tidak dapat dikembalikan",
      },
      {
        nama: "Uang Pangkal / Sarana Prasarana",
        jumlah: "[ISI: Nominal uang pangkal]",
        keterangan: "Dibayar saat daftar ulang",
      },
      {
        nama: "SPP Bulanan",
        jumlah: "[ISI: Nominal SPP per bulan]",
        keterangan: "Termasuk biaya makan",
      },
      {
        nama: "Seragam",
        jumlah: "[ISI: Nominal biaya seragam]",
        keterangan: "Paket lengkap seragam pondok",
      },
      {
        nama: "Perlengkapan Asrama",
        jumlah: "[ISI: Nominal perlengkapan (lemari/ranjang)]",
        keterangan: "Lemari dan ranjang",
      },
    ],
  },

  alurPendaftaran: [
    {
      step: 1,
      judul: "Isi Formulir",
      deskripsi:
        "Isi formulir pendaftaran online atau datang langsung ke kantor pesantren",
      icon: "ClipboardList",
    },
    {
      step: 2,
      judul: "Bayar Biaya Pendaftaran",
      deskripsi:
        "Transfer biaya pendaftaran ke rekening yayasan dan konfirmasi via WhatsApp",
      icon: "CreditCard",
    },
    {
      step: 3,
      judul: "Tes & Wawancara",
      deskripsi:
        "Ikuti tes membaca Al-Qur'an dan wawancara santri beserta orang tua/wali",
      icon: "BookOpen",
    },
    {
      step: 4,
      judul: "Daftar Ulang",
      deskripsi:
        "Lakukan daftar ulang dan lengkapi administrasi serta biaya yang diperlukan",
      icon: "CheckCircle",
    },
  ],

  faq: [
    {
      pertanyaan: "Apakah ada tes masuk untuk santri baru?",
      jawaban:
        "Ya, terdapat tes dasar membaca Al-Qur'an dan wawancara dengan santri serta orang tua/wali. Tes ini bertujuan untuk mengetahui kemampuan awal calon santri, bukan untuk menyaringnya secara ketat.",
    },
    {
      pertanyaan: "Apakah pesantren menerima santri dari luar Tasikmalaya?",
      jawaban:
        "Ya, pesantren menerima santri dari seluruh Indonesia. Tersedia asrama putra dan putri yang terpisah dengan pengawasan penuh.",
    },
    {
      pertanyaan: "Bagaimana sistem komunikasi antara santri dan orang tua?",
      jawaban:
        "Komunikasi dijadwalkan secara berkala sesuai aturan pesantren. Wali santri dapat mengunjungi pada jam kunjungan yang telah ditetapkan (Senin–Sabtu, 08.00–16.00 WIB).",
    },
    {
      pertanyaan: "Apakah ada program beasiswa untuk santri yatim/dhuafa?",
      jawaban:
        "Ya, terdapat program Orang Tua Asuh Santri Yatim & Dhuafa. Silakan hubungi pengurus yayasan untuk informasi lebih lanjut.",
    },
    {
      pertanyaan:
        "Apakah tersedia pendidikan formal (sekolah) di dalam pesantren?",
      jawaban:
        "[ISI: Informasi unit pendidikan formal yang tersedia, mis. MTs/SMP/MA]",
    },
    {
      pertanyaan: "Kapan batas akhir pendaftaran?",
      jawaban:
        "Pendaftaran dibuka dalam beberapa gelombang. Silakan cek jadwal terkini pada halaman ini atau hubungi panitia PPDB untuk informasi terbaru.",
    },
  ],

  // Metode pengiriman data pendaftaran: 'whatsapp' = tombol WA saja, 'both' = form online + WA
  formMethod: "both" as "whatsapp" | "both",
  brosurUrl: "/images/brosur/brosur-ppdb.pdf",
} as const;
