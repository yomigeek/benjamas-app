import React from "react";
import Header from "../Header";
import Button from "../Button";
import SubHeader from "../SubHeader";
import Footer from "../Footer";
import Cart from "../../../assets/images/cart.svg";
import {NavText} from "./styles";

const Container = ({children}) => {
  return (
    <>
      <Header>
        <img src={Cart} />
      </Header>
      <SubHeader />
      {children}
    </>
  );
};

export default Container;
