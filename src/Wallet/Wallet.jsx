import React, { useState } from "react";
import { Link } from "react-router-dom";

const Wallet = () => {
  const [showModal, setShowModal] = useState(false);
  const [usd, setUsd] = useState(0);
  const tokensPerUsd = 10;
  const amount = usd;

  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-800 p-4 md:px-32">
        <div className="bg-transpaernt text-white p-6  w-full ">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {/* Current Token Section */}
            <div className=" md:max-w-[80%] ">
              <h2 className="text-3xl font-semibold mb-4 md:mb-8 ms-4">
                My Wallet
              </h2>
              <div className="flex items-center border p-6 rounded-2xl  m-2">
                <div className="">
                  <p className="text-3xl font-normal mb-2">
                    Your current token
                  </p>
                  <div className="flex items-center h-full">
                    <img
                      src="token_icon.svg"
                      alt="token"
                      className="w-8 md:w-10"
                    />
                    <p className="text-4xl font-bold my-4">100</p>
                  </div>
                </div>
                <img
                  src="20059356_6220378 1.png"
                  alt="side_img"
                  className="w-20 md:w-44"
                />
              </div>
              <div className="flex justify-center ">
                <button
                  onClick={handleShowModal}
                  className="mt-6 md:mt-16 bg-[#D0A63C] px-16 py-3 rounded-full font-semibold hover:bg-transparent hover:border border-[#D0A63C] "
                >
                  Buy More
                </button>
              </div>
            </div>
            <div>
              {/* Buy Token History Section */}
              <div className=" p-6 rounded-lg m-2 ">
                <h2 className="text-2xl font-semibold mb-4 text-center md:mt-10">
                  Buy Token History
                </h2>
                <ul>
                  {[
                    { token: "100T", price: "$10" },
                    { token: "500T", price: "$50" },
                    { token: "70T", price: "$70" },
                    { token: "90T", price: "$9" },
                    { token: "250T", price: "$150" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center my-2 border-b py-3"
                    >
                      <div className="flex items-center">
                        <img
                          src="token_icon.svg"
                          alt="token"
                          className="w-8 md:w-10"
                        />
                        <span className="text-lg">{item.token}</span>
                      </div>
                      <span className="text-lg">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showModal ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-10/12 lg:w-3/12">
              <div className=" border rounded-3xl shadow-lg relative flex flex-col w-full bg-[#262F49] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-700 rounded-t">
                  <h3 className="text-2xl font-semibold text-white">
                    My Wallet
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={handleShowModal}
                  >
                    <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">
                  <h4 className="text-xl font-normal text-white mb-4">
                    Get <span className="font-bold">10 tokens</span> for just{" "}
                    <span className="font-bold">$1</span>!
                  </h4>
                  <div className="flex items-center bg-transparent p-4 rounded-lg mb-4 border">
                    <img
                      src="dollar_icon.svg"
                      alt="usdt"
                      className="w-8 h-8 mr-2"
                    />
                    <p className="text-white font-semibold">USDT</p>
                    <input
                      id="usd"
                      value={usd}
                      onChange={(e) => setUsd(e.target.value)}
                      className="flex-1 bg-transparent text-white p-2 rounded-lg outline-none focus:outline-none"
                      placeholder="12.00"
                    />
                  </div>
                  <div className="flex items-center text-white mb-4">
                    <p className="flex items-center">
                      <span>{usd}</span>
                      <img
                        src="dollar_icon.svg"
                        alt="usd"
                        className="w-5 h-5 mx-2"
                      />
                      <span>→</span>
                      <img
                        src="token_icon.svg"
                        alt="token"
                        className="w-5 h-5 mx-2"
                      />
                      <span>{usd * tokensPerUsd}T</span>
                    </p>
                  </div>
                  <div className="flex justify-center mt-12">
                    <button
                      className="w-[80%] bg-[#D0A63C] py-2 rounded-full text-white font-semibold hover:bg-transparent hover:border border-[#D0A63C]"
                      onClick={() => setShowModal(false)}
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Wallet;
