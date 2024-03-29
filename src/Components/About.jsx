import person from "./../assets/images/about_us/person.jpg";
import parts from "./../assets/images/about_us/parts.jpg";
import PrimaryBtn from "./PrimaryBtn";
import SectionHead from "./SectionHead";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  const noGetMoreInfoBtn = location.pathname.includes("about")
  return (
    <div className="lg:w-[85vw] mx-auto my-[5rem] px-2 ">
      <div className="about-section flex flex-col md:flex-row items-start justify-between gap-8">
        <div className="media flex-1 h-[20rem] xl:h-[25rem] 2xl:h-[30rem] relative group overflow-hidden ">
          <div className=" w-[90%]  h-[90%] ">
            <img
              src={person}
              alt=""
              className="w-full h-[100%] rounded-md group-hover:scale-110 duration-500"
            />
          </div>
          <div className="absolute right-0 bottom-0 w-[10rem] md:w-[14rem] ">
            <img
              src={parts}
              alt=""
              className="w-full rounded-md border-4 border-gray-300 group-hover:scale-125 duration-500  "
            />
          </div>
        </div>
        <div className="info flex-1">
          <SectionHead
            heading={"About Us"}
            subHeading={
              <>
                We are qualified <br /> & of experience <br /> in this field
              </>
            }
            details={
              "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
            }
          ></SectionHead>
          <p className="my-5 tracking-wide text-gray-600 text-sm mb-5 ">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          {noGetMoreInfoBtn ? (
            <PrimaryBtn value={"Here's all about us"} link={"/about"}></PrimaryBtn>
          ) : (
            <PrimaryBtn value={"Get More Info"} link={"/about"}></PrimaryBtn>
          )}
        </div>
      </div>
    </div>
  );
};
export default About;