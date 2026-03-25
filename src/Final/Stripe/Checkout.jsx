import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";


function Checkout() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const payNow = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // 1. Call Firebase Function
      const res = await fetch(
        "http://localhost:5001/YOUR_PROJECT_ID/us-central1/createPaymentIntent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ amount: 10 }), // $10
        }
      );

      const data = await res.json();

      // 2. Confirm Stripe Payment
      const result = await stripe.confirmCardPayment(data.clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      });

      if (result.error) {
        setMessage(result.error.message);
      } else {
        setMessage("🎉 Payment Successful!");
      }
    } catch (err) {
      setMessage("Payment failed. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div className="h-80 flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-center mb-6 text-2xl font-semibold text-gray-800">Stripe Payment</h2>
        <form onSubmit={payNow}>
          <div className="border border-gray-300 rounded-md p-3 mb-5 bg-gray-50">
            <CardElement options={{ style: { base: { fontSize: '16px', color: '#333', '::placeholder': { color: '#888' } } } }} />
          </div>
          <button
            disabled={!stripe || loading}
            className="w-full p-3 rounded-md bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition disabled:opacity-60"
          >
            {loading ? "Processing..." : "Pay $10"}
          </button>
        </form>
        {message && (
          <div className={`mt-5 text-center font-medium ${message.includes("Successful") ? "text-green-600" : "text-red-600"}`}>{message}</div>
        )}
      </div>
    </div>
  );
}

export default Checkout;