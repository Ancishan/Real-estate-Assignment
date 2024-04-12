import BannerSec from "./BannerSec";
import { Link, useLoaderData } from "react-router-dom";
import CowDetails from "./CowDetails";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import img1 from '../assets/acAS-1-1.jpg'
const HomePage = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const cows = useLoaderData();
    return (
        <div className="ml-3 mr-3">
            <div data-aos="fade-left">

            </div>
            <BannerSec></BannerSec>
            <div className=" md:grid grid-cols-2 gap-10 ">
                {
                    cows.map(acow => <CowDetails key={acow.id} acow={acow}></CowDetails>)
                }
            </div>
            <div className="mt-12">
                <p className='text-4xl font-bold text-green-500 text-center pb-16' data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200" >ABOUT US+</p>
                <div className="md:grid grid-cols-2 gap-6">
                    <div className="pt-20 pl-20">
                        <h2 className="text-3xl font-semibold text-green-500" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="300" >We Have 37 Years Of Experience</h2>
                        <p className="text-lg font-thin pt-8 " data-aos="fade-left" data-aos-duration="3000" data-aos-delay="400" >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                    </div>
                    <div className="pl-10 pb-10" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="text-center mt-5" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500">
                    <button className="btn btn-active btn-secondary bg-green-500 hover:bg-green-600"><Link to='/about'>More About Us</Link></button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;