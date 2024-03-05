import { Link } from "react-router-dom";
import errorBG from "./../../assets/images/err/error.svg";
const ErrorPage = () => {
  return (
    // <div style={{backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${errorBG})`, backgroundRepeat: "no-repeat", backgroundPosition:"center", backgroundSize:"cover"}} className="h-[100vh]" >

    // </div>
    <div className="h-[100vh] text-center flex flex-col gap-5 ">
      <div className="h-[86vh] py-8 px-2 md:py-2 ">
        <img src={errorBG} alt="404 picture" className="w-fit h-fit mx-auto " />
      </div>
      <Link
        to={"/"}
        className="text-white bg-[#ff3811] px-4 py-2 w-fit mx-auto rounded-md hover:text-[#ff3811] hover:bg-white border-[.09rem] border-[#ff3811] duration-500 "
      >
        Go Back to the Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
