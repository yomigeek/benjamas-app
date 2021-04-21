import React from "react";
import {Switch} from "react-router-dom";
import AppRoute from "../components/AppRoute";
import {landingRoutes} from "../utils/routes";

const App = () => {
  return (
    <Switch>
      {landingRoutes.map((route, index) => (
        <AppRoute
          key={index}
          exact={route.exact}
          path={route.path}
          component={route.component}
        />
      ))}
    </Switch>
  );
};

export default App;
