import PropTypes from 'prop-types';
import { SlCalender } from 'react-icons/sl';
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [categories, setCategories] =useState([]);
    useEffect( () =>{
        fetch('/data/categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    console.log(categories);
    return (
        <>
        <h1 className='text-xl font-semibold text-gray-700 px-4 mb-[20px]'>All Categories</h1>
        {/* Categories section */}
        <div className="categories-section">
            <div className="bg-gray-200 text-center text-[20px] font-semibold mb-[30px] py-4 ">
                <h4>National News</h4>
            </div>
            <div>
                {
                    categories.map(category => <Link to={`/category/${category.id}`} key={category.id} className='pl-12 text-[20px]  text-gray-400 font-[500] flex flex-col gap-8 hover:text-[#D72050]'>{category.name}</Link>)
                }
            </div>
        </div>
        
        <div className="grid grid-rows-3 gap-6 mt-8">
            <div className="flex flex-col gap-5">
                <img className="rounded-lg w-full" src="../../../src/assets/images/editorsInsight1.png" alt="" />
                <h1 className="text-[20px] font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <p className="flex gap-2 items-center text-[16px] text-gray-500"><span className="font-semibold">Sports</span><SlCalender/>Jan 4, 2022</p>
            </div>
            <div className="flex flex-col gap-5">
                <img className="rounded-lg w-full" src="../../../src/assets/images/editorsInsight2.png" alt="" />
                <h1 className="text-[20px] font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <p className="flex gap-2 items-center text-[16px] text-gray-500"><span className="font-semibold">Sports</span><SlCalender/>Jan 4, 2022</p>
            </div>
            <div className="flex flex-col gap-5">
                <img className="rounded-lg w-full" src="../../../src/assets/images/editorsInsight3.png" alt="" />
                <h1 className="text-[20px] font-semibold">Bayern Slams Authorities Over Flight Delay to Club World Cup</h1>
                <p className="flex gap-2 items-center text-[16px] text-gray-500"><span className="font-semibold">Sports</span><SlCalender/>Jan 4, 2022</p>
            </div>
       </div>
        </>
    );
};

LeftSideNav.propTypes = {
    category: PropTypes.node,
};

export default LeftSideNav;