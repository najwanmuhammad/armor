import React from "react";
import Link from "next/link";
import Image from "next/image";

interface BeritaCardProps {
  title: string;
  excerpt?: string;
  date?: string;
  imageUrl?: string;
  category?: string;
  slug: string;
  hrefPrefix?: string;
}

export default function BeritaCard({
  title,
  excerpt,
  date,
  imageUrl,
  category,
  slug,
  hrefPrefix = "/berita",
}: BeritaCardProps) {
  const postUrl = `${hrefPrefix}/${slug}`;

  return (
    <div className="flex flex-col overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm transition-all hover:shadow-md duration-300">
      {imageUrl && (
        <div className="relative aspect-video w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
          <Image
            src={imageUrl}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-2 mb-3">
          {category && (
            <span className="inline-flex items-center rounded-full bg-blue-50 dark:bg-blue-950/50 px-2.5 py-0.5 text-xs font-semibold text-blue-600 dark:text-blue-400">
              {category}
            </span>
          )}
          {date && <span className="text-xs text-zinc-500 dark:text-zinc-400">{date}</span>}
        </div>
        <h3 className="text-xl font-bold leading-snug line-clamp-2 mb-2 text-zinc-900 dark:text-zinc-100">
          <Link href={postUrl} className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
            {title}
          </Link>
        </h3>
        {excerpt && (
          <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-3 mb-4 leading-relaxed">
            {excerpt}
          </p>
        )}
        <div className="mt-auto pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
          <Link
            href={postUrl}
            className="inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 hover:underline"
          >
            Baca Selengkapnya
            <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

