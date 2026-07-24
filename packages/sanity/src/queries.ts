import { groq } from "next-sanity";

/**
 * Profil desa lengkap — dipakai untuk hero, demografi, kontak, dan footer.
 * Difilter berdasarkan slug desa ("kolorai" | "yayasan").
 */
export const desaQuery = groq`
*[
  _type == "desa" &&
  slug.current == $slug
][0]{
  _id,
  nama,
  "slug": slug.current,
  tagline,
  warna,
  fotoCover,
  sejarah,
  visi,
  misi,
  demografi{
    jumlahPenduduk,
    jumlahKK,
    jumlahLakiLaki,
    jumlahPerempuan,
    luasWilayah,
    jumlahDusun,
    pekerjaan[]{ label, jumlah }
  },
  kontak{
    alamat,
    telepon,
    email,
    instagram,
    facebook
  },
  koordinat{ lat, lng }
}
`;

/**
 * Berita terbaru untuk sebuah desa. Batas jumlah lewat parameter $limit.
 */
export const beritaTerbaruQuery = groq`
*[
  _type == "berita" &&
  desa->slug.current == $slug
]
| order(tanggal desc)[0...$limit]{
  _id,
  judul,
  "slug": slug.current,
  kategori,
  thumbnail,
  ringkasan,
  tanggal
}
`;

/**
 * Daftar berita lengkap (untuk halaman /berita).
 */
export const beritaQuery = groq`
*[
  _type == "berita" &&
  desa->slug.current == $slug
]
| order(tanggal desc){
  _id,
  judul,
  "slug": slug.current,
  kategori,
  thumbnail,
  ringkasan,
  tanggal
}
`;

/**
 * Foto galeri (di-flatten dari setiap album) untuk sebuah desa.
 * Mengembalikan tiap foto sebagai item terpisah, sudah diurutkan terbaru.
 */
export const galeriFotoQuery = groq`
*[
  _type == "galeri" &&
  desa->slug.current == $slug
]
| order(tanggal desc){
  _id,
  judul,
  kategori,
  tanggal,
  foto[]{ _key, "image": @, caption }
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
  tipe,
  unggulan
}
`;
