import SanityClient from "next-sanity-client";

export const sanityClient = new SanityClient({
  projectId: "t7orougd",
  dataset: "production",
  useCdn: process.env.NODE_ENV === "production",
});
