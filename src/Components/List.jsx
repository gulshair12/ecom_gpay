import React from "react";

const List = () => {
  const latestBids = [
    { name: "Alice", tokens: 50 },
    { name: "Bob", tokens: 30 },
    { name: "Charlie", tokens: 20 },
    { name: "Hudson", tokens: 10 },
    { name: "Billy", tokens: 5 },
  ];

  return (
    <section className="py-4 ">
      <div className=" px-4 sm:px-6 lg:px-8">
        <div className=" block md:float-right	w-12/12 md:w-2/12">
          <h2 className="text-2xl font-semibold mb-4">Latest Bids</h2>
          <ul className="bg-white shadow-md rounded-lg p-4">
            {latestBids.map((bid, index) => (
              <li
                key={index}
                className="flex justify-between py-2 border-b last:border-none"
              >
                <span>{bid.name}</span>
                <span>{bid.tokens} Tokens</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className=" flex justify-center mt-2 lg:mt-80">
      <div className="flex items-center space-x-2 px-4 sm:px-6 lg:px-8 my-2 w-9/12 md:w-4/12">
        <input
          type="number"
          min="0"
          placeholder="Enter number of tokens"
          className="flex-1 shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
        <button
          type="button"
          className="bg-blue-500 text-white font-bold py-2 px-4 rounded shadow hover:bg-blue-600 focus:outline-none focus:shadow-outline"
        >
          Bet
        </button>
      </div>
      </div>
    </section>
  );
};

export default List;
