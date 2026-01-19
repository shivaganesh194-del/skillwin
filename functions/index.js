const functions = require("firebase-functions");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: "RAZORPAY_KEY_ID",
  key_secret: "RAZORPAY_SECRET"
});

exports.createOrder = functions.https.onRequest(async (req, res) => {
  const options = {
    amount: 1000, // ₹10 in paise
    currency: "INR",
    receipt: "skillwin_" + Date.now()
  };

  const order = await razorpay.orders.create(options);
  res.json(order);
});
