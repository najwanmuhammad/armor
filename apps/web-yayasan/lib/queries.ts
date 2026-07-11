import { groq } from "next-sanity";

// Semua query difilter by slug desa "yayasan"
export const beritaQuery = groq`
  *[_type == "berita" && desa->slug.current == "yayasan"]
  | order(tanggal desc) {
    _id, judul, slug, thumbnail, tanggal, kategori
  }
`;

export const wisataQuery = groq`
  *[_type == "wisata" && desa->slug.current == "yayasan"] {
    _id, nama, deskripsi, foto, koordinat, tipe
  }
`;

export const desaQuery = groq`
  *[_type == "desa" && slug.current == "yayasan"][0] {
    nama, sejarah, visiMisi, demografi
  }
`;