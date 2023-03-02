import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";
import Home from './home'
import Image from '../components/image'
import ProductPage from "./products";
import ProductDetail from "./productDetail";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/skates",
      element: <ProductPage />,
    },
    {
      path: "/main",
      element: <Image />,
    },
    {
      path: "/Skates/:id",
      element: <ProductDetail />,
    }
  ]);

export {router}