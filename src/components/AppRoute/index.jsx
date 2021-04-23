import React from "react";
import {Route} from "react-router-dom";

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

  return (
    <>
      <Route {...rest} render={renderComponent(Component)} />
    </>
  );
};

export default AppRoute;
