import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import Checkout from "./Checkout";

const stripePromise = loadStripe(
  "pk_test_51PH2dsKvSuAOYrcIrXNxqCVOCHU5NyayZYrvKU7nuIdjr9kMwCp0isRg1Yl0iU7rT61prQXbihPObrWpV2qYuGbi00zoyhtZBf"
);

const Index = () => {
  const { amount } = useParams();
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    if (amount) {
      const paymentIntentData = {
        amount: parseInt(amount) * 100, // Convert to cents
        currency: "usd",
        paymentMethodId: "pm_card_visa", // Assuming you have a valid payment method id
        returnUrl: "https://ecom-gpay.vercel.app/success",
      };

      fetch("https://stripe-createex.azurewebsites.net/payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentIntentData),
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error("Failed to fetch client secret");
          }
          return res.json();
        })
        .then((data) => {
          setClientSecret(data.clientSecret);
        })
        .catch((error) =>
          console.error("Error fetching client secret:", error.message)
        );
    }
  }, [amount]);

  return (
    clientSecret && (
      <Elements stripe={stripePromise}>
        <Checkout amount={amount} clientSecret={clientSecret} />
      </Elements>
    )
  );
};

export default Index;
