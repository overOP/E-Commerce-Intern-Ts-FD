import { createBrowserRouter, Navigate } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Cart from "../Components/Cart";
import ShopMain from "../Components/Shopnow/ShopMain";
import Shop from "../Pages/Shop";
import Contact from "../Pages/Contact";

// Account components
import Account from "../Layout/Account";
import Main from "../Pages/account/Main";
import Address from "../Pages/account/Address";
import Orders from "../Pages/account/Orders";
import Wishlist from "../Pages/account/Wishlist";

// Auth Layouts
import Signup from "../Layout/Signup";
import SigninMain from "../Components/Layout/signup/SigninMain";
import ProtectedRoute from "./ProtectedRoute";
import ForgotPassword from "../Components/Layout/ForgotPassword/ForgotPassword";
import ResetPassword from "../Components/Layout/ForgotPassword/ResetPassword";

export const router = createBrowserRouter([
  // Public routes
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <SigninMain />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPassword />,
  },

  // Protected routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/cart", element: <Cart /> },
          { path: "/shopmain/:id", element: <ShopMain /> },
          { path: "/shop", element: <Shop /> },
          { path: "/contact", element: <Contact /> },
          {
            path: "/account",
            element: <Account />,
            children: [
              { index: true, element: <Main /> },
              { path: "address", element: <Address /> },
              { path: "orders", element: <Orders /> },
              { path: "wishlist", element: <Wishlist /> },
            ],
          },
        ],
      },
    ],
  },

  // If unmatched route, redirect to /
  {
    path: "*",
    element: <Navigate to="/" replace />,
  },
]);


