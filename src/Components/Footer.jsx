import { Link } from "react-router-dom";
import Logo from "./../assets/Logo2.svg";
import { FaGoogle, FaLinkedin, FaInstagram, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <div className="text-gray-400 bg-black px-2 ">
      <div className=" pt-10 pb-6 grid text-sm grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:place-items-center gap-5">
        <div>
          <div className="w-[5rem] ">
            <img src={Logo} alt="" className="w-full" />
          </div>
          <p className="text-sm my-4">
            Ariyan Rahman Anas is a software and web technologies engineer, a
            life coach trainer who is also a serial.
          </p>
          <div className="socials text-gray-200 flex items-center justify-start gap-4">
            <Link>
              <FaGoogle className="text-2xl   hover:text-[#ff3811] duration-500 "></FaGoogle>
            </Link>
            <Link to={"https://www.facebook.com/ariyanrahmananas69/"}>
              <FaFacebookF className="text-2xl   hover:text-[#ff3811] duration-500 "></FaFacebookF>
            </Link>
            <Link to={"https://www.linkedin.com/in/ariyanrahmananas/"}>
              <FaLinkedin className="text-2xl   hover:text-[#ff3811] duration-500 "></FaLinkedin>
            </Link>
            <Link>
              <FaInstagram className="text-2xl   hover:text-[#ff3811] duration-500 "></FaInstagram>
            </Link>
          </div>
        </div>
        <div className="">
          <strong className=" text-white">About</strong>
          <ul className="mt-2">
            <li className="hover:underline hover:text-gray-200  ">
              <Link to={"/"}>Home</Link>
            </li>
            <li className="hover:underline hover:text-gray-200  ">
              <Link to={"/allServices"}>Service</Link>
            </li>
            <li className="hover:underline hover:text-gray-200  ">
              <Link to={"/contact"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <strong className=" text-white">Company</strong>
          <ul className="mt-2">
            <li className="hover:underline hover:text-gray-200  ">
              <Link to={"/about"}>About</Link>
            </li>
            <li className="hover:underline hover:text-gray-200  ">
              <Link to={"/about"}>Location</Link>
            </li>
            <li className="hover:underline hover:text-gray-200  ">
              <Link to={"/blogs"}>Why Car Doctor</Link>
            </li>
          </ul>
        </div>
        <div>
          <strong className=" text-white">Support</strong>
          <ul className="mt-2">
            <li className="hover:underline hover:text-gray-200  ">
              <Link to={"about"}>Feedback</Link>
            </li>
            <li className="hover:underline hover:text-gray-200  ">
              <Link to={"/about"}>Accessibility</Link>
            </li>
            <li className="hover:underline hover:text-gray-200  ">
              <Link to={"/about"}>Support Center</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="pt-10 pb-2 text-center text-sm">
        Copy Right-{currentYear} || All rights reserved by Car Doctor ||
        Developed by
        <a
          target="_blank"
          rel="noopener noreferrer "
          href="https://ariyanrahmananas.netlify.app/"
        >
          {" "}
          Ariyan Rahman Anas
        </a>
      </p>
    </div>
  );
};
export default Footer;
