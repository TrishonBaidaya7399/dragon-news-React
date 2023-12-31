// import PropTypes from 'prop-types';

// import { NavLink } from "react-router-dom";
import { useContext } from "react";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { Link } from "react-router-dom";

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const handleRegister = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email")
        const password = form.get("password")
        createUser(email, password)
        .then(result =>{
            console.log("Logged in!", result.user);
        })
        .catch(error=>{
            console.error(error.message)
        })
    }
    return (
        <div className="bg-gray-100 w-screen lg:ml-[-160px] h-full lg:pb-[70px] px-[100px] pt-12">
        <Navbar></Navbar>
        <div className="flex flex-col items-center w-[60%] bg-white mx-auto mb-[70px] mt-12 p-12 justify-center rounded-lg">
            <h1 className="pb-12 border-b-2 border-gray-200 w-full text-center mb-12 text-[35px] font-semibold text-gray-700">Register your account</h1>
            <form onSubmit={handleRegister} className=" w-[90%]">
                <p className=" text-[20px] font-semibold text-gray-700 mb-4">Your Name</p>
                <input className="p-[20px] text-gray-400 text-[16px] bg-gray-100 w-full rounded-lg mb-6" type="text" name="name" placeholder="Enter your name" required/>
                <p className=" text-[20px] font-semibold text-gray-700 mb-4">Photo URL</p>
                <input className="p-[20px] text-gray-400 text-[16px] bg-gray-100 w-full rounded-lg mb-6" type="text" name="url" placeholder="Enter your photo URL" required/>
                <p className=" text-[20px] font-semibold text-gray-700 mb-4">Email address</p>
                <input className="p-[20px] text-gray-400 text-[16px] bg-gray-100 w-full rounded-lg mb-6" type="email" name="email" placeholder="Enter your email address" required/>
                <p className=" text-[20px] font-semibold text-gray-700 mb-4">Password</p>
                <input className="p-[20px] text-gray-400 text-[16px] bg-gray-100 w-full rounded-lg mb-5" type="password" name="password" placeholder="Enter your password" required/>
                <div className="flex gap-2 mb-8 items-center">
                <input className="h-[16px] w-[16px]" type="checkbox" name="checked" id="checked" required/>
                <Link to="#" className="text-[16px] text-gray-500">Accept Term & Conditions</Link>
                </div>
                <input type="submit" name="submit" value="Register" className="btn w-full bg-gray-800 rounded-lg text-white h-[65px] hover:bg-gray-300 hover:text-black hover:font-semibold hover:border-2 hover:border-gray-700" />
            </form>
         
        </div>
    </div>
    );
};

Register.propTypes = {
    
};

export default Register;