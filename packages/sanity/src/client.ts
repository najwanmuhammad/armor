import { createClient } from "next-sanity";

export function createSanityClient(config: {
  projectId: string;
  dataset: string;
  useCdn?: boolean;
}) {
  return createClient({
    projectId: config.projectId,
    dataset: config.dataset,
    apiVersion: "2024-01-01",
    useCdn: config.useCdn ?? true,
  });
}
