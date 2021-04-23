import React, {useState} from "react";
import {Card} from "./styles";
import Button from "../Button";

const ProductCard = ({
  category,
  name,
  imgUrl,
  price,
  bestSeller,
  addToCart,
  id,
}) => {
  const [showButton, setShowButton] = useState(false);
  const triggerHover = () => {
    setShowButton(true);
  };
  const stopHover = () => {
    setShowButton(false);
  };
  return (
    <Card id="card" >
      <span
        className="best-seller"
        style={{
          display: bestSeller ? "inline" : "none",
        }}
      >
        Best Seller
      </span>
      <div
        onMouseOver={triggerHover}
        onMouseOut={stopHover}
        onTouchStart={triggerHover}
      >
        <img src={imgUrl} height="270px" alt="pic" />
      </div>
      <span
        className="button-holder"
        onMouseOver={triggerHover}
        onMouseOut={stopHover}
        style={{
          display: showButton ? "inline" : "none",
        }}
      >
        <Button text="ADD TO CART" clickAction={() => addToCart(id)} />
      </span>
      <div className="category">{category}</div>
      <div className="name">{name}</div>
      <div className="price">{`$${price}`} </div>
    </Card>
  );
};

export default ProductCard;
