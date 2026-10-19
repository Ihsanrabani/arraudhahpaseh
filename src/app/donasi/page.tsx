import type { Metadata } from "next";
import Link from "next/link";
import {
  generateMetadata as genMeta,
  generateBreadcrumbJsonLd,
} from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import DonasiSection from "@/components/sections/DonasiSection";

export const metadata: Metadata = genMeta({
  title: "Wakaf & Donasi (ZISWAF)",
  description:
    "Dukung pendidikan Islam melalui program wakaf dan donasi Pesantren Ar-Raudhah Paseh. Transparan, amanah, dan berkah.",
  path: "/donasi",
  keywords: ["wakaf pesantren", "donasi pesantren tasikmalaya", "ziswaf"],
});

export default function DonasiPage() {
  const breadcrumb = generateBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "Wakaf & Donasi", url: "/donasi" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

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
                Wakaf & Donasi
              </li>
            </ol>
          </nav>
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-semibold uppercase tracking-widest mb-2">
              ZISWAF
            </p>
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Wakaf & Donasi
            </h1>
            <p className="text-white/80 text-base leading-relaxed">
              Setiap kontribusi Anda adalah amal jariyah yang terus mengalir
              pahalanya. Bersama kita bangun generasi Qur&apos;ani yang berakhlak
              mulia dan mandiri.
            </p>
          </div>
        </Container>
      </div>

      <DonasiSection />

      {/* Laporan transparansi */}
      <section className="py-14 bg-white">
        <Container>
          <SectionHeading
            label="Transparansi"
            title="Laporan Penggunaan Dana"
            subtitle="Kami berkomitmen untuk mengelola setiap donasi dengan amanah dan transparan."
          />
          <div className="max-w-3xl mx-auto bg-bg border border-border rounded-2xl p-8 text-center">
            <p className="text-text-muted text-sm leading-relaxed mb-4">
              [ISI: Laporan penggunaan dana akan ditampilkan secara berkala di
              sini. Termasuk total dana terkumpul, program yang didanai, dan
              progress pembangunan/program.]
            </p>
            <p className="text-xs text-primary font-medium">
              Untuk informasi lebih lanjut, hubungi bendahara yayasan di {"{"}
              siteConfig.contact.email.yayasan{"}"}
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
