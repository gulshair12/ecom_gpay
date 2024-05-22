import React, { useState } from "react";
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const Checkout = ({ amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardNumberElement);

    const { error: paymentError, paymentIntent } =
      await stripe.confirmCardPayment("{{CLIENT_SECRET}}", {
        payment_method: {
          card: cardElement,
        },
      });

    if (paymentError) {
      setError(`Payment failed: ${paymentError.message}`);
      setProcessing(false);
    } else {
      setSucceeded(true);
      setProcessing(false);
      setError(null);
      navigate("/success");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="max-w-md w-full p-4 bg-white rounded shadow"
      >
        <h2 className="text-xl font-semibold mb-4">Payment method</h2>

        <div className="mb-4">
          <label className="block mb-2">Card Number</label>
          <CardNumberElement className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">CVC Number</label>
          <CardCvcElement className="w-full p-2 border rounded" />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Expiry Date</label>
          <CardExpiryElement className="w-full p-2 border rounded" />
        </div>
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={!stripe || processing || succeeded}
        >
          {processing ? "Processing..." : `Pay $${amount}`}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
