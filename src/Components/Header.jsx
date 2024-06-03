import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-800 text-white sm:px-32 ">
      <div className="flex items-center mb-4 sm:mb-0">
        <Link to="/welcomePage">
          <img src="headerIcon.svg" alt="Logo" className="h-10" />
        </Link>
      </div>
      <div className="flex items-center">
        <div className="flex bg-yellow-500 rounded-full  mr-4">
          <Link to="/wallet">
            <button className="text-white font-semibold py-2 px-4 md:px-8 rounded-full  text-nowrap">
              Buy Token
            </button>
          </Link>
          <div className="bg-white text-black py-2 px-4 rounded-full">0</div>
        </div>
        <img src="/profile.png" alt="User" className="h-10 w-10 rounded-full" />
      </div>
    </header>
  );
};

export default Header;
