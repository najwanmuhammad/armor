import imageUrlBuilder from "@sanity/image-url";
import type { SanityClient } from "next-sanity";
import type { SanityImageSource } from "@sanity/image-url";

export function createImageHelpers(client: SanityClient) {
  const builder = imageUrlBuilder(client);

  return {
    urlFor(source: SanityImageSource) {
      return builder.image(source);
    },

    getBlurDataUrl(source: SanityImageSource) {
      return builder.image(source).width(20).quality(20).blur(10).url();
    },
  };
}
