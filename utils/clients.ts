import SanityClient from "@sanity/client";


export const client = SanityClient({
  projectId: "pqyxd5fp",
  dataset: "production",
  apiVersion: "2022-03-10",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});
