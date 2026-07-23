import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SaberLoadingProvider from "@/src/Loading/SaberLoadingProvider";
import { createSanityClient, getPengaturanSitus } from "@arungimorotai/sanity";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const client = createSanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2nwcacnk",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "tim",
    useCdn: false,
  });

  const rawSettings = await getPengaturanSitus(client).catch(() => []);

  // Find logos
  const findLogoUrl = (title: string, defaultPath: string) => {
    const asset = rawSettings?.find(
      (a: any) => a.type === "image" && a.title?.trim().toLowerCase() === title.toLowerCase()
    );
    return asset?.fileUrl || defaultPath;
  };

  const logoPutih = findLogoUrl("putih", "/Logo Putih.png");
  const logoKilauCita = findLogoUrl("kilau cita", "/Logo Putih.png");
  return (
    <html lang="en">
      <body
        className={`${madeTommy.variable} ${madeTommy.className} ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SaberLoadingProvider logoPutihUrl={logoPutih} logoKilauUrl={logoKilauCita}>
          {children}
        </SaberLoadingProvider>
      </body>
    </html>
  );
}
