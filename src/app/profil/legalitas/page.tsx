import type { Metadata } from "next";
import Link from "next/link";
import {
  generateMetadata as genMeta,
  generateBreadcrumbJsonLd,
} from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = genMeta({
  title: "Legalitas Lembaga",
  description:
    "Dokumen legalitas dan perizinan resmi Yayasan Pesantren Ar-Raudhah Paseh.",
  path: "/profil/legalitas",
});

const legalDocs = [
  { label: "Akta Notaris", value: siteConfig.legality.aktaNotaris },
  { label: "SK Kemenkumham", value: siteConfig.legality.skKemenkumham },
  { label: "NSPP Pesantren", value: siteConfig.legality.nspp },
  { label: "NPSN", value: siteConfig.legality.npsn },
  {
    label: "SK Izin Operasional Kemenag",
    value: siteConfig.legality.izinOperasional,
  },
];

export default function LegalitasPage() {
  const breadcrumb = generateBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "Profil Yayasan", url: "/profil" },
    { name: "Legalitas Lembaga", url: "/profil/legalitas" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

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
                Legalitas Lembaga
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Legalitas Lembaga
          </h1>
          <p className="mt-3 text-white/70 max-w-xl">
            Dokumen perizinan dan legalitas resmi Yayasan Pesantren Ar-Raudhah
            Paseh yang terdaftar dan diakui negara.
          </p>
        </Container>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeading
            label="Dokumen Resmi"
            title="Legalitas & Perizinan"
            subtitle="Yayasan Pesantren Ar-Raudhah Paseh terdaftar secara resmi dan memiliki izin operasional yang lengkap."
          />

          <div className="max-w-3xl mx-auto">
            <div className="overflow-x-auto rounded-xl border border-border shadow-sm mb-10">
              <table className="w-full text-sm">
                <caption className="sr-only">
                  Tabel dokumen legalitas yayasan
                </caption>
                <thead>
                  <tr className="bg-primary-light">
                    <th
                      scope="col"
                      className="text-left px-5 py-3 font-semibold text-primary"
                    >
                      Dokumen
                    </th>
                    <th
                      scope="col"
                      className="text-left px-5 py-3 font-semibold text-primary"
                    >
                      Nomor / Keterangan
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {legalDocs.map((doc) => (
                    <tr
                      key={doc.label}
                      className="hover:bg-bg transition-colors"
                    >
                      <td className="px-5 py-3.5 font-medium text-text whitespace-nowrap">
                        {doc.label}
                      </td>
                      <td className="px-5 py-3.5 text-text-muted font-mono text-xs">
                        {doc.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Galeri sertifikat placeholder */}
            <h3 className="font-heading font-semibold text-text mb-5 text-lg">
              Galeri Dokumen Resmi
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {(
                [
                  "sertifikatAkta",
                  "sertifikatKemenkumham",
                  "sertifikatKemenag",
                ] as const
              ).map((slot) => (
                <div
                  key={slot}
                  className="rounded-xl overflow-hidden border border-border bg-primary-light aspect-[3/4] flex items-center justify-center"
                >
                  <div className="text-center p-4 text-primary/50">
                    <svg
                      className="w-10 h-10 mx-auto mb-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <p className="text-xs font-medium">{slot}</p>
                    <p className="text-xs mt-1 opacity-60">
                      [ISI: Scan dokumen]
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-text-muted mt-3 text-center">
              * Scan dokumen asli akan ditampilkan setelah foto tersedia
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
