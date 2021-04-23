import styled from "styled-components";

export const Card = styled.div`
  display: inline-flex;
  flex-direction: column;
  height: fit-content;
  margin: 0px 0px 50px 20px;
  cursor: pointer;
  .category {
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 24px;
    color: #656565;
    margin-top: -5px;
  }
  .name {
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 37px;
    color: #000000;
    margin-top: -6px;
  }
  .price {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 32px;
    color: #656565;
    margin-top: -12px;
  }
  .button-holder {
    position: relative;
    top: -35px;
    button {
      width: 100%;
    }
    display: inline;
    margin-bottom: -32px;
  }
  .best-seller {
    position: relative;
    width: 117.4px;
    height: 29.17px;
    background: #ffffff;
    padding: 10px;
    font-size: 13px;
    bottom: 5px;
    margin-bottom: -32px;
  }

  img {
    width: 300px;
  }

  @media screen and (max-width: 780px) {
    width: 100%;
    margin: 0px 0px 20px 00px;
    img {
      width: 100%;
    }
  }
`;
