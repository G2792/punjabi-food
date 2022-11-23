import SanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = SanityClient({
    projectId: "e5j3mx6h",
    dataset: "production",
    useCdn: true,
    apiVersion: "2022-11-22",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

export default client;