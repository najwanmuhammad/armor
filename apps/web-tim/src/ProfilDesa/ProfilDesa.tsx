"use client";

import React from "react";
import Image from "next/image";

export default function ProfilDesa() {
  return (
    <section id="tentang-kami" className="profil-section">
      <style>{`
        .profil-section {
          width: 100%;
          padding: 5rem 1.5rem;
          background: #0f1e1c;
          position: relative;
          z-index: 10;
        }
        .profil-banner {
          position: relative;
          width: 100%;
          max-width: 1200px;
          min-height: 360px;
          margin: 0 auto;
          border-radius: 28px;
          overflow: hidden;
          display: flex;
          align-items: center;
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.08);
          background: #0a1618;
        }
        
        /* Background image container & gradient overlay */
        .profil-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          /* Sementara memakai gradient bertema peta/satelit agar senada dengan desain.
             Bisa diganti dengan komponen <Image /> foto peta satelit desa bila sudah ada. */
          background-color: #1c332e;
          background-image: 
            radial-gradient(circle at 80% 50%, rgba(50, 110, 90, 0.4) 0%, transparent 60%),
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 100% 100%, 30px 30px, 30px 30px;
          background-position: center;
        }
        
        .profil-overlay {
          position: absolute;
          inset: 0;
          z-index: 2;
          background: linear-gradient(
            90deg,
            #0b1618 0%,
            #0b1618 45%,
            rgba(11, 22, 24, 0.82) 65%,
            rgba(11, 22, 24, 0.15) 100%
          );
        }

        /* Content left */
        .profil-content {
          position: relative;
          z-index: 3;
          max-width: 560px;
          padding: 4rem 3.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .profil-title {
          color: #ffffff;
          font-size: clamp(2.25rem, 4.5vw, 3.5rem);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .profil-subtitle {
          color: rgba(255, 255, 255, 0.85);
          font-size: clamp(0.95rem, 1.8vw, 1.15rem);
          font-weight: 400;
          line-height: 1.65;
          letter-spacing: 0.01em;
        }

        @media (max-width: 768px) {
          .profil-section {
            padding: 3rem 1rem;
          }
          .profil-banner {
            min-height: 300px;
            border-radius: 20px;
          }
          .profil-overlay {
            background: linear-gradient(
              180deg,
              #0b1618 0%,
              #0b1618 60%,
              rgba(11, 22, 24, 0.75) 100%
            );
          }
          .profil-content {
            max-width: 100%;
            padding: 2.5rem 1.75rem;
          }
        }
      `}</style>

      <div className="profil-banner">
        {/* Background Visual */}
        <div className="profil-bg" />

        {/* Gradient Overlay (Gelap di kiri, transparan di kanan) */}
        <div className="profil-overlay" />

        {/* Text Content */}
        <div className="profil-content">
          <h2 className="profil-title">Profil Desa</h2>
          <p className="profil-subtitle">
            Gambaran umum kondisi geografis, demografi, dan potensi sumber daya desa
            lokasi KKN PPM UGM Arungi Morotai.
          </p>
        </div>
      </div>
    </section>
  );
}
