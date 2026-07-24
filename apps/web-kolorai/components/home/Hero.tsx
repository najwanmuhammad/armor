import Image from "next/image";

interface HeroProps {
  nama: string;
  tagline?: string;
  imageUrl?: string;
  blurDataUrl?: string;
}

export default function Hero({
  nama,
  tagline,
  imageUrl,
  blurDataUrl,
}: HeroProps) {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "clamp(680px, 78vh, 760px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "var(--color-night)",
      }}
    >
      {imageUrl ? (
        <Image
          src={imageUrl}
          alt={`Pemandangan ${nama}`}
          fill
          priority
          sizes="100vw"
          placeholder={blurDataUrl ? "blur" : "empty"}
          blurDataURL={blurDataUrl}
          style={{ objectFit: "cover" }}
        />
      ) : null}

      {/* Overlay untuk keterbacaan teks */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(15,23,42,0.35) 0%, rgba(15,23,42,0.25) 45%, rgba(15,23,42,0.65) 100%)",
        }}
      />

      {/* Konten */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          padding: "2rem 1.5rem",
          color: "#fff",
          maxWidth: "60rem",
        }}
      >
        <span
          style={{
            display: "inline-block",
            padding: "0.6rem 1.4rem",
            borderRadius: "999px",
            backgroundColor: "rgba(255,255,255,0.12)",
            border: "1px solid rgba(255,255,255,0.25)",
            backdropFilter: "blur(6px)",
            fontSize: "0.95rem",
            letterSpacing: "0.02em",
            marginBottom: "1.5rem",
          }}
        >
          PORTAL RESMI DESA
        </span>

        <h1
          style={{
            fontWeight: 500,
            fontSize: "clamp(3.5rem, 11vw, 10rem)",
            lineHeight: 1.02,
            letterSpacing: "-0.04em",
            margin: 0,
          }}
        >
          {nama}
        </h1>

        {tagline ? (
          <p
            style={{
              marginTop: "1.25rem",
              fontSize: "clamp(1rem, 2vw, 1.6rem)",
              fontWeight: 500,
              lineHeight: 1.35,
              maxWidth: "48rem",
              marginInline: "auto",
              opacity: 0.95,
            }}
          >
            {tagline}
          </p>
        ) : null}
      </div>
    </section>
  );
}
