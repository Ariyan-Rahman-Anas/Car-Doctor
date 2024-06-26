import { useLoaderData } from "react-router-dom";
import PageShortBanner from "../../Components/PageShortBanner";
import bannerBG from "./../../assets/images/checkout/blog.png";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import { FaRegUser } from "react-icons/fa";
import { FaRegThumbsDown, FaRegThumbsUp } from "react-icons/fa";
import axios from "axios";

const BlogDetailsPage = () => {
  const { user } = useAuth();
  const blogDetails = useLoaderData();
  const {
    _id,
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

  const url = `https://car-doctor-server-flame-one.vercel.app/blogComments/${_id}`;
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const randomValueForLiking = Math.ceil(Math.random() * 250);

  useEffect(() => {
    axios.get(url).then(res=>{setComments(res?.data)})
  },[url])

  const handleSubmitComment = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;
    const blogId = _id;
    const commenterName = user ? user.displayName : "Mr. Not Given";
    const commenterEmail = user ? user.email : "Mr Not Given@xyz.com";
    const commenterImage = user ? user.photoURL : "A";

    // Generate commenting time
    const dateForTimeStampInComment = new Date();
    const minute = dateForTimeStampInComment.getMinutes();
    const hour = dateForTimeStampInComment.getHours();
    const currentDate = dateForTimeStampInComment.getDate();
    const currentMonth = dateForTimeStampInComment.getMonth() + 1;
    const currentYear = dateForTimeStampInComment.getFullYear();
    const commentingTime = {
      minute,
      hour,
      currentDate,
      currentMonth,
      currentYear,
    };

    const aComment = {
      _id: Math.random().toString(36).substr(2, 9), // Generate a random ID for the comment
      blogId,
      commenterName,
      comment,
      commenterEmail,
      commenterImage,
      liking: randomValueForLiking,
      disliking: 0,
      commentingTime,
    };
    setNewComment(""); // Reset the new comment state

    //posting a comment
    axios.post(url, aComment).then((res) => {
      if (res?.data?.insertedId) {
        toast.success("Thanks for your comment!");
        setComments((prevComments) => [...prevComments, aComment]);
      }
    });
  };

  const handleLike = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment._id === commentId
          ? { ...comment, liking: comment.liking + 1 }
          : comment
      )
    );
  };

  const handleDislike = (commentId) => {
    setComments((prevComments) =>
      prevComments.map((comment) =>
        comment._id === commentId
          ? { ...comment, disliking: comment.disliking + 1 }
          : comment
      )
    );
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
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                cols="30"
                rows="1"
                placeholder="Write your comment..."
                required
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
                  {comments.length > 0
                    ? "Recent comments..."
                    : "Be the 1st commenter of the blog!"}
                </h1>
              </div>
              <div className="flex flex-col gap-5">
                {comments?.map((comment) => (
                  <div key={comment._id}>
                    <div className="flex items-start justify-start gap-1 text-sm ">
                      <div>
                        <div className="w-10 h-10">
                          {comment.commenterImage ? (
                            <img
                              src={comment?.commenterImage}
                              alt=""
                              className="w-full rounded-full"
                            />
                          ) : (
                            <div className="border2 w-fit text-white bg-[#ff3811] rounded-full ">
                              <FaRegUser className="p-1.5 w-fit text-4xl"></FaRegUser>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="w-full overflow-auto bg-gray-200 p-2 rounded-md rounded-l-none rounded-b-md ">
                        <h1 className="font-semibold text-sm text-gray-700 mb-1 ">
                          {comment?.commenterName}
                        </h1>
                        <span>{comment?.comment}</span>
                        <div className="like-and-date mt-5 flex items-center justify-between">
                          <div className="flex items-center gap-8 text-sm ">
                            <div className="flex items-center gap-1">
                              <button onClick={() => handleLike(comment?._id)}>
                                <FaRegThumbsUp className="hover:text-[#ff3811] duration-500 "></FaRegThumbsUp>{" "}
                              </button>
                              <div>
                                {comment?.liking > 0 && (
                                  <h1>{comment.liking}</h1>
                                )}
                              </div>
                            </div>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => handleDislike(comment?._id)}
                              >
                                <FaRegThumbsDown className="hover:text-[#ff3811] duration-500 "></FaRegThumbsDown>{" "}
                              </button>
                              <div>
                                {comment?.disliking > 0 && (
                                  <h1>{comment.disliking}</h1>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-end gap-2 text-xs text-gray-600">
                            <div className="flex">
                              <h1>{comment?.commentingTime?.hour}: </h1>
                              <h1>{comment?.commentingTime?.minute}</h1>
                            </div>
                            <div className="flex">
                              <h1>{comment?.commentingTime?.currentDate}/</h1>
                              <h1>{comment?.commentingTime?.currentMonth}/</h1>
                              <h1>{comment?.commentingTime?.currentYear}</h1>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogDetailsPage;
