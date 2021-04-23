import React from "react";
import LeftArrow from "../../../assets/images/left-arrow.svg";
import RightArrow from "../../../assets/images/right-arrow.svg";
import {Wrapper, Box} from "./styles";

const Pagination = ({products, activePage, goToPage}) => {
  const rowLength = Math.ceil(products.length / 6);
  let rowArray = [];
  for (let i = 1; i <= rowLength; i++) {
    rowArray.push(i);
  }
  return (
    <>
      <Wrapper>
        <span>{activePage !== 1 && <img src={LeftArrow} />}</span>
        {rowArray.map((item, index) => {
          return (
            <span
              className={`number ${activePage === item ? "active" : ""}`}
              onClick={() => goToPage(item)}
              key={`pagination-${index}`}
            >
              {item}
            </span>
          );
        })}
        <span>
          {activePage !== rowLength && !!products?.length && <img src={RightArrow} />}
        </span>
      </Wrapper>
    </>
  );
};

export default Pagination;
