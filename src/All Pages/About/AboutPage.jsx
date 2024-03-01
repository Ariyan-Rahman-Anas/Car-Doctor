import About from "../../Components/About";
import SectionHead from "../../Components/SectionHead";
import toast from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";

const AboutPage = () => {
  const axiosSecure = useAxiosSecure();
  const url = `/reviews`;
  const {user} = useAuth()
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
    console.log(aReview);
    form.reset();

    //posting the review to the database
    axiosSecure
      .post(url, aReview, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success("Thanks for your valuable review!");
        }
      });
  };

  return (
    <div>
      <About></About>
      <div className="review-section mt-16 text-center ">
        <SectionHead
          heading={"Review"}
          subHeading={"We would love to hear from you"}
        ></SectionHead>
        <div className="m-1 mb-16 bg-gray-300 rounded-lg p-5 md:px-10 md:py-8  ">
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
                className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
                defaultValue={user?.photoURL && user.photoURL}
              />
              <input
                type="text"
                placeholder="Your profession"
                name="profession"
                className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
              />
              <input
                type="date"
                placeholder="Current date"
                name="date"
                className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
              />
              <input
                type="number"
                placeholder="Rate us from 1 to 5"
                name="rating"
                className="p-2 rounded-md  focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
              />
            </div>
            <textarea
              name="comment"
              id=""
              cols="30"
              rows="5"
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
    </div>
  );
};
export default AboutPage;