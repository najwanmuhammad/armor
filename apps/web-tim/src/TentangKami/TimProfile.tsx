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
  "Klaster Saintek",
  "Klaster Soshum",
  "Klaster Medika",
  "Klaster Agro",
];

interface DivisionCard {
  id: string;
  num: string;
  tag: string;
  name: string;
  desc: string;
  topIcon: React.ReactNode;
  reliefSvg: React.ReactNode;
}

const divisionList: DivisionCard[] = [
  {
    id: "Klaster Saintek",
    num: "01",
    tag: "SAINTEK • INFRASTRUKTUR & GIS",
    name: "Sains & Teknologi",
    desc: "Merancang infrastruktur tepat guna, aksesibilitas desa pesisir, dan pemetaan geospasial modern perairan Morotai.",
    topIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    reliefSvg: (
      <svg viewBox="0 0 320 440" fill="none" className="relief-canvas">
        <g>
          {/* Deep Carved Topographic Contour Grooves */}
          <g>
            {/* Primary deep grooves (Dark shadow path + Gold highlight path) */}
            <path d="M-20,35 Q60,5 120,55 T260,25 T340,85" stroke="#120703" strokeWidth="3.2" fill="none" />
            <path d="M-20,36.5 Q60,6.5 120,56.5 T260,26.5 T340,86.5" stroke="#c98a54" strokeWidth="1.2" opacity="0.6" fill="none" />

            <path d="M-20,70 Q70,40 140,85 T280,60 T340,130" stroke="#120703" strokeWidth="2.8" fill="none" />
            <path d="M-20,71.5 Q70,41.5 140,86.5 T280,61.5 T340,131.5" stroke="#c98a54" strokeWidth="1" opacity="0.55" fill="none" />

            <path d="M-10,110 Q80,75 160,120 T290,100 T340,170" stroke="#120703" strokeWidth="2.4" fill="none" />
            <path d="M-10,111.5 Q80,76.5 160,121.5 T290,101.5 T340,171.5" stroke="#c98a54" strokeWidth="0.9" opacity="0.5" fill="none" />

            <path d="M30,160 Q110,130 180,180 T300,160" stroke="#120703" strokeWidth="2.2" fill="none" />
            <path d="M30,161.5 Q110,131.5 180,181.5 T300,161.5" stroke="#c98a54" strokeWidth="0.9" opacity="0.45" fill="none" />

            <path d="M60,200 Q140,170 210,220 T320,200" stroke="#120703" strokeWidth="2.4" fill="none" />
            <path d="M60,201.5 Q140,171.5 210,221.5 T320,201.5" stroke="#c98a54" strokeWidth="1" opacity="0.45" fill="none" />

            {/* Nested closed contour rings in upper right (Carved Plateau) */}
            <path d="M190,80 C210,50 260,50 270,80 C280,110 230,130 190,80 Z" fill="rgba(18, 7, 3, 0.28)" stroke="#120703" strokeWidth="2.6" />
            <path d="M190,81.5 C210,51.5 260,51.5 270,81.5 C280,111.5 230,131.5 190,81.5 Z" stroke="#c98a54" strokeWidth="1.1" opacity="0.55" fill="none" />

            <path d="M210,78 C222,60 248,60 254,78 C260,96 232,108 210,78 Z" fill="rgba(18, 7, 3, 0.35)" stroke="#120703" strokeWidth="2.2" />
            <circle cx="232" cy="78" r="6" fill="#120703" stroke="#c98a54" strokeWidth="1" opacity="0.8" />
            <circle cx="232" cy="78" r="2.5" fill="#e8c699" />

            {/* Lower topographic loops */}
            <path d="M-30,270 Q50,230 130,280 T260,260 T340,310" stroke="#120703" strokeWidth="2.8" fill="none" />
            <path d="M-30,271.5 Q50,231.5 130,281.5 T260,261.5 T340,311.5" stroke="#c98a54" strokeWidth="1.1" opacity="0.55" fill="none" />

            <path d="M-20,310 Q60,270 140,320 T270,300 T340,350" stroke="#120703" strokeWidth="2.6" fill="none" />
            <path d="M-20,311.5 Q60,271.5 140,321.5 T270,301.5 T340,351.5" stroke="#c98a54" strokeWidth="1" opacity="0.5" fill="none" />

            <path d="M-10,350 Q70,310 150,360 T280,340 T340,390" stroke="#120703" strokeWidth="2.4" fill="none" />
            <path d="M-10,351.5 Q70,311.5 150,361.5 T280,341.5 T340,391.5" stroke="#c98a54" strokeWidth="0.9" opacity="0.45" fill="none" />

            <path d="M10,390 Q90,350 170,400 T300,380" stroke="#120703" strokeWidth="2.2" fill="none" />
          </g>
        </g>
      </svg>
    ),
  },
  {
    id: "Klaster Soshum",
    num: "02",
    tag: "SOSHUM • PARIWISATA & HUKUM",
    name: "Sosial & Humaniora",
    desc: "Mengembangkan potensi desa wisata bahari, penguatan literasi hukum, serta pemberdayaan ekonomi masyarakat kepulauan.",
    topIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    reliefSvg: (
      <svg viewBox="0 0 320 440" fill="none" className="relief-canvas">
        <g>
          {/* Carved Island Map (Morotai & Halmahera outlines) */}
          <g>
            <path d="M40,50 Q65,40 85,60 T130,70 T150,45 Q165,35 180,60 T160,105 T120,115 Q95,120 70,100 T40,50 Z" fill="rgba(18, 7, 3, 0.32)" stroke="#120703" strokeWidth="3" />
            <path d="M41,51.5 Q66,41.5 86,61.5 T131,71.5 T151,46.5 Q166,36.5 181,61.5 T161,106.5 T121,116.5 Q96,121.5 71,101.5 T41,51.5 Z" stroke="#c98a54" strokeWidth="1.2" opacity="0.6" fill="none" />

            <path d="M195,85 Q220,70 235,90 T250,130 Q240,150 215,140 T195,85 Z" fill="rgba(18, 7, 3, 0.32)" stroke="#120703" strokeWidth="2.6" />
            <path d="M196,86.5 Q221,71.5 236,91.5 T251,131.5 Q241,151.5 216,141.5 T196,86.5 Z" stroke="#c98a54" strokeWidth="1" opacity="0.55" fill="none" />

            <path d="M30,135 Q50,130 65,145 T55,175 Q35,180 25,160 Z" fill="rgba(18, 7, 3, 0.32)" stroke="#120703" strokeWidth="2.4" />
          </g>

          {/* Carved Navigation Routes & Maritime Compass Point */}
          <path d="M85,110 Q140,150 180,200 T240,260" stroke="#120703" strokeWidth="2.2" strokeDasharray="6,7" fill="none" />
          <path d="M86,111.5 Q141,151.5 181,201.5 T241,261.5" stroke="#c98a54" strokeWidth="1" strokeDasharray="6,7" opacity="0.5" fill="none" />
          <circle cx="240" cy="260" r="5" fill="#120703" stroke="#c98a54" strokeWidth="1.5" />
          <circle cx="240" cy="260" r="2" fill="#e8c699" />

          {/* Carved Traditional Perahu Boat at Bottom */}
          <g transform="translate(55, 265)">
            {/* Hull */}
            <path d="M10,65 C40,90 150,90 190,55 C160,75 60,78 10,65 Z" fill="rgba(18, 7, 3, 0.45)" stroke="#120703" strokeWidth="3.2" />
            <path d="M11,66.5 C41,91.5 151,91.5 191,56.5" stroke="#c98a54" strokeWidth="1.3" opacity="0.65" fill="none" />
            
            {/* Planking lines on hull */}
            <path d="M25,69 C65,82 135,82 175,61" stroke="#120703" strokeWidth="1.8" fill="none" />
            
            {/* Outrigger & Mast */}
            <path d="M75,68 L75,10 M105,71 L105,18" stroke="#120703" strokeWidth="2.8" fill="none" />
            <path d="M76,68 L76,10 M106,71 L106,18" stroke="#c98a54" strokeWidth="1" opacity="0.5" fill="none" />
            <path d="M35,45 Q90,15 155,38" stroke="#120703" strokeWidth="2.4" fill="none" />
            
            {/* Traditional Sails (Swelling with wind) */}
            <path d="M75,15 C95,25 105,45 75,58 C65,45 65,25 75,15 Z" fill="rgba(18, 7, 3, 0.35)" stroke="#120703" strokeWidth="2.6" />
            <path d="M76,16.5 C96,26.5 106,46.5 76,59.5 C66,46.5 66,26.5 76,16.5 Z" stroke="#c98a54" strokeWidth="1" opacity="0.55" fill="none" />

            <path d="M105,22 C135,30 145,48 105,62 C95,50 95,32 105,22 Z" fill="rgba(18, 7, 3, 0.35)" stroke="#120703" strokeWidth="2.6" />
            <path d="M106,23.5 C136,31.5 146,49.5 106,63.5 C96,51.5 96,33.5 106,23.5 Z" stroke="#c98a54" strokeWidth="1" opacity="0.55" fill="none" />
          </g>

          {/* Deep Carved Ocean Waves Around Boat */}
          <path d="M20,350 Q75,330 130,350 T220,350 T300,340" stroke="#120703" strokeWidth="2.8" fill="none" />
          <path d="M20,351.5 Q75,331.5 130,351.5 T220,351.5 T300,341.5" stroke="#c98a54" strokeWidth="1.1" opacity="0.55" fill="none" />

          <path d="M10,375 Q65,355 120,375 T210,375 T290,365" stroke="#120703" strokeWidth="2.4" fill="none" />
          <path d="M10,376.5 Q65,356.5 120,376.5 T210,376.5 T290,366.5" stroke="#c98a54" strokeWidth="0.9" opacity="0.45" fill="none" />

          <path d="M40,398 Q95,380 150,398 T240,398 T310,388" stroke="#120703" strokeWidth="2" fill="none" />
        </g>
      </svg>
    ),
  },
  {
    id: "Klaster Medika",
    num: "03",
    tag: "MEDIKA • KESEHATAN & VETERINER",
    name: "Medika & Kesehatan",
    desc: "Menjaga kesehatan hewan ternak, edukasi klinis dasar, dan keberlanjutan ekosistem laut sebagai ketahanan pangan desa.",
    topIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
        <path d="M19 12v-2a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v2M12 7V3M12 21v-4" />
        <path d="M10 3h4v4h-4z" opacity="0" />
        <path d="M8 12h8v-2H8z" opacity="0" />
        <path d="M9 3h6v4H9V3zM3 10h18v4H3v-4z" />
      </svg>
    ),
    reliefSvg: (
      <svg viewBox="0 0 320 440" fill="none" className="relief-canvas">
        <g>
          {/* Medical Cross Carved Emblem in Upper Right Background */}
          <g transform="translate(205, 70)">
            <path d="M15,0 L35,0 L35,15 L50,15 L50,35 L35,35 L35,50 L15,50 L15,35 L0,35 L0,15 L15,15 Z" fill="rgba(18, 7, 3, 0.3)" stroke="#120703" strokeWidth="3" />
            <path d="M16,1.5 L36,1.5 L36,16.5 L51,16.5 L51,36.5 L36,36.5 L36,51.5 L16,51.5 L16,36.5 L1,36.5 L1,16.5 L16,16.5 Z" stroke="#c98a54" strokeWidth="1.1" opacity="0.55" fill="none" />
            <path d="M21,6 L29,6 L29,21 L44,21 L44,29 L29,29 L29,44 L21,44 L21,29 L6,29 L6,21 L21,21 Z" stroke="#120703" strokeWidth="1.8" fill="none" />
          </g>

          {/* Sweeping Botanical Herbal Leaves from Bottom-Right */}
          <g transform="translate(35, 155)">
            {/* Main thick stem */}
            <path d="M225,255 Q160,180 90,90 T30,10" stroke="#120703" strokeWidth="4" fill="none" />
            <path d="M226.5,256.5 Q161.5,181.5 91.5,91.5 T31.5,11.5" stroke="#c98a54" strokeWidth="1.4" opacity="0.6" fill="none" />

            {/* Large Herbal Leaf 1 */}
            <path d="M140,150 Q80,130 50,70 Q110,70 140,150 Z" fill="rgba(18, 7, 3, 0.38)" stroke="#120703" strokeWidth="3" />
            <path d="M141.5,151.5 Q81.5,131.5 51.5,71.5 Q111.5,71.5 141.5,151.5 Z" stroke="#c98a54" strokeWidth="1.2" opacity="0.6" fill="none" />
            <path d="M140,150 Q95,100 50,70" stroke="#120703" strokeWidth="2" fill="none" />
            <path d="M115,123 Q100,110 85,115 M100,108 Q90,92 75,95" stroke="#120703" strokeWidth="1.6" fill="none" />

            {/* Large Herbal Leaf 2 */}
            <path d="M185,195 Q215,120 255,90 Q225,160 185,195 Z" fill="rgba(18, 7, 3, 0.38)" stroke="#120703" strokeWidth="3" />
            <path d="M186.5,196.5 Q216.5,121.5 256.5,91.5 Q226.5,161.5 186.5,196.5 Z" stroke="#c98a54" strokeWidth="1.2" opacity="0.6" fill="none" />
            <path d="M185,195 Q220,140 255,90" stroke="#120703" strokeWidth="2" fill="none" />
            <path d="M210,160 Q225,140 240,145 M200,175 Q220,160 230,170" stroke="#120703" strokeWidth="1.6" fill="none" />

            {/* Herbal Leaf 3 (Top sprout) */}
            <path d="M90,90 Q30,85 10,40 Q60,45 90,90 Z" fill="rgba(18, 7, 3, 0.35)" stroke="#120703" strokeWidth="2.6" />
            <path d="M91.5,91.5 Q31.5,86.5 11.5,41.5 Q61.5,46.5 91.5,91.5 Z" stroke="#c98a54" strokeWidth="1" opacity="0.55" fill="none" />
            <path d="M90,90 Q50,65 10,40" stroke="#120703" strokeWidth="1.8" fill="none" />

            {/* Herbal Leaf 4 (Lower left branch) */}
            <path d="M175,215 Q115,220 75,185 Q135,180 175,215 Z" fill="rgba(18, 7, 3, 0.35)" stroke="#120703" strokeWidth="2.6" />
            <path d="M176.5,216.5 Q116.5,221.5 76.5,186.5 Q136.5,181.5 176.5,216.5 Z" stroke="#c98a54" strokeWidth="1" opacity="0.55" fill="none" />
            <path d="M175,215 Q125,200 75,185" stroke="#120703" strokeWidth="1.8" fill="none" />
            
            {/* Flower bud / Medicinal spore */}
            <circle cx="30" cy="10" r="7.5" fill="rgba(18, 7, 3, 0.4)" stroke="#120703" strokeWidth="2.6" />
            <circle cx="30" cy="10" r="3.5" fill="#e8c699" />
          </g>

          {/* Decorative floating botanical seeds/spores */}
          <circle cx="85" cy="140" r="4.5" fill="#120703" stroke="#c98a54" strokeWidth="1.2" />
          <circle cx="260" cy="225" r="5.5" fill="#120703" stroke="#c98a54" strokeWidth="1.2" />
        </g>
      </svg>
    ),
  },
  {
    id: "Klaster Agro",
    num: "04",
    tag: "AGRO • PERIKANAN & KELAUTAN",
    name: "Agro & Perikanan",
    desc: "Inovasi pengolahan hasil laut, budidaya perikanan, serta optimalisasi potensi kelapa menjadi komoditas unggulan.",
    topIcon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 20h10" />
        <path d="M10 20c5.5-2.5.8-6.4 3-10" />
        <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
        <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.2-4.3.8-4.9 2z" />
      </svg>
    ),
    reliefSvg: (
      <svg viewBox="0 0 320 440" fill="none" className="relief-canvas">
        <g>
          {/* Carved Rising Sun & Rays */}
          <g transform="translate(250, 310)">
            <circle cx="0" cy="0" r="42" stroke="#120703" strokeWidth="3" strokeDasharray="80 30" fill="none" />
            <circle cx="1.5" cy="1.5" r="42" stroke="#c98a54" strokeWidth="1.2" strokeDasharray="80 30" opacity="0.6" fill="none" />
            <path d="M-55,-25 L-38,-17 M-35,-50 L-22,-32 M-5,-65 L-3,-46 M28,-58 L18,-40" stroke="#120703" strokeWidth="2.6" fill="none" />
          </g>

          {/* Carved Sweeping Coconut Palm Tree (`Pohon Kelapa`) */}
          <g transform="translate(0, 25)">
            {/* Curved Palm Trunk */}
            <path d="M290,385 C265,300 270,220 250,150" stroke="#120703" strokeWidth="6" fill="none" />
            <path d="M291.5,386 C266.5,301 271.5,221 251.5,151" stroke="#c98a54" strokeWidth="1.8" opacity="0.6" fill="none" />
            
            {/* Trunk texture rings */}
            <path d="M282,355 L295,352 M276,315 L289,312 M270,275 L283,272 M266,235 L279,232 M260,195 L273,192 M255,165 L267,162" stroke="#120703" strokeWidth="2.4" fill="none" />

            {/* Coconuts */}
            <circle cx="236" cy="155" r="9" fill="rgba(18, 7, 3, 0.45)" stroke="#120703" strokeWidth="2.6" />
            <circle cx="254" cy="161" r="8" fill="rgba(18, 7, 3, 0.45)" stroke="#120703" strokeWidth="2.6" />
            <circle cx="244" cy="169" r="7.5" fill="rgba(18, 7, 3, 0.45)" stroke="#120703" strokeWidth="2.6" />
            <circle cx="236" cy="154" r="3" fill="#e8c699" opacity="0.8" />

            {/* Sweeping Palm Fronds (`Daun Kelapa`) */}
            {/* Frond 1 (Left downward) */}
            <path d="M245,150 C180,140 130,180 90,230 C150,190 200,175 245,150 Z" fill="rgba(18, 7, 3, 0.35)" stroke="#120703" strokeWidth="3" />
            <path d="M246.5,151.5 C181.5,141.5 131.5,181.5 91.5,231.5 C151.5,191.5 201.5,176.5 246.5,151.5 Z" stroke="#c98a54" strokeWidth="1.1" opacity="0.55" fill="none" />
            <path d="M245,150 C190,155 140,195 90,230" stroke="#120703" strokeWidth="2.2" fill="none" />
            <path d="M190,168 L175,188 M165,185 L150,205 M140,200 L125,220 M215,158 L202,175" stroke="#120703" strokeWidth="1.8" fill="none" />

            {/* Frond 2 (Upper left) */}
            <path d="M248,148 C190,100 140,95 80,110 C145,115 195,125 248,148 Z" fill="rgba(18, 7, 3, 0.35)" stroke="#120703" strokeWidth="3" />
            <path d="M249.5,149.5 C191.5,101.5 141.5,96.5 81.5,111.5 C146.5,116.5 196.5,126.5 249.5,149.5 Z" stroke="#c98a54" strokeWidth="1.1" opacity="0.55" fill="none" />
            <path d="M248,148 C195,110 145,105 80,110" stroke="#120703" strokeWidth="2.2" fill="none" />

            {/* Frond 3 (Top arch) */}
            <path d="M252,146 C240,80 265,40 310,20 C275,60 265,95 252,146 Z" fill="rgba(18, 7, 3, 0.35)" stroke="#120703" strokeWidth="3" />
            <path d="M253.5,147.5 C241.5,81.5 266.5,41.5 311.5,21.5 C276.5,61.5 266.5,96.5 253.5,147.5 Z" stroke="#c98a54" strokeWidth="1.1" opacity="0.55" fill="none" />
            
            {/* Frond 4 (Right downward) */}
            <path d="M255,152 C285,165 305,195 318,240 C295,200 280,175 255,152 Z" fill="rgba(18, 7, 3, 0.35)" stroke="#120703" strokeWidth="3" />
          </g>

          {/* Carved Coastal Waves (`Ombak & Kelautan`) at bottom */}
          <path d="M10,345 Q55,325 100,345 T190,345 T280,335" stroke="#120703" strokeWidth="3.2" fill="none" />
          <path d="M11.5,346.5 Q56.5,326.5 101.5,346.5 T191.5,346.5 T281.5,336.5" stroke="#c98a54" strokeWidth="1.2" opacity="0.6" fill="none" />
          
          <path d="M0,370 Q45,350 90,370 T180,370 T270,360 T320,370" stroke="#120703" strokeWidth="2.8" fill="none" />
          {/* Swirling wave crest (Stylized Nusantara wave) */}
          <path d="M180,370 C205,350 235,350 240,375 C243,388 228,392 220,385 C215,380 220,372 230,372" fill="rgba(18, 7, 3, 0.35)" stroke="#120703" strokeWidth="3" />
          <path d="M181.5,371.5 C206.5,351.5 236.5,351.5 241.5,376.5 C244.5,389.5 229.5,393.5 221.5,386.5" stroke="#c98a54" strokeWidth="1.1" opacity="0.6" fill="none" />
          
          <path d="M20,396 Q65,380 110,396 T200,396 T290,386" stroke="#120703" strokeWidth="2.4" fill="none" />
          <path d="M50,418 Q95,402 140,418 T230,418 T310,408" stroke="#120703" strokeWidth="2" fill="none" />
        </g>
      </svg>
    ),
  },
];

export default function TimProfile({ sanityMembers = [], petaVectorUrl = "/images/peta_vector.png" }: { sanityMembers?: any[], petaVectorUrl?: string }) {
  const [activeKlaster, setActiveKlaster] = useState<string | null>(null);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);

  const membersToUse: TeamMember[] =
    sanityMembers && sanityMembers.length > 0
      ? sanityMembers.map((m: any, index: number) => {
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
          id: m._id || `member-${index}`,
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
    !activeKlaster || activeKlaster === "Semua"
      ? membersToUse
      : membersToUse.filter((m) => m.klaster === activeKlaster);

  return (
    <section className="tim-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap');

        .tim-section {
          position: relative;
          width: 100%;
          padding: 3.5rem 2rem 8.5rem 2rem;
          background: linear-gradient(180deg, #0d4678 0%, #1c62a3 30%, #15548e 70%, #093156 100%);
          overflow: hidden;
          z-index: 10;
        }

        /* ── Wave Divider to ProfilDesa ── */
        .tim-wave-divider {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 20;
          pointer-events: none;
        }

        .tim-wave-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 120px;
        }

        /* Decorative armor logo ornaments */
        .tim-ornament {
          position: absolute;
          opacity: 0.12;
          pointer-events: none;
          z-index: 0;
          background-image: url("/logo armor.png");
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
        }
        .tim-ornament-top-left {
          top: 3rem;
          left: 2rem;
          width: 170px;
          height: 170px;
          transform: rotate(-15deg);
        }
        .tim-ornament-mid-right {
          top: 45%;
          right: 2rem;
          width: 200px;
          height: 200px;
          transform: rotate(20deg);
        }
        .tim-ornament-bottom-left {
          bottom: 7rem;
          left: 2.5rem;
          width: 160px;
          height: 160px;
          transform: rotate(40deg);
        }


        /* Background Vector Map bercampur dengan gradasi biru pekat */
        .tim-section-bg-vector {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image: url('${petaVectorUrl}');
          background-size: cover;
          background-position: center top;
          background-repeat: no-repeat;
          background-attachment: fixed;
          transform: translateZ(0);
          will-change: transform;
          opacity: 0.15;
          mask-image: linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%);
          -webkit-mask-image: linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%);
        }


        /* ── Blue Woven Tenun Fabric Background Texture Layer ── */
        .tenun-bg-layer {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.28;
          mix-blend-mode: overlay;
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 150px);
          mask-image: linear-gradient(to bottom, transparent 0%, black 150px);
        }

        .tenun-bg-svg {
          width: 100%;
          height: 100%;
        }

        .tim-container {
          position: relative;
          z-index: 2;
          max-width: 1260px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 3.5rem;
        }

        .tentang-badge {
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
          box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.55),
            inset 0 1px 3px rgba(255, 230, 160, 0.4),
            inset 0 -3px 5px rgba(0, 0, 0, 0.9);
        }

        .tim-header {
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.1rem;
        }

        .tim-title {
          font-family: 'Playfair Display', serif;
          color: #ffffff;
          font-size: clamp(2.3rem, 4.6vw, 3.4rem);
          font-weight: 800;
          margin: 0;
          line-height: 1.2;
          text-shadow: 0 4px 15px rgba(0, 0, 0, 0.35);
        }
        .tim-title em {
          font-style: italic;
          color: #93c5fd;
        }

        .tim-subtitle {
          max-width: 700px;
          color: rgba(255, 255, 255, 0.86);
          font-size: clamp(0.96rem, 1.4vw, 1.1rem);
          line-height: 1.68;
          margin: 0;
        }

        /* ── Carved Wooden Plaque Relief Cards (Gaya Ukiran Kayu 4 Kolom Realistis) ───────────── */
        .klaster-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.75rem;
          margin-top: 1.2rem;
        }

        .klaster-card {
          position: relative;
          background: linear-gradient(168deg, #6e4324 0%, #51311a 38%, #382110 75%, #231308 100%);
          border: 2px solid #2f1a0b;
          border-top-color: #945d36;
          border-left-color: #7d4d2b;
          border-bottom-color: #150a03;
          border-right-color: #241307;
          border-radius: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 450px;
          cursor: pointer;
          transition: all 0.45s cubic-bezier(0.25, 1, 0.5, 1);
          box-shadow: 
            0 25px 50px -12px rgba(0, 10, 25, 0.85),
            0 12px 24px -8px rgba(0, 0, 0, 0.75),
            inset 0 2px 4px rgba(255, 210, 155, 0.35),
            inset 0 -6px 12px rgba(12, 5, 1, 0.9);
          user-select: none;
          overflow: hidden;
        }

        /* Ambient warm illumination overlay on hover */
        .klaster-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 20%, rgba(255, 220, 175, 0.18) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 0.45s ease;
          pointer-events: none;
          z-index: 3;
        }

        .klaster-card:hover::after {
          opacity: 1;
        }

        .klaster-card:hover {
          transform: translateY(-9px) scale(1.018);
          border-top-color: #b87b48;
          border-left-color: #a3673b;
          box-shadow: 
            0 35px 65px -14px rgba(0, 15, 35, 0.95),
            0 18px 35px -8px rgba(0, 0, 0, 0.82),
            inset 0 2px 5px rgba(255, 225, 180, 0.45),
            inset 0 -6px 12px rgba(10, 4, 1, 0.95);
        }

        /* Wood Grain & Noise Texture Layer */
        .klaster-card__wood-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.75;
          mix-blend-mode: multiply;
        }

        .klaster-card__noise {
          width: 100%;
          height: 100%;
        }

        /* Relief Illustration Layer */
        .klaster-card__relief {
          position: absolute;
          inset: 0;
          z-index: 2;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .relief-canvas {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Engraved Router Inner Groove Border (Garis Ukiran Dalam Plakat Kayu) */
        .klaster-card__inner-groove {
          position: absolute;
          top: 12px;
          left: 12px;
          right: 12px;
          bottom: 12px;
          border: 1px solid rgba(18, 8, 2, 0.85);
          box-shadow: 
            inset 0 1px 2px rgba(0, 0, 0, 0.85),
            inset 0 -1px 1px rgba(255, 205, 145, 0.25),
            0 1px 1px rgba(255, 205, 145, 0.28);
          border-radius: 16px;
          pointer-events: none;
          z-index: 3;
        }

        .klaster-card__top {
          position: relative;
          z-index: 4;
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          width: 100%;
          padding: 1.7rem 1.7rem 0 1.7rem;
          margin-bottom: 1.5rem;
        }

        .klaster-card__num {
          font-family: inherit;
          font-size: 1rem;
          font-weight: 800;
          color: #dcb285;
          letter-spacing: 0.08em;
          text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.8), 0 1px 0 rgba(255, 225, 185, 0.3);
        }

        .klaster-card__icon {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          color: #e6c198;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.85)) drop-shadow(0 -1px 0 rgba(255, 225, 185, 0.25));
          transition: transform 0.4s cubic-bezier(0.25, 1, 0.5, 1), color 0.35s ease;
        }

        .klaster-card:hover .klaster-card__icon {
          color: #ffe2c2;
          transform: rotate(-8deg) scale(1.15);
        }

        .klaster-card__icon svg {
          width: 27px;
          height: 27px;
        }

        .klaster-card__body {
          position: relative;
          z-index: 4;
          text-align: left;
          padding: 0 1.7rem 1.5rem 1.7rem;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .klaster-card__tag {
          color: #ecc99d;
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          margin-bottom: 0.6rem;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
        }

        .klaster-card__title {
          font-family: 'Playfair Display', serif;
          color: #fff9f0;
          font-size: 1.48rem;
          font-weight: 800;
          line-height: 1.24;
          margin: 0 0 0.8rem 0;
          text-shadow: 0 3px 6px rgba(0, 0, 0, 0.95), 0 -1px 1px rgba(255, 255, 255, 0.25);
        }

        .klaster-card__desc {
          color: rgba(255, 244, 230, 0.88);
          font-size: 0.86rem;
          line-height: 1.64;
          margin: 0;
          text-shadow: 0 1px 3px rgba(0, 0, 0, 0.88);
        }

        /* Engraved horizontal groove right above Lihat Anggota */
        .klaster-card__divider {
          position: relative;
          z-index: 4;
          width: calc(100% - 3.4rem);
          height: 1px;
          margin: auto auto 1.1rem auto;
          background: rgba(18, 8, 2, 0.85);
          box-shadow: 0 1px 0 rgba(255, 210, 155, 0.25);
        }

        .klaster-card__footer {
          position: relative;
          z-index: 4;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 0 1.7rem 1.6rem 1.7rem;
        }

        .klaster-card__cta {
          font-size: 0.86rem;
          font-weight: 700;
          color: #fff5e6;
          letter-spacing: 0.03em;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.85);
        }

        .klaster-card__arrow {
          font-size: 1.25rem;
          color: #ecc99d;
          transition: transform 0.3s cubic-bezier(0.25, 1, 0.5, 1), color 0.3s ease;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.85);
        }

        .klaster-card:hover .klaster-card__arrow {
          transform: translateX(6px);
          color: #ffffff;
        }

        /* ── Carved Teak Wood Pill Button (Jelajahi Seluruh Anggota Tim) ── */
        .more-klaster-btn {
          position: relative;
          margin: 2.2rem auto 0 auto;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
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
          padding: 0.8rem 2.4rem;
          border-radius: 9999px;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          cursor: pointer;
          box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.55),
            inset 0 1px 3px rgba(255, 230, 160, 0.4),
            inset 0 -3px 5px rgba(0, 0, 0, 0.9);
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .more-klaster-btn:hover {
          background: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              rgba(0, 0, 0, 0.18) 3px,
              rgba(0, 0, 0, 0.18) 6px
            ),
            linear-gradient(135deg, #5c3b1e 0%, #3d2612 55%, #24160a 100%);
          border-color: rgba(230, 184, 106, 0.85);
          transform: translateY(-3px) scale(1.02);
          box-shadow: 
            0 14px 28px rgba(0, 0, 0, 0.75),
            inset 0 1px 3px rgba(255, 240, 180, 0.5),
            inset 0 -3px 5px rgba(0, 0, 0, 0.95);
        }

        /* ── Filter & Back Navigation (Saat mode lihat anggota) ───────────────────────── */
        .tim-filter-bar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1.2rem;
          margin-top: 0.5rem;
          animation: fadeIn 0.4s ease;
        }

        .back-klaster-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
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
          padding: 0.65rem 1.6rem;
          border-radius: 9999px;
          font-size: 0.88rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          cursor: pointer;
          box-shadow: 
            0 8px 20px rgba(0, 0, 0, 0.55),
            inset 0 1px 3px rgba(255, 230, 160, 0.4),
            inset 0 -3px 5px rgba(0, 0, 0, 0.9);
          transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .back-klaster-btn:hover {
          background: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 3px,
              rgba(0, 0, 0, 0.18) 3px,
              rgba(0, 0, 0, 0.18) 6px
            ),
            linear-gradient(135deg, #5c3b1e 0%, #3d2612 55%, #24160a 100%);
          border-color: rgba(230, 184, 106, 0.85);
          transform: translateY(-2px);
          box-shadow: 
            0 12px 24px rgba(0, 0, 0, 0.75),
            inset 0 1px 3px rgba(255, 240, 180, 0.5),
            inset 0 -3px 5px rgba(0, 0, 0, 0.95);
        }

        .tim-filters {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.6rem;
        }

        .tim-filter-btn {
          background: linear-gradient(135deg, #3d2612 0%, #24160a 100%);
          color: #dcb285;
          border: 1px solid rgba(230, 184, 106, 0.3);
          padding: 0.55rem 1.3rem;
          border-radius: 999px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
        }

        .tim-filter-btn:hover {
          background: linear-gradient(135deg, #4a2f17 0%, #2f1d0d 100%);
          color: #fce8c5;
          transform: translateY(-2px);
          border-color: rgba(230, 184, 106, 0.6);
        }

        .tim-filter-btn.active {
          background: linear-gradient(135deg, #c98a54 0%, #8b5a2b 100%);
          color: #1a0f08;
          border-color: #e8c699;
          box-shadow: 0 4px 15px rgba(201, 138, 84, 0.4);
          font-weight: 800;
        }

        /* ── Anggota Tim Grid ───────────────────────── */
        .tim-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.6rem;
          animation: fadeIn 0.45s ease;
        }

        .tim-card {
          position: relative;
          height: 390px;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          background: linear-gradient(168deg, #6e4324 0%, #51311a 38%, #382110 75%, #231308 100%);
          border: 2px solid #2f1a0b;
          border-top-color: #945d36;
          border-left-color: #7d4d2b;
          border-bottom-color: #150a03;
          border-right-color: #241307;
          box-shadow: 
            0 15px 35px rgba(0, 0, 0, 0.55),
            inset 0 1px 3px rgba(255, 230, 160, 0.2);
          transition: all 0.35s ease;
          user-select: none;
        }

        .tim-card:hover,
        .tim-card.is-active {
          transform: translateY(-6px);
          border-top-color: #b87b48;
          border-left-color: #a3673b;
          box-shadow: 
            0 25px 50px rgba(0, 0, 0, 0.75),
            inset 0 2px 5px rgba(255, 225, 180, 0.35);
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
        }

        .tim-card:hover .tim-card-bg-image,
        .tim-card.is-active .tim-card-bg-image {
          transform: translateY(-25px);
        }

        .tim-card-info-box {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 145px;
          background: linear-gradient(135deg, rgba(61, 38, 18, 0.95) 0%, rgba(36, 22, 10, 0.98) 100%);
          backdrop-filter: blur(8px);
          border-radius: 22px 22px 0 0;
          padding: 14px 16px 16px 16px;
          z-index: 4;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid rgba(230, 184, 106, 0.4);
          transition: background 0.3s ease;
          overflow: hidden;
        }

        .tim-card:hover .tim-card-info-box,
        .tim-card.is-active .tim-card-info-box {
          background: linear-gradient(135deg, rgba(74, 47, 23, 0.98) 0%, rgba(47, 29, 13, 0.98) 100%);
        }

        .tim-info-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.15rem;
          font-weight: 800;
          color: #fff9f0;
          margin: 0;
          line-height: 1.25;
          letter-spacing: 0.01em;
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          position: relative;
          z-index: 1;
        }

        .tim-info-jurusan {
          font-size: 0.76rem;
          color: #ecc99d;
          font-weight: 600;
          margin: 3px 0 6px 0;
          line-height: 1.28;
          text-shadow: 0 1px 2px rgba(0,0,0,0.8);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
          position: relative;
          z-index: 1;
        }

        .tim-info-role {
          font-size: 0.8rem;
          font-weight: 700;
          color: #fce8c5;
          background: linear-gradient(135deg, #4a2f17 0%, #2f1d0d 100%);
          border: 1px solid rgba(230, 184, 106, 0.55);
          padding: 4px 14px;
          border-radius: 999px;
          letter-spacing: 0.02em;
          margin-top: auto;
          box-shadow: 0 4px 10px rgba(0,0,0,0.5);
          position: relative;
          z-index: 1;
        }

        /* Relief artwork positioned inside the brown info box */
        .tim-card-relief-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          opacity: 0.55;
        }

        .tim-card-relief-bg .relief-canvas {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (max-width: 1200px) {
          .klaster-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 1024px) {
          .tim-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .tim-section {
            padding: 2.5rem 1.5rem 6.5rem 1.5rem;
          }
          .tim-wave-divider svg {
            height: 60px;
          }
          .tim-container {
            gap: 2.5rem;
          }
          .klaster-grid {
            grid-template-columns: 1fr;
          }
          .tim-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Background Vector Map */}
      <div className="tim-section-bg-vector" />

      {/* Global SVG Filters for Wood Texture */}
      <svg style={{ position: 'absolute', width: 0, height: 0 }} aria-hidden="true">
        <filter id="global-wood-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.01 0.35" numOctaves="4" result="noise" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.16  0 0 0 0 0.08  0 0 0 0 0.03  0 0 0 0.4 0" />
        </filter>
      </svg>

      {/* Decorative armor logo ornaments */}
      <div className="tim-ornament tim-ornament-top-left" />
      <div className="tim-ornament tim-ornament-mid-right" />
      <div className="tim-ornament tim-ornament-bottom-left" />


      <div className="tim-container">
        <div className="tim-header">
          <span className="tentang-badge">Tim Arungi Morotai</span>
          <h3 className="tim-title">
            Sosok di Balik <em>Pengabdian</em>
          </h3>

          <Image
            src="/logo armor.png"
            alt="Logo Arungi Morotai"
            width={55}
            height={55}
            style={{ objectFit: "contain", opacity: 0.35, marginTop: "0.5rem" }}
          />
        </div>

        {activeKlaster === null ? (
          /* Mode Editorial 4 Kartu Klaster (Human-Crafted & Bespoke Wooden Plaque) */
          <>
            {/* Blue Woven Ikat / Tenun Fabric Pattern Layer */}
            <div className="tenun-bg-layer">
              <svg className="tenun-bg-svg" viewBox="0 0 400 400" preserveAspectRatio="none">
                <defs>
                  <pattern id="tenun-morotai" width="40" height="40" patternUnits="userSpaceOnUse">
                    {/* Woven textile thread lines */}
                    <path d="M0,5 L40,5 M0,15 L40,15 M0,25 L40,25 M0,35 L40,35" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4" />
                    <path d="M5,0 L5,40 M15,0 L15,40 M25,0 L25,40 M35,0 L35,40" stroke="#ffffff" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.3" />
                    {/* Subtle Ikat diamond motifs */}
                    <path d="M20,10 L30,20 L20,30 L10,20 Z" fill="none" stroke="#93c5fd" strokeWidth="1" opacity="0.35" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#tenun-morotai)" />
              </svg>
            </div>

            <div className="klaster-grid">
              {divisionList.map((divisi) => (
                <div
                  key={divisi.id}
                  className="klaster-card"
                  onClick={() => setActiveKlaster(divisi.id)}
                >
                  {/* Real wood grain noise overlay */}
                  <div className="klaster-card__wood-bg">
                    <svg className="klaster-card__noise" viewBox="0 0 300 450" preserveAspectRatio="none">
                      <filter id={`wood-grain-${divisi.num}`}>
                        <feTurbulence type="fractalNoise" baseFrequency="0.01 0.35" numOctaves="4" result="noise" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.16  0 0 0 0 0.08  0 0 0 0 0.03  0 0 0 0.4 0" />
                      </filter>
                      <rect width="100%" height="100%" filter={`url(#wood-grain-${divisi.num})`} />
                    </svg>
                  </div>

                  {/* Carved Relief Artwork */}
                  <div className="klaster-card__relief">
                    {divisi.reliefSvg}
                  </div>

                  {/* Engraved inner router groove plaque border */}
                  <div className="klaster-card__inner-groove" />

                  <div className="klaster-card__top">
                    <span className="klaster-card__num">{divisi.num}</span>
                    <div className="klaster-card__icon">{divisi.topIcon}</div>
                  </div>

                  <div className="klaster-card__body">
                    <div className="klaster-card__tag">{divisi.tag}</div>
                    <h4 className="klaster-card__title">{divisi.name}</h4>
                    <p className="klaster-card__desc">{divisi.desc}</p>
                  </div>

                  <div className="klaster-card__divider" />

                  <div className="klaster-card__footer">
                    <span className="klaster-card__cta">Lihat Anggota</span>
                    <span className="klaster-card__arrow">→</span>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="more-klaster-btn"
              onClick={() => setActiveKlaster("Semua")}
            >
              <span>Jelajahi Seluruh Anggota Tim</span>
              <span style={{ fontSize: "1.1rem" }}>→</span>
            </button>
          </>
        ) : (
          /* Mode Daftar Anggota Tim */
          <>
            <div className="tim-filter-bar">
              <button
                className="back-klaster-btn"
                onClick={() => setActiveKlaster(null)}
              >
                ← Kembali ke Divisi & Klaster
              </button>

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

            <div className="tim-grid">
              {filteredMembers.map((member) => {
                const isActive = activeCardId === member.id;
                const klasterInfo = divisionList.find(d => d.id === member.klaster);
                const reliefSvg = klasterInfo?.reliefSvg;

                return (
                  <div
                    key={member.id}
                    className={`tim-card ${isActive ? "is-active" : ""}`}
                    onClick={() => setActiveCardId(isActive ? null : member.id)}
                  >
                    {/* Real wood grain noise overlay */}
                    <div className="klaster-card__wood-bg" style={{ zIndex: 0 }}>
                      <svg className="klaster-card__noise" viewBox="0 0 300 450" preserveAspectRatio="none">
                        <rect width="100%" height="100%" filter="url(#global-wood-grain)" />
                      </svg>
                    </div>

                    <div className="tim-card-bg-image">
                      <Image
                        src={member.photo}
                        alt={member.name}
                        fill
                        style={{
                          objectFit: member.photo.includes("logo") ? "contain" : "cover",
                          padding: member.photo.includes("logo") ? "40px" : "0",
                        }}
                      />
                    </div>


                    <div className="tim-card-info-box">
                      {/* Carved Relief Artwork on the brown info area */}
                      {reliefSvg && (
                        <div className="tim-card-relief-bg">
                          {reliefSvg}
                        </div>
                      )}
                      <h4 className="tim-info-name">{member.name}</h4>
                      <div className="tim-info-jurusan">{member.jurusan}</div>
                      <div className="tim-info-role">{member.role}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </div>

      {/* Wave Curve transitioning to TemaTimeline (#062340) */}
      <div className="tim-wave-divider">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path 
            d="M0,50 C360,120 1080,10 1440,40 L1440,120 L0,120 Z" 
            fill="#062340"
          />
        </svg>
      </div>
    </section>
  );
}
