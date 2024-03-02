import { useLoaderData } from "react-router-dom";
import PageShortBanner from "../../Components/PageShortBanner";
import bannerBG from "./../../assets/images/checkout/blog.png";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";

const BlogDetailsPage = () => {
  const { user } = useAuth();
  const blogDetails = useLoaderData();
  const {
    name,
    email,
    title,
    blogImgURL,
    date,
    category,
    introduction,
    mainContent,
    CTA,
  } = blogDetails || {};

  const axiosSecure = useAxiosSecure();
  const url = `/blogComments`;

  const [comments, setComments] = useState([]);
  useEffect(() => {
    axiosSecure.get(url).then((res) => setComments(res?.data));
  }, [url, axiosSecure]);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const aComment = {
      comment,
    };
    console.log(aComment);

    //posting a comment
    axiosSecure
      .post(url, aComment, {
        headers: {
          "content-type": "application/json",
        },
      })
      .then((res) => {
        if (res?.data?.insertedId) {
          toast.success("Thanks for your valuable blog!");
        }
      });
  };

  return (
    <div className="mb-10 px-2 ">
      <PageShortBanner
        BGImg={bannerBG}
        location={"Home > Blog > Blog Details"}
      ></PageShortBanner>

      <div className="parent lg:w-[85vw] mx-auto mt-16  ">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-gray-600 text-sm  ">
          <div className="flex-1">
            <img
              src={blogImgURL}
              alt="blog image"
              className="rounded-lg w-full "
            />
            <h1 className="text-3xl text-black mt-4 mb-2 ">{title} </h1>
            <p>{name}</p>
            <p>{date}</p>
          </div>
          <div className="flex-1  ">
            <strong>{category}</strong>
            <p className="mt-2">{introduction}</p>
            <p className="my-5">{mainContent}</p>
            <em className="font-semibold">🔊...{CTA}</em>
          </div>
        </div>

        <div className="comments-section mt-16 border-t-[.09rem] border-gray-300 rounded--md pt-2 ">
          <div className="comment-form">
            <h1 className="font-semibold text-gray-500 mb-3 ">Comments...</h1>
            <form onSubmit={handleSubmitComment} className="flex gap- w-full ">
              <textarea
                name="comment"
                cols="30"
                rows="1"
                placeholder="Write your comment..."
                className="p-2 w-full bg-gray-200 rounded-l-md text-black focus:text-white focus:bg-gray-600 focus:placeholder:text-white focus:outline-none duration-500 "
              ></textarea>
              <input
                type="submit"
                value={"Comment"}
                className="text-white bg-[#ff3811] px-2 rounded-r-md cursor-pointer "
              />
            </form>
            <div className="showing-comments">
              <div>
                <h1 className="mt-5 mb-1 text-gray-500 ">
                  Top comments are...
                </h1>
              </div>
              <div className="flex flex-col gap-5">
                {/* // */}
                {comments?.map((comment) => (
                  <div key={comment._id}>
                    <div className="flex items-start gap-2 ">
                      <div className="w-10 h-10">
                        <img
                          src={user?.photoURL}
                          alt=""
                          className="w-full rounded-full"
                        />
                      </div>
                      <div className="bg-gray-300 p-2 rounded-md rounded-l-none rounded-b-md ">
                        <h1 className="font-semibold text-sm text-gray-600 ">
                          {user?.displayName}
                        </h1>
                        <p>{comment.comment}</p>
                      </div>
                    </div>
                  </div>
                ))}
                {/* // */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetailsPage;
