import { groq } from "next-sanity";

export const beritaQuery = groq`
*[
  _type == "berita" &&
  desa->slug.current == $slug
]
| order(tanggal desc){
  _id,
  judul,
  slug,
  thumbnail,
  tanggal,
  kategori
}
`;

export const wisataQuery = groq`
*[
  _type == "wisata" &&
  desa->slug.current == $slug
]{
  _id,
  nama,
  deskripsi,
  foto,
  koordinat,
  tipe
}
`;

export const desaQuery = groq`
*[
  _type == "desa" &&
  slug.current == $slug
][0]{
  nama,
  sejarah,
  visiMisi,
  demografi
}
`;
