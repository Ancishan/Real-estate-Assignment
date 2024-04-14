import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Routes/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
    const [showPass, setShowPass] = useState(false);
    const { createUser } = useContext(AuthContext);

    const handleRegister = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photo = form.get('photoURL');
        const email = form.get('email');
        const password = form.get('password');
        const confirmPassword = form.get('confirmPassword');

        if (password !== confirmPassword) {
            toast.error("Passwords didn't match");
            return;
        }
        if (password.length < 6) {
            toast.error("Password must be at least six characters");
            return;
        }
        if (!/[a-zA-Z]/.test(password)) {
            toast.error("Your password should have at least one character");
            return;
        }

        try {
            await createUser(email, password, photo, name);
            toast.success('Registration successful');
        } catch (error) {
            console.error("Error registering user:", error);
            toast.error("Registration failed. Please try again.");
        }
    };

    return (
        <div>
            <ToastContainer />
            <div className="bg-slate-200">
                <div className=" w-full md:w-[550px] mx-auto bg-white mt-4 mb-6 rounded-lg">
                    <h2 className="text-3xl font-bold text-center pt-4 ">Register your account</h2>
                    <form onSubmit={handleRegister} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" placeholder="photo URL" name="photoURL" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <div className="relative w-full">
                                <input
                                    type={showPass ? "text" : "password"}
                                    placeholder="password"
                                    name="password"
                                    className="input input-bordered w-full"
                                    required />
                                <span className="absolute top-3 right-1 pr-1" onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <div className="relative w-full">
                                <input
                                    type={showPass ? "text" : "password"}
                                    placeholder="confirm password"
                                    name="confirmPassword"
                                    className="input input-bordered w-full"
                                    required />
                                <span className="absolute top-3 right-1 pr-1" onClick={() => setShowPass(!showPass)}>
                                    {
                                        showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                    }
                                </span>
                            </div>

                        </div>
                        <div className="form-control mt-3">
                            <button type="submit" className="btn bg-green-500 w-full">Registration</button>
                        </div>
                        <p>Already Have An Account ? <Link to="/login" className="text-green-500 font-bold">Login </Link> </p>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;


