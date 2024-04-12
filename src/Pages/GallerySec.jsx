import cow21 from '../assets/cow11.jpg'
import cow22 from '../assets/cow12.jpg'
import cow23 from '../assets/cow14.jpg'
import cow24 from '../assets/cow15.jpg'
import cow25 from '../assets/cow16.jpg'
import cow26 from '../assets/cow18.jpg'
import cow27 from '../assets/cow19.jpg'
import cow28 from '../assets/cow20.jpg'
import cow29 from '../assets/cow21.jpg'
import cow30 from '../assets/cow22.jpg'
import cow31 from '../assets/acAS-1-1.jpg'


const GallerySec = () => {
    return (
        <div className='mt-10'>
            <h2 className='text-3xl pb-10 font-bold text-green-500 text-center' data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" >Our Gallery</h2>
            <div className='grid grid-cols-2'>
            <img data-aos="fade-up" data-aos-duration="3000" data-aos-delay="0" src={cow21} alt="" />
            <img className='pb-4' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="0" src={cow22} alt="" />
            <img className='pr-3 w-full' data-aos="zoom-in" data-aos-duration="3000" data-aos-delay="0" src={cow23} alt="" />
            <img className='w-full pl-2 pb-2' data-aos="flip-right" data-aos-duration="3000" data-aos-delay="50" src={cow25} alt="" />
            <img className='w-full pl-2 pb-2 ' data-aos="flip-right" data-aos-duration="3000" data-aos-delay="50" src={cow26} alt="" />
            <img className='w-full pl-2 pb-2 ' data-aos="flip-right" data-aos-duration="3000" data-aos-delay="50" src={cow31} alt="" />
            <img className='w-full pl-2 pb-2' data-aos="flip-right" data-aos-duration="3000" data-aos-delay="50" src={cow30} alt="" />
            <img className='w-full pl-2 pb-2' data-aos="flip-right" data-aos-duration="3000" data-aos-delay="50" src={cow27} alt="" />
            <img className='w-full pl-2 pb-2' data-aos="flip-right" data-aos-duration="3000" data-aos-delay="50" src={cow28} alt="" />
            <img className='w-full pl-2 pb-2' data-aos="flip-right" data-aos-duration="3000" data-aos-delay="50" src={cow29} alt="" />
            <img className='w-full pl-2 pb-2' data-aos="flip-right" data-aos-duration="3000" data-aos-delay="50" src={cow24} alt="" />
            
            </div>
        </div>
    );
};

export default GallerySec;