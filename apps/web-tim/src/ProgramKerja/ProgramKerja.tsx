"use client";

import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProgramCard {
  id: string;
  title: string;
  klaster: "Saintek" | "Soshum" | "Agro" | "Medika";
  desc: string;
  status: "selesai" | "berjalan" | "persiapan";
  progress: number;
  output: string;
}

const programsData: ProgramCard[] = [
  {
    id: "p1",
    title: "Sistem Informasi Spasial & Pemetaan Batas Wilayah Desa (GIS)",
    klaster: "Saintek",
    desc: "Pembuatan peta digital batas desa, titik koordinat infrastruktur, dan sebaran potensi sumber daya alam menggunakan citra satelit dan drone untuk kemandirian tata ruang desa.",
    status: "berjalan",
    progress: 70,
    output: "Peta Digital Batas Desa & Web Spasial",
  },
  {
    id: "p2",
    title: "Instalasi Penerangan Tenaga Surya & Filtrasi Air Bersih Pesisir",
    klaster: "Saintek",
    desc: "Penerapan teknologi tepat guna panel surya untuk penerangan dermaga desa dan instalasi alat filter air sederhana untuk ketersediaan air minum bersih bagi warga.",
    status: "persiapan",
    progress: 35,
    output: "5 Titik PJU Surya & Alat Filtrasi Air",
  },
  {
    id: "p3",
    title: "Revitalisasi UMKM Kelautan & Pendampingan Sertifikasi Halal",
    klaster: "Soshum",
    desc: "Pendampingan pelaku UMKM olahan hasil laut mulai dari inovasi pengemasan, digital marketing, hingga fasilitasi penerbitan Nomor Induk Berusaha (NIB) dan sertifikasi Halal.",
    status: "selesai",
    progress: 100,
    output: "12 UMKM Tersertifikasi & Go Digital",
  },
  {
    id: "p4",
    title: "Sekolah Literasi Bahari & Pelestarian Sejarah Lokal",
    klaster: "Soshum",
    desc: "Pemberdayaan anak-anak pesisir melalui kelas literasi yang berfokus pada sejarah maritim Morotai dan pelestarian bahasa daerah yang diintegrasikan dalam kurikulum non-formal.",
    status: "berjalan",
    progress: 60,
    output: "Modul Literasi & Pameran Karya Anak",
  },
  {
    id: "p5",
    title: "Hilirisasi & Diversifikasi Pengolahan Hasil Tangkapan Tuna",
    klaster: "Agro",
    desc: "Pelatihan inovasi pengolahan ikan tuna dan cakalang menjadi abon bermutu tinggi, bakso ikan berprotein, serta pengemasan vakum higienis berstandar P-IRT untuk pasar nasional.",
    status: "berjalan",
    progress: 65,
    output: "Produk Olahan Kemasan Vakum Ber-PIRT",
  },
  {
    id: "p6",
    title: "Pemanfaatan Limbah Sabut Kelapa & Cangkang Jadi Briket Organik",
    klaster: "Agro",
    desc: "Edukasi pengolahan limbah sabut dan tempurung kelapa melimpah di pesisir menjadi briket arang bernilai ekonomis dan pupuk organik cair (POC) untuk pertanian warga.",
    status: "persiapan",
    progress: 30,
    output: "Alat Cetak Briket & Sentra Pupuk Cair",
  },
  {
    id: "p7",
    title: "Skrining Kesehatan Maritim & Pencegahan Stunting Anak Pesisir",
    klaster: "Medika",
    desc: "Pemeriksaan kesehatan gratis berkala bagi nelayan dan lansia, sosialisasi gizi seimbang berbahan baku ikan lokal untuk ibu hamil, serta pemantauan tumbuh kembang balita.",
    status: "selesai",
    progress: 100,
    output: "Rapor Kesehatan Warga & Kader Gizi Desa",
  },
  {
    id: "p8",
    title: "Edukasi Sanitasi Lingkungan & Manajemen Bank Sampah Pesisir",
    klaster: "Medika",
    desc: "Kampanye kebersihan pantai pesisir, pembentukan kelembagaan bank sampah pemilahan plastik dan organik, serta instalasi tempat sampah terpadu di area fasilitas umum.",
    status: "berjalan",
    progress: 60,
    output: "Bank Sampah Aktif & 10 Tempat Sampah Terpadu",
  },
];

interface ProgramKerjaProps {
  petaVectorUrl?: string;
}

export default function ProgramKerja({ petaVectorUrl = "/images/peta_vector.png" }: ProgramKerjaProps) {
  const [activeKlaster, setActiveKlaster] = useState<string>("Semua");
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  const filteredPrograms =
    activeKlaster === "Semua"
      ? programsData
      : programsData.filter((p) => p.klaster === activeKlaster);

  return (
    <section id="program-kerja" className="proker-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,600;1,700&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,700&display=swap');

        .proker-section {
          position: relative;
          width: 100%;
          padding: 6rem 2rem 8.5rem 2rem;
          background: linear-gradient(180deg, #062544 0%, #09345e 50%, #0b1423 100%);
          font-family: 'Plus Jakarta Sans', sans-serif;
          overflow: hidden;
          z-index: 10;
          color: #ffffff;
        }

        /* Background Vector Map */
        .proker-section-bg-vector {
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
          mix-blend-mode: soft-light;
          opacity: 0.35; /* Slightly less opaque to keep cards readable */
          filter: invert(1) contrast(1.4) brightness(1.15);
          mask-image: linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%);
        }

        /* Animasi Gelembung Renik Samudra */
        .proker-bubbles-wrapper {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          overflow: hidden;
        }
        .ocean-bubble {
          position: absolute;
          bottom: -40px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 35%, rgba(255, 255, 255, 0.9), rgba(125, 211, 252, 0.45) 50%, rgba(14, 76, 132, 0.15) 85%);
          border: 1px solid rgba(186, 230, 253, 0.65);
          box-shadow: 
            inset 0 0 3px rgba(255, 255, 255, 0.85),
            0 0 6px rgba(56, 189, 248, 0.35);
          animation: floatUp var(--bubble-dur) linear infinite;
          animation-delay: var(--bubble-del);
          left: var(--bubble-left);
          width: var(--bubble-size);
          height: var(--bubble-size);
          opacity: 0;
          will-change: transform, opacity;
        }

        @keyframes floatUp {
          0% {
            transform: translate3d(0, 0, 0) scale(0.7);
            opacity: 0;
          }
          15% {
            opacity: 0.75;
          }
          85% {
            opacity: 0.75;
          }
          100% {
            transform: translate3d(0, -980px, 0) scale(1.1);
            opacity: 0;
          }
        }


        .proker-container {
          max-width: 1240px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Header */
        .proker-header {
          text-align: center;
          margin-bottom: 4rem;
        }
        .proker-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
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
        .proker-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          margin-bottom: 1.2rem;
          line-height: 1.2;
          color: #ffffff;
        }
        .proker-title em {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          color: #7dd3fc;
        }
        .proker-subtitle {
          font-size: clamp(0.9rem, 1.5vw, 1.05rem);
          color: #94a3b8;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Filter Pills */
        .proker-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 3rem; /* adjusted for carousel */
        }
        .proker-tab-btn {
          background: #141e30;
          border: 1px solid #2a3a50;
          color: #94a3b8;
          padding: 0.6rem 1.4rem;
          border-radius: 9999px;
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .proker-tab-btn:hover {
          background: #1c2a40;
          color: #ffffff;
          border-color: #3b4d6b;
        }
        .proker-tab-btn.active {
          background: linear-gradient(135deg, #e6a03c, #fcd881);
          color: #1a1005;
          border-color: #fcd881;
          box-shadow: 0 4px 15px rgba(230, 160, 60, 0.3);
          font-weight: 700;
        }

        /* Horizontal Carousel Layout */
        .proker-carousel-container {
          position: relative;
          width: 100%;
          display: flex;
          align-items: center;
        }

        .carousel-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(11, 20, 35, 0.7);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          width: 55px;
          height: 55px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          backdrop-filter: blur(5px);
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
        }
        .carousel-btn:hover {
          background: rgba(255, 255, 255, 0.15);
          border-color: #fcd881;
          color: #fcd881;
        }
        .carousel-btn.left {
          left: -25px;
        }
        .carousel-btn.right {
          right: -25px;
        }

        .proker-carousel {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          gap: 2.5rem;
          padding: 1.5rem 0 2rem 0;
          width: 100%;
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .proker-carousel::-webkit-scrollbar {
          display: none; /* Chrome, Safari and Opera */
        }

        .proker-card {
          flex: 0 0 calc(50% - 1.25rem); /* 2 cards side by side */
          scroll-snap-align: center;
          position: relative;
          background: #111a28;
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 20px;
          padding: 2.5rem 2.5rem 2rem 2.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
          transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }
        .proker-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.15);
        }

        .proker-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 0.75rem;
          margin-bottom: 0.5rem;
          position: relative;
          z-index: 2;
        }
        
        .klaster-tag {
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          padding: 0.4rem 1rem;
          border-radius: 9999px;
        }
        .klaster-Saintek { background: #132a45; color: #7dd3fc; border: 1px solid #1c3d66; }
        .klaster-Soshum { background: #332514; color: #fcd34d; border: 1px solid #4d381e; }
        .klaster-Agro { background: #113022; color: #6ee7b7; border: 1px solid #184732; }
        .klaster-Medika { background: #301724; color: #f9a8d4; border: 1px solid #4a2337; }

        .status-badge {
          font-size: 0.75rem;
          font-weight: 600;
          padding: 0.4rem 1rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #1e293b;
          color: #cbd5e1;
          border: 1px solid #334155;
        }
        .status-selesai { background: #064e3b; color: #34d399; border-color: #065f46; }

        .proker-card-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #f8fafc;
          line-height: 1.4;
          position: relative;
          z-index: 2;
        }
        .proker-card-desc {
          font-size: 0.95rem;
          color: #94a3b8;
          line-height: 1.6;
          position: relative;
          z-index: 2;
        }

        /* Progress & Output Box */
        .proker-progress-container {
          margin-top: 1rem;
        }
        .progress-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.8rem;
          color: #cbd5e1;
          font-weight: 600;
          margin-bottom: 0.6rem;
        }
        .progress-bar-bg {
          width: 100%;
          height: 6px;
          background: #1e293b;
          border-radius: 9999px;
          overflow: hidden;
          position: relative;
        }
        .progress-bar-fill {
          height: 100%;
          border-radius: 9999px;
          transition: width 1s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }
        /* Bright dot at the end of progress bar */
        .progress-bar-fill::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 12px;
          height: 12px;
          background: #ffffff;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(255,255,255,0.8);
        }

        .output-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.85rem;
          color: #cbd5e1;
          font-weight: 500;
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        /* Dynamic colors based on klaster for progress */
        .progress-Saintek { background: linear-gradient(90deg, #0284c7, #38bdf8); box-shadow: 0 0 15px rgba(56,189,248,0.5); }
        .progress-Soshum { background: linear-gradient(90deg, #b45309, #fbbf24); box-shadow: 0 0 15px rgba(251,191,36,0.5); }
        .progress-Agro { background: linear-gradient(90deg, #059669, #34d399); box-shadow: 0 0 15px rgba(52,211,153,0.5); }
        .progress-Medika { background: linear-gradient(90deg, #be185d, #f472b6); box-shadow: 0 0 15px rgba(244,114,182,0.5); }

        /* Wave Curve transitioning to next section */
        .proker-wave-divider {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 5;
        }
        .proker-wave-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 85px;
        }

        @media (max-width: 992px) {
          .proker-card {
            flex: 0 0 calc(100% - 0rem); /* 1 card side by side on mobile */
          }
          .carousel-btn.left { left: 10px; }
          .carousel-btn.right { right: 10px; }
        }
        @media (max-width: 640px) {
          .proker-section {
            padding: 4.5rem 1rem 6.5rem 1rem;
          }
          .proker-card {
            padding: 2rem 1.5rem 1.5rem 1.5rem;
          }
          .carousel-btn {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      {/* Background Vector Map bercampur dengan gradasi biru */}
      <div className="proker-section-bg-vector" />

      {/* Gelembung-Gelembung Renik Udara Laut Pasifik */}
      <div className="proker-bubbles-wrapper">
        <div className="ocean-bubble" style={{ "--bubble-left": "5%", "--bubble-size": "8px", "--bubble-dur": "16s", "--bubble-del": "0s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "12%", "--bubble-size": "14px", "--bubble-dur": "19s", "--bubble-del": "2s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "18%", "--bubble-size": "6px", "--bubble-dur": "14s", "--bubble-del": "5s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "24%", "--bubble-size": "16px", "--bubble-dur": "22s", "--bubble-del": "1s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "31%", "--bubble-size": "10px", "--bubble-dur": "17s", "--bubble-del": "7s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "38%", "--bubble-size": "18px", "--bubble-dur": "24s", "--bubble-del": "3s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "45%", "--bubble-size": "7px", "--bubble-dur": "15s", "--bubble-del": "9s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "52%", "--bubble-size": "15px", "--bubble-dur": "20s", "--bubble-del": "4s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "59%", "--bubble-size": "9px", "--bubble-dur": "16s", "--bubble-del": "11s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "66%", "--bubble-size": "17px", "--bubble-dur": "21s", "--bubble-del": "6s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "73%", "--bubble-size": "11px", "--bubble-dur": "18s", "--bubble-del": "0.5s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "80%", "--bubble-size": "14px", "--bubble-dur": "23s", "--bubble-del": "8s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "87%", "--bubble-size": "8px", "--bubble-dur": "15s", "--bubble-del": "12s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "93%", "--bubble-size": "16px", "--bubble-dur": "19s", "--bubble-del": "3.5s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "97%", "--bubble-size": "10px", "--bubble-dur": "17s", "--bubble-del": "10s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "28%", "--bubble-size": "12px", "--bubble-dur": "18s", "--bubble-del": "14s" } as React.CSSProperties} />
        <div className="ocean-bubble" style={{ "--bubble-left": "62%", "--bubble-size": "7px", "--bubble-dur": "15s", "--bubble-del": "15s" } as React.CSSProperties} />
      </div>

      <div className="proker-container">
        {/* Header */}
        <div className="proker-header">
          <span className="proker-badge">Inovasi & Pengabdian Nyata</span>
          <h2 className="proker-title">
            Program Kerja Unggulan <em>Arungi Morotai</em>
          </h2>
          <p className="proker-subtitle">
            Rangkaian program kolaboratif lintas klaster keilmuan yang dirancang untuk menjawab tantangan dan memaksimalkan potensi unggulan desa di Pulau Morotai.
          </p>
        </div>

        {/* Tabs */}
        <div className="proker-tabs">
          {["Semua", "Saintek", "Soshum", "Agro", "Medika"].map((tab) => (
            <button
              key={tab}
              className={`proker-tab-btn ${activeKlaster === tab ? "active" : ""}`}
              onClick={() => setActiveKlaster(tab)}
            >
              <span>{tab === "Semua" ? "Semua Program" : `Klaster ${tab}`}</span>
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="proker-carousel-container">
          <button className="carousel-btn left" onClick={scrollLeft} aria-label="Previous">
            <ChevronLeft size={28} />
          </button>

          <div className="proker-carousel" ref={carouselRef}>
            {filteredPrograms.map((prog) => {
              return (
                <div key={prog.id} className="proker-card">
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div className="proker-card-top">
                      <span className={`klaster-tag klaster-${prog.klaster}`}>
                        KLASTER {prog.klaster.toUpperCase()}
                      </span>
                      <span className={`status-badge ${prog.status === 'selesai' ? 'status-selesai' : ''}`}>
                        {prog.status === "selesai"
                          ? "Selesai"
                          : prog.status === "berjalan"
                          ? "Dalam Pelaksanaan"
                          : "Persiapan"}
                      </span>
                    </div>
                    <h3 className="proker-card-title">{prog.title}</h3>
                    <p className="proker-card-desc">{prog.desc}</p>
                  </div>

                  <div className="proker-progress-container">
                    <div className="progress-header">
                      <span>Capaian / Progres Pelaksanaan</span>
                      <span style={{ fontWeight: 700 }}>{prog.progress}%</span>
                    </div>
                    <div className="progress-bar-bg">
                      <div
                        className={`progress-bar-fill progress-${prog.klaster}`}
                        style={{ width: `${prog.progress}%` }}
                      />
                    </div>
                    <div className="output-row">
                      <span><strong style={{color: "#fff"}}>Luaran Target:</strong> {prog.output}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="carousel-btn right" onClick={scrollRight} aria-label="Next">
            <ChevronRight size={28} />
          </button>
        </div>
      </div>

      {/* Wave Curve transitioning smoothly to SponsorMitra (#051c34) */}
      <div className="proker-wave-divider">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path 
            d="M0,70 C380,10 980,120 1440,50 L1440,120 L0,120 Z" 
            fill="#051c34"
          />
        </svg>
      </div>
    </section>
  );
}
