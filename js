function payNow() {
  var options = {
    "key": "rzp_test_YOUR_KEY_ID",
    "amount": 1000, // ₹10 ONLY
    "currency": "INR",
    "name": "SkillWin",
    "description": "Skill-based Contest Entry (₹10)",
    "handler": function (response) {
      alert("Payment Successful: " + response.razorpay_payment_id);

      // send payment ID to Firebase for verification
    },
    "theme": {
      "color": "#16a34a"
    }
  };

  var rzp = new Razorpay(options);
  rzp.open();
}
