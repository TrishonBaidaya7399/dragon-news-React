// import PropTypes from 'prop-types';

import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";

const Home = () => {
    return (
        <div className="my-12">
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className=""><LeftSideNav/></div>
                <div className="border-2 border-gray-400 md:col-span-2"><h2 className="text-4xl ">News coming soon</h2></div>
                <div className=""><RightSideNav/></div>
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;