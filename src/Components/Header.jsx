import React from "react";
import Wallet from "../Wallet/Wallet";

const Header = ({ userData }) => {
  console.log(userData);
  return (
    <nav className="bg-gray-700 p-2 lg:p-2 rounded-sm text-white">
      <div className="flex justify-between mx-2 lg:mx-10">
        <h1 className="text-lg md:text-2xl"> {userData.name}</h1>
        <div className="flex space-x-4">
          <Wallet />
          <img
            src={userData.picture}
            alt="userimg"
            className="w-10 rounded-3xl"
          />
        </div>
      </div>
    </nav>
  );
};

export default Header;
