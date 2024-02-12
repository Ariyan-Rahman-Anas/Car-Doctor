import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../All Pages/Home/Home";
import LogIn from "./../All Pages/LogIn/LogIn";
import Registration from "../All Pages/Registration/Registration";
import Checkout from "./../All Pages/Checkout/Checkout";
import ServiceDetails from "../Components/ServiceDetails";
import ErrorPage from "./../All Pages/Error/ErrorPage";
import MyBookings from "../All Pages/MyBookings/MyBookings";
import PrivateRoute from "./PrivateRoute";
import AboutPage from "../All Pages/About/AboutPage";
import ServicesPage from "../All Pages/AllServices/ServicesPage";
import ContactPage from "../All Pages/Contact/ContactPage";

const MainRoute = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "about",
        element:<AboutPage></AboutPage>
      },
      {
        path: "allServices",
        element:<ServicesPage></ServicesPage>
      },
      {
        path: "serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5001/services/${params.id}`),
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5001/services/${params.id}`),
      },
      {
        path: "myBookings",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
      },
      {
        path: "contact",
        element:<ContactPage></ContactPage>
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
