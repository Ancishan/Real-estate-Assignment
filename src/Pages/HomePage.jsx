import BannerSec from "./BannerSec";
import {useLoaderData} from "react-router-dom";
import CowDetails from "./CowDetails";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const HomePage = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const cows = useLoaderData();
    return (
        <div>
            <div data-aos="fade-left">
                <h2>this is banner section</h2>
            </div>
           <BannerSec></BannerSec>
           <div className=" md:grid grid-cols-2 gap-10 ">
           {
                cows.map(acow => <CowDetails key={acow.id} acow={acow}></CowDetails>)
            }
           </div>
        </div>
    );
};

export default HomePage;