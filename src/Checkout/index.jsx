// CheckoutWrapper.js
import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import Checkout from "./Checkout";

const stripePromise = loadStripe(
  "pk_test_51PH2dsKvSuAOYrcIrXNxqCVOCHU5NyayZYrvKU7nuIdjr9kMwCp0isRg1Yl0iU7rT61prQXbihPObrWpV2qYuGbi00zoyhtZBf"
);

const CheckoutWrapper = () => {
  const { amount } = useParams();
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    if (amount) {
      fetch("https://stripe-createex.azurewebsites.net/payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amount,
          currency: "usd",
          paymentMethodId: "pm_card_visa",
          returnUrl: "https://ecom-gpay.vercel.app/success",
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("Client Secret:", data.clientSecret); 
          setClientSecret(data.clientSecret);
        })
        .catch((error) =>
          console.error("Error fetching client secret:", error)
        );
    }
  }, [amount]);

  return (
    clientSecret && (
      <Elements stripe={stripePromise} options={{ clientSecret }}>
        <Checkout amount={amount} clientSecret={clientSecret} />
      </Elements>
    )
  );
};

export default CheckoutWrapper;
