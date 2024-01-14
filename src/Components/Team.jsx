import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { IoMailUnread } from "react-icons/io5";
import SectionHead from "./SectionHead";
import { Link } from "react-router-dom";

const Team = () => {
  const [members, setMembers] = useState([]);
  useEffect(() => {
    fetch("teamMembers.json")
      .then((res) => res.json())
      .then((data) => {
        setMembers(data);
      });
  }, []);
  return (
    <div className="my-[5rem] px-2">
      <div className="text-center ">
        <div className="text-center md:w-3/4 lg:w-1/2 mx-auto ">
          <SectionHead
            heading={"Team"}
            subHeading={"Meet Our Team"}
            details={
              "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            }
          ></SectionHead>
        </div>
      </div>
      <div>
        <Swiper
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className={`mySwiper lg:w-[85vw]    `}
          breakpoints={{
            // when window width is >= 1200px (for large screens)
            1200: {
              slidesPerView: 3,
            },
            // when window width is >= 992px (for medium-sized screens)
            992: {
              slidesPerView: 2,
            },
            // when window width is >= 768px (for small screens)
            768: {
              slidesPerView: 1,
            },
          }}
        >
          {members?.map((member) => (
            <SwiperSlide key={member.id}>
              <div className=" mt-4 group border-[.09rem] border-gray-200 hover:bg-gray-200 duration-500 rounded-lg p-5  ">
                <div className="p-5">
                  <img src={member.img} alt="" className="w-full rounded-md group-hover:scale-110 duration-500  " />
                </div>
                <div>
                  <p className="text-center text-xl font-semibold ">
                    {member.name}{" "}
                  </p>
                  <p className="text-center text-sm text-gray-600 mb-3 ">
                    {member.specialist_on}
                  </p>
                  <div className="flex items-center justify-center gap-4 text-2xl ">
                    <Link className=" hover:text-[#ff3811] duration-500 hover:scale-125  ">
                      <BsFacebook></BsFacebook>
                    </Link>
                    <Link className=" hover:text-[#ff3811] duration-500 hover:scale-125  ">
                      <IoMailUnread></IoMailUnread>
                    </Link>
                    <Link className=" hover:text-[#ff3811] duration-500 hover:scale-125  ">
                      <BsLinkedin></BsLinkedin>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Team;