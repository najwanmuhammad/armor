export default function BerandaPage() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "60vh",
        flexDirection: "column",
        gap: "1rem",
        color: "var(--color-text-muted)",
      }}
    >
      <span style={{ fontSize: "3rem" }}>🏝️</span>
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "1.5rem",
          color: "var(--color-forest)",
        }}
      >
        Desa Kolorai
      </p>
      <p>Halaman beranda sedang dalam pengembangan.</p>
    </div>
  );
}
