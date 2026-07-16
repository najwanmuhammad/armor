"use client";

import Image from "next/image";
import Link from "next/link";

export type BeritaKategori =
  | "berita"
  | "pengumuman"
  | "kegiatan"
  | "wisata"
  | "umkm";

const kategoriLabel: Record<BeritaKategori, string> = {
  berita: "Berita",
  pengumuman: "Pengumuman",
  kegiatan: "Kegiatan",
  wisata: "Wisata",
  umkm: "UMKM",
};

const kategoriColor: Record<BeritaKategori, string> = {
  berita: "#1B6B8A",
  pengumuman: "#C17F24",
  kegiatan: "#2D5016",
  wisata: "#0d9488",
  umkm: "#7c3aed",
};

export interface BeritaCardProps {
  /** ID unik artikel */
  id: string;
  judul: string;
  /** URL slug untuk routing: /berita/[slug] */
  slug: string;
  kategori: BeritaKategori;
  /** URL gambar thumbnail — dikonversi oleh app sebelum dikirim ke sini */
  thumbnailUrl: string;
  /** Blur data URL untuk placeholder — gunakan getBlurDataUrl() di app */
  blurDataUrl?: string;
  ringkasan?: string;
  tanggal: string;
  /** Warna aksen desa — opsional, default ke biru laut */
  accentColor?: string;
}

export default function BeritaCard({
  judul,
  slug,
  kategori,
  thumbnailUrl,
  blurDataUrl,
  ringkasan,
  tanggal,
  accentColor = "#1B6B8A",
}: BeritaCardProps) {
  const tanggalFormatted = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(tanggal));

  return (
    <article
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #e2d9c4",
        backgroundColor: "#fff",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        display: "flex",
        flexDirection: "column",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(-4px)";
        el.style.boxShadow = "0 8px 24px rgba(0,0,0,0.1)";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.transform = "translateY(0)";
        el.style.boxShadow = "none";
      }}
    >
      {/* Thumbnail */}
      <Link
        href={`/berita/${slug}`}
        style={{
          display: "block",
          position: "relative",
          height: "200px",
          flexShrink: 0,
        }}
      >
        <Image
          src={thumbnailUrl}
          alt={judul}
          fill
          style={{ objectFit: "cover" }}
          placeholder={blurDataUrl ? "blur" : "empty"}
          blurDataURL={blurDataUrl}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </Link>

      {/* Content */}
      <div
        style={{
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* Kategori badge */}
        <span
          style={{
            display: "inline-block",
            padding: "0.2rem 0.625rem",
            borderRadius: "20px",
            fontSize: "0.75rem",
            fontWeight: 600,
            color: "#fff",
            backgroundColor: kategoriColor[kategori],
            marginBottom: "0.75rem",
            alignSelf: "flex-start",
          }}
        >
          {kategoriLabel[kategori]}
        </span>

        {/* Judul */}
        <Link
          href={`/berita/${slug}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <h3
            style={{
              fontSize: "1.0625rem",
              lineHeight: 1.35,
              marginBottom: "0.5rem",
              color: "#1a1a18",
            }}
          >
            {judul}
          </h3>
        </Link>

        {/* Ringkasan */}
        {ringkasan && (
          <p
            style={{
              fontSize: "0.875rem",
              color: "#7a7a75",
              lineHeight: 1.6,
              marginBottom: "1rem",
              flex: 1,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {ringkasan}
          </p>
        )}

        {/* Footer card */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "0.75rem",
            borderTop: "1px solid #e2d9c4",
            marginTop: "auto",
          }}
        >
          <time style={{ fontSize: "0.8125rem", color: "#7a7a75" }}>
            {tanggalFormatted}
          </time>
          <Link
            href={`/berita/${slug}`}
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: accentColor,
              textDecoration: "none",
            }}
          >
            Baca →
          </Link>
        </div>
      </div>
    </article>
  );
}
