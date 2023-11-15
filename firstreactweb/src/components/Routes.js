import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "./Navbar";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <Navbar/>,
    children:[
      { path: '/home', element: <Home/> },
    ],
  },
//   {
//     path: "/home",
//     element:<Home/>,
//   },
//   {
//     path: "/Blog",
//     element:<Home/>,
//   },
//   {
//     path: "/About",
//     element:<Home/>,
//   },
//   {
//     path: "/Contact us",
//     element:<Home/>,
//   },
]);
