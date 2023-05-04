import { Navigate, createBrowserRouter } from "react-router-dom";
import Main_Page from "../Main_Page/Main_Page";
import Login from "../sign_In_Out/Login/Login";
import Register from "../sign_In_Out/Register/Register";
import Main from "../Main_Page/Main";
import Banner_page from "../Pages/Banner_page/Home_page";
import PrivateRoute from "./PrivateRoute";
import Recipes from "../Pages/Recipes/Recipes";
import Banner from "../Pages/Banner_page/Banner";
import Chef_Card from "../Pages/Chef/Chef_Card";
import Home_page from "../Pages/Banner_page/Home_page";
import ErrorPage from "../Error_Page/ErrorPage";
import Blog from "../Blog/Blog";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home_page></Home_page>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/:id',
                element:<PrivateRoute> <Recipes></Recipes></PrivateRoute>,
                loader: ({ params }) => fetch(`https://international-chef-and-their-recipes-data-radifkhanrafin.vercel.app/chef/${params.id}`)
            }

        ]

    }
])

export default router;