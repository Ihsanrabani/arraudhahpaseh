// Helper untuk membuat URL WhatsApp dengan pesan terformat

export function buildWhatsAppUrl(phone: string, message: string): string {
  // Hapus semua non-digit, pastikan dimulai dengan 62
  const cleanPhone = phone.replace(/\D/g, "");
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

export function buildPPDBWhatsApp(phone: string): string {
  const message = `Assalamu'alaikum Wr. Wb.

Saya ingin mendapatkan informasi lebih lanjut tentang Penerimaan Peserta Didik Baru (PPDB) Pesantren Ar-Raudhah Paseh.

Mohon informasi mengenai:
- Jadwal pendaftaran
- Syarat dan biaya
- Alur pendaftaran

Terima kasih.
Wassalamu'alaikum Wr. Wb.`;
  return buildWhatsAppUrl(phone, message);
}

export interface DonasiData {
  nama: string;
  nominal: string;
  program: string;
}

export function buildDonasiWhatsApp(phone: string, data: DonasiData): string {
  const message = `Assalamu'alaikum Wr. Wb.

*Konfirmasi Donasi*

Nama Pengirim : ${data.nama}
Nominal       : ${data.nominal}
Program       : ${data.program}

Saya telah melakukan transfer donasi untuk program tersebut di atas. Mohon konfirmasinya.

Jazakumullahu Khairan Katsiran.
Wassalamu'alaikum Wr. Wb.`;
  return buildWhatsAppUrl(phone, message);
}

export function buildKontakWhatsApp(phone: string, nama?: string): string {
  const message = `Assalamu'alaikum Wr. Wb.${nama ? `\n\nPerkenalkan, saya ${nama}.` : ""}

Saya ingin menghubungi Yayasan Pesantren Ar-Raudhah Paseh untuk mendapatkan informasi lebih lanjut.

Terima kasih.
Wassalamu'alaikum Wr. Wb.`;
  return buildWhatsAppUrl(phone, message);
}

export function buildGeneralWhatsApp(phone: string): string {
  const message = `Assalamu'alaikum Wr. Wb.

Saya ingin menghubungi Yayasan Pesantren Ar-Raudhah Paseh.

Terima kasih.`;
  return buildWhatsAppUrl(phone, message);
}
