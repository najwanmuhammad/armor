import "@/src/Peta/peta.css";
import Peta from "@/src/Peta/Peta";
import Header from "@/src/Header/Header";
import { createSanityClient, getPengaturanSitus } from "@arungimorotai/sanity";

export const revalidate = 0;

export default async function PetaPage() {
  const client = createSanityClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "2nwcacnk",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "tim",
    useCdn: false,
  });

  const rawSettings = await getPengaturanSitus(client).catch(() => []);

  const findLogoUrl = (title: string, defaultPath: string) => {
    const asset = rawSettings?.find(
      (a: any) => a.type === "image" && a.title?.trim().toLowerCase() === title.toLowerCase()
    );
    return asset?.fileUrl || defaultPath;
  };

  const logoPutihUrl = findLogoUrl("putih", "/Logo Putih.png");
  const logoHitamUrl = findLogoUrl("hitam", "/Logo Hitam.png");
  const pasirTimbulUrl = findLogoUrl("pasir timbul", "/images/pasir_timbul.jpg");

  return (
    <>
      <Header logoPutihUrl={logoPutihUrl} logoHitamUrl={logoHitamUrl} />
      <div style={{ paddingTop: "70px" }}>
        <Peta pasirTimbulUrl={pasirTimbulUrl} />
      </div>
    </>
  );
}
