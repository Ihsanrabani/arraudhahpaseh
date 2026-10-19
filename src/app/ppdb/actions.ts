"use server";

import { z } from "zod";
import { siteConfig } from "@/content/site.config";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const PPDBSchema = z.object({
  namaLengkap: z.string().min(3, "Nama minimal 3 karakter").max(100),
  tempatLahir: z.string().min(2, "Tempat lahir wajib diisi").max(100),
  tanggalLahir: z.string().min(1, "Tanggal lahir wajib diisi"),
  jenisKelamin: z.enum(["putra", "putri"] as const, {
    message: "Pilih jenis kelamin",
  }),
  asalSekolah: z.string().max(200).optional(),
  namaAyah: z.string().min(2, "Nama ayah wajib diisi").max(100),
  namaIbu: z.string().min(2, "Nama ibu wajib diisi").max(100),
  noWA: z
    .string()
    .min(10, "Nomor WA minimal 10 digit")
    .max(15)
    .regex(/^\d+$/, "Nomor WA hanya boleh angka"),
  alamat: z.string().max(500).optional(),
  gelombang: z.string(),
  honeypot: z.string().max(0, "Bot detected"),
});

type ActionState = {
  success: boolean;
  errors: Record<string, string>;
  message: string;
};

export async function submitPPDB(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  // Honeypot check
  const honeypot = formData.get("honeypot");
  if (honeypot && honeypot !== "") {
    return { success: false, errors: {}, message: "" };
  }

  const raw = {
    namaLengkap: formData.get("namaLengkap") as string,
    tempatLahir: formData.get("tempatLahir") as string,
    tanggalLahir: formData.get("tanggalLahir") as string,
    jenisKelamin: formData.get("jenisKelamin") as string,
    asalSekolah: formData.get("asalSekolah") as string,
    namaAyah: formData.get("namaAyah") as string,
    namaIbu: formData.get("namaIbu") as string,
    noWA: formData.get("noWA") as string,
    alamat: formData.get("alamat") as string,
    gelombang: formData.get("gelombang") as string,
    honeypot: formData.get("honeypot") as string,
  };

  const result = PPDBSchema.safeParse(raw);

  if (!result.success) {
    const errors: Record<string, string> = {};
    result.error.issues.forEach((issue) => {
      const key = issue.path[0] as string;
      errors[key] = issue.message;
    });
    return {
      success: false,
      errors,
      message: "Mohon periksa kembali data yang diisi.",
    };
  }

  const data = result.data;

  // Build WhatsApp message
  const message = `🌿 *FORMULIR PENDAFTARAN SANTRI BARU*
Pesantren Ar-Raudhah Paseh

📋 *Data Calon Santri*
Nama          : ${data.namaLengkap}
Tempat/Tgl Lahir : ${data.tempatLahir}, ${data.tanggalLahir}
Jenis Kelamin : ${data.jenisKelamin === "putra" ? "Putra" : "Putri"}
Asal Sekolah  : ${data.asalSekolah ?? "-"}

👨‍👩‍👦 *Data Orang Tua*
Nama Ayah : ${data.namaAyah}
Nama Ibu  : ${data.namaIbu}
No. WA    : ${data.noWA}
Alamat    : ${data.alamat ?? "-"}

📅 Gelombang : Gelombang ${data.gelombang}

Assalamu'alaikum, kami ingin mendaftarkan putra/putri kami. Mohon konfirmasi selanjutnya. Terima kasih.`;

  void buildWhatsAppUrl(siteConfig.contact.whatsapp.ppdb, message);
  // Note: WhatsApp URL could be returned to client for direct redirect if desired.
  // Currently we just return success and let the client trigger WhatsApp.

  return {
    success: true,
    errors: {},
    message: `Formulir berhasil diproses! Klik tombol di bawah untuk konfirmasi via WhatsApp, atau hubungi panitia di ${siteConfig.contact.whatsapp.ppdb}.`,
  };
}
