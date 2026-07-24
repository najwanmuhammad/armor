import type { SanityImageSource } from "@sanity/image-url";

/** Raw Sanity image reference (belum dikonversi ke URL). */
export type SanityImage = SanityImageSource;

export interface PekerjaanItem {
  label: string;
  jumlah: number;
}

export interface Demografi {
  jumlahPenduduk?: number;
  jumlahKK?: number;
  jumlahLakiLaki?: number;
  jumlahPerempuan?: number;
  luasWilayah?: string;
  jumlahDusun?: number;
  pekerjaan?: PekerjaanItem[];
}

export interface Kontak {
  alamat?: string;
  telepon?: string;
  email?: string;
  instagram?: string;
  facebook?: string;
}

export interface Koordinat {
  lat?: number;
  lng?: number;
}

export interface Desa {
  _id: string;
  nama: string;
  slug: string;
  tagline?: string;
  warna?: string;
  fotoCover?: SanityImage;
  sejarah?: unknown[];
  visi?: string;
  misi?: string[];
  demografi?: Demografi;
  kontak?: Kontak;
  koordinat?: Koordinat;
}

export type BeritaKategori =
  | "berita"
  | "pengumuman"
  | "kegiatan"
  | "wisata"
  | "umkm";

export interface Berita {
  _id: string;
  judul: string;
  slug: string;
  kategori: BeritaKategori;
  thumbnail?: SanityImage;
  ringkasan?: string;
  tanggal: string;
}

export interface GaleriFoto {
  _key: string;
  image: SanityImage;
  caption?: string;
}

export interface GaleriAlbum {
  _id: string;
  judul: string;
  kategori: string;
  tanggal?: string;
  foto: GaleriFoto[];
}
