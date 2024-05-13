import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import GooglePayButton from "@google-pay/button-react";

const Checkout = () => {
  const { total } = useParams();

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8">
          Checkout
        </h2>
        <p className="text-lg sm:text-xl mb-6 sm:mb-8">
          Your Total is <span className="text-indigo-600">${total}</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-3  items-center">
          <GooglePayButton
            environment="TEST"
            paymentRequest={{
              apiVersion: 2,
              apiVersionMinor: 0,
              allowedPaymentMethods: [
                {
                  type: "CARD",
                  parameters: {
                    allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                    allowedCardNetworks: ["MASTERCARD", "VISA"],
                  },
                  tokenizationSpecification: {
                    type: "PAYMENT_GATEWAY",
                    parameters: {
                      gateway: "example",
                      gatewayMerchantId: "exampleGatewayMerchantId",
                    },
                  },
                },
              ],
              merchantInfo: {
                merchantId: "12345678901234567890",
                merchantName: "Demo Merchant",
              },
              transactionInfo: {
                totalPriceStatus: "FINAL",
                totalPriceLabel: "Total",
                totalPrice: "408.00",
                currencyCode: "USD",
                countryCode: "US",
              },
            }}
            onLoadPaymentData={(paymentRequest) => {
              console.log("load payment data", paymentRequest);
              window.location.href = "/success";
            }}
          />
          <button className=" py-1 px-3 sm:py-3 sm:px-6 bg-gray-200 text-gray-800 font-semibold text-lg hover:bg-gray-300 transition-colors duration-300">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default Checkout;
