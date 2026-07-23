"use client";

import React from "react";
import Image from "next/image";

export default function TentangKami() {
  return (
    <section id="tentang-kami" className="tentang-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap');

        .tentang-section {
          position: relative;
          width: 100%;
          padding: 6rem 2rem 7.5rem 2rem;
          background: linear-gradient(180deg, #00305a 0%, #0a518a 40%, #2974bf 80%, #0d4678 100%);
          overflow: hidden;
          z-index: 10;
        }

        /* ── Wave Divider to TimProfile ── */
        .tentang-wave-divider {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 20;
          pointer-events: none;
        }

        .tentang-wave-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 120px;
        }

        /* Decorative background elements */
        .tentang-section::before {
          content: "";
          position: absolute;
          top: -100px;
          right: -80px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(67, 123, 191, 0.3) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .tentang-section::after {
          content: "";
          position: absolute;
          bottom: -120px;
          left: -60px;
          width: 350px;
          height: 350px;
          background: radial-gradient(circle, rgba(0, 61, 110, 0.4) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        /* Decorative floral ornaments */
        .tentang-ornament {
          position: absolute;
          opacity: 0.12;
          pointer-events: none;
          z-index: 0;
        }
        .tentang-ornament-top-right {
          top: 1.5rem;
          right: 2rem;
          width: 180px;
          height: 180px;
          background-image: url("/logo armor.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        .tentang-ornament-bottom-left {
          bottom: 2rem;
          left: 2rem;
          width: 140px;
          height: 140px;
          background-image: url("/logo armor.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
          transform: rotate(45deg);
        }

        /* Underwater bubbles */
        .tentang-bubbles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
          z-index: 1;
        }
        .tentang-bubble {
          position: absolute;
          bottom: -20px;
          background: radial-gradient(
            circle at 30% 30%,
            rgba(255, 255, 255, 0.25) 0%,
            rgba(255, 255, 255, 0.08) 50%,
            rgba(255, 255, 255, 0.02) 100%
          );
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 50%;
          animation: bubbleRise linear infinite;
        }
        .tentang-bubble::after {
          content: "";
          position: absolute;
          top: 20%;
          left: 25%;
          width: 30%;
          height: 30%;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
        }

        @keyframes bubbleRise {
          0% {
            transform: translateY(0) scale(0.6);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          85% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-950px) scale(1.3);
            opacity: 0;
          }
        }

        /* Container & Layout */
        .tentang-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 4.5rem;
          align-items: center;
        }

        /* Image Column */
        .tentang-image-wrapper {
          position: relative;
        }
        .tentang-image-frame {
          position: relative;
          width: 100%;
          height: 480px;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.35);
          border: 2px solid rgba(255, 255, 255, 0.25);
          transform: rotate(-1.5deg);
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .tentang-image-frame:hover {
          transform: rotate(0deg) scale(1.02);
        }

        /* Content Column */
        .tentang-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          color: #ffffff;
        }

        .tentang-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          width: fit-content;
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
          box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.55),
            inset 0 1px 3px rgba(255, 230, 160, 0.4),
            inset 0 -3px 5px rgba(0, 0, 0, 0.9);
        }

        .tentang-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 4vw, 3.5rem);
          font-weight: 800;
          line-height: 1.15;
          margin: 0;
          letter-spacing: -0.01em;
        }
        .tentang-heading em {
          font-style: italic;
          font-weight: 700;
          color: #93c5fd;
        }

        .tentang-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #93c5fd, transparent);
          border-radius: 2px;
        }

        .tentang-desc {
          font-size: clamp(1rem, 1.4vw, 1.12rem);
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.9);
          margin: 0;
          font-weight: 400;
        }

        /* Responsive Design */
        @media (max-width: 992px) {
          .tentang-container {
            grid-template-columns: 1fr;
            gap: 3.5rem;
          }
          .tentang-image-frame {
            height: 400px;
            transform: rotate(0deg);
          }
          .tentang-section {
            padding: 4.5rem 1.5rem 6rem 1.5rem;
          }
          .tentang-wave-divider svg {
            height: 60px;
          }
        }

        @media (max-width: 480px) {
          .tentang-heading {
            font-size: 1.8rem;
          }
          .tentang-badge {
            font-size: 0.75rem;
          }
        }

        /* Background Vector Map bercampur dengan gradasi biru pekat */
        .tentang-section-bg-vector {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image: url('/images/peta_vector.png');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          background-attachment: fixed;
          transform: translateZ(0); /* GPU acceleration */
          will-change: transform;
          mix-blend-mode: soft-light;
          opacity: 0.25;
          filter: invert(1) contrast(1.4) brightness(1.15);
          mask-image: linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }
      `}</style>

      {/* Background Vector Map */}
      <div className="tentang-section-bg-vector" />

      {/* Decorative elements */}
      <div className="tentang-ornament tentang-ornament-top-right" />
      <div className="tentang-ornament tentang-ornament-bottom-left" />

      {/* Underwater bubbles */}
      <div className="tentang-bubbles">
        <div className="tentang-bubble" style={{ left: "5%", width: "12px", height: "12px", animationDuration: "8s", animationDelay: "0s" }} />
        <div className="tentang-bubble" style={{ left: "15%", width: "8px", height: "8px", animationDuration: "10s", animationDelay: "2s" }} />
        <div className="tentang-bubble" style={{ left: "25%", width: "18px", height: "18px", animationDuration: "12s", animationDelay: "1s" }} />
        <div className="tentang-bubble" style={{ left: "38%", width: "6px", height: "6px", animationDuration: "9s", animationDelay: "4s" }} />
        <div className="tentang-bubble" style={{ left: "50%", width: "14px", height: "14px", animationDuration: "11s", animationDelay: "0.5s" }} />
        <div className="tentang-bubble" style={{ left: "62%", width: "10px", height: "10px", animationDuration: "7s", animationDelay: "3s" }} />
        <div className="tentang-bubble" style={{ left: "72%", width: "20px", height: "20px", animationDuration: "13s", animationDelay: "1.5s" }} />
        <div className="tentang-bubble" style={{ left: "82%", width: "7px", height: "7px", animationDuration: "8.5s", animationDelay: "5s" }} />
        <div className="tentang-bubble" style={{ left: "90%", width: "15px", height: "15px", animationDuration: "10.5s", animationDelay: "2.5s" }} />
      </div>

      <div className="tentang-container">
        {/* Left: Image */}
        <div className="tentang-image-wrapper">
          <div className="tentang-image-frame">
            <Image
              src="/KilauCita.png"
              alt="Pemandangan Pulau Morotai"
              fill
              quality={85}
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>
        </div>

        {/* Right: Content */}
        <div className="tentang-content">
          <span className="tentang-badge">Tentang Kami</span>

          <h2 className="tentang-heading">
            Mengarungi Cerita
            <br />
            <em>Pulau Morotai</em>
          </h2>

          <div className="tentang-divider" />

          <p className="tentang-desc">
            Arungi Morotai adalah salah satu tim dari KKN-PPM UGM yang menempatkan
            masyarakat Pulau Morotai sebagai subjek perubahan. Berangkat dari integrasi
            inovasi teknologi digital, penguatan tata kelola pemerintahan desa, serta
            konservasi sumber daya alam, Arungi Morotai hadir untuk memperkuat kapabilitas
            lokal di tengah arus globalisasi budaya.
          </p>

          <p className="tentang-desc">
            Arungi Morotai tidak sekadar membawa program, tetapi membangun proses
            belajar bersama yang berpijak pada nilai kebersamaan, kemandirian, dan
            keberlanjutan.
          </p>

          <Image
            src="/logo armor.png"
            alt="Logo Arungi Morotai"
            width={60}
            height={60}
            style={{ objectFit: "contain", opacity: 0.35, marginTop: "0.5rem", alignSelf: "flex-end" }}
          />
        </div>
      </div>

      {/* Wave Curve transitioning smoothly into TimProfile (#0d4678) */}
      <div className="tentang-wave-divider">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path 
            d="M0,50 C360,120 1080,10 1440,40 L1440,120 L0,120 Z" 
            fill="#0d4678"
          />
        </svg>
      </div>
    </section>
  );
}
