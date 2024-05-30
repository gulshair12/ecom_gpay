import React, { useState } from "react";
import BetTokenList from "../Components/BetTokenList";

const TransactionHistory = () => {
  return (
    <div className="p-4 bg-gray-800 min-h-screen ">
      <div className="md:p-6 rounded-lg">
        <h1 className="text-white text-xl sm:text-3xl font-semibold text-center mb-8">
          Bet Token History
        </h1>
        <div className="bg-[#121B37] p-4 sm:p-8 md:w-[45%] rounded-3xl m-auto ">
          <BetTokenList />
        </div>
        <div className="flex justify-center">
          <button className="text-white bg-yellow-500 py-3 px-20 rounded-full mt-4 hover:bg-transparent hover:border border-yellow-500">
            Bet
          </button>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
