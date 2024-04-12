import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import img1 from '../assets/cow90.jpg';
import img2 from '../assets/cow91.jpg';
import img3 from '../assets/cow93.jpg';
import img4 from '../assets/cow94.jpg';
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
        <div ref={ref} className="carousel z-[1] pt-30  h-[70vh] mt-4 mx-auto ml-3 mr-3 font-poppins md:relative">
            <div id="slide1" className={` z-[1] carousel-item relative w-full ${triggerAnimation ? 'aos-animate' : ''}`} data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="200">
                <img src={img1} className="w-full h-full object-cover object-center" alt="Slide 1" />
                <div className='absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <h2 className='text-3xl font-bold md:font-bold md:text-6xl text-green-500 ' data-aos="fade-right" data-aos-duration="3000" data-aos-delay="500" >Welcome <br /> To  <br /> Pranti Agro Farm</h2>
                    <p className='text-green-400 text-xl pt-3' data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="700">where we nurture healthy cows and promote sustainable farming practices.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className={`z-[1] carousel-item relative w-full ${triggerAnimation ? 'aos-animate' : ''}`} data-aos="fade-right" data-aos-duration="2000"  data-aos-delay="500">
                <img src={img2} className="w-full h-full object-cover object-center" />
                <div className='absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2'>
                    <h2 className='font-extrabold text-6xl text-green-500 ' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">Welcome <br /> To  <br /> Pranti Agro Farm</h2>
                    <p className='text-green-400 pt-3 text-xl' data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="1000">where we nurture healthy cows and promote sustainable farming practices.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className={`z-[1] carousel-item relative w-full ${triggerAnimation ? 'aos-animate' : ''}`} data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="700">
                <img src={img3} className="w-full h-full object-cover object-center" />
                <div className='absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <h2 className='font-extrabold text-6xl text-green-500 ' data-aos="fade-right" data-aos-duration="3000" data-aos-delay="500">Welcome <br /> To  <br /> Pranti Agro Farm</h2>
                     <p className='text-green-400 pt-3 text-xl' data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="1000">where we nurture healthy cows and promote sustainable farming practices.</p>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className={` z-[1] carousel-item relative w-full ${triggerAnimation ? 'aos-animate' : ''}`} data-aos="zoom-in" data-aos-duration="2000" data-aos-delay="1000">
                <img src={img4} className="w-full h-full object-cover object-center" />
                <div className='absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="800">
                    <h2 className='font-extrabold text-6xl text-green-500 ' data-aos="fade-right" data-aos-duration="3000" data-aos-delay="500">Welcome <br /> To  <br /> Pranti Agro Farm</h2>
                     <p className='text-green-400 pt-3 text-xl' data-aos="fade-up-left" data-aos-duration="1000" data-aos-delay="1000">where we nurture healthy cows and promote sustainable farming practices.</p>
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
