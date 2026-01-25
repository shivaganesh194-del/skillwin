import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const { phone, contest_id, is_correct } = req.body;

  // 1️⃣ Ensure user exists
  const { data: user } = await supabase
    .from("users")
    .upsert({ phone })
    .select()
    .single();

  // 2️⃣ Create ticket
  await supabase.from("tickets").insert({
    user_id: user.id,
    contest_id,
    is_correct
  });

  res.status(200).json({ success: true });
}
