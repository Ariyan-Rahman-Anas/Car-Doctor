import { useNavigate } from "react-router-dom";
import PageShortBanner from "../../Components/PageShortBanner";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import bannerBg from "./../../assets/images/checkout/writeABlog.png";
import toast from "react-hot-toast";

const WriteABlogPage = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const url = `/blogs`;
  const navigate = useNavigate();

  const handleSubmitBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const blogImgURL = form.blogImgURL.value;
    const date = form.date.value;
    const category = form.category.value;
    const title = form.title.value;
    const introduction = form.introduction.value;
    const mainContent = form.mainContent.value;
    const CTA = form.CTA.value;

    const aBlog = {
      name,
      email,
      blogImgURL,
      date,
      category,
      title,
      introduction,
      mainContent,
      CTA,
    };
    console.log("new blog is:", aBlog);

    //   posting the blog to the database using axiosSecure
    axiosSecure
      .post(url, aBlog, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success("Thanks for your valuable blog!");
          navigate("/blogs");
        }
      });
  };
  return (
    <div>
      <PageShortBanner
        BGImg={bannerBg}
        location={"Home > Blog > Writing Blog"}
      ></PageShortBanner>

      {/* form start for writing a review */}
      <div className="m-1 mb-16 bg-gray-300 rounded-lg p-5 md:px-10 md:py-8  ">
        <form onSubmit={handleSubmitBlog} className="form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 ">
            <input
              type="text"
              placeholder="Author's name"
              name="name"
              defaultValue={user?.displayName && user.displayName}
              required
              className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            />
            <input
              type="text"
              placeholder="Author's email"
              name="email"
              defaultValue={user?.email && user.email}
              required
              className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            />

            <input
              type="date"
              placeholder="Current date"
              name="date" required
              className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            />
            <input
              type="url"
              placeholder="Blog's picture URL"
              name="blogImgURL" required
              className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            />
            <input
              type="text"
              name="category"
              placeholder="Blog category" required
              className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            />
            <input
              type="text"
              placeholder="Blog's title"
              name="title" required
              className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            />
            <textarea
              name="introduction"
              cols="30"
              rows="5"
              placeholder="Introduction..." required
              className="w-full p-2 rounded-md focus:placeholder:text-white  focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            ></textarea>
            <textarea
              name="mainContent"
              cols="30"
              rows="5"
              placeholder="Main content..." required
              className="w-full p-2 rounded-md focus:placeholder:text-white  focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            ></textarea>
          </div>
          <textarea
            name="CTA"
            cols="30"
            rows="3"
            placeholder="Call to action..." required
            className="w-full p-2 rounded-md focus:placeholder:text-white  focus:bg-[#ff3811] focus:text-white focus:outline-none  "
          ></textarea>
          <input
            type="submit"
            value={"Submit Review"}
            className="text-white bg-[#ff3811] rounded-md p-2 mt-2 w-full border-[.09rem] border-transparent cursor-pointer duration-500 hover:text-[#ff3811] hover:bg-white hover:border-[#ff3811]  "
          />
        </form>
      </div>
      {/*review writing form end */}
    </div>
  );
};
export default WriteABlogPage;