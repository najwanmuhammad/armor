"use client";

import React, { useState, useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import SaberLoadingScreen from "./SaberLoadingScreen";

export default function SaberLoadingProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("MENGARUNGI MOROTAI");
  const [loadingSub, setLoadingSub] = useState("Memuat data & peta interaktif...");
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Intercept link clicks across the app (including #inovasi, /peta, etc.) to trigger Saber Loading Screen
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      // Ignore external links, mailto/tel, and same-page anchors / inovasi link
      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        href.startsWith("#") ||
        href.includes("inovasi")
      ) {
        return;
      }

      // Determine customized title based on target link
      if (href.includes("peta")) {
        setLoadingMsg("PETA INTERAKTIF MOROTAI");
        setLoadingSub("Memuat sistem navigasi geospasial & klaster pengabdian...");
      } else if (href.includes("tentang-kami")) {
        setLoadingMsg("TENTANG KAMI");
        setLoadingSub("Mengarungi cerita, visi, dan misi di Pulau Morotai...");
      } else if (href.includes("pencapaian")) {
        setLoadingMsg("PENCAPAIAN PROGRAM");
        setLoadingSub("Memuat hasil pengabdian nyata di desa-desa...");
      } else if (href.includes("artikel")) {
        setLoadingMsg("ARTIKEL & BERITA");
        setLoadingSub("Memuat kabar terbaru & publikasi kegiatan...");
      } else if (href.includes("galeri")) {
        setLoadingMsg("GALERI PENGABDIAN");
        setLoadingSub("Memuat dokumentasi visual perjalanan Arungi Morotai...");
      } else if (href.includes("sponsor")) {
        setLoadingMsg("MITRA & SPONSOR");
        setLoadingSub("Memuat kolaborasi strategis & dukungan pengabdian...");
      } else if (href.includes("beranda") || href === "/") {
        setLoadingMsg("BERANDA ARUNGI MOROTAI");
        setLoadingSub("Kembali ke pusat informasi utama Pulau Morotai...");
      } else {
        setLoadingMsg("MENGARUNGI MOROTAI");
        setLoadingSub("Memuat informasi & antarmuka terbaru...");
      }

      // Show Saber loading screen immediately and hold for 3.2 seconds so user can enjoy the effect
      setIsLoading(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setIsLoading(false);
      }, 3200);
    };

    document.addEventListener("click", handleLinkClick, { capture: true });
    return () => {
      document.removeEventListener("click", handleLinkClick, { capture: true });
    };
  }, []);

  return (
    <>
      {isLoading && (
        <div key={`saber-fixed-overlay-${loadingMsg}`} style={{ animation: "fadeIn 0.3s ease forwards", zIndex: 999999, position: "relative" }}>
          <SaberLoadingScreen key={`saber-pure-shimmer-logo-${loadingMsg}`} message={loadingMsg} subMessage={loadingSub} />
        </div>
      )}
      {children}
    </>
  );
}

