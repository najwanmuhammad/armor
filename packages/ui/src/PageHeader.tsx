import Image from "next/image";

export interface PageHeaderProps {
  title: string;
  subtitle?: string;
  /** URL gambar — dikonversi oleh app sebelum dikirim */
  imageUrl?: string;
  blurDataUrl?: string;
  /** Warna overlay, default forest green dengan opacity */
  overlayColor?: string;
}

export default function PageHeader({
  title,
  subtitle,
  imageUrl,
  blurDataUrl,
  overlayColor = "rgba(45,80,22,0.72)",
}: PageHeaderProps) {
  return (
    <section
      style={{
        position: "relative",
        height: "280px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#2D5016",
      }}
    >
      {/* Background image */}
      {imageUrl && (
        <Image
          src={imageUrl}
          alt=""
          fill
          style={{ objectFit: "cover" }}
          placeholder={blurDataUrl ? "blur" : "empty"}
          blurDataURL={blurDataUrl}
          priority
        />
      )}

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: overlayColor,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1200px",
          marginInline: "auto",
          paddingInline: "1.5rem",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
            color: "#fff",
            marginBottom: subtitle ? "0.5rem" : 0,
            lineHeight: 1.25,
          }}
        >
          {title}
        </h1>
        {subtitle && (
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "1rem" }}>
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
