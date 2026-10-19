import type { Metadata } from "next";
import Link from "next/link";
import {
  generateMetadata as genMeta,
  generateBreadcrumbJsonLd,
} from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AppImage from "@/components/ui/AppImage";
import { pengurusYayasan } from "@/content/programs";
import { images } from "@/content/images";

export const metadata: Metadata = genMeta({
  title: "Dewan Pengasuh & Pengurus",
  description:
    "Struktur dewan pengasuh dan pengurus Yayasan Pesantren Ar-Raudhah Paseh.",
  path: "/profil/pengurus",
});

export default function PengurusPage() {
  const breadcrumb = generateBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "Profil Yayasan", url: "/profil" },
    { name: "Dewan Pengasuh & Pengurus", url: "/profil/pengurus" },
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
                Dewan Pengasuh & Pengurus
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Dewan Pengasuh & Pengurus
          </h1>
          <p className="mt-3 text-white/70 max-w-xl">
            Mengenal para pemimpin dan pengurus yang mendedikasikan diri untuk
            kemajuan pesantren.
          </p>
        </Container>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeading
            label="Struktur Organisasi"
            title="Dewan Pengasuh & Pengurus Yayasan"
            subtitle="Para pemimpin yang amanah dalam membimbing dan mengelola Yayasan Pesantren Ar-Raudhah Paseh."
          />
          <ul
            className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            role="list"
          >
            {pengurusYayasan.map((person) => (
              <li key={person.jabatan} className="text-center">
                <div className="relative w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden bg-primary-light">
                  <AppImage
                    slot={person.imageSlot as keyof typeof images}
                    fill
                    objectFit="cover"
                  />
                </div>
                <p className="text-xs text-primary font-semibold uppercase tracking-wide mb-1">
                  {person.jabatan}
                </p>
                <h3 className="font-heading font-semibold text-text text-sm leading-snug">
                  {person.nama}
                </h3>
                {person.gelar && (
                  <p className="text-xs text-text-muted mt-0.5">
                    {person.gelar}
                  </p>
                )}
              </li>
            ))}
          </ul>

          <div className="mt-16 bg-bg rounded-2xl p-8 max-w-2xl mx-auto text-center border border-border">
            <h3 className="font-heading font-semibold text-text mb-3">
              Struktur Lengkap
            </h3>
            <p className="text-text-muted text-sm leading-relaxed">
              [ISI: Tambahkan bagan struktur organisasi lengkap — bisa berupa
              tabel atau bagan visual yang menampilkan semua jabatan dalam
              yayasan]
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
