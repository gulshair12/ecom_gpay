import * as React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import Welcome from "./Welcome/Welcome";
import Checkout from "./Checkout/index";
import SuccesPage from "./Success/SuccesPage";
import Wallet from "./Wallet/Index";
import "./app.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/welcomePage",
      element: <Welcome />,
    },
    {
      path: "/wallet",
      element: <Wallet />,
    },

    {
      path: "/checkout/:amount",
      element: <Checkout />,
    },
    {
      path: "/success",
      element: <SuccesPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
