function goToPayment() {
  // hide step1
  document.getElementById("step1").style.display = "none";
  // show step2
  document.getElementById("step2").style.display = "block";
}

function payNow() {
  // stub for now
  // After real payment integration, replace this with actual logic
  // For demo, show step3 with dummy ticket numbers
  document.getElementById("step2").style.display = "none";
  document.getElementById("step3").style.display = "block";
  // dummy tickets
  document.getElementById("tickets").innerText =
    "SW202600001, SW202600002, SW202600003, SW202600004, SW202600005";
}

function shareWhatsApp() {
  const shareText = encodeURIComponent(
    "I just entered a skill-based contest for ₹10 and got 5 tickets 🎟️\nAnswer 1 question & try your luck.\n\nJoin here 👉 " +
      window.location.href
  );
  window.location.href = `https://wa.me/?text=${shareText}`;
}

function viewTerms() {
  alert(
    "Terms & Conditions apply. This is a skill-based promotional contest. 18+ only."
  );
}
