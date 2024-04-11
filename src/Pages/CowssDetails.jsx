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
            
    }, []); // Add id to the dependency array to fetch data whenever it changes

    return (
        <div>
            <h2>{id}</h2>
            <p>{data?.description}</p>
        </div>
    );
};

export default CowssDetails;
