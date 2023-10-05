// import PropTypes from 'prop-types';
import "./Login.css"
import Navbar from "../Shared/Navbar/Navbar";
import { NavLink } from "react-router-dom";

const Login = () => {
    return (
        <div className="bg-gray-100 w-screen lg:ml-[-160px] h-full lg:pb-[70px] px-[100px]">
            <Navbar></Navbar>
            <div className="flex flex-col items-center w-[60%] bg-white mx-auto mb-[70px] p-12 justify-center rounded-lg">
                <h1 className="pb-12 border-b-2 border-gray-200 w-full text-center mb-12 text-[35px] font-semibold text-gray-700">Login your account</h1>
                <div className=" w-[90%]">
                    <p className=" text-[20px] font-semibold text-gray-700 mb-4">Email address</p>
                    <input className="p-[20px] text-gray-400 text-[16px] bg-gray-100 w-full rounded-lg mb-6" type="email" name="email" placeholder="Enter your email address" />
                    <p className=" text-[20px] font-semibold text-gray-700 mb-4">Password</p>
                    <input className="p-[20px] text-gray-400 text-[16px] bg-gray-100 w-full rounded-lg mb-8" type="password" name="password" placeholder="Enter your password" />
                    <input type="submit" name="submit" value="Login" className="btn w-full bg-gray-800 rounded-lg text-white h-[65px] hover:bg-gray-300 hover:text-black hover:font-semibold hover:border-2 hover:border-gray-700" />
                </div>
                <p className="mt-[30px] text-[16px] text-gray-600 font-semibold">Dont’t Have An Account ? <NavLink to="/register" className="text-red-700">Register</NavLink></p>
            </div>
        </div>
    );
};

Login.propTypes = {
    
};

export default Login;