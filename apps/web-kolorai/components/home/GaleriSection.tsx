"use client";

import { useEffect, useRef, useState } from "react";

export interface GaleriImageView {
  url: string;
  caption?: string;
}

interface TileDef {
  w: number;
  h: number;
  ty: number; // stagger vertikal (px relatif ke tengah)
  idx: number; // indeks ke array images
}

// Layout kolase kecil–kecil–BESAR–kecil–kecil, berjenjang.
const LAYOUT: TileDef[] = [
  { w: 228, h: 228, ty: -100, idx: 0 },
  { w: 228, h: 228, ty: 130, idx: 2 },
  { w: 580, h: 430, ty: 0, idx: 0 },
  { w: 228, h: 228, ty: -100, idx: 2 },
  { w: 228, h: 228, ty: 130, idx: 1 },
  { w: 580, h: 430, ty: 0, idx: 0 },
  { w: 228, h: 228, ty: -100, idx: 2 },
];

const BG_LIGHT = "#ffffff";
const BG_DARK = "#0f172a";
const FG_LIGHT = "#0f172a";
const FG_DARK = "#ffffff";
const CAP_LIGHT = "#64748b";
const CAP_DARK = "#94a3b8";

function hexToRgb(hex: string): [number, number, number] {
  const n = parseInt(hex.slice(1), 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
function lerpColor(a: string, b: string, t: number) {
  const A = hexToRgb(a);
  const B = hexToRgb(b);
  const c = (i: number) => Math.round(A[i] + (B[i] - A[i]) * t);
  return `rgb(${c(0)}, ${c(1)}, ${c(2)})`;
}

export default function GaleriSection({
  images,
}: {
  images: GaleriImageView[];
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [spacerH, setSpacerH] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const track = trackRef.current;
    if (!section || !sticky || !track) return;

    let raf = 0;
    let extra = 0;

    const applyColors = (t: number) => {
      sticky.style.setProperty("--gal-bg", lerpColor(BG_LIGHT, BG_DARK, t));
      sticky.style.setProperty("--gal-fg", lerpColor(FG_LIGHT, FG_DARK, t));
      sticky.style.setProperty("--gal-cap", lerpColor(CAP_LIGHT, CAP_DARK, t));
    };

    const measure = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) {
        extra = 0;
        setSpacerH(null);
        track.style.transform = "";
        applyColors(0);
        return;
      }
      extra = Math.max(0, track.scrollWidth - window.innerWidth);
      setSpacerH(window.innerHeight + extra);
    };

    const update = () => {
      raf = 0;
      if (extra <= 0) {
        applyColors(0);
        return;
      }
      const top = section.getBoundingClientRect().top;
      const scrolled = Math.min(extra, Math.max(0, -top));
      const t = scrolled / extra;
      track.style.transform = `translate3d(${-scrolled}px, 0, 0)`;
      applyColors(t);
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const onResize = () => {
      measure();
      update();
    };

    measure();
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [images.length]);

  if (!images || images.length === 0) return null;

  const tiles = LAYOUT.map((l) => ({
    ...l,
    url: images[l.idx % images.length].url,
    caption: images[l.idx % images.length].caption,
  }));

  const Title = (
    <h2
      style={{
        fontSize: "clamp(1.75rem,4vw,2.75rem)",
        color: "var(--gal-fg, var(--color-night))",
        transition: "color 0.1s linear",
        margin: 0,
      }}
    >
      Galeri Desa Koloray
    </h2>
  );

  const tileEls = tiles.map((tile, i) => (
    <figure
      key={i}
      style={{
        margin: 0,
        flexShrink: 0,
        width: tile.w,
        transform: isMobile ? undefined : `translateY(${tile.ty}px)`,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: tile.h,
          borderRadius: 16,
          overflow: "hidden",
          backgroundColor: "rgba(148,163,184,0.15)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.18)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={tile.url}
          alt={tile.caption ?? `Foto galeri ${i + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
      </div>
    </figure>
  ));

  // ── Mobile: strip horizontal biasa ──────────────────────────────
  if (isMobile) {
    return (
      <section ref={sectionRef} style={{ padding: "3rem 0" }}>
        <div
          ref={stickyRef}
          className="container"
          style={{ marginBottom: "1.5rem" }}
        >
          {Title}
        </div>
        <div
          ref={trackRef}
          className="no-scrollbar"
          style={{
            display: "flex",
            gap: "1rem",
            overflowX: "auto",
            padding: "0 1.5rem 1rem",
            scrollSnapType: "x mandatory",
          }}
        >
          {tiles.map((tile, i) => (
            <div key={i} style={{ scrollSnapAlign: "start" }}>
              <div
                style={{
                  position: "relative",
                  width: 260,
                  height: 280,
                  borderRadius: 16,
                  overflow: "hidden",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={tile.url}
                  alt={tile.caption ?? `Foto galeri ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // ── Desktop: pinned, judul statis, gambar + background bergerak ──
  return (
    <section
      ref={sectionRef}
      style={{ position: "relative", height: spacerH ?? "100vh" }}
    >
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          backgroundColor: "var(--gal-bg, #ffffff)",
          transition: "background-color 0.1s linear",
        }}
      >
        {/* Judul statis */}
        <div
          className="container"
          style={{
            position: "absolute",
            top: "5rem",
            left: 0,
            right: 0,
            zIndex: 2,
          }}
        >
          {Title}
        </div>

        {/* Track gambar (yang bergerak) */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            paddingTop: "5rem",
          }}
        >
          <div
            ref={trackRef}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "2rem",
              paddingInline: "clamp(1.5rem, 6vw, 6rem)",
              willChange: "transform",
            }}
          >
            {tileEls}
          </div>
        </div>
      </div>
    </section>
  );
}
