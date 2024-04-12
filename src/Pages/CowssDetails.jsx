import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CowssDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        fetch('/cow.json')
            .then(res => res.json())
            .then(data => {
                let result = data.filter(e => e.id == id);
                setData(result[0]);
            })
            
    }, []); 

    return (
        <div>
        <div className="card mt-4 bg-base-100 shadow-xl " data-aos="zoom-out" data-aos-duration="3000" data-aos-delay="500">
            <h2 className="card-title mx-auto py-10 text-3xl text-green-400 font-bold">{data ?.estate_title}</h2>
            <img className="h-[550px] rounded-lg" src={ data?.image} alt="Shoes" />
            <div className="card-body">
                <h2 className="text-3xl font-bold">{data?.segment_name}</h2>
                <p className="text-xl">{data?.description}</p>
                <p className="text-3xl font-bold text-green-400 pt-3" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="500" >Price <span>{data?.price}</span></p>
            </div>
        </div>
    </div>
    );
};

export default CowssDetails;
