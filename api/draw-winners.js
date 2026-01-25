import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  const { data } = await supabase
    .from("tickets")
    .select("user_id")
    .eq("is_correct", true);

  const shuffled = data.sort(() => 0.5 - Math.random());
  const winners = shuffled.slice(0, 5);

  res.status(200).json({ winners });
}
