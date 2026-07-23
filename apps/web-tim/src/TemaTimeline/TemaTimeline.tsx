"use client";

import React from "react";
import Image from "next/image";

interface TemaTimelineProps {
  petaVectorUrl?: string;
  pasirTimbulUrl?: string;
}

export default function TemaTimeline({ petaVectorUrl = "/images/peta_vector.png", pasirTimbulUrl = "/images/pasir_timbul.jpg" }: TemaTimelineProps) {
  return (
    <section id="tema" className="tematimeline-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap');

        .tematimeline-section {
          position: relative;
          width: 100%;
          padding: 7rem 2rem 10.5rem 2rem;
          background-color: #062340;
          background-image: linear-gradient(180deg, #062340 0%, #0c4a80 35%, #1665a8 70%, #0a3a6b 100%);
          overflow: hidden;
          z-index: 10;
          color: #ffffff;
        }

        /* Animasi Gelembung Renik Samudra (Delicate Micro Ocean Bubbles) */
        .tt-bubbles-wrapper {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
        }
        .ocean-bubble {
          position: absolute;
          bottom: -40px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.9), rgba(125, 211, 252, 0.45) 50%, rgba(14, 76, 132, 0.15) 85%);
          border: 1px solid rgba(186, 230, 253, 0.65);
          box-shadow: 
            inset 0 0 3px rgba(255, 255, 255, 0.85),
            0 0 6px rgba(56, 189, 248, 0.35);
          animation: floatUp var(--bubble-dur) linear infinite;
          animation-delay: var(--bubble-del);
          left: var(--bubble-left);
          width: var(--bubble-size);
          height: var(--bubble-size);
          opacity: 0;
          will-change: transform, opacity;
        }

        @keyframes floatUp {
          0% {
            transform: translate3d(0, 0, 0) scale(0.7);
            opacity: 0;
          }
          15% {
            opacity: 0.75;
          }
          85% {
            opacity: 0.75;
          }
          100% {
            transform: translate3d(0, -980px, 0) scale(1.1);
            opacity: 0;
          }
        }

        .tt-main-container {
          position: relative;
          z-index: 3;
          max-width: 1280px;
          margin: 0 auto;
        }

        /* Tekstur Kayu Jati & Logam Kapal Bahari (Teak Wood & Copper Maritime Accents) */
        .wood-plaque-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          background: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              rgba(0, 0, 0, 0.18) 3px,
              rgba(0, 0, 0, 0.18) 6px
            ),
            linear-gradient(135deg, #4a2f17 0%, #2f1d0d 55%, #1c1107 100%);
          color: #fce8c5;
          border: 1px solid rgba(230, 184, 106, 0.55);
          padding: 0.55rem 1.45rem;
          border-radius: 9999px;
          font-size: 0.86rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          width: fit-content;
          box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.55),
            inset 0 1px 3px rgba(255, 230, 160, 0.4),
            inset 0 -3px 5px rgba(0, 0, 0, 0.9);
        }

        /* 2-Column Clean Editorial Layout */
        .tt-hero-showcase {
          display: grid;
          grid-template-columns: 1.08fr 1.18fr;
          gap: 5rem;
          align-items: center;
        }

        .tt-hero-left {
          display: flex;
          flex-direction: column;
          gap: 1.6rem;
        }

        .tt-hero-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 4.3vw, 3.8rem);
          font-weight: 800;
          line-height: 1.16;
          color: #ffffff;
          letter-spacing: -0.015em;
        }
        .tt-hero-title em {
          font-style: italic;
          background: linear-gradient(90deg, #ffd700, #e6b86a, #7dd3fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .tt-hero-desc {
          font-size: clamp(1.02rem, 1.65vw, 1.14rem);
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.72;
          font-weight: 400;
        }
        .tt-hero-desc-2 {
          font-size: 0.96rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.65;
          border-left: 3px solid #e6b86a;
          padding-left: 1.2rem;
        }

        /* Wood Plaque Info Pills (Papan Kayu Terukir) */
        .tt-inline-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 0.9rem;
          margin-top: 0.6rem;
        }
        .wood-info-pill {
          background: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.15) 2px,
              rgba(0, 0, 0, 0.15) 4px
            ),
            linear-gradient(135deg, #3d2612 0%, #24160a 60%, #150d06 100%);
          border: 1px solid rgba(230, 184, 106, 0.5);
          border-radius: 9999px;
          padding: 0.68rem 1.45rem;
          font-size: 0.88rem;
          color: #fdf6e9;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 0.65rem;
          box-shadow: 
            0 10px 24px rgba(0, 0, 0, 0.55),
            inset 0 1px 3px rgba(255, 230, 160, 0.35),
            inset 0 -2px 5px rgba(0, 0, 0, 0.9);
          transition: all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .wood-info-pill:hover {
          transform: translateY(-4px);
          border-color: #ffd700;
          box-shadow: 
            0 15px 32px rgba(0, 0, 0, 0.65),
            inset 0 1px 4px rgba(255, 230, 160, 0.6),
            inset 0 -2px 6px rgba(0, 0, 0, 0.95);
        }
        .copper-vector-icon {
          color: #ffd700;
          filter: drop-shadow(0 2px 3px rgba(0, 0, 0, 0.8));
        }

        /* Right Column: Clean Museum-Quality Photograph Frame with Carved Teak Border */
        .tt-photo-showcase {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          width: 100%;
        }

        .photo-hero-frame {
          position: relative;
          width: 100%;
          height: 440px;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 
            0 28px 70px rgba(0, 0, 0, 0.65),
            inset 0 2px 4px rgba(255, 255, 255, 0.35);
          border: 2px solid rgba(230, 184, 106, 0.45);
          background: #092642;
          transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .photo-hero-frame:hover {
          transform: translateY(-6px);
          border-color: #ffd700;
          box-shadow: 0 34px 85px rgba(0, 0, 0, 0.8);
        }
        .photo-hero-frame img {
          transition: transform 0.8s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .photo-hero-frame:hover img {
          transform: scale(1.06);
        }

        /* Wave Curve transitioning to ProfilDesa (#07284b) */
        .tt-wave-divider {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 5;
        }
        .tt-wave-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 85px;
        }

        @media (max-width: 1024px) {
          .tt-hero-showcase {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .photo-hero-frame {
            height: 360px;
          }
        }
        @media (max-width: 640px) {
          .photo-hero-frame {
            height: 280px;
          }
          .photo-hero-caption {
            flex-direction: column;
            align-items: flex-start;
            gap: 0.4rem;
            padding: 1.8rem 1.4rem 1.2rem 1.4rem;
          }
        }

        /* Background Vector Map bercampur dengan gradasi biru pekat */
        .tema-section-bg-vector {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image: url('${petaVectorUrl}');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          /* Removed background-attachment: fixed to prevent scroll lag */
          transform: translateZ(0);
          will-change: transform;
          mix-blend-mode: soft-light;
          opacity: 0.25;
          filter: invert(1) contrast(1.4) brightness(1.15);
          mask-image: linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }
      `}</style>

      {/* Background Vector Map */}
      <div className="tema-section-bg-vector" />

      {/* Gelembung-Gelembung Renik Udara Laut Pasifik */}
      <div className="tt-bubbles-wrapper">
        <div className="ocean-bubble" style={{ "--bubble-left": "5%", "--bubble-size": "8px", "--bubble-dur": "16s", "--bubble-del": "0s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "12%", "--bubble-size": "14px", "--bubble-dur": "19s", "--bubble-del": "2s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "18%", "--bubble-size": "6px", "--bubble-dur": "14s", "--bubble-del": "5s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "24%", "--bubble-size": "16px", "--bubble-dur": "22s", "--bubble-del": "1s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "31%", "--bubble-size": "10px", "--bubble-dur": "17s", "--bubble-del": "7s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "38%", "--bubble-size": "18px", "--bubble-dur": "24s", "--bubble-del": "3s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "45%", "--bubble-size": "7px", "--bubble-dur": "15s", "--bubble-del": "9s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "52%", "--bubble-size": "15px", "--bubble-dur": "20s", "--bubble-del": "4s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "59%", "--bubble-size": "9px", "--bubble-dur": "16s", "--bubble-del": "11s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "66%", "--bubble-size": "17px", "--bubble-dur": "21s", "--bubble-del": "6s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "73%", "--bubble-size": "11px", "--bubble-dur": "18s", "--bubble-del": "0.5s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "80%", "--bubble-size": "14px", "--bubble-dur": "23s", "--bubble-del": "8s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "87%", "--bubble-size": "8px", "--bubble-dur": "15s", "--bubble-del": "12s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "93%", "--bubble-size": "16px", "--bubble-dur": "19s", "--bubble-del": "3.5s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "97%", "--bubble-size": "10px", "--bubble-dur": "17s", "--bubble-del": "10s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "28%", "--bubble-size": "12px", "--bubble-dur": "18s", "--bubble-del": "14s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "62%", "--bubble-size": "7px", "--bubble-dur": "15s", "--bubble-del": "15s" } as React.CSSProperties} />
      </div>

      <div className="tt-main-container">
        {/* Plakat Kayu Badge Diletakkan di Tengah Atas */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "3.5rem" }}>
          <span className="wood-plaque-badge">
            Tema KKN Arungi Morotai 2026
          </span>
        </div>

        {/* 2-Column Editorial Layout: Left Theme Only | Right Clean High-Res Photo Only */}
        <div className="tt-hero-showcase">
          {/* Left Column: Hanya Tema */}
          <div className="tt-hero-left">
            <h2 className="tt-hero-title">
              Akselerasi Ekowisata<br />
              Berbasis Kearifan<br />
              <em>Lokal & Bahari</em>
            </h2>
            <p className="tt-hero-desc">
              Sinergi infrastruktur adaptif vernakular untuk menghubungkan nilai rantai Agro-Bahari di Desa Kolorai & Desa Yayasan, demi menciptakan masa depan Pulau Morotai yang berdaya saing dan berkelanjutan.
            </p>
          </div>

          {/* Right Column: Hanya Gambar (Real Photography Showcase) */}
          <div className="tt-photo-showcase">
            <div className="photo-hero-frame">
              <Image
                src={pasirTimbulUrl}
                alt="Keindahan Ekowisata Pasir Timbul Dodola, Pulau Morotai"
                fill
                priority
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Wave Curve transitioning smoothly to ProfilDesa (#07284b) */}
      <div className="tt-wave-divider">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path 
            d="M0,60 C400,10 900,110 1440,30 L1440,120 L0,120 Z" 
            fill="#07284b"
          />
        </svg>
      </div>
    </section>
  );
}
