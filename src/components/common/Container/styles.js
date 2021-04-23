import styled from "styled-components";

export const NavText = styled.span`
  color: #fff;
  padding: 10px;
  font-weight: 500;
`;

export const CartBox = styled.div`
  background: red;
  width: 300px;
  padding: 10px;
  position: absolute;
  top: 80px;
  margin-bottom: -92px;
  background: #ffffff;
  border: 3px solid #e4e4e4;
  overflow: auto;
  max-height: 300px;
  z-index: 10000000;

  .empty-text {
    font-size: 15px;
    text-align: center;
  }
  
  .close {
    text-align: right;
    img {
      width: 12px;
      height: 12px;
    }
  }

  .cart-list{
    display: flex;
    margin-top: 20px;
    flex-direction: row;
    .detail {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      width: 70%;
    }
    .image {
      display: flex;
      flex-direction: column;
      font-size: 12px;
      width: 30%;
    }
  }

  #divider {
    margin: 15px 0px !important;
    border-top: 2px solid #E4E4E4 !important;
  }

  button {
    width: 100%;
    background: #fff;
    color: #000;
    border: 1px solid #000;
  }
`;
