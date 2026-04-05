import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/blog-data";
import { breadcrumbSchema, articleSchema } from "@/lib/schema";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `https://futuratt.com/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default function BlogArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: "https://futuratt.com" },
              { name: "Blog", url: "https://futuratt.com/blog" },
              {
                name: post.title,
                url: `https://futuratt.com/blog/${post.slug}`,
              },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            articleSchema({
              title: post.title,
              description: post.description,
              url: `https://futuratt.com/blog/${post.slug}`,
              datePublished: post.date,
            })
          ),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 pt-16">
        {/* Back link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-white/40 hover:text-white/70 transition-colors mb-8"
        >
          &larr; Blog
        </Link>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#7C3AED]/10 text-[#a855f7] border border-[#7C3AED]/15"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight tracking-tight">
          {post.title}
        </h1>

        {/* Meta */}
        <div className="flex items-center gap-3 text-sm text-white/30 mb-10">
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readingTime}</span>
        </div>

        {/* Content */}
        <div
          className="prose prose-invert prose-sm md:prose-base max-w-none
            prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
            prose-p:text-white/60 prose-p:leading-relaxed
            prose-li:text-white/60
            prose-strong:text-white/80
            prose-a:text-[#a855f7] prose-a:no-underline hover:prose-a:underline
            prose-blockquote:border-[#7C3AED] prose-blockquote:text-white/50"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA */}
        <div className="mt-16 rounded-2xl border border-white/[0.06] p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            ¿Querés digitalizar tu empresa?
          </h3>
          <p className="text-sm text-white/45 mb-6">
            Agendá un diagnóstico gratuito de 30 minutos con el equipo de
            FUTURA.
          </p>
          <Link
            href="/contacto"
            className="inline-block px-6 py-3 rounded-full bg-[#7C3AED] text-white font-semibold text-sm"
          >
            Agendar diagnóstico gratuito
          </Link>
        </div>
      </div>
    </article>
  );
}
