import React, { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51PH2dsKvSuAOYrcIrXNxqCVOCHU5NyayZYrvKU7nuIdjr9kMwCp0isRg1Yl0iU7rT61prQXbihPObrWpV2qYuGbi00zoyhtZBf"
);

export default function App() {
  const { amount } = useParams();
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Fetch the client secret from the backend
    fetch(`https://stripe-createex.azurewebsites.net/payment-intent`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amount * 100, currency: "usd" }), // Amount in cents
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret))
      .catch((error) => console.error("Error fetching client secret:", error));
  }, [amount]);

  const options = {
    clientSecret: clientSecret,
  };

  return (
    clientSecret && (
      <Elements stripe={stripePromise} options={options}>
        <Checkout amount={amount} />
      </Elements>
    )
  );
}
