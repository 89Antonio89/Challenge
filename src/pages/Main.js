import React from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navbar";
import Contacts from "./Contacts/Contacts";
import FirstBlock from "./First/FirstBlock";
import FourthBlock from "./Fourth/FourthBlock";
import SecondBlock from "./Second/SecondBlock";
import ThirdBlock from "./Third/ThirdBlock";

const Main = () => {
  return (
    <div>
      <Navigation></Navigation>
      <FirstBlock></FirstBlock>
      <SecondBlock></SecondBlock>
      <ThirdBlock></ThirdBlock>
      <FourthBlock></FourthBlock>
      <Contacts></Contacts>
      <Footer></Footer>
    </div>
  );
};

export default Main;
