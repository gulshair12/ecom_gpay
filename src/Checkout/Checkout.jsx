import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const Checkout = ({ amount }) => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [cardHolderName, setCardHolderName] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          name: cardHolderName,
        },
      });

      if (error) {
        console.error(error);
        setPaymentError(error.message);
      } else {
        console.log("PaymentMethod:", paymentMethod);
        setPaymentError(null);

        confirmPaymentWithBackend(paymentMethod, amount);
      }
    } catch (error) {
      console.error(error);
      setPaymentError("An error occurred. Please try again later.");
    }
  };

  const handleCardholderNameChange = (event) => {
    setCardHolderName(event.target.value);
  };

  const confirmPaymentWithBackend = async (paymentMethod, amount) => {
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodId: paymentMethod.id,
          amount: amount,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to complete payment");
      }

      const result = await response.json();

      if (result.success) {
        navigate("/success");
      } else {
        throw new Error(result.error);
      }
    } catch (error) {
      console.error("Error confirming payment:", error);
      setPaymentError("An error occurred. Please try again later.");
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
          <label className="block mb-2" htmlFor="cardHolderName">
            Cardholder's Name
          </label>
          <input
            type="text"
            id="cardHolderName"
            className="w-full px-3 py-2 border rounded"
            value={cardHolderName}
            onChange={handleCardholderNameChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Card details</label>
          <CardElement className="w-full p-2 border rounded" />
        </div>
        {paymentError && (
          <div className="text-red-500 mb-4">{paymentError}</div>
        )}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={!stripe}
        >
          Pay ${amount}
        </button>
      </form>
    </div>
  );
};

export default Checkout;
