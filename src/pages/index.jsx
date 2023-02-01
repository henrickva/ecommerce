import {
    createBrowserRouter,
    RouterProvider,
    Route,
  } from "react-router-dom";

import Home from '../pages/home'
import Test from '../pages/teste'
import Image from '../components/image'

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/teste",
      element: <Test />,
    },
    {
      path: "/main",
      element: <Image />,
    },
  ]);

export const Router = () => (
    <RouterProvider router={router} />
)