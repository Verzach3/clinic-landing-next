import getSupaClient from "@/util/getSupaClient";


export async function getInfoPost(path: string)  {
  const res =(await getSupaClient().from("info_persons").select("*").eq("path", path).single())
  return res.data
}