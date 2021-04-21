import React from "react";
import {Route} from "react-router-dom";
import Container from "../common/Container";

/**
 *
 * @param {Component} Component
 *
 * @returns {JSX}
 */
const renderComponent = (Component) => (props) => {
  return <Component {...props} />;
};

/**
 * This Component returns a new route
 *
 * @returns {JSX}
 */
const AppRoute = (props) => {
  const {component: Component, ...rest} = props;
  const {path} = props;

  let titleBarText = "Titles";
  if (path === "/series") {
    titleBarText = "Series";
  }
  if (path === "/movies") {
    titleBarText = "Movies";
  }
  if (path === "*") {
    titleBarText = "none";
  }

  return (
    <Container titleBarText={titleBarText} >
      <Route {...rest} render={renderComponent(Component)} />
    </Container>
  );
};

export default AppRoute;
