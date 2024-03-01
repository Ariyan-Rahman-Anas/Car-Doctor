import { useLoaderData } from "react-router-dom";

const BlogDetailsPage = () => {
    const blogDetails = useLoaderData()
    const {name, email, title, blogImgURL, date, category} = blogDetails || {}
    return (
        <div>
            <div>
                <img src={blogImgURL} alt="" />
            </div>
            <h1>{title} </h1>
        </div>
    );
};
export default BlogDetailsPage;