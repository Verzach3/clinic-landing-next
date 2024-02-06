import getSupaClient from "@/util/getSupaClient";

export async function getBlogPost(slug: string) {
  return (await getSupaClient().from("blog_posts").select("*").eq("Slug", slug).single()).data
}