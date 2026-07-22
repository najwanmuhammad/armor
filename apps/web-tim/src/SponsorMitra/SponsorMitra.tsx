"use client";

import React from "react";
import Image from "next/image";

interface PartnerItem {
  name: string;
  category: "Mitra Utama" | "Sponsor & CSR" | "Media Partner" | "Pemerintah";
  desc: string;
  badgeColor: string;
}

const partnerData: PartnerItem[] = [
  {
    name: "Universitas Gadjah Mada (UGM)",
    category: "Mitra Utama",
    desc: "Direktorat Pengabdian kepada Masyarakat (DPkM) UGM sebagai institusi penaung program KKN-PPM.",
    badgeColor: "#38bdf8",
  },
  {
    name: "Pemerintah Kabupaten Pulau Morotai",
    category: "Pemerintah",
    desc: "Mitra strategis daerah dalam fasilitasi perizinan, koordinasi desa, serta integrasi rencana pembangunan daerah.",
    badgeColor: "#60a5fa",
  },
  {
    name: "Kementerian Desa, Pembangunan Daerah Tertinggal, dan Transmigrasi RI",
    category: "Pemerintah",
    desc: "Kolaborator nasional dalam penguatan tata kelola pemerintahan desa dan pengembangan BUMDes.",
    badgeColor: "#7dd3fc",
  },
  {
    name: "Bank BNI & Bank Mandiri (Program CSR)",
    category: "Sponsor & CSR",
    desc: "Dukungan pendanaan fasilitasi teknologi tepat guna, penerangan desa, dan digitalisasi UMKM pesisir.",
    badgeColor: "#38bdf8",
  },
  {
    name: "PT PLN (Persero) Wilayah Maluku & Maluku Utara",
    category: "Sponsor & CSR",
    desc: "Dukungan kelistrikan desa dan edukasi pemanfaatan energi ramah lingkungan bagi masyarakat pesisir.",
    badgeColor: "#60a5fa",
  },
  {
    name: "Kagama Maluku Utara & Kagama Morotai",
    category: "Mitra Utama",
    desc: "Jaringan alumni Keluarga Alumni Universitas Gadjah Mada yang memberikan pendampingan lokal dan logistik lapangan.",
    badgeColor: "#7dd3fc",
  },
  {
    name: "Malut Post & Morotai News",
    category: "Media Partner",
    desc: "Mitra publikasi media daerah dalam peliputan kegiatan pengabdian masyarakat dan promosi ekowisata desa.",
    badgeColor: "#38bdf8",
  },
  {
    name: "GNFI (Good News From Indonesia) & IDN Times",
    category: "Media Partner",
    desc: "Mitra media nasional penyuara kisah inspiratif pemuda mengabdi di beranda terdepan pasifik Nusantara.",
    badgeColor: "#60a5fa",
  },
];

export default function SponsorMitra() {
  return (
    <section id="sponsor-mitra" className="sponsor-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap');

        .sponsor-section {
          position: relative;
          width: 100%;
          padding: 6rem 2rem 8.5rem 2rem;
          background: linear-gradient(180deg, #051c34 0%, #0a3660 40%, #0f487e 80%, #031428 100%);
          overflow: hidden;
          z-index: 10;
          color: #ffffff;
        }

        .sponsor-container {
          max-width: 1240px;
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
          background: rgba(56, 189, 248, 0.18);
          color: #38bdf8;
          border: 1px solid rgba(56, 189, 248, 0.4);
          padding: 0.45rem 1.3rem;
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.25rem;
          backdrop-filter: blur(8px);
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

        /* Partners Grid */
        .sponsor-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.6rem;
          margin-bottom: 5rem;
        }
        .partner-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 22px;
          padding: 2rem 1.6rem;
          backdrop-filter: blur(14px);
          transition: all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.2rem;
        }
        .partner-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(56, 189, 248, 0.5);
          box-shadow: 0 16px 35px rgba(0, 0, 0, 0.4);
        }

        .partner-category-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.32rem 0.85rem;
          border-radius: 9999px;
          width: fit-content;
        }
        .partner-name {
          font-size: 1.15rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
        }
        .partner-desc {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.58;
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

        @media (max-width: 1024px) {
          .sponsor-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .sponsor-section {
            padding: 4.5rem 1rem 6.5rem 1rem;
          }
          .sponsor-grid {
            grid-template-columns: 1fr;
          }
          .sponsor-cta-box {
            padding: 2.5rem 1.5rem;
          }
        }
      `}</style>

      <div className="sponsor-container">
        {/* Header */}
        <div className="sponsor-header">
          <span className="sponsor-badge">Kolaborasi & Kemitraan</span>
          <h2 className="sponsor-title">
            Mitra Kolaborator & <em>Sponsor Kami</em>
          </h2>
          <p className="sponsor-subtitle">
            Dukungan berharga dari institusi pendidikan, pemerintahan, dunia usaha, serta media partner dalam mewujudkan program KKN-PPM UGM Arungi Morotai 2026.
          </p>
        </div>

        {/* Grid */}
        <div className="sponsor-grid">
          {partnerData.map((item, idx) => (
            <div key={idx} className="partner-card">
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <span
                  className="partner-category-tag"
                  style={{
                    background: `${item.badgeColor}25`,
                    color: item.badgeColor,
                    border: `1px solid ${item.badgeColor}50`,
                  }}
                >
                  {item.category}
                </span>
                <h3 className="partner-name">{item.name}</h3>
              </div>
              <p className="partner-desc">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="sponsor-cta-box">
          <h3 className="sponsor-cta-title">Tertarik Bermitra & Berkolaborasi?</h3>
          <p className="sponsor-cta-desc">
            Kami membuka peluang kerja sama seluas-luasnya bagi perusahaan, lembaga, maupun komunitas yang ingin turut berkontribusi nyata dalam pembangunan masyarakat di Pulau Morotai.
          </p>
          <a href="#kontak" className="sponsor-btn">
            Hubungi Tim Kemitraan Kami 🤝
          </a>
        </div>
      </div>

      {/* Wave Curve transitioning smoothly to KontakFooter (#031428) */}
      <div className="sponsor-wave-divider">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path 
            d="M0,50 C360,110 1080,20 1440,60 L1440,120 L0,120 Z" 
            fill="#031428"
          />
        </svg>
      </div>
    </section>
  );
}
