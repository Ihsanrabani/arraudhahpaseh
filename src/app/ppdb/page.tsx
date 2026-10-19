import type { Metadata } from "next";
import Link from "next/link";
import {
  generateMetadata as genMeta,
  generateBreadcrumbJsonLd,
  generateFAQJsonLd,
} from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import PPDBForm from "@/components/forms/PPDBForm";
import { ppdbConfig } from "@/content/ppdb";
import { siteConfig } from "@/content/site.config";
import { buildPPDBWhatsApp } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export const metadata: Metadata = genMeta({
  title: "Penerimaan Santri Baru (PPDB)",
  description: `Daftar sekarang untuk bergabung dengan Pesantren Ar-Raudhah Paseh. Jadwal PPDB ${ppdbConfig.tahunAjaran}, syarat, biaya, dan formulir pendaftaran online tersedia di sini.`,
  path: "/ppdb",
  keywords: [
    "ppdb pesantren",
    "daftar pesantren tasikmalaya",
    "pendaftaran santri baru",
  ],
});

export default function PPDBPage() {
  const breadcrumb = generateBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "PPDB", url: "/ppdb" },
  ]);
  const faqJsonLd = generateFAQJsonLd(
    ppdbConfig.faq.map((f) => ({
      pertanyaan: f.pertanyaan,
      jawaban: f.jawaban,
    })),
  );
  const waUrl = buildPPDBWhatsApp(siteConfig.contact.whatsapp.ppdb);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Hero */}
      <div className="bg-linear-to-br from-primary to-primary-dark py-14 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pattern-islamic opacity-20 pointer-events-none" />
        <Container className="relative z-10">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-white font-medium" aria-current="page">
                PPDB
              </li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              Penerimaan Peserta Didik Baru
            </p>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              PPDB Tahun Ajaran {ppdbConfig.tahunAjaran}
            </h1>
            <p className="text-white/80 text-base leading-relaxed mb-6">
              Bergabunglah bersama kami dan jadilah bagian dari keluarga besar
              Pesantren Ar-Raudhah Paseh. Tempatkan putra-putri Anda di
              lingkungan yang kondusif untuk menghafal Al-Qur&apos;an, mempelajari
              ilmu agama, dan membentuk akhlak mulia.
            </p>
            <div className="flex flex-wrap gap-3">
              {ppdbConfig.brosurUrl &&
                !ppdbConfig.brosurUrl.startsWith("[ISI:") && (
                  <Button
                    as="a"
                    href={ppdbConfig.brosurUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="white"
                    size="lg"
                  >
                    Unduh Brosur PDF
                  </Button>
                )}
              <Button
                as="a"
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="accent"
                size="lg"
              >
                Tanya via WhatsApp
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Status & Jadwal */}
      <section
        className="py-14 md:py-20 bg-white"
        aria-labelledby="jadwal-heading"
      >
        <Container>
          <SectionHeading
            label="Jadwal"
            title="Alur & Timeline PPDB"
            id="jadwal-heading"
          />

          {/* Alur 4 langkah */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {ppdbConfig.alurPendaftaran.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary text-white font-heading font-bold text-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  {step.step}
                </div>
                {step.step < ppdbConfig.alurPendaftaran.length && (
                  <div
                    className="hidden lg:block absolute top-7 left-full w-full h-0.5 bg-primary-light"
                    aria-hidden="true"
                  />
                )}
                <h3 className="font-heading font-semibold text-text mb-2">
                  {step.judul}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {step.deskripsi}
                </p>
              </div>
            ))}
          </div>

          {/* Gelombang */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {ppdbConfig.gelombang.map((gel) => (
              <Card
                key={gel.id}
                padding="lg"
                className={cn(
                  gel.status === "open"
                    ? "border-primary ring-2 ring-primary/20"
                    : "opacity-70",
                )}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-heading font-bold text-text">
                    {gel.nama}
                  </h3>
                  <span
                    className={cn(
                      "px-3 py-1 rounded-full text-xs font-semibold",
                      gel.status === "open"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-500",
                    )}
                  >
                    {gel.status === "open" ? "Dibuka" : "Ditutup"}
                  </span>
                </div>
                <dl className="space-y-2 text-sm">
                  <div className="flex justify-between gap-2">
                    <dt className="text-text-muted">Pendaftaran</dt>
                    <dd className="font-medium text-right">
                      {gel.pendaftaran.mulai} – {gel.pendaftaran.selesai}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-text-muted">Tes Seleksi</dt>
                    <dd className="font-medium">{gel.tes}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-text-muted">Pengumuman</dt>
                    <dd className="font-medium">{gel.pengumuman}</dd>
                  </div>
                  <div className="flex justify-between gap-2">
                    <dt className="text-text-muted">Masuk Asrama</dt>
                    <dd className="font-medium">{gel.masukAsrama}</dd>
                  </div>
                </dl>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Syarat & Biaya */}
      <section
        className="py-14 md:py-20 bg-bg"
        aria-labelledby="syarat-heading"
      >
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div>
              <h2
                id="syarat-heading"
                className="font-heading font-bold text-text text-2xl mb-6"
              >
                Syarat Pendaftaran
              </h2>
              <ul className="space-y-3">
                {ppdbConfig.syarat.map((s, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 bg-white border border-border rounded-xl px-4 py-3 shadow-sm"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {i + 1}
                    </span>
                    <span className="text-sm text-text leading-relaxed">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-heading font-bold text-text text-2xl mb-3">
                Rincian Biaya
              </h2>
              <p className="text-xs text-amber-700 bg-amber-50 rounded-lg px-3 py-2 mb-4">
                {ppdbConfig.biaya.note}
              </p>
              <div className="overflow-x-auto rounded-xl border border-border shadow-sm">
                <table className="w-full text-sm">
                  <caption className="sr-only">Rincian biaya PPDB</caption>
                  <thead>
                    <tr className="bg-primary-light">
                      <th
                        scope="col"
                        className="text-left px-4 py-3 text-primary font-semibold"
                      >
                        Komponen
                      </th>
                      <th
                        scope="col"
                        className="text-right px-4 py-3 text-primary font-semibold"
                      >
                        Jumlah
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {ppdbConfig.biaya.items.map((item) => (
                      <tr
                        key={item.nama}
                        className="hover:bg-bg transition-colors"
                      >
                        <td className="px-4 py-3">
                          <p className="font-medium text-text">
                            {item.nama}
                          </p>
                          <p className="text-xs text-text-muted">
                            {item.keterangan}
                          </p>
                        </td>
                        <td className="px-4 py-3 text-right font-mono text-xs text-text">
                          {item.jumlah}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Formulir */}
      <section
        className="py-14 md:py-20 bg-white"
        aria-labelledby="form-heading"
      >
        <Container>
          <SectionHeading
            label="Pendaftaran"
            title="Formulir Pendaftaran Online"
            subtitle="Isi formulir di bawah ini untuk mendaftar. Data Anda akan kami proses segera."
            id="form-heading"
          />
          <div className="max-w-2xl mx-auto">
            <PPDBForm />
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section
        className="py-14 md:py-20 bg-bg"
        aria-labelledby="faq-heading"
      >
        <Container>
          <SectionHeading
            label="FAQ"
            title="Pertanyaan Umum"
            id="faq-heading"
          />
          <div className="max-w-3xl mx-auto space-y-4">
            {ppdbConfig.faq.map((item, i) => (
              <details
                key={i}
                className="group bg-white border border-border rounded-xl shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-text hover:text-primary transition-colors list-none">
                  {item.pertanyaan}
                  <svg
                    className="w-5 h-5 shrink-0 transition-transform group-open:rotate-180 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-4 text-sm text-text-muted leading-relaxed border-t border-border pt-3">
                  {item.jawaban}
                </div>
              </details>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
