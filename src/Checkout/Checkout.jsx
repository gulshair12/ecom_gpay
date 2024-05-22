import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const Checkout = ({ amount, clientSecret }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!elements || !stripe) {
      setErrorMessage("Stripe has not loaded correctly.");
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setErrorMessage("Card element not found");
      return;
    }

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              // Optionally include billing details here
              // name: 'Customer Name',
              // email: 'customer@example.com'
            },
          },
        }
      );

      if (error) {
        setErrorMessage(`Payment failed: ${error.message}`);
      } else if (paymentIntent.status === "succeeded") {
        // Payment succeeded, redirect or show success message
        navigate("/success");
      } else {
        setErrorMessage(`Unexpected payment status: ${paymentIntent.status}`);
      }
    } catch (error) {
      setErrorMessage(`Payment processing error: ${error.message}`);
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
          <label className="block mb-2">Card Details</label>
          <CardElement className="w-full p-2 border rounded" />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={!stripe || !elements}
        >
          Pay ${amount}
        </button>
        {errorMessage && (
          <div className="text-red-500 mb-4">{errorMessage}</div>
        )}
      </form>
    </div>
  );
};

export default Checkout;
