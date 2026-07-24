import Header from "@/src/Header/Header";
import Hero from "@/src/Hero/Hero";
import TentangKami from "@/src/TentangKami/TentangKami";
import TimProfile from "@/src/TentangKami/TimProfile";
import TemaTimeline from "@/src/TemaTimeline/TemaTimeline";
import ProfilDesa from "@/src/ProfilDesa/ProfilDesa";
import ProgramKerja from "@/src/ProgramKerja/ProgramKerja";
import Galeri from "@/src/Galeri/Galeri";
import SponsorMitra from "@/src/SponsorMitra/SponsorMitra";
import KontakFooter from "@/src/Kontak/KontakFooter";
import { createSanityClient, getAnggota, getMitra, getPengaturanSitus } from "@arungimorotai/sanity";

export const revalidate = 0; // Auto fetch terbaru setiap refresh halaman

export default async function Home() {
  const client = createSanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2nwcacnk",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "tim",
    useCdn: false, // Set false agar data live dari Sanity Studio langsung ter-update saat direfresh!
  });

  const [rawMembers, rawMitra, rawSettings] = await Promise.all([
    getAnggota(client).catch(() => []),
    getMitra(client).catch(() => []),
    getPengaturanSitus(client).catch(() => []),
  ]);

  // Find the video background from settings
  const backgroundVideoAsset = rawSettings?.find(
    (asset: any) => asset.type === "video" && asset.title?.trim().toLowerCase() === "background beranda"
  );
  const heroVideoUrl = backgroundVideoAsset?.fileUrl || "/Video Project 4.mp4";

  // Find logos
  const findLogoUrl = (title: string, defaultPath: string) => {
    const asset = rawSettings?.find(
      (a: any) => a.type === "image" && a.title?.trim().toLowerCase() === title.toLowerCase()
    );
    return asset?.fileUrl || defaultPath;
  };

  const logoPutihUrl = findLogoUrl("putih", "/Logo Putih.png");
  const logoHitamUrl = findLogoUrl("hitam", "/Logo Hitam.png");
  // Assuming 'logo armor' is used instead of Logo Putih in Hero
  const logoArmorUrl = findLogoUrl("logo armor", logoPutihUrl);
  const petaVectorUrl = findLogoUrl("peta_vector", "/images/peta_vector.png");
  const pasirTimbulUrl = findLogoUrl("pasir timbul", "/images/pasir_timbul.jpg");

  return (
    <>
      <Header logoPutihUrl={logoArmorUrl} logoHitamUrl={logoHitamUrl} />
      <Hero videoUrl={heroVideoUrl} logoUrl={logoPutihUrl} />
      <TentangKami petaVectorUrl={petaVectorUrl} />
      <TimProfile sanityMembers={rawMembers} petaVectorUrl={petaVectorUrl} />
      <TemaTimeline petaVectorUrl={petaVectorUrl} pasirTimbulUrl={pasirTimbulUrl} />
      <ProfilDesa petaVectorUrl={petaVectorUrl} />
      <ProgramKerja petaVectorUrl={petaVectorUrl} />
      <Galeri petaVectorUrl={petaVectorUrl} />
      <SponsorMitra mitraData={rawMitra} petaVectorUrl={petaVectorUrl} />
      <KontakFooter petaVectorUrl={petaVectorUrl} />
    </>
  );
}
