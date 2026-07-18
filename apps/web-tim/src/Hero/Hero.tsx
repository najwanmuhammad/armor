"use client";

import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="beranda" className="hero-section">
      <style>{`
        .hero-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          background: #0f1e1c;
          padding-top: 80px;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 30, 28, 0.3) 0%,
            rgba(15, 30, 28, 0.5) 50%,
            rgba(15, 30, 28, 0.7) 100%
          );
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 3rem 1.5rem;
          max-width: 1100px;
          margin: 0 auto;
        }

        /* Hero logo */
        .hero-logo {
          position: relative;
          width: clamp(280px, 50vw, 550px);
          height: auto;
          margin-bottom: 2rem;
          filter: drop-shadow(0 4px 30px rgba(0, 0, 0, 0.4));
        }

        /* Subtitle */
        .hero-subtitle {
          color: rgba(255, 255, 255, 0.92);
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 500;
          max-width: 600px;
          line-height: 1.6;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
          margin-bottom: 0.5rem;
        }
        .hero-period {
          color: rgba(255, 255, 255, 0.78);
          font-size: clamp(0.9rem, 1.6vw, 1.05rem);
          font-weight: 400;
          letter-spacing: 0.02em;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        /* Scroll indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          animation: scrollBounce 2s ease-in-out infinite;
        }
        .scroll-label {
          color: rgba(255, 255, 255, 0.7);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }
        .scroll-mouse {
          width: 24px;
          height: 38px;
          border: 2px solid rgba(255, 255, 255, 0.5);
          border-radius: 12px;
          position: relative;
        }
        .scroll-mouse::after {
          content: "";
          position: absolute;
          top: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 8px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 4px;
          animation: scrollDot 2s ease-in-out infinite;
        }

        @keyframes scrollBounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(8px); }
        }
        @keyframes scrollDot {
          0%, 100% { opacity: 1; top: 6px; }
          50% { opacity: 0.3; top: 16px; }
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 100vh;
            padding-top: 70px;
          }
          .hero-title {
            margin-bottom: 1.5rem;
          }
          .scroll-indicator {
            bottom: 1.5rem;
          }
        }
      `}</style>

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      >
        <source src="/Video Project 4.mp4" type="video/mp4" />
      </video>
      <div className="hero-overlay" />

      <div className="hero-content">
        <Image
          src="/Logo Putih.png"
          alt="Arungi Morotai"
          width={550}
          height={200}
          className="hero-logo"
          priority
          style={{ objectFit: "contain" }}
        />
        <p className="hero-subtitle">KKN PPM UGM Arungi Morotai</p>
        <p className="hero-period">Periode II (Juni–Agustus) 2026</p>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator">
        <span className="scroll-label">Scroll</span>
        <div className="scroll-mouse" />
      </div>
    </section>
  );
}
