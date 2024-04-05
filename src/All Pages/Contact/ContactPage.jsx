import Contact from "../../Components/Contact";
import CoreFeature from "../../Components/CoreFeature";
import PageShortBanner from "../../Components/PageShortBanner";
import ImgBg from "./../../assets/images/checkout/myBookings.png";
import SectionHead from "./../../Components/SectionHead";
import toast from "react-hot-toast";
import useAuth from "./../../Hooks/useAuth";
import axios from "axios";

const ContactPage = () => {
  const url = `https://car-doctor-server-flame-one.vercel.app/reviews`;
  const { user } = useAuth();

  //function for submitting the review taking form
  const handleSubmitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const imgURL = form.imgURL.value;
    const profession = form.profession.value;
    const date = form.date.value;
    const rating = form.rating.value;
    const comment = form.comment.value;

    const aReview = {
      name,
      email,
      imgURL,
      profession,
      date,
      rating,
      comment,
    };
    form.reset();

    //posting the review in the database
    axios.post(url, aReview).then((res) => {
      if (res?.data?.insertedId) {
        toast.success("Thanks for your valuable review!");
      }
    });
  };

  return (
    <div className="px-2">
      <PageShortBanner
        BGImg={ImgBg}
        pageTitle={"Contact Us"}
        location={"Home > Contact"}
      ></PageShortBanner>
      <Contact></Contact>
      <CoreFeature></CoreFeature>
      {/* ... */}
      <div className="review-section mt-16 text-center w-full lg:w-[85vw] mx-auto">
        <div className="w-full lg:w-[85%] mx-auto ">
          <SectionHead
            heading={"Review"}
            subHeading={"We would love to hear from you"}
            details={
              "Thank you for choosing us! We value your feedback and would love to hear about your experience with our products/services. Your reviews help us improve and provide better experiences for all our customers"
            }
          ></SectionHead>
        </div>
        <div className="mt-6 mb-10 bg-gray-300 rounded-lg p-5 md:px-10 md:py-8  ">
          <form onSubmit={handleSubmitForm} className="form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 ">
              <input
                type="text"
                placeholder="Your name"
                name="name"
                defaultValue={user?.displayName && user.displayName}
                required
                className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
              />
              <input
                type="text"
                placeholder="Your email"
                name="email"
                defaultValue={user?.email && user.email}
                required
                className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
              />
              <input
                type="url"
                placeholder="Your picture URL"
                name="imgURL"
                required
                className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
                defaultValue={user?.photoURL && user.photoURL}
              />
              <input
                type="text"
                placeholder="Your profession"
                name="profession"
                required
                className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
              />
              <input
                type="date"
                placeholder="Current date"
                required
                name="date"
                className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
              />
              <input
                type="number"
                placeholder="Rate us from 1 to 5"
                name="rating"
                required
                className="p-2 rounded-md  focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
              />
            </div>
            <textarea
              name="comment"
              id=""
              cols="30"
              rows="5"
              required
              placeholder="Write your words about us..."
              className="w-full p-2 rounded-md focus:placeholder:text-white  focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            ></textarea>
            <input
              type="submit"
              value={"Submit Review"}
              className="text-white bg-[#ff3811] rounded-md p-2 mt-2 w-full border-[.09rem] border-transparent cursor-pointer duration-500 hover:text-[#ff3811] hover:bg-white hover:border-[#ff3811]  "
            />
          </form>
        </div>
      </div>
      {/* ... */}
    </div>
  );
};
export default ContactPage;