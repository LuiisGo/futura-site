import type { Metadata } from "next";
import { blogPosts } from "@/lib/blog-data";
import BlogCard from "@/components/blog/BlogCard";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog — Digitalización y Automatización para PYMEs",
  description:
    "Artículos, guías y casos de éxito sobre digitalización, automatización, n8n, WhatsApp bots e inteligencia artificial aplicada para PYMEs en Guatemala y Centroamérica.",
  alternates: { canonical: "https://futuratt.com/blog" },
};

export default function BlogPage() {
  return (
    <div className="pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: "Inicio", url: "https://futuratt.com" },
              { name: "Blog", url: "https://futuratt.com/blog" },
            ])
          ),
        }}
      />
      <section className="max-w-4xl mx-auto px-4 pt-16 pb-8">
        <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
          Blog FUTURA
        </h1>
        <p className="text-base md:text-lg text-white/45 max-w-2xl leading-relaxed">
          Guías prácticas, casos de éxito y recursos sobre digitalización,
          automatización e inteligencia artificial aplicada para PYMEs en
          Guatemala y Centroamérica.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-4">
        <div className="grid gap-4">
          {blogPosts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
}
