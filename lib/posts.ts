import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/posts");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  author: string;
  image: string;
}

export interface Post extends PostMeta {
  content: string;
}

export type BlogCategory =
  "Berita Pondok" | "Tausiyah" | "Kegiatan Santri" | "Pengumuman" | "Semua";

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getAllPosts(): PostMeta[] {
  const slugs = getAllPostSlugs();
  return slugs
    .map((slug) => getPostMeta(slug))
    .filter((p): p is PostMeta => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostMeta(slug: string): PostMeta | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);
  return {
    slug,
    title: (data["title"] as string) ?? "",
    description: (data["description"] as string) ?? "",
    date: (data["date"] as string) ?? "",
    category: (data["category"] as string) ?? "Berita Pondok",
    author: (data["author"] as string) ?? "",
    image: (data["image"] as string) ?? "/images/blog/blog-artikel-01.webp",
  };
}

export function getPost(slug: string): Post | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);
  return {
    slug,
    title: (data["title"] as string) ?? "",
    description: (data["description"] as string) ?? "",
    date: (data["date"] as string) ?? "",
    category: (data["category"] as string) ?? "Berita Pondok",
    author: (data["author"] as string) ?? "",
    image: (data["image"] as string) ?? "/images/blog/blog-artikel-01.webp",
    content,
  };
}

export function getPostsByCategory(category: string): PostMeta[] {
  if (category === "Semua") return getAllPosts();
  return getAllPosts().filter((p) => p.category === category);
}

export function getRecentPosts(count = 3): PostMeta[] {
  return getAllPosts().slice(0, count);
}
