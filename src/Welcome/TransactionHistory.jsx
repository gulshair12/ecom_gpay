import React, { useState } from "react";
import BetTokenList from "../Components/BetTokenList";

const TransactionHistory = () => {
  const [showModal, setShowModal] = useState(false);
  const [usd, setUsd] = useState(0);

  const handleShowModal = () => {
    setShowModal(!showModal);
  };
  return (
    <>
      <div className="p-4 bg-gray-800 min-h-screen ">
        <div className="md:p-6 rounded-lg">
          <h1 className="text-white text-xl sm:text-3xl font-semibold text-center mb-8">
            Bet Token History
          </h1>
          <div className="bg-[#121B37] p-4 sm:p-8 md:w-[45%] rounded-3xl m-auto ">
            <BetTokenList />
          </div>
          <div className="flex justify-center">
            <button
              onClick={handleShowModal}
              className="text-white bg-yellow-500 py-3 px-20 rounded-full mt-4 hover:bg-transparent hover:border border-yellow-500"
            >
              Bet
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal ? (
        <>
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative my-6 mx-auto w-10/12 lg:w-3/12">
              <div className=" border rounded-3xl shadow-lg relative flex flex-col w-full bg-[#262F49] outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-700 rounded-t">
                  <h3 className="text-2xl font-semibold text-white">
                    Bet token
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
                    Get Ready to Bet
                  </h4>
                  <div className="flex items-center bg-transparent p-4 rounded-lg mb-4 border">
                    <img
                      src="token_icon.svg"
                      alt="usdt"
                      className="w-8 h-8 mr-2"
                    />
                    <input
                      id="usd"
                      value={usd}
                      onChange={(e) => setUsd(e.target.value)}
                      className="flex-1 bg-transparent text-white p-2 rounded-lg outline-none focus:outline-none"
                      placeholder="12.00"
                    />
                  </div>
                  <div className="flex items-center text-white mb-4">
                    <p className="flex items-center text-md  ">
                      <span className="font-bold me-1"> Total tokens : </span>{" "}
                      20
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

export default TransactionHistory;
