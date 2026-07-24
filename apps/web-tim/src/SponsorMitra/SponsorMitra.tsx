"use client";

import React, { useMemo } from "react";
import Image from "next/image";
import { createSanityClient, createImageHelpers } from "@arungimorotai/sanity";

interface SanityMitra {
  _id: string;
  nama: string;
  logo: any;
  tipe: "sponsor" | "media_partner" | "mitra" | "institusi";
  url?: string;
  urutan?: number;
  isCombined?: boolean;
  items?: SanityMitra[];
}

interface SponsorMitraProps {
  mitraData?: SanityMitra[];
  petaVectorUrl?: string;
}

const client = createSanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2nwcacnk",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "tim",
  useCdn: true,
});
const { urlFor } = createImageHelpers(client);

// Fungsi untuk menentukan tingkat ukuran logo berdasarkan urutan di Sanity atau nama
const getTierClass = (urutan: number | undefined, tipe: string, nama: string) => {
  if (tipe === "media_partner") return "tier-media";

  const n = nama.toLowerCase();
  if (n.includes("eiger")) return "tier-1";
  if (n.includes("oase")) return "tier-2";
  if (n.includes("qris") || n.includes("bank indonesia") || n.includes("sig")) return "tier-3";
  if (n.includes("bahela")) return "tier-5";

  const u = urutan ?? 999;
  if (u === 1) return "tier-1";
  if (u === 2) return "tier-2";
  return "tier-4"; // Semua sisa (Swayasa, Pupuk Kaltim, Pepsodent, Rexona) masuk tier-4
};

export default function SponsorMitra({ mitraData = [], petaVectorUrl = "/images/peta_vector.png" }: SponsorMitraProps) {
  // Pisahkan data dan urutkan berdasarkan 'urutan' dari Sanity
  const supporters = useMemo(() => {
    return mitraData
      .filter((m) => m.tipe !== "media_partner")
      .sort((a, b) => {
        return (a.urutan ?? 999) - (b.urutan ?? 999);
      });

    // Group Rexona and Pepsodent
    const rexona = base.find(s => s.nama.toLowerCase().includes("rexona"));
    const pepsodent = base.find(s => s.nama.toLowerCase().includes("pepsodent"));

    if (rexona && pepsodent) {
      base = base.filter(s => s._id !== rexona._id && s._id !== pepsodent._id);
      base.push({
        _id: "combined-rexona-pepsodent",
        tipe: "sponsor",
        nama: "rexona pepsodent",
        isCombined: true,
        items: [rexona, pepsodent],
        urutan: 999, // Force to bottom (Tier 4)
      } as SanityMitra);
      
      // Re-sort in case the combined item needs to be ordered by urutan (it gets 999 so it defaults to end of tier-4)
      base.sort((a, b) => {
        return (a.urutan ?? 999) - (b.urutan ?? 999);
      });
    }

    return base;
  }, [mitraData]);

  const mediaPartners = useMemo(() => {
    return mitraData
      .filter((m) => m.tipe === "media_partner")
      .sort((a, b) => (a.urutan ?? 999) - (b.urutan ?? 999));
  }, [mitraData]);

  return (
    <section id="sponsor-mitra" className="sponsor-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

        .sponsor-section {
          position: relative;
          width: 100%;
          padding: 6rem 2rem 8.5rem 2rem;
          background: linear-gradient(180deg, #051c34 0%, #0a3660 40%, #0f487e 80%, #031428 100%);
          overflow: hidden;
          z-index: 10;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* Background Vector Map */
        .sponsor-section-bg-vector {
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




        .sponsor-container {
          max-width: 1340px; /* Diperlebar agar kotak lebih leluasa */
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .sponsor-header {
          text-align: center;
          margin-bottom: 4.5rem;
        }
        .sponsor-badge {
          display: inline-block;
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
          margin-bottom: 1.25rem;
          box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.55),
            inset 0 1px 3px rgba(255, 230, 160, 0.4),
            inset 0 -3px 5px rgba(0, 0, 0, 0.9);
        }
        .sponsor-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.3rem, 4.5vw, 3.6rem);
          font-weight: 800;
          margin-bottom: 1.2rem;
          line-height: 1.18;
        }
        .sponsor-title em {
          font-style: italic;
          background: linear-gradient(90deg, #7dd3fc, #38bdf8, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .sponsor-subtitle {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: rgba(255, 255, 255, 0.86);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.68;
        }

        /* Two Boxes Layout */
        .mitra-boxes-wrapper {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2.5rem; /* Jarak antar kotak kiri dan kanan */
          margin-bottom: 6rem;
        }

        .mitra-box-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .mitra-box-title {
          font-size: 1.7rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: 0.02em;
        }

        .mitra-box-inner {
          background: #ffffff;
          border-radius: 24px;
          padding: 2.5rem 1.5rem;
          width: 100%;
          flex-grow: 1;
          min-height: 350px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          align-content: center;
          gap: 1.2rem 1rem; /* Gap diperkecil agar tidak ada yang terdorong ke baris baru */
          box-shadow: 
            0 20px 40px rgba(0, 0, 0, 0.3),
            inset 0 0 0 2px rgba(255, 255, 255, 0.8),
            inset 0 5px 15px rgba(0,0,0,0.05);
          position: relative;
        }

        .mitra-logo-item {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: transform 0.3s ease;
          flex: 0 0 auto;
        }
        
        .mitra-logo-item:hover {
          transform: scale(1.05);
          z-index: 2;
        }

        /* Tier System for exact image matching */
        .mitra-logo-item.tier-1 {
          flex: 0 0 100%; /* Paksa Eigerindo mengambil 1 baris penuh sendiri */
          width: 100%;
        }
        .mitra-logo-item.tier-1 .mitra-logo-img {
          width: 400px;
          height: 160px;
        }

        .mitra-logo-item.tier-2 {
          flex: 0 0 100%; /* Paksa Oase mengambil 1 baris penuh sendiri */
          width: 100%;
        }
        .mitra-logo-item.tier-2 .mitra-logo-img {
          width: 180px;
          height: 75px;
        }

        .mitra-logo-item.tier-3 .mitra-logo-img {
          width: 135px;
          height: 55px;
        }

        .mitra-logo-item.tier-4 .mitra-logo-img {
          width: 100px;
          height: 40px;
        }

        .mitra-logo-item.tier-5 {
          /* Bahela berada sebaris dengan sponsor tier-4 di baris paling bawah */
        }
        .mitra-logo-item.tier-5 .mitra-logo-img {
          width: 60px;
          height: 25px;
        }

        .mitra-logo-item.tier-media .mitra-logo-img {
          width: 150px;
          height: 90px;
        }

        .mitra-logo-img {
          object-fit: contain;
        }

        /* Call to Action Sponsorship */
        .sponsor-cta-box {
          background: linear-gradient(135deg, rgba(56, 189, 248, 0.18) 0%, rgba(14, 76, 132, 0.25) 100%);
          border: 1px solid rgba(56, 189, 248, 0.4);
          border-radius: 28px;
          padding: 3.5rem 3rem;
          text-align: center;
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.35);
        }
        .sponsor-cta-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.8rem, 3.2vw, 2.5rem);
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
        }
        .sponsor-cta-desc {
          color: rgba(255, 255, 255, 0.88);
          font-size: 1.05rem;
          max-width: 720px;
          margin: 0 auto 2.2rem auto;
          line-height: 1.65;
        }
        .sponsor-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: #38bdf8;
          color: #031428;
          font-weight: 700;
          font-size: 1.05rem;
          padding: 0.95rem 2.2rem;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 8px 25px rgba(56, 189, 248, 0.4);
        }
        .sponsor-btn:hover {
          background: #7dd3fc;
          transform: translateY(-3px);
          box-shadow: 0 12px 30px rgba(125, 211, 252, 0.5);
        }

        /* Wave Curve transitioning to KontakFooter (#031428) */
        .sponsor-wave-divider {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 5;
        }
        .sponsor-wave-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 85px;
        }

        @media (max-width: 992px) {
          .mitra-boxes-wrapper {
            grid-template-columns: 1fr;
            gap: 4rem;
          }
        }
        @media (max-width: 640px) {
          .sponsor-section {
            padding: 4.5rem 1rem 6.5rem 1rem;
          }
          .sponsor-cta-box {
            padding: 2.5rem 1.5rem;
          }
          .mitra-box-inner {
            padding: 1.5rem;
            min-height: 200px;
          }
        }
      `}</style>

      {/* Background Vector Map */}
      <div className="sponsor-section-bg-vector" />

      {/* Gelembung-Gelembung dihapus */}

      <div className="sponsor-container">
        {/* Header */}
        <div className="sponsor-header">
          <span className="sponsor-badge">Kolaborasi & Kemitraan</span>
          <h2 className="sponsor-title">
            Mitra Kolaborator & <em>Sponsor Kami</em>
          </h2>

        </div>

        {/* Two Boxes for Logos */}
        <div className="mitra-boxes-wrapper">
          {/* Box 1: Supporters */}
          <div className="mitra-box-col">
            <h3 className="mitra-box-title">Didukung Oleh:</h3>
            <div className="mitra-box-inner">
              {supporters.length > 0 ? (
                supporters.map((item, index) => {
                  const currentTier = getTierClass(item.urutan, item.tipe, item.nama);
                  const prevItem = index > 0 ? supporters[index - 1] : null;
                  const prevTier = prevItem ? getTierClass(prevItem.urutan, prevItem.tipe, prevItem.nama) : null;

                  // Force a line break after tier-3 so tier-4 starts on a new line
                  const shouldBreak = prevTier === "tier-3" && (currentTier === "tier-4" || currentTier === "tier-5");

                  if (item.isCombined && item.items) {
                    return (
                      <React.Fragment key={item._id}>
                        {shouldBreak && <div style={{ flexBasis: "100%", height: 0 }} />}
                        <div className={`mitra-logo-item ${currentTier}`} style={{ flexDirection: "column", gap: "0.8rem" }}>
                          {item.items.map((subItem) => (
                            <a
                              key={subItem._id}
                              href={subItem.url || "#"}
                              target="_blank"
                              rel="noopener noreferrer"
                              title={subItem.nama}
                              style={{ cursor: subItem.url ? "pointer" : "default", pointerEvents: subItem.url ? "auto" : "none", display: "block" }}
                            >
                              <Image
                                src={urlFor(subItem.logo).url()}
                                alt={subItem.nama}
                                width={300}
                                height={150}
                                className="mitra-logo-img"
                                unoptimized
                              />
                            </a>
                          ))}
                        </div>
                      </React.Fragment>
                    );
                  }

                  return (
                    <React.Fragment key={item._id}>
                      {shouldBreak && <div style={{ flexBasis: "100%", height: 0 }} />}
                      <a
                        href={item.url || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mitra-logo-item ${currentTier}`}
                        title={item.nama}
                        style={{ cursor: item.url ? "pointer" : "default", pointerEvents: item.url ? "auto" : "none" }}
                      >
                        <Image
                          src={urlFor(item.logo).url()}
                          alt={item.nama}
                          width={500}
                          height={250}
                          className="mitra-logo-img"
                          unoptimized
                        />
                      </a>
                    </React.Fragment>
                  );
                })
              ) : (
                <p style={{ color: "#94a3b8" }}>Belum ada data mitra.</p>
              )}
            </div>
          </div>

          {/* Box 2: Media Partners */}
          <div className="mitra-box-col">
            <h3 className="mitra-box-title">Dipublikasikan Oleh:</h3>
            <div className="mitra-box-inner media-partner-box">
              {mediaPartners.length > 0 ? (
                mediaPartners.map((item) => (
                  <a
                    key={item._id}
                    href={item.url || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mitra-logo-item ${getTierClass(item.urutan, item.tipe, item.nama)}`}
                    title={item.nama}
                    style={{ cursor: item.url ? "pointer" : "default", pointerEvents: item.url ? "auto" : "none" }}
                  >
                    <Image
                      src={urlFor(item.logo).url()}
                      alt={item.nama}
                      width={300}
                      height={150}
                      className="mitra-logo-img"
                      unoptimized
                    />
                  </a>
                ))
              ) : (
                <p style={{ color: "#94a3b8" }}>Belum ada data media partner.</p>
              )}
            </div>
          </div>
        </div>


      </div>

      {/* Wave Curve transitioning smoothly to KontakFooter (#030c17) */}
      <div className="sponsor-wave-divider">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path
            d="M0,50 C360,110 1080,20 1440,60 L1440,120 L0,120 Z"
            fill="#030c17"
          />
        </svg>
      </div>
    </section>
  );
}
