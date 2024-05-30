import React from "react";

const TransactionItem = ({ name, amount, image }) => {
  return (
    <div className="flex items-center justify-between bg-[#262F49] text-white p-3 sm:p-4 sm:w-[90%] rounded-lg my-2 m-auto">
      <div className="flex">
        <img src={image} alt={name} className="h-12 w-12 rounded-full" />
        <div>
          <div className="ml-4 flex-1">{name}</div>
          <div className="font-bold ml-4 flex-1">{amount}T</div>
        </div>
      </div>
      <p className="text-[#DEDEDE] font-normal text-sm">5:05 PM </p>
    </div>
  );
};

export default TransactionItem;
