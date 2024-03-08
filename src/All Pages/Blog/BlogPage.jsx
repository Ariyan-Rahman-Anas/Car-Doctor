import PageShortBanner from "../../Components/PageShortBanner";
import blogBG from "./../../assets/images/checkout/blog.png";
import PrimaryBtn from "../../Components/PrimaryBtn";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import BlogBigCard from "./BlogBigCard";
import SectionHead from "../../Components/SectionHead";
import BlogSmallCard from "./BlogSmallCard";

const BlogPage = () => {
  const axiosSecure = useAxiosSecure();
  const url = "/blogs";
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    axiosSecure.get(url).then((res) => setBlogs(res?.data));
  }, [axiosSecure]);

  return (
    <div>
      <PageShortBanner
        BGImg={blogBG}
        location={"Home > Blog "}
      ></PageShortBanner>
      <div className="mt-14 lg:w-2/3 mx-auto text-center ">
        <SectionHead
          heading={"The Car Doctor Blog"}
          subHeading={"Your Automotive Resource Hub"}
          details={
            "Welcome to our blog! We offer quick tips and insights to keep your car running smoothly. Stay tuned for helpful advice and updates on car maintenance. Let's drive smarter together!"
          }
        ></SectionHead>
      </div>

      <div className="w-full lg:w-[85vw] mx-auto my-10 px-2 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-10 ">
          <div className="left col-span-2 ">
            <div>
              {blogs?.slice(0, 1)?.map((blog, index) => (
                <BlogBigCard key={index} blog={blog}></BlogBigCard>
              ))}
            </div>
          </div>
          <div className="right col-span-2 md:col-span-1 ">
            <div>
              <SectionHead
                heading={"Blogs"}
                subHeading={"Here you can..."}
              ></SectionHead>
              <ul className="mb-3 list-disc text-gray-600 flex flex-col items-start gap-y-2 text-sm ">
                <li>
                  Read insightful blog posts on vehicle maintenance and repair.
                </li>
                <li>
                  Write and publish their own blog posts, sharing their
                  knowledge and experiences.
                </li>
                <li>
                  Engage with the community by leaving comments on blog posts
                  and participating in discussions.
                </li>
                <li>
                  Like or dislike blog posts and comments to provide feedback
                  and show appreciation.
                </li>
              </ul>
            </div>
            <PrimaryBtn value={"Write a blog"} link={"writeABlog"}></PrimaryBtn>
          </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 gap-8">
          {blogs?.slice(1, 100)?.map((blog, index) => (
            <BlogSmallCard key={index} blog={blog}></BlogSmallCard>
          ))}
        </div>
      </div>
    </div>
  );
};
export default BlogPage;