import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import CowssDetails from "../Pages/CowssDetails";
import PrivateRoute from "./PrivateRoute";
import AboutUs from "../Pages/AboutUs";
import ContactUS from "../Pages/ContactUS";
import GallerySec from "../Pages/GallerySec";
import UpdateRoute from "../Pages/UpdateRoute";



const routes = createBrowserRouter([
    {
        path:'/',
        element:<Root></Root>,
        
        children: [
            {
                path: '/',
                element:<HomePage></HomePage>,
                loader:() =>fetch('/cow.json')
                
            },
            {
                path:'/cow/:id',
                element:<PrivateRoute><CowssDetails></CowssDetails></PrivateRoute>
            },
            
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Registration></Registration>
            },
            {
                path:'/about',
                element:<PrivateRoute><AboutUs></AboutUs></PrivateRoute>
            },
            {
                path:'/contact',
                element:<PrivateRoute><ContactUS></ContactUS></PrivateRoute>
            },
            {
                path:'/gallery',
                element:<PrivateRoute><GallerySec></GallerySec></PrivateRoute>
            },
            {
                path:'/profile',
                element:<PrivateRoute><UpdateRoute></UpdateRoute></PrivateRoute>
            }
        ]
    }
]);

export default routes;

