import styled from "styled-components";

export const HeaderBox = styled.div`
  height: 80px;
  background: #fff;
  display: flex;
  padding: 20px 25px;
  cursor: pointer;
  span {
    display: inline-block;
    background: #000;
    color: #fff;
    width: fit-content;
    height: fit-content;
    padding: 2px 4px;
    position: relative;
    bottom: -30px;
    left: -3px;
    font-size: 12px
  }
`;

export const HeaderTitle = styled.div`
  color: #fff;
  font-weight: 600;
  font-size: 25px;
  display: flex;
  width: 50%;
  margin-left: 5%;
`;

export const HeaderMenu = styled.div`
  display: flex;
  width: 50%;
  justify-content: flex-end;
   {
    margin-left: -10%;
  }
`;
