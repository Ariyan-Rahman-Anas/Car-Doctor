import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "./../assets/logo.svg";
import PrimaryBtn from "./PrimaryBtn";
import toast from "react-hot-toast";
import useAuth from "../Hooks/useAuth";
import { IoMenuOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { FaRegUser } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/logIn");
        toast.success("Log out Successful!");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div>
      <nav className="flex items-center justify-between p-2">
        <div className="nav-start w-[5rem] ">
          <Link to={"/"}>
            <img src={Logo} alt="The Website Logo" className="w-full" />
          </Link>
        </div>
        <div className="navbar-middle">
          <ul
            className={`flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-4 absolute md:static ${
              menu
                ? "top-[5.5rem] right-0 bg-black text-white bg-opacity-90 w-full h-[50vh] "
                : "-top-[69rem]"
            }  duration-700 z-10 `}
          >
            <li className="tex-white relative group">
              <NavLink to={"/"} className="group-hover:text-[#ff3811]">
                Home
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#ff3811] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300 "></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink to={"/about"} className="group-hover:text-[#ff3811]">
                About
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#ff3811] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>
            <li className="tex-white relative group">
              <NavLink
                to={"/allServices"}
                className="group-hover:text-[#ff3811]"
              >
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
              <NavLink to={"/contact"} className="group-hover:text-[#ff3811]">
                Contact
                <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#ff3811] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
              </NavLink>
            </li>

            {user ? (
              <>
                <li className="tex-white relative group">
                  <NavLink
                    to={"/myBookings"}
                    className="group-hover:text-[#ff3811]"
                  >
                    My Bookings
                    <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#ff3811] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
                  </NavLink>
                </li>
                <li onClick={handleLogOut} className="tex-white relative group">
                  <NavLink to={"/logIn"} className="group-hover:text-[#ff3811]">
                    Log out
                    <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#ff3811] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
                  </NavLink>
                </li>
              </>
            ) : (
              <li className="tex-white relative group">
                <NavLink to={"/logIn"} className="group-hover:text-[#ff3811]">
                  Log in
                  <span className="absolute left-0 right-0 bottom-0 top-[1.35rem] h-[.14rem] w-full rounded-md bg-[#ff3811] transform scale-x-0 origin-bottom transition-transform group-hover:scale-x-100 duration-300"></span>
                </NavLink>
              </li>
            )}
            {user ? (
              ""
            ) : (
              <li className="md:hidden">
                <PrimaryBtn value={"Appointment"} link={"/login"}></PrimaryBtn>
              </li>
            )}
          </ul>
        </div>
        <div className="navbar-end flex ">
          <div>
            {user ? (
              <div className="hidden md:block border-4 group relative w-fit rounded-full ">
                {/* <PrimaryBtn link={"/login"} value={"Appointment"}></PrimaryBtn> */}
                <div className="border-[.09rem] w-fit rounded-full border-[#ff3811]  ">
                  <div className="h-10 w-10 flex items-center justify-center cursor-pointer ">
                    {user.photoURL ? (
                      <img
                        src={user?.photoURL}
                        alt="user picture"
                        className="w-full rounded-full "
                      />
                    ) : (
                      <div className="border2 w-fit text-white bg-[#ff3811] rounded-full ">
                        <FaRegUser className="p-1.5 w-fit text-4xl"></FaRegUser>
                      </div>
                    )}
                  </div>
                </div>
                <div className="hidden group-hover:block absolute right-0 z-40 rounded-lg  w-[20rem] h-[10rem] bg-[#ff3811]  duration-500 "></div>
              </div>
            ) : (
              <div className="hidden md:block">
                <PrimaryBtn link={"/login"} value={"Appointment"}></PrimaryBtn>
              </div>
            )}
          </div>
          <div className="md:hidden">
            {menu ? (
              <button onClick={handleMenu}>
                <RxCross2 className="text-4xl text-[#ff3811]"></RxCross2>{" "}
              </button>
            ) : (
              <button onClick={handleMenu}>
                <IoMenuOutline className="text-4xl "></IoMenuOutline>
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
