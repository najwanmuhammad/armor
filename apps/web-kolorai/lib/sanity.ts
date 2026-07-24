import { cache } from "react";
import {
  createSanityClient,
  createImageHelpers,
  getDesa,
  getBeritaTerbaru,
  getGaleri,
} from "@arungimorotai/sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "desa";

export const DESA_SLUG = process.env.NEXT_PUBLIC_DESA_SLUG ?? "kolorai";

export const client = createSanityClient({ projectId, dataset });

export const { urlFor, getBlurDataUrl } = createImageHelpers(client);

/** Dedupe fetch profil desa dalam satu render (dipakai layout + page). */
export const getDesaCached = cache(() =>
  getDesa(client, DESA_SLUG, { revalidate: 3600 }),
);

export const getBeritaBeranda = cache(() =>
  getBeritaTerbaru(client, DESA_SLUG, 6, { revalidate: 600 }),
);

export const getGaleriBeranda = cache(() =>
  getGaleri(client, DESA_SLUG, { revalidate: 1800 }),
);
