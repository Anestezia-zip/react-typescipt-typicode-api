import { Navigate } from "react-router-dom";
import { AppRoutes } from "../Routing/AppRoutes";

// Higher order component
export const PrivateRoute = ({Component}) => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    return authUser?.id ? <Component/> : <Navigate to={AppRoutes.MAIN}/>
}

export const PublicRoute = ({Component}) => {
    const authUser = JSON.parse(localStorage.getItem('authUser'));
    return authUser?.id 
        ? <Navigate to={AppRoutes.USERS}/>
        : <Component/> 
}