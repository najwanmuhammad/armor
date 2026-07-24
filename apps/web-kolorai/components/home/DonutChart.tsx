interface DonutChartProps {
  laki: number;
  perempuan: number;
  lakiColor?: string;
  perempuanColor?: string;
}

export default function DonutChart({
  laki,
  perempuan,
  lakiColor = "var(--color-blue)",
  perempuanColor = "var(--color-red)",
}: DonutChartProps) {
  const total = laki + perempuan;
  const size = 220;
  const stroke = 34;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;

  const lakiFrac = total > 0 ? laki / total : 0;
  const perempuanFrac = total > 0 ? perempuan / total : 0;

  const lakiLen = lakiFrac * c;
  const perempuanLen = perempuanFrac * c;

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={`Perbandingan penduduk: ${laki} laki-laki dan ${perempuan} perempuan`}
    >
      <g transform={`rotate(-90 ${size / 2} ${size / 2})`}>
        {/* Laki-laki */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={lakiColor}
          strokeWidth={stroke}
          strokeDasharray={`${lakiLen} ${c - lakiLen}`}
          strokeDashoffset={0}
        />
        {/* Perempuan */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={r}
          fill="none"
          stroke={perempuanColor}
          strokeWidth={stroke}
          strokeDasharray={`${perempuanLen} ${c - perempuanLen}`}
          strokeDashoffset={-lakiLen}
        />
      </g>

      {/* Total di tengah */}
      <text
        x="50%"
        y="46%"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "13px",
          fill: "var(--color-text-muted)",
        }}
      >
        Total
      </text>
      <text
        x="50%"
        y="56%"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 500,
          fontSize: "34px",
          fill: "var(--color-night)",
        }}
      >
        {total}
      </text>
      <text
        x="50%"
        y="66%"
        textAnchor="middle"
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "13px",
          fill: "var(--color-text-muted)",
        }}
      >
        Jiwa
      </text>
    </svg>
  );
}
