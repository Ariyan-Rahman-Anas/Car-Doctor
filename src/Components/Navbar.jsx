import { Link, NavLink } from "react-router-dom";
import Logo from "./../assets/logo.svg"
import PrimaryBtn from "./PrimaryBtn";

const Navbar = () => {
    return (
      <div>
        <nav className="flex items-center justify-between p-2">
          <div className="nav-start w-[5rem] ">
            <Link to={"/"}>
              <img src={Logo} alt="The Website Logo" className="w-full" />
            </Link>
          </div>
          <div className="navbar-middle hidden md:block">
            <ul className="flex space-x-8">
              <li className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-[#ff3811]">
                  Home
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#ff3811] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
                </NavLink>
              </li>
              <li className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-[#ff3811]">
                  About
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#ff3811] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
                </NavLink>
              </li>
              <li className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-[#ff3811]">
                  Services
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#ff3811] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
                </NavLink>
              </li>
              <li className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-[#ff3811]">
                  Blog
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#ff3811] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
                </NavLink>
              </li>
              <li className="tex-white relative group">
                <NavLink to={"/"} className="group-hover:text-[#ff3811]">
                  Contact
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#ff3811] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <PrimaryBtn value={"Appointment"}></PrimaryBtn>
            {/* <Link to={"/"} className="px-5 py-2 border-[.09rem] border-[#ff3811] font-semibold rounded-md text-[#ff3811] hv
            hover:bg-[#ff3811] hover:text-white duration-500 ">Appointment</Link> */}
          </div>
        </nav>
      </div>
    );
};

export default Navbar;