"use client";

import React, { useState } from "react";
import Image from "next/image";
import { createSanityClient, createImageHelpers } from "@arungimorotai/sanity";

const sanityClient = createSanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2nwcacnk",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "tim",
});
const { urlFor } = createImageHelpers(sanityClient);

interface TeamMember {
  id: string;
  name: string;
  role: string;
  jurusan: string;
  klaster: string;
  penempatan?: string;
  photo: string;
  quote: string;
  linkedin?: string;
  instagram?: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Ahmad Najwan Muhammad",
    role: "Koordinator Unit Mahasiswa (KORMA)",
    jurusan: "Teknik Informatika • MIPA",
    klaster: "Koordinator",
    penempatan: "Koordinator Unit",
    photo: "/logo armor.png",
    quote: "Mengarungi samudra pengabdian, membawa transformasi digital bagi Pulau Morotai.",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: "2",
    name: "Yovia...",
    role: "Wakil Koordinator & Sekretaris",
    jurusan: "Ilmu Ekonomi • FEB",
    klaster: "Koordinator",
    penempatan: "Koordinator Unit",
    photo: "/logo armor.png",
    quote: "Membangun tata kelola dan kemandirian ekonomi desa berbasis potensi lokal.",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: "3",
    name: "Rizky Pratama",
    role: "Koordinator Klaster Saintek",
    jurusan: "Teknik Sipil • Teknik",
    klaster: "Klaster Saintek",
    penempatan: "Desa Yayasan",
    photo: "/logo armor.png",
    quote: "Infrastruktur tepat guna untuk aksesibilitas dan kemajuan desa pesisir.",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: "4",
    name: "Nabila Maharani",
    role: "Spesialis GIS & Pemetaan",
    jurusan: "Teknik Geodesi • Teknik",
    klaster: "Klaster Saintek",
    penempatan: "Desa Kolorai",
    photo: "/logo armor.png",
    quote: "Memetakan batas desa dan potensi kelautan dengan akurasi spasial modern.",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: "5",
    name: "Dimas Saputra",
    role: "Koordinator Klaster Soshum",
    jurusan: "Hukum Administrasi • Hukum",
    klaster: "Klaster Soshum",
    penempatan: "Desa Yayasan",
    photo: "/logo armor.png",
    quote: "Penguatan regulasi desa wisata dan literasi hukum bagi masyarakat kepulauan.",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: "6",
    name: "Aisyah Putri",
    role: "Divisi Pemberdayaan Masyarakat",
    jurusan: "Pariwisata • Ilmu Budaya",
    klaster: "Klaster Soshum",
    penempatan: "Desa Kolorai",
    photo: "/logo armor.png",
    quote: "Mengangkat pesona budaya dan pariwisata bahari Morotai ke panggung nusantara.",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: "7",
    name: "drh. Fajar Ramadhan",
    role: "Koordinator Klaster Medika",
    jurusan: "Kedokteran Hewan • FKH",
    klaster: "Klaster Medika",
    penempatan: "Desa Yayasan",
    photo: "/logo armor.png",
    quote: "Kesehatan hewan ternak dan ekosistem laut sebagai kunci ketahanan pangan.",
    linkedin: "#",
    instagram: "#",
  },
  {
    id: "8",
    name: "Larasati Lestari",
    role: "Koordinator Klaster Agro",
    jurusan: "Budidaya Perikanan • Pertanian",
    klaster: "Klaster Agro",
    penempatan: "Desa Kolorai",
    photo: "/logo armor.png",
    quote: "Inovasi pengolahan hasil laut kelapa dan perikanan yang bernilai jual tinggi.",
    linkedin: "#",
    instagram: "#",
  },
];

const klasterList = [
  "Semua",
  "Koordinator",
  "Klaster Saintek",
  "Klaster Soshum",
  "Klaster Medika",
  "Klaster Agro",
];

export default function TimProfile({ sanityMembers }: { sanityMembers?: any[] }) {
  const [activeKlaster, setActiveKlaster] = useState("Semua");
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const membersToUse: TeamMember[] =
    sanityMembers && sanityMembers.length > 0
      ? sanityMembers.map((m: any) => {
          let photoUrl = "/logo armor.png";
          if (typeof m.foto === "string") {
            photoUrl = m.foto;
          } else if (m.foto && m.foto.asset) {
            try {
              photoUrl = urlFor(m.foto).url();
            } catch (e) {
              photoUrl = "/logo armor.png";
            }
          }
          return {
            id: m._id || Math.random().toString(),
            name: m.nama || "Anggota Tim",
            role: m.role || "Anggota",
            jurusan: m.jurusan || "UGM",
            klaster: m.klaster || "Klaster Saintek",
            penempatan: m.penempatan || "Desa Yayasan",
            photo: photoUrl,
            quote: m.quote || "Mengarungi samudra pengabdian bagi Pulau Morotai.",
            linkedin: m.linkedin || "#",
            instagram: m.instagram || "#",
          };
        })
      : teamMembers;

  const filteredMembers =
    activeKlaster === "Semua"
      ? membersToUse
      : membersToUse.filter((m) => m.klaster === activeKlaster);

  return (
    <section className="tim-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap');

        .tim-section {
          position: relative;
          width: 100%;
          padding: 4rem 2rem 7rem 2rem;
          background: linear-gradient(135deg, #003D6E 0%, #0a4a7a 50%, #003D6E 100%);
          overflow: hidden;
          z-index: 10;
        }

        .tim-container {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .tentang-badge {
          display: inline-block;
          padding: 0.5rem 1.25rem;
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 9999px;
          color: #ffffff;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .tim-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .tim-title {
          font-family: 'Playfair Display', serif;
          color: #ffffff;
          font-size: clamp(2.2rem, 4.5vw, 3.2rem);
          font-weight: 800;
          margin: 0;
          line-height: 1.2;
        }
        .tim-title em {
          font-style: italic;
          color: #93c5fd;
        }

        .tim-subtitle {
          max-width: 680px;
          color: rgba(255, 255, 255, 0.82);
          font-size: clamp(0.95rem, 1.4vw, 1.08rem);
          line-height: 1.65;
          margin: 0;
        }

        .tim-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
          margin-top: 1.5rem;
        }

        .tim-filter-btn {
          background: rgba(255, 255, 255, 0.08);
          color: rgba(255, 255, 255, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.2);
          padding: 0.55rem 1.3rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(4px);
        }

        .tim-filter-btn:hover {
          background: rgba(255, 255, 255, 0.18);
          color: #ffffff;
          transform: translateY(-2px);
          border-color: rgba(255, 255, 255, 0.4);
        }

        .tim-filter-btn.active {
          background: #ffffff;
          color: #003D6E;
          border-color: #ffffff;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.25);
          font-weight: 700;
        }

        .tim-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.6rem;
        }

        .tim-card {
          position: relative;
          height: 390px; /* Persegi panjang yang proporsional & elegan untuk 4 kolom */
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.28);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: box-shadow 0.35s ease, border-color 0.35s ease;
          background: #0b2239;
          user-select: none;
        }

        .tim-card:hover,
        .tim-card.is-active {
          box-shadow: 0 25px 50px rgba(0, 30, 60, 0.5);
          border-color: rgba(147, 197, 253, 0.6);
        }

        .tim-card-bg-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          transition: transform 0.45s cubic-bezier(0.25, 1, 0.5, 1);
          transform: translateY(0px);
          pointer-events: none; /* Mencegah seleksi / klik langsung ke gambar */
          -webkit-touch-callout: none;
          -webkit-user-select: none;
          user-select: none;
        }

        .tim-card-bg-image img {
          pointer-events: none !important;
          -webkit-touch-callout: none !important;
          -webkit-user-select: none !important;
          user-select: none !important;
          -webkit-user-drag: none !important;
        }

        /* Saat di-hover atau di-klik (is-active), foto bergerak naik secara mulus tanpa goyangan/getaran */
        .tim-card:hover .tim-card-bg-image,
        .tim-card.is-active .tim-card-bg-image {
          transform: translateY(-25px);
        }

        .tim-card-info-box {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 138px; /* Persis setinggi kotak Ariq yang sudah pas */
          background: linear-gradient(135deg, rgba(30, 64, 175, 0.94) 0%, rgba(30, 58, 138, 0.97) 100%);
          backdrop-filter: blur(10px);
          border-radius: 22px 22px 0 0;
          padding: 14px 16px 16px 16px;
          z-index: 2;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          transition: background 0.3s ease;
          transform: translateY(0);
        }

        .tim-card:hover .tim-card-info-box,
        .tim-card.is-active .tim-card-info-box {
          background: linear-gradient(135deg, rgba(37, 99, 235, 0.96) 0%, rgba(30, 64, 175, 0.98) 100%);
        }

        .tim-info-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0;
          line-height: 1.25;
          letter-spacing: 0.01em;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tim-info-jurusan {
          font-size: 0.76rem;
          color: #bfdbfe;
          font-weight: 500;
          margin: 3px 0 6px 0;
          line-height: 1.28;
          opacity: 0.95;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tim-info-role {
          font-size: 0.8rem;
          font-weight: 700;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.16);
          border: 1px solid rgba(255, 255, 255, 0.25);
          padding: 3px 14px;
          border-radius: 999px;
          letter-spacing: 0.02em;
          margin-top: auto;
        }

        @media (max-width: 1024px) {
          .tim-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .tim-container {
            gap: 2.5rem;
          }
          .tim-grid {
            grid-template-columns: 1fr;
          }
          .tim-card {
            height: 390px;
          }
        }
      `}</style>

      {/* Team Profile Section */}
      <div className="tim-container">
        <div className="tim-header">
          <span className="tentang-badge">Tim Arungi Morotai</span>
          <h3 className="tim-title">
            Sosok di Balik <em>Pengabdian</em>
          </h3>
          <p className="tim-subtitle">
            Mahasiswa dari berbagai rumpun ilmu Universitas Gadjah Mada yang bersinergi
            menginovasikan teknologi, tata kelola desa, dan pelestarian alam Pulau Morotai.
          </p>

          {/* Filter Pills */}
          <div className="tim-filters">
            {klasterList.map((item) => (
              <button
                key={item}
                className={`tim-filter-btn ${activeKlaster === item ? "active" : ""}`}
                onClick={() => setActiveKlaster(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Team Grid */}
        <div className="tim-grid">
          {filteredMembers.map((member) => {
            const isActive = activeCardId === member.id;
            return (
              <div
                key={member.id}
                className={`tim-card ${isActive ? "is-active" : ""}`}
                onContextMenu={(e) => e.preventDefault()} // Mencegah klik kanan menu browser
                onClick={() => {
                  setActiveCardId(isActive ? null : member.id);
                }}
              >
                {/* Full-size background image */}
                <div className="tim-card-bg-image" onContextMenu={(e) => e.preventDefault()}>
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    draggable={false}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{
                      objectFit: member.photo.includes("logo") ? "contain" : "cover",
                      padding: member.photo.includes("logo") ? "40px" : "0",
                      pointerEvents: "none",
                      userSelect: "none",
                    }}
                  />
                </div>

                {/* Sliding Blue Info Box */}
                <div className="tim-card-info-box">
                  <h4 className="tim-info-name">{member.name}</h4>
                  <div className="tim-info-jurusan">{member.jurusan}</div>
                  <div className="tim-info-role">{member.role}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
