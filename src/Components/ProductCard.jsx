import { Rating } from "@material-tailwind/react";
import React from "react";

const ProductCard = ({ product }) => {
  const { name, img, rating, price } = product || {};
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
      <div className="flex items-center justify-center gap-2 font-bold text-blue-gray-500 mt-4 mb-2 ">
        {rated}
        <Rating value={4} onChange={(value) => setRated(value)} />
      </div>
      <h1 className="mt4 text-l font-semibold ">{name}</h1>
      <p className="font-semibold text-[#ff3811] ">${price} </p>
    </div>
  );
};
export default ProductCard;
