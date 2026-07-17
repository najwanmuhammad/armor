import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Halaman Tidak Ditemukan" };

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "6rem",
          color: "var(--color-border)",
          lineHeight: 1,
          marginBottom: "1rem",
        }}
      >
        404
      </p>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.75rem",
          color: "var(--color-forest)",
          marginBottom: "0.75rem",
        }}
      >
        Halaman tidak ditemukan
      </h1>
      <p style={{ color: "var(--color-text-muted)", marginBottom: "2rem" }}>
        Halaman yang kamu cari tidak ada atau telah dipindahkan.
      </p>
      <Link
        href="/"
        style={{
          padding: "0.75rem 1.75rem",
          borderRadius: "8px",
          backgroundColor: "var(--color-laut)",
          color: "#fff",
          textDecoration: "none",
          fontWeight: 600,
        }}
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
}
