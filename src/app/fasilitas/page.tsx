import type { Metadata } from "next";
import Link from "next/link";
import {
  generateMetadata as genMeta,
  generateBreadcrumbJsonLd,
} from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AppImage from "@/components/ui/AppImage";

export const metadata: Metadata = genMeta({
  title: "Sarana & Fasilitas",
  description:
    "Fasilitas lengkap Pesantren Ar-Raudhah Paseh: masjid, asrama, kelas, perpustakaan, dan area olahraga.",
  path: "/fasilitas",
  keywords: ["fasilitas pesantren", "asrama", "masjid pesantren tasikmalaya"],
});

const fasilitasCategories = [
  {
    kategori: "Fasilitas Ibadah",
    items: [{ slot: "fasilitasMasjid" as const, label: "Masjid Jami'" }],
  },
  {
    kategori: "Tempat Tinggal",
    items: [
      { slot: "fasilitasAsramaPutra" as const, label: "Asrama Putra" },
      { slot: "fasilitasAsramaPutri" as const, label: "Asrama Putri" },
    ],
  },
  {
    kategori: "Tempat Belajar",
    items: [
      { slot: "fasilitasKelas" as const, label: "Ruang Kelas" },
      { slot: "fasilitasPerpustakaan" as const, label: "Perpustakaan" },
    ],
  },
  {
    kategori: "Fasilitas Pendukung",
    items: [
      { slot: "fasilitasDapur" as const, label: "Dapur Umum" },
      { slot: "fasilitasKantin" as const, label: "Kantin / Koperasi" },
      { slot: "fasilitasOlahraga" as const, label: "Area Olahraga" },
    ],
  },
];

export default function FasilitasPage() {
  const breadcrumb = generateBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "Sarana & Fasilitas", url: "/fasilitas" },
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
                Sarana & Fasilitas
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Sarana & Fasilitas
          </h1>
          <p className="mt-3 text-white/70 max-w-xl">
            Fasilitas yang layak dan kondusif untuk mendukung proses belajar,
            ibadah, dan kehidupan santri.
          </p>
        </Container>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeading
            label="Fasilitas Kami"
            title="Lingkungan yang Kondusif"
            subtitle="Pesantren Ar-Raudhah Paseh menyediakan sarana lengkap untuk menunjang kehidupan santri."
          />

          {fasilitasCategories.map((cat) => (
            <div key={cat.kategori} className="mb-12">
              <h2 className="font-heading font-semibold text-text text-xl mb-5 flex items-center gap-2">
                <span
                  className="w-1 h-6 bg-accent rounded-full"
                  aria-hidden="true"
                />
                {cat.kategori}
              </h2>
              <ul
                className={`grid gap-4 ${cat.items.length === 1 ? "grid-cols-1 max-w-lg" : cat.items.length === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"}`}
                role="list"
              >
                {cat.items.map((item) => (
                  <li
                    key={item.slot}
                    className="rounded-xl overflow-hidden border border-border shadow-sm group"
                  >
                    <div className="aspect-[4/3] relative bg-primary-light">
                      <AppImage
                        slot={item.slot}
                        fill
                        objectFit="cover"
                        className="transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-4 py-3 bg-white">
                      <p className="font-medium text-text text-sm">
                        {item.label}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
