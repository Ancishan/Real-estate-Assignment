import { Link } from 'react-router-dom';
import img1 from '../assets/acAS-1-1.jpg'

const AboutUs = () => {
    return (
        <div className="md:grid grid-cols-2">
            <div>
                <p>ABOUT US+</p>
                <h2>We Have 37 Years Of Experience</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
                <ul>
                    <li>Own fleet of equine transport</li>
                    <li>Full time and stud season boarders</li>
                    <li>4 purpose-built foaling units encompassing 24hr supervision</li>
                    <li>On-site veterinary hospital with neo-natal intensive care unit</li>
                </ul>
            </div>
            <div>
                <img src={img1} alt="" />
            </div>      
        </div>
    );
};

export default AboutUs;