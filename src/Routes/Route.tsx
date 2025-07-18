import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Cart from "../Components/Cart";
import Shopnow from "../Components/Product/shopnow/Shopnow";
import Product from "../Pages/Product";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/shopnow/:id",
                element: <Shopnow/>
            },
            {
                path: "/product",
                element: <Product/>
            }
        ]
    }
])