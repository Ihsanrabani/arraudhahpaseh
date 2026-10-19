import type { Metadata } from "next";
import Link from "next/link";
import { generateMetadata as genMeta } from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

export const metadata: Metadata = genMeta({
  title: "Kurikulum & Kitab Kuning",
  description:
    "Kurikulum terpadu Pesantren Ar-Raudhah Paseh yang memadukan ilmu agama, kitab kuning, dan pendidikan nasional.",
  path: "/pendidikan/kurikulum",
});

export default function KurikulumPage() {
  return (
    <>
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
                Kurikulum & Kitab Kuning
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Kurikulum & Kitab Kuning
          </h1>
          <p className="mt-3 text-white/70 max-w-xl">
            Kurikulum terpadu yang memadukan ilmu agama, hafalan Al-Qur&apos;an,
            kitab kuning, dan pendidikan nasional.
          </p>
        </Container>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeading
            label="Kurikulum"
            title="Sistem Pembelajaran"
            subtitle="Pendekatan holistik yang menyeimbangkan ilmu agama dan ilmu umum."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card padding="lg">
              <h3 className="font-heading font-semibold text-primary mb-4 text-lg">
                📚 Kurikulum Diniyah
              </h3>
              <ul className="space-y-2 text-sm text-text-muted">
                {[
                  "Tafsir Al-Qur'an",
                  "Ilmu Hadits",
                  "Fiqih Ibadah & Muamalah",
                  "Ilmu Nahwu & Sharaf",
                  "Balaghah & Adab",
                  "Tauhid & Aqidah",
                  "Akhlak & Tasawuf",
                  "Sirah Nabawiyyah",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-primary">✓</span> {item}
                  </li>
                ))}
              </ul>
            </Card>

            <Card padding="lg">
              <h3 className="font-heading font-semibold text-primary mb-4 text-lg">
                🎓 Kurikulum Formal
              </h3>
              <ul className="space-y-2 text-sm text-text-muted">
                {[
                  "Matematika & Sains",
                  "Bahasa Indonesia",
                  "Bahasa Arab (Intensif)",
                  "Bahasa Inggris",
                  "IPA & IPS",
                  "Teknologi Informasi",
                  "[ISI: Mata pelajaran lainnya]",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="text-primary">✓</span> {item}
                  </li>
                ))}
              </ul>
            </Card>
          </div>

          <div className="mt-10 max-w-4xl mx-auto">
            <Card
              padding="lg"
              className="bg-primary-light border-primary/20"
            >
              <h3 className="font-heading font-semibold text-primary mb-3 text-lg">
                📜 Kitab Kuning yang Dipelajari
              </h3>
              <p className="text-sm text-text-muted mb-4">
                Berikut sebagian kitab kuning yang menjadi referensi
                pembelajaran di pesantren:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  "Jurumiyyah",
                  "Imrithi",
                  "Alfiyah Ibn Malik",
                  "Fathul Qarib",
                  "Safinatun Najah",
                  "Riyadhus Shalihin",
                  "Bulughul Maram",
                  "Ihya Ulumuddin",
                  "[ISI: Kitab lainnya]",
                ].map((kitab) => (
                  <div
                    key={kitab}
                    className="bg-white rounded-lg px-3 py-2 text-sm text-text font-medium border border-border text-center"
                  >
                    {kitab}
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </>
  );
}
