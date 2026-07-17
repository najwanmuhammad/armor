import React from "react";
import Image from "next/image";
import yayasanImage from "@/src/assets/yayasan.png";

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
          background: #0f172a;
          padding-top: 80px;
        }
        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(15, 23, 42, 0.35) 0%,
            rgba(15, 23, 42, 0.55) 50%,
            rgba(15, 23, 42, 0.75) 100%
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
        .hero-badge {
          display: inline-flex;
          align-items: center;
          padding: 0.45rem 1.4rem;
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.28);
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          color: #ffffff;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          margin-bottom: 1.75rem;
          text-transform: uppercase;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
        }
        .hero-title {
          color: #ffffff;
          font-weight: 800;
          font-size: clamp(3.75rem, 9.5vw, 7.25rem);
          letter-spacing: -0.025em;
          line-height: 1.05;
          margin-bottom: 1.5rem;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.35);
        }
        .hero-subtitle {
          color: rgba(255, 255, 255, 0.92);
          font-size: clamp(1.05rem, 2.2vw, 1.35rem);
          font-weight: 500;
          max-width: 760px;
          line-height: 1.65;
          text-shadow: 0 2px 12px rgba(0, 0, 0, 0.45);
        }
        @media (max-width: 768px) {
          .hero-section {
            min-height: 100vh;
            padding-top: 70px;
          }
          .hero-badge {
            font-size: 0.72rem;
            padding: 0.35rem 1.1rem;
            margin-bottom: 1.25rem;
          }
          .hero-title {
            margin-bottom: 1.25rem;
          }
        }
      `}</style>

            <Image
                src={yayasanImage}
                alt="Latar Belakang Desa Yayasan"
                fill
                priority
                quality={92}
                style={{
                    objectFit: "cover",
                    objectPosition: "center",
                }}
            />

            <div className="hero-overlay" />

            <div className="hero-content">
                <div className="hero-badge">PORTAL RESMI DESA</div>
                <h1 className="hero-title">Desa Yayasan</h1>
                <p className="hero-subtitle">
                    Mewujudkan masa depan Pulau Morotai yang lebih baik melalui program
                    pendidikan, kesehatan, dan pelestarian lingkungan.
                </p>
            </div>
        </section>
    );
}
