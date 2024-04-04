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
import AllProductsPage from "../All Pages/AllProducts/AllProductsPage";
import BlogPage from "../All Pages/Blog/BlogPage";
import WriteABlogPage from "../All Pages/WriteABlog/WriteABlogPage";
import BlogDetailsPage from "../All Pages/Blog/BlogDetailsPage";
import ProductDetails from "../All Pages/AllProducts/ProductDetails";
import MyCart from "../All Pages/AllProducts/MyCart";

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
        element: <AboutPage></AboutPage>,
      },
      {
        path: "allProducts",
        element: <AllProductsPage></AllProductsPage>,
      },
      {
        path: "productDetails/:id",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-green-delta.vercel.app/products/${params.id}`
          ),
      },
      {
        path: "myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "allServices",
        element: <ServicesPage></ServicesPage>,
      },
      {
        path: "serviceDetails/:id",
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-green-delta.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "checkout/:id",
        element: (
          <PrivateRoute>
            <Checkout></Checkout>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-green-delta.vercel.app/services/${params.id}`
          ),
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
        path: "blogs",
        element: <BlogPage></BlogPage>,
      },
      {
        path: "blogs/blogDetails/:id",
        element: (
          <PrivateRoute>
            <BlogDetailsPage></BlogDetailsPage>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-green-delta.vercel.app/blogs/${params.id}`
          ),
      },
      {
        path: "blogs/writeABlog",
        element: <WriteABlogPage></WriteABlogPage>,
      },
      {
        path: "contact",
        element: (
          <PrivateRoute>
            <ContactPage></ContactPage>
          </PrivateRoute>
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