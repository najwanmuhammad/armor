import Hero from "../components/home/Hero";
import DemografiSection from "../components/home/DemografiSection";
import BeritaSection, {
  type BeritaCardView,
} from "../components/home/BeritaSection";
import GaleriSection, {
  type GaleriImageView,
} from "../components/home/GaleriSection";
import {
  getDesaCached,
  getBeritaBeranda,
  getGaleriBeranda,
  urlFor,
} from "../lib/sanity";
import type { SanityImage } from "@arungimorotai/sanity";

export const revalidate = 3600;

function imgUrl(source: SanityImage | undefined, w: number, h?: number) {
  if (!source) return undefined;
  try {
    const b = urlFor(source).width(w).auto("format").quality(80);
    return (h ? b.height(h).fit("crop") : b).url();
  } catch {
    return undefined;
  }
}

export default async function BerandaPage() {
  const [desa, berita, galeri] = await Promise.all([
    getDesaCached(),
    getBeritaBeranda(),
    getGaleriBeranda(),
  ]);

  const nama = desa?.nama ?? "Desa Koloray";

  // Aset lokal dari public/ dipakai sebagai fallback ketika konten Sanity
  // belum punya gambar (mis. thumbnail berita / foto galeri belum diupload).
  const localImages = [
    "/images/image1.webp",
    "/images/image3.webp",
    "/images/image2.webp",
  ];

  const beritaItems: BeritaCardView[] = (berita ?? []).map((b, i) => ({
    _id: b._id,
    judul: b.judul,
    slug: b.slug,
    kategori: b.kategori,
    tanggal: b.tanggal,
    ringkasan: b.ringkasan,
    thumbnailUrl:
      imgUrl(b.thumbnail, 760, 600) ?? localImages[i % localImages.length],
  }));

  const galeriFromSanity: GaleriImageView[] = (galeri ?? [])
    .flatMap((album) => album.foto ?? [])
    .filter((f) => f?.image)
    .map((f) => ({ url: imgUrl(f.image, 800, 800)!, caption: f.caption }))
    .filter((f) => f.url);

  const galeriImages: GaleriImageView[] =
    galeriFromSanity.length > 0
      ? galeriFromSanity
      : localImages.map((url) => ({ url }));

  return (
    <>
      <Hero
        nama={nama}
        tagline={desa?.tagline}
        imageUrl={
          imgUrl(desa?.fotoCover, 1920, 1080) ?? "/images/hero-image.webp"
        }
      />
      <DemografiSection demografi={desa?.demografi} />
      <BeritaSection items={beritaItems} />
      <GaleriSection images={galeriImages} />
    </>
  );
}
