import { Link, useLocation ,useNavigate} from "react-router-dom";

import Navbar from "../Shared/Navbar";
import { useContext } from "react";
import { AuthContext } from "../Routes/AuthProvider";




const Login = () => {

  const {signIn} = useContext(AuthContext);

  const location = useLocation()
  const Navigate = useNavigate()
    
const handleLogin = e =>{
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');

    console.log(email, password);

    signIn(email,password)
    .then(result =>{
        console.log(result.user);

       
        Navigate(location ?. state ? location.state : '/');
    })
    .catch(error =>{
        console.log(error);
    })
}


    return (
        <div>
           <Navbar></Navbar> 
       <div className="w-[350px] lg:w-[550px]  mx-auto bg-white mt-4 pb-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center">Login your account</h2>
       <form onSubmit={handleLogin} className="card-body ">
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
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <p>Dont’t Have An Account ? <Link to="/register" className="text-green-500">Registration </Link> </p>
      </form>
      
       </div>
        </div>
    );
};

export default Login;