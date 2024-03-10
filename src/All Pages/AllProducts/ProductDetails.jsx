import { Link, useLoaderData, useNavigate } from "react-router-dom";
import PageShortBanner from "../../Components/PageShortBanner";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FiFileText } from "react-icons/fi";
import logo from "./../../assets/Logo2.svg";
import { useEffect, useState } from "react";
import useAxiosSecure from "./../../Hooks/useAxiosSecure";
import React from "react";
import { Rating } from "@material-tailwind/react";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";

const ProductDetails = () => {
  const axiosSecure = useAxiosSecure();
    const product = useLoaderData();
    const navigate = useNavigate()
  const { _id, name, img, rating, price, description } = product || {};
  const [rated, setRated] = React.useState(rating);
  const [restProducts, setRestProducts] = useState([]);
  const url = `/products`;
    const productOrderingURL = `/orderedProducts`;
    const { user } = useAuth();

  useEffect(() => {
    axiosSecure.get(url).then((res) => setRestProducts(res.data));
  }, [axiosSecure, url]);

  // creating a random number and a ending number for showing related services
  const randomNumber = Math.ceil(Math.random() * 12);
    const endPoint = randomNumber + 5;
    
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth() + 1
    const todayDate = currentDate.getDate()
    const aFullDate = `${currentYear}-${currentMonth}-${todayDate}`

    const handleOrderProduct = () => {
      const aProduct = {
        name,
        img,
        rating,
        price,
        email: user.email,
        date: aFullDate,
      };
      console.log("issssssss", aProduct);

      //   posting a product to the database
      axiosSecure
        .post(productOrderingURL , aProduct, {
          headers: {
            "content-type": "application/json",
          },
        })
        .then((res) => {
          if (res?.data?.insertedId) {
            toast.success("Thanks for your purchase!");
            navigate("/myCart");
          }
        });
    }

  return (
    <div className="px-2">
      <PageShortBanner
        BGImg={img}
        pageTitle={"Service Details"}
        location={"Home > Product Details"}
        serviceTitle={name}
      ></PageShortBanner>

      <div className="lg:w-[85vw] mx-auto flex flex-col md:flex-row items-start justify-between gap-8 mt-14 mb-8 ">
        <div className="left w-full md:w-[70%]  ">
          <div className="w-full md:w-1/2 mx-auto ">
            <img src={img} alt="service image" className="rounded-md w-full" />
          </div>
          <div className="flex items-center justify-center gap-2 font-bold text-blue-gray-500 mt-4 mb-2 ">
            {rated}
            <Rating value={4} onChange={(value) => setRated(value)} />
          </div>
          <div className="mt-10 mb-5">
            <h1 className="font-normal text-3xl ">{name}</h1>
            <p className="text-sm text-gray-600 mt-2 ">{description}</p>
          </div>
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4 ">
            Map over the facility array and render each item
            {facility
              ? facility.map((aFacility, index) => (
                  <div
                    key={index}
                    className="bg-gray-200 p-4 rounded-md border-t-[.15rem] border-[#ff3811] "
                  >
                    <h2 className="font-semibold mb-1">{aFacility.name}</h2>
                    <p className="text-sm text-gray-600 ">
                      {aFacility.details}
                    </p>
                  </div>
                ))
              : "Empty"}
          </div> */}
          <div className="mt-4">
            <h1 className="text-3xl font-normal mt-6 ">
              3 Simple Steps to Process
            </h1>
            <p className="text-sm text-gray-600 mt-1 ">{description}</p>
            <div className="steps-are flex flex-col md:flex-row items-center justify-between gap-6 mt-5 ">
              <div className="first-step shadow-md rounded-md p-3 hover:bg-gray-200 duration-500">
                <div className="text-center">
                  <div className="number h-[3.5rem] w-[3.5rem] mx-auto rounded-full bg-red-100 flex items-center justify-center mb-2 ">
                    <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-[#ff3811] flex items-center justify-center ">
                      <h1 className="font-semibold text-white ">01</h1>
                    </div>
                  </div>
                  <strong>Step One</strong>
                  <p className="font-light text-sm mt-1 text-gray-600  ">
                    It uses a dictionary of over 200
                  </p>
                </div>
              </div>
              <div className="second-step shadow-md rounded-md p-3 hover:bg-gray-200 duration-500 ">
                <div className="text-center  ">
                  <div className="number h-[3.5rem] w-[3.5rem] mx-auto rounded-full bg-red-100 flex items-center justify-center mb-2 ">
                    <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-[#ff3811] flex items-center justify-center ">
                      <h1 className="font-semibold text-white ">02</h1>
                    </div>
                  </div>
                  <strong>Step Two</strong>
                  <p className="font-light text-sm mt-1 text-gray-600 ">
                    It uses a dictionary of over 200
                  </p>
                </div>
              </div>
              <div className="third-step shadow-md rounded-md p-3 hover:bg-gray-200 duration-500 ">
                <div className="text-center">
                  <div className="number h-[3.5rem] w-[3.5rem] mx-auto rounded-full bg-red-100 flex items-center justify-center mb-2">
                    <div className="h-[2.5rem] w-[2.5rem] rounded-full bg-[#ff3811] flex items-center justify-center ">
                      <h1 className="font-semibold text-white ">03</h1>
                    </div>
                  </div>
                  <strong>Step Three</strong>
                  <p className="font-light text-sm mt-1 text-gray-600  ">
                    It uses a dictionary of over 200
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="right w-full md:w-[30%] ">
          <div className="services bg-gray-200 rounded-md p-5">
            <h1 className="font-semibold text-2xl ">Related Products</h1>
            <div className="mt-3 flex flex-col gap-3">
              {restProducts?.slice(randomNumber, endPoint).map((aProduct) => (
                <Link
                  to={`/serviceDetails/${aProduct._id}`}
                  key={aProduct.id}
                  className="flex items-center justify-between bg-white px-4 py-3 rounded-md hover:text-white hover:bg-[#ff3811] duration-500 group "
                >
                  <p>{aProduct.name}</p>
                  <IoIosArrowRoundForward className="text-2xl text-[#ff3811] group-hover:text-white duration-500 "></IoIosArrowRoundForward>
                </Link>
              ))}
            </div>
          </div>
          <div className="download text-white bg-black rounded-md p-5 my-5 ">
            <h1 className="font-semibold text-2xl">Download</h1>
            <div className="mt-3 flex flex-col gap-4">
              <div className="flex items-center justify-between rounded-md px-4 py-2 text-gray-300 bg-gray-800 group hover:bg-transparent duration-500 ">
                <div className="flex items-center justify-between gap-2">
                  <FiFileText className="text-2xl"></FiFileText>
                  <div className="text-xs">
                    <p>Our Brochure</p>
                    <p>Download</p>
                  </div>
                </div>
                <Link>
                  <IoIosArrowRoundForward className="text-4xl rounded-sm p-1 group-hover:bg-[#ff3811] duration-500 "></IoIosArrowRoundForward>
                </Link>
              </div>
              <div className="flex items-center justify-between rounded-md px-4 py-2 text-gray-300 bg-gray-800 group hover:bg-transparent duration-500 ">
                <div className="flex items-center justify-between gap-2">
                  <FiFileText className="text-2xl"></FiFileText>
                  <div className="text-xs">
                    <p>Company Details</p>
                    <p>Download</p>
                  </div>
                </div>
                <Link>
                  <IoIosArrowRoundForward className="text-4xl rounded-sm p-1 group-hover:bg-[#ff3811] duration-500 "></IoIosArrowRoundForward>
                </Link>
              </div>
            </div>
          </div>
          <div className="help relative text-white bg-black rounded-md p-5 pb- my-5 text-center text-sm ">
            <div className="w-1/3  mx-auto mb-3">
              <img src={logo} alt="car doctor logo" className="w-full" />
            </div>
            <strong>Need Help?</strong>
            <p>We Are Here To Help You</p>
            <div className="text-black bg-white p-5 pb-10 rounded-md w-full lg:w-[85%] mx-auto mt-4 ">
              <strong className="text-xl">
                <span className="text-[#ff3511] ">Car Doctor </span>
                Special
              </strong>
              <p className="font-semibold mt-1 ">
                Save up to <span className="text-[#ff3811]">60% off</span>
              </p>
            </div>
            <Link className="text-white bg-[#ff3811] rounded-md w-fit px-3 lg:px-5 py-2 mx-auto absolute bottom-0 left-[25%] right-[25%] hover:text-[#ff3811] hover:bg-white border-[.09rem] border-transparent hover:border-[#ff3811] duration-500 ">
              <strong>Get A Quote</strong>
            </Link>
          </div>
          <p className="font-semibold text-3xl mt-8 mb-5">Price: ${price}</p>
          <Link onClick={handleOrderProduct} to={"/myCart"}>
            <div className="px-[1.2rem] py-1.5 rounded-full font-normal text-white bg-[#ff3811] border-[.09rem] border-transparent hover:border-[#ff3811] hover:text-[#ff3811] hover:bg-white duration-500 text-center ">
              Order Now
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;
