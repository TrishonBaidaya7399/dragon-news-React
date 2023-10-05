// import PropTypes from 'prop-types';

import { useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import Navbar from "../Shared/Navbar/Navbar";

const News = () => {
    const {id} = useParams();
    return (
        <div className="mt-[50px]">
            <Header/>
            <div className="NavBar bg-gray-100 p-1 rounded-lg mt-8">
            <Navbar/>
            </div>
            <div className="grid grid-cols-4 mt-[30px]">
                <div className="col-span-3">
                    <h1 className="text-[20px] text-gray-700 font-semibold">Dragon News: {id}</h1>
                </div>
                <div>
                    <RightSideNav/>
                </div>
            </div>
        </div>
    );
};

News.propTypes = {
    
};

export default News;