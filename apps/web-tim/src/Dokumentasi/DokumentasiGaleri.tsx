"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface DocItem {
  id: string;
  title: string;
  category: "Saintek" | "Soshum" | "Agro" | "Medika" | "Desa";
  date: string;
  imgSrc: string;
  desc: string;
}

const documentationData: DocItem[] = [
  {
    id: "doc-1",
    title: "Survei Peta Udara & Spasial Batas Desa Morotai Selatan",
    category: "Saintek",
    date: "12 Juli 2026",
    imgSrc: "/KilauCita.png",
    desc: "Tim Klaster Saintek melakukan pemetaan drone bersama perangkat desa untuk menyusun database spasial akurat.",
  },
  {
    id: "doc-2",
    title: "Pelatihan Content Creator & Branding Ekowisata Pulau Dodola",
    category: "Soshum",
    date: "15 Juli 2026",
    imgSrc: "/KilauCita.png",
    desc: "Lokakarya digital marketing bersama pemuda karang taruna untuk memperluas jangkauan promosi wisata bahari.",
  },
  {
    id: "doc-3",
    title: "Praktik Pengolahan & Pengemasan Vakum Abon Ikan Tuna",
    category: "Agro",
    date: "18 Juli 2026",
    imgSrc: "/KilauCita.png",
    desc: "Pendampingan ibu-ibu PKK dalam diversifikasi produk olahan laut berstandar higienis dan siap edar.",
  },
  {
    id: "doc-4",
    title: "Pemeriksaan Kesehatan Gratis & Penyuluhan Gizi Balita Pesisir",
    category: "Medika",
    date: "20 Juli 2026",
    imgSrc: "/KilauCita.png",
    desc: "Aksi tanggap kesehatan maritim oleh tim medis dan keperawatan guna menekan angka stunting anak pesisir.",
  },
  {
    id: "doc-5",
    title: "Gotong Royong Bersih Pantai & Pemilahan Sampah Plastik",
    category: "Desa",
    date: "22 Juli 2026",
    imgSrc: "/KilauCita.png",
    desc: "Kolaborasi akbar seluruh warga desa, aparat lokal, dan mahasiswa KKN membersihkan pesisir pantai Morotai.",
  },
  {
    id: "doc-6",
    title: "Sosialisasi Pembukuan Digital & QRIS bagi Pelaku UMKM",
    category: "Soshum",
    date: "25 Juli 2026",
    imgSrc: "/KilauCita.png",
    desc: "Pengenalan transaksi non-tunai dan aplikasi kasir pintar bagi pedagang pasar wisata dan warung pesisir.",
  },
];

export default function DokumentasiGaleri() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");

  const filteredDocs =
    activeCategory === "Semua"
      ? documentationData
      : documentationData.filter((item) => item.category === activeCategory);

  return (
    <section className="dok-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap');

        .dok-section {
          position: relative;
          width: 100%;
          min-height: 100vh;
          padding: 8.5rem 2rem 8rem 2rem;
          background: linear-gradient(180deg, #051c34 0%, #0a3a6b 40%, #1665a8 80%, #031428 100%);
          color: #ffffff;
          overflow: hidden;
          z-index: 10;
        }

        .dok-container {
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .dok-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .dok-badge {
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
          margin-bottom: 1.2rem;
          backdrop-filter: blur(8px);
        }
        .dok-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.4rem, 4.8vw, 3.8rem);
          font-weight: 800;
          margin-bottom: 1.2rem;
          line-height: 1.15;
        }
        .dok-title em {
          font-style: italic;
          background: linear-gradient(90deg, #7dd3fc, #38bdf8, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .dok-subtitle {
          font-size: clamp(1.05rem, 1.8vw, 1.2rem);
          color: rgba(255, 255, 255, 0.86);
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.68;
        }

        /* Tabs */
        .dok-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 4rem;
        }
        .dok-tab-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.85);
          padding: 0.65rem 1.6rem;
          border-radius: 9999px;
          font-size: 0.96rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .dok-tab-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          transform: translateY(-2px);
        }
        .dok-tab-btn.active {
          background: #38bdf8;
          color: #051426;
          border-color: #38bdf8;
          box-shadow: 0 8px 25px rgba(56, 189, 248, 0.4);
          font-weight: 700;
        }

        /* Gallery Grid */
        .dok-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }
        .dok-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          overflow: hidden;
          backdrop-filter: blur(16px);
          transition: all 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
          display: flex;
          flex-direction: column;
        }
        .dok-card:hover {
          transform: translateY(-8px);
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(56, 189, 248, 0.5);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.45);
        }
        .dok-img-wrapper {
          position: relative;
          width: 100%;
          height: 240px;
          overflow: hidden;
          background: #092642;
        }
        .dok-img-wrapper img {
          transition: transform 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
        }
        .dok-card:hover .dok-img-wrapper img {
          transform: scale(1.08);
        }

        .dok-card-body {
          padding: 1.8rem 1.6rem;
          display: flex;
          flex-direction: column;
          gap: 0.9rem;
          flex-grow: 1;
        }
        .dok-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.82rem;
          font-weight: 700;
        }
        .dok-cat-badge {
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .cat-Saintek { background: rgba(56, 189, 248, 0.22); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.45); }
        .cat-Soshum { background: rgba(96, 165, 250, 0.22); color: #60a5fa; border: 1px solid rgba(96, 165, 250, 0.45); }
        .cat-Agro { background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); }
        .cat-Medika { background: rgba(125, 211, 252, 0.22); color: #bae6fd; border: 1px solid rgba(125, 211, 252, 0.45); }
        .cat-Desa { background: rgba(186, 230, 253, 0.22); color: #e0f2fe; border: 1px solid rgba(186, 230, 253, 0.45); }

        .dok-date {
          color: rgba(255, 255, 255, 0.68);
        }

        .dok-card-title {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.35;
        }
        .dok-card-desc {
          font-size: 0.94rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.6;
        }

        /* Back to home bar */
        .dok-back-bar {
          margin-top: 5rem;
          text-align: center;
        }
        .dok-back-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.25);
          color: #ffffff;
          font-weight: 700;
          padding: 0.85rem 2rem;
          border-radius: 9999px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .dok-back-btn:hover {
          background: #38bdf8;
          color: #051426;
          border-color: #38bdf8;
          transform: translateY(-3px);
        }

        @media (max-width: 1024px) {
          .dok-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 640px) {
          .dok-section {
            padding: 6.5rem 1rem 6rem 1rem;
          }
          .dok-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="dok-container">
        {/* Header */}
        <div className="dok-header">
          <span className="dok-badge">Arsip & Jejak Pengabdian</span>
          <h1 className="dok-title">
            Galeri Dokumentasi <em>Arungi Morotai</em>
          </h1>
          <p className="dok-subtitle">
            Kumpulan potret kegiatan, inovasi lapangan, serta momen kebersamaan tim KKN-PPM UGM bersama masyarakat di Pulau Morotai.
          </p>
        </div>

        {/* Tabs */}
        <div className="dok-tabs">
          {["Semua", "Saintek", "Soshum", "Agro", "Medika", "Desa"].map((cat) => (
            <button
              key={cat}
              className={`dok-tab-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat === "Semua" ? "✨ Semua Foto" : cat === "Desa" ? "🏘️ Kegiatan Warga" : `🔬 Klaster ${cat}`}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="dok-grid">
          {filteredDocs.map((item) => (
            <div key={item.id} className="dok-card">
              <div className="dok-img-wrapper">
                <Image
                  src={item.imgSrc}
                  alt={item.title}
                  fill
                  quality={85}
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="dok-card-body">
                <div className="dok-meta">
                  <span className={`dok-cat-badge cat-${item.category}`}>
                    {item.category === "Desa" ? "Warga Desa" : `Klaster ${item.category}`}
                  </span>
                  <span className="dok-date">📅 {item.date}</span>
                </div>
                <h3 className="dok-card-title">{item.title}</h3>
                <p className="dok-card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="dok-back-bar">
          <Link href="/" className="dok-back-btn">
            ← Kembali ke Halaman Utama
          </Link>
        </div>
      </div>
    </section>
  );
}
