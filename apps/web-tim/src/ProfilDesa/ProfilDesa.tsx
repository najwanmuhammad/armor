"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";

import SaberLoadingScreen from "@/src/Loading/SaberLoadingScreen";
import ProfilDesaCard from "./ProfilDesaCard";

interface ProfilDesaProps {
  petaVectorUrl?: string;
}

const ProfilBannerMap = dynamic(() => import("./ProfilBannerMap"), {
  ssr: false,
  loading: () => (
    <SaberLoadingScreen message="MENGARUNGI MOROTAI" subMessage="Memuat peta satelit pesisir Morotai..." />
  ),
});

export default function ProfilDesa({ petaVectorUrl = "/images/peta_vector.png" }: ProfilDesaProps) {
  return (
    <section id="lokasi" className="profil-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap');

        .profil-section {
          width: 100%;
          padding: 6rem 1.5rem 8.5rem 1.5rem;
          background: linear-gradient(180deg, #07284b 0%, #0e4c84 40%, #1a6bb3 80%, #0d4678 100%);
          position: relative;
          z-index: 10;
          color: #ffffff;
        }

        /* Banner Top Seamlessly Unified (Menyatu tanpa batas potong) */
        .profil-banner {
          position: relative;
          width: 100%;
          max-width: 1240px;
          min-height: 400px;
          margin: 0 auto 5.5rem auto;
          border-radius: 28px;
          overflow: hidden;
          display: flex;
          align-items: center;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.55);
          border: 1px solid rgba(255, 255, 255, 0.16);
          background: #07284b;
        }

        /* Map fills the whole background behind gradient overlay */
        .profil-banner-map-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          width: 100%;
          height: 100%;
          pointer-events: none;
        }

        /* Seamless Horizontal Gradient Blending from Left (#07284b) to Right transparent */
        .profil-banner-gradient-blend {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          background: linear-gradient(
            90deg,
            #07284b 0%,
            #07284b 36%,
            rgba(7, 40, 75, 0.88) 42%,
            rgba(7, 40, 75, 0.3) 47%,
            rgba(7, 40, 75, 0) 52%,
            rgba(7, 40, 75, 0) 100%
          );
        }

        /* Soft vignette around inner edges so map corners blend into frame */
        .profil-banner-vignette {
          position: absolute;
          inset: 0;
          z-index: 3;
          pointer-events: none;
          box-shadow: inset 0 0 45px rgba(7, 40, 75, 0.65);
        }

        .profil-content {
          position: relative;
          z-index: 4;
          max-width: 610px;
          padding: 4.5rem 3.8rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .profil-badge {
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
        .profil-title {
          font-family: 'Playfair Display', serif;
          color: #ffffff;
          font-size: clamp(2.3rem, 4.5vw, 3.6rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
        }
        .profil-title em {
          font-style: italic;
          background: linear-gradient(90deg, #7dd3fc, #38bdf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .profil-subtitle {
          color: rgba(255, 255, 255, 0.88);
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          font-weight: 400;
          line-height: 1.65;
        }

        /* 2 Desa Pengabdian Showcase (Lokasi 1 & Lokasi 2) */
        .desa-showcase-section {
          max-width: 1240px;
          margin: 0 auto 6.5rem auto;
          position: relative;
          z-index: 5;
        }
        .desa-section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }
        .desa-section-tag {
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
          margin-bottom: 0.85rem;
          box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.55),
            inset 0 1px 3px rgba(255, 230, 160, 0.4),
            inset 0 -3px 5px rgba(0, 0, 0, 0.9);
        }
        .desa-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 3.6vw, 2.8rem);
          font-weight: 800;
          color: #ffffff;
        }

        .desa-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.8rem;
        }
        .desa-card {
          position: relative;
          background: rgba(8, 34, 62, 0.88);
          border-radius: 28px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255, 255, 255, 0.15);
          outline: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        .desa-card:focus, .desa-card:active {
          outline: none !important;
        }
        .desa-card:hover {
          transform: translateY(-8px);
          border-color: rgba(255, 255, 255, 0.3);
        }

        /* Efek Glow Cyan Static untuk Desa Kolorai */
        .desa-card--kolorai {
          box-shadow: 
            0 0 28px rgba(56, 189, 248, 0.15),
            0 0 60px rgba(16, 185, 129, 0.1),
            inset 0 0 18px rgba(56, 189, 248, 0.1);
        }

        /* Efek Glow Gold Static untuk Desa Yayasan */
        .desa-card--yayasan {
          box-shadow: 
            0 0 28px rgba(251, 191, 36, 0.15),
            0 0 60px rgba(245, 158, 11, 0.1),
            inset 0 0 18px rgba(251, 191, 36, 0.1);
        }

        /* Bintang Kelap Kelip di Sudut Kartu */
        .kk-sparkle {
          position: absolute;
          z-index: 10;
          pointer-events: none;
          animation: kelapKelipStar var(--kk-dur) infinite ease-in-out;
          animation-delay: var(--kk-del);
          font-size: var(--kk-size);
          filter: drop-shadow(0 0 8px currentColor);
        }
        @keyframes kelapKelipStar {
          0%, 100% {
            opacity: 0.25;
            transform: scale(0.65) rotate(0deg);
          }
          50% {
            opacity: 1;
            transform: scale(1.35) rotate(45deg);
          }
        }

        .desa-img-box {
          position: relative;
          width: 100%;
          height: 280px;
          background: #08223e;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }
        .desa-img-box img {
          transition: transform 0.8s ease;
        }
        .desa-card:hover .desa-img-box img {
          transform: scale(1.06);
        }
        .desa-img-badge {
          position: absolute;
          top: 18px;
          left: 18px;
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
          padding: 0.45rem 1.2rem;
          border-radius: 9999px;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          box-shadow: 
            0 6px 16px rgba(0, 0, 0, 0.65),
            inset 0 1px 3px rgba(255, 230, 160, 0.4),
            inset 0 -3px 5px rgba(0, 0, 0, 0.9);
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }
        .desa-info-body {
          padding: 2.2rem 2rem;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .desa-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }
        .desa-desc {
          font-size: 0.98rem;
          color: rgba(255, 255, 255, 0.86);
          line-height: 1.68;
          margin-bottom: 1.6rem;
        }
        .desa-highlights {
          display: flex;
          flex-wrap: wrap;
          gap: 0.6rem;
          margin-top: auto;
        }
        .desa-pill {
          background: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(0, 0, 0, 0.15) 2px,
              rgba(0, 0, 0, 0.15) 4px
            ),
            linear-gradient(135deg, #3d2612 0%, #24160a 60%, #150d06 100%);
          border: 1px solid rgba(230, 184, 106, 0.55);
          border-radius: 9999px;
          padding: 0.4rem 1rem;
          font-size: 0.82rem;
          color: #fce8c5;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          box-shadow: 
            0 4px 12px rgba(0, 0, 0, 0.55),
            inset 0 1px 3px rgba(255, 230, 160, 0.35),
            inset 0 -2px 4px rgba(0, 0, 0, 0.9);
        }

        /* Tombol Kecil Masuk ke Peta Interaktif (Teak Wood Plaque Button) */
        .profil-peta-btn-container {
          margin-top: 2.8rem;
          display: flex;
          justify-content: center;
        }
        .profil-peta-mini-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 2.4rem;
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
          border-radius: 9999px;
          font-size: 0.96rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-decoration: none;
          box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.55),
            inset 0 1px 3px rgba(255, 230, 160, 0.4),
            inset 0 -3px 5px rgba(0, 0, 0, 0.9);
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }
        .profil-peta-mini-btn:hover {
          background: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              rgba(0, 0, 0, 0.18) 3px,
              rgba(0, 0, 0, 0.18) 6px
            ),
            linear-gradient(135deg, #5c3b1e 0%, #3d2612 55%, #24160a 100%);
          border-color: rgba(230, 184, 106, 0.85);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 
            0 14px 28px rgba(0, 0, 0, 0.75),
            inset 0 1px 3px rgba(255, 240, 180, 0.5),
            inset 0 -3px 5px rgba(0, 0, 0, 0.95);
        }

        /* Wave Curve transitioning to ProgramKerja (#062544) */
        .profil-wave-divider {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 5;
        }
        .profil-wave-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 85px;
        }

        @media (max-width: 1024px) {
          .profil-banner-gradient-blend {
            background: linear-gradient(
              180deg,
              #07284b 0%,
              #07284b 42%,
              rgba(7, 40, 75, 0.85) 54%,
              rgba(7, 40, 75, 0.25) 68%,
              transparent 82%
            );
          }
          .desa-cards-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .profil-section {
            padding: 4rem 1rem 6.5rem 1rem;
          }
          .profil-content {
            padding: 2.5rem 1.75rem;
          }
        }

        /* Background Vector Map bercampur dengan gradasi biru pekat (#lokasi) */
        .profil-section-bg-vector {
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

      {/* Background Vector Map bercampur dengan gradasi biru */}
      <div className="profil-section-bg-vector" />

      {/* Gelembung-Gelembung dihapus */}

      {/* Banner Top Seamlessly Blended (Menyatu tanpa garis potong) */}
      <div className="profil-banner" style={{ position: "relative", zIndex: 5 }}>
        {/* Leaflet Map Preview fills background */}
        <div className="profil-banner-map-bg">
          <ProfilBannerMap />
        </div>
        {/* Horizontal Gradient Overlay blends left text cleanly with right map */}
        <div className="profil-banner-gradient-blend" />
        <div className="profil-banner-vignette" />

        <div className="profil-content">
          <span className="profil-badge">
            Lokasi & Wilayah KKN
          </span>
          <h2 className="profil-title">
            Profil & Peta<br /><em>Pulau Morotai</em>
          </h2>
          <p className="profil-subtitle">
            Gambaran geografis, sosial demografi, serta pemetaan lokasi pengabdian KKN PPM UGM Arungi Morotai di bibir Samudra Pasifik.
          </p>
        </div>
      </div>

      {/* 2 Desa Pengabdian Showcase dengan Efek Kelap Kelip Glow */}
      <div className="desa-showcase-section">
        <div className="desa-section-header">
          <span className="desa-section-tag">
            Fokus Lokasi Pengabdian
          </span>
          <h3 className="desa-section-title">2 Desa Pesisir Utama di Pulau Morotai</h3>
        </div>

        <div className="desa-cards-grid">
          {/* Card Lokasi 1: Desa Kolorai (Glow Cyan Kelap Kelip) */}
          <div className="desa-card desa-card--kolorai">

            <div className="desa-img-box">
              <span className="desa-img-badge">
                Lokasi 1
              </span>
              <Image
                src="/images/kolorai.png"
                alt="Desa Kolorai Morotai"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="desa-info-body">
              <h4 className="desa-title">
                Desa Kolorai
              </h4>
              <p className="desa-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>

            </div>
          </div>

          {/* Card Lokasi 2: Desa Yayasan (Glow Gold Kelap Kelip) */}
          <div className="desa-card desa-card--yayasan">

            <div className="desa-img-box">
              <span className="desa-img-badge">
                Lokasi 2
              </span>
              <Image
                src="/images/yayasan.png"
                alt="Desa Yayasan Morotai"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="desa-info-body">
              <h4 className="desa-title">
                Desa Yayasan
              </h4>
              <p className="desa-desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>

            </div>
          </div>
        </div>
      </div>

        {/* Tombol Kecil Navigasi ke Tab Peta Interaktif */}
        <div className="profil-peta-btn-container">
          <Link href="/peta" className="profil-peta-mini-btn group">
            <span>Buka Peta Interaktif Morotai</span>
          </Link>
        </div>

      {/* Wave Curve transitioning smoothly to ProgramKerja (#062544) */}
      <div className="profil-wave-divider">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path 
            d="M0,40 C320,110 960,10 1440,70 L1440,120 L0,120 Z" 
            fill="#062544"
          />
        </svg>
      </div>
    </section>
  );
}
