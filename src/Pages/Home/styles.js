import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  .title {
    font-family: Archivo;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
  }
  .sub-text {
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 24px;
    color: #656565;
    display: block;
    margin-top: 12px;
  }
  .text {
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 150%;
    color: #656565;
    text-align: justify;
  text-justify: inter-word;
  margin: 20px 0px;
  }
  div.about {
    width: 50%;
  }
  div.suggest {
    width: 50%;
    text-align: right;
  }
  @media screen and (max-width: 480px) {
    flex-direction: column;
    div.about {
      width: 100%;
    }
    div.suggest {
      width: 100%;
      text-align: left;
      margin-top: 15px;
    }
  }
`;

export const MainPhotoHolder = styled.div`
  margin-top: 20px;
  div.flag {
    font-family: Archivo;
    font-style: normal;
    font-weight: bold;
    font-size: 13px;
    line-height: 22px;
    color: #000000;
    position: relative;
    width: fit-content;
    left: 0px;
    top: -49px;
    background: #ffffff;
    padding: 12px;
  }
`;

export const Wrapper = styled.div`
  padding: 10px;
  margin: 15px 6%;
`;

export const TitleWrapper = styled.span`
  display: flex;
  flex-wrap: wrap;
  div.add-cart {
    text-align: right;
    width: 40%;
    @media screen and (max-width: 480px) {
      display: none;
      width: 0%;
    }
  }
  div.title {
    font-family: Archivo;
    font-style: normal;
    font-weight: bold;
    font-size: 22px;
    line-height: 35px;
    color: #000000;
    width: 60%;
    @media screen and (max-width: 480px) {
      width: 100%;
    }
  }
`;
