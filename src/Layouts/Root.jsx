import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Pages/Footer";


const Root = () => {
    return (
        <div className=" mx-auto ml-3 mr-3  font-poppins">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;