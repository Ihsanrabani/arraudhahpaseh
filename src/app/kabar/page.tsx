import type { Metadata } from "next";
import {
  generateMetadata as genMeta,
  generateBreadcrumbJsonLd,
} from "@/lib/seo";
import Container from "@/components/ui/Container";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = genMeta({
  title: "Kabar & Galeri",
  description:
    "Berita terkini, tausiyah, kegiatan santri, dan pengumuman dari Pesantren Ar-Raudhah Paseh.",
  path: "/kabar",
  keywords: ["berita pesantren", "kegiatan santri", "galeri pesantren"],
});

const categoryColors: Record<string, "emerald" | "amber" | "blue" | "rose"> = {
  "Berita Pondok": "emerald",
  Tausiyah: "amber",
  "Kegiatan Santri": "blue",
  Pengumuman: "rose",
};

const categories = [
  "Semua",
  "Berita Pondok",
  "Tausiyah",
  "Kegiatan Santri",
  "Pengumuman",
];

export default function KabarPage() {
  const posts = getAllPosts();
  const breadcrumb = generateBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "Kabar & Galeri", url: "/kabar" },
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
                Kabar & Galeri
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Kabar & Galeri
          </h1>
          <p className="mt-3 text-white/70 max-w-xl">
            Berita terkini, tausiyah, dokumentasi kegiatan santri, dan
            pengumuman resmi.
          </p>
        </Container>
      </div>

      <section className="py-16 md:py-20 bg-white">
        <Container>
          {/* Category filter (static, would need client for full filtering) */}
          <div
            className="flex flex-wrap gap-2 mb-10 justify-center"
            role="list"
            aria-label="Filter kategori"
          >
            {categories.map((cat) => (
              <span
                key={cat}
                className="px-4 py-2 rounded-full text-sm font-medium bg-bg border border-border text-text-muted hover:border-primary hover:text-primary transition-colors cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>

          {posts.length === 0 ? (
            <div className="text-center py-16 text-text-muted">
              <p className="text-4xl mb-4" aria-hidden="true">
                📝
              </p>
              <p>Belum ada artikel yang dipublikasikan.</p>
            </div>
          ) : (
            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              role="list"
            >
              {posts.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/kabar/${post.slug}`}
                    className="group block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
                  >
                    <Card
                      hover
                      className="h-full flex flex-col overflow-hidden"
                      padding="none"
                    >
                      <div className="aspect-video bg-primary-light overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5 flex flex-col flex-1">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge
                            color={categoryColors[post.category] ?? "gray"}
                          >
                            {post.category}
                          </Badge>
                          <time
                            dateTime={post.date}
                            className="text-xs text-text-muted"
                          >
                            {formatDate(post.date)}
                          </time>
                        </div>
                        <h2 className="font-heading font-semibold text-text text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-sm text-text-muted leading-relaxed flex-1 line-clamp-3">
                          {post.description}
                        </p>
                        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                          Baca Selengkapnya
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </span>
                      </div>
                    </Card>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </Container>
      </section>
    </>
  );
}
