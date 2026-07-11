import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: "desa",                   // ← dataset desa
    apiVersion: "2024-01-01",
    useCdn: true,
});

const builder = imageUrlBuilder(client);
export const urlFor = (source: Parameters<typeof builder.image>[0]) => builder.image(source);