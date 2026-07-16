"use client";

export interface SkeletonProps {
  width?: string;
  height?: string;
  borderRadius?: string;
  style?: React.CSSProperties;
}

export default function Skeleton({
  width = "100%",
  height = "1rem",
  borderRadius = "4px",
  style,
}: SkeletonProps) {
  return (
    <div
      style={{
        width,
        height,
        borderRadius,
        backgroundColor: "#e2d9c4",
        backgroundImage:
          "linear-gradient(90deg, #e2d9c4 25%, #ede0c4 50%, #e2d9c4 75%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 1.5s infinite",
        ...style,
      }}
    >
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>
    </div>
  );
}

// ─── Skeleton presets ─────────────────────────────────────────────────────────

export function BeritaCardSkeleton() {
  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        border: "1px solid #e2d9c4",
        backgroundColor: "#fff",
      }}
    >
      <Skeleton height="200px" borderRadius="0" />
      <div
        style={{
          padding: "1.25rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.75rem",
        }}
      >
        <Skeleton width="80px" height="24px" borderRadius="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" width="85%" />
        <Skeleton height="14px" />
        <Skeleton height="14px" width="70%" />
      </div>
    </div>
  );
}

export function PageHeaderSkeleton() {
  return <Skeleton height="280px" borderRadius="0" />;
}
