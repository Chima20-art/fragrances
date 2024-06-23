import SanityClient from "next-sanity-client";
import createImageUrlBuilder from "@sanity/image-url";

export const sanityClient = new SanityClient({
  projectId: "t7orougd",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production",
});

const imageBuilder = createImageUrlBuilder({
  projectId: "t7orougd",
  dataset: "production",
});

export const urlForImage = (source: any) => {
  return imageBuilder?.image(source).auto("format").fit("max").url();
};
