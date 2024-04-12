import { useContext } from "react";
import { CiLocationOn } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../Routes/AuthProvider";

const ContactUS = () => {
    const { createUser } = useContext(AuthContext);
    const handleContact = async (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');

        try {
            await createUser(email, name);
            toast.success('Registration successful');
        } catch (error) {
            console.error("Error registering user:", error);
            toast.error("Registration failed. Please try again.");
        }
    };
    return (
        <div className="mt-6 pl-20 pr-20 bg-slate-100">
            <h2 className="text-4xl font-bold pt-7 pb-4" data-aos="fade-right" data-aos-duration="3000" data-aos-delay="200" >Get In Touch</h2>
            <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
            <div className="contact-us-container md:flex gap-20 w-full max-w-screen-lg pt-5">
                <div className="contact-form md:w-[900px]">
                    <ToastContainer />
                    <form onSubmit={handleContact} >
                        <div className="md:grid grid-cols-2 gap-3 py-5">
                            <div className="form-control">
                                <input type="text" placeholder="Name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                        </div>
                        <div className="form-control py-5">
                            <input type="text" placeholder="subject" name="subject" className="input input-bordered" required />
                        </div>
                        <div className="form-control py-5">
    <textarea placeholder="Message" name="Message" className="textarea textarea-bordered h-40 resize-none" required></textarea>
</div>


                    </form>
                </div>
                <div className="pt-3 " data-aos="fade-up" data-aos-duration="3000" data-aos-delay="200" >
                    <p className="inline-flex items-center font-semibold text-3xl "><span className="text-green-500 text-4xl font-bold  pr-3 "><CiLocationOn /> </span>Location</p> <p className="pl-12">Khagrachari,Chattogram,Bangladesh</p> <br /> 
                    <p className="inline-flex items-center font-semibold text-3xl "><span className="text-green-500 text-4xl font-bold  pr-3 "><CiPhone /></span>Phone</p> <p className="pl-12">+12345678 <br /> +987654321</p> <br />
                    <p className="inline-flex items-center font-semibold text-3xl "><a href="shantonath6767@gmail.com" className="text-green-500 text-4xl font-bold  pr-3 "><CiMail /></a>Email</p> <p className="pl-12"></p>
                    
                    
                </div>
            </div>
        </div>
    );
};

export default ContactUS;
