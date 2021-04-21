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
  .details div {
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 17px;
    text-align: right;
    color: #656565;
    margin-top: 15px;
  }
  div.about {
    width: 50%;
  }
  div.suggest {
    width: 50%;
    text-align: right;
    .photo-list {
      margin: 20px 0px;
      img {
        margin-left: 20px;
        width: 80px;
      }
    }
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
      .photo-list {
        margin: 20px 0px;
        img {
          margin: 0px 20px 0px 0px;
        }
      }
    }
    .details div {
      text-align: left;
      font-size: 13px;
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
  .button-holder {
    display: none;
    position: relative;
    top: -35px;
    button {
      width: 100%;
    }
  }
  @media screen and (max-width: 480px) {
    .button-holder {
      display: block;
    }
  }
`;

export const Wrapper = styled.div`
  padding: 10px;
  margin: 15px 6% 40px;
  #divider {
    margin: 50px 0%;
  }
  @media screen and (max-width: 480px) {
    #divider {
      margin: 50px -10%;
    }
    margin: 15px 2% 40px;
  }
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

export const NavAndSort = styled.div`
  display: flex;
  .nav {
    width: 65%;
  }
  .sort-mobile {
    display: none;
  }
  .sort-desktop {
    display: flex;
 
    div.sort-img {
      width: 65%;
      text-align: right;
      position: relative;
      left: 80px;
    }
    div.sort-select {
      margin-left: 5px;
      text-align: right;
      position: relative;
      left: 80px;
    }
    width: 35%;
    text-align: right;
    font-weight: normal;
    font-size: 15px;
    line-height: 30px;
    color: #9b9b9b;
    {
      img {
        width: 10px;
        margin-right: 5px;
      }
    }
  }
  @media screen and (max-width: 480px) {
    .sort-desktop {
      display: none;
    }
    .sort-mobile {
      width: 30%;
      display: block;
      text-align: right;
      img {
        position: relative;
        top: -10px;
        cursor: pointer;
      }
    }
  }
`;


export const ProductBox = styled.div`
  display: flex;
  margin: 50px 0px;
  div.filter {
    width: 30%
  }
  .product-list {
    width: 60%;
  }
  #divider {
    width: 65%;
    border: 0.5px solid #E4E4E4;
  }
`;