import React, {useState, useEffect} from "react";
import axios from "axios";
import Photo from "../../assets/images/dog.png";
import Pic1 from "../../assets/images/pic1.png";
import Pic2 from "../../assets/images/pic2.png";
import Pic3 from "../../assets/images/pic3.png";
import SortMobile from "../../assets/images/sort-mobile.svg";
import SortArrow from "../../assets/images/sort-arrow.svg";
import Close from "../../assets/images/close.svg";
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
import Pagination from "../../components/common/Pagination";
// import products from "./data";

const Home = () => {
  const [checkedList, setCheckedList] = useState([]);
  const [checkedPriceList, setCheckedPriceList] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [activePage, setActivePage] = useState(1);
  const [productsInView, setProductsInView] = useState([]);
  const [startFiltering, setStartFiltering] = useState(false);
  const [emptyCatalog, setEmptyCatalog] = useState(false);
  const [filteredCatalog, setFilteredCatalog] = useState([]);
  const [mobileFilter, setMobileFilter] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(
        process.env.REACT_APP_JSON_FILE_URL ||
          "https://yomigeek.github.io/product-list/products.json"
      ) // JSON File Path
      .then((response) => {
        console.log(response);
        setProducts(response.data.entries)
        setLoading(false);
      })
      .catch(function () {
        setLoading(false);
        setError(true);
      });
  }, []);

  console.log(products, 'pppp')

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
    if (!mobileFilter) {
      setStartFiltering(true);
    }
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
    if (!mobileFilter) {
      setStartFiltering(true);
    }
    const currentList = [];
    if (checkedPriceList.indexOf(name) >= 0) {
      setCheckedPriceList([]);
    } else {
      setCheckedPriceList([]);
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

  const addToCart = (itemId) => {
    const currentCart = [...cartItems];
    const newItem = products.filter((item) => item.id === itemId);
    currentCart.push(newItem[0]);
    setCartItems(currentCart);
    setShowCart(true);
  };

  const cartBoxHandler = (type) => {
    if (type === "close") {
      setShowCart(false);
    }
    if (type === "open") {
      setShowCart(true);
    }
    if (type === "clear") {
      setCartItems([]);
      setShowCart(false);
    }
  };

  useEffect(() => {
    setProductsInView([]);

    if (!startFiltering) {
      console.log(products, 'mm')
      let rowArray = [];
      const start = (activePage - 1) * 6;
      const end = start + 5;
      for (let i = start; i <= end; i++) {
        if (products[i]) {
          rowArray.push(products[i]);
        }
      }
      setProductsInView(rowArray);
    }

    if (startFiltering) {
      let rowArray = [];
      const start = (activePage - 1) * 6;
      const end = start + 5;
      for (let i = start; i <= end; i++) {
        if (filteredCatalog[i]) {
          rowArray.push(filteredCatalog[i]);
        }
      }
      setProductsInView(rowArray);
    }
  }, [
    activePage,
    startFiltering,
    checkedList.length,
    checkedPriceList.length,
    filteredCatalog,
    products
  ]);

  useEffect(() => {
    setEmptyCatalog(false);
    if (checkedList.length > 0 || checkedPriceList.length > 0) {
      if (!mobileFilter) {
        filterCatalog();
      }
    } else if (checkedList.length === 0 && checkedPriceList.length === 0) {
      if (!mobileFilter) {
        setStartFiltering(false);
      }
    }
  }, [checkedList, checkedPriceList]);

  const goToPage = (pageId) => {
    setActivePage(pageId);
  };

  const filterCatalog = () => {
    let category = checkedList;
    const allFilter = [];
    const filterCatalog = [];
    if (checkedList.length > 0 && checkedPriceList.length > 0) {
      category.forEach((cat) => {
        const findProduct = products.filter((item) => {
          if (checkedPriceList[0] === "mt20") {
            return item.category === cat && parseInt(item.price) > 200;
          }
          if (checkedPriceList[0] === "lt20") {
            return item.category === cat && parseInt(item.price) < 20;
          }
          if (checkedPriceList[0] === "20to100") {
            return (
              item.category === cat &&
              parseInt(item.price) >= 20 &&
              parseInt(item.price) < 101
            );
          }
          if (checkedPriceList[0] === "100to200") {
            return (
              item.category === cat &&
              parseInt(item.price) === 100 &&
              parseInt(item.price) < 201
            );
          }
        });
        allFilter.push(findProduct);
      });
    }

    if (checkedList.length > 0 && checkedPriceList.length === 0) {
      category.forEach((cat) => {
        const findProduct = products.filter((item) => {
          return item.category === cat;
        });
        allFilter.push(findProduct);
      });
    }

    if (checkedList.length === 0 && checkedPriceList.length === 0) {
      setCheckedPriceList([]);
      setCheckedList([]);
      setStartFiltering(false);
    }

    if (checkedList.length === 0 && checkedPriceList.length > 0) {
      const findProduct = products.filter((item) => {
        if (checkedPriceList[0] === "mt20") {
          return parseInt(item.price) > 200;
        }
        if (checkedPriceList[0] === "lt20") {
          return parseInt(item.price) < 20;
        }
        if (checkedPriceList[0] === "20to100") {
          return parseInt(item.price) >= 20 && parseInt(item.price) < 101;
        }
        if (checkedPriceList[0] === "100to200") {
          return parseInt(item.price) === 100 && parseInt(item.price) < 201;
        }
        if (checkedPriceList[0] === "mt200") {
          return parseInt(item.price) > 200;
        }
      });

      for (let j = 0; j <= findProduct.length - 1; j++) {
        filterCatalog.push(findProduct[j]);
      }

      setFilteredCatalog(filterCatalog);
    }

    for (let i = 0; i <= category.length - 1; i++) {
      if (allFilter[i]?.length > 0) {
        for (let j = 0; j <= allFilter[i].length - 1; j++) {
          filterCatalog.push(allFilter[i][j]);
        }
      }
    }

    if (startFiltering && filterCatalog.length < 1) {
      setFilteredCatalog([]);
      setEmptyCatalog(true);
    }
    if (filterCatalog.length > 0) {
      setFilteredCatalog(filterCatalog);
    }
  };

  const handleMobileFilter = (type) => {
    if (type === "open") {
      setMobileFilter(true);
    }
    if (type === "close") {
      setMobileFilter(false);
    }
  };

  const mobileFilterAction = (type) => {
    if (type === "start") {
      setStartFiltering(true);
      filterCatalog();
    }

    if (type === "clear") {
      setCheckedPriceList([]);
      setCheckedList([]);
      setStartFiltering(false);
    }
  };

  const hasWindow = typeof window !== 'undefined';

  function getWindowDimensions() {
    const width = hasWindow ? window.innerWidth : null;
    const height = hasWindow ? window.innerHeight : null;
    return {
      width,
      height,
    };
  }

  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
     
      window.addEventListener('resize', handleResize);
     
      return () => window.removeEventListener('resize', handleResize);

    }
  }, [hasWindow]);

  useEffect(() => {
    if(windowDimensions?.width > 990) {
      setMobileFilter(false);
    }
  }, [windowDimensions])


  return (
    <>
      <Container
        cartItems={cartItems}
        showCart={showCart}
        cartBoxHandler={cartBoxHandler}
        Photo={Photo}
      >
        <Wrapper>
          <TitleWrapper>
            <div className="title">Samurai King Resting</div>
            <div className="add-cart">
              <Button text="ADD TO CART" clickAction={() => addToCart(0)} />
            </div>
          </TitleWrapper>
          <MainPhotoHolder>
            <div>
              <img src={Photo} width="100%" />
            </div>
            <div className="flag">Photo of the day</div>
            <div className="button-holder">
              <Button text="ADD TO CART" clickAction={() => addToCart(0)} />
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
              <img
                src={SortMobile}
                onClick={() => handleMobileFilter("open")}
              />
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
            <div
              className="filter-mobile"
              style={{display: mobileFilter ? "block" : "none"}}
            >
              <div>
                <div className="header">
                  <strong>Filter</strong>
                  <div>
                    <img
                      src={Close}
                      onClick={() => handleMobileFilter("close")}
                      width="15px"
                    />
                  </div>
                </div>

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
              <div className="buttons-wrapper">
                <div className="clear">
                  <Button text="CLEAR" clickAction={() => mobileFilterAction('clear')} />
                </div>
                <div className="save">
                  <Button text="SAVE" clickAction={() => mobileFilterAction('start')} />
                </div>
              </div>
            </div>
            <div className="product-list">
              {emptyCatalog && <div>No match found!</div>}
              {loading ? <div>Loading...</div> : ""}
              {error ? <div>Error loading catalog...check connection</div> : ""}
              <div className="catalog">
                {productsInView.map((item, index) => {
                  return (
                    <ProductCard
                      imgUrl={item.image.src}
                      name={item.name}
                      bestSeller={item.bestseller}
                      addToCart={addToCart}
                      category={item.category}
                      price={item.price}
                      id={item.id}
                    />
                  );
                })}
              </div>
              {!emptyCatalog && (
                <div className="pagination">
                  <Pagination
                    products={!startFiltering ? products : filteredCatalog}
                    activePage={activePage}
                    goToPage={goToPage}
                  />
                </div>
              )}
            </div>
          </ProductBox>
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
