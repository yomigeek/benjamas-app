import React from "react";
import Photo from "../../assets/images/dog.png";
import Pic1 from "../../assets/images/pic1.png";
import Pic2 from "../../assets/images/pic2.png";
import Pic3 from "../../assets/images/pic3.png";
import SortMobile from "../../assets/images/sort-mobile.svg";
import SortArrow from "../../assets/images/sort-arrow.svg";
import {
  TitleWrapper,
  Wrapper,
  MainPhotoHolder,
  InfoWrapper,
  NavAndSort,
  ProductBox,
} from "./styles";
import Button from "./../../components/common/Button";
import SubHeader from "../../components/common/SubHeader";
import BreadCrumb from "../../components/common/BreadCrumb";
import SelectDropdown from "../../components/common/Select";

const Home = ({history}) => {
  const photos = [
    {
      id: 1,
      url: Pic1,
    },
    {
      id: 2,
      url: Pic2,
    },
    {
      id: 3,
      url: Pic3,
    },
  ];
  const sortOptions = [
    {id: 1, text: "Price", value: "price"},
    {id: 2, text: "Alphabetically", value: "alphabetically"},
  ];
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
          <div className="button-holder">
            <Button text="ADD TO CART" />
          </div>
        </MainPhotoHolder>

        <InfoWrapper>
          <div className="about">
            <span className="title">About the Samurai King Resting</span>
            <span className="sub-text">Pets</span>
            <div className="text">
              So how did the classical Latin become so incoherent? According to
              McClintock, a 15th century typesetter likely scrambled part of
              Cicero's De Finibus in order to provide placeholdertext to mockup
              various fonts for a type specimen book.So how did the classical
              Latin become so incoherent? According to McClintock, a 15th
              century typesetter likely scrambled part of Cicero's De Finibus in
              order to provide placeholder
              <br />
              <br />
              text to mockup various fonts for a type specimen book.So how did
              the classical Latin become so incoherent? According to McClintock.
            </div>
          </div>
          <div className="suggest">
            <span className="title">People also buy</span>
            <div className="photo-list">
              {photos.map((photo) => {
                return (
                  <img
                    src={photo.url}
                    key={`photo-detail-${photo.id}`}
                    alt="product-photo"
                  />
                );
              })}
            </div>
            <br />
            <div className="details">
              <strong>Details</strong>
              <div>Size: 1020 x 1020 pixel</div>
              <div>Size: 15 mb</div>
            </div>
          </div>
        </InfoWrapper>
        <SubHeader />
        <NavAndSort>
          <div className="nav">
            <BreadCrumb text="Photography" subText="Premium Photos" />
          </div>
          <div className="sort-desktop">
            <div className="sort-img">
              <img src={SortArrow} /> Sort By
            </div>
            <div className="sort-select">
              <SelectDropdown options={sortOptions} />
            </div>
          </div>
          <div className="sort-mobile">
            <img src={SortMobile} />
          </div>
        </NavAndSort>
        <ProductBox>
          <div className="filter">
            <div>
              <strong>Category</strong>
            </div>
            <SubHeader />
            <div>
              <strong>Price range</strong>
            </div>

          </div>
          <div className="product-list">g</div>
        </ProductBox>
      </Wrapper>
    </>
  );
};

export default Home;
