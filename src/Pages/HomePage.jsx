import BannerSec from "./BannerSec";
import {Link, useLoaderData} from "react-router-dom";
import CowDetails from "./CowDetails";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import AboutUs from "./AboutUs";
const HomePage = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const cows = useLoaderData();
    return (
        <div>
            <div data-aos="fade-left">
                
            </div>
           <BannerSec></BannerSec>
           <div className=" md:grid grid-cols-2 gap-10 ">
           {
                cows.map(acow => <CowDetails key={acow.id} acow={acow}></CowDetails>)
            }
           </div>
           <AboutUs></AboutUs>
          <div className="text-center mt-5">
             <button className="btn btn-active btn-secondary bg-green-500 hover:bg-green-600"><Link to='/about'>More About</Link></button>
          </div>
        </div>
    );
};

export default HomePage;