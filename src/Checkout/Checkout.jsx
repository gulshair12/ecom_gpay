import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";

const Checkout = ({ fetchClientSecret, clientSecret, amount }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [cardHolderName, setCardHolderName] = useState("");
  const [paymentError, setPaymentError] = useState(null);

  useEffect(() => {
    if (clientSecret) {
      confirmPayment();
    }
  }, [clientSecret]);

  const confirmPayment = async () => {
    const cardElement = elements.getElement(CardElement);

    try {
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: cardHolderName,
            },
          },
        }
      );

      if (error) {
        setPaymentError(error.message);
      } else {
        console.log("PaymentIntent:", paymentIntent);
        setPaymentError(null);
        navigate("/success");
      }
    } catch (error) {
      console.error("Payment error:", error);
      setPaymentError("An error occurred. Please try again later.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    try {
      const { paymentMethod, error: paymentMethodError } =
        await stripe.createPaymentMethod({
          type: "card",
          card: cardElement,
          billing_details: { name: cardHolderName },
        });

      if (paymentMethodError) {
        setPaymentError(paymentMethodError.message);
        return;
      }

      await fetchClientSecret(paymentMethod.id);
    } catch (error) {
      console.error("Payment method creation error:", error);
      setPaymentError("An error occurred. Please try again later.");
    }

    console.log(cardElement);
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
            onChange={(e) => setCardHolderName(e.target.value)}
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
