import { Link, useLocation, useNavigate } from "react-router-dom";
import loginMedia from "./../../assets/images/login/login.svg";
import Logo from "./../../assets/logo.svg";
import { FaGoogle, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { PiWarningCircle } from "react-icons/pi";
import { useState } from "react";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const LogIn = () => {
  const { signIn, googleSignIn } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [logInError, setLogInError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const loggedEmail = { email: data.email };
        console.log(loggedEmail);
        //getting access token from jwt
        // fetch("https://car-doctor-server-sigma-ruby.vercel.app/jwt", {
        //   method: "POST",
        //   headers: {
        //     "content-type": "application/json",
        //   },
        //   body: JSON.stringify({ email: data?.email }),
        //   credentials: "include",
        // })
        //   .then((res) => res.json())
        //   .then((data) => {
        //     if (data.success) {
        //       navigate(location?.state ? location?.state : "/");
        //     }
        //   });

        // axios.post("https://car-doctor-server-sigma-ruby.vercel.app/jwt", loggedEmail).then((res) => {
        //   console.log(res.data);
        //   if (res.data.success) {
        //     navigate(location?.state ? location?.state : "/");
        //   }
        // });
        navigate(location?.state ? location?.state : "/");
        toast.success("Registration Successful!");
        setLogInError("");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
        setLogInError("Invalid email or password!");
      });
  };

  const handleGoogleLogIn = () => {
    googleSignIn()
      .then((result) => {
        navigate(location?.state ? location?.state : "/");
        toast.success("Registration Successful!");
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="p-2">
      <div className="lg:w-[85vw] mx-auto  ">
        <div className="nav-start w-[5rem] ">
          <Link to={"/"}>
            <img src={Logo} alt="The Website Logo" className="w-full" />
          </Link>
        </div>
        <div className="flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="left flex-1 ">
            <img src={loginMedia} alt="" />
          </div>
          <div className="right w-full flex-1 shadow-md rounded-lg p-5">
            <h1 className="text-3xl text-[#ff381] font-semibold mb-6 text-center underline ">
              Login
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="placeholder:text-gray-600 p-2 bg-red-50 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-red-500 "
                {...register("email", { required: true })}
              ></input>
              {errors.email && (
                <div className="flex items-center justify-start gap-1 text-[#ff3811]">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Email required</span>
                </div>
              )}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className=" placeholder:text-gray-600 p-2 bg-red-50 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-red-500 "
                {...register("password", { required: true })}
              ></input>
              {errors.password && (
                <div className="flex items-center justify-start gap-1 text-[#ff3811]">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Password required</span>
                </div>
              )}
              <p className="text-[#f82457] text-sm text-center">
                {logInError}{" "}
              </p>
              <input
                type="submit"
                value={"Sign in"}
                className="text-white bg-[#ff3811] p-2 rounded-md border-[.09rem] border-[#ff3811] hover:text-[#ff3811] hover:bg-white font-semibold duration-500 "
              />
            </form>
            <div className="flex items-center justify-between text-white mt-6 ">
              <hr className="border-[.09rem] border-[#ff3811] rounded-full w-[35%] " />
              <p className="font-normal text-black">or Sign in with</p>
              <hr className="border-[.09rem] border-[#ff3811] rounded-full w-[35%] " />
            </div>
            <div className="socials flex items-center justify-center text-[#ff3811] gap-6 mt-3 ">
              <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                <FaFacebookF className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "></FaFacebookF>
              </div>
              <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                <FaGoogle
                  onClick={handleGoogleLogIn}
                  className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "
                ></FaGoogle>
              </div>
              <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                <FaLinkedin className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "></FaLinkedin>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-7 font-normal ">
              <p>Don't have an account?</p>
              <Link
                to={"/register"}
                className="text-[#ff3811] font-semibold hover:underline hover:text-black "
              >
                Registration
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LogIn;
