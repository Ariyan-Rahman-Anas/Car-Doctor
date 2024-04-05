import PageShortBanner from "../../Components/PageShortBanner";
import useAuth from "../../Hooks/useAuth";
import bannerBg from "./../../assets/images/checkout/writeABlog.png";
import toast from "react-hot-toast";
import SectionHead from "../../Components/SectionHead";
import axios from "axios";

const WriteABlogPage = () => {
  const { user } = useAuth();
  const url = `https://car-doctor-server-flame-one.vercel.app/blogs`;

  //function for submitting the blog writing form
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

    //posting the blog to the database using axiosSecure
    axios.post(url, aBlog)
      .then(res => {
        if (res?.data?.insertedId) {
                toast.success("Thanks for your valuable blog!");
        }
    })

  };
  return (
    <div className="px-2">
      <PageShortBanner
        BGImg={bannerBg}
        location={"Home > Blog > Writing Blog"}
      ></PageShortBanner>

      <div className="w-full lg:w-[85vw] mx-auto text-center mt-20 mb-8">
        <SectionHead
          heading={"Write a Blog"}
          subHeading={"Share Your Voice, Inspire the World"}
          details={
            "We're excited to hear your thoughts and stories. Share your experiences, insights, or creative works with our community. Whether it's a travel adventure, a cooking recipe, a tech review, or a personal reflection, your voice matters"
          }
        ></SectionHead>
      </div>

      {/*blog writing is starts from here */}
      <div className="w-full lg:w-[85vw] mx-auto mb-10 bg-gray-300 rounded-lg p-5 md:px-10 md:py-8  ">
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
              name="date"
              required
              className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            />
            <input
              type="url"
              placeholder="Blog's picture URL"
              name="blogImgURL"
              required
              className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            />
            <input
              type="text"
              name="category"
              placeholder="Blog category"
              required
              className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            />
            <input
              type="text"
              placeholder="Blog's title"
              name="title"
              required
              className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            />
            <textarea
              name="introduction"
              cols="30"
              rows="5"
              placeholder="Introduction..."
              required
              className="w-full p-2 rounded-md focus:placeholder:text-white  focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            ></textarea>
            <textarea
              name="mainContent"
              cols="30"
              rows="5"
              placeholder="Main content..."
              required
              className="w-full p-2 rounded-md focus:placeholder:text-white  focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            ></textarea>
          </div>
          <textarea
            name="CTA"
            cols="30"
            rows="3"
            placeholder="Call to action..."
            required
            className="w-full p-2 rounded-md focus:placeholder:text-white  focus:bg-[#ff3811] focus:text-white focus:outline-none  "
          ></textarea>
          <input
            type="submit"
            value={"Post"}
            className="text-white bg-[#ff3811] rounded-md p-2 mt-2 w-full border-[.09rem] border-transparent cursor-pointer duration-500 hover:text-[#ff3811] hover:bg-white hover:border-[#ff3811]  "
          />
        </form>
      </div>
      {/*blog writing form ends here */}
    </div>
  );
};
export default WriteABlogPage;