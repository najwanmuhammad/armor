import Header from "@/src/Header/Header";
import DokumentasiGaleri from "@/src/Dokumentasi/DokumentasiGaleri";
import KontakFooter from "@/src/Kontak/KontakFooter";

export const revalidate = 0;

export default function DokumentasiPage() {
  return (
    <>
      <Header />
      <DokumentasiGaleri />
      <KontakFooter />
    </>
  );
}
