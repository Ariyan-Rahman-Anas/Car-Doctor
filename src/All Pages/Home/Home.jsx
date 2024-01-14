import About from "../../Components/About";
import Banner from "../../Components/Banner";
import Contact from "../../Components/Contact";
import Service from "../../Components/Service";
import Team from "../../Components/Team";
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
        </div>
    );
};

export default Home;

