import { Link, NavLink } from "react-router-dom";
import userr from '../assets/user.png';
import { useContext } from "react";
import { AuthContext } from "../Routes/AuthProvider";


const Navbar = () => {


    const { user, logOut } = useContext(AuthContext);

    const hadelLogOut = () =>{
        logOut()
        .then()
        .catch()
        
    }


    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Contact Us</NavLink></li>
        


    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    {navLinks}

                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src={userr} alt="" />
                    </div>
                </div>

                {
                    user ?
                        <button onClick={hadelLogOut} className="btn">LogOut</button>
                        :
                        <Link to='/login'>
                            <button className="btn">Login</button>
                        </Link>



                }

            </div>
        </div>
    );
};

export default Navbar;