import { createBrowserRouter } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Cart from "../Components/Cart";

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
            }
        ]
    }
])