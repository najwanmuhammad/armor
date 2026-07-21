import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SaberLoadingProvider from "@/src/Loading/SaberLoadingProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arungi Morotai | KKN-PPM UGM",
  description: "Portal web resmi tim KKN-PPM UGM Arungi Morotai - Mengarungi cerita, inovasi digital, penguatan desa, dan konservasi alam di Pulau Morotai.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SaberLoadingProvider>
          {children}
        </SaberLoadingProvider>
      </body>
    </html>
  );
}
