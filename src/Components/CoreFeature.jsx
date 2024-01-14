import SectionHead from "./SectionHead";
import team from "./../assets/icons/team.svg"
import timing from "./../assets/icons/timing.svg"
import person from "./../assets/icons/person.svg"
import wrench from "./../assets/icons/Wrench.svg"
import check from "./../assets/icons/check.svg"
import delivery from "./../assets/icons/deliveryt.svg"
const CoreFeature = () => {
    return (
      <div className="my-[5rem] px-2 text-center ">
        <div className="md:w-3/4 lg:w-1/2 mx-auto ">
          <SectionHead
            heading={"Core Features"}
            subHeading={"Why Choose Us"}
            details={
              "the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "
            }
          ></SectionHead>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 place-items-center gap-6 lg:w-[85vw] mx-auto mt-4 ">
          <div className="border-[.09rem]  rounded-md h-[8rem] 2xl:h-[11rem] w-[8rem] 2xl:w-[12rem] hover:bg-gray-200 duration-500 group">
            <div className="p-5 pb-0">
              <img
                src={team}
                alt=""
                className="w-[4rem] h-[4rem] mx-auto group-hover:scale-110 duration-500 "
              />
            </div>
            <p className="m-2 font-semibold">Expert Team</p>
          </div>
          <div className="border-[.09rem]  rounded-md h-[8rem] 2xl:h-[11rem] w-[8rem] 2xl:w-[12rem] hover: bg-[#ff3811] duration-500 group">
            <div className="p-5 pb-0">
              <img
                src={timing}
                alt=""
                className="w-[4rem] h-[4rem] mx-auto group-hover:scale-110 duration-500 "
              />
            </div>
            <p className="m-2 text-white font-semibold">Expert Team</p>
          </div>
          <div className="border-[.09rem]  rounded-md h-[8rem] 2xl:h-[11rem] w-[8rem] 2xl:w-[12rem] hover:bg-gray-200 duration-500 group">
            <div className="p-5 pb-0">
              <img
                src={person}
                alt=""
                className="w-[4rem] h-[4rem] mx-auto group-hover:scale-110 duration-500 "
              />
            </div>
            <p className="m-2 font-semibold">Expert Team</p>
          </div>
          <div className="border-[.09rem]  rounded-md h-[8rem] 2xl:h-[11rem] w-[8rem] 2xl:w-[12rem] hover:bg-gray-200 duration-500 group">
            <div className="p-5 pb-0">
              <img
                src={wrench}
                alt=""
                className="w-[4rem] h-[4rem] mx-auto group-hover:scale-110 duration-500 "
              />
            </div>
            <p className="m-2 font-semibold">Expert Team</p>
          </div>
          <div className="border-[.09rem]  rounded-md h-[8rem] 2xl:h-[11rem] w-[8rem] 2xl:w-[12rem] hover:bg-gray-200 duration-500 group">
            <div className="p-5 pb-0">
              <img
                src={check}
                alt=""
                className="w-[4rem] h-[4rem] mx-auto group-hover:scale-110 duration-500 "
              />
            </div>
            <p className="m-2 font-semibold">Expert Team</p>
          </div>
          <div className="border-[.09rem]  rounded-md h-[8rem] 2xl:h-[11rem] w-[8rem] 2xl:w-[12rem] hover:bg-gray-200 duration-500 group">
            <div className="p-5 pb-0">
              <img
                src={delivery}
                alt=""
                className="w-[4rem] h-[4rem] mx-auto group-hover:scale-110 duration-500 "
              />
            </div>
            <p className="m-2 font-semibold">Expert Team</p>
          </div>
        </div>
      </div>
    );
};
export default CoreFeature;