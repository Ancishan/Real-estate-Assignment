import BannerSec from "./BannerSec";
import {useLoaderData} from "react-router-dom";
import CowDetails from "./CowDetails";
const HomePage = () => {
    const cows = useLoaderData();
    return (
        <div>
           <BannerSec></BannerSec>
           <div className=" md:grid grid-cols-2 gap-10 ">
           {
                cows.map(acow => <CowDetails key={acow.id} acow={acow}></CowDetails>)
            }
           </div>
        </div>
    );
};

export default HomePage;