import { Link } from "react-router-dom";
import loginMedia from "./../../../assets/images/login/login.svg"
import Logo from "./../../../assets/logo.svg"
import { FaGoogle, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";

const LogIn = () => {
    return (
      <div
        style={{
          background: `linear-gradient(to top, rgba(255,56,17,0.8), rgba(0,0,0,0.1)`,
        }}
        className="bg-gradientto-b from-[#ff3811] to-[black] p-2"
      >
        <div className="lg:w-[85vw] mx-auto  ">
          <div className="nav-start w-[5rem] ">
            <Link to={"/"}>
              <img src={Logo} alt="The Website Logo" className="w-full" />
            </Link>
          </div>
          <div className=" flex flex-col md:flex-row items-start justify-between gap-6">
            <div className="left flex-1 ">
              <img src={loginMedia} alt="" />
            </div>
            <div className="right w-full flex-1 shadow-md rounded-lg p-5">
              <h1 className="text-3xl font-semibold mb-6 text-center underline ">Login</h1>
              <form className="flex flex-col gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="placeholder:text-gray-600 p-2 bg-gray-200 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-red-500 "
                ></input>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className=" placeholder:text-gray-600 p-2 bg-gray-200 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-red-500 "
                ></input>
                <input
                  type="submit"
                  value={"Sign In"}
                  className="text-[#ff3811] bg-white p-2 rounded-md hover:text-white hover:bg-[#ff3811] font-semibold duration-500 "
                />
              </form>
              <div className="flex items-center justify-between text-white mt-6 ">
                <hr className="border-[.09rem] rounded-full w-[35%] " />
                <p className="font-normal text-black">or Sign in with</p>
                <hr className="border-[.09rem] rounded-full w-[35%] " />
              </div>
              <div className="socials flex items-center justify-center text-gray-800 gap-6 mt-3 ">
                <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                  <FaFacebookF className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "></FaFacebookF>
                </div>
                <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                  <FaGoogle className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "></FaGoogle>
                </div>
                <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                  <FaLinkedin className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "></FaLinkedin>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 mt-7 font-normal ">
                <p>Don't have an account?</p>
                <Link
                  to={"/register"}
                  className="text-white hover:underline hover:text-black "
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};
export default LogIn;