import type { Metadata } from "next";
import Link from "next/link";
import {
  generateMetadata as genMeta,
  generateBreadcrumbJsonLd,
} from "@/lib/seo";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";
import { programs } from "@/content/programs";
import { cn } from "@/lib/utils";

export const metadata: Metadata = genMeta({
  title: "Unit & Jenjang Pendidikan",
  description:
    "Program dan unit pendidikan di Pesantren Ar-Raudhah Paseh: Tahfidz, Madrasah Diniyah, Pendidikan Formal, dan Pembinaan Akhlak.",
  path: "/pendidikan/unit",
  keywords: ["tahfidz", "madrasah diniyah", "pendidikan formal pesantren"],
});

const colorBorderMap: Record<string, string> = {
  emerald: "border-l-emerald-500",
  amber: "border-l-amber-500",
  blue: "border-l-blue-500",
  rose: "border-l-rose-500",
};

const iconMap: Record<string, string> = {
  BookOpen: "📖",
  Scroll: "📜",
  GraduationCap: "🎓",
  Heart: "💚",
};

export default function UnitPage() {
  const breadcrumb = generateBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "Pendidikan", url: "/pendidikan" },
    { name: "Unit & Jenjang Pendidikan", url: "/pendidikan/unit" },
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
                Unit & Jenjang Pendidikan
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Unit & Jenjang Pendidikan
          </h1>
          <p className="mt-3 text-white/70 max-w-xl">
            Program pendidikan komprehensif yang memadukan ilmu agama, hafalan
            Al-Qur&apos;an, dan pendidikan formal.
          </p>
        </Container>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          <SectionHeading label="Program Kami" title="Unit Pendidikan" />
          <div className="space-y-8 max-w-4xl mx-auto">
            {programs.map((prog) => (
              <div key={prog.id} id={prog.id}>
                <Card
                  padding="lg"
                  className={cn(
                    "border-l-4",
                    colorBorderMap[prog.color] ?? "border-l-gray-400",
                  )}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-4xl shrink-0" aria-hidden="true">
                      {iconMap[prog.icon] ?? "📚"}
                    </span>
                    <div className="flex-1">
                      <h2 className="font-heading font-bold text-text text-xl mb-2">
                        {prog.nama}
                      </h2>
                      <p className="text-text-muted leading-relaxed mb-4">
                        {prog.deskripsi}
                      </p>

                      {"target" in prog && (
                        <div className="inline-flex items-center gap-2 bg-primary-light text-primary px-3 py-1.5 rounded-lg text-sm font-medium mb-4">
                          🎯 Target: {prog.target}
                        </div>
                      )}

                      {"kitab" in prog && (
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-text mb-2">
                            Kitab yang dipelajari:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {(prog as { kitab: readonly string[] }).kitab.map(
                              (k) => (
                                <span
                                  key={k}
                                  className="px-3 py-1 bg-amber-50 text-amber-700 border border-amber-200 rounded-full text-xs font-medium"
                                >
                                  {k}
                                </span>
                              ),
                            )}
                          </div>
                        </div>
                      )}

                      {"jenjang" in prog && (
                        <div className="mb-4">
                          <p className="text-sm font-semibold text-text mb-2">
                            Jenjang tersedia:
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {(
                              prog as { jenjang: readonly string[] }
                            ).jenjang.map((j) => (
                              <span
                                key={j}
                                className="px-3 py-1 bg-blue-50 text-blue-700 border border-blue-200 rounded-full text-xs font-medium"
                              >
                                {j}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <h3 className="text-sm font-semibold text-text mb-2">
                        Keunggulan Program:
                      </h3>
                      <ul className="space-y-1.5">
                        {prog.detail.map((d) => (
                          <li
                            key={d}
                            className="flex items-start gap-2 text-sm text-text-muted"
                          >
                            <span className="text-primary font-bold mt-0.5 shrink-0">
                              ✓
                            </span>
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
