import type { SanityClient } from "next-sanity";

import { beritaQuery, wisataQuery, desaQuery } from "./queries";

export async function getBerita(client: SanityClient, slug: string) {
  return client.fetch(beritaQuery, { slug });
}

export async function getWisata(client: SanityClient, slug: string) {
  return client.fetch(wisataQuery, { slug });
}

export async function getDesa(client: SanityClient, slug: string) {
  return client.fetch(desaQuery, { slug });
}
