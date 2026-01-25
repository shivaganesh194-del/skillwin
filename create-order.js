import Razorpay from "razorpay";
import { createClient } from "@supabase/supabase-js";

const razorpay = new Razorpay({
  key_id: process.env.rzp_test_S5ix2RrfFFJITe,
  key_secret: process.env.NpbZgHO077BQ7i4WZKD21FBO,
});

const supabase = createClient(
  process.env.https://xxxx.supabase.co,
  process.env.vck_7LmUaGUuWCCXG9SH9bLO5LUeVb75oV0Kg6kgxLbTmEnsxxoYRl0XYBIw
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { phone, payment_id } = req.body;

  // generate ticket
  const ticketNumber = "TKT-" + Math.floor(100000 + Math.random() * 900000);

  // save ticket
  await supabase.from("tickets").insert([
    {
      phone,
      payment_id,
      ticket_number: ticketNumber,
    },
  ]);

  res.status(200).json({
    success: true,
    ticketNumber,
  });
}
