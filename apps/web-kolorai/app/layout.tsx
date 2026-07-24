import type { Metadata } from "next";
import "./globals.css";
import { madeTommy } from "./fonts";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { getDesaCached } from "../lib/sanity";

export const metadata: Metadata = {
  title: {
    default: "Desa Koloray — Portal Resmi Desa",
    template: "%s | Desa Koloray",
  },
  description:
    "Portal Informasi Resmi dan Layanan Mandiri Terintegrasi Desa Koloray, Kecamatan Morotai Selatan, Kabupaten Pulau Morotai.",
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const desa = await getDesaCached();

  return (
    <html lang="id" className={madeTommy.variable}>
      <body>
        <Navbar />
        <main style={{ minHeight: "60vh" }}>{children}</main>
        <Footer desa={desa} />
      </body>
    </html>
  );
}
