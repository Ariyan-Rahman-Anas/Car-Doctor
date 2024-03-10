import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { Card, Typography, CardBody } from "@material-tailwind/react";
import { RxCrossCircled } from "react-icons/rx";
import PrimaryBtn from "../../Components/PrimaryBtn";
import useAuth from "../../Hooks/useAuth";
import PageShortBanner from "../../Components/PageShortBanner";
import bannerBg from "./../../assets/images/checkout/blog.png";
import spinner from "./../../assets/Spinner.gif";

const MyCart = () => {
  const { user } = useAuth();
  const url = `/orderedProducts?email=${user?.email}`;
  const axiosSecure = useAxiosSecure();
  const [orderedProducts, setOrderedProducts] = useState([]);

  const productPriceIs = orderedProducts.map((product) => product.price);
  console.log(productPriceIs);

  // const [productPrice, setProductPrice] = useState(productPriceIs);
  // setProductPrice(orderedProducts.map(price=>price.price))
  // console.log(orderedProducts.map(aItem=>aItem.price))

  const TABLE_HEAD = [
    "N/A",
    "Product",
    "Quantity",
    "Price",
    "Date[Y-M-D]",
    "Status",
  ];

  useEffect(() => {
    axiosSecure.get(url).then((res) => setOrderedProducts(res.data));
  }, [axiosSecure, url]);
  console.log(orderedProducts);

  const [quantity, setQuantity] = useState(1);
  const handleQuantityPlus = () => {
    setQuantity(quantity + 1);
  };
  const handleQuantityMinus = () => {
    setQuantity(quantity - 1);
  };

  return (
    <div>
      <PageShortBanner
        location={"Cart"}
        BGImg={bannerBg}
        pageTitle={"Your desired products"}
      ></PageShortBanner>
      <div className="lg:w-[85vw] mx-auto my-10 px-">
        {orderedProducts.length >= 1 ? (
          <>
            <Card className="h-full w-full shadow-none">
              <h1 className="font-extralight text-4xl border-b-2 border-[#ff3811] w-fit mx-auto text-center rounded-md mt-6 ">{`You have confirmed total ${orderedProducts.length} products`}</h1>
              <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {orderedProducts?.map(
                      (
                        {
                          _id,
                          img,
                          serviceName,
                          address,
                          phone,
                          price,
                          name,
                          email,
                          date,
                          status,
                        },
                        index
                      ) => {
                        const isLast = index === orderedProducts?.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <tr key={name} className="border- ">
                            <td>
                              {status === "Confirmed" ? (
                                <RxCrossCircled className="text-2xl text-white bg-gray-200 rounded-full w-fit cursor-pointer "></RxCrossCircled>
                              ) : (
                                <RxCrossCircled
                                  // onClick={() => handleDeleteCartItem(_id)}
                                  className="text-2xl text-white bg-[#ff3811] rounded-full w-fit hover:text-[#ff3811] hover:bg-white duration-500 cursor-pointer "
                                ></RxCrossCircled>
                              )}
                            </td>
                            <td className={classes}>
                              <div className="flex items-center">
                                <div className="w-1/12 ">
                                  <img
                                    src={img}
                                    alt={name}
                                    className="w-full rounded-md "
                                  />
                                </div>
                                <div className="flex flex-col">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-semibold opacity70"
                                  >
                                    {name}
                                  </Typography>
                                </div>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="flex  items-center justify-center gap-2 text-3xl ">
                                <Typography variant="small" color="blue-gray">
                                  <button
                                    className="text-xl h-5 w-5 rounded-md leading-5 text-center bg-gray-200 hover:text-white hover:bg-[#ff3811] duration-500 cursor-pointer "
                                    onClick={handleQuantityMinus}
                                    disabled={quantity === 1}
                                  >
                                    -
                                  </button>
                                </Typography>
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="text-lg"
                                >
                                  {quantity}
                                </Typography>
                                <Typography variant="small" color="blue-gray">
                                  <button
                                    onClick={handleQuantityPlus}
                                    className="text-xl h-5 w-5 rounded-md leading-5 text-center bg-gray-200 hover:text-white hover:bg-[#ff3811] duration-500 cursor-pointer "
                                  >
                                    +
                                  </button>
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  {/* m{productPrice} */}
                                  {price}
                                </Typography>
                              </div>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {date}
                              </Typography>
                            </td>
                            <td className={classes}>
                              {status === "Confirmed" ? (
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
                                  <PrimaryBtn
                                    value={"Order Confirmed"}
                                  ></PrimaryBtn>
                                </Typography>
                              ) : (
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  // onClick={() => handleUpdateItem(_id)}
                                  className="font-normal"
                                >
                                  <PrimaryBtn value={"Pending"}></PrimaryBtn>
                                </Typography>
                              )}
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
              </CardBody>
            </Card>
          </>
        ) : orderedProducts.length === 0 ? (
          <div className="flex items-center justify-center text-center">
            <div>
              <div>
                <img src={spinner} alt="" />
              </div>
            </div>
          </div>
        ) : (
          <div>
            <strong className="font-medium text-5xl">Oops!</strong>
            <p className="font-extralight text-2xl mt-2 text-center ">
              You did not confirm any service yet!
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
export default MyCart;