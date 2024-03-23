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
                activeIndex === i ? "w-8 bg-[#ff3811]" : "w-4 bg-white "
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
            <h1 className="text-4xl md:text-6xl md:w-4/5 lg:w-3/5 md:leading-[4.8rem] ">
              Affordable Price For Car Servicing
            </h1>
            <p className="mt-12 mb-5 sm:w-2/3 md:w-1/2">
              Explore budget-friendly options for maintaining your vehicle
              without compromising on quality or reliability.
            </p>
            <div className=" flex flex-col xsm:flex-row sm:flex-row xxs:items-center justify-normal gap-4">
              <PrimaryBtn value={"Discover More"} link={"/blogs"}></PrimaryBtn>
              <PrimaryBtn
                value={"Latest Project"}
                link={"/allServices"}
              ></PrimaryBtn>{" "}
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
            <h1 className="text-4xl md:text-6xl md:w-4/5 lg:w-3/5 md:leading-[4.8rem]">
              DIY Car Care: Easy Fixes{" "}
            </h1>
            <p className="mt-12 mb-5 sm:w-2/3 md:w-1/2">
              Learn cost-effective methods for maintaining your vehicle,
              empowering you to handle minor issues on your own.
            </p>
            <div className=" flex flex-col xsm:flex-row sm:flex-row xxs:items-center justify-normal gap-4">
              <PrimaryBtn value={"Discover More"} link={"/blogs"}></PrimaryBtn>
              <PrimaryBtn
                value={"Latest Project"}
                link={"/allServices"}
              ></PrimaryBtn>{" "}
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
            <h1 className="text-4xl md:text-6xl md:w-4/5 lg:w-3/5 md:leading-[4.8rem] ">
              Road Trip Safety: Essential Tips
            </h1>
            <p className="mt-12 mb-5 sm:w-2/3 md:w-1/2">
              Equip yourself with crucial safety measures to ensure a worry-free
              journey, whether you're driving cross-country or across town.
            </p>
            <div className=" flex flex-col xsm:flex-row sm:flex-row xxs:items-center justify-normal gap-4">
              <PrimaryBtn value={"Discover More"} link={"/blogs"}></PrimaryBtn>
              <PrimaryBtn
                value={"Latest Project"}
                link={"/allServices"}
              ></PrimaryBtn>{" "}
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
            <h1 className="text-4xl md:text-6xl md:w-4/5 lg:w-3/5 md:leading-[4.8rem] ">
              Electric Cars: Future of Driving{" "}
            </h1>
            <p className="mt-12 mb-5 sm:w-2/3 md:w-1/2">
              Dive into the innovative world of electric vehicles and discover
              how they're reshaping the future of transportation.
            </p>
            <div className=" flex flex-col xsm:flex-row sm:flex-row xxs:items-center justify-normal gap-4">
              <PrimaryBtn value={"Discover More"} link={"/blogs"}></PrimaryBtn>
              <PrimaryBtn
                value={"Latest Project"}
                link={"/allServices"}
              ></PrimaryBtn>{" "}
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
            <h1 className="text-4xl md:text-6xl md:w-4/5 lg:w-3/5 md:leading-[4.8rem] ">
              Troubleshooting: Quick Car Fixes{" "}
            </h1>
            <p className="mt-12 mb-5 sm:w-2/3 md:w-1/2">
              Arm yourself with practical solutions to common automotive issues,
              enabling you to address problems swiftly and efficiently.
            </p>
            <div className=" flex flex-col xsm:flex-row sm:flex-row xxs:items-center justify-normal gap-4">
              <PrimaryBtn value={"Discover More"} link={"/blogs"}></PrimaryBtn>
              <PrimaryBtn
                value={"Latest Project"}
                link={"/allServices"}
              ></PrimaryBtn>{" "}
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
            <h1 className="text-4xl md:text-6xl md:w-4/5 lg:w-3/5 md:leading-[4.8rem] ">
              Engine Health: Oil Change Benefits{" "}
            </h1>
            <p className="mt-12 mb-5 sm:w-2/3 md:w-1/2">
              Gain insights into the vital role of regular oil changes in
              maintaining optimal engine performance and longevity.
            </p>
            <div className=" flex flex-col xsm:flex-row sm:flex-row xxs:items-center justify-normal gap-4">
              <PrimaryBtn value={"Discover More"} link={"/blogs"}></PrimaryBtn>
              <PrimaryBtn
                value={"Latest Project"}
                link={"/allServices"}
              ></PrimaryBtn>{" "}
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};
export default Banner;
