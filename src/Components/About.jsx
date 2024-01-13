import person from "./../assets/images/about_us/person.jpg"
import parts from "./../assets/images/about_us/parts.jpg"
import PrimaryBtn from "./PrimaryBtn";

const About = () => {
    return (
      <div className="lg:w-[85vw] mx-auto mt-5 mb-10 flex flex-col md:flex-row items-start justify-between gap-8 px-2">
        <div className="media flex-1 h-[20rem] xl:h-[25rem] 2xl:h-[30rem] 2xl:border-4 border-red-500 relative ">
          <div className=" w-[90%]  h-[90%] ">
            <img src={person} alt="" className="w-full h-[100%] rounded-md " />
          </div>
          <div className="absolute right-0 bottom-0 w-[10rem] md:w-[14rem] ">
            <img src={parts} alt="" className="w-full rounded-md " />
          </div>
        </div>
        <div className="info flex-1">
          <h1 className="text-[#ff3811] font-norma font-semibold ">About Us</h1>
          <h2 className="my-4 text-3xl font-semibold">
            We are qualified <br />& of experience <br />
            in this field
          </h2>
          <p className="text-gray-600 tracking-wide text-sm mt-5">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
          </p>
          <p className="my-5 tracking-wide text-gray-600 text-sm mb-5 ">
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.{" "}
                </p>
                <PrimaryBtn value={"Get More Info"}></PrimaryBtn>
        </div>
      </div>
    );
};

export default About;