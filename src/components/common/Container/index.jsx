import React from "react";
import Header from "../Header";
import Button from "../Button";
import SubHeader from "../SubHeader";
import Footer from "../Footer";
import Cart from '../../../assets/images/cart.svg';
import {NavText} from "./styles";

const Container = ({titleBarText, children}) => {
  return (
    <>
      <Header title="Demo Streaming">
        <img src={Cart} />
      </Header>
        <SubHeader />
      {children}
      <Footer />
    </>
  );
};

export default Container;
