import Link from "next/link";
import type { BlogPost } from "@/lib/blog-types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-2xl border border-white/[0.06] p-6 hover:border-white/[0.12] transition-colors"
    >
      <div className="flex flex-wrap gap-2 mb-3">
        {post.tags.slice(0, 3).map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[#7C3AED]/10 text-[#a855f7] border border-[#7C3AED]/15"
          >
            {tag}
          </span>
        ))}
      </div>
      <h3 className="text-lg font-semibold text-white group-hover:text-white/90 mb-2 leading-snug">
        {post.title}
      </h3>
      <p className="text-sm text-white/40 mb-4 line-clamp-2 leading-relaxed">
        {post.description}
      </p>
      <div className="flex items-center gap-3 text-xs text-white/25">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
        {post.isStub && (
          <>
            <span>·</span>
            <span className="text-amber-400/60">En desarrollo</span>
          </>
        )}
      </div>
    </Link>
  );
}
