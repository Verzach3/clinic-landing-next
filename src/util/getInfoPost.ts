import { cache } from "react"
import { createDirectus, rest, DirectusClient, RestClient, readItems } from "@directus/sdk"
import { DIRECTUS_URL } from "@/constants"
const directus: DirectusClient<any> & RestClient<any> = createDirectus(DIRECTUS_URL).with(rest({onRequest: (config) => {
  config.mode = "no-cors"
  config.cache = "no-store"
  return config
}}));

export const revalidate = 1;

export const getInfoPost = async (path: string) => {
  const posts = await directus.request(readItems("infopersons" as any, {
    filter: {
      path: {
        _eq: path
      }
    }
  }))
  return posts[0] ?? null
}