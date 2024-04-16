// UpdateRoute.js

import { useContext, useState } from "react";
import { AuthContext } from "../Routes/AuthProvider";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const UpdateRoute = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName || "");
    const [photoURL, setPhotoURL] = useState(user.photoURL || "");
    const [showPass, setShowPass] = useState(false);

    const handleUpdateProfile = async (e) => {
        e.preventDefault();
        
        try {
            await updateUserProfile(user, { displayName: name, photoURL });
            toast.success('Profile updated successfully');
        } catch (error) {
            console.error("Error updating profile:", error);
            toast.error('Failed to update profile. Please try again.');
        }
    };

    return (
        <div className="bg-slate-200">
            <div className=" w-full md:w-[550px] mx-auto bg-white mt-4 mb-6 rounded-lg">
                <h2 className="text-3xl font-bold text-center pt-4 ">Update your profile</h2>
                <form onSubmit={handleUpdateProfile} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="photo URL" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} className="input input-bordered" required />
                    </div>
                    <button type="submit" className="btn bg-green-500 w-full">Update Profile</button>
                </form>
            </div>
        </div>
    );
};

export default UpdateRoute;
