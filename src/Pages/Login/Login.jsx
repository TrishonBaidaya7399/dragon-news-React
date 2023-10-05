// import PropTypes from 'prop-types';
import "./Login.css"
import Navbar from "../Shared/Navbar/Navbar";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    console.log("Location in the login page: ",location);
    const {signInUser} = useContext(AuthContext);
    const {signInWithGoogle} = useContext(AuthContext)
    const handleSignInWithGoogle= (e)=>{
        e.preventDefault();
        signInWithGoogle()
        .then(result=>{
        console.log("Log in with google successfully!", result.user);    
        navigate(location?.state ? location.state : "/")
        })
        .catch(error=>{
            console.error(error.message)
        })
    }
    const handleLogIn = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        signInUser(email, password)
        .then(result=>{
            console.log("Logged in Successfully!", result.user);
            navigate(location?.state ? location.state : "/")
        })
        .catch(error=>{
            console.error(error.message)
        })        
    }
    return (
        <div className="bg-gray-100 w-screen lg:ml-[-160px] h-full lg:pb-[70px] px-[100px] pt-12">
            <Navbar></Navbar>
            <div className="flex flex-col items-center w-[60%] bg-white mx-auto mb-12 mt-[70px] p-12 justify-center rounded-lg">
                <h1 className="pb-12 border-b-2 border-gray-200 w-full text-center mb-12 text-[35px] font-semibold text-gray-700">Login your account</h1>
                <form onSubmit={handleLogIn} className=" w-[90%]">
                    <p className=" text-[20px] font-semibold text-gray-700 mb-4">Email address</p>
                    <input className="p-[20px] text-gray-400 text-[16px] bg-gray-100 w-full rounded-lg mb-6" type="email" name="email" placeholder="Enter your email address" required />
                    <p className=" text-[20px] font-semibold text-gray-700 mb-4">Password</p>
                    <input className="p-[20px] text-gray-400 text-[16px] bg-gray-100 w-full rounded-lg mb-8" type="password" name="password" placeholder="Enter your password" required/>
                    <input type="submit" name="submit" value="Login" className="btn w-full bg-gray-800 rounded-lg text-white h-[65px] hover:bg-gray-300 hover:text-black hover:font-semibold hover:border-2 hover:border-gray-700" />
                </form>
            <div className='border-0 flex gap-8 mt-6'>
                <button onClick={handleSignInWithGoogle} className='text-[16px] mb-2 rounded-lg justify-center py-2 px-[50px] flex gap-1 items-center border-[3px] border-t-red-500 border-l-yellow-400 border-b-green-500 border-r-blue-600'><FcGoogle className=""/>Google</button>
                <button className='mb-2 px-[50px] text-[16px] rounded-lg justify-center py-2 flex gap-1 border-[3px] items-center border-gray-600'><BsGithub/>GitHub</button>
           </div>
                <p className="mt-[30px] text-[16px] text-gray-600 font-semibold">Dont’t Have An Account ? <NavLink to="/register" className="text-red-700">Register</NavLink></p>
            </div>
        </div>
    );
};

Login.propTypes = {
    
};

export default Login;