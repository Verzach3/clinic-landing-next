import { DIRECTUS_URL } from "@/constants";
import { Categories } from "@/types/Categories";
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

export async function getCategoriesPost(slug: string) {
  const posts = await directus.request(
    readItems("InfoCategories" as any, {
      filter: {
        slug: {
          _eq: slug
        }
      },
 
    })
  );

  return posts[0] as unknown as Categories ?? null;
 
};