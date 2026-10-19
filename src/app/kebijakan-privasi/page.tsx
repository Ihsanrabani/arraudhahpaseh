import type { Metadata } from "next";
import { generateMetadata as genMeta } from "@/lib/seo";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = genMeta({
  title: "Kebijakan Privasi",
  description:
    "Kebijakan privasi Yayasan Pesantren Ar-Raudhah Paseh mengenai pengumpulan dan penggunaan data.",
  path: "/kebijakan-privasi",
});

export default function KebijakanPrivasiPage() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <Container>
        <div className="max-w-3xl mx-auto prose-ar">
          <h1 className="text-3xl font-heading font-bold text-text mb-2">
            Kebijakan Privasi
          </h1>
          <p className="text-sm text-text-muted mb-8">
            Berlaku sejak: [ISI: Tanggal berlaku]
          </p>

          <h2>1. Informasi yang Kami Kumpulkan</h2>
          <p>
            Kami mengumpulkan informasi yang Anda berikan secara sukarela
            melalui formulir pendaftaran (PPDB), formulir kontak, atau
            konfirmasi donasi. Informasi ini meliputi nama, nomor WhatsApp,
            alamat email, dan data terkait pendaftaran santri.
          </p>

          <h2>2. Penggunaan Informasi</h2>
          <p>Informasi yang kami kumpulkan digunakan untuk:</p>
          <ul>
            <li>Memproses pendaftaran santri baru (PPDB)</li>
            <li>
              Menghubungi calon santri dan wali santri terkait proses
              pendaftaran
            </li>
            <li>Memproses konfirmasi donasi</li>
            <li>Merespons pertanyaan melalui formulir kontak</li>
            <li>Meningkatkan layanan dan komunikasi pesantren</li>
          </ul>

          <h2>3. Perlindungan Data</h2>
          <p>
            Kami berkomitmen menjaga kerahasiaan data pribadi Anda. Data tidak
            akan dijual, disewakan, atau dibagikan kepada pihak ketiga tanpa
            persetujuan Anda, kecuali diwajibkan oleh hukum yang berlaku.
          </p>

          <h2>4. Formulir dan Data Pendaftaran</h2>
          <p>
            Data yang dimasukkan melalui formulir PPDB akan dikirimkan kepada
            panitia pesantren melalui WhatsApp untuk diproses. Kami menggunakan
            proteksi dasar terhadap spam (honeypot). Data sensitif tidak
            disimpan tanpa enkripsi.
          </p>

          <h2>5. Analitik Website</h2>
          <p>
            Website ini dapat menggunakan layanan analitik ramah privasi
            (seperti Plausible Analytics) untuk memahami penggunaan situs secara
            anonim. Tidak ada pelacakan perilaku lintas situs atau cookies iklan
            yang digunakan.
          </p>

          <h2>6. Hak Anda</h2>
          <p>
            Anda berhak meminta penghapusan data pribadi yang pernah Anda
            berikan kepada kami. Hubungi kami melalui email{" "}
            <a
              href={`mailto:${siteConfig.contact.email.yayasan}`}
              className="text-primary"
            >
              {siteConfig.contact.email.yayasan}
            </a>{" "}
            untuk permintaan tersebut.
          </p>

          <h2>7. Perubahan Kebijakan</h2>
          <p>
            Kami dapat memperbarui kebijakan privasi ini sewaktu-waktu.
            Perubahan material akan diumumkan melalui halaman ini.
          </p>

          <h2>8. Kontak</h2>
          <p>
            Jika ada pertanyaan mengenai kebijakan privasi ini, silakan hubungi
            kami di:{" "}
            <a
              href={`mailto:${siteConfig.contact.email.yayasan}`}
              className="text-primary"
            >
              {siteConfig.contact.email.yayasan}
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
