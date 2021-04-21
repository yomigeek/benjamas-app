import React from "react";
import Photo from "../../assets/images/dog.png";
import SeriesTile from "../../assets/images/series-tile.jpg";
import {TitleWrapper, Wrapper, MainPhotoHolder, InfoWrapper} from "./styles";
import Button from "./../../components/common/Button";

const Home = ({history}) => {
  return (
    <>
      <Wrapper>
        <TitleWrapper>
          <div className="title">Samurai King Resting</div>
          <div className="add-cart">
            <Button text="ADD TO CART" />
          </div>
        </TitleWrapper>
        <MainPhotoHolder>
          <div>
            <img src={Photo} width="100%" />
          </div>
          <div className="flag">Photo of the day</div>
        </MainPhotoHolder>
        <InfoWrapper>
          <div className="about">
            <span className="title">About the Samurai King Resting</span>
            <span className="sub-text">Pets</span>
            <div className="text">
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De Finibus in order to provide placeholder text to mockup
              various fonts for a type specimen book.So how did the classical
              Latin become so incoherent? According to McClintock, a 15th
              century typesetter likely scrambled part of Cicero's De Finibus in
              order to provide placeholder text to mockup various fonts for a
              type specimen book.So how did the classical Latin become so
              incoherent? According to McClintock.
            </div>
          </div>
          <div className="suggest">
            <span className="title">People also buy</span>
          </div>
        </InfoWrapper>
      </Wrapper>
    </>
  );
};

export default Home;
