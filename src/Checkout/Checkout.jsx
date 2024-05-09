import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Confetti from "react-confetti";
import Header from "../Components/Header";

const Checkout = () => {
  const { total } = useParams();
  const [paymentSuccess, setPaymentSuccess] = useState(false);

  const handlePayment = () => {
    setPaymentSuccess(true);
  };

  useEffect(() => {
    if (paymentSuccess) {
      const timer = setTimeout(() => {
        setPaymentSuccess(false);
      }, 30000); 

      return () => clearTimeout(timer);
    }
  }, [paymentSuccess]);

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
        {paymentSuccess ? (
          <>
            <Confetti />
            <h2 className="text-3xl sm:text-4xl font-semibold mb-6 sm:mb-8">
              Congratulations!
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              Your payment of <span className="text-indigo-600">${total}</span>{" "}
              was successful.
            </p>
          </>
        ) : (
          
          <>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
              Checkout
            </h2>
            <p className="text-lg sm:text-xl mb-6 sm:mb-8">
              Your Total is <span className="text-indigo-600">${total}</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handlePayment}
                className="rounded-full py-2 px-4 sm:py-3 sm:px-6 bg-indigo-600 text-white font-semibold text-lg hover:bg-indigo-700 transition-colors duration-300"
              >
               Pay with Google
              </button>
              <button className="rounded-full py-2 px-4 sm:py-3 sm:px-6 bg-gray-200 text-gray-800 font-semibold text-lg hover:bg-gray-300 transition-colors duration-300">
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Checkout;
