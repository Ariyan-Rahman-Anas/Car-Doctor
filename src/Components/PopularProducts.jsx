import { useEffect, useState } from "react";
import SectionHead from "./SectionHead";
import ProductCard from "./ProductCard";
import PrimaryBtn from "./PrimaryBtn";
import useAxiosSecure from "../Hooks/useAxiosSecure";

const PopularProducts = () => {
  const axiosSecure = useAxiosSecure();
  const url = `/products`
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axiosSecure.get(url).then((res) => setProducts(res?.data));
  }, [axiosSecure, url]);

  return (
    <div className="px-2 my-[5rem] text-center ">
      <div className="text-center md:w-3/4 lg:w-1/2 mx-auto ">
        <SectionHead
          heading={"Popular Products"}
          subHeading={"Browse Our Products"}
          details={
            "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
          }
        ></SectionHead>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mb-10 ">
        {products?.slice(0, 6).map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
      <PrimaryBtn value={"More Products"} link={"allProducts"}></PrimaryBtn>
    </div>
  );
};
export default PopularProducts;