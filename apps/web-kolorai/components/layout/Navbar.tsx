"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Beranda" },
  { href: "/profil", label: "Profil Desa" },
  { href: "/berita", label: "Berita" },
  { href: "/layanan", label: "Layanan" },
  { href: "/wisata", label: "Wisata & UMKM" },
  { href: "/peta", label: "Peta" },
  { href: "/galeri", label: "Galeri" },
  { href: "/anggaran", label: "Transparansi" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Hanya beranda yang pakai transparent navbar (di atas hero)
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Tutup menu saat navigasi
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const isTransparent = isHome && !isScrolled && !isMenuOpen;

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        height: "var(--navbar-height)",
        transition: "background-color 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: isTransparent ? "transparent" : "var(--color-white)",
        boxShadow: isTransparent ? "none" : "0 1px 0 var(--color-border)",
      }}
    >
      <div
        className="container"
        style={{
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: isTransparent ? "#fff" : "var(--color-forest)",
            textDecoration: "none",
            transition: "color 0.3s ease",
          }}
        >
          Desa Kolorai
        </Link>

        {/* Desktop nav */}
        <nav
          style={{ display: "flex", gap: "0.25rem" }}
          className="hidden md:flex"
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "0.4rem 0.75rem",
                  borderRadius: "6px",
                  fontSize: "0.875rem",
                  fontWeight: isActive ? 600 : 400,
                  textDecoration: "none",
                  transition: "all 0.2s ease",
                  color: isTransparent
                    ? isActive
                      ? "#fff"
                      : "rgba(255,255,255,0.8)"
                    : isActive
                      ? "var(--color-laut)"
                      : "var(--color-text-secondary)",
                  backgroundColor:
                    isActive && !isTransparent
                      ? "rgba(27,107,138,0.08)"
                      : "transparent",
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
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "0.5rem",
            color: isTransparent ? "#fff" : "var(--color-text)",
          }}
          className="md:hidden"
        >
          {isMenuOpen ? (
            // X icon
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {isMenuOpen && (
        <div
          style={{
            position: "absolute",
            top: "var(--navbar-height)",
            left: 0,
            right: 0,
            backgroundColor: "var(--color-white)",
            borderTop: "1px solid var(--color-border)",
            borderBottom: "1px solid var(--color-border)",
            padding: "0.75rem 0",
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "0.75rem 1.5rem",
                  fontSize: "0.9375rem",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? "var(--color-laut)" : "var(--color-text)",
                  textDecoration: "none",
                  borderLeft: isActive
                    ? "3px solid var(--color-laut)"
                    : "3px solid transparent",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
