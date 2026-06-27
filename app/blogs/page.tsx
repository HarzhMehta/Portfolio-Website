import Link from "next/link";
import fs from "fs";
import path from "path";

type BlogMeta = {
  slug: string;
  title: string;
  date: string;
  image: string | null;
};

function parseBlogFile(slug: string, content: string): BlogMeta {
  const lines = content.split("\n").filter((l) => l.trim());
  const title = lines[0]?.replace(/^#\s*/, "").trim() || slug;

  const dateLine = content
    .split("\n")
    .map((l) => l.trim())
    .find((l) => /^(January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2},\s+\d{4}$/i.test(l));

  const date = dateLine || "Unknown date";

  const imageExtensions = ["png", "jpg", "jpeg", "webp", "gif", "svg"];
  const imageName = imageExtensions
    .map((ext) => `${slug}-title.${ext}`)
    .find((name) => fs.existsSync(path.join(process.cwd(), "public", "assets", name)));

  return { slug, title, date, image: imageName ? `/assets/${imageName}` : null };
}

export default function BlogsPage() {
  const blogsDir = path.join(process.cwd(), "public", "blogs");

  let blogs: BlogMeta[] = [];
  try {
    const files = fs.readdirSync(blogsDir).filter((f) => f.endsWith(".md"));
    blogs = files
      .map((f) => {
        const slug = f.replace(/\.md$/, "");
        const content = fs.readFileSync(path.join(blogsDir, f), "utf-8");
        return parseBlogFile(slug, content);
      })
      .sort((a, b) => {
        if (a.date === "Unknown date") return 1;
        if (b.date === "Unknown date") return -1;
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      });
  } catch {
    // blogs directory doesn't exist or can't be read
  }

  return (
    <main className="min-h-screen pt-28 sm:pt-36 pb-24 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="mb-16 text-center">
          <div className="section-tag">
            <span className="dot" style={{ background: "#fbff38" }} />
            Writing
          </div>
          <h1 className="section-heading">
            Thoughts & <span className="gradient-text-cyan">notes</span>
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Random things I&apos;ve written about
          </p>
        </div>

        {blogs.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 font-mono text-sm">No blog posts yet.</p>
          </div>
        ) : (
          <div className="grid gap-6 sm:gap-8">
            {blogs.map(({ slug, title, date, image }) => (
              <Link
                key={slug}
                href={`/blogs/${slug}`}
                className="gradient-border-card p-0 group block"
              >
                <div className="flex flex-col sm:flex-row">
                  {image && (
                    <div className="sm:w-52 shrink-0 h-40 sm:h-auto overflow-hidden rounded-t-[15px] sm:rounded-l-[15px] sm:rounded-tr-none">
                      <img
                        src={image}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}
                  <div className="flex-1 p-7 sm:p-8 flex flex-col justify-center">
                    <span className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                      {date}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#00f0ff] transition-colors leading-tight">
                      {title}
                    </h2>
                    <div className="flex items-center gap-2 mt-5">
                      <span className="text-sm font-mono text-gray-500 group-hover:text-gray-300 transition-colors">
                        Read more
                      </span>
                      <span className="text-[#00f0ff] text-xl transition-transform duration-200 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
