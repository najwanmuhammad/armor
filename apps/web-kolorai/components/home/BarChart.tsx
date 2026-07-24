import type { PekerjaanItem } from "@arungimorotai/sanity";

interface BarChartProps {
  data: PekerjaanItem[];
  barColor?: string;
}

/** Bulatkan ke atas ke kelipatan "bagus" untuk skala sumbu-x. */
function niceMax(value: number) {
  if (value <= 0) return 10;
  const step = value <= 50 ? 10 : value <= 100 ? 25 : 50;
  return Math.ceil(value / step) * step;
}

export default function BarChart({
  data,
  barColor = "var(--color-night)",
}: BarChartProps) {
  const max = niceMax(Math.max(...data.map((d) => d.jumlah), 0));
  const tickCount = 5;
  const ticks = Array.from({ length: tickCount + 1 }, (_, i) =>
    Math.round((max / tickCount) * i),
  );

  return (
    <div style={{ width: "100%" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {data.map((d) => {
          const pct = max > 0 ? (d.jumlah / max) * 100 : 0;
          return (
            <div
              key={d.label}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(120px, 42%) 1fr",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.8125rem",
                  color: "var(--color-text-secondary)",
                  textAlign: "right",
                  lineHeight: 1.2,
                }}
              >
                {d.label}
              </span>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <div
                  style={{
                    height: 14,
                    width: `${pct}%`,
                    minWidth: d.jumlah > 0 ? 3 : 0,
                    backgroundColor: barColor,
                    borderRadius: 3,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 500,
                    color: "var(--color-text)",
                  }}
                >
                  {d.jumlah}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sumbu-x */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "minmax(120px, 42%) 1fr",
          gap: "0.75rem",
          marginTop: "0.75rem",
        }}
      >
        <span />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: "1px solid var(--color-border)",
            paddingTop: "0.35rem",
          }}
        >
          {ticks.map((t) => (
            <span
              key={t}
              style={{ fontSize: "0.7rem", color: "var(--color-text-muted)" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          fontSize: "0.75rem",
          color: "var(--color-text-muted)",
          marginTop: "0.5rem",
        }}
      >
        Jumlah Penduduk (jiwa)
      </p>
    </div>
  );
}
