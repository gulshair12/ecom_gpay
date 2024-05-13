import { React } from "react";
import List from "../Components/List";
import Header from "../Components/Header";

const Welcome = () => {
  const userDataString = sessionStorage.getItem("userdata");
  const userData = JSON.parse(userDataString);
  return (
    <>
      <Header userData={userData} />
      <List />
    </>
  );
};

export default Welcome;
