"use client";

import React from "react";
import Image from "next/image";

interface SaberLoadingScreenProps {
  message?: string;
  subMessage?: string;
  logoPutihUrl?: string;
  logoKilauUrl?: string;
}

export default function SaberLoadingScreen({
  message = "MENGARUNGI MOROTAI",
  subMessage = "Memuat data & peta interaktif...",
  logoPutihUrl = "/Logo Putih.png",
  logoKilauUrl = "/Logo Putih.png",
}: SaberLoadingScreenProps) {
  return (
    <div className="saber-loading-overlay">
      <style>{`
        /* v9-pure-black-shimmering-kelap-kelip-logo-only-zero-rotation */
        .saber-loading-overlay {
          position: fixed;
          inset: 0;
          z-index: 999999;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #000000;
          overflow: hidden;
          user-select: none;
        }

        /* Center Stage matches exact logo proportions over pure black */
        .saber-center-stage {
          position: relative;
          width: 280px;
          height: 280px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Container that gently floats and holds our shimmering layers */
        .saber-logo-container {
          position: relative;
          width: 210px;
          height: 210px;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: logo-float 3.5s ease-in-out infinite;
        }
        @keyframes logo-float {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-5px) scale(1.02); }
        }

        .saber-logo-layer {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          pointer-events: none;
        }

        /* Layer 1: Ambient Plasma Aura glowing gently behind the logo (kelap-kelip) */
        .layer-plasma {
          z-index: 1;
          animation: plasma-breathe 2s infinite alternate ease-in-out;
        }
        @keyframes plasma-breathe {
          0% { opacity: 0.45; transform: scale(0.96); filter: drop-shadow(0 0 14px rgba(0, 229, 255, 0.6)) drop-shadow(0 0 28px rgba(0, 168, 255, 0.4)); }
          100% { opacity: 0.95; transform: scale(1.06); filter: drop-shadow(0 0 22px rgba(0, 229, 255, 0.95)) drop-shadow(0 0 45px rgba(0, 168, 255, 0.75)); }
        }

        /* Layer 2: Base crisp, naturally bright white logo */
        .layer-base {
          z-index: 2;
        }
        .logo-base-img {
          filter: drop-shadow(0 0 4px rgba(255, 255, 255, 0.8)) drop-shadow(0 0 10px rgba(0, 229, 255, 0.6));
        }

        /* Layer 3: High-Voltage Saber Laser Shimmer (kelap-kelip sweep across the letters) */
        .layer-laser-shimmer {
          z-index: 3;
          -webkit-mask-image: linear-gradient(115deg, transparent 20%, rgba(0,0,0,0.5) 45%, black 50%, rgba(0,0,0,0.5) 55%, transparent 80%);
          mask-image: linear-gradient(115deg, transparent 20%, rgba(0,0,0,0.5) 45%, black 50%, rgba(0,0,0,0.5) 55%, transparent 80%);
          -webkit-mask-size: 280% 100%;
          mask-size: 280% 100%;
          animation: kelap-kelip-sweep 2.2s infinite cubic-bezier(0.4, 0, 0.2, 1);
        }
        @keyframes kelap-kelip-sweep {
          0% { -webkit-mask-position: 150% 0; mask-position: 150% 0; }
          100% { -webkit-mask-position: -150% 0; mask-position: -150% 0; }
        }
        .logo-shimmer-img {
          filter: brightness(2.6) drop-shadow(0 0 10px #ffffff) drop-shadow(0 0 20px #00e5ff);
        }

        @media (max-width: 480px) {
          .saber-center-stage {
            width: 240px;
            height: 240px;
          }
          .saber-logo-container {
            width: 170px;
            height: 170px;
          }
        }
      `}</style>

      {/* Center Stage: Pure Black Background with Shimmering (`Kelap-Kelip`) Logo & ZERO Rotation */}
      <div className="saber-center-stage">
        <div className="saber-logo-container">
          {/* Layer 1: Pulsing Plasma Aura behind logo (`kelap-kelip`) */}
          <div className="saber-logo-layer layer-plasma">
            <Image
              src={logoKilauUrl}
              alt="Logo Aura Plasma"
              width={185}
              height={185}
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Layer 2: Core White Logo */}
          <div className="saber-logo-layer layer-base">
            <Image
              src={logoPutihUrl}
              alt="Logo Arungi Morotai Putih"
              width={185}
              height={185}
              className="logo-base-img"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>

          {/* Layer 3: Laser Shimmer sweep across the letterforms (`kelap-kelip`) */}
          <div className="saber-logo-layer layer-laser-shimmer">
            <Image
              src={logoPutihUrl}
              alt="Logo Saber Shimmer"
              width={185}
              height={185}
              className="logo-shimmer-img"
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
