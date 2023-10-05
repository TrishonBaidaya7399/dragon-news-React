// import PropTypes from 'prop-types';

import { useLoaderData } from "react-router-dom";
import Header from "../Shared/Header/Header";
import LeftSideNav from "../Shared/LeftSideNav/LeftSideNav";
import Navbar from "../Shared/Navbar/Navbar";
import RightSideNav from "../Shared/RightSideNav/RightSideNav";
import BreakingNews from "./BreakingNews";
import NewsCard from "./NewsCard";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Home = () => {
    const {user} = useContext(AuthContext)
    const news = useLoaderData();
    console.log(news );
    return (
        <div className="my-12">
            <Header/>
            <BreakingNews/>
            <Navbar/>
            <h1 className="text-3xl font-bold text-center mt-[50px]">{user && `Welcome`}</h1>
            <h1 className="text-[20px] font-semibold mr-2 text-center">{user && `${user.displayName}`}</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-[50px]">
                <div className=""><LeftSideNav/></div>
                <div className="md:col-span-2">
                    {
                        news.map(aNews=> <NewsCard key={aNews._id} news={aNews}></NewsCard>)
                    }
                </div>
                <div className=""><RightSideNav/></div>
            </div>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;