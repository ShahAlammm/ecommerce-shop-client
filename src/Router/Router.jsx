import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";

const Router = createBrowserRouter([
    {
        path:'/',
        element: <MainLayout></MainLayout>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path: 'product',
                element:<ProductDetails></ProductDetails>
            }
        ]
    }
])
export default Router;