import type { SanityClient } from "next-sanity";

import {
  desaQuery,
  beritaQuery,
  beritaTerbaruQuery,
  galeriFotoQuery,
  wisataQuery,
} from "./queries";
import type { Desa, Berita, GaleriAlbum } from "./types";

type FetchOptions = { revalidate?: number | false };

function nextOpts(options?: FetchOptions) {
  if (!options || options.revalidate === undefined) return undefined;
  return { next: { revalidate: options.revalidate } };
}

export async function getDesa(
  client: SanityClient,
  slug: string,
  options?: FetchOptions,
): Promise<Desa | null> {
  return client.fetch(desaQuery, { slug }, nextOpts(options));
}

export async function getBeritaTerbaru(
  client: SanityClient,
  slug: string,
  limit = 6,
  options?: FetchOptions,
): Promise<Berita[]> {
  return client.fetch(beritaTerbaruQuery, { slug, limit }, nextOpts(options));
}

export async function getBerita(
  client: SanityClient,
  slug: string,
  options?: FetchOptions,
): Promise<Berita[]> {
  return client.fetch(beritaQuery, { slug }, nextOpts(options));
}

export async function getGaleri(
  client: SanityClient,
  slug: string,
  options?: FetchOptions,
): Promise<GaleriAlbum[]> {
  return client.fetch(galeriFotoQuery, { slug }, nextOpts(options));
}

export async function getWisata(
  client: SanityClient,
  slug: string,
  options?: FetchOptions,
) {
  return client.fetch(wisataQuery, { slug }, nextOpts(options));
}
