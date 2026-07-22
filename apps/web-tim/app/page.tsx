import Header from "@/src/Header/Header";
import Hero from "@/src/Hero/Hero";
import TentangKami from "@/src/TentangKami/TentangKami";
import TimProfile from "@/src/TentangKami/TimProfile";
import TemaTimeline from "@/src/TemaTimeline/TemaTimeline";
import ProfilDesa from "@/src/ProfilDesa/ProfilDesa";
import ProgramKerja from "@/src/ProgramKerja/ProgramKerja";
import SponsorMitra from "@/src/SponsorMitra/SponsorMitra";
import KontakFooter from "@/src/Kontak/KontakFooter";
import { createSanityClient, getAnggota } from "@arungimorotai/sanity";

export const revalidate = 0; // Auto fetch terbaru setiap refresh halaman

export default async function Home() {
  const client = createSanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2nwcacnk",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "tim",
    useCdn: false, // Set false agar data live dari Sanity Studio langsung ter-update saat direfresh!
  });

  const rawMembers = await getAnggota(client).catch(() => []);

  return (
    <>
      <Header />
      <Hero />
      <TentangKami />
      <TimProfile sanityMembers={rawMembers} />
      <TemaTimeline />
      <ProfilDesa />
      <ProgramKerja />
      <SponsorMitra />
      <KontakFooter />
    </>
  );
}
