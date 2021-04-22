import React from "react";
import Header from "../Header";
import Button from "../Button";
import SubHeader from "../SubHeader";
import Footer from "../Footer";
import Cart from "../../../assets/images/cart.svg";
import Close from "../../../assets/images/close.svg";
import {CartBox} from "./styles";

const Container = ({cartItems, showCart, cartBoxHandler, children}) => {
  return (
    <>
      <Header>
        <img src={Cart} onClick={() => cartBoxHandler('open')} />
        {cartItems?.length > 0 ? <span>{cartItems.length}</span> : ""}
        {showCart && (
          <CartBox>
            <div className="close">
              <img src={Close} onClick={() => cartBoxHandler('close')} />
            </div>
          </CartBox>
        )}
      </Header>
      <SubHeader />
      {children}
    </>
  );
};

export default Container;
