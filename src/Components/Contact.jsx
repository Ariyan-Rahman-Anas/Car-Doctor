import timeTable from "./../assets//icons/timetable.svg"
import location from "./../assets//icons/location.svg"
import contact from "./../assets//icons/contact.svg"

const Contact = () => {
    return (
      <div className="px-2">
        <div className="text-white bg-black rounded-md px-4 py-8 md:px-6 md:py-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-5 my-[5rem] lg:w-[85vw] mx-auto ">
          <div className="flex items-center justify-between gap-3 ">
            <div>
              <img src={timeTable} alt="" />
            </div>
            <div>
              <h1 className="text-gray-400">We are open monday-friday</h1>
              <h2 className="text-lg font-semibold">7:00 am - 9:00 pm</h2>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 ">
            <div>
              <img src={contact} alt="" />
            </div>
            <div>
              <h1 className="text-gray-400">Have a question?</h1>
              <h2 className="text-lg font-semibold">+88 01610-195968</h2>
            </div>
          </div>
          <div className="flex items-center justify-between gap-3 ">
            <div>
              <img src={location} alt="" />
            </div>
            <div>
              <h1 className="text-gray-400">Need a repair? our address</h1>
              <h2 className="text-lg font-semibold">
                Khulshi-4225, Chattogram
              </h2>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Contact;