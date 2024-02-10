import SectionHead from "./SectionHead";
import { Rating } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";

const Testimonial = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);
  const [rated, setRated] = React.useState(feedbacks?.rating);

  return (
    <div className="my-[5rem] px-2">
      <div className="text-center md:w-3/4 lg:w-1/2 mx-auto ">
        <SectionHead
          heading={"Testimonial"}
          subHeading={"What Customer Says"}
          details={
            "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
          }
        ></SectionHead>
      </div>
      <div className="lg:w-[85vw] mx-auto mt-4 ">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper shadow-md rounded-lg hover:bg-gray-100 duration-500"
        >
          {feedbacks?.map((feedback) => (
            <SwiperSlide key={feedback.id}>
              <div className="p-5 md:p-14 lg:px-20 lg:py-12 group  ">
                <div className="flex flex-cl items-center justify-center gap-3 group-hover:gap-5 duration-500 ">
                  <div className="w-[4rem] group-hover:scale-125 duration-500 ">
                    <img
                      src={feedback?.img}
                      alt=""
                      className="w-full rounded-full"
                    />
                  </div>
                  <div>
                    <h1 className="text-lg font-semibold">{feedback?.name}</h1>
                    <p className="text-gray-600">{feedback?.profession} </p>
                  </div>
                </div>
                <p className=" mt-4 text-sm text-gray-600 text-center ">
                  {feedback?.comment}
                </p>
                <p className="text-gray-600 text-sm mt-1 mb-4 text-center ">
                  {feedback?.date}{" "}
                </p>
                <div className="flex items-center justify-center gap-2 font-bold text-blue-gray-500 mt-4 mb-2 ">
                  {rated}
                  <Rating value={4} onChange={(value) => setRated(value)} />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
export default Testimonial;
