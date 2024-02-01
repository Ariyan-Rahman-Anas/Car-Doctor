const PageShortBanner = ({BGImg, serviceTitle, pageTitle, location}) => {
    return (
      <div
        style={{
          backgroundImage: `linear-gradient(to left, rgba(0,0,0,0.2), rgba(0,0,0,0.8)), url(${BGImg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
        className="relative h-[50vh] lg:w-[85vw] mx-auto rounded-md my-6 "
      >
        <div className="absolute left-10 top-[10%] bottom-[25%]">
          <h1 className="text-gray-200 font-normal text-xl ">{pageTitle}</h1>
        </div>
        <div className="absolute left-10 top-[22%] bottom-[25%]">
          <h1 className="text-white font-normal text-5xl ">{serviceTitle}</h1>
        </div>
        <div className="location absolute bottom-0 left-[5%] right-[5%] md:left-[25%] md:right-[25%] bg-[#ff3811] text-white w-fit mx-auto px-10 pt-2 pb-1 rounded-t-md ">
          <h1>{location}</h1>
        </div>
      </div>
    );
};
export default PageShortBanner;