import {Route} from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";

export const landingRoutes = [
  {
    type: Route,
    path: "/",
    component: Home,
    exact: true,
  },
  {
    type: Route,
    path: "/home",
    component: Home,
    exact: true,
  },
  {
    type: Route,
    path: "*",
    component: NotFound,
  },
];
