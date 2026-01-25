// /api/create-order.js

export default function handler(req, res) {
  // Allow only POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, phone, answer } = req.body;

    // Basic validation
    if (!name || !phone || !answer) {
      return res.status(400).json({
        error: "Missing required fields",
      });
    }

    // ❌ If wrong answer selected
    const CORRECT_ANSWER = "Gravity"; // change if needed
    if (answer !== CORRECT_ANSWER) {
      return res.status(200).json({
        status: "wrong",
        message: "Wrong answer selected. Better luck next time.",
      });
    }

    // ✅ Create order (₹10 entry)
    const orderId = "ORD" + Date.now();

    // Your UPI ID (CHANGE THIS)
    const UPI_ID = "yourupi@okicici";
    const AMOUNT = 10;

    // UPI deep link (ONLY UPI — no cards/netbanking)
    const upiLink = `upi://pay?pa=${UPI_ID}&pn=SkillWin&am=${AMOUNT}&cu=INR&tn=Order%20${orderId}`;

    return res.status(200).json({
      status: "success",
      message: "You are the winner (results declared after draw)",
      orderId,
      amount: AMOUNT,
      upiLink,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Server error",
    });
  }
}
function shareWhatsApp() {
  const msg = encodeURIComponent(
    "I joined SkillWin Contest! Answer a simple science question & win ₹5 Lakhs 🏆\nJoin now 👇\nhttps://YOUR_LIVE_LINK.vercel.app"
  );
  window.open(`https://wa.me/?text=${msg}`, "_blank");
}
const params = new URLSearchParams(window.location.search);
const referrerId = params.get("ref");

if (referrerId) {
  localStorage.setItem("referrer_id", referrerId);
}
