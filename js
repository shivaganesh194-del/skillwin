var options = {
  key: "RAZORPAY_KEY_ID_HERE",
  amount: 1000, // ₹10
  currency: "INR",
  name: "SkillWin",
  description: "Contest Entry Fee",

  method: {
    upi: true,
    card: false,
    netbanking: false,
    wallet: false,
    emi: false
  },

  handler: function (response) {
    document.getElementById("paymentBox").classList.add("hidden");
    document.getElementById("resultBox").classList.remove("hidden");
    console.log("Payment ID:", response.razorpay_payment_id);
  },

  theme: {
    color: "#0a7cff"
  }
};
