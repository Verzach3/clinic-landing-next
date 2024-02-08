import getSupaClient from "@/util/getSupaClient";


export async function getInfoPost(path: string)  {
  console.log(path)
  const res =(await getSupaClient().from("info_persons").select("*").eq("path", path).single())
  console.log(res)
  return res.data
}