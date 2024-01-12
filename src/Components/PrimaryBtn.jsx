import { Link } from "react-router-dom";

const PrimaryBtn = ({value, link}) => {
    return (
      <Link
        to={link}
        className="px-4 py-1.5 rounded-sm font-normal bg-[#ff3811] hover:text-[#ff3811] hover:bg-white duration-500  "
      >
        {value}
      </Link>
    );
};

export default PrimaryBtn;