import React from "react";
import Header from "../Header";
import Button from "../Button";
import SubHeader from "../SubHeader";
import Cart from "../../../assets/images/cart.svg";
import Close from "../../../assets/images/close.svg";
import {CartBox} from "./styles";

const Container = ({cartItems, showCart, cartBoxHandler, children}) => {
  return (
    <>
      <Header>
        <img src={Cart} onClick={() => cartBoxHandler("open")} alt="pic" />
        {cartItems?.length > 0 ? <span>{cartItems.length}</span> : ""}
        {showCart && (
          <CartBox>
            <div className="close">
              <img src={Close} onClick={() => cartBoxHandler("close")} alt="pic" />
            </div>
            {cartItems.map((item, index) => {
              return (
                <div key={`cart-item-${item.name}-${index}`}>
                  <div className="cart-list">
                    <div className="detail">
                      <strong>{item.name}</strong>
                      <br />
                      <div>${item.price}</div>
                    </div>
                    <div className="image">
                      <img src={item?.image?.src} height="50px" alt="pic" />
                    </div>
                  </div>
                  <SubHeader id="cart-divider" />
                </div>
              );
            })}

            {cartItems?.length > 0 ? (
              <Button
                text="CLEAR"
                clickAction={() => cartBoxHandler("clear")}
              />
            ) : (
              <div className="empty-text">No item(s) in your cart!</div>
            )}
            
          </CartBox>
        )}
      </Header>
      <SubHeader />
      {children}
    </>
  );
};

export default Container;
