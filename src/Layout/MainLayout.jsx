import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const MainLayout = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("logIn") ;
  return (
    <div>
      {noHeaderFooter || <Navbar></Navbar>}
      {/* <Navbar></Navbar> */}
          <Outlet></Outlet>
          {noHeaderFooter || <Footer></Footer> }
      {/* <Footer></Footer> */}
    </div>
  );
};

export default MainLayout;
