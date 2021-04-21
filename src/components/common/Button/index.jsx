import React from "react";
import {PrimaryButton} from "./styles";

const Button = ({text, clickAction}) => {
  return (
    <>
      <PrimaryButton onClick={clickAction}>{text}</PrimaryButton>
    </>
  );
};

export default Button;
