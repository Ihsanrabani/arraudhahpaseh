import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site.config";
import { getAllPosts } from "@/lib/posts";

// Build-time stable timestamp (update when rebuilding)
const NOW = "2026-10-18T00:00:00.000Z";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: NOW, changeFrequency: "weekly", priority: 1 },
    {
      url: `${base}/profil/sejarah`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/profil/pengurus`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/profil/legalitas`,
      lastModified: NOW,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/pendidikan/unit`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/pendidikan/kurikulum`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/pendidikan/jadwal`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/fasilitas`,
      lastModified: NOW,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${base}/ppdb`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/donasi`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/kabar`,
      lastModified: NOW,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${base}/kontak`,
      lastModified: NOW,
      changeFrequency: "yearly",
      priority: 0.6,
    },
    {
      url: `${base}/kebijakan-privasi`,
      lastModified: NOW,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  const posts = getAllPosts();
  const postPages: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${base}/kabar/${post.slug}`,
    lastModified: post.date,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...postPages];
}
