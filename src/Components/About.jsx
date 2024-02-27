import person from "./../assets/images/about_us/person.jpg";
import parts from "./../assets/images/about_us/parts.jpg";
import PrimaryBtn from "./PrimaryBtn";
import SectionHead from "./SectionHead";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const About = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="lg:w-[85vw] mx-auto my-[5rem] px-2 ">
      <div className="about-section flex flex-col-reverse md:flex-row items-start justify-between gap-8">
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
          <PrimaryBtn
            value={"Get More Info"}
            link={"https://www.linkedin.com/in/ariyanrahmananas/"}
          ></PrimaryBtn>
        </div>
      </div>

      <div className="review-section mt-16 text-center ">
        <SectionHead
          heading={"Review"}
          subHeading={"We would love to hear from you"}
        ></SectionHead>
        <div className=" border-2 bg-gray-300 rounded-lg p-5 md:px-10 md:py-8  ">
          <div className="form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3 ">
              <input
                type="text"
                placeholder="Your name"
                defaultValue={user?.displayName && user.displayName}
                required
                className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
              />
              <input
                type="text"
                placeholder="Your email"
                defaultValue={user?.email && user.email}
                required
                className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
              />
              <input
                type="url"
                placeholder="Your picture URL"
                className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
                defaultValue={user?.photoURL && user.photoURL}
              />
              <input
                type="text"
                placeholder="Your profession"
                className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
              />
              <input
                type="date"
                placeholder="Current date"
                className="p-2 rounded-md focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
              />
              <input
                type="number"
                placeholder="Rate us from 1 to 5"
                className="p-2 rounded-md  focus:placeholder:text-white focus:bg-[#ff3811] focus:text-white focus:outline-none  "
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="5"
              placeholder="Write your words about us..."
              className="w-full p-2 rounded-md focus:placeholder:text-white  focus:bg-[#ff3811] focus:text-white focus:outline-none  "
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
