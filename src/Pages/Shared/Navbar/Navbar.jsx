// import PropTypes from 'prop-types';

import { Link, NavLink } from "react-router-dom";
import "./Navbar.css"
import userDefaultImg from "../../../assets/images/user.png"
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
const Navbar = () => {
    const {user, logOut} = useContext(AuthContext);
    const handleSignOut=()=>{
      logOut()
      .then(console.log("Logged out!"))
      .catch(error=>{
      console.error(error.message);  
      })
    }
    const links=
    <>
    <li>
        <NavLink className="text-[18px] text-gray-500 font-normal" to="/" activeClassName="active-link">Home</NavLink>
    </li>
    <li>
        <NavLink className="text-[18px] text-gray-500 font-normal" to="/about" activeClassName="active-link">About</NavLink>
    </li>
    <li>
        <NavLink className="text-[18px] text-gray-500 font-normal" to="/career" activeClassName="active-link">Career</NavLink>
    </li>
    </>
    return (
        <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links}
      </ul>
    </div>

  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  <div className="navbar-end">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar mr-2">
        <div className="w-10 rounded-full">
          <img src={userDefaultImg} />
        </div>
  </label>
  {
    user 
    ? <Link onClick={handleSignOut} className="btn bg-gray-700 text-white px-11 rounded-lg hover:bg-gray-300 hover:text-black hover:font-semibold hover:border-2 hover:border-gray-700">Log out</Link>
    : <Link to="/login" className="btn bg-gray-700 text-white px-11 rounded-lg hover:bg-gray-300 hover:text-black hover:font-semibold hover:border-2 hover:border-gray-700">Login</Link>
  }
  </div>
</div>
    );
};

Navbar.propTypes = {
    
};

export default Navbar;