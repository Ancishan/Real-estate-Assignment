import man1 from '../assets/man.jpg'
import man2 from '../assets/man1.jpg';
import man3 from '../assets/man3.jpg';
import man4 from '../assets/man4.jpg';
import Marquee from "react-fast-marquee";
const Customer = () => {
    return (
        <div className=' mt-16 mb-16'>
            <h2 className='text-5xl text-center font-bold text-green-500 pb-10' data-aos="fade-right" data-aos-duration="3000" >Our FeedBack</h2>
            <Marquee pauseOnHover={true} speed={100}>
                <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <img src={man1} alt="" className='w-20 h-20 mt-2 rounded-full mx-auto'/>
                    <div className="card-body">
                    <h2 className='card-title text-2xl text-green-400 font-semibold mx-auto'>mr.JOn</h2>
                    <p className='text-lg '>I recently visited Happy Hooves Farm with my family, and I must say, it was an absolutely delightful experience from start to finish. From the moment we arrived, we were greeted warmly by the staff</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <img src={man2} alt="" className='w-30 h-20 mt-2 rounded-full mx-auto'/>
                    <div className="card-body">
                    <h2 className='card-title text-2xl text-green-400 font-semibold mx-auto'>Mr.DOn</h2>
                    <p className='text-lg '>I recently visited Happy Hooves Farm with my family, and I must say, it was an absolutely delightful experience from start to finish. From the moment we arrived, we were greeted warmly by the staff</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <img src={man3} alt="" className='w-20 h-20 mt-2 rounded-full mx-auto'/>
                    <div className="card-body">
                    <h2 className='card-title text-2xl text-green-400 font-semibold mx-auto'>mr.BOn</h2>
                    <p className='text-lg '>I recently visited Happy Hooves Farm with my family, and I must say, it was an absolutely delightful experience from start to finish. From the moment we arrived, we were greeted warmly by the staff</p>
                    </div>
                </div>
                <div className="card card-compact w-96 bg-base-100 shadow-xl ">
                <img src={man4} alt="" className='w-20 h-20 mt-2 rounded-full mx-auto'/>
                    <div className="card-body">
                    <h2 className='card-title text-2xl text-green-400 font-semibold mx-auto'>mr.KOn</h2>
                    <p className='text-lg '>I recently visited Happy Hooves Farm with my family, and I must say, it was an absolutely delightful experience from start to finish. From the moment we arrived, we were greeted warmly by the staff</p>
                    </div>
                </div>
            </Marquee>
        </div>
    );
};

export default Customer;