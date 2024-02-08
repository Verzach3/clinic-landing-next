import getSupaClient from "@/util/getSupaClient";


export async function getCategoriasNav(slug: string) {
  return (await getSupaClient().from("info_articles").select("*").eq("slug", slug).single()).data
}