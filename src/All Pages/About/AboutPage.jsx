import About from "../../Components/About";
import Testimonial from "../../Components/Testimonial";

const AboutPage = () => {
  const aboutData = [
    {
      point: "Mission Statement",
      detail:
        "Car Doctor is dedicated to ensuring that every customer receives top-quality car servicing solutions that prioritize safety, reliability, and peace of mind on the road. Our mission is to exceed expectations by delivering exceptional service with integrity and professionalism.",
    },
    {
      point: "Company History",
      detail:
        "With a rich history spanning over 4 years, Car Doctor has established itself as a trusted name in the automotive industry. Our journey from a small repair shop to a renowned service center reflects our unwavering commitment to excellence and customer satisfaction.",
    },
    {
      point: "Services Offered",
      detail:
        "At Car Doctor, we offer a comprehensive suite of services designed to meet all your automotive needs. From routine maintenance to complex repairs, our team of skilled technicians ensures that every vehicle receives the highest level of care and attention to detail.",
    },
    {
      point: "Commitment to Quality",
      detail:
        "Quality is the cornerstone of everything we do at Car Doctor. Our technicians are highly trained and certified, equipped with the latest tools and technologies to deliver superior service. We take pride in our workmanship and strive to build lasting relationships with our customers based on trust and satisfaction.",
    },
    {
      point: "Community Involvement",
      detail:
        "Car Doctor is deeply committed to giving back to the community we serve. Through sponsorships, charity events, and educational initiatives, we aim to make a positive impact on the lives of others. We believe in building strong ties with our community and supporting causes that matter most.",
    },
    {
      point: "Contact Information",
      detail:
        "Getting in touch with Car Doctor is easy! Visit us at our convenient location, give us a call, or send us an email—we're always here to help. Follow us on social media to stay updated on the latest news, promotions, and helpful automotive tips from the Car Doctor team.",
    },
  ];

  return (
    <div>
      <About></About>

      <div className="w-full lg:w-[85vw] mx-auto mb-4 px-2 ">
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutData?.map((data, index) => (
            <div key={index} className="shadow-md p-4 rounded-md ">
              <h1 className="text-3xl font-light mb-2 ">{data.point}</h1>
              <p className="text-sm text-gray-500 ">{data.detail}</p>
            </div>
          ))}
        </div>
        <p>
          🔊 Ready to experience the Car Doctor difference? Schedule your next
          service appointment today and discover why we're the trusted choice
          for all your automotive needs. Contact us now to get started!
        </p>
      </div>

      <Testimonial></Testimonial>

    </div>
  );
};
export default AboutPage;