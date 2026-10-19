import type { Metadata } from "next";
import Link from "next/link";
import {
  generateMetadata as genMeta,
  generateBreadcrumbJsonLd,
} from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { jadwalHarian, ekstrakurikuler } from "@/content/programs";

export const metadata: Metadata = genMeta({
  title: "Jadwal Harian Santri",
  description:
    "Jadwal kegiatan harian santri Pesantren Ar-Raudhah Paseh, dari bangun tidur hingga istirahat malam.",
  path: "/pendidikan/jadwal",
});

export default function JadwalPage() {
  const breadcrumb = generateBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "Pendidikan", url: "/pendidikan" },
    { name: "Jadwal Harian Santri", url: "/pendidikan/jadwal" },
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
              <li className="text-white font-medium" aria-current="page">
                Jadwal Harian Santri
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Jadwal Harian Santri
          </h1>
          <p className="mt-3 text-white/70 max-w-xl">
            Rutinitas terstruktur membentuk disiplin, akhlak, dan keunggulan
            santri Pesantren Ar-Raudhah Paseh.
          </p>
        </Container>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeading
            label="Aktivitas Harian"
            title="Jadwal 24 Jam Santri"
            subtitle="Setiap momen dimanfaatkan untuk ibadah, belajar, dan pengembangan diri."
          />

          {/* Desktop table */}
          <div className="hidden md:block overflow-x-auto rounded-xl border border-border shadow-sm max-w-3xl mx-auto mb-12">
            <table className="w-full text-sm">
              <caption className="sr-only">
                Jadwal harian santri pesantren
              </caption>
              <thead>
                <tr className="bg-primary text-white">
                  <th
                    scope="col"
                    className="text-left px-5 py-3.5 text-white font-semibold"
                  >
                    Waktu
                  </th>
                  <th
                    scope="col"
                    className="text-left px-5 py-3.5 text-white font-semibold"
                  >
                    Kegiatan
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {jadwalHarian.map((item, i) => (
                  <tr
                    key={i}
                    className={i % 2 === 0 ? "bg-white" : "bg-bg"}
                  >
                    <td className="px-5 py-3 font-mono text-sm text-primary font-medium whitespace-nowrap">
                      {item.waktu}
                    </td>
                    <td className="px-5 py-3 text-text">
                      <span className="mr-2" aria-hidden="true">
                        {item.ikon}
                      </span>
                      {item.kegiatan}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile cards */}
          <ul
            className="md:hidden space-y-3 mb-12 max-w-md mx-auto"
            role="list"
          >
            {jadwalHarian.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 bg-white border border-border rounded-xl px-4 py-3 shadow-sm"
              >
                <span className="text-2xl shrink-0" aria-hidden="true">
                  {item.ikon}
                </span>
                <div>
                  <p className="text-xs font-mono text-primary font-semibold">
                    {item.waktu}
                  </p>
                  <p className="text-sm text-text">{item.kegiatan}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Ekstrakurikuler */}
          <SectionHeading
            label="Pengembangan Diri"
            title="Kegiatan Ekstrakurikuler"
            subtitle="Selain belajar agama, santri juga mengembangkan bakat dan minat melalui berbagai ekskul."
          />
          <ul
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 max-w-3xl mx-auto"
            role="list"
          >
            {ekstrakurikuler.map((ekskul) => (
              <li
                key={ekskul.nama}
                className="bg-bg border border-border rounded-xl p-4 text-center"
              >
                <span className="text-3xl block mb-2" aria-hidden="true">
                  {ekskul.ikon}
                </span>
                <p className="text-xs font-medium text-text leading-tight">
                  {ekskul.nama}
                </p>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
