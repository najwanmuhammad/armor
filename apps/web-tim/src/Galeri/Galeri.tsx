"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, X } from "lucide-react";

interface GaleriProps {
  petaVectorUrl?: string;
}

const tabs = ["Minggu 1", "Minggu 2", "Minggu 3", "Minggu 4", "Minggu 5", "Minggu 6", "Minggu 7"];

// Mock data for images
const imagesData = [
  { src: "/images/pasir_timbul.jpg", alt: "Galeri 1" },
  { src: "/images/yayasan.png", alt: "Galeri 2" },
  { src: "/images/kolorai.png", alt: "Galeri 3" },
  { src: "/images/pasir_timbul.jpg", alt: "Galeri 4" },
  { src: "/images/yayasan.png", alt: "Galeri 5" },
  { src: "/images/kolorai.png", alt: "Galeri 6" },
];

export default function Galeri({ petaVectorUrl = "/images/peta_vector.png" }: GaleriProps) {
  const [activeTab, setActiveTab] = useState("Minggu 1");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const totalPages = 6;

  return (
    <section id="galeri" className="galeri-section">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;0,900;1,700;1,800;1,900&display=swap');

        .galeri-section {
          position: relative;
          width: 100%;
          padding: 6rem 2rem 8.5rem 2rem;
          background: linear-gradient(180deg, #0b1423 0%, #0d4678 35%, #15548e 70%, #051c34 100%);
          color: #ffffff;
          overflow: hidden;
          z-index: 10;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        .galeri-section-bg-vector {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          background-image: url('${petaVectorUrl}');
          background-size: cover;
          background-position: center top;
          background-repeat: repeat;
          opacity: 0.1;
        }
        
        .galeri-container {
          max-width: 1300px;
          margin: 0 auto;
          position: relative;
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .galeri-header {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .galeri-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.5rem, 4.5vw, 3.8rem);
          font-weight: 800;
          color: #ffffff;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .galeri-logo {
          height: auto;
          max-width: 280px;
          width: 100%;
          object-fit: contain;
          filter: drop-shadow(0 4px 12px rgba(0, 0, 0, 0.4));
        }

        /* Tabs */
        .galeri-tabs {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
          margin-bottom: 3rem;
        }

        .galeri-tab {
          background: #fdf6e3;
          color: #945d36;
          border: none;
          padding: 0.6rem 1.25rem;
          border-radius: 8px;
          font-size: 0.95rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }

        .galeri-tab:hover {
          background: #fce8c5;
          transform: translateY(-2px);
        }

        .galeri-tab.active {
          background: #f59e0b;
          color: #ffffff;
        }

        /* Grid */
        .galeri-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          width: 100%;
          margin-bottom: 3rem;
        }

        .galeri-card {
          position: relative;
          aspect-ratio: 4/3;
          border-radius: 12px;
          overflow: hidden;
          background: #1e293b;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
          transition: transform 0.3s ease;
          cursor: pointer;
        }

        .galeri-card:hover {
          transform: translateY(-5px);
        }

        .galeri-card img {
          transition: transform 0.5s ease;
        }
        
        .galeri-card:hover img {
          transform: scale(1.05);
        }

        .galeri-card:hover img {
          transform: scale(1.05);
        }

        /* Action button in bottom right */
        .galeri-card-action {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          z-index: 2;
          background: #f59e0b;
          color: white;
          width: 36px;
          height: 36px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          transition: background 0.3s ease, transform 0.3s ease;
        }

        .galeri-card:hover .galeri-card-action {
          background: #d97706;
          transform: scale(1.1);
        }

        /* Pagination */
        .galeri-pagination {
          display: flex;
          justify-content: center;
          gap: 0.5rem;
        }

        .galeri-page {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 8px;
          background: #ffffff;
          color: #64748b;
          font-weight: 700;
          font-size: 0.95rem;
          cursor: pointer;
          border: none;
          transition: all 0.2s ease;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .galeri-page:hover {
          background: #f1f5f9;
        }

        .galeri-page.active {
          background: #f59e0b;
          color: white;
        }

        /* Modal Styles */
        .galeri-modal-overlay {
          position: fixed;
          inset: 0;
          z-index: 9999;
          background: rgba(0, 0, 0, 0.85);
          backdrop-filter: blur(5px);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          animation: fadeIn 0.3s ease;
        }

        .galeri-modal-content {
          position: relative;
          max-width: 70vw;
          max-height: 70vh;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .galeri-modal-img {
          object-fit: contain;
          border-radius: 8px;
        }

        .galeri-modal-close {
          position: absolute;
          top: -2rem;
          right: -2rem;
          background: rgba(255, 255, 255, 0.2);
          color: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .galeri-modal-close:hover {
          background: #ef4444;
          transform: scale(1.1);
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        /* Wave styling */
        .galeri-wave-divider {
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 100%;
          overflow: hidden;
          line-height: 0;
          z-index: 5;
        }
        .galeri-wave-divider svg {
          position: relative;
          display: block;
          width: calc(100% + 1.3px);
          height: 85px;
        }

        @media (max-width: 1024px) {
          .galeri-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .galeri-grid {
            grid-template-columns: 1fr;
          }
          .galeri-section {
            padding: 4rem 1rem 6rem 1rem;
          }
          .galeri-title {
            font-size: 2rem;
          }
        }
      `}</style>

      {/* Background decoration */}
      <div className="galeri-section-bg-vector" />

      <div className="galeri-container">
        
        {/* Header Section */}
        <div className="galeri-header">
          <h2 className="galeri-title">Galeri</h2>
          <Image
            src="/Logo Putih.png"
            alt="Logo Arungi Morotai"
            width={280}
            height={90}
            className="galeri-logo"
            priority
          />
        </div>

        {/* Tabs Section */}
        <div className="galeri-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`galeri-tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Grid Section */}
        <div className="galeri-grid">
          {imagesData.map((img, i) => (
            <div key={i} className="galeri-card">
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill 
                style={{ objectFit: "cover" }} 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div 
                className="galeri-card-action" 
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(img.src);
                }}
              >
                <ArrowUpRight size={20} />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Section */}
        <div className="galeri-pagination">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              className={`galeri-page ${currentPage === page ? "active" : ""}`}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </button>
          ))}
        </div>

      </div>

      <div className="galeri-wave-divider">
        <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none">
          <path d="M0,70 C380,10 980,120 1440,50 L1440,120 L0,120 Z" fill="#051c34" />
        </svg>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="galeri-modal-overlay" onClick={() => setSelectedImage(null)}>
          <div className="galeri-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="galeri-modal-close" onClick={() => setSelectedImage(null)}>
              <X size={24} />
            </button>
            <Image 
              src={selectedImage} 
              alt="Galeri Fullscreen" 
              fill 
              className="galeri-modal-img" 
            />
          </div>
        </div>
      )}
    </section>
  );
}
