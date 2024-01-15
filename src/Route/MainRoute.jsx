import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../All Pages/Home/Home";
import LogIn from "../All Pages/Home/LogIn/LogIn";

const MainRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children:[
            {
                path: "/",
                element:<Home></Home>
            },
            {
                path: "logIn",
                element:<LogIn></LogIn>
            }
        ]
    }
])
export default MainRoute;