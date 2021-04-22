import React, {useState} from "react";
import {Card} from "./styles";
import Button from "../Button";
import {useHistory} from "react-router-dom";

const ProductCard = ({category, name, imgUrl, price, bestSeller}) => {
  const history = useHistory();
  const [showButton, setShowButton] = useState(false);
  const triggerHover = () => {
    setShowButton(true);
  };
  const stopHover = () => {
    setShowButton(false);
  };
  return (
    <>
      <Card id="card">
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
          <img src={imgUrl} width="100%" height="270px" />
        </div>
        <span
          className="button-holder"
          onMouseOver={triggerHover}
          onMouseOut={stopHover}
          style={{
            display: showButton ? "inline" : "none",
          }}
        >
          <Button text="ADD TO CART" />
        </span>
        <div className="category">People</div>
        <div className="name">{name}</div>
        <div className="price">$3.89 </div>
      </Card>
    </>
  );
};

export default ProductCard;
