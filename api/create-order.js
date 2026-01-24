import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const { phone, payment_id, referred_by } = req.body;

  const ticketCode = "SKW-" + Date.now();

  // 1️⃣ Insert paid ticket
  await supabase.from("tickets").insert([
    {
      phone,
      payment_id,
      ticket_code: ticketCode,
      referred_by: referred_by || null
    }
  ]);

  // 2️⃣ Referral bonus ticket
  if (referred_by) {
    const bonusCode = "SKW-BONUS-" + Date.now();

    await supabase.from("tickets").insert([
      {
        phone: referred_by,
        payment_id: "REFERRAL",
        ticket_code: bonusCode
      }
    ]);
  }

  res.json({
    success: true,
    ticket: ticketCode
  });
}
