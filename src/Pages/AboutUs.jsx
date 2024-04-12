import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import img1 from '../assets/acAS-1-1.jpg'

const AboutUs = () => {
    return (
        <div className="mt-12">
        <p className='text-4xl font-bold text-green-500 text-center pb-16' data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200" >ABOUT US+</p>
        <div className="md:grid grid-cols-2 gap-6">
            <div className="pt-20 pl-20">
                <h2 className="text-3xl font-semibold text-green-500" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="300" >We Have 37 Years Of Experience</h2>
                <p className="text-lg font-thin pt-8 " data-aos="fade-left" data-aos-duration="3000" data-aos-delay="400" >There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                <ul className='text-xl font-normal pt-5'>
                    <li className='inline flex items-center ' data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500"> <IoIosCheckmarkCircleOutline /> Own fleet of equine transport</li>
                    <li className='inline flex items-center' data-aos="fade-left" data-aos-duration="3000" data-aos-delay="550"> <IoIosCheckmarkCircleOutline /> Full time and stud season boarders</li>
                    <li className='inline flex items-center' data-aos="fade-left" data-aos-duration="3000" data-aos-delay="600"> <IoIosCheckmarkCircleOutline /> 4 purpose-built foaling units encompassing 24hr supervision</li> 
                    <li className='inline flex items-center' data-aos="fade-left" data-aos-duration="3000" data-aos-delay="650"> <IoIosCheckmarkCircleOutline /> On-site veterinary hospital with neo-natal intensive care unit</li>
                </ul>
            </div>
            <div className="pl-10 pb-10" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500">
                <img src={img1} alt="" />
            </div>
        </div>
    </div>
    );
};

export default AboutUs;