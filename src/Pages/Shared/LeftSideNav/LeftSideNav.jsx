import PropTypes from 'prop-types';

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
                    categories.map(category => <Link to={`/category/${category.id}`} key={category.id} className='pl-12 text-[20px]  text-gray-400 font-[500] flex flex-col gap-8'>{category.name}</Link>)
                }
            </div>
        </div>
        <div className="card-section">

        </div>
        </>
    );
};

LeftSideNav.propTypes = {
    category: PropTypes.node,
};

export default LeftSideNav;