import React, { useState } from "react";
import Checkout from "../Checkout/Checkout";
import { Link } from "react-router-dom";

const List = () => {
  const tokenList = [
    {
      id: "1",
      name: "Token 1",
      price: 50,
    },
    {
      id: "2",
      name: "Token 2",
      price: 150,
    },
    {
      id: "3",
      name: "Token 3",
      price: 300,
    },
  ];

  const serviceFee = 40;

  const [counts, setCounts] = useState({});
  const [selectedItems, setSelectedItems] = useState([]);

  const updateCount = (itemId, value) => {
    setCounts((prevCounts) => ({
      ...prevCounts,
      [itemId]: value,
    }));
  };

  const handleItemSelection = (itemId) => {
    const selectedItem = tokenList.find((item) => item.id === itemId);
    if (selectedItems.some((item) => item.id === selectedItem.id)) {
      setSelectedItems(selectedItems.filter((item) => item.id !== itemId));
    } else {
      setSelectedItems([...selectedItems, selectedItem]);
    }
  };

  const getTotalPrice = () => {
    const subtotal = selectedItems.reduce((total, item) => {
      const count = counts[item.id] || 0;
      return total + item.price * count;
    }, 0);
    return subtotal;
  };

  const total = getTotalPrice() + serviceFee;

  // console.log("Total:", total);

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-3xl px-4 md:px-5 lg-6 mx-auto">
        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center text-black">
          Token List
        </h2>
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 text-gray-500 ">
            Product
          </div>
          <p className="font-normal text-xl leading-8 text-gray-500 flex items-center justify-between">
            <span className="w-full max-w-[260px] text-center">Quantity</span>
          </p>
        </div>
        {tokenList.map((token) => (
          <div
            key={token.id}
            className="grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t border-gray-200 py-6"
          >
            <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
              <input
                type="checkbox"
                className="w-16"
                onChange={() => handleItemSelection(token.id)}
              />
              <div className="img-box">
                <img
                  src="token.jpg"
                  alt="perfume bottle image"
                  className="xl:w-[140px]"
                />
              </div>
              <div className="pro-data w-full max-w-sm ">
                <h5 className="font-semibold text-xl leading-8 text-black max-[550px]:text-center">
                  {token.name}
                </h5>
                <h6 className="font-medium text-lg leading-8 text-indigo-600  max-[550px]:text-center">
                  ${token.price}
                </h6>
              </div>
            </div>
            <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
              <div className="flex items-center w-full mx-auto justify-center">
                <button
                  className="group rounded-l-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  onClick={() =>
                    updateCount(
                      token.id,
                      counts[token.id] ? counts[token.id] - 1 : 0
                    )
                  }
                  disabled={!selectedItems.some(item => item.id === token.id)}
                >
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <span className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:text-gray-900 py-[15px] text-center bg-transparent">
                  {counts[token.id] || 0}
                </span>
                <button
                  className="group rounded-r-full px-6 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50"
                  onClick={() =>
                    updateCount(token.id, (counts[token.id] || 0) + 1)
                  }
                  disabled={!selectedItems.some(item => item.id === token.id)}
                >
                  <svg
                    className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width={22}
                    height={22}
                    viewBox="0 0 22 22"
                    fill="none"
                  >
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                    <path
                      d="M11 5.5V16.5M16.5 11H5.5"
                      stroke=""
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-gray-50 rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
          <div className="flex items-center justify-between w-full mb-6">
            <p className="font-normal text-xl leading-8 text-gray-400">
              Sub Total
            </p>
            <h6 className="font-semibold text-xl leading-8 text-gray-900">
              ${getTotalPrice()}
            </h6>
          </div>
          <div className="flex items-center justify-between w-full pb-6 border-b border-gray-200">
            <p className="font-normal text-xl leading-8 text-gray-400">
              Service fee
            </p>
            <h6 className="font-semibold text-xl leading-8 text-gray-900">
              ${serviceFee.toFixed(2)}
            </h6>
          </div>
          <div className="flex items-center justify-between w-full py-6">
            <p className="font-manrope font-medium text-2xl leading-9 text-gray-900">
              Total
            </p>
            <h6 className="font-manrope font-medium text-2xl leading-9 text-indigo-500">
              ${(getTotalPrice() + serviceFee).toFixed(2)}
            </h6>
          </div>
        </div>
        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
          <Link to={`/checkout/${total}`} className="">
            <button className="rounded-full w-full max-w-[280px] py-4 px-3 text-center justify-center items-center bg-indigo-600 font-semibold text-lg text-white flex transition-all duration-500 hover:bg-indigo-700">
              Continue to Payment
              <svg
                className="ml-2"
                xmlns="http://www.w3.org/2000/svg"
                width={23}
                height={22}
                viewBox="0 0 23 22"
                fill="none"
              >
                <path
                  d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998"
                  stroke="white"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default List;
