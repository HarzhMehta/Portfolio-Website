import Link from "next/link";
import { BLOG_CATEGORIES, getAllBlogs, type BlogCategory, type BlogMeta } from "./blogData";

export default function BlogsPage() {
  const blogs = getAllBlogs();
  const counts = blogs.reduce<Record<BlogCategory, number>>(
    (acc, blog) => {
      acc[blog.category] += 1;
      return acc;
    },
    { curiosity: 0, gsoc: 0, quantifai: 0 },
  );

  return (
    <div className="blogs-home-shell blog-redesign">
      <header className="blogs-home-header">
        <p className="blogs-kicker">Writing</p>
        <h1>Blog index</h1>
        <p>Choose a section (^_^) ... Each blog after jul 2026 also has a cool ASCII art in the end </p>
        <br></br>
        <p>
          My new blogs can also be found on my{" "}
          <a href="https://x.com/harsh30121" target="_blank" rel="noopener noreferrer " className="text-blue-400">
            X
          </a>{" "}
          profile (if i still have the premium subcription of X that is ...)
        </p>
      </header>

      <div className="blog-type-grid">
        {BLOG_CATEGORIES.map((category, index) => (
          <Link key={category.id} href={`/blogs/${category.id}`} className="blog-type-card">
            <div className="blog-type-number">{String(index + 1).padStart(2, "0")}</div>
            <div>
              <p>{category.eyebrow}</p>
              <h2>{category.label}</h2>
              <small>{category.description}</small>
            </div>
            <span>{counts[category.id]} posts</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
