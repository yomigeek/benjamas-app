import {Route} from "react-router-dom";
import NotFound from "../Pages/NotFound";
import Home from "../Pages/Home";
import Series from "../Pages/Series";
import Movies from "../Pages/Movies";

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
    path: "/series",
    component: Series,
    exact: true,
  },
  {
    type: Route,
    path: "/movies",
    component: Movies,
    exact: true,
  },
  {
    type: Route,
    path: "*",
    component: NotFound,
  },
];
