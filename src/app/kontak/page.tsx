import type { Metadata } from "next";
import Link from "next/link";
import {
  generateMetadata as genMeta,
  generateBreadcrumbJsonLd,
} from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/content/site.config";
import { buildKontakWhatsApp, buildPPDBWhatsApp } from "@/lib/whatsapp";

export const metadata: Metadata = genMeta({
  title: "Kontak & Lokasi",
  description: `Hubungi Yayasan Pesantren Ar-Raudhah Paseh di Kecamatan Paseh, Tasikmalaya. Telepon, WhatsApp, email, dan peta lokasi.`,
  path: "/kontak",
  keywords: [
    "kontak pesantren paseh",
    "lokasi pesantren tasikmalaya",
    "alamat ar-raudhah",
  ],
});

export default function KontakPage() {
  const breadcrumb = generateBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "Kontak & Lokasi", url: "/kontak" },
  ]);
  const waHumas = buildKontakWhatsApp(siteConfig.contact.whatsapp.humas);
  const waPPDB = buildPPDBWhatsApp(siteConfig.contact.whatsapp.ppdb);

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
                Kontak & Lokasi
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Kontak & Lokasi
          </h1>
          <p className="mt-3 text-white/70 max-w-xl">
            Kami siap melayani Bapak/Ibu Wali Santri dan seluruh masyarakat yang
            ingin mengenal lebih jauh Pesantren Ar-Raudhah Paseh.
          </p>
        </Container>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Info kontak */}
            <div>
              <SectionHeading
                label="Hubungi Kami"
                title="Informasi Kontak"
                center={false}
              />

              <div className="space-y-5">
                {/* Alamat */}
                <Card padding="md" className="flex gap-4">
                  <span className="text-2xl shrink-0" aria-hidden="true">
                    📍
                  </span>
                  <div>
                    <p className="font-semibold text-text mb-1">
                      Alamat
                    </p>
                    <address className="not-italic text-sm text-text-muted leading-relaxed">
                      {siteConfig.contact.address.full}
                    </address>
                    {!siteConfig.social.googleMaps.startsWith("[ISI:") && (
                      <a
                        href={siteConfig.social.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline"
                      >
                        Buka di Google Maps →
                      </a>
                    )}
                  </div>
                </Card>

                {/* Telepon */}
                <Card padding="md" className="flex gap-4">
                  <span className="text-2xl shrink-0" aria-hidden="true">
                    📞
                  </span>
                  <div>
                    <p className="font-semibold text-text mb-1">
                      Telepon
                    </p>
                    <a
                      href={`tel:${siteConfig.contact.phone}`}
                      className="text-sm text-primary hover:underline"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </div>
                </Card>

                {/* WhatsApp */}
                <Card padding="md" className="flex gap-4">
                  <span className="text-2xl shrink-0" aria-hidden="true">
                    💬
                  </span>
                  <div className="space-y-2">
                    <p className="font-semibold text-text">
                      WhatsApp
                    </p>
                    <div>
                      <p className="text-xs text-text-muted mb-1">
                        Humas Pesantren
                      </p>
                      <a
                        href={waHumas}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        {siteConfig.contact.whatsapp.humas}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-text-muted mb-1">
                        Panitia PPDB
                      </p>
                      <a
                        href={waPPDB}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline font-medium"
                      >
                        {siteConfig.contact.whatsapp.ppdb}
                      </a>
                    </div>
                  </div>
                </Card>

                {/* Email */}
                <Card padding="md" className="flex gap-4">
                  <span className="text-2xl shrink-0" aria-hidden="true">
                    ✉️
                  </span>
                  <div>
                    <p className="font-semibold text-text mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${siteConfig.contact.email.info}`}
                      className="text-sm text-primary hover:underline block"
                    >
                      {siteConfig.contact.email.info}
                    </a>
                    <a
                      href={`mailto:${siteConfig.contact.email.yayasan}`}
                      className="text-sm text-primary hover:underline block mt-1"
                    >
                      {siteConfig.contact.email.yayasan}
                    </a>
                  </div>
                </Card>

                {/* Jam kunjungan */}
                <Card
                  padding="md"
                  className="flex gap-4 bg-primary-light border-primary/20"
                >
                  <span className="text-2xl shrink-0" aria-hidden="true">
                    🕐
                  </span>
                  <div>
                    <p className="font-semibold text-primary mb-1">
                      Jam Kunjungan Tamu & Wali Santri
                    </p>
                    <p className="text-sm text-text">
                      <strong>{siteConfig.visitHours.days}</strong>,{" "}
                      {siteConfig.visitHours.hours}
                    </p>
                    <p className="text-xs text-text-muted mt-1">
                      {siteConfig.visitHours.note}
                    </p>
                  </div>
                </Card>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <Button
                  as="a"
                  href={waHumas}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                >
                  Chat WhatsApp Humas
                </Button>
                <Button as="link" href="/ppdb" variant="secondary">
                  Daftar PPDB
                </Button>
              </div>
            </div>

            {/* Peta */}
            <div>
              <SectionHeading
                label="Lokasi"
                title="Peta Pesantren"
                center={false}
              />

              {/* Google Maps embed placeholder */}
              <div className="rounded-2xl overflow-hidden border border-border shadow-sm bg-primary-light aspect-[4/3] flex items-center justify-center">
                {!siteConfig.social.googleMapsEmbed.startsWith("[ISI:") ? (
                  <iframe
                    src={siteConfig.social.googleMapsEmbed}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Lokasi Pesantren Ar-Raudhah Paseh di Google Maps"
                    className="w-full h-full"
                  />
                ) : (
                  <div className="text-center p-8 text-primary/60">
                    <span className="text-5xl block mb-3" aria-hidden="true">
                      🗺️
                    </span>
                    <p className="font-medium text-sm">
                      Google Maps akan ditampilkan di sini
                    </p>
                    <p className="text-xs mt-1 opacity-70">
                      [ISI: URL Google Maps embed di site.config.ts]
                    </p>
                    {!siteConfig.social.googleMaps.startsWith("[ISI:") && (
                      <a
                        href={siteConfig.social.googleMaps}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-block text-sm font-semibold text-primary hover:underline"
                      >
                        Buka di Google Maps →
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
