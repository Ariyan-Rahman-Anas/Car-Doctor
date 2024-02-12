import { Carousel } from "@material-tailwind/react";
import PrimaryBtn from "./PrimaryBtn";
import banner1 from "./../assets/images/banner/1.png";
import banner2 from "./../assets/images/banner/2.png";
import banner3 from "./../assets/images/banner/3.png";
import banner4 from "./../assets/images/banner/4.png";
import banner5 from "./../assets/images/banner/5.png";
import banner6 from "./../assets/images/banner/6.png";

const Banner = () => {
  return (
    <Carousel
      className="rounded-t-2xl mt-5 w-full h-full mx-auto "
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
            background: `linear-gradient(to left, rgba(0,0,0,0.0), rgba(0,0,0,0.8))`,
          }}
          className="text-white absolute left-0 top-0 w-full h-full md:flex items-center justify-start "
        >
          <div className="  w-full p-5 md:p-20 md:text-start ">
            <h1 className="text-4xl md:text-7xl md:w-4/5 lg:w-3/5 md:leading-[4.8rem] fon-normal  ">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-sm my-4 sm:w-2/3 md:w-1/2">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="btns flex flex-col xsm:flex-row sm:flex-row xxs:items-center justify-normal gap-4">
              <PrimaryBtn value={"Discover More"} link={"/"}></PrimaryBtn>
              <PrimaryBtn value={"Latest Project"} link={"/"}></PrimaryBtn>
            </div>
          </div>
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
            background: `linear-gradient(to left, rgba(0,0,0,0.0), rgba(0,0,0,0.8))`,
          }}
          className="text-white absolute left-0 top-0 w-full h-full md:flex items-center justify-start "
        >
          <div className="  w-full p-5 md:p-20 md:text-start ">
            <h1 className="text-4xl md:text-7xl md:w-4/5 lg:w-3/5 md:leading-[4.8rem] fon-normal  ">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-sm my-4 sm:w-2/3 md:w-1/2">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="btns flex flex-col xsm:flex-row sm:flex-row xxs:items-center justify-normal gap-4">
              <PrimaryBtn value={"Discover More"} link={"/"}></PrimaryBtn>
              <PrimaryBtn value={"Latest Project"} link={"/"}></PrimaryBtn>
            </div>
          </div>
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
            background: `linear-gradient(to left, rgba(0,0,0,0.8), rgba(0,0,0,0.1))`,
          }}
          className="text-white absolute  right-0 top-0 w-full h-full md:flex items-center justify-center "
        >
          <div className="w-full p-5 md:p-20 flex flex-col items-end text-right">
            <h1 className="text-4xl md:text-7xl md:w-4/5 lg:w-3/5 md:leading-[4.8rem] fon-normal  ">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-sm my-4 sm:w-2/3 md:w-1/2">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="btns flex flex-col xsm:flex-row sm:flex-row xxs:items-center justify-normal gap-4">
              <PrimaryBtn value={"Discover More"} link={"/"}></PrimaryBtn>
              <PrimaryBtn value={"Latest Project"} link={"/"}></PrimaryBtn>
            </div>
          </div>
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
            background: `linear-gradient(to top, rgba(0,0,0,0.99), rgba(0,0,0,0.0))`,
          }}
          className="text-white absolute  right-0 top-0 w-full h-full flex items-end justify-center "
        >
          <div className="w-full p-5 md:p-20 flex flex-col items-start justify-end">
            <h1 className="text-4xl md:text-7xl md:w-4/5 lg:w-3/5 md:leading-[4.8rem] fon-normal  ">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-sm my-4 sm:w-2/3 md:w-1/2">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="btns flex flex-col xsm:flex-row sm:flex-row xxs:items-center justify-normal gap-4">
              <PrimaryBtn value={"Discover More"} link={"/"}></PrimaryBtn>
              <PrimaryBtn value={"Latest Project"} link={"/"}></PrimaryBtn>
            </div>
          </div>
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
          <div className="  w-full p-5 md:p-20 md:text-start ">
            <h1 className="text-4xl md:text-7xl md:w-4/5 lg:w-3/5 md:leading-[4.8rem] fon-normal  ">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-sm my-4 sm:w-2/3 md:w-1/2">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="btns flex flex-col xsm:flex-row sm:flex-row xxs:items-center justify-normal gap-4">
              <PrimaryBtn value={"Discover More"} link={"/"}></PrimaryBtn>
              <PrimaryBtn value={"Latest Project"} link={"/"}></PrimaryBtn>
            </div>
          </div>
        </div>
      </div>

      {/* slider-6 */}
      <div className="relative">
        <img
          src={banner6}
          alt="image 1"
          className="h-[100vh] w-full object-cover lg:object-fill"
        />
        <div
          style={{
            background: `linear-gradient(to left, rgba(0,0,0,0.8), rgba(0,0,0,0.1))`,
          }}
          className="text-white absolute left-0 right-0 top-0 w-full h-full md:flex items-center justify-center "
        >
          <div className="w-full p-5 md:p-20 flex flex-col items-end text-right">
            <h1 className="text-4xl md:text-7xl md:w-4/5 lg:w-3/5 md:leading-[4.8rem] fon-normal  ">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-sm my-4 sm:w-2/3 md:w-1/2">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="btns flex flex-col xsm:flex-row sm:flex-row xxs:items-center justify-normal gap-4">
              <PrimaryBtn value={"Discover More"} link={"/"}></PrimaryBtn>
              <PrimaryBtn value={"Latest Project"} link={"/"}></PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
export default Banner;