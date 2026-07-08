import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type BlogCategory = "curiosity" | "gsoc" | "quantifai";

export type BlogMeta = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  category: BlogCategory;
  image: string | null;
  readingTime: string;
};

export type BlogPost = BlogMeta & {
  body: string;
};

export const BLOG_CATEGORIES: Array<{
  id: BlogCategory;
  label: string;
  eyebrow: string;
  description: string;
}> = [
  {
    id: "curiosity",
    label: "Curiosity",
    eyebrow: "Something interesting that I learn",
    description: "Notes from the things I break apart to understand better.",
  },
  {
    id: "gsoc",
    label: "GSoC",
    eyebrow: "Google Summer of Code",
    description: "My Journey",
  },
  {
    id: "quantifai",
    label: "Quantifai",
    eyebrow: "SDE intern journal",
    description: "Engineering notes from Quantifai: What I learn, backend decisions, product learnings, and shipping logs. All that's allowed with a NDA in mind  ^_~",
  },
];

const blogsDir = path.join(process.cwd(), "public", "blogs");
const datePattern =
  /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}$/i;

function normalizeCategory(value: unknown, slug: string): BlogCategory {
  const raw = String(value || "").toLowerCase();
  if (raw === "gsoc" || slug.includes("gsoc")) return "gsoc";
  if (raw === "quantifai" || slug.includes("quantifai")) return "quantifai";
  return "curiosity";
}

function findTitle(content: string, slug: string): string {
  return (
    content
      .split("\n")
      .map((line) => line.trim())
      .find((line) => line && !datePattern.test(line))
      ?.replace(/^#\s*/, "")
      .trim() || slug
  );
}

function findDate(content: string, frontmatterDate: unknown): string {
  if (frontmatterDate) return String(frontmatterDate);
  return (
    content
      .split("\n")
      .map((line) => line.trim())
      .find((line) => datePattern.test(line)) || "Unknown date"
  );
}

function stripHeader(content: string): string {
  const lines = content.split("\n");
  const dateIndex = lines.findIndex((line) => datePattern.test(line.trim()));
  if (dateIndex >= 0) return lines.slice(dateIndex + 1).join("\n").trim();
  if (lines[0]?.trim().startsWith("#")) return lines.slice(1).join("\n").trim();
  return content.trim();
}

function excerptFrom(content: string): string {
  const cleaned = stripHeader(content)
    .replace(/!\[[^\]]*\]\([^)]+\)/g, "")
    .replace(/[#*_`>-]/g, "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean)
    .find((line) => line.length > 48);

  if (!cleaned) return "A technical note by Harsh Mehta.";
  return cleaned.length > 150 ? `${cleaned.slice(0, 147)}...` : cleaned;
}

function imageFor(slug: string, image: unknown): string | null {
  if (typeof image === "string" && image.trim()) return image;
  const imageExtensions = ["png", "jpg", "jpeg", "webp", "gif", "svg"];
  const imageName = imageExtensions
    .map((ext) => `${slug}-title.${ext}`)
    .find((name) => fs.existsSync(path.join(process.cwd(), "public", "assets", name)));
  return imageName ? `/assets/${imageName}` : null;
}

function readingTime(content: string): string {
  const words = content.trim().split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.ceil(words / 220))} min read`;
}

function parseBlog(slug: string, raw: string): BlogPost {
  const parsed = matter(raw);
  const title = String(parsed.data.title || findTitle(parsed.content, slug));
  const body = stripHeader(parsed.content);

  return {
    slug,
    title,
    subtitle: String(parsed.data.subtitle || parsed.data.description || excerptFrom(parsed.content)),
    date: findDate(parsed.content, parsed.data.date),
    category: normalizeCategory(parsed.data.category, slug),
    image: imageFor(slug, parsed.data.image),
    readingTime: readingTime(parsed.content),
    body,
  };
}

export function getAllBlogs(): BlogMeta[] {
  if (!fs.existsSync(blogsDir)) return [];

  return fs
    .readdirSync(blogsDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => getBlogBySlug(file.replace(/\.md$/, "")))
    .filter((post): post is BlogPost => Boolean(post))
    .sort((a, b) => {
      if (a.date === "Unknown date") return 1;
      if (b.date === "Unknown date") return -1;
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    })
    .map(({ body: _body, ...meta }) => meta);
}

export function getBlogBySlug(slug: string): BlogPost | null {
  const filePath = path.join(blogsDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  return parseBlog(slug, fs.readFileSync(filePath, "utf-8"));
}

