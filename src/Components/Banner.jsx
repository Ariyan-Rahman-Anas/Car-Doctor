import banner1 from "./../assets/images/banner/1.png"
import banner2 from "./../assets/images/banner/2.png"
import banner3 from "./../assets/images/banner/3.png"
import banner4 from "./../assets/images/banner/4.png"
import banner5 from "./../assets/images/banner/5.png"
import banner6 from "./../assets/images/banner/6.png"
import { Carousel } from "@material-tailwind/react";
import PrimaryBtn from "./PrimaryBtn"

const Banner = () => {
    return (
      <div>
        <Carousel
          className="rounded-md lg:w-[85vw] mx-auto mt-5 mb-10 "
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          {/* slider-1 */}
          <div className="relative">
            <img
              src={banner1}
              alt="image 1"
              className="h-[100vh]  w-full object-cover lg:object-fill   "
            />
            <div
              style={{
                background: `linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.9))`,
              }}
              className="text-white absolute left-0 top-0 w-full h-full md:flex items-center justify-start "
            >
              <div className=" p-5">
                <h1 className="text-4xl font-normal">
                  Affordable <br /> Price For Car <br /> Servicing
                </h1>
                <p className="text-sm my-4">
                  There are many variations of passages of available, but <br /> the
                  majority have suffered alteration in some form
                </p>
                <div className="btns flex items-center justify-normal gap-4">
                  <PrimaryBtn value={"Discover More"} link={"/go"}></PrimaryBtn>
                  <PrimaryBtn
                    value={"Latest Project"}
                    link={"/go"}
                  ></PrimaryBtn>
                </div>
              </div>
            </div>
            <div className="slide-control absolute bottom-4 right-4 flex items-center justify-between gap-4 ">
              <button className="!absolut bottom-[.1rem] right-20 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white bg-white/30 hover:bg-[#ff3811] active:bg-white/30 grid place-items-center duration-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                  class="-ml-1 h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  ></path>
                </svg>
              </button>
              ;{/* // */}
              <button className="!absolut bottom-[.1rem] right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white bg-white/30 hover:bg-[#ff3811] active:bg-white/30 grid place-items-center duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                  class="ml-1 h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* slider-2 */}
          <div className="relative">
            <img
              src={banner2}
              alt="image 1"
              className="h-[100vh]  w-full object-cover lg:object-fill   "
            />
            <div
              style={{
                background: `linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.9))`,
              }}
              className="text-white absolute left-0 top-0 w-full h-full md:flex items-center justify-start "
            >
              <div className=" p-5">
                <h1 className="text-4xl font-normal">
                  Affordable <br /> Price For Car <br /> Servicing
                </h1>
                <p className="text-sm my-4">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="btns flex items-center justify-normal gap-4">
                  <PrimaryBtn value={"Discover More"} link={"/go"}></PrimaryBtn>
                  <PrimaryBtn
                    value={"Latest Project"}
                    link={"/go"}
                  ></PrimaryBtn>
                </div>
              </div>
            </div>
            <div className="slide-control absolute bottom-4 right-4 flex items-center justify-between gap-4 ">
              <button className="!absolut bottom-[.1rem] right-20 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white bg-white/30 hover:bg-[#ff3811] active:bg-white/30 grid place-items-center duration-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                  class="-ml-1 h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  ></path>
                </svg>
              </button>
              ;{/* // */}
              <button className="!absolut bottom-[.1rem] right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white bg-white/30 hover:bg-[#ff3811] active:bg-white/30 grid place-items-center duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                  class="ml-1 h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* slider-3 */}
          <div className="relative">
            <img
              src={banner3}
              alt="image 1"
              className="h-[100vh]  w-full object-cover lg:object-fill   "
            />
            <div
              style={{
                background: `linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.9))`,
              }}
              className="text-white absolute left-0 top-0 w-full h-full md:flex items-center justify-start "
            >
              <div className=" p-5">
                <h1 className="text-4xl font-normal">
                  Affordable <br /> Price For Car <br /> Servicing
                </h1>
                <p className="text-sm my-4">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="btns flex items-center justify-normal gap-4">
                  <PrimaryBtn value={"Discover More"} link={"/go"}></PrimaryBtn>
                  <PrimaryBtn
                    value={"Latest Project"}
                    link={"/go"}
                  ></PrimaryBtn>
                </div>
              </div>
            </div>
            <div className="slide-control absolute bottom-4 right-4 flex items-center justify-between gap-4 ">
              <button className="!absolut bottom-[.1rem] right-20 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white bg-white/30 hover:bg-[#ff3811] active:bg-white/30 grid place-items-center duration-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                  class="-ml-1 h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  ></path>
                </svg>
              </button>
              ;{/* // */}
              <button className="!absolut bottom-[.1rem] right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white bg-white/30 hover:bg-[#ff3811] active:bg-white/30 grid place-items-center duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                  class="ml-1 h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* slider-4 */}
          <div className="relative">
            <img
              src={banner4}
              alt="image 1"
              className="h-[100vh]  w-full object-cover lg:object-fill   "
            />
            <div
              style={{
                background: `linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.9))`,
              }}
              className="text-white absolute left-0 top-0 w-full h-full md:flex items-center justify-start "
            >
              <div className=" p-5">
                <h1 className="text-4xl font-normal">
                  Affordable <br /> Price For Car <br /> Servicing
                </h1>
                <p className="text-sm my-4">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="btns flex items-center justify-normal gap-4">
                  <PrimaryBtn value={"Discover More"} link={"/go"}></PrimaryBtn>
                  <PrimaryBtn
                    value={"Latest Project"}
                    link={"/go"}
                  ></PrimaryBtn>
                </div>
              </div>
            </div>
            <div className="slide-control absolute bottom-4 right-4 flex items-center justify-between gap-4 ">
              <button className="!absolut bottom-[.1rem] right-20 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white bg-white/30 hover:bg-[#ff3811] active:bg-white/30 grid place-items-center duration-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                  class="-ml-1 h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  ></path>
                </svg>
              </button>
              ;{/* // */}
              <button className="!absolut bottom-[.1rem] right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white bg-white/30 hover:bg-[#ff3811] active:bg-white/30 grid place-items-center duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                  class="ml-1 h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* slider-5 */}
          <div className="relative">
            <img
              src={banner5}
              alt="image 1"
              className="h-[100vh]  w-full object-cover lg:object-fill   "
            />
            <div
              style={{
                background: `linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.9))`,
              }}
              className="text-white absolute left-0 top-0 w-full h-full md:flex items-center justify-start "
            >
              <div className=" p-5">
                <h1 className="text-4xl font-normal">
                  Affordable <br /> Price For Car <br /> Servicing
                </h1>
                <p className="text-sm my-4">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="btns flex items-center justify-normal gap-4">
                  <PrimaryBtn value={"Discover More"} link={"/go"}></PrimaryBtn>
                  <PrimaryBtn
                    value={"Latest Project"}
                    link={"/go"}
                  ></PrimaryBtn>
                </div>
              </div>
            </div>
            <div className="slide-control absolute bottom-4 right-4 flex items-center justify-between gap-4 ">
              <button className="!absolut bottom-[.1rem] right-20 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white bg-white/30 hover:bg-[#ff3811] active:bg-white/30 grid place-items-center duration-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                  class="-ml-1 h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  ></path>
                </svg>
              </button>
              ;{/* // */}
              <button className="!absolut bottom-[.1rem] right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white bg-white/30 hover:bg-[#ff3811] active:bg-white/30 grid place-items-center duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                  class="ml-1 h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          {/* slider-6 */}
          <div className="relative">
            <img
              src={banner6}
              alt="image 1"
              className="h-[100vh]  w-full object-cover lg:object-fill   "
            />
            <div
              style={{
                background: `linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.9))`,
              }}
              className="text-white absolute left-0 top-0 w-full h-full md:flex items-center justify-start "
            >
              <div className=" p-5">
                <h1 className="text-4xl font-normal">
                  Affordable <br /> Price For Car <br /> Servicing
                </h1>
                <p className="text-sm my-4">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="btns flex items-center justify-normal gap-4">
                  <PrimaryBtn value={"Discover More"} link={"/go"}></PrimaryBtn>
                  <PrimaryBtn
                    value={"Latest Project"}
                    link={"/go"}
                  ></PrimaryBtn>
                </div>
              </div>
            </div>
            <div className="slide-control absolute bottom-4 right-4 flex items-center justify-between gap-4 ">
              <button className="!absolut bottom-[.1rem] right-20 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white bg-white/30 hover:bg-[#ff3811] active:bg-white/30 grid place-items-center duration-500 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                  class="-ml-1 h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  ></path>
                </svg>
              </button>
              ;{/* // */}
              <button className="!absolut bottom-[.1rem] right-4 -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white bg-white/30 hover:bg-[#ff3811] active:bg-white/30 grid place-items-center duration-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="3"
                  class="ml-1 h-7 w-7"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </Carousel>
      </div>
    );
};
export default Banner;