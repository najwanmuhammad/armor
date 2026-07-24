"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

interface KontakFooterProps {
  petaVectorUrl?: string;
}

export default function KontakFooter({ petaVectorUrl = "/images/peta_vector.png" }: KontakFooterProps) {
  return (
    <footer id="kontak" className="kontak-footer-section" style={{ "--bg-url": `url('${petaVectorUrl}')` } as React.CSSProperties}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap');

        .kontak-footer-section {
          position: relative;
          width: 100%;
          background: #030c17;
          color: #ffffff;
          padding: 3.5rem 2rem 1.5rem 2rem;
          z-index: 10;
          overflow: hidden;
        }

        .kf-bg-vector {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image: var(--bg-url);
          background-size: cover;
          background-position: center bottom;
          background-repeat: no-repeat;
          opacity: 0.08;
          mask-image: linear-gradient(180deg, transparent 0%, black 20%, black 100%);
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, black 20%, black 100%);
        }

        .kf-container {
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Top Grid */
        .kf-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.8fr 1.2fr;
          gap: 2.5rem;
          margin-bottom: 2.5rem;
        }

        /* Brand Column */
        .kf-brand {
          display: flex;
          flex-direction: column;
          gap: 1.4rem;
        }
        .kf-logo-wrapper {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .kf-brand-title {
          font-family: 'Playfair Display', serif;
          font-size: 1.8rem;
          font-weight: 800;
          color: #ffffff;
        }
        .kf-brand-desc {
          color: rgba(255, 255, 255, 0.78);
          font-size: 0.96rem;
          line-height: 1.68;
          max-width: 440px;
        }

        /* Nav Links Column */
        .kf-col-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #38bdf8;
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }
        .kf-nav-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .kf-nav-list li a {
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
          font-size: 0.96rem;
          transition: all 0.2s ease;
          display: inline-block;
        }
        .kf-nav-list li a:hover {
          color: #38bdf8;
          transform: translateX(4px);
        }

        /* Contact Info Column */
        .kf-contact-box {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .kf-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.9rem;
          color: rgba(255, 255, 255, 0.85);
          font-size: 0.96rem;
          line-height: 1.6;
        }
        .kf-contact-icon {
          font-size: 1.35rem;
          color: #38bdf8;
          flex-shrink: 0;
          margin-top: 2px;
        }

        /* Social Media Row */
        .kf-socials {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          margin-top: 0.5rem;
        }
        .kf-social-btn {
          width: 42px;
          height: 42px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.18);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          font-size: 1.25rem;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .kf-social-btn:hover {
          background: #38bdf8;
          color: #030c17;
          border-color: #38bdf8;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(56, 189, 248, 0.4);
        }

        /* Bottom Copyright */
        .kf-bottom {
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 1.5rem;
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.6);
        }

        @media (max-width: 992px) {
          .kf-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
          }
        }
        @media (max-width: 640px) {
          .kontak-footer-section {
            padding: 4.5rem 1.5rem 2.5rem 1.5rem;
          }
          .kf-bottom {
            flex-direction: column;
            text-align: center;
          }
        }
      `}</style>

      {/* Background Vector Map */}
      <div className="kf-bg-vector" />

      <div className="kf-container">
        <div className="kf-grid">
          {/* Col 1: Brand & Desc */}
          <div className="kf-brand">
            <div className="kf-logo-wrapper">
              <Image
                src="/logo armor.png"
                alt="Logo Arungi Morotai"
                width={56}
                height={56}
                style={{ objectFit: "contain" }}
              />
              <span className="kf-brand-title">Arungi Morotai</span>
            </div>
            <p className="kf-brand-desc">
              Tim Kuliah Kerja Nyata Pembelajaran Pemberdayaan Masyarakat (KKN-PPM) Universitas Gadjah Mada 2026. Mengarungi cerita, membangun kemandirian, dan melestarikan pesona Pulau Morotai.
            </p>
            <div className="kf-socials">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="kf-social-btn" title="Instagram">
                📸
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="kf-social-btn" title="TikTok">
                🎵
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="kf-social-btn" title="YouTube">
                ▶️
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="kf-social-btn" title="LinkedIn">
                💼
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="kf-col-title">Navigasi Utama</h4>
            <ul className="kf-nav-list">
              <li><Link href="/#beranda">Beranda</Link></li>
              <li><Link href="/#tentang-kami">Tentang Kami</Link></li>
              <li><Link href="/peta">Peta Lokasi</Link></li>
              <li><Link href="/#tema">Tema KKN</Link></li>
              <li><Link href="/#lokasi">Profil Desa</Link></li>
              <li><Link href="/#program-kerja">Program Kerja</Link></li>
              <li><Link href="/#sponsor-mitra">Sponsor & Mitra</Link></li>
              <li><Link href="/#galeri">Galeri</Link></li>
            </ul>
          </div>

          {/* Col 3: Contact Info */}
          <div>
            <h4 className="kf-col-title">Kontak & Sekretariat</h4>
            <div className="kf-contact-box">
              <div className="kf-contact-item">
                <span className="kf-contact-icon">📍</span>
                <span>
                  <strong>Sekretariat KKN-PPM UGM:</strong><br />
                  Direktorat Pengabdian kepada Masyarakat (DPkM) UGM, Bulaksumur, Yogyakarta 55281
                </span>
              </div>
              <div className="kf-contact-item">
                <span className="kf-contact-icon">✉️</span>
                <span>
                  <strong>Email Resmi:</strong><br />
                  kemitraan@arungimorotai.id / kkn.morotai@ugm.ac.id
                </span>
              </div>
              <div className="kf-contact-item">
                <span className="kf-contact-icon">📱</span>
                <span>
                  <strong>WhatsApp / Narahubung:</strong><br />
                  +62 812-3456-7890 (Koordinator Mahasiswa)
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="kf-bottom">
          <span>© 2026 Tim KKN-PPM UGM Arungi Morotai. All Rights Reserved.</span>
          <span>Dibangun dengan ❤️ untuk masyarakat Pulau Morotai, Maluku Utara.</span>
        </div>
      </div>
    </footer>
  );
}
