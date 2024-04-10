import { createBrowserRouter } from "react-router-dom";
import Root from "../Layouts/Root";
import HomePage from "../Pages/HomePage";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";

// import PrivateRoute from "./PrivateRoute";

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
            // {
            //     path:'/news/:id',
            //     element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>
            // },
            
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Registration></Registration>
            }
        ]
    }
]);

export default routes;

