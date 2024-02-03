import { useContext, useEffect, useState } from "react";
import PageShortBanner from "../../Components/PageShortBanner";
import bannerBG from "./../../assets/images/checkout/checkout.png"
import { AuthContext } from "../../Provider/AuthProvider";
import { RxCrossCircled } from "react-icons/rx";
import {
  Card,
  Typography,
  CardBody
} from "@material-tailwind/react";
import PrimaryBtn from './../../Components/PrimaryBtn';
import Swal from "sweetalert2";


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

  const TABLE_HEAD = ["N/A", "Service", "Price", "Date", "Status"];

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });

  const handleDeleteCartItem = id => {
    // swl2 starts from here
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Confirm it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          fetch(
            `http://localhost:5001/bookings/${id}`, {
              method: "DELETE"
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.deletedCount > 0) {
                // alert("Deleted!")
                const remainingCartItems = bookings.filter(booking => booking._id !== id)
                setBookings(remainingCartItems)
              }
            });
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Service has been deleted with canceling the order.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your ordered service is in the safe zone :)",
            icon: "error",
          });
        }
      });
    // swl2 ends here
  }

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
              <h1 className="font-extralight text-4xl border-b-2 border-[#ff3811] w-fit mx-auto rounded-md mt-6 ">{`You have confirmed total ${bookings.length} services`}</h1>
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
                              <RxCrossCircled
                                onClick={() => handleDeleteCartItem(_id)}
                                className="text-3xl text-white bg-[#ff3811] rounded-full w-fit hover:text-[#ff3811] hover:bg-white duration-500 cursor-pointer "
                              ></RxCrossCircled>
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
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                <PrimaryBtn
                                  value={"Pending"}
                                  link={"/"}
                                ></PrimaryBtn>
                              </Typography>
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
              <p className="font-extralight text-2xl mt-2 text-center ">
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