import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../All Pages/Home/Home";
import LogIn from "./../All Pages/LogIn/LogIn";
import Registration from "../All Pages/Registration/Registration";
import Checkout from './../All Pages/Checkout/Checkout';
import ServiceDetails from "../Components/ServiceDetails";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5001/services/${params.id}`
          ),
      },
      {
        path: "checkout/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5001/services/${params.id}`
          ),
      },
      {
        path: "logIn",
        element: <LogIn></LogIn>,
      },
      {
        path: "register",
        element: <Registration></Registration>,
      },
    ],
  },
]);
export default MainRoute;