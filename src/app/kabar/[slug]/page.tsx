import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { generateBreadcrumbJsonLd, generateArticleJsonLd } from "@/lib/seo";
import { getPost, getAllPostSlugs } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { siteConfig } from "@/content/site.config";
import Container from "@/components/ui/Container";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import { MDXRemote } from "next-mdx-remote/rsc";

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${siteConfig.shortName}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      images: [{ url: post.image, width: 800, height: 450 }],
    },
  };
}

const categoryColors: Record<string, "emerald" | "amber" | "blue" | "rose"> = {
  "Berita Pondok": "emerald",
  Tausiyah: "amber",
  "Kegiatan Santri": "blue",
  Pengumuman: "rose",
};

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getPost(slug);
  if (!post) notFound();

  const breadcrumb = generateBreadcrumbJsonLd([
    { name: "Beranda", url: "/" },
    { name: "Kabar & Galeri", url: "/kabar" },
    { name: post.title, url: `/kabar/${slug}` },
  ]);
  const articleJsonLd = generateArticleJsonLd({
    title: post.title,
    description: post.description,
    date: post.date,
    author: post.author,
    image: post.image,
    url: `/kabar/${slug}`,
  });

  const shareText = encodeURIComponent(`${post.title} — ${siteConfig.name}`);
  const shareUrl = encodeURIComponent(`${siteConfig.url}/kabar/${slug}`);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <div className="bg-primary py-12 md:py-16 text-white">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-2 text-sm text-white/60 flex-wrap">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/kabar" className="hover:text-white transition-colors">
                  Kabar
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li
                className="text-white font-medium line-clamp-1"
                aria-current="page"
              >
                {post.title}
              </li>
            </ol>
          </nav>
          <div className="flex items-center gap-3 mb-4">
            <Badge color={categoryColors[post.category] ?? "gray"}>
              {post.category}
            </Badge>
            <time dateTime={post.date} className="text-white/60 text-sm">
              {formatDate(post.date)}
            </time>
          </div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-white leading-tight max-w-3xl">
            {post.title}
          </h1>
          {post.author && (
            <p className="mt-3 text-white/60 text-sm">Oleh: {post.author}</p>
          )}
        </Container>
      </div>

      <article className="py-12 md:py-16 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            {/* Featured image */}
            {post.image && (
              <div className="rounded-2xl overflow-hidden mb-8 aspect-video bg-primary-light">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            )}

            {/* Content */}
            <div className="prose-ar">
              <MDXRemote source={post.content} />
            </div>

            {/* Share */}
            <div className="mt-10 pt-8 border-t border-border">
              <p className="text-sm font-semibold text-text mb-4">
                Bagikan artikel ini:
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  as="a"
                  href={`https://wa.me/?text=${shareText}%20${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                >
                  📱 WhatsApp
                </Button>
                <Button
                  as="a"
                  href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  size="sm"
                >
                  📘 Facebook
                </Button>
                <Button as="link" href="/kabar" variant="ghost" size="sm">
                  ← Kembali ke Kabar
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </article>
    </>
  );
}
