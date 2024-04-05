import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, img, name, price } = service || {};
  return (
    <div className="relative shadow-md rounded-lg px-8 py-6 group hover:bg-gray-200 duration-500 ">
      <div className="media">
        <img src={img} alt="" className="w-full rounded-md" />
      </div>
      <div className="info">
        <h1 className="text-xl mt-4 mb-2 font-normal text-left ">{name}</h1>
        <div className="mt-5 flex items-center justify-between text-[#ff3811] font-semibold ">
          <Link
            to={`/serviceDetails/${_id}`}
            className="text-gray-100 bg-gray-500 px-4 py-1.5 rounded-md hover:bg-[#ff3811] hover:text-gray-200 duration-500 "
          >
            Book now
          </Link>
          <p>Price: ${price}</p>
        </div>
      </div>
    </div>
  );
};
export default ServiceCard;