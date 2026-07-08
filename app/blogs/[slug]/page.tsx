import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import rehypeRaw from "rehype-raw";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  BLOG_CATEGORIES,
  getAllBlogs,
  getBlogBySlug,
  type BlogCategory,
  type BlogMeta,
} from "../blogData";

type Props = {
  params: Promise<{ slug: string }>;
};

function isCategory(slug: string): slug is BlogCategory {
  return BLOG_CATEGORIES.some((category) => category.id === slug);
}

function BlogListCard({ blog }: { blog: BlogMeta }) {
  return (
    <Link href={`/blogs/${blog.slug}`} className="category-post-card">
      {blog.image && (
        <div className="category-post-image">
          <img src={blog.image} alt="" />
        </div>
      )}
      <div className="category-post-body">
        <div className="blog-index-meta">
          <span>{blog.date}</span>
          <span>{blog.readingTime}</span>
        </div>
        <h2>{blog.title}</h2>
        <p>{blog.subtitle}</p>
      </div>
    </Link>
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  if (isCategory(slug)) {
    const category = BLOG_CATEGORIES.find((item) => item.id === slug);
    return {
      title: `${category?.label || "Blogs"} - Harsh Mehta`,
      description: category?.description,
    };
  }

  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} - Harsh Mehta`,
    description: post.subtitle,
    openGraph: {
      title: `${post.title} - Harsh Mehta`,
      description: post.subtitle,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;

  if (isCategory(slug)) {
    const category = BLOG_CATEGORIES.find((item) => item.id === slug);
    const blogs = getAllBlogs().filter((blog) => blog.category === slug);

    if (!category) notFound();

    return (
      <div className="category-page-shell blog-redesign">
        <Link href="/blogs" className="blog-back-link">
          back to blog index
        </Link>
        <header className="category-page-header">
          <p className="blogs-kicker">{category.eyebrow}</p>
          <h1>{category.label}</h1>
          <p>{category.description}</p>
        </header>

        {blogs.length ? (
          <div className="category-post-list">
            {blogs.map((blog) => (
              <BlogListCard key={blog.slug} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="blog-empty-card">
            <span>No posts yet</span>
            <p>Markdown posts tagged with category: {category.id} will appear here.</p>
          </div>
        )}
      </div>
    );
  }

  const post = getBlogBySlug(slug);
  if (!post) notFound();

  const category = BLOG_CATEGORIES.find((item) => item.id === post.category);

  return (
    <article className="blog-article-shell blog-redesign">
      <Link href={`/blogs/${post.category}`} className="blog-back-link">
        back to {category?.label.toLowerCase() || "blogs"}
      </Link>

      <header className="blog-article-header">
        <p className="blogs-kicker">{category?.label || "Writing"}</p>
        <h1>{post.title}</h1>
        <p>{post.subtitle}</p>
        <div className="blog-article-meta">
          <span>{post.date}</span>
          <span>{post.readingTime}</span>
        </div>
      </header>

      {post.image && (
        <div className="blog-detail-cover">
          <img src={post.image} alt="" />
        </div>
      )}

      <div className="prose-custom blog-prose">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeHighlight, rehypeRaw]}
          components={{
            img: ({ src = "", alt = "" }) => (
              <img src={String(src)} alt={String(alt)} loading="lazy" />
            ),
          }}
        >
          {post.body}
        </ReactMarkdown>
      </div>
    </article>
  );
}
