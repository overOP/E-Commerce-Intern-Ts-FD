import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Cart from "../Components/Cart";
import ShopMain from "../Components/Shopnow/ShopMain"
import Shop from "../Pages/Shop";
import Contact from "../Pages/Contact";

// Account section components
import Account from "../Layout/Account";
import Main from "../Pages/account/Main";
import Address from "../Pages/account/Address";
import Orders from "../Pages/account/Orders";
import Wishlist from "../Pages/account/Wishlist";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/cart", element: <Cart /> },
      {
        path: "/account",
        element: <Account />,
        children: [
          { index: true, element: <Main /> }, 
          { path: "address", element: <Address /> },
          { path: "orders", element: <Orders /> },
          { path: "wishlist", element: <Wishlist /> }
        ]
      },
      { path: "/shopmain/:id", element: <ShopMain/> },
      { path: "/shop", element: <Shop /> },
      { path: "/contact", element: <Contact /> }
    ]
  }
]);
