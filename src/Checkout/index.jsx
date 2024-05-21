import React, { useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51PH2dsKvSuAOYrcIrXNxqCVOCHU5NyayZYrvKU7nuIdjr9kMwCp0isRg1Yl0iU7rT61prQXbihPObrWpV2qYuGbi00zoyhtZBf"
);

export default function App() {
  const { amount } = useParams;

  const [clientSecret, setClientSecret] = useState("");

  const fetchClientSecret = async (paymentMethodId) => {
    try {
      const response = await fetch(
        "https://stripe-createex.azurewebsites.net/payment-intent",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            amount: amount,
            currency: "usd",
            paymentMethodId: paymentMethodId,
          }),
        }
      );
      const data = await response.json();
      setClientSecret(data.clientSecret);
    } catch (error) {
      console.error("Error fetching client secret:", error);
    }
  };

  return (
    <Elements stripe={stripePromise}>
      <Checkout
        fetchClientSecret={fetchClientSecret}
        clientSecret={clientSecret}
      />
    </Elements>
  );
}
