import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import NGOStoreContextProvider from "./context/NGOStoreContext.jsx";
import StoreContextProvider from "./context/StoreContext.jsx";
import "./index.css";
import Cancel from "./pages/Cancel/Cancel.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import MyOrders from "./pages/MyOrders/MyOrders.jsx";
import NGOLogin from "./pages/NGOAuthentication/NGOLogin.jsx";
import NGORegister from "./pages/NGOAuthentication/NGORegister.jsx";
import NGOMenu from "./pages/NGOMenu/NGOMenu.jsx";
import PlaceOrder from "./pages/PlaceOrder/PleaceOrder.jsx";
import Success from "./pages/Success/Success.jsx";
import Verify from "./pages/Verify/Verify.jsx";
// import ExcessFoodList from "./pages/ExcessFoodList/ExcessFoodList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menus",
        element: <Menu></Menu>,
      },
      {
        path: "/ngo-food-menus",
        element: <NGOMenu></NGOMenu>,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/order",
        element: <PlaceOrder></PlaceOrder>,
      },
      {
        path: "/verify",
        element: <Verify></Verify>,
      },
      {
        path: "/myorders",
        element: <MyOrders></MyOrders>,
      },
      {
        path: "/ngo-register",
        element: <NGORegister></NGORegister>,
      },
      {
        path: "/ngo-login",
        element: <NGOLogin></NGOLogin>,
      },
      // {
      //   path: "/excess-food-list",
      //   element: <ExcessFoodList></ExcessFoodList>
      // },
      {
        path: "/success",
        element: <Success></Success>,
      },
      {
        path: "/cancel",
        element: <Cancel></Cancel>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StoreContextProvider>
      <NGOStoreContextProvider>
        <RouterProvider router={router} />
      </NGOStoreContextProvider>
    </StoreContextProvider>
  </React.StrictMode>
);
