import { Link } from "react-router-dom";

const BlogSmallCard = ({ blog }) => {
  const { _id, name, title, blogImgURL } = blog || {};
  return (
    <div className="shadow-md rounded-lg group ">
      <div className="overflow-hidden">
        <img
          src={blogImgURL}
          alt="blog image"
          className="w-full rounded-t-lg group-hover:scale-125 duration-500 "
        />
      </div>
      <div className="p-4">
        <h1 className="text-sm text-gray-500">{name}</h1>
        <Link
          to={`/blogs/blogDetails/${_id}`}
          className="font-semibold group-hover:text-[#ff3811] duration-500 "
        >
          {title}
        </Link>
      </div>
    </div>
  );
};

export default BlogSmallCard;
