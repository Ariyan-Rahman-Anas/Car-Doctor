import { Rating } from "@material-tailwind/react";
import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { _id, name, img, rating, price } = product || {};
  const [rated, setRated] = React.useState(rating);

  return (
    <div className="p-6 shadow-md rounded-xl hover:bg-gray-20 duration-500 group  ">
      <div className="bg-gray-200 rounded-md h-[12rem] 2xl:h-[16rem] p-4 2xl:p-6 overflow-hidden ">
        <img
          src={img}
          alt=""
          className="w-ful h-full mx-auto group-hover:scale-125 duration-500 "
        />
      </div>
      <h1 className="mt-3 mb-1 text-lg font-semibold ">{name}</h1>
      <div className="flex items-center justify-center gap-2 text-sm font-semibold text-blue-gray-500">
        {rated}
        <Rating value={4} onChange={(value) => setRated(value)} />
      </div>
      <div className="flex items-center justify-between mt-6">
        <Link
          to={`/productDetails/${_id}`}
          className="text-gray-100 bg-gray-500 px-4 py-1.5 rounded-md hover:bg-[#ff3811] hover:text-gray-200 duration-500 "
        >
          Buy now
        </Link>
        <p className="font-semibold text-[#ff3811] ">Price: ${price} </p>
      </div>
    </div>
  );
};
export default ProductCard;
