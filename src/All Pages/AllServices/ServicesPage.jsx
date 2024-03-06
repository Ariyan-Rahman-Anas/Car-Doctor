import { useEffect, useState } from "react";
import SectionHead from "./../../Components/SectionHead";
import ServiceCard from "./../../Components/ServiceCard";
import PageShortBanner from "../../Components/PageShortBanner";
import ImgBg from "./../../assets/images/checkout/myBookings.png";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [itemPerPage, setItemPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(0);
  const [count, setCount] = useState(0);
  const numberOfPages = Math.ceil(count / itemPerPage);
  const pages = [...Array(numberOfPages).keys()];

  const axiosSecure = useAxiosSecure();
  const url = `/services?page=${currentPage}&size=${itemPerPage}`;
  const servicesCountURL = `/servicesCount`;

  useEffect(() => {
    axiosSecure.get(servicesCountURL).then((res) => {
      setCount(res?.data.count);
      console.log(res.data.count);
    });
  }, [axiosSecure, servicesCountURL]);

  useEffect(() => {
    axiosSecure.get(url).then((res) => {
      setServices(res?.data);
    });
  }, [axiosSecure, url, currentPage, itemPerPage]);

  const handleItemPerPage = (e) => {
    const value = parseInt(e.target.value);
    setItemPerPage(value);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="text-center my-[5rem] px-2 ">
      <PageShortBanner
        BGImg={ImgBg}
        pageTitle={"All Services"}
        location={"Home > All Services"}
      ></PageShortBanner>
      <div className="heading lg:w-2/3 mx-auto ">
        <SectionHead
          heading={"Service"}
          subHeading={"Our Service Area"}
          details={
            "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable, words which don't look even slightly believable."
          }
        ></SectionHead>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mb-10 ">
        {services?.map((service) => (
          <ServiceCard key={service.id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="pagination">
        <div>
          <h1>Current page : {currentPage} </h1>
          <button
            onClick={handlePrevPage}
            className="text-sm md:mx-4 p-1 px-2 rounded-md bg-transparent hover:text-white hover:bg-[#ff3811]  duration-500 "
          >
            Previous
          </button>
          {pages.map((page) => (
            <button
              onClick={() => setCurrentPage(page)}
              key={page}
              className={` ${
                currentPage === page ? "bg-[#ff3811]" : "bg-gray-500 "
              }  h-6 w-6 m-2 p-1 leading-none rounded-md text-sm text-white hover:bg-[#ff3811] duration-500  `}
            >
              {page}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className="text-sm md:mx-4 p-1 px-2 rounded-md bg-transparent hover:text-white hover:bg-[#ff3811]  duration-500 "
          >
            Next
          </button>{" "}
          <br />
          <select
            name=""
            id=""
            value={itemPerPage}
            onChange={handleItemPerPage}
            className="p-2 bg-gray-500 text-white rounded-md "
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="50">50</option>
          </select>
        </div>
      </div>
    </div>
  );
};
export default ServicesPage;
