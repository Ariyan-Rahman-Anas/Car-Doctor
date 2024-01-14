import { useEffect, useState } from "react";
import SectionHead from "./SectionHead";
import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import PrimaryBtn from './PrimaryBtn';

const Service = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("/carServices.json")
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[])
    return (
      <div className="text-center my-[5rem] px-2 ">
        <div className="heading lg:w-2/3 mx-auto ">
          <SectionHead
            heading={"Service"}
            subHeading={"Our Service Area"}
            details={
              "The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable, words which don't look even slightly believable."
            }
          ></SectionHead>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4 mb-10 ">
                {
                    services.slice(0,6).map(service=><ServiceCard key={service.id} service={service}></ServiceCard>)
}
        </div>
        <PrimaryBtn value={"See All Services"}></PrimaryBtn>
      </div>
    );
};

export default Service;