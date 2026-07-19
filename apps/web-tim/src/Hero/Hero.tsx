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

        @media (max-width: 768px) {
          .hero-section {
            min-height: 100vh;
            padding-top: 70px;
          }
          .hero-title {
            margin-bottom: 1.5rem;
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
    </section>
  );
}
