import {GoogleAuthProvider, createUserWithEmailAndPassword,GithubAuthProvider, onAuthStateChanged, signInWithPopup,signInWithEmailAndPassword, signOut,updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from '../firebase.config';


export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password, photoURL, name) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                updateUserProfile(user, { photoURL, displayName: name });
            });
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const signInWithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    } 

    const SignInWithGithub = () => {
        setLoading(true);
        return signInWithPopup(auth, githubProvider )
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (user, profile) => {
        return updateProfile(user, profile)
            .then(() => {
                // Update the user state after successfully updating the profile
                setUser({...user, ...profile});
            })
            .catch((error) => {
                console.error("Error updating profile: ", error);
            });
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, []);

    const AuthInfo = {
        user,
        loading,
        createUser,
        signInWithGoogle,
        SignInWithGithub,
        signIn,
        logOut
    }

    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
