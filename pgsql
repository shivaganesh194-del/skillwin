User clicks PAY ₹10
        ↓
JS calls Firebase Cloud Function
        ↓
Cloud Function creates Razorpay Order
        ↓
Order ID returned to browser
        ↓
Razorpay Checkout opens
        ↓
Payment success → verify signature
        ↓
Tickets generated + stored in Firestore
