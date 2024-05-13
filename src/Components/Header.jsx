import React from "react";

const Header = ({ userData }) => {
  console.log(userData);
  return (
    <nav className="bg-gray-700 p-2 lg:p-3 rounded-sm text-white">
      <div className="flex justify-between mx-2 lg:mx-10">
        <h1 className="text-lg md:text-2xl"> {userData.name}</h1>
        <img
          src={userData.picture}
          alt="userimg"
          className="w-10 rounded-3xl"
        />
      </div>
    </nav>
  );
};

export default Header;
