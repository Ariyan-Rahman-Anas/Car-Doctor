import { IoArrowForward } from "react-icons/io5";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { img, name, price } = service || {};
  return (
    <div className="shadow-md rounded-lg px-8 py-6 group hover:bg-gray-200 duration-500 ">
      <div className="">
        <img src={img} alt="" className="w-full rounded-md" />
      </div>
      <div className="">
        <h1 className="text-xl mt-4 mb-2 font-normal text-left ">{name}</h1>
        <div className="flex items-center justify-between text-[#ff3811] font-semibold ">
          <p>Price: {price}</p>
          <Link>
            <IoArrowForward className="text-2xl opacity-45 group-hover:opacity-100 duration-500 "></IoArrowForward>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
