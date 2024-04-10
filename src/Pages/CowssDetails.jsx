import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CowssDetails = () => {
const {id} = useParams();
const [data, setData] = useState({})
console.log(data)
useEffect(()=>{
    fetch('/cow.json')
    .then(res => res.json())
    .then(data =>{
        let result = data.filter(e => e.id === id)
        setData(result[0])
    });
},[]);
    return (
        <div>
            <h2>{data?.id}</h2>
        </div>
    );
};

export default CowssDetails;