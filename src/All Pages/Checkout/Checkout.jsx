import { useLoaderData, useNavigate } from "react-router-dom";
import PageShortBanner from "../../Components/PageShortBanner";
import imgBG from "./../../assets/images/checkout/checkout.png";
import { useContext } from "react";
import { AuthContext } from "./../../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { PiWarningCircle } from "react-icons/pi";
import Swal from "sweetalert2";

const Checkout = () => {
  const { user } = useContext(AuthContext);
  const service = useLoaderData();
  const { _id, name, price, img } = service;
  const navigate = useNavigate();

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: true,
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const bookingDetails = {
      name: data?.name,
      email: data?.email,
      phone: data?.phone,
      address: data?.address,
      date: data?.date,
      price: price,
      serviceName: name,
      img,
      service_Id: _id,
    };

    // swl2 starts from here
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to recheck this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, Confirm it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          console.log(bookingDetails);
          navigate("/myBookings");
          fetch("https://car-doctor-server-sigma-ruby.vercel.app/bookings", {
            method: "POST",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(bookingDetails),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            });

          swalWithBootstrapButtons.fire({
            title: "Order Confirmed!",
            text: "We will contact you soon.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "You are Canceling the order :)",
            icon: "error",
          });
        }
      });
    // swl2 ends here
  };

  return (
    <div className="px-2">
      <PageShortBanner
        BGImg={imgBG}
        pageTitle={"Checkout"}
        location={"Home >> Service Details > Checkout"}
        serviceTitle={name}
      ></PageShortBanner>
      <div className="bg-gray-200 lg:w-[85vw] mx-auto p-4 md:p-16 my-16 rounded-md ">
        <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-1.5">
              <input
                type="text"
                name="name"
                placeholder="First Name:"
                defaultValue={user?.displayName}
                {...register("name", { required: true })}
                className="p-2 rounded-md border-y-[.20rem] border-transparent focus:border-b-[#ff3811] focus:outline-none "
              />
              {errors.name && (
                <div className="flex items-center justify-start gap-1 text-[#ff3811]">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Name required</span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <input
                type="email"
                name="email"
                placeholder="Example@e-mail.com"
                defaultValue={user?.email}
                {...register("email", { required: true })}
                className="p-2 rounded-md border-y-[.20rem] border-transparent focus:border-b-[#ff3811] focus:outline-none "
              />
              {errors.email && (
                <div className="flex items-center justify-start gap-1 text-[#ff3811]">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Email required</span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <input
                type="number"
                name="phone"
                {...register("phone", { required: true })}
                placeholder="Phone:"
                className="p-2 rounded-md border-y-[.20rem] border-transparent focus:border-b-[#ff3811] focus:outline-none "
              />
              {errors.phone && (
                <div className="flex items-center justify-start gap-1 text-[#ff3811]">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Phone required</span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <input
                type="text"
                name="address"
                {...register("address", { required: true })}
                placeholder="Address:"
                className="p-2 rounded-md border-y-[.20rem] border-transparent focus:border-b-[#ff3811] focus:outline-none "
              />
              {errors.address && (
                <div className="flex items-center justify-start gap-1 text-[#ff3811]">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Address required</span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <input
                type="date"
                name="date"
                {...register("date", { required: true })}
                placeholder="Choose the Date:"
                className="p-2 rounded-md border-y-[.20rem] border-transparent focus:border-b-[#ff3811] focus:outline-none "
              />
              {errors.date && (
                <div className="flex items-center justify-start gap-1 text-[#ff3811]">
                  <PiWarningCircle className="text-2xl"></PiWarningCircle>
                  <span className="font-normal text-sm">Date required</span>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-1.5">
              <input
                type="number"
                name="price"
                placeholder="Price:"
                defaultValue={price}
                readOnly
                className="p-2 rounded-md border-y-[.20rem] border-transparent focus:border-b-[#ff3811] focus:outline-none "
              />
            </div>
          </div>
          <textarea
            name="message"
            cols="30"
            rows="5"
            {...register("message")}
            placeholder="Your message..."
            className="w-full mt-6 p-2 rounded-md border-y-[.20rem] border-transparent focus:border-b-[#ff3811] focus:outline-none "
          ></textarea>
          <input
            type="submit"
            value="Confirm Your Order"
            className="text-gray-100 bg-[#ff3811] w-full mt-3 rounded-md py-2 border-[.09rem] border-transparent hover:border-[#ff3811] hover:text-[#ff3811] hover:bg-white duration-500 "
          />
        </form>
      </div>
    </div>
  );
};
export default Checkout;
