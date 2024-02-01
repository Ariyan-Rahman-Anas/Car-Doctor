import { Link, useNavigate } from "react-router-dom";
import loginMedia from "./../../assets/images/login/login.svg";
import Logo from "./../../assets/logo.svg";
import { FaGoogle, FaLinkedin, FaFacebookF } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { PiWarningCircle } from "react-icons/pi";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";


const Registration = () => {
  const [registerError, setRegisterError] = useState("");
  const navigate = useNavigate()
  //creatingUser
  const { createUser, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then(result => {
        navigate("/")
        toast.success("Registration Successful!");
setRegisterError("")
      console.log(result.user)
      })
      .catch(error => {
        console.log(error.massage)
        setRegisterError(error.message)
    })
  };

  const handleGoogleSignUp = () => {
    googleSignIn()
      .then((result) => {
        navigate("/");
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
        <div className=" flex flex-col md:flex-row items-start justify-between gap-6">
          <div className="left flex-1 ">
            <img src={loginMedia} alt="" />
          </div>
          <div className="right w-full flex-1 shadow-md rounded-lg p-5">
            <h1 className="text-3xl font-semibold mb-6 text-center underline ">
              Registration
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Your name"
                {...register("name", { required: true })}
                className="placeholder:text-gray-600 p-2 bg-red-50 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-red-500 "
              ></input>
              {errors.name && (
                <div className="flex items-center justify-start gap-1 text-[#ff3811]">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Name required</span>
                </div>
              )}
              <input
                type="number"
                name="number"
                placeholder="Phone number"
                {...register("number", { required: true })}
                className="placeholder:text-gray-600 p-2 bg-red-50 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-red-500 "
              ></input>
              {errors.number && (
                <div className="flex items-center justify-start gap-1 text-[#ff3811]">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Number required</span>
                </div>
              )}
              <input
                type="email"
                name="email"
                placeholder="Your email"
                {...register("email", { required: true })}
                className="placeholder:text-gray-600 p-2 bg-red-50 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-red-500 "
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
                placeholder="Strong password"
                {...register("password", { required: true })}
                className=" placeholder:text-gray-600 p-2 bg-red-50 rounded-md border-y-4 border-transparent focus:outline-none focus:border-b-red-500 "
              ></input>
              {errors.password && (
                <div className="flex items-center justify-start gap-1 text-[#ff3811]">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Password required</span>
                </div>
              )}
              <p className="text-[#f82457] text-sm text-center">
                {registerError}{" "}
              </p>
              <input
                type="submit"
                value={"Sign up"}
                className="text-white bg-[#ff3811] p-2 rounded-md border-[.09rem] border-[#ff3811] hover:text-[#ff3811] hover:bg-white font-semibold duration-500 "
              />
            </form>
            <div className="flex items-center justify-between text-white mt-6 ">
              <hr className="border-[.09rem] border-[#ff3811] rounded-full w-[35%] " />
              <p className="font-normal text-black">or Sign up with</p>
              <hr className="border-[.09rem] border-[#ff3811] rounded-full w-[35%] " />
            </div>
            <div className="socials flex items-center justify-center text-[#ff3811] gap-6 mt-3 ">
              <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                <FaFacebookF className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "></FaFacebookF>
              </div>
              <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                <FaGoogle
                  onClick={handleGoogleSignUp}
                  className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "
                ></FaGoogle>
              </div>
              <div className="shadow-md w-[3rem]  h-[3rem] p-3 rounded-full hover:bg-white group duration-500">
                <FaLinkedin className="w-full h-full group-hover:text-black group-hover:scale-125 duration-500 cursor-pointer "></FaLinkedin>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mt-7 font-normal ">
              <p>Already have an account?</p>
              <Link
                to={"/logIn"}
                className="text-[#ff3811] font-semibold hover:underline hover:text-black "
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Registration;