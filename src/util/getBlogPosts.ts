import getSupaClient from "@/util/getSupaClient";

export const revalidate = 60;
export const getBlogPosts = async () => {
  return (await getSupaClient().from("blog_posts").select("*")).data;
};
