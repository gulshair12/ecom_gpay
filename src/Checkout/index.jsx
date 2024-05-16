import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Checkout from "./Checkout";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51MKJKIInZz5ALfquUTVINWfUcqf0G4NJn4fLehtMMG2ICbFJ9QPIHW6KCAAtwj49m7qulwjr4G0RpyTKpY3lcwNV00Vf6MfZBY"
);

const index = () => {
  const { total } = useParams();

  return (
    <Elements stripe={stripePromise}>
      <Checkout total={total} />
    </Elements>
  );
};

export default index;
