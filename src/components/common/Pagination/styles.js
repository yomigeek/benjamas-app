import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  img {
    width: 15px;
    height: 15px;
  }
  .number {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    text-align: right;
    color: #b4b4b4;
    cursor: pointer;
    margin: 0px 10px;
    position: relative;
    top: -3px;
  }
  .active {
      font-weight: bold;
      color: #000000;
  }
`;
