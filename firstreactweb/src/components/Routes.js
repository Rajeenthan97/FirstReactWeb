// import React from "react";
// import { createBrowserRouter } from "react-router-dom";
// import Home from "../Pages/Home";
// import Navbar from "./Navbar";
// import Shop from "../Pages/Shop/Shop";

// export const routes = createBrowserRouter([
//   {
//     path: '/',
//     element: <Shop/>,
//     children:[
//       { path: '/home', element: <Home/> },
//     ],
//   },

//   // {
//   //   path: "/home",
//   //   element:<Home/>,
//   // },
// //   {
// //     path: "/Blog",
// //     element:<Home/>,
// //   },
// //   {
// //     path: "/About",
// //     element:<Home/>,
// //   },
// //   {
// //     path: "/Contact us",
// //     element:<Home/>,
// //   },
// ]);

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";

export const routes = createBrowserRouter([
  {
    path: "/home",
    element: <Home />
  },
]);