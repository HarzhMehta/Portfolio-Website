import Link from "next/link";
import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

function extractTitle(content: string): string {
  const lines = content.split("\n").filter((l) => l.trim());
  return lines[0]?.replace(/^#\s*/, "").trim() || "Blog Post";
}

function extractDate(content: string): string {
  const dateLine = content
    .split("\n")
    .map((l) => l.trim())
    .find((l) =>
      /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}$/i.test(
        l
      )
    );
  return dateLine || "Unknown date";
}

function stripHeader(content: string): string {
  const lines = content.split("\n");
  // Find the date line and start content after it
  let contentStart = 0;
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (
      /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}$/i.test(
        line
      )
    ) {
      contentStart = i + 1;
      break;
    }
  }
  return lines.slice(contentStart).join("\n").trim();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "public", "blogs", `${slug}.md`);

  if (!fs.existsSync(filePath)) return {};

  const content = fs.readFileSync(filePath, "utf-8");
  const title = extractTitle(content);

  return {
    title: `${title} — Harsh Mehta`,
    description: `Blog post by Harsh Mehta about ${title.toLowerCase()}`,
    openGraph: {
      title: `${title} — Harsh Mehta`,
      description: `Blog post by Harsh Mehta about ${title.toLowerCase()}`,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "public", "blogs", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const content = fs.readFileSync(filePath, "utf-8");
  const title = extractTitle(content);
  const date = extractDate(content);
  const body = stripHeader(content);

  return (
    <main className="min-h-screen pt-28 sm:pt-36 pb-24 px-5 sm:px-8">
      <div className="max-w-3xl mx-auto w-full">
        {/* Back link */}
        <Link
          href="/blogs"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#00f0ff] transition-colors text-base font-mono mb-12 group"
        >
          <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
          back to blogs
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
            {date}
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mt-4 text-white leading-tight tracking-tight">
            {title}
          </h1>
        </div>

        {/* Content */}
        <article className="prose-custom text-base sm:text-lg leading-relaxed w-full max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight, rehypeRaw]}
          >
            {body}
          </ReactMarkdown>
        </article>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/[0.06]">
          <Link
            href="/blogs"
            className="text-base font-mono text-gray-500 hover:text-[#00f0ff] transition-colors"
          >
            ← back to all blogs
          </Link>
        </div>
      </div>
    </main>
  );
}
