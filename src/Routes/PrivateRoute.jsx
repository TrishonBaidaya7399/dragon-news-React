import PropTypes from 'prop-types';

import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation();
    if(loading){
        return (
            <div className=' flex items-center mt-40%'>
                <span className="loading loading-spinner loading-lg text-error"></span>
            </div>
        )
    }
    if(user){
        return children
    }
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default PrivateRoute;

PrivateRoute.propTypes = {
children: PropTypes.node,    
};

