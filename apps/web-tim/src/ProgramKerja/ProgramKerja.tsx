"use client";

import React, { useState } from "react";

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
    title: "Digital Branding & Promosi Destinasi Ekowisata Bahari Morotai",
    klaster: "Soshum",
    desc: "Pelatihan pembuatan konten video promosi wisata, pengelolaan akun media sosial desa wisata, serta pendaftaran titik wisata ke platform peta dan travel digital antarbangsa.",
    status: "berjalan",
    progress: 80,
    output: "Katalog Ekowisata & Media Promosi Digital",
  },
  {
    id: "p4",
    title: "Penguatan Pembukuan BUMDes & Literasi Keuangan Usaha Desa",
    klaster: "Soshum",
    desc: "Pendampingan penyusunan laporan keuangan digital sederhana bagi pengurus BUMDes dan pelaku UMKM lokal, serta sosialisasi literasi keuangan dan pembayaran digital (QRIS).",
    status: "selesai",
    progress: 100,
    output: "Laporan Standar BUMDes & QRIS UMKM",
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

export default function ProgramKerja() {
  const [activeKlaster, setActiveKlaster] = useState<string>("Semua");

  const filteredPrograms =
    activeKlaster === "Semua"
      ? programsData
      : programsData.filter((p) => p.klaster === activeKlaster);

  return (
    <section id="program-kerja" className="proker-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap');

        .proker-section {
          position: relative;
          width: 100%;
          padding: 6rem 2rem 8.5rem 2rem;
          background: linear-gradient(180deg, #062544 0%, #0d4880 35%, #18609e 70%, #09345e 100%);
          overflow: hidden;
          z-index: 10;
          color: #ffffff;
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
        .proker-badge {
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
        .proker-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.3rem, 4.5vw, 3.6rem);
          font-weight: 800;
          margin-bottom: 1.2rem;
          line-height: 1.18;
        }
        .proker-title em {
          font-style: italic;
          background: linear-gradient(90deg, #7dd3fc, #38bdf8, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .proker-subtitle {
          font-size: clamp(1rem, 1.8vw, 1.15rem);
          color: rgba(255, 255, 255, 0.86);
          max-width: 820px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* Filter Pills */
        .proker-tabs {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 4rem;
        }
        .proker-tab-btn {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.18);
          color: rgba(255, 255, 255, 0.85);
          padding: 0.65rem 1.6rem;
          border-radius: 9999px;
          font-size: 0.98rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }
        .proker-tab-btn:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
          transform: translateY(-2px);
        }
        .proker-tab-btn.active {
          background: #38bdf8;
          color: #062340;
          border-color: #38bdf8;
          box-shadow: 0 8px 25px rgba(56, 189, 248, 0.4);
          font-weight: 700;
        }

        /* Programs Grid */
        .proker-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }
        .proker-card {
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.15);
          border-radius: 24px;
          padding: 2.2rem 2.2rem;
          backdrop-filter: blur(16px);
          transition: all 0.35s cubic-bezier(0.25, 0.1, 0.25, 1);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
        }
        .proker-card:hover {
          transform: translateY(-6px);
          background: rgba(255, 255, 255, 0.12);
          border-color: rgba(56, 189, 248, 0.5);
          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.38);
        }

        .proker-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        .klaster-tag {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.38rem 0.95rem;
          border-radius: 9999px;
        }
        .klaster-Saintek { background: rgba(56, 189, 248, 0.22); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.45); }
        .klaster-Soshum { background: rgba(96, 165, 250, 0.22); color: #60a5fa; border: 1px solid rgba(96, 165, 250, 0.45); }
        .klaster-Agro { background: rgba(56, 189, 248, 0.15); color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.35); }
        .klaster-Medika { background: rgba(125, 211, 252, 0.22); color: #bae6fd; border: 1px solid rgba(125, 211, 252, 0.45); }

        .status-badge {
          font-size: 0.8rem;
          font-weight: 700;
          padding: 0.35rem 0.85rem;
          border-radius: 9999px;
          display: flex;
          align-items: center;
          gap: 0.35rem;
        }
        .status-selesai { background: rgba(56, 189, 248, 0.25); color: #7dd3fc; border: 1px solid rgba(56, 189, 248, 0.45); }
        .status-berjalan { background: rgba(96, 165, 250, 0.25); color: #60a5fa; border: 1px solid rgba(96, 165, 250, 0.45); }
        .status-persiapan { background: rgba(255, 255, 255, 0.12); color: rgba(255, 255, 255, 0.8); border: 1px solid rgba(255, 255, 255, 0.25); }

        .proker-card-title {
          font-size: 1.32rem;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.36;
        }
        .proker-card-desc {
          font-size: 0.96rem;
          color: rgba(255, 255, 255, 0.82);
          line-height: 1.62;
        }

        /* Progress & Output Box */
        .proker-card-bottom {
          background: rgba(0, 0, 0, 0.25);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 1.25rem 1.4rem;
          display: flex;
          flex-direction: column;
          gap: 0.85rem;
        }
        .progress-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 0.86rem;
          color: rgba(255, 255, 255, 0.88);
          font-weight: 600;
        }
        .progress-bar-bg {
          width: 100%;
          height: 8px;
          background: rgba(255, 255, 255, 0.14);
          border-radius: 9999px;
          overflow: hidden;
        }
        .progress-bar-fill {
          height: 100%;
          border-radius: 9999px;
          transition: width 0.8s ease;
        }
        .output-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.88rem;
          color: #7dd3fc;
          font-weight: 600;
        }

        /* Wave Curve transitioning smoothly to SponsorMitra (#051c34) */
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
          .proker-grid {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 640px) {
          .proker-section {
            padding: 4.5rem 1rem 6.5rem 1rem;
          }
          .proker-card {
            padding: 1.8rem 1.5rem;
          }
        }
      `}</style>

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
              {tab === "Semua" ? "✨ Semua Program" : `🔬 Klaster ${tab}`}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="proker-grid">
          {filteredPrograms.map((prog) => {
            const klasterColor =
              prog.klaster === "Saintek"
                ? "#7dd3fc"
                : prog.klaster === "Soshum"
                ? "#60a5fa"
                : prog.klaster === "Agro"
                ? "#38bdf8"
                : "#bae6fd";

            return (
              <div key={prog.id} className="proker-card">
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                  <div className="proker-card-top">
                    <span className={`klaster-tag klaster-${prog.klaster}`}>
                      Klaster {prog.klaster}
                    </span>
                    <span className={`status-badge status-${prog.status}`}>
                      {prog.status === "selesai"
                        ? "✅ Selesai"
                        : prog.status === "berjalan"
                        ? "🚀 Dalam Pelaksanaan"
                        : "⏳ Persiapan"}
                    </span>
                  </div>
                  <h3 className="proker-card-title">{prog.title}</h3>
                  <p className="proker-card-desc">{prog.desc}</p>
                </div>

                <div className="proker-card-bottom">
                  <div className="progress-header">
                    <span>Capaian / Progres Pelaksanaan</span>
                    <span style={{ color: klasterColor, fontWeight: 700 }}>{prog.progress}%</span>
                  </div>
                  <div className="progress-bar-bg">
                    <div
                      className="progress-bar-fill"
                      style={{
                        width: `${prog.progress}%`,
                        background: `linear-gradient(90deg, ${klasterColor}, #38bdf8)`,
                      }}
                    />
                  </div>
                  <div className="output-row">
                    <span>🎯 Luaran Target:</span>
                    <span>{prog.output}</span>
                  </div>
                </div>
              </div>
            );
          })}
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
