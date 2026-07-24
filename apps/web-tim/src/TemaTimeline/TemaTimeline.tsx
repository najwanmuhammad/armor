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
          border: 1px solid rgba(255, 255, 255, 0.15);
          background: #092642;
          transition: all 0.5s cubic-bezier(0.25, 0.1, 0.25, 1);
          outline: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        .photo-hero-frame:focus, .photo-hero-frame:active {
          outline: none !important;
        }
        .photo-hero-frame:hover {
          transform: translateY(-6px);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 34px 85px rgba(0, 0, 0, 0.8);
        }
        .photo-hero-frame img {
          outline: none !important;
          -webkit-tap-highlight-color: transparent !important;
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
          opacity: 0.15;
          mask-image: linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }
      `}</style>

      {/* Background Vector Map */}
      <div className="tema-section-bg-vector" />

      {/* Gelembung-Gelembung dihapus */}

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
