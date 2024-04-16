import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div className="text-center">
        <h2 className="text-3xl font-bold">Oops! Something went wrong.</h2>
        <p className="text-lg mt-2">We apologize for the inconvenience. Please try again later.</p>
        <button className="btn btnbtn btn-active btn-secondary mt-4">
            <Link to="/">Go Back Home</Link>
        </button>
    </div>
    
    );
};

export default ErrorPage;