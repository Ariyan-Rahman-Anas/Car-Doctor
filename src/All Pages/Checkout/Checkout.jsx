import { useLoaderData } from "react-router-dom";
import PageShortBanner from "../../Components/PageShortBanner";
import imgBG from "./../../assets/images/checkout/checkout.png"

const Checkout = () => {
    const service = useLoaderData()
    const { name, img, description, price } = service

    return (
      <div className="px-2">
        <PageShortBanner
          BGImg={imgBG}
          pageTitle={"Checkout"}
          location={"Home > Checkout"}
        ></PageShortBanner>
        <div className="bg-gray-200 lg:w-[85vw] mx-auto p-4 md:p-16 my-16 rounded-md ">
          <form className="w-full">
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="first-name"
                placeholder="First Name"
                className="p-2 rounded-md border-y-[.20rem] border-transparent focus:border-b-[#ff3811] focus:outline-none "
              />
              <input
                type="text"
                name="last-name"
                placeholder="Last Name"
                className="p-2 rounded-md border-y-[.20rem] border-transparent focus:border-b-[#ff3811] focus:outline-none "
              />
              <input
                type="number"
                name="phone"
                placeholder="Phone"
                className="p-2 rounded-md border-y-[.20rem] border-transparent focus:border-b-[#ff3811] focus:outline-none "
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="p-2 rounded-md border-y-[.20rem] border-transparent focus:border-b-[#ff3811] focus:outline-none "
              />
            </div>
            <textarea
              name="message"
              cols="30"
              rows="5"
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