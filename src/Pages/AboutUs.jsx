import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import img1 from '../assets/acAS-1-1.jpg'

const AboutUs = () => {
    return (
        <div className="mt-12">
            <p className='text-4xl font-bold text-green-500 text-center pb-6 md:pb-16' data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200" >ABOUT US+</p>
            <div className="md:grid grid-cols-2 gap-6">
                <div className=" pl-5 pt-5 md:pl-20 md:pt-20">
                    <h2 className="text-3xl font-semibold text-green-500" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="300" >We Have 8 Years Of Experience</h2>
                    <p className="text-lg font-thin pt-8 " data-aos="fade-left" data-aos-duration="3000" data-aos-delay="400" >A cow farm is a sprawling agricultural enterprise where cows are raised and nurtured in a carefully managed environment. These farms typically consist of vast pastures where the cows graze on nutrient-rich grass, supplemented by high-quality feed in some cases. The facilities on a cow farm may include barns for shelter, milking parlors equipped with modern machinery for efficient milk extraction, and veterinary clinics to ensure the health and well-being of the animals.

                        Cow farms are meticulously run operations, with experienced farmers and ranchers overseeing every aspect of the cows' lives, from breeding and birthing to feeding and healthcare. Depending on the farm's focus, some may specialize in dairy production, where cows are primarily raised for their milk, while others may focus on beef production, raising cows for their meat.</p>

                    <ul className='text-xl font-normal pt-5'>
                        <li className='inline flex items-center ' data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500"> <IoIosCheckmarkCircleOutline /> Own fleet of equine transport</li>
                        <li className='inline flex items-center' data-aos="fade-left" data-aos-duration="3000" data-aos-delay="550"> <IoIosCheckmarkCircleOutline /> Full time and stud season boarders</li>
                        <li className='inline flex items-center' data-aos="fade-left" data-aos-duration="3000" data-aos-delay="600"> <IoIosCheckmarkCircleOutline /> 4 purpose-built units 24hr supervision</li>
                        <li className='inline flex items-center' data-aos="fade-left" data-aos-duration="3000" data-aos-delay="650"> <IoIosCheckmarkCircleOutline /> On-site neo-natal intensive care unit</li>
                    </ul>
                </div>
                <div className=" pl-4  md:pl-10 pb-10" data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="500">
                    <img src={img1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;