import Image from "next/image";
import Link from "next/link";
import { formatTanggal } from "@arungimorotai/utils";

export interface BeritaCardView {
  _id: string;
  judul: string;
  slug: string;
  kategori: string;
  tanggal: string;
  ringkasan?: string;
  thumbnailUrl?: string;
  blurDataUrl?: string;
}

const kategoriLabel: Record<string, string> = {
  berita: "Berita Utama",
  pengumuman: "Pengumuman",
  kegiatan: "Artikel",
  wisata: "Wisata",
  umkm: "UMKM",
};

function Placeholder() {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background:
          "linear-gradient(135deg, #1e2a44 0%, #0f172a 55%, #35507a 100%)",
      }}
    />
  );
}

const CARD_W = 480;
const CARD_H = 300;

const badgeStyle: React.CSSProperties = {
  position: "absolute",
  top: 16,
  left: 16,
  padding: "0.25rem 0.7rem",
  borderRadius: 7,
  backgroundColor: "var(--color-night)",
  color: "#fff",
  fontSize: "0.8rem",
  fontWeight: 500,
  zIndex: 2,
};

const ctaStyle = (bg: string): React.CSSProperties => ({
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  padding: "0.35rem 0.9rem",
  borderRadius: 6,
  backgroundColor: bg,
  color: "#fff",
  fontSize: "0.75rem",
  fontWeight: 500,
  alignSelf: "flex-start",
});

/** Varian "Berita": foto atas, konten putih di bawah. */
function BeritaCard({ item }: { item: BeritaCardView }) {
  return (
    <Link
      href={`/berita/${item.slug}`}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        borderRadius: 15,
        overflow: "hidden",
        backgroundColor: "var(--color-card)",
        boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      <div style={{ position: "relative", height: 150, flexShrink: 0 }}>
        {item.thumbnailUrl ? (
          <Image
            src={item.thumbnailUrl}
            alt={item.judul}
            fill
            sizes="380px"
            placeholder={item.blurDataUrl ? "blur" : "empty"}
            blurDataURL={item.blurDataUrl}
            style={{ objectFit: "cover" }}
          />
        ) : (
          <Placeholder />
        )}
        <span style={badgeStyle}>
          {kategoriLabel[item.kategori] ?? "Berita"}
        </span>
      </div>

      <div
        style={{
          padding: "1rem 1.25rem 1.25rem",
          display: "flex",
          flexDirection: "column",
          flex: 1,
          minHeight: 0,
        }}
      >
        <time style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
          {formatTanggal(item.tanggal)}
        </time>
        <h3
          style={{
            fontSize: "1.15rem",
            lineHeight: 1.25,
            color: "var(--color-night)",
            margin: "0.4rem 0 0",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.judul}
        </h3>
        <div style={{ marginTop: "auto", paddingTop: "0.85rem" }}>
          <span style={ctaStyle("var(--color-red)")}>
            Baca Selengkapnya <span aria-hidden>→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}

/** Varian "Artikel": foto penuh dengan judul overlay. Ukuran sama dgn Berita. */
function ArtikelCard({ item }: { item: BeritaCardView }) {
  return (
    <Link
      href={`/berita/${item.slug}`}
      style={{
        display: "block",
        position: "relative",
        width: CARD_W,
        height: CARD_H,
        flexShrink: 0,
        borderRadius: 15,
        overflow: "hidden",
        boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
        textDecoration: "none",
        color: "#fff",
      }}
    >
      {item.thumbnailUrl ? (
        <Image
          src={item.thumbnailUrl}
          alt={item.judul}
          fill
          sizes="340px"
          placeholder={item.blurDataUrl ? "blur" : "empty"}
          blurDataURL={item.blurDataUrl}
          style={{ objectFit: "cover" }}
        />
      ) : (
        <Placeholder />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.1) 55%, transparent 100%)",
        }}
      />
      <span style={badgeStyle}>
        {kategoriLabel[item.kategori] ?? "Artikel"}
      </span>
      <div
        style={{
          position: "absolute",
          left: 20,
          right: 20,
          bottom: 18,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <h3
          style={{
            fontSize: "1.5rem",
            lineHeight: 1.15,
            marginBottom: "0.75rem",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {item.judul}
        </h3>
        <span style={ctaStyle("var(--color-blue)")}>
          Baca Selengkapnya <span aria-hidden>→</span>
        </span>
      </div>
    </Link>
  );
}

export default function BeritaSection({ items }: { items: BeritaCardView[] }) {
  if (!items || items.length === 0) return null;

  return (
    <section style={{ padding: "3.5rem 0" }}>
      <div className="container">
        <h2
          style={{
            fontSize: "clamp(1.75rem,4vw,2.75rem)",
            textAlign: "left",
            color: "var(--color-night)",
            marginBottom: "2rem",
          }}
        >
          Berita dan Artikel
        </h2>
      </div>
      <div
        className="no-scrollbar"
        style={{
          display: "flex",
          gap: "1.5rem",
          overflowX: "auto",
          padding:
            "0.5rem max(1.5rem, calc((100% - var(--container-max)) / 2 + 1.5rem)) 1rem",
          scrollSnapType: "x mandatory",
        }}
      >
        {items.map((item, i) =>
          i % 2 === 1 ? (
            <div key={item._id} style={{ scrollSnapAlign: "start" }}>
              <ArtikelCard item={item} />
            </div>
          ) : (
            <div key={item._id} style={{ scrollSnapAlign: "start" }}>
              <BeritaCard item={item} />
            </div>
          ),
        )}
      </div>
    </section>
  );
}
