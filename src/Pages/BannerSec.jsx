import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/7.jpg';
import img2 from '../assets/cow.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/p.jpg';
import { useInView } from 'react-intersection-observer';

const BannerSec = () => {
    const [ref, inView] = useInView();
    const [triggerAnimation, setTriggerAnimation] = useState(false);

    useEffect(() => {
        if (inView) {
            setTriggerAnimation(true);
        }
    }, [inView]);

    useEffect(() => {
        if (triggerAnimation) {
            AOS.init();
        }
    }, [triggerAnimation]);

    return (
        <div 
            ref={ref}
            className="carousel h-[70vh] mt-4 mx-auto ml-3 mr-3 font-poppins relative"
        >

            <div id="slide1" className={`carousel-item relative w-full ${triggerAnimation ? 'aos-animate' : ''}`} data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="200">
                <img src={img1} className="w-full h-full object-cover object-center" alt="Slide 1" />
                <div className='absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <h2 className='font-bold text-6xl text-green-500 ' data-aos="fade-right" data-aos-duration="3000" data-aos-delay="500" >Welcome <br /> To  <br /> Pranti Agro Farm</h2>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className={`carousel-item relative w-full ${triggerAnimation ? 'aos-animate' : ''}`} data-aos="fade-right" data-aos-duration="2000"  data-aos-delay="500">
                <img src={img2} className="w-full h-full object-cover object-center" />
                <div className='absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <h2 className='font-extrabold text-6xl text-green-500 '>Welcome <br /> To  <br /> Pranti Agro Farm</h2>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className={`carousel-item relative w-full ${triggerAnimation ? 'aos-animate' : ''}`} data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="700">
                <img src={img3} className="w-full h-full object-cover object-center" />
                <div className='absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <h2 className='font-extrabold text-6xl text-green-500 '>Welcome <br /> To  <br /> Pranti Agro Farm</h2>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className={`carousel-item relative w-full ${triggerAnimation ? 'aos-animate' : ''}`} data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1000">
                <img src={img4} className="w-full h-full object-cover object-center" />
                <div className='absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <h2 className='font-extrabold text-6xl text-green-500 '>Welcome <br /> To  <br /> Pranti Agro Farm</h2>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default BannerSec;
