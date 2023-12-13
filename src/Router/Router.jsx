import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import LogIn from "../Pages/LogIn";
import Register from "../Pages/Register";

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
                path: 'product/:id',
                element:<ProductDetails></ProductDetails>
            },
            {
                path: 'login',
                element: <LogIn/>
            },
            {
                path: 'register',
                element: <Register/>
            }
        ]
    }
])
export default Router;