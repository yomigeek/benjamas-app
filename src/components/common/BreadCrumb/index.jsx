import React from "react";
import {Text, SubText} from "./styles";

const BreadCrumb = ({text, subText}) => {
  return (
    <>
      <Text>{text} &nbsp; /</Text> <SubText> &nbsp; {subText}</SubText>
    </>
  );
};

export default BreadCrumb;
