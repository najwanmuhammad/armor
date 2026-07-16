import React from "react";
import Image from "next/image";

interface GalleryImage {
  url: string;
  alt?: string;
  caption?: string;
}

interface ImageGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export default function ImageGallery({
  images,
  className = "",
}: ImageGalleryProps) {
  const validImages = images?.filter((img) => img && img.url) || [];

  if (validImages.length === 0) {
    return (
      <div className="text-center text-zinc-500 dark:text-zinc-400 py-8">
        Tidak ada foto dalam galeri.
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${className}`}
    >
      {validImages.map((img, idx) => (
        <div
          key={idx}
          className="group relative overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 aspect-square shadow-sm"
        >
          <Image
            src={img.url}
            alt={img.alt || `Gambar galeri ${idx + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {img.caption && (
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 text-white">
              <p className="text-sm font-medium line-clamp-2">{img.caption}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
