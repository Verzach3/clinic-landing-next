import { DIRECTUS_URL } from "@/constants";
import { BlogPost } from "@/types/BlogPost";
import {
  DirectusClient,
  RestClient,
  createDirectus,
  readItems,
  rest,
} from "@directus/sdk";

const directus: DirectusClient<any> & RestClient<any> = createDirectus(
  DIRECTUS_URL
).with(
  rest({
    onRequest: (config) => {
      config.mode = "no-cors";
      config.cache = "no-store";
      return config;
    },
  })
);

export const getBlogPosts = async () => {
  const posts = await directus.request(
    readItems("blog" as any, {
      filter: {
        published: {
          _eq: true,
        },
      },
      fields: [
        "id",
        "title",
        "slug",
        "published_on",
        "author",
        "cover_image",
        "tags",
        "categories",
        "in_carousel"
      ],
    })
  );
  return posts as unknown as BlogPost[];
};
