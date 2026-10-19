# Content Rules — Ar-Raudhah Paseh

## Aturan Data Faktual (WAJIB)

- DILARANG mengarang: nomor akta/SK, NSPP, nomor rekening, nomor WA, alamat lengkap, nama pengasuh/pengurus, biaya PPDB, jadwal gelombang, statistik santri, kutipan sambutan
- Semua data faktual yang belum tersedia → gunakan placeholder format: `[ISI: deskripsi data yang dibutuhkan]`
- Semua placeholder WAJIB dicatat di `CONTENT-TODO.md` dengan lokasi file dan konteks

## Placeholder Convention

```
[ISI: Nomor WhatsApp panitia PPDB format 628xxx]
[ISI: Nama Pengasuh Utama / Kiai]
[ISI: Nomor Rekening BSI atas nama Yayasan]
[ISI: Tahun berdiri yayasan]
[ISI: Jumlah santri aktif saat ini]
```

## Ayat Al-Qur'an & Hadits

- Wajib cantumkan sumber lengkap: nama surah + nomor ayat, atau perawi hadits
- Jika tidak yakin keakuratan teks Arab: tandai `[VERIFIKASI ULAMA]`
- Teks Arab menggunakan font Amiri/Scheherazade New, disertai terjemahan Bahasa Indonesia
- Jangan menulis teks Al-Qur'an atau hadits dari ingatan tanpa referensi

## Nomor Rekening & Donasi

- Rekening wajib atas nama yayasan (bukan pribadi)
- Tampilkan peringatan kecil: "Pastikan nama penerima sesuai sebelum transfer"
- Jika nomor rekening belum tersedia: `[ISI: Nomor rekening BSI atas nama Yayasan Pesantren Ar-Raudhah Paseh]`

## Nada & Gaya Penulisan

- Bahasa Indonesia baku, hangat, santun, Islami
- Hindari klaim berlebihan: "terbaik", "terkemuka", "nomor satu" tanpa bukti
- Gunakan sapaan inklusif: "Bapak/Ibu Wali Santri", "Santri", "Muhsinin"
- Setiap halaman memiliki satu pesan utama yang jelas

## Struktur i18n

- Semua teks konten dalam objek yang mendukung struktur `{ id: string, ar?: string }`
- Teks UI (label, tombol) dipisah agar mudah diterjemahkan kelak
- `lang="id"` di root HTML, `lang="ar"` pada elemen teks Arab

## Blog & Artikel

- Kategori: Berita Pondok, Tausiyah, Kegiatan Santri, Pengumuman
- Setiap artikel MDX wajib memiliki frontmatter: `title`, `description`, `date`, `category`, `author`, `image`
- 3 artikel contoh disertakan sebagai placeholder dengan konten dummy yang jelas ditandai
