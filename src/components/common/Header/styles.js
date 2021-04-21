import styled from "styled-components";

export const HeaderBox = styled.div`
  height: 80px;
  background: #fff;
  display: flex;
  padding: 20px 25px;
  cursor: pointer;
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
  * {
    margin-right: 10%;
  }
`;
