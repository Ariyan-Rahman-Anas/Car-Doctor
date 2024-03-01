const SectionHead = ({ heading, subHeading, details }) => {
  return (
    <div>
      <h1 className="text-[#ff3811] font-norma font-semibold ">{heading}</h1>
      <h2 className="text-3xl font-semibold">{subHeading}</h2>
      <p className="text-gray-600 tracking-wide text-sm mt-3">{details}</p>
    </div>
  );
};
export default SectionHead;
