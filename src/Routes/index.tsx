import { RouteObject } from "react-router";
import Layout from "../Layout";
import Home from "../pages/Home";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
];
export default routes;
