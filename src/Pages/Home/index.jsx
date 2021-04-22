import React, {useState} from "react";
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
import ProductCard from "../../components/common/ProductCard";
import Container from "../../components/common/Container";
import products from "./data";

const Home = ({history}) => {
  const [checkedList, setCheckedList] = useState([]);
  const [checkedPriceList, setCheckedPriceList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
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

  const filterOptions = [
    {id: 1, text: "People", value: "people"},
    {id: 2, text: "Premium", value: "premium"},
    {id: 3, text: "Pets", value: "pets"},
    {id: 4, text: "Food", value: "food"},
    {id: 5, text: "Landmarks", value: "landmarks"},
    {id: 6, text: "Cities", value: "cities"},
    {id: 7, text: "Nature", value: "nature"},
  ];

  const filterPriceOptions = [
    {id: 1, text: "Lower than $20", value: "lt20"},
    {id: 2, text: "$20 - $100", value: "20to100"},
    {id: 3, text: "$100 - $200", value: "100to200"},
    {id: 4, text: "More than $200", value: "mt200"},
  ];

  const categoryCheckHandler = (name) => {
    const currentList = [...checkedList];
    if (currentList.indexOf(name) >= 0) {
      const filteredCategory = currentList.filter((list) => list !== name);
      setCheckedList(filteredCategory);
    } else {
      currentList.push(name);
      setCheckedList(currentList);
    }
  };

  const priceCheckHandler = (name) => {
    const currentList = [...checkedPriceList];
    if (currentList.indexOf(name) >= 0) {
      const filteredCategory = currentList.filter((list) => list !== name);
      setCheckedPriceList(filteredCategory);
    } else {
      currentList.push(name);
      setCheckedPriceList(currentList);
    }
  };

  const confirmSelectedValue = (value, filterFrom) => {
    if (filterFrom === "category") {
      if (checkedList.indexOf(value) >= 0) {
        return true;
      } else {
        return false;
      }
    }
    if (filterFrom === "price") {
      if (checkedPriceList.indexOf(value) >= 0) {
        return true;
      } else {
        return false;
      }
    }
  };

  const addToCart = () => {
    setCartItems([
      {
        id: 1,
        name: "Samurai",
        pic: "",
      },
    ]);
    setShowCart(true);
  };

  const cartBoxHandler = (type) => {
    console.log(type, 'hhhh')
    if (type === "close") {
      setShowCart(false);
    }
    if (type === "open") {
      setShowCart(true);
    }
  };


  return (
    <>
      <Container
        cartItems={cartItems}
        showCart={showCart}
        cartBoxHandler={cartBoxHandler}
      >
        <Wrapper>
          <TitleWrapper>
            <div className="title">Samurai King Resting</div>
            <div className="add-cart">
              <Button text="ADD TO CART" clickAction={addToCart} />
            </div>
          </TitleWrapper>
          <MainPhotoHolder>
            <div>
              <img src={Photo} width="100%" />
            </div>
            <div className="flag">Photo of the day</div>
            <div className="button-holder">
              <Button text="ADD TO CART" clickAction={addToCart} />
            </div>
          </MainPhotoHolder>

          <InfoWrapper>
            <div className="about">
              <span className="title">About the Samurai King Resting</span>
              <span className="sub-text">Pets</span>
              <div className="text">
                So how did the classical Latin become so incoherent? According
                to McClintock, a 15th century typesetter likely scrambled part
                of Cicero's De Finibus in order to provide placeholdertext to
                mockup various fonts for a type specimen book.So how did the
                classical Latin become so incoherent? According to McClintock, a
                15th century typesetter likely scrambled part of Cicero's De
                Finibus in order to provide placeholder
                <br />
                <br />
                text to mockup various fonts for a type specimen book.So how did
                the classical Latin become so incoherent? According to
                McClintock.
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
                <div className="list-box">
                  {filterOptions.map((item, index) => {
                    return (
                      <label
                        className="container"
                        key={`category-${item.value}-${index}`}
                      >
                        {item.text}
                        <input
                          type="checkbox"
                          onChange={() => categoryCheckHandler(item.value)}
                          checked={confirmSelectedValue(item.value, "category")}
                        />
                        <span className="checkmark"></span>
                      </label>
                    );
                  })}
                </div>
              </div>
              <SubHeader />
              <div>
                <strong>Price range</strong>
                <div className="list-box">
                  {filterPriceOptions.map((item, index) => {
                    return (
                      <label
                        className="container"
                        key={`category-${item.value}-${index}`}
                      >
                        {item.text}
                        <input
                          type="checkbox"
                          onChange={() => priceCheckHandler(item.value)}
                          checked={confirmSelectedValue(item.value, "price")}
                        />
                        <span className="checkmark"></span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="product-list">
              {products.map((item, index) => {
                return (
                  <ProductCard
                    imgUrl={item.image.src}
                    name={item.name}
                    bestSeller={item.bestseller}
                  />
                );
              })}
            </div>
          </ProductBox>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
