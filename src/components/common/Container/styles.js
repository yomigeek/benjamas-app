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
  height: fit-content;
  background: #ffffff;
  border: 3px solid #e4e4e4;
  .close {
    text-align: right;
    img {
      width: 12px;
      height: 12px;
    }
  }
`;
