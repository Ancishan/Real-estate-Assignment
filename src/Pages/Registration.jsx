import { Link } from "react-router-dom";

import { useContext, useState } from "react";
import { AuthContext } from "../Routes/AuthProvider";
import Navbar from "../Shared/Navbar";


const Registration = () => {
    const[error, setError] = useState("");


    const {createUser} = useContext(AuthContext);

    const handleRegister = e =>{
        e.preventDefault();
        
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const photo = form.get('photo')
        const email = form.get('email');
        const password = form.get('password')
        const ConfirmPassword = form.get('confirmPassword')

        if(password !== ConfirmPassword){
            setError ("password didn't match")
            alert(error)
            return ;
        }
        if(password.length < 6){
            setError("password must be six character")
            return;
        }

        createUser(email,password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })





        setError('')
     
        console.log(name,photo,email,password,ConfirmPassword)
        
    }


    return (
        <div className="bg-slate-200 " >
                    <Navbar></Navbar>
                      <div className="w-[550px]  mx-auto bg-white mt-4 mb-6 rounded-lg">
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
                                <input type="text" placeholder="photo URL" name="photo" className="input input-bordered" required />
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
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type="password" placeholder="Confirm password" name="confirmPassword" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control mt-3">
                                <button type="submit" className="btn btn-primary">Registration</button>
                            </div>
                            <p>Already Have An Account ? <Link to="/login" className="text-blue-500">Login </Link> </p>
                            {
                            error && ('error')
                        }
                        </form>
                       
                    </div>
                      </div>
            
    );
};

export default Registration;