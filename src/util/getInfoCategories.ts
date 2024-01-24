import { DIRECTUS_URL } from "@/constants";
import { CategoriasNav } from "@/types/CategoriasNav";
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

export async function CategoriasNav(slug: string) {
  const posts = await directus.request(
    readItems("CategoriasNav" as any, {
      filter: {
        slug: {
          _eq: slug
        }
      },
 
    })
  );
  console.log(posts);

  return posts[0] as unknown as CategoriasNav ?? null;
 
};