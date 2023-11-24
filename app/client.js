import { createClient } from "next-sanity";

const client = createClient({
  projectId: "gcghkey5",
  dataset: "production",
  apiVersion: "2023-11-21", // Update to the latest API version
  useCdn: true, // Enable CDN caching
});

export default client;
