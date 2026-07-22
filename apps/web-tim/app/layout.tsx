import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
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

const madeTommy = localFont({
  src: [
    {
      path: "../public/fonts/made_tommy/MADE TOMMY Thin_PERSONAL USE.otf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/made_tommy/MADE TOMMY Light_PERSONAL USE.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/made_tommy/MADE TOMMY Regular_PERSONAL USE.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/made_tommy/MADE TOMMY Medium_PERSONAL USE.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/made_tommy/MADE TOMMY Bold_PERSONAL USE.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/made_tommy/MADE TOMMY ExtraBold_PERSONAL USE.otf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-made-tommy",
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
        className={`${madeTommy.variable} ${madeTommy.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SaberLoadingProvider>
          {children}
        </SaberLoadingProvider>
      </body>
    </html>
  );
}
