import { useContext, useEffect, useState } from "react";
import PageShortBanner from "../../Components/PageShortBanner";
import bannerBG from "./../../assets/images/checkout/checkout.png"
import { AuthContext } from "../../Provider/AuthProvider";
import { RxCrossCircled } from "react-icons/rx";
import {
  Card,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

const MyBookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5001/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      });
  }, [url]);
  console.log(bookings);

  return (
    <div>
      <PageShortBanner
        pageTitle={"My Bookings"}
        location={"Home > My Bookings"}
        BGImg={bannerBG}
      ></PageShortBanner>

      <div className="lg:w-[85vw] mx-auto my-10">
        {bookings.length >= 1 ? (
          <>
            <Card className="h-full w-full shadow-none">
              <CardBody className="overflow-scroll px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left ">
                  <tbody>
                    {bookings.map(
                      (
                        { img, serviceName, name, price, date, address, phone },
                        index
                      ) => {
                        const isLast = index === bookings.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";
                        return (
                          <tr
                            key={name}
                            className="border-[.09rem] border-gray-200 my-4 py-4 rounded-md flex items-center justify-between "
                          >
                            <td className="w-[33rem] border2 ">
                              <div className="flex items-center gap-3 w-fit ">
                                <RxCrossCircled className="ml-5 mr-2 font-semibold text-2xl"></RxCrossCircled>
                                <img
                                  src={img}
                                  alt={serviceName}
                                  sizes="sm"
                                  className="w-[8rem] rounded-md bg-red-500 "
                                />
                                <div className="flex flex-col">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-semibold text-lg "
                                  >
                                    {serviceName}
                                  </Typography>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal opacity-70"
                                  >
                                    Location: {address}
                                  </Typography>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal opacity-70"
                                  >
                                    Call: {phone}
                                  </Typography>
                                </div>
                              </div>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                ${price}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-semibold"
                              >
                                {date}
                              </Typography>
                            </td>
                            <td className="pr-8">
                              <Link
                                variant="small"
                                color="blue-gray"
                                className="font-normal text-white bg-[#ff3811] w-fit px-4 py-2 rounded-md  hover:text-[#ff3811] hover:bg-white border-[.09rem] border-[#ff3811] duration-500 "
                              >
                                Pending
                              </Link>
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
        ) : (
          <div className="flex items-center justify-center text-center">
            <div>
              <strong className="font-medium text-5xl">Oops!</strong>
              <p className="font-extralight text-2xl mt-2 ">
                You did not confirm any service yet!
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MyBookings;