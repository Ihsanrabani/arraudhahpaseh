import type { Metadata } from "next";
import Link from "next/link";
import {
  generateMetadata as genMeta,
  generateBreadcrumbJsonLd,
} from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { pancaJiwa } from "@/content/programs";

export const metadata: Metadata = genMeta({
  title: "Sejarah & Visi Misi",
  description:
    "Sejarah berdirinya Yayasan Pesantren Ar-Raudhah Paseh, visi misi, dan nilai-nilai dasar yang menjadi landasan pendidikan.",
  path: "/profil/sejarah",
  keywords: ["sejarah pesantren", "visi misi", "profil yayasan"],
});

const timelineEvents = [
  {
    year: "[ISI: Tahun berdiri]",
    title: "Berdirinya Pesantren",
    desc: "[ISI: Cerita singkat pendirian pesantren — oleh siapa, di mana, dan apa latarbelakangnya]",
  },
  {
    year: "[ISI: Tahun]",
    title: "[ISI: Milestone penting 2]",
    desc: "[ISI: Deskripsi perkembangan, mis. pendirian madrasah diniyah, penambahan asrama, dll.]",
  },
  {
    year: "[ISI: Tahun]",
    title: "[ISI: Milestone penting 3]",
    desc: "[ISI: Deskripsi perkembangan lanjutan]",
  },
  {
    year: "[ISI: Tahun]",
    title: "Pendirian Yayasan Resmi",
    desc: "[ISI: Deskripsi pengesahan yayasan secara hukum]",
  },
  {
    year: "Kini",
    title: "Berkembang Bersama Umat",
    desc: "[ISI: Kondisi pesantren saat ini: jumlah santri, fasilitas, program yang berjalan]",
  },
];

export default function SejarahPage() {
  const breadcrumb = generateBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "Profil Yayasan", url: "/profil" },
    { name: "Sejarah & Visi Misi", url: "/profil/sejarah" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      {/* Page header */}
      <div className="bg-primary py-12 md:py-16 text-white">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link
                  href="/profil"
                  className="hover:text-white transition-colors">
                  Profil
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="text-white font-medium" aria-current="page">
                Sejarah & Visi Misi
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Sejarah & Visi Misi
          </h1>
          <p className="mt-3 text-white/70 max-w-xl">
            Mengenal lebih dekat perjalanan dan cita-cita Yayasan Pesantren
            Ar-Raudhah Paseh.
          </p>
        </Container>
      </div>

      {/* Sejarah */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-labelledby="sejarah-heading"
      >
        <Container>
          <SectionHeading
            label="Sejarah"
            title="Perjalanan Pondok"
            subtitle="Dari sederhana hingga berkembang, dengan semangat dakwah dan pendidikan Islam."
            id="sejarah-heading"
          />

          {/* Timeline */}
          <div className="relative max-w-3xl mx-auto">
            <div
              className="absolute left-6 top-0 bottom-0 w-0.5 bg-primary-light"
              aria-hidden="true"
            />
            <ol className="space-y-8" aria-label="Timeline sejarah pesantren">
              {timelineEvents.map((event, i) => (
                <li key={i} className="relative pl-16">
                  <div
                    className="absolute left-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white font-heading font-bold text-xs text-center leading-tight"
                    aria-hidden="true"
                  >
                    {event.year.length > 4
                      ? event.year.slice(0, 4)
                      : event.year}
                  </div>
                  <div>
                    <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">
                      {event.year}
                    </p>
                    <h3 className="font-heading font-semibold text-text mb-1">
                      {event.title}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">
                      {event.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      {/* Visi Misi */}
      <section
        className="py-16 md:py-20 bg-bg"
        aria-labelledby="visi-misi-heading"
      >
        <Container>
          <SectionHeading
            label="Arah & Tujuan"
            title="Visi & Misi"
            id="visi-misi-heading"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-primary rounded-2xl p-8 text-white">
              <h3 className="font-heading font-bold text-accent text-lg mb-4 uppercase tracking-wide">
                Visi
              </h3>
              <p className="text-white leading-relaxed text-lg italic">
                &ldquo;[ISI: Tuliskan visi Yayasan Pesantren Ar-Raudhah
                Paseh]&rdquo;
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="font-heading font-bold text-primary text-lg mb-4 uppercase tracking-wide">
                Misi
              </h3>
              <ul className="space-y-3 text-text-muted">
                {[
                  "[ISI: Misi 1 — contoh: Menyelenggarakan pendidikan Al-Qur'an yang berkualitas]",
                  "[ISI: Misi 2 — contoh: Mengembangkan ilmu agama berbasis kitab kuning]",
                  "[ISI: Misi 3 — contoh: Membentuk akhlak mulia dan kemandirian santri]",
                  "[ISI: Misi 4 — contoh: Membangun generasi yang hafidz dan berilmu]",
                ].map((m, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5 shrink-0">
                      {i + 1}.
                    </span>
                    <span className="text-sm leading-relaxed">{m}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Panca Jiwa */}
      <section
        className="py-16 md:py-20 bg-white"
        aria-labelledby="panca-jiwa-heading"
      >
        <Container>
          <SectionHeading
            label="Nilai Dasar"
            title="Panca Jiwa Pesantren"
            subtitle="Lima nilai yang menjadi ruh dan nafas kehidupan di Pesantren Ar-Raudhah Paseh."
            id="panca-jiwa-heading"
          />
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
            role="list"
          >
            {pancaJiwa.map((nilai, i) => (
              <li
                key={nilai.judul}
                className="bg-bg rounded-xl p-6 border border-border text-center"
              >
                <div
                  className="w-10 h-10 rounded-full bg-primary text-white font-heading font-bold text-lg flex items-center justify-center mx-auto mb-3"
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                <h3 className="font-heading font-semibold text-primary mb-2 text-sm">
                  {nilai.judul}
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                  {nilai.deskripsi}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
