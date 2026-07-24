"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil" },
  { href: "/kelompok", label: "Kelompok Masyarakat" },
  { href: "/berita", label: "Kabar Desa" },
  { href: "/anggaran", label: "Anggaran" },
  { href: "/wisata", label: "Wisata" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: "var(--navbar-height)",
        backgroundColor: "var(--color-white)",
        boxShadow: "0 4px 8px rgba(0,0,0,0.06)",
      }}
    >
      <div
        className="container"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          aria-label="Beranda Desa Koloray"
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icon/armor-black.svg"
            alt="Arungi Morotai"
            width={139}
            height={52}
            style={{ height: 44, width: "auto", display: "block" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav
          className="desktop-only"
          style={{ alignItems: "center", gap: "2rem" }}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  fontSize: "1.0625rem",
                  fontWeight: isActive ? 500 : 400,
                  color: "var(--color-night)",
                  textDecoration: "none",
                  opacity: isActive ? 1 : 0.85,
                  borderBottom: isActive
                    ? "2px solid var(--color-red)"
                    : "2px solid transparent",
                  paddingBottom: "2px",
                  transition: "opacity 0.2s ease",
                  whiteSpace: "nowrap",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={isMenuOpen}
          className="mobile-only"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: "var(--color-night)",
            alignItems: "center",
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {isMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <nav
          className="mobile-only"
          style={{
            flexDirection: "column",
            width: "100%",
            backgroundColor: "var(--color-white)",
            borderTop: "1px solid var(--color-border)",
            boxShadow: "0 8px 12px rgba(0,0,0,0.08)",
            padding: "0.5rem 0",
          }}
        >
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "0.85rem 1.5rem",
                  fontSize: "1rem",
                  fontWeight: isActive ? 500 : 400,
                  color: "var(--color-night)",
                  textDecoration: "none",
                  borderLeft: isActive
                    ? "3px solid var(--color-red)"
                    : "3px solid transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
