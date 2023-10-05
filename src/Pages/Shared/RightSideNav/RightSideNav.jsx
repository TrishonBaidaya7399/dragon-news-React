// import PropTypes from 'prop-types';
import "./RighSideNav.css"
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from 'react-icons/bi';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import qZone1 from "../../../assets/images/qZone1.png"
import qZone2 from "../../../assets/images/qZone2.png"
import qZone3 from "../../../assets/images/qZone3.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const RightSideNav = () => {
    const navigate = useNavigate();
    const location = useLocation();
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
    return (
        <div>
           <div className='border-0 mb-8'>
            <h1 className='text-xl font-semibold text-gray-700 mb-4'>Login With</h1>
            <button onClick={handleSignInWithGoogle} className='text-[16px] mb-2 w-full rounded-lg justify-center py-2 flex gap-1 items-center border-[3px] border-t-red-500 border-l-yellow-400 border-b-green-500 border-r-blue-600'><FcGoogle/>Login With Google</button>
            <button className='mb-2 w-full text-[16px] rounded-lg justify-center py-2 flex gap-1 border-[3px] items-center border-gray-600'><BsGithub/>Login With GitHub</button>
           </div>
           <div className='border-0 mb-8'>
            <h1 className='text-xl font-semibold text-gray-700 mb-4'>Find Us On</h1>
            <div className="">
            <Link to="https://www.facebook.com/Trishon.Baidaya.Shontu?paipv=0&eav=AfYyIeyw8CgxMOoCvFJo8r7jyVByVdoqX9uf8H_ynZtBeb-hUpSGU_53Be4Zsl2tHHw&_rdr" 
            className='text-[16px] flex gap-1 items-center text-gray-600 pl-4 py-4 w-full border-2 border-gray-400 rounded-t-lg'><BiLogoFacebook className=' rounded-full bg-gray-200 p-1 text-[35px] text-blue-600'/>Facebook</Link>
            <Link to="https://twitter.com/BaidayaShontu" className='text-[16px] flex gap-1 items-center text-gray-600 pl-4 pl-4 py-4 w-full border-x-2 border-gray-400 '><BiLogoTwitter className='rounded-full bg-gray-200 p-1 text-[35px] text-blue-400'/>Twitter</Link>
            <Link to="https://www.instagram.com/trishonbaidaya/" className='text-[16px] pl-4 py-4 flex gap-1 items-center text-gray-600 border-2 border-gray-400 rounded-b-lg'><BiLogoInstagram className='rounded-full bg-gray-200 p-1 text-[35px] text-red-400'/>Instagram</Link>
            </div>
           </div>
           <div className='border-0 mb-8 bg-gray-100 flex flex-col gap-[20px] py-4 px-2 rounded-lg'>
           <h1 className='text-xl font-semibold text-gray-700 px-4'>Q Zone</h1>
            <img src={qZone1} alt="" />
            <img src={qZone2} alt="" />
            <img src={qZone3} alt="" />
           </div>
           <div className="bg-[#050118cc] rounded-sm flex flex-col items-center justify-center gap-4 text-center py-12 px-4">
            <h1 className="font-extrabold text-[30px] text-white">Create an Amazing Newspaper</h1>
            <p className="text-gray-300 text-[16px]">Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
            <NavLink to="/"><button className="mt-4 text-white text-[20px] text-semibold p-5 bg-[#D72050]">Learn More</button></NavLink>
           </div>
        </div>
    );
};

RightSideNav.propTypes = {
    
};

export default RightSideNav;