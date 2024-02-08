import {createClient} from "@supabase/supabase-js";
import {Database} from "@/types/database.types";

export default function getSupaClient() {
  return createClient<Database>(url, anonKey, {
    global: {
      fetch: (url, options) => fetch(url, {cache: "no-cache",...options})
    }
  });
}

const anonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN1cm1ndHJucnB5anNpenloZHp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDUzNTIwMTgsImV4cCI6MjAyMDkyODAxOH0.OmdJp7ZUHWFyq2qfolimERaak6lgd1eUziUJNxM2mn0"
const url = "https://curmgtrnrpyjsizyhdzy.supabase.co"