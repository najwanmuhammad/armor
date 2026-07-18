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
          padding: 6rem 2rem;
          background: linear-gradient(135deg, #003D6E 0%, #0a4a7a 30%, #437BBF 70%, #003D6E 100%);
          overflow: hidden;
          z-index: 10;
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
          height: 20%;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          transform: rotate(-30deg);
        }

        @keyframes bubbleRise {
          0% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          50% {
            transform: translateY(-50vh) translateX(15px) scale(1.05);
            opacity: 0.4;
          }
          80% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-110vh) translateX(-10px) scale(0.8);
            opacity: 0;
          }
        }

        .tentang-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 4rem;
          align-items: center;
        }

        /* Left: Image */
        .tentang-image-wrapper {
          position: relative;
        }
        .tentang-image-frame {
          position: relative;
          width: 100%;
          aspect-ratio: 4 / 5;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 
            0 25px 60px rgba(0, 0, 0, 0.35),
            0 0 0 1px rgba(255, 255, 255, 0.08);
        }
        .tentang-image-frame img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        /* Decorative frame accent */
        .tentang-image-wrapper::before {
          content: "";
          position: absolute;
          top: -12px;
          left: -12px;
          right: 12px;
          bottom: 12px;
          border: 2px solid rgba(255, 255, 255, 0.15);
          border-radius: 28px;
          pointer-events: none;
          z-index: -1;
        }
        .tentang-image-wrapper::after {
          content: "";
          position: absolute;
          bottom: -12px;
          right: -12px;
          left: 12px;
          top: 12px;
          border: 2px solid rgba(255, 255, 255, 0.08);
          border-radius: 28px;
          pointer-events: none;
          z-index: -1;
        }

        /* Right: Content */
        .tentang-content {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .tentang-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          width: fit-content;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .tentang-heading {
          font-family: 'Playfair Display', serif;
          color: #ffffff;
          font-size: clamp(2.2rem, 5vw, 3.6rem);
          font-weight: 800;
          line-height: 1.15;
          letter-spacing: -0.01em;
        }
        .tentang-heading em {
          font-style: italic;
          color: rgba(255, 255, 255, 0.9);
        }

        .tentang-desc {
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(0.95rem, 1.5vw, 1.08rem);
          line-height: 1.75;
          font-weight: 400;
          letter-spacing: 0.01em;
        }

        .tentang-divider {
          width: 60px;
          height: 3px;
          background: linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.1));
          border-radius: 4px;
          margin: 0.5rem 0;
        }



        @media (max-width: 900px) {
          .tentang-section {
            padding: 4rem 1.25rem;
          }
          .tentang-container {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .tentang-image-frame {
            aspect-ratio: 16 / 10;
            max-height: 350px;
          }
          .tentang-image-wrapper::before,
          .tentang-image-wrapper::after {
            display: none;
          }
          .tentang-content {
            text-align: center;
            align-items: center;
          }
          .tentang-content-ornament {
            align-self: center;
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
      `}</style>

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
        <div className="tentang-bubble" style={{ left: "45%", width: "5px", height: "5px", animationDuration: "9.5s", animationDelay: "6s" }} />
        <div className="tentang-bubble" style={{ left: "8%", width: "16px", height: "16px", animationDuration: "14s", animationDelay: "3.5s" }} />
        <div className="tentang-bubble" style={{ left: "55%", width: "9px", height: "9px", animationDuration: "11.5s", animationDelay: "7s" }} />
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
    </section>
  );
}
