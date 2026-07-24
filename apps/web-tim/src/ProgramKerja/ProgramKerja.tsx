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
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&display=swap');

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
          transform: translateZ(0);
          will-change: transform;
          opacity: 0.15;
          mask-image: linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%);
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, black 15%, black 85%, transparent 100%);
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
          margin-bottom: 3.5rem;
        }
        
        /* Premium Badge */
        .proker-badge {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          background: linear-gradient(135deg, #18283b 0%, #0d1726 100%);
          border: 1px solid rgba(230, 184, 106, 0.4);
          color: #e6b86a;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          box-shadow: 0 4px 15px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.05);
        }

        .proker-badge::before, .proker-badge::after {
          content: '✦';
          font-size: 0.6rem;
          color: rgba(230, 184, 106, 0.6);
        }

        .proker-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.2rem, 4.5vw, 3.4rem);
          font-weight: 800;
          margin-bottom: 1.2rem;
          line-height: 1.2;
          color: #ffffff;
        }
        .proker-title em {
          font-style: italic;
          color: #e6b86a;
        }
        .proker-subtitle {
          font-size: clamp(0.95rem, 1.5vw, 1.1rem);
          color: #a4b4c4;
          max-width: 700px;
          margin: 0 auto;
          line-height: 1.7;
          font-weight: 400;
        }

        /* Filter Pills — Golden Maritime Style */
        .proker-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.85rem;
          margin-bottom: 4rem;
        }
        .proker-tab-btn {
          background: rgba(13, 23, 38, 0.8);
          border: 1px solid rgba(230, 184, 106, 0.2);
          color: #a4b4c4;
          padding: 0.65rem 1.5rem;
          border-radius: 9999px;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(8px);
        }
        .proker-tab-btn:hover {
          background: rgba(230, 184, 106, 0.1);
          color: #e6b86a;
          border-color: rgba(230, 184, 106, 0.4);
        }
        .proker-tab-btn.active {
          background: linear-gradient(135deg, #e6b86a 0%, #c29347 100%);
          color: #0d1726;
          border-color: #fce8c5;
          box-shadow: 0 4px 20px rgba(230, 184, 106, 0.3);
          font-weight: 800;
        }

        /* Carousel Container */
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
          background: linear-gradient(135deg, #18283b 0%, #0d1726 100%);
          border: 1px solid rgba(230, 184, 106, 0.4);
          color: #e6b86a;
          width: 54px;
          height: 54px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 8px 20px rgba(0,0,0,0.5);
        }
        .carousel-btn:hover {
          background: linear-gradient(135deg, #e6b86a 0%, #c29347 100%);
          color: #0d1726;
          transform: translateY(-50%) scale(1.08);
          box-shadow: 0 12px 28px rgba(0,0,0,0.65);
        }
        .carousel-btn.left { left: -27px; }
        .carousel-btn.right { right: -27px; }

        .proker-carousel {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-behavior: smooth;
          gap: 2rem;
          padding: 1.5rem 0 3rem 0;
          width: 100%;
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .proker-carousel::-webkit-scrollbar { display: none; }

        /* ── Card — Premium Wooden Plaque Style ── */
        .proker-card {
          flex: 0 0 calc(50% - 1rem);
          scroll-snap-align: center;
          position: relative;
          border-radius: 16px;
          background: linear-gradient(168deg, #2a1c12 0%, #1c110a 50%, #120a05 100%);
          border: 2px solid #4a3320;
          border-bottom-color: #1a0f08;
          border-right-color: #24160d;
          padding: 2.5rem 2.2rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), box-shadow 0.4s ease;
          box-shadow: 0 15px 35px rgba(0,0,0,0.55), inset 0 1px 2px rgba(255,230,160,0.15);
          overflow: hidden;
        }

        .proker-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 25px 50px rgba(0,0,0,0.7), 0 0 25px rgba(230, 184, 106, 0.1);
          border-color: #63462f;
        }

        /* Inner Golden Groove */
        .proker-card-groove {
          position: absolute;
          top: 8px; left: 8px; right: 8px; bottom: 8px;
          border: 1px solid rgba(230, 184, 106, 0.2);
          border-radius: 10px;
          pointer-events: none;
          z-index: 1;
        }
        
        /* Subtle wood texture overlay */
        .proker-card-texture {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          opacity: 0.4;
          mix-blend-mode: overlay;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.02' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .proker-card-content {
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          height: 100%;
          gap: 1.5rem;
        }

        .proker-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid rgba(230, 184, 106, 0.15);
          padding-bottom: 1rem;
        }

        .proker-klaster {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-style: italic;
          color: #e6b86a;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .proker-klaster::before {
          content: '';
          display: block;
          width: 8px;
          height: 8px;
          background: #e6b86a;
          transform: rotate(45deg);
        }

        .proker-card-num {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 900;
          color: rgba(230, 184, 106, 0.15);
          line-height: 1;
        }

        .proker-card-title {
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-size: 1.3rem;
          font-weight: 700;
          color: #fdf6e3;
          line-height: 1.4;
        }

        .proker-card-desc {
          font-size: 0.95rem;
          color: rgba(253, 246, 227, 0.7);
          line-height: 1.7;
          flex-grow: 1;
        }

        /* Bottom section */
        .proker-card-bottom {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .proker-output-box {
          background: rgba(0, 0, 0, 0.2);
          border: 1px solid rgba(230, 184, 106, 0.1);
          padding: 0.8rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          color: rgba(253, 246, 227, 0.8);
        }
        .proker-output-box strong {
          color: #e6b86a;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.25rem;
        }

        /* Nautical Progress indicator */
        .proker-progress-container {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        
        .proker-status-tag {
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #e6b86a;
          background: rgba(230, 184, 106, 0.1);
          padding: 0.35rem 0.75rem;
          border-radius: 4px;
          border-left: 2px solid #e6b86a;
        }

        .proker-bar-bg {
          flex: 1;
          height: 2px;
          background: rgba(230, 184, 106, 0.15);
          position: relative;
        }
        .proker-bar-fill {
          position: absolute;
          left: 0;
          top: -1px;
          height: 4px;
          background: #e6b86a;
          transition: width 1.2s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .proker-bar-fill::after {
          content: '';
          position: absolute;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          width: 8px;
          height: 8px;
          background: #fdf6e3;
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(230, 184, 106, 0.8);
        }

        .proker-pct {
          font-family: 'Playfair Display', serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #e6b86a;
          min-width: 45px;
          text-align: right;
        }

        /* Wave Curve */
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
          .proker-card { flex: 0 0 calc(100%); }
          .carousel-btn.left { left: 10px; }
          .carousel-btn.right { right: 10px; }
        }
        @media (max-width: 640px) {
          .proker-section { padding: 4.5rem 1rem 6.5rem 1rem; }
          .proker-card { padding: 2rem 1.5rem; }
          .carousel-btn { width: 44px; height: 44px; }
        }
      `}</style>

      <div className="proker-section-bg-vector" />

      <div className="proker-container">
        {/* Header */}
        <div className="proker-header">
          <div className="proker-badge">Inovasi & Pengabdian</div>
          <h2 className="proker-title">
            Program Kerja <em>Unggulan</em>
          </h2>
          <p className="proker-subtitle">
            Rangkaian inisiatif strategis yang dirancang untuk memberdayakan potensi lokal pesisir Morotai melalui pendekatan lintas disiplin ilmu.
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
              {tab === "Semua" ? "Semua Program" : `Klaster ${tab}`}
            </button>
          ))}
        </div>

        {/* Carousel */}
        <div className="proker-carousel-container">
          <button className="carousel-btn left" onClick={scrollLeft} aria-label="Previous">
            <ChevronLeft size={24} />
          </button>

          <div className="proker-carousel" ref={carouselRef}>
            {filteredPrograms.map((prog, idx) => {
              const statusLabel = prog.status === "selesai" ? "Selesai" : prog.status === "berjalan" ? "Berlangsung" : "Persiapan";

              return (
                <div key={prog.id} className="proker-card">
                  <div className="proker-card-groove" />
                  <div className="proker-card-texture" />
                  
                  <div className="proker-card-content">
                    <div className="proker-card-top">
                      <span className="proker-klaster">
                        Klaster {prog.klaster}
                      </span>
                      <span className="proker-card-num">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    
                    <h3 className="proker-card-title">{prog.title}</h3>
                    <p className="proker-card-desc">{prog.desc}</p>

                    <div className="proker-card-bottom">
                      <div className="proker-output-box">
                        <strong>Target Luaran</strong>
                        {prog.output}
                      </div>
                      
                      <div className="proker-progress-container">
                        <span className="proker-status-tag">{statusLabel}</span>
                        <div className="proker-bar-bg">
                          <div
                            className="proker-bar-fill"
                            style={{ width: `${prog.progress}%` }}
                          />
                        </div>
                        <span className="proker-pct">{prog.progress}%</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="carousel-btn right" onClick={scrollRight} aria-label="Next">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Wave Curve */}
      <div className="proker-wave-divider">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path
            d="M0,70 C380,10 980,120 1440,50 L1440,120 L0,120 Z"
            fill="#0b1423"
          />
        </svg>
      </div>
    </section>
  );
}
