"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { LogoPutih } from "@/src/assets/assets";

const navLinks = [
  { label: "Beranda", href: "#beranda", active: true },
  { label: "Tentang Kami", href: "#tentang-kami" },
  { label: "Inovasi", href: "#inovasi" },
  { label: "Pencapaian", href: "#pencapaian" },
  { label: "Artikel", href: "#artikel" },
  { label: "Galeri", href: "#galeri" },
  { label: "Sponsor", href: "#sponsor" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Cek posisi awal saat mount
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        .header-nav-link {
          position: relative;
          color: #ffffff;
          font-size: 0.92rem;
          font-weight: 600;
          text-decoration: none;
          padding: 0.5rem 0.95rem;
          transition: opacity 0.2s ease, transform 0.2s ease;
          letter-spacing: 0.01em;
        }
        .header-nav-link:hover {
          opacity: 0.8;
          text-decoration: underline;
          text-underline-offset: 6px;
        }
        .header-nav-link.active {
          text-decoration: underline;
          text-underline-offset: 6px;
          text-decoration-thickness: 2px;
        }
        @media (max-width: 1024px) {
          .header-navbar {
            padding: 0.75rem 1.5rem !important;
          }
          .header-nav-links {
            display: none !important;
          }
        }
      `}</style>

      <nav
        className="header-navbar"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: isScrolled ? "0.75rem 3.5rem" : "1.1rem 3.5rem",
          background: isScrolled ? "#06432b" : "transparent",
          borderBottom: isScrolled
            ? "1px solid rgba(255, 255, 255, 0.12)"
            : "1px solid transparent",
          boxShadow: isScrolled
            ? "0 4px 24px rgba(0, 0, 0, 0.25)"
            : "none",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition:
            "background-color 0.35s ease, padding 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease",
        }}
      >
        <Link
          href="/"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "0.85rem",
          }}
        >
          <Image
            src={LogoPutih}
            alt="Logo Arungi Morotai Putih"
            height={46}
            style={{ height: 46, width: "auto", objectFit: "contain" }}
            priority
          />
        </Link>

        <ul
          className="header-nav-links"
          style={{
            display: "flex",
            gap: "0.25rem",
            listStyle: "none",
            alignItems: "center",
          }}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`header-nav-link ${link.active ? "active" : ""}`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
