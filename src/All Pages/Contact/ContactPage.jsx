import Contact from "../../Components/Contact";
import CoreFeature from "../../Components/CoreFeature";
import PageShortBanner from "../../Components/PageShortBanner";
import ImgBg from "./../../assets/images/checkout/myBookings.png"
    
const ContactPage = () => {
    return (
        <div>
            <PageShortBanner BGImg={ImgBg} pageTitle={"Contact Us"} location={"Home > Contact"} ></PageShortBanner>
            <Contact></Contact>
            <CoreFeature></CoreFeature>
        </div>
    );
};

export default ContactPage;