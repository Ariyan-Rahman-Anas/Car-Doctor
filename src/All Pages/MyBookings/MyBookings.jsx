import { useEffect, useState } from "react";
import PageShortBanner from "../../Components/PageShortBanner";
import bannerBG from "./../../assets/images/checkout/myBookings.png";
import { RxCrossCircled } from "react-icons/rx";
import { Card, Typography, CardBody } from "@material-tailwind/react";
import PrimaryBtn from "./../../Components/PrimaryBtn";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const url = `https://car-doctor-server-flame-one.vercel.app/bookings?email=${user?.email}`;

  //fetching all of bookings form the database
  useEffect(() => {
    if (user?.email) {
      axios
        .get(url, { withCredentials: true })
        .then((res) => setBookings(res?.data));
    }
  }, [url, user.email]);

  //bookings table head
  const TABLE_HEAD = ["N/A", "Service", "Price", "Date", "Status"];

  //design of sweet alert2
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });

  //function for updating the booking status
  const handleUpdateItem = (id) => {
    fetch(`https://car-doctor-server-flame-one.vercel.app/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ status: "Confirmed" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Update Successful!");
          const remaining = bookings.filter((booking) => booking._id !== id);
          const updated = bookings.find((booking) => booking._id === id);
          updated.status = "Confirmed";
          const newBookings = [updated, ...remaining];
          setBookings(newBookings);
        }
      });
  };

  //deleting bookings item
  const handleDeleteCartItem = (id) => {
    // swl2 starts from here
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        cancelButtonColor: "#ff3811",
        confirmButtonColor: "green",
        showCancelButton: true,
        confirmButtonText: "Yes, Confirm",
        cancelButtonText: "No, Cancel",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            `https://car-doctor-server-flame-one.vercel.app/bookings/${id}`,
            {
              method: "DELETE",
            }
          )
            .then((res) => res.json())
            .then((data) => {
              if (data.deletedCount > 0) {
                const remainingCartItems = bookings.filter(
                  (booking) => booking._id !== id
                );
                setBookings(remainingCartItems);
              }
            });
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Service has been deleted with canceling the booking.",
            icon: "success",
            confirmButtonColor: "green",
          });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your booked service is in the safe zone :)",
            icon: "error",
            confirmButtonColor: "#ff3811",
          });
        }
      });
    // swl2 ends here
  };

  return (
    <div className="px-2">
      <PageShortBanner
        pageTitle={"My Bookings"}
        location={"Home > My Bookings"}
        BGImg={bannerBG}
      ></PageShortBanner>

      <div className="lg:w-[85vw] mx-auto my-10 px-">
        {bookings.length >= 1 ? (
          <>
            <Card className="h-full w-full shadow-none">
              <h1 className="font-extralight text-4xl border-b-2 border-[#ff3811] w-fit mx-auto text-center rounded-md mt-6 ">{`You have confirmed total ${bookings.length} services`}</h1>
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
                    {bookings.map(
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
                        const isLast = index === bookings.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <tr key={name} className="border- ">
                            <td>
                              {status === "Confirmed" ? (
                                <RxCrossCircled className="text-3xl text-white bg-gray-200 rounded-full w-fit cursor-pointer "></RxCrossCircled>
                              ) : (
                                <RxCrossCircled
                                  onClick={() => handleDeleteCartItem(_id)}
                                  className="text-3xl text-white bg-[#ff3811] rounded-full w-fit hover:text-[#ff3811] hover:bg-white duration-500 cursor-pointer "
                                ></RxCrossCircled>
                              )}
                            </td>
                            <td className={classes}>
                              <div className="flex items-center gap-3">
                                <img
                                  src={img}
                                  alt={serviceName}
                                  className="w-[6rem] rounded-md "
                                />
                                <div className="flex flex-col">
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal"
                                  >
                                    <b className="text-xl">{serviceName}</b>
                                  </Typography>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal opacity-70"
                                  >
                                    <b>Location:</b> {address}
                                  </Typography>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal opacity-70"
                                  >
                                    <b>Email:</b> {email}
                                  </Typography>
                                  <Typography
                                    variant="small"
                                    color="blue-gray"
                                    className="font-normal opacity-70"
                                  >
                                    <b>Call:</b> {phone}
                                  </Typography>
                                </div>
                              </div>
                            </td>
                            <td className={classes}>
                              <div className="flex flex-col">
                                <Typography
                                  variant="small"
                                  color="blue-gray"
                                  className="font-normal"
                                >
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
                                  onClick={() => handleUpdateItem(_id)}
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
        ) : (
          <div className="flex items-center justify-center text-center">
            <div>
              <strong className="font-medium text-5xl">Oops!</strong>
              <p className="mb-5 font-extralight text-2xl mt-2 text-center ">
                You did not confirm any service yet!
              </p>
              <PrimaryBtn
                value={"Book a Service"}
                link={"/allServices"}
              ></PrimaryBtn>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default MyBookings;