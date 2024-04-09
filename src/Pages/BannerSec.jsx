import img1 from '../assets/7.jpg';
import img2 from '../assets/8.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';

const BannerSec = () => {
    return (
        <div className="carousel h-[70vh] mt-4  mx-auto ml-3 mr-3  font-poppins">
            
        <div id="slide1" className="carousel-item relative w-full">
          <img src={img1} className="w-full h-full object-cover object-center" />
          
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">

            <a href="#slide4" className="btn btn-circle">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
          
        </div> 
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img2} className="w-full h-full object-cover object-center" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img3} className="w-full h-full object-cover object-center"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img4} className="w-full h-full object-cover object-center"/>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default BannerSec;