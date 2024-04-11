import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Routes/AuthProvider";
import { FaGooglePlusG } from "react-icons/fa";

const Login = () => {
    const { signIn,signInWithGoogle } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        signIn(email, password)
            .then(() => {
                console.log("User logged in successfully");
                navigate(location?.state || '/');
            })
            .catch(error => {
                console.error("Error logging in:", error);
            });
    }
  const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.log(error)
            })
    }



    return (
        
            <div>
           
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
         <p>sign in with <Link onClick={handleGoogleSignIn} className="text-green-500"><FaGooglePlusG /></Link></p>
           </div>
            </div>
        
    );
};

export default Login;
