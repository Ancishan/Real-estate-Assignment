import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../Routes/AuthProvider";
import { FaGooglePlusG } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { signIn, signInWithGoogle, SignInWithGithub } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);

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

  const handleGithubsignIn = () => {
    SignInWithGithub()
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
            <label className="label">
              <a href="#" className="label-text-alt link link-hover text-green-500">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-1">
            <button className="btn bg-green-500 full-width">Login</button>
          </div>
          <p>Dont’t Have An Account ? <Link to="/register" className="text-green-500 font-bold">Registration </Link> </p>
        </form>
        <div className="text-center">
          <p className="text-green-500 mx-auto text-lg">------ Or sign in with ------</p>
          <div className="flex justify-center mt-2">
            <div className="flex ml-5 items-center">
              <p className="text-lg inline-flex gap-2 items-center">
                <Link onClick={handleGoogleSignIn} className="text-green-500 text-3xl items-center">
                  <FaGooglePlusG />
                </Link>
              </p>
              <p className="inline-flex text-lg items-center pl-3">
                & <Link onClick={handleGithubsignIn} className="text-green-500 text-xl items-center pl-3">
                  <FiGithub />
                </Link>
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default Login;
