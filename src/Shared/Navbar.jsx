import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Routes/AuthProvider";
import userr from '../assets/user.png'; 
import navimg from '../assets/cow2.png';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log("User logged out successfully");
            })
            .catch(error => {
                console.error("Error logging out:", error);
            });
    }

    const navLinks = (
        <>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/about">About Us</NavLink></li>
            <li><NavLink to="/contact">Contact Us</NavLink></li>
            <li><NavLink to="/register">SignUp</NavLink></li>
            <li><NavLink to="/login">SignIn</NavLink></li>
        </>
    );

    return (
        <div className="navbar drop-shadow-xl text-green-500 font-bold mt-3 relative z-50" data-aos="fade-left" data-aos-duration="3000" data-aos-delay="500">
        <div className="navbar-start">
            <div className="dropdown ">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 absolute rounded-box w-40">
                    {navLinks}
                </ul>
            </div>
               <div>
                <img className="w-20" src={navimg} alt="" />
               <h2>pranti agro</h2>
               </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu absolute menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <>
                        <button onClick={handleLogOut} className="btn">Sign Out</button>
                        <div className="pl-5 pr-5 md:flex items-center">
                            <div className="pl-3">
                                <img className="w-12 h-12 bg-gray-200 rounded-full" src={user.photoURL || userr} alt="User Profile" />
                            </div>
                            <h2 className="text-[10px] md:text-lg ml-2">{user.displayName}</h2>
                        </div>
                    </>
                ) : (
                    <div className="pl-5 pt-2 pr-5 md:flex items-center">
                        <div className="pl-3">
                            <img className="w-12 h-12 bg-gray-200 text-green-500 rounded-full" src={userr} alt="Default User Profile" />
                        </div>
                        <h2 className="text-[10px] pl-3 md:text-lg ml-2">Profile</h2>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
