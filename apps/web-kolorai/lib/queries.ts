import { groq } from "next-sanity";

// Semua query difilter by slug desa "kolorai"
export const beritaQuery = groq`
  *[_type == "berita" && desa->slug.current == "kolorai"]
  | order(tanggal desc) {
    _id, judul, slug, thumbnail, tanggal, kategori
  }
`;

export const wisataQuery = groq`
  *[_type == "wisata" && desa->slug.current == "kolorai"] {
    _id, nama, deskripsi, foto, koordinat, tipe
  }
`;

export const desaQuery = groq`
  *[_type == "desa" && slug.current == "kolorai"][0] {
    nama, sejarah, visiMisi, demografi
  }
`;