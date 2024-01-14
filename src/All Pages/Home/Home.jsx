import About from "../../Components/About";
import Banner from "../../Components/Banner";
import Contact from "../../Components/Contact";
import CoreFeature from "../../Components/CoreFeature";
import Service from "../../Components/Service";
import Team from "../../Components/Team";
import Testimonial from "../../Components/Testimonial";
import PopularProducts from './../../Components/PopularProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <Contact></Contact>
            <PopularProducts></PopularProducts>
            <Team></Team>
            <CoreFeature></CoreFeature>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;

