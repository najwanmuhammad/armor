"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Inovasi", href: "#inovasi" },
  { label: "Pencapaian", href: "#pencapaian" },
  { label: "Artikel", href: "#artikel" },
  { label: "Galeri", href: "#galeri" },
  { label: "Sponsor", href: "#sponsor" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <style>{`
        .header-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          border-radius: 0;
          transition: 
            left 1s cubic-bezier(0.25, 0.1, 0.25, 1),
            right 1s cubic-bezier(0.25, 0.1, 0.25, 1),
            top 1s cubic-bezier(0.25, 0.1, 0.25, 1),
            background 0.8s ease,
            border-radius 1s cubic-bezier(0.25, 0.1, 0.25, 1),
            box-shadow 0.8s ease,
            border 0.8s ease,
            backdrop-filter 0.8s ease;
          background: transparent;
          border: 1px solid transparent;
          box-shadow: none;
        }
        .header-scrolled {
          top: 1.1rem !important;
          left: 12.5%;
          right: 12.5%;
          background: rgba(255, 255, 255, 0.96) !important;
          backdrop-filter: blur(18px);
          -webkit-backdrop-filter: blur(18px);
          border-radius: 9999px;
          border: 1px solid rgba(255, 255, 255, 0.45);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.15);
        }
        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: 1560px;
          margin: 0 auto;
          padding: 1.5rem 4.5%;
          transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .header-scrolled .header-inner {
          padding: 0.65rem 2.2rem !important;
          max-width: 100%;
        }
        .header-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
        }
        .header-links {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .header-links li a {
          color: rgba(255, 255, 255, 0.95);
          text-decoration: none;
          font-size: 1.08rem;
          font-weight: 600;
          letter-spacing: -0.01em;
          padding: 0.6rem 1.25rem;
          border-radius: 9999px;
          transition: all 0.25s ease;
          white-space: nowrap;
        }
        .header-links li a:hover {
          color: #ffffff;
          background: rgba(255, 255, 255, 0.15);
        }

        /* Saat di scroll (Background Putih) -> Teks menjadi gelap */
        .header-scrolled .header-links li a {
          color: #1e293b;
        }
        .header-scrolled .header-links li a:hover {
          color: #0d9488;
          background: rgba(13, 148, 136, 0.08);
        }

        /* Mobile hamburger */
        .header-hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          z-index: 110;
        }
        .header-hamburger span {
          display: block;
          width: 24px;
          height: 2.5px;
          background: #ffffff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .header-scrolled .header-hamburger span {
          background: #1e293b;
        }
        .header-hamburger.open span {
          background: #ffffff !important;
        }
        .header-hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(5px, 5px);
        }
        .header-hamburger.open span:nth-child(2) {
          opacity: 0;
        }
        .header-hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(5px, -5px);
        }

        /* Mobile menu overlay */
        .mobile-menu-overlay {
          display: none;
          position: fixed;
          inset: 0;
          z-index: 99;
          background: rgba(10, 25, 22, 0.96);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 1.2rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }
        .mobile-menu-overlay.open {
          display: flex;
          opacity: 1;
          pointer-events: auto;
        }
        .mobile-menu-overlay a {
          color: rgba(255, 255, 255, 0.92);
          text-decoration: none;
          font-size: 1.35rem;
          font-weight: 500;
          padding: 0.65rem 2rem;
          border-radius: 12px;
          transition: all 0.25s ease;
        }
        .mobile-menu-overlay a:hover {
          background: rgba(255, 255, 255, 0.12);
          color: #ffffff;
        }

        @media (max-width: 1024px) {
          .header-links {
            display: none;
          }
          .header-hamburger {
            display: flex;
          }
          .header-scrolled {
            left: 5%;
            right: 5%;
          }
        }
        @media (max-width: 640px) {
          .header-scrolled {
            left: 3%;
            right: 3%;
          }
        }
      `}</style>

      <nav className={`header-nav ${scrolled ? "header-scrolled" : ""}`}>
        <div className="header-inner">
          <Link href="/" className="header-logo">
            {/* Logo Putih saat di atas (belum scroll) */}
            <Image
              src="/Logo Putih.png"
              alt="Arungi Morotai"
              width={180}
              height={46}
              style={{ objectFit: "contain", height: "42px", width: "auto" }}
              className={scrolled ? "hidden" : "block"}
              priority
            />
            {/* Logo Hitam saat sudah di scroll (background putih) */}
            <Image
              src="/Logo Hitam.png"
              alt="Arungi Morotai"
              width={180}
              height={46}
              style={{ objectFit: "contain", height: "42px", width: "auto" }}
              className={scrolled ? "block" : "hidden"}
              priority
            />
          </Link>

          <ul className="header-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          <button
            className={`header-hamburger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div className={`mobile-menu-overlay ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}
