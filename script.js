function payNow() {
  var options = {
    key: "NpbZgHO077BQ7i4WZKD21FBO", // rzp_test_S5ix2RrfFFJITe
    amount: 1000, // ₹10 = 1000 paise
    currency: "INR",
    name: "SkillWin",
    description: "Skill-based Contest Entry",
    handler: function (response) {
      alert(
        "Payment Successful!\nPayment ID:\n" +
        response.razorpay_payment_id
      );
    },
    theme: {
      color: "#22c55e"
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}
key: window.RAZORPAY_KEY,
