import styled from "styled-components";

export const TilesWrapper = styled.span`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  margin: 10px 6%;
  div {
    display: flex;
    flex-direction: column;
    margin-right: 30px;
    margin-bottom: 20px;
    span {
      margin-top: 10px;
      max-width: 150px;
      font-size: 14px;
      display: block;
    }
    img {
      width: 150px;
      height: 200px;
    }
    cursor: pointer;
  }
`;

export const MoreWrapper = styled.div`
  text-align: center;
`;
