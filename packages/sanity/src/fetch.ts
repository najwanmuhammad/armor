import type { SanityClient } from "next-sanity";

import { beritaQuery, wisataQuery, desaQuery, anggotaQuery, mitraQuery } from "./queries";

export async function getBerita(client: SanityClient, slug: string) {
  return client.fetch(beritaQuery, { slug });
}

export async function getWisata(client: SanityClient, slug: string) {
  return client.fetch(wisataQuery, { slug });
}

export async function getDesa(client: SanityClient, slug: string) {
  return client.fetch(desaQuery, { slug });
}

export async function getAnggota(client: SanityClient) {
  return client.fetch(anggotaQuery, {}, { cache: "no-store", next: { revalidate: 0 } });
}

export async function getMitra(client: SanityClient) {
  return client.fetch(mitraQuery, {}, { cache: "no-store", next: { revalidate: 0 } });
}
