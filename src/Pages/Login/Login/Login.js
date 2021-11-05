import React from "react";
import useAuth from "../../../hook/useAuth";
import initializeAuthentication from "../Firebase/Firebase.init";
import {useLocation, useHistory } from 'react-router-dom';

initializeAuthentication();
const Login = () => {
    const { signInUsingGoogle, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    console.log('came forrom', location.state?.from);
    const redirect_uri = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="mt-5 border-primary p-5 w-50 mx-auto border rounded">
            <h3 className="text-info">Please SignIn</h3>
            <hr className="text-primary p-1"/>
            <button onClick={handleGoogleLogin} className="btn mt-3 border-info"><i className="fab fa-google text-primary fs-3"></i> Google Sign In</button>

            <div className="row mb-3 text-danger">
                {error}
            </div>
        </div>
    );
};

export default Login;