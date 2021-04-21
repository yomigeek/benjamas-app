import React from "react";
import {HeaderBox, HeaderTitle, HeaderMenu} from "./styles";
import Logo from '../../../assets/images/logo.svg';
import {useHistory} from "react-router-dom";

const Header = ({title, children}) => {
  const history = useHistory();
  return (
    <>
      <HeaderBox>
        <HeaderTitle onClick={() => history.push("/")}>
          <img src={Logo} width="120px"/>
        </HeaderTitle>
        <HeaderMenu>{children}</HeaderMenu>
      </HeaderBox>
    </>
  );
};

export default Header;
