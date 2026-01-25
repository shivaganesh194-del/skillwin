import Razorpay from "razorpay";

export default async function handler(req, res) {
  const razorpay = new Razorpay({
    key_id: process.env.rzp_test_S5ix2RrfFFJITe,
    key_secret: process.env.NpbZgHO077BQ7i4WZKD21FBO,
  });

  const order = await razorpay.orders.create({
    amount: 1000, // ₹10
    currency: "INR",
    receipt: "skillwin_" + Date.now(),
  });

  res.status(200).json({
    order_id: order.id,
    amount: order.amount,
    key: process.env.rzp_test_S5ix2RrfFFJITe,
  });
}
