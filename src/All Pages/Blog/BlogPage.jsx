import { Link } from "react-router-dom";
import PageShortBanner from "../../Components/PageShortBanner";
import blogBG from "./../../assets/images/checkout/blog.png";
import PrimaryBtn from "../../Components/PrimaryBtn";

const BlogPage = () => {
  return (
    <div>
      <PageShortBanner
        BGImg={blogBG}
        location={"Home > Blog "}
      ></PageShortBanner>
      <div className="w-full bloc border-2 ">
        <PrimaryBtn value={"Write a Blog"} link={"writeABlog"}></PrimaryBtn>
      </div>
      
    </div>
  );
};
export default BlogPage;
