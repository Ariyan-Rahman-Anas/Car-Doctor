import { useLoaderData } from "react-router-dom";
import PageShortBanner from "../../Components/PageShortBanner";
import bannerBG from "./../../assets/images/checkout/blog.png";

const BlogDetailsPage = () => {
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
  return (
    <div className="mb-10 px-2 ">
      <PageShortBanner
        BGImg={bannerBG}
        location={"Home > Blog > Blog Details"}
      ></PageShortBanner>
      <div className="lg:w-[85vw] mx-auto mt-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 text-gray-600 text-sm  ">
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
          <p>{introduction}</p>
          <p className="my-5">{mainContent}</p>
          <em className="font-semibold">🔊...{CTA}</em>
        </div>
      </div>
    </div>
  );
};
export default BlogDetailsPage;
