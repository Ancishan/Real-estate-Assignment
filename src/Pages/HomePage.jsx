import BannerSec from "./BannerSec";
import { Link, useLoaderData } from "react-router-dom";
import CowDetails from "./CowDetails";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import img1 from '../assets/acAS-1-1.jpg'
import cow21 from '../assets/cow11.jpg'
import cow22 from '../assets/cow12.jpg'
import cow23 from '../assets/cow14.jpg'
import cow24 from '../assets/cow15.jpg'
import Customer from "./Customer";
import ContactUS from "./ContactUS";
const HomePage = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    const cows = useLoaderData();
    return (
        <div className="ml-3 mr-3">
            
            <BannerSec></BannerSec>
            <div data-aos="fade-left"  data-aos-duration="3000" data-aos-delay="550">
            <h2 className='text-5xl mt-8 mb-3 text-green-500 font-bold text-center'> Our Collection</h2>
            </div>
            <div className=" md:grid grid-cols-2 gap-10 ">
                {
                    cows.map(acow => <CowDetails key={acow.id} acow={acow}></CowDetails>)
                }
            </div>
            <div className="mt-12">
                <p className='text-4xl font-bold text-green-500 text-center pb-16' data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200" >ABOUT US+</p>
                <div className="md:grid grid-cols-2 gap-6">
                    <div className=" pt-0 pl-4 md:pt-20pl-20">
                        <h2 className="text-3xl font-semibold text-green-500" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="300" >We Have 8 Years Of Experience</h2>
                        <p className="text-lg font-thin pt-8 " data-aos="fade-left" data-aos-duration="3000" data-aos-delay="400" >cow farm is a sprawling agricultural enterprise where cows are raised and nurtured in a carefully managed environment. These farms typically consist of vast pastures where the cows graze on nutrient-rich grass, supplemented by high-quality feed in some cases. The facilities on a cow farm may include barns for shelter, milking parlors equipped with modern machinery for efficient milk extraction, and veterinary clinics to ensure the health and well-being of the animals..</p>
                    </div>
                    <div className=" pl-3 md:pl-10 pb-10" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500">
                        <img src={img1} alt="" />
                    </div>
                </div>
                <div className="text-center mt-5" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="200">
                    <button className="btn btn-active btn-secondary bg-green-500 hover:bg-green-600"><Link to='/about'>More About Us</Link></button>
                </div>
            </div>
            <div className='mt-10'>
                <h2 className='text-3xl pb-10 font-bold text-green-500 text-center' data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" >Our Gallery</h2>
                <div className='grid grid-cols-2'>
                    <img data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" src={cow21} alt="" />
                    <img className='pb-4' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="0" src={cow22} alt="" />
                    <img className='pr-3' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="0" src={cow23} alt="" />
                    <img data-aos="flip-right" data-aos-duration="3000" data-aos-delay="50" src={cow24} alt="" />
                </div>
                <div className="flex justify-center mt-5">
                    <button className="btn bg-green-500  pl-8 pr-8">
                        <Link to='/gallery'>More+</Link>
                    </button>
                </div>

            </div>
            <Customer></Customer>
            <div>
                <ContactUS></ContactUS>
            </div>
        </div>
    );
};

export default HomePage;