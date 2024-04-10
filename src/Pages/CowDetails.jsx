// import { Link } from "react-router-dom";

import { Link } from "react-router-dom";


const CowDetails = ({acow}) => {
      const { estate_title,image,segment_name,id ,description} = acow;

    return (
        <div>
            
            <div className="card mt-4  bg-base-100 shadow-xl">
            <h2 className="card-title">{estate_title}</h2>
                <img className="h-96 rounded-lg" src={image}alt="Shoes" />
                <div className="card-body">
                    <h2 className="text=2xl font-bold">{segment_name}</h2>
                    
                    {
                        description.length > 200  
                        ? <p>{description.slice(0,200)} 
                         <Link to={`/cow/${id}`} className="text-green-600 font-bold"> Read More... & view details</Link></p>
                         : <p>{description}</p>
                        
                    }

                   
                </div>
            </div>
            
        </div>
    );
};

export default CowDetails;