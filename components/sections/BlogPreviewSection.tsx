import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import Link from "next/link";
import { getRecentPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

const categoryColors: Record<string, "emerald" | "amber" | "blue" | "rose"> = {
  "Berita Pondok": "emerald",
  Tausiyah: "amber",
  "Kegiatan Santri": "blue",
  Pengumuman: "rose",
};

export default function BlogPreviewSection() {
  const posts = getRecentPosts(3);

  return (
    <section
      className="py-16 md:py-20 bg-bg"
      aria-labelledby="blog-heading"
    >
      <Container>
        <SectionHeading
          label="Kabar Terbaru"
          title="Berita & Artikel"
          subtitle="Ikuti perkembangan terkini seputar kegiatan pesantren, tausiyah, dan informasi penting."
          id="blog-heading"
        />

        {posts.length === 0 ? (
          <p className="text-center text-text-muted">
            Belum ada artikel yang dipublikasikan.
          </p>
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
                    {/* Thumbnail */}
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
                        <Badge color={categoryColors[post.category] ?? "gray"}>
                          {post.category}
                        </Badge>
                        <time
                          dateTime={post.date}
                          className="text-xs text-text-muted"
                        >
                          {formatDate(post.date)}
                        </time>
                      </div>
                      <h3 className="font-heading font-semibold text-text text-base leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-text-muted leading-relaxed flex-1 line-clamp-3">
                        {post.description}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
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

        <div className="mt-10 text-center">
          <Button as="link" href="/kabar" variant="secondary">
            Lihat Semua Artikel
          </Button>
        </div>
      </Container>
    </section>
  );
}
