import type { Demografi } from "@arungimorotai/sanity";
import DonutChart from "./DonutChart";
import BarChart from "./BarChart";

function nf(n: number, decimals = 0) {
  return new Intl.NumberFormat("id-ID", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(n);
}

function parseLuas(s?: string): number | null {
  if (!s) return null;
  const cleaned = s.replace(/\./g, "").replace(",", ".");
  const m = cleaned.match(/[\d.]+/);
  return m ? parseFloat(m[0]) : null;
}

function IconCircle({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        width: 46,
        height: 46,
        borderRadius: "50%",
        backgroundColor: "rgba(15,23,42,0.06)",
        color: "var(--color-night)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}

const svg = {
  w: 24,
  h: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

function StatCard({
  icon,
  title,
  value,
  unit,
  note = "Data per 2025",
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  unit: string;
  note?: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-white)",
        border: "1px solid var(--color-border)",
        borderRadius: 14,
        padding: "1.5rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <IconCircle>{icon}</IconCircle>
        <span
          style={{
            fontSize: "0.95rem",
            fontWeight: 500,
            color: "var(--color-night)",
            lineHeight: 1.2,
          }}
        >
          {title}
        </span>
      </div>
      <div style={{ marginTop: "0.75rem" }}>
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "2.75rem",
            lineHeight: 1,
            color: "var(--color-night)",
          }}
        >
          {value}
        </span>
        <span
          style={{
            fontSize: "1.05rem",
            color: "var(--color-text-secondary)",
            marginLeft: "0.35rem",
          }}
        >
          {unit}
        </span>
      </div>
      <span style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
        {note}
      </span>
    </div>
  );
}

function Panel({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        backgroundColor: "var(--color-white)",
        border: "1px solid var(--color-border)",
        borderRadius: 16,
        padding: "1.75rem",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "1.5rem",
        }}
      >
        <IconCircle>{icon}</IconCircle>
        <h3 style={{ fontSize: "1.15rem", color: "var(--color-night)" }}>
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
}

export default function DemografiSection({
  demografi,
}: {
  demografi?: Demografi;
}) {
  const d = demografi ?? {};
  const penduduk = d.jumlahPenduduk ?? 0;
  const laki = d.jumlahLakiLaki ?? 0;
  const perempuan = d.jumlahPerempuan ?? 0;
  const totalJK = laki + perempuan;
  const luas = parseLuas(d.luasWilayah);
  const kepadatan = luas && luas > 0 ? penduduk / luas : null;
  const pekerjaan = d.pekerjaan ?? [];

  const lakiPct = totalJK > 0 ? (laki / totalJK) * 100 : 0;
  const perempuanPct = totalJK > 0 ? (perempuan / totalJK) * 100 : 0;

  return (
    <section style={{ padding: "3.5rem 0" }}>
      <div className="container">
        {/* Header navy dengan peta satelit */}
        <div
          style={{
            position: "relative",
            backgroundColor: "var(--color-night)",
            borderRadius: 20,
            padding: "2.75rem",
            color: "#fff",
            overflow: "hidden",
            marginBottom: "-2.5rem",
            minHeight: 220,
          }}
        >
          {/* Peta */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/images/demografi.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {/* Gradient navy agar teks terbaca di kiri */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(90deg, #0f172a 0%, rgba(15,23,42,0.85) 35%, rgba(15,23,42,0.35) 70%, rgba(15,23,42,0.15) 100%)",
            }}
          />
          <div style={{ position: "relative" }}>
            <h2
              style={{
                fontSize: "clamp(1.75rem,4vw,2.5rem)",
                marginBottom: "0.5rem",
              }}
            >
              Demografi Desa
            </h2>
            <p style={{ opacity: 0.85, maxWidth: "30rem", lineHeight: 1.5 }}>
              Data kependudukan Desa Koloray sebagai gambaran umum kondisi dan
              potensi sumber daya manusia desa.
            </p>
          </div>
        </div>

        {/* Stat cards */}
        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            marginBottom: "1.25rem",
            position: "relative",
          }}
        >
          <StatCard
            title="Jumlah Penduduk"
            value={nf(penduduk)}
            unit="Jiwa"
            icon={
              <svg {...svg}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            }
          />
          <StatCard
            title="Jumlah Kepala Keluarga"
            value={nf(d.jumlahKK ?? 0)}
            unit="KK"
            icon={
              <svg {...svg}>
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <path d="M9 22V12h6v10" />
              </svg>
            }
          />
          <StatCard
            title="Luas Wilayah"
            value={luas != null ? nf(luas, 2) : "—"}
            unit="km²"
            icon={
              <svg {...svg}>
                <path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z" />
                <path d="M8 2v16M16 6v16" />
              </svg>
            }
          />
          <StatCard
            title="Kepadatan Penduduk"
            value={kepadatan != null ? nf(kepadatan, 2) : "—"}
            unit="Jiwa / km²"
            icon={
              <svg {...svg}>
                <polygon points="12 2 2 7 12 12 22 7 12 2" />
                <polyline points="2 17 12 22 22 17" />
                <polyline points="2 12 12 17 22 12" />
              </svg>
            }
          />
        </div>

        {/* Panels: donut + bar */}
        <div
          style={{
            display: "grid",
            gap: "1.25rem",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {/* Jenis kelamin */}
          <Panel
            title="Penduduk Berdasarkan Jenis Kelamin"
            icon={
              <svg {...svg}>
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
              </svg>
            }
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <DonutChart laki={laki} perempuan={perempuan} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                }}
              >
                <LegendItem
                  color="var(--color-blue)"
                  label="Laki- Laki"
                  value={`${nf(laki)} Jiwa`}
                  pct={`(${nf(lakiPct, 2)}%)`}
                />
                <LegendItem
                  color="var(--color-red)"
                  label="Perempuan"
                  value={`${nf(perempuan)} Jiwa`}
                  pct={`(${nf(perempuanPct, 2)}%)`}
                />
              </div>
            </div>
          </Panel>

          {/* Pekerjaan */}
          <Panel
            title="Penduduk Berdasarkan Pekerjaan"
            icon={
              <svg {...svg}>
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
              </svg>
            }
          >
            {pekerjaan.length > 0 ? (
              <BarChart data={pekerjaan} />
            ) : (
              <p
                style={{ color: "var(--color-text-muted)", padding: "1rem 0" }}
              >
                Data pekerjaan belum tersedia.
              </p>
            )}
          </Panel>
        </div>

        {/* CTA */}
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "1.5rem",
          }}
        >
          <a
            href="/profil"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.7rem 1.4rem",
              borderRadius: 999,
              backgroundColor: "var(--color-night)",
              color: "#fff",
              textDecoration: "none",
              fontSize: "0.95rem",
              fontWeight: 500,
            }}
          >
            Baca Selengkapnya
            <span aria-hidden>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function LegendItem({
  color,
  label,
  value,
  pct,
}: {
  color: string;
  label: string;
  value: string;
  pct: string;
}) {
  return (
    <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
      <span
        style={{
          width: 16,
          height: 16,
          borderRadius: "50%",
          backgroundColor: color,
          marginTop: 4,
          flexShrink: 0,
        }}
      />
      <div>
        <div
          style={{ fontSize: "0.95rem", color: "var(--color-text-secondary)" }}
        >
          {label}
        </div>
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontWeight: 500,
            fontSize: "1.5rem",
            color: "var(--color-night)",
            lineHeight: 1.1,
          }}
        >
          {value}
        </div>
        <div style={{ fontSize: "0.8rem", color: "var(--color-text-muted)" }}>
          {pct}
        </div>
      </div>
    </div>
  );
}
